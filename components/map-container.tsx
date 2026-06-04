'use client'

import { useEffect, useRef, useCallback } from 'react'
import L from 'leaflet'
import type { MapLocation, MapItem } from '@/data/map-data'

interface MapContainerProps {
  data: MapLocation[]
  currentLang: 'zh' | 'en'
  onItemClick: (item: MapItem) => void
}

// 中国边界范围
const CHINA_BOUNDS: L.LatLngBoundsExpression = [
  [3.86, 73.66],   // 西南角
  [53.55, 135.05], // 东北角
]

export default function MapContainer({
  data,
  currentLang,
  onItemClick,
}: MapContainerProps) {
  const mapRef = useRef<L.Map | null>(null)
  const tileLayerRef = useRef<L.TileLayer | null>(null)
  const markerLayerRef = useRef<L.LayerGroup | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      center: [35.0, 104.5],
      zoom: 4,
      minZoom: 4,
      maxZoom: 10,
      zoomControl: false,
      maxBounds: CHINA_BOUNDS,
      maxBoundsViscosity: 1.0, // 完全限制在边界内
    })

    mapRef.current = map
    markerLayerRef.current = L.layerGroup().addTo(map)

    // Add tile layer
    tileLayerRef.current = L.tileLayer(
      'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      { subdomains: ['1', '2', '3', '4'] }
    ).addTo(map)

    // Add China mask - 遮盖中国以外区域
    fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
      .then((res) => res.json())
      .then((geoRaw) => {
        const worldOuter: L.LatLngExpression[] = [
          [-90, -180],
          [-90, 180],
          [90, 180],
          [90, -180],
          [-90, -180],
        ]
        const chinaHoles: L.LatLngExpression[][] = []

        geoRaw.features.forEach(
          (feature: {
            geometry: {
              type: string
              coordinates: number[][][] | number[][][][]
            }
          }) => {
            if (feature.geometry.type === 'Polygon') {
              chinaHoles.push(
                (feature.geometry.coordinates as number[][][])[0].map(
                  (coord) => [coord[1], coord[0]] as L.LatLngExpression
                )
              )
            } else if (feature.geometry.type === 'MultiPolygon') {
              ;(feature.geometry.coordinates as number[][][][]).forEach(
                (poly) => {
                  chinaHoles.push(
                    poly[0].map(
                      (coord) => [coord[1], coord[0]] as L.LatLngExpression
                    )
                  )
                }
              )
            }
          }
        )

        // 使用背景色完全遮盖中国以外区域
        L.polygon([worldOuter, ...chinaHoles], {
          fillColor: '#f4f9f4',
          fillOpacity: 1,
          color: '#4ecdc4',
          weight: 2,
        }).addTo(map)
      })

    // Right click to get coordinates
    map.on('contextmenu', (e: L.LeafletMouseEvent) => {
      alert(`坐标：\nlat: ${e.latlng.lat.toFixed(4)}\nlng: ${e.latlng.lng.toFixed(4)}`)
    })

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  // Update tile layer when language changes
  useEffect(() => {
    if (!mapRef.current || !tileLayerRef.current) return

    mapRef.current.removeLayer(tileLayerRef.current)
    tileLayerRef.current = L.tileLayer(
      `https://webrd0{s}.is.autonavi.com/appmaptile?lang=${currentLang === 'zh' ? 'zh_cn' : 'en'}&size=1&scale=1&style=8&x={x}&y={y}&z={z}`,
      { subdomains: ['1', '2', '3', '4'] }
    ).addTo(mapRef.current)
  }, [currentLang])

  // Create popup content
  const createPopupContent = useCallback(
    (location: MapLocation) => {
      const cityName =
        currentLang === 'zh' ? location.cityName.zh : location.cityName.en

      let content = `<div class="popup-content" style="max-width: 280px;">
        <div style="font-size: 18px; font-weight: bold; color: #ff6b6b; margin-bottom: 10px; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 5px;">
          ${cityName}
        </div>
        <div style="max-height: 180px; overflow-y: auto; padding-right: 4px;">`

      location.items.forEach((item, index) => {
        const itemName = currentLang === 'zh' ? item.name.zh : item.name.en
        content += `<div 
          class="popup-link-row" 
          data-type="${item.type}"
          data-index="${index}"
          style="margin: 8px 0; display: block; color: #2c3e50; text-decoration: none; padding: 4px 8px; border-left: 3px solid #4ecdc4; background: rgba(255,255,255,0.5); cursor: pointer; transition: all 0.2s; font-size: 14px; line-height: 1.4;"
          onmouseover="this.style.background='#4ecdc4'; this.style.color='white'; this.style.transform='translateX(4px)';"
          onmouseout="this.style.background='rgba(255,255,255,0.5)'; this.style.color='#2c3e50'; this.style.transform='translateX(0)';"
        >
          ${itemName}
        </div>`
      })

      content += '</div></div>'
      return content
    },
    [currentLang]
  )

  // Update markers when data or language changes
  useEffect(() => {
    if (!mapRef.current || !markerLayerRef.current) return

    markerLayerRef.current.clearLayers()

    data.forEach((location) => {
      const marker = L.marker([location.lat, location.lng])
      const popup = L.popup().setContent(createPopupContent(location))

      marker.bindPopup(popup)

      marker.on('popupopen', () => {
        const popupEl = marker.getPopup()?.getElement()
        if (!popupEl) return

        const rows = popupEl.querySelectorAll('.popup-link-row')
        rows.forEach((row) => {
          row.addEventListener('click', () => {
            const index = parseInt(row.getAttribute('data-index') || '0', 10)
            const item = location.items[index]
            if (item) {
              onItemClick(item)
            }
          })
        })
      })

      marker.addTo(markerLayerRef.current!)
    })
  }, [data, currentLang, createPopupContent, onItemClick])

  // Invalidate size when container resizes
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      mapRef.current?.invalidateSize()
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return <div ref={containerRef} className="h-full w-full" />
}

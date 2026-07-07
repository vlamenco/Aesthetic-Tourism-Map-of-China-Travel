'use client'

import { useState, useRef, useEffect } from 'react'
import type { MapLocation } from '@/data/map-data'
import L from 'leaflet'

interface SpinWheelProps {
  mapInstance: L.Map | null
  data: MapLocation[]
  currentLang: 'zh' | 'en'
}

export default function SpinWheel({
  mapInstance,
  data,
  currentLang,
}: SpinWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false)
  const wheelRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState(0)

  const handleSpin = () => {
    if (isSpinning || !mapInstance || data.length === 0) return

    setIsSpinning(true)

    // 生成随机的旋转角度（至少旋转3圈 + 额外旋转）
    const spins = 3 + Math.random() * 2 // 3-5圈
    const randomIndex = Math.floor(Math.random() * data.length)
    const segmentAngle = 360 / data.length
    const targetAngle = randomIndex * segmentAngle

    // 总旋转角度 = 完整圈数 + 目标位置
    const totalRotation = spins * 360 + targetAngle
    const newRotation = rotation + totalRotation

    // 更新旋转角度
    setRotation(newRotation)

    // 动画结束后（2秒）定位到选中的城市
    setTimeout(() => {
      const selectedLocation = data[randomIndex]
      if (selectedLocation) {
        mapInstance.setView([selectedLocation.lat, selectedLocation.lng], 8)
      }
      setIsSpinning(false)
    }, 2000)
  }

  const segmentCount = data.length
  const segmentAngle = 360 / segmentCount

  return (
    <div className="absolute right-6 top-6 z-50 flex flex-col items-center gap-2">
      {/* 转盘容器 */}
       
        {/* 外圈装饰  className="relative h-24 w-24"*/}
        {/* className="absolute inset-0 rounded-full border-2 border-primary/30 shadow-lg"
          style={{ boxShadow: '0 0 12px rgba(78, 205, 196, 0.3)', }}   */}

        {/* 旋转的转盘 */}
        <div
          ref={wheelRef}
          className="absolute inset-0 transition-transform"
          style={{
            transform: `rotate(${rotation}deg)`,
            transitionDuration: isSpinning ? '2s' : '0s',
            transitionTimingFunction: isSpinning
              ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              : 'linear',
          }}
        >
          {/* 生成转盘的每个分段 */}
          {data.map((location, index) => {
            const angle = (index * segmentAngle * Math.PI) / 180
            const startAngle = angle
            const endAngle = angle + (segmentAngle * Math.PI) / 180
            const radius = 48 / 2

            // 计算扇形的路径
            const x1 = 48 + radius * Math.cos(startAngle)
            const y1 = 48 + radius * Math.sin(startAngle)
            const x2 = 48 + radius * Math.cos(endAngle)
            const y2 = 48 + radius * Math.sin(endAngle)

            const isLarge = segmentAngle > 180 ? 1 : 0
            const pathData = `
              M 48 48
              L ${x1} ${y1}
              A ${radius} ${radius} 0 ${isLarge} 1 ${x2} ${y2}
              Z
            `

            // 交替颜色
            const colors = [
              'rgba(78, 205, 196, 0.9)',
              'rgba(255, 107, 107, 0.9)',
              'rgba(255, 193, 7, 0.9)',
              'rgba(76, 175, 80, 0.9)',
              'rgba(156, 39, 176, 0.9)',
              'rgba(33, 150, 243, 0.9)',
              'rgba(255, 152, 0, 0.9)',
              'rgba(244, 67, 54, 0.9)',
            ]
            const color = colors[index % colors.length]

            return (
              <svg
                key={index}
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 96 96"
              >
                <path
                  d={pathData}
                  fill={color}
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            )
          })}
        </div>

        {/* 中心圆 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className={`h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-md flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 text-xs font-bold text-white ${
              isSpinning ? 'cursor-not-allowed opacity-70' : ''
            }`}
            onClick={handleSpin}
            disabled={isSpinning}
            style={{
              boxShadow: isSpinning
                ? '0 0 15px rgba(78, 205, 196, 0.6)'
                : '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            {currentLang === 'zh' ? '转' : 'Go Random'}
          </button>
        </div>

        {/* 指针 */}
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 transform">
          <div
            className="h-0 w-0 border-l-2 border-r-2 border-t-3"
            style={{
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderTopColor: '#ff6b6b',
            }}
          />
        </div>
      </div>


   
  )
}

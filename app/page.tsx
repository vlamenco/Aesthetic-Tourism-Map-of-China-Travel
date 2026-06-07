'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/header'
import SidePanel from '@/components/side-panel'
import { AESTHETIC_MAP_DATA, type MapItem } from '@/data/map-data'

const MapContainer = dynamic(() => import('@/components/map-container'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-background">
      <div className="text-lg text-muted-foreground">sing a song:这里的山路十八弯，这里水路九连环~~~(加载完毕ing)</div>
    </div>
  ),
})

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh')
  const [panelContent, setPanelContent] = useState<{
    type: 'text' | 'image' | null
    title: string
    content: string
  }>({ type: null, title: '', content: '' })

  const toggleLanguage = useCallback(() => {
    setCurrentLang((prev) => (prev === 'zh' ? 'en' : 'zh'))
    setPanelContent({ type: null, title: '', content: '' })
  }, [])

  const handleItemClick = useCallback(
    (item: MapItem) => {
      const name = currentLang === 'zh' ? item.name.zh : item.name.en

      if (item.type === 'link') {
        window.open(item.value as string, '_blank')
      } else if (item.type === 'image') {
        setPanelContent({
          type: 'image',
          title: name,
          content: item.value as string,
        })
      } else if (item.type === 'text') {
        const textValue = item.value as { zh: string; en: string }
        setPanelContent({
          type: 'text',
          title: name,
          content: currentLang === 'zh' ? textValue.zh : textValue.en,
        })
      }
    },
    [currentLang]
  )

  const closePanel = useCallback(() => {
    setPanelContent({ type: null, title: '', content: '' })
  }, [])

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header currentLang={currentLang} onToggleLanguage={toggleLanguage} />

      <main className="flex flex-1 overflow-hidden bg-background">
        {/* 地图区域 - 占3/5 */}
        <div className="h-full w-3/5">
          <MapContainer
            data={AESTHETIC_MAP_DATA}
            currentLang={currentLang}
            onItemClick={handleItemClick}
          />
        </div>

        {/* 右侧面板区域 - 占2/5 */}
        <SidePanel
          currentLang={currentLang}
          panelContent={panelContent}
          onClose={closePanel}
        />
      </main>
    </div>
  )
}

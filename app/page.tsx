'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/header'
import ReviewPanel from '@/components/review-panel'
import SocialMatrix from '@/components/social-matrix'
import { AESTHETIC_MAP_DATA, type MapItem } from '@/data/map-data'

const MapContainer = dynamic(() => import('@/components/map-container'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-background">
      <div className="text-lg text-muted-foreground">加载地图中...</div>
    </div>
  ),
})

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh')
  const [panelOpen, setPanelOpen] = useState(false)
  const [panelTitle, setPanelTitle] = useState('')
  const [panelContent, setPanelContent] = useState('')

  const toggleLanguage = useCallback(() => {
    setCurrentLang((prev) => (prev === 'zh' ? 'en' : 'zh'))
    setPanelOpen(false)
  }, [])

  const handleItemClick = useCallback(
    (item: MapItem) => {
      const name = currentLang === 'zh' ? item.name.zh : item.name.en

      if (item.type === 'link') {
        window.open(item.value as string, '_blank')
      } else if (item.type === 'image') {
        window.open(item.value as string, '_blank')
      } else if (item.type === 'text') {
        const textValue = item.value as { zh: string; en: string }
        setPanelTitle(name)
        setPanelContent(currentLang === 'zh' ? textValue.zh : textValue.en)
        setPanelOpen(true)
      }
    },
    [currentLang]
  )

  const closePanel = useCallback(() => {
    setPanelOpen(false)
  }, [])

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header currentLang={currentLang} onToggleLanguage={toggleLanguage} />

      <main className="relative flex h-[89vh] w-full">
        <div
          className="h-full transition-all duration-300"
          style={{ width: panelOpen ? '75%' : '100%' }}
        >
          <MapContainer
            data={AESTHETIC_MAP_DATA}
            currentLang={currentLang}
            onItemClick={handleItemClick}
          />
        </div>

        <SocialMatrix style={{ right: panelOpen ? '27%' : '20px' }} />

        {panelOpen && (
          <ReviewPanel
            title={panelTitle}
            content={panelContent}
            onClose={closePanel}
          />
        )}
      </main>
    </div>
  )
}

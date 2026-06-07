'use client'

import { useState } from 'react'

interface HeaderProps {
  currentLang: 'zh' | 'en'
  onToggleLanguage: () => void
}

export default function Header({ currentLang, onToggleLanguage }: HeaderProps) {
  const [emailRevealed, setEmailRevealed] = useState(false)

  const revealEmail = () => {
    setEmailRevealed(true)
  }

  return (
    <header className="flex h-[11vh] items-center justify-between border-b-2 border-accent bg-white/80 px-10 backdrop-blur-sm">
      <h1 className="relative text-2xl font-bold tracking-wider text-primary">
        {currentLang === 'zh' ? (
          <>
            INFJ+INFP的中国旅游审美地图
            <br />
            <span className="text-sm font-normal text-foreground/70">
              Aesthetic Tourism Map of China for INFJ+INFP
            </span>
          </>
        ) : (
          <>
            Aesthetic Tourism Map of China for INFJ+INFP
            <br />
            <span className="text-sm font-normal text-foreground/70">
              INFJ+INFP的中国旅游审美地图
            </span>
          </>
        )}
        <span className="absolute -bottom-1 left-0 h-[3px] w-3/5 bg-accent" />
      </h1>

      <div className="flex items-center gap-4 rounded border border-accent bg-white/90 px-4 py-2 text-sm">
        <button
          onClick={onToggleLanguage}
          className="border border-primary bg-transparent px-3 py-1 text-sm text-primary transition-all hover:bg-primary hover:text-white"
        >
          EN / 中文
        </button>

        <span className="font-bold text-foreground">
          {currentLang === 'zh' ? '商务合作 → 邮箱:' : 'Business → Email:'}
        </span>

        {!emailRevealed ? (
          <div
            onClick={revealEmail}
            className="inline-block h-[18px] w-[90px] cursor-pointer align-middle"
            style={{
              backgroundImage: `linear-gradient(45deg, #ccc 25%, transparent 25%), 
                               linear-gradient(-45deg, #ccc 25%, transparent 25%), 
                               linear-gradient(45deg, transparent 75%, #ccc 75%), 
                               linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
              backgroundSize: '8px 8px',
            }}
          />
        ) : (
          <span className="font-bold text-primary">vlamenco@foxmail.com</span>
        )}
      </div>
    </header>
  )
}

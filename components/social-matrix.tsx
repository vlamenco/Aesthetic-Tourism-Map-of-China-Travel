'use client'

import type { CSSProperties } from 'react'

interface SocialMatrixProps {
  style?: CSSProperties
}

export default function SocialMatrix({ style }: SocialMatrixProps) {
  return (
    <div
      className="absolute bottom-5 z-50 flex gap-4 border-[1.5px] border-accent bg-white/85 px-5 py-3 shadow-[4px_4px_0px_rgba(78,205,196,0.3)] transition-all duration-300"
      style={{ right: '20px', ...style }}
    >
      <a
        className="cursor-pointer text-[22px] text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
        href="#"
        target="_blank"
        title="微信公众号"
      >
        <i className="fab fa-weixin" />
      </a>
      <a
        className="cursor-pointer text-[22px] text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
        href="#"
        target="_blank"
        title="Bilibili"
      >
        <i className="fa-solid fa-tv" />
      </a>
      <a
        className="cursor-pointer text-[22px] text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
        href="#"
        target="_blank"
        title="微博"
      >
        <i className="fab fa-weibo" />
      </a>
      <a
        className="cursor-pointer text-[22px] text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
        href="#"
        target="_blank"
        title="小红书"
      >
        <i className="fa-solid fa-book-bookmark" />
      </a>
    </div>
  )
}

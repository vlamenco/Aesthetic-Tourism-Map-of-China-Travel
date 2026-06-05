'use client'

import Image from 'next/image'

interface SidePanelProps {
  currentLang: 'zh' | 'en'
  panelContent: {
    type: 'text' | 'image' | null
    title: string
    content: string
  }
  onClose: () => void
}

export default function SidePanel({
  currentLang,
  panelContent,
  onClose,
}: SidePanelProps) {
  return (
    <div className="flex h-full w-1/4 flex-col border-l-2 border-accent bg-white/95">
      {/* 内容展示区域 */}
      <div className="flex-1 overflow-y-auto">
        {panelContent.type && (
          <div className="p-6">
            <button
              onClick={onClose}
              className="float-right cursor-pointer rounded px-2 py-1 font-bold text-accent transition-colors hover:bg-accent hover:text-white"
            >
              {currentLang === 'zh' ? '关闭' : 'Close'}
            </button>

            <h2 className="mb-4 border-b border-dashed border-accent pb-3 text-xl font-bold text-primary">
              {panelContent.title}
            </h2>

            {panelContent.type === 'text' ? (
              <div className="whitespace-pre-wrap leading-relaxed text-foreground">
                {panelContent.content}
              </div>
            ) : (
              <div className="relative w-full">
                <Image
                  src={panelContent.content}
                  alt={panelContent.title}
                  width={400}
                  height={300}
                  className="h-auto w-full rounded-lg object-cover shadow-md"
                  unoptimized
                />
              </div>
            )}
          </div>
        )}

        {!panelContent.type && (
          <div className="flex h-full items-center justify-center p-6 text-center text-muted-foreground">
            <p>{currentLang === 'zh' ? '点左边坐标~' : 'Click a location on the map to view details'}</p>
          </div>
        )}
      </div>

      {/* 社交媒体区域 - 固定在底部 */}
      <div className="border-t border-accent/30 bg-white/90 p-4">
        <p className="mb-3 text-center text-sm text-muted-foreground">
          {currentLang === 'zh' ? '找我玩' : 'Me in Media'}
        </p>
        <div className="flex justify-center gap-6">
          <a
            className="cursor-pointer text-2xl text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
            href="https://mp.weixin.qq.com/s/1ZIiS4miM909G2bAhD2rZQ"
            target="_blank"
            title="Wechat"
          >
            <i className="fab fa-weixin" />
          </a>
          <a
            className="cursor-pointer text-2xl text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
            href="https://www.bilibili.com/video/BV1rxLuznEEB/?spm_id_from=333.1387.homepage.video_card.click"
            target="_blank"
            title="Bilibili"
          >
            <i className="fa-solid fa-tv" />
          </a>
          <a
            className="cursor-pointer text-2xl text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
            href="https://weibo.com/u/9028734139"
            target="_blank"
            title="Weibo"
          >
            <i className="fab fa-weibo" />
          </a>
          <a
            className="cursor-pointer text-2xl text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
            href="https://www.xiaohongshu.com/user/profile/68e75447000000003201e50d"
            target="_blank"
            title="Red book"
          >
            <i className="fa-solid fa-book-bookmark" />
          </a>
        </div>
      </div>
    </div>
  )
}

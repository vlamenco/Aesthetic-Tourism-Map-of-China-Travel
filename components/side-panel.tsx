'use client'

import Image from 'next/image'

interface SidePanelProps {
  currentLang: 'zh' | 'en'
  panelContent: {
    type: 'text' | 'image' | null
    title: string
    content: string
    description?: string  // 👈 新增：图片描述
    links?: Array<{ text: string; url: string }>  // 👈 新增
  }
  onClose: () => void
}

export default function SidePanel({
  currentLang,
  panelContent,
  onClose,
}: SidePanelProps) {
  return (
    <div className="flex h-full w-2/5 flex-col border-l-2 border-accent bg-white/95">
      {/* 内容展示区域 */}
      <div className="flex-1 overflow-y-auto bg-white/95">
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
              <div>
                <div className="whitespace-pre-wrap leading-relaxed text-foreground">
                  {panelContent.content}
                </div>

                {/* 显示相关链接 */}
                {panelContent.links && panelContent.links.length > 0 && (
                  <div className="mt-4 border-t border-accent/20 pt-4">
                    <p className="mb-2 text-sm font-semibold text-accent">
                      {currentLang === 'zh' ? '相关链接：' : 'Related Links:'}
                    </p>
                    <ul className="space-y-2">
                      {panelContent.links.map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-accent transition-colors hover:underline"
                          >
                            <i className="fa-solid fa-link text-xs" />
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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

                {/* 图片文字介绍 */}
                {panelContent.description && (
                  <p className="mt-4 whitespace-pre-wrap leading-relaxed text-foreground">
                    {panelContent.description}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

      {!panelContent.type && (
  <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground space-y-8">  {/* space-y-2 */}  
    <p>
      {currentLang === 'zh'? '欢迎来到INFJ与INFP的小宇宙，探索中国的大好河山，人文风情👈。'
        : 'Welcome to the little universe of INFJs and INFPs, where we explore China’s magnificent landscapes and profound cultural customs👈.'}
    </p>

    <p className="text-sm text-green-400 mt-8">
      {currentLang === 'zh'? '注： A➡景点🌄；B➡食物🍱；C➡人物🤝 D➡礼物🎁' : 'Notice： A➡Tourist spot🌄；B➡food🍱；C➡Celebrity🤝 D➡Gift🎁'}
    </p>
  </div>
)}
      </div>

      {/* 社交媒体区域 - 固定在底部 */}
      <div className="border-t border-accent/30 bg-white/90 px-6 py-4 flex-shrink-0">
        <p className="mb-3 text-center text-sm text-muted-foreground">
          {currentLang === 'zh' ? '找我玩' : 'Come play with me'}
        </p>
        <div className="flex justify-center gap-8">
          <a
            className="cursor-pointer text-2xl text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
            href="https://mp.weixin.qq.com/s/1ZIiS4miM909G2bAhD2rZQ"
            target="_blank"
            rel="noopener noreferrer"
            title="Wechat"
          >
            <i className="fab fa-weixin" />
          </a>
          <a
            className="cursor-pointer text-2xl text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
            href="https://www.bilibili.com/video/BV1rxLuznEEB/?spm_id_from=333.1387.homepage.video_card.click"
            target="_blank"
            rel="noopener noreferrer"
            title="Bilibili"
          >
            <i className="fa-solid fa-tv" />
          </a>
          <a
            className="cursor-pointer text-2xl text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
            href="https://weibo.com/u/9028734139"
            target="_blank"
            rel="noopener noreferrer"
            title="Weibo"
          >
            <i className="fab fa-weibo" />
          </a>
          <a
            className="cursor-pointer text-2xl text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
            href="https://www.xiaohongshu.com/user/profile/68e75447000000003201e50d"
            target="_blank"
            rel="noopener noreferrer"
            title="Xiaohongshu"
          >
            <i className="fa-solid fa-book-bookmark" />
          </a>
          <a
            className="cursor-pointer text-2xl text-primary no-underline transition-all hover:-translate-y-1 hover:scale-110 hover:text-accent"
            href="https://www.douban.com/people/vlamenco19/?_i=0824432UG0rZrk"
            target="_blank"
            rel="noopener noreferrer"
            title="Douban"
          >
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
    </div>
  )
}

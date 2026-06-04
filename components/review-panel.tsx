'use client'

interface ReviewPanelProps {
  title: string
  content: string
  onClose: () => void
}

export default function ReviewPanel({
  title,
  content,
  onClose,
}: ReviewPanelProps) {
  return (
    <div className="panel-animate absolute right-0 top-0 z-50 h-full w-1/4 overflow-y-auto border-l-2 border-accent bg-white/95 p-8 shadow-[-5px_0_20px_rgba(0,0,0,0.05)]">
      <button
        onClick={onClose}
        className="float-right cursor-pointer font-bold text-accent hover:text-primary"
      >
        ✕ 关闭
      </button>

      <h2 className="mb-4 border-b border-dashed border-accent pb-3 text-xl font-bold text-primary">
        {title}
      </h2>

      <div className="whitespace-pre-wrap leading-relaxed text-foreground">
        {content}
      </div>
    </div>
  )
}

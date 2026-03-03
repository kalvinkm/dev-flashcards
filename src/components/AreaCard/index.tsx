import './index.css'

type AreaCardProps = {
  title: string
  onDoubleClick?: () => void
  onDelete?: () => void
}

export function AreaCard({ title, onDoubleClick, onDelete }: AreaCardProps) {
  return (
    <div
      className="area-card"
      onClick={onDoubleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onDoubleClick?.()
        }
      }}
    >
      {onDelete && (
        <button
          type="button"
          className="area-card-delete"
          aria-label="Remover tópico"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
        >
          ×
        </button>
      )}

      <span className="area-card-title">{title}</span>
    </div>
  )
}

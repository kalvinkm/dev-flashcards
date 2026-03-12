import './index.css'

type AreaCardProps = {
  title: string
  heraldic?: string
  topic?: string
  onDoubleClick?: () => void
  onDelete?: () => void
}

export function AreaCard({
  title,
  heraldic,
  topic,
  onDoubleClick,
  onDelete,
}: AreaCardProps) {
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

      <div className="area-card-content">
        <span className="area-card-title">{title}</span>

        {heraldic && (
          <img
            src={heraldic}
            alt={`Heráldica de ${title}`}
            className="area-card-heraldic"
          />
        )}

        {topic && <span className="area-card-topic">{topic}</span>}
      </div>
    </div>
  )
}

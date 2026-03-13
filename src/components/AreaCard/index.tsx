import { useState } from 'react'
import './index.css'

type AreaCardProps = {
  title: string
  heraldic?: string
  topic?: string
  back?: {
    keyQuestion: string
    characteristics: string[]
    examples: string[]
  }
  onDoubleClick?: () => void
  onDelete?: () => void
}

export function AreaCard({
  title,
  heraldic,
  topic,
  back,
  /* onDoubleClick, */
  onDelete,
}: AreaCardProps) {
  const [flipped, setFlipped] = useState(false)

  function handleFlip() {
    setFlipped((prev) => !prev)
  }

  return (
    <div
      className={`area-card ${flipped ? 'flipped' : ''}`}
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleFlip()
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

      <div className="area-card-inner">
        {/* FRONT */}
        <div className="area-card-front">
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

        {/* BACK */}
        <div className="area-card-back">
          {back && (
            <div className="area-card-back-content">
              <h4 className="area-card-question">{back.keyQuestion}</h4>

              <div className="area-card-section">
                <strong>Características</strong>
                <ul>
                  {back.characteristics.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="area-card-section">
                <strong>Exemplos</strong>
                <ul>
                  {back.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

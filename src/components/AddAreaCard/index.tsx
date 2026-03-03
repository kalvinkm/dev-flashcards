import './index.css'

type AddAreaCardProps = {
  onClick: () => void
}

export function AddAreaCard({ onClick }: AddAreaCardProps) {
  return (
    <button type="button" className="addition-card" onClick={onClick}>
      <span className="addition-card-title">Adicione um tópico</span>
      <span className="addition-card-plus-sign">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3L12 21M3 12L21 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </span>
    </button>
  )
}

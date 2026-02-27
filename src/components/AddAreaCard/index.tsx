import './index.css'

type AddAreaCardProps = {
  onClick: () => void
}

export function AddAreaCard({ onClick }: AddAreaCardProps) {
  return (
    <div className="addition-card" onClick={onClick}>
      <span className="addition-card-title">Adicione um tópico</span>
      <span className="addition-card-plus-sign">+</span>
    </div>
  )
}

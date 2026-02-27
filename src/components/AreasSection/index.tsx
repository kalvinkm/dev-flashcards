import { AddAreaCard } from '../AddAreaCard'
import './index.css'

export function AreasSection() {
  return (
    <section>
      <h3>Área de Tópicos</h3>

      <div className="areas-section-container">
        <AddAreaCard onClick={() => console.log('CLICOU')} />
      </div>
    </section>
  )
}

import { useState } from 'react'
// import { AddAreaCard } from '../AddAreaCard'
import { AreaCard } from '../AreaCard'
// import { EditableAreaCard } from '../EditableAreaCard'
import data from '../../data/studyData.json'
import './index.css'

type AreaCardData = {
  id: string
  title: string
}

type Area = {
  id: string
  title: string
  heraldic?: string | null
  cards: AreaCardData[]
}

const heraldics = import.meta.glob('../../assets/images/heraldics/*.png', {
  eager: true,
})

const heraldicMap = Object.fromEntries(
  Object.entries(heraldics).map(([path, module]) => {
    const fileName = path.split('/').pop()?.replace('.png', '')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return [fileName, (module as any).default]
  }),
)

const initialAreas: Area[] = data.areas.map((area) => ({
  id: area.id,
  title: area.title,
  heraldic: area.heraldic ? heraldicMap[area.heraldic] : null,
  cards: area.cards ?? [],
}))

export function AreasSection() {
  const [areas, setAreas] = useState<Area[]>(initialAreas)
  const [editingId, setEditingId] = useState<string | null>(null)
  // const [isCreating, setIsCreating] = useState(false)
  // const [newTitle, setNewTitle] = useState('')

  // function handleCreate() {
  //   const trimmedTitle = newTitle.trim()
  //   if (!trimmedTitle) return

  //   const newArea: Area = {
  //     id: crypto.randomUUID(),
  //     title: trimmedTitle,
  //     heraldic: null,
  //     cards: [],
  //   }

  //   setAreas((prev) => [...prev, newArea])
  //   setNewTitle('')
  //   setIsCreating(false)
  // }

  // function handleUpdate(id: string, newTitle: string) {
  //   const trimmedTitle = newTitle.trim()
  //   if (!trimmedTitle) return

  //   setAreas((prev) =>
  //     prev.map((area) =>
  //       area.id === id ? { ...area, title: trimmedTitle } : area,
  //     ),
  //   )

  //   setEditingId(null)
  // }

  function handleDelete(id: string) {
    setAreas((prev) => prev.filter((area) => area.id !== id))

    if (editingId === id) {
      setEditingId(null)
    }
  }

  console.log(
    'Data = ',
    data.areas.map((area) => area),
  )

  return (
    <section className="areas-section-content">
      <h3 className="areas-section-title">Área de Tópicos</h3>

      <div className="areas-section-container">
        {areas.flatMap((area) =>
          area.cards.map((card) => (
            <AreaCard
              key={`${area.id}-${card.id}`}
              title={area.title}
              heraldic={area.heraldic ?? undefined}
              topic={card.title}
              onDoubleClick={() => setEditingId(area.id)}
              onDelete={() => handleDelete(area.id)}
            />
          )),
        )}
        {/* {isCreating ? (
          <div className="areas-section-creating">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleCreate()
                }

                if (e.key === 'Escape') {
                  setIsCreating(false)
                  setNewTitle('')
                }
              }}
              placeholder="Nome do tópico"
              autoFocus
            />
          </div>
        ) : (
          <AddAreaCard onClick={() => setIsCreating(true)} />
        )} */}
      </div>
    </section>
  )
}

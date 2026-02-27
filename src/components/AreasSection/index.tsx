import { useState } from 'react'
import { AddAreaCard } from '../AddAreaCard'
import { AreaCard } from '../AreaCard'
import { EditableAreaCard } from '../EditableAreaCard'
import './index.css'

type Area = {
  id: string
  title: string
}

export function AreasSection() {
  const [areas, setAreas] = useState<Area[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [newTitle, setNewTitle] = useState('')

  function handleCreate() {
    if (!newTitle.trim()) return

    const newArea: Area = {
      id: crypto.randomUUID(),
      title: newTitle,
    }

    setAreas((prev) => [...prev, newArea])
    setNewTitle('')
    setIsCreating(false)
  }

  function handleUpdate(id: string, newTitle: string) {
    if (!newTitle.trim()) return

    setAreas((prev) =>
      prev.map((area) =>
        area.id === id ? { ...area, title: newTitle.trim() } : area,
      ),
    )

    setEditingId(null)
  }

  function handleDelete(id: string) {
    setAreas((prev) => prev.filter((area) => area.id !== id))

    if (editingId === id) {
      setEditingId(null)
    }
  }

  return (
    <section>
      <h3>Área de Tópicos</h3>

      <div className="areas-section-container">
        {areas.map((area) =>
          editingId === area.id ? (
            <EditableAreaCard
              key={area.id}
              initialValue={area.title}
              onSave={(newTitle) => handleUpdate(area.id, newTitle)}
              onCancel={() => setEditingId(null)}
            />
          ) : (
            <AreaCard
              key={area.id}
              title={area.title}
              onDoubleClick={() => setEditingId(area.id)}
              onDelete={() => handleDelete(area.id)}
            />
          ),
        )}
        {isCreating ? (
          <div className="areas-section-creating">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreate()
              }}
              placeholder="Nome do tópico"
              autoFocus
            />
          </div>
        ) : (
          <AddAreaCard onClick={() => setIsCreating(true)} />
        )}
      </div>
    </section>
  )
}

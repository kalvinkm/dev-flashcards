import { useState } from 'react'
import './index.css'

type EditableAreaCardProps = {
  initialValue: string
  onSave: (value: string) => void
  onCancel: () => void
}

export function EditableAreaCard({
  initialValue,
  onSave,
  onCancel,
}: EditableAreaCardProps) {
  const [value, setValue] = useState(initialValue)

  function handleSave() {
    const trimmed = value.trim()
    if (!trimmed) return
    onSave(trimmed)
  }

  return (
    <div className="editable-area-card">
      <input
        className="editable-area-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSave()
          if (e.key === 'Escape') onCancel()
        }}
        onBlur={handleSave}
        autoFocus
      />
    </div>
  )
}

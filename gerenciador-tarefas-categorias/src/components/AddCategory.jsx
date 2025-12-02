import React, { useState } from 'react'
import { useTasks } from '../context/TaskContext'

export function AddCategory() {
  const { addCategory } = useTasks()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addCategory(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form-label">
        Nome da categoria
        <input
          type="text"
          value={name}
          placeholder="Ex: Trabalho, Estudos, Casa..."
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
      </label>
      <button type="submit" className="button">
        Adicionar Categoria
      </button>
    </form>
  )
}

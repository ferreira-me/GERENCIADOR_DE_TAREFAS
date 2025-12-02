import React, { useState } from 'react'
import { useTasks } from '../context/TaskContext'

export function AddTask() {
  const { categories, addTask } = useTasks()
  const [title, setTitle] = useState('')
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(Number(categoryId), title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form-label">
        Categoria
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="input"
        >
          {categories.length === 0 && (
            <option value="">Crie uma categoria primeiro</option>
          )}
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label className="form-label">
        Tarefa
        <input
          type="text"
          value={title}
          placeholder="Descreva a tarefa..."
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
      </label>

      <button type="submit" className="button">
        Adicionar Tarefa
      </button>
    </form>
  )
}

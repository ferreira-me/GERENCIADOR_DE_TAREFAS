import React from 'react'
import { useTasks } from '../context/TaskContext'

export function CategoryList() {
  const { categories, tasks } = useTasks()

  if (categories.length === 0) {
    return <p>Nenhuma categoria criada ainda.</p>
  }

  return (
    <ul className="list">
      {categories.map((category) => {
        const count = tasks.filter((t) => t.categoryId === category.id).length
        return (
          <li key={category.id} className="list-item">
            <span className="category-name">{category.name}</span>
            <span className="badge">
              {count} tarefa{count !== 1 ? 's' : ''}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

import React from 'react'
import { useTasks } from '../context/TaskContext'

export function TaskList() {
  const { categories, tasks, toggleTaskCompleted } = useTasks()

  if (tasks.length === 0) {
    return <p>Nenhuma tarefa adicionada ainda.</p>
  }

  return (
    <div className="task-groups">
      {categories.map((category) => {
        const categoryTasks = tasks.filter((t) => t.categoryId === category.id)
        if (categoryTasks.length === 0) return null

        return (
          <div key={category.id} className="task-group">
            <h3>{category.name}</h3>
            <ul className="list">
              {categoryTasks.map((task) => (
                <li key={task.id} className="list-item task-item">
                  <label className={task.completed ? 'task-completed' : ''}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompleted(task.id)}
                    />
                    <span className="task-title">{task.title}</span>
                    <span className="task-status">
                      {task.completed ? 'Concluída' : 'Pendente'}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

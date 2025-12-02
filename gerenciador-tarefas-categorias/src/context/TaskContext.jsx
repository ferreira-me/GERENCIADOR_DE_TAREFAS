import React, { createContext, useContext, useState, useMemo } from 'react'

const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Trabalho' },
    { id: 2, name: 'Estudos' },
    { id: 3, name: 'Pessoal' },
  ])

  const [tasks, setTasks] = useState([
    { id: 1, categoryId: 1, title: 'Responder e-mails', completed: false },
    { id: 2, categoryId: 2, title: 'Estudar React Context', completed: true },
    { id: 3, categoryId: 3, title: 'Fazer compras do mercado', completed: false },
  ])

  const addCategory = (name) => {
    if (!name.trim()) return
    const exists = categories.some(
      (c) => c.name.toLowerCase() === name.trim().toLowerCase()
    )
    if (exists) return

    setCategories((prev) => [
      ...prev,
      { id: Date.now(), name: name.trim() },
    ])
  }

  const addTask = (categoryId, title) => {
    if (!title.trim() || !categoryId) return
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        categoryId,
        title: title.trim(),
        completed: false,
      },
    ])
  }

  const toggleTaskCompleted = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const value = useMemo(
    () => ({
      categories,
      tasks,
      addCategory,
      addTask,
      toggleTaskCompleted,
    }),
    [categories, tasks]
  )

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export function useTasks() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks deve ser usado dentro de um TaskProvider')
  }
  return context
}

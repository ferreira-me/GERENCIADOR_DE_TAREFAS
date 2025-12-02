import React from 'react'
import { AddCategory } from './components/AddCategory'
import { AddTask } from './components/AddTask'
import { CategoryList } from './components/CategoryList'
import { TaskList } from './components/TaskList'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Gerenciador de Tarefas por Categoria</h1>
        <p className="subtitle">
          Organize suas atividades por áreas da sua vida como Trabalho, Estudos e Pessoal.
        </p>
      </header>

      <main className="app-main">
        <section className="panel">
          <h2>Nova Categoria</h2>
          <AddCategory />
        </section>

        <section className="panel">
          <h2>Nova Tarefa</h2>
          <AddTask />
        </section>

        <section className="panel">
          <h2>Categorias</h2>
          <CategoryList />
        </section>

        <section className="panel">
          <h2>Tarefas por Categoria</h2>
          <TaskList />
        </section>
      </main>
    </div>
  )
}

export default App

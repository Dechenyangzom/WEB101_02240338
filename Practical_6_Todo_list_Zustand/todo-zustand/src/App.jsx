import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import useTodoStore from './store/todoStore'

function App() {
  const todoCount = useTodoStore((state) => state.todos.length)
  const completedCount = useTodoStore(
    (state) => state.todos.filter((todo) => todo.completed).length
  )

  return (
    <div className="App" style={{ maxWidth: '560px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
      <h1>Todo List with Zustand</h1>

      <TodoInput />

      <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
        <p>Total todos: <strong>{todoCount}</strong></p>
        <p>Completed: <strong>{completedCount}</strong></p>
        <p>Remaining: <strong>{todoCount - completedCount}</strong></p>
      </div>

      <TodoList />
    </div>
  )
}

export default App

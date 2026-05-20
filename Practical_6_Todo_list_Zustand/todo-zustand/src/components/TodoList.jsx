import React from 'react'
import useTodoStore from '../store/todoStore'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useTodoStore((state) => state.todos)
  const clearCompleted = useTodoStore((state) => state.clearCompleted)

  return (
    <div>
      <ul style={{ padding: 0 }}>
        {todos.length === 0 ? (
          <p style={{ color: '#aaa', textAlign: 'center', padding: '1rem' }}>No todos yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </ul>

      {todos.length > 0 && (
        <button
          onClick={clearCompleted}
          style={{ marginTop: '8px', padding: '6px 14px', borderRadius: '6px', border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Clear Completed
        </button>
      )}
    </div>
  )
}

export default TodoList

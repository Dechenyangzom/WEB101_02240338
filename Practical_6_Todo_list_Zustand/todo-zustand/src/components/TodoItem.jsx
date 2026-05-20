import React from 'react'
import useTodoStore from '../store/todoStore'

function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const removeTodo = useTodoStore((state) => state.removeTodo)

  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', border: '1px solid #e0e0e0', borderRadius: '6px', marginBottom: '6px', listStyle: 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#aaa' : 'inherit' }}>
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        style={{ padding: '4px 10px', borderRadius: '4px', border: '1px solid #f88', background: 'none', color: '#c33', cursor: 'pointer' }}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem

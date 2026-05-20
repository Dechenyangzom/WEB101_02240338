import React, { useState } from 'react'
import useTodoStore from '../store/todoStore'

function TodoInput() {
  const [text, setText] = useState('')
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        style={{ flex: 1, padding: '8px 12px', fontSize: '14px', borderRadius: '6px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #ccc', cursor: 'pointer' }}>
        Add
      </button>
    </form>
  )
}

export default TodoInput

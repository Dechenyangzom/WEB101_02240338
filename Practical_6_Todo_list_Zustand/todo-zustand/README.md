# Todo List with Zustand

A simple React Todo List application built with Vite and Zustand for state management. This practical demonstrates how to manage shared state across components, persist data using Zustand middleware, and build a responsive todo app UI.

## Features

- Add new todos
- Toggle todos as completed
- Delete individual todos
- Clear all completed todos
- Persist todos in localStorage using Zustand persist middleware
- Display todo counts: total, completed, and remaining

## Project Structure

- `index.html` — Vite application entry point
- `package.json` — dependencies and scripts
- `src/main.jsx` — React DOM rendering setup
- `src/App.jsx` — top-level application and counts display
- `src/components/TodoInput.jsx` — add todo form
- `src/components/TodoList.jsx` — todo list display and clear button
- `src/components/TodoItem.jsx` — individual todo item with toggle and delete
- `src/store/todoStore.js` — Zustand store with todos state and actions

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal to view the app.

## Notes

- The app uses `zustand` for lightweight global state management.
- The state is persisted under the `todo-storage` key in browser localStorage.
- This project is built with Vite and React 18.

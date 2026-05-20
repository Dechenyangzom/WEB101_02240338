# Practical Reflection

## What I built

I created a React todo list application using Vite and Zustand. The app allows users to add todos, toggle completion status, delete todos, and clear completed items. It also tracks total, completed, and remaining todos.

## What I learned

- Zustand provides a clean, minimal API for state management compared to more complex libraries.
- Persist middleware makes it easy to save and restore state from localStorage.
- Keeping state logic in a centralized store simplifies component code and improves reusability.
- React component composition works well for splitting UI into input, list, and item components.

## Challenges

- Structuring the global state so each action remains simple and focused.
- Ensuring the persisted state loads correctly without extra configuration.
- Styling the app with inline styles to keep the project small and self-contained.

## Improvements I would make next

- Add editing for existing todos.
- Add filtering by status (all, active, completed).
- Add better styling and responsiveness.
- Add unit tests for store actions and component behavior.

## Conclusion

This practical helped reinforce how to use Zustand for state management in React and how to persist state across browser sessions. The result is a functional todo app with a lightweight architecture and easy-to-follow component structure.

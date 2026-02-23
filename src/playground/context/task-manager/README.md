# Reducer + Context Task Manager

A small task board application built to practice advanced React state management patterns using:

- `useReducer`
- `Context API`
<!-- - `useMemo`
- `React.memo` -->
- Tailwind CSS

This project exists inside my React Playground as a focused architecture demo — not a production app.

---

## 🎯 Purpose

This mini project demonstrates:

- Centralized state transitions using `useReducer`
- Sharing global state via the Context API
- Separating state logic from UI components
- Preventing unnecessary re-renders
- Extracting reusable logic patterns

It serves as a hands-on reinforcement of React patterns commonly discussed in interviews and real-world applications.

---

## 🧠 Concepts Practiced

### 1. useReducer

State transitions are handled via action types:

- `ADD_TASK`
- `TOGGLE_TASK`
- `DELETE_TASK`
- `SET_FILTER`

This provides predictable, structured updates and avoids scattered `useState` calls.

---

### 2. Context API

State and dispatch are shared across components without prop drilling.

Two approaches explored:

- ✅ Single context `{ state, dispatch }`
- TODO: 🔍 Split state/dispatch contexts (performance-focused pattern) - this feature still needs to be worked on

---

### 3. Memoization

Performance concepts applied:

- `React.memo` for component memoization
- `useMemo` for derived state (filtered tasks)
- Understanding when memoization is helpful vs unnecessary

---

## 🏗 Architecture

Task Board App:

```bash
-TaskInput
-TaskFilters
-TaskList
-TaskItem
```

## ✨ Features

- Add new tasks
- Toggle task completion
- Delete tasks
- Filter by:
  - All
  - Active
  - Completed
- Simple, clean UI built with Tailwind CSS

---

## 📚 Why useReducer + Context?

This combination is useful when:

- State is shared across multiple components
- State transitions are structured and predictable
- You want centralized update logic
- Prop drilling becomes messy

It acts as a lightweight alternative to Redux for small-to-medium apps.

---

## 🚀 Potential Extensions (Future Practice)

- Persist tasks to localStorage
- Extract custom hooks (`useTasks`)
- Add editing functionality
- Add drag-and-drop
- Split contexts for render optimization
- Introduce reducer composition

---

## 📝 What I Learned

- Reducers scale better than multiple `useState` calls for structured state.
- Context solves the distribution problem, not the state management problem.
- Re-render behavior matters when sharing state globally.
- Architecture decisions should match application scale.

## ⚡ Key Takeaway

`useReducer` manages _how state changes._ Decouples state from the render since the updating of state occurs on the reducer instead of in the handler events.

`Context` manages _who can access it._. Teleports data to any component that requires it rather than being passed down via props.

Together, they create a clean, predictable state architecture in React without external libraries.

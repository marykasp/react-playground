# React Patterns Playground

A structured React playground built to explore core React patterns in isolation.

This project focuses on architectural thinking, state modeling, and scalability — not just UI. Each section isolates a specific React concept to demonstrate decision-making between patterns like `useState` and `useReducer`.

---

## Why I Built This

As a frontend-focused engineer with experience working in a startup environment, I wanted a space to:

- Strengthen foundational React patterns
- Compare state management strategies side-by-side
- Practice scalable folder architecture
- Model complex UI flows (like multi-step forms)
- Think in terms of state transitions, not just components

Rather than building another feature-heavy app, this repository demonstrates how I think about structure and maintainability.

---

## Project Structure

The project is organized by concept, not by feature.

```bash
src/
  playgrounds/
    state/
      useState-counter/
    reducer/
      useReducer-counter/
      multi-step-form/
    effects/
      fetch-demo/
  components/
  App.jsx
```

This structure mirrors how larger applications are organized:

- **State Hooks** → Local component state patterns
- **Reducer Pattern** → Explicit state transitions and complex workflows
- **Effects** → Side effects and lifecycle behavior

Grouping by pattern makes tradeoffs clearer and keeps logic isolated.

---

## Highlight: Multi-Step Form (Reducer Pattern)

The multi-step form demonstrates:

- Centralized state management with `useReducer`
- Action-driven navigation (e.g., NEXT / PREVIOUS)
- Controlled form inputs
- Clear separation between state logic and UI
- Scalable architecture for complex workflows

This models a real-world scenario where `useReducer` is preferable over `useState` due to multi-dimensional state transitions.

---

## Concepts Practiced

- `useState`
- `useReducer`
- Action-based state transitions
- Controlled components
- Reducer-driven form flows
- Dynamic component rendering
- Collapsible UI patterns
- Modular folder organization

---

## What This Demonstrates

This project reflects:

- Thoughtful state management decisions
- Ability to scale component structure
- Clean separation of concerns
- Understanding of React beyond tutorials
- Architectural discipline in small projects

It’s intentionally structured to show how patterns evolve as complexity increases.

---

## Next Iterations

Planned expansions:

- Context + Reducer integration
- Custom hooks section
- Async reducer patterns
- Form validation reducer
- Finite state machine comparisons
- Testing reducer logic

---

## Final Note

This repository is less about building a polished product and more about strengthening pattern fluency. It represents how I think about React architecture when preparing to scale applications in production environments.

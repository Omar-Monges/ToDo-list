import React from 'react'
import { TodoCounter } from './components/TodoCounter.jsx'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'


import './App.css';

const todos = [
  { text: 'Pelar papas', completed: false },
  { text: 'Tomar el curso', completed: false },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;

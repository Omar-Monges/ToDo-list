import React from 'react'
import { TodoCounter } from './components/TodoCounter.jsx'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'


import './App.css';

const defaultTodos = [
  { text: 'Pelar papas', completed: false },
  { text: 'Tomar el curso', completed: true },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  //Estado inicial de nuestros TODOs
  const [ todos, setTodos ] = React.useState(defaultTodos)
  //Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => !!todo.completed).length
  //Cantidad total de TODOs
  const totalTodos = todos.length

  //Estado inicial de busqueda
  const [ searchValue, setSearchValue ] = React.useState('')
  //Busquedas con coicidencias
  let searchedTodos = []
  if(!searchValue.length >= 1){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter( todo => {
      const todoTxt = todo.text.toLowerCase()
      const searchTxt = searchValue.toLowerCase()
      return todoTxt.includes(searchTxt)
    })
  }
  return (
    <>
      <TodoCounter
        total={totalTodos} 
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default App;

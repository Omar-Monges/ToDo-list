import React from 'react'

function CreateTodoButton({setTodos, todos}) {
    const onCreateTodo = () => {
        const textInput = document.querySelector('#input-text')
        const newTodo = [...todos]
        newTodo.push({
            text: textInput.value,
            completed: false,
        })
        setTodos(newTodo)
    }
    return (
        <div>
            <input
                id='input-text'
                type='text'
                className="text-container"
                placeholder='Hacer compras'
            />
            <button onClick={onCreateTodo}>+</button>
        </div>
    )
}

export { CreateTodoButton }
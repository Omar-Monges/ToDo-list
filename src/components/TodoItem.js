import React from 'react'

function TodoItem(props) {
    return (
        <ul>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </ul>
    )
}

export { TodoItem }
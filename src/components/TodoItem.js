import React from 'react'

function TodoItem(props) {
    return (
        <ul>
            <label>{props.text}
                <input type="checkbox" />
            </label>
        </ul>
    )
}

export { TodoItem }
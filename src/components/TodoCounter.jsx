import React from 'react'
function TodoCounter({ total, completed }) {
    return (
        <h2 className="title">Has completado {completed} de {total} TODOs</h2>
    )
}

export { TodoCounter }
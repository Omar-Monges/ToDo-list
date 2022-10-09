import React from 'react'

function TodoSearch({searchValue, setSearchValue}) {


    const onSearchValueChange = (e) => {
        let textInput = e.target.value
        // let filterIncludes = props.todo.filter(item => item.text.toLowerCase().includes(textInput))
        setSearchValue(textInput)
        // console.log(searchValue);
    };
    return (
        <input 
            className="text-container"
            type='text'
            value={searchValue}
            placeholder='cebolla'
            onChange={onSearchValueChange}
            />
    )
}

export { TodoSearch }
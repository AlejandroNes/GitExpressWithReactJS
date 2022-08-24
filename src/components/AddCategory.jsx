
import React, { useState } from 'react'

const AddCategory = ({ onCategories }) => {

    const [inputValue, setInputValue] = useState('')

    //funciones
    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return

        onCategories(inputValue);

        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder='add category'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory
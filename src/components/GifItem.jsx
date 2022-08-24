import React from 'react'

const GifItem = ({ title, img }) => {
    return (
        <div className='card'>
            <img src={img} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifItem
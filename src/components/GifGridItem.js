import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    // console.log(id, title, url)
    return (
        <div className="card animate__animated animate__fadeInDown">
            <p className='card-title'>{title}</p>
            <img
                src={url}
                alt={title}
                className='card-img' />
        </div>
    )
}

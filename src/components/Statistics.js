import React from 'react'

const Statistics = ({ image, title, text }) => {
    return (
        <article className='statistic'>
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className='statistic__text'>
                <h3 className='statistic__title'>{title}</h3>
                <p className='statistic__description'>{text}</p>
            </div>
        </article>
    )
}

export default Statistics

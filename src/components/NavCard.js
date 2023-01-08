import React from 'react'

const NavCard = ({ name, price, image,index }) => {
    return (
        <div className='NavCard'>
            <img src={image} alt={`${index} phone`}/>
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default NavCard
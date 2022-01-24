import React from 'react'
import './badge.css'



const Bagde = props => {
    return (
        <span className={`badge badge-${props.type}`}>
            {props.content}
        </span>
)
}

export default Bagde

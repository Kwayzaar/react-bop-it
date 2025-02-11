import React from 'react'
import bopper from "../images/bopper2.png"

export default function Bopper(props) {

    const handleClick = () => {
        props.clickIt()
    }

    return (
            <img src={bopper} 
            className="bopper" 
            alt="bopper" 
            onClick={handleClick} 
            />
    )
}
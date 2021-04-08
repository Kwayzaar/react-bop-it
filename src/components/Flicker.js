import React from 'react'
import flicker from "../images/flicker.png"

export default function Flicker({mouseIt}) {

    const handleMouseOver = () => {
        mouseIt()
    }

    return (
        <img src={flicker} className="flicker" alt="flicker" onMouseOver={handleMouseOver}/>
    )
}
import React from 'react'
import spinner from "../images/spinner.png"

export default function Spinner() {

    const onKeyUp = () => {
        
    }

    return (
        <img src={spinner} className="spinner" alt="spinner" onKeyUp={handleKeyUp}/>
    )
}
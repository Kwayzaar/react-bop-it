import React from 'react'
import puller from "../images/puller.png"

export default function Puller({dragIt}) {

    const handleDrag = () => {
        dragIt()
    }

    return (
        <img src={puller} className="puller" alt="puller" onDrag={dragIt}/>
    )
}

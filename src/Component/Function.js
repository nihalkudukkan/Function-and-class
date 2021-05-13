import React, { useState } from 'react'

export default function Function() {
    const[name, setName] = useState("Function")
    return (
        <div>
            <h2>Function Component</h2>
            <h2>{name}</h2>
        </div>
    )
}

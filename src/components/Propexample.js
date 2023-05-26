import React from 'react'

export const Propexample = (props) =>{
    return(
        <div>
        <h1>HEllo {props.name}</h1>
        {props.children}

        </div>
    )
}
import React from 'react';


export default function MoveToPurchased(props, index) {
    return (
        <a onClick={(index) => props.addToPurchased(props.index)} ><button>+</button></a>
    )
}
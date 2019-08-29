import React from 'react';

export default function Delete(props, index){
    
    return(
        <a onClick={(index) => props.deleteCard(props.index)}><button>Delete</button></a>
    )
}
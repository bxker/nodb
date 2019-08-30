import React from 'react';
import './Delete.css'

export default function Delete(props, index){
    
    return(
        <a onClick={(index) => props.deleteCard(props.index)}><button className="delete-button">Delete</button></a>
    )
}
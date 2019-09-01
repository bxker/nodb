import React from 'react';
import './Delete.css'

export default function Delete(props){
    
    return(
        <a onClick={() => props.deleteCard(props.index)}><button className="delete-button">Delete</button></a>
    )
}
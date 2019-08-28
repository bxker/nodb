import React from 'react';
//css
import './Add.css'
//component imports

export default function Add(props){
    return (
        <>
            <div className="add-inputs">
                <span>Part Name: <input type="text"></input></span>
                <span>Description: <input type="text"></input></span>
                <span>Link: <input type="text"></input></span>
                <span>Image: <input type="text"></input></span>
            </div>
            <div className="add-button">
                <button>Add</button>
            </div>
        </>
    )
}
import React from 'react';

import './Part.css';
import Delete from '../Delete/Delete'
import MoveToPurchased from '../../MoveToPurchased/MoveToPurchased';

export default function Part(props){
    // console.log(props.index)
    return (
        <div className="main-container">
            <section className="parts-card">
                <img src={props.image} alt={props.part_name} />
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <div className="card-buttons">
                    <a href={props.link} target="_blank" rel="noopener noreferrer"><button>Buy Here</button></a>
                    <a href="https://google.com"><button>Update</button></a>
                </div>
                <div className="card-buttons">
                    <MoveToPurchased addToPurchased={props.addToPurchased} index={props.index}/>
                    <Delete deleteCard={props.deleteCard} index={props.index}/>
                </div>
            </section> 
        </div>
    )
}

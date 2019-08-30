import React from 'react';
import './Purchase.css'


export default function Part(props){
    // console.log(props.index)
    return (
        <div className="main-container2">
            <section className="parts-card parts-card2">
                <img src={props.image} alt={props.part_name} />
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <div className="card-buttons card-buttons2">
                    <a href={props.link} target="_blank" rel="noopener noreferrer"><button>Purchased ✔</button></a>
                </div>
            </section> 
        </div>
    )
}
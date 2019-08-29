import React from 'react';

import './Part.css';

export default function Part(props){
    console.log(props)
    return (
        <div className="main-container">
            <section className="parts-card">
                <img src={props.image} alt={props.part_name} />
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <div className="card-buttons">
                    <a href={props.link} target="_blank"><button>Buy Here</button></a>
                    <a href="#"><button>Edit</button></a>
                    <a href="#"><button>Delete</button></a>
                </div>
            </section> 
        </div>
    )
}

import React, { Component } from 'react';

//css import
import './Parts.css';
import Part from './Part/Part.js';

export default class Parts extends Component {
    render() {
        const {parts, addToPurchased, deleteCard} = this.props
        return (
            <div className="main-container">
                {parts ? parts.map((part, index) => (
                    <Part
                        addToPurchased={addToPurchased}
                        deleteCard={deleteCard}
                        name={part.part_name}
                        description={part.description}
                        link={part.link}
                        image={part.image}
                        index={index}
                    />
                )
                ) : <p>Loading</p>}
            </div>
        )
    }
}

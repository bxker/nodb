import React, {Component} from 'react';
import axios from 'axios';

//css import
import './Parts.css';
import Part from './Part/Part.js';

export default class Parts extends Component {
    render(){
        return(
            <div className="main-container">
                {this.props.parts.map((part) => (
                        <Part 
                            name={part.part_name}
                            description={part.description}
                            link={part.link}
                            image={part.image}
                        />
                    )
                )}
            </div>
        )
    }
}

import React, {Component} from 'react';
import axios from 'axios';

//css import
import './Parts.css';
import Part from './Part/Part.js';

export default class Parts extends Component {
    constructor(props){
        super(props);
        this.state = {
            parts: []
        }
    }

    componentDidMount() {
        axios.get('/api/parts').then( response => {
            this.setState({parts: response.data})
        }).catch(err => {
            console.log(err)
        })
    }
    
    render(){
        // console.log(this.state.parts[0].part_name)
        return(
            <div className="main-container">
                {this.state.parts.map((part) => (
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

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
        })
    }
    
    render(){
        // console.log(this.state.parts[0].part_name)
        return(
            <div>
                {this.state.parts.map((part) => (
                        <Part 
                            name={this.state.parts[0].part_name}
                            description={this.state.parts[0].description}
                            link={this.state.parts[0].link}
                            image={this.state.parts[0].image}
                        />
                    )
                )}
            </div>
        )
    }
}

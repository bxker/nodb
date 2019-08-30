import React, {Component} from 'react';
import axios from 'axios';


import Purchase from './Purchase/Purchase';
import './Purchased.css'


export default class Purchased extends Component {
    constructor(props){
        super(props);
        this.state = {
            purchased: [],
            part_name: '',
            description: '',
            link: '',
            image: ''

        }
    }

    componentDidMount() {
        axios.get('/api/purchased').then( response => {
            this.setState({purchased: response.data})
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div className="purchased-div">
                <button className="clear-all">Clear All Purchases</button>
                {this.state.purchased.map((part) => (
                        
                        <Purchase
                            
                            // deleteCard={this.props.deleteCard}
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



import React, { Component } from 'react';
import axios from 'axios';


import Purchase from './Purchase/Purchase';
import './Purchased.css'


export default class Purchased extends Component {
    constructor(props) {
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
        axios.get('/api/purchased').then(response => {
            this.setState({
                purchased: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    deleteItem = (index) => {
        axios.delete(`/api/purchased/:${index}`).then(response => {
            this.setState({
                purchased: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <>
                <div className="body-container">
                    <h1 className="purchased-title">Purchased</h1>
                    <div className="purchased-div">
                        {this.state.purchased ? this.state.purchased.map((part, index) => (
                            <Purchase
                                deleteItem={this.deleteItem}
                                name={part.part_name}
                                description={part.description}
                                link={part.link}
                                image={part.image}
                                index={index}
                            />
                        )
                        ) : <p>Loading</p>}
                    </div>
                </div>
            </>
        )
    }
}



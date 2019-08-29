import React, {Component} from 'react';
import axios from 'axios';

import Purchase from './Purchase';


export default class Purchased extends Component {
    constructor(props){
        super(props);
        this.state = {
            purchased: []
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
            <div>
                <Purchase />
            </div>
        )
    }
}

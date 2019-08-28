import React, {Component} from 'react';
//css
import './Add.css'
import Axios from 'axios';
//component imports

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            part_name: "",
            description: "",
            link: "",
            image: "",
            purchased: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    
    render(){
        return (
            <>
                <form className="add-inputs" onSubmit={e => {
                    Axios.post('/api/parts', {
                        name: this.state.part_name,
                        description: this.state.description,
                        link: this.state.link,
                        image: this.state.image,
                        purchased: this.state.purchased
                    })
                }}>
                    <span>Part Name: <input type="text"></input></span>
                    <span>Description: <input type="text"></input></span>
                    <span>Link: <input type="text"></input></span>
                    <span>Image: <input type="text"></input></span>
                </form>
                <div className="add-button">
                    <button>Add</button>
                </div>
            </>
        )
    }
}
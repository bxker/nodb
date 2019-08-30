import React, {Component} from 'react';
//css
import './Add.css'
import axios from 'axios';
//component imports
import Parts from '../Parts/Parts'

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            parts: [],
            part_name: "",
            description: "",
            link: "",
            image: ""
        }
    }
    componentDidMount() {
        axios.get('/api/parts').then( response => {
            this.setState({parts: response.data})
        }).catch(err => {
            console.log(err)
        })
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value,
        })
    }
    
    handleClick = () => {
        axios.post('/api/parts', {
            part_name: this.state.part_name,
            description: this.state.description,
            link: this.state.link,
            image: this.state.image
        }).then((response) => {
            this.setState({
                parts: response.data
            })
        }).catch(err => console.log(err))
    }

    deleteCard = (index) => {
        axios.delete(`/api/parts/${index}`).then(response => {
            this.setState({
                parts: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    addToPurchased = (index) => {
        axios.put(`/api/parts/${index}`, {}).then(response => {
            console.log(this)
            this.setState({
                parts: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    componentWillUnmount() {
        console.log("unmounting")
    }


    render(){
        return (
            <>
                <div className="add-inputs">
                    <span>Part Name: <input type="text" onChange={this.handleChange} value={this.part_name} name="part_name"></input></span>
                    <span>Description: <input type="text" onChange={this.handleChange} value={this.description} name="description"></input></span>
                    <span>Link: <input type="text" onChange={this.handleChange} value={this.link} name="link"></input></span>
                    <span>Image: <input type="text" onChange={this.handleChange} value={this.image} name="image"></input></span>
                </div>
                <div className="add-button">
                    <button onClick={this.handleClick}>Add</button>
                </div>
                {/* <h2>To update, put the new information in the text fields above and select 'Update' on the part card you want to update.</h2> */}

                <Parts parts={this.state.parts} deleteCard={this.deleteCard} addToPurchased={this.addToPurchased}/>
            </>
        )
    }
}
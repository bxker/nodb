import React, { Component } from 'react';

//css
import './reset.css';
import './App.css';

//component imports
import Header from './components/Header/Header';
import Add from './components/Add/Add';
import Purchased from './components/Purchased/Purchased'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "parts"
    }
  }

  changeViewParts = () => {
    if (this.state.display === "purchased") {
      this.setState({ display: "parts" })
    }
  }

  changeViewPurchased = () => {
    if (this.state.display === "parts") {
      this.setState({ display: "purchased" })
    }
  }

  render() {
    return (
      <div className="app">
        <Header changeViewParts={this.changeViewParts} changeViewPurchased={this.changeViewPurchased} />
        {
          this.state.display === "parts"
            ? <Add />
            : <Purchased />
        }
      </div>
    );
  }
}


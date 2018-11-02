import React, { Component } from 'react'
import './App.css'
import Sounds from './Sounds.js'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sounds: []
    }
  }

  componentDidMount(){
    fetch(`${API_URL}/sounds`)
    .then(resp => resp.json())
    .then(sounds => this.setState({ sounds }))
  }

  render(){
    return(
      <div className="App">
        App Container
        <Sounds sounds={this.state.sounds} />
      </div>
    )
  }
}

export default App

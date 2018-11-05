import React, { Component } from 'react'
import './App.css'
import Sounds from './Sounds'
import SoundForm from './SoundForm'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(){
    super()
    this.state = {
      sounds: [],
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
        <h1>App Container</h1>
        <SoundForm addSound={this.addSound} />
        <Sounds sounds={this.state.sounds} />
      </div>
    )
  }
}

export default App

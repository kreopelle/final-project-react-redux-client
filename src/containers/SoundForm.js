import React, { Component } from 'react'
import SoundUpload from '../'

class SoundForm extends Component {
    state = {
      title: '',
      description: ''
    }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    handleOnSubmit = event => {
      event.preventDefault()
      const title = event.target.children[1].value
      const description = event.target.children[4].value
      const data = {sound: {title: title, description: description}}
      fetch(`http://localhost:3001/api/sounds`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(resp => resp.json())
      .then(sound => console.log(sound))
    }

  render(){
    return(
      <div className="sound-form">
        <form onSubmit={this.handleOnSubmit}>
          <label>Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} /><br />
          <label>Description: </label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange} /><br />
          {/*
            <input type="file" name="sound" data-direct-upload-url="/rails/active_storage/direct_upload/" />
          */}
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SoundForm

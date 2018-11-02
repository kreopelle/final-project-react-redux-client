import React, { Component } from 'react'
// connect later

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
    debugger
    this.props.addSound({title: event.target.children[1].value, description: event.target.children[4].value })
    this.setState({
      title: '',
      description: ''
    })
    // fetch('http://localhost:3001/api/sounds', {
    //   method: 'POST',
    //   body: JSON.stringify(sound: this.state)
    // })
    // .then(resp => resp.json())
    // .then(sound => console.log(sound))
  }

  render(){
    return(
      <div className="sound-form">
        <form onSubmit={this.handleOnSubmit}>
          <label>Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} /><br />
          <label>Description: </label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange} /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SoundForm


        // <input type="file" name="sound" data-direct-upload-url="/rails/active_storage/direct_upload/" />

import React, { Component } from 'react'

class Controlled extends Component {
  state = {
    name: '',
    lastname: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }

  handleLastnameChange = event => {
    this.setState({ lastname: event.target.value })
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form_element'>
            <label>Enter name</label>
            <input
              type='text'
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className='form_element'>
            <label>Enter lastname</label>
            <input
              type='text'
              value={this.state.lastname}
              onChange={this.handleLastnameChange}
            />
          </div>
          <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

export default Controlled

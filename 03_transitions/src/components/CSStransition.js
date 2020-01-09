import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import '../css/App.css'

class Fade extends Component {
  state = {
    show: true
  }

  showDiv = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <CSSTransition in={this.state.show} timeout={2000} classNames='square'>
          <div className={`square ${this.state.show}`}>What's up</div>
        </CSSTransition>
        <div className='showDiv' onClick={this.showDiv}>
          Show/Hide
        </div>
      </div>
    )
  }
}

export default Fade

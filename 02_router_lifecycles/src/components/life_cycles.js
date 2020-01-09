import React, { PureComponent } from 'react'

class LifeCycles extends PureComponent {
  // 1. Get default props

  // 2. Set default state
  state = {
    title: 'React Lifecycle methods'
  }

  // 5. After jsx
  componentDidMount() {
    console.log('5. After jsx')
    document.querySelector('h3').style.color = 'blue'
  }

  // 3. Before render
  UNSAFE_componentWillMount() {
    console.log('3. Before render')
  }

  UNSAFE_componentWillUpdate() {
    console.log('BEFORE UPDATE')
  }

  componentDidUpdate() {
    console.log('AFTER UPDATE')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //     if(nextState.title === 'React outdated') {
  //         return false
  //     }
  //     return true
  // }

  UNSAFE_componentWillReceiveProps() {
    console.log('BEFORE RECEIVING PROPS')
  }

  componentWillUnmount() {
    console.log('UNMOUNTING')
  }

  // 4. Render jsx
  render() {
    console.log('RENDER')
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div
          onClick={() =>
            this.setState({
              title: `${
                this.state.title === 'React Lifecycle methods'
                  ? 'React outdated lifecycles'
                  : 'React Lifecycle methods'
              }`
            })
          }
          style={{ cursor: 'pointer' }}
        >
          CHANGE TITLE
        </div>
      </div>
    )
  }
}

export default LifeCycles

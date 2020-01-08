import React, {Component} from 'react'
import styles from '../css/styles.module.css'

class Header extends Component {
    state = {
        keywords: ''
    }

inputChangeHandler = (event) => {
    this.setState({keywords: event.target.value})
    console.log(this.state.keywords)
}

    render() {
        return (
            <header>
                <div className={styles.logo}>Logo</div>
                <input type="text" onChange={this.inputChangeHandler}/>
            </header>
        )
    }
}

export default Header

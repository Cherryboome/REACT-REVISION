import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div><NavLink to='/'>Home</NavLink></div>
            <div><NavLink to='/posts'>Posts</NavLink></div>
            <div><NavLink to='/profile'>Profile</NavLink></div>
            <div><NavLink to='/life'>Lifecycle methods</NavLink></div>
            <hr />
        </header>
    )
}

export default Header

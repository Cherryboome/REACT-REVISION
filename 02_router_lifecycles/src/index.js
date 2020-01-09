import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile'
import Header from './components/Header_footer/header'
import PostItem from './components/post_item'
import PageNotFound from './components/page_not_found'
import LifeCycles from './components/life_cycles'

const App = () => {
    return (
       <Router>
        <Header />
        <Switch>
           <Route path='/posts/:id' component={PostItem} />
           <Route path='/profile' component={Profile} />
           <Route path='/posts' component={Posts} />
           <Route path='/life' component={LifeCycles} />
           <Route path='/' exact component={Home} />
           <Route component={PageNotFound} />
        </Switch>
       </Router>
    )
}

ReactDOM.render( <App />, document.querySelector('#root'))


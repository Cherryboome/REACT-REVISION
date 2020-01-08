import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import JSON from './db.json'

import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {

    state = {
    news: JSON,
    filtered: []
}

getKeyword = (event) => {
    let keyword = event.target.value
    let filtered = this.state.news.filter(item => {
        return item.title.indexOf(keyword) > -1
    })
    this.setState({filtered})
}

    render() {
        let newsFiltered = this.state.filtered
        let newsOriginal = this.state.news
        return (
        <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={newsFiltered.length === 0 ? newsOriginal : newsFiltered}>
           <h1>The news are:</h1> 
        </NewsList>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

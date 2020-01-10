import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movieslist, actorslist } from './actions'
import { bindActionCreators } from 'redux'

class App extends Component {
  componentWillMount() {
    this.props.movieslist()
    this.props.actorslist()
  }

  renderMovies = movies =>
    movies ? movies.map(movie => <div key={movie.id}>{movie.name}</div>) : null

  render() {
    console.log(this.props)
    return <div>{this.renderMovies(this.props.data.movies)}</div>
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      movieslist,
      actorslist
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

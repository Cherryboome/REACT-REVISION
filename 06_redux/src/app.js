import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movieslist } from './actions'

class App extends Component {
  componentWillMount() {
    this.props.getMovies()
  }

  renderMovies = movies =>
    movies ? movies.map(movie => <div key={movie.id}>{movie.name}</div>) : null

  render() {
    return <div>{this.renderMovies(this.props.data.movies)}</div>
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => {
      dispatch(movieslist())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

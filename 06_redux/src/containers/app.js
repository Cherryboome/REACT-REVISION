import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movieslist, actorslist } from '../actions'
import { bindActionCreators } from 'redux'

import MoviesList from '../components/moviesList'

class App extends Component {
  componentWillMount() {
    this.props.movieslist()
    this.props.actorslist()
  }

  render() {
    return (
      <div>
        <MoviesList movies={this.props.data.movies} />
      </div>
    )
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

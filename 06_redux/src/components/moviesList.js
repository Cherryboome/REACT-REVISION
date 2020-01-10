import React from 'react'

const MoviesList = ({ movies }) => {
  const renderMovies = movies =>
    movies ? movies.map(movie => <div key={movie.id}>{movie.name}</div>) : null

  return <div>{renderMovies(movies)}</div>
}

export default MoviesList

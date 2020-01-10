export const movieslist = () => {
  return {
    type: 'MOVIES_LIST',
    payload: [
      { id: 1, name: 'V for Vandetta' },
      { id: 2, name: 'Rambo' },
      { id: 3, name: 'Blood Sport' }
    ]
  }
}

export const actorslist = () => {
  return {
    type: 'ACTORS_LIST',
    payload: [
      { id: 1, name: 'Chuck Norris' },
      { id: 2, name: 'Sylvester Stallone' },
      { id: 3, name: 'Jean Claude Van Damme' }
    ]
  }
}

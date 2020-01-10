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

import axios from 'axios'
const URL = 'http://localhost:3004'

export const artistList = keywords => {
  const request = axios
    .get(`${URL}/artists?q=${keywords}`)
    .then(response => response.data)

  return {
    type: 'GET_ARTISTS',
    payload: request
  }
}

export const artistListAll = () => {
  const request = axios
    .get(`${URL}/artists?_limit=6`)
    .then(response => response.data)

  return {
    type: 'GET_ARTISTS_ALL',
    payload: request
  }
}

export const artistDetail = id => {
  const request = axios
    .get(`${URL}/artists?id=${id}`)
    .then(response => response.data)

  return {
    type: 'GET_ARTIST_DETAIL',
    payload: request
  }
}

export const clearArtistDetail = id => {
  return {
    type: 'CLEAR_ARTIST_DETAIL',
    payload: null
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { artistDetail, clearArtistDetail } from '../actions'
import { bindActionCreators } from 'redux'

class ArtistContainer extends Component {
  componentWillMount() {
    this.props.artistDetail(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.clearArtistDetail()
  }

  artistTemplate = data =>
    data.artistDetail ? (
      <div className='artist_view'>
        <div
          className='artist_background'
          style={{
            background: `url(/images/${data.artistDetail[0].cover})`
          }}
        >
          <Link to='/'>Back home</Link>
          <div className='name'>{data.artistDetail[0].name}</div>
        </div>
        <div className='artist_description'>
          <p>{data.artistDetail[0].bio}</p>
          <div className='tags'>
            <div>
              <strong>Style:</strong> {data.artistDetail[0].style}
            </div>
          </div>
        </div>
        <div className='artist_album_list'>
          {data.artistDetail[0].albums
            ? data.artistDetail[0].albums.map(item => (
                <div key={item.cover} className='albums'>
                  <div
                    className='cover'
                    style={{
                      background: `url(/images/albums/${item.cover})`
                    }}
                  ></div>
                </div>
              ))
            : null}
        </div>
      </div>
    ) : null

  render() {
    return <div>{this.artistTemplate(this.props.artists)}</div>
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ artistDetail, clearArtistDetail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer)

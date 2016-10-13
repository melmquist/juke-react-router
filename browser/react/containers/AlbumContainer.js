'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { fetchAlbum } from '../action-creators/albums.js'

// import { someActionCreator } from './myActionCreators'

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapDispatchToProps = (dispatch) => {
    return {
        getTheAlbum: (albumId) => dispatch(fetchAlbum(albumId))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);

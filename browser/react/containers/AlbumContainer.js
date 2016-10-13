'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';

// import { someActionCreator } from './myActionCreators'

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getTheAlbum: (albumId) => dispatch(someActionCreator(albumId))
//     }
// }

export default connect(
  mapStateToProps
)(Album);

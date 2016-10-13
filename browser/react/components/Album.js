'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';



// export default ({ selectedAlbum }) => (
//   <div className="album">
//     <div>
//       <h3>{ selectedAlbum.name }</h3>
//       <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
//     </div>
//     <SongsContainer songs={selectedAlbum.songs} />
//   </div>
// );


export default class Album extends React.Component {

    componentDidMount () {
        console.log("ALBUM JS LOG ", this.props.params)
    }

    render() {
        const { selectedAlbum } = this.props;
        return (
            <div className="album">
              <div>
                <h3>{ selectedAlbum.name }</h3>
                <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
              </div>
              <SongsContainer songs={selectedAlbum.songs} />
            </div>
        )
    }
}

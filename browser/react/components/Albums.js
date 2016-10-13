'use strict';

import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class Albums extends React.Component {

  render() {
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          {
            this.props.albums.map(album => (
              <div className="col-xs-4" key={ album.id }>
              <Link to={`/albums/${album.id}`}>Album</Link>
                  <img src={ album.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ album.name }</span>
                    </h5>
                    <small>{ album.songs.length } songs</small>
                  </div>
              </div>
            ))
          }
        </div>
      </div>

    )


  }

}



// <a className="thumbnail" href="#" onClick={() => go(album)}>
// </a>

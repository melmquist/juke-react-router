'use strict';

import React from 'react';
import { Link, hashHistory } from 'react-router';

export default ({ go, location }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <section>
      <h4 className={location.match('album') ? 'menu-item active' : 'menu-item'}>
        <Link to="/albums">Albums</Link>
      </h4>
    </section>
    <section>
      <h4 className={location.match('artist') ? 'menu-item active' : 'menu-item'}>
        <Link to="/artists">Artists</Link>
      </h4>
    </section>
  </sidebar>
);


//<a href="#" onClick={() => go('albums')}>ALBUMS</a>

// <a href="#" onClick={() => go('artists')}>ARTISTS</a>

import React from 'react';
import './menu-item.styles.scss';

import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

// A higher order component is a function that takes a component, transforms it
// and returns it with "super powers", i.e. access history, match and so on.
// This way, we don't need to drill down properties through components that
// don't need them
export default withRouter(MenuItem);

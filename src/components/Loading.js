import React from 'react';
import gif from '../images/gif/loading-arrow.gif';

const Loading = () => {
  return (
    <div className="loading">
      <h4 className="loading__title">Castles data loading...</h4>
      <img className="loading__gif" src={gif} alt="loading" />
    </div>
  );
}

export default Loading;
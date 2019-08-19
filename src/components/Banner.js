import React from 'react';

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <h3 className="banner__subtitle">{subtitle}</h3>
      {children}
    </div>
  );
}

export default Banner;
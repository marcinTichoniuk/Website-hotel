import React from 'react';

const Header = ({ children, headerClass }) => {
  return (
    <header className={headerClass}>
      {children}
    </header>
  );
}

Header.defaultProps = {
  headerClass: "header header--home-img"
}

export default Header;
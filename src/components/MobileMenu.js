import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ isOpen, handleToggle }) => {
  return (
    <ul className={isOpen ? "main-nav__menu main-nav__menu--open" : "main-nav__menu"}>
      <li className="main-nav__item">
        <NavLink onClick={handleToggle} className="main-nav__link" exact to="/">Home</NavLink>
      </li>
      <li className="main-nav__item">
        <NavLink onClick={handleToggle} className="main-nav__link" exact to="/castles">Castles</NavLink>
      </li>
    </ul>
  );
}

export default MobileMenu;
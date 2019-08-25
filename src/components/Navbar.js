import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGripLines } from 'react-icons/fa';

import MobileMenu from './MobileMenu';

class Navbar extends Component {
  state = {
    isOpen: false,
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {

    const { isOpen } = this.state;

    return (
      <>
        <nav className="main-nav">
          <div className="logo main-nav__logo">
            <Link className="logo__link" to="/">CastleHoliday</Link>
          </div>
          <button className="main-nav__btn">
            <FaGripLines onClick={this.handleToggle} className="main-nav__icon" />
          </button>
        </nav>
        <MobileMenu isOpen={isOpen} handleToggle={this.handleToggle} />
      </>
    );
  }
}

export default Navbar;
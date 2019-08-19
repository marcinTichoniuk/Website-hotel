import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ linkClassName, btnClassName, linkTo, btnName }) => {
  return (
    <Link className={linkClassName} to={linkTo}>
      <button className={btnClassName}>{btnName}</button>
    </Link>
  );
}

LinkButton.defaultProps = {
  linkClassName: "link-btn",
  linkTo: "/",
  btnClassName: "link-btn__btn",
  btnName: "Back Home"
}


export default LinkButton;
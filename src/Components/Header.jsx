import React from "react";
import { FaKeyboard, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="title-header">
        <div className="title">Type Cat</div>
        <FaKeyboard className="icon" />
      </div>
      <div className="login-header">
        <FaUserCircle className="icon"></FaUserCircle>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

function Footer() {
  const [backgroundColor, setBackgroundColor] = useState("black");

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
    const body = document.querySelector("body");
    body.style.background = event.target.value;
    if (event.target.value === "Black") {
      body.style.color = "white";
    } else {
      body.style.color = "black";
    }
  };
  return (
    <div className="footer">
      <div className="socials">
        <BsInstagram className="social" />
        <BsLinkedin className="social" />
        <FiMail className="social"></FiMail>
        <BsGithub className="social" />
      </div>
      <div className="select-theme">
        <select
          id="colorPicker"
          onChange={handleColorChange}
          value={backgroundColor}
        >
          <option value="Black">Black</option>
          <option value="lightblue">Light Blue</option>
          <option value="lightgreen">Light Green</option>
          <option value="lightpink">Light Pink</option>
          <option value="#D3D3D3">Light Grey</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;

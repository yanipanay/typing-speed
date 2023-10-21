import React, { useState } from "react";

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
      <div className="socials"></div>
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

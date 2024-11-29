import React from "react";
import image from "../images/acadsys.png";

function Header() {
  return (
    <div className="header" >
      <img src={image} alt="Circus" width="200px" />
      <h2>acadsys</h2>
    </div>
  );
}

export default Header;

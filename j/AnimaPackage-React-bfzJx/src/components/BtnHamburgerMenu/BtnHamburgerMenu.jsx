/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const BtnHamburgerMenu = ({ className, menuIconClassName }) => {
  return (
    <div className={`btn-hamburger-menu ${className}`}>
      <div className={`menu-icon ${menuIconClassName}`}>
        <div className="hamburger-menu">
          <div className="span" />
          <div className="div" />
        </div>
        <div className="label">Menu</div>
      </div>
    </div>
  );
};

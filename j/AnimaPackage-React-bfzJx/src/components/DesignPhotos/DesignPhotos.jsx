/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DesignPhotos = ({ property1, className }) => {
  return <div className={`design-photos ${property1} ${className}`} />;
};

DesignPhotos.propTypes = {
  property1: PropTypes.oneOf(["design-1", "design-2", "design-3"]),
};

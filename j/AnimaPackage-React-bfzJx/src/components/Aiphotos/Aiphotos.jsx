/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Aiphotos = ({ property1, className }) => {
  return <div className={`aiphotos ${property1} ${className}`} />;
};

Aiphotos.propTypes = {
  property1: PropTypes.oneOf(["ai-1", "ai-3", "ai-2"]),
};

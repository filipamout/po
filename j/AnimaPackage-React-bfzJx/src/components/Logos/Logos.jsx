/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logos = ({
  property1,
  className,
  propertyPhotoshop = "/img/property-1-photoshop-svgrepo-com.png",
  propertyAdobe = "/img/property-1-adobe-indesign-svgrepo-com.png",
  img = "/img/property-1-adobe-lightroom-svgrepo-com.png",
  property = "/img/property-1-illustrator-svgrepo-com.png",
}) => {
  return (
    <img
      className={`logos ${property1} ${className}`}
      alt="Property framer"
      src={
        property1 === "figma-svgrepo-com"
          ? "/img/property-1-figma-svgrepo-com.png"
          : property1 === "adobe-illustrator-svgrepo-com"
          ? "/img/property-1-adobe-illustrator-svgrepo-com.png"
          : property1 === "adobe-lightroom-svgrepo-com"
          ? img
          : property1 === "adobe-cloud-131-svgrepo-com"
          ? "/img/property-1-adobe-cloud-131-svgrepo-com.png"
          : property1 === "adobe-indesign-svgrepo-com"
          ? propertyAdobe
          : property1 === "illustrator-svgrepo-com"
          ? property
          : property1 === "bridge-svgrepo-com"
          ? "/img/property-1-bridge-svgrepo-com.png"
          : property1 === "photoshop-svgrepo-com"
          ? propertyPhotoshop
          : "/img/property-1-framer-svgrepo-com.png"
      }
    />
  );
};

Logos.propTypes = {
  property1: PropTypes.oneOf([
    "adobe-illustrator-svgrepo-com",
    "adobe-indesign-svgrepo-com",
    "figma-svgrepo-com",
    "adobe-lightroom-svgrepo-com",
    "framer-svgrepo-com",
    "illustrator-svgrepo-com",
    "adobe-cloud-131-svgrepo-com",
    "photoshop-svgrepo-com",
    "bridge-svgrepo-com",
  ]),
  propertyPhotoshop: PropTypes.string,
  propertyAdobe: PropTypes.string,
  img: PropTypes.string,
  property: PropTypes.string,
};

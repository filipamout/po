/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BtnSwiperButton = ({
  type,
  className,
  typeBack = "/img/btn-swiper-button-4.png",
  typeNext = "/img/btn-swiper-button-5.png",
}) => {
  return (
    <img
      className={`btn-swiper-button ${type} ${className}`}
      alt="Type next"
      src={type === "back" ? typeBack : typeNext}
    />
  );
};

BtnSwiperButton.propTypes = {
  type: PropTypes.oneOf(["back", "next"]),
  typeBack: PropTypes.string,
  typeNext: PropTypes.string,
};

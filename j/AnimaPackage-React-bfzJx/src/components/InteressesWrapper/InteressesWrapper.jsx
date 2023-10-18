/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { BtnHamburgerMenu } from "../BtnHamburgerMenu";
import { BtnSwiperButton } from "../BtnSwiperButton";
import "./style.css";

export const InteressesWrapper = ({ className, btnSwiperButtonTypeBack, btnSwiperButtonTypeNext }) => {
  return (
    <Link className={`interesses-wrapper ${className}`} to="/photografy">
      <div className="carousel-3">
        <BtnSwiperButton className="design-component-instance-node" type="back" typeBack={btnSwiperButtonTypeBack} />
        <div className="container-3">
          <div className="row-3">
            <div className="col-2">
              <div className="mb-2">
                <div className="heading-4">
                  <img className="line-2" alt="Line" />
                  <div className="filipa-moutinho-2">FILIPA MOUTINHO</div>
                </div>
                <div className="heading-5">
                  <div className="text-wrapper-7">PHOTOGRAPHY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BtnSwiperButton className="btn-swiper-button-2" type="next" typeNext={btnSwiperButtonTypeNext} />
      </div>
      <BtnHamburgerMenu className="btn-hamburger-menu-3" />
    </Link>
  );
};

InteressesWrapper.propTypes = {
  btnSwiperButtonTypeBack: PropTypes.string,
  btnSwiperButtonTypeNext: PropTypes.string,
};

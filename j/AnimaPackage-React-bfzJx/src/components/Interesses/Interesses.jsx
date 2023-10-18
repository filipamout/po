/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { BtnHamburgerMenu } from "../BtnHamburgerMenu";
import { BtnSwiperButton } from "../BtnSwiperButton";
import "./style.css";

export const Interesses = ({ interesses, interessesClassName, carouselClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    interesses: interesses || "fotografia",
  });

  return (
    <>
      {["design", "fotografia"].includes(state.interesses) && (
        <Link className={`interesses div-2 interesses-${state.interesses} ${interessesClassName}`} to="/photografy">
          {state.interesses === "fotografia" && (
            <>
              <div className={`carousel ${carouselClassName}`}>
                <BtnSwiperButton
                  className="btn-swiper-button-instance"
                  type="back"
                  typeBack="/img/btn-swiper-button.png"
                />
                <div className="container-2">
                  <div className="row-2">
                    <div className="mb-wrapper">
                      <div className="mb">
                        <div className="heading-2">
                          <img className="line" alt="Line" src="/img/line-4.png" />
                          <div className="filipa-moutinho">FILIPA MOUTINHO</div>
                        </div>
                        <div className="heading-3">
                          <div className="text-wrapper-6">PHOTOGRAPHY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BtnSwiperButton className="instance-node" type="next" typeNext="/img/btn-swiper-button-1.png" />
              </div>
              <BtnHamburgerMenu className="btn-hamburger-menu-instance" />
            </>
          )}

          {state.interesses === "design" && (
            <>
              <div className={`bg ${carouselClassName}`}>
                <BtnHamburgerMenu className="btn-hamburger-menu-2" />
              </div>
              <div
                className="carousel-2"
                onClick={() => {
                  dispatch("click");
                }}
              >
                <BtnSwiperButton
                  className="btn-swiper-button-instance"
                  type="back"
                  typeBack="/img/btn-swiper-button.png"
                />
                <div className="container-2">
                  <div className="row-2">
                    <div className="mb-wrapper">
                      <div className="mb">
                        <div className="heading-2">
                          <img className="line" alt="Line" src="/img/line-4.png" />
                          <div className="filipa-moutinho">FILIPA MOUTINHO</div>
                        </div>
                        <div className="heading-3">
                          <div className="text-wrapper-6">DESIGN</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BtnSwiperButton className="instance-node" type="next" typeNext="/img/btn-swiper-button-1.png" />
              </div>
            </>
          )}
        </Link>
      )}

      {state.interesses === "ia" && (
        <img className={`interesses img ${interessesClassName}`} alt="Interesses ia" src="/img/interesses-ia.png" />
      )}
    </>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        interesses: "ia",
      };
  }

  return state;
}

Interesses.propTypes = {
  interesses: PropTypes.oneOf(["design", "fotografia", "ia"]),
};

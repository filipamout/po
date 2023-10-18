/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const InteractiveCarousel = ({
  property1,
  className,
  colClassName,
  colClassNameOverride,
  projectPostCatsWrapperClassName,
  divClassName,
  divClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "one",
  });

  return (
    <div className={`interactive-carousel property-1-${state.property1} ${className}`}>
      <div
        className="section"
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
      >
        <div className="container-fluid">
          <div className="row-4">
            <div className={`col-3 ${colClassName}`} />
            <div className={`col-4 ${colClassNameOverride}`}>
              {state.property1 === "three" && (
                <>
                  <div className="heading-wrapper">
                    <div className="heading-6">
                      <p className="heading-7">CASE STUDY: DEUS A.I (UNDER CONSTRUCTION)</p>
                    </div>
                  </div>
                  <div className="heading-wrapper">
                    <div className="div-3" />
                  </div>
                </>
              )}
            </div>
            <div className={`col-5 ${projectPostCatsWrapperClassName}`}>
              {state.property1 === "two" && (
                <div className="heading-wrapper">
                  <div className="heading-6">
                    <div className="heading-7">CASE STUDY: FOCINHOS FELIZES</div>
                  </div>
                </div>
              )}
            </div>
            <div className={`col-6 ${divClassName}`}>
              {state.property1 === "one" && (
                <>
                  <div className="heading-wrapper">
                    <div className="heading-6">
                      <div className="heading-7">HOME</div>
                    </div>
                  </div>
                  <div className="div-3" />
                </>
              )}
            </div>
            <div className={`col-7 ${divClassNameOverride}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "two",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "one",
      };
  }

  return state;
}

InteractiveCarousel.propTypes = {
  property1: PropTypes.oneOf(["two", "three", "one"]),
};

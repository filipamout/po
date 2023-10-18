/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const InteractiveCard = ({
  property1,
  className,
  serviceIconClassName,
  divClassName,
  text = "",
  text1 = "Nature",
  hasDiv = true,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`interactive-card property-1-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <Link className={`service-icon ${serviceIconClassName}`} to={to}>
        <div className="services-icon">
          <div className={`text-wrapper-5 ${divClassName}`}>{text}</div>
        </div>
      </Link>
      <div className="nature-wrapper">
        <div className="nature">{text1}</div>
      </div>
      {hasDiv && (
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget venenatis cursus non felis risus rutrum
          elementum. Dolor amet.
        </p>
      )}

      <img className="arrow" alt="Arrow" src={state.property1 === "hover" ? "/img/arrow-1.png" : "/img/arrow.png"} />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

InteractiveCard.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  hasDiv: PropTypes.bool,
  to: PropTypes.string,
};

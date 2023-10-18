/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const BtnButtons = ({ type, size, stateProp, background, className, text = "Primary", divClassName, href }) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "default",
    size: size || "default",
    state: stateProp || "default",
    background: background || "light",
  });

  return (
    <a
      className={`btn-buttons ${state.size} ${state.type} ${state.state} ${state.background} ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`default-2 ${divClassName}`}>
        {state.size === "default" && state.type === "default" && <>Default</>}

        {state.type === "primary" && <>{text}</>}

        {state.type === "secondary" && <>Secondary</>}

        {state.size === "small" && state.type === "default" && <>Default Small</>}
      </div>
    </a>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

BtnButtons.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "default"]),
  size: PropTypes.oneOf(["small", "default"]),
  stateProp: PropTypes.oneOf(["hover", "default"]),
  background: PropTypes.oneOf(["dark", "light"]),
  text: PropTypes.string,
  href: PropTypes.string,
};

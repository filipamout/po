/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BtnButtons } from "../BtnButtons";
import "./style.css";

export const Footer = ({ className, containerClassName, containerClassNameOverride, href, href1, href2 }) => {
  return (
    <div className={`footer ${className}`}>
      <div className={`container ${containerClassName}`}>
        <div className="row">
          <div className="col">
            <div className="heading">
              <div className="text-wrapper">GET IN TOUCH</div>
            </div>
            <a
              className="div-wrapper"
              href="https://drive.google.com/file/d/1ieCvpfimWvU6o1vfEnr0HxtMxZ5i9blU/view?usp=drive_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <a className="text-wrapper-2" href={href} rel="noopener noreferrer" target="_blank">
                GET MY CV
              </a>
            </a>
            <div className="paragraph">
              <a className="text-wrapper-3" href={href1} rel="noopener noreferrer" target="_blank">
                Linkedin
              </a>
            </div>
            <div className="paragraph">
              <a className="text-wrapper-3" href={href2} rel="noopener noreferrer" target="_blank">
                Behance
              </a>
            </div>
          </div>
          <div className="footer-right-wrapper">
            <div className="footer-right">
              <BtnButtons
                background="dark"
                className="btn-buttons-instance"
                href="https://contacts.google.com/person/c247847118178213071"
                size="default"
                stateProp="default"
                text="CONTACT NOW"
                type="primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`row-wrapper ${containerClassNameOverride}`}>
        <div className="col-wrapper">
          <div className="paragraph-wrapper">
            <div className="paragraph-2">
              <div className="text-wrapper-4">UX/UI FILIPA MOUTINHO PORTFOLIO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
};

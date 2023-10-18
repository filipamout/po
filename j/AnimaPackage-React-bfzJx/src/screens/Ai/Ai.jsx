import React from "react";
import { Link } from "react-router-dom";
import { Aiphotos } from "../../components/Aiphotos";
import { BtnButtons } from "../../components/BtnButtons";
import { Footer } from "../../components/Footer";
import { Interesses } from "../../components/Interesses";
import "./style.css";

export const Ai = () => {
  return (
    <div className="ai">
      <div className="div-7">
        <Footer
          className="footer-4"
          containerClassName="footer-5"
          containerClassNameOverride="footer-5"
          href="https://drive.google.com/file/d/1ieCvpfimWvU6o1vfEnr0HxtMxZ5i9blU/view?usp=sharing"
          href1="www.linkedin.com/in/filipa-moutinho-a4119553"
          href2="https://www.behance.net/FilipaPhotography"
        />
        <div className="section-7">
          <div className="container-14">
            <div className="row-14">
              <div className="col-23">
                <div className="heading-19">
                  <img className="line-5" alt="Line" src="/img/line-4-7.png" />
                  <div className="text-wrapper-31">NAVEGATE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-15" />
          <div className="row-15">
            <Link className="col-24" to="/home">
              <div className="card-8">
                <Link className="image-8" to="/home" />
                <div className="card-body-9">
                  <div className="heading-20">
                    <div className="color-8">Home</div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="col-25">
              <div className="card-9">
                <div className="image-9" />
                <div className="card-body-10">
                  <div className="heading-21">
                    <div className="color-9">Design</div>
                  </div>
                </div>
              </div>
            </div>
            <Link className="col-26" to="/photografy">
              <div className="card-10">
                <Link className="image-10" to="/photografy" />
                <div className="card-body-11">
                  <div className="heading-22">
                    <div className="color-8">Photography</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="section-8">
          <div className="container-16">
            <div className="col-27">
              <div className="frame-4">
                <div className="heading-19">
                  <img className="line-5" alt="Line" src="/img/line-4-8.png" />
                  <div className="text-wrapper-31">INFO</div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="group-3">
                <div className="heading-23">
                  <p className="text-wrapper-32">Creating Images or solutions with A.I. Pricing</p>
                </div>
              </div>
            </div>
            <div className="row-16">
              <div className="col-28">
                <div className="card-11">
                  <div className="card-body-12">
                    <div className="frame-5">
                      <div className="color-10">STANDARD</div>
                      <div className="element-3">€100</div>
                      <div className="paragraph-7">
                        <div className="text-wrapper-33">Up to 10 photos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-29">
                <div className="card-12">
                  <div className="card-body-13">
                    <p className="color-11">
                      <span className="text-wrapper-34"></span>
                      <span className="text-wrapper-35">PRO</span>
                    </p>
                    <div className="element-4">€200</div>
                    <div className="paragraph-8">
                      <p className="text-wrapper-33">
                        10 photos.
                        <br />
                        Specific images using references , Up to 3 reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-29">
                <div className="card-13">
                  <div className="card-body-13">
                    <div className="color-12">PREMIUM</div>
                    <div className="element-4">€300</div>
                    <div className="paragraph-8">
                      <p className="text-wrapper-33">
                        15 photo
                        <br />
                        Specific images using references , Up to 7 reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BtnButtons
              background="dark"
              className="btn-buttons-5"
              divClassName="btn-buttons-6"
              href="https://contacts.google.com/person/c247847118178213071"
              size="default"
              stateProp="default"
              text="CONTACT NOW"
              type="primary"
            />
          </div>
        </div>
        <Aiphotos className="aiphotos-instance" property1="ai-1" />
        <div className="section-9">
          <div className="container-17">
            <div className="row-14">
              <div className="col-23">
                <div className="div-8">
                  <div className="heading-19">
                    <img className="line-5" alt="Line" src="/img/line-4-8.png" />
                    <div className="interests-ARTIFICIAL">INTERESTS - ARTIFICIAL INTELLIGENCE</div>
                  </div>
                  <div className="div-8">
                    <p className="text-wrapper-36">THE CHANGE IN THE WORLD</p>
                  </div>
                </div>
              </div>
              <div className="col-30">
                <p className="ARTIFICIAL">
                  <span className="text-wrapper-37">
                    ARTIFICIAL INTELLIGENCE
                    <br />
                  </span>
                  <span className="text-wrapper-38">
                    As a self-driven learner, my passion is fuelled by the boundless potential of artificial
                    intelligence (AI). My curiosity extends to the realms of data analysis, virtual machine creation,
                    Python, cloud engineering and prompt engineering. In this ever-evolving tech landscape, I embark on
                    a continuous journey of self-improvement, relentlessly seeking new ways to innovate and push the
                    boundaries of what AI can achieve.
                    <br />
                    All the photos or videos in this site were created by me, or using an old fashion camera or creating
                    threw prompts in Mid-journey and other tools.
                    <br />
                  </span>
                </p>
                <div className="heading-24" />
              </div>
            </div>
          </div>
        </div>
        <Interesses interesses="ia" />
      </div>
    </div>
  );
};

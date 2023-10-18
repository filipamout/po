import React from "react";
import { Link } from "react-router-dom";
import { BtnButtons } from "../../components/BtnButtons";
import { DesignPhotos } from "../../components/DesignPhotos";
import { InteractiveCard } from "../../components/InteractiveCard";
import { Interesses } from "../../components/Interesses";
import "./style.css";

export const Design = () => {
  return (
    <div className="design">
      <div className="div-5">
        <footer className="footer-3">
          <div className="container-7">
            <div className="row-8">
              <div className="col-12">
                <div className="heading-11">
                  <div className="text-wrapper-19">GET IN TOUCH</div>
                </div>
                <a
                  className="heading-12"
                  href="https://drive.google.com/file/d/1ieCvpfimWvU6o1vfEnr0HxtMxZ5i9blU/view?usp=drive_link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <a
                    className="text-wrapper-20"
                    href="https://drive.google.com/file/d/1ieCvpfimWvU6o1vfEnr0HxtMxZ5i9blU/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GET MY CV
                  </a>
                </a>
                <div className="paragraph-3">
                  <a
                    className="text-wrapper-21"
                    href="www.linkedin.com/in/filipa-moutinho-a4119553"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </div>
                <div className="paragraph-3">
                  <a
                    className="text-wrapper-21"
                    href="https://www.behance.net/FilipaPhotography"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Behance
                  </a>
                </div>
              </div>
              <div className="col-13">
                <div className="btn-buttons-wrapper">
                  <BtnButtons
                    background="dark"
                    className="btn-buttons-2"
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
          <div className="container-8">
            <div className="row-9">
              <div className="col-14">
                <div className="paragraph-4">
                  <div className="text-wrapper-22">UX/UI FILIPA MOUTINHO PORTFOLIO</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="section-3">
          <div className="container-9">
            <div className="row-10">
              <div className="col-15">
                <div className="heading-13">
                  <img className="line-4" alt="Line" src="/img/line-4-7.png" />
                  <div className="text-wrapper-23">NAVEGATE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-10" />
          <div className="row-11">
            <Link className="col-16" to="/home">
              <div className="card-3">
                <Link className="image-5" to="/home" />
                <div className="card-body-4">
                  <div className="heading-14">
                    <div className="color-3">Home</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="col-17" to="/ai">
              <div className="card-4">
                <Link className="image-6" to="/ai" />
                <div className="card-body-5">
                  <div className="heading-15">
                    <div className="color-4">Artificial Intelligence</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="col-18" to="/photografy">
              <div className="card-5">
                <Link className="image-7" to="/photografy" />
                <div className="card-body-6">
                  <div className="heading-16">
                    <div className="color-3">Photography</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="section-4">
            <div className="col-19">
              <div className="frame-2">
                <div className="heading-13">
                  <img className="line-4" alt="Line" src="/img/line-4-8.png" />
                  <div className="text-wrapper-23">INFO</div>
                </div>
              </div>
            </div>
            <div className="container-11">
              <div className="group-wrapper">
                <div className="group-2">
                  <div className="heading-17">
                    <div className="text-wrapper-24">UX/UI Design Pricing</div>
                  </div>
                </div>
              </div>
              <div className="row-12">
                <div className="col-20">
                  <div className="card-body-wrapper">
                    <div className="card-body-7">
                      <div className="frame-3">
                        <div className="color-5">STANDARD</div>
                        <div className="element">€500</div>
                        <div className="paragraph-5">
                          <p className="text-wrapper-25">
                            5 pages of responsive design web or mobile applications Up to 3 revisions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-21">
                  <div className="card-6">
                    <div className="card-body-8">
                      <p className="color-6">
                        <span className="text-wrapper-26"></span>
                        <span className="text-wrapper-27">PRO</span>
                      </p>
                      <div className="element-2">€1000</div>
                      <div className="paragraph-6">
                        <p className="text-wrapper-25">
                          10 pages of responsive design web or mobile applications Up to 5 revisions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-21">
                  <div className="card-7">
                    <div className="card-body-8">
                      <div className="color-7">PREMIUM</div>
                      <div className="element-2">€1500</div>
                      <div className="paragraph-6">
                        <p className="text-wrapper-25">
                          15 pages of responsive design web or mobile applications Up to 7 revisions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BtnButtons
              background="dark"
              className="btn-buttons-4"
              divClassName="btn-buttons-3"
              href="https://contacts.google.com/person/c247847118178213071"
              size="default"
              stateProp="default"
              text="CONTACT NOW"
              type="primary"
            />
          </div>
        </div>
        <DesignPhotos className="design-photos-instance" property1="design-1" />
        <div className="section-5">
          <div className="container-12">
            <div className="row-13">
              <div className="interactive-card-wrapper">
                <InteractiveCard
                  className="interactive-card-services"
                  divClassName="interactive-card-services-instance"
                  hasDiv={false}
                  property1="default"
                  serviceIconClassName="interactive-card-instance"
                  text=""
                  text1="CASE STUDIES UX/UI"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group-3">
          <div className="section-6">
            <div className="container-13">
              <div className="row-10">
                <div className="col-15">
                  <div className="div-6">
                    <div className="heading-13">
                      <img className="line-4" alt="Line" src="/img/line-4-4.png" />
                      <div className="interests-design">INTERESTS - DESIGN</div>
                    </div>
                    <div className="div-6">
                      <p className="text-wrapper-28">THE POWER OF THOUGHTFUL CREATIONS</p>
                    </div>
                  </div>
                </div>
                <div className="col-22">
                  <p className="DESIGN-design-is-a">
                    <span className="text-wrapper-29">
                      DESIGN
                      <br />
                    </span>
                    <span className="text-wrapper-30">
                      Design is a potent force in our daily lives, shaping our experiences and interactions. As a
                      designer, I prioritise understanding user needs as the cornerstone of impactful design. This
                      empathy-driven approach guides me in crafting clean, intuitive interfaces that enhance usability
                      and aesthetics.
                      <br />I stay up-to-date with the latest UX/UI insights, regularly reviewing articles from
                      respected sources like the Nielsen Norman Group and participating in online forums. This
                      commitment ensures that my designs are always informed by the most current practices, enabling me
                      to create solutions that truly resonate with users and enhance their everyday experiences.
                    </span>
                  </p>
                  <div className="heading-18" />
                </div>
              </div>
            </div>
          </div>
          <Interesses carouselClassName="interesses-2" interesses="design" interessesClassName="interesses-instance" />
        </div>
      </div>
    </div>
  );
};

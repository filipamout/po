import React from "react";
import { Link } from "react-router-dom";
import { BtnButtons } from "../../components/BtnButtons";
import { BtnSwiperButton } from "../../components/BtnSwiperButton";
import { Footer } from "../../components/Footer";
import { Fotos } from "../../components/Fotos";
import { InteressesWrapper } from "../../components/InteressesWrapper";
import "./style.css";

export const Photografy = () => {
  return (
    <div className="photografy">
      <div className="overlap-group-wrapper">
        <div className="overlap-group-4">
          <div className="fotos-2">
            <BtnSwiperButton className="btn-swiper-button-5" type="back" typeBack="/img/btn-swiper-button.png" />
            <div className="container-18">
              <div className="row-17">
                <div className="col-31">
                  <div className="mb-5">
                    <div className="heading-25">
                      <img className="line-6" alt="Line" src="/img/line-4-1.png" />
                      <div className="filipa-moutinho-3">FILIPA MOUTINHO</div>
                    </div>
                    <div className="heading-26">
                      <div className="text-wrapper-39">Photography</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BtnSwiperButton className="btn-swiper-button-6" type="next" typeNext="/img/btn-swiper-button-1.png" />
          </div>
          <div className="group-4">
            <div className="section-10">
              <div className="container-19">
                <div className="row-18">
                  <div className="col-32">
                    <div className="heading-27">
                      <img className="line-6" alt="Line" src="/img/line-4-7.png" />
                      <div className="text-wrapper-40">NAVEGATE</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-20" />
              <div className="row-19">
                <Link className="col-33" to="/home">
                  <div className="card-14">
                    <Link className="image-11" to="/home" />
                    <div className="card-body-14">
                      <div className="heading-28">
                        <div className="color-13">Home</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link className="col-34" to="/ai">
                  <div className="card-14">
                    <Link className="image-12" to="/ai" />
                    <div className="card-body-14">
                      <div className="heading-29">
                        <div className="color-14">Artificial Intelligence</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="col-35">
                  <div className="card-15">
                    <div className="image-13" />
                    <div className="card-body-15">
                      <div className="heading-30">
                        <div className="color-13">Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer
              className="footer-6"
              containerClassName="footer-7"
              containerClassNameOverride="footer-7"
              href="https://drive.google.com/file/d/1ieCvpfimWvU6o1vfEnr0HxtMxZ5i9blU/view?usp=sharing"
              href1="www.linkedin.com/in/filipa-moutinho-a4119553"
              href2="https://www.behance.net/FilipaPhotography"
            />
            <div className="section-11">
              <div className="section-12">
                <div className="col-36">
                  <div className="frame-6">
                    <div className="heading-27">
                      <img className="line-6" alt="Line" src="/img/line-4-22.png" />
                      <div className="text-wrapper-40">INFO</div>
                    </div>
                  </div>
                </div>
                <div className="container-21">
                  <div className="mb-6">
                    <div className="group-5">
                      <div className="heading-31">
                        <div className="text-wrapper-41">Photography Pricing</div>
                      </div>
                    </div>
                  </div>
                  <div className="row-20">
                    <div className="col-37">
                      <div className="card-16">
                        <div className="card-body-16">
                          <div className="frame-7">
                            <div className="color-15">STANDARD</div>
                            <div className="element-5">€100</div>
                            <div className="paragraph-9">
                              <p className="text-wrapper-42">
                                Up to 10 product photos (with white background) No live model included No retouching
                                included
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-38">
                      <div className="card-17">
                        <div className="card-body-17">
                          <p className="color-16">
                            <span className="text-wrapper-43"></span>
                            <span className="text-wrapper-44">PRO</span>
                          </p>
                          <div className="element-6">€360</div>
                          <div className="paragraph-10">
                            <p className="text-wrapper-42">
                              Up to 20 product photos (with white background or simple styling) 1 live model included
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-38">
                      <div className="card-18">
                        <div className="card-body-17">
                          <div className="color-17">PREMIUM</div>
                          <div className="element-6">€700</div>
                          <div className="paragraph-10">
                            <p className="text-wrapper-42">
                              Up to 50 product photos (with white background or advanced styling) 2 live models included
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BtnButtons
                  background="dark"
                  className="btn-buttons-7"
                  divClassName="btn-buttons-8"
                  href="https://contacts.google.com/person/c247847118178213071"
                  size="default"
                  stateProp="default"
                  text="CONTACT NOW"
                  type="primary"
                />
              </div>
            </div>
            <Fotos className="fotos-123" property1="one" />
            <div className="section-13">
              <div className="col-36">
                <div className="frame-6">
                  <div className="heading-27">
                    <img className="line-6" alt="Line" src="/img/line-4-23.png" />
                    <div className="text-wrapper-40">GALLERY</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-14">
              <div className="container-22">
                <div className="row-18">
                  <div className="col-32">
                    <div className="div-9">
                      <div className="heading-27">
                        <img className="line-6" alt="Line" src="/img/line-4-8.png" />
                        <div className="interests">INTERESTS - PHOTOGRAPHY</div>
                      </div>
                      <div className="div-9">
                        <p className="text-wrapper-45">THE BEGINNING OF MY JOURNEY</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-39">
                    <p className="photography-i">
                      <span className="text-wrapper-46">
                        Photography
                        <br />
                      </span>
                      <span className="text-wrapper-47">
                        I graduated in Visual Arts with a focus on photography. My college years taught me to turn ideas
                        into powerful visuals.since then I worked in fashion photography and product styling, where I
                        was able to blend art and commerce. This journey allowed me to convey messages through my lens.
                        I&#39;m driven by a strong desire to continually improve and enhance aesthetics through the
                        integration of technology and innovative tools.
                        <br />
                      </span>
                    </p>
                    <div className="heading-32" />
                  </div>
                </div>
              </div>
            </div>
            <InteressesWrapper
              btnSwiperButtonTypeBack="/img/btn-swiper-button.png"
              btnSwiperButtonTypeNext="/img/btn-swiper-button-1.png"
              className="interesses-interesses4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

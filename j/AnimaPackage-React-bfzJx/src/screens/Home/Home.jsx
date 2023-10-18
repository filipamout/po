import React from "react";
import { Link } from "react-router-dom";
import { BtnHamburgerMenu } from "../../components/BtnHamburgerMenu";
import { BtnSwiperButton } from "../../components/BtnSwiperButton";
import { Footer } from "../../components/Footer";
import { InteractiveCard } from "../../components/InteractiveCard";
import { InteractiveCarousel } from "../../components/InteractiveCarousel";
import { Logos } from "../../components/Logos";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-10">
        <Footer
          className="footer-8"
          containerClassName="footer-9"
          containerClassNameOverride="footer-9"
          href="https://drive.google.com/file/d/1ieCvpfimWvU6o1vfEnr0HxtMxZ5i9blU/view?usp=sharing"
          href1="www.linkedin.com/in/filipa-moutinho-a4119553"
          href2="https://www.behance.net/FilipaPhotography"
        />
        <div className="section-15">
          <div className="container-23">
            <div className="row-21">
              <div className="col-40">
                <img className="muzica" alt="Muzica" src="/img/muzica-2.png" />
              </div>
              <img className="line-7" alt="Line" src="/img/line-8.png" />
              <div className="logos-wrapper">
                <Logos
                  className="logos-instance"
                  property1="photoshop-svgrepo-com"
                  propertyPhotoshop="/img/logos.png"
                />
              </div>
              <img className="line-7" alt="Line" src="/img/line-7.png" />
              <div className="col-40">
                <Logos className="logos-2" property1="adobe-indesign-svgrepo-com" propertyAdobe="/img/logos-1.png" />
              </div>
              <img className="line-7" alt="Line" src="/img/line-5-1.png" />
            </div>
            <img className="line-8" alt="Line" src="/img/line-5.png" />
            <div className="row-22">
              <div className="col-40">
                <Logos className="logos-3" img="/img/logos-2.png" property1="adobe-lightroom-svgrepo-com" />
              </div>
              <img className="line-9" alt="Line" src="/img/line-8.png" />
              <div className="col-40">
                <img className="hexa" alt="Hexa" src="/img/hexa.png" />
              </div>
              <img className="line-9" alt="Line" src="/img/line-7.png" />
              <div className="col-40">
                <Logos className="logos-4" property="/img/logos-3.png" property1="illustrator-svgrepo-com" />
              </div>
              <img className="line-9" alt="Line" src="/img/line-5-1.png" />
            </div>
          </div>
        </div>
        <div className="section-16">
          <div className="container-24">
            <div className="row-23">
              <div className="col-41">
                <div className="heading-33">
                  <img className="line-10" alt="Line" src="/img/line-4-8.png" />
                  <div className="text-wrapper-48">TOOLS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid-2">
          <div className="row-24">
            <div className="hiring-filipa-was-a-wrapper">
              <p className="hiring-filipa-was-a">
                &#34;Hiring Filipa was a fantastic decision. Their UX/UI design work was outstanding, delivering
                visually appealing and user-friendly interfaces. They were proactive, consistently exceeding
                expectations. Filipa is a valuable addition to our projects, and we look forward to future
                collaborations.”
              </p>
            </div>
            <div className="col-42">
              <div className="row-25">
                <div className="div-11">
                  <div className="div-12">
                    <div className="testimonial">
                      <img className="testimonial-image" alt="Testimonial image" src="/img/testimonial-image.png" />
                    </div>
                    <div className="caption">
                      <div className="div-13">
                        <div className="text-wrapper-49">Catarina Soares</div>
                      </div>
                      <div className="span-2">
                        <div className="text-wrapper-50">Senior Recruitment Specialist</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-43">
                  <div className="text-wrapper-51">TESTIMONIALS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-17">
          <div className="container-25">
            <div className="row-23">
              <div className="col-41">
                <div className="heading-33">
                  <img className="line-10" alt="Line" src="/img/line-4-7.png" />
                  <div className="text-wrapper-48">TESTIMONIALS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-18">
          <div className="container-26">
            <div className="row-23">
              <div className="col-41">
                <div className="heading-33">
                  <img className="line-10" alt="Line" src="/img/line-4-7.png" />
                  <div className="text-wrapper-48">SKILL SET</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-27" />
          <div className="row-26">
            <div className="col-44">
              <Link className="card-19" to="/photografy">
                <Link className="image-14" to="/photografy" />
                <div className="card-body-18">
                  <div className="heading-34">
                    <p className="color-18">
                      <span className="text-wrapper-52">
                        Photography
                        <br />
                      </span>
                      <span className="text-wrapper-53">Graduated in</span>
                      <span className="text-wrapper-54"> Visual Arts-Photography, </span>
                      <span className="text-wrapper-53">worked as a </span>
                      <span className="text-wrapper-54">fashion/product photographer, photo editor </span>
                      <span className="text-wrapper-55">and</span>
                      <span className="text-wrapper-54"> product stylist </span>
                      <span className="text-wrapper-55">for 8 years.</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <Link className="col-45" to="/ai">
              <div className="card-20">
                <Link className="image-15" to="/ai" />
                <div className="card-body-19">
                  <div className="heading-35">
                    <p className="color-18">
                      <span className="text-wrapper-52">
                        Artificial Intelligence
                        <br />
                      </span>
                      <span className="text-wrapper-53">Self-taught in</span>
                      <span className="text-wrapper-54"> prompt engineering, creating VMs</span>
                      <span className="text-wrapper-53"> and</span>
                      <span className="text-wrapper-55">&nbsp;</span>
                      <span className="text-wrapper-54">
                        python language. <br />
                        <br />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="col-46">
              <div className="card-21">
                <div className="image-16" />
                <div className="card-body-20">
                  <div className="heading-36">
                    <p className="color-19">
                      <span className="text-wrapper-52">
                        Design
                        <br />
                      </span>
                      <span className="text-wrapper-53">Graduated from </span>
                      <span className="text-wrapper-54">Google’s course </span>
                      <span className="text-wrapper-53">of</span>
                      <span className="text-wrapper-54"> UX/UI Design, </span>
                      <span className="text-wrapper-53">took workshops in</span>
                      <span className="text-wrapper-54"> User Research (Edit), Udemy courses </span>
                      <span className="text-wrapper-53">in</span>
                      <span className="text-wrapper-54"> Figma </span>
                      <span className="text-wrapper-53">and finally</span>
                      <span className="text-wrapper-54">
                        {" "}
                        Edit’s full course of UX/UI Design.
                        <br />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-19">
          <div className="container-25">
            <div className="row-23">
              <div className="col-41">
                <div className="heading-33">
                  <div className="text-wrapper-48">MAIN INSPIRATION</div>
                </div>
                <div className="heading-37">
                  <div className="text-wrapper-56">Fluidity, harmonious, intuitive</div>
                </div>
              </div>
            </div>
          </div>
          <InteractiveCarousel
            className="interactive-carousel-projects"
            colClassName="interactive-carousel-instance"
            colClassNameOverride="interactive-carousel-projects-instance"
            divClassName="interactive-carousel-4"
            divClassNameOverride="interactive-carousel-5"
            projectPostCatsWrapperClassName="interactive-carousel-3"
            property1="one"
          />
        </div>
        <div className="info-wrapper">
          <div className="info">
            <div className="div-wrapper-2">
              <div className="text-wrapper-57">Every need counts</div>
            </div>
            <div className="div-wrapper-2">
              <div className="div-11">
                <div className="heading-38">
                  <div className="text-wrapper-58">01</div>
                </div>
                <div className="col-47">
                  <div className="div-wrapper-3">
                    <div className="text-wrapper-59">Passionate Learner</div>
                  </div>
                  <div className="paragraph-11">
                    <p className="text-wrapper-60">
                      An individual driven by a relentless passion for acquiring knowledge, constantly seeking
                      opportunities for personal and professional growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-wrapper-2">
              <div className="div-11">
                <div className="heading-38">
                  <div className="text-wrapper-58">02</div>
                </div>
                <div className="col-47">
                  <div className="div-wrapper-3">
                    <div className="text-wrapper-59">Continuos Engagement</div>
                  </div>
                  <div className="div-wrapper-3">
                    <p className="text-wrapper-61">
                      Someone who consistently immerses themselves in tasks and experiences, demonstrating an unwavering
                      dedication to remaining actively involved and invested in all endeavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-wrapper-2">
              <div className="div-11">
                <div className="heading-38">
                  <div className="text-wrapper-58">03</div>
                </div>
                <div className="col-48">
                  <div className="div-wrapper-3">
                    <div className="text-wrapper-59">Ethical Enthusiast</div>
                  </div>
                  <div className="paragraph-12">
                    <p className="text-wrapper-62">
                      A person deeply committed to upholding strong moral values and principles, integrating ethics and
                      inclusion seamlessly into their actions and decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-20">
          <div className="container-28">
            <div className="row-23">
              <div className="col-41">
                <div className="frame-8">
                  <div className="heading-39">
                    <div className="text-wrapper-63">IDEOLOGY</div>
                  </div>
                  <div className="text-wrapper-64">ALWAYS KEEP LERNING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-21">
          <div className="container-24">
            <div className="row-27">
              <div className="interactive-card-services-wrapper">
                <InteractiveCard
                  className="interactive-card-2"
                  divClassName="interactive-card-4"
                  hasDiv={false}
                  property1="default"
                  serviceIconClassName="interactive-card-3"
                  text=""
                  text1="CASE STUDIES UX/UI"
                  to="/focinhos-felizes"
                />
              </div>
              <Link className="interactive-card-services-wrapper" to="/photografy">
                <InteractiveCard
                  className="interactive-card-2"
                  divClassName="interactive-card-5"
                  hasDiv={false}
                  property1="default"
                  serviceIconClassName="interactive-card-3"
                  text=""
                  text1="INTERESTS"
                  to="/photografy"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="section-22">
          <div className="container-24">
            <div className="row-23">
              <div className="col-41">
                <div className="div-13">
                  <div className="heading-33">
                    <img className="line-10" alt="Line" src="/img/line-4-8.png" />
                    <div className="text-wrapper-65">MISSION</div>
                  </div>
                  <div className="div-13">
                    <p className="text-wrapper-66">TO MAKE THE RIGHT SOLUTION BASED ON THE USER NEEDS</p>
                  </div>
                </div>
              </div>
              <div className="about-me-hello-i-m-wrapper">
                <p className="about-me-hello-i-m">
                  <span className="text-wrapper-67">
                    About Me
                    <br />
                  </span>
                  <span className="text-wrapper-68">
                    Hello! I&#39;m Filipa Moutinho, a naturally curious individual driven by a deep-seated passion for
                    finding innovative solutions. I thrive on challenges and relish the opportunity to dive into
                    uncharted territory to uncover answers. My unwavering commitment to personal and professional growth
                    fuels my desire to be a full-time student in every work environment. I embrace change as an
                    opportunity to adapt, learn, and excel.
                    <br />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="interactive-carousel-6">
            <div className="bg-4" />
            <div className="carousel-wrapper">
              <div className="carousel-5">
                <BtnSwiperButton className="btn-swiper-button-7" type="back" typeBack="/img/btn-swiper-button.png" />
                <div className="div-12">
                  <div className="row-28">
                    <div className="col-49">
                      <div className="mb-7">
                        <div className="heading-39">
                          <img className="line-10" alt="Line" src="/img/line-4.png" />
                          <div className="filipa-moutinho-4">FILIPA MOUTINHO</div>
                        </div>
                        <div className="UX-UI-portfolio-wrapper">
                          <p className="UX-UI-portfolio">
                            <span className="text-wrapper-69">UX/UI </span>
                            <span className="text-wrapper-70">
                              Portfolio
                              <br />
                            </span>
                            <span className="text-wrapper-70">{""}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BtnSwiperButton className="btn-swiper-button-8" type="next" typeNext="/img/btn-swiper-button-1.png" />
              </div>
            </div>
          </div>
          <BtnHamburgerMenu className="btn-hamburger-menu-6" menuIconClassName="btn-hamburger-menu-5" />
        </div>
      </div>
    </div>
  );
};

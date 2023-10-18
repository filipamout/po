import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import "./style.css";

export const FocinhosFelizesScreen = () => {
  return (
    <div className="focinhos-felizes-screen">
      <div className="focinhos-felizes-2">
        <div className="overlap-group-2">
          <Footer
            className="footer-instance"
            containerClassName="footer-2"
            containerClassNameOverride="footer-2"
            href="https://drive.google.com/file/d/1ieCvpfimWvU6o1vfEnr0HxtMxZ5i9blU/view?usp=sharing"
            href1="www.linkedin.com/in/filipa-moutinho-a4119553"
            href2="https://www.behance.net/FilipaPhotography"
          />
          <div className="section-2">
            <div className="container-6" />
            <div className="row-7">
              <Link className="card-wrapper" to="/home">
                <div className="card">
                  <Link className="image" to="/home" />
                  <div className="card-body">
                    <div className="color-wrapper">
                      <div className="color">Home</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="col-10" to="/ai">
                <div className="card-2">
                  <Link className="image-2" to="/ai" />
                  <div className="card-body-2">
                    <div className="heading-9">
                      <div className="color-2">Artificial Intelligence</div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="col-10">
                <div className="card-2">
                  <div className="image-3" />
                  <div className="card-body-3">
                    <div className="heading-10">
                      <div className="color">Design</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-11">
                <div className="card-2">
                  <div className="image-4" />
                  <div className="card-body-3">
                    <div className="color-wrapper">
                      <div className="color">Photography</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="element-concluses" alt="Element concluses" src="/img/06-conclus-es-02.png" />
        <img className="element-design" alt="Element design" src="/img/05-design-01.png" />
        <img className="element-design-2" alt="Element design" src="/img/05-design-01-1.png" />
        <img className="element-design-3" alt="Element design" src="/img/05-design-01-2.png" />
        <img className="element-objetivos-do" alt="Element objetivos do" src="/img/04-objetivos-do-produto-02.png" />
        <img className="element-pesquisa" alt="Element pesquisa" src="/img/04-pesquisa-10.png" />
        <img className="element-pesquisa-2" alt="Element pesquisa" src="/img/04-pesquisa-11.png" />
        <img className="element-pesquisa-3" alt="Element pesquisa" src="/img/04-pesquisa-09.png" />
        <img className="element-pesquisa-4" alt="Element pesquisa" src="/img/04-pesquisa-08.png" />
        <img className="element-pesquisa-5" alt="Element pesquisa" src="/img/04-pesquisa-07.png" />
        <img className="element-pesquisa-6" alt="Element pesquisa" src="/img/04-pesquisa-05.png" />
        <img className="element-pesquisa-7" alt="Element pesquisa" src="/img/04-pesquisa-02.png" />
        <img className="element-pesquisa-8" alt="Element pesquisa" src="/img/04-pesquisa-04.png" />
        <img className="element-pesquisa-9" alt="Element pesquisa" src="/img/04-pesquisa-03.png" />
        <img className="element-problema" alt="Element problema" src="/img/02-problema-02.png" />
        <img className="element-briefing-2" alt="Element briefing" src="/img/01-briefing-02-1.png" />
      </div>
    </div>
  );
};

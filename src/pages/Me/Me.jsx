import techno from "../../assets/techno.jpeg";
import old from "../../assets/old.jpg";
import earth from "../../assets/earth.jpg";
import serious from "../../assets/serious.jpg";
import portfolio from "../../assets/Lazez portfolio anonymisé.mp4";
import saturnin from "../../assets/petit canard en plastique cherche bureau où se poser.mp4";
import cv from "../../assets/cv janv 22.png";
import "./Me.css";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

export default function Me() {
  return (
    <section className="me-section">
      <div className="link">
        <Link to="/">
          <p className="link-p">
            <Trans i18nKey="back">trans</Trans>
          </p>
        </Link>
      </div>
      <div className="all-me">
        <div className="me">
          <figure className="me-details serious">
            <img className="me-img" src={serious} alt="serious" />
            <figcaption>
              <Trans i18nKey="serious">trans</Trans>
            </figcaption>
          </figure>

          <figure className="me-details techno">
            <img className="me-img" src={techno} alt="techno" />
            <figcaption>
              <Trans i18nKey="techno">trans</Trans>
            </figcaption>
          </figure>

          <figure className="me-details old">
            <img className="me-img" src={old} alt="old" />
            <figcaption>
              <Trans i18nKey="old">trans</Trans>
            </figcaption>
          </figure>
          <figure className="me-details earth">
            <img className="me-img" src={earth} alt="earth" />
            <figcaption>
              <Trans i18nKey="earth">trans</Trans>
            </figcaption>
          </figure>
        </div>
        <div className="me-realisations">
          <video controls>
            <source src={saturnin} type="video/mp4" />
          </video>
          <video controls>
            <source src={portfolio} type="video/mp4" />
          </video>
          <div className="image-cv">
            <img src={cv} alt="cv" />
            <button className="download">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1WDowQhfc18xcAAIo-rB9dz7GSGdWg_f9/view?usp=sharing"
                download="CV Bénédicte HÉRAULT développeuse fonrt-end.pdf"
              >
                Télécharger
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <span className="blur">
          <Trans i18nKey="blur">trans</Trans>
        </span>
        <div className="link-2">
          <Link to="/">
            <p className="link-p">
              <Trans i18nKey="back">trans</Trans>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
// <Trans i18nKey="back">trans</Trans>

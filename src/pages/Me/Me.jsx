import portfolio from "../../assets/Lazez portfolio anonymisé.mp4";
import saturnin from "../../assets/petit canard en plastique cherche bureau où se poser.mp4";
import cv from "../../assets/cv janv 22.png";
import "./Me.css";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Figures from "../../components/Figures/Figures";
import Boutons from "../../components/Boutons/Boutons";

export default function Me() {
  const { i18n } = useTranslation();

  return (
    <section className="me-section App">
      <div className="link">
        <Link to="/">
          <p className="link-p">
            <Trans i18nKey="back">trans</Trans>
          </p>
        </Link>
      </div>
      <Boutons />
      <div className="all-me">
        <Figures />
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
                href="https://drive.google.com/file/d/1mXiWgtruxoyUiklIptsqh0omSrXsYv2V/view?usp=sharing"
                download="CV Bénédicte HÉRAULT développeuse fonrt-end.pdf"
              >
                <Trans i18nKey="download">trans</Trans>
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

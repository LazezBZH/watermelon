import who from "../../assets/who.jpg";
import github from "../../assets/github.svg";
import portfolio from "../../assets/portfolio.jpg";
import linkedin from "../../assets/linkedin.jpg";
import "./links.css";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links">
      <Link to="/me">
        <div className="img-link_me">
          <img className="image-link" src={who} alt="who" />
        </div>
        <div className="txt-links">
          <Trans i18nKey="me">trans</Trans>
        </div>
      </Link>

      <a href="https://lazez-bzh.netlify.app/" target="_blank" rel="noreferrer">
        <div className="img-link_portfolio">
          <img className="image-link" src={portfolio} alt="portfolio" />
        </div>
        <div className="txt-links">
          <Trans i18nKey="portfolio">trans</Trans>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/benedicte-herault/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="img-link_linkedin">
          <img className="image-link" src={linkedin} alt="linkedin" />
        </div>
        <div className="txt-links">
          <Trans i18nKey="linkedin">trans</Trans>
        </div>
      </a>
      <a href="https://github.com/LazezBZH" target="_blank" rel="noreferrer">
        <div className="img-link_git">
          <img className="image-link" src={github} alt="github" />
        </div>
        <div className="txt-links">
          <Trans i18nKey="github">trans</Trans>
        </div>
      </a>
    </div>
  );
}

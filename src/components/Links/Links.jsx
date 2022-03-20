import who from "../../assets/who.jpg";
import "./links.css";
import { Trans } from "react-i18next";

export default function Links() {
  return (
    <div className="links">
      <a href="http://localhost:3000/me">
        <div className="dataLink">
          <img className="image-link" src={who} alt="who" />
        </div>

        <Trans className="txt-links" i18nKey="me">
          trans
        </Trans>
      </a>
      <a href="https://lazez-bzh.netlify.app/" target="_blank" rel="noreferrer">
        <div className="dataLink">
          <img className="image-link" src={who} alt="who" />
        </div>
        <Trans className="txt-links" i18nKey="portfolio">
          trans
        </Trans>
      </a>
      <a href="https://github.com/LazezBZH" target="_blank" rel="noreferrer">
        <div className="dataLink">
          <img className="image-link" src={who} alt="who" />
        </div>
        <Trans className="txt-links" i18nKey="github">
          trans
        </Trans>
      </a>
      <a
        href="https://www.linkedin.com/in/benedicte-herault/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="dataLink">
          <img className="image-link" src={who} alt="who" />
        </div>
        <Trans className="txt-links" i18nKey="linkedin">
          trans
        </Trans>
      </a>
    </div>
  );
}

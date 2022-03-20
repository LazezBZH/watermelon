import "./Proverbes.css";
import { Trans } from "react-i18next";

import tete from "../../assets/tete.jpg";
import carre from "../../assets/carre.webp";
import requin from "../../assets/requin.jpg";
import melon from "../../assets/melon.jpg";

export default function Proverbes() {
  return (
    <div className="proverbes">
      <div className="proverbes-txt">
        <Trans i18nKey="tete">trans</Trans>
      </div>
      <img className="tete" src={tete} alt="tete" />

      <div className="proverbes-txt">
        <Trans i18nKey="carre">trans</Trans>
      </div>
      <img className="carre" src={carre} alt="carre" />
      <div className="proverbes-txt">
        <Trans i18nKey="requin">trans</Trans>
      </div>
      <img className="requin" src={requin} alt="requin" />
      <div className="proverbes-txt">
        <Trans i18nKey="melon">trans</Trans>
      </div>

      <img className="melon" src={melon} alt="melon" />
    </div>
  );
}

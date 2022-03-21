import "./Home.css";
import { useTranslation, Trans } from "react-i18next";
import moi from "../../assets/moi.jpg";

import Links from "../../components/Links/Links";
import Proverbes from "../../components/Proverbes/Proverbes";
import Boutons from "../../components/Boutons/Boutons";

export default function Home() {
  const { t: translate } = useTranslation();

  return (
    <div className="Home App">
      <div className="App-header">
        <h2>{translate("Welcome")}</h2>
      </div>
      <Boutons />
      <div className="main">
        <Proverbes />
        <div className="right-section">
          <div className="app-welcome">
            <div className="defil">
              <Trans i18nKey="welcome">trans</Trans>
            </div>
            <div div className="moi">
              <img className="moi-img" src={moi} alt="moi" />
            </div>
          </div>
          <Links />
        </div>
      </div>
      <div>
        <Trans i18nKey="learn">trans</Trans>&nbsp;
        <a href="https://react.i18next.com">https://react.i18next.js</a>
      </div>
    </div>
  );
}

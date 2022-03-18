//import logo from "./logo.svg";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import moi from "./assets/moi.jpg";

export default function App() {
  const { t: translate, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>{translate("Welcome")}</h2>
        <button
          style={{
            backgroundColor: i18n.resolvedLanguage === "fr" ? "white" : "black",
            fontWeight: i18n.resolvedLanguage === "fr" ? "bolder" : "normal",
            color: i18n.resolvedLanguage === "fr" ? "black" : "white",
            borderColor: i18n.resolvedLanguage === "fr" ? "red" : "black",
          }}
          onClick={() => changeLanguage("fr")}
        >
          Français
        </button>
        <button
          style={{
            backgroundColor: i18n.resolvedLanguage === "en" ? "white" : "black",
            fontWeight: i18n.resolvedLanguage === "en" ? "bolder" : "normal",
            color: i18n.resolvedLanguage === "en" ? "black" : "white",
            borderColor: i18n.resolvedLanguage === "en" ? "red" : "black",
          }}
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
      </div>
      <div className="app-welcome">
        <div className="defil">
          <Trans i18nKey="welcome">trans</Trans>
        </div>
        <div div className="moi">
          <img className="moi-img" src={moi} alt="moi" />
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        Learn more:&nbsp;
        <a href="https://react.i18next.com">https://react.i18next.js</a>
      </div>
    </div>
  );
}

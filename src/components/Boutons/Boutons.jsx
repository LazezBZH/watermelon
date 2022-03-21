import "./Boutons.css";
import { useTranslation } from "react-i18next";

export default function Boutons() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
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
      <button
        style={{
          backgroundColor: i18n.resolvedLanguage === "yo" ? "white" : "black",
          fontWeight: i18n.resolvedLanguage === "yo" ? "bolder" : "normal",
          color: i18n.resolvedLanguage === "yo" ? "black" : "white",
          borderColor: i18n.resolvedLanguage === "yo" ? "red" : "black",
        }}
        onClick={() => changeLanguage("yo")}
      >
        Yoda
      </button>
    </>
  );
}

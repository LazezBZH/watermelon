import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Welcome:
            "Hey, I'm Bénédicte HÉRAULT, loocking for my first job as a front-end dev!",
          welcome: "Hello World!",
          tete: "When you are a dev you may sometimes have the head like a watermelon",
          carre: "sometimes you have to know how to stay square",
          requin: "and never become a shark for his colleagues",
          melon:
            "...at all times never have the melon! (sorry for the translation)",
        },
      },
      fr: {
        translations: {
          Welcome:
            "Bonjour, je suis Bénédicte HÉRAULT et je recherche mon premier emploi en tant que développeuse front-end!",
          welcome: "Coucou tout le monde!",
          tete: "Quand on est dev on a parfois la tête comme une pastèque",
          carre: "il faut parfois savoir rester carré",
          requin: "et ne jamais devenir un requin pour ses collègues",
          melon: "   ...en tout temps ne jamais avoir le melon!",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

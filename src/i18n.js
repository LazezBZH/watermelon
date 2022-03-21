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
            "Hey, I'm Bénédicte HÉRAULT, looking for my first job as a front-end dev!",
          welcome: "Hello World!",
          tete: "When you are a dev you may sometimes have the head like a watermelon",
          carre: "sometimes you have to know how to stay square",
          requin: "and never become a shark for his colleagues",
          melon:
            "...at all times never have the melon! (sorry for the translation)",
          learn: "Learn more:",
          me: "Who am I?",
          portfolio: "My portfolio",
          github: "My GitHub",
          linkedin: "LinkendIn",
          serious:
            "I make things seriously but I can also be crazy like when I apply for a job asking me to mention 'watermelon' in my response.",
          techno:
            "Interested in all the new technologies, I also appreciate taking the time to make coffee like my great-grandparents did.",
          old: "I'm not old, just vintage, never call me boomer it's wrong, X is a very nice letter that my generation proudly wears.",
          earth:
            "Every day, I try, as possible, to preserve our planet but I will never do without eating a good piece of beef when possible, while taking care not to make my carbon footprint catastrophic I do not wish, however, limit my trips around my home.",
          blur: "See you soon!",
          back: "Back",
          download: "Download",
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
          learn: "Découvrez:",
          me: "Qui suis-je?",
          portfolio: "Mon portfolio",
          github: "Mon GitHub",
          linkedin: "LinkendIn",
          serious:
            "Je fais les choses avec beaucoup de sérieux mais sais également faire preuve de folie comme quand je réponds à une offre d'emploi me demandant de mentionner 'pastèque' dans ma réponse.",
          techno:
            "Intéressée par toutes les nouvelles technologies j'apprécie aussi de prendre le temps de faire le café comme le faisaient mes arrière grand-parents.",
          old: "Je ne suis pas vieille, juste vintage, ne m'appelez jamais boomer c'est faux, X est une bien belle lettre que ma génération arbore fièrement.",
          earth:
            "Au quotidien, j'essaye, par un maximum d'actions à mon échelle, de préserver notre planète mais je n'abolirai jamais la côte de boeuf de mon alimentation, tout en veillant à ne pas rendre catastrophique mon emprunte carbone je ne souhaite pas pour autant limiter mes déplacements aux alentours de chez moi.",
          blur: "Au plaisir de vous rencontrer!",
          back: "Retour",
          download: "Télécharger",
        },
      },
      yo: {
        translations: {
          Welcome:
            "Salutations, Bénédicte HÉRAULT je suis et mon premier emploi en tant que développeuse front-end je recherche!",
          welcome: "Que la Force soit avec vous!",
          tete: "Lorsque que dev nous sommes, la tête comme une pastèque parfois avons",
          carre: "savoir rester carré il le faut parfois",
          requin: "et pour ses collègues un requin ne jamais devenir",
          melon: "   ...en tout temps le melon ne jamais avoir!",
          learn: "Explorez:",
          me: "Me connaître tu pourras!",
          portfolio: "Mon portfolio tu découvriras!",
          github: "Mon GitHub tu visiteras!",
          linkedin: "Dans LinkendIn tu voyageras!",
          serious:
            "Avec beaucoup de sérieux les choses je fais mais également faire preuve de folie comme quand je réponds à une offre d'emploi me demandant de mentionner 'pastèque' dans ma réponse je sais.",
          techno:
            "Intéressée par toutes les nouvelles technologies, de prendre le temps de faire le café comme le faisaient mes ayeux aussi j'apprécie.",
          old: "Vieille je ne suis pas , juste vintage, jamais boomer ne m'appelez, c'est faux, X est une bien belle lettre que ma génération fièrement arbore.",
          earth:
            "Au quotidien, par un maximum d'actions à mon échelle, de préserver notre planète, j'essaye mais jamais la côte de boeuf de mon alimentation je n'abolirai, tout en veillant à ne pas rendre catastrophique mon emprunte carbone, limiter mes déplacements aux alentours de chez moi, pour autant, je ne souhaite pas.",
          blur: "De vous rencontrer galactiquement honorée je serais!",
          back: "Les origines",
          download: "Conquérir",
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

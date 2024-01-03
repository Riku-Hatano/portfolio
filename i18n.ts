import i18n from "i18next";
import en from "./sentences/en";
import ja from "./sentences/ja";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en
  },
  ja: {
    translation: ja
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
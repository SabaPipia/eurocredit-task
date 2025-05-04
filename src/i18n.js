import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ka from "./locales/ka.json";

const i18n = createI18n({
  legacy: false,
  locale: "ka",
  fallbackLocale: "ka",
  messages: {
    en,
    ka,
  },
});

export default i18n;

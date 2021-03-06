import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import translationEN from './Language/en/translation.json';
import translationTR from './Language/tr/translation.json';


const resources = {
    en: {
        translation: translationEN
      },
    tr: {
    translation: translationTR
    }
};

i18n.use(detector)
	.use(reactI18nextModule)
	.init({
		resources,
        fallbackLng: "en", // use en if detected lng is not available
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
          escapeValue: false // react already safes from xss
        }
	});

export default i18n;

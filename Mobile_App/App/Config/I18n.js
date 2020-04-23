// External libs
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'
import { get } from 'lodash'

i18next
  .use({
    type: 'languageDetector',
    async: true,
    detect: (cb) => {
      const locales = RNLocalize.getLocales()
      cb(get(locales, '[0].languageCode', null))
    },
    init: () => {},
    cacheUserLanguage: () => {}
  })
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    react: {
      useSuspense: false
    }
  })

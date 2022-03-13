import i18n from 'i18next'

import en from './locales/en'
import pt from './locales/pt'

// TODO: Add lazy loading to translations

i18n.init({
  ns: [
    'common',
    'forgot-password',
    'login',
    'register'
  ],
  fallbackLng: 'pt',
  resources: {
    en,
    pt
  }
})

export { i18n }

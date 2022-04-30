
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
// @ts-ignore
import backend from 'i18next-http-backend'

i18next
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en'
  })

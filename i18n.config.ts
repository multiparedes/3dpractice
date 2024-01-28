import en from './langs/en.json'
import es from './langs/es.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'es',
  globalInjection: true,
  messages: {
    en,
    es,
  },
}))

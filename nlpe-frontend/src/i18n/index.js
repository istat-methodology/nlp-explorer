import { createI18n } from 'vue-i18n'

import it from './it.js'
import en from './en.js'

const messages = {
  it,
  en
}

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages
})

export default i18n

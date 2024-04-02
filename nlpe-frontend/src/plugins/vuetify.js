// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables.
import { createVuetify } from 'vuetify'

import { VFab } from 'vuetify/labs/VFab'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

// i18n
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { useI18n } from 'vue-i18n'
import i18n from '@/i18n'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  components: {
    VFab
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n })
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

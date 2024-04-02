<template>
  <v-app-bar app>
    <v-app-bar-nav-icon v-model="layout.drawer" @click="toggleSidebarVisible"></v-app-bar-nav-icon>
    <v-app-bar-title>
      <p>{{ $t('landing.title') }}</p>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn @click="toggleLanguage">
      {{ nextLocale.toUpperCase() }}
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
import { useLayoutStore } from '@/stores/LayoutStore'

// Theme
const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

  //Set theme background
  document.documentElement.style.setProperty(
    '--background-color',
    `var(--background-color-${theme.global.name.value})`
  )
}

// i18n
const { locale, availableLocales } = useI18n()

// Compute the next locale based on the current one
const nextLocale = computed(() => {
  const currentIndex = availableLocales.indexOf(locale.value)
  const nextIndex = (currentIndex + 1) % availableLocales.length
  return availableLocales[nextIndex]
})

const toggleLanguage = () => {
  // Update the vue-i18n locale to the next locale
  locale.value = nextLocale.value
}

// Drawer
const layout = useLayoutStore()
const toggleSidebarVisible = () => {
  layout.drawer = !layout.drawer
}
</script>

import '@/assets/main.css'

// Plugins
import { registerPlugins } from '@/plugins'

// i18n
import i18n from '@/i18n'

// Pinia
import { createPinia } from 'pinia'

// Components
import App from './App.vue'
import router from './router'

// Composables
import { createApp } from 'vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)

registerPlugins(app)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './providers/router'
const app = createApp(App).use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from '@/views/App.vue'
import router from '@/scripts/router'

import '@/assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import routes from './routes'
import { store } from './store'
import App from './App.vue'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(store)
app.use(routes)

app.mount('#app')

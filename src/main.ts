import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router'

import { setupStore } from '@/store'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'uno.css'
import '@/styles/index.scss'

import { ConfigProvider } from 'vant'

const app = createApp(App)

setupStore(app)

app.use(router)
app.use(Vant)
app.use(ConfigProvider)
app.mount('#app')

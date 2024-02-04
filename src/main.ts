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
import { VueMasonryPlugin } from 'vue-masonry'

const app = createApp(App)

setupStore(app)

app.use(router)
app.use(Vant)
app.use(ConfigProvider)
app.use(VueMasonryPlugin)
app.mount('#app')

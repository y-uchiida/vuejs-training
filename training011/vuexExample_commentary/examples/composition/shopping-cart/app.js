import { createApp } from 'vue'
import App from './components/App.vue'
import store from './store' /* store/index.js が読み込まれる */
import { currency } from './currency'

const app = createApp(App)

app.use(store)

app.mount('#app')

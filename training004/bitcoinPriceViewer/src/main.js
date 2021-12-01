import { createApp } from 'vue'
import App from './App.vue'

/* axios の読み込みを追加 */
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

/* vue オブジェクトに対してuse() で利用できるようになる */
app.use(VueAxios, axios)
app.mount('#app')

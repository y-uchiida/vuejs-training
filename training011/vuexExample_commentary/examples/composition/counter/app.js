import { createApp } from 'vue'
import Counter from './Counter.vue'
import store from './store' /* Vuex のオブジェクトを記述しているstore.js ファイルをインポート */

const app = createApp(Counter)

app.use(store)

app.mount('#app')

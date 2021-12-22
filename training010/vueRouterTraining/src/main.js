import { createApp } from 'vue'
import App from './App.vue'

/* vue-router インスタンスをインポートする */
import router from './router'

const app = createApp(App);

/* インポートしたrouter インスタンスをVueインスタンスへ渡す  */
app.use(router);
app.mount('#app');

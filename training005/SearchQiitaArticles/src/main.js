import { createApp } from 'vue'
import App from './App.vue'

/* axios の読み込みを追加 */
import axios from 'axios'
import VueAxios from 'vue-axios'

/* lodash の読み込みを追加 */
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

const app = createApp(App)

/* vue オブジェクトに対してuse() で利用できるようになる */
app.use(VueAxios, axios)

app.mount('#app')


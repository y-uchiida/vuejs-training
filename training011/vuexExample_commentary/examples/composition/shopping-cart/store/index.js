import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  /* modules に別ファイルへ分割したvuex のモジュールを含めることで、一つのインスタンスに合成する */
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

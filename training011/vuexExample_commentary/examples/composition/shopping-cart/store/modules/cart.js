import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null
}

// getters
const getters = {
  /*
   * cartProducts()
   * カートに入っている商品をオブジェクトデータとして返す関数
   * state 保持している id とquantity のみのitems 配列から、
   * 商品名や価格を含めたオブジェクトを作って返す
   */
  cartProducts: (state, getters, rootState) => {
    /* map() で、items 配列の各要素に対して処理を行う */
    return state.items.map(({ id, quantity }) => {
      /* id を検索条件にしてproducts のデータを取得し、
       * その内容を展開してオブジェクトにして返す
       */
      const product = rootState.products.all.find(product => product.id === id)
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  /* cartTotalPrice
   * カート内の商品の合計金額を返す関数
   * cartProductsで作られたオブジェクト配列に対して、reduce() コールバック関数を使ってprice を加算していく
   */
  cartTotalPrice: (state, getters) => {
    /* Array.prototype.reduce( function(前の計算結果, 今回の処理対象要素){ 処理内容、return は次の呼び出しの第1引数になる } )
     * アロー関数で記述すると、Array.prototype.reduce( (前の計算結果, 今回の処理対象要素) => { 処理内容 } )
     */
    return getters.cartProducts.reduce((total, product) => {
      /* 前の処理結果(これまでの商品の合計金額)に今回の処理対象要素(商品)の金額を足している */
      return total + product.price * product.quantity
    }, 0 /* 初期値は0 */ )
  }
}

// actions
const actions = {
  /*
   * checkout
   * カート内の商品の購入処理
   */
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items] /* 現在のカート内容を保存 */
    commit('setCheckoutStatus', null) /* カートの処理状態をnull に戻しておく */
    // empty cart
    commit('setCartItems', { items: [] }) /* カートの内容(state.items)を空に */

    /* api/shop のbuyProducts() で、購入処理を呼び出す */
    shop.buyProducts(
      products, /* 第1引数は購入する商品 */
      () => commit('setCheckoutStatus', 'successful'), /* 第2引数は成功時のコールバック関数 */
      () => { /* 第3引数は失敗時のコールバック関数 */
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        /* 空にしたカート内の商品データを戻しておく */
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  /* 
   * addProductToCart
   * 商品をカートに追加する処理
   */
  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null) /* カートの処理状態をnull に戻しておく */
    if (product.inventory > 0) { /* 商品の在庫がある場合、カートに追加できる */
      const cartItem = state.items.find(item => item.id === product.id) /* カート内の該当商品オブジェクトを取得 */
      if (!cartItem) { /* カートに該当商品が入っていない場合 */
        commit('pushProductToCart', { id: product.id }) /* 新たに商品を追加する */
      } else { /* カートに該当商品が1個以上入っている場合、 */
        commit('incrementItemQuantity', cartItem) /* カート内の商品数を増やす */
      }
      // remove 1 item from stock
      /* 在庫数を減少させる
       * cart モジュールから、productモジュールの内容にアクセスするので、第3引数に root: true を渡す
       */
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  }
}

// mutations
const mutations = {
  /* カートのitems 配列に、商品を購入数1 で新規に追加する */
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  /* 既存商品のカート内の商品数をインクリメントする */
  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  /* items state のsetter */
  setCartItems (state, { items }) {
    state.items = items
  },

  /* status state(商品の購入処理の結果)のsetter */
  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

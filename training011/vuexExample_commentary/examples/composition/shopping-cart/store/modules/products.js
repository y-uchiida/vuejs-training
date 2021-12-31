import shop from '../../api/shop'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  /*
   * getAllProducts
   * shop APIから、すべての商品データオブジェクト取得してproducts state にセットする
   * 外部APIの呼び出しを含むような非同期の処理はactions で行い、
   * state の更新・変更はmutations で行う、という使い分けを正しく実装した例
   */
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
  /*
   * setProducts
   * products state に、オブジェクトを設定するsetter
   */
  setProducts (state, products) {
    state.all = products
  },

  /*
   * decrementProductInventory
   * id で指定された商品の在庫数を減少させる
   */
  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

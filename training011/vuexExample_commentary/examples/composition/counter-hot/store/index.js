import { createStore } from 'vuex'

/*
 * getters, actions, mutations をそれぞれ別ファイルからインポートする 
 * 読み込まれるファイルの側では、すべての関数や変数をexport しておく
 */
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  test: 0,
  count: 0,
  history: []
}

const store = createStore({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store

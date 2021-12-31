import { createStore } from 'vuex'

// root state object.
// each Vuex instance is just a single state tree.
/*
 * state はVuex で管理する値を保持する
 */
const state = {
  count: 0
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
/*
 * mutations はstate を変化させる処理を記述する関数
 * 第1引数にすべてのstate を含むオブジェクト(state tree) を受け取り、
 * 第2引数に値の変更に利用するためのデータを受け取る
 * mutations の処理は同期的でなければならない
 */
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
/*
 * actions は、副作用を発生させる処理を含む関数
 * 「副作用」とは、ある処理によってデータの内容が変化し、それ以降の演算結果に影響を及ぼすこと
 * Vuex での文脈に即して具体的に言うと、state の内容を変化させることによって、
 * 変化させたstate に関連するその他のコンポーネントや関数の処理結果に変化が起こること
 * mutations は同期的(state の値を変化させるだけ)でなければならないが、actions は非同期な処理を含めることができる
 * 外部APIやデータベースアクセスの結果などを介して、state に変更を及ぼす場合はactions を利用する
 * そのため、actions を実行してからcommit で mutations を実行する、という単一方向データフローの決まりを設ける場合が多い
 */
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions.
/*
 * getters は、state にまつわる値を出力する関数
 * 値それ自体を取り出す場合のほか、state の値を処理して取り出す場合もgetters を用いる
 */
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
/*
 * createStore() にstate, getters, actions, mutations を渡してオブジェクトを作り、それをエクスポートするのが特徴
 */
export default createStore({
  state,
  getters,
  actions,
  mutations
})

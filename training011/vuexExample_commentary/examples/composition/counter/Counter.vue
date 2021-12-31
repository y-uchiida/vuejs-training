<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore() /* useStore() でVuexのstoreを参照できるようにする */

    return {
      count: computed(() => store.state.count), /* store の値をそのまま表示する場合、computed で値を取る */
      evenOrOdd: computed(() => store.getters.evenOrOdd), /* getters の場合も、computed で取得する */
      increment: () => store.dispatch('increment'), /* mutations の場合は、dispatch('mutations 関数名')で実行 */
      decrement: () => store.dispatch('decrement'),
      incrementIfOdd: () => store.dispatch('incrementIfOdd'), /* actions も同じく、dispatch('mutations 関数名')で実行する */
      incrementAsync: () => store.dispatch('incrementAsync')
    }
  }
}
</script>

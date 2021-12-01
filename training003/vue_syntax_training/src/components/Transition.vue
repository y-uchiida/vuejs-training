<script>
export default {
  setup() {},
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toggle_show: function () {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<template>
  <h2>トランジション</h2>
  <p>要素の表示・非表示の切り替えの際に、cssクラスを設定することができる</p>
  <p>
    トランジションの機能を利用すると、cssのアニメーションを使って遷移効果を簡単に作れる
  </p>
  <p>ローディングスピナーなどにも応用できる</p>
  <p>transition タグのname属性につけた名前をプリフィックスとして付与したクラス名が利用される</p>
  <p>参考: https://v3.ja.vuejs.org/guide/transitions-enterleave.html</p>

  <p>
    <button v-on:click="toggle_show">toggle show/hide</button>
  </p>
  <transition name="toggle">
    <p v-show="isShow" class="">fade text</p>
  </transition>
</template>

<style scoped>
.toggle-enter-active,
.toggle-leave-active {
  transition: opacity 1s;
}

.toggle-enter-from,
.toggle-leave-to {
  opacity: 0;
}
</style>

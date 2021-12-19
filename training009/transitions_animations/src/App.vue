<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ToggleText from './components/ToggleText.vue'
import SlideToggle from './components/SlideToggle.vue'
import CombinedToggle from './components/CombinedToggle.vue'
import InitializeTransition from './components/InitializeTransition.vue'
import CustomTransitionClass from './components/CustomTransitionClass.vue'
import TransitionModeSample from './components/TransitionModeSample.vue'
import ListTransition from './components/ListTransition.vue'
</script>

<template>
  <h1>Imprements sample Transitions and Animations</h1>
  <h2>シンプルなフェードイン/フェードアウトの実装</h2>
  <ToggleText />
  <hr>
  <h2>cssのkeyframes animationを利用したスライドイン/スライドアウトの実装</h2>
  <SlideToggle />
  <hr>
  <h2>css animation と transition を併用する</h2>
  <CombinedToggle />
  <hr>
  <h2>初期描画時にトランジションを適用する</h2>
  <InitializeTransition />
  <hr>
  <h2>カスタムトランジションクラスを利用して、外部CSSライブラリを適用する</h2>
  <CustomTransitionClass />
  <hr>
  <h2>mode 属性を使って、複数要素のトランジションをスムーズに見せる</h2>
  <TransitionModeSample />
  <hr>
  <h2>複数の要素の追加・削除を扱うためのリストトランジション</h2>
  <ListTransition />
  <hr>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

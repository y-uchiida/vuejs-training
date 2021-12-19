<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<template>
  <div class="main">
    <button v-on:click="show = !show">Toggle text</button>
    <!--
      type="animation" を指定することで、animation プロパティの適用時間にあわせて
      遷移完了と判断させることができる
    -->
    <transition name="fade" type="animation">
      <p v-if="show">fade text</p>
    </transition>
    
    <!--
      animation とtransition のどちらとも異なるタイミングで遷移完了を判定したい場合、
      duration プロパティにミリ秒単位の数値を設定することができる
      以下の例では、active のクラスが外れるまで1500ms かかることを示している
    -->
    <transition name="fade" :duration="1500">
      <p v-if="show">fade text</p>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to, 
.fade-leave-from{
  opacity: 1;
}

.fade-enter-active, 
.fade-leave-active{
  transition: opacity .5s;
}

.fade-enter-active {
  animation: slide-in 1s;
}
.fade-leave-active {
  animation: slide-in 1s reverse;
}

@keyframes slide-in{
  from {
    transform: translateX(100px);
  }
  to{
    transform: translateX(0px);
  }
}
</style>

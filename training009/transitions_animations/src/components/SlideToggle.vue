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
    <button v-on:click="show = !show">slide text</button>
    <transition name="fade">
      <p v-if="show">fade text</p>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active{
  animation: slide-in .5s;
}
.fade-leave-active{
  /* reverse を指定しておくことで、to から from へのアニメーションを適用できる */
  animation: slide-in .5s reverse;
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

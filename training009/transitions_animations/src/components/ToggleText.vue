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
    <transition name="fade">
      <p v-if="show">fade text</p>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-from{
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active{
  /* 現れる時のトランジションの状態 */
  transition: opacity .5s;
}
.fade-enter-to{
  /* 現れる時の最後の状態 */
  opacity: 1;
}

.fade-leave-from{
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active{
  /* 消えるときのトランジションの状態 */
  transition: opacity .5s;
}
.fade-leave-to{
  /* 消える時の最後の状態 */
  opacity: 0;
}

</style>

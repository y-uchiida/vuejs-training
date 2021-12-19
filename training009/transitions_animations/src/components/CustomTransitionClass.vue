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
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="main">
    <p>Animate.css(<a href="https://animate.style/" target="_blank">https://animate.style/</a>) を適用する</p>
    <button v-on:click="show = !show">Animation text</button>
    <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <p v-if="show">Animation text</p>
    </transition>
  </div>
</template>

<style scoped>
</style>

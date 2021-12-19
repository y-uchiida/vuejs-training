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
    <transition name="fade" type="animation" appear>
      <p>fade text</p>
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

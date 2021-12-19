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
    <transition name="fade" mode="out-in">
      <p v-if="show" key="1">string 1</p>
      <p v-else key="2">string 2</p>
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
  transition: opacity .3s;
}

.fade-enter-active {
  animation: slide-in .5s;
}
.fade-leave-active {
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

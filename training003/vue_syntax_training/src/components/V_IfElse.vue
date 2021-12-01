<script>
export default {
  setup() {},
  data() {
    return {
      color: ""
    };
  },
  methods: {
    color_blue: function(){
      this.color = "blue"
    },
    color_yellow: function(){
      this.color = "yellow"
    },
    color_red: function(){
      this.color = "red"
    },
    color_black: function(){
      this.color = "black"
    }
  },
};
</script>

<template>
<h2>v-if/v-else ディレクティブのテスト</h2>
<p>要素のDOM上の出力の切り替えのために、v-if/v-else-if/v-else が利用できる</p>
<button type="text" v-on:click="color_blue">blue</button>
<button type="text" v-on:click="color_yellow">yellow</button>
<button type="text" v-on:click="color_red">red</button>
<button type="text" v-on:click="color_black">black</button>
<p>
  色の判定: 
  <span v-if="color === 'blue'">blue, go</span>
  <span v-else-if="color === 'yellow'">yellow, caution</span>
  <span v-else-if="color === 'red'">red, stop</span>
  <span v-else>unknown color</span>
</p>
</template>

<style scoped>

</style>

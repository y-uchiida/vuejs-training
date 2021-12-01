<script>
export default {
  setup() {},
  data() {
    return {
      tf: true
    };
  },
  methods: {
    toggle_tf: function(){
      this.tf = !this.tf
    }
  },
};
</script>

<template>
<h2>v-show ディレクティブのテスト</h2>
<p>trueに時に表示、falseのときに非表示となる</p>
<p>v-if はDOM自体を削除するが、v-showはcss(display: none)によって画面上から表示を消す</p>
<p>
  <button v-on:click="toggle_tf">toggle tf</button>
</p>
<span v-show="tf">tf === true</span>
<span v-show="tf !== true">tf === false</span>
</template>

<style scoped>

</style>

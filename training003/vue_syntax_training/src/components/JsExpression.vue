<script>
export default {
  setup() {},
  data() {
    return {
      string: "test string",
      num: 100,
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
<h2>JavaScriptの式を出力する例</h2>
<p>マスタッシュ構文内では、式の展開結果を表示することもできる</p>
<p>数値の計算式の結果や、参考演算子の処理結果を表示できるので、場合によっては便利に使える</p>
<p>変数への代入など、文を処理することはできない(エラーが発生する)</p>

<p>string + "_add" => {{ string + "_add" }}</p>
<p>num + 1 => {{ num + 1 }}</p>
<p>{{ tf ? 'TRUE' : 'FALSE' }}</p>
<button v-on:click="toggle_tf"> toggle_tf </button>
</template>

<style scoped>

</style>

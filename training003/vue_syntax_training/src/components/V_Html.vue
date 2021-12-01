<script>
export default {
  setup() {},
  data() {
    return {
      input_val: ''
    };
  },
  methods: {},
};
</script>

<template>
<h2>v-html ディレクティブのテスト</h2>
<p>vueでバインドされた結果を、htmlとして解釈させる(DOMとして追加する)ことができる</p>
<p>スクリプトインジェクション脆弱性につながる恐れがあるので、利用する場合は細心の注意を払う</p>
<p>以下の入力欄にhtmlを含む文字列を入力してみて、結果がどうなるかを見てみる</p>
<input type="text" v-model="input_val">
<p>
  <span>v-html 無しの場合: </span> <span>{{ input_val }}</span>
</p>
<p>
  <span>v-html ありの場合: </span><span v-html="input_val"></span>
  </p>
</template>

<style scoped>

</style>

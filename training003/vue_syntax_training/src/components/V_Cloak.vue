<script>
export default {
  setup() {},
  data() {
    return {
      string: "string"
    };
  },
  methods: {},
};
</script>

<template>
<h2>v-cloak ディレクティブのテスト</h2>
<p>リソースの読み込みからレンダリングの完了までの間に、vueの適用前のマスタッシュ文字列などが表示されてしまう場合がある</p>
<p>v-cloak ディレクティブをつけると、レンダリングが完了するまでの間、cssで識別可能な[v-cloak] をつけてくれる</p>
<p>css に[v-cloak] { display: none; } などと記述しておくと、レンダリング中は画面上に表示されなくなる</p>
<p>v-cloak 無しの場合: <span>{{ string }}</span></p>
<p>v-cloak ありの場合: <span v-cloak>{{ string }}</span></p>
<p></p>
</template>

<style scoped>
/* v-cloak ディレクティブが設定された要素を非表示にする */
[v-cloak] {
  display: none;
}
</style>

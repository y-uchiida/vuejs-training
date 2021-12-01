<script>
export default {
  setup() {},
  data() {
    return {
      string: "<a href='https://uchiida.com/'>ウチイダ的エンジニアライフ</a>"
    };
  },
  methods: {},
};
</script>

<template>
<h2>v-text ディレクティブのテスト</h2>	
<p>マスタッシュ構文の代わりに、プロパティをhtmlに挿入できる</p>
<p>マスタッシュとは違って、要素内のテキストの1部分をプロパティにするようなことができない</p>
<p>どちらを利用した場合も、htmlはエスケープして表示されるため、スクリプトインジェクションの心配はない</p>

<h3>マスタッシュを利用した場合</h3>
<p>{{string}}</p>

<h3>v-text ディレクティブを利用した場合</h3>
<p v-text="string"></p>
</template>

<style scoped>

</style>

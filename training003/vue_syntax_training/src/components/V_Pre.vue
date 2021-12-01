<script>
export default {
  setup() {},
  data() {
    return {
      string: 'test string'
    };
  },
  methods: {},
};
</script>

<template>
<h2>v-pre ディレクティブのテスト</h2>
<p>v-pre ディレクティブを付与した要素と、その子要素のコンパイルをスキップすることができる</p>
<p>ディレクティブやマスタッシュがない、プレーンなHTMLとして解釈を素早くおこなうため、コンパイルの速度が速くなる</p>
<p>また、内容が変換されないので、テンプレートに入力された内容をそのまま表示したい場合にも利用できる</p>
<h3>v-pre無しの場合</h3>
<p>string:{{ string }}</p>
<h3>v-preありの場合</h3>
<p v-pre>string:{{ string }}</p>
</template>

<style scoped>

</style>

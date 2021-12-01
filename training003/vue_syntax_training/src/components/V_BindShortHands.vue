<script>
export default {
  setup() {},
  data() {
    return {
      url: "https://uchiida.com"
    };
  },
  methods: {},
};
</script>

<template>
<h2>v-bind ディレクティブの省略形のテスト</h2>
<p>v-bind はよく使うので、省略して : だけで表すことができる</p>
<p>
  省略しない場合
  <a v-bind:href="url">Link1</a>
</p>
<p>
  省略した場合
  <a :href="url">Link2</a>
</p>

</template>

<style scoped>

</style>

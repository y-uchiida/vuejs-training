<script>
export default {
  setup() {},
  data() {
    return {
      string: "hello vue"
    };
  },
  methods: {
    reverseString: function(event) {
      this.string = this.string.split('').reverse().join('')
    }
  },
};
</script>

<template>
<h2>v-once ディレクティブのテスト</h2>
<p>v-once は、最初の1度だけバンディングを行いたい場合に利用する</p>
<p>ページ上のバインディング対象を減らし、パフォーマンスを向上させる効果がある</p>
<ul>
  <li>
    v-once 無しの場合: {{string}}
    </li>
  <li v-once>
    v-once ありの場合: {{string}}
  </li>
</ul>
<button type="button" v-on:click="reverseString"> Reverse string </button>
</template>

<style scoped>

</style>

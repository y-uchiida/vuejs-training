<script>
export default {
  setup() {},
  data() {
    return {
      string: "",
      new_string: "",
      old_string: "",
      km: 0,
      m: 0,
    };
  },
  methods: {},
  watch: {
    string: function (new_str, old_str) {
      this.new_string = new_str;
      this.old_string = old_str;
    },
    km: function (value) {
      console.log(value);
      this.km = value;
      this.m = value * 1000;
    },
    m: function (value) {
      this.km = value / 1000;
      this.m = value;
    },
  },
};
</script>

<template>
  <h2>監視プロパティ(watch)</h2>
  <p>指定のプロパティの値を監視して、変更された際に関数を呼び出すことができる</p>
  <p>コールバック関数の引数として、第1引数には新しい値が、第2引数には変更前の値が入る</p>
  <p>watch はAPIへのリクエストなど非同期的な処理をさせる時に使い、</p>
  <p>単に連動的な変化が起こるものの場合はcomputed(算出プロパティ)を使って書く方がスッキリすることがおおい</p>
  <p>※computed は「動的にプロパティの値を変化させるための機能」であり、処理結果としてプロパティの値をreturnする仕組み</p>
  <p>※watcher は「指定したデータの変更をトリガーに、何らかの処理を実行させるための機能」であり、return を必要としない</p>
  <p>※そのため、ユーザーの処理に応じて非同期的処理を行わせるなどができる</p>
  <p>参考：https://v3.ja.vuejs.org/guide/computed.html#算出プロパティ-vs-監視プロパティ</p>
  <p>オプションとしてdeep とimmediateが設定できる</p>
  <p>boolean deep: trueにすると、監視対象のオブジェクトの中身が変化した場合もコールバックを実行する</p>
  <p>boolean immediate: trueにすると、初期化処理の際もコールバックを実行する</p>

  <input type="text" v-model="string" />
  <p>新しい値 {{ new_string }}</p>
  <p>変更前の値 {{ old_string }}</p>

  <h3>km ←→ m 相互変換</h3>
  <p><input type="text" v-model="km" />km</p>
  <p><input type="text" v-model="m" />m</p>
</template>

<style scoped>
</style>

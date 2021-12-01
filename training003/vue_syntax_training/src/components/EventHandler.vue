<script>
export default {
  setup() {},
  data() {
    return {
      tf: true,
      num: 0,
      string: ""
    };
  },
  methods: {
    eventHandler: function($event, rand){
      this.tf = !this.tf
      this.num = rand
      this.string = $event.target.innerHTML
    },
    check: function(event){
      event.target.innerHTML = "✓ " + event.target.innerHTML
      window.alert("check once")
    }
  },
};
</script>

<template>
<h2>イベントハンドラ</h2>
<p>イベントハンドラは、methodsに登録した関数を呼び出すこともできるし、処理を直接記述することもできる</p>
<p>メソッドに特定の値を渡したい場合は、引数に値を入れて、メソッドの仮引数を設定しておけばよい</p>
<p>特定の値とイベントオブジェクトを併用する場合は、$eventを明示的に呼び出し側とメソッドに追加する</p>
<p>イベントハンドラの動作を規定するためのイベント修飾子というものがある</p>
<p>1回だけイベントハンドラを実行させるものや、イベント伝搬を制御するものなど、イベントハンドリングでよく使うパターンが設定されている</p>
<p>参考：https://v3.ja.vuejs.org/api/directives.html#v-on</p>
<p>v-on もよく使うディレクティブなので、省略記法として @ が用意されている</p>

<p>{{ tf ? 'TRUE' : 'FALSE' }}</p>
<button v-on:click="rand = Math.random(); eventHandler($event, rand)">{{ tf ? 'TRUE' : 'FALSE' }}</button>
<button v-on:click="rand = Math.random(); eventHandler($event, rand)">{{ tf ? 'Good' : 'Bad' }}</button>
<p>num: {{num}}</p>
<p>click element innerHTML: {{string}}</p>

<p>
  <button @click.once="check">check once</button>
</p>

</template>

<style scoped>

</style>

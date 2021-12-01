<script>
export default {
  setup() {},
  data() {
    return {
      isLarge: true,
      isGray: false,
      like_button: "bg-gray border corner-radius",
      danger_style: "text-brown bg-red bold",
      largeAndGray: {
        large: true,
        'text-gray': true,
      }
    };
  },
  /* methods: このコンポーネントのメソッドを、オブジェクトで定義する */
  methods: {
    toggle_isLarge: function(){
      this.isLarge = !this.isLarge
    },
    toggle_isGray: function(){
      this.isGray = !this.isGray
    }
  },
  /* computed プロパティ: 処理結果をプロパティとして返す */
  computed: {
  },
};
</script>

<template>
  <h2>クラスやスタイルの動的な変更</h2>

  <h3>真偽値によるクラスの動的な変更</h3>
  <p>要素のclassを真偽値によって変更する場合... v-bind:class="{ classname: tf }" のように書ける</p>
  <p>動的に文字サイズを切り替える: <span v-bind:class="{large: isLarge}">test string</span></p>
  <p>通常のクラス設定と併用: <span class="border" v-bind:class="{large: isLarge}">test string</span></p>
  <p>文字サイズと文字色を切り替える: <span v-bind:class="{large: isLarge, 'text-gray': isGray}">test string</span></p>
  <p>
    <button v-on:click="toggle_isLarge">toggle isLarge</button>
    <button v-on:click="toggle_isGray">toggle isGray</button>
  </p>

  <h3>プロパティの値をクラスに指定する</h3>
  <p>vueコンポーネントの値をclassの属性として利用すると、複数のクラスをまとめて設定できて便利</p>
  <p>また、配列形式で記述することで、複数のプロパティを渡すこともできる</p>
  <p>spanタグにlike_button プロパティをclsaa属性として渡す: <span v-bind:class="like_button">span content</span></p>
  <p>like_button, danger_stype プロパティをclsaa属性として渡す: <span v-bind:class="[like_button, danger_style]">span content</span></p>
  <p>オブジェクトlargeAndGray プロパティをclsaa属性として渡す: <span v-bind:class="largeAndGray">span content</span></p>
</template>

<style scoped>
.large {
  font-size: xx-large;
}
.text-gray{
  color: gray;
}
.bg-gray{
  background: lightgray;
}
.border{
  border: 1px solid green
}
.corner-radius{
  border-radius: 4px;
}
.text-brown{
  color: brown;
}
.bold{
  font-weight: bold;
}
.bg-red{
  background: lightcoral;
}
</style>

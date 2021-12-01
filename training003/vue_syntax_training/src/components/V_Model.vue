<script>
export default {
  setup() {},
  data() {
    return {
      content: "",
      cb_1: "",
      cb_2: [],
      radios: "",
    };
  },
  methods: {
  },
};
</script>

<template>
<h2>v-model ディレクティブのテスト</h2>
<p>v-model は、双方向データバインディングを実現するためのディレクティブ</p>
<p>html側のDOM変更を、vueオブジェクトに反映する時に使う</p>
<p>具体的には、主にform要素の入力によってvueオブジェクトの内容を変更する際に利用する</p>
<p>textarea のときはマスタッシュ構文だとうまくいかないので、v-modelを利用する</p>
<p>checkboxにv-modelでvueオブジェクトのプロパティを割り当てた場合、checkboxのvalueの値が、バインドされたプロパティに渡される</p>
<p>valueが設定されていない場合は、boolean(チェックされているかどうかの真偽値)になる</p>
<p>複数のcheckboxが、ひとつのプロパティにバインドされている場合、それぞれのvalue値を配列の要素として受け取る</p>
<p>複数のcheckboxの値を受け取るプロパティは、配列として初期化しておく必要がある</p>
<p>セレクトボックスの場合も同じ挙動になる</p>
<p>v-modelにはバインドの挙動を規定するオプション修飾子がある</p>
<p>.lazy: inputタグやtextareaの入力内容の反映を、change イベント(フォーカスが離れたとき)の発生まで評価しない</p>
<p>.number: バインドする前に数値にキャストする</p>
<p>.trim: 先頭・末尾の空白を取り除く</p>

<h3>textareaのコンテンツにマスタッシュを渡した場合(うまく動かない)</h3>
<p>
  <textarea name="" id="" cols="30" rows="10">{{ content }}</textarea>
</p>

<h3>textareaにv-modelを設定した場合(連動する)</h3>
<p>
  <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
</p>
<p>
  <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
</p>

<h3>チェックボックスひとつだけの場合(バインドの先のプロパティを文字列にしておく)</h3>
<p>
  <label for="cb_1">
    <input type="checkbox" value="cb_1" id="cb_1" v-model="cb_1">チェックボックス1
  </label>
</p>
<p>{{cb_1}}</p>

<h3>ひとつの変数に、複数のチェックボックスがバインドされている場合(バインド先のプロパティを配列にしておく)</h3>
<p>
  <label for="cb_2-1">
    <input type="checkbox" value="cb_2-1" id="cb_2-1" v-model="cb_2">チェックボックス2-1
  </label>
  <label for="cb_2-2">
    <input type="checkbox" value="cb_2-2" id="cb_2-2" v-model="cb_2">チェックボックス2-2
  </label>
  <label for="cb_2-3">
    <input type="checkbox" value="cb_2-3" id="cb_2-3" v-model="cb_2">チェックボックス2-3
  </label>
</p>
<p>
  {{ cb_2 }}
</p>

<h3>ラジオボタンをv-modelでバインドするサンプル</h3>
<p>
  <label for="radio_1">
    <input type="radio" name="radios" v-model="radios" value="radio_1" id="radio_1">ラジオボタン1
  </label>
</p>
<p>
  <label for="radio_2">
    <input type="radio" name="radios" v-model="radios" value="radio_2" id="radio_2">ラジオボタン2
  </label>
</p>
<p>
  <label for="radio_3">
    <input type="radio" name="radios" v-model="radios" value="radio_3" id="radio_3">ラジオボタン2
  </label>
</p>
<p>
  {{radios}}
</p>

</template>

<style scoped>

</style>

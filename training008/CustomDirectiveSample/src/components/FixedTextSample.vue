<script>
export default {
  data() {
    return {
      direction: "right",
      pinPadding: 200,
    };
  },
  /* カスタムディレクティブを定義する */
  directives: {
    pin: { /* 利用するときは v-pin  */
      mounted(el, binding) { /* 要素が親DOM に挿入された後に呼び出される */
        /* 第一引数 el で、DOM要素自体のオブジェクトへアクセスできる */
        el.style.position = "fixed";
        /* 第2引数 binding は、ディレクティブで設定した変数にアクセスできる
         * arg は ディレクティブを設定した際の :の右側の値を取得できる
         */
        const s = binding.arg || "top";
        /* binding.value は、ディレクティブで設定した = の右側の値を取得できる
         * v-bind でオブジェクトのdata 変数などにバインドしていた場合は、値が変化する
         * オブジェクトが渡されていた場合、それぞれの値にアクセスするために更に . につなげて要素名を書く
         */
        el.style[s] = binding.value + "px";
      },
      updated(el, binding) { /* コンポーネントと子が更新されたときに呼び出される */
        const s = binding.arg || "top";
        el.style[s] = binding.value + "px";
      },
    },
  },
};
</script>

<template>
  <div id="dynamic-arguments-example" class="demo full-page">
    <h2>Scroll down the page</h2>
    <input type="range" min="0" max="500" v-model="pinPadding" />
    <p v-pin:[direction]="pinPadding">
      Stick me {{ pinPadding }}px from the {{ direction }} of the page
    </p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.full-page {
  height: 100vh;
  position: relative;
}
</style>

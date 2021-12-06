<script>
export default {
  setup() {},
  data() {
    return {
      string: "<a href='https://uchiida.com/'>ウチイダ的エンジニアライフ</a>",
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      basePrice: 100 /* 税抜き価格のプロパティ(ノーマル) */,
    };
  },
  /* methods: このコンポーネントのメソッドを、オブジェクトで定義する */
  methods: {
    sumMethod: function () {
      return this.nums.reduce(function (sum, elm) {
        return sum + elm;
      }, 0);
    },
    methodsNumber: function () {
      console.log("methods!");
      return Math.random();
    },
  },
  /* computed プロパティ: 処理結果をプロパティとして返す */
  computed: {
    sumProp: function () {
      return this.nums.reduce(function (sum, elm) {
        return sum + elm;
      }, 0);
    },
    //
    taxIncludedPrice: {
      /* 税込み価格のプロパティ(算出) */
      get: function () {
        /* 値が取得されたときの処理(getter): taxIncludedPrice が呼び出されたときに実行される */
        return this.basePrice * 1.1;
      },
      set: function (value) {
        /* 値が設定されたときの処理(setter): taxIncludedPrice に値が代入されたときの処理(basePriceも連動して変更する) */
        this.basePrice = value / 1.1;
      },
    },
    computedNumber: function () {
      console.log("computed!");
      return Math.random();
    },
  },
};
</script>

<template>
  <h2>算出プロパティ(computed)</h2>
  <p>処理を実行した結果を返してくれるプロパティ</p>
  <p>methods と得られる効果は似ているが、違いがいくつかある</p>
  <p>プロパティなのでtemplate内で呼び出すときに()がいらないこと</p>
  <p>算出プロパティの処理結果に関係するデータが変更されたときだけ処理されること<br>
  （マスタッシュ内に記述されたmethodsは、画面の再描画のたびに毎回実行されるので負荷が大きくなる）</p>
  <p>setter, getterの両方が作れること(methods はgetterだけ)</p>
  <p>処理内容のキャッシュを利用するため、大きなデータを扱う際のレスポンスが早くなる場合があること</p>

  <h3>算出プロパティを使った場合</h3>
  <p>sumProp => {{ sumProp }}</p>

  <h3>同じ内容のメソッドを使った場合</h3>
  <p>sumMethod() => {{ sumMethod() }}</p>

  <h3>税込み価格と税抜き価格の値が連動して変更される入力欄のサンプル</h3>
  <p>
    base price:
    <input type="text" v-model="basePrice" />
  </p>
  <p>
    tax included price:
    <input type="text" v-model="taxIncludedPrice" />
  </p>

  <h3>乱数生成がキャッシュされるサンプル</h3>
  <h4>computed:</h4>
  computed プロパティはリアクティブでない内容であればキャッシュを使って内容を返す
  <ol>
    <li>{{ computedNumber }}</li>
    <li>{{ computedNumber }}</li>
    <li>{{ computedNumber }}</li>
  </ol>
  <h4>methods:</h4>
  methodsは実行のたびに処理を行うので、乱数が別の値になる
  <ol>
    <li>{{ methodsNumber() }}</li>
    <li>{{ methodsNumber() }}</li>
    <li>{{ methodsNumber() }}</li>
  </ol>
</template>

<style scoped>
</style>

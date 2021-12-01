# BitCoin 価格表示アプリの作成
axios でCoinDeskのAPIからBitCoinのリアルタイム価格を取得し画面上に表示するアプリです  
前回までと同様、vite でプロジェクトを作成しました  

## axios 導入
1. パッケージのインストール
vite でプロジェクトのスカフォールド作成後、以下のコマンドでパッケージをインストールします
~~~bash
$ npm install --save axios vue-axios
~~~

2. パッケージの読み込み(import)とオブジェクトへの導入
インストールコマンドの実行後、アプリ内にパッケージをインポートします  
まず、`src/main.js` に以下を追記してaxiosを読み込ませます
~~~javascript
/* axios の読み込みを追加 */
import axios from 'axios'
import VueAxios from 'vue-axios'
~~~

そして、vue インスタンスのマウントの記述を以下のように書き換えます
~~~javascript
const app = createApp(App)

/* vue オブジェクトに対してuse() で利用できるようになる */
app.use(VueAxios, axios)
mount('#app')
~~~

## 利用方法
上記の手順を済ませたら、コンポーネントのロジックの記述でaxiosを利用して非同期処理を記述します
~~~JavaScript
export default {
  methods: {
    async_func(){
      this.axios.get('https://api.example.com/test').then((response) => {
        console.log('async ok')
      }).catch((err) => {
        console.error(err)
      })
    },
  }
}
~~~

`this.axios` の形で実行する必要があることがポイントです

## 小数点以下の表示するケタ数の調整
`toFixed()` メソッドを利用して小数点以下の値を丸めるように実装しました  
vue 2 までは、表示調整用のメソッドを作れる filter がありましたが、vue 3で廃止されています  
methodsに書き換えて対応しました  

## 参考
- vue-axios(npm):  
  https://www.npmjs.com/package/vue-axios

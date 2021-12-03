# Qiita APIを利用したリアルタイム検索
axios でQuiita APIから指定キーワードに一致する記事を検索して取得するアプリです  
前回のBitCoin アプリに加えて、lodashで通信頻度をコントロールする処理を追加しています  


## 利用するパッケージ
- axios
- lodash

## axios 導入
training004 の手順と同じなので割愛します

## lodash 導入
1. パッケージのインストール
以下のコマンドでパッケージをインストールします
~~~bash
$ npm install --save vue-lodash lodash
~~~

2. パッケージの読み込み(import)
`src/main.js` で、パッケージの読み込みを行います  
~~~JavaScript
/* lodash の読み込みを追加 */
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
~~~

3. コンポーネントへ、lodash のメソッドを読み込み
axios `use()`でVueインスタンス自体に読み込みましたが、今回は少しやり方を変えてみます  
利用するコンポーネントに、利用するメソッドだけ追加する方法を試しました  
`src/components/SearchQiitaArticles` に追記します  

~~~JavaScript
/* lodash の debounce メソッドを追加 */
import { debounce } from 'lodash';

export default {
  name: "SearchQiitaArticles",
/* ...以下略... */
~~~

## lodashの利用方法
ロードしたコンポーネント内で、`debounce()` がそのまま使えるようになっています
```JavaScript
this.debouncedGetAnswer = debounce(this.getAnswer, 600);
```

## 参考
- vue-lodash(npm):  
  https://www.npmjs.com/package/vue-lodash

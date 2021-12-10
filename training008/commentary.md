# カスタムディレクティブ
`v-bind` などのvueディレクティブを追加設定できる  
カスタムディレクティブを利用することで、複雑なコンポーネントの動作をシンプルに記述できる場合がある  

## Vue 3でのサポート
2から3にバージョンが変わり、カスタムディレクティブの宣言方法(設定するフックの名称と挙動)が変更された  
Vue 2 のコードはVue3 では利用できないので、手直しが必要になる  
また、Vue 3 でもカスタムディレクティブはサポートされているが、Composition APIの利用が推奨されている  

## カスタムディレクティブのグローバル登録
Vue インスタンスのメソッド`directive()` でカスタムディレクティブを追加する  
利用する際は、設定したディレクティブ名の先頭に`v-` のプリフィックスを付ける

~~~JavaScript
app.directive('MyCustomDirective', ....)
~~~

~~~JavaScript
/* 利用する場合の記述は以下のようになる */
<div v-my-custom-directive></div>
~~~

## カスタムディレクティブのローカル登録
Vue インスタンスへ直接登録すると、すべてのコンポーネントで利用できる  
ローカルに指定してスコープを切っていくほうが影響範囲が限定できる  
ローカルへの登録は、コンポーネントのエクスポート内で`directives` にオブジェクト形式で追加する  
~~~JavaScript
export default {
	directives:{
		'MyCustomDirective': {
			/* ディレクティブの内容を記述 */
		}
	}
}
~~~


## カスタムディレクティブのライフサイクルフック
ディレクティブの第二引数に、フックの処理を列挙したオブジェクトを渡すことができる

```JavaScript
/* 第2引数にオブジェクトを設定し、その中でフック関数の処理を記述する */ 
app.directive('MyCustomDirective', {
	created(el, binding, vnode, prevVnode) {}, // 追加
	beforeMount() {},
	mounted() {},
	beforeUpdate() {}, // 追加
	updated() {},
	beforeUnmount() {}, // 追加
	unmounted() {}
})
```
Vue 2 ではフック関数名が異なっていたが、Vue 3でインスタンスのライフサイクルフック名と統一された

## カスタムディレクティブのフックの省略記法
ディレクティブの第二引数を、オブジェクトではなく一つのコールバック関数として記述することができる  
この場合、`mounted` と `updated` にこの関数の処理が割り当てられる  
この2つは、コンポーネントの初期化と更新時の再描画を担うものであり、最小限の動作のために必要となる場合が多い  
また、一つのデータの内容によって描画が変化するような単純な例では、初期化と再描画の処理が全くおなじになることも多いので、  
このようなショートガンドが提供されている
```JavaScript
app.directive('MyCustomDirective', (el, binding) => {
	/* mounted と updated のフックで処理させたい内容を記述する */
})
```

## DOMの操作
第1引数`el` を使う

## カスタムディレクティブのデータの受け渡し
第2引数 `binding` を使う
`binding.value.変数名` で指定のデータを取り出せる

## カスタムディレクティブで引数を受け取る
`binding.arg` と記述すると、カスタムディレクティブの利用時の `:` の右側の文字列を取得できる  

## カスタムディレクティブに、カスタム修飾子を実装する
`binding.modifiers.修飾子名` と記述すると、真偽値が取得される
`v-xxx.modi` という修飾子を付けたとき、`binding.modifiers.modi` はtrueが返される  

## 参考
- カスタムディレクティブ Vue.js doc:
  https://v3.ja.vuejs.org/guide/migration/custom-directives.html

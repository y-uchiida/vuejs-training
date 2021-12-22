# vue router

## vue router とはなんなのか
URLとvueのコンポーネントの表示の関連付けを設定できるプラグイン  
Vueインスタンスに組み込むと、現在のURLを解析して、`<router-view></router-view>` に指定したコンポーネントを配置してくれる  
URLとコンポーネントの対応関係は、オブジェクトの配列で記述する  

## インストール
vue 3 では vue-router v4 系を利用したほうが良さそうなので、 `@next` を付けてインストールする
```
$ npm install vue-router@next
```

## 設定ファイルの記述
`router.js` というファイルに、ルーティング情報をまとめて書くことが多い  
```JavaScript
/* vue-router をインポート */
import { createRouter, createWebHistory } from 'vue-router'

/* ルーティング先に利用するコンポーネントをインポート */
import Home from './views/Home.vue'

/* ルーティングテーブルを記述する */
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/user',
		name: 'User',
		/* 非同期ロード... 実際にアクセスされたときにコンポーネントをロードする
		 * 初期ロード処理を少なくし、ファーストビューの表示が早くなる効果がある
		 */
		component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
	}
]

/* createRouter() でインスタンスを生成する */
const router = createRouter({
	/* Vite を利用していると、process.env が利用できない
	 * vite.config.js にひと工夫する必要がある
	 * また、代わりにimport.meta.env を利用できる
	 */
	// history: createWebHistory(process.env.BASE_URL),
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes
})

/* Router インスタンスををエクスポートする */
export default router

```

### Vite 環境でのprocess.env の利用
Vite では`process.env` の代わりに `import.meta.env` を利用する  
`process.env` を利用したい場合、`vite.config.js` で明示的に設定しておく  
```JavaScript
export default defineConfig({
  plugins: [vue()],
  /* process.env を利用できるように、明示的にdefine に記述する */
  define: {
    'process.env': process.env
  }
})
```

### createWebHistory()
vue-router 3 までは `mode: history` で設定していたもの。  
URLに`#`の記号をつけず、ブラウザの履歴機能を利用してSPAを動作させるモードに切り替える  

### なぜデフォルトでハッシュモード(URLに#をつける仕様)なのか
`#` はURIではページ内のアンカーとして利用されている  
そのため、ブラウザは#より右の文字列の変更はページ内の遷移として判断し、サーバへ通信しない  
この性質を利用して、SPAルーティングに利用したい情報を#より右に記述することで、サーバ通信を抑制している  

## routerのインポート
ルーティング設定を行うファイルを作ったら、`main.js` など初期化を行うjsファイルで、これをインポートする  
```JavaScript
import { createApp } from 'vue'
import App from './App.vue'

/* vue-router インスタンスをインポートする */
import router from './router'

const app = createApp(App);

/* インポートしたrouter インスタンスをVueインスタンスへ渡す  */
app.use(router);
app.mount('#app');
```

`<router-view>`を記述すると、それが動的コンポーネントのようにURLに該当するコンポーネントに置き換わる  
```html
<template>
  <h1>Vue Router Sample</h1>
  <router-view></router-view>
</template>
```

## router-link でのページ遷移
`<router-link to="遷移先URL">リンクテキスト</router-link>` で、SPA用のリンクを生成できる  
router-linkによって生成されるリンクを宣言的リンク
通常のaタグではサーバへの通信を発生させてしまうがrouter-linkを利用することで  
サーバへの通信を行わないaタグ（href属性はあるがJavaScriptにより通信を抑制される）を生成する  
また、ハッシュモードでもヒストリーモードでも、期待したとおりに振る舞いを切り替えてくれる  
基本的には

### router-link のプロパティ
1. custom とv-slot
SPAリンクにaタグを利用したくない場合や、複数の子要素に対してリンクを有効にしたい場合に設定する  
`v-slot`で要素をrouter-linkの中に挿入し、customを設定するとaリンクでのラップをしなくなる  

2. active-class="クラス名", exact, exact-active-class="クラス名"
現在のURLが、`to` で指定したパスとマッチしている場合に設定されるcss クラス名を記述できる  
`active-class` は包含マッチになり、現在のURLの一部に`to` で指定したパスが含まれていればクラスが設定される  
完全一致した場合にのみクラスを設定したい場合は、`exact-active-class` を利用するか、  
`exact` プロパティを併用してマッチタイプを変更する

3. replace プロパティ
ブラウザのアクセス履歴に変更を加えずにページ遷移させる  
通常の遷移では`router.push()`が実行されるためブラウザの履歴にURLが残されるが、  
`replace` プロパティを付けたrouter-linkでの遷移`router.replace()` が実行され、現在のURLを書き換えるのみとなり、履歴に残らない
```html
<router-link to="/test" replace>no history moving</router-link>
```

4. その他のプロパティ
https://router.vuejs.org/ja/api/#router-link-props

## 名前付きルートでの遷移
ルーティングテーブルで`name` プロパティを設定すると、名前付きルートになる  
`router-link` などルーティングを指定する際に、パスではなく設定しておいた名前で遷移先を指定できる  
名前付きルートへの遷移は、name: 'ルート名' で指定する  
文字列として扱うので、クオートで囲むこと
```html
<router-link :to="{ name: 'HashAndQueriesSample' }" exact-active-class="current">
	HashAndQueriesSample
</router-link>
```

## JavaScriptプログラムによるページの遷移
`this.$router.push()` を利用すると、vueのロジック内からもページ遷移を指定できる  

## URLクエリとURLハッシュの設定
router-linkの `to` に、通常のURLとして設定すれば、URLクエリ(?から始まる文字列)やURLハッシュ(#以降の文字列)を設定できる  
また、オブジェクトで指定する場合は、それぞれキーを使って、`queries: 'query_string'` `hash: '#string'` のように指定できる

## router-viewを入れ子にして、SPAのページ遷移を多階層化する
`<router-view>`は、それが置き換えられる直下のコンポーネントに対してしか作用しない  
つまり、`<router-view>` で呼び出されるコンポーネントの中に `<router-view>` を記述してもなにも表示されない  
このような、入れ子関係を実現するには、`router.js` のルーティング設定で`children` プロパティを定義しておく
```JavaScript
	/* router-viewを入れ子にする */
	{
		path: '/article/:aid',
		name: 'Article',
		component: Article,
		props: true, /* props: true で、値をコンポーネント側で設定したpropsの変数に渡す */
		
		children: [ // 配列になる点に注意
			{ /* article 内の子要素router-view をchildren で記述する */
				path: 'pages/:page_num',
				name: 'Page',
				component: Page,
				props: true /* props: true で、値をコンポーネント側で設定したpropsの変数に渡す */
			}
		]
	}
```

## vue-router 3 からの変更: アスタリスクでの全一致ルーティングの廃止
ドキュメントに以下のように書かれている  
> Catch all routes (*, /*) must now be defined using a parameter with a custom regex  
vuu-router 3 では404などを表すための全一致ルーティングを、たんに `path: '*'` と記述すれば表現できた  
これを廃止し、正規表現を利用することになったとのこと

```JavaScript
{ path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
```


## ガード
vue-routerでの遷移前後に処理を行いたい場合に利用できる  
Laravel でいうところの、ミドルウェアみたいな感じ？  

### beforeEach ガード
すべての遷移処理前に追加する、グローバルな処理を記述できる  
生成した Vue Router インスタンスの`beforeEach()`に処理を書く  
引数 `to` と `from` は、それぞれ遷移後と遷移前の`$route` オブジェクトが渡される 
```JavaScript
const router = createRouter({ ... })

router.beforeEach((to, from) => {
	// ...
	// explicitly return false to cancel the navigation
	return false
})
```
### beforeEnter ガード
各ルートごとに設定する、遷移前の処理を記述できる  
ドキュメントでは`Pre-route guard` と記述されている  
ルート設定のオブジェクトに、`beforeEnter()` を追加して処理を記述する
```JavaScript
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  },
]
```

### コンポーネント内で指定するガード
コンポーネントの宣言内で、それが表示されたり、非表示になったりするときに動作するガードを記述できる
```JavaScript
/* コンポーネントが表示される前の処理 */
beforeRouteEnter(to, from、next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
	next(vm => {
		// access to component public instance via `vm`
	})
},
/* すでに表示されているコンポーネントが更新されたときの処理 */
beforeRouteUpdate(to, from) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, given a route with params `/users/:id`, when we
    // navigate between `/users/1` and `/users/2`, the same `UserDetails` component instance
    // will be reused, and this hook will be called when that happens.
    // Because the component is mounted while this happens, the navigation guard has access to `this` component instance.
},
/* 表示されているコンポーネントが、非表示になる時の処理 */
beforeRouteLeave(to, from) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
},
```

## 参考
- Removed * (star or catch all) routes:  
  https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
- Navigation Guards:  
  https://next.router.vuejs.org/guide/advanced/navigation-guards.html#navigation-guards

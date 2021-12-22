/* vue-router をインポート */
import { createRouter, createWebHistory } from 'vue-router'

/* ルーティング先に利用するコンポーネントをインポート */
import Home from './views/Home.vue'
import Article from './views/ArticleComponent.vue'
import Page from './views/PageComponent.vue'
import HashAndQueriesSample from './views/HashAndQueriesSample.vue'
import NotFound from './views/NotFound.vue'

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
	},

	{
		path: '/hash_and_queries_sample',
		name: 'HashAndQueriesSample',
		component: HashAndQueriesSample
	},

	/* router-viewを入れ子にする */
	{
		path: '/article/:aid',
		name: 'Article',
		component: Article,
		props: true, /* props: true で、値をコンポーネント側で設定したpropsの変数に渡す */
		
		children: [
			{ /* article 内の子要素router-view をchildren で記述する */
				path: 'pages/:page_num',
				name: 'Page',
				component: Page,
				props: true /* props: true で、値をコンポーネント側で設定したpropsの変数に渡す */
			}
		]
	},

	/* 全一致リダイレクトで、404エラーページを作る */
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

/* createRouter() でインスタンスを生成する */
const router = createRouter({
	/* Vite を利用していると、process が利用できない
	 * vite.config.js にひと工夫する必要がある
	 */
	// history: createWebHistory(process.env.BASE_URL),
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes
})

/* Router インスタンスををエクスポートする */
export default router

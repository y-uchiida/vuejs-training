<template>
	<div>

		<h2>children router-view</h2>
		<div>記事コード: {{aid}} </div>
		<ul>
			<li v-for="(aid) in [1, 2, 3, 4]">
				<router-link :to="'/article/' + aid">article no. {{aid}}</router-link>
			</li>
		</ul>
		<span><router-link v-bind:to="'/article/' + aid + '/pages/1'">Page: 1</router-link></span>

		<!-- toにテンプレートリレテラルを使うパターン。 ""の中にテンプレートリテラルが入るのがポイント -->
		<span><router-link v-bind:to="`/article/${aid}/pages/2`">Page: 2</router-link></span>

		<!-- 名前付きルートでシンプルにパスを記述 -->
		<span><router-link v-bind:to="{name: 'Page', params: {page_num: 3}}">Page: 3</router-link></span>

		<!-- ここに、router.js で記述したchildrenのコンポーネントが入る -->
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'Article',
	/* view-router から受け取る値を、propsで設定しておく */
	props: {
		aid: String
	}
}
</script>

<style scoped>
</style>

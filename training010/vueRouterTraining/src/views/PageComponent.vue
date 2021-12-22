<template>
	<h3>page separator</h3>
	<div>{{ page_num }} ページ</div>
	<hr>
</template>

<script>
export default{
	props: {
		page_num: String
	}
}
</script>

<style scoped>
	div{
		padding: 8px;
		border: 1px #999 solid;
		width: 400px;
		margin: 8px auto;
		border-radius: 4px;
	}
</style>

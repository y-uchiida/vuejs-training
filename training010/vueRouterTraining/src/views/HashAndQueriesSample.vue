<template>
<hr>
<h2>HashAndQueriesSample</h2>

<p>
	<router-link :to="{ query: {query: 'string'} }">set '?query=string'</router-link>
</p>

<p>
	<router-link :to="{ hash: '#hash_string' }">set '#hash_string'</router-link>
</p>

<h3>dump of this.$route</h3>
<pre class="code">
{{ this.$route }}  
</pre>
</template>

<script>
export default{
}
</script>

<style scoped>
	pre.code {
		text-align: left;
		font-family: consolas;
		font-size: 1rem;
		border: 1px solid darkgray;
		background: #242424;
		color: #fff;
		padding: 12px;
		width: 720px;
		margin: auto;
		overflow: scroll;
	}
</style>

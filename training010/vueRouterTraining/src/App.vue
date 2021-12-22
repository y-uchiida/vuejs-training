<script setup>
/* Router をインポートする */
import router from './router'
</script>

<template>
  <h1>Vue Router Sample</h1>
  <nav>
    <ul>
      <li><router-link to="/" active-class="current" exact>Home</router-link></li>
      <li><router-link to="/User" exact-active-class="current">User</router-link></li>
      <li><router-link to="/article/1" active-class="current">Articles</router-link></li>

      <!-- 名前付きルートへの遷移は、name: 'ルート名' で指定できる
           文字列として扱うので、クオートで囲むこと
      -->
      <li><router-link :to="{ name: 'HashAndQueriesSample' }" exact-active-class="current">HashAndQueriesSample</router-link></li>
      

    </ul>

    <div>
      <!-- v-slot とcustomプロパティを利用して、aタグを使わずにSPAリンクを設定する -->
      <router-link
        to="/User"
        custom
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <div
          @click="navigate"
          class="router-text"
          :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
        >
          <span>no a-tag routing with v-slot and custom property</span>
        </div>
      </router-link>

      <!-- 相対URLへのリンク -->
      <p class="router-text">
        <router-link :to="{path: 'foo'}" append>set 'foo' to current URL</router-link>
      </p>

      <p class="router-text" v-on:click="this.$router.push('/')"> click to trigger this.$router.push('/') </p>

      <p class="router-text" v-on:click="this.$router.push('/User')"> click to trigger this.$router.push('/User') </p>

    </div>

  </nav>
  <div></div>

  <router-view></router-view>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav ul {
  display: flex;
  column-gap: 8px;
  width: 720px;
  margin: auto;
  padding: 0;
  justify-content: center;
  list-style: none;
}
nav ul li a{
  padding: 8px;
  border-radius: 4px;
  background-color: lightseagreen;
  text-decoration: none;
  color: #fff;

}
nav ul li a.current{
  font-weight: bold;
  opacity: .7;
}

ul li{
	list-style-position: inside;
}

.router-text{
  border: 2px solid lightcoral;
  padding: 8px;
  width: 200px;
  cursor: pointer;
  margin: 12px auto;
}
</style>

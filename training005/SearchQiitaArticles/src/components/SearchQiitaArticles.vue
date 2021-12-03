<script>
/* lodash の debounce メソッドを追加 */
import { debounce } from "lodash";

export default {
  name: "SearchQiitaArticles",
  data() {
    return {
      items: null,
      keyword: "",
      message: "",
    };
  },
  methods: {
    /* requestToApi: APIへリクエストし、結果を受け取ってitemsに代入する */
    requestToApi: function () {
      if (this.keyword === "") {
        this.items = null;
        return;
      }
      this.message = "Loading...";
      const vm = this;
      /* 検索結果の先頭20件を取得(ページングの実装は今回はなし) */
      const params = { page: 1, per_page: 20, query: this.keyword };
      this.axios
        .get("https://qiita.com/api/v2/items", { params })
        .then(function (response) {
          vm.items = response.data;
        })
        .catch(function (error) {
          vm.message = "Error!" + error;
        })
        .finally(function () {
          vm.message = "";
        });
    },
  },
  watch: {
    /* ユーザーの入力を監視しておき、変更時にAPIリクエストをするメソッドを実行する
     * 毎回APIリクエストを投げるのではなく、debounce を使って処理を間引く
     */
    keyword: function (newKeyword, oldKeyword) {
      this.message = "Please input keyword...";
      this.debouncedRequest();
    },
  },
  mounted: function () {
    this.debouncedRequest = debounce(this.requestToApi, 600);
  },
};
</script>

<template>
  <h2>Qiita real time search</h2>

  <p>
    <input type="text" v-model="keyword" />
  </p>
  <p>{{ message }}</p>
  <ul>
    <li v-for="item in items">
      <a v-bind:href="item.url" target="_blank">
        {{ item.title }}
      </a>
      likes: {{ item.likes_count }}
    </li>
  </ul>
</template>

<style scoped>
a {
  color: #42b983;
}
[v-cloak] {
  display: none;
}
ul li {
  list-style: decimal;
  list-style-position: inside;
}
</style>

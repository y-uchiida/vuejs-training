<script>
export default {
    /* data は、このコンポーネントにおけるプロパティ */
  data() {
    return {
      /* 新規タスクの内容を入力するinputの値をバインディングする */
      newItem: '',
      todoList: [],
    }
  },
  methods: {
    /* addItem() をmethodsオブジェクトのメンバとして設定、
     * v-onでコールバック関数に指定できるようにする */
    addItem: function (event) {
      console.log(event)

      if (this.newItem === '')
        return

      let newTodo = {
        item: this.newItem,
        isDone: false
      }
      /* this キーワードはapp オブジェクトを指す
       * data() の中に記述した変数にアクセスできる
       */
      this.todoList.push(newTodo)
      this.newItem = ''
    },
    deleteItem: function(index){
        /* splice: 指定の要素番号から、指定の数だけ要素を削除する */
        this.todoList.splice(index, 1)
    }
  },
}
</script>

<template>
  <div>
    <h2>TODO List</h2>
    <!-- v-on:submit.prevent でsubmit時の送信をしない -->
    <form action="" v-on:submit.prevent>
      <input type="text" v-model="newItem" />
      <button type="button" v-on:click="addItem">Add</button>
    </form>
    <ul>
      <!-- v-for は、第2引数に配列の要素番号を渡すことができる -->
      <li v-for="(todo, index) in todoList" :key="index">
        <input type="checkbox" v-model="todo.isDone" />
        <span v-bind:class="{ done: todo.isDone }">{{ todo.item }}</span>
        <button v-on:click="deleteItem(index)">Delete</button>
      </li>
    </ul>
    <pre>{{ $data }}</pre>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
ul li {
	list-style: none;
}

#app li > span.done {
	text-decoration: line-through;
}

</style>

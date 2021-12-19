<script>
export default {
  data() {
    return {
      items: [],
      number: 1,
    };
  },
  methods: {
    randomStr() {
      let chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let rand_str = "";
      for (var i = 0; i < 12; i++) {
        rand_str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return rand_str;
    },
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    addItem() {
      let index = this.randomIndex();
      let id = this.randomStr();
      this.items.splice(index, 0, {"id": id, "number": this.items.length + 1});
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<template>
  <div class="main">
    <button v-on:click="addItem">add item</button>
    <ul class="itemsList">
      <transition-group name="fade">
        <li
          v-for="(item, index) in items"
          :key="item.id"
          :data-index="item.id"
          v-on:click="removeItem(index)"
        >
          {{ item.number }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<style scoped>
.itemsList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
  column-gap: 12px;
  row-gap: 12px;
  margin: 12px auto;
  padding: 0px;
  list-style-type: none;
}
.itemsList li {
  height: 40px;
  width: 40px;
  border-radius: 4px;
  background-color: lightseagreen;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.fade-enter-from {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}

.fade-leave-from {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消えるときのトランジションの状態 */
  transition: opacity 0.5s;
  position: absolute;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.fade-move {
  transition: transform 0.5s;
}
</style>

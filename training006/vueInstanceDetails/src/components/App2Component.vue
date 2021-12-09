<script>
export default {
  props: ["app1"],
  data() {
    return {
      message: "init",
      text: "hello",
      num: 0,
    };
  },
  beforeCreate: function () {
    this.message = "0. beforeCreate";
    alert("app2 beforeCreate()");
  },
  created: function () {
    this.message = "1. created";
    alert("app2 created()");
  },
  beforeMount: function () {
    this.message = "2. beforeMount";
    alert("app2 beforeMount()");
  },
  mounted: function () {
    this.message = "3. mounted";
    alert("app2 mounted()");
  },
  beforeDestroy: function () {
    this.message = "4. beforeDestroy";
    alert("app2 beforeDestroy()");
  },
  destroyed: function () {
    this.message = "5. beforeDestroy";
    alert("app2 destroyed()");
  },
  beforeUpdate: function () {
    alert("app2 beforeUpdate()");
  },
  updated: function () {
    alert("app2 updated()");
  },
  methods: {
    reverseText: function () {
      this.text = this.text.split("").reverse().join("");
    },
    noChangeText: function () {
	  console.log("no change text");
      this.text = this.text;
    },
    incrementNum: function () {
      this.num++;
      console.log(`num: ${this.num}`);
    }
  },
};
</script>

<template>
  <h1>App2 Component</h1>
  <p>{{ message }}</p>
  <p>{{ text }}</p>
  <div>
    <button v-on:click="reverseText">reverse text</button>
  </div>
  <div>
    <button v-on:click="noChangeText">no change text</button>
  </div>
  <div>
    <button v-on:click="incrementNum">increment num</button>
  </div>
</template>

<style>
</style>

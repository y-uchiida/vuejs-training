<script>
export default {
  props: {
    /* props で、親コンポーネントから受け取る値を定義しておく */
    TotalNumber: {
      type: Number,
      default: 0,
    },
  },
  emits: ["CountUp"],
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    ratio: function () {
      if (this.TotalNumber === 0) {
        return 0;
      }
      return (this.number / this.TotalNumber).toFixed(4);
    },
  },
  methods: {
    CountUp: function () {
      console.log(this.TotalNumber);
      console.log(this);
      this.number++;
      this.$emit("CountUp");
    },
  },
};
</script>

<template>
  <div class="box">
    <slot name="name">name default</slot>
    <p>number: {{ number }} ( {{ ratio * 100 }} % )</p>
    <p>
      <button v-on:click="CountUp">+1</button>
    </p>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #ccc;
  padding: 1em;
}
</style>

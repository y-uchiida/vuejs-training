<script>
import ChildComponent from './ChildComponent.vue'

export default{
  data() {
    return {
      TotalNumber: 0
    }
  },
  /* 自身のtemplate 内で利用するコンポーネントは、compoententsで宣言しておく必要がある */
  components: {
    ChildComponent
  },
  methods: {
    UpdateTotalNumber: function(){
      console.log('kicked UpdateTotalNumber')
      this.TotalNumber++
    }
  }
}

</script>

<template>
  <h2>Sample: Total Votes And Ratio</h2>
  <p>Total Votes Number: {{ TotalNumber }}</p>
  <ChildComponent v-bind:TotalNumber="TotalNumber" v-on:CountUp='UpdateTotalNumber'>
    <template v-slot:name="name">William</template>
  </ChildComponent>

  <ChildComponent v-bind:TotalNumber="TotalNumber" v-on:CountUp='UpdateTotalNumber'>
    <template v-slot:name="name">Sally</template>
  </ChildComponent>

  <ChildComponent v-bind:TotalNumber="TotalNumber" v-on:CountUp='UpdateTotalNumber'>
    <template v-slot:name="name">Loren</template>
  </ChildComponent>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>

<script>
export default {
  name: "BitCoinPrice",
  data() {
    return {
      bpi: null,
      hasError: false,
      isLoading: true,
    };
  },
  methods: {
    getPrices(event) {
      this.isLoading = true
      this.axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          this.hasError = false
          this.bpi = response.data.bpi
        })
        .catch((error) => {
          this.hasError = true;
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false
        });
    },
    currencyDecimal: function (value) {
      return value.toFixed(2);
    },
  },
  mounted: function () {
    this.getPrices();
  },
};
</script>

<template>
  <h2>BitCoin Prices</h2>
  <input @click="getPrices" type="button" value="get current prices" />
  <section v-if="!hasError">
    <div v-if="isLoading">
      <p>
        loading...
      </p>
    </div>
    <div v-else>
      <ul v-cloak>
        <li v-for="(rate, currency) in bpi">
          <!-- currencyDecimal() を適用して、小数点以下を２ケタ表示に成型する -->
          {{ currency }}: {{ currencyDecimal(rate.rate_float) }}
        </li>
      </ul>
    </div>
  </section>
  <section v-else>
    <p>Error</p>
  </section>
</template>

<style scoped>
a {
  color: #42b983;
}
[v-cloak] {
  display: none;
}
</style>

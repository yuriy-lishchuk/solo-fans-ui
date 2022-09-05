<template>
  <div class="about">
    <h1>View Statistics</h1>
    <div class="stats">
      <h3>High Temperatures above 80 Degress Fahrenheit | Total Count: {{highTemps.length}}</h3>
      <p v-for="(element, index) in highTemps " v-html="element" :key="index">{{element}}</p>
    </div>
    <div class="stats stats--right">
      <h3>Low Temperatures below 65 Degress Fahrenheit | Total Count: {{lowTemps.length}}</h3>
      <p v-for="(element, index) in lowTemps " v-html="element" :key="index">{{element}}</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("temp");
export default {
  name: "Statistics",
  data() {
    return {
      highTemps: [],
      lowTemps: []
    };
  },
  computed: {
    ...mapGetters(["getTemperatureData", "getTemperatureTime"])
  },
  methods: {
    findHotTemperatureData() {
      this.getTemperatureData.map((temperature, index) => {
        if (temperature > 80) {
          const highTempData = `Temperature: ${temperature}&#8457; | Time: ${this.getTemperatureTime[index]}`;
          this.highTemps.push(highTempData);
        }
      });
    },
    findLowTemperatureData() {
      this.getTemperatureData.map((temperature, index) => {
        if (temperature < 65) {
          const lowTempData = `Temperature: ${temperature}&#8457; | Time: ${this.getTemperatureTime[index]}`;
          this.lowTemps.push(lowTempData);
        }
      });
    }
  },
  mounted() {
    this.findHotTemperatureData();
    this.findLowTemperatureData();
  }
};
</script>
<style lang="scss">
.stats {
  float:left;
  margin-left:100px;
}
</style>
<template>
  <div>
    <h1>Real Time Temperature Graph </h1>
    <h3>State: {{isFanOn}}</h3>
    <Graph :width="500" :height="200" :chartData="datacollection" :options="options" />
  </div>
</template>

<script>
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("temp");
import axios from "axios";
import Graph from "@/components/Graph.vue";
export default Vue.extend({
  name: "Temperature",
  components: {
    Graph
  },
  data() {
    return {
      globalCount: 0,
      datacollection: {},
      options: {
        responsive: false,
        maintainAspectRatio: true
      }
    };
  },
  computed: {
    ...mapGetters(["getTemperatureData", "getTemperatureTime", "getFanState"]),
    isFanOn(){
      if(this.getFanState == false){
        return 'Off'
      }else{
        return 'On'
      }
    }
  },
  methods: {
    fillData: function(time, temp) {
      this.datacollection = {
        labels: time,
        datasets: [
          {
            label: "Temperature Data",
            backgroundColor: "#B22222",
            data: temp
          }
        ]
      };
    }
  },
  mounted() {
    this.fillData(this.getTemperatureTime, this.getTemperatureData);
    setInterval(() => {
      this.fillData(this.getTemperatureTime, this.getTemperatureData);
    }, 500);
  },
  
});
</script>
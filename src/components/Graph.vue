<script>
import Vue from "vue";
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  name: "Graph",
  mixins: [reactiveProp],
  extends: Line,
  data() {
    return {
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    chartData(){
      this.$data._chart.update();
    }
  }
}
</script>

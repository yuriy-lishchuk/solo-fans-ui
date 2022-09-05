<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Temperature</router-link> |
      <router-link to="/statistics">Statistics</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("temp");
export default Vue.extend({
  name: 'App',
  sockets: {
    connect: () => {
      console.log("websocket connected!");
    },
    temperatureData: function(data) {
      this.updateTemperatureData(data);
    },
    newStream: function(data) {
      console.log('data: ', data)
      this.initTemperatureData(data);
    }
  },
  methods: {
      ...mapActions(["updateTemperatureData", "initTemperatureData"]),

  }
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

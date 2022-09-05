import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client';


Vue.config.productionTip = false;
Vue.use(new VueSocketIO({
  debug: false,
  connection: 'http://localhost:3030',
}))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

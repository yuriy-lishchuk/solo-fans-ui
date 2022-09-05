import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Temperature",
    component: () => import("./../views/Temperature.vue")
  },
  {
    path: "/statistics",
    name: "Statistics",

    component: () =>
      import("../views/Statistics.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

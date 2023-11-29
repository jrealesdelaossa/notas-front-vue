import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/home",
    name: "main",
    component: () => import("../views/HomeView.vue"),
    children: [
      {
        path: "/home/dashboard",
        name: "dashboard",
        component: () => import("../views/DashboardView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

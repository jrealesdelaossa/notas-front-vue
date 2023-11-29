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
        path: "/home/notas",
        name: "notas",
        component: () => import("../views/NotasView.vue"),
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

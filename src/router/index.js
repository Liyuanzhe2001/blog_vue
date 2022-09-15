import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/Layout.vue";
import HomeView from "@/views/HomeView";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: HomeView,
      },
    ],
  },
  // ,
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: LoginView,
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

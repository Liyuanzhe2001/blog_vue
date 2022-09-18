import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/Layout.vue";
import HomeView from "@/views/HomeView";
import RegisterView from "@/views/RegisterView";
import Account from "@/layout/Account";
import ForgotPasswordView from "@/views/ForgotPasswordView";

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
  {
    path: "/account",
    name: "Account",
    component: Account,
    children: [
      {
        path: "register",
        name: "register",
        component: RegisterView,
      },
      {
        path: "forgetpwd",
        name: "forgetpwd",
        component: ForgotPasswordView,
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

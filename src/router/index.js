import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/Layout.vue";
import HomeView from "@/views/HomeView";
import RegisterView from "@/views/RegisterView";
import Account from "@/layout/Account";
import ForgotPasswordView from "@/views/ForgotPasswordView";
import OnlineJudge from "@/layout/OnlineJudge";
import ProblemList from "@/views/oj/ProblemList";
import Problem from "@/views/oj/Problem";
import Classes from "@/layout/Classes";
import ClassJavaList from "@/views/class/ClassJavaList";
import ClassPythonList from "@/views/class/ClassPythonList";
import ClassBigDataList from "@/views/class/ClassBigDataList";
import Interview from "@/layout/Interview";
import InterviewList from "@/views/interview/InterviewList";
import Article from "@/layout/Article";
import ArticleList from "@/views/article/ArticleList";

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
  {
    path: "/oj",
    name: "OnlineJudge",
    component: OnlineJudge,
    children: [
      {
        path: "",
        name: "problemList",
        component: ProblemList,
      },
      {
        path: ":id",
        name: "problem",
        component: Problem,
      },
    ],
  },
  {
    path: "/classes",
    name: "Classes",
    component: Classes,
    redirect: "/classes/java",
    children: [
      {
        path: "java",
        name: "ClassJavaList",
        component: ClassJavaList,
      },
      {
        path: "python",
        name: "ClassPythonList",
        component: ClassPythonList,
      },
      {
        path: "bigdata",
        name: "ClassBigDataList",
        component: ClassBigDataList,
      },
    ],
  },
  {
    path: "/interview",
    name: "Interview",
    component: Interview,
    children: [
      {
        path: "",
        name: "InterviewList",
        component: InterviewList,
      },
    ],
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
    children: [
      {
        path: "",
        name: "ArticleList",
        component: ArticleList,
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

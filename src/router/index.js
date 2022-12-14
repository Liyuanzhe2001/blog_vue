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
import Navigation from "@/layout/Navigation";
import NavigationList from "@/views/navigation/NavigationList";
import ArticleContent from "@/views/article/ArticleContent";
import Personal from "@/layout/Personal";
import PersonalInformation from "@/views/personal/PersonalInformation";
import changePassword from "@/views/ChangePassword";
import PersonalCollection from "@/views/personal/PersonalCollection";
import PublishArticle from "@/views/personal/PublishArticle";
import Author from "@/layout/Author";
import AuthorInformation from "@/views/author/AuthorInformation";

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
    path: "/personal",
    name: "Personal",
    component: Personal,
    children: [
      {
        path: "information",
        name: "Information",
        component: PersonalInformation,
      },
      {
        path: "collection",
        name: "Collection",
        component: PersonalCollection,
      },
      {
        path: "publish",
        name: "PublishArticle",
        component: PublishArticle,
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
      {
        path: "changepwd",
        name: "changepwd",
        component: changePassword,
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
      {
        path: ":id",
        name: "ArticleContent",
        component: ArticleContent,
      },
    ],
  },
  {
    path: "/navigation",
    name: "Navigation",
    component: Navigation,
    children: [
      {
        path: "",
        name: "navigationList",
        component: NavigationList,
      },
    ],
  },
  {
    path: "/author",
    name: "Author",
    component: Author,
    children: [
      {
        path: ":id",
        name: "AuthorInformation",
        component: AuthorInformation,
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

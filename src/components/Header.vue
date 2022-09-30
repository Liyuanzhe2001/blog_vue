<template>
  <div
    style="
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      display: flex;
      min-width: 1263px;
    "
  >
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      style="width: 100%"
      @select="handleSelect"
    >
      <div
        style="
          width: 200px;
          padding-left: 30px;
          font-weight: bold;
          color: dodgerblue;
          cursor: pointer;
        "
      >
        <img @click="backHome" :src="logoImage" style="height: 47px" />
      </div>
      <el-menu-item index="/oj">刷题</el-menu-item>
      <el-menu-item index="/interview">面经</el-menu-item>
      <el-menu-item index="/classes">课程</el-menu-item>
      <el-menu-item index="/article">专栏</el-menu-item>
      <el-menu-item index="/">导航</el-menu-item>
      <div style="width: 50px; position: absolute; right: 0; top: 5px">
        <div class="demo-basic--circle">
          <el-avatar
            @click="showUserSet"
            size="small"
            :src="circleUrl"
            @error="errorHandler"
            style="cursor: pointer"
          >
            <img :src="errorCircleUrl" />
          </el-avatar>
        </div>
      </div>
    </el-menu>

    <el-dialog v-model="userLogin" title="用户登录" width="400px" center>
      <el-form :model="user" label-width="0px" class="login_form">
        <el-form-item>
          <el-input
            style="height: 30px"
            v-model="user.name"
            prefix-icon="User"
            placeholder="请输入用户名"
          />
          <div style="position: absolute; right: 0">
            <el-button type="text" @click="register">注册账号</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-input
            style="height: 30px"
            show-password
            v-model="user.password"
            prefix-icon="Lock"
            placeholder="请输入密码"
          />
          <div style="position: absolute; right: 0">
            <el-button type="text" @click="forgetPwd">忘记密码</el-button>
          </div>
        </el-form-item>
        <el-row justify="end" style="padding-top: 10px">
          <el-form-item class="login_btn">
            <el-button type="primary" @click="loginUser">登录</el-button>
            <el-button type="info" @click="clearUser">重置</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-dialog>

    <el-drawer v-model="userSet" :with-header="false">
      <div style="width: 50px; margin-left: 20px">
        <div class="demo-basic--circle">
          <el-avatar
            size="1000"
            :src="circleUrl"
            @error="errorHandler"
            style="cursor: pointer"
          >
            <img :src="errorCircleUrl" />
          </el-avatar>
        </div>
      </div>
      <el-menu
        class="el-menu-vertical-demo"
        style="border-right: none; height: 80%"
      >
        <el-menu-item index="userOperationOne" @click="personalInformation">
          <el-icon>
            <Message />
          </el-icon>
          个人信息
        </el-menu-item>
        <el-menu-item index="userOperationTwo">
          <el-icon>
            <Star />
          </el-icon>
          我的收藏
        </el-menu-item>
        <el-divider />
        <el-menu-item index="userOperationThree">
          <el-icon>
            <CloseBold />
          </el-icon>
          退出登录
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
  <el-backtop :right="100" :bottom="100" />
  <div style="flex: 0"></div>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  created() {
    this.circleUrl = "";
    this.activeIndex = this.$route.matched[0].path;
  },
  data() {
    return {
      logoImage: require("@/assets/images/logo.png"),
      circleUrl: "",
      srcList: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
      ],
      activeIndex: "",
      errorCircleUrl: require("@/assets/images/avatar.png"),
      userLogin: false,
      user: {
        name: "",
        password: "",
      },
      userSet: false,
    };
  },
  methods: {
    backHome() {
      window.location.href = "/";
    },
    errorHandler() {
      return true;
    },
    showUserSet() {
      // if (!sessionStorage.getItem("user")) {
      // this.userLogin = true;
      // } else {
      this.userSet = true;
      // }
    },
    handleSelect(index) {
      window.location.href = index;
    },
    loginUser() {
      let username = this.user.name;
      let password = this.user.password;
      if (username === "123" && password === "123") {
        sessionStorage.setItem("user", this.user);
        ElMessage({
          message: "登录成功",
          type: "success",
        });
        this.circleUrl = require("@/assets/images/background.png");
        this.userLogin = false;
      } else {
        ElMessage({
          message: "用户名或密码错误",
          type: "error",
        });
      }
    },
    clearUser() {
      this.user.name = "";
      this.user.password = "";
    },
    register() {
      window.open("/account/register");
    },
    forgetPwd() {
      window.open("/account/forgetpwd");
    },
    personalInformation() {
      console.log("个人信息");
    },
  },
};
</script>

<style scoped></style>

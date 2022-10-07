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
      <el-menu-item index="/navigation">导航</el-menu-item>
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
            :size="80"
            :src="circleUrl"
            @error="errorHandler"
            @click="changeAvatar"
            style="cursor: pointer"
          >
            <img :src="errorCircleUrl" height="200px" />
          </el-avatar>
        </div>
      </div>
      <el-menu
        class="el-menu-vertical-demo"
        style="border-right: none; height: 80%"
      >
        <el-menu-item index="one" @click="personalInformation">
          <el-icon>
            <Message />
          </el-icon>
          个人信息
        </el-menu-item>
        <el-menu-item index="two" @click="changePwd">
          <el-icon>
            <Unlock />
          </el-icon>
          修改密码
        </el-menu-item>
        <el-menu-item index="three" @click="personalCollect">
          <el-icon>
            <Star />
          </el-icon>
          我的收藏
        </el-menu-item>
        <el-menu-item index="four" @click="publishArticle">
          <el-icon>
            <Document />
          </el-icon>
          发表文章
        </el-menu-item>
        <el-divider />
        <el-menu-item index="five">
          <el-icon>
            <CloseBold />
          </el-icon>
          退出登录
        </el-menu-item>
      </el-menu>
    </el-drawer>

    <el-dialog v-model="showAvatar" width="400px" center>
      <div class="avatar_set">
        <el-avatar
          v-if="circleUrl"
          :size="200"
          :src="circleUrl"
          @error="errorHandler"
        >
          <img :src="errorCircleUrl" height="200px" />
        </el-avatar>
      </div>
    </el-dialog>
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
    this.circleUrl = require("@/assets/images/avatar.png");
    this.activeIndex = this.$route.matched[0].path;
  },
  data() {
    return {
      logoImage: require("@/assets/images/logo.png"),
      circleUrl: "",
      activeIndex: "",
      errorCircleUrl:
        "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
      userLogin: false,
      user: {
        name: "",
        password: "",
      },
      userSet: false,
      showAvatar: false,
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
    changeAvatar() {
      this.showAvatar = true;
    },
    personalInformation() {
      if (this.$route.path !== "/personal/information") {
        window.location.href = "/personal/information";
      } else {
        this.userSet = false;
      }
    },
    changePwd() {
      this.userSet = false;
      window.open("/account/changepwd");
    },
    personalCollect() {
      if (this.$route.path !== "/personal/collection") {
        window.location.href = "/personal/collection";
      } else {
        this.userSet = false;
      }
    },
    publishArticle() {
      if (this.$route.path !== "/personal/publish") {
        window.location.href = "/personal/publish";
      } else {
        this.userSet = false;
      }
    },
  },
};
</script>

<style scoped>
.avatar_set {
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: auto;
}
</style>

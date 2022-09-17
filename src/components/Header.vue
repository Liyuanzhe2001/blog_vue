<template>
  <div
    style="
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      display: flex;
    "
  >
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      style="width: 100%"
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
        LOGO
      </div>
      <el-menu-item index="1">选项一</el-menu-item>
      <el-sub-menu index="2">
        <template #title>选项二</template>
        <el-menu-item index="2-1">选项二_1</el-menu-item>
        <el-menu-item index="2-2">选项二_2</el-menu-item>
        <el-menu-item index="2-3">选项二_3</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3" disabled>选项三</el-menu-item>
      <el-menu-item index="4">选项四</el-menu-item>
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
            placeholder="请输入账号"
          />
          <div style="position: absolute; right: 0">
            <el-button type="text">注册账号</el-button>
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
            <el-button type="text">忘记密码</el-button>
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
        <el-menu-item index="userOperationOne">
          <el-icon><Message /></el-icon>
          个人信息
        </el-menu-item>
        <el-menu-item index="userOperationTwo">
          <el-icon><Star /></el-icon>
          我的收藏
        </el-menu-item>
        <el-divider />
        <el-menu-item index="userOperationThree">
          <el-icon><CloseBold /></el-icon>
          退出登录
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>

  <div style="flex: 0"></div>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  created() {
    this.circleUrl = "";
  },
  data() {
    return {
      circleUrl: "",
      activeIndex: "1",
      errorCircleUrl: require("../assets/images/avatar.png"),
      userLogin: false,
      user: {
        name: "",
        password: "",
      },
      userSet: false,
    };
  },
  methods: {
    errorHandler() {
      return true;
    },
    showUserSet() {
      // if (!sessionStorage.getItem("user")) {
      this.userLogin = true;
      // } else {
      //   this.userSet = true;
      // }
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
        this.circleUrl = require("../assets/images/background.png");
        this.userLogin = false;
      } else {
        ElMessage({
          message: "账号或密码错误",
          type: "error",
        });
      }
    },
    clearUser() {},
  },
};
</script>

<style scoped></style>

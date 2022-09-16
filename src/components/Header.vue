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
      <div style="width: 50px; position: absolute; right: 0; line-height: 55px">
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
          <el-input v-model="user.name"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="user.password" type="password"> </el-input>
        </el-form-item>
        <el-row justify="end">
          <el-form-item class="login_btn">
            <el-button type="primary">登录</el-button>
            <el-button type="info">重置</el-button>
          </el-form-item>
        </el-row>
      </el-form>
      <!--      <template #footer>-->
      <!--        <span class="dialog-footer">-->
      <!--          <el-button @click="userLogin = false">取消</el-button>-->
      <!--          <el-button type="primary" @click="userLogin = false">-->
      <!--            登录-->
      <!--          </el-button>-->
      <!--        </span>-->
      <!--      </template>-->
    </el-dialog>

    <el-drawer v-model="userSet" :with-header="false">
      <h5 class="mb-2">用户操作</h5>
      <el-menu
        default-active="userOperationOne"
        class="el-menu-vertical-demo"
        style="border-right: none"
      >
        <el-menu-item index="userOperationOne">用户操作一</el-menu-item>
        <el-menu-item index="userOperationTwo">用户操作二</el-menu-item>
        <el-menu-item index="userOperationThree">用户操作三</el-menu-item>
      </el-menu>
    </el-drawer>

    <div style="flex: 0"></div>
  </div>
</template>

<script>
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
      this.userLogin = true;
      // if (!sessionStorage.getItem("user")) {
      // } else {
      // this.userSet = true;
      // }
    },
  },
};
</script>

<style scoped></style>

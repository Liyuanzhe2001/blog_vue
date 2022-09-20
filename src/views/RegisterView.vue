<template>
  <div :style="fatherStyle">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>注册账号</span>
        </div>
      </template>
      <el-form :model="user" label-width="0px" class="login_form">
        <el-form-item>
          <el-input
            style="height: 30px"
            v-model="user.name"
            prefix-icon="User"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            style="height: 30px"
            show-password
            v-model="user.password"
            prefix-icon="Lock"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            style="height: 30px"
            v-model="user.phone"
            prefix-icon="Iphone"
            placeholder="请输入电话号码"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            name="code"
            style="height: 30px; width: 240px"
            v-model="code"
            :disabled="disabledCode"
            placeholder="请输入验证码"
          />
          <div style="position: absolute; right: 10px">
            <el-button
              type="primary"
              @click="sendCode"
              :disabled="disabledBtn"
              >{{ codeBtnName }}</el-button
            >
          </div>
        </el-form-item>
        <el-row justify="end" style="padding-top: 10px">
          <el-form-item class="login_btn">
            <el-button type="primary" @click="submit">确定</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
  name: "RegisterView",
  data() {
    return {
      fatherStyle: {
        textAlign: "center",
        width: "400px",
        height: "100%",
        margin: "0 auto",
        paddingTop: "80px",
      },
      user: {
        name: "",
        password: "",
        phone: "",
      },
      codeBtnName: "获取验证码",
      disabledBtn: false,
      code: "",
      disabledCode: true,
      count: 59,
    };
  },
  methods: {
    submit() {},
    sendCode() {
      if (this.user.phone === "") {
        ElMessage({
          message: "电话号码不能为空",
          type: "error",
        });
      } else {
        ElMessage({
          message: "验证码已发送",
          type: "success",
        });
        this.disabledCode = false;
        let timeout = setInterval(() => {
          if (this.count < 1) {
            this.disabledBtn = false;
            this.codeBtnName = "获取验证码";
            this.count = 59;
            clearInterval(timeout);
          } else {
            this.disabledBtn = true;
            this.codeBtnName = this.count-- + "s后重发";
          }
        }, 1000);
      }
    },
  },
};
</script>

<style scoped></style>

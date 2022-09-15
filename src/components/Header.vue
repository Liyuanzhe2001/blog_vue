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

    <el-drawer v-model="userSet" title="I am the title" :with-header="false">
      <span>Hi there!</span>
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
      userSet: false,
    };
  },
  methods: {
    errorHandler() {
      return true;
    },
    showUserSet() {
      this.userSet = true;
    },
  },
};
</script>

<style scoped></style>

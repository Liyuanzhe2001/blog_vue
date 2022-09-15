<template>
  <div>
    <el-menu
      style="width: 200px; min-height: calc(100vh - 50px)"
      :default-active="path"
      router
      :default-openeds="['1']"
      class="el-menu-vertical-demo"
    >
      <el-sub-menu index="1">
        <template #title>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="/book">书籍管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Aside",
  data() {
    return {
      path: this.$route.path,
    };
  },
};
</script>

<style scoped></style>

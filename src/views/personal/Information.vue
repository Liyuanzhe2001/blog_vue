<template>
  <div :style="fatherStyle">
    <el-card class="box-card">
      <div class="portrait">
        <el-avatar :size="80" :src="circleUrl" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Information",
  data() {
    return {
      fatherStyle: {
        width: "800px",
        margin: "0 auto",
        paddingTop: "40px",
      },
      circleUrl: require("@/assets/images/background.png"),
    };
  },
};
</script>

<style scoped>
.portrait {}
</style>

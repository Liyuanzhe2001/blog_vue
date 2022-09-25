<template>
  <div :style="headerStyle">
    <div :style="mainStyle">
      <div class="title">
        <span>课程</span>
      </div>
      <div>
        <el-radio-group
          v-model="language"
          :size="30"
          style="margin-bottom: 30px"
        >
          <el-radio-button label="java">Java</el-radio-button>
          <el-radio-button label="python">Python</el-radio-button>
          <el-radio-button label="bigdata">BigData</el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ClassHeader",
  created() {
    console.log(this.language);
  },
  data() {
    return {
      headerStyle: {
        minWidth: "1263px",
        height: "200px",
        backgroundImage:
          "url(" + require("@/assets/images/classheader.jpeg") + ")",
        position: "relative",
      },
      mainStyle: {
        width: "600px",
        height: "30px",
        position: "absolute",
        top: "-50px",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "auto",
        textAlign: "center",
      },
      language: this.$route.path.split("/")[2],
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  color: white;
  padding-bottom: 20px;
  font-weight: bold;
}
</style>

<template>
  <div :style="headerStyle">
    <div :style="mainStyle">头部</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ClassHeader",
  data() {
    return {
      headerStyle: {
        midWidth: "1263px",
        height: "200px",
        backgroundImage:
          "url(" + require("@/assets/images/classheader.jpeg") + ")",
        position: "relative",
      },
      mainStyle: {
        width: "600px",
        height: "30px",
        position: "absolute",
        top: "60px",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "white",
      },
    };
  },
};
</script>

<style scoped></style>

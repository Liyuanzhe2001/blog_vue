<template>
  <div style="width: 1263px">
    <!--    头部-->
    <Header />
    <!--    主体-->
    <div style="display: flex">
      <!--      内容区域-->
      <router-view style="flex: 1" />
    </div>
    <!--    底部-->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: "OnlineJudge",
  components: {
    Footer,
    Header,
  },
};
</script>

<style scoped></style>

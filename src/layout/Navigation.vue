<template>
  <div>
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>

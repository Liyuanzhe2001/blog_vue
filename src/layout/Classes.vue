<template>
  <div>
    <!--    头部-->
    <Header />
    <!--    主体-->
    <ClassHeader />
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
import ClassHeader from "@/components/class/ClassHeader";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Classes",
  components: {
    Footer,
    Header,
    ClassHeader,
  },
};
</script>

<style scoped></style>

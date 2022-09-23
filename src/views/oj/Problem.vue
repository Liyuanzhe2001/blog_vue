<template>
  <div
    style="
      min-height: 520px;
      width: 100%;
      padding-top: 20px;
      background-color: #eeeeee;
      position: relative;
      min-width: 1263px;
    "
  >
    {{ problemId }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Problem",
  data() {
    return {
      problemId: this.$route.params.id,
    };
  },
};
</script>

<style scoped></style>

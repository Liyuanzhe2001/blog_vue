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
    <div class="left">
      <div class="title">热榜</div>
      <ol class="top10">
        <li v-for="article in top10" :key="article">
          {{ article.title }}
        </li>
      </ol>
    </div>
    <div class="mid"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data() {
    return {
      top10: [
        {
          id: 1,
          title: "这是一个标题",
        },
        {
          id: 2,
          title: "这是一个标题",
        },
        {
          id: 3,
          title: "这是一个标题",
        },
        {
          id: 4,
          title: "这是一个标题",
        },
        {
          id: 5,
          title: "这是一个标题",
        },
        {
          id: 6,
          title: "这是一个标题",
        },
        {
          id: 7,
          title: "这是一个标题",
        },
        {
          id: 8,
          title: "这是一个标题",
        },
        {
          id: 9,
          title: "这是一个标题",
        },
        {
          id: 10,
          title: "这是一个标题",
        },
      ],
      mainContent: [{}],
    };
  },
};
</script>

<style scoped>
.left {
  width: 18%;
  position: absolute;
  left: 40px;
  padding: 10px;
  background-color: white;
}

.left .title {
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.left .top10 {
  margin-left: 28px;
  line-height: 28px;
}

.mid {
  position: absolute;
  display: inline-block;
  width: 2%;
}

.right {
  width: 73%;
  position: absolute;
  right: 40px;
  height: 93%;
  background-color: white;
}
</style>

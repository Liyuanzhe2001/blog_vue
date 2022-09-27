<template>
  <div
    class="mainBlock"
    style="
      display: block;
      min-height: 520px;
      height: 100%;
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
    <div class="right">
      <el-card v-for="mainContent in mainContents" :key="mainContent">
        <div @click="jump(mainContent.id)">
          {{ mainContent.title }}
        </div>
      </el-card>
    </div>
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
      mainContents: [
        {
          id: 1,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
        {
          id: 2,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
        {
          id: 3,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
        {
          id: 4,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
        {
          id: 5,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
        {
          id: 6,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
        {
          id: 7,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
        {
          id: 8,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
        {
          id: 9,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
        {
          id: 10,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          label: "Java",
        },
      ],
    };
  },
  methods: {
    jump(id) {
      window.location.href = "/article/" + id;
    },
  },
};
</script>

<style scoped>
.left {
  position: sticky;
  top: 1px;
  display: inline-block;
  float: left;
  width: 18%;
  margin-left: 40px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  vertical-align: top;
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

.right {
  float: right;
  display: inline-block;
  width: 73%;
  margin-right: 30px;
  height: 93%;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>

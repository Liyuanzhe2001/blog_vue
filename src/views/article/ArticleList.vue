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
        <li class="list" v-for="article in top10" :key="article">
          {{ article.title }}
        </li>
      </ol>
    </div>
    <div class="right">
      <el-card
        style="border-radius: 5px"
        v-for="mainContent in mainContents"
        :key="mainContent"
      >
        <div class="title" @click="jump(mainContent.id)">
          {{ mainContent.title }}
        </div>
        <div class="content">
          {{ mainContent.content }}
        </div>
        <div class="author">
          <el-icon><User /></el-icon>
          {{ mainContent.author }}
        </div>
        <div class="collect">
          <el-icon><Star /></el-icon>
          {{ mainContent.collect }}
        </div>
        <div class="label">
          <el-space wrap>
            <el-tag :size="30" v-for="label in mainContent.labels" :key="label">
              {{ label }}
            </el-tag>
          </el-space>
        </div>
      </el-card>
    </div>
    <div class="bottom">
      <el-pagination
        v-model:current-page="page.currentPage"
        :page-size="page.pageSize"
        :pager-count="page.pageCount"
        :current-page="page.currentPage"
        layout="prev, pager, next"
        :total="page.total"
      />
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
          labels: ["Java"],
        },
        {
          id: 2,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          labels: ["Java", "SpringBoot"],
        },
        {
          id: 3,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          labels: ["Python", "flask"],
        },
        {
          id: 4,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          labels: ["Go", "Gin"],
        },
        {
          id: 5,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          labels: ["Java"],
        },
        {
          id: 6,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          labels: ["Java"],
        },
        {
          id: 7,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          labels: ["Java"],
        },
        {
          id: 8,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          labels: ["Java"],
        },
        {
          id: 9,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          labels: ["Java"],
        },
        {
          id: 10,
          title: "这是一个标题",
          // 长度设置100
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          author: "liyuanzhe",
          collect: 100,
          labels: ["Java"],
        },
      ],
      page: {
        currentPage: 1,
        pageSize: 12,
        pageCount: 7,
        total: 1000,
      },
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
  margin-bottom: 8px;
  font-size: 1.2rem;
}

.left .top10 {
  margin-left: 28px;
  line-height: 28px;
}
.left .top10 .list {
  cursor: pointer;
}
.left .top10 .list:hover {
  color: deepskyblue;
  text-decoration: underline;
}

.right {
  float: right;
  display: inline-block;
  width: 73%;
  margin-right: 30px;
  height: 93%;
  border-radius: 5px;
  margin-bottom: 20px;
}
.right .title {
  cursor: pointer;
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: bold;
}
.right .content {
  color: dimgray;
  font-size: 0.92rem;
  margin-bottom: 8px;
}
.right .author {
  display: inline-block;
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 8px;
}
.right .author:hover {
  text-decoration: underline;
}
.right .collect {
  margin-bottom: 8px;
}
.bottom {
  float: right;
  width: 73%;
  margin-right: 30px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>

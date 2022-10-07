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
      <ol class="bookmarks">
        <li class="bookmark" v-for="bookmark in bookmarks" :key="bookmark">
          {{ bookmark }}
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
        <div class="operate">
          <el-button type="danger">删除</el-button>
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PersonalCollection",
  data() {
    return {
      bookmarks: ["默认收藏夹", "收藏夹1", "收藏夹2", "收藏夹3", "收藏夹4"],
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
      errorUrl:
        "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
    };
  },
  methods: {
    jump(id) {
      window.location.href = "/article/" + id;
    },
    errorHandler() {
      return true;
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
.left .bookmarks {
  margin-left: 28px;
  line-height: 28px;
}
.left .bookmarks .bookmark {
  list-style: none;
  cursor: pointer;
}
.left .bookmarks .bookmark:hover {
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
  display: inline-block;
  cursor: pointer;
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: bold;
}
.right .title:hover {
  text-decoration: underline;
}
.right .content {
  color: dimgray;
  font-size: 0.92rem;
  margin-bottom: 8px;
}
.right .author {
  margin-bottom: 8px;
}
.right .author:hover {
  cursor: pointer;
  text-decoration: underline;
}
.right .collect {
  margin-bottom: 8px;
}
.right .label {
  display: inline-block;
  margin-bottom: 8px;
}
.right .operate {
  float: right;
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

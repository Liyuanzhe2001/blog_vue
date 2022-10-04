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
      <div class="circle">
        <el-avatar
          :size="50"
          :src="author.circleUrl"
          @error="errorHandler"
          style="cursor: pointer"
        >
          <img :src="errorUrl" height="200px" />
        </el-avatar>
      </div>
      <div class="author" v-text="author.name" />
      <div class="fans">
        粉丝：
        <p class="fansNum" v-text="author.fansNum" />
      </div>
      <el-button
        class="btn"
        v-text="author.isFollow === 1 ? '已关注' : '未关注'"
      />
    </div>
    <div class="right">
      <el-card class="article">
        <div class="title" v-text="article.title" />
        <el-button
          class="btn"
          v-text="article.isCollected === 1 ? '已收藏' : '未收藏'"
        />
        <div class="label">
          <el-space wrap>
            <el-tag :size="30" v-for="label in article.labels" :key="label">
              {{ label }}
            </el-tag>
          </el-space>
        </div>
        <div class="content" v-text="article.content" />
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Article",
  data() {
    return {
      article: {
        title: "这是标题",
        isCollected: 1,
        content:
          "这里是主要内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        labels: ["Java", "Springboot", "SpringCloud"],
      },
      author: {
        circleUrl: require("@/assets/images/avatar.png"),
        name: "作者名字",
        isFollow: 0,
        fansNum: 114514,
      },
      errorUrl:
        "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
    };
  },
  methods: {
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

.left .author {
  margin-left: 20px;
  margin-bottom: 8px;
}
.left .circle {
  margin-left: 20px;
  margin-bottom: 8px;
}
.left .fans {
  margin-left: 20px;
  margin-bottom: 8px;
}
.left .fans .fansNum {
  display: inline-block;
}
.left .btn {
  margin-left: 20px;
  margin-bottom: 8px;
}
.right {
  float: right;
  display: inline-block;
  width: 73%;
  margin-right: 30px;
  min-height: 500px;
  height: 93%;
  border-radius: 5px;
  margin-bottom: 20px;
  word-wrap: break-word;
}
.right .article {
  padding: 10px;
  height: 100%;
  min-height: 480px;
}
.right .article .title {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 18px;
}
.right .article .btn {
  float: right;
}
.right .article .label {
  margin-bottom: 15px;
}
.right .article .content {
  margin-bottom: 8px;
}
</style>

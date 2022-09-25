<template>
  <div style="min-height: 320px">
    <div style="margin: 20px">
      <div class="circular">1</div>
      <div class="circular_font">第一部分：JAVA基础</div>
    </div>
    <el-row style="min-width: 1263px">
      <el-col
        v-for="video in part01Videos"
        :key="video"
        :span="7"
        style="margin-left: 40px; margin-bottom: 40px"
      >
        <el-card shadow="hover">
          <el-image :src="video.pic" />
          <span
            v-text="video.title"
            style="display: block; margin: 10px 0"
          ></span>
          <el-button :size="30" style="width: 100%" @click="play(video.url)"
            >播放</el-button
          >
        </el-card>
      </el-col>
    </el-row>
    <div style="margin: 20px">
      <div class="circular">2</div>
      <div class="circular_font">第二部分：JAVA中级</div>
    </div>
    <el-row style="min-width: 1263px">
      <el-col
        v-for="video in part02Videos"
        :key="video"
        :span="7"
        style="margin-left: 40px; margin-bottom: 40px"
      >
        <el-card shadow="hover">
          <el-image :src="video.pic" />
          <span
            v-text="video.title"
            style="display: block; margin: 10px 0"
          ></span>
          <el-button :size="30" style="width: 100%" @click="play(video.url)"
            >播放</el-button
          >
        </el-card>
      </el-col>
    </el-row>
    <div style="margin: 20px">
      <div class="circular">3</div>
      <div class="circular_font">第三部分：JAVA高级</div>
    </div>
    <el-row style="min-width: 1263px">
      <el-col
        v-for="video in part03Videos"
        :key="video"
        :span="7"
        style="margin-left: 40px; margin-bottom: 40px"
      >
        <el-card shadow="hover">
          <el-image :src="video.pic" />
          <span
            v-text="video.title"
            style="display: block; margin: 10px 0"
          ></span>
          <el-button :size="30" style="width: 100%" @click="play(video.url)"
            >播放</el-button
          >
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ClassList",
  data() {
    return {
      part01Videos: [
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题一",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题二",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题三",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题四",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题五",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题六",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题七",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题八",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题九",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题十",
          url: "www.baidu.com",
        },
      ],
      part02Videos: [
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题一",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题二",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题三",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题四",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题五",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题六",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题七",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题八",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题九",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题十",
          url: "www.baidu.com",
        },
      ],
      part03Videos: [
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题一",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题二",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题三",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题四",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题五",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题六",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题七",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题八",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题九",
          url: "www.baidu.com",
        },
        {
          pic: require("@/assets/images/video.jpeg"),
          title: "标题十",
          url: "www.baidu.com",
        },
      ],
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    play(url) {
      window.open("//" + url);
    },
  },
};
</script>

<style scoped></style>

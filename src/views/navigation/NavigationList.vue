<template>
  <div style="min-height: 320px">
    <div style="margin: 20px">
      <div class="circular">1</div>
      <div class="circular_font">搜索引擎</div>
    </div>
    <el-row style="min-width: 1263px">
      <el-col
        v-for="navigation in part01Navigation"
        :key="navigation"
        :span="7"
        style="margin-left: 40px; margin-bottom: 40px"
      >
        <el-card shadow="hover">
          <el-image :src="navigation.pic" />
          <span
            v-text="navigation.title"
            style="display: block; margin: 10px 0"
          ></span>
          <el-button
            :size="30"
            style="width: 100%"
            @click="jump(navigation.url)"
            >进入
          </el-button>
        </el-card>
      </el-col>
    </el-row>
    <div style="margin: 20px">
      <div class="circular">2</div>
      <div class="circular_font">学习网站</div>
    </div>
    <el-row style="min-width: 1263px">
      <el-col
        v-for="navigation in part02Navigation"
        :key="navigation"
        :span="7"
        style="margin-left: 40px; margin-bottom: 40px"
      >
        <el-card shadow="hover">
          <el-image :src="navigation.pic" />
          <span
            v-text="navigation.title"
            style="display: block; margin: 10px 0"
          ></span>
          <el-button
            :size="30"
            style="width: 100%"
            @click="jump(navigation.url)"
            >进入
          </el-button>
        </el-card>
      </el-col>
    </el-row>
    <div style="margin: 20px">
      <div class="circular">3</div>
      <div class="circular_font">编程教学</div>
    </div>
    <el-row style="min-width: 1263px">
      <el-col
        v-for="navigation in part03Navigation"
        :key="navigation"
        :span="7"
        style="margin-left: 40px; margin-bottom: 40px"
      >
        <el-card shadow="hover">
          <el-image :src="navigation.pic" />
          <span
            v-text="navigation.title"
            style="display: block; margin: 10px 0"
          ></span>
          <el-button
            :size="30"
            style="width: 100%"
            @click="jump(navigation.url)"
            >进入
          </el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NavigationList",
  data() {
    return {
      part01Navigation: [
        {
          title: "百度一下",
          url: "www.baidu.com",
          pic: require("@/assets/images/navigation/baidu.png"),
        },
        {
          title: "百度一下",
          url: "www.baidu.com",
          pic: require("@/assets/images/navigation/baidu.png"),
        },
        {
          title: "百度一下",
          url: "www.baidu.com",
          pic: require("@/assets/images/navigation/baidu.png"),
        },
        {
          title: "百度一下",
          url: "www.baidu.com",
          pic: require("@/assets/images/navigation/baidu.png"),
        },
        {
          title: "百度一下",
          url: "www.baidu.com",
          pic: require("@/assets/images/navigation/baidu.png"),
        },
        {
          title: "百度一下",
          url: "www.baidu.com",
          pic: require("@/assets/images/navigation/baidu.png"),
        },
        {
          title: "百度一下",
          url: "www.baidu.com",
          pic: require("@/assets/images/navigation/baidu.png"),
        },
      ],
      part02Navigation: [
        {
          title: "哔哩哔哩",
          url: "www.bilibili.com",
          pic: require("@/assets/images/navigation/bilibili.png"),
        },
        {
          title: "哔哩哔哩",
          url: "www.bilibili.com",
          pic: require("@/assets/images/navigation/bilibili.png"),
        },
        {
          title: "哔哩哔哩",
          url: "www.bilibili.com",
          pic: require("@/assets/images/navigation/bilibili.png"),
        },
        {
          title: "哔哩哔哩",
          url: "www.bilibili.com",
          pic: require("@/assets/images/navigation/bilibili.png"),
        },
        {
          title: "哔哩哔哩",
          url: "www.bilibili.com",
          pic: require("@/assets/images/navigation/bilibili.png"),
        },
        {
          title: "哔哩哔哩",
          url: "www.bilibili.com",
          pic: require("@/assets/images/navigation/bilibili.png"),
        },
      ],
      part03Navigation: [
        {
          title: "尚硅谷",
          url: "http://www.atguigu.com/",
          pic: require("@/assets/images/navigation/atguigu.png"),
        },
        {
          title: "黑马程序员",
          url: "https://www.itheima.com/",
          pic: require("@/assets/images/navigation/itheima.png"),
        },
        {
          title: "尚硅谷",
          url: "http://www.atguigu.com/",
          pic: require("@/assets/images/navigation/atguigu.png"),
        },
        {
          title: "黑马程序员",
          url: "https://www.itheima.com/",
          pic: require("@/assets/images/navigation/itheima.png"),
        },
      ],
    };
  },
  methods: {
    jump(url) {
      window.open("//" + url);
    },
  },
};
</script>

<style scoped></style>

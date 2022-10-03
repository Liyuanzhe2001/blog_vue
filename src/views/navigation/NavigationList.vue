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
          url: "https://www.baidu.com/",
          pic: require("@/assets/images/navigation/baidu.png"),
        },
        {
          title: "hao123",
          url: "https://www.hao123.com/",
          pic: require("@/assets/images/navigation/hao123.png"),
        },
        {
          title: "必应",
          url: "https://cn.bing.com/m",
          pic: require("@/assets/images/navigation/bing.png"),
        },
        {
          title: "360搜索",
          url: "https://www.so.com/",
          pic: require("@/assets/images/navigation/so.png"),
        },
        {
          title: "有道",
          url: "https://www.youdao.com/",
          pic: require("@/assets/images/navigation/youdao.png"),
        },
        {
          title: "搜狗",
          url: "https://www.sogou.com/",
          pic: require("@/assets/images/navigation/sougou.png"),
        },
      ],
      part02Navigation: [
        {
          title: "知乎",
          url: "https://www.zhihu.com/",
          pic: require("@/assets/images/navigation/zhihu.png"),
        },
        {
          title: "CSDN",
          url: "https://www.csdn.net/",
          pic: require("@/assets/images/navigation/csdn.png"),
        },
        {
          title: "博客园",
          url: "https://www.cnblogs.com/",
          pic: require("@/assets/images/navigation/cnblogs.png"),
        },
        {
          title: "菜鸟教程",
          url: "https://www.runoob.com/",
          pic: require("@/assets/images/navigation/runoob.png"),
        },
      ],
      part03Navigation: [
        {
          title: "哔哩哔哩",
          url: "www.bilibili.com",
          pic: require("@/assets/images/navigation/bilibili.png"),
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

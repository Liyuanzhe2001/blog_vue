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
    <div class="main_part">
      <el-card style="border-radius: 5px">
        <div class="title">
          <el-input
            class="input"
            size="large"
            v-model="article.title"
            maxlength="100"
            show-word-limit
            placeholder="请输入标题"
          />
        </div>
        <div class="main_content">
          <el-input
            class="input"
            v-model="article.content"
            maxlength="3000"
            :autosize="{ minRows: 30 }"
            show-word-limit
            type="textarea"
          />
        </div>
        <div class="type">
          <span class="text">文章类型：</span>
          <el-radio-group v-model="article.type" size="large">
            <el-radio :label="0">原创</el-radio>
            <el-radio :label="1">转载</el-radio>
            <el-radio :label="2">翻译</el-radio>
          </el-radio-group>
        </div>
        <div class="modality">
          <span class="text">文章形式：</span>
          <el-radio-group v-model="article.modality" size="large">
            <el-radio :label="0">所有人可见</el-radio>
            <el-radio :label="1">仅自己可见</el-radio>
          </el-radio-group>
        </div>
        <div class="tags">
          <span class="text">文章标签：</span>
          <el-tag
            v-for="tag in article.dynamicTags"
            :key="tag"
            class="tag"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            v-if="inputVisible"
            size="small"
            ref="InputRef"
            class="input"
            v-model="inputValue"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <el-button class="btn" v-else size="small" @click="showInput">
            + New Tag
          </el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { nextTick } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PublishArticle",
  data() {
    return {
      article: {
        title: "",
        content: "",
        type: 0,
        modality: 0,
        dynamicTags: [],
      },
      inputVisible: false,
      inputValue: "",
    };
  },
  methods: {
    showInput() {
      this.inputVisible = true;
      nextTick(() => {
        this.$refs.InputRef.input.focus();
      });
      console.log(this.inputVisible);
    },
    handleClose(tag) {
      this.article.dynamicTags.splice(this.article.dynamicTags.indexOf(tag), 1);
      console.log(this.dynamicTags);
    },
    handleInputConfirm() {
      if (this.inputValue !== "") {
        this.article.dynamicTags.push(this.inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
.main_part {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: 93%;
  border-radius: 5px;
}
.main_part .title {
  margin-top: 20px;
  margin-bottom: 20px;
}
.main_part .title .input {
  font-size: 20px;
}
.main_part .main_content {
  font-size: 20px;
  margin-bottom: 20px;
}
.main_part .main_content .input {
  font-size: 18px;
}
.main_part .type {
  margin-bottom: 5px;
}
.main_part .type .text {
  font-size: 16px;
}
.main_part .modality {
  margin-bottom: 5px;
}
.main_part .modality .text {
  font-size: 16px;
}
.main_part .tags {
  line-height: 40px;
}
.main_part .tags .text {
  font-size: 16px;
}
.main_part .tags .tag {
  margin-right: 8px;
}
.main_part .tags .input {
  width: 80px;
}
.main_part .tags .btn {
  width: 80px;
}
</style>

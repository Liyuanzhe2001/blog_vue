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
      <el-scrollbar max-height="496px">
        <div class="title">
          {{ problem.id }}.&nbsp;&nbsp;{{ problem.title }}
        </div>
        <div class="context">{{ problem.content }}</div>
        <div class="example" v-for="example in problem.example" :key="example">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>输入</span>
              </div>
            </template>
            <div class="text item">{{ example.enter }}</div>
          </el-card>
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>输出</span>
              </div>
            </template>
            <div class="text item">{{ example.output }}</div>
          </el-card>
        </div>
        <div class="limit" v-for="limit in problem.limit" :key="limit">
          <p>
            {{ limit.scope.min }}&lt;{{ limit.parameter }}&lt;
            {{ limit.scope.max }}
          </p>
        </div>
      </el-scrollbar>
    </div>
    <div class="center"></div>
    <div class="right">
      <el-scrollbar max-height="496px">
        <div class="select">
          <el-select
            v-model="value"
            :placeholder="options[0].value"
            class="m-2"
            size="default"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="area">
          <el-input
            class="context"
            v-model="textarea"
            :rows="18"
            type="textarea"
            resize="none"
          />
        </div>
        <div class="btn">
          <el-button type="primary" size="big">提交</el-button>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Problem",
  data: function () {
    return {
      problem: {
        id: this.$route.params.id,
        title: "题目标题",
        content: "用代码实现，计算a+b",
        example: [
          {
            enter: "1 2",
            output: "3",
          },
          {
            enter: "2 3",
            output: "4",
          },
        ],
        limit: [
          {
            parameter: "a",
            scope: {
              min: "1",
              max: "20",
            },
          },
          {
            parameter: "b",
            scope: {
              min: "1",
              max: "20",
            },
          },
        ],
      },
      value: "",
      options: [
        {
          value: "C++",
          label: "C++",
        },
        {
          value: "Java",
          label: "Java",
        },
        {
          value: "Python",
          label: "Python",
        },
        {
          value: "Python3",
          label: "Python3",
        },
        {
          value: "C",
          label: "C",
        },
        {
          value: "C#",
          label: "C#",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
      ],
      reply: {
        language: "Java",
        answer:
          "public int add(int a, int b) {\
              return a+b;\
           }",
      },
      textarea: "",
    };
  },
};
</script>

<style scoped>
.left {
  display: inline-block;
  width: 48%;
  height: 98%;
  border-radius: 5px;
  margin-left: 20px;
  background-color: white;
}
.left .title {
  margin: 15px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}
.left .context {
  margin: 15px 20px;
  padding: 10px 30px;
}
.left .example .box-card {
  display: inline-block;
  width: 30%;
  margin: 20px;
  font-size: 15px;
}
.left .limit {
  margin: 20px;
}
.center {
  display: inline-block;
  width: 1%;
}
.right {
  display: inline-block;
  width: 48%;
  height: 98%;
  border-radius: 5px;
  background-color: white;
}
.right .select {
  width: 100px;
  margin: 20px;
}
.right .area {
  width: 577px;
  margin: 0 20px;
}
.right .area .context {
  font-size: 13px;
}
.right .btn {
  margin: 6px 20px;
  float: right;
}
</style>

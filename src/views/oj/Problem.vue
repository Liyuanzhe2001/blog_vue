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
      <el-scrollbar max-height="520px">
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
    <div class="right"></div>
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
      reply: {
        language: "Java",
        answer:
          "public int add(int a, int b) {\
              return a+b;\
           }",
      },
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
</style>

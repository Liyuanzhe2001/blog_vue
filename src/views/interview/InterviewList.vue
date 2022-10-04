<template>
  <div
    style="
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
      <el-table
        :data="problems"
        stripe
        style="
          width: 100%;
          border-radius: 5px;
          margin: 0 auto;
          font-size: 0.9rem;
        "
      >
        <el-table-column
          :formatter="statusFormat"
          prop="status"
          label="状态"
          width="100px"
        />
        <el-table-column prop="topic" label="题目" />
        <el-table-column prop="hot" label="热度" />
        <el-table-column
          prop="difficulty"
          label="难度"
          :formatter="difficultyFormat"
        />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="getContent(scope.row['content'])"
            >
              查看内容
            </el-button>
            <el-button
              link
              type="primary"
              size="small"
              @click="getAnswer(scope.row['answer'])"
            >
              查看答案
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div
        style="
          height: 20px;
          display: block;
          margin-top: 20px;
          position: absolute;
          right: 0;
        "
      >
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
    <div class="right">
      <el-card class="box-card">
        <h3>已签到：{{ signInDays }}天</h3>
      </el-card>
      <div class="center"></div>
      <el-card class="box-card" style="width: 100%; height: 70%">
        <div id="pie" style="width: 100%; height: 300px"></div>
      </el-card>
    </div>
    <el-dialog v-model="contentShow" title="题目内容">
      <span v-text="mainContent"></span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="contentShow = false">未背</el-button>
          <el-button type="primary" @click="contentShow = false"
            >已背</el-button
          >
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="answerShow" title="答案">
      <span v-text="mainAnswer"></span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="answerShow = false">未背</el-button>
          <el-button type="primary" @click="answerShow = false">已背</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "interviewList",
  data() {
    return {
      problems: [
        {
          status: "1",
          topic: "题目一",
          content:
            "题目一的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案一",
          hot: "112233",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目二",
          content:
            "题目二的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案二",
          hot: "112233",
          difficulty: "2",
        },
        {
          status: "0",
          topic: "题目三",
          content:
            "题目三的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案三",
          hot: "112233",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目四",
          content:
            "题目四的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案四",
          hot: "112233",
          difficulty: "2",
        },
        {
          status: "0",
          topic: "题目五",
          content:
            "题目五的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案五",
          hot: "112233",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目六",
          content:
            "题目六的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案六",
          hot: "112233",
          difficulty: "2",
        },
        {
          status: "0",
          topic: "题目七",
          content:
            "题目七的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案七",
          hot: "112233",
          difficulty: "2",
        },
        {
          status: "0",
          topic: "题目八",
          content:
            "题目八的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案八",
          hot: "112233",
          difficulty: "2",
        },
        {
          status: "0",
          topic: "题目九",
          content:
            "题目九的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案九",
          hot: "112233",
          difficulty: "0",
        },
        {
          status: "1",
          topic: "题目十",
          content:
            "题目十的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案十",
          hot: "112233",
          difficulty: "1",
        },
        {
          status: "0",
          topic: "题目十一",
          content:
            "题目十一的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案十一",
          hot: "112233",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目十二",
          content:
            "题目十二的内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          answer: "答案十二",
          hot: "112233",
          difficulty: "2",
        },
      ],
      page: {
        currentPage: 1,
        pageSize: 12,
        pageCount: 7,
        total: 1000,
      },
      signInDays: 1,
      contentShow: false,
      mainContent: "",
      answerShow: false,
      mainAnswer: "",
    };
  },
  mounted() {
    this.drawCart();
  },
  methods: {
    statusFormat(row) {
      if (row.status === "0") {
        return "";
      } else {
        return "已背";
      }
    },
    difficultyFormat(row) {
      if (row.difficulty === "0") return "简单";
      else if (row.difficulty === "1") return "中等";
      else return "困难";
    },
    getContent(content) {
      this.mainContent = content;
      this.contentShow = true;
    },
    getAnswer(answer) {
      this.mainAnswer = answer;
      this.answerShow = true;
    },
    drawCart() {
      let myChart = echarts.init(document.getElementById("pie"));
      let option = {
        tooltip: {
          trigger: "item",
        },
        color: ["#4eac9b", "#f4bb40", "#ea445a", "#dfdfdf"],
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 20, name: "简单" },
              { value: 10, name: "中等" },
              { value: 5, name: "困难" },
              { value: 100, name: "未完成" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.left {
  width: 60%;
  position: absolute;
  left: 40px;
}
.right {
  width: 30%;
  position: absolute;
  right: 40px;
  height: 80%;
}
.right .center {
  height: 4%;
}
</style>

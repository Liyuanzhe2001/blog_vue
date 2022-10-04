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
      <el-table
        :data="tableData"
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
        <el-table-column style="cursor: pointer" prop="topic" label="题目">
          <template #default="scope">
            <el-button
              size="big"
              link
              v-text="scope.row['topic']"
              @click="openTopic(scope.row['id'])"
            />
          </template>
        </el-table-column>
        <el-table-column prop="answer" label="题解" />
        <el-table-column prop="passingRate" label="通过率" />
        <el-table-column
          prop="difficulty"
          label="难度"
          :formatter="difficultyFormat"
        />
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
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "ProblemList",
  data() {
    return {
      tableData: [
        {
          id: "1",
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "0",
        },
        {
          id: "2",
          status: "2",
          topic: "题目内容二",
          answer: "1234",
          passingRate: "30%",
          difficulty: "2",
        },
        {
          id: "3",
          status: "1",
          topic: "题目内容三",
          answer: "123",
          passingRate: "24%",
          difficulty: "1",
        },
        {
          id: "4",
          status: "1",
          topic: "题目内容四",
          answer: "1139",
          passingRate: "24%",
          difficulty: "1",
        },
        {
          id: "5",
          status: "2",
          topic: "题目内容五",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          id: "6",
          status: "1",
          topic: "题目内容六",
          answer: "1234",
          passingRate: "20%",
          difficulty: "1",
        },
        {
          id: "7",
          status: "2",
          topic: "题目内容七",
          answer: "1234",
          passingRate: "20%",
          difficulty: "0",
        },
        {
          id: "8",
          status: "1",
          topic: "题目内八",
          answer: "1234",
          passingRate: "20%",
          difficulty: "1",
        },
        {
          id: "9",
          status: "1",
          topic: "题目内容九",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          id: "10",
          status: "2",
          topic: "题目内容十",
          answer: "1234",
          passingRate: "20%",
          difficulty: "0",
        },
        {
          id: "11",
          status: "1",
          topic: "题目内容十一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "0",
        },
        {
          id: "12",
          status: "2",
          topic: "题目内容十二",
          answer: "1234",
          passingRate: "20%",
          difficulty: "1",
        },
      ],
      page: {
        currentPage: 1,
        pageSize: 12,
        pageCount: 7,
        total: 1000,
      },
      signInDays: 1,
      problems: {
        easy: 30,
        mid: 20,
        diff: 10,
        other: 100,
      },
    };
  },
  mounted() {
    this.drawCart();
  },
  methods: {
    openTopic(index) {
      window.location.href = "oj/" + index;
    },
    statusFormat(row) {
      if (row === 0) {
        return "";
      } else {
        return "已解决";
      }
    },
    difficultyFormat(row) {
      if (row.difficulty === "0") return "简单";
      else if (row.difficulty === "1") return "中等";
      else return "困难";
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

<template>
  <div
    style="
      min-height: 520px;
      width: 100%;
      padding-top: 20px;
      background-color: #eeeeee;
    "
  >
    <el-table
      :data="tableData"
      style="width: 80%; border-radius: 5px; margin: 0 auto; font-size: 1rem"
    >
      <el-table-column
        :formatter="statusFormat"
        prop="status"
        label="状态"
        width="100px"
      />
      <el-table-column
        style="cursor: pointer"
        @click="openTopic"
        prop="topic"
        label="题目"
      >
        <template #default="scope">
          <el-button size="big" link v-text="scope.row['topic']" />
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
        right: 10vw;
      "
    >
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProblemList",
  data() {
    return {
      tableData: [
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "0",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "1",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "1",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
        {
          status: "1",
          topic: "题目内容一",
          answer: "1234",
          passingRate: "20%",
          difficulty: "2",
        },
      ],
    };
  },
  methods: {
    openTopic() {},
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
  },
};
</script>

<style scoped></style>

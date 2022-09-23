<template>
  <div :style="fatherStyle">
    <div :style="mainContent">
      <b>一二三四五六七八</b>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      fatherStyle: {
        width: "100%",
        padding: "10px",
        minHeight: "520px",
        backgroundImage:
          "url(" + require("../assets/images/background.png") + ")",
        backgroundSize: "cover",
        position: "relative",
        minWidth: "1263px",
      },
      mainContent: {
        width: "10em",
        height: "30px",
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "auto",
        textAlign: "center",
        fontSize: "30px",
      },
    };
  },
  methods: {
    load() {
      request
        .get("/user", {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            search: this.search,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
    add() {
      this.dialogVisible = true;
      this.form = {};
    },
    save() {
      if (this.form.id) {
        // 更新
        request.put("/user", this.form).then((res) => {
          console.log(res);
          if (res.code === "0") {
            this.$message({
              type: "success",
              message: "更新成功",
            });
            this.load(); // 刷新表格的数据
            this.dialogVisible = false; // 关闭弹窗
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      } else {
        // 新增
        request.post("/user", this.form).then((res) => {
          console.log(res);
          if (res.code === "0") {
            this.$message({
              type: "success",
              message: "新增成功",
            });
            this.load(); // 刷新表格的数据
            this.dialogVisible = false; // 关闭弹窗
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      }
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row));
      this.dialogVisible = true;
    },
    handleDelete(id) {
      console.log(id);
      request.delete("/user/" + id).then((res) => {
        if (res.code === "0") {
          this.$message({
            type: "success",
            message: "删除成功",
          });
          this.load(); // 刷新表格的数据
          this.dialogVisible = false; // 关闭弹窗
        } else {
          this.$message({
            type: "error",
            message: res.msg,
          });
        }
      });
    },
    handleSizeChange(pageSize) {
      // 改变当前每页的个数触发
      this.pageSize = pageSize;
      this.load();
    },
    handleCurrentChange(pageNum) {
      // 改变当前页码触发
      this.currentPage = pageNum;
      this.load();
    },
  },
};
</script>

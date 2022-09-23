import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "dayjs/locale/zh-cn";
import locale from "element-plus/lib/locale/lang/zh-cn";
import * as ElIconModules from "@element-plus/icons-vue";
import echarts from "echarts";

import "@/assets/css/global.css";
import "@/assets/images/background.png";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale,
    size: "small",
  })
  .use(echarts)
  .mount("#app");

//  统一注册el-icon图标
for (const iconName in ElIconModules) {
  app.component(iconName, ElIconModules[iconName]);
}

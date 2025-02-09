import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "微光杯-SAR社区比赛",
  description: "微光杯-SAR社区比赛",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "文档目录",
      icon: "location-dot",
      link: "index.md",
    },
    {
      text: "模式详解",
      icon: "dice",
      link: "mode.md",
    },
  ],
});

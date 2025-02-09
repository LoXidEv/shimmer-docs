import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "文档",
    icon: "book",
    link: "/",
  },
  {
    text: "联系&参加",
    icon: "gamepad",
    children: [
      {
        text: "QQ 频道",
        icon: "dice-d6",
        link: "https://pd.qq.com/s/dxjrcelhz",
      },
      {
        text: "QQ 群组",
        icon: "dice-d6",
        link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=CjWrjfgveFS9rtSeRvHZy5O2fjD2CYPZ&authKey=S6XoFitgNPgCn%2FUyHJeVRIdcNngI2F1TGPbL0m%2BM3ULXEnnrxHMFIJAjKLFhBkGl&noverify=0&group_code=806734602",
      },
    ],
  },

]);

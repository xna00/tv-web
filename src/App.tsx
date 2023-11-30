import { useState } from "react";
import cctvAction from "./actions/cctv.ts?raw";

console.log(cctvAction);

type Channel = {
  name: string;
  logo?: string;
  url: string;
  before?: () => unknown;
  action: string;
};

const channels: Channel[] = [
  ...[
    {
      name: "CCTV-1 综合",
      url: "https://tv.cctv.com/live/cctv1/m/",
    },
    {
      name: "CCTV-2 财经",
      url: "https://tv.cctv.com/live/cctv2/m/",
    },
    {
      name: "CCTV-3 综艺",
      url: "https://tv.cctv.com/live/cctv3/m/",
    },
    {
      name: "CCTV-4 中文国际（亚）",
      url: "https://tv.cctv.com/live/cctv4/m/",
    },
    {
      name: "CCTV-5 体育",
      url: "https://tv.cctv.com/live/cctv5/m/",
    },
    {
      name: "CCTV-5+ 体育赛事",
      url: "https://tv.cctv.com/live/cctv5plus/m/",
    },
    {
      name: "CCTV-6 电影",
      url: "https://tv.cctv.com/live/cctv6/m/",
    },
    {
      name: "CCTV-7 国防军事",
      url: "https://tv.cctv.com/live/cctv7/m/",
    },
    {
      name: "CCTV-8 电视剧",
      url: "https://tv.cctv.com/live/cctv8/m/",
    },
    {
      name: "CCTV-9 纪录",
      url: "https://tv.cctv.com/live/cctvjilu/m/",
    },
    {
      name: "CCTV-10 科教",
      url: "https://tv.cctv.com/live/cctv10/m/",
    },
    {
      name: "CCTV-11 戏曲",
      url: "https://tv.cctv.com/live/cctv11/m/",
    },
    {
      name: "CCTV-12 社会与法",
      url: "https://tv.cctv.com/live/cctv12/m/",
    },
    {
      name: "CCTV-13 新闻",
      url: "https://tv.cctv.com/live/cctv13/m/",
    },
    {
      name: "CCTV-14 少儿",
      url: "https://tv.cctv.com/live/cctvchild/m/",
    },
    {
      name: "CCTV-15 音乐",
      url: "https://tv.cctv.com/live/cctv15/m/",
    },
    {
      name: "CCTV-16 奥林匹克",
      url: "https://tv.cctv.com/live/cctv16/m/",
    },
    {
      name: "CCTV-17 农业农村",
      url: "https://tv.cctv.com/live/cctv17/m/",
    },
    {
      name: "CCTV-4 中文国际（欧）",
      url: "https://tv.cctv.com/live/cctveurope/m/",
    },
    {
      name: "CCTV-4 中文国际（美）",
      url: "https://tv.cctv.com/live/cctvamerica/m/",
    },
  ].map((e) => ({ ...e, action: cctvAction })),
];

function App() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr]">
      {channels.map((c) => (
        <div
          className="h-20"
          key={c.url}
          onClick={() => {
            Promise.resolve(c.before?.())
              .then(() => {
                window.android?.registerJs(c.action);
              })
              .then(() => {
                location.href = c.url;
              });
          }}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}

export default App;

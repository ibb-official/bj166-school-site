// 金帆管乐团 / 金帆话剧团 / 合唱团档案。
// 规则：不写教师（含指挥、导演、作曲者中的教师身份）与学生姓名，按语境写“常任指挥”“指导教师”“外聘导演”。
// 资料核对：2026-11-01。来源键见 history.ts 的 historySources。

export interface ArtsItem { year: string; text: string; newsId?: number; source?: string }

export interface ArtsGroup {
  key: 'orchestra' | 'drama' | 'choir';
  name: string;
  badge?: string;
  intro: string;
  items: ArtsItem[];
  photo?: { newsId: number; gallery?: number };
}

export const artsGroups: ArtsGroup[] = [
  {
    key: 'orchestra',
    name: '金帆管乐团',
    badge: '1991年成立 · 北京市首批金帆管乐团之一',
    intro: '学校管乐团成立于1991年，是北京市首批金帆管乐团之一。附属校尉胡同小学于2017年7月组建管乐团，从零基础教起，并为中学部乐团输送团员——据2023年报道，中学金帆管乐团一半以上的学生来自小学部管乐团。',
    items: [
      { year: '2019', text: '12月26日，“华章盛典——2020新年音乐会”在北京音乐厅举行，金帆管乐团与附小管乐团同台。', newsId: 41 },
      { year: '2022', text: '学校向中国音乐学院作曲系教师委约交响管乐新作《缤纷幻想曲》，作品于当年完成。', source: 'music-weekly' },
      { year: '2023', text: '11月22日，“缤纷幻想”专场音乐会在北京音乐厅举行，庆祝建团32周年并为建校160周年献礼；压轴首演《缤纷幻想曲》——由三个主题交织而成，描绘青春对未来的憧憬与古都的日新月异。', newsId: 18, source: 'music-weekly' }
    ],
    photo: { newsId: 18 }
  },
  {
    key: 'drama',
    name: '金帆话剧团',
    badge: '每年一场年度专场',
    intro: '话剧团每年举办一场年度专场演出，排演过《这里的黎明静悄悄》《骆驼祥子》等经典剧目，也尝试改编与原创。2023年迎来剧团成立18周年。',
    items: [
      { year: '2017', text: '11月24日，在北京市少年宫剧场上演年度大戏《仲夏夜之梦》：以莎士比亚喜剧为主线，穿插“黛玉进府”“刘姥姥进大观园”“贾母祝寿”等《红楼梦》情节。总导演由北京人民艺术剧院的导演担任；结对共建的良乡第五中学师生到场观摩。', source: 'drama-2017' },
      { year: '2023', text: '11月8日至9日，原创校史剧《百合花颂》在东城区少年宫上演，以校花百合花命名，分“觉醒”“洪流”“领潮”“传承”四幕。', newsId: 22 },
      { year: '2026', text: '9月，《高地前的抉择》参加东城区第二十九届学生艺术节戏剧（戏曲）展演金帆专场。', newsId: 6 }
    ],
    photo: { newsId: 22 }
  },
  {
    key: 'choir',
    name: '合唱团',
    intro: '学校有星光高中男声合唱团，以及一贯制与高中女子合唱团。',
    items: [
      { year: '2024', text: '5月，“青春之歌，唱给你听”合唱专场音乐会在中山公园音乐堂举行。', newsId: 21 },
      { year: '2026', text: '10月，高中星光男声合唱团参加北京市第二十九届学生艺术节合唱展演。', newsId: 32 }
    ],
    photo: { newsId: 21 }
  }
];

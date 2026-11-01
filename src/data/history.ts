// 校史沿革、佟府与同福夹道、知名校友、校园地标与校园实拍。
// 与 news.ts 分开：news.ts 是“有原文链接的报道”，这里是“长期沿革事实”。
// 规则：只写有出处的事实；教师（含历任校长、指导教师）不写姓名；未核实项不收录。
// 资料核对：2026-11-01。

export const historyCheckedAt = '2026-11-01';

export interface HistorySource {
  key: string;
  title: string;
  publisher: string;
  url?: string;
  note?: string;
}

export const historySources: HistorySource[] = [
  { key: 'wiki', title: '北京市第一六六中学', publisher: '维基百科（2026-09-07 修订版）', url: 'https://zh.wikipedia.org/wiki/北京市第一六六中学', note: '沿革、佟府、贝满女中建筑遗存、知名校友；2003年并校一节引《北京教育年鉴》（2004）。' },
  { key: 'wiki-bingxin', title: '冰心', publisher: '维基百科', url: 'https://zh.wikipedia.org/wiki/冰心', note: '1914年就读贝满女中，1918年入读协和女子大学。' },
  { key: 'baike-tongfu', title: '同福夹道', publisher: '百度百科（引澎湃新闻《胡同档案丨同福夹道》、首都之窗《同福夹道名人多》）', url: 'https://baike.baidu.com/item/同福夹道', note: '胡同位置、尺寸与名称变迁。' },
  { key: 'commons', title: 'Beijing No.166 Middle School（3幅）', publisher: '维基共享资源 · 摄影 N509FZ', url: 'https://commons.wikimedia.org/wiki/File:Beijing_No.166_Middle_School_(20201211103954).jpg', note: 'CC BY-SA 4.0。' },
  { key: 'music-weekly', title: '北京市第一六六中学金帆管乐团委约新作《缤纷幻想曲》首演（标题含作曲者姓名，此处从略）', publisher: '音乐周报（微信公众号）· 2023-12-05', note: '管乐团成立年份、金帆首批、委约作品与附小管乐团。微信分享链接有时效，可按标题检索。' },
  { key: 'drama-2017', title: '预告∣一六六金帆话剧团，给你一个别样的“梦”', publisher: '北京市第166中学（微信公众号）· 2017-11-21', note: '年度专场传统与《仲夏夜之梦》改编。微信分享链接有时效，可按标题检索。' },
  { key: 'liangxiang-2017', title: '我校干部师生参加北京市166中学金帆话剧团专场演出活动', publisher: '北京市房山区良乡第五中学（微信公众号）· 2017-11-28', note: '演出日期与剧场。' }
];

export interface HistoryEvent {
  year: string;
  text: string;
  source?: string;   // historySources.key
  newsId?: number;   // 站内报道编号
}

export const historyEras: { title: string; range: string; events: HistoryEvent[] }[] = [
  {
    title: '贝满女塾与裨治文中学',
    range: '1864—1902',
    events: [
      { year: '1864', text: '裨吉励莎（贝满夫人）创办“贝满女塾”，校址在灯市口大鹁鸪胡同，是一所规模很小的女子小学。', source: 'wiki' },
      { year: '1868', text: '创办人退休，美国公理会接办，当时学生已有17人。', source: 'wiki' },
      { year: '1870', text: '学校一度停办，1872年恢复。', source: 'wiki' },
      { year: '1895', text: '开设四年制女子中学，定名“裨治文中学”；第一届学生于1899年毕业。', source: 'wiki' },
      { year: '1900', text: '义和团运动中校舍被全部焚毁，三分之一的学生罹难，其余学生避入英国驻华公使馆。', source: 'wiki' }
    ]
  },
  {
    title: '贝满中斋与女子高等教育',
    range: '1903—1925',
    events: [
      { year: '1903', text: '新校舍竣工，大门题“贝满中学校”，教学楼入口题“贝满中斋”，小学改称“培元蒙学”。', source: 'wiki' },
      { year: '1904', text: '毕业生已修读一年大学课程，被视为中国女子高等教育的开端。', source: 'wiki' },
      { year: '1905', text: '华北协和女子书院成立。', source: 'wiki' },
      { year: '1916', text: '书院迁入佟府，更名“华北协和女子大学”；灯市口校舍留给中学与小学。', source: 'wiki' },
      { year: '1920', text: '华北协和女子大学并入燕京大学。', source: 'wiki' },
      { year: '1923', text: '中学发展为三三制完全中学。', source: 'wiki' }
    ]
  },
  {
    title: '佟府里的贝满女中',
    range: '1926—1970',
    events: [
      { year: '1926', text: '中学迁入灯市口同福夹道的佟府，后定名“北平私立贝满女子中学”。', source: 'wiki' },
      { year: '1941', text: '被日伪当局改名为“北京第四女子中学”，1945年抗战胜利后恢复原名。', source: 'wiki' },
      { year: '1951', text: '改为“五一女中”；1952年改为“北京市第十二女子中学”。', source: 'wiki' },
      { year: '1963', text: '初、高中分设：初中部改为“北京市灯市口女子中学”（后并入北京市第二十五中学），高中部仍为第十二女子中学。', source: 'wiki' },
      { year: '1968', text: '更名“红卫中学”。', source: 'wiki' }
    ]
  },
  {
    title: '北京市第一六六中学',
    range: '1971—今',
    events: [
      { year: '1971', text: '改名“北京市第一六六中学”，沿用至今。', source: 'wiki' },
      { year: '2003', text: '位于东四六条的128中学（曾为徐世昌宅邸）并入，成为东校区；原164中学初中部同时并入。', source: 'wiki' },
      { year: '2018', text: '11月与加拿大普林斯顿中学建立友好校关系。', newsId: 30 },
      { year: '2022', text: '2月起使用在校生题写的校牌，此后定期换挂不同学生书写的作品。', newsId: 17 },
      { year: '2023', text: '金帆话剧团原创校史剧《百合花颂》上演；金帆管乐团在北京音乐厅首演《缤纷幻想曲》。', newsId: 22 },
      { year: '2024', text: '建校160周年，校友返校；同年9月校牌第10次换新。', newsId: 20 },
      { year: '2025', text: '春季开学典礼在两校区同步举行；教育集团第二届数学节举办。', newsId: 37 }
    ]
  }
];

/** 佟府与同福夹道：几处说法不一致的地方，正文按“两说并存”处理。 */
export const tongfu = {
  paragraphs: [
    '1926年起，贝满女中的校园就在灯市口同福夹道的佟府。维基百科记载，佟府占地十多亩，始建于明朝嘉靖年间，原是严嵩之子严世蕃的府邸；胡同资料则称明代此处路西为严嵩府东墙。两说并存，可概括为“明代严氏府邸”。',
    '清朝初年，宅院赐予佟氏家族，因而得名“佟府”。维基百科记为顺治帝佟妃（康熙帝生母孝康章皇后）的家人佟国维；胡同资料记为安北将军佟国纲的府第。佟国纲、佟国维兄弟都是康熙帝的舅父。',
    '这条胡同明代称“东夹道”，清代属镶白旗，宣统时改称“佟府夹道”；民国时期曹汝霖购得佟府部分宅园，胡同改称“同福夹道”，1949年后沿用。'
  ],
  facts: [
    ['位置', '东城区东四南大街西侧，南北走向的死胡同，南起灯市口大街，北不通行'],
    ['尺寸', '全长329米，宽6米'],
    ['旧称', '东夹道（明）→ 佟府夹道（清宣统）→ 同福夹道（民国至今）'],
    ['今日', '佟府旧址为北京市第一六六中学校园']
  ] as [string, string][],
  sources: ['wiki', 'baike-tongfu']
};

export const bingxin = {
  text: '作家冰心1914年就读于北京教会学校贝满女中，1918年入读协和女子大学理科——中学与大学两个阶段，都与本校的源流相连。如今校园里立有冰心像，也是学生写生与校园参观常见的景物。',
  sources: ['wiki-bingxin'],
  newsId: 43
};

export interface Alumnus { name: string; identity: string }

/** 维基百科“知名校友”一节，按原顺序，只写一句话身份。 */
export const alumni: Alumnus[] = [
  { name: '李德全', identity: '冯玉祥夫人，中华人民共和国卫生部部长' },
  { name: '冰心', identity: '作家' },
  { name: '谢希德', identity: '复旦大学校长' },
  { name: '韩素音', identity: '作家' },
  { name: '王琇瑛', identity: '中国第一位南丁格尔奖章获得者' },
  { name: '王承书', identity: '物理学家' },
  { name: '蒋丽金', identity: '化学家' },
  { name: '孙维世', identity: '戏剧家，邓颖超、周恩来养女' },
  { name: '张筠英', identity: '表演艺术家' },
  { name: '苏莉', identity: '前中共中央主席华国锋次女' },
  { name: '鲍蕙荞', identity: '钢琴演奏家' },
  { name: '张素久', identity: '美国华社侨胞领袖、张治中三女' },
  { name: '蒋英', identity: '钱学森夫人，蒋百里女儿' },
  { name: '周懿娴', identity: '篮球运动员、教练，新中国篮球50杰' }
];

export interface Landmark { name: string; text: string; newsId?: number; source?: string }

export const landmarks: Landmark[] = [
  { name: '冰心像', text: '校园内的冰心雕像，常见于学生写生与来访参观。', newsId: 43 },
  { name: '百草园', text: '校园园地，2023年手绘明信片活动的题材之一。', newsId: 43 },
  { name: '慎独石', text: '校园立石，同样出现在学生的明信片画作中。', newsId: 43 },
  { name: '校史馆', text: '2024年校庆期间，返校活动安排了校史馆讲解。', newsId: 20 },
  { name: '贝满女中建筑遗存', text: '位于灯市口大街55号，建于清朝晚期，2009年列为东城区文物保护单位。现存三栋楼：邵氏楼、贝氏楼与贝满中斋；贝满中斋中间为四层钟楼，南门上方有砖刻门额“贝满中斋”。', source: 'wiki' }
];

export interface HistoryPhoto { src: string; alt: string; caption: string; fileUrl: string }

export const historyPhotoCredit = '摄影：N509FZ／维基共享资源，CC BY-SA 4.0';
export const historyPhotoLicense = 'https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans';

export const historyPhotos: HistoryPhoto[] = [
  { src: '/images/history/campus-main-2020.webp', alt: '北京市第一六六中学校本部校门，门楣红字为校名', caption: '校本部校门，2020年12月。', fileUrl: 'https://commons.wikimedia.org/wiki/File:Beijing_No.166_Middle_School_(20201211103954).jpg' },
  { src: '/images/history/campus-main-2024.webp', alt: '校门门楣显示“北京市第一六六中学教育集团”，门内可见立石', caption: '校本部校门，门楣为“北京市第一六六中学教育集团”，2024年11月。', fileUrl: 'https://commons.wikimedia.org/wiki/File:Beijing_No._166_Middle_School_(20241127143808).jpg' },
  { src: '/images/history/campus-north-2023.webp', alt: '灰砖院墙间的北校区校门', caption: '北校区校门，2023年11月。图片说明称此处原为128中学、徐世昌旧宅。', fileUrl: 'https://commons.wikimedia.org/wiki/File:Beijing_No._166_Middle_School,_north_campus_(20231111164512).jpg' }
];

export function getHistorySource(key: string) {
  return historySources.find((item) => item.key === key);
}

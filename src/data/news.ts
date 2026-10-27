export const contentCheckedAt = '2026-10-26';
export const photosCheckedAt = '2026-10-27';

export const newsCategories = ['科学教育', '校园文化', '协同育人', '思政教育', '信息公示', '学校历史', '阅读活动', '集团动态', '周边环境'] as const;
export type NewsCategory = typeof newsCategories[number];

export interface ReportImage {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  originalUrl: string;
  sourceUrl?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  eventDate?: string;
  category: NewsCategory;
  source: string;
  sourceUrl: string;
  sourceTitle: string;
  summary: string;
  paragraphs: string[];
  image?: ReportImage;
  gallery?: ReportImage[];
  relatedSources?: { title: string; url: string }[];
}

// 1—8 沿用原文章编号，避免已分享的链接失效。date 为原文发布日期。
export const newsList: NewsItem[] = [
  {
    "id": 1,
    "title": "部分初三学生走进清华，学习《疫苗的力量》",
    "date": "2026-09-16",
    "eventDate": "2026-09-15",
    "category": "科学教育",
    "source": "北京日报客户端",
    "sourceUrl": "https://news.bjd.com.cn/2026/09/16/11960460.shtml",
    "sourceTitle": "新学期，北京部分中学“硬核课表”上新！",
    "summary": "一六六中学部分对生物学感兴趣的初三学生，与清华大学学生同堂学习通识课《疫苗的力量》。",
    "paragraphs": [
      "9月15日，北京市第一六六中学部分对生物学感兴趣的初三学生来到清华大学，与大学生一起学习《疫苗的力量》通识课。",
      "北京日报客户端报道，课程还安排实验室、疫苗企业参访，并借助人工智能平台模拟疫苗研发。学校提供相应课后辅导，帮助中学生理解大学课堂中的知识。"
    ],
    "image": {
      "src": "/images/reports/tsinghua-20260916.jpg",
      "alt": "清华大学课堂中，教师面向一六六中学学生授课",
      "caption": "一六六中学学生参加清华大学《疫苗的力量》课程。",
      "credit": "北京日报客户端／牛伟坤",
      "originalUrl": "https://static.bjd.com.cn/dams-res/editing/image/202609/16/qlmbtlinacmxxmkokwz9598f.jpg"
    }
  },
  {
    "id": 2,
    "title": "学校学生在全国车辆模型竞赛中获奖",
    "date": "2026-08-19",
    "category": "科学教育",
    "source": "东教印象·新京号",
    "sourceUrl": "https://www.bjnews.com.cn/detail/1787108610019978.html",
    "sourceTitle": "一等奖第一名！一六六中学子在全国青少年车辆模型教育竞赛总决赛巅峰夺魁",
    "summary": "两名新初二学生参加在泰州举行的“驾驭未来”全国青少年车辆模型教育竞赛总决赛，在四驱车与太阳能动力车项目中获奖。",
    "paragraphs": [
      "据东教印象报道，一六六中学两名新初二学生参加在泰州国际博览中心举行的2026年“驾驭未来”全国青少年车辆模型教育竞赛总决赛。",
      "参赛学生分别获得四驱车拼装竞速赛（直线类）一等奖第一名、太阳能动力车直线竞速赛优胜奖，两人共同参加的四驱车接力赛也获优胜奖。"
    ],
    "image": {
      "src": "/images/reports/vehicle-20260819.webp",
      "alt": "两名参赛学生在2026年驾驭未来全国青少年车辆模型教育竞赛总决赛展板前合影",
      "caption": "参赛学生在“驾驭未来”总决赛现场合影，2026年8月报道配图。",
      "credit": "北京市第一六六中学／东教印象转载",
      "originalUrl": "https://mposs.bjnews.com.cn/2026/08/19/3517871084166510009_051a2dffef6446dfd3414ea11ef4e546.jpg"
    }
  },
  {
    "id": 3,
    "title": "“繁星计划”科技史探究实践交流活动在一六六中学举行",
    "date": "2026-06-29",
    "eventDate": "2026-06-26",
    "category": "科学教育",
    "source": "东教印象·新京号",
    "sourceUrl": "https://www.bjnews.com.cn/detail/1782725964019667.html",
    "sourceTitle": "做中求真・以史促探・面向前沿——北京市科技史融入前沿科技探究实践交流活动在东城举办",
    "summary": "交流活动在北京市第一六六中学举办，现场展示智慧农业、可穿戴医疗、量子通信和地球演化四类探究课。",
    "paragraphs": [
      "6月26日，北京市科技史融入前沿科技探究实践交流活动在北京市第一六六中学举行。活动由北京市中小学科学教育研究指导中心、北京教科院基础教育教学研究中心主办。",
      "一六六中学展示的课程包括温室种植与草莓种植方案探究、可穿戴医疗设备设计；另两所学校展示量子通信和地球演化课例。学生在情境、实验和方案设计中理解科学知识。"
    ],
    "image": {
      "src": "/images/reports/science-20260629.jpg",
      "alt": "“繁星计划”交流活动现场，讲台与背景屏幕上的活动主题",
      "caption": "2026年6月26日，科技史融入前沿科技探究实践交流活动现场。",
      "credit": "东教印象（新京号原文配图）",
      "originalUrl": "https://mposs.bjnews.com.cn/2026/06/29/3517827253145990009_42fd78e6cd644f015ccc6a50856244ea.jpg"
    },
    "gallery": [
      {
        "src": "/images/reports/science-meeting-20260626.webp",
        "alt": "一六六中学报告厅内的科技史探究实践交流活动，参会人员面向讲台听讲",
        "caption": "2026年6月26日，科技史融入前沿科技探究实践交流活动报告厅现场。",
        "credit": "东教印象（原文配图）",
        "originalUrl": "https://mposs.bjnews.com.cn/2026/06/29/3517827253145990009_43bb22dcddd7aa479e06257b2a17adb2.jpg"
      }
    ],
    "relatedSources": [
      {
        "title": "北京教育科学研究院：活动报道及研究课介绍",
        "url": "https://www.bjesr.cn/jdxw/2026-06-30/55030.html"
      }
    ]
  },
  {
    "id": 4,
    "title": "生命科学实验班：在大学课堂、实验室与湿地中学习",
    "date": "2026-07-07",
    "category": "科学教育",
    "source": "东教印象·新京号",
    "sourceUrl": "https://www.bjnews.com.cn/detail/1783433554019999.html",
    "sourceTitle": "从科学现场走向卓越成长 | 毕业班级故事系列之五",
    "summary": "毕业班级专题回顾生科班的学习经历：清华课堂、协和医院参访、PCR实验以及奥林匹克森林公园湿地调查。",
    "paragraphs": [
      "东教印象的毕业班级专题，记录了一六六中学生命科学实验班走出教室的学习经历：参加清华大学相关课程，走进北京协和医院转化医学综合楼，开展冷泉港PCR实验。",
      "报道还介绍了奥林匹克森林公园湿地调查、生物多样性观察和校内科技俱乐部课题。科学实践之外，班级也参与经典阅读、音乐与艺术活动。"
    ],
    "image": {
      "src": "/images/reports/biology-20260707.jpg",
      "alt": "实验人员指导身着一六六中学校服的学生使用实验器材",
      "caption": "生命科学实验班实践活动，图片见毕业班级专题报道。",
      "credit": "东教印象（新京号原文配图）",
      "originalUrl": "https://mposs.bjnews.com.cn/2026/07/07/3517834333416310000_387d3cc56d69469fedb00ddccff6522b.jpg"
    },
    "gallery": [
      {
        "src": "/images/reports/biology-group-20260707.webp",
        "alt": "身着蓝白校服的生科班学生在室外合影",
        "caption": "生科班毕业专题中的集体合影。原文发表于2026年7月，未单独注明这张照片的拍摄日期与地点。",
        "credit": "东教印象（学校毕业班级专题配图）",
        "originalUrl": "https://mposs.bjnews.com.cn/2026/07/07/3517834333416310000_fed383afa6dd956bb0e8169ef7441a3b.jpg"
      }
    ]
  },
  {
    "id": 5,
    "title": "一六六中学教育共同体成立消息见于东城教育周报",
    "date": "2026-09-07",
    "category": "协同育人",
    "source": "东教印象·新京号",
    "sourceUrl": "https://www.bjnews.com.cn/detail/1788789665019559.html",
    "sourceTitle": "一周东城教育新鲜事儿 | 铭记历史守初心，匠心护学赴新章",
    "summary": "东教印象周报在“汇聚合力 同心育人”栏目刊登北京市第一六六中学教育共同体正式成立的消息。",
    "paragraphs": [
      "9月7日发布的东城教育周报，在“汇聚合力 同心育人”栏目中刊登北京市第一六六中学教育共同体正式成立的消息。该条目为消息索引，成员单位和后续活动安排请查阅学校正式发布。"
    ],
    "image": {
      "src": "/images/reports/community-20260907.webp",
      "alt": "学校教育共同体成立仪式合影，背景屏幕写有汇聚合力同心育人及成立仪式字样",
      "caption": "教育共同体成立仪式。图片刊于2026年9月7日东城教育周报的学校条目。",
      "credit": "北京市第一六六中学／东教印象周报配图",
      "originalUrl": "https://mposs.bjnews.com.cn/2026/09/07/3517887893105440003_5bb759f84bdd134c7db32ad896f690cb.jpg"
    }
  },
  {
    "id": 6,
    "title": "《高地前的抉择》亮相东城区学生艺术节戏剧展演",
    "date": "2026-09-23",
    "eventDate": "2026-09-10",
    "category": "校园文化",
    "source": "东教印象·新京号",
    "sourceUrl": "https://www.bjnews.com.cn/detail/1790085938019654.html",
    "sourceTitle": "戏润东城 百花成春——东城区第二十九届学生艺术节戏剧（戏曲）展演圆满落幕",
    "summary": "在9月10日举行的金帆专场中，一六六中学带来剧目《高地前的抉择》。",
    "paragraphs": [
      "东城区第二十九届学生艺术节戏剧（戏曲）展演于9月开展。一六六中学在9月10日的金帆专场呈现剧目《高地前的抉择》，该专场共有五所学校的六部作品参加。",
      "据东教印象统计，本届展演汇集全区50余所学校、130余个节目，2000余名学生登台。上述数字为全区活动规模，并非一六六中学单校数据。"
    ],
    "image": {
      "src": "/images/reports/drama-20260910.webp",
      "alt": "高地前的抉择演出现场，学生演员身着军装在黑色星光背景前表演",
      "caption": "《高地前的抉择》金帆专场演出现场，2026年9月。",
      "credit": "东教印象／东城区学生艺术节展演报道配图",
      "originalUrl": "https://mposs.bjnews.com.cn/2026/09/22/3517900593335980005_a5bbafa6db1b714cd1ab9aa93fbb0f25.jpg"
    },
    "gallery": [
      {
        "src": "/images/reports/drama-review-20260910.webp",
        "alt": "高地前的抉择演出回顾视频中，两名身着军装的学生演员进行对手戏",
        "caption": "演出回顾视频中的舞台片段。此图为视频画面，与上方摄影配图分别标注。",
        "credit": "东教印象（金帆专场回顾视频画面）",
        "originalUrl": "https://mposs.bjnews.com.cn/video/2026/09/22/3517900593335980005_59a8545ec420b40241ac0e7c150abc61.mp4"
      }
    ]
  },
  {
    "id": 7,
    "title": "国家安全教育日：一六六中学开展主题宣讲",
    "date": "2026-04-15",
    "category": "思政教育",
    "source": "东教印象·新京号",
    "sourceUrl": "https://www.bjnews.com.cn/detail/1776259162019623.html",
    "sourceTitle": "少年心中有山河：东城学子这样守护国家安全",
    "summary": "在第十一个全民国家安全教育日，东教印象以专题形式介绍东城校园实践，其中收录一六六中学主题宣讲。",
    "paragraphs": [
      "4月15日，东教印象发布东城区全民国家安全教育日专题。一六六中学的活动以“主题宣讲 青年当守家国安”为题收录其中。2026年为第十一个全民国家安全教育日。"
    ],
    "image": {
      "src": "/images/reports/security-20260415.webp",
      "alt": "学校学生面向操场主席台参加主题宣讲，屏幕写有筑牢安全防线守护家国未来",
      "caption": "一六六中学国家安全教育日主题宣讲，2026年4月报道配图。",
      "credit": "北京市第166中学微信公众号／东教印象转载",
      "originalUrl": "https://mposs.bjnews.com.cn/2026/04/15/3517762588656660005_d153a2608d5519669f1c17be6b1bfbb9.jpg"
    }
  },
  {
    "id": 8,
    "title": "百年老校专题：跨越三个世纪的一六六中学",
    "date": "2023-05-20",
    "category": "学校历史",
    "source": "东教印象·新京号",
    "sourceUrl": "https://m.bjnews.com.cn/detail/168450907614302.html",
    "sourceTitle": "〖百年老校〗跨越三个世纪的北京市第一六六中学",
    "summary": "东教印象“百年老校”专题从校训、博雅教育和科技、人文、健康、艺术等角度介绍学校。",
    "paragraphs": [
      "2023年5月20日，东教印象“百年老校”专题刊出北京市第一六六中学介绍。文章以“敬业乐群”的校园精神为线索，介绍学校的博雅教育及科技、人文、健康、艺术等办学特色。",
      "学校创办于1864年。2026年“1+3”培养实验学校简介还提及贝满女中、北京市第十二女子中学等历史名称，可与这篇校园文化报道对照阅读。"
    ],
    "image": {
      "src": "/images/reports/school-history-20230520.webp",
      "alt": "树荫下的学校旧校门黑白资料照片",
      "caption": "2023年“百年老校”专题中的旧校门资料图。原文未注明照片拍摄年份，不作为当前校门实景。",
      "credit": "东教印象（百年老校专题资料图）",
      "originalUrl": "https://mposs.bjnews.com.cn/2023/05/19/3516845087514870013_273c36eaeb4d3b5136bb37279d7ba29b.jpg"
    },
    "relatedSources": [
      {
        "title": "2026年“1+3”培养实验学校简介",
        "url": "https://m.bjnews.com.cn/detail/1784510162019858.html"
      }
    ]
  },
  {
    "id": 9,
    "title": "“美境行动”全国特等奖：学生设计碳中和主题花园",
    "date": "2025-04-18",
    "category": "科学教育",
    "source": "东教印象·学校公众号转载",
    "sourceUrl": "https://m.bjnews.com.cn/detail/174498089119770.html",
    "sourceTitle": "全国特等奖！一六六中学团队在“美境行动”中获得殊荣",
    "summary": "学校团队以《碳中和主题花园设计》获2024“美境行动”全国特等奖，方案涉及水资源利用与碳循环。",
    "paragraphs": [
      "东教印象转载学校微信公众号的报道：一六六中学五名学生完成的《碳中和主题花园设计》，获2024“美境行动”全国特等奖。相关报道发表于2025年4月。",
      "设计将雨水收集、处理后废水利用、藻类花园和碳循环展示融入花园方案。原文配图展示的是设计模型，不能据此认定校园已建成同样的实体花园。"
    ],
    "image": {
      "src": "/images/reports/garden-design-20250418.jpg",
      "alt": "学生碳中和主题花园设计的模型照片",
      "caption": "《碳中和主题花园设计》模型，非已建成花园实景。",
      "credit": "东教印象转载学校公众号（原文配图）",
      "originalUrl": "https://mposs.bjnews.com.cn/2025/04/18/3517449801408510009_1ba01fc0979729d1955827c0d2fcb8eb.jpg"
    }
  },
  {
    "id": 10,
    "title": "东城大中小学思政一体化实践活动走进北大",
    "date": "2026-05-06",
    "category": "思政教育",
    "source": "新京报·记者报道",
    "sourceUrl": "https://www.bjnews.com.cn/detail/1778064232169516.html",
    "sourceTitle": "北京东城区大中小学思政一体化实践活动走进北大",
    "summary": "一六六中学师生参加东城区与北京大学联合开展的思政实践，在北大校园进行主题学习。",
    "paragraphs": [
      "新京报报道，五四青年节前，东城区教育两委与北京大学团委联合开展大中小学思政一体化实践活动，一六六中学师生参与其中。",
      "活动将北大校园寻访与主题班会结合。报道记录了中学教师、北大学生共同组织的学习环节，主题涉及校史、青年责任与理想信念。"
    ]
  },
  {
    "id": 11,
    "title": "2026年具备普通高中招生资格学校名单公布",
    "date": "2026-05-16",
    "category": "信息公示",
    "source": "北京市教育委员会",
    "sourceUrl": "https://jw.beijing.gov.cn/tzgg/202605/t20260516_4653897.html",
    "sourceTitle": "北京市教育委员会关于公布2026年具有招生资格的高级中等学校名单的通知",
    "summary": "北京市教委公布2026年具有招生资格的高级中等学校名单，北京市第一六六中学列于东城区普通高中名单。",
    "paragraphs": [
      "北京市教委公布2026年具有招生资格的高级中等学校名单。北京市第一六六中学列于东城区普通高中学校名单中。",
      "该名单确认相应年度的招生资格，不等于学校具体招生计划、报名通知或录取结果。查询实际报考安排，应继续查阅北京教育考试院和学校当年公告。"
    ],
    "relatedSources": [
      {
        "title": "首都之窗：2026年具有招生资格学校名单",
        "url": "https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202605/t20260519_4656965.html"
      }
    ]
  },
  {
    "id": 12,
    "title": "北京市第一六六中学2026年部门预算公开资料",
    "date": "2026-02-12",
    "category": "信息公示",
    "source": "东城区人民政府",
    "sourceUrl": "https://www.bjdch.gov.cn/ztzl/bmyjsgkzl/bmysgkzl/2026nys/qzf2026ys/202602/P020260212531396248504.pdf",
    "sourceTitle": "北京市第一六六中学2026年部门预算（PDF）",
    "summary": "东城区政府2026年预算公开目录收录学校部门预算，包含单位职责、机构情况和预算表等内容。",
    "paragraphs": [
      "东城区人民政府2026年预算公开目录，提供北京市第一六六中学部门预算文件。文件说明，学校为东城区教育委员会所属全额拨款事业单位，无下属单位及分支机构。",
      "完整预算说明及表格请查阅政府网站原始PDF。此处是公开文件索引，文件中的财政预算不等于向学生、家长收取的费用。"
    ],
    "relatedSources": [
      {
        "title": "东城区教委2026年预算公开目录",
        "url": "https://www.bjdch.gov.cn/ztzl/bmyjsgkzl/bmysgkzl/2026nys/qzf2026ys/202602/t20260212_4511006.html"
      }
    ]
  },
  {
    "id": 13,
    "title": "2026年“1+3”培养实验：一六六中学博雅“人文+X”课程",
    "date": "2026-07-20",
    "category": "信息公示",
    "source": "东教印象·新京号",
    "sourceUrl": "https://m.bjnews.com.cn/detail/1784510162019858.html",
    "sourceTitle": "东城区2026年“1+3”培养实验区级实验学校工作安排及学校简介",
    "summary": "东城区2026年“1+3”培养实验学校简介介绍一六六中学的贯通培养、博雅“人文+X”课程及学生成长支持。",
    "paragraphs": [
      "东教印象发布的2026年“1+3”培养实验资料，介绍了一六六中学初高中贯通培养的课程思路。其中，博雅“人文+X”课程按基础、拓展、精修逐步展开。",
      "学校简介还列出双师双导、个性化成长档案等支持方式。本条保留2026年度资料供回顾，不作为当前可报名的招生入口。"
    ]
  },
  {
    "id": 14,
    "title": "集团动态｜王府井书店大篷车走进附属校尉胡同小学",
    "date": "2026-04-22",
    "category": "集团动态",
    "source": "首都之窗·北京日报",
    "sourceUrl": "https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202604/t20260422_4603068.html",
    "sourceTitle": "王府井书店大篷车“开”进东城小学校园",
    "summary": "附属校尉胡同小学举行校园阅读日，书店大篷车带来300余种图书，家长和教联体单位参与阅读活动。",
    "paragraphs": [
      "北京日报报道，在世界读书日前，北京市第一六六中学附属校尉胡同小学举办校园阅读日。活动包含分年级主题阅读、亲子分享和阅读沙龙。",
      "王府井书店大篷车带来300余种图书，街道、社区、高校等单位代表参与。本次活动主体为附属小学，并非一六六中学初中或高中校区。"
    ],
    "image": {
      "src": "/images/reports/primary-reading-20260422.webp",
      "alt": "附属校尉胡同小学校园阅读日，孩子和家长在书摊旁挑选图书",
      "caption": "附属校尉胡同小学阅读日书市，2026年4月报道配图。照片为附属小学活动。",
      "credit": "首都之窗／北京日报（原文配图）",
      "originalUrl": "https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202604/W020260422584904527957.jpg"
    }
  },
  {
    "id": 15,
    "title": "灯市口周边通学环境建设：儿童友好示范街覆盖学校片区",
    "date": "2025-04-21",
    "category": "周边环境",
    "source": "首都之窗·东城区政府",
    "sourceUrl": "https://www.beijing.gov.cn/ywdt/gqrd/202504/t20250422_4071283.html",
    "sourceTitle": "东城打造“安心通学路”",
    "summary": "东城区政府报道介绍灯市口儿童友好示范街建设，周边学校包括北京市第一六六中学。",
    "paragraphs": [
      "东城区政府关于“安心通学路”的报道，介绍了灯市口儿童友好示范街建设。北京市第一六六中学、景山学校、第二十五中学等位于这一片区。",
      "报道涉及多所学校及区域道路改造。本条仅用于了解学校周边公共环境，具体路段设施和交通变化应按原文对应学校、街区分别理解。"
    ]
  },
  {
    "id": 16,
    "title": "一六六中学学生参加东城区长征主题读书成果展演",
    "date": "2026-10-24",
    "eventDate": "2026-10-23",
    "category": "阅读活动",
    "source": "东教印象·新京号",
    "sourceUrl": "https://www.bjnews.com.cn/detail/1792805614019785.html",
    "sourceTitle": "银发与青春同台 东城读书展演致敬长征",
    "summary": "在东城区纪念长征胜利90周年主题读书成果展演中，一六六中学学生分享《半条皮带》《半部电台》的阅读体会。",
    "paragraphs": [
      "10月23日，东城区主题读书成果展演在北京市第五十五中学举行，以经典阅读纪念长征胜利90周年。一六六中学两名学生参加读书分享。",
      "两位学生分别围绕《半条皮带》《半部电台》谈阅读体会。东教印象报道还回顾了他们5月23日代表北京参加全国关工委主题读书活动的经历。"
    ],
    "image": {
      "src": "/images/reports/reading-stage-20261023.webp",
      "alt": "主题读书成果展演舞台上，两名学生在电台图案背景前进行读书分享",
      "caption": "东城区主题读书成果展演中的读书分享环节，2026年10月23日。活动场地为北京市第五十五中学。",
      "credit": "东教印象（主题读书成果展演原文配图）",
      "originalUrl": "https://mposs.bjnews.com.cn/2026/10/24/3517928054017490021_cf5a85ae73a34973613383567db1653f.jpg"
    }
  },
  {
    "id": 17,
    "title": "学生题写校牌：2022年春季的一次校园更新",
    "date": "2022-02-21",
    "category": "校园文化",
    "source": "北京日报客户端",
    "sourceUrl": "https://news.bjd.com.cn/2022/02/21/10045352.shtml",
    "sourceTitle": "新学期，这所百年老校，第一次换上学生提写的校牌",
    "summary": "2022年春季学期，学校首次换上由在校学生书写的校牌，将书法学习与校园公共空间联系起来。",
    "paragraphs": [
      "北京日报客户端2022年2月报道，一六六中学在春季学期开学时，换上了由在校学生书写的校牌。这是报道所述学校首次使用学生书写的校牌。",
      "活动让学生参与校名书写和校牌设计制作，以自己的作品进入校园公共空间。它也成为学校普及艺术教育的一种具体实践。"
    ]
  },
  {
    "id": 18,
    "title": "金帆管乐团在北京音乐厅首演《缤纷幻想曲》",
    "date": "2023-11-22",
    "eventDate": "2023-11-22",
    "category": "校园文化",
    "source": "北京日报客户端",
    "sourceUrl": "https://xinwen.bjd.com.cn/content/s655db699e4b0ec2b81cf9c7e.html",
    "sourceTitle": "为校庆献礼，北京一六六中学奏响《缤纷幻想曲》",
    "summary": "学校金帆管乐团2023年专场音乐会在北京音乐厅举行，首演为迎接建校160周年创作的《缤纷幻想曲》。",
    "paragraphs": [
      "2023年11月22日，一六六中学金帆管乐团在北京音乐厅举行“缤纷幻想”专场音乐会，首演交响管乐作品《缤纷幻想曲》，为即将到来的建校160周年献礼。",
      "演出还包括动画电影主题旋律和中外管乐作品。附属校尉胡同小学管乐团参与演出，带来《希望之歌》《打起手鼓唱起歌》等曲目。"
    ],
    "image": {
      "src": "/images/reports/concert-20231122.png",
      "alt": "北京音乐厅舞台上的一六六中学管乐团，横幅标明2023年专场音乐会",
      "caption": "“缤纷幻想”金帆管乐团2023年专场音乐会现场。",
      "credit": "北京日报客户端（原文配图）",
      "originalUrl": "https://static.bjd.com.cn/dams-res/editing/image/202312/21/6583a97e3f6248ae97521549.png"
    }
  },
  {
    "id": 19,
    "title": "世界读书日：英文好书小报与博雅书市走进校园",
    "date": "2024-04-23",
    "category": "阅读活动",
    "source": "首都文明网·北京日报客户端",
    "sourceUrl": "https://bj.wenming.cn/dc/wcnr/202404/t20240423_6767517.shtml",
    "sourceTitle": "世界读书日北京一六六中学这样营造读书氛围",
    "summary": "2024年世界读书日前后，学校通过英文原版好书推荐小报和博雅书市等活动营造阅读氛围。",
    "paragraphs": [
      "首都文明网转载北京日报客户端报道，一六六中学举办首届英文原版好书推荐小报大赛，面向四个非毕业年级开展。学生将书籍理解用英文和图片组合呈现。",
      "同期举办的第二届博雅书市邀请王府井书店、商务印书馆涵芬楼书店进校园。报道还介绍了各学科围绕主题开展阅读任务的做法。"
    ],
    "image": {
      "src": "/images/reports/reading-fair-20240423.webp",
      "alt": "身着一六六中学校服的学生在校园书市的书摊旁翻阅图书",
      "caption": "2024年校园书市现场，原图刊于世界读书日活动报道。",
      "credit": "首都文明网／北京日报客户端（原文配图）",
      "originalUrl": "http://images.wenming.cn/web_bj/dc/wcnr/202404/W020240423565620538040.jpg"
    }
  },
  {
    "id": 20,
    "title": "建校160周年：校友返校与学生访谈记录",
    "date": "2024-10-22",
    "eventDate": "2024-10-19",
    "category": "学校历史",
    "source": "东教印象·学校公众号转载",
    "sourceUrl": "https://m.bjnews.com.cn/detail/172959693119416.html",
    "sourceTitle": "北京市第一六六中学，160岁生日快乐！",
    "summary": "2024年10月19日，学校举办建校160周年校友返校活动，学生以校史讲解和校友访谈参与其中。",
    "paragraphs": [
      "东教印象转载学校公众号报道，2024年10月19日，一六六中学举办建校160周年校友返校活动。校友、离退休教职工和在校师生代表在校园相聚。",
      "学校当年开展“寻找身边的一六六中人”活动，组织学生分组采访160位校友，完成160篇访谈录。返校活动还包括校史馆讲解、校友交流和校园纪念活动。"
    ],
    "image": {
      "src": "/images/reports/anniversary-campus-20241019.webp",
      "alt": "校园教学楼与坡道，建筑外悬挂建校160周年1864至2024的红色布置",
      "caption": "建校160周年校友返校活动期间的校园，2024年10月。",
      "credit": "北京市第166中学微信公众号／东教印象转载",
      "originalUrl": "https://mposs.bjnews.com.cn/2024/10/22/3517295966105210004_2ed047abcbfa5cabfd4be7cde70030dd.jpg"
    },
    "gallery": [
      {
        "src": "/images/reports/anniversary-motto-20241019.webp",
        "alt": "校园中的校训石与校庆旗帜，石上可见红色校训字样",
        "caption": "校训石与校庆旗帜，2024年校庆报道配图。",
        "credit": "北京市第166中学微信公众号／东教印象转载",
        "originalUrl": "https://mposs.bjnews.com.cn/2024/10/22/3517295966105210004_a93bb87e9cacf77b90069c2ffc25b3d7.jpg"
      },
      {
        "src": "/images/reports/anniversary-stairway-20241019.webp",
        "alt": "教学楼外的楼梯与建校160周年布置",
        "caption": "教学楼外的校庆布置，2024年。",
        "credit": "北京市第166中学微信公众号／东教印象转载",
        "originalUrl": "https://mposs.bjnews.com.cn/2024/10/22/3517295966105210004_35c49b452a86bd2a2f59ea3ae518ae0e.jpg"
      },
      {
        "src": "/images/reports/anniversary-return-20241019.webp",
        "alt": "校友返校活动现场，前景是归来仍是少年的蓝白色标牌",
        "caption": "校友返校日的“归来仍是少年”标牌，2024年10月。",
        "credit": "北京市第166中学微信公众号／东教印象转载",
        "originalUrl": "https://mposs.bjnews.com.cn/2024/10/22/3517295966105210004_42f82410a32dbad39b60a366c884a363.jpg"
      },
      {
        "src": "/images/reports/anniversary-courtyard-20241019.webp",
        "alt": "校园围栏、教学楼与红色校庆条幅",
        "caption": "校庆期间的校园一角，2024年。",
        "credit": "北京市第166中学微信公众号／东教印象转载",
        "originalUrl": "https://mposs.bjnews.com.cn/2024/10/22/3517295966105210004_d364542deffa2e83193aa755f15b5feb.jpg"
      },
      {
        "src": "/images/reports/anniversary-flowers-20241019.webp",
        "alt": "校园建筑前盛开的红色月季花",
        "caption": "2024年校庆报道中的校园花木。",
        "credit": "北京市第166中学微信公众号／东教印象转载",
        "originalUrl": "https://mposs.bjnews.com.cn/2024/10/22/3517295966105210004_2f427ffa75679f8ee3b3673f32fdae69.jpg"
      }
    ]
  },
  {
    "id": 21,
    "title": "“青春之歌，唱给你听”合唱专场音乐会举行",
    "date": "2024-05-22",
    "eventDate": "2024-05-21",
    "category": "校园文化",
    "source": "北京日报·北京号",
    "sourceUrl": "https://peking.bjd.com.cn/content/s664df4c4e4b064178156ad1c.html",
    "sourceTitle": "“青春之歌，唱给你听”！一六六中学子为祖国和母校唱响“青春之歌”",
    "summary": "学校星光高中男声合唱团携手一贯制及高中女子合唱团，在中山公园音乐堂举办合唱专场。",
    "paragraphs": [
      "2024年5月21日，一六六中学在中山公园音乐堂举办“青春之歌，唱给你听”合唱专场音乐会。这是学校160周年校庆系列演出的首场。",
      "星光高中男声合唱团演唱《莫尼山》《城南送别》等作品，一贯制及高中女子合唱团参与演出。报道介绍，参演学生均为非特长生，部分往届毕业生也回到团队同台演唱。"
    ],
    "image": {
      "src": "/images/reports/choir-stage-20240521.webp",
      "alt": "中山公园音乐堂舞台上的学校男声合唱团，横幅写有青春之歌唱给你听及学校名称",
      "caption": "2024年5月21日，“青春之歌，唱给你听”合唱专场音乐会现场。",
      "credit": "现代教育报／北京号（原文配图）",
      "originalUrl": "https://static.bjd.com.cn/dams-res/editing/image/202405/22/664df4cbefa22536a5e5b0b6.jpeg"
    }
  },
  {
    "id": 22,
    "title": "原创话剧《百合花颂》将校史搬上舞台",
    "date": "2023-11-09",
    "category": "校园文化",
    "source": "北京青年报客户端",
    "sourceUrl": "https://app.bjtitle.com/8816/newshow.php?did=867950049830928&mood=&newsid=6436696&typeid=68&uid=0",
    "sourceTitle": "献礼160周年校庆 北京一六六中学金帆话剧团首部原创话剧《百合花颂》上演",
    "summary": "2023年11月8日至9日，学校金帆话剧团在东城区少年宫上演首部原创话剧《百合花颂》。",
    "paragraphs": [
      "北京青年报报道，一六六中学金帆话剧团于2023年11月8日至9日，在东城区少年宫上演原创话剧《百合花颂》。剧目为迎接学校160周年校庆创作，也是剧团成立18周年的纪念作品。",
      "作品以学校校花百合花命名，从校史故事中取材，分为“觉醒”“洪流”“领潮”“传承”四幕。学生通过剧本学习、角色理解和舞台排练，参与对学校历史的再现。"
    ],
    "image": {
      "src": "/images/reports/lily-drama-20231109.webp",
      "alt": "百合花颂舞台剧中，一名身着长衫的演员与两名身着蓝色上衣的演员对话",
      "caption": "《百合花颂》2023年11月演出剧照。",
      "credit": "北京青年报／李娜 摄",
      "originalUrl": "https://p0.itc.cn/q_70/images03/20231109/932c49caa7254458bbc291c8b204dd7f.jpeg",
      "sourceUrl": "https://www.sohu.com/a/735056971_255783"
    },
    "gallery": [
      {
        "src": "/images/reports/lily-drama-scene-20231109.webp",
        "alt": "百合花颂演出中，两名演员在倒地的自行车旁表演",
        "caption": "《百合花颂》2023年演出中的另一场景。",
        "credit": "北京青年报／李娜 摄",
        "originalUrl": "https://p5.itc.cn/q_70/images03/20231109/a5b2a7b527624ff5a0dd86801d3f1f5e.jpeg",
        "sourceUrl": "https://www.sohu.com/a/735056971_255783"
      }
    ],
    "relatedSources": [
      {
        "title": "北青网：2023年《百合花颂》演出报道及剧照（公开转载）",
        "url": "https://www.sohu.com/a/735056971_255783"
      }
    ]
  },
  {
    "id": 23,
    "title": "“百年老校中的她”：女性校友事迹专题展",
    "date": "2024-03-08",
    "category": "学校历史",
    "source": "北京青年报客户端",
    "sourceUrl": "https://app.bjtitle.com/8816/newshow.php?did=867950049830928&mood=&newsid=6491698&typeid=68&uid=0",
    "sourceTitle": "致敬校史中的她！北京一六六中学举办女性校友事迹专题展",
    "summary": "学校在2024年国际劳动妇女节前夕制作专题展板，组织学生梳理校史中的女性校友事迹。",
    "paragraphs": [
      "2024年国际劳动妇女节前夕，一六六中学推出“百年老校中的她”专题展板，将不同领域女性校友的经历和贡献带入校园。",
      "这项活动结合建校160周年的校史学习，由学生梳理相关资料、制作展示内容。本站保留活动事实摘要，不列个人介绍和校友名录。"
    ]
  },
  {
    "id": 24,
    "title": "首届数学节：从魔方、数独到数学史",
    "date": "2024-03-14",
    "eventDate": "2024-03-14",
    "category": "科学教育",
    "source": "北京青年报客户端",
    "sourceUrl": "https://app.bjtitle.com/8816/newshow.php?did=867950049830928&mood=&newsid=6494488&typeid=68&uid=0",
    "sourceTitle": "数学有意思！北京市第一六六中学举办首届数学节",
    "summary": "首届数学节以数学庙会、技能大赛和文化展板等形式，呈现学科知识与游戏、实践和历史的联系。",
    "paragraphs": [
      "2024年3月14日国际数学日，一六六中学首届数学节开幕。活动包括魔方竞速、数独、数字谜题、折纸、鲁班锁等项目，组成竞技、体验和灯谜等区域。",
      "数学技能活动按不同年级设置应用、画图、阅读、推理等主题。文化展示还介绍《九章算术》《几何原本》和数学史，展出学生的数学史小论文及数学节徽标设计。"
    ],
    "image": {
      "src": "/images/reports/math-festival-20240314.webp",
      "alt": "一六六中学学生围在活动桌旁，手持彩色拼搭材料参加数学节活动",
      "caption": "首届数学节活动照片，刊于《新东城报》2024年3月19日第2版。",
      "credit": "北京市第一六六中学供图／新东城报",
      "originalUrl": "https://www.bjdch.gov.cn/ywdt/xdcb/202403/P020240322469872308792.pdf",
      "sourceUrl": "https://www.bjdch.gov.cn/ywdt/xdcb/202403/P020240322469872308792.pdf"
    },
    "relatedSources": [
      {
        "title": "新东城报2024年3月19日第2版：感受数学魅力（学校供图）",
        "url": "https://www.bjdch.gov.cn/ywdt/xdcb/202403/P020240322469872308792.pdf"
      },
      {
        "title": "北青网：首届数学节活动报道（公开转载）",
        "url": "https://www.sohu.com/a/764120259_255783"
      }
    ]
  },
  {
    "id": 25,
    "title": "学生写校牌活动延续，2024年秋季第10次换新",
    "date": "2024-09-06",
    "category": "校园文化",
    "source": "北京青年报客户端",
    "sourceUrl": "https://app.bjtitle.com/8816/newshow.php?did=867950049830928&mood=&newsid=6575171&typeid=68&uid=0",
    "sourceTitle": "北京市第一六六中学校牌第10次换新",
    "summary": "北京青年报2024年9月报道，学校学生题写校牌活动已延续两年多，新一版校牌采用魏碑体书写。",
    "paragraphs": [
      "据北京青年报2024年9月报道，一六六中学自2022年春季学期起使用学生书写的校牌，两年多来已有10名学生参与。新学期校牌再次换新，由一位初中学生完成书写。",
      "该次作品采用魏碑体。报道记录了学生练习、调整和制作校牌的过程，展现书法学习进入日常校园生活的方式。"
    ]
  }
];

export const sortedNews = [...newsList].sort((a, b) => b.date.localeCompare(a.date));
export const photoNews = newsList.filter((item) => item.image);
export const reportPhotos = newsList.flatMap((article) =>
  [...(article.image ? [article.image] : []), ...(article.gallery ?? [])].map((photo) => ({ article, photo }))
);

export function getNews(id: number) {
  return newsList.find((item) => item.id === id);
}

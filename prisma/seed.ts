import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.cihuibiao.deleteMany({});
  await prisma.cihuibiao.createMany({
    data: [
      {
        "ch": "一些",
        "en": "some / a few/little",
        "lvl": 0
      },
      {
        "ch": "一次",
        "en": "once",
        "lvl": 0
      },
      {
        "ch": "第一",
        "en": "first / primary / number one",
        "lvl": 1
      },
      {
        "ch": "二等",
        "en": "second class",
        "lvl": 0
      },
      {
        "ch": "独一无二",
        "en": "unique",
        "lvl": 0
      },
      {
        "ch": "三心二意",
        "en": "undecisive",
        "lvl": 0
      },
      {
        "ch": "三角形",
        "en": "triangle",
        "lvl": 0
      },
      {
        "ch": "三头六臂",
        "en": "superhuman",
        "lvl": 0
      },
      {
        "ch": "四通八达",
        "en": "in all directions",
        "lvl": 0
      },
      {
        "ch": "四时",
        "en": "four seasons",
        "lvl": 0
      },
      {
        "ch": "四季",
        "en": "four seasons",
        "lvl": 0
      },
      {
        "ch": "四方",
        "en": "square",
        "lvl": 0
      },
      {
        "ch": "五颜六色",
        "en": "multi-colored",
        "lvl": 0
      },
      {
        "ch": "七七八八",
        "en": "miscellaneous",
        "lvl": 0
      },
      {
        "ch": "七上八下",
        "en": "be agitated",
        "lvl": 0
      },
      {
        "ch": "八成",
        "en": "80%",
        "lvl": 0
      },
      {
        "ch": "八折",
        "en": "20% OFF",
        "lvl": 0
      },
      {
        "ch": "胡说八道",
        "en": "speak nonsense / absurdity",
        "lvl": 0
      },
      {
        "ch": "乱七八糟",
        "en": "in great disorder",
        "lvl": 0
      },
      {
        "ch": "十字路口",
        "en": "intersection",
        "lvl": 0
      },
      {
        "ch": "十全十美",
        "en": "be perfect in every way",
        "lvl": 0
      },
      {
        "ch": "红十字会",
        "en": "Red Cross",
        "lvl": 0
      },
      {
        "ch": "十足",
        "en": "100 percent",
        "lvl": 0
      },
      {
        "ch": "十分",
        "en": "fully / completely",
        "lvl": 2
      },
      {
        "ch": "零下",
        "en": "below zero",
        "lvl": 0
      },
      {
        "ch": "零碎",
        "en": "piecemeal / odds & ends",
        "lvl": 0
      },
      {
        "ch": "零钱",
        "en": "small change / pocket money",
        "lvl": 2
      },
      {
        "ch": "零用钱",
        "en": "pocket money / allowance",
        "lvl": 0
      },
      {
        "ch": "零件",
        "en": "component / part",
        "lvl": 0
      },
      {
        "ch": "百分点",
        "en": "one percentage point",
        "lvl": 0
      },
      {
        "ch": "百分之百",
        "en": "absolutely / out-and-out",
        "lvl": 2
      },
      {
        "ch": "百分之",
        "en": "percent",
        "lvl": 2
      },
      {
        "ch": "百货",
        "en": "general merchandise / department store",
        "lvl": 0
      },
      {
        "ch": "百万",
        "en": "million",
        "lvl": 0
      },
      {
        "ch": "百年",
        "en": "century",
        "lvl": 0
      },
      {
        "ch": "千年",
        "en": "millennium",
        "lvl": 0
      },
      {
        "ch": "万年",
        "en": "ten thousand years / all ages",
        "lvl": 0
      },
      {
        "ch": "哥儿们",
        "en": "buddies",
        "lvl": 0
      },
      {
        "ch": "咱们",
        "en": "we",
        "lvl": 2
      },
      {
        "ch": "不好意思",
        "en": "feel embarrassed",
        "lvl": 0
      },
      {
        "ch": "不多不少",
        "en": "just right",
        "lvl": 0
      },
      {
        "ch": "不错",
        "en": "correct / pretty good",
        "lvl": 0
      },
      {
        "ch": "不久",
        "en": "soon / shortly",
        "lvl": 0
      },
      {
        "ch": "是的",
        "en": "yes / right",
        "lvl": 0
      },
      {
        "ch": "还是",
        "en": "or / nevertheless",
        "lvl": 1
      },
      {
        "ch": "辣的",
        "en": "spicy",
        "lvl": 0
      },
      {
        "ch": "有的",
        "en": "some",
        "lvl": 0
      },
      {
        "ch": "朋友",
        "en": "friend / fellow",
        "lvl": 1
      },
      {
        "ch": "友谊",
        "en": "friendship",
        "lvl": 2
      },
      {
        "ch": "友情",
        "en": "friendship",
        "lvl": 0
      },
      {
        "ch": "友好",
        "en": "friendly",
        "lvl": 2
      },
      {
        "ch": "走亲访友",
        "en": "visit relatives & friends",
        "lvl": 0
      },
      {
        "ch": "叫做",
        "en": "be called / be known as",
        "lvl": 0
      },
      {
        "ch": "叫座",
        "en": "draw a large audience / appeal to the audience",
        "lvl": 0
      },
      {
        "ch": "叫好",
        "en": "applaud / cheer",
        "lvl": 0
      },
      {
        "ch": "叫喊",
        "en": "yell / shout / exclamation",
        "lvl": 0
      },
      {
        "ch": "为什么",
        "en": "for what reason / why",
        "lvl": 1
      },
      {
        "ch": "什么",
        "en": "what",
        "lvl": 1
      },
      {
        "ch": "这么",
        "en": "like this / such",
        "lvl": 0
      },
      {
        "ch": "那么",
        "en": "like that / in that way",
        "lvl": 0
      },
      {
        "ch": "多么",
        "en": "to what extent / however (difficult/much/etc..)",
        "lvl": 1
      },
      {
        "ch": "要么",
        "en": "either or",
        "lvl": 0
      },
      {
        "ch": "干吗",
        "en": "what are u doing",
        "lvl": 0
      },
      {
        "ch": "干净",
        "en": "neat & tidy",
        "lvl": 1
      },
      {
        "ch": "名字",
        "en": "name",
        "lvl": 1
      },
      {
        "ch": "名人",
        "en": "celebrity",
        "lvl": 0
      },
      {
        "ch": "出名",
        "en": "famous / well-known",
        "lvl": 0
      },
      {
        "ch": "名气",
        "en": "fame / reputation",
        "lvl": 0
      },
      {
        "ch": "名片",
        "en": "business card",
        "lvl": 0
      },
      {
        "ch": "名牌",
        "en": "brand name",
        "lvl": 0
      },
      {
        "ch": "名胜",
        "en": "famous scenic spot",
        "lvl": 0
      },
      {
        "ch": "字典",
        "en": "dictionary",
        "lvl": 1
      },
      {
        "ch": "字幕",
        "en": "subtitle / caption",
        "lvl": 0
      },
      {
        "ch": "字母",
        "en": "alphabet",
        "lvl": 0
      },
      {
        "ch": "姓氏",
        "en": "surname",
        "lvl": 0
      },
      {
        "ch": "老百姓",
        "en": "ordinary people / civilians",
        "lvl": 0
      },
      {
        "ch": "百姓",
        "en": "common people",
        "lvl": 0
      },
      {
        "ch": "很好",
        "en": "well / very good",
        "lvl": 0
      },
      {
        "ch": "很坏",
        "en": "very bad",
        "lvl": 0
      },
      {
        "ch": "很多",
        "en": "a lot of",
        "lvl": 0
      },
      {
        "ch": "很近",
        "en": "very near",
        "lvl": 0
      },
      {
        "ch": "好久",
        "en": "long time",
        "lvl": 0
      },
      {
        "ch": "好久不见",
        "en": "long time no see",
        "lvl": 0
      },
      {
        "ch": "好吃",
        "en": "delicious / tasty",
        "lvl": 1
      },
      {
        "ch": "好办",
        "en": "easy to handle",
        "lvl": 0
      },
      {
        "ch": "好处",
        "en": "benefit / advantage / profit",
        "lvl": 2
      },
      {
        "ch": "好看",
        "en": "good-looking / nice",
        "lvl": 0
      },
      {
        "ch": "再说",
        "en": "besides / whats more",
        "lvl": 0
      },
      {
        "ch": "再说一遍",
        "en": "say that again",
        "lvl": 0
      },
      {
        "ch": "再三",
        "en": "again & again",
        "lvl": 0
      },
      {
        "ch": "再次",
        "en": "once more",
        "lvl": 0
      },
      {
        "ch": "再见",
        "en": "goodbye / see u again",
        "lvl": 1
      },
      {
        "ch": "见面",
        "en": "meet / see sb",
        "lvl": 1
      },
      {
        "ch": "见识",
        "en": "experience / knowledge",
        "lvl": 0
      },
      {
        "ch": "见笑",
        "en": "laugh at / to mock",
        "lvl": 0
      },
      {
        "ch": "家乡",
        "en": "hometown / native land",
        "lvl": 0
      },
      {
        "ch": "家具",
        "en": "furniture",
        "lvl": 2
      },
      {
        "ch": "家庭",
        "en": "family / household",
        "lvl": 0
      },
      {
        "ch": "家人",
        "en": "family / household",
        "lvl": 0
      },
      {
        "ch": "人家",
        "en": "other people / folk",
        "lvl": 0
      },
      {
        "ch": "大家",
        "en": "everyone",
        "lvl": 1
      },
      {
        "ch": "家常菜",
        "en": "home cooking",
        "lvl": 0
      },
      {
        "ch": "家务事",
        "en": "chores / housework",
        "lvl": 0
      },
      {
        "ch": "人口",
        "en": "population",
        "lvl": 0
      },
      {
        "ch": "人们",
        "en": "people / folk",
        "lvl": 0
      },
      {
        "ch": "人山人海",
        "en": "sea of people",
        "lvl": 0
      },
      {
        "ch": "口味",
        "en": "taste / flavor",
        "lvl": 0
      },
      {
        "ch": "口音",
        "en": "accent",
        "lvl": 0
      },
      {
        "ch": "口气",
        "en": "tone of voice",
        "lvl": 0
      },
      {
        "ch": "个个",
        "en": "all / everyone",
        "lvl": 0
      },
      {
        "ch": "各个",
        "en": "separately / one by one / various",
        "lvl": 0
      },
      {
        "ch": "个子",
        "en": "height / stature / size",
        "lvl": 1
      },
      {
        "ch": "个别",
        "en": "individual",
        "lvl": 0
      },
      {
        "ch": "个人",
        "en": "personal / individual / oneself",
        "lvl": 0
      },
      {
        "ch": "两次",
        "en": "twice",
        "lvl": 0
      },
      {
        "ch": "多少",
        "en": "how many/much",
        "lvl": 1
      },
      {
        "ch": "多半",
        "en": "probably / likelihood",
        "lvl": 0
      },
      {
        "ch": "多谢",
        "en": "thanks a lot",
        "lvl": 0
      },
      {
        "ch": "多云",
        "en": "cloudy",
        "lvl": 0
      },
      {
        "ch": "多数",
        "en": "majority / most",
        "lvl": 0
      },
      {
        "ch": "众多",
        "en": "numerous / multiple",
        "lvl": 0
      },
      {
        "ch": "少数",
        "en": "few / minority",
        "lvl": 0
      },
      {
        "ch": "不少",
        "en": "a lot",
        "lvl": 0
      },
      {
        "ch": "少年",
        "en": "juvenile / young",
        "lvl": 0
      },
      {
        "ch": "请问",
        "en": "excuse me",
        "lvl": 0
      },
      {
        "ch": "请教",
        "en": "consult / seek advice",
        "lvl": 0
      },
      {
        "ch": "希望",
        "en": "hope / wish",
        "lvl": 1
      },
      {
        "ch": "问答",
        "en": "Q & A",
        "lvl": 0
      },
      {
        "ch": "问题",
        "en": "question / problem / issue",
        "lvl": 1
      },
      {
        "ch": "没问题",
        "en": "no problem",
        "lvl": 0
      },
      {
        "ch": "问好",
        "en": "send one's regards",
        "lvl": 0
      },
      {
        "ch": "学问",
        "en": "learning / knowledge",
        "lvl": 0
      },
      {
        "ch": "题材",
        "en": "theme / topic",
        "lvl": 0
      },
      {
        "ch": "题目",
        "en": "topic / subject",
        "lvl": 0
      },
      {
        "ch": "话题",
        "en": "topic of conversation",
        "lvl": 0
      },
      {
        "ch": "和好",
        "en": "reconcile",
        "lvl": 0
      },
      {
        "ch": "和平",
        "en": "peace",
        "lvl": 0
      },
      {
        "ch": "和睦",
        "en": "harmonious / harmony / concord",
        "lvl": 0
      },
      {
        "ch": "和气",
        "en": "amiable / friendly / kind",
        "lvl": 0
      },
      {
        "ch": "有名",
        "en": "famous",
        "lvl": 1
      },
      {
        "ch": "有钱",
        "en": "rich",
        "lvl": 0
      },
      {
        "ch": "有害",
        "en": "harmful",
        "lvl": 0
      },
      {
        "ch": "有意思",
        "en": "interesting / enjoyable",
        "lvl": 0
      },
      {
        "ch": "没有",
        "en": "not have / doesn't exist",
        "lvl": 1
      },
      {
        "ch": "没关系",
        "en": "doesn't matter",
        "lvl": 1
      },
      {
        "ch": "没意思",
        "en": "boring",
        "lvl": 0
      },
      {
        "ch": "没完没了",
        "en": "endless",
        "lvl": 0
      },
      {
        "ch": "后妈",
        "en": "stepmother",
        "lvl": 0
      },
      {
        "ch": "后爸",
        "en": "stepfather",
        "lvl": 0
      },
      {
        "ch": "爸爸",
        "en": "father",
        "lvl": 1
      },
      {
        "ch": "妈妈",
        "en": "mother",
        "lvl": 1
      },
      {
        "ch": "弟弟",
        "en": "younger brother",
        "lvl": 1
      },
      {
        "ch": "妹妹",
        "en": "younger sister",
        "lvl": 1
      },
      {
        "ch": "哥哥",
        "en": "elder brother",
        "lvl": 1
      },
      {
        "ch": "姐姐",
        "en": "elder sister",
        "lvl": 1
      },
      {
        "ch": "弟妹",
        "en": "younger brother's wife",
        "lvl": 0
      },
      {
        "ch": "弟媳",
        "en": "younger brother's wife",
        "lvl": 0
      },
      {
        "ch": "嫂子",
        "en": "elder brother's wife",
        "lvl": 0
      },
      {
        "ch": "妹夫",
        "en": "bro-in-law / younger sister's husband",
        "lvl": 0
      },
      {
        "ch": "姐夫",
        "en": "bro-in-law / elder sister's husband",
        "lvl": 0
      },
      {
        "ch": "姨妈",
        "en": "maternal aunt",
        "lvl": 0
      },
      {
        "ch": "姑妈",
        "en": "paternal aunt",
        "lvl": 0
      },
      {
        "ch": "小姐",
        "en": "Miss / young lady",
        "lvl": 1
      },
      {
        "ch": "兄弟",
        "en": "brothers",
        "lvl": 0
      },
      {
        "ch": "姐妹",
        "en": "sisters",
        "lvl": 0
      },
      {
        "ch": "徒弟",
        "en": "disciple / apprentice",
        "lvl": 0
      },
      {
        "ch": "几乎",
        "en": "almost / practically",
        "lvl": 1
      },
      {
        "ch": "几分",
        "en": "somewhat / a bit",
        "lvl": 0
      },
      {
        "ch": "几时",
        "en": "what time / when",
        "lvl": 0
      },
      {
        "ch": "几次",
        "en": "how many times",
        "lvl": 0
      },
      {
        "ch": "几个",
        "en": "how many / some / a few",
        "lvl": 0
      },
      {
        "ch": "好几",
        "en": "several / quite a few",
        "lvl": 0
      },
      {
        "ch": "岁数",
        "en": "age",
        "lvl": 0
      },
      {
        "ch": "岁岁平安",
        "en": "always peaceful (New Year's greeting)",
        "lvl": 0
      },
      {
        "ch": "万岁",
        "en": "Your Majesty",
        "lvl": 0
      },
      {
        "ch": "年岁",
        "en": "age",
        "lvl": 0
      },
      {
        "ch": "在家",
        "en": "at home",
        "lvl": 0
      },
      {
        "ch": "在内",
        "en": "included",
        "lvl": 0
      },
      {
        "ch": "在外",
        "en": "excluded",
        "lvl": 0
      },
      {
        "ch": "实在",
        "en": "real(ly) / honest(ly) / actuality",
        "lvl": 2
      },
      {
        "ch": "哪些",
        "en": "which one",
        "lvl": 0
      },
      {
        "ch": "哪儿",
        "en": "where",
        "lvl": 1
      },
      {
        "ch": "哪里",
        "en": "where",
        "lvl": 1
      },
      {
        "ch": "儿子",
        "en": "son",
        "lvl": 1
      },
      {
        "ch": "儿歌",
        "en": "children's song",
        "lvl": 0
      },
      {
        "ch": "儿童",
        "en": "child / baby",
        "lvl": 2
      },
      {
        "ch": "里边",
        "en": "inside / within",
        "lvl": 0
      },
      {
        "ch": "里头",
        "en": "inside",
        "lvl": 0
      },
      {
        "ch": "那里",
        "en": "there",
        "lvl": 0
      },
      {
        "ch": "这里",
        "en": "here",
        "lvl": 0
      },
      {
        "ch": "老板",
        "en": "boss",
        "lvl": 0
      },
      {
        "ch": "老婆",
        "en": "wife",
        "lvl": 0
      },
      {
        "ch": "老大",
        "en": "oldest sibling",
        "lvl": 0
      },
      {
        "ch": "老年",
        "en": "elderly",
        "lvl": 0
      },
      {
        "ch": "老师",
        "en": "teacher",
        "lvl": 1
      },
      {
        "ch": "老实",
        "en": "frank / honest",
        "lvl": 0
      },
      {
        "ch": "老外",
        "en": "foreigner",
        "lvl": 0
      },
      {
        "ch": "老家",
        "en": "native land / place of origin",
        "lvl": 0
      },
      {
        "ch": "国家",
        "en": "country / nation",
        "lvl": 1
      },
      {
        "ch": "国庆节",
        "en": "National day",
        "lvl": 0
      },
      {
        "ch": "国王",
        "en": "king",
        "lvl": 0
      },
      {
        "ch": "国内",
        "en": "domestic / internal",
        "lvl": 0
      },
      {
        "ch": "国际",
        "en": "border / international",
        "lvl": 2
      },
      {
        "ch": "国籍",
        "en": "nationality",
        "lvl": 2
      },
      {
        "ch": "国界",
        "en": "national boundary",
        "lvl": 0
      },
      {
        "ch": "中国",
        "en": "China",
        "lvl": 0
      },
      {
        "ch": "中文",
        "en": "Chinese language",
        "lvl": 1
      },
      {
        "ch": "中秋节",
        "en": "mid-autumn festival",
        "lvl": 0
      },
      {
        "ch": "中午",
        "en": "midday / noon",
        "lvl": 0
      },
      {
        "ch": "中间",
        "en": "middle / between / intermediate",
        "lvl": 1
      },
      {
        "ch": "中药",
        "en": "traditional Chinese medicine",
        "lvl": 0
      },
      {
        "ch": "中级",
        "en": "intermediate",
        "lvl": 0
      },
      {
        "ch": "中餐",
        "en": "Chinese food",
        "lvl": 0
      },
      {
        "ch": "中式",
        "en": "Chinese style",
        "lvl": 0
      },
      {
        "ch": "美国",
        "en": "USA",
        "lvl": 0
      },
      {
        "ch": "北美洲",
        "en": "North America",
        "lvl": 0
      },
      {
        "ch": "南美洲",
        "en": "South America",
        "lvl": 0
      },
      {
        "ch": "美丽",
        "en": "beautiful / pretty",
        "lvl": 2
      },
      {
        "ch": "美化",
        "en": "beautify / embellish",
        "lvl": 0
      },
      {
        "ch": "美好",
        "en": "fine / happy",
        "lvl": 0
      },
      {
        "ch": "美术",
        "en": "painting / art",
        "lvl": 0
      },
      {
        "ch": "英国",
        "en": "UK",
        "lvl": 0
      },
      {
        "ch": "英文",
        "en": "English",
        "lvl": 0
      },
      {
        "ch": "英语",
        "en": "English",
        "lvl": 0
      },
      {
        "ch": "英里",
        "en": "mile",
        "lvl": 0
      },
      {
        "ch": "英俊",
        "en": "handsome",
        "lvl": 0
      },
      {
        "ch": "谁知道",
        "en": "God knows / who would have imagined",
        "lvl": 0
      },
      {
        "ch": "喜欢",
        "en": "like / be fond of",
        "lvl": 1
      },
      {
        "ch": "欢喜",
        "en": "jubilate / joy",
        "lvl": 0
      },
      {
        "ch": "欢乐",
        "en": "joy / pleasure",
        "lvl": 0
      },
      {
        "ch": "欢聚",
        "en": "happy reunion",
        "lvl": 0
      },
      {
        "ch": "欢迎",
        "en": "welcome / greeting / compliment",
        "lvl": 1
      },
      {
        "ch": "迎新",
        "en": "celebrate the new year",
        "lvl": 0
      },
      {
        "ch": "迎宾",
        "en": "host / welcome guests",
        "lvl": 0
      },
      {
        "ch": "迎接",
        "en": "meet / greet / greeting",
        "lvl": 0
      },
      {
        "ch": "对面",
        "en": "opposite / across",
        "lvl": 2
      },
      {
        "ch": "对手",
        "en": "opponent",
        "lvl": 0
      },
      {
        "ch": "对于",
        "en": "about / with regard to",
        "lvl": 2
      },
      {
        "ch": "对不起",
        "en": "sorry",
        "lvl": 1
      },
      {
        "ch": "起床",
        "en": "wake up",
        "lvl": 1
      },
      {
        "ch": "起码",
        "en": "at least",
        "lvl": 0
      },
      {
        "ch": "一起",
        "en": "together / in the same place",
        "lvl": 1
      },
      {
        "ch": "铅笔",
        "en": "pencil",
        "lvl": 1
      },
      {
        "ch": "谢谢",
        "en": "thanks",
        "lvl": 1
      },
      {
        "ch": "感谢",
        "en": "thanks / grateful / gratitude",
        "lvl": 2
      },
      {
        "ch": "非常感谢",
        "en": "extremely grateful / thanks u very much",
        "lvl": 0
      },
      {
        "ch": "谢天谢地",
        "en": "thank goodness",
        "lvl": 0
      },
      {
        "ch": "顾客",
        "en": "customer / client",
        "lvl": 2
      },
      {
        "ch": "客户",
        "en": "client / customer",
        "lvl": 0
      },
      {
        "ch": "客气",
        "en": "polite / courteous",
        "lvl": 0
      },
      {
        "ch": "客观",
        "en": "objective",
        "lvl": 0
      },
      {
        "ch": "客套话",
        "en": "polite expression",
        "lvl": 0
      },
      {
        "ch": "客人",
        "en": "guest / visitor / client",
        "lvl": 1
      },
      {
        "ch": "客厅",
        "en": "living room / parlor",
        "lvl": 2
      },
      {
        "ch": "气候",
        "en": "climate / atmosphere",
        "lvl": 2
      },
      {
        "ch": "气息",
        "en": "breath / smell",
        "lvl": 0
      },
      {
        "ch": "气味",
        "en": "smell / odor",
        "lvl": 0
      },
      {
        "ch": "气功",
        "en": "汉字 link",
        "lvl": 0
      },
      {
        "ch": "气色",
        "en": "complexion",
        "lvl": 0
      },
      {
        "ch": "力气",
        "en": "strength",
        "lvl": 2
      },
      {
        "ch": "气力",
        "en": "strength / vigor",
        "lvl": 0
      },
      {
        "ch": "慢慢",
        "en": "slowly",
        "lvl": 0
      },
      {
        "ch": "慢慢来",
        "en": "take it easy",
        "lvl": 0
      },
      {
        "ch": "慢镜头",
        "en": "slow motion",
        "lvl": 0
      },
      {
        "ch": "慢腾腾",
        "en": "at a leisurely pace",
        "lvl": 0
      },
      {
        "ch": "慢条斯理",
        "en": "unhurriedly / take ur time",
        "lvl": 0
      },
      {
        "ch": "走动",
        "en": "stretch one's legs",
        "lvl": 0
      },
      {
        "ch": "走失",
        "en": "wander away / be lost",
        "lvl": 0
      },
      {
        "ch": "走运",
        "en": "be in luck",
        "lvl": 0
      },
      {
        "ch": "走廊",
        "en": "aisle / corridor",
        "lvl": 0
      },
      {
        "ch": "走路",
        "en": "walk / go on foot",
        "lvl": 0
      },
      {
        "ch": "父母亲",
        "en": "parents",
        "lvl": 2
      },
      {
        "ch": "继父",
        "en": "stepfather",
        "lvl": 0
      },
      {
        "ch": "母语",
        "en": "mother tongue",
        "lvl": 0
      },
      {
        "ch": "祖国",
        "en": "native land",
        "lvl": 0
      },
      {
        "ch": "祖父",
        "en": "grandfather",
        "lvl": 0
      },
      {
        "ch": "外祖父",
        "en": "grandfather (maternal)",
        "lvl": 0
      },
      {
        "ch": "祖母",
        "en": "grandmother",
        "lvl": 0
      },
      {
        "ch": "外祖母",
        "en": "grandmother (maternal)",
        "lvl": 0
      },
      {
        "ch": "亲人",
        "en": "kin",
        "lvl": 0
      },
      {
        "ch": "亲戚",
        "en": "relative",
        "lvl": 2
      },
      {
        "ch": "生意",
        "en": "life force / vitality",
        "lvl": 2
      },
      {
        "ch": "做生意",
        "en": "do business",
        "lvl": 0
      },
      {
        "ch": "做菜",
        "en": "cook",
        "lvl": 0
      },
      {
        "ch": "做事",
        "en": "work / have a job / handle affairs",
        "lvl": 0
      },
      {
        "ch": "工作",
        "en": "work / job",
        "lvl": 1
      },
      {
        "ch": "工资",
        "en": "wage / salary",
        "lvl": 2
      },
      {
        "ch": "工业",
        "en": "industry",
        "lvl": 0
      },
      {
        "ch": "工厂",
        "en": "factory",
        "lvl": 0
      },
      {
        "ch": "工艺品",
        "en": "handicraft",
        "lvl": 0
      },
      {
        "ch": "作家",
        "en": "writer / author",
        "lvl": 2
      },
      {
        "ch": "作文",
        "en": "composition / essay",
        "lvl": 0
      },
      {
        "ch": "作业",
        "en": "assignment / task / operation / operate",
        "lvl": 1
      },
      {
        "ch": "作用",
        "en": "intention / function / effect / affect",
        "lvl": 2
      },
      {
        "ch": "厨师",
        "en": "cook / chef",
        "lvl": 0
      },
      {
        "ch": "师傅",
        "en": "master / qualified worker",
        "lvl": 2
      },
      {
        "ch": "师父",
        "en": "master / teacher",
        "lvl": 0
      },
      {
        "ch": "师母",
        "en": "wife of master/teacher",
        "lvl": 0
      },
      {
        "ch": "律师",
        "en": "lawyer",
        "lvl": 2
      },
      {
        "ch": "学生",
        "en": "student / pupil",
        "lvl": 1
      },
      {
        "ch": "大学生",
        "en": "college student",
        "lvl": 1
      },
      {
        "ch": "学习",
        "en": "study / learn",
        "lvl": 1
      },
      {
        "ch": "学校",
        "en": "school",
        "lvl": 1
      },
      {
        "ch": "学院",
        "en": "college / university",
        "lvl": 0
      },
      {
        "ch": "学费",
        "en": "tuition fee",
        "lvl": 0
      },
      {
        "ch": "出国",
        "en": "go abroad",
        "lvl": 0
      },
      {
        "ch": "生日",
        "en": "birthday",
        "lvl": 1
      },
      {
        "ch": "出生日期",
        "en": "birthday",
        "lvl": 2
      },
      {
        "ch": "出生",
        "en": "be born",
        "lvl": 2
      },
      {
        "ch": "生词",
        "en": "new word",
        "lvl": 0
      },
      {
        "ch": "生字",
        "en": "new word",
        "lvl": 0
      },
      {
        "ch": "生产",
        "en": "produce / manufacture",
        "lvl": 0
      },
      {
        "ch": "医生",
        "en": "doctor",
        "lvl": 0
      },
      {
        "ch": "医院",
        "en": "hospital",
        "lvl": 1
      },
      {
        "ch": "医务所",
        "en": "clinic",
        "lvl": 0
      },
      {
        "ch": "医药",
        "en": "medicine",
        "lvl": 0
      },
      {
        "ch": "医科",
        "en": "medical science",
        "lvl": 0
      },
      {
        "ch": "孩子",
        "en": "child / baby",
        "lvl": 1
      },
      {
        "ch": "孩子气",
        "en": "childish",
        "lvl": 0
      },
      {
        "ch": "孩子话",
        "en": "childish talk",
        "lvl": 0
      },
      {
        "ch": "子孙",
        "en": "descendants",
        "lvl": 0
      },
      {
        "ch": "妻子",
        "en": "wife",
        "lvl": 1
      },
      {
        "ch": "女儿",
        "en": "daughter",
        "lvl": 0
      },
      {
        "ch": "女人",
        "en": "woman",
        "lvl": 0
      },
      {
        "ch": "女士",
        "en": "lady / madam",
        "lvl": 0
      },
      {
        "ch": "女王",
        "en": "queen",
        "lvl": 0
      },
      {
        "ch": "男性",
        "en": "male / masculine",
        "lvl": 0
      },
      {
        "ch": "女性",
        "en": "female / feminine",
        "lvl": 0
      },
      {
        "ch": "妇女",
        "en": "women / feminine",
        "lvl": 0
      },
      {
        "ch": "女强人",
        "en": "strong women",
        "lvl": 0
      },
      {
        "ch": "男人",
        "en": "man",
        "lvl": 0
      },
      {
        "ch": "小狗",
        "en": "puppy",
        "lvl": 0
      },
      {
        "ch": "小猫",
        "en": "kitten",
        "lvl": 0
      },
      {
        "ch": "熊猫",
        "en": "panda",
        "lvl": 1
      },
      {
        "ch": "猫头鹰",
        "en": "owl",
        "lvl": 0
      },
      {
        "ch": "狗熊",
        "en": "black bear",
        "lvl": 0
      },
      {
        "ch": "狗屁",
        "en": "shit",
        "lvl": 0
      },
      {
        "ch": "老鹰",
        "en": "eagle",
        "lvl": 0
      },
      {
        "ch": "老鼠",
        "en": "mouse",
        "lvl": 0
      },
      {
        "ch": "鸟窝",
        "en": "bird nest",
        "lvl": 0
      },
      {
        "ch": "马路",
        "en": "road / street",
        "lvl": 0
      },
      {
        "ch": "马上",
        "en": "immediately / right away",
        "lvl": 1
      },
      {
        "ch": "马虎",
        "en": "careless / negligent",
        "lvl": 2
      },
      {
        "ch": "马拉松",
        "en": "marathon",
        "lvl": 0
      },
      {
        "ch": "其它",
        "en": "other / other than / else",
        "lvl": 0
      },
      {
        "ch": "阿姨",
        "en": "maternal aunt / step-mother / nursemaid",
        "lvl": 1
      },
      {
        "ch": "准备",
        "en": "ready / prepare / preparation",
        "lvl": 1
      },
      {
        "ch": "知道",
        "en": "know / be aware of / knowledge",
        "lvl": 1
      },
      {
        "ch": "知识",
        "en": "knowledge / information",
        "lvl": 2
      },
      {
        "ch": "知己",
        "en": "confidant / intimate friend",
        "lvl": 0
      },
      {
        "ch": "知音",
        "en": "an understanding friend",
        "lvl": 0
      },
      {
        "ch": "道路",
        "en": "road",
        "lvl": 0
      },
      {
        "ch": "道理",
        "en": "reason / justification",
        "lvl": 0
      },
      {
        "ch": "道歉",
        "en": "apologize",
        "lvl": 2
      },
      {
        "ch": "道义",
        "en": "morality & justice",
        "lvl": 0
      },
      {
        "ch": "会议",
        "en": "meeting / conference",
        "lvl": 1
      },
      {
        "ch": "一会儿",
        "en": "(in) a moment / a while",
        "lvl": 1
      },
      {
        "ch": "会谈",
        "en": "talks / discussion",
        "lvl": 0
      },
      {
        "ch": "会话",
        "en": "conversation",
        "lvl": 0
      },
      {
        "ch": "说服",
        "en": "convince / persuade",
        "lvl": 0
      },
      {
        "ch": "说谎",
        "en": "tell a lie",
        "lvl": 0
      },
      {
        "ch": "说话",
        "en": "talk / speak",
        "lvl": 1
      },
      {
        "ch": "说不定",
        "en": "maybe / cant say for sure",
        "lvl": 0
      },
      {
        "ch": "写作",
        "en": "writing / script",
        "lvl": 0
      },
      {
        "ch": "写字",
        "en": "write",
        "lvl": 0
      },
      {
        "ch": "大写",
        "en": "upper case",
        "lvl": 0
      },
      {
        "ch": "小写",
        "en": "lower case",
        "lvl": 0
      },
      {
        "ch": "书写",
        "en": "hand-written",
        "lvl": 0
      },
      {
        "ch": "汉族",
        "en": "Han nationality",
        "lvl": 0
      },
      {
        "ch": "汉字",
        "en": "Chinese character",
        "lvl": 0
      },
      {
        "ch": "汉语",
        "en": "Chinese (spoken)",
        "lvl": 0
      },
      {
        "ch": "汉学",
        "en": "sinology / Chinese studies",
        "lvl": 0
      },
      {
        "ch": "手语",
        "en": "sign language",
        "lvl": 0
      },
      {
        "ch": "语言",
        "en": "spoken language",
        "lvl": 2
      },
      {
        "ch": "言语",
        "en": "speech / talk",
        "lvl": 0
      },
      {
        "ch": "语气",
        "en": "manner of speaking",
        "lvl": 0
      },
      {
        "ch": "语法",
        "en": "grammar",
        "lvl": 2
      },
      {
        "ch": "法国",
        "en": "France",
        "lvl": 0
      },
      {
        "ch": "文法",
        "en": "grammar",
        "lvl": 0
      },
      {
        "ch": "文字",
        "en": "literal / written language",
        "lvl": 0
      },
      {
        "ch": "文化",
        "en": "civilization / culture / cultural",
        "lvl": 1
      },
      {
        "ch": "文明",
        "en": "civilization / culture",
        "lvl": 0
      },
      {
        "ch": "文学",
        "en": "literature",
        "lvl": 0
      },
      {
        "ch": "认为",
        "en": "think / believe / consider",
        "lvl": 1
      },
      {
        "ch": "认识",
        "en": "be acquainted with / know / understanding",
        "lvl": 1
      },
      {
        "ch": "认字",
        "en": "read characters",
        "lvl": 0
      },
      {
        "ch": "认得",
        "en": "recognize / know",
        "lvl": 0
      },
      {
        "ch": "认真",
        "en": "serious / conscientious / take to heart",
        "lvl": 1
      },
      {
        "ch": "识别",
        "en": "distinguish",
        "lvl": 0
      },
      {
        "ch": "识字",
        "en": "become literate",
        "lvl": 0
      },
      {
        "ch": "识货",
        "en": "know the goods",
        "lvl": 0
      },
      {
        "ch": "学识",
        "en": "knowledge",
        "lvl": 0
      },
      {
        "ch": "喜爱",
        "en": "be fond of / favorite",
        "lvl": 0
      },
      {
        "ch": "喜事",
        "en": "happy event",
        "lvl": 0
      },
      {
        "ch": "要好",
        "en": "be close friends",
        "lvl": 0
      },
      {
        "ch": "要紧",
        "en": "important",
        "lvl": 0
      },
      {
        "ch": "要不",
        "en": "otherwise / OR",
        "lvl": 0
      },
      {
        "ch": "不要",
        "en": "don't want/need",
        "lvl": 0
      },
      {
        "ch": "首要",
        "en": "primary / first of all",
        "lvl": 0
      },
      {
        "ch": "吃药",
        "en": "take medicine",
        "lvl": 0
      },
      {
        "ch": "吃饭",
        "en": "eat meal/food",
        "lvl": 0
      },
      {
        "ch": "吃得下",
        "en": "be able to eat",
        "lvl": 0
      },
      {
        "ch": "吃不下",
        "en": "be unable to eat anymore",
        "lvl": 0
      },
      {
        "ch": "吃苦",
        "en": "bear hardship",
        "lvl": 0
      },
      {
        "ch": "饭菜",
        "en": "food",
        "lvl": 0
      },
      {
        "ch": "饭店",
        "en": "hotel / restaurant",
        "lvl": 1
      },
      {
        "ch": "饭馆儿",
        "en": "restaurant",
        "lvl": 0
      },
      {
        "ch": "米饭",
        "en": "(cooked) rice",
        "lvl": 1
      },
      {
        "ch": "看见",
        "en": "see / catch sight of",
        "lvl": 1
      },
      {
        "ch": "看来",
        "en": "it seems / apparently",
        "lvl": 0
      },
      {
        "ch": "看书",
        "en": "read a book",
        "lvl": 0
      },
      {
        "ch": "书店",
        "en": "bookshop",
        "lvl": 0
      },
      {
        "ch": "书房",
        "en": "study",
        "lvl": 0
      },
      {
        "ch": "书包",
        "en": "school bag",
        "lvl": 0
      },
      {
        "ch": "书架",
        "en": "bookshelf",
        "lvl": 0
      },
      {
        "ch": "书法",
        "en": "calligraphy",
        "lvl": 0
      },
      {
        "ch": "电影",
        "en": "movie",
        "lvl": 1
      },
      {
        "ch": "电影院",
        "en": "cinema",
        "lvl": 0
      },
      {
        "ch": "电视剧",
        "en": "TV series",
        "lvl": 0
      },
      {
        "ch": "电视机",
        "en": "TV set",
        "lvl": 0
      },
      {
        "ch": "电视",
        "en": "TV",
        "lvl": 1
      },
      {
        "ch": "雷电",
        "en": "thunder",
        "lvl": 0
      },
      {
        "ch": "闪电",
        "en": "lightning",
        "lvl": 0
      },
      {
        "ch": "电话",
        "en": "telephone",
        "lvl": 0
      },
      {
        "ch": "充电器",
        "en": "charger",
        "lvl": 0
      },
      {
        "ch": "电冰箱",
        "en": "refrigerator",
        "lvl": 1
      },
      {
        "ch": "冰箱",
        "en": "refrigerator / icebox",
        "lvl": 1
      },
      {
        "ch": "视点",
        "en": "point of view / perspective",
        "lvl": 0
      },
      {
        "ch": "视力",
        "en": "vision / sight",
        "lvl": 0
      },
      {
        "ch": "视觉",
        "en": "vision / sight",
        "lvl": 0
      },
      {
        "ch": "视而不见",
        "en": "turn a blind eye / overlook",
        "lvl": 0
      },
      {
        "ch": "影响",
        "en": "influence / effect / affect",
        "lvl": 1
      },
      {
        "ch": "影印",
        "en": "photocopy",
        "lvl": 0
      },
      {
        "ch": "影迷",
        "en": "movie fan",
        "lvl": 0
      },
      {
        "ch": "合影",
        "en": "group photo",
        "lvl": 0
      },
      {
        "ch": "担心",
        "en": "worry / worried / anxious",
        "lvl": 1
      },
      {
        "ch": "打篮球",
        "en": "play basketball",
        "lvl": 1
      },
      {
        "ch": "打电话",
        "en": "make a phone call",
        "lvl": 1
      },
      {
        "ch": "打听",
        "en": "ask about / find out",
        "lvl": 0
      },
      {
        "ch": "打字",
        "en": "type",
        "lvl": 0
      },
      {
        "ch": "打算",
        "en": "intend / intention / plan",
        "lvl": 1
      },
      {
        "ch": "打扫",
        "en": "sweep / clean",
        "lvl": 1
      },
      {
        "ch": "打球",
        "en": "play (sport)",
        "lvl": 0
      },
      {
        "ch": "打开",
        "en": "open / turn on",
        "lvl": 0
      },
      {
        "ch": "球赛",
        "en": "match",
        "lvl": 0
      },
      {
        "ch": "球员",
        "en": "player",
        "lvl": 0
      },
      {
        "ch": "半球",
        "en": "hemisphere",
        "lvl": 0
      },
      {
        "ch": "北半球",
        "en": "Northern Hemisphere",
        "lvl": 0
      },
      {
        "ch": "南半球",
        "en": "Southern Hemisphere",
        "lvl": 0
      },
      {
        "ch": "环球",
        "en": "the whole world / global / worldwide",
        "lvl": 0
      },
      {
        "ch": "练武",
        "en": "practice martial arts",
        "lvl": 0
      },
      {
        "ch": "练习",
        "en": "practice / exercise",
        "lvl": 1
      },
      {
        "ch": "练习题",
        "en": "exercise problems",
        "lvl": 1
      },
      {
        "ch": "练习本",
        "en": "workbook",
        "lvl": 1
      },
      {
        "ch": "复习",
        "en": "review / brush up / revision",
        "lvl": 1
      },
      {
        "ch": "复杂",
        "en": "complicated / complication / complex",
        "lvl": 2
      },
      {
        "ch": "复印",
        "en": "copy / duplicate",
        "lvl": 2
      },
      {
        "ch": "复印机",
        "en": "duplicator",
        "lvl": 2
      },
      {
        "ch": "复写器",
        "en": "duplicator",
        "lvl": 0
      },
      {
        "ch": "复信",
        "en": "reply to a letter",
        "lvl": 0
      },
      {
        "ch": "复原",
        "en": "recover / recovery / rehabilitation",
        "lvl": 0
      },
      {
        "ch": "习气",
        "en": "bad habit",
        "lvl": 0
      },
      {
        "ch": "习染",
        "en": "fall into a bad habit",
        "lvl": 0
      },
      {
        "ch": "习俗",
        "en": "custom / tradition / convention",
        "lvl": 0
      },
      {
        "ch": "课本",
        "en": "textbook",
        "lvl": 0
      },
      {
        "ch": "课文",
        "en": "text",
        "lvl": 0
      },
      {
        "ch": "课堂",
        "en": "classroom",
        "lvl": 0
      },
      {
        "ch": "课程",
        "en": "course / curriculum",
        "lvl": 0
      },
      {
        "ch": "考虑",
        "en": "consider(ation)",
        "lvl": 2
      },
      {
        "ch": "考验",
        "en": "test / trial",
        "lvl": 0
      },
      {
        "ch": "考上",
        "en": "admitted / achieve",
        "lvl": 0
      },
      {
        "ch": "大考",
        "en": "college entrance examination",
        "lvl": 0
      },
      {
        "ch": "考试",
        "en": "exam / test",
        "lvl": 1
      },
      {
        "ch": "试用",
        "en": "try out",
        "lvl": 0
      },
      {
        "ch": "试行",
        "en": "try out",
        "lvl": 0
      },
      {
        "ch": "试探",
        "en": "sound out / feel out",
        "lvl": 0
      },
      {
        "ch": "网上",
        "en": "online",
        "lvl": 0
      },
      {
        "ch": "上网",
        "en": "go online / be on the internet",
        "lvl": 1
      },
      {
        "ch": "上线",
        "en": "go online",
        "lvl": 0
      },
      {
        "ch": "线上",
        "en": "online",
        "lvl": 0
      },
      {
        "ch": "线下",
        "en": "offline",
        "lvl": 0
      },
      {
        "ch": "上面",
        "en": "above / on top of",
        "lvl": 0
      },
      {
        "ch": "下面",
        "en": "under / below / following",
        "lvl": 0
      },
      {
        "ch": "上车",
        "en": "get on a vehicle",
        "lvl": 0
      },
      {
        "ch": "下车",
        "en": "get off a vehicle",
        "lvl": 0
      },
      {
        "ch": "上班",
        "en": "go to work / start work / be on duty",
        "lvl": 1
      },
      {
        "ch": "下班",
        "en": "get off work / finish work",
        "lvl": 1
      },
      {
        "ch": "上铺",
        "en": "upper berth",
        "lvl": 0
      },
      {
        "ch": "下铺",
        "en": "lower berth",
        "lvl": 0
      },
      {
        "ch": "上周",
        "en": "last week",
        "lvl": 0
      },
      {
        "ch": "下周",
        "en": "next week",
        "lvl": 0
      },
      {
        "ch": "上次",
        "en": "last time",
        "lvl": 0
      },
      {
        "ch": "下次",
        "en": "next time",
        "lvl": 0
      },
      {
        "ch": "上午",
        "en": "A.M / morning",
        "lvl": 1
      },
      {
        "ch": "下午",
        "en": "P.M / afternoon",
        "lvl": 1
      },
      {
        "ch": "上学",
        "en": "attend school",
        "lvl": 0
      },
      {
        "ch": "上床",
        "en": "go to bed",
        "lvl": 0
      },
      {
        "ch": "下载",
        "en": "download",
        "lvl": 0
      },
      {
        "ch": "下雨",
        "en": "rain",
        "lvl": 1
      },
      {
        "ch": "下雪",
        "en": "snow",
        "lvl": 0
      },
      {
        "ch": "上来",
        "en": "come up / approach",
        "lvl": 0
      },
      {
        "ch": "下来",
        "en": "get down",
        "lvl": 0
      },
      {
        "ch": "下巴",
        "en": "chin",
        "lvl": 0
      },
      {
        "ch": "日历",
        "en": "calendar",
        "lvl": 0
      },
      {
        "ch": "历年",
        "en": "over the years",
        "lvl": 0
      },
      {
        "ch": "历书",
        "en": "almanac / ephemeris",
        "lvl": 0
      },
      {
        "ch": "历次",
        "en": "previous instances / previously",
        "lvl": 0
      },
      {
        "ch": "历代",
        "en": "past dynasties",
        "lvl": 0
      },
      {
        "ch": "历史",
        "en": "history",
        "lvl": 1
      },
      {
        "ch": "史书",
        "en": "historical book",
        "lvl": 0
      },
      {
        "ch": "史册",
        "en": "a history / annals",
        "lvl": 0
      },
      {
        "ch": "史前",
        "en": "prehistoric",
        "lvl": 0
      },
      {
        "ch": "史无前例",
        "en": "unprecedented",
        "lvl": 0
      },
      {
        "ch": "数字",
        "en": "number / digit(al)",
        "lvl": 2
      },
      {
        "ch": "数词",
        "en": "numeral",
        "lvl": 0
      },
      {
        "ch": "数量",
        "en": "amount / quantity",
        "lvl": 2
      },
      {
        "ch": "数学",
        "en": "math",
        "lvl": 1
      },
      {
        "ch": "科学",
        "en": "science / scientific knowledge",
        "lvl": 2
      },
      {
        "ch": "科学家",
        "en": "scientist",
        "lvl": 2
      },
      {
        "ch": "技术",
        "en": "technology / technique",
        "lvl": 2
      },
      {
        "ch": "科技",
        "en": "science & technology",
        "lvl": 0
      },
      {
        "ch": "科目",
        "en": "subject of study",
        "lvl": 0
      },
      {
        "ch": "科研",
        "en": "scientific research",
        "lvl": 0
      },
      {
        "ch": "理科",
        "en": "natural science",
        "lvl": 0
      },
      {
        "ch": "文科",
        "en": "liberal arts",
        "lvl": 0
      },
      {
        "ch": "冬菇",
        "en": "dried mushroom",
        "lvl": 0
      },
      {
        "ch": "冬装",
        "en": "winter clothes",
        "lvl": 0
      },
      {
        "ch": "夏装",
        "en": "summer clothes",
        "lvl": 0
      },
      {
        "ch": "春风",
        "en": "spring breeze",
        "lvl": 0
      },
      {
        "ch": "春药",
        "en": "aphrodisiac",
        "lvl": 0
      },
      {
        "ch": "冬季",
        "en": "winter",
        "lvl": 0
      },
      {
        "ch": "夏季",
        "en": "summer",
        "lvl": 0
      },
      {
        "ch": "春季",
        "en": "spring",
        "lvl": 0
      },
      {
        "ch": "秋季",
        "en": "autumn",
        "lvl": 0
      },
      {
        "ch": "夏天",
        "en": "summer",
        "lvl": 0
      },
      {
        "ch": "秋天",
        "en": "autumn",
        "lvl": 0
      },
      {
        "ch": "冬天",
        "en": "winter",
        "lvl": 0
      },
      {
        "ch": "春天",
        "en": "spring",
        "lvl": 0
      },
      {
        "ch": "春节",
        "en": "Spring Festival",
        "lvl": 0
      },
      {
        "ch": "夏令",
        "en": "summer",
        "lvl": 0
      },
      {
        "ch": "夏令时",
        "en": "summer time",
        "lvl": 0
      },
      {
        "ch": "夏令营",
        "en": "summer camp",
        "lvl": 0
      },
      {
        "ch": "过冬",
        "en": "hibernate / hibernation",
        "lvl": 0
      },
      {
        "ch": "秋色",
        "en": "autumn scenery",
        "lvl": 0
      },
      {
        "ch": "秋收",
        "en": "autumn harvest",
        "lvl": 0
      },
      {
        "ch": "天气",
        "en": "weather",
        "lvl": 0
      },
      {
        "ch": "天然",
        "en": "natural",
        "lvl": 0
      },
      {
        "ch": "天真的",
        "en": "innocent / naive",
        "lvl": 0
      },
      {
        "ch": "昨天",
        "en": "yesterday",
        "lvl": 1
      },
      {
        "ch": "热带",
        "en": "tropic / tropical",
        "lvl": 0
      },
      {
        "ch": "热点",
        "en": "hot spot",
        "lvl": 0
      },
      {
        "ch": "热情",
        "en": "enthusiasm / enthusiastic / passion",
        "lvl": 1
      },
      {
        "ch": "热心",
        "en": "enthusiasm / enthusiastic",
        "lvl": 0
      },
      {
        "ch": "热闹",
        "en": "lively / liven up",
        "lvl": 2
      },
      {
        "ch": "发热",
        "en": "fever",
        "lvl": 0
      },
      {
        "ch": "暖气",
        "en": "central heating",
        "lvl": 0
      },
      {
        "ch": "暖气片",
        "en": "radiator",
        "lvl": 0
      },
      {
        "ch": "暖和",
        "en": "nice & warm",
        "lvl": 2
      },
      {
        "ch": "温暖",
        "en": "warm",
        "lvl": 0
      },
      {
        "ch": "冷静",
        "en": "calm / sober / cool-headed",
        "lvl": 2
      },
      {
        "ch": "冷静下来",
        "en": "calm down / chill out",
        "lvl": 0
      },
      {
        "ch": "冷水",
        "en": "cold water",
        "lvl": 0
      },
      {
        "ch": "冷落",
        "en": "treat coldly / left out",
        "lvl": 0
      },
      {
        "ch": "冷冰冰",
        "en": "icy / cold in manner",
        "lvl": 0
      },
      {
        "ch": "冷淡",
        "en": "cold / cheerless / desolate / chillness",
        "lvl": 0
      },
      {
        "ch": "冷冻",
        "en": "freeze / freezing",
        "lvl": 0
      },
      {
        "ch": "冷饮",
        "en": "cold drink",
        "lvl": 0
      },
      {
        "ch": "凉菜",
        "en": "cold dish",
        "lvl": 0
      },
      {
        "ch": "凉快",
        "en": "pleasantly cool",
        "lvl": 2
      },
      {
        "ch": "凉爽",
        "en": "nice & cool / refreshing",
        "lvl": 0
      },
      {
        "ch": "快乐",
        "en": "happy / merry",
        "lvl": 1
      },
      {
        "ch": "快活",
        "en": "merry / cheerful",
        "lvl": 0
      },
      {
        "ch": "快餐",
        "en": "fast food",
        "lvl": 0
      },
      {
        "ch": "快慢",
        "en": "speed",
        "lvl": 0
      },
      {
        "ch": "加快",
        "en": "accelerate / speed up",
        "lvl": 0
      },
      {
        "ch": "月亮",
        "en": "moon",
        "lvl": 1
      },
      {
        "ch": "月饼",
        "en": "moon cake",
        "lvl": 0
      },
      {
        "ch": "星期",
        "en": "week",
        "lvl": 1
      },
      {
        "ch": "假期",
        "en": "vacation / period of leave",
        "lvl": 0
      },
      {
        "ch": "假日",
        "en": "holiday / vacation",
        "lvl": 0
      },
      {
        "ch": "学期",
        "en": "semester",
        "lvl": 2
      },
      {
        "ch": "期间",
        "en": "period / course",
        "lvl": 0
      },
      {
        "ch": "日报",
        "en": "daily paper",
        "lvl": 0
      },
      {
        "ch": "日期",
        "en": "date",
        "lvl": 0
      },
      {
        "ch": "日常",
        "en": "daily / day-to-day",
        "lvl": 0
      },
      {
        "ch": "日记",
        "en": "journal / diary",
        "lvl": 2
      },
      {
        "ch": "日本",
        "en": "Japan",
        "lvl": 0
      },
      {
        "ch": "日文",
        "en": "Japanese",
        "lvl": 0
      },
      {
        "ch": "日语",
        "en": "Japanese",
        "lvl": 0
      },
      {
        "ch": "今后",
        "en": "from now on",
        "lvl": 0
      },
      {
        "ch": "今晚",
        "en": "tonight",
        "lvl": 0
      },
      {
        "ch": "今天",
        "en": "today",
        "lvl": 1
      },
      {
        "ch": "今年",
        "en": "this year",
        "lvl": 0
      },
      {
        "ch": "明年",
        "en": "next year",
        "lvl": 0
      },
      {
        "ch": "来年",
        "en": "next year",
        "lvl": 0
      },
      {
        "ch": "去年",
        "en": "last year",
        "lvl": 1
      },
      {
        "ch": "岁月",
        "en": "years",
        "lvl": 0
      },
      {
        "ch": "昨夜",
        "en": "last night",
        "lvl": 0
      },
      {
        "ch": "昨晚",
        "en": "last night",
        "lvl": 0
      },
      {
        "ch": "聪明",
        "en": "clever / intelligent / penetration / acute (of sight/hearing)",
        "lvl": 1
      },
      {
        "ch": "明信片",
        "en": "postcard",
        "lvl": 0
      },
      {
        "ch": "明天",
        "en": "tomorrow",
        "lvl": 1
      },
      {
        "ch": "明知",
        "en": "know perfectly well",
        "lvl": 0
      },
      {
        "ch": "明星",
        "en": "star / celebrity",
        "lvl": 0
      },
      {
        "ch": "明白",
        "en": "understand / clear(ness)",
        "lvl": 1
      },
      {
        "ch": "显明",
        "en": "obvious / manifest / reveal",
        "lvl": 0
      },
      {
        "ch": "明显",
        "en": "obvious / obviously / distinct",
        "lvl": 0
      },
      {
        "ch": "分明",
        "en": "clear / distinct / clearly",
        "lvl": 0
      },
      {
        "ch": "年龄",
        "en": "age",
        "lvl": 2
      },
      {
        "ch": "年纪",
        "en": "age",
        "lvl": 0
      },
      {
        "ch": "年轻",
        "en": "young",
        "lvl": 0
      },
      {
        "ch": "拜年",
        "en": "pay a new year call / wish happy new year",
        "lvl": 0
      },
      {
        "ch": "刮坡",
        "en": "scratch",
        "lvl": 0
      },
      {
        "ch": "刮脸",
        "en": "shave",
        "lvl": 0
      },
      {
        "ch": "刮脸刀",
        "en": "razor",
        "lvl": 0
      },
      {
        "ch": "刮目相看",
        "en": "look with new eyes / have a new level of respect for sb",
        "lvl": 0
      },
      {
        "ch": "风趣",
        "en": "wit / humor / humorous",
        "lvl": 0
      },
      {
        "ch": "风口",
        "en": "drafty place",
        "lvl": 0
      },
      {
        "ch": "风俗",
        "en": "custom",
        "lvl": 0
      },
      {
        "ch": "风味",
        "en": "special flavor",
        "lvl": 0
      },
      {
        "ch": "阵雨",
        "en": "shower",
        "lvl": 0
      },
      {
        "ch": "雨季",
        "en": "rainy season",
        "lvl": 0
      },
      {
        "ch": "雨伞",
        "en": "umbrella",
        "lvl": 0
      },
      {
        "ch": "雪球",
        "en": "snowball",
        "lvl": 0
      },
      {
        "ch": "雪花",
        "en": "snowflake",
        "lvl": 0
      },
      {
        "ch": "雪亮",
        "en": "bright & sparkling",
        "lvl": 0
      },
      {
        "ch": "雪白",
        "en": "snow-white",
        "lvl": 0
      },
      {
        "ch": "穿衣服",
        "en": "wear clothes",
        "lvl": 0
      },
      {
        "ch": "穿不住",
        "en": "cannot keep wearing",
        "lvl": 0
      },
      {
        "ch": "穿着",
        "en": "dress / apparel / attire",
        "lvl": 0
      },
      {
        "ch": "穿越",
        "en": "pass through",
        "lvl": 0
      },
      {
        "ch": "穿过",
        "en": "go across / go through",
        "lvl": 0
      },
      {
        "ch": "衣服",
        "en": "clothes",
        "lvl": 1
      },
      {
        "ch": "衣架",
        "en": "hanger",
        "lvl": 0
      },
      {
        "ch": "毛衣",
        "en": "woolen sweater",
        "lvl": 0
      },
      {
        "ch": "内衣",
        "en": "underwear",
        "lvl": 0
      },
      {
        "ch": "外衣",
        "en": "coat / jacket",
        "lvl": 0
      },
      {
        "ch": "衣料",
        "en": "clothing material",
        "lvl": 0
      },
      {
        "ch": "衣柜",
        "en": "wardrobe",
        "lvl": 0
      },
      {
        "ch": "服务",
        "en": "service / serve",
        "lvl": 0
      },
      {
        "ch": "服务员",
        "en": "waiter / attendant",
        "lvl": 1
      },
      {
        "ch": "服务器",
        "en": "server",
        "lvl": 0
      },
      {
        "ch": "服从",
        "en": "obey / obedience",
        "lvl": 0
      },
      {
        "ch": "服装",
        "en": "costume / dress",
        "lvl": 0
      },
      {
        "ch": "服装店",
        "en": "boutique / clothing store",
        "lvl": 0
      },
      {
        "ch": "服饰",
        "en": "apparel / finery",
        "lvl": 0
      },
      {
        "ch": "西瓜",
        "en": "watermelon",
        "lvl": 1
      },
      {
        "ch": "西装",
        "en": "suit",
        "lvl": 0
      },
      {
        "ch": "洋装",
        "en": "dress / gown",
        "lvl": 0
      },
      {
        "ch": "装饰",
        "en": "decorate / decoration / ornament(al)",
        "lvl": 0
      },
      {
        "ch": "装饰品",
        "en": "adornment",
        "lvl": 0
      },
      {
        "ch": "装备",
        "en": "equipment / equip",
        "lvl": 0
      },
      {
        "ch": "装配",
        "en": "assemble",
        "lvl": 0
      },
      {
        "ch": "武装",
        "en": "armed forces / equipment",
        "lvl": 0
      },
      {
        "ch": "裤子",
        "en": "pants",
        "lvl": 1
      },
      {
        "ch": "短裤",
        "en": "shorts / panties / knickers",
        "lvl": 0
      },
      {
        "ch": "牛仔裤",
        "en": "jeans",
        "lvl": 0
      },
      {
        "ch": "裙子",
        "en": "skirt",
        "lvl": 1
      },
      {
        "ch": "长裙",
        "en": "long skirt",
        "lvl": 0
      },
      {
        "ch": "超短裙",
        "en": "miniskirt",
        "lvl": 0
      },
      {
        "ch": "围裙",
        "en": "apron",
        "lvl": 0
      },
      {
        "ch": "衬裙",
        "en": "petticoat / slip",
        "lvl": 0
      },
      {
        "ch": "衬衫",
        "en": "shirt / blouse",
        "lvl": 1
      },
      {
        "ch": "衬衣",
        "en": "shirt / blouse",
        "lvl": 1
      },
      {
        "ch": "衬托",
        "en": "set off",
        "lvl": 0
      },
      {
        "ch": "草鞋",
        "en": "straw sandals",
        "lvl": 0
      },
      {
        "ch": "拖鞋",
        "en": "slippers / flip-flops",
        "lvl": 0
      },
      {
        "ch": "凉鞋",
        "en": "sandals",
        "lvl": 0
      },
      {
        "ch": "高跟鞋",
        "en": "high-heeled shoes",
        "lvl": 0
      },
      {
        "ch": "运动鞋",
        "en": "sneakers",
        "lvl": 0
      },
      {
        "ch": "运动",
        "en": "movement / sport",
        "lvl": 1
      },
      {
        "ch": "皮鞋",
        "en": "leather shoes",
        "lvl": 1
      },
      {
        "ch": "鞋油",
        "en": "shoe polish",
        "lvl": 0
      },
      {
        "ch": "鞋匠",
        "en": "shoe maker",
        "lvl": 0
      },
      {
        "ch": "鞋带",
        "en": "shoelace",
        "lvl": 0
      },
      {
        "ch": "鞋底",
        "en": "sole (of shoes)",
        "lvl": 0
      },
      {
        "ch": "鞋柜",
        "en": "shoebox",
        "lvl": 0
      },
      {
        "ch": "文件",
        "en": "document / file",
        "lvl": 0
      },
      {
        "ch": "配件",
        "en": "accessories / fitting",
        "lvl": 0
      },
      {
        "ch": "硬件",
        "en": "hardware",
        "lvl": 0
      },
      {
        "ch": "软件",
        "en": "software",
        "lvl": 0
      },
      {
        "ch": "部件",
        "en": "part / component",
        "lvl": 0
      },
      {
        "ch": "双人床",
        "en": "double bed",
        "lvl": 0
      },
      {
        "ch": "双层床",
        "en": "bunk bed",
        "lvl": 0
      },
      {
        "ch": "双层",
        "en": "double-deck",
        "lvl": 0
      },
      {
        "ch": "双重",
        "en": "double / dual / duality",
        "lvl": 0
      },
      {
        "ch": "双生",
        "en": "twin",
        "lvl": 0
      },
      {
        "ch": "双胞胎",
        "en": "twin",
        "lvl": 0
      },
      {
        "ch": "价钱",
        "en": "price",
        "lvl": 0
      },
      {
        "ch": "价格",
        "en": "price",
        "lvl": 2
      },
      {
        "ch": "钱包",
        "en": "wallet / purse",
        "lvl": 0
      },
      {
        "ch": "钱币",
        "en": "coin",
        "lvl": 0
      },
      {
        "ch": "压岁钱",
        "en": "money given to children as new year present",
        "lvl": 0
      },
      {
        "ch": "值钱",
        "en": "valuable / costly",
        "lvl": 0
      },
      {
        "ch": "美元",
        "en": "dollar",
        "lvl": 0
      },
      {
        "ch": "元旦",
        "en": "New Year's Day",
        "lvl": 0
      },
      {
        "ch": "公元",
        "en": "Christian era / A.D.",
        "lvl": 0
      },
      {
        "ch": "公元前",
        "en": "before Christian era / B.C.",
        "lvl": 0
      },
      {
        "ch": "鱼块",
        "en": "fish piece",
        "lvl": 0
      },
      {
        "ch": "一块儿",
        "en": "together",
        "lvl": 0
      },
      {
        "ch": "块儿",
        "en": "block",
        "lvl": 0
      },
      {
        "ch": "方块字",
        "en": "square characters",
        "lvl": 0
      },
      {
        "ch": "方块",
        "en": "cube / square / block / diamond (in card game)",
        "lvl": 0
      },
      {
        "ch": "五元钱",
        "en": "five yuan",
        "lvl": 0
      },
      {
        "ch": "五块钱",
        "en": "five yuan",
        "lvl": 0
      },
      {
        "ch": "角度",
        "en": "angle / perspective",
        "lvl": 0
      },
      {
        "ch": "视角",
        "en": "viewpoint / perspective",
        "lvl": 0
      },
      {
        "ch": "直角",
        "en": "right angle",
        "lvl": 0
      },
      {
        "ch": "牛角",
        "en": "ox-horn",
        "lvl": 0
      },
      {
        "ch": "毛病",
        "en": "problem / defect",
        "lvl": 0
      },
      {
        "ch": "毛笔",
        "en": "writing brush",
        "lvl": 0
      },
      {
        "ch": "毛毯",
        "en": "woolen blanket",
        "lvl": 0
      },
      {
        "ch": "一毛钱",
        "en": "one cent",
        "lvl": 0
      },
      {
        "ch": "椅子",
        "en": "chair",
        "lvl": 1
      },
      {
        "ch": "桌子",
        "en": "table / desk",
        "lvl": 1
      },
      {
        "ch": "分开",
        "en": "separate",
        "lvl": 0
      },
      {
        "ch": "分钟",
        "en": "minute",
        "lvl": 1
      },
      {
        "ch": "分别",
        "en": "difference / differentiate / separately",
        "lvl": 0
      },
      {
        "ch": "分辨",
        "en": "distinguish",
        "lvl": 0
      },
      {
        "ch": "价值",
        "en": "value / worth",
        "lvl": 0
      },
      {
        "ch": "有价值",
        "en": "valuable",
        "lvl": 0
      },
      {
        "ch": "讲价",
        "en": "bargain",
        "lvl": 0
      },
      {
        "ch": "涨价",
        "en": "rise in price",
        "lvl": 0
      },
      {
        "ch": "方便",
        "en": "convenient / convenience",
        "lvl": 1
      },
      {
        "ch": "便利",
        "en": "easy / convenience / facility / facilitate",
        "lvl": 0
      },
      {
        "ch": "便条",
        "en": "note / script",
        "lvl": 0
      },
      {
        "ch": "便宜",
        "en": "cheap",
        "lvl": 1
      },
      {
        "ch": "便宜货",
        "en": "bargain / cheap stuff",
        "lvl": 0
      },
      {
        "ch": "不宜",
        "en": "not suitable / inappropriate",
        "lvl": 0
      },
      {
        "ch": "宜人",
        "en": "pleasant",
        "lvl": 0
      },
      {
        "ch": "宝贵",
        "en": "valuable / precious / treasure / value",
        "lvl": 2
      },
      {
        "ch": "太阳",
        "en": "sun",
        "lvl": 1
      },
      {
        "ch": "太长",
        "en": "too long",
        "lvl": 0
      },
      {
        "ch": "太平洋",
        "en": "the Pacific Ocean",
        "lvl": 0
      },
      {
        "ch": "太极拳",
        "en": "Tai chi",
        "lvl": 0
      },
      {
        "ch": "太太",
        "en": "wife",
        "lvl": 0
      },
      {
        "ch": "太空",
        "en": "outer space",
        "lvl": 0
      },
      {
        "ch": "太空人",
        "en": "astronaut",
        "lvl": 0
      },
      {
        "ch": "太空梭",
        "en": "space shuttle",
        "lvl": 0
      },
      {
        "ch": "怎么",
        "en": "how / why",
        "lvl": 1
      },
      {
        "ch": "怎样",
        "en": "how / what kind",
        "lvl": 0
      },
      {
        "ch": "怎么样",
        "en": "how about / what are things",
        "lvl": 1
      },
      {
        "ch": "样子",
        "en": "appearance / manner",
        "lvl": 2
      },
      {
        "ch": "一样",
        "en": "same / alike",
        "lvl": 0
      },
      {
        "ch": "花样",
        "en": "variety / pattern",
        "lvl": 0
      },
      {
        "ch": "想法",
        "en": "opinion / idea / think of a way (to do sth)",
        "lvl": 0
      },
      {
        "ch": "想办法",
        "en": "think of a way",
        "lvl": 0
      },
      {
        "ch": "想念",
        "en": "miss / long for / missing",
        "lvl": 0
      },
      {
        "ch": "想到",
        "en": "think of / expect / keep in mind",
        "lvl": 0
      },
      {
        "ch": "想要",
        "en": "want",
        "lvl": 0
      },
      {
        "ch": "回想",
        "en": "recall / recollect",
        "lvl": 0
      },
      {
        "ch": "大人",
        "en": "adult / grown-up",
        "lvl": 0
      },
      {
        "ch": "大使",
        "en": "ambassador",
        "lvl": 0
      },
      {
        "ch": "大使馆",
        "en": "embassy",
        "lvl": 2
      },
      {
        "ch": "大学",
        "en": "university",
        "lvl": 0
      },
      {
        "ch": "大小",
        "en": "size",
        "lvl": 0
      },
      {
        "ch": "大米",
        "en": "uncooked rice",
        "lvl": 0
      },
      {
        "ch": "大街",
        "en": "street",
        "lvl": 0
      },
      {
        "ch": "大路",
        "en": "main road / avenue",
        "lvl": 0
      },
      {
        "ch": "大陆",
        "en": "continent / mainland",
        "lvl": 0
      },
      {
        "ch": "大概",
        "en": "roughly / probably / approximate",
        "lvl": 2
      },
      {
        "ch": "小时",
        "en": "hour",
        "lvl": 1
      },
      {
        "ch": "小船",
        "en": "boat",
        "lvl": 0
      },
      {
        "ch": "小吃",
        "en": "snack",
        "lvl": 2
      },
      {
        "ch": "小孩",
        "en": "child",
        "lvl": 0
      },
      {
        "ch": "小心",
        "en": "careful",
        "lvl": 1
      },
      {
        "ch": "漂亮",
        "en": "beautiful / pretty",
        "lvl": 1
      },
      {
        "ch": "漂亮话",
        "en": "fine words",
        "lvl": 0
      },
      {
        "ch": "漂游",
        "en": "lead a wandering life / drift",
        "lvl": 0
      },
      {
        "ch": "漂白粉",
        "en": "bleaching power",
        "lvl": 0
      },
      {
        "ch": "明亮",
        "en": "bright / shining / clear",
        "lvl": 0
      },
      {
        "ch": "亮堂",
        "en": "bright / clear",
        "lvl": 0
      },
      {
        "ch": "错误",
        "en": "error / mistake(n) / wrong",
        "lvl": 2
      },
      {
        "ch": "错别字",
        "en": "wrongly written / Typo",
        "lvl": 0
      },
      {
        "ch": "错过",
        "en": "miss / let slip",
        "lvl": 0
      },
      {
        "ch": "我们",
        "en": "we / us",
        "lvl": 1
      },
      {
        "ch": "同学",
        "en": "classmate",
        "lvl": 1
      },
      {
        "ch": "同情",
        "en": "sympathize / empathize / compassion",
        "lvl": 2
      },
      {
        "ch": "同辈",
        "en": "peer / of the same generation",
        "lvl": 0
      },
      {
        "ch": "同事",
        "en": "colleague / co-worker",
        "lvl": 1
      },
      {
        "ch": "同时",
        "en": "simultaneously / at the same time / contemporary",
        "lvl": 2
      },
      {
        "ch": "同意",
        "en": "agree / consent",
        "lvl": 1
      },
      {
        "ch": "同一",
        "en": "identical / the same",
        "lvl": 0
      },
      {
        "ch": "同样",
        "en": "same / equal / equivalent",
        "lvl": 0
      },
      {
        "ch": "意见",
        "en": "opinion / view / suggestion",
        "lvl": 2
      },
      {
        "ch": "意思",
        "en": "meaning / sense / idea",
        "lvl": 1
      },
      {
        "ch": "够意思",
        "en": "terrific / wonderful",
        "lvl": 0
      },
      {
        "ch": "这个",
        "en": "this one",
        "lvl": 0
      },
      {
        "ch": "那个",
        "en": "that one",
        "lvl": 0
      },
      {
        "ch": "这儿",
        "en": "here",
        "lvl": 0
      },
      {
        "ch": "那儿",
        "en": "there",
        "lvl": 0
      },
      {
        "ch": "这边",
        "en": "this side / here",
        "lvl": 0
      },
      {
        "ch": "那边",
        "en": "(over) there",
        "lvl": 0
      },
      {
        "ch": "这么样",
        "en": "thus / in this way",
        "lvl": 0
      },
      {
        "ch": "从那儿起",
        "en": "since then",
        "lvl": 0
      },
      {
        "ch": "去处",
        "en": "place to go / destination",
        "lvl": 0
      },
      {
        "ch": "去世",
        "en": "passed away / die",
        "lvl": 0
      },
      {
        "ch": "到处",
        "en": "everywhere",
        "lvl": 2
      },
      {
        "ch": "到底",
        "en": "finally / in the end",
        "lvl": 2
      },
      {
        "ch": "到达",
        "en": "arrive / reach",
        "lvl": 0
      },
      {
        "ch": "到家",
        "en": "perfect / brought to the utmost degree",
        "lvl": 0
      },
      {
        "ch": "到期",
        "en": "expire / maturity",
        "lvl": 0
      },
      {
        "ch": "母校",
        "en": "alma mater",
        "lvl": 0
      },
      {
        "ch": "院校",
        "en": "institution / academy",
        "lvl": 0
      },
      {
        "ch": "校长",
        "en": "principal",
        "lvl": 1
      },
      {
        "ch": "校验",
        "en": "check / verify",
        "lvl": 0
      },
      {
        "ch": "校对",
        "en": "proofread / proofreader",
        "lvl": 0
      },
      {
        "ch": "校服",
        "en": "uniform",
        "lvl": 0
      },
      {
        "ch": "校园",
        "en": "campus",
        "lvl": 0
      },
      {
        "ch": "院子",
        "en": "courtyard",
        "lvl": 0
      },
      {
        "ch": "庭院",
        "en": "courtyard",
        "lvl": 0
      },
      {
        "ch": "住院",
        "en": "be hospitalized",
        "lvl": 0
      },
      {
        "ch": "商人",
        "en": "merchant / businessman",
        "lvl": 0
      },
      {
        "ch": "商品",
        "en": "merchandise / commodity",
        "lvl": 0
      },
      {
        "ch": "商店",
        "en": "shop / store",
        "lvl": 1
      },
      {
        "ch": "商场",
        "en": "bazaar / market",
        "lvl": 0
      },
      {
        "ch": "商业",
        "en": "business / commerce",
        "lvl": 0
      },
      {
        "ch": "商量",
        "en": "discuss / talk over / consult",
        "lvl": 2
      },
      {
        "ch": "协商",
        "en": "negotiate / consult / talk over",
        "lvl": 0
      },
      {
        "ch": "工商",
        "en": "industry & commerce",
        "lvl": 0
      },
      {
        "ch": "文具店",
        "en": "stationery shop",
        "lvl": 0
      },
      {
        "ch": "店员",
        "en": "clerk",
        "lvl": 0
      },
      {
        "ch": "花儿",
        "en": "flower",
        "lvl": 0
      },
      {
        "ch": "假花",
        "en": "artificial flower",
        "lvl": 0
      },
      {
        "ch": "花生",
        "en": "peanut",
        "lvl": 0
      },
      {
        "ch": "花钵",
        "en": "flowerpot",
        "lvl": 0
      },
      {
        "ch": "花盆",
        "en": "flowerpot",
        "lvl": 0
      },
      {
        "ch": "花瓶",
        "en": "vase / jardiniere",
        "lvl": 0
      },
      {
        "ch": "花架",
        "en": "jardiniere",
        "lvl": 0
      },
      {
        "ch": "花匠",
        "en": "gardener",
        "lvl": 0
      },
      {
        "ch": "花白",
        "en": "grizzled / gray",
        "lvl": 0
      },
      {
        "ch": "花钱",
        "en": "spend money",
        "lvl": 0
      },
      {
        "ch": "鲜花",
        "en": "fresh flowers",
        "lvl": 0
      },
      {
        "ch": "五花八门",
        "en": "of all kinds / all sorts of / myriad",
        "lvl": 0
      },
      {
        "ch": "公共",
        "en": "public / common",
        "lvl": 2
      },
      {
        "ch": "公共汽车",
        "en": "bus",
        "lvl": 1
      },
      {
        "ch": "公物",
        "en": "public property",
        "lvl": 0
      },
      {
        "ch": "公寓",
        "en": "apartment",
        "lvl": 0
      },
      {
        "ch": "公司",
        "en": "company / firm",
        "lvl": 1
      },
      {
        "ch": "公厕",
        "en": "public toilet",
        "lvl": 0
      },
      {
        "ch": "公里",
        "en": "kilometer",
        "lvl": 0
      },
      {
        "ch": "公斤",
        "en": "kilogram",
        "lvl": 1
      },
      {
        "ch": "公升",
        "en": "liter",
        "lvl": 0
      },
      {
        "ch": "公开",
        "en": "public / publish / make public",
        "lvl": 0
      },
      {
        "ch": "公园",
        "en": "(public) park",
        "lvl": 1
      },
      {
        "ch": "花园",
        "en": "garden",
        "lvl": 0
      },
      {
        "ch": "果园",
        "en": "orchard",
        "lvl": 0
      },
      {
        "ch": "园林",
        "en": "landscape garden",
        "lvl": 0
      },
      {
        "ch": "园丁",
        "en": "gardener",
        "lvl": 0
      },
      {
        "ch": "动物园",
        "en": "zoo",
        "lvl": 1
      },
      {
        "ch": "动物",
        "en": "animal",
        "lvl": 1
      },
      {
        "ch": "地道",
        "en": "tunnel / authentic / genuine",
        "lvl": 0
      },
      {
        "ch": "当地",
        "en": "local",
        "lvl": 0
      },
      {
        "ch": "地域",
        "en": "area / region / district",
        "lvl": 0
      },
      {
        "ch": "地下",
        "en": "underground",
        "lvl": 0
      },
      {
        "ch": "印地语",
        "en": "Hindi",
        "lvl": 0
      },
      {
        "ch": "地图",
        "en": "map",
        "lvl": 1
      },
      {
        "ch": "地毯",
        "en": "carpet / rug",
        "lvl": 0
      },
      {
        "ch": "地址",
        "en": "address",
        "lvl": 2
      },
      {
        "ch": "地方",
        "en": "place / area / region / regional",
        "lvl": 1
      },
      {
        "ch": "地点",
        "en": "location / site / place",
        "lvl": 2
      },
      {
        "ch": "地带",
        "en": "zone",
        "lvl": 0
      },
      {
        "ch": "地形",
        "en": "terrain / topography",
        "lvl": 0
      },
      {
        "ch": "地铁",
        "en": "subway",
        "lvl": 1
      },
      {
        "ch": "铁路",
        "en": "railway",
        "lvl": 0
      },
      {
        "ch": "方向",
        "en": "direction / orientation",
        "lvl": 2
      },
      {
        "ch": "双方",
        "en": "both sides / bilateral",
        "lvl": 0
      },
      {
        "ch": "方法",
        "en": "method / means",
        "lvl": 2
      },
      {
        "ch": "方面",
        "en": "aspect / side",
        "lvl": 2
      },
      {
        "ch": "进城",
        "en": "enter a city",
        "lvl": 0
      },
      {
        "ch": "城堡",
        "en": "castle",
        "lvl": 0
      },
      {
        "ch": "城乡",
        "en": "city & countryside",
        "lvl": 0
      },
      {
        "ch": "城市",
        "en": "city / town",
        "lvl": 1
      },
      {
        "ch": "县城",
        "en": "county town",
        "lvl": 0
      },
      {
        "ch": "城镇",
        "en": "town",
        "lvl": 0
      },
      {
        "ch": "长城",
        "en": "The Great Wall",
        "lvl": 2
      },
      {
        "ch": "市中心",
        "en": "downtown",
        "lvl": 0
      },
      {
        "ch": "市区",
        "en": "urban area",
        "lvl": 0
      },
      {
        "ch": "市民",
        "en": "citizen",
        "lvl": 0
      },
      {
        "ch": "市场",
        "en": "market",
        "lvl": 0
      },
      {
        "ch": "菜市场",
        "en": "food market",
        "lvl": 0
      },
      {
        "ch": "超市",
        "en": "supermarket",
        "lvl": 1
      },
      {
        "ch": "宾馆",
        "en": "guesthouse / hotel",
        "lvl": 1
      },
      {
        "ch": "住宾馆",
        "en": "stay in a hotel",
        "lvl": 0
      },
      {
        "ch": "宾利",
        "en": "Bentley",
        "lvl": 0
      },
      {
        "ch": "宾客",
        "en": "guests / visitors",
        "lvl": 0
      },
      {
        "ch": "贵宾",
        "en": "VIP",
        "lvl": 0
      },
      {
        "ch": "图书馆",
        "en": "library",
        "lvl": 1
      },
      {
        "ch": "博物馆",
        "en": "museum",
        "lvl": 2
      },
      {
        "ch": "领事馆",
        "en": "consulate",
        "lvl": 0
      },
      {
        "ch": "银行",
        "en": "bank",
        "lvl": 1
      },
      {
        "ch": "银色",
        "en": "silver",
        "lvl": 0
      },
      {
        "ch": "银幕",
        "en": "movie screen",
        "lvl": 0
      },
      {
        "ch": "银杏",
        "en": "ginkgo",
        "lvl": 0
      },
      {
        "ch": "银牌",
        "en": "silver medal",
        "lvl": 0
      },
      {
        "ch": "行李",
        "en": "baggage / luggage",
        "lvl": 0
      },
      {
        "ch": "行李箱",
        "en": "suitcase / trunk",
        "lvl": 1
      },
      {
        "ch": "行业",
        "en": "industry / business",
        "lvl": 0
      },
      {
        "ch": "行驶",
        "en": "travel (on a vehicle/ship/etc..)",
        "lvl": 0
      },
      {
        "ch": "行程",
        "en": "journey / itinerary / trajectory",
        "lvl": 0
      },
      {
        "ch": "同行",
        "en": "of the same occupation / travel together",
        "lvl": 0
      },
      {
        "ch": "每每",
        "en": "often",
        "lvl": 0
      },
      {
        "ch": "都市",
        "en": "metropolis / city",
        "lvl": 0
      },
      {
        "ch": "都会",
        "en": "metropolis / city",
        "lvl": 0
      },
      {
        "ch": "首都",
        "en": "capital",
        "lvl": 2
      },
      {
        "ch": "大都",
        "en": "for the most part / on the whole / general",
        "lvl": 0
      },
      {
        "ch": "全都",
        "en": "all / without exception",
        "lvl": 0
      },
      {
        "ch": "鼻子",
        "en": "nose",
        "lvl": 1
      },
      {
        "ch": "北方",
        "en": "north",
        "lvl": 1
      },
      {
        "ch": "北边",
        "en": "north side",
        "lvl": 0
      },
      {
        "ch": "南方",
        "en": "south",
        "lvl": 0
      },
      {
        "ch": "南边",
        "en": "south side",
        "lvl": 0
      },
      {
        "ch": "东北",
        "en": "northeast",
        "lvl": 0
      },
      {
        "ch": "东南",
        "en": "southeast",
        "lvl": 0
      },
      {
        "ch": "东方",
        "en": "Orient",
        "lvl": 0
      },
      {
        "ch": "东西",
        "en": "thing / stuff",
        "lvl": 1
      },
      {
        "ch": "东边",
        "en": "east side",
        "lvl": 0
      },
      {
        "ch": "西北",
        "en": "northwest",
        "lvl": 0
      },
      {
        "ch": "西南",
        "en": "southwest",
        "lvl": 0
      },
      {
        "ch": "西方",
        "en": "Occident",
        "lvl": 0
      },
      {
        "ch": "北部",
        "en": "Northern part",
        "lvl": 0
      },
      {
        "ch": "南部",
        "en": "Southern part",
        "lvl": 0
      },
      {
        "ch": "东部",
        "en": "Eastern part",
        "lvl": 0
      },
      {
        "ch": "西部",
        "en": "Western part",
        "lvl": 0
      },
      {
        "ch": "西式",
        "en": "Western style",
        "lvl": 0
      },
      {
        "ch": "西药",
        "en": "Western medicine",
        "lvl": 0
      },
      {
        "ch": "西班牙",
        "en": "Spain",
        "lvl": 0
      },
      {
        "ch": "西边",
        "en": "west side",
        "lvl": 0
      },
      {
        "ch": "西餐",
        "en": "western food",
        "lvl": 0
      },
      {
        "ch": "前天",
        "en": "the day before yesterday",
        "lvl": 0
      },
      {
        "ch": "前年",
        "en": "the year before last",
        "lvl": 0
      },
      {
        "ch": "后天",
        "en": "the day after tomorrow",
        "lvl": 0
      },
      {
        "ch": "后年",
        "en": "the year after next",
        "lvl": 0
      },
      {
        "ch": "后面",
        "en": "back / behind / later",
        "lvl": 1
      },
      {
        "ch": "向右转",
        "en": "turn right",
        "lvl": 0
      },
      {
        "ch": "向左转",
        "en": "turn left",
        "lvl": 0
      },
      {
        "ch": "前进",
        "en": "go ahead / advance / progress",
        "lvl": 0
      },
      {
        "ch": "前面",
        "en": "ahead / in front / preceding",
        "lvl": 1
      },
      {
        "ch": "面前",
        "en": "in front of / facing / (in the) presence (of)",
        "lvl": 0
      },
      {
        "ch": "前途",
        "en": "prospects / outlook",
        "lvl": 0
      },
      {
        "ch": "后进",
        "en": "backward",
        "lvl": 0
      },
      {
        "ch": "后来",
        "en": "later / afterward",
        "lvl": 1
      },
      {
        "ch": "后果",
        "en": "consequence / as a result",
        "lvl": 0
      },
      {
        "ch": "以前",
        "en": "before / previous",
        "lvl": 1
      },
      {
        "ch": "以后",
        "en": "after / following",
        "lvl": 0
      },
      {
        "ch": "右边",
        "en": "right side",
        "lvl": 1
      },
      {
        "ch": "左边",
        "en": "left side",
        "lvl": 1
      },
      {
        "ch": "左右",
        "en": "about / approximately",
        "lvl": 2
      },
      {
        "ch": "左邻右舍",
        "en": "neighbor",
        "lvl": 0
      },
      {
        "ch": "邻居",
        "en": "neighbor",
        "lvl": 1
      },
      {
        "ch": "左撇子",
        "en": "left handed",
        "lvl": 0
      },
      {
        "ch": "右撇子",
        "en": "right handed",
        "lvl": 0
      },
      {
        "ch": "内向",
        "en": "introvert",
        "lvl": 0
      },
      {
        "ch": "内蒙古",
        "en": "Inner Mongolia",
        "lvl": 0
      },
      {
        "ch": "内面",
        "en": "inside",
        "lvl": 0
      },
      {
        "ch": "内部",
        "en": "inside / interior",
        "lvl": 0
      },
      {
        "ch": "内心",
        "en": "heart / innermost being",
        "lvl": 0
      },
      {
        "ch": "内政",
        "en": "internal affairs (of a country)",
        "lvl": 0
      },
      {
        "ch": "内科",
        "en": "general medicine",
        "lvl": 0
      },
      {
        "ch": "外部",
        "en": "external / external part",
        "lvl": 0
      },
      {
        "ch": "外人",
        "en": "stranger",
        "lvl": 0
      },
      {
        "ch": "外表",
        "en": "external / outside / appearance",
        "lvl": 0
      },
      {
        "ch": "外科",
        "en": "surgery / surgical",
        "lvl": 0
      },
      {
        "ch": "外卖",
        "en": "takeaway (food)",
        "lvl": 0
      },
      {
        "ch": "外向",
        "en": "outgoing",
        "lvl": 0
      },
      {
        "ch": "外国人",
        "en": "foreigner",
        "lvl": 0
      },
      {
        "ch": "外套",
        "en": "coat",
        "lvl": 0
      },
      {
        "ch": "外语",
        "en": "foreign language",
        "lvl": 0
      },
      {
        "ch": "外面",
        "en": "outside",
        "lvl": 0
      },
      {
        "ch": "一旁",
        "en": "aside",
        "lvl": 0
      },
      {
        "ch": "旁白",
        "en": "narration / aside (theater)",
        "lvl": 0
      },
      {
        "ch": "旁听",
        "en": "attend / visit",
        "lvl": 0
      },
      {
        "ch": "旁人",
        "en": "other people / onlookers",
        "lvl": 0
      },
      {
        "ch": "旁观者",
        "en": "observer / spectator",
        "lvl": 0
      },
      {
        "ch": "旁边",
        "en": "side / lateral / beside",
        "lvl": 1
      },
      {
        "ch": "一边",
        "en": "one side / on the one/other hand",
        "lvl": 1
      },
      {
        "ch": "上边",
        "en": "upside / on top of",
        "lvl": 0
      },
      {
        "ch": "下边",
        "en": "below / under / next",
        "lvl": 0
      },
      {
        "ch": "边境",
        "en": "frontier / border",
        "lvl": 0
      },
      {
        "ch": "边界",
        "en": "boundary / border",
        "lvl": 0
      },
      {
        "ch": "外边",
        "en": "outside / abroad / exterior",
        "lvl": 0
      },
      {
        "ch": "时期",
        "en": "period / phase",
        "lvl": 0
      },
      {
        "ch": "时间",
        "en": "period / time",
        "lvl": 1
      },
      {
        "ch": "时髦",
        "en": "fashionable",
        "lvl": 0
      },
      {
        "ch": "时候",
        "en": "time / period",
        "lvl": 0
      },
      {
        "ch": "有时候",
        "en": "sometimes",
        "lvl": 0
      },
      {
        "ch": "小时候",
        "en": "childhood",
        "lvl": 0
      },
      {
        "ch": "问候",
        "en": "give one's respect",
        "lvl": 0
      },
      {
        "ch": "点钟",
        "en": "oclock",
        "lvl": 0
      },
      {
        "ch": "钟头",
        "en": "hour",
        "lvl": 0
      },
      {
        "ch": "钟表",
        "en": "clocks & watches",
        "lvl": 0
      },
      {
        "ch": "一刻钟",
        "en": "a quarter",
        "lvl": 0
      },
      {
        "ch": "点菜",
        "en": "order food",
        "lvl": 0
      },
      {
        "ch": "点头",
        "en": "nod",
        "lvl": 0
      },
      {
        "ch": "晚点",
        "en": "behind schedule",
        "lvl": 0
      },
      {
        "ch": "久等",
        "en": "wait for a long time",
        "lvl": 0
      },
      {
        "ch": "久留",
        "en": "stay for a long time",
        "lvl": 0
      },
      {
        "ch": "多久",
        "en": "how long",
        "lvl": 0
      },
      {
        "ch": "许久",
        "en": "for a long time",
        "lvl": 0
      },
      {
        "ch": "长久",
        "en": "long / a good while",
        "lvl": 0
      },
      {
        "ch": "半新不旧",
        "en": "no longer new / showing signs of wear",
        "lvl": 0
      },
      {
        "ch": "半天",
        "en": "long time / quite a while",
        "lvl": 0
      },
      {
        "ch": "半年",
        "en": "half of a year",
        "lvl": 0
      },
      {
        "ch": "一半",
        "en": "half",
        "lvl": 0
      },
      {
        "ch": "夜生活",
        "en": "nightlife",
        "lvl": 0
      },
      {
        "ch": "夜总会",
        "en": "nightclub",
        "lvl": 0
      },
      {
        "ch": "丈夫",
        "en": "husband",
        "lvl": 1
      },
      {
        "ch": "早上",
        "en": "morning",
        "lvl": 1
      },
      {
        "ch": "早安",
        "en": "good morning",
        "lvl": 0
      },
      {
        "ch": "早晚",
        "en": "sooner or later",
        "lvl": 0
      },
      {
        "ch": "早餐",
        "en": "breakfast",
        "lvl": 0
      },
      {
        "ch": "早饭",
        "en": "breakfast",
        "lvl": 0
      },
      {
        "ch": "晚上",
        "en": "night / evening",
        "lvl": 1
      },
      {
        "ch": "晚安",
        "en": "good night",
        "lvl": 0
      },
      {
        "ch": "晚餐",
        "en": "dinner / supper",
        "lvl": 0
      },
      {
        "ch": "晚饭",
        "en": "dinner / supper",
        "lvl": 0
      },
      {
        "ch": "早日",
        "en": "early / soon",
        "lvl": 0
      },
      {
        "ch": "早晨",
        "en": "morning",
        "lvl": 0
      },
      {
        "ch": "午餐",
        "en": "lunch",
        "lvl": 0
      },
      {
        "ch": "午饭",
        "en": "lunch",
        "lvl": 0
      },
      {
        "ch": "半价",
        "en": "half price",
        "lvl": 0
      },
      {
        "ch": "半夜",
        "en": "midnight",
        "lvl": 0
      },
      {
        "ch": "夜班",
        "en": "night shift",
        "lvl": 0
      },
      {
        "ch": "夜景",
        "en": "night scene",
        "lvl": 0
      },
      {
        "ch": "夜间",
        "en": "at night / nighttime",
        "lvl": 0
      },
      {
        "ch": "夜里",
        "en": "at night",
        "lvl": 0
      },
      {
        "ch": "晚班",
        "en": "night shift",
        "lvl": 0
      },
      {
        "ch": "晚间",
        "en": "evening / in the evening",
        "lvl": 0
      },
      {
        "ch": "午间",
        "en": "afternoon",
        "lvl": 0
      },
      {
        "ch": "星期天",
        "en": "Sunday",
        "lvl": 0
      },
      {
        "ch": "周天",
        "en": "Sunday",
        "lvl": 0
      },
      {
        "ch": "周日",
        "en": "Sunday",
        "lvl": 0
      },
      {
        "ch": "周末",
        "en": "weekend",
        "lvl": 1
      },
      {
        "ch": "周年",
        "en": "anniversary / annual",
        "lvl": 0
      },
      {
        "ch": "周期",
        "en": "cycle",
        "lvl": 0
      },
      {
        "ch": "四周",
        "en": "all-around",
        "lvl": 0
      },
      {
        "ch": "周身",
        "en": "whole body",
        "lvl": 0
      },
      {
        "ch": "周围",
        "en": "around / surround(ing) / environment",
        "lvl": 2
      },
      {
        "ch": "周遍",
        "en": "all over / all-around",
        "lvl": 0
      },
      {
        "ch": "末日",
        "en": "doomsday",
        "lvl": 0
      },
      {
        "ch": "末期",
        "en": "last phase",
        "lvl": 0
      },
      {
        "ch": "末班车",
        "en": "last bus/train",
        "lvl": 0
      },
      {
        "ch": "现代",
        "en": "modern",
        "lvl": 0
      },
      {
        "ch": "现在",
        "en": "now / present",
        "lvl": 0
      },
      {
        "ch": "现成",
        "en": "ready-made",
        "lvl": 0
      },
      {
        "ch": "表现",
        "en": "express(ion) / manifest(ation) / display / behavior",
        "lvl": 2
      },
      {
        "ch": "来回",
        "en": "round trip / to & fro",
        "lvl": 0
      },
      {
        "ch": "从来",
        "en": "always / never (in a negative sentence)",
        "lvl": 2
      },
      {
        "ch": "从来不",
        "en": "never",
        "lvl": 0
      },
      {
        "ch": "来往",
        "en": "come & go",
        "lvl": 0
      },
      {
        "ch": "来不及",
        "en": "there's not enough time / its too late",
        "lvl": 2
      },
      {
        "ch": "来得及",
        "en": "there's still time",
        "lvl": 2
      },
      {
        "ch": "直来直去",
        "en": "frank / straightforward (in one's manner/speech)",
        "lvl": 0
      },
      {
        "ch": "买卖",
        "en": "business / transaction",
        "lvl": 0
      },
      {
        "ch": "卖弄",
        "en": "show off",
        "lvl": 0
      },
      {
        "ch": "买得起",
        "en": "can afford",
        "lvl": 0
      },
      {
        "ch": "买不起",
        "en": "cannot afford",
        "lvl": 0
      },
      {
        "ch": "买不到",
        "en": "out of stock",
        "lvl": 0
      },
      {
        "ch": "买东西",
        "en": "go shopping",
        "lvl": 0
      },
      {
        "ch": "卖座",
        "en": "blockbuster",
        "lvl": 0
      },
      {
        "ch": "卖力",
        "en": "work hard / do one's best",
        "lvl": 0
      },
      {
        "ch": "用力",
        "en": "exert oneself physically",
        "lvl": 0
      },
      {
        "ch": "用心",
        "en": "motive / intention / deligently / attentively",
        "lvl": 0
      },
      {
        "ch": "能力",
        "en": "ability / able",
        "lvl": 2
      },
      {
        "ch": "能够",
        "en": "be capable of / able",
        "lvl": 0
      },
      {
        "ch": "能源",
        "en": "energy",
        "lvl": 0
      },
      {
        "ch": "能干",
        "en": "capable / competent",
        "lvl": 0
      },
      {
        "ch": "听得懂",
        "en": "understand / catch what one says",
        "lvl": 0
      },
      {
        "ch": "听不懂",
        "en": "unable to make sense of what one says",
        "lvl": 0
      },
      {
        "ch": "听见",
        "en": "hear",
        "lvl": 0
      },
      {
        "ch": "听说",
        "en": "be told",
        "lvl": 0
      },
      {
        "ch": "听课",
        "en": "sit in on a class / attend a lecture",
        "lvl": 0
      },
      {
        "ch": "喝醉",
        "en": "drunk",
        "lvl": 0
      },
      {
        "ch": "好喝",
        "en": "tasty",
        "lvl": 0
      },
      {
        "ch": "茶碗",
        "en": "teacup",
        "lvl": 0
      },
      {
        "ch": "茶褐色",
        "en": "dark brown",
        "lvl": 0
      },
      {
        "ch": "茶叶",
        "en": "tea leaf",
        "lvl": 0
      },
      {
        "ch": "茶壶",
        "en": "teapot",
        "lvl": 0
      },
      {
        "ch": "茶馆",
        "en": "teahouse",
        "lvl": 0
      },
      {
        "ch": "红茶",
        "en": "black tea",
        "lvl": 0
      },
      {
        "ch": "绿茶",
        "en": "green tea",
        "lvl": 0
      },
      {
        "ch": "路上",
        "en": "on the road / on a journey",
        "lvl": 0
      },
      {
        "ch": "路线",
        "en": "itinerary / route",
        "lvl": 0
      },
      {
        "ch": "路口",
        "en": "intersection",
        "lvl": 0
      },
      {
        "ch": "路边",
        "en": "roadside",
        "lvl": 0
      },
      {
        "ch": "路标",
        "en": "road sign",
        "lvl": 0
      },
      {
        "ch": "路灯",
        "en": "street light",
        "lvl": 0
      },
      {
        "ch": "报关",
        "en": "declare at customs",
        "lvl": 0
      },
      {
        "ch": "报酬",
        "en": "reward / pay",
        "lvl": 0
      },
      {
        "ch": "报名",
        "en": "sign up / apply",
        "lvl": 2
      },
      {
        "ch": "张开",
        "en": "open / extend",
        "lvl": 0
      },
      {
        "ch": "张罗",
        "en": "get busy / take care of",
        "lvl": 0
      },
      {
        "ch": "可是",
        "en": "but / however",
        "lvl": 2
      },
      {
        "ch": "可爱",
        "en": "adorable / cute / lovely",
        "lvl": 1
      },
      {
        "ch": "可能",
        "en": "may / possible / possibility",
        "lvl": 1
      },
      {
        "ch": "可以",
        "en": "may / can / possible",
        "lvl": 1
      },
      {
        "ch": "以便",
        "en": "in order to / so as to",
        "lvl": 0
      },
      {
        "ch": "以为",
        "en": "believe / think / consider",
        "lvl": 2
      },
      {
        "ch": "比方",
        "en": "analogy / instance",
        "lvl": 0
      },
      {
        "ch": "比不上",
        "en": "not as good as",
        "lvl": 0
      },
      {
        "ch": "比较",
        "en": "compare / comparatively / quite / comparative",
        "lvl": 1
      },
      {
        "ch": "比赛",
        "en": "competition / contest",
        "lvl": 1
      },
      {
        "ch": "但是",
        "en": "but / however",
        "lvl": 0
      },
      {
        "ch": "但凡",
        "en": "in every case",
        "lvl": 0
      },
      {
        "ch": "但愿",
        "en": "if only / I wish that",
        "lvl": 0
      },
      {
        "ch": "不但",
        "en": "not only",
        "lvl": 0
      },
      {
        "ch": "尚且",
        "en": "still / yet / (not) even",
        "lvl": 0
      },
      {
        "ch": "且慢",
        "en": "wait a moment",
        "lvl": 0
      },
      {
        "ch": "就要",
        "en": "be going to / shall / will",
        "lvl": 0
      },
      {
        "ch": "就算",
        "en": "even if",
        "lvl": 0
      },
      {
        "ch": "就是",
        "en": "precisely / just like",
        "lvl": 0
      },
      {
        "ch": "还有",
        "en": "still / in adition",
        "lvl": 0
      },
      {
        "ch": "还价",
        "en": "counteroffer / to bargain",
        "lvl": 0
      },
      {
        "ch": "厕所",
        "en": "toilet",
        "lvl": 2
      },
      {
        "ch": "诊所",
        "en": "clinic",
        "lvl": 0
      },
      {
        "ch": "所以",
        "en": "so / therefore",
        "lvl": 0
      },
      {
        "ch": "阅读",
        "en": "read / reading",
        "lvl": 2
      },
      {
        "ch": "读书",
        "en": "study / learn",
        "lvl": 0
      },
      {
        "ch": "读者",
        "en": "reader (of a book/paper/etc)",
        "lvl": 0
      },
      {
        "ch": "读本",
        "en": "instructional book / textbook",
        "lvl": 0
      },
      {
        "ch": "本地",
        "en": "local",
        "lvl": 0
      },
      {
        "ch": "本领",
        "en": "skill / ability",
        "lvl": 2
      },
      {
        "ch": "本来",
        "en": "original(ly) / it goes without saying",
        "lvl": 1
      },
      {
        "ch": "本行",
        "en": "profession",
        "lvl": 0
      },
      {
        "ch": "词语",
        "en": "word",
        "lvl": 2
      },
      {
        "ch": "词汇",
        "en": "vocabulary",
        "lvl": 0
      },
      {
        "ch": "词汇表",
        "en": "glossary",
        "lvl": 0
      },
      {
        "ch": "词典",
        "en": "dictionary",
        "lvl": 1
      },
      {
        "ch": "单词",
        "en": "single word",
        "lvl": 0
      },
      {
        "ch": "典礼",
        "en": "ceremony / celebration",
        "lvl": 0
      },
      {
        "ch": "典型",
        "en": "typical",
        "lvl": 0
      },
      {
        "ch": "古典",
        "en": "classical",
        "lvl": 0
      },
      {
        "ch": "杂乱",
        "en": "in a mess / chaotic",
        "lvl": 0
      },
      {
        "ch": "杂货",
        "en": "groceries / miscellaneous goods",
        "lvl": 0
      },
      {
        "ch": "杂志",
        "en": "magazine",
        "lvl": 2
      },
      {
        "ch": "同志",
        "en": "comrade / homosexual",
        "lvl": 0
      },
      {
        "ch": "志气",
        "en": "ambition / drive / backbone",
        "lvl": 0
      },
      {
        "ch": "志愿",
        "en": "ambition / aspiration",
        "lvl": 0
      },
      {
        "ch": "休息",
        "en": "rest",
        "lvl": 1
      },
      {
        "ch": "休息室",
        "en": "lounge / lobby",
        "lvl": 0
      },
      {
        "ch": "休假",
        "en": "take a vacation",
        "lvl": 0
      },
      {
        "ch": "休业",
        "en": "suspend business",
        "lvl": 0
      },
      {
        "ch": "休养",
        "en": "recuperate / recover",
        "lvl": 0
      },
      {
        "ch": "信息",
        "en": "info / message / news",
        "lvl": 2
      },
      {
        "ch": "利息",
        "en": "interest (of investment/loan)",
        "lvl": 0
      },
      {
        "ch": "作息",
        "en": "work & rest",
        "lvl": 0
      },
      {
        "ch": "歇息",
        "en": "stay for the night / sleep",
        "lvl": 0
      },
      {
        "ch": "念书",
        "en": "study / read",
        "lvl": 0
      },
      {
        "ch": "念课文",
        "en": "read aloud a text",
        "lvl": 0
      },
      {
        "ch": "念头",
        "en": "thought / idea",
        "lvl": 0
      },
      {
        "ch": "纪念",
        "en": "commemorate",
        "lvl": 0
      },
      {
        "ch": "纪念品",
        "en": "souvenir / memento",
        "lvl": 0
      },
      {
        "ch": "电梯",
        "en": "elevator",
        "lvl": 1
      },
      {
        "ch": "电脑",
        "en": "computer",
        "lvl": 1
      },
      {
        "ch": "大脑",
        "en": "brain",
        "lvl": 0
      },
      {
        "ch": "脑海",
        "en": "mind / brain",
        "lvl": 0
      },
      {
        "ch": "脑筋",
        "en": "brain",
        "lvl": 0
      },
      {
        "ch": "脑汁",
        "en": "brains",
        "lvl": 0
      },
      {
        "ch": "生活",
        "en": "life / live",
        "lvl": 2
      },
      {
        "ch": "活动",
        "en": "exercise / move around / activity",
        "lvl": 2
      },
      {
        "ch": "活泼",
        "en": "lively / vivacious / active",
        "lvl": 0
      },
      {
        "ch": "活力",
        "en": "energy / vigor",
        "lvl": 0
      },
      {
        "ch": "起动",
        "en": "start",
        "lvl": 0
      },
      {
        "ch": "动听",
        "en": "pleasant to listen",
        "lvl": 0
      },
      {
        "ch": "动人",
        "en": "moving / touching",
        "lvl": 0
      },
      {
        "ch": "动身",
        "en": "set out on a journey",
        "lvl": 0
      },
      {
        "ch": "运气",
        "en": "luck / fortune",
        "lvl": 0
      },
      {
        "ch": "幸运",
        "en": "fortunate / luck",
        "lvl": 0
      },
      {
        "ch": "运用",
        "en": "utilize / apply / usage",
        "lvl": 0
      },
      {
        "ch": "谈吐",
        "en": "style of conversation",
        "lvl": 0
      },
      {
        "ch": "谈天",
        "en": "chat",
        "lvl": 0
      },
      {
        "ch": "谈判",
        "en": "negotiate / negotiation",
        "lvl": 0
      },
      {
        "ch": "谈话",
        "en": "talk / conversation",
        "lvl": 0
      },
      {
        "ch": "好话",
        "en": "word of praise / friendly advice",
        "lvl": 0
      },
      {
        "ch": "大话",
        "en": "brag / boast",
        "lvl": 0
      },
      {
        "ch": "听话",
        "en": "obedient",
        "lvl": 0
      },
      {
        "ch": "谎话",
        "en": "lie / fabrication",
        "lvl": 0
      },
      {
        "ch": "帮忙",
        "en": "help / do a favor",
        "lvl": 1
      },
      {
        "ch": "帮倒忙",
        "en": "make things worse with one's help",
        "lvl": 0
      },
      {
        "ch": "帮助",
        "en": "help / assist(ance)",
        "lvl": 1
      },
      {
        "ch": "帮手",
        "en": "helper / assistant",
        "lvl": 0
      },
      {
        "ch": "助手",
        "en": "assistant / helper",
        "lvl": 0
      },
      {
        "ch": "助兴",
        "en": "add to the fun / liven up",
        "lvl": 0
      },
      {
        "ch": "助学金",
        "en": "scholarship / stipend",
        "lvl": 0
      },
      {
        "ch": "忙人",
        "en": "busy person",
        "lvl": 0
      },
      {
        "ch": "忙着",
        "en": "be occupied with sth",
        "lvl": 0
      },
      {
        "ch": "忙碌",
        "en": "busy / bustle",
        "lvl": 0
      },
      {
        "ch": "慌忙",
        "en": "in a rush / hurry",
        "lvl": 0
      },
      {
        "ch": "懂得",
        "en": "understand / comprehend",
        "lvl": 0
      },
      {
        "ch": "懂事",
        "en": "sensible / thoughtful / intelligent",
        "lvl": 0
      },
      {
        "ch": "听懂",
        "en": "understand (by hearing)",
        "lvl": 0
      },
      {
        "ch": "看懂",
        "en": "understand (by reading)",
        "lvl": 0
      },
      {
        "ch": "求之不得",
        "en": "exactly what one's been looking for",
        "lvl": 0
      },
      {
        "ch": "求教",
        "en": "seek advice",
        "lvl": 0
      },
      {
        "ch": "求情",
        "en": "plead / ask for a favor",
        "lvl": 0
      },
      {
        "ch": "要求",
        "en": "require / demand",
        "lvl": 1
      },
      {
        "ch": "需求",
        "en": "requirement / demand",
        "lvl": 0
      },
      {
        "ch": "需要",
        "en": "need / require / demand",
        "lvl": 1
      },
      {
        "ch": "找事",
        "en": "look for a job",
        "lvl": 0
      },
      {
        "ch": "找到",
        "en": "turn up / have found",
        "lvl": 0
      },
      {
        "ch": "找钱",
        "en": "give change",
        "lvl": 0
      },
      {
        "ch": "麻烦",
        "en": "inconvenient / trouble / bother",
        "lvl": 2
      },
      {
        "ch": "找麻烦",
        "en": "look for trouble",
        "lvl": 2
      },
      {
        "ch": "找对象",
        "en": "look for a partner",
        "lvl": 0
      },
      {
        "ch": "对象",
        "en": "partner",
        "lvl": 0
      },
      {
        "ch": "教诲",
        "en": "instruct",
        "lvl": 0
      },
      {
        "ch": "教书",
        "en": "teach",
        "lvl": 0
      },
      {
        "ch": "教课",
        "en": "teach / lecture",
        "lvl": 0
      },
      {
        "ch": "教学",
        "en": "teaching / education",
        "lvl": 0
      },
      {
        "ch": "教室",
        "en": "classroom",
        "lvl": 0
      },
      {
        "ch": "教师",
        "en": "teacher",
        "lvl": 1
      },
      {
        "ch": "教堂",
        "en": "church / chapel",
        "lvl": 0
      },
      {
        "ch": "教会",
        "en": "church",
        "lvl": 0
      },
      {
        "ch": "教育",
        "en": "education / educate",
        "lvl": 2
      },
      {
        "ch": "介绍",
        "en": "introduce / introduction",
        "lvl": 1
      },
      {
        "ch": "跟上",
        "en": "catch up with / keep pace with",
        "lvl": 0
      },
      {
        "ch": "跟着",
        "en": "follow",
        "lvl": 0
      },
      {
        "ch": "得罪",
        "en": "offend",
        "lvl": 0
      },
      {
        "ch": "得意",
        "en": "proud of oneself / complacent",
        "lvl": 2
      },
      {
        "ch": "之中",
        "en": "inside / among",
        "lvl": 0
      },
      {
        "ch": "之后",
        "en": "later / afterward",
        "lvl": 0
      },
      {
        "ch": "之前",
        "en": "before / prior to / previously",
        "lvl": 0
      },
      {
        "ch": "之间",
        "en": "between / inter",
        "lvl": 0
      },
      {
        "ch": "之一",
        "en": "one out of a multitude",
        "lvl": 0
      },
      {
        "ch": "或是",
        "en": "or",
        "lvl": 0
      },
      {
        "ch": "或许",
        "en": "perhaps / maybe",
        "lvl": 0
      },
      {
        "ch": "或者",
        "en": "or / possibly",
        "lvl": 1
      },
      {
        "ch": "作者",
        "en": "author / writer",
        "lvl": 2
      },
      {
        "ch": "因循",
        "en": "(stuck) in a rut / procrastinate",
        "lvl": 0
      },
      {
        "ch": "因此",
        "en": "therefore / thus",
        "lvl": 2
      },
      {
        "ch": "因为",
        "en": "because / owing to",
        "lvl": 0
      },
      {
        "ch": "原因",
        "en": "reason / cause",
        "lvl": 2
      },
      {
        "ch": "为期",
        "en": "last a period / duration",
        "lvl": 0
      },
      {
        "ch": "为了",
        "en": "in order to / for",
        "lvl": 1
      },
      {
        "ch": "为难",
        "en": "feel awkward / make things difficult",
        "lvl": 0
      },
      {
        "ch": "拿主意",
        "en": "make a decision / make up one's mind",
        "lvl": 0
      },
      {
        "ch": "拿手",
        "en": "good at",
        "lvl": 0
      },
      {
        "ch": "着眼",
        "en": "have one's eyes on (a goal) / concentrate",
        "lvl": 0
      },
      {
        "ch": "着重",
        "en": "stress / put emphasis on",
        "lvl": 0
      },
      {
        "ch": "着急",
        "en": "worry / feel anxious",
        "lvl": 1
      },
      {
        "ch": "着凉",
        "en": "catch a chill",
        "lvl": 0
      },
      {
        "ch": "着想",
        "en": "consider / give thought",
        "lvl": 0
      },
      {
        "ch": "天才",
        "en": "genius / talent / talented",
        "lvl": 0
      },
      {
        "ch": "方才",
        "en": "just now",
        "lvl": 0
      },
      {
        "ch": "人才",
        "en": "talented person",
        "lvl": 0
      },
      {
        "ch": "才能",
        "en": "talent / ability",
        "lvl": 0
      },
      {
        "ch": "才华",
        "en": "literary or artistic talent",
        "lvl": 0
      },
      {
        "ch": "才识",
        "en": "ability & insight",
        "lvl": 0
      },
      {
        "ch": "才气",
        "en": "talent (usually literary or artistic)",
        "lvl": 0
      },
      {
        "ch": "于今",
        "en": "up to the present",
        "lvl": 0
      },
      {
        "ch": "于是",
        "en": "as a result / thus / thereupon",
        "lvl": 2
      },
      {
        "ch": "身上",
        "en": "on the body / with one",
        "lvl": 0
      },
      {
        "ch": "身材",
        "en": "figure",
        "lvl": 0
      },
      {
        "ch": "身段",
        "en": "figure",
        "lvl": 0
      },
      {
        "ch": "身高",
        "en": "stature / height",
        "lvl": 0
      },
      {
        "ch": "身体",
        "en": "body / health",
        "lvl": 1
      },
      {
        "ch": "体贴",
        "en": "considerate",
        "lvl": 0
      },
      {
        "ch": "体力",
        "en": "physical strength",
        "lvl": 0
      },
      {
        "ch": "体温",
        "en": "body temperature",
        "lvl": 0
      },
      {
        "ch": "病人",
        "en": "patient",
        "lvl": 0
      },
      {
        "ch": "病情",
        "en": "patient's condition",
        "lvl": 0
      },
      {
        "ch": "病历",
        "en": "medical record",
        "lvl": 0
      },
      {
        "ch": "病假",
        "en": "sick leave",
        "lvl": 0
      },
      {
        "ch": "头脑",
        "en": "mind / brain / gist / clue",
        "lvl": 0
      },
      {
        "ch": "头部",
        "en": "head",
        "lvl": 0
      },
      {
        "ch": "头等",
        "en": "first class / prime",
        "lvl": 0
      },
      {
        "ch": "头发",
        "en": "hair",
        "lvl": 1
      },
      {
        "ch": "背疼",
        "en": "back pain",
        "lvl": 0
      },
      {
        "ch": "牙疼",
        "en": "toothache",
        "lvl": 0
      },
      {
        "ch": "头疼",
        "en": "headache",
        "lvl": 0
      },
      {
        "ch": "头痛",
        "en": "headache",
        "lvl": 0
      },
      {
        "ch": "手套",
        "en": "gloves",
        "lvl": 0
      },
      {
        "ch": "手气",
        "en": "luck (in gambling)",
        "lvl": 0
      },
      {
        "ch": "手艺",
        "en": "craft / craftsmanship",
        "lvl": 0
      },
      {
        "ch": "手续",
        "en": "procedure / formalities",
        "lvl": 0
      },
      {
        "ch": "手纸",
        "en": "toilet paper",
        "lvl": 0
      },
      {
        "ch": "手机",
        "en": "cell phone",
        "lvl": 1
      },
      {
        "ch": "手表",
        "en": "wristwatch",
        "lvl": 1
      },
      {
        "ch": "痛快",
        "en": "delighted / to one's heart's content",
        "lvl": 0
      },
      {
        "ch": "痛苦",
        "en": "suffering / painful",
        "lvl": 0
      },
      {
        "ch": "痛哭",
        "en": "cry bitterly",
        "lvl": 0
      },
      {
        "ch": "疼痛",
        "en": "pain / ache",
        "lvl": 0
      },
      {
        "ch": "心痛",
        "en": "feel distressed about / heartache",
        "lvl": 0
      },
      {
        "ch": "痛心",
        "en": "distressed / grieved",
        "lvl": 0
      },
      {
        "ch": "心理",
        "en": "psychology / mentality",
        "lvl": 0
      },
      {
        "ch": "心情",
        "en": "mood / frame of mind",
        "lvl": 2
      },
      {
        "ch": "心疼",
        "en": "feel sorry / distressed",
        "lvl": 0
      },
      {
        "ch": "午睡",
        "en": "afternoon nap",
        "lvl": 0
      },
      {
        "ch": "睡觉",
        "en": "sleep",
        "lvl": 1
      },
      {
        "ch": "睡眠",
        "en": "sleep",
        "lvl": 0
      },
      {
        "ch": "睡懒觉",
        "en": "sleep in",
        "lvl": 0
      },
      {
        "ch": "睡衣",
        "en": "nightdress / pajamas",
        "lvl": 0
      },
      {
        "ch": "咖啡",
        "en": "coffee",
        "lvl": 1
      },
      {
        "ch": "觉得",
        "en": "think / feel / sense",
        "lvl": 1
      },
      {
        "ch": "踢足球",
        "en": "play football",
        "lvl": 1
      },
      {
        "ch": "足球",
        "en": "football",
        "lvl": 1
      },
      {
        "ch": "充足",
        "en": "adequate / ample / abundant / enough",
        "lvl": 0
      },
      {
        "ch": "足够",
        "en": "sufficient / enough",
        "lvl": 0
      },
      {
        "ch": "足以",
        "en": "sufficient",
        "lvl": 0
      },
      {
        "ch": "满足",
        "en": "satisfy / satisfaction",
        "lvl": 0
      },
      {
        "ch": "满意",
        "en": "(be) satisfied / satisfaction",
        "lvl": 1
      },
      {
        "ch": "跳舞",
        "en": "dance",
        "lvl": 1
      },
      {
        "ch": "瘦弱",
        "en": "emaciated / thin & weak",
        "lvl": 0
      },
      {
        "ch": "瘦小",
        "en": "petite",
        "lvl": 0
      },
      {
        "ch": "瘦肉",
        "en": "lean meat",
        "lvl": 0
      },
      {
        "ch": "肥胖",
        "en": "fat",
        "lvl": 0
      },
      {
        "ch": "肥瘦",
        "en": "the girth of a garment",
        "lvl": 0
      },
      {
        "ch": "肥大",
        "en": "loose / hypertrophy",
        "lvl": 0
      },
      {
        "ch": "肥沃",
        "en": "fertile / rich",
        "lvl": 0
      },
      {
        "ch": "应该可以的",
        "en": "should be ok",
        "lvl": 0
      },
      {
        "ch": "应该",
        "en": "should / ought to",
        "lvl": 1
      },
      {
        "ch": "应当",
        "en": "should / ought to",
        "lvl": 0
      },
      {
        "ch": "该当",
        "en": "deserve",
        "lvl": 0
      },
      {
        "ch": "应用",
        "en": "apply / application",
        "lvl": 0
      },
      {
        "ch": "应付",
        "en": "deel with / cope",
        "lvl": 0
      },
      {
        "ch": "应酬",
        "en": "social engagement",
        "lvl": 0
      },
      {
        "ch": "应得",
        "en": "deserve",
        "lvl": 0
      },
      {
        "ch": "活该",
        "en": "exclamation (serve one right)",
        "lvl": 0
      },
      {
        "ch": "该死",
        "en": "exclamation (showing anger) / damn it",
        "lvl": 0
      },
      {
        "ch": "感觉",
        "en": "feel(ing) / perception",
        "lvl": 2
      },
      {
        "ch": "感冒",
        "en": "catch cold / common cold",
        "lvl": 1
      },
      {
        "ch": "感情",
        "en": "emotion / affection",
        "lvl": 2
      },
      {
        "ch": "情节",
        "en": "plot / circumstances",
        "lvl": 0
      },
      {
        "ch": "情况",
        "en": "situation / circumstances",
        "lvl": 2
      },
      {
        "ch": "情趣",
        "en": "appeal / interest / delight",
        "lvl": 0
      },
      {
        "ch": "情人",
        "en": "lover / sweetheart",
        "lvl": 0
      },
      {
        "ch": "连累",
        "en": "get one into trouble",
        "lvl": 0
      },
      {
        "ch": "日积月累",
        "en": "accumulate over a long period of time",
        "lvl": 0
      },
      {
        "ch": "积累",
        "en": "accumulate / accumulation / accumulative",
        "lvl": 2
      },
      {
        "ch": "累赘",
        "en": "burden / nuisance",
        "lvl": 0
      },
      {
        "ch": "死板",
        "en": "rigid / inflexible",
        "lvl": 0
      },
      {
        "ch": "死记",
        "en": "cram / memorize mechanically",
        "lvl": 0
      },
      {
        "ch": "死心",
        "en": "give up / drop the matter",
        "lvl": 0
      },
      {
        "ch": "左思右想",
        "en": "think from different angles",
        "lvl": 0
      },
      {
        "ch": "思路",
        "en": "train of thought / reasoning",
        "lvl": 0
      },
      {
        "ch": "思想",
        "en": "thought / ideology / ideological",
        "lvl": 0
      },
      {
        "ch": "思考",
        "en": "think deeply / ponder over",
        "lvl": 0
      },
      {
        "ch": "思索",
        "en": "think deeply / ponder over",
        "lvl": 0
      },
      {
        "ch": "理想",
        "en": "ideal / perfect(ion)",
        "lvl": 2
      },
      {
        "ch": "理由",
        "en": "reason / grounds",
        "lvl": 0
      },
      {
        "ch": "理解",
        "en": "understand / comprehend / comprehension",
        "lvl": 2
      },
      {
        "ch": "做梦",
        "en": "dream",
        "lvl": 0
      },
      {
        "ch": "梦想",
        "en": "fantasize / dream",
        "lvl": 0
      },
      {
        "ch": "梦见",
        "en": "dream about / see in a dream",
        "lvl": 0
      },
      {
        "ch": "重要",
        "en": "important / significant",
        "lvl": 1
      },
      {
        "ch": "重视",
        "en": "importance / attach importance to",
        "lvl": 2
      },
      {
        "ch": "重点",
        "en": "focal point / focus / key",
        "lvl": 2
      },
      {
        "ch": "重复",
        "en": "repeat / duplicate",
        "lvl": 2
      },
      {
        "ch": "惯例",
        "en": "convention / usual practice",
        "lvl": 0
      },
      {
        "ch": "惯坏",
        "en": "spoil (a child)",
        "lvl": 0
      },
      {
        "ch": "习惯",
        "en": "custom / habit / be used to",
        "lvl": 1
      },
      {
        "ch": "刷牙",
        "en": "brush teeth",
        "lvl": 1
      },
      {
        "ch": "洗刷",
        "en": "wash / scrub",
        "lvl": 0
      },
      {
        "ch": "洗雪",
        "en": "erase / wipe out",
        "lvl": 0
      },
      {
        "ch": "洗澡",
        "en": "bathe / take a shower",
        "lvl": 1
      },
      {
        "ch": "洗发水",
        "en": "shampoo",
        "lvl": 0
      },
      {
        "ch": "洗手间",
        "en": "toilet / washroom",
        "lvl": 1
      },
      {
        "ch": "洗衣机",
        "en": "washing machine",
        "lvl": 0
      },
      {
        "ch": "性关系",
        "en": "sexual relation",
        "lvl": 0
      },
      {
        "ch": "关系",
        "en": "relationship / connection",
        "lvl": 1
      },
      {
        "ch": "关联",
        "en": "relationship / affiliated / related",
        "lvl": 0
      },
      {
        "ch": "关于",
        "en": "concerning / with regard to",
        "lvl": 1
      },
      {
        "ch": "关上",
        "en": "close / shut / turn off",
        "lvl": 0
      },
      {
        "ch": "关门",
        "en": "close the door",
        "lvl": 0
      },
      {
        "ch": "关心",
        "en": "attention / concern(ed) / care",
        "lvl": 1
      },
      {
        "ch": "关灯",
        "en": "turn off the light",
        "lvl": 0
      },
      {
        "ch": "鬼把戏",
        "en": "dirty trick / sinister plot",
        "lvl": 0
      },
      {
        "ch": "把戏",
        "en": "acrobatics / cheap trick / game",
        "lvl": 0
      },
      {
        "ch": "把握",
        "en": "certainty / grasp / seize",
        "lvl": 2
      },
      {
        "ch": "把柄",
        "en": "handle",
        "lvl": 0
      },
      {
        "ch": "把子",
        "en": "handle",
        "lvl": 0
      },
      {
        "ch": "把手",
        "en": "knob / grip",
        "lvl": 0
      },
      {
        "ch": "手把",
        "en": "handle",
        "lvl": 0
      },
      {
        "ch": "发火",
        "en": "get angry / lose one's temper",
        "lvl": 0
      },
      {
        "ch": "发烧",
        "en": "(have a) fever",
        "lvl": 1
      },
      {
        "ch": "发票",
        "en": "receipt / invoice",
        "lvl": 0
      },
      {
        "ch": "发生",
        "en": "happen / occur(rence)",
        "lvl": 2
      },
      {
        "ch": "发言",
        "en": "make a speech / remark / express",
        "lvl": 0
      },
      {
        "ch": "理发",
        "en": "haircut / barber",
        "lvl": 2
      },
      {
        "ch": "台灯",
        "en": "desk lamp",
        "lvl": 0
      },
      {
        "ch": "电灯",
        "en": "electric light",
        "lvl": 0
      },
      {
        "ch": "灯光",
        "en": "stage lighting",
        "lvl": 0
      },
      {
        "ch": "灯笼",
        "en": "lantern",
        "lvl": 0
      },
      {
        "ch": "灯火",
        "en": "lights",
        "lvl": 0
      },
      {
        "ch": "灯火管制",
        "en": "blackout",
        "lvl": 0
      },
      {
        "ch": "灯泡",
        "en": "lightbulb",
        "lvl": 0
      },
      {
        "ch": "床单",
        "en": "sheet / cover",
        "lvl": 0
      },
      {
        "ch": "单人床",
        "en": "single bed",
        "lvl": 0
      },
      {
        "ch": "农药",
        "en": "pesticide / farm chemical",
        "lvl": 0
      },
      {
        "ch": "药物",
        "en": "pharmaceutical / medicine",
        "lvl": 0
      },
      {
        "ch": "药店",
        "en": "pharmacy / drugstore",
        "lvl": 0
      },
      {
        "ch": "药房",
        "en": "pharmacy / drugstore",
        "lvl": 0
      },
      {
        "ch": "药方",
        "en": "prescription",
        "lvl": 0
      },
      {
        "ch": "药材",
        "en": "medical materials",
        "lvl": 0
      },
      {
        "ch": "药水",
        "en": "liquid medicine",
        "lvl": 0
      },
      {
        "ch": "舒畅",
        "en": "entirely free from worry / happy",
        "lvl": 0
      },
      {
        "ch": "舒心",
        "en": "comfortable / happy",
        "lvl": 0
      },
      {
        "ch": "舒服",
        "en": "comfortable / feeling well",
        "lvl": 1
      },
      {
        "ch": "舒适",
        "en": "comfortable / cozy",
        "lvl": 0
      },
      {
        "ch": "蔬菜",
        "en": "vegetable",
        "lvl": 0
      },
      {
        "ch": "菜馆",
        "en": "restaurant",
        "lvl": 0
      },
      {
        "ch": "菠菜",
        "en": "spinach",
        "lvl": 0
      },
      {
        "ch": "菜单",
        "en": "menu",
        "lvl": 1
      },
      {
        "ch": "红酒",
        "en": "red wine",
        "lvl": 2
      },
      {
        "ch": "葡萄酒",
        "en": "wine",
        "lvl": 2
      },
      {
        "ch": "葡萄",
        "en": "grape",
        "lvl": 2
      },
      {
        "ch": "啤酒",
        "en": "beer",
        "lvl": 1
      },
      {
        "ch": "酒量",
        "en": "capacity for liquor / how much one can drink",
        "lvl": 0
      },
      {
        "ch": "酒后",
        "en": "under the influence of liquor",
        "lvl": 0
      },
      {
        "ch": "酒肉朋友",
        "en": "drinking buddy / fair-weather friend",
        "lvl": 0
      },
      {
        "ch": "参加",
        "en": "participate",
        "lvl": 1
      },
      {
        "ch": "饮料",
        "en": "drink / beverage",
        "lvl": 1
      },
      {
        "ch": "饮食",
        "en": "diet / food & drink",
        "lvl": 0
      },
      {
        "ch": "饮用",
        "en": "drink / drinkable",
        "lvl": 0
      },
      {
        "ch": "鱼肉",
        "en": "fish meat",
        "lvl": 0
      },
      {
        "ch": "鸡肉",
        "en": "chicken meat",
        "lvl": 0
      },
      {
        "ch": "鸭肉",
        "en": "duck meat",
        "lvl": 0
      },
      {
        "ch": "猪肉",
        "en": "pork",
        "lvl": 0
      },
      {
        "ch": "羊肉",
        "en": "mutton / lamb",
        "lvl": 1
      },
      {
        "ch": "牛肉",
        "en": "beef",
        "lvl": 0
      },
      {
        "ch": "肉片",
        "en": "sliced meat",
        "lvl": 0
      },
      {
        "ch": "肉丁",
        "en": "diced meat",
        "lvl": 0
      },
      {
        "ch": "肉丝",
        "en": "shredded meat",
        "lvl": 0
      },
      {
        "ch": "肉感",
        "en": "sexy",
        "lvl": 0
      },
      {
        "ch": "肉类",
        "en": "meat",
        "lvl": 0
      },
      {
        "ch": "肉食",
        "en": "meat",
        "lvl": 0
      },
      {
        "ch": "肉体",
        "en": "flesh / body",
        "lvl": 0
      },
      {
        "ch": "血肉",
        "en": "flesh",
        "lvl": 0
      },
      {
        "ch": "肌肉",
        "en": "muscle / flesh",
        "lvl": 0
      },
      {
        "ch": "米粉",
        "en": "rice flour",
        "lvl": 0
      },
      {
        "ch": "米酒",
        "en": "rice wine",
        "lvl": 0
      },
      {
        "ch": "厘米",
        "en": "centimeter",
        "lvl": 0
      },
      {
        "ch": "坐下",
        "en": "sit down",
        "lvl": 0
      },
      {
        "ch": "坐不下",
        "en": "have not enough seats",
        "lvl": 0
      },
      {
        "ch": "坐班",
        "en": "work office hours / on duty",
        "lvl": 0
      },
      {
        "ch": "座位",
        "en": "seat / place",
        "lvl": 2
      },
      {
        "ch": "单位",
        "en": "work group / unit",
        "lvl": 0
      },
      {
        "ch": "位于",
        "en": "situated / located",
        "lvl": 0
      },
      {
        "ch": "个位",
        "en": "one's place in a number / the units place (or column) in the decimal system",
        "lvl": 0
      },
      {
        "ch": "位置",
        "en": "location / position",
        "lvl": 0
      },
      {
        "ch": "岗位",
        "en": "post / job",
        "lvl": 0
      },
      {
        "ch": "杯子",
        "en": "cup / glass",
        "lvl": 1
      },
      {
        "ch": "举杯",
        "en": "toast sb / drink a toast",
        "lvl": 0
      },
      {
        "ch": "干杯",
        "en": "drink a toast (dry the cup)",
        "lvl": 2
      },
      {
        "ch": "美味",
        "en": "delicious / delicacy",
        "lvl": 0
      },
      {
        "ch": "味道",
        "en": "taste / flavor",
        "lvl": 2
      },
      {
        "ch": "味精",
        "en": "gourmet powder (MSG)",
        "lvl": 0
      },
      {
        "ch": "吃够",
        "en": "have enough (food)",
        "lvl": 0
      },
      {
        "ch": "受够",
        "en": "have enough / be fed up with",
        "lvl": 0
      },
      {
        "ch": "够大",
        "en": "quite big / big enough",
        "lvl": 0
      },
      {
        "ch": "够了",
        "en": "sufficient / enough",
        "lvl": 0
      },
      {
        "ch": "够格",
        "en": "qualified / presentable",
        "lvl": 0
      },
      {
        "ch": "受伤",
        "en": "be injured / wounded",
        "lvl": 0
      },
      {
        "ch": "受害",
        "en": "suffer damage/injury / injured / damaged / killed",
        "lvl": 0
      },
      {
        "ch": "受益",
        "en": "profit / benefit from",
        "lvl": 0
      },
      {
        "ch": "受灾",
        "en": "bear a disaster / be hit by a natural calamity",
        "lvl": 0
      },
      {
        "ch": "受不了",
        "en": "unbearable / can't stand",
        "lvl": 2
      },
      {
        "ch": "一共",
        "en": "altogether",
        "lvl": 1
      },
      {
        "ch": "共有",
        "en": "have altogether / share",
        "lvl": 0
      },
      {
        "ch": "共同",
        "en": "common / collaborative / together",
        "lvl": 0
      },
      {
        "ch": "共和国",
        "en": "republic",
        "lvl": 0
      },
      {
        "ch": "节假日",
        "en": "public holiday",
        "lvl": 0
      },
      {
        "ch": "节日",
        "en": "festival / holiday",
        "lvl": 1
      },
      {
        "ch": "节目",
        "en": "program / show",
        "lvl": 1
      },
      {
        "ch": "节食",
        "en": "go on a diet",
        "lvl": 0
      },
      {
        "ch": "季节",
        "en": "season / period",
        "lvl": 1
      },
      {
        "ch": "季节性",
        "en": "seasonal",
        "lvl": 1
      },
      {
        "ch": "亲爱",
        "en": "dear / darling",
        "lvl": 0
      },
      {
        "ch": "爱情",
        "en": "love / romance",
        "lvl": 2
      },
      {
        "ch": "爱好",
        "en": "hobby / be fond of / favorite",
        "lvl": 1
      },
      {
        "ch": "爱护",
        "en": "take care of / cherish / love & protect",
        "lvl": 2
      },
      {
        "ch": "爱惜",
        "en": "cherish / treasure",
        "lvl": 2
      },
      {
        "ch": "交给",
        "en": "hand over / deliver",
        "lvl": 0
      },
      {
        "ch": "供给",
        "en": "supply / provide / furnish",
        "lvl": 0
      },
      {
        "ch": "给以",
        "en": "give / grant",
        "lvl": 0
      },
      {
        "ch": "给予",
        "en": "give / render / show respect",
        "lvl": 0
      },
      {
        "ch": "自给",
        "en": "self-sufficient / self-reliant",
        "lvl": 0
      },
      {
        "ch": "婚礼",
        "en": "wedding ceremony",
        "lvl": 0
      },
      {
        "ch": "礼拜",
        "en": "week / religious ceremony / worship",
        "lvl": 0
      },
      {
        "ch": "礼貌",
        "en": "courtesy / manners",
        "lvl": 2
      },
      {
        "ch": "礼节",
        "en": "etiquette",
        "lvl": 0
      },
      {
        "ch": "礼仪",
        "en": "etiquette / ceremony",
        "lvl": 0
      },
      {
        "ch": "礼品",
        "en": "gift / present",
        "lvl": 0
      },
      {
        "ch": "礼物",
        "en": "gift / present",
        "lvl": 1
      },
      {
        "ch": "物品",
        "en": "goods",
        "lvl": 0
      },
      {
        "ch": "物价",
        "en": "commodity price",
        "lvl": 0
      },
      {
        "ch": "食物",
        "en": "food",
        "lvl": 0
      },
      {
        "ch": "玩笑",
        "en": "joke / jest",
        "lvl": 0
      },
      {
        "ch": "古玩",
        "en": "antique",
        "lvl": 0
      },
      {
        "ch": "玩具",
        "en": "toy",
        "lvl": 0
      },
      {
        "ch": "玩意儿",
        "en": "(play)thing",
        "lvl": 0
      },
      {
        "ch": "音乐",
        "en": "music",
        "lvl": 1
      },
      {
        "ch": "音乐会",
        "en": "concert",
        "lvl": 0
      },
      {
        "ch": "乐器",
        "en": "musical instrument",
        "lvl": 0
      },
      {
        "ch": "乐观",
        "en": "optimism / hopeful",
        "lvl": 0
      },
      {
        "ch": "声音",
        "en": "voice / sound",
        "lvl": 1
      },
      {
        "ch": "噪音",
        "en": "noise / rumble",
        "lvl": 0
      },
      {
        "ch": "音响",
        "en": "stereo set / acoustics",
        "lvl": 0
      },
      {
        "ch": "非常",
        "en": "very / extraordinary / great",
        "lvl": 1
      },
      {
        "ch": "非洲",
        "en": "africa",
        "lvl": 0
      },
      {
        "ch": "南非",
        "en": "south africa",
        "lvl": 0
      },
      {
        "ch": "北非",
        "en": "north africa",
        "lvl": 0
      },
      {
        "ch": "非但",
        "en": "not only",
        "lvl": 0
      },
      {
        "ch": "非法",
        "en": "illegal",
        "lvl": 0
      },
      {
        "ch": "常常",
        "en": "often / usually",
        "lvl": 0
      },
      {
        "ch": "常识",
        "en": "general knowledge",
        "lvl": 0
      },
      {
        "ch": "常见",
        "en": "common",
        "lvl": 0
      },
      {
        "ch": "平常",
        "en": "common / usually / ordinary / mediocre",
        "lvl": 0
      },
      {
        "ch": "自从",
        "en": "(ever) since",
        "lvl": 0
      },
      {
        "ch": "自己",
        "en": "self / own",
        "lvl": 1
      },
      {
        "ch": "自行车",
        "en": "bicycle",
        "lvl": 1
      },
      {
        "ch": "自由",
        "en": "free / freedom / liberty",
        "lvl": 0
      },
      {
        "ch": "来自",
        "en": "come from",
        "lvl": 2
      },
      {
        "ch": "功夫",
        "en": "Kung fu / skill / effort / labor",
        "lvl": 2
      },
      {
        "ch": "成功",
        "en": "succeed / success",
        "lvl": 2
      },
      {
        "ch": "功课",
        "en": "homework",
        "lvl": 0
      },
      {
        "ch": "功能",
        "en": "function",
        "lvl": 0
      },
      {
        "ch": "功用",
        "en": "function",
        "lvl": 0
      },
      {
        "ch": "用功",
        "en": "diligence / hardworking",
        "lvl": 0
      },
      {
        "ch": "利益",
        "en": "benefit / interest / profit",
        "lvl": 0
      },
      {
        "ch": "利用",
        "en": "utilize / take advantage of / exploit",
        "lvl": 0
      },
      {
        "ch": "利落",
        "en": "neat / in order / agile",
        "lvl": 0
      },
      {
        "ch": "利害",
        "en": "terrible / formidable",
        "lvl": 0
      },
      {
        "ch": "较量",
        "en": "put oneself against sb / compete with sb",
        "lvl": 0
      },
      {
        "ch": "较为",
        "en": "comparatively / relatively",
        "lvl": 0
      },
      {
        "ch": "相较",
        "en": "compare",
        "lvl": 0
      },
      {
        "ch": "变化",
        "en": "change / diversification",
        "lvl": 1
      },
      {
        "ch": "改变",
        "en": "change / alter",
        "lvl": 2
      },
      {
        "ch": "改革",
        "en": "reform",
        "lvl": 0
      },
      {
        "ch": "改掉",
        "en": "give up / drop",
        "lvl": 0
      },
      {
        "ch": "改正",
        "en": "correction / correct / amend",
        "lvl": 0
      },
      {
        "ch": "正确",
        "en": "correct / proper",
        "lvl": 2
      },
      {
        "ch": "正常",
        "en": "normal / regular / ordinary",
        "lvl": 2
      },
      {
        "ch": "正好",
        "en": "just in time / happen / chance / it just so happens that",
        "lvl": 2
      },
      {
        "ch": "正巧",
        "en": "just in time / by chance",
        "lvl": 0
      },
      {
        "ch": "正在",
        "en": "while / in the process of",
        "lvl": 1
      },
      {
        "ch": "记者",
        "en": "reporter / journalist",
        "lvl": 2
      },
      {
        "ch": "记住",
        "en": "bear in mind / learn by heart",
        "lvl": 0
      },
      {
        "ch": "记起",
        "en": "recall",
        "lvl": 0
      },
      {
        "ch": "忘记",
        "en": "forget",
        "lvl": 1
      },
      {
        "ch": "记得",
        "en": "remember / recall",
        "lvl": 1
      },
      {
        "ch": "记性",
        "en": "memory",
        "lvl": 0
      },
      {
        "ch": "记忆",
        "en": "memory / remember",
        "lvl": 0
      },
      {
        "ch": "预备",
        "en": "get ready",
        "lvl": 0
      },
      {
        "ch": "预订",
        "en": "place an order",
        "lvl": 0
      },
      {
        "ch": "预约",
        "en": "reserve / reservation",
        "lvl": 0
      },
      {
        "ch": "预报",
        "en": "forecast / prediction / predict",
        "lvl": 0
      },
      {
        "ch": "预测",
        "en": "forecast / prediction / predict",
        "lvl": 0
      },
      {
        "ch": "预计",
        "en": "forecast / predict / estimate",
        "lvl": 0
      },
      {
        "ch": "楼下",
        "en": "downstairs",
        "lvl": 0
      },
      {
        "ch": "楼上",
        "en": "upstairs / loft",
        "lvl": 0
      },
      {
        "ch": "上楼",
        "en": "go upstairs",
        "lvl": 0
      },
      {
        "ch": "楼台",
        "en": "tower / tall building",
        "lvl": 0
      },
      {
        "ch": "楼道",
        "en": "hallway / corridor",
        "lvl": 0
      },
      {
        "ch": "楼厅",
        "en": "balcony / lobby",
        "lvl": 0
      },
      {
        "ch": "办公室",
        "en": "office / bureau",
        "lvl": 1
      },
      {
        "ch": "办法",
        "en": "means / method / way (of doing sth)",
        "lvl": 1
      },
      {
        "ch": "办理",
        "en": "handle / conduct / transact",
        "lvl": 2
      },
      {
        "ch": "办事",
        "en": "work / handle affairs",
        "lvl": 0
      },
      {
        "ch": "室内",
        "en": "indoor",
        "lvl": 0
      },
      {
        "ch": "室外",
        "en": "outdoor",
        "lvl": 0
      },
      {
        "ch": "卧室",
        "en": "bedroom",
        "lvl": 0
      },
      {
        "ch": "房子",
        "en": "house / building",
        "lvl": 0
      },
      {
        "ch": "房间",
        "en": "room / chamber",
        "lvl": 1
      },
      {
        "ch": "房东",
        "en": "landlord",
        "lvl": 2
      },
      {
        "ch": "房客",
        "en": "tenant",
        "lvl": 0
      },
      {
        "ch": "客房",
        "en": "guest room",
        "lvl": 0
      },
      {
        "ch": "厨房",
        "en": "kitchen",
        "lvl": 2
      },
      {
        "ch": "房屋",
        "en": "housing / building",
        "lvl": 0
      },
      {
        "ch": "屋子",
        "en": "house / room",
        "lvl": 0
      },
      {
        "ch": "屋顶",
        "en": "roof",
        "lvl": 0
      },
      {
        "ch": "屋里",
        "en": "inside the house/room",
        "lvl": 0
      },
      {
        "ch": "空间站",
        "en": "space station",
        "lvl": 0
      },
      {
        "ch": "空间",
        "en": "space / void",
        "lvl": 0
      },
      {
        "ch": "食堂",
        "en": "dining hall / canteen / cafeteria",
        "lvl": 0
      },
      {
        "ch": "会堂",
        "en": "meeting hall",
        "lvl": 0
      },
      {
        "ch": "堂堂",
        "en": "grand / magnificent",
        "lvl": 0
      },
      {
        "ch": "事情",
        "en": "matter / affair",
        "lvl": 1
      },
      {
        "ch": "事故",
        "en": "accident",
        "lvl": 0
      },
      {
        "ch": "事后",
        "en": "after the event / in retrospect / in hindsight",
        "lvl": 0
      },
      {
        "ch": "事先",
        "en": "in advance / beforehand",
        "lvl": 0
      },
      {
        "ch": "食品",
        "en": "food / provisions",
        "lvl": 0
      },
      {
        "ch": "食粮",
        "en": "grain / cereal",
        "lvl": 0
      },
      {
        "ch": "食言",
        "en": "eat one's words / break a promise",
        "lvl": 0
      },
      {
        "ch": "面子",
        "en": "face / outer surface / reputation",
        "lvl": 0
      },
      {
        "ch": "面貌",
        "en": "features / appearance",
        "lvl": 0
      },
      {
        "ch": "面目",
        "en": "appearance / facial features",
        "lvl": 0
      },
      {
        "ch": "面熟",
        "en": "look familiar",
        "lvl": 0
      },
      {
        "ch": "面积",
        "en": "area",
        "lvl": 0
      },
      {
        "ch": "从前",
        "en": "previously / once upon a time",
        "lvl": 0
      },
      {
        "ch": "从小",
        "en": "since childhood",
        "lvl": 0
      },
      {
        "ch": "离开",
        "en": "leave / depart / departure",
        "lvl": 1
      },
      {
        "ch": "离婚",
        "en": "divorce",
        "lvl": 0
      },
      {
        "ch": "离别",
        "en": "leave (on a journey) / part from",
        "lvl": 0
      },
      {
        "ch": "离题",
        "en": "digress",
        "lvl": 0
      },
      {
        "ch": "分离",
        "en": "segrigate / detach / detachment",
        "lvl": 0
      },
      {
        "ch": "长远",
        "en": "long-term / long-range",
        "lvl": 0
      },
      {
        "ch": "远大",
        "en": "far-reaching / lofty / ambitious",
        "lvl": 0
      },
      {
        "ch": "远处",
        "en": "distant place",
        "lvl": 0
      },
      {
        "ch": "远近",
        "en": "distance",
        "lvl": 0
      },
      {
        "ch": "远视",
        "en": "farsighted",
        "lvl": 0
      },
      {
        "ch": "近视",
        "en": "shortsighted",
        "lvl": 0
      },
      {
        "ch": "近便",
        "en": "close & convenient",
        "lvl": 0
      },
      {
        "ch": "近来",
        "en": "recently",
        "lvl": 0
      },
      {
        "ch": "附近",
        "en": "nearby / neighborhood / neighboring",
        "lvl": 1
      },
      {
        "ch": "过去",
        "en": "former / previous / go over",
        "lvl": 1
      },
      {
        "ch": "过时",
        "en": "outdate / stale",
        "lvl": 0
      },
      {
        "ch": "过失",
        "en": "fault / error / negligence",
        "lvl": 0
      },
      {
        "ch": "过敏",
        "en": "allergy / allergic",
        "lvl": 0
      },
      {
        "ch": "不过",
        "en": "however / only / mere(ly)",
        "lvl": 2
      },
      {
        "ch": "往往",
        "en": "often / frequently",
        "lvl": 2
      },
      {
        "ch": "往常",
        "en": "customary / habitually in the past",
        "lvl": 0
      },
      {
        "ch": "往返",
        "en": "round trip / to & fro / go back & forth",
        "lvl": 0
      },
      {
        "ch": "往来",
        "en": "dealings / contacts / go back & forth",
        "lvl": 0
      },
      {
        "ch": "交往",
        "en": "contact / hang out with / association / intercourse",
        "lvl": 0
      },
      {
        "ch": "向往",
        "en": "look forward to / yearn for",
        "lvl": 0
      },
      {
        "ch": "向来",
        "en": "all along / alwasy",
        "lvl": 0
      },
      {
        "ch": "向例",
        "en": "usual practice / custom",
        "lvl": 0
      },
      {
        "ch": "向导",
        "en": "guide",
        "lvl": 0
      },
      {
        "ch": "回来",
        "en": "come back / return",
        "lvl": 0
      },
      {
        "ch": "回去",
        "en": "go back / return",
        "lvl": 0
      },
      {
        "ch": "回头",
        "en": "look back / turn one's head",
        "lvl": 0
      },
      {
        "ch": "回归",
        "en": "return / retreat / regress",
        "lvl": 0
      },
      {
        "ch": "回答",
        "en": "answer / reply",
        "lvl": 1
      },
      {
        "ch": "返回",
        "en": "return / come/go back",
        "lvl": 0
      },
      {
        "ch": "出差",
        "en": "go on a business trip",
        "lvl": 2
      },
      {
        "ch": "出发",
        "en": "set off / departure",
        "lvl": 2
      },
      {
        "ch": "出错",
        "en": "make a mistake",
        "lvl": 0
      },
      {
        "ch": "出产",
        "en": "produce / output",
        "lvl": 0
      },
      {
        "ch": "出口",
        "en": "exit / export",
        "lvl": 0
      },
      {
        "ch": "出去",
        "en": "go out",
        "lvl": 0
      },
      {
        "ch": "进入",
        "en": "enter / join",
        "lvl": 0
      },
      {
        "ch": "入口",
        "en": "entrance",
        "lvl": 2
      },
      {
        "ch": "入学",
        "en": "enter school",
        "lvl": 0
      },
      {
        "ch": "入神",
        "en": "be entranced / fascinated",
        "lvl": 0
      },
      {
        "ch": "进口",
        "en": "import",
        "lvl": 0
      },
      {
        "ch": "进来",
        "en": "come in",
        "lvl": 0
      },
      {
        "ch": "进行",
        "en": "advance / conduct / in progress",
        "lvl": 2
      },
      {
        "ch": "进步",
        "en": "progress / improve / improvement",
        "lvl": 0
      },
      {
        "ch": "一直",
        "en": "straight / always / all along",
        "lvl": 1
      },
      {
        "ch": "直到",
        "en": "until",
        "lvl": 0
      },
      {
        "ch": "直接",
        "en": "direct(ness) / immediate / straight",
        "lvl": 2
      },
      {
        "ch": "世界",
        "en": "world",
        "lvl": 1
      },
      {
        "ch": "世界杯",
        "en": "world cup",
        "lvl": 1
      },
      {
        "ch": "世纪",
        "en": "century",
        "lvl": 2
      },
      {
        "ch": "世故",
        "en": "the ways of the world / sophisticated",
        "lvl": 0
      },
      {
        "ch": "世上",
        "en": "in the world / on earth",
        "lvl": 0
      },
      {
        "ch": "眼界",
        "en": "field of vision / scope / ken",
        "lvl": 0
      },
      {
        "ch": "外界",
        "en": "external / outside world",
        "lvl": 0
      },
      {
        "ch": "界限",
        "en": "boundary",
        "lvl": 0
      },
      {
        "ch": "界线",
        "en": "limits / bounds",
        "lvl": 0
      },
      {
        "ch": "新闻界",
        "en": "the press / the media",
        "lvl": 0
      },
      {
        "ch": "旅游",
        "en": "trip / travel / journey / tourism",
        "lvl": 1
      },
      {
        "ch": "旅程",
        "en": "journey / route / itinerary",
        "lvl": 0
      },
      {
        "ch": "旅馆",
        "en": "hotel",
        "lvl": 0
      },
      {
        "ch": "旅途",
        "en": "journey / trip",
        "lvl": 0
      },
      {
        "ch": "旅行",
        "en": "travel / tour / journey",
        "lvl": 2
      },
      {
        "ch": "旅客",
        "en": "traveler / passenger",
        "lvl": 0
      },
      {
        "ch": "游泳",
        "en": "swim",
        "lvl": 1
      },
      {
        "ch": "游戏",
        "en": "game / play",
        "lvl": 1
      },
      {
        "ch": "游人",
        "en": "tourist / visitor",
        "lvl": 0
      },
      {
        "ch": "游览",
        "en": "tour / go sightseeing / sightseeing",
        "lvl": 0
      },
      {
        "ch": "作假",
        "en": "counterfeit / falsify / cheat",
        "lvl": 0
      },
      {
        "ch": "假造",
        "en": "fake / counterfeit / fabricate (a story)",
        "lvl": 0
      },
      {
        "ch": "假如",
        "en": "if / in case / supposing",
        "lvl": 0
      },
      {
        "ch": "请假",
        "en": "ask for leave",
        "lvl": 1
      },
      {
        "ch": "先生",
        "en": "Mr / sir",
        "lvl": 0
      },
      {
        "ch": "先后",
        "en": "priority / one after another",
        "lvl": 0
      },
      {
        "ch": "先前",
        "en": "previously / before",
        "lvl": 0
      },
      {
        "ch": "先头",
        "en": "previously",
        "lvl": 0
      },
      {
        "ch": "忽然",
        "en": "sudden(ly)",
        "lvl": 0
      },
      {
        "ch": "然后",
        "en": "after(ward) / then",
        "lvl": 1
      },
      {
        "ch": "然而",
        "en": "but / however / yet",
        "lvl": 2
      },
      {
        "ch": "果然",
        "en": "really / sure enough / as expected",
        "lvl": 0
      },
      {
        "ch": "长处",
        "en": "forte / merit",
        "lvl": 0
      },
      {
        "ch": "长江",
        "en": "The Yangtze River",
        "lvl": 2
      },
      {
        "ch": "长度",
        "en": "length",
        "lvl": 0
      },
      {
        "ch": "长大",
        "en": "grow up",
        "lvl": 0
      },
      {
        "ch": "长辈",
        "en": "elder / senior",
        "lvl": 0
      },
      {
        "ch": "长短",
        "en": "length / duration",
        "lvl": 0
      },
      {
        "ch": "长期",
        "en": "long term",
        "lvl": 0
      },
      {
        "ch": "短处",
        "en": "shortcoming / one's weak points",
        "lvl": 0
      },
      {
        "ch": "短浅",
        "en": "narrow & shallow",
        "lvl": 0
      },
      {
        "ch": "短期",
        "en": "short term",
        "lvl": 0
      },
      {
        "ch": "千里",
        "en": "long distance / a thousand miles",
        "lvl": 0
      },
      {
        "ch": "千万",
        "en": "ten million / countless",
        "lvl": 2
      },
      {
        "ch": "千方百计",
        "en": "by every possible means / thousand ways, a hundred plans",
        "lvl": 0
      },
      {
        "ch": "千篇一律",
        "en": "routineer / stereotype & repetitive",
        "lvl": 0
      },
      {
        "ch": "万事",
        "en": "everything",
        "lvl": 0
      },
      {
        "ch": "万物",
        "en": "all living things / everything",
        "lvl": 0
      },
      {
        "ch": "万一",
        "en": "just in case / contingency",
        "lvl": 0
      },
      {
        "ch": "亿万",
        "en": "billions",
        "lvl": 0
      },
      {
        "ch": "飞机",
        "en": "airplane",
        "lvl": 1
      },
      {
        "ch": "飞机场",
        "en": "airport",
        "lvl": 1
      },
      {
        "ch": "机场",
        "en": "airport",
        "lvl": 1
      },
      {
        "ch": "飞快",
        "en": "very fast / razor-sharp",
        "lvl": 0
      },
      {
        "ch": "飞速",
        "en": "fast / face (growth)",
        "lvl": 0
      },
      {
        "ch": "机会",
        "en": "opportunity / chance",
        "lvl": 1
      },
      {
        "ch": "时机",
        "en": "opportunity / occasion",
        "lvl": 0
      },
      {
        "ch": "机动",
        "en": "motorize / power-driven / flexible",
        "lvl": 0
      },
      {
        "ch": "耳机",
        "en": "headphones",
        "lvl": 0
      },
      {
        "ch": "耳朵",
        "en": "ear",
        "lvl": 1
      },
      {
        "ch": "机器",
        "en": "machine",
        "lvl": 0
      },
      {
        "ch": "机灵",
        "en": "clever / smart / savvy",
        "lvl": 0
      },
      {
        "ch": "司机",
        "en": "chauffeur / driver",
        "lvl": 1
      },
      {
        "ch": "伺机",
        "en": "wait for an opportunity",
        "lvl": 0
      },
      {
        "ch": "广场",
        "en": "square",
        "lvl": 0
      },
      {
        "ch": "剧场",
        "en": "theater",
        "lvl": 0
      },
      {
        "ch": "汽水",
        "en": "soft drink",
        "lvl": 0
      },
      {
        "ch": "汽车",
        "en": "automobile",
        "lvl": 0
      },
      {
        "ch": "汽船",
        "en": "steamboat",
        "lvl": 0
      },
      {
        "ch": "汽油",
        "en": "gasoline",
        "lvl": 0
      },
      {
        "ch": "车费",
        "en": "passenger fare",
        "lvl": 0
      },
      {
        "ch": "车祸",
        "en": "traffic accident / car crash",
        "lvl": 0
      },
      {
        "ch": "车站",
        "en": "station",
        "lvl": 0
      },
      {
        "ch": "火车",
        "en": "train",
        "lvl": 1
      },
      {
        "ch": "火车站",
        "en": "train station",
        "lvl": 1
      },
      {
        "ch": "火柴",
        "en": "matches",
        "lvl": 0
      },
      {
        "ch": "火把",
        "en": "torch",
        "lvl": 0
      },
      {
        "ch": "火候",
        "en": "heat control / maturity",
        "lvl": 0
      },
      {
        "ch": "火气",
        "en": "temper / internal heat",
        "lvl": 0
      },
      {
        "ch": "火锅",
        "en": "chafing dish",
        "lvl": 0
      },
      {
        "ch": "火鸡",
        "en": "turkey",
        "lvl": 0
      },
      {
        "ch": "火鸡肉",
        "en": "turkey meat",
        "lvl": 0
      },
      {
        "ch": "站立",
        "en": "stand on one's feet",
        "lvl": 0
      },
      {
        "ch": "站住",
        "en": "stop / halt",
        "lvl": 0
      },
      {
        "ch": "站稳",
        "en": "come to a stop",
        "lvl": 0
      },
      {
        "ch": "轮船",
        "en": "steamboat",
        "lvl": 0
      },
      {
        "ch": "帆船",
        "en": "sailboat / yacht",
        "lvl": 0
      },
      {
        "ch": "货船",
        "en": "cargo ship / freight",
        "lvl": 0
      },
      {
        "ch": "客船",
        "en": "passenger ship",
        "lvl": 0
      },
      {
        "ch": "船票",
        "en": "boat ticket",
        "lvl": 0
      },
      {
        "ch": "票房",
        "en": "box office",
        "lvl": 0
      },
      {
        "ch": "票价",
        "en": "ticket price / admission fee",
        "lvl": 0
      },
      {
        "ch": "绑票",
        "en": "kidnap for ransom",
        "lvl": 0
      },
      {
        "ch": "投票",
        "en": "vote / poll",
        "lvl": 0
      },
      {
        "ch": "开心",
        "en": "feel happy / have a great time",
        "lvl": 2
      },
      {
        "ch": "开心果",
        "en": "pistachio",
        "lvl": 2
      },
      {
        "ch": "开灯",
        "en": "turn on the light",
        "lvl": 0
      },
      {
        "ch": "开门",
        "en": "open the door / be open for business",
        "lvl": 0
      },
      {
        "ch": "开车",
        "en": "drive/start a car",
        "lvl": 0
      },
      {
        "ch": "开会",
        "en": "have a meeting",
        "lvl": 0
      },
      {
        "ch": "开玩笑",
        "en": "crack a joke / make fun of",
        "lvl": 2
      },
      {
        "ch": "开放",
        "en": "open to the public",
        "lvl": 0
      },
      {
        "ch": "开口",
        "en": "start talking / open one's mouth",
        "lvl": 0
      },
      {
        "ch": "开花",
        "en": "bloom / blossom / flower",
        "lvl": 0
      },
      {
        "ch": "花开",
        "en": "bloom",
        "lvl": 0
      },
      {
        "ch": "开头",
        "en": "start / beginning",
        "lvl": 0
      },
      {
        "ch": "乘坐",
        "en": "ride in a vehicle",
        "lvl": 2
      },
      {
        "ch": "乘车",
        "en": "ride in a vehicle",
        "lvl": 0
      },
      {
        "ch": "乘客",
        "en": "passenger",
        "lvl": 0
      },
      {
        "ch": "乘机",
        "en": "seize an opportunity",
        "lvl": 0
      },
      {
        "ch": "邮包",
        "en": "postal parcel",
        "lvl": 0
      },
      {
        "ch": "邮递员",
        "en": "postman",
        "lvl": 0
      },
      {
        "ch": "邮寄",
        "en": "send by post",
        "lvl": 0
      },
      {
        "ch": "邮票",
        "en": "postage stamp",
        "lvl": 0
      },
      {
        "ch": "邮局",
        "en": "post office",
        "lvl": 2
      },
      {
        "ch": "局部",
        "en": "part / local",
        "lvl": 0
      },
      {
        "ch": "局势",
        "en": "situation / state (of affairs)",
        "lvl": 0
      },
      {
        "ch": "局面",
        "en": "aspect / phase / situation",
        "lvl": 0
      },
      {
        "ch": "公安局",
        "en": "Public Security Bureau",
        "lvl": 0
      },
      {
        "ch": "警察局",
        "en": "Public Security Bureau",
        "lvl": 0
      },
      {
        "ch": "警察",
        "en": "police(man)",
        "lvl": 2
      },
      {
        "ch": "时局",
        "en": "current political situation",
        "lvl": 0
      },
      {
        "ch": "大局",
        "en": "general situation / present condition",
        "lvl": 0
      },
      {
        "ch": "安静",
        "en": "quiet / peaceful / calm",
        "lvl": 1
      },
      {
        "ch": "安全",
        "en": "safe(ty) / security",
        "lvl": 2
      },
      {
        "ch": "安心",
        "en": "relieved / be at ease",
        "lvl": 0
      },
      {
        "ch": "安危",
        "en": "safety",
        "lvl": 0
      },
      {
        "ch": "平安",
        "en": "serene / safe / secure",
        "lvl": 0
      },
      {
        "ch": "门口",
        "en": "gate / doorway",
        "lvl": 0
      },
      {
        "ch": "门牌",
        "en": "door plate / house number",
        "lvl": 0
      },
      {
        "ch": "门路",
        "en": "way of doing sth / right social connection",
        "lvl": 0
      },
      {
        "ch": "门外汉",
        "en": "layman",
        "lvl": 0
      },
      {
        "ch": "色带",
        "en": "ribbon",
        "lvl": 0
      },
      {
        "ch": "带子",
        "en": "belt / strap / tape",
        "lvl": 0
      },
      {
        "ch": "带领",
        "en": "lead / guide",
        "lvl": 0
      },
      {
        "ch": "带头",
        "en": "take the initiative",
        "lvl": 0
      },
      {
        "ch": "特长",
        "en": "strong point / personal strength",
        "lvl": 0
      },
      {
        "ch": "特点",
        "en": "characteristic / trait / feature",
        "lvl": 2
      },
      {
        "ch": "特色",
        "en": "characteristic",
        "lvl": 0
      },
      {
        "ch": "特有",
        "en": "peculiar / specific / characteristic",
        "lvl": 0
      },
      {
        "ch": "特别",
        "en": "special(ly) / particular",
        "lvl": 1
      },
      {
        "ch": "别人",
        "en": "others",
        "lvl": 1
      },
      {
        "ch": "别的",
        "en": "other / else",
        "lvl": 0
      },
      {
        "ch": "别致",
        "en": "unique / unusual",
        "lvl": 0
      },
      {
        "ch": "民主",
        "en": "democracy",
        "lvl": 0
      },
      {
        "ch": "民族",
        "en": "ethnic (group) / nationality",
        "lvl": 2
      },
      {
        "ch": "民歌",
        "en": "folk song",
        "lvl": 0
      },
      {
        "ch": "单单",
        "en": "only / merely",
        "lvl": 0
      },
      {
        "ch": "单程",
        "en": "one way (ticket)",
        "lvl": 0
      },
      {
        "ch": "单独",
        "en": "alone / by oneself",
        "lvl": 0
      },
      {
        "ch": "单身",
        "en": "single / unmarried / live alone",
        "lvl": 0
      },
      {
        "ch": "颜面",
        "en": "face / prestige",
        "lvl": 0
      },
      {
        "ch": "颜料",
        "en": "pigment / paint",
        "lvl": 0
      },
      {
        "ch": "红颜",
        "en": "young beauties",
        "lvl": 0
      },
      {
        "ch": "容颜",
        "en": "appearance / complexion",
        "lvl": 0
      },
      {
        "ch": "彩色",
        "en": "color",
        "lvl": 0
      },
      {
        "ch": "色彩",
        "en": "color / tint",
        "lvl": 0
      },
      {
        "ch": "颜色",
        "en": "color",
        "lvl": 1
      },
      {
        "ch": "黄色",
        "en": "yellow / pornographic",
        "lvl": 0
      },
      {
        "ch": "褐色",
        "en": "brown",
        "lvl": 0
      },
      {
        "ch": "色情",
        "en": "pornographic / pornography / sex",
        "lvl": 0
      },
      {
        "ch": "色泽",
        "en": "color and luster",
        "lvl": 0
      },
      {
        "ch": "本色",
        "en": "natural color / inherent qualities",
        "lvl": 0
      },
      {
        "ch": "色子",
        "en": "dice",
        "lvl": 0
      },
      {
        "ch": "白白",
        "en": "in vain / for nothing",
        "lvl": 0
      },
      {
        "ch": "白费",
        "en": "waste",
        "lvl": 0
      },
      {
        "ch": "蛋白质",
        "en": "protein",
        "lvl": 0
      },
      {
        "ch": "苍白",
        "en": "pale / pallid",
        "lvl": 0
      },
      {
        "ch": "白天",
        "en": "daytime",
        "lvl": 0
      },
      {
        "ch": "白开水",
        "en": "plain boiled water",
        "lvl": 0
      },
      {
        "ch": "白色",
        "en": "white",
        "lvl": 0
      },
      {
        "ch": "白菜",
        "en": "Chinese cabbage",
        "lvl": 0
      },
      {
        "ch": "黑板",
        "en": "blackboard",
        "lvl": 1
      },
      {
        "ch": "黑色",
        "en": "black / dark",
        "lvl": 0
      },
      {
        "ch": "黑白",
        "en": "black & white / right & wrong",
        "lvl": 0
      },
      {
        "ch": "黑暗",
        "en": "dark(ness)",
        "lvl": 0
      },
      {
        "ch": "黑人",
        "en": "black person",
        "lvl": 0
      },
      {
        "ch": "黄昏",
        "en": "dusk",
        "lvl": 0
      },
      {
        "ch": "黄土",
        "en": "loess (yellow sandy soil typical of north China)",
        "lvl": 0
      },
      {
        "ch": "黄金",
        "en": "gold",
        "lvl": 0
      },
      {
        "ch": "黄油",
        "en": "butter",
        "lvl": 0
      },
      {
        "ch": "黄瓜",
        "en": "cucumber",
        "lvl": 0
      },
      {
        "ch": "黄河",
        "en": "The Yellow River",
        "lvl": 1
      },
      {
        "ch": "口红",
        "en": "lipstick",
        "lvl": 0
      },
      {
        "ch": "红绿灯",
        "en": "traffic light",
        "lvl": 0
      },
      {
        "ch": "绿灯",
        "en": "approval / go-ahead",
        "lvl": 0
      },
      {
        "ch": "红包",
        "en": "red envelope",
        "lvl": 0
      },
      {
        "ch": "红薯",
        "en": "sweet potato",
        "lvl": 0
      },
      {
        "ch": "红眼",
        "en": "red eye",
        "lvl": 0
      },
      {
        "ch": "红旗",
        "en": "red flag",
        "lvl": 0
      },
      {
        "ch": "眼睛",
        "en": "eye",
        "lvl": 1
      },
      {
        "ch": "绿豆芽",
        "en": "green bean sprouts",
        "lvl": 0
      },
      {
        "ch": "绿化",
        "en": "greening / reforest",
        "lvl": 0
      },
      {
        "ch": "粉红",
        "en": "pink",
        "lvl": 0
      },
      {
        "ch": "粉碎",
        "en": "smash / crush / shatter",
        "lvl": 0
      },
      {
        "ch": "粉笔",
        "en": "chalk",
        "lvl": 0
      },
      {
        "ch": "笔记本",
        "en": "notebook",
        "lvl": 1
      },
      {
        "ch": "蓝领",
        "en": "blue collar",
        "lvl": 0
      },
      {
        "ch": "蓝鲸",
        "en": "blue whale",
        "lvl": 0
      },
      {
        "ch": "蓝宝石",
        "en": "sapphire",
        "lvl": 0
      },
      {
        "ch": "蓝天",
        "en": "blue sky",
        "lvl": 0
      },
      {
        "ch": "蓝图",
        "en": "blueprint",
        "lvl": 0
      },
      {
        "ch": "蓝色",
        "en": "blue",
        "lvl": 0
      },
      {
        "ch": "深蓝色",
        "en": "navy blue",
        "lvl": 0
      },
      {
        "ch": "深深",
        "en": "deep / profound / deeply",
        "lvl": 0
      },
      {
        "ch": "深水",
        "en": "deep water",
        "lvl": 0
      },
      {
        "ch": "深思",
        "en": "ponder / consider",
        "lvl": 0
      },
      {
        "ch": "深沉",
        "en": "profound / deep",
        "lvl": 0
      },
      {
        "ch": "环境",
        "en": "environment / surroundings / ambient",
        "lvl": 1
      },
      {
        "ch": "环城",
        "en": "around the city",
        "lvl": 0
      },
      {
        "ch": "环保",
        "en": "environmental protection",
        "lvl": 0
      },
      {
        "ch": "环节",
        "en": "sector (of the economy) / element (of a policy) / (zoology) segment",
        "lvl": 0
      },
      {
        "ch": "循环",
        "en": "cycle / loop / circulation",
        "lvl": 0
      },
      {
        "ch": "境地",
        "en": "situation / circumstances",
        "lvl": 0
      },
      {
        "ch": "境况",
        "en": "condition / circumstances",
        "lvl": 0
      },
      {
        "ch": "境遇",
        "en": "circumstance",
        "lvl": 0
      },
      {
        "ch": "境内",
        "en": "within the borders",
        "lvl": 0
      },
      {
        "ch": "境界",
        "en": "boundry / realm",
        "lvl": 0
      },
      {
        "ch": "困境",
        "en": "predicament / plight / dilemma",
        "lvl": 0
      },
      {
        "ch": "空气",
        "en": "air / atmosphere",
        "lvl": 2
      },
      {
        "ch": "空调",
        "en": "air conditioning",
        "lvl": 1
      },
      {
        "ch": "空儿",
        "en": "free time",
        "lvl": 0
      },
      {
        "ch": "空闲",
        "en": "leisure / idle",
        "lvl": 0
      },
      {
        "ch": "空白",
        "en": "blank space",
        "lvl": 0
      },
      {
        "ch": "空地",
        "en": "vacant land / open space",
        "lvl": 0
      },
      {
        "ch": "空袭",
        "en": "air attack",
        "lvl": 0
      },
      {
        "ch": "空隙",
        "en": "crack / gap",
        "lvl": 0
      },
      {
        "ch": "空缺",
        "en": "vacancy",
        "lvl": 0
      },
      {
        "ch": "晴天",
        "en": "sunny",
        "lvl": 0
      },
      {
        "ch": "晴朗",
        "en": "sunny & cloudless",
        "lvl": 0
      },
      {
        "ch": "晴间多云",
        "en": "fine with occasional clouds",
        "lvl": 0
      },
      {
        "ch": "晴转阴",
        "en": "fine changing to overcast",
        "lvl": 0
      },
      {
        "ch": "晴雨表",
        "en": "barometer",
        "lvl": 0
      },
      {
        "ch": "山城",
        "en": "mountain city",
        "lvl": 0
      },
      {
        "ch": "山区",
        "en": "mountain area",
        "lvl": 0
      },
      {
        "ch": "山顶",
        "en": "hilltop",
        "lvl": 0
      },
      {
        "ch": "山洞",
        "en": "cave",
        "lvl": 0
      },
      {
        "ch": "山水",
        "en": "landscape",
        "lvl": 0
      },
      {
        "ch": "山羊",
        "en": "goat",
        "lvl": 0
      },
      {
        "ch": "火山",
        "en": "volcano / volcanic",
        "lvl": 0
      },
      {
        "ch": "江山",
        "en": "country / landscape",
        "lvl": 0
      },
      {
        "ch": "黄山",
        "en": "The Yellow Mountain",
        "lvl": 0
      },
      {
        "ch": "华山",
        "en": "The Flower Mountain",
        "lvl": 0
      },
      {
        "ch": "水果",
        "en": "fruit",
        "lvl": 1
      },
      {
        "ch": "水龙头",
        "en": "faucet / tap",
        "lvl": 0
      },
      {
        "ch": "水平",
        "en": "level / standard",
        "lvl": 1
      },
      {
        "ch": "海外",
        "en": "overseas / abroad",
        "lvl": 0
      },
      {
        "ch": "海拔",
        "en": "above sea level / elevation",
        "lvl": 0
      },
      {
        "ch": "海口",
        "en": "seaport",
        "lvl": 0
      },
      {
        "ch": "海港",
        "en": "harbor / seaport",
        "lvl": 0
      },
      {
        "ch": "海湾",
        "en": "bay / gulf",
        "lvl": 0
      },
      {
        "ch": "海滩",
        "en": "beach",
        "lvl": 0
      },
      {
        "ch": "海边",
        "en": "seaside",
        "lvl": 0
      },
      {
        "ch": "海鲜",
        "en": "seafood",
        "lvl": 0
      },
      {
        "ch": "河流",
        "en": "river / stream",
        "lvl": 0
      },
      {
        "ch": "流利",
        "en": "fluent",
        "lvl": 2
      },
      {
        "ch": "流动",
        "en": "flow / be mobile",
        "lvl": 0
      },
      {
        "ch": "流传",
        "en": "hand down / spread",
        "lvl": 0
      },
      {
        "ch": "流行",
        "en": "popularity / fashionable",
        "lvl": 2
      },
      {
        "ch": "交流",
        "en": "exchange / swap / communication",
        "lvl": 2
      },
      {
        "ch": "流通",
        "en": "circulate / distribute / distribution",
        "lvl": 0
      },
      {
        "ch": "流域",
        "en": "river basin / valley",
        "lvl": 0
      },
      {
        "ch": "华丽",
        "en": "gorgeous",
        "lvl": 0
      },
      {
        "ch": "丛林",
        "en": "forest",
        "lvl": 0
      },
      {
        "ch": "森林",
        "en": "forest",
        "lvl": 2
      },
      {
        "ch": "树林",
        "en": "forest",
        "lvl": 0
      },
      {
        "ch": "树枝",
        "en": "branch / twig",
        "lvl": 0
      },
      {
        "ch": "树阴",
        "en": "tree shade",
        "lvl": 0
      },
      {
        "ch": "树立",
        "en": "set up / establish",
        "lvl": 0
      },
      {
        "ch": "云层",
        "en": "cloud layer / cloud bank",
        "lvl": 0
      },
      {
        "ch": "云彩",
        "en": "cloud",
        "lvl": 0
      },
      {
        "ch": "修养",
        "en": "accomplishment / self-cultivation",
        "lvl": 0
      },
      {
        "ch": "养神",
        "en": "rest / regain composure",
        "lvl": 0
      },
      {
        "ch": "保养",
        "en": "maintenance / maintain / take good care of",
        "lvl": 0
      },
      {
        "ch": "营养",
        "en": "nutrition / nourishment",
        "lvl": 0
      },
      {
        "ch": "养老金",
        "en": "pension",
        "lvl": 0
      },
      {
        "ch": "养老院",
        "en": "nursing home",
        "lvl": 0
      },
      {
        "ch": "鸡蛋",
        "en": "chicken egg",
        "lvl": 1
      },
      {
        "ch": "公鸡",
        "en": "rooster",
        "lvl": 0
      },
      {
        "ch": "雄鸡",
        "en": "rooster",
        "lvl": 0
      },
      {
        "ch": "钓鱼",
        "en": "(go) fishing / angling",
        "lvl": 0
      },
      {
        "ch": "鱼竿",
        "en": "fishing rod",
        "lvl": 0
      },
      {
        "ch": "金鱼",
        "en": "goldfish",
        "lvl": 0
      },
      {
        "ch": "金枪鱼",
        "en": "tuna",
        "lvl": 0
      },
      {
        "ch": "鲨鱼",
        "en": "shark",
        "lvl": 0
      },
      {
        "ch": "鱿鱼",
        "en": "squid",
        "lvl": 0
      },
      {
        "ch": "鲤鱼",
        "en": "carp",
        "lvl": 0
      },
      {
        "ch": "鱼类",
        "en": "fish",
        "lvl": 0
      },
      {
        "ch": "鱼龙混杂",
        "en": "bad & good mixed together",
        "lvl": 0
      },
      {
        "ch": "鱼目混珠",
        "en": "pass off fake products as genuine",
        "lvl": 0
      },
      {
        "ch": "牛劲",
        "en": "great strength/effort",
        "lvl": 0
      },
      {
        "ch": "牛奶",
        "en": "milk",
        "lvl": 1
      },
      {
        "ch": "牛油",
        "en": "butter",
        "lvl": 0
      },
      {
        "ch": "牛脾气",
        "en": "stubborn",
        "lvl": 0
      },
      {
        "ch": "脾气",
        "en": "temper(ament)",
        "lvl": 2
      },
      {
        "ch": "黄牛",
        "en": "cattle / ox",
        "lvl": 0
      },
      {
        "ch": "吹牛",
        "en": "boast / brag",
        "lvl": 0
      },
      {
        "ch": "轻松",
        "en": "gentle / relaxed / effortless",
        "lvl": 2
      },
      {
        "ch": "轻重",
        "en": "weight / degree of seriousness",
        "lvl": 0
      },
      {
        "ch": "轻快",
        "en": "light & quick / effortless",
        "lvl": 0
      },
      {
        "ch": "轻信",
        "en": "gullible / naive",
        "lvl": 0
      },
      {
        "ch": "轻易",
        "en": "easily / lightly",
        "lvl": 0
      },
      {
        "ch": "力量",
        "en": "strength / power",
        "lvl": 0
      },
      {
        "ch": "量力",
        "en": "estimate strength or ability",
        "lvl": 0
      },
      {
        "ch": "力求",
        "en": "make every effort / do one's best",
        "lvl": 0
      },
      {
        "ch": "力争",
        "en": "work hard toward / do one's best",
        "lvl": 0
      },
      {
        "ch": "大力",
        "en": "vigorous / vigorously",
        "lvl": 0
      },
      {
        "ch": "权力",
        "en": "power / authority",
        "lvl": 0
      },
      {
        "ch": "怕事",
        "en": "afraid of getting involved",
        "lvl": 0
      },
      {
        "ch": "怕冷",
        "en": "afraid of cold",
        "lvl": 0
      },
      {
        "ch": "怕羞",
        "en": "(be) shy / bashful",
        "lvl": 0
      },
      {
        "ch": "生怕",
        "en": "afraid / so as not to",
        "lvl": 0
      },
      {
        "ch": "恐怕",
        "en": "I'm afraid that / fear / perhaps",
        "lvl": 2
      },
      {
        "ch": "害怕",
        "en": "be afraid",
        "lvl": 1
      },
      {
        "ch": "许多",
        "en": "many / much",
        "lvl": 2
      },
      {
        "ch": "不许",
        "en": "not allowed",
        "lvl": 0
      },
      {
        "ch": "允许",
        "en": "allow / permit",
        "lvl": 2
      },
      {
        "ch": "也许",
        "en": "perhaps / maybe",
        "lvl": 2
      },
      {
        "ch": "优先",
        "en": "(have) priority",
        "lvl": 0
      },
      {
        "ch": "优美",
        "en": "beautiful / elegant / graceful",
        "lvl": 0
      },
      {
        "ch": "优点",
        "en": "advantage / merit / strong point",
        "lvl": 2
      },
      {
        "ch": "优待",
        "en": "preferential treatment",
        "lvl": 0
      },
      {
        "ch": "优秀",
        "en": "excellent / outstanding",
        "lvl": 2
      },
      {
        "ch": "量词",
        "en": "quantifier / measure word",
        "lvl": 0
      },
      {
        "ch": "产量",
        "en": "output / yield",
        "lvl": 0
      },
      {
        "ch": "气量",
        "en": "tolerance / capacity",
        "lvl": 0
      },
      {
        "ch": "低级",
        "en": "low level / vulgar",
        "lvl": 0
      },
      {
        "ch": "级别",
        "en": "rank / level / grade",
        "lvl": 0
      },
      {
        "ch": "超级",
        "en": "super / ultra / hyper",
        "lvl": 0
      },
      {
        "ch": "初级",
        "en": "junior / primary",
        "lvl": 0
      },
      {
        "ch": "高级",
        "en": "advanced / high level",
        "lvl": 0
      },
      {
        "ch": "高等",
        "en": "high level / higher / advanced",
        "lvl": 0
      },
      {
        "ch": "等待",
        "en": "wait / expectation",
        "lvl": 0
      },
      {
        "ch": "等一下",
        "en": "wait",
        "lvl": 0
      },
      {
        "ch": "等等",
        "en": "etc. / an so on",
        "lvl": 0
      },
      {
        "ch": "等于",
        "en": "equal",
        "lvl": 0
      },
      {
        "ch": "等级",
        "en": "grade / rank / status",
        "lvl": 0
      },
      {
        "ch": "等同",
        "en": "equal / equate",
        "lvl": 0
      },
      {
        "ch": "相等",
        "en": "equality / equal / equivalent / even",
        "lvl": 0
      },
      {
        "ch": "变平",
        "en": "even",
        "lvl": 0
      },
      {
        "ch": "平等",
        "en": "equality / equal",
        "lvl": 0
      },
      {
        "ch": "平静",
        "en": "calm / tranquil",
        "lvl": 0
      },
      {
        "ch": "次要",
        "en": "secondary / minor",
        "lvl": 0
      },
      {
        "ch": "次序",
        "en": "order / sequence",
        "lvl": 0
      },
      {
        "ch": "次数",
        "en": "number of times / frequency",
        "lvl": 0
      },
      {
        "ch": "车次",
        "en": "train number",
        "lvl": 0
      },
      {
        "ch": "多次",
        "en": "many times / repeatedly",
        "lvl": 0
      },
      {
        "ch": "极力",
        "en": "do one's best",
        "lvl": 0
      },
      {
        "ch": "南极",
        "en": "South Pole",
        "lvl": 0
      },
      {
        "ch": "北极",
        "en": "North Pole / Arctic",
        "lvl": 0
      },
      {
        "ch": "极大",
        "en": "enormous / maximum",
        "lvl": 0
      },
      {
        "ch": "极端",
        "en": "extreme",
        "lvl": 0
      },
      {
        "ch": "度假",
        "en": "go on holiday",
        "lvl": 0
      },
      {
        "ch": "温度",
        "en": "temperature",
        "lvl": 2
      },
      {
        "ch": "湿度",
        "en": "humidity / moisture",
        "lvl": 0
      },
      {
        "ch": "度过",
        "en": "pass / spend (time)",
        "lvl": 0
      },
      {
        "ch": "风度",
        "en": "bearing / demeanor",
        "lvl": 0
      },
      {
        "ch": "揣度",
        "en": "estimate / appraise",
        "lvl": 0
      },
      {
        "ch": "虽然",
        "en": "although / despite / nevertheless",
        "lvl": 0
      },
      {
        "ch": "虽说",
        "en": "although",
        "lvl": 0
      },
      {
        "ch": "除了",
        "en": "besides / apart from / in addition to",
        "lvl": 1
      },
      {
        "ch": "除非",
        "en": "unless",
        "lvl": 0
      },
      {
        "ch": "例子",
        "en": "example / instance",
        "lvl": 0
      },
      {
        "ch": "例句",
        "en": "example sentence",
        "lvl": 0
      },
      {
        "ch": "例如",
        "en": "e.g. / for instance",
        "lvl": 2
      },
      {
        "ch": "例外",
        "en": "exception / make an exception",
        "lvl": 0
      },
      {
        "ch": "病例",
        "en": "medical case of illness",
        "lvl": 0
      },
      {
        "ch": "产品",
        "en": "product / merchandise",
        "lvl": 0
      },
      {
        "ch": "品质",
        "en": "quality / character",
        "lvl": 0
      },
      {
        "ch": "品名",
        "en": "product name",
        "lvl": 0
      },
      {
        "ch": "品牌",
        "en": "brand name",
        "lvl": 0
      },
      {
        "ch": "品味",
        "en": "taste / sample / one's taste (of music/art/food/etc..)",
        "lvl": 0
      },
      {
        "ch": "品尝",
        "en": "taste / sample",
        "lvl": 0
      },
      {
        "ch": "作品",
        "en": "work (of art)",
        "lvl": 0
      },
      {
        "ch": "赢利",
        "en": "profit / gain",
        "lvl": 0
      },
      {
        "ch": "赢得",
        "en": "win / gain / triumph",
        "lvl": 0
      },
      {
        "ch": "双赢",
        "en": "win-win",
        "lvl": 0
      },
      {
        "ch": "赢家",
        "en": "winner",
        "lvl": 0
      },
      {
        "ch": "输赢",
        "en": "win or loss / outcome",
        "lvl": 0
      },
      {
        "ch": "输了",
        "en": "lose / loss",
        "lvl": 0
      },
      {
        "ch": "输入",
        "en": "import / input",
        "lvl": 0
      },
      {
        "ch": "输出",
        "en": "export / output",
        "lvl": 0
      },
      {
        "ch": "跑步",
        "en": "run",
        "lvl": 1
      },
      {
        "ch": "慢跑",
        "en": "jog / jogging",
        "lvl": 0
      },
      {
        "ch": "赛跑",
        "en": "running race",
        "lvl": 0
      },
      {
        "ch": "赛过",
        "en": "surpass / exceed",
        "lvl": 0
      },
      {
        "ch": "联赛",
        "en": "league",
        "lvl": 0
      },
      {
        "ch": "决赛",
        "en": "final (of a competition)",
        "lvl": 0
      },
      {
        "ch": "竞赛",
        "en": "competition",
        "lvl": 0
      },
      {
        "ch": "锦标赛",
        "en": "championship",
        "lvl": 0
      },
      {
        "ch": "成果",
        "en": "achievement / result / gain / profit",
        "lvl": 2
      },
      {
        "ch": "成绩",
        "en": "achievement (of study/work) / performance records",
        "lvl": 1
      },
      {
        "ch": "成就",
        "en": "achieve(ment) / success",
        "lvl": 2
      },
      {
        "ch": "完成",
        "en": "complete / accomplish / perfection",
        "lvl": 1
      },
      {
        "ch": "形成",
        "en": "form / take shape / conformation",
        "lvl": 0
      },
      {
        "ch": "高估",
        "en": "overestimate",
        "lvl": 0
      },
      {
        "ch": "高矮",
        "en": "height",
        "lvl": 0
      },
      {
        "ch": "高明",
        "en": "clever / smart",
        "lvl": 0
      },
      {
        "ch": "高大",
        "en": "tall / lofty",
        "lvl": 0
      },
      {
        "ch": "高低",
        "en": "pitch / ups & downs / height",
        "lvl": 0
      },
      {
        "ch": "高校",
        "en": "universities & colleges",
        "lvl": 0
      },
      {
        "ch": "高兴",
        "en": "happy / glad",
        "lvl": 1
      },
      {
        "ch": "兴奋",
        "en": "excited / excitement",
        "lvl": 2
      },
      {
        "ch": "兴致",
        "en": "interest / spirits",
        "lvl": 0
      },
      {
        "ch": "兴头",
        "en": "keen interest / enthusiasm",
        "lvl": 0
      },
      {
        "ch": "护照",
        "en": "passport",
        "lvl": 1
      },
      {
        "ch": "照片",
        "en": "photograph",
        "lvl": 1
      },
      {
        "ch": "相片",
        "en": "photograph",
        "lvl": 0
      },
      {
        "ch": "照相",
        "en": "take a photo",
        "lvl": 1
      },
      {
        "ch": "照相机",
        "en": "camera",
        "lvl": 1
      },
      {
        "ch": "照旧",
        "en": "as before / as in the past",
        "lvl": 0
      },
      {
        "ch": "照常",
        "en": "as usual",
        "lvl": 0
      },
      {
        "ch": "照样",
        "en": "as usual",
        "lvl": 0
      },
      {
        "ch": "长相",
        "en": "appearance / profile",
        "lvl": 0
      },
      {
        "ch": "相貌",
        "en": "appearance / facial features",
        "lvl": 0
      },
      {
        "ch": "相声",
        "en": "comic dialog / crosstalk",
        "lvl": 0
      },
      {
        "ch": "相互",
        "en": "mutual / mutually",
        "lvl": 0
      },
      {
        "ch": "互相",
        "en": "each other / mutual(ly)",
        "lvl": 2
      },
      {
        "ch": "图片",
        "en": "picture / image",
        "lvl": 0
      },
      {
        "ch": "影片",
        "en": "movie",
        "lvl": 0
      },
      {
        "ch": "大片",
        "en": "vast expanse / blockbuster",
        "lvl": 0
      },
      {
        "ch": "片子",
        "en": "movie / x-ray image",
        "lvl": 0
      },
      {
        "ch": "片名",
        "en": "movie title",
        "lvl": 0
      },
      {
        "ch": "片段",
        "en": "fragment / part",
        "lvl": 0
      },
      {
        "ch": "新加坡",
        "en": "Singapore",
        "lvl": 0
      },
      {
        "ch": "加州",
        "en": "California",
        "lvl": 0
      },
      {
        "ch": "加油站",
        "en": "gas station",
        "lvl": 2
      },
      {
        "ch": "加油",
        "en": "add oil / refuel / make an extra effort",
        "lvl": 2
      },
      {
        "ch": "加倍",
        "en": "double",
        "lvl": 0
      },
      {
        "ch": "加入",
        "en": "join / participate",
        "lvl": 0
      },
      {
        "ch": "石油",
        "en": "gas / petroleum",
        "lvl": 0
      },
      {
        "ch": "食油",
        "en": "cooking oil",
        "lvl": 0
      },
      {
        "ch": "橄榄油",
        "en": "olive oil",
        "lvl": 0
      },
      {
        "ch": "油腻",
        "en": "oily / greasy",
        "lvl": 0
      },
      {
        "ch": "油田",
        "en": "oil field",
        "lvl": 0
      },
      {
        "ch": "油画",
        "en": "oil painting",
        "lvl": 0
      },
      {
        "ch": "计划",
        "en": "plan / project",
        "lvl": 2
      },
      {
        "ch": "计较",
        "en": "bother about / fuss about / haggle over",
        "lvl": 0
      },
      {
        "ch": "计时",
        "en": "reckon by time",
        "lvl": 0
      },
      {
        "ch": "计算",
        "en": "calculate / count",
        "lvl": 0
      },
      {
        "ch": "计算机",
        "en": "computer",
        "lvl": 0
      },
      {
        "ch": "划一不二",
        "en": "fixed / rigid / unalterable",
        "lvl": 0
      },
      {
        "ch": "划时代",
        "en": "epoch-marking",
        "lvl": 0
      },
      {
        "ch": "划分",
        "en": "divide / partition",
        "lvl": 0
      },
      {
        "ch": "划定",
        "en": "designate / delimit",
        "lvl": 0
      },
      {
        "ch": "难得",
        "en": "rare",
        "lvl": 0
      },
      {
        "ch": "难说",
        "en": "hard to say",
        "lvl": 0
      },
      {
        "ch": "难为",
        "en": "press / embarrass",
        "lvl": 0
      },
      {
        "ch": "难过",
        "en": "sad / feel sorry",
        "lvl": 1
      },
      {
        "ch": "内容",
        "en": "content / substance / details",
        "lvl": 2
      },
      {
        "ch": "笑容",
        "en": "content / substance / details",
        "lvl": 0
      },
      {
        "ch": "包容",
        "en": "pardon / forgive / show tolerance",
        "lvl": 0
      },
      {
        "ch": "容纳",
        "en": "hold / contain / have a capacity of",
        "lvl": 0
      },
      {
        "ch": "容忍",
        "en": "put up with / toleration",
        "lvl": 0
      },
      {
        "ch": "容许",
        "en": "permit / allow",
        "lvl": 0
      },
      {
        "ch": "容易",
        "en": "easy / easily",
        "lvl": 1
      },
      {
        "ch": "交易",
        "en": "transaction",
        "lvl": 0
      },
      {
        "ch": "最后",
        "en": "last / final(ly)",
        "lvl": 1
      },
      {
        "ch": "最近",
        "en": "recent(ly)",
        "lvl": 1
      },
      {
        "ch": "最好",
        "en": "best / had better (do sth)",
        "lvl": 2
      },
      {
        "ch": "最多",
        "en": "maximum / at most",
        "lvl": 0
      },
      {
        "ch": "最佳",
        "en": "optimum / optimal / peak",
        "lvl": 0
      },
      {
        "ch": "最差",
        "en": "least / worst",
        "lvl": 0
      },
      {
        "ch": "法子",
        "en": "way / method",
        "lvl": 0
      },
      {
        "ch": "法定人数",
        "en": "quorum",
        "lvl": 0
      },
      {
        "ch": "法律",
        "en": "law / legal",
        "lvl": 2
      },
      {
        "ch": "如果",
        "en": "if / in case",
        "lvl": 1
      },
      {
        "ch": "如此",
        "en": "so / like that",
        "lvl": 0
      },
      {
        "ch": "如何",
        "en": "how / what",
        "lvl": 0
      },
      {
        "ch": "如今",
        "en": "nowadays",
        "lvl": 0
      },
      {
        "ch": "果断",
        "en": "decisive / resolute / firm / determination",
        "lvl": 0
      },
      {
        "ch": "苹果",
        "en": "apple",
        "lvl": 1
      },
      {
        "ch": "而已",
        "en": "that's all",
        "lvl": 0
      },
      {
        "ch": "已经",
        "en": "already",
        "lvl": 1
      },
      {
        "ch": "已往",
        "en": "the past",
        "lvl": 0
      },
      {
        "ch": "经常",
        "en": "often / frequently",
        "lvl": 1
      },
      {
        "ch": "经验",
        "en": "experience",
        "lvl": 2
      },
      {
        "ch": "经理",
        "en": "manager / director",
        "lvl": 1
      },
      {
        "ch": "经过",
        "en": "pass / go through / process",
        "lvl": 1
      },
      {
        "ch": "始末",
        "en": "beginning & end / the ins and outs",
        "lvl": 0
      },
      {
        "ch": "始终",
        "en": "all along / from beginning to end",
        "lvl": 0
      },
      {
        "ch": "原始",
        "en": "original / primitive",
        "lvl": 0
      },
      {
        "ch": "开始",
        "en": "start / beginning / initial",
        "lvl": 1
      },
      {
        "ch": "报告",
        "en": "inform / report / lecture",
        "lvl": 2
      },
      {
        "ch": "告别",
        "en": "bid farewell to",
        "lvl": 0
      },
      {
        "ch": "告诉",
        "en": "tell / inform",
        "lvl": 1
      },
      {
        "ch": "诉说",
        "en": "recount / relate",
        "lvl": 0
      },
      {
        "ch": "诉讼",
        "en": "lawsuit / litigation / litigate",
        "lvl": 0
      },
      {
        "ch": "控诉",
        "en": "accuse / denounce",
        "lvl": 0
      },
      {
        "ch": "倾诉",
        "en": "pour out one's heart",
        "lvl": 0
      },
      {
        "ch": "信得过",
        "en": "trust",
        "lvl": 0
      },
      {
        "ch": "信不过",
        "en": "distrust",
        "lvl": 0
      },
      {
        "ch": "信心",
        "en": "faith / confidence",
        "lvl": 2
      },
      {
        "ch": "信用",
        "en": "trustworthiness / credit",
        "lvl": 0
      },
      {
        "ch": "言论",
        "en": "opinion on public affairs / one's view",
        "lvl": 0
      },
      {
        "ch": "言行",
        "en": "words & deeds",
        "lvl": 0
      },
      {
        "ch": "言谈",
        "en": "the way one speaks",
        "lvl": 0
      },
      {
        "ch": "真相",
        "en": "the actual facts / the truth about",
        "lvl": 0
      },
      {
        "ch": "真话",
        "en": "truth",
        "lvl": 0
      },
      {
        "ch": "真心",
        "en": "sincere",
        "lvl": 0
      },
      {
        "ch": "真正",
        "en": "real / genuine(ness)",
        "lvl": 2
      },
      {
        "ch": "真实",
        "en": "real / true",
        "lvl": 0
      },
      {
        "ch": "解决",
        "en": "settle / resolve",
        "lvl": 1
      },
      {
        "ch": "决不",
        "en": "absolutely not / not at all",
        "lvl": 0
      },
      {
        "ch": "决定",
        "en": "decide / decision",
        "lvl": 1
      },
      {
        "ch": "决心",
        "en": "determination",
        "lvl": 0
      },
      {
        "ch": "定价",
        "en": "set a price / fixed price",
        "lvl": 0
      },
      {
        "ch": "一定",
        "en": "certain(ly) / for sure",
        "lvl": 1
      },
      {
        "ch": "定做",
        "en": "commission / have sth made in order",
        "lvl": 0
      },
      {
        "ch": "定期",
        "en": "at set dates / regular",
        "lvl": 0
      },
      {
        "ch": "约定",
        "en": "arrange / make an appointment",
        "lvl": 0
      },
      {
        "ch": "想象",
        "en": "visualize / think",
        "lvl": 0
      },
      {
        "ch": "想象力",
        "en": "imagination",
        "lvl": 0
      },
      {
        "ch": "不像话",
        "en": "unreasonable / outrageous",
        "lvl": 0
      },
      {
        "ch": "像样",
        "en": "up to the mark / presentable / decent",
        "lvl": 0
      },
      {
        "ch": "好像",
        "en": "seem / be like",
        "lvl": 2
      },
      {
        "ch": "录像",
        "en": "video tape",
        "lvl": 0
      },
      {
        "ch": "画像",
        "en": "portrait / portray",
        "lvl": 0
      },
      {
        "ch": "清理",
        "en": "clear up / dispose of",
        "lvl": 0
      },
      {
        "ch": "清楚",
        "en": "clear / distinct",
        "lvl": 1
      },
      {
        "ch": "清净",
        "en": "tranquil / peaceful / quiet",
        "lvl": 0
      },
      {
        "ch": "清静",
        "en": "quiet",
        "lvl": 0
      },
      {
        "ch": "清闲",
        "en": "idle / leisurely",
        "lvl": 0
      },
      {
        "ch": "楚楚可怜",
        "en": "delicate & charming",
        "lvl": 0
      },
      {
        "ch": "楚楚",
        "en": "neat / tidy",
        "lvl": 0
      },
      {
        "ch": "苦楚",
        "en": "suffering / misery",
        "lvl": 0
      },
      {
        "ch": "唱歌",
        "en": "sing a song",
        "lvl": 1
      },
      {
        "ch": "唱片",
        "en": "phonograph record /  musical album",
        "lvl": 0
      },
      {
        "ch": "歌唱家",
        "en": "singer",
        "lvl": 0
      },
      {
        "ch": "合唱团",
        "en": "choir / chorus",
        "lvl": 0
      },
      {
        "ch": "歌星",
        "en": "famous singer",
        "lvl": 0
      },
      {
        "ch": "歌迷",
        "en": "fan of a singer",
        "lvl": 0
      },
      {
        "ch": "歌声",
        "en": "sound of singing",
        "lvl": 0
      },
      {
        "ch": "歌剧院",
        "en": "opera house",
        "lvl": 0
      },
      {
        "ch": "刚刚",
        "en": "a moment ago",
        "lvl": 0
      },
      {
        "ch": "刚才",
        "en": "just now / a moment ago",
        "lvl": 1
      },
      {
        "ch": "刚巧",
        "en": "by chance",
        "lvl": 0
      },
      {
        "ch": "刚好",
        "en": "exactly / just",
        "lvl": 0
      },
      {
        "ch": "随地",
        "en": "everywhere / from any location",
        "lvl": 0
      },
      {
        "ch": "随后",
        "en": "hereafter / subsequently",
        "lvl": 0
      },
      {
        "ch": "随意",
        "en": "as one wishes / arbitrary",
        "lvl": 0
      },
      {
        "ch": "随时",
        "en": "at any time / always",
        "lvl": 0
      },
      {
        "ch": "随便",
        "en": "as one pleases / at random",
        "lvl": 2
      },
      {
        "ch": "新年",
        "en": "new year",
        "lvl": 0
      },
      {
        "ch": "新奇",
        "en": "strange / novel",
        "lvl": 0
      },
      {
        "ch": "新闻",
        "en": "news",
        "lvl": 1
      },
      {
        "ch": "新鲜",
        "en": "fresh(ness)",
        "lvl": 1
      },
      {
        "ch": "旧事",
        "en": "a past event",
        "lvl": 0
      },
      {
        "ch": "旧货",
        "en": "secondhand goods",
        "lvl": 0
      },
      {
        "ch": "破旧",
        "en": "shabby",
        "lvl": 0
      },
      {
        "ch": "陈旧",
        "en": "outdated / stale",
        "lvl": 0
      },
      {
        "ch": "厌烦",
        "en": "bored / be fed up with",
        "lvl": 0
      },
      {
        "ch": "厌倦",
        "en": "be fed up with",
        "lvl": 0
      },
      {
        "ch": "厌恶",
        "en": "disgust / loathe / reluctant",
        "lvl": 0
      },
      {
        "ch": "厌食症",
        "en": "anorexia",
        "lvl": 0
      },
      {
        "ch": "适宜",
        "en": "suitable / appropriate",
        "lvl": 0
      },
      {
        "ch": "适中",
        "en": "well suited / moderate",
        "lvl": 0
      },
      {
        "ch": "适当",
        "en": "appropriate / suitable",
        "lvl": 0
      },
      {
        "ch": "适合",
        "en": "fit / suit / consort",
        "lvl": 2
      },
      {
        "ch": "合适",
        "en": "appropriate / proper",
        "lvl": 2
      },
      {
        "ch": "合理",
        "en": "reasonable / rational",
        "lvl": 0
      },
      {
        "ch": "合不来",
        "en": "incompatible",
        "lvl": 0
      },
      {
        "ch": "必须",
        "en": "must / have to / compulsory",
        "lvl": 1
      },
      {
        "ch": "必得",
        "en": "must / have to",
        "lvl": 0
      },
      {
        "ch": "必定",
        "en": "must / be bound to",
        "lvl": 0
      },
      {
        "ch": "必然",
        "en": "inevitable / certain / necessity",
        "lvl": 2
      },
      {
        "ch": "必要",
        "en": "necessary / essential",
        "lvl": 2
      },
      {
        "ch": "代替",
        "en": "replace / instead",
        "lvl": 0
      },
      {
        "ch": "代表",
        "en": "represent / representative / delegate",
        "lvl": 0
      },
      {
        "ch": "代办",
        "en": "act on behalf of",
        "lvl": 0
      },
      {
        "ch": "代价",
        "en": "cost / price",
        "lvl": 0
      },
      {
        "ch": "更替",
        "en": "replace / take over",
        "lvl": 0
      },
      {
        "ch": "更改",
        "en": "alter / change",
        "lvl": 0
      },
      {
        "ch": "更加",
        "en": "(even) more",
        "lvl": 0
      },
      {
        "ch": "更多",
        "en": "more",
        "lvl": 0
      },
      {
        "ch": "声旁",
        "en": "phonetic element of a character",
        "lvl": 0
      },
      {
        "ch": "声调",
        "en": "tone",
        "lvl": 0
      },
      {
        "ch": "小声",
        "en": "in a low voice",
        "lvl": 0
      },
      {
        "ch": "大声",
        "en": "loudly",
        "lvl": 0
      },
      {
        "ch": "高声",
        "en": "loud / loudly",
        "lvl": 0
      },
      {
        "ch": "低头",
        "en": "yield / give in",
        "lvl": 0
      },
      {
        "ch": "低估",
        "en": "underestimate",
        "lvl": 0
      },
      {
        "ch": "低沉",
        "en": "low & deep (of voice) / muffled",
        "lvl": 0
      },
      {
        "ch": "降低",
        "en": "reduce / lower",
        "lvl": 2
      },
      {
        "ch": "严重",
        "en": "grave / serious / critical",
        "lvl": 2
      },
      {
        "ch": "严肃",
        "en": "serious / severe",
        "lvl": 0
      },
      {
        "ch": "严酷",
        "en": "harsh / cut-throat (of a competition)",
        "lvl": 0
      },
      {
        "ch": "兴趣",
        "en": "interest",
        "lvl": 0
      },
      {
        "ch": "乐趣",
        "en": "interest / delight",
        "lvl": 0
      },
      {
        "ch": "有趣",
        "en": "interesting / fascinating / amusing",
        "lvl": 2
      },
      {
        "ch": "趣味",
        "en": "taste / savor / liking",
        "lvl": 0
      },
      {
        "ch": "表哥",
        "en": "elder male cousin",
        "lvl": 0
      },
      {
        "ch": "表弟",
        "en": "younger male cousin",
        "lvl": 0
      },
      {
        "ch": "表姐",
        "en": "elder female cousin",
        "lvl": 0
      },
      {
        "ch": "表妹",
        "en": "younger female cousin",
        "lvl": 0
      },
      {
        "ch": "表面",
        "en": "surface / appearance / exterior",
        "lvl": 2
      },
      {
        "ch": "表演",
        "en": "perform(ance) / show",
        "lvl": 2
      },
      {
        "ch": "表达",
        "en": "express / convey",
        "lvl": 2
      },
      {
        "ch": "表情",
        "en": "expression",
        "lvl": 0
      },
      {
        "ch": "放大",
        "en": "enlarge",
        "lvl": 0
      },
      {
        "ch": "放心",
        "en": "be at ease / feel relieved / reassurance",
        "lvl": 1
      },
      {
        "ch": "放学",
        "en": "off school",
        "lvl": 0
      },
      {
        "ch": "放过",
        "en": "miss / let slip",
        "lvl": 0
      },
      {
        "ch": "放假",
        "en": "holiday / vacation / have a vacation",
        "lvl": 0
      },
      {
        "ch": "放晴",
        "en": "(of weather) clear up",
        "lvl": 0
      },
      {
        "ch": "危机",
        "en": "crisis",
        "lvl": 0
      },
      {
        "ch": "危险",
        "en": "danger(ous)",
        "lvl": 2
      },
      {
        "ch": "危害",
        "en": "endanger / jeopardize",
        "lvl": 0
      },
      {
        "ch": "保险",
        "en": "insurance / insure / secure",
        "lvl": 2
      },
      {
        "ch": "避险",
        "en": "avoid danger / minimize risk / hedge fund",
        "lvl": 0
      },
      {
        "ch": "冒险",
        "en": "take risks / adventure / adventurous",
        "lvl": 0
      },
      {
        "ch": "普通",
        "en": "ordinary / common",
        "lvl": 0
      },
      {
        "ch": "普通话",
        "en": "Mandarin",
        "lvl": 2
      },
      {
        "ch": "普及",
        "en": "spread among people / popularize / popular / widespread",
        "lvl": 0
      },
      {
        "ch": "普洱茶",
        "en": "tea from Yunnan province",
        "lvl": 0
      },
      {
        "ch": "通常",
        "en": "regular / usual / usually",
        "lvl": 0
      },
      {
        "ch": "通过",
        "en": "by means of / via / through / get through",
        "lvl": 2
      },
      {
        "ch": "通知",
        "en": "notice / notification / notify",
        "lvl": 2
      },
      {
        "ch": "交通",
        "en": "transportation / communication / traffic",
        "lvl": 2
      },
      {
        "ch": "人民币",
        "en": "RMB",
        "lvl": 0
      },
      {
        "ch": "歌手",
        "en": "singer",
        "lvl": 0
      },
      {
        "ch": "王子",
        "en": "prince",
        "lvl": 0
      },
      {
        "ch": "奶酪",
        "en": "cheese",
        "lvl": 0
      },
      {
        "ch": "酸奶",
        "en": "yoghurt",
        "lvl": 0
      },
      {
        "ch": "奶奶",
        "en": "paternal grandmother",
        "lvl": 1
      },
      {
        "ch": "爷爷",
        "en": "paternal grandfather",
        "lvl": 1
      },
      {
        "ch": "结婚",
        "en": "marry",
        "lvl": 1
      },
      {
        "ch": "结束",
        "en": "end(ing)",
        "lvl": 1
      },
      {
        "ch": "三明治",
        "en": "sandwich",
        "lvl": 0
      },
      {
        "ch": "西红柿",
        "en": "tomato",
        "lvl": 2
      },
      {
        "ch": "省钱",
        "en": "save money",
        "lvl": 0
      },
      {
        "ch": "穆斯林",
        "en": "Muslim",
        "lvl": 0
      },
      {
        "ch": "河岸",
        "en": "river bank",
        "lvl": 0
      },
      {
        "ch": "港口",
        "en": "port / harbor",
        "lvl": 0
      },
      {
        "ch": "香港",
        "en": "Hong Kong",
        "lvl": 1
      },
      {
        "ch": "香蕉",
        "en": "banana",
        "lvl": 1
      },
      {
        "ch": "步行街",
        "en": "pedestrian street",
        "lvl": 0
      },
      {
        "ch": "存在",
        "en": "exist / existence",
        "lvl": 0
      },
      {
        "ch": "存款",
        "en": "deposit / saving",
        "lvl": 0
      },
      {
        "ch": "迟到",
        "en": "arrive late",
        "lvl": 1
      },
      {
        "ch": "售票处",
        "en": "ticket office",
        "lvl": 0
      },
      {
        "ch": "浴室",
        "en": "bathroom",
        "lvl": 0
      },
      {
        "ch": "车票",
        "en": "bus/train ticket",
        "lvl": 0
      },
      {
        "ch": "网站",
        "en": "website / node",
        "lvl": 2
      },
      {
        "ch": "站台",
        "en": "railway platform",
        "lvl": 0
      },
      {
        "ch": "出租车",
        "en": "taxi",
        "lvl": 0
      },
      {
        "ch": "硬币",
        "en": "coin",
        "lvl": 0
      },
      {
        "ch": "卧铺",
        "en": "sleeper (train/bus)",
        "lvl": 0
      },
      {
        "ch": "登录",
        "en": "register / log in",
        "lvl": 0
      },
      {
        "ch": "登机",
        "en": "board a plane",
        "lvl": 0
      },
      {
        "ch": "登机牌",
        "en": "boarding pass",
        "lvl": 2
      },
      {
        "ch": "网吧",
        "en": "internet cafe",
        "lvl": 0
      },
      {
        "ch": "网页",
        "en": "web page",
        "lvl": 0
      },
      {
        "ch": "网球",
        "en": "tennis",
        "lvl": 2
      },
      {
        "ch": "酒吧",
        "en": "bar / pub",
        "lvl": 0
      },
      {
        "ch": "逛街",
        "en": "go shopping",
        "lvl": 0
      },
      {
        "ch": "小卖部",
        "en": "small shop",
        "lvl": 0
      },
      {
        "ch": "风景",
        "en": "scenery",
        "lvl": 0
      },
      {
        "ch": "刮风",
        "en": "windy",
        "lvl": 1
      },
      {
        "ch": "态度",
        "en": "attitude / approach",
        "lvl": 2
      },
      {
        "ch": "雾气",
        "en": "fog",
        "lvl": 0
      },
      {
        "ch": "吃醋",
        "en": "jealousy / feel jealous",
        "lvl": 0
      },
      {
        "ch": "煮饭",
        "en": "cook",
        "lvl": 0
      },
      {
        "ch": "炒菜",
        "en": "stir fry / stir-fried dish",
        "lvl": 0
      },
      {
        "ch": "炒菜锅",
        "en": "wok / frying pan",
        "lvl": 0
      },
      {
        "ch": "炒面",
        "en": "stir-fried noodle",
        "lvl": 0
      },
      {
        "ch": "烤鸭",
        "en": "roast duck",
        "lvl": 2
      },
      {
        "ch": "烤炉",
        "en": "oven",
        "lvl": 0
      },
      {
        "ch": "烤面包",
        "en": "toast",
        "lvl": 1
      },
      {
        "ch": "面包",
        "en": "bread",
        "lvl": 1
      },
      {
        "ch": "餐厅",
        "en": "canteen / restaurant",
        "lvl": 2
      },
      {
        "ch": "茄子",
        "en": "aubergine",
        "lvl": 0
      },
      {
        "ch": "青菜",
        "en": "greengrocery / vegetable",
        "lvl": 0
      },
      {
        "ch": "豆子",
        "en": "bean",
        "lvl": 0
      },
      {
        "ch": "豆腐",
        "en": "tofu",
        "lvl": 0
      },
      {
        "ch": "土豆",
        "en": "potato",
        "lvl": 0
      },
      {
        "ch": "豌豆",
        "en": "pea",
        "lvl": 0
      },
      {
        "ch": "面条",
        "en": "noodle",
        "lvl": 1
      },
      {
        "ch": "拉面",
        "en": "pulled noodle",
        "lvl": 0
      },
      {
        "ch": "对虾",
        "en": "prawn / shrimp",
        "lvl": 0
      },
      {
        "ch": "龙虾",
        "en": "lobster",
        "lvl": 0
      },
      {
        "ch": "梨子",
        "en": "pear",
        "lvl": 0
      },
      {
        "ch": "咸菜",
        "en": "pickle / salted vegetable",
        "lvl": 0
      },
      {
        "ch": "麻将",
        "en": "mahjong",
        "lvl": 0
      },
      {
        "ch": "麻花",
        "en": "fried dough twist",
        "lvl": 0
      },
      {
        "ch": "芝麻",
        "en": "sesame",
        "lvl": 0
      },
      {
        "ch": "辣椒",
        "en": "chili / hot pepper",
        "lvl": 0
      },
      {
        "ch": "筷子",
        "en": "chopsticks",
        "lvl": 1
      },
      {
        "ch": "员工",
        "en": "staff",
        "lvl": 0
      },
      {
        "ch": "成员",
        "en": "member",
        "lvl": 0
      },
      {
        "ch": "会员",
        "en": "member",
        "lvl": 0
      },
      {
        "ch": "孔雀",
        "en": "peacock",
        "lvl": 0
      },
      {
        "ch": "艺术",
        "en": "art",
        "lvl": 2
      },
      {
        "ch": "魔术",
        "en": "magic",
        "lvl": 0
      },
      {
        "ch": "武术",
        "en": "martial art",
        "lvl": 0
      },
      {
        "ch": "玉米",
        "en": "corn / maze",
        "lvl": 0
      },
      {
        "ch": "龙船",
        "en": "dragon boat (festival)",
        "lvl": 0
      },
      {
        "ch": "描写",
        "en": "description / depiction / describe / depict",
        "lvl": 0
      },
      {
        "ch": "清真寺",
        "en": "mosque",
        "lvl": 0
      },
      {
        "ch": "寺庙",
        "en": "temple",
        "lvl": 0
      },
      {
        "ch": "纸币",
        "en": "banknote",
        "lvl": 0
      },
      {
        "ch": "报纸",
        "en": "newspaper",
        "lvl": 1
      },
      {
        "ch": "画画",
        "en": "paint",
        "lvl": 0
      },
      {
        "ch": "画家",
        "en": "painter",
        "lvl": 0
      },
      {
        "ch": "画展",
        "en": "exhibition",
        "lvl": 0
      },
      {
        "ch": "诗人",
        "en": "poet",
        "lvl": 0
      },
      {
        "ch": "故宫",
        "en": "the forbidden palace",
        "lvl": 0
      },
      {
        "ch": "王宫",
        "en": "royal palace",
        "lvl": 0
      },
      {
        "ch": "佛教",
        "en": "Buddhism",
        "lvl": 0
      },
      {
        "ch": "歌词",
        "en": "lyrics",
        "lvl": 0
      },
      {
        "ch": "演员",
        "en": "actor / performer",
        "lvl": 2
      },
      {
        "ch": "演唱会",
        "en": "concert",
        "lvl": 0
      },
      {
        "ch": "小说",
        "en": "novel / fiction",
        "lvl": 2
      },
      {
        "ch": "电子邮件",
        "en": "email",
        "lvl": 1
      },
      {
        "ch": "篮球",
        "en": "basketball",
        "lvl": 0
      },
      {
        "ch": "乒乓球",
        "en": "ping pong",
        "lvl": 2
      },
      {
        "ch": "生病",
        "en": "sick / get ill",
        "lvl": 1
      },
      {
        "ch": "生气",
        "en": "angry / pissed-off / take offense",
        "lvl": 1
      },
      {
        "ch": "推荐",
        "en": "recommend",
        "lvl": 0
      },
      {
        "ch": "看病",
        "en": "see a doctor/patient",
        "lvl": 0
      },
      {
        "ch": "用餐",
        "en": "have a meal",
        "lvl": 0
      },
      {
        "ch": "没用",
        "en": "useless / worthless",
        "lvl": 0
      },
      {
        "ch": "面对面",
        "en": "face-to-face",
        "lvl": 0
      },
      {
        "ch": "疑问",
        "en": "doubt",
        "lvl": 0
      },
      {
        "ch": "请客",
        "en": "invite to a meal / treat guests",
        "lvl": 0
      },
      {
        "ch": "不客气",
        "en": "your welcome",
        "lvl": 1
      },
      {
        "ch": "别客气",
        "en": "your welcome",
        "lvl": 1
      },
      {
        "ch": "蛋糕",
        "en": "cake",
        "lvl": 1
      },
      {
        "ch": "当然",
        "en": "of course / certainly / natural",
        "lvl": 1
      },
      {
        "ch": "锻炼",
        "en": "exercise / workout",
        "lvl": 1
      },
      {
        "ch": "发现",
        "en": "discover / discovery",
        "lvl": 1
      },
      {
        "ch": "感兴趣",
        "en": "be interested",
        "lvl": 1
      },
      {
        "ch": "根据",
        "en": "according to / based on / basis / on the basis of",
        "lvl": 1
      },
      {
        "ch": "故事",
        "en": "story / narrative",
        "lvl": 1
      },
      {
        "ch": "检查",
        "en": "inspection / inspect",
        "lvl": 1
      },
      {
        "ch": "简单",
        "en": "simple / simplicity",
        "lvl": 1
      },
      {
        "ch": "健康",
        "en": "health(y)",
        "lvl": 1
      },
      {
        "ch": "街道",
        "en": "street",
        "lvl": 1
      },
      {
        "ch": "句子",
        "en": "sentence",
        "lvl": 1
      },
      {
        "ch": "聊天",
        "en": "chat / gossip",
        "lvl": 1
      },
      {
        "ch": "了解",
        "en": "understand / find out",
        "lvl": 1
      },
      {
        "ch": "留学",
        "en": "study abroad",
        "lvl": 1
      },
      {
        "ch": "帽子",
        "en": "hat / cap",
        "lvl": 1
      },
      {
        "ch": "年级",
        "en": "grade",
        "lvl": 1
      },
      {
        "ch": "努力",
        "en": "great effort / exertion / strive",
        "lvl": 1
      },
      {
        "ch": "爬山",
        "en": "climb / hiking / alpinism",
        "lvl": 1
      },
      {
        "ch": "盘子",
        "en": "plate / tray",
        "lvl": 1
      },
      {
        "ch": "瓶子",
        "en": "bottle",
        "lvl": 1
      },
      {
        "ch": "其实",
        "en": "actually / really",
        "lvl": 1
      },
      {
        "ch": "奇怪",
        "en": "strange / odd(ly)",
        "lvl": 1
      },
      {
        "ch": "起飞",
        "en": "take off",
        "lvl": 1
      },
      {
        "ch": "起来",
        "en": "beginning an action / upward movement / stand up",
        "lvl": 1
      },
      {
        "ch": "叔叔",
        "en": "father's younger brother",
        "lvl": 1
      },
      {
        "ch": "提高",
        "en": "raise / increase",
        "lvl": 1
      },
      {
        "ch": "体育",
        "en": "sports / physical education",
        "lvl": 1
      },
      {
        "ch": "突然",
        "en": "sudden(ly)",
        "lvl": 1
      },
      {
        "ch": "相信",
        "en": "believe / trust",
        "lvl": 1
      },
      {
        "ch": "信用卡",
        "en": "credit card",
        "lvl": 1
      },
      {
        "ch": "选择",
        "en": "pick / choice",
        "lvl": 1
      },
      {
        "ch": "一般",
        "en": "ordinary / general(ly)",
        "lvl": 1
      },
      {
        "ch": "遇到",
        "en": "meet / run into",
        "lvl": 1
      },
      {
        "ch": "愿意",
        "en": "want / wish / willing",
        "lvl": 1
      },
      {
        "ch": "照顾",
        "en": "take care of / show consideration",
        "lvl": 1
      },
      {
        "ch": "终于",
        "en": "finally / in the end",
        "lvl": 1
      },
      {
        "ch": "主要",
        "en": "main / principal / major",
        "lvl": 1
      },
      {
        "ch": "注意",
        "en": "take note / (pay) attention / attentive",
        "lvl": 1
      },
      {
        "ch": "总是",
        "en": "always",
        "lvl": 1
      },
      {
        "ch": "安排",
        "en": "arrange(ment)",
        "lvl": 2
      },
      {
        "ch": "按照",
        "en": "according to / on the basis of",
        "lvl": 2
      },
      {
        "ch": "包子",
        "en": "steamed stuffed bun",
        "lvl": 2
      },
      {
        "ch": "保护",
        "en": "protect(ion)",
        "lvl": 2
      },
      {
        "ch": "抱歉",
        "en": "be sorry / regret",
        "lvl": 2
      },
      {
        "ch": "比如",
        "en": "for example / such as",
        "lvl": 2
      },
      {
        "ch": "毕业",
        "en": "graduate / graduation",
        "lvl": 2
      },
      {
        "ch": "标准",
        "en": "standard / criterion",
        "lvl": 2
      },
      {
        "ch": "表格",
        "en": "form / table",
        "lvl": 2
      },
      {
        "ch": "饼干",
        "en": "biscuit / cookie",
        "lvl": 2
      },
      {
        "ch": "并且",
        "en": "moreover / and",
        "lvl": 2
      },
      {
        "ch": "博士",
        "en": "doctor",
        "lvl": 2
      },
      {
        "ch": "不得不",
        "en": "have no choice but / cant help it",
        "lvl": 2
      },
      {
        "ch": "不管",
        "en": "no matter",
        "lvl": 2
      },
      {
        "ch": "不仅",
        "en": "not only ",
        "lvl": 2
      },
      {
        "ch": "部分",
        "en": "part / section",
        "lvl": 2
      },
      {
        "ch": "差不多",
        "en": "almost / about the same",
        "lvl": 2
      },
      {
        "ch": "超过",
        "en": "surpass / exceed / overtake",
        "lvl": 2
      },
      {
        "ch": "吃惊",
        "en": "be startled/shocked/amazed",
        "lvl": 2
      },
      {
        "ch": "重新",
        "en": "again",
        "lvl": 2
      },
      {
        "ch": "抽烟",
        "en": "smoke",
        "lvl": 2
      },
      {
        "ch": "出现",
        "en": "appear(ance) / arise / emerge",
        "lvl": 2
      },
      {
        "ch": "传真",
        "en": "fax / facsimile",
        "lvl": 2
      },
      {
        "ch": "粗心",
        "en": "careless / thoughtless",
        "lvl": 2
      },
      {
        "ch": "答案",
        "en": "answer / solution",
        "lvl": 2
      },
      {
        "ch": "打扮",
        "en": "decorate / adorn / style of dress",
        "lvl": 2
      },
      {
        "ch": "打扰",
        "en": "disturb / bother",
        "lvl": 2
      },
      {
        "ch": "打印",
        "en": "print / seal",
        "lvl": 2
      },
      {
        "ch": "打招呼",
        "en": "greet by word or action / give prior notice",
        "lvl": 2
      },
      {
        "ch": "打折",
        "en": "give a discount",
        "lvl": 2
      },
      {
        "ch": "大约",
        "en": "approximately / about",
        "lvl": 2
      },
      {
        "ch": "大夫",
        "en": "doctor",
        "lvl": 2
      },
      {
        "ch": "当时",
        "en": "then / while",
        "lvl": 2
      },
      {
        "ch": "导游",
        "en": "tour guide / guidebook / conduct a tour",
        "lvl": 2
      },
      {
        "ch": "地球",
        "en": "the Earth / planet",
        "lvl": 2
      },
      {
        "ch": "堵车",
        "en": "traffic jam",
        "lvl": 2
      },
      {
        "ch": "肚子",
        "en": "belly / abdomen",
        "lvl": 2
      },
      {
        "ch": "短信",
        "en": "message",
        "lvl": 2
      },
      {
        "ch": "对话",
        "en": "dialog",
        "lvl": 2
      },
      {
        "ch": "烦恼",
        "en": "agony / agonize / upset",
        "lvl": 2
      },
      {
        "ch": "反对",
        "en": "fight against / oppose / opposition",
        "lvl": 2
      },
      {
        "ch": "放弃",
        "en": "give up / renounce / abandon(ment)",
        "lvl": 2
      },
      {
        "ch": "放暑假",
        "en": "take summer vacation",
        "lvl": 2
      },
      {
        "ch": "放松",
        "en": "loosen / relax",
        "lvl": 2
      },
      {
        "ch": "符合",
        "en": "conform / accord / in accordance with",
        "lvl": 2
      },
      {
        "ch": "付款",
        "en": "pay(ment)",
        "lvl": 2
      },
      {
        "ch": "负责",
        "en": "be in charge of",
        "lvl": 2
      },
      {
        "ch": "高速公路",
        "en": "highway",
        "lvl": 2
      },
      {
        "ch": "胳膊",
        "en": "arm",
        "lvl": 2
      },
      {
        "ch": "购物",
        "en": "shopping",
        "lvl": 2
      },
      {
        "ch": "估计",
        "en": "estimate / reckon",
        "lvl": 2
      },
      {
        "ch": "鼓励",
        "en": "encourage",
        "lvl": 2
      },
      {
        "ch": "故意",
        "en": "deliberately / intentional(ly)",
        "lvl": 2
      },
      {
        "ch": "关键",
        "en": "key / crucial",
        "lvl": 2
      },
      {
        "ch": "观众",
        "en": "spectators / audience",
        "lvl": 2
      },
      {
        "ch": "广告",
        "en": "advertise(ment)",
        "lvl": 2
      },
      {
        "ch": "规定",
        "en": "provision / provide / stipulate",
        "lvl": 2
      },
      {
        "ch": "果汁",
        "en": "fruit juice",
        "lvl": 2
      },
      {
        "ch": "过程",
        "en": "course of events / process / procedure",
        "lvl": 2
      },
      {
        "ch": "海洋",
        "en": "ocean",
        "lvl": 2
      },
      {
        "ch": "害羞",
        "en": "blush / shy",
        "lvl": 2
      },
      {
        "ch": "号码",
        "en": "number",
        "lvl": 2
      },
      {
        "ch": "合格",
        "en": "qualified / eligible / qualification",
        "lvl": 2
      },
      {
        "ch": "盒子",
        "en": "box",
        "lvl": 2
      },
      {
        "ch": "后悔",
        "en": "regret / repent",
        "lvl": 2
      },
      {
        "ch": "互联网",
        "en": "the Internet",
        "lvl": 2
      },
      {
        "ch": "回忆",
        "en": "recall / recollection",
        "lvl": 2
      },
      {
        "ch": "获得",
        "en": "obtain / receive",
        "lvl": 2
      },
      {
        "ch": "基础",
        "en": "base / foundation",
        "lvl": 2
      },
      {
        "ch": "激动",
        "en": "excite / exciting",
        "lvl": 2
      },
      {
        "ch": "积极",
        "en": "active / energetic / positive",
        "lvl": 2
      },
      {
        "ch": "即使",
        "en": "even if",
        "lvl": 2
      },
      {
        "ch": "及时",
        "en": "in time / timely",
        "lvl": 2
      },
      {
        "ch": "怀疑",
        "en": "suspect / suspicion / skeptical",
        "lvl": 2
      },
      {
        "ch": "护士",
        "en": "nurse",
        "lvl": 2
      },
      {
        "ch": "寒假",
        "en": "winter vacation",
        "lvl": 2
      },
      {
        "ch": "航班",
        "en": "scheduled flight / flight number",
        "lvl": 2
      },
      {
        "ch": "广播",
        "en": "broadcast",
        "lvl": 2
      },
      {
        "ch": "管理",
        "en": "supervise / manage(ment)",
        "lvl": 2
      },
      {
        "ch": "感动",
        "en": "move / moving / sensation",
        "lvl": 2
      },
      {
        "ch": "丰富",
        "en": "rich / abundant",
        "lvl": 2
      },
      {
        "ch": "否则",
        "en": "if not / otherwise",
        "lvl": 2
      },
      {
        "ch": "发展",
        "en": "develop(ment) / grow(th)",
        "lvl": 2
      },
      {
        "ch": "翻译",
        "en": "translate / translation",
        "lvl": 2
      },
      {
        "ch": "调查",
        "en": "investigate / investigation / survey",
        "lvl": 2
      },
      {
        "ch": "动作",
        "en": "movement / action",
        "lvl": 2
      },
      {
        "ch": "打针",
        "en": "give/have an injection",
        "lvl": 2
      },
      {
        "ch": "窗户",
        "en": "window",
        "lvl": 2
      },
      {
        "ch": "成为",
        "en": "become",
        "lvl": 2
      },
      {
        "ch": "诚实",
        "en": "honest(y)",
        "lvl": 2
      },
      {
        "ch": "材料",
        "en": "material / stuff / data",
        "lvl": 2
      },
      {
        "ch": "参观",
        "en": "look around / inspect",
        "lvl": 2
      },
      {
        "ch": "表扬",
        "en": "praise / commend",
        "lvl": 2
      },
      {
        "ch": "表示",
        "en": "express(ion) / indicate",
        "lvl": 2
      },
      {
        "ch": "保证",
        "en": "guarantee / assure(d)",
        "lvl": 2
      },
      {
        "ch": "既然",
        "en": "since / as",
        "lvl": 2
      },
      {
        "ch": "继续",
        "en": "continue / proceed",
        "lvl": 2
      },
      {
        "ch": "加班",
        "en": "work overtime",
        "lvl": 2
      },
      {
        "ch": "坚持",
        "en": "persist(ence) / remain committed",
        "lvl": 2
      },
      {
        "ch": "减肥",
        "en": "lose weight",
        "lvl": 2
      },
      {
        "ch": "减少",
        "en": "lower / decrease",
        "lvl": 2
      },
      {
        "ch": "建议",
        "en": "propose / suggest(ion)",
        "lvl": 2
      },
      {
        "ch": "将来",
        "en": "future",
        "lvl": 2
      },
      {
        "ch": "奖金",
        "en": "reward / premium",
        "lvl": 2
      },
      {
        "ch": "降落",
        "en": "descend / land(ing)",
        "lvl": 2
      },
      {
        "ch": "郊区",
        "en": "suburbs / outskirt",
        "lvl": 2
      },
      {
        "ch": "骄傲",
        "en": "arrogant / conceited / pretension",
        "lvl": 2
      },
      {
        "ch": "饺子",
        "en": "dumpling",
        "lvl": 2
      },
      {
        "ch": "教授",
        "en": "professor / instruct",
        "lvl": 2
      },
      {
        "ch": "接受",
        "en": "accept / receive / reception",
        "lvl": 2
      },
      {
        "ch": "接着",
        "en": "continue / carry on / then",
        "lvl": 2
      },
      {
        "ch": "结果",
        "en": "result / effect",
        "lvl": 2
      },
      {
        "ch": "节约",
        "en": "saving / economize / economy / frugal",
        "lvl": 2
      },
      {
        "ch": "解释",
        "en": "explanation / explain / resolve / determinate",
        "lvl": 2
      },
      {
        "ch": "尽管",
        "en": "despite / although / dont hesitate to / without hesitation",
        "lvl": 2
      },
      {
        "ch": "紧张",
        "en": "nervous / intense / scarce",
        "lvl": 2
      },
      {
        "ch": "禁止",
        "en": "prohibit / ban",
        "lvl": 2
      },
      {
        "ch": "京剧",
        "en": "Beijing opera",
        "lvl": 2
      },
      {
        "ch": "精彩",
        "en": "wonderful / brilliant",
        "lvl": 2
      },
      {
        "ch": "经济",
        "en": "economy / economic",
        "lvl": 2
      },
      {
        "ch": "经历",
        "en": "experience / go through",
        "lvl": 2
      },
      {
        "ch": "景色",
        "en": "scene(ry) / landscape",
        "lvl": 2
      },
      {
        "ch": "竞争",
        "en": "compete / competition",
        "lvl": 2
      },
      {
        "ch": "竟然",
        "en": "unexpectedly / actually / g as far as",
        "lvl": 2
      },
      {
        "ch": "镜子",
        "en": "mirror",
        "lvl": 2
      },
      {
        "ch": "究竟",
        "en": "after all / outcome / actually",
        "lvl": 2
      },
      {
        "ch": "举办",
        "en": "conduct / hold",
        "lvl": 2
      },
      {
        "ch": "举行",
        "en": "hold (meeting/ceremony/etc..)",
        "lvl": 2
      },
      {
        "ch": "拒绝",
        "en": "refuse / decline / refusal",
        "lvl": 2
      },
      {
        "ch": "聚会",
        "en": "party / get together / gathering",
        "lvl": 2
      },
      {
        "ch": "距离",
        "en": "distance / be apart",
        "lvl": 2
      },
      {
        "ch": "看法",
        "en": "way of looking at sth / opinion",
        "lvl": 2
      },
      {
        "ch": "咳嗽",
        "en": "cough",
        "lvl": 2
      },
      {
        "ch": "可怜",
        "en": "pity / pitiful / take compassion on",
        "lvl": 2
      },
      {
        "ch": "可惜",
        "en": "what a pity / unfortunately",
        "lvl": 2
      },
      {
        "ch": "肯定",
        "en": "be sure / confirm / certain(ty) / affirm(ative)",
        "lvl": 2
      },
      {
        "ch": "矿泉水",
        "en": "mineral spring water",
        "lvl": 2
      },
      {
        "ch": "困难",
        "en": "difficult(y) / trouble",
        "lvl": 2
      },
      {
        "ch": "垃圾桶",
        "en": "rubbish bin",
        "lvl": 2
      },
      {
        "ch": "浪费",
        "en": "waste / squander",
        "lvl": 2
      },
      {
        "ch": "浪漫",
        "en": "romantic",
        "lvl": 2
      },
      {
        "ch": "老虎",
        "en": "tiger",
        "lvl": 2
      },
      {
        "ch": "礼拜天",
        "en": "Sunday",
        "lvl": 2
      },
      {
        "ch": "厉害",
        "en": "difficult to deal with / serious / tremendous",
        "lvl": 2
      },
      {
        "ch": "联系",
        "en": "connection / contact / integrate / in touch with",
        "lvl": 2
      },
      {
        "ch": "另外",
        "en": "additional / in addition / moreover",
        "lvl": 2
      },
      {
        "ch": "毛巾",
        "en": "towel",
        "lvl": 2
      },
      {
        "ch": "迷路",
        "en": "lose the way / get lost",
        "lvl": 2
      },
      {
        "ch": "密码",
        "en": "secret code / password",
        "lvl": 2
      },
      {
        "ch": "免费",
        "en": "free of charge / gratis",
        "lvl": 2
      },
      {
        "ch": "目的",
        "en": "purpose / target",
        "lvl": 2
      },
      {
        "ch": "耐心",
        "en": "patient / sufferance",
        "lvl": 2
      },
      {
        "ch": "难道",
        "en": "dont tell me / could it be",
        "lvl": 2
      },
      {
        "ch": "难受",
        "en": "feel unwell / suffer pain",
        "lvl": 2
      },
      {
        "ch": "偶尔",
        "en": "occasionally",
        "lvl": 2
      },
      {
        "ch": "排队",
        "en": "line up / form a line",
        "lvl": 2
      },
      {
        "ch": "排列",
        "en": "arrange(ment) / array",
        "lvl": 2
      },
      {
        "ch": "判断",
        "en": "decide / determine / judgment",
        "lvl": 2
      },
      {
        "ch": "批评",
        "en": "criticize / criticism",
        "lvl": 2
      },
      {
        "ch": "皮肤",
        "en": "skin",
        "lvl": 2
      },
      {
        "ch": "平时",
        "en": "usually / in peacetime",
        "lvl": 2
      },
      {
        "ch": "普遍",
        "en": "universal / common",
        "lvl": 2
      },
      {
        "ch": "其次",
        "en": "next / secondly",
        "lvl": 2
      },
      {
        "ch": "其中",
        "en": "among / in",
        "lvl": 2
      },
      {
        "ch": "签证",
        "en": "visa / certificate / certify",
        "lvl": 2
      },
      {
        "ch": "巧克力",
        "en": "chocolate",
        "lvl": 2
      },
      {
        "ch": "区别",
        "en": "difference / distinguish / distinction",
        "lvl": 2
      },
      {
        "ch": "全部",
        "en": "whole / entire",
        "lvl": 2
      },
      {
        "ch": "缺点",
        "en": "fault / shortcoming",
        "lvl": 2
      },
      {
        "ch": "缺少",
        "en": "lack / shortage",
        "lvl": 2
      },
      {
        "ch": "确实",
        "en": "indeed / real(ly) / reliable",
        "lvl": 2
      },
      {
        "ch": "任何",
        "en": "any / whatever / whatsoever",
        "lvl": 2
      },
      {
        "ch": "任务",
        "en": "mission / assignment / task",
        "lvl": 2
      },
      {
        "ch": "仍然",
        "en": "still / yet",
        "lvl": 2
      },
      {
        "ch": "散步",
        "en": "go for a walk",
        "lvl": 2
      },
      {
        "ch": "沙发",
        "en": "sofa",
        "lvl": 2
      },
      {
        "ch": "伤心",
        "en": "grieve / feel deeply hurt",
        "lvl": 2
      },
      {
        "ch": "稍微",
        "en": "a little / trifle",
        "lvl": 2
      },
      {
        "ch": "勺子",
        "en": "scoop / ladle",
        "lvl": 2
      },
      {
        "ch": "社会",
        "en": "society",
        "lvl": 2
      },
      {
        "ch": "申请",
        "en": "apply (for) / application",
        "lvl": 2
      },
      {
        "ch": "甚至",
        "en": "even / so much so that",
        "lvl": 2
      },
      {
        "ch": "生命",
        "en": "life / living / biological",
        "lvl": 2
      },
      {
        "ch": "失败",
        "en": "be defeated / lose / fail(ure)",
        "lvl": 2
      },
      {
        "ch": "失望",
        "en": "disappointed / lose hope / despair / letdown",
        "lvl": 2
      },
      {
        "ch": "实际",
        "en": "actual / real(ity)",
        "lvl": 2
      },
      {
        "ch": "使用",
        "en": "use / employ / apply",
        "lvl": 2
      },
      {
        "ch": "是否",
        "en": "whether",
        "lvl": 2
      },
      {
        "ch": "适应",
        "en": "suit / fit / be suitable / adapt",
        "lvl": 2
      },
      {
        "ch": "收入",
        "en": "include / income / revenue",
        "lvl": 2
      },
      {
        "ch": "收拾",
        "en": "put in order / pack / repair / sweeping",
        "lvl": 2
      },
      {
        "ch": "首先",
        "en": "first (of all) / above all",
        "lvl": 2
      },
      {
        "ch": "受到",
        "en": "suffer / receive / be given",
        "lvl": 2
      },
      {
        "ch": "售货员",
        "en": "salesperson",
        "lvl": 2
      },
      {
        "ch": "熟悉",
        "en": "be familiar with / know well",
        "lvl": 2
      },
      {
        "ch": "顺便",
        "en": "conveniently / in passing",
        "lvl": 2
      },
      {
        "ch": "顺利",
        "en": "smoothly / without a hitch",
        "lvl": 2
      },
      {
        "ch": "顺序",
        "en": "order / sequence / in succession",
        "lvl": 2
      },
      {
        "ch": "说明",
        "en": "explain / explanation",
        "lvl": 2
      },
      {
        "ch": "硕士",
        "en": "master's degree",
        "lvl": 2
      },
      {
        "ch": "塑料袋",
        "en": "plastic bag",
        "lvl": 2
      },
      {
        "ch": "速度",
        "en": "speed / rate",
        "lvl": 2
      },
      {
        "ch": "随着",
        "en": "along with / in the wake of",
        "lvl": 2
      },
      {
        "ch": "孙子",
        "en": "grandson",
        "lvl": 2
      },
      {
        "ch": "所有",
        "en": "all / own / ownership",
        "lvl": 2
      },
      {
        "ch": "弹钢琴",
        "en": "play the piano",
        "lvl": 2
      },
      {
        "ch": "讨论",
        "en": "talk over / discuss",
        "lvl": 2
      },
      {
        "ch": "讨厌",
        "en": "dislike / disagreeable",
        "lvl": 2
      },
      {
        "ch": "提供",
        "en": "supply / provide(d)",
        "lvl": 2
      },
      {
        "ch": "提前",
        "en": "bring forward / advance / in advance",
        "lvl": 2
      },
      {
        "ch": "提醒",
        "en": "call attention to / remind",
        "lvl": 2
      },
      {
        "ch": "填空",
        "en": "fill a job vacancy / fill in a blank",
        "lvl": 2
      },
      {
        "ch": "条件",
        "en": "circumstances / condition / factor / requirement",
        "lvl": 2
      },
      {
        "ch": "推迟",
        "en": "postpone / defer",
        "lvl": 2
      },
      {
        "ch": "袜子",
        "en": "socks / stocking",
        "lvl": 2
      },
      {
        "ch": "完全",
        "en": "complete / whole / totally",
        "lvl": 2
      },
      {
        "ch": "卫生间",
        "en": "bathroom",
        "lvl": 2
      },
      {
        "ch": "文章",
        "en": "article / essay / writings",
        "lvl": 2
      },
      {
        "ch": "污染",
        "en": "pollution / contamination / contaminate(d)",
        "lvl": 2
      },
      {
        "ch": "无聊",
        "en": "bored / silly",
        "lvl": 2
      },
      {
        "ch": "无论",
        "en": "no matter what/how",
        "lvl": 2
      },
      {
        "ch": "误会",
        "en": "misunderstand(ing) / mistake",
        "lvl": 2
      },
      {
        "ch": "吸引",
        "en": "attract / fascinate",
        "lvl": 2
      },
      {
        "ch": "现金",
        "en": "cash",
        "lvl": 2
      },
      {
        "ch": "羡慕",
        "en": "anvious / envy / admire",
        "lvl": 2
      },
      {
        "ch": "相反",
        "en": "opposite / contrary",
        "lvl": 2
      },
      {
        "ch": "相同",
        "en": "identical / same",
        "lvl": 2
      },
      {
        "ch": "详细",
        "en": "detail(ed)",
        "lvl": 2
      },
      {
        "ch": "橡皮",
        "en": "rubber / eraser",
        "lvl": 2
      },
      {
        "ch": "消息",
        "en": "news / information",
        "lvl": 2
      },
      {
        "ch": "小伙子",
        "en": "young man / youngster",
        "lvl": 2
      },
      {
        "ch": "效果",
        "en": "result / effect",
        "lvl": 2
      },
      {
        "ch": "笑话",
        "en": "joke / jest",
        "lvl": 2
      },
      {
        "ch": "辛苦",
        "en": "(work) hard / exhausting",
        "lvl": 2
      },
      {
        "ch": "信封",
        "en": "envelope",
        "lvl": 2
      },
      {
        "ch": "幸福",
        "en": "happiness / happy / blessed",
        "lvl": 2
      },
      {
        "ch": "性别",
        "en": "gender / sex",
        "lvl": 2
      },
      {
        "ch": "性格",
        "en": "character / nature / disposition",
        "lvl": 2
      },
      {
        "ch": "修理",
        "en": "repair / fix",
        "lvl": 2
      },
      {
        "ch": "压力",
        "en": "pressure",
        "lvl": 2
      },
      {
        "ch": "牙膏",
        "en": "toothpaste",
        "lvl": 2
      },
      {
        "ch": "亚洲",
        "en": "Asia",
        "lvl": 2
      },
      {
        "ch": "严格",
        "en": "strict / tight / rigorous",
        "lvl": 2
      },
      {
        "ch": "研究",
        "en": "research / study / investigative",
        "lvl": 2
      },
      {
        "ch": "演出",
        "en": "act / perform(ance) / show",
        "lvl": 2
      },
      {
        "ch": "眼镜",
        "en": "spectacles / eyeglasses",
        "lvl": 2
      },
      {
        "ch": "阳光",
        "en": "sunlight / sunshine",
        "lvl": 2
      },
      {
        "ch": "养成",
        "en": "cultivate / raise / acquire",
        "lvl": 2
      },
      {
        "ch": "邀请",
        "en": "invite / invitation",
        "lvl": 2
      },
      {
        "ch": "要是",
        "en": "if",
        "lvl": 2
      },
      {
        "ch": "钥匙",
        "en": "key",
        "lvl": 2
      },
      {
        "ch": "叶子",
        "en": "foliage / leaf",
        "lvl": 2
      },
      {
        "ch": "一切",
        "en": "every(thing) / all",
        "lvl": 2
      },
      {
        "ch": "引起",
        "en": "cause / lead to / arouse / causation",
        "lvl": 2
      },
      {
        "ch": "印象",
        "en": "impression / reflection",
        "lvl": 2
      },
      {
        "ch": "应聘",
        "en": "accept a job offer / apply for an advertised position",
        "lvl": 2
      },
      {
        "ch": "勇敢",
        "en": "brave / courageous",
        "lvl": 2
      },
      {
        "ch": "永远",
        "en": "forever / eternal",
        "lvl": 2
      },
      {
        "ch": "幽默",
        "en": "humor / humorous",
        "lvl": 2
      },
      {
        "ch": "尤其",
        "en": "especially / particularly",
        "lvl": 2
      },
      {
        "ch": "由于",
        "en": "because of / as a result of",
        "lvl": 2
      },
      {
        "ch": "愉快",
        "en": "cheer(ful) / delightful / pleasant(ly)",
        "lvl": 2
      },
      {
        "ch": "羽毛球",
        "en": "badminton / shuttlecock",
        "lvl": 2
      },
      {
        "ch": "预习",
        "en": "prepare a lesson / prep",
        "lvl": 2
      },
      {
        "ch": "原来",
        "en": "original(ly) / former(ly)",
        "lvl": 2
      },
      {
        "ch": "原谅",
        "en": "excuse / forgive",
        "lvl": 2
      },
      {
        "ch": "约会",
        "en": "appointment / engagement",
        "lvl": 2
      },
      {
        "ch": "暂时",
        "en": "provisional / temporary / temporarily",
        "lvl": 2
      },
      {
        "ch": "责任",
        "en": "responsibility / liability / duty",
        "lvl": 2
      },
      {
        "ch": "增加",
        "en": "raise / increase",
        "lvl": 2
      },
      {
        "ch": "占线",
        "en": "busy line / the line is busy",
        "lvl": 2
      },
      {
        "ch": "招聘",
        "en": "recruitment / advertise job offers ",
        "lvl": 2
      },
      {
        "ch": "整理",
        "en": "arrange / sort out",
        "lvl": 2
      },
      {
        "ch": "正式",
        "en": "formal / official",
        "lvl": 2
      },
      {
        "ch": "证明",
        "en": "proof / certification / prove / certify",
        "lvl": 2
      },
      {
        "ch": "支持",
        "en": "support / be in favor of / endorsement",
        "lvl": 2
      },
      {
        "ch": "值得",
        "en": "be worth / deserve",
        "lvl": 2
      },
      {
        "ch": "植物",
        "en": "plant / vegetation / botanical",
        "lvl": 2
      },
      {
        "ch": "职业",
        "en": "occupation / profession(al)",
        "lvl": 2
      },
      {
        "ch": "只好",
        "en": "have to / without any better option",
        "lvl": 2
      },
      {
        "ch": "只要",
        "en": "if only / so long as",
        "lvl": 2
      },
      {
        "ch": "至少",
        "en": "at least / (to say the) least",
        "lvl": 2
      },
      {
        "ch": "质量",
        "en": "quality / mass",
        "lvl": 2
      },
      {
        "ch": "著名",
        "en": "famous / celebrated",
        "lvl": 2
      },
      {
        "ch": "主意",
        "en": "plan / idea / decision",
        "lvl": 2
      },
      {
        "ch": "祝贺",
        "en": "congratulate / congratulations / congratulatory",
        "lvl": 2
      },
      {
        "ch": "专门",
        "en": "specialist / specialized / specially",
        "lvl": 2
      },
      {
        "ch": "专业",
        "en": "specialty / specialized field / professional",
        "lvl": 2
      },
      {
        "ch": "准确",
        "en": "accurate(ly) / precise(ness)",
        "lvl": 2
      },
      {
        "ch": "准时",
        "en": "on time / punctual",
        "lvl": 2
      },
      {
        "ch": "仔细",
        "en": "(be) careful / attentive",
        "lvl": 2
      },
      {
        "ch": "自然",
        "en": "nature / natural(ly)",
        "lvl": 2
      },
      {
        "ch": "自信",
        "en": "confidence",
        "lvl": 2
      },
      {
        "ch": "总结",
        "en": "sum up / conclude / summary",
        "lvl": 2
      },
      {
        "ch": "尊重",
        "en": "esteem / respect",
        "lvl": 2
      },
      {
        "ch": "爱心",
        "en": "compassion",
        "lvl": 2
      },
      {
        "ch": "安慰",
        "en": "comfort / console",
        "lvl": 2
      },
      {
        "ch": "安装",
        "en": "install(ation) / erect",
        "lvl": 2
      },
      {
        "ch": "熬夜",
        "en": "stay up late",
        "lvl": 2
      },
      {
        "ch": "傍晚",
        "en": "in the evening / at dusk",
        "lvl": 2
      },
      {
        "ch": "包裹",
        "en": "wrap up / bundle / parcel",
        "lvl": 2
      },
      {
        "ch": "包含",
        "en": "contain / include / embody",
        "lvl": 2
      },
      {
        "ch": "包括",
        "en": "comprise / include / involve",
        "lvl": 2
      },
      {
        "ch": "保持",
        "en": "keep / maintain / preserve / holding",
        "lvl": 2
      },
      {
        "ch": "保存",
        "en": "preserve / preservation / save",
        "lvl": 2
      },
      {
        "ch": "保留",
        "en": "retain / preserve / maintain / preservation / retention",
        "lvl": 2
      },
      {
        "ch": "宝贝",
        "en": "treasure / baby / darling",
        "lvl": 2
      },
      {
        "ch": "报道",
        "en": "report",
        "lvl": 2
      },
      {
        "ch": "报到",
        "en": "register / check in / report for duty",
        "lvl": 2
      },
      {
        "ch": "彼此",
        "en": "each other / one another",
        "lvl": 2
      },
      {
        "ch": "比例",
        "en": "proportion / scale",
        "lvl": 2
      },
      {
        "ch": "不见得",
        "en": "not necessarily / not likely",
        "lvl": 2
      },
      {
        "ch": "不耐烦",
        "en": "impatience / impatient",
        "lvl": 2
      },
      {
        "ch": "财产",
        "en": "property / asset",
        "lvl": 2
      },
      {
        "ch": "彩虹",
        "en": "rainbow",
        "lvl": 2
      },
      {
        "ch": "曾经",
        "en": "once / already / former / previously",
        "lvl": 2
      },
      {
        "ch": "叉子",
        "en": "fork",
        "lvl": 2
      },
      {
        "ch": "潮湿",
        "en": "moist / damp",
        "lvl": 2
      },
      {
        "ch": "成分",
        "en": "element / composition / ingredient",
        "lvl": 2
      },
      {
        "ch": "程序",
        "en": "procedure / sequence / program / procedural",
        "lvl": 2
      },
      {
        "ch": "诚恳",
        "en": "sincere / honest",
        "lvl": 2
      },
      {
        "ch": "宠物",
        "en": "house pet",
        "lvl": 2
      },
      {
        "ch": "抽屉",
        "en": "drawer",
        "lvl": 2
      },
      {
        "ch": "抽象",
        "en": "abstract",
        "lvl": 2
      },
      {
        "ch": "吃亏",
        "en": "suffer losses / come to grief / at a disadvantage",
        "lvl": 2
      },
      {
        "ch": "持续",
        "en": "continue / continuous / sustained / preservation",
        "lvl": 2
      },
      {
        "ch": "池塘",
        "en": "pool / pond",
        "lvl": 2
      },
      {
        "ch": "成人",
        "en": "adult",
        "lvl": 2
      },
      {
        "ch": "成立",
        "en": "establish / set up",
        "lvl": 2
      },
      {
        "ch": "吵架",
        "en": "quarrel",
        "lvl": 2
      },
      {
        "ch": "车库",
        "en": "garage",
        "lvl": 2
      },
      {
        "ch": "差距",
        "en": "disparity / gap",
        "lvl": 2
      },
      {
        "ch": "采取",
        "en": "take / adopt",
        "lvl": 2
      },
      {
        "ch": "采访",
        "en": "interview / gather news",
        "lvl": 2
      },
      {
        "ch": "补充",
        "en": "replenish / supplement / supplementary",
        "lvl": 2
      },
      {
        "ch": "不要紧",
        "en": "unimportant / doesnt matter",
        "lvl": 2
      },
      {
        "ch": "不安",
        "en": "unpeaceful / uneasy / disturbed",
        "lvl": 2
      },
      {
        "ch": "毕竟",
        "en": "after all / when all is said & done",
        "lvl": 2
      },
      {
        "ch": "报社",
        "en": "newspaper office",
        "lvl": 2
      },
      {
        "ch": "抱怨",
        "en": "complain(t) / whine",
        "lvl": 2
      },
      {
        "ch": "悲观",
        "en": "pessimistic",
        "lvl": 2
      },
      {
        "ch": "背景",
        "en": "background / context",
        "lvl": 2
      },
      {
        "ch": "被子",
        "en": "quilt",
        "lvl": 2
      },
      {
        "ch": "本科",
        "en": "undergraduate course",
        "lvl": 2
      },
      {
        "ch": "本质",
        "en": "essence / nature / innate",
        "lvl": 2
      },
      {
        "ch": "标志",
        "en": "sign / mark / symbol / indicate",
        "lvl": 2
      },
      {
        "ch": "标点",
        "en": "punctuation / punctuate",
        "lvl": 2
      },
      {
        "ch": "辩论",
        "en": "debate / argument / argue",
        "lvl": 2
      },
      {
        "ch": "鞭炮",
        "en": "firecrackers",
        "lvl": 2
      },
      {
        "ch": "编辑",
        "en": "edit(or) / compile(r)",
        "lvl": 2
      },
      {
        "ch": "避免",
        "en": "avert / avoid / refrain",
        "lvl": 2
      },
      {
        "ch": "冰激凌",
        "en": "ice cream",
        "lvl": 2
      },
      {
        "ch": "病毒",
        "en": "virus",
        "lvl": 2
      },
      {
        "ch": "播放",
        "en": "broadcast / transmit",
        "lvl": 2
      },
      {
        "ch": "玻璃",
        "en": "glass / nylon / plastic",
        "lvl": 2
      },
      {
        "ch": "脖子",
        "en": "neck",
        "lvl": 2
      },
      {
        "ch": "不断",
        "en": "unceasing / uninterrupted / constant",
        "lvl": 2
      },
      {
        "ch": "不得了",
        "en": "extremely / disastrous / desperately / ",
        "lvl": 2
      },
      {
        "ch": "不然",
        "en": "otherwise / or else",
        "lvl": 2
      },
      {
        "ch": "不如",
        "en": "not equal to / inferior to / it would be better",
        "lvl": 2
      },
      {
        "ch": "不足",
        "en": "insufficient / deficiency / not enough / cannot",
        "lvl": 2
      },
      {
        "ch": "步骤",
        "en": "step / move / measure",
        "lvl": 2
      },
      {
        "ch": "部门",
        "en": "department / branch / section",
        "lvl": 2
      }
    ]
  });

  await prisma.hanzibiao.deleteMany({});
  await prisma.hanzibiao.createMany({
    data: [
      { hanzi: '一' },
      { hanzi: '二' },
      { hanzi: '三' },
      { hanzi: '四' },
      { hanzi: '五' },
      { hanzi: '六' },
      { hanzi: '七' },
      { hanzi: '八' },
      { hanzi: '九' },
      { hanzi: '十' },
      { hanzi: '零' },
      { hanzi: '百' },
      { hanzi: '千' },
      { hanzi: '万' },
      { hanzi: '我' },
      { hanzi: '你' },
      { hanzi: '您' },
      { hanzi: '他' },
      { hanzi: '她' },
      { hanzi: '它' },
      { hanzi: '们' },
      { hanzi: '不' },
      { hanzi: '是' },
      { hanzi: '的' },
      { hanzi: '朋' },
      { hanzi: '友' },
      { hanzi: '叫' },
      { hanzi: '什' },
      { hanzi: '么' },
      { hanzi: '吗' },
      { hanzi: '名' },
      { hanzi: '字' },
      { hanzi: '姓' },
      { hanzi: '很' },
      { hanzi: '好' },
      { hanzi: '再' },
      { hanzi: '见' },
      { hanzi: '家' },
      { hanzi: '人' },
      { hanzi: '口' },
      { hanzi: '个' },
      { hanzi: '两' },
      { hanzi: '多' },
      { hanzi: '请' },
      { hanzi: '问' },
      { hanzi: '题' },
      { hanzi: '和' },
      { hanzi: '有' },
      { hanzi: '没' },
      { hanzi: '也' },
      { hanzi: '爸' },
      { hanzi: '妈' },
      { hanzi: '哥' },
      { hanzi: '姐' },
      { hanzi: '弟' },
      { hanzi: '妹' },
      { hanzi: '几' },
      { hanzi: '岁' },
      { hanzi: '在' },
      { hanzi: '哪' },
      { hanzi: '儿' },
      { hanzi: '里' },
      { hanzi: '老' },
      { hanzi: '国' },
      { hanzi: '中' },
      { hanzi: '美' },
      { hanzi: '英' },
      { hanzi: '谁' },
      { hanzi: '欢' },
      { hanzi: '迎' },
      { hanzi: '对' },
      { hanzi: '起' },
      { hanzi: '谢' },
      { hanzi: '客' },
      { hanzi: '气' },
      { hanzi: '慢' },
      { hanzi: '走' },
      { hanzi: '父' },
      { hanzi: '母' },
      { hanzi: '亲' },
      { hanzi: '做' },
      { hanzi: '工' },
      { hanzi: '作' },
      { hanzi: '师' },
      { hanzi: '学' },
      { hanzi: '生' },
      { hanzi: '医' },
      { hanzi: '孩' },
      { hanzi: '子' },
      { hanzi: '女' },
      { hanzi: '男' },
      { hanzi: '狗' },
      { hanzi: '猫' },
      { hanzi: '鸟' },
      { hanzi: '马' },
      { hanzi: '只' },
      { hanzi: '知' },
      { hanzi: '道' },
      { hanzi: '会' },
      { hanzi: '说' },
      { hanzi: '写' },
      { hanzi: '汉' },
      { hanzi: '语' },
      { hanzi: '文' },
      { hanzi: '认' },
      { hanzi: '识' },
      { hanzi: '喜' },
      { hanzi: '要' },
      { hanzi: '吃' },
      { hanzi: '饭' },
      { hanzi: '看' },
      { hanzi: '书' },
      { hanzi: '电' },
      { hanzi: '视' },
      { hanzi: '影' },
      { hanzi: '打' },
      { hanzi: '球' },
      { hanzi: '练' },
      { hanzi: '习' },
      { hanzi: '复' },
      { hanzi: '课' },
      { hanzi: '考' },
      { hanzi: '试' },
      { hanzi: '上' },
      { hanzi: '下' },
      { hanzi: '历' },
      { hanzi: '史' },
      { hanzi: '数' },
      { hanzi: '科' },
      { hanzi: '春' },
      { hanzi: '夏' },
      { hanzi: '秋' },
      { hanzi: '冬' },
      { hanzi: '天' },
      { hanzi: '热' },
      { hanzi: '暖' },
      { hanzi: '冷' },
      { hanzi: '凉' },
      { hanzi: '快' },
      { hanzi: '日' },
      { hanzi: '月' },
      { hanzi: '星' },
      { hanzi: '期' },
      { hanzi: '今' },
      { hanzi: '明' },
      { hanzi: '昨' },
      { hanzi: '年' },
      { hanzi: '刮' },
      { hanzi: '风' },
      { hanzi: '雨' },
      { hanzi: '雪' },
      { hanzi: '雾' },
      { hanzi: '穿' },
      { hanzi: '衣' },
      { hanzi: '服' },
      { hanzi: '裤' },
      { hanzi: '裙' },
      { hanzi: '衬' },
      { hanzi: '装' },
      { hanzi: '鞋' },
      { hanzi: '件' },
      { hanzi: '双' },
      { hanzi: '钱' },
      { hanzi: '元' },
      { hanzi: '块' },
      { hanzi: '角' },
      { hanzi: '毛' },
      { hanzi: '分' },
      { hanzi: '价' },
      { hanzi: '便' },
      { hanzi: '宜' },
      { hanzi: '贵' },
      { hanzi: '太' },
      { hanzi: '怎' },
      { hanzi: '样' },
      { hanzi: '想' },
      { hanzi: '大' },
      { hanzi: '小' },
      { hanzi: '过' },
      { hanzi: '向' },
      { hanzi: '往' },
      { hanzi: '回' },
      { hanzi: '漂' },
      { hanzi: '亮' },
      { hanzi: '错' },
      { hanzi: '同' },
      { hanzi: '意' },
      { hanzi: '这' },
      { hanzi: '那' },
      { hanzi: '去' },
      { hanzi: '到' },
      { hanzi: '校' },
      { hanzi: '院' },
      { hanzi: '商' },
      { hanzi: '店' },
      { hanzi: '花' },
      { hanzi: '公' },
      { hanzi: '园' },
      { hanzi: '地' },
      { hanzi: '方' },
      { hanzi: '城' },
      { hanzi: '市' },
      { hanzi: '宾' },
      { hanzi: '馆' },
      { hanzi: '银' },
      { hanzi: '行' },
      { hanzi: '每' },
      { hanzi: '都' },
      { hanzi: '北' },
      { hanzi: '南' },
      { hanzi: '东' },
      { hanzi: '西' },
      { hanzi: '前' },
      { hanzi: '后' },
      { hanzi: '左' },
      { hanzi: '右' },
      { hanzi: '内' },
      { hanzi: '外' },
      { hanzi: '旁' },
      { hanzi: '边' },
      { hanzi: '时' },
      { hanzi: '候' },
      { hanzi: '钟' },
      { hanzi: '点' },
      { hanzi: '半' },
      { hanzi: '久' },
      { hanzi: '早' },
      { hanzi: '晚' },
      { hanzi: '夜' },
      { hanzi: '午' },
      { hanzi: '周' },
      { hanzi: '末' },
      { hanzi: '现' },
      { hanzi: '来' },
      { hanzi: '买' },
      { hanzi: '卖' },
      { hanzi: '用' },
      { hanzi: '能' },
      { hanzi: '听' },
      { hanzi: '喝' },
      { hanzi: '茶' },
      { hanzi: '路' },
      { hanzi: '报' },
      { hanzi: '张' },
      { hanzi: '可' },
      { hanzi: '以' },
      { hanzi: '比' },
      { hanzi: '但' },
      { hanzi: '而' },
      { hanzi: '且' },
      { hanzi: '就' },
      { hanzi: '还' },
      { hanzi: '所' },
      { hanzi: '吧' },
      { hanzi: '呢' },
      { hanzi: '了' },
      { hanzi: '读' },
      { hanzi: '本' },
      { hanzi: '词' },
      { hanzi: '典' },
      { hanzi: '杂' },
      { hanzi: '志' },
      { hanzi: '休' },
      { hanzi: '息' },
      { hanzi: '念' },
      { hanzi: '脑' },
      { hanzi: '活' },
      { hanzi: '动' },
      { hanzi: '运' },
      { hanzi: '谈' },
      { hanzi: '话' },
      { hanzi: '帮' },
      { hanzi: '助' },
      { hanzi: '忙' },
      { hanzi: '懂' },
      { hanzi: '找' },
      { hanzi: '求' },
      { hanzi: '教' },
      { hanzi: '跟' },
      { hanzi: '得' },
      { hanzi: '之' },
      { hanzi: '因' },
      { hanzi: '为' },
      { hanzi: '或' },
      { hanzi: '者' },
      { hanzi: '着' },
      { hanzi: '才' },
      { hanzi: '又' },
      { hanzi: '于' },
      { hanzi: '身' },
      { hanzi: '体' },
      { hanzi: '病' },
      { hanzi: '头' },
      { hanzi: '手' },
      { hanzi: '痛' },
      { hanzi: '疼' },
      { hanzi: '心' },
      { hanzi: '睡' },
      { hanzi: '觉' },
      { hanzi: '足' },
      { hanzi: '肥' },
      { hanzi: '瘦' },
      { hanzi: '应' },
      { hanzi: '该' },
      { hanzi: '感' },
      { hanzi: '情' },
      { hanzi: '饿' },
      { hanzi: '累' },
      { hanzi: '死' },
      { hanzi: '思' },
      { hanzi: '理' },
      { hanzi: '梦' },
      { hanzi: '重' },
      { hanzi: '惯' },
      { hanzi: '洗' },
      { hanzi: '拿' },
      { hanzi: '关' },
      { hanzi: '把' },
      { hanzi: '发' },
      { hanzi: '灯' },
      { hanzi: '床' },
      { hanzi: '药' },
      { hanzi: '舒' },
      { hanzi: '菜' },
      { hanzi: '酒' },
      { hanzi: '饮' },
      { hanzi: '肉' },
      { hanzi: '米' },
      { hanzi: '坐' },
      { hanzi: '位' },
      { hanzi: '杯' },
      { hanzi: '味' },
      { hanzi: '够' },
      { hanzi: '共' },
      { hanzi: '节' },
      { hanzi: '李' },
      { hanzi: '爱' },
      { hanzi: '给' },
      { hanzi: '礼' },
      { hanzi: '物' },
      { hanzi: '玩' },
      { hanzi: '音' },
      { hanzi: '乐' },
      { hanzi: '非' },
      { hanzi: '常' },
      { hanzi: '自' },
      { hanzi: '己' },
      { hanzi: '功' },
      { hanzi: '受' },
      { hanzi: '利' },
      { hanzi: '较' },
      { hanzi: '改' },
      { hanzi: '正' },
      { hanzi: '记' },
      { hanzi: '预' },
      { hanzi: '楼' },
      { hanzi: '办' },
      { hanzi: '室' },
      { hanzi: '房' },
      { hanzi: '间' },
      { hanzi: '堂' },
      { hanzi: '屋' },
      { hanzi: '事' },
      { hanzi: '食' },
      { hanzi: '面' },
      { hanzi: '从' },
      { hanzi: '离' },
      { hanzi: '远' },
      { hanzi: '近' },
      { hanzi: '出' },
      { hanzi: '入' },
      { hanzi: '短' },
      { hanzi: '飞' },
      { hanzi: '机' },
      { hanzi: '场' },
      { hanzi: '汽' },
      { hanzi: '车' },
      { hanzi: '火' },
      { hanzi: '站' },
      { hanzi: '船' },
      { hanzi: '票' },
      { hanzi: '开' },
      { hanzi: '乘' },
      { hanzi: '邮' },
      { hanzi: '局' },
      { hanzi: '安' },
      { hanzi: '门' },
      { hanzi: '厕' },
      { hanzi: '带' },
      { hanzi: '特' },
      { hanzi: '别' },
      { hanzi: '民' },
      { hanzi: '单' },
      { hanzi: '颜' },
      { hanzi: '色' },
      { hanzi: '白' },
      { hanzi: '黑' },
      { hanzi: '黄' },
      { hanzi: '红' },
      { hanzi: '绿' },
      { hanzi: '蓝' },
      { hanzi: '粉' },
      { hanzi: '深' },
      { hanzi: '环' },
      { hanzi: '境' },
      { hanzi: '空' },
      { hanzi: '晴' },
      { hanzi: '山' },
      { hanzi: '水' },
      { hanzi: '海' },
      { hanzi: '河' },
      { hanzi: '流' },
      { hanzi: '丽' },
      { hanzi: '树' },
      { hanzi: '云' },
      { hanzi: '养' },
      { hanzi: '鸡' },
      { hanzi: '鸭' },
      { hanzi: '鱼' },
      { hanzi: '虾' },
      { hanzi: '牛' },
      { hanzi: '轻' },
      { hanzi: '力' },
      { hanzi: '怕' },
      { hanzi: '许' },
      { hanzi: '优' },
      { hanzi: '量' },
      { hanzi: '第' },
      { hanzi: '等' },
      { hanzi: '级' },
      { hanzi: '极' },
      { hanzi: '平' },
      { hanzi: '次' },
      { hanzi: '度' },
      { hanzi: '虽' },
      { hanzi: '除' },
      { hanzi: '例' },
      { hanzi: '品' },
      { hanzi: '输' },
      { hanzi: '赢' },
      { hanzi: '赛' },
      { hanzi: '成' },
      { hanzi: '高' },
      { hanzi: '兴' },
      { hanzi: '照' },
      { hanzi: '相' },
      { hanzi: '片' },
      { hanzi: '加' },
      { hanzi: '油' },
      { hanzi: '计' },
      { hanzi: '划' },
      { hanzi: '难' },
      { hanzi: '容' },
      { hanzi: '易' },
      { hanzi: '最' },
      { hanzi: '法' },
      { hanzi: '如' },
      { hanzi: '果' },
      { hanzi: '已' },
      { hanzi: '经' },
      { hanzi: '始' },
      { hanzi: '告' },
      { hanzi: '诉' },
      { hanzi: '信' },
      { hanzi: '言' },
      { hanzi: '真' },
      { hanzi: '决' },
      { hanzi: '定' },
      { hanzi: '像' },
      { hanzi: '清' },
      { hanzi: '楚' },
      { hanzi: '唱' },
      { hanzi: '歌' },
      { hanzi: '刚' },
      { hanzi: '随' },
      { hanzi: '新' },
      { hanzi: '旧' },
      { hanzi: '厌' },
      { hanzi: '合' },
      { hanzi: '适' },
      { hanzi: '必' },
      { hanzi: '代' },
      { hanzi: '更' },
      { hanzi: '声' },
      { hanzi: '低' },
      { hanzi: '严' },
      { hanzi: '趣' },
      { hanzi: '表' },
      { hanzi: '放' },
      { hanzi: '危' },
      { hanzi: '险' },
      { hanzi: '普' },
      { hanzi: '通' },
      { hanzi: '拉' },
      { hanzi: '推' },
      { hanzi: '禁' },
      { hanzi: '孔' },
      { hanzi: '古' },
      { hanzi: '术' },
      { hanzi: '玉' },
      { hanzi: '龙' },
      { hanzi: '寺' },
      { hanzi: '纸' },
      { hanzi: '诗' },
      { hanzi: '宫' },
      { hanzi: '剧' },
      { hanzi: '演' },
      { hanzi: '煮' },
      { hanzi: '蒸' },
      { hanzi: '炒' },
      { hanzi: '烤' },
      { hanzi: '餐' },
      { hanzi: '苹' },
      { hanzi: '茄' },
      { hanzi: '豆' },
      { hanzi: '梨' },
      { hanzi: '咸' },
      { hanzi: '麻' },
      { hanzi: '辣' },
      { hanzi: '筷' },
      { hanzi: '锅' },
      { hanzi: '碗' },
      { hanzi: '员' },
      { hanzi: '住' },
      { hanzi: '斤' },
      { hanzi: '超' },
      { hanzi: '网' },
      { hanzi: '街' },
      { hanzi: '存' },
      { hanzi: '处' },
      { hanzi: '租' },
      { hanzi: '硬' },
      { hanzi: '软' },
      { hanzi: '铁' },
      { hanzi: '铺' },
      { hanzi: '际' },
      { hanzi: '登' },
      { hanzi: '州' },
      { hanzi: '林' },
      { hanzi: '江' },
      { hanzi: '湖' },
      { hanzi: '港' },
      { hanzi: '爷' },
      { hanzi: '奶' },
      { hanzi: '婚' },
      { hanzi: '王' },
      { hanzi: '进' },
      { hanzi: '直' },
      { hanzi: '世' },
      { hanzi: '界' },
      { hanzi: '旅' },
      { hanzi: '游' },
      { hanzi: '假' },
      { hanzi: '先' },
      { hanzi: '然' },
      { hanzi: '长' },
      { hanzi: '化' },
      { hanzi: '由' },
      { hanzi: '提' },
      { hanzi: '党' },
      { hanzi: '传' },
      { hanzi: '义' },
      { hanzi: '军' },
      { hanzi: '实' },
      { hanzi: '与' },
      { hanzi: '各' },
      { hanzi: '原' },
      { hanzi: '无' },
      { hanzi: '主' },
      { hanzi: '部' },
      { hanzi: '业' },
      { hanzi: '种' },
      { hanzi: '具' },
      { hanzi: '全' },
      { hanzi: '图' },
      { hanzi: '光' },
      { hanzi: '查' },
      { hanzi: '参' },
      { hanzi: '拍' },
      { hanzi: '团' },
      { hanzi: '村' },
      { hanzi: '程' },
      { hanzi: '厂' },
      { hanzi: '式' },
      { hanzi: '卫' },
      { hanzi: '评' },
      { hanzi: '备' },
      { hanzi: '层' },
      { hanzi: '解' },
      { hanzi: '须' },
      { hanzi: '户' },
      { hanzi: '争' },
      { hanzi: '约' },
      { hanzi: '究' },
      { hanzi: '资' },
      { hanzi: '福' },
      { hanzi: '线' },
      { hanzi: '央' },
      { hanzi: '防' },
    ],
  });
  
  await prisma.enword.deleteMany({});
  const enWordEntry = await prisma.enword.createMany({
    data: [
      { word: 'agree' },
      { word: 'alcohol' },
      { word: 'arrive' },
      { word: 'boat' },
      { word: 'breakfast' },
      { word: 'camera' },
      { word: 'capital' },
      { word: 'catch' },
      { word: 'duck' },
      { word: 'enjoy' },
      { word: 'invite' },
      { word: 'love' },
      { word: 'month' },
      { word: 'travel' },
      { word: 'typical' },
      { word: 'visit' },
      { word: 'weather' },
      { word: 'week' },
      { word: 'wine' },
      { word: 'adventure' },
      { word: 'approach' },
      { word: 'carefully' },
      { word: 'chemical' },
      { word: 'create' },
      { word: 'evil' },
      { word: 'experiment' },
      { word: 'kill' },
      { word: 'laboratory' },
      { word: 'laugh' },
      { word: 'loud' },
      { word: 'nervous' },
      { word: 'noise' },
      { word: 'project' },
      { word: 'scare' },
      { word: 'secret' },
      { word: 'shout' },
      { word: 'smell' },
      { word: 'terrible' },
      { word: 'worse' },
      { word: 'alien' },
      { word: 'among' },
      { word: 'chart' },
      { word: 'cloud' },
      { word: 'describe' },
      { word: 'ever' },
      { word: 'fail' },
      { word: 'grade' },
      { word: 'instead' },
      { word: 'library' },
      { word: 'photograph' },
      { word: 'planet' },
      { word: 'report' },
      { word: 'several' },
      { word: 'shape' },
      { word: 'solve' },
      { word: 'suddenly' },
      { word: 'suppose' },
      { word: 'understand' },
      { word: 'view' },
      { word: 'appropriate' },
      { word: 'avoid' },
      { word: 'behave' },
      { word: 'calm' },
      { word: 'concern' },
      { word: 'content' },
      { word: 'expect' },
      { word: 'frequently' },
      { word: 'habit' },
      { word: 'instruct' },
      { word: 'issue' },
      { word: 'none' },
      { word: 'patient' },
      { word: 'positive' },
      { word: 'punish' },
      { word: 'represent' },
      { word: 'shake' },
      { word: 'spread' },
      { word: 'stroll' },
      { word: 'village' },
      { word: 'active' },
      { word: 'adult' },
      { word: 'age' },
      { word: 'bad' },
      { word: 'balance' },
      { word: 'bike' },
      { word: 'choose' },
      { word: 'doctor' },
      { word: 'during' },
      { word: 'football' },
      { word: 'fun' },
      { word: 'game' },
      { word: 'heart' },
      { word: 'golf' },
      { word: 'increase' },
      { word: 'life' },
      { word: 'kilometer' },
      { word: 'often' },
      { word: 'plenty' },
      { word: 'weight' },
      { word: 'apart' },
      { word: 'attribute' },
      { word: 'bilingual' },
      { word: 'completely' },
      { word: 'dash' },
      { word: 'disgust' },
      { word: 'fashionable' },
      { word: 'foreign' },
      { word: 'gulf' },
      { word: 'mirror' },
      { word: 'natural' },
      { word: 'nowadays' },
      { word: 'participant' },
      { word: 'ritual' },
      { word: 'spoken' },
      { word: 'sport' },
      { word: 'surprised' },
      { word: 'tense' },
      { word: 'totally' },
      { word: 'vague' },
      { word: 'allow' },
      { word: 'announce' },
      { word: 'beside' },
      { word: 'challenge' },
      { word: 'claim' },
      { word: 'condition' },
      { word: 'contribute' },
      { word: 'difference' },
      { word: 'divide' },
      { word: 'expert' },
      { word: 'famous' },
      { word: 'force' },
      { word: 'harm' },
      { word: 'lay' },
      { word: 'peace' },
      { word: 'prince' },
      { word: 'protect' },
      { word: 'sense' },
      { word: 'sudden' },
      { word: 'therefore' },
      { word: 'accept' },
      { word: 'arrange' },
      { word: 'attend' },
      { word: 'chase' },
      { word: 'contrast' },
      { word: 'encourage' },
      { word: 'familiar' },
      { word: 'grab' },
      { word: 'hang' },
      { word: 'huge' },
      { word: 'necessary' },
      { word: 'pattern' },
      { word: 'propose' },
      { word: 'purpose' },
      { word: 'release' },
      { word: 'require' },
      { word: 'satisfied' },
      { word: 'single' },
      { word: 'tear' },
      { word: 'theory' },
      { word: 'animal' },
      { word: 'bus' },
      { word: 'cat' },
      { word: 'command' },
      { word: 'depend' },
      { word: 'dog' },
      { word: 'door' },
      { word: 'friend' },
      { word: 'hear' },
      { word: 'help' },
      { word: 'horse' },
      { word: 'hospital' },
      { word: 'leg' },
      { word: 'medical' },
      { word: 'open' },
      { word: 'pull' },
      { word: 'rabbit' },
      { word: 'school' },
      { word: 'see' },
      { word: 'service' },
      { word: 'benefit' },
      { word: 'certain' },
      { word: 'chance' },
      { word: 'effect' },
      { word: 'essential' },
      { word: 'far' },
      { word: 'focus' },
      { word: 'function' },
      { word: 'grass' },
      { word: 'guard' },
      { word: 'image' },
      { word: 'immediate' },
      { word: 'primary' },
      { word: 'proud' },
      { word: 'remain' },
      { word: 'rest' },
      { word: 'separate' },
      { word: 'site' },
      { word: 'tail' },
      { word: 'trouble' },
      { word: 'advertise' },
      { word: 'aware' },
      { word: 'battery' },
      { word: 'black' },
      { word: 'city' },
      { word: 'clean' },
      { word: 'country' },
      { word: 'develop' },
      { word: 'electric' },
      { word: 'eventually' },
      { word: 'fact' },
      { word: 'glass' },
      { word: 'history' },
      { word: 'nature' },
      { word: 'never' },
      { word: 'people' },
      { word: 'plastic' },
      { word: 'problem' },
      { word: 'street' },
      { word: 'think' },
      { word: 'alone' },
      { word: 'apartment' },
      { word: 'article' },
      { word: 'artist' },
      { word: 'attitude' },
      { word: 'beauty' },
      { word: 'compare' },
      { word: 'judge' },
      { word: 'magazine' },
      { word: 'material' },
      { word: 'meal' },
      { word: 'method' },
      { word: 'neighbor' },
      { word: 'professional' },
      { word: 'profit' },
      { word: 'quality' },
      { word: 'space' },
      { word: 'stair' },
      { word: 'symbol' },
      { word: 'thin' },
      { word: 'accounting' },
      { word: 'appeal' },
      { word: 'assume' },
      { word: 'borrow' },
      { word: 'client' },
      { word: 'downtown' },
      { word: 'dull' },
      { word: 'embarrass' },
      { word: 'fare' },
      { word: 'former' },
      { word: 'found' },
      { word: 'invest' },
      { word: 'loan' },
      { word: 'practical' },
      { word: 'quarter' },
      { word: 'salary' },
      { word: 'scholarship' },
      { word: 'temporary' },
      { word: 'treasure' },
      { word: 'urge' },
      { word: 'coach' },
      { word: 'control' },
      { word: 'description' },
      { word: 'direct' },
      { word: 'exam' },
      { word: 'example' },
      { word: 'limit' },
      { word: 'local' },
      { word: 'magical' },
      { word: 'mail' },
      { word: 'novel' },
      { word: 'outline' },
      { word: 'poet' },
      { word: 'print' },
      { word: 'scene' },
      { word: 'sheet' },
      { word: 'silly' },
      { word: 'store' },
      { word: 'suffer' },
      { word: 'technology' },
      { word: 'across' },
      { word: 'breathe' },
      { word: 'characteristic' },
      { word: 'consume' },
      { word: 'excite' },
      { word: 'extremely' },
      { word: 'fear' },
      { word: 'fortunate' },
      { word: 'happen' },
      { word: 'length' },
      { word: 'mistake' },
      { word: 'observe' },
      { word: 'opportunity' },
      { word: 'prize' },
      { word: 'race' },
      { word: 'realize' },
      { word: 'respond' },
      { word: 'risk' },
      { word: 'wonder' },
      { word: 'yet' },
      { word: 'art' },
      { word: 'book' },
      { word: 'clothes' },
      { word: 'community' },
      { word: 'dinner' },
      { word: 'end' },
      { word: 'exchange' },
      { word: 'family' },
      { word: 'from' },
      { word: 'green' },
      { word: 'home' },
      { word: 'red' },
      { word: 'start' },
      { word: 'together' },
      { word: 'university' },
      { word: 'wear' },
      { word: 'year' },
      { word: 'appreciate' },
      { word: 'available' },
      { word: 'beat' },
      { word: 'bright' },
      { word: 'celebrate' },
      { word: 'decide' },
      { word: 'disappear' },
      { word: 'else' },
      { word: 'fair' },
      { word: 'flow' },
      { word: 'forward' },
      { word: 'hill' },
      { word: 'level' },
      { word: 'lone' },
      { word: 'puddle' },
      { word: 'response' },
      { word: 'season' },
      { word: 'solution' },
      { word: 'waste' },
      { word: 'whether' },
      { word: 'always' },
      { word: 'ask' },
      { word: 'banana' },
      { word: 'bread' },
      { word: 'cake' },
      { word: 'carrot' },
      { word: 'chicken' },
      { word: 'chocolate' },
      { word: 'contain' },
      { word: 'delicious' },
      { word: 'diet' },
      { word: 'eat' },
      { word: 'food' },
      { word: 'fruit' },
      { word: 'great' },
      { word: 'health' },
      { word: 'recipe' },
      { word: 'restaurant' },
      { word: 'special' },
      { word: 'water' },
      { word: 'alive' },
      { word: 'bone' },
      { word: 'bother' },
      { word: 'captain' },
      { word: 'conclusion' },
      { word: 'doubt' },
      { word: 'explore' },
      { word: 'glad' },
      { word: 'however' },
      { word: 'injustice' },
      { word: 'international' },
      { word: 'lawyer' },
      { word: 'mention' },
      { word: 'old' },
      { word: 'policy' },
      { word: 'social' },
      { word: 'speech' },
      { word: 'staff' },
      { word: 'toward' },
      { word: 'wood' },
      { word: 'achieve' },
      { word: 'advise' },
      { word: 'already' },
      { word: 'basic' },
      { word: 'bit' },
      { word: 'consider' },
      { word: 'destroy' },
      { word: 'entertain' },
      { word: 'extra' },
      { word: 'goal' },
      { word: 'lie' },
      { word: 'meat' },
      { word: 'opinion' },
      { word: 'real' },
      { word: 'reflect' },
      { word: 'regard' },
      { word: 'serve' },
      { word: 'vegetable' },
      { word: 'war' },
      { word: 'worth' },
      { word: 'appear' },
      { word: 'base' },
      { word: 'brain' },
      { word: 'career' },
      { word: 'clerk' },
      { word: 'effort' },
      { word: 'enter' },
      { word: 'excellent' },
      { word: 'hero' },
      { word: 'hurry' },
      { word: 'inform' },
      { word: 'later' },
      { word: 'leave' },
      { word: 'locate' },
      { word: 'nurse' },
      { word: 'operation' },
      { word: 'pain' },
      { word: 'refuse' },
      { word: 'though' },
      { word: 'various' },
      { word: 'actual' },
      { word: 'amaze' },
      { word: 'charge' },
      { word: 'comfort' },
      { word: 'contact' },
      { word: 'customer' },
      { word: 'deliver' },
      { word: 'earn' },
      { word: 'gate' },
      { word: 'include' },
      { word: 'manage' },
      { word: 'mystery' },
      { word: 'occur' },
      { word: 'opposite' },
      { word: 'plate' },
      { word: 'receive' },
      { word: 'reward' },
      { word: 'set' },
      { word: 'steal' },
      { word: 'thief' },
      { word: 'advance' },
      { word: 'athlete' },
      { word: 'average' },
      { word: 'behavior' },
      { word: 'behind' },
      { word: 'course' },
      { word: 'lower' },
      { word: 'match' },
      { word: 'member' },
      { word: 'mental' },
      { word: 'passenger' },
      { word: 'personality' },
      { word: 'poem' },
      { word: 'pole' },
      { word: 'remove' },
      { word: 'safety' },
      { word: 'shoot' },
      { word: 'sound' },
      { word: 'swim' },
      { word: 'web' },
      { word: 'block' },
      { word: 'bury' },
      { word: 'cheer' },
      { word: 'complex' },
      { word: 'critic' },
      { word: 'direction' },
      { word: 'event' },
      { word: 'exercise' },
      { word: 'friendship' },
      { word: 'guide' },
      { word: 'lack' },
      { word: 'perform' },
      { word: 'pressure' },
      { word: 'probably' },
      { word: 'public' },
      { word: 'smart' },
      { word: 'strike' },
      { word: 'support' },
      { word: 'term' },
      { word: 'unite' },
      { word: 'associate' },
      { word: 'environment' },
      { word: 'factory' },
      { word: 'feature' },
      { word: 'instance' },
      { word: 'involve' },
      { word: 'medicine' },
      { word: 'mix' },
      { word: 'organize' },
      { word: 'period' },
      { word: 'populate' },
      { word: 'produce' },
      { word: 'range' },
      { word: 'recognize' },
      { word: 'regular' },
      { word: 'sign' },
      { word: 'tip' },
      { word: 'tradition' },
      { word: 'trash' },
      { word: 'wide' },
      { word: 'advice' },
      { word: 'along' },
      { word: 'attention' },
      { word: 'attract' },
      { word: 'climb' },
      { word: 'drop' },
      { word: 'final' },
      { word: 'further' },
      { word: 'imply' },
      { word: 'maintain' },
      { word: 'neither' },
      { word: 'otherwise' },
      { word: 'physical' },
      { word: 'prove' },
      { word: 'react' },
      { word: 'ride' },
      { word: 'situated' },
      { word: 'society' },
      { word: 'standard' },
      { word: 'suggest' },
      { word: 'actually' },
      { word: 'bite' },
      { word: 'coast' },
      { word: 'deal' },
      { word: 'desert' },
      { word: 'effective' },
      { word: 'examine' },
      { word: 'false' },
      { word: 'figure' },
      { word: 'gift' },
      { word: 'hunger' },
      { word: 'imagine' },
      { word: 'journey' },
      { word: 'puzzle' },
      { word: 'quite' },
      { word: 'rather' },
      { word: 'specific' },
      { word: 'spider' },
      { word: 'tour' },
      { word: 'trip' },
      { word: 'band' },
      { word: 'barely' },
      { word: 'boring' },
      { word: 'cancel' },
      { word: 'driveway' },
      { word: 'garbage' },
      { word: 'instrument' },
      { word: 'list' },
      { word: 'magic' },
      { word: 'message' },
      { word: 'notice' },
      { word: 'own' },
      { word: 'predict' },
      { word: 'professor' },
      { word: 'rush' },
      { word: 'schedule' },
      { word: 'share' },
      { word: 'stage' },
      { word: 'storm' },
      { word: 'within' },
      { word: 'burden' },
      { word: 'compromise' },
      { word: 'craft' },
      { word: 'dive' },
      { word: 'fragile' },
      { word: 'half' },
      { word: 'innocence' },
      { word: 'lead' },
      { word: 'meeting' },
      { word: 'merge' },
      { word: 'moderate' },
      { word: 'overwhelm' },
      { word: 'payment' },
      { word: 'perception' },
      { word: 'settle' },
      { word: 'shiver' },
      { word: 'sociable' },
      { word: 'speed' },
      { word: 'talkative' },
      { word: 'usual' },
      { word: 'above' },
      { word: 'ahead' },
      { word: 'amount' },
      { word: 'belief' },
      { word: 'center' },
      { word: 'common' },
      { word: 'cost' },
      { word: 'demonstrate' },
      { word: 'different' },
      { word: 'evidence' },
      { word: 'honesty' },
      { word: 'idiom' },
      { word: 'independent' },
      { word: 'inside' },
      { word: 'jail' },
      { word: 'master' },
      { word: 'memory' },
      { word: 'pocket' },
      { word: 'proper' },
      { word: 'sale' },
      { word: 'because' },
      { word: 'east' },
      { word: 'expensive' },
      { word: 'flower' },
      { word: 'garden' },
      { word: 'holiday' },
      { word: 'many' },
      { word: 'million' },
      { word: 'mountain' },
      { word: 'place' },
      { word: 'popular' },
      { word: 'ski' },
      { word: 'such' },
      { word: 'total' },
      { word: 'tower' },
      { word: 'town' },
      { word: 'train' },
      { word: 'walk' },
      { word: 'watch' },
      { word: 'world' },
      { word: 'anxious' },
      { word: 'awful' },
      { word: 'consist' },
      { word: 'desire' },
      { word: 'eager' },
      { word: 'household' },
      { word: 'intent' },
      { word: 'landscape' },
      { word: 'lift' },
      { word: 'load' },
      { word: 'lung' },
      { word: 'motion' },
      { word: 'pace' },
      { word: 'polite' },
      { word: 'possess' },
      { word: 'rapidly' },
      { word: 'remark' },
      { word: 'seek' },
      { word: 'shine' },
      { word: 'spill' },
      { word: 'arrow' },
      { word: 'battle' },
      { word: 'bow' },
      { word: 'brave' },
      { word: 'chief' },
      { word: 'disadvantage' },
      { word: 'enemy' },
      { word: 'entrance' },
      { word: 'hardly' },
      { word: 'intend' },
      { word: 'laughter' },
      { word: 'log' },
      { word: 'military' },
      { word: 'obey' },
      { word: 'secure' },
      { word: 'steady' },
      { word: 'trust' },
      { word: 'twist' },
      { word: 'unless' },
      { word: 'weapon' },
      { word: 'chest' },
      { word: 'confidence' },
      { word: 'consequence' },
      { word: 'disaster' },
      { word: 'disturb' },
      { word: 'estimate' },
      { word: 'honor' },
      { word: 'impress' },
      { word: 'narrow' },
      { word: 'pale' },
      { word: 'rough' },
      { word: 'satisfy' },
      { word: 'scream' },
      { word: 'sensitive' },
      { word: 'shade' },
      { word: 'strength' },
      { word: 'supplement' },
      { word: 'terror' },
      { word: 'threat' },
      { word: 'victim' },
      { word: 'ancestor' },
      { word: 'angle' },
      { word: 'boot' },
      { word: 'border' },
      { word: 'congratulate' },
      { word: 'frame' },
      { word: 'heaven' },
      { word: 'incredible' },
      { word: 'legend' },
      { word: 'praise' },
      { word: 'proceed' },
      { word: 'pure' },
      { word: 'relative' },
      { word: 'senior' },
      { word: 'silent' },
      { word: 'sink' },
      { word: 'superior' },
      { word: 'surround' },
      { word: 'thick' },
      { word: 'wrap' },
      { word: 'also' },
      { word: 'automatically' },
      { word: 'busy' },
      { word: 'can' },
      { word: 'clear' },
      { word: 'close' },
      { word: 'discuss' },
      { word: 'feel' },
      { word: 'listen' },
      { word: 'meet' },
      { word: 'music' },
      { word: 'normal' },
      { word: 'quiet' },
      { word: 'relax' },
      { word: 'sleep' },
      { word: 'stress' },
      { word: 'study' },
      { word: 'talk' },
      { word: 'work' },
      { word: 'write' },
      { word: 'basis' },
      { word: 'biology' },
      { word: 'cage' },
      { word: 'colleague' },
      { word: 'colony' },
      { word: 'debate' },
      { word: 'depart' },
      { word: 'depress' },
      { word: 'factual' },
      { word: 'fascinate' },
      { word: 'mission' },
      { word: 'nevertheless' },
      { word: 'occupation' },
      { word: 'overseas' },
      { word: 'persuade' },
      { word: 'route' },
      { word: 'ruin' },
      { word: 'scholar' },
      { word: 'significant' },
      { word: 'volcano' },
      { word: 'broad' },
      { word: 'bush' },
      { word: 'capable' },
      { word: 'cheat' },
      { word: 'concentrate' },
      { word: 'conclude' },
      { word: 'confident' },
      { word: 'considerable' },
      { word: 'convey' },
      { word: 'definite' },
      { word: 'delight' },
      { word: 'destination' },
      { word: 'edge' },
      { word: 'instruction' },
      { word: 'path' },
      { word: 'resort' },
      { word: 'shadow' },
      { word: 'succeed' },
      { word: 'suspect' },
      { word: 'valley' },
      { word: 'against' },
      { word: 'beach' },
      { word: 'damage' },
      { word: 'discover' },
      { word: 'emotion' },
      { word: 'fix' },
      { word: 'identify' },
      { word: 'island' },
      { word: 'ocean' },
      { word: 'perhaps' },
      { word: 'pleasant' },
      { word: 'prevent' },
      { word: 'rock' },
      { word: 'save' },
      { word: 'smile' },
      { word: 'step' },
      { word: 'still' },
      { word: 'taste' },
      { word: 'throw' },
      { word: 'wave' },
      { word: 'citizen' },
      { word: 'council' },
      { word: 'declare' },
      { word: 'enormous' },
      { word: 'extraordinary' },
      { word: 'fog' },
      { word: 'funeral' },
      { word: 'giant' },
      { word: 'impression' },
      { word: 'intention' },
      { word: 'mad' },
      { word: 'ought' },
      { word: 'resist' },
      { word: 'reveal' },
      { word: 'rid' },
      { word: 'sword' },
      { word: 'tale' },
      { word: 'trap' },
      { word: 'trial' },
      { word: 'violent' },
      { word: 'admission' },
      { word: 'astronomy' },
      { word: 'blame' },
      { word: 'chemistry' },
      { word: 'despite' },
      { word: 'dinosaur' },
      { word: 'exhibit' },
      { word: 'fame' },
      { word: 'forecast' },
      { word: 'genius' },
      { word: 'gentle' },
      { word: 'geography' },
      { word: 'interfere' },
      { word: 'lightly' },
      { word: 'principal' },
      { word: 'row' },
      { word: 'shelf' },
      { word: 'spite' },
      { word: 'super' },
      { word: 'wet' },
      { word: 'abuse' },
      { word: 'afford' },
      { word: 'bake' },
      { word: 'bean' },
      { word: 'candle' },
      { word: 'convert' },
      { word: 'debt' },
      { word: 'decrease' },
      { word: 'fault' },
      { word: 'fund' },
      { word: 'generous' },
      { word: 'ingredient' },
      { word: 'insist' },
      { word: 'mess' },
      { word: 'metal' },
      { word: 'monitor' },
      { word: 'oppose' },
      { word: 'passive' },
      { word: 'quantity' },
      { word: 'sue' },
      { word: 'adequate' },
      { word: 'anxiety' },
      { word: 'army' },
      { word: 'billion' },
      { word: 'carve' },
      { word: 'consult' },
      { word: 'emergency' },
      { word: 'fortune' },
      { word: 'guarantee' },
      { word: 'initial' },
      { word: 'intense' },
      { word: 'lend' },
      { word: 'peak' },
      { word: 'potential' },
      { word: 'pride' },
      { word: 'proof' },
      { word: 'quit' },
      { word: 'spin' },
      { word: 'tiny' },
      { word: 'tutor' },
      { word: 'apparent' },
      { word: 'blind' },
      { word: 'calculate' },
      { word: 'chat' },
      { word: 'commit' },
      { word: 'compose' },
      { word: 'dormitory' },
      { word: 'exhaust' },
      { word: 'greenhouse' },
      { word: 'ignore' },
      { word: 'obvious' },
      { word: 'physics' },
      { word: 'portion' },
      { word: 'remind' },
      { word: 'secretary' },
      { word: 'severe' },
      { word: 'talent' },
      { word: 'thesis' },
      { word: 'uniform' },
      { word: 'vision' },
      { word: 'absorb' },
      { word: 'boss' },
      { word: 'charitable' },
      { word: 'committee' },
      { word: 'contract' },
      { word: 'crew' },
      { word: 'devote' },
      { word: 'dig' },
      { word: 'dine' },
      { word: 'donate' },
      { word: 'double' },
      { word: 'flavor' },
      { word: 'foundation' },
      { word: 'generation' },
      { word: 'handle' },
      { word: 'layer' },
      { word: 'mud' },
      { word: 'smooth' },
      { word: 'soil' },
      { word: 'unique' },
      { word: 'academy' },
      { word: 'ancient' },
      { word: 'board' },
      { word: 'century' },
      { word: 'clue' },
      { word: 'concert' },
      { word: 'county' },
      { word: 'dictionary' },
      { word: 'exist' },
      { word: 'flat' },
      { word: 'gentleman' },
      { word: 'hidden' },
      { word: 'maybe' },
      { word: 'officer' },
      { word: 'original' },
      { word: 'pound' },
      { word: 'process' },
      { word: 'publish' },
      { word: 'theater' },
      { word: 'wealth' },
      { word: 'aim' },
      { word: 'attach' },
      { word: 'bet' },
      { word: 'carriage' },
      { word: 'classic' },
      { word: 'commute' },
      { word: 'confirm' },
      { word: 'criticize' },
      { word: 'differ' },
      { word: 'expense' },
      { word: 'formal' },
      { word: 'height' },
      { word: 'invent' },
      { word: 'junior' },
      { word: 'labor' },
      { word: 'mechanic' },
      { word: 'prime' },
      { word: 'shift' },
      { word: 'signal' },
      { word: 'sincere' },
      { word: 'ability' },
      { word: 'agriculture' },
      { word: 'cartoon' },
      { word: 'ceiling' },
      { word: 'convince' },
      { word: 'curious' },
      { word: 'delay' },
      { word: 'diary' },
      { word: 'element' },
      { word: 'faith' },
      { word: 'grain' },
      { word: 'greet' },
      { word: 'investigate' },
      { word: 'joy' },
      { word: 'label' },
      { word: 'monk' },
      { word: 'odd' },
      { word: 'pause' },
      { word: 'priest' },
      { word: 'profession' },
      { word: 'ball' },
      { word: 'bottom' },
      { word: 'company' },
      { word: 'drink' },
      { word: 'few' },
      { word: 'line' },
      { word: 'pet' },
      { word: 'product' },
      { word: 'responsible' },
      { word: 'sell' },
      { word: 'snake' },
      { word: 'stand' },
      { word: 'strange' },
      { word: 'tea' },
      { word: 'test' },
      { word: 'tongue' },
      { word: 'type' },
      { word: 'very' },
      { word: 'wait' },
      { word: 'accomplish' },
      { word: 'approve' },
      { word: 'approximate' },
      { word: 'barrier' },
      { word: 'detect' },
      { word: 'duty' },
      { word: 'elementary' },
      { word: 'failure' },
      { word: 'gradual' },
      { word: 'immigrant' },
      { word: 'insert' },
      { word: 'instant' },
      { word: 'poverty' },
      { word: 'pretend' },
      { word: 'rank' },
      { word: 'recognition' },
      { word: 'refrigerate' },
      { word: 'rent' },
      { word: 'retire' },
      { word: 'statistic' },
      { word: 'accident' },
      { word: 'astronaut' },
      { word: 'awake' },
      { word: 'courage' },
      { word: 'float' },
      { word: 'grant' },
      { word: 'gravity' },
      { word: 'jewel' },
      { word: 'miner' },
      { word: 'mineral' },
      { word: 'participate' },
      { word: 'permission' },
      { word: 'pour' },
      { word: 'raw' },
      { word: 'satellite' },
      { word: 'scale' },
      { word: 'skip' },
      { word: 'stretch' },
      { word: 'telescope' },
      { word: 'underground' },
      { word: 'alarm' },
      { word: 'arrest' },
      { word: 'award' },
      { word: 'breed' },
      { word: 'bucket' },
      { word: 'contest' },
      { word: 'convict' },
      { word: 'festival' },
      { word: 'garage' },
      { word: 'journalist' },
      { word: 'pup' },
      { word: 'qualify' },
      { word: 'repair' },
      { word: 'resume' },
      { word: 'rob' },
      { word: 'slip' },
      { word: 'somewhat' },
      { word: 'stable' },
      { word: 'tissue' },
      { word: 'yard' },
      { word: 'best' },
      { word: 'card' },
      { word: 'crowd' },
      { word: 'day' },
      { word: 'dish' },
      { word: 'easy' },
      { word: 'experience' },
      { word: 'hotel' },
      { word: 'hour' },
      { word: 'light' },
      { word: 'market' },
      { word: 'plan' },
      { word: 'price' },
      { word: 'short' },
      { word: 'shop' },
      { word: 'station' },
      { word: 'surprise' },
      { word: 'system' },
      { word: 'taxi' },
      { word: 'bath' },
      { word: 'bend' },
      { word: 'chew' },
      { word: 'disabled' },
      { word: 'fantastic' },
      { word: 'fiction' },
      { word: 'flag' },
      { word: 'inspect' },
      { word: 'journal' },
      { word: 'liquid' },
      { word: 'marvel' },
      { word: 'overcome' },
      { word: 'recall' },
      { word: 'regret' },
      { word: 'soul' },
      { word: 'sufficient' },
      { word: 'surgery' },
      { word: 'tough' },
      { word: 'tube' },
      { word: 'value' },
      { word: 'atom' },
      { word: 'beautiful' },
      { word: 'breadth' },
      { word: 'comet' },
      { word: 'cover' },
      { word: 'despair' },
      { word: 'form' },
      { word: 'fragment' },
      { word: 'galaxy' },
      { word: 'gloom' },
      { word: 'large' },
      { word: 'moon' },
      { word: 'radiate' },
      { word: 'roam' },
      { word: 'solitary' },
      { word: 'spectrum' },
      { word: 'sphere' },
      { word: 'star' },
      { word: 'status' },
      { word: 'ugly' },
      { word: 'accuse' },
      { word: 'adjust' },
      { word: 'amuse' },
      { word: 'coral' },
      { word: 'cotton' },
      { word: 'crash' },
      { word: 'deck' },
      { word: 'engage' },
      { word: 'firm' },
      { word: 'fuel' },
      { word: 'grand' },
      { word: 'hurricane' },
      { word: 'loss' },
      { word: 'plain' },
      { word: 'reef' },
      { word: 'shut' },
      { word: 'strict' },
      { word: 'surf' },
      { word: 'task' },
      { word: 'zone' },
      { word: 'apology' },
      { word: 'bold' },
      { word: 'bug' },
      { word: 'capture' },
      { word: 'duke' },
      { word: 'expose' },
      { word: 'guilty' },
      { word: 'hire' },
      { word: 'innocent' },
      { word: 'language' },
      { word: 'minister' },
      { word: 'ordinary' },
      { word: 'permanent' },
      { word: 'preserve' },
      { word: 'pronounce' },
      { word: 'resemble' },
      { word: 'symptom' },
      { word: 'tobacco' },
      { word: 'twin' },
      { word: 'witch' },
      { word: 'accompany' },
      { word: 'bare' },
      { word: 'branch' },
      { word: 'breath' },
      { word: 'bridge' },
      { word: 'cast' },
      { word: 'dare' },
      { word: 'electronic' },
      { word: 'inn' },
      { word: 'net' },
      { word: 'philosophy' },
      { word: 'pot' },
      { word: 'seed' },
      { word: 'sharp' },
      { word: 'sort' },
      { word: 'subtract' },
      { word: 'tight' },
      { word: 'virtual' },
      { word: 'weigh' },
      { word: 'whisper' },
      { word: 'abstract' },
      { word: 'annual' },
      { word: 'clay' },
      { word: 'cloth' },
      { word: 'curtain' },
      { word: 'deserve' },
      { word: 'feather' },
      { word: 'fertile' },
      { word: 'flood' },
      { word: 'furniture' },
      { word: 'grave' },
      { word: 'ideal' },
      { word: 'intelligence' },
      { word: 'obtain' },
      { word: 'religious' },
      { word: 'romantic' },
      { word: 'shell' },
      { word: 'shore' },
      { word: 'wheel' },
      { word: 'wooden' },
      { word: 'appliance' },
      { word: 'basin' },
      { word: 'broom' },
      { word: 'caterpillar' },
      { word: 'cupboard' },
      { word: 'delicate' },
      { word: 'emerge' },
      { word: 'handicap' },
      { word: 'hole' },
      { word: 'hook' },
      { word: 'hop' },
      { word: 'laundry' },
      { word: 'pursue' },
      { word: 'reluctant' },
      { word: 'sleeve' },
      { word: 'spine' },
      { word: 'stain' },
      { word: 'strip' },
      { word: 'swear' },
      { word: 'swing' },
      { word: 'acre' },
      { word: 'afterlife' },
      { word: 'archaeology' },
      { word: 'chamber' },
      { word: 'channel' },
      { word: 'core' },
      { word: 'corridor' },
      { word: 'distinct' },
      { word: 'elite' },
      { word: 'engineer' },
      { word: 'gap' },
      { word: 'glory' },
      { word: 'interior' },
      { word: 'lion' },
      { word: 'role' },
      { word: 'royal' },
      { word: 'sole' },
      { word: 'stairs' },
      { word: 'surface' },
      { word: 'agreement' },
      { word: 'arise' },
      { word: 'benefactor' },
      { word: 'blacksmith' },
      { word: 'chimney' },
      { word: 'compensate' },
      { word: 'encounter' },
      { word: 'exceed' },
      { word: 'forge' },
      { word: 'humble' },
      { word: 'iron' },
      { word: 'ladder' },
      { word: 'modest' },
      { word: 'occupy' },
      { word: 'penny' },
      { word: 'preach' },
      { word: 'prosper' },
      { word: 'province' },
      { word: 'satisfaction' },
      { word: 'sustain' },
      { word: 'acquire' },
      { word: 'awkward' },
      { word: 'caretaker' },
      { word: 'deceive' },
      { word: 'discourage' },
      { word: 'fake' },
      { word: 'hatred' },
      { word: 'hut' },
      { word: 'inferior' },
      { word: 'lodge' },
      { word: 'neglect' },
      { word: 'newcomer' },
      { word: 'offense' },
      { word: 'overlook' },
      { word: 'repay' },
      { word: 'ridiculous' },
      { word: 'satisfactory' },
      { word: 'shepherd' },
      { word: 'venture' },
      { word: 'wheat' },
      { word: 'alley' },
      { word: 'ax' },
      { word: 'bunch' },
      { word: 'chore' },
      { word: 'decent' },
      { word: 'disgraceful' },
      { word: 'elbow' },
      { word: 'grateful' },
      { word: 'irritate' },
      { word: 'kid' },
      { word: 'loose' },
      { word: 'offend' },
      { word: 'overnight' },
      { word: 'persist' },
      { word: 'pine' },
      { word: 'scar' },
      { word: 'sensation' },
      { word: 'sled' },
      { word: 'tease' },
      { word: 'valentine' },
      { word: 'acquaint' },
      { word: 'cemetery' },
      { word: 'creature' },
      { word: 'curse' },
      { word: 'disguise' },
      { word: 'fancy' },
      { word: 'flashlight' },
      { word: 'hood' },
      { word: 'inhabitant' },
      { word: 'nourish' },
      { word: 'pirate' },
      { word: 'publication' },
      { word: 'riddle' },
      { word: 'rot' },
      { word: 'shortly' },
      { word: 'skeleton' },
      { word: 'spoil' },
      { word: 'starve' },
      { word: 'thrill' },
      { word: 'wicked' },
      { word: 'alert' },
      { word: 'broadcast' },
      { word: 'bulletin' },
      { word: 'bump' },
      { word: 'chop' },
      { word: 'closet' },
      { word: 'console' },
      { word: 'district' },
      { word: 'drawer' },
      { word: 'endure' },
      { word: 'execute' },
      { word: 'grasp' },
      { word: 'rear' },
      { word: 'senator' },
      { word: 'skull' },
      { word: 'stir' },
      { word: 'tap' },
      { word: 'tremendous' },
      { word: 'underneath' },
      { word: 'worm' },
      { word: 'abandon' },
      { word: 'ambitious' },
      { word: 'bark' },
      { word: 'bay' },
      { word: 'brilliant' },
      { word: 'chin' },
      { word: 'complaint' },
      { word: 'deaf' },
      { word: 'enthusiastic' },
      { word: 'expedition' },
      { word: 'horizon' },
      { word: 'loyal' },
      { word: 'mayor' },
      { word: 'mutual' },
      { word: 'overweight' },
      { word: 'refuge' },
      { word: 'restore' },
      { word: 'rub' },
      { word: 'veterinarian' },
      { word: 'anniversary' },
      { word: 'arithmetic' },
      { word: 'ashamed' },
      { word: 'burst' },
      { word: 'carpenter' },
      { word: 'coal' },
      { word: 'couch' },
      { word: 'drip' },
      { word: 'elegant' },
      { word: 'fabric' },
      { word: 'highland' },
      { word: 'ivory' },
      { word: 'mill' },
      { word: 'needle' },
      { word: 'polish' },
      { word: 'sew' },
      { word: 'shed' },
      { word: 'thread' },
      { word: 'trim' },
      { word: 'upward' },
      { word: 'ally' },
      { word: 'boast' },
      { word: 'bounce' },
      { word: 'bully' },
      { word: 'carbohydrate' },
      { word: 'crawl' },
      { word: 'defeat' },
      { word: 'dial' },
      { word: 'dominant' },
      { word: 'entire' },
      { word: 'mercy' },
      { word: 'nod' },
      { word: 'opponent' },
      { word: 'quarrel' },
      { word: 'rival' },
      { word: 'sore' },
      { word: 'sting' },
      { word: 'strain' },
      { word: 'torture' },
      { word: 'wrestle' },
      { word: 'absence' },
      { word: 'aloud' },
      { word: 'bald' },
      { word: 'blanket' },
      { word: 'creep' },
      { word: 'divorce' },
      { word: 'imitate' },
      { word: 'infant' },
      { word: 'kidnap' },
      { word: 'nap' },
      { word: 'nowhere' },
      { word: 'pat' },
      { word: 'relief' },
      { word: 'reproduce' },
      { word: 'rhyme' },
      { word: 'suck' },
      { word: 'urgent' },
      { word: 'vanish' },
      { word: 'wagon' },
      { word: 'wrinkle' },
      { word: 'architecture' },
      { word: 'basket' },
      { word: 'bloom' },
      { word: 'canoe' },
      { word: 'carpet' },
      { word: 'cousin' },
      { word: 'desk' },
      { word: 'gallery' },
      { word: 'guest' },
      { word: 'host' },
      { word: 'modern' },
      { word: 'museum' },
      { word: 'pink' },
      { word: 'plane' },
      { word: 'refrigerator' },
      { word: 'temperature' },
      { word: 'upper' },
      { word: 'welcome' },
      { word: 'anticipate' },
      { word: 'barrel' },
      { word: 'beam' },
      { word: 'casual' },
      { word: 'caution' },
      { word: 'contrary' },
      { word: 'deliberate' },
      { word: 'dissolve' },
      { word: 'explode' },
      { word: 'fasten' },
      { word: 'germ' },
      { word: 'kit' },
      { word: 'puff' },
      { word: 'rag' },
      { word: 'scatter' },
      { word: 'scent' },
      { word: 'steel' },
      { word: 'swift' },
      { word: 'toss' },
      { word: 'triumph' },
      { word: 'aboard' },
      { word: 'bitter' },
      { word: 'bullet' },
      { word: 'devil' },
      { word: 'drift' },
      { word: 'enforce' },
      { word: 'fountain' },
      { word: 'harbor' },
      { word: 'inhabit' },
      { word: 'march' },
      { word: 'millionaire' },
      { word: 'port' },
      { word: 'sheriff' },
      { word: 'startle' },
      { word: 'sweat' },
      { word: 'trigger' },
      { word: 'unify' },
      { word: 'vessel' },
      { word: 'voyage' },
      { word: 'worship' },
      { word: 'apprentice' },
      { word: 'assure' },
      { word: 'bandage' },
      { word: 'bleed' },
      { word: 'bond' },
      { word: 'chef' },
      { word: 'crown' },
      { word: 'departure' },
      { word: 'diligent' },
      { word: 'emperor' },
      { word: 'fiber' },
      { word: 'horrible' },
      { word: 'impolite' },
      { word: 'kneel' },
      { word: 'luxury' },
      { word: 'massive' },
      { word: 'panic' },
      { word: 'priority' },
      { word: 'robe' },
      { word: 'scold' },
      { word: 'affair' },
      { word: 'assembly' },
      { word: 'bless' },
      { word: 'cereal' },
      { word: 'cheerful' },
      { word: 'diameter' },
      { word: 'exploit' },
      { word: 'famine' },
      { word: 'harvest' },
      { word: 'merry' },
      { word: 'nut' },
      { word: 'pardon' },
      { word: 'pharaoh' },
      { word: 'ripe' },
      { word: 'roast' },
      { word: 'routine' },
      { word: 'scheme' },
      { word: 'slim' },
      { word: 'stove' },
      { word: 'theft' },
      { word: 'adolescent' },
      { word: 'aptitude' },
      { word: 'hinder' },
      { word: 'journalism' },
      { word: 'jury' },
      { word: 'justice' },
      { word: 'liberty' },
      { word: 'literary' },
      { word: 'pharmacy' },
      { word: 'pill' },
      { word: 'presume' },
      { word: 'privacy' },
      { word: 'punishment' },
      { word: 'sensible' },
      { word: 'slice' },
      { word: 'sorrow' },
      { word: 'straw' },
      { word: 'swell' },
      { word: 'tidy' },
      { word: 'affection' },
      { word: 'agency' },
      { word: 'ash' },
      { word: 'confine' },
      { word: 'dismiss' },
      { word: 'erupt' },
      { word: 'fate' },
      { word: 'lava' },
      { word: 'miserable' },
      { word: 'navigate' },
      { word: 'originate' },
      { word: 'remainder' },
      { word: 'retrieve' },
      { word: 'shallow' },
      { word: 'slope' },
      { word: 'span' },
      { word: 'superstition' },
      { word: 'sympathy' },
      { word: 'vibrate' },
      { word: 'wander' },
      { word: 'armor' },
      { word: 'blaze' },
      { word: 'boom' },
      { word: 'cliff' },
      { word: 'flame' },
      { word: 'independence' },
      { word: 'invasion' },
      { word: 'knight' },
      { word: 'lightning' },
      { word: 'rebel' },
      { word: 'retreat' },
      { word: 'revolution' },
      { word: 'spear' },
      { word: 'steep' },
      { word: 'summit' },
      { word: 'thunder' },
      { word: 'troop' },
      { word: 'warrior' },
      { word: 'withdraw' },
      { word: 'yield' },
      { word: 'bench' },
      { word: 'daisy' },
      { word: 'dispute' },
      { word: 'empty' },
      { word: 'horror' },
      { word: 'incident' },
      { word: 'mist' },
      { word: 'object' },
      { word: 'orphan' },
      { word: 'plot' },
      { word: 'pregnant' },
      { word: 'rage' },
      { word: 'revenge' },
      { word: 'shame' },
      { word: 'sigh' },
      { word: 'sneak' },
      { word: 'spare' },
      { word: 'stem' },
      { word: 'supper' },
      { word: 'tender' },
      { word: 'beneath' },
      { word: 'cub' },
      { word: 'dawn' },
      { word: 'dissatisfied' },
      { word: 'ease' },
      { word: 'evident' },
      { word: 'hail' },
      { word: 'howl' },
      { word: 'leap' },
      { word: 'magnificent' },
      { word: 'necessity' },
      { word: 'outcome' },
      { word: 'pile' },
      { word: 'profound' },
      { word: 'seize' },
      { word: 'squeeze' },
      { word: 'supreme' },
      { word: 'terrific' },
      { word: 'trait' },
      { word: 'vital' },
      { word: 'attack' },
      { word: 'breast' },
      { word: 'cancer' },
      { word: 'cancerous' },
      { word: 'cell' },
      { word: 'cigarette' },
      { word: 'code' },
      { word: 'cure' },
      { word: 'destruction' },
      { word: 'DNA' },
      { word: 'extensive' },
      { word: 'female' },
      { word: 'furthermore' },
      { word: 'gene' },
      { word: 'inherit' },
      { word: 'link' },
      { word: 'male' },
      { word: 'population' },
      { word: 'result' },
      { word: 'sugar' },
      { word: 'accommodate' },
      { word: 'circus' },
      { word: 'coincide' },
      { word: 'commission' },
      { word: 'dose' },
      { word: 'dye' },
      { word: 'extent' },
      { word: 'gender' },
      { word: 'headline' },
      { word: 'informal' },
      { word: 'inquire' },
      { word: 'messenger' },
      { word: 'peer' },
      { word: 'portrait' },
      { word: 'pose' },
      { word: 'ranch' },
      { word: 'steer' },
      { word: 'stripe' },
      { word: 'tame' },
      { word: 'tempt' },
      { word: 'ban' },
      { word: 'cautious' },
      { word: 'confess' },
      { word: 'cottage' },
      { word: 'daytime' },
      { word: 'desperate' },
      { word: 'exhausting' },
      { word: 'fade' },
      { word: 'fierce' },
      { word: 'gamble' },
      { word: 'lawn' },
      { word: 'mow' },
      { word: 'outlaw' },
      { word: 'prospect' },
      { word: 'purse' },
      { word: 'rod' },
      { word: 'seldom' },
      { word: 'shave' },
      { word: 'terrified' },
      { word: 'wizard' },
      { word: 'abroad' },
      { word: 'airline' },
      { word: 'audience' },
      { word: 'bargain' },
      { word: 'brief' },
      { word: 'currency' },
      { word: 'data' },
      { word: 'domestic' },
      { word: 'draft' },
      { word: 'gather' },
      { word: 'hobby' },
      { word: 'income' },
      { word: 'jet' },
      { word: 'maximum' },
      { word: 'official' },
      { word: 'recommend' },
      { word: 'refer' },
      { word: 'remote' },
      { word: 'sleepless' },
      { word: 'volume' },
      { word: 'circulate' },
      { word: 'consequent' },
      { word: 'derive' },
      { word: 'drown' },
      { word: 'dynasty' },
      { word: 'fraction' },
      { word: 'frost' },
      { word: 'illusion' },
      { word: 'invade' },
      { word: 'lieutenant' },
      { word: 'marine' },
      { word: 'merit' },
      { word: 'navy' },
      { word: 'polar' },
      { word: 'ray' },
      { word: 'resign' },
      { word: 'suicide' },
      { word: 'tremble' },
      { word: 'underlying' },
      { word: 'via' },
      { word: 'alter' },
      { word: 'aside' },
      { word: 'autumn' },
      { word: 'blend' },
      { word: 'collapse' },
      { word: 'crush' },
      { word: 'curve' },
      { word: 'disgusting' },
      { word: 'drain' },
      { word: 'embrace' },
      { word: 'envy' },
      { word: 'firework' },
      { word: 'flour' },
      { word: 'fuse' },
      { word: 'ginger' },
      { word: 'jealous' },
      { word: 'paste' },
      { word: 'receipt' },
      { word: 'wipe' },
      { word: 'wire' },
      { word: 'acknowledge' },
      { word: 'ambassador' },
      { word: 'blonde' },
      { word: 'conquer' },
      { word: 'drag' },
      { word: 'exaggerate' },
      { word: 'heritage' },
      { word: 'insult' },
      { word: 'meanwhile' },
      { word: 'necklace' },
      { word: 'noble' },
      { word: 'precious' },
      { word: 'prejudice' },
      { word: 'rumor' },
      { word: 'sin' },
      { word: 'spectacle' },
      { word: 'stack' },
      { word: 'suspicious' },
      { word: 'tin' },
      { word: 'vase' },
      { word: 'ache' },
      { word: 'arctic' },
      { word: 'canal' },
      { word: 'chemist' },
      { word: 'chill' },
      { word: 'congress' },
      { word: 'dairy' },
      { word: 'descend' },
      { word: 'grocer' },
      { word: 'hesitate' },
      { word: 'institution' },
      { word: 'jog' },
      { word: 'merchant' },
      { word: 'poke' },
      { word: 'postpone' },
      { word: 'splash' },
      { word: 'stubborn' },
      { word: 'suburb' },
      { word: 'tide' },
      { word: 'tragedy' },
      { word: 'bomb' },
      { word: 'certificate' },
      { word: 'circumstance' },
      { word: 'coffin' },
      { word: 'cope' },
      { word: 'criticism' },
      { word: 'devastate' },
      { word: 'frown' },
      { word: 'gaze' },
      { word: 'glance' },
      { word: 'grief' },
      { word: 'groom' },
      { word: 'license' },
      { word: 'microscope' },
      { word: 'nuclear' },
      { word: 'portray' },
      { word: 'rotate' },
      { word: 'souvenir' },
      { word: 'submarine' },
      { word: 'trace' },
      { word: 'coastline' },
      { word: 'deter' },
      { word: 'devise' },
      { word: 'distance' },
      { word: 'expertise' },
      { word: 'fracture' },
      { word: 'headache' },
      { word: 'implement' },
      { word: 'insight' },
      { word: 'limb' },
      { word: 'might' },
      { word: 'optimism' },
      { word: 'proficient' },
      { word: 'raft' },
      { word: 'ridge' },
      { word: 'shoulder' },
      { word: 'shove' },
      { word: 'spouse' },
      { word: 'thrust' },
      { word: 'tolerate' },
      { word: 'accountable' },
      { word: 'addictive' },
      { word: 'agenda' },
      { word: 'coin' },
      { word: 'correlate' },
      { word: 'depression' },
      { word: 'digital' },
      { word: 'importance' },
      { word: 'keyboard' },
      { word: 'loneliness' },
      { word: 'media' },
      { word: 'platform' },
      { word: 'poor' },
      { word: 'presence' },
      { word: 'subject' },
      { word: 'surge' },
      { word: 'survey' },
      { word: 'target' },
      { word: 'trend' },
      { word: 'validate' },
      { word: 'carbon' },
      { word: 'dust' },
      { word: 'emit' },
      { word: 'enable' },
      { word: 'grind' },
      { word: 'heal' },
      { word: 'integrate' },
      { word: 'leading' },
      { word: 'moreover' },
      { word: 'pollutant' },
      { word: 'powder' },
      { word: 'prompt' },
      { word: 'reject' },
      { word: 'skeptic' },
      { word: 'substance' },
      { word: 'substantially' },
      { word: 'ton' },
      { word: 'transport' },
      { word: 'align' },
      { word: 'authority' },
      { word: 'barn' },
      { word: 'betray' },
      { word: 'Bible' },
      { word: 'Catholic' },
      { word: 'cooperate' },
      { word: 'detain' },
      { word: 'exit' },
      { word: 'exceptional' },
      { word: 'flee' },
      { word: 'network' },
      { word: 'outrage' },
      { word: 'parish' },
      { word: 'passage' },
      { word: 'pastor' },
      { word: 'patrol' },
      { word: 'raid' },
      { word: 'rail' },
      { word: 'tunnel' },
      { word: 'comfortable' },
      { word: 'education' },
      { word: 'encouragement' },
      { word: 'endorse' },
      { word: 'equal' },
      { word: 'face' },
      { word: 'field' },
      { word: 'foster' },
      { word: 'guidance' },
      { word: 'hold' },
      { word: 'inclusion' },
      { word: 'inspire' },
      { word: 'mere' },
      { word: 'position' },
      { word: 'power' },
      { word: 'responsibility' },
      { word: 'soar' },
      { word: 'tool' },
      { word: 'vocal' },
      { word: 'workplace' },
      { word: 'academic' },
      { word: 'acceptance' },
      { word: 'array' },
      { word: 'blur' },
      { word: 'cafe' },
      { word: 'canvas' },
      { word: 'cinema' },
      { word: 'class' },
      { word: 'distinctive' },
      { word: 'key' },
      { word: 'movement' },
      { word: 'practice' },
      { word: 'realistic' },
      { word: 'reflection' },
      { word: 'rule' },
      { word: 'stroke' },
      { word: 'sunlight' },
      { word: 'traditional' },
      { word: 'unlike' },
      { word: 'width' },
      { word: 'anthem' },
      { word: 'beyond' },
      { word: 'determination' },
      { word: 'fighting' },
      { word: 'joint' },
      { word: 'landing' },
      { word: 'mark' },
      { word: 'mobilize' },
      { word: 'nation' },
      { word: 'originally' },
      { word: 'outbreak' },
      { word: 'pray' },
      { word: 'prisoner' },
      { word: 'sacrifice' },
      { word: 'silence' },
      { word: 'thus' },
      { word: 'tribute' },
      { word: 'victory' },
      { word: 'wild' },
      { word: 'wound' },
      { word: 'assimilate' },
      { word: 'attempt' },
      { word: 'case' },
      { word: 'cease' },
      { word: 'danger' },
      { word: 'devastating' },
      { word: 'diversity' },
      { word: 'earthquake' },
      { word: 'endangered' },
      { word: 'extinction' },
      { word: 'forever' },
      { word: 'generally' },
      { word: 'genocide' },
      { word: 'hit' },
      { word: 'lose' },
      { word: 'native' },
      { word: 'percent' },
      { word: 'reason' },
      { word: 'reference' },
      { word: 'urban' },
      { word: 'burn' },
      { word: 'check' },
      { word: 'coconut' },
      { word: 'epilepsy' },
      { word: 'fat' },
      { word: 'gain' },
      { word: 'glucose' },
      { word: 'high' },
      { word: 'keep' },
      { word: 'known' },
      { word: 'liver' },
      { word: 'low' },
      { word: 'management' },
      { word: 'metabolic' },
      { word: 'oil' },
      { word: 'olive' },
      { word: 'performance' },
      { word: 'powerful' },
      { word: 'starch' },
      { word: 'summary' },
      { word: 'analytic' },
      { word: 'area' },
      { word: 'bachelor' },
      { word: 'cognitive' },
      { word: 'collision' },
      { word: 'competent' },
      { word: 'diploma' },
      { word: 'excel' },
      { word: 'geology' },
      { word: 'integral' },
      { word: 'intellect' },
      { word: 'job' },
      { word: 'keen' },
      { word: 'minimum' },
      { word: 'psychology' },
      { word: 'radioactive' },
      { word: 'relativity' },
      { word: 'sociology' },
      { word: 'theoretical' },
      { word: 'weak' },
      { word: 'administrator' },
      { word: 'affluent' },
      { word: 'audit' },
      { word: 'automate' },
      { word: 'bribe' },
      { word: 'corrupt' },
      { word: 'dispose' },
      { word: 'headquarters' },
      { word: 'incentive' },
      { word: 'infrastructure' },
      { word: 'legislate' },
      { word: 'legitimate' },
      { word: 'manipulate' },
      { word: 'merchandise' },
      { word: 'retail' },
      { word: 'revenue' },
      { word: 'rubbish' },
      { word: 'subsidy' },
      { word: 'transaction' },
      { word: 'violate' },
      { word: 'assess' },
      { word: 'astonish' },
      { word: 'commence' },
      { word: 'essence' },
      { word: 'extract' },
      { word: 'fabulous' },
      { word: 'haste' },
      { word: 'impulse' },
      { word: 'inhibit' },
      { word: 'latter' },
      { word: 'molecule' },
      { word: 'ongoing' },
      { word: 'precise' },
      { word: 'proximity' },
      { word: 'publicity' },
      { word: 'remedy' },
      { word: 'significance' },
      { word: 'subsequent' },
      { word: 'synthetic' },
      { word: 'terminal' },
      { word: 'acute' },
      { word: 'aggression' },
      { word: 'biography' },
      { word: 'boost' },
      { word: 'clap' },
      { word: 'classical' },
      { word: 'compel' },
      { word: 'creation' },
      { word: 'dominance' },
      { word: 'gorgeous' },
      { word: 'inevitable' },
      { word: 'legacy' },
      { word: 'masterpiece' },
      { word: 'multiple' },
      { word: 'narrate' },
      { word: 'notorious' },
      { word: 'overall' },
      { word: 'partiality' },
      { word: 'spontaneous' },
      { word: 'virtue' },
      { word: 'aspect' },
      { word: 'asset' },
      { word: 'assignment' },
      { word: 'awareness' },
      { word: 'bud' },
      { word: 'coordinate' },
      { word: 'credit' },
      { word: 'disprove' },
      { word: 'humanitarian' },
      { word: 'hypothesis' },
      { word: 'informative' },
      { word: 'optic' },
      { word: 'premise' },
      { word: 'rack' },
      { word: 'Renaissance' },
      { word: 'spatial' },
      { word: 'specify' },
      { word: 'tie' },
      { word: 'undertake' },
      { word: 'wax' },
      { word: 'addict' },
      { word: 'archeology' },
      { word: 'archeological' },
      { word: 'brainstorm' },
      { word: 'budget' },
      { word: 'chaotic' },
      { word: 'cite' },
      { word: 'correspond' },
      { word: 'courtyard' },
      { word: 'estate' },
      { word: 'fraud' },
      { word: 'hydrogen' },
      { word: 'integrity' },
      { word: 'outlook' },
      { word: 'parachute' },
      { word: 'prehistoric' },
      { word: 'proponent' },
      { word: 'refine' },
      { word: 'restrict' },
      { word: 'team' },
      { word: 'aggregate' },
      { word: 'antibiotic' },
      { word: 'circuit' },
      { word: 'compress' },
      { word: 'database' },
      { word: 'equivalent' },
      { word: 'immune' },
      { word: 'input' },
      { word: 'intimate' },
      { word: 'magnet' },
      { word: 'metabolism' },
      { word: 'microchip' },
      { word: 'phase' },
      { word: 'pinch' },
      { word: 'prevalent' },
      { word: 'quantum' },
      { word: 'ratio' },
      { word: 'spiral' },
      { word: 'viral' },
      { word: 'acid' },
      { word: 'administration' },
      { word: 'administrative' },
      { word: 'biotechnology' },
      { word: 'cholesterol' },
      { word: 'coalition' },
      { word: 'deceptive' },
      { word: 'diabetes' },
      { word: 'eliminate' },
      { word: 'erosion' },
      { word: 'ethics' },
      { word: 'explicit' },
      { word: 'framework' },
      { word: 'manufacture' },
      { word: 'mechanism' },
      { word: 'minimize' },
      { word: 'nectar' },
      { word: 'notion' },
      { word: 'regime' },
      { word: 'straightforward' },
      { word: 'bankrupt' },
      { word: 'conform' },
      { word: 'employ' },
      { word: 'expel' },
      { word: 'extension' },
      { word: 'forthcoming' },
      { word: 'furnish' },
      { word: 'hygiene' },
      { word: 'hygienic' },
      { word: 'landlord' },
      { word: 'lease' },
      { word: 'mandatory' },
      { word: 'mend' },
      { word: 'mortgage' },
      { word: 'personnel' },
      { word: 'plumbing' },
      { word: 'quote' },
      { word: 'tenant' },
      { word: 'utility' },
      { word: 'whereby' },
      { word: 'adapt' },
      { word: 'biological' },
      { word: 'cellular' },
      { word: 'dynamic' },
      { word: 'fantasy' },
      { word: 'heredity' },
      { word: 'internal' },
      { word: 'minimal' },
      { word: 'pioneer' },
      { word: 'prescribe' },
      { word: 'respective' },
      { word: 'rigid' },
      { word: 'sequence' },
      { word: 'similar' },
      { word: 'substitute' },
      { word: 'surgeon' },
      { word: 'therapy' },
      { word: 'transfer' },
      { word: 'transition' },
      { word: 'transplant' },
      { word: 'astrology' },
      { word: 'couple' },
      { word: 'deviate' },
      { word: 'differentiate' },
      { word: 'disrupt' },
      { word: 'equation' },
      { word: 'err' },
      { word: 'erroneous' },
      { word: 'frantic' },
      { word: 'inadvertent' },
      { word: 'improvise' },
      { word: 'latitude' },
      { word: 'mariner' },
      { word: 'multitude' },
      { word: 'nuisance' },
      { word: 'permanence' },
      { word: 'revolve' },
      { word: 'soothe' },
      { word: 'stranded' },
      { word: 'technique' },
      { word: 'absurd' },
      { word: 'aristocracy' },
      { word: 'aristocrat' },
      { word: 'attire' },
      { word: 'craze' },
      { word: 'denote' },
      { word: 'enlarge' },
      { word: 'excess' },
      { word: 'feminine' },
      { word: 'hierarchy' },
      { word: 'pad' },
      { word: 'partner' },
      { word: 'predominant' },
      { word: 'protocol' },
      { word: 'reputable' },
      { word: 'signify' },
      { word: 'strap' },
      { word: 'style' },
      { word: 'tangle' },
      { word: 'vanity' },
      { word: 'ashore' },
      { word: 'contradict' },
      { word: 'counterpart' },
      { word: 'devoid' },
      { word: 'diverge' },
      { word: 'embryo' },
      { word: 'finally' },
      { word: 'gazette' },
      { word: 'homogeneous' },
      { word: 'individual' },
      { word: 'major' },
      { word: 'obstruct' },
      { word: 'plunge' },
      { word: 'prolong' },
      { word: 'publicize' },
      { word: 'surplus' },
      { word: 'survive' },
      { word: 'theorize' },
      { word: 'verify' },
      { word: 'vigorous' },
      { word: 'altar' },
      { word: 'arthritis' },
      { word: 'botany' },
      { word: 'credible' },
      { word: 'deceased' },
      { word: 'deception' },
      { word: 'document' },
      { word: 'dung' },
      { word: 'dusk' },
      { word: 'gratify' },
      { word: 'hone' },
      { word: 'interpret' },
      { word: 'motive' },
      { word: 'pneumonia' },
      { word: 'psychic' },
      { word: 'psychotic' },
      { word: 'scope' },
      { word: 'sinister' },
      { word: 'strife' },
      { word: 'text' },
      { word: 'artery' },
      { word: 'deterioration' },
      { word: 'elusive' },
      { word: 'ensure' },
      { word: 'induce' },
      { word: 'inseparable' },
      { word: 'invalid' },
      { word: 'magnify' },
      { word: 'mainstream' },
      { word: 'microbe' },
      { word: 'minor' },
      { word: 'negligible' },
      { word: 'paralysis' },
      { word: 'pest' },
      { word: 'prevail' },
      { word: 'pursuit' },
      { word: 'rupture' },
      { word: 'savage' },
      { word: 'stun' },
      { word: 'susceptible' },
      { word: 'advocate' },
      { word: 'albeit' },
      { word: 'authorize' },
      { word: 'civilian' },
      { word: 'commodity' },
      { word: 'communicate' },
      { word: 'conquest' },
      { word: 'disclose' },
      { word: 'dynamics' },
      { word: 'enroll' },
      { word: 'envious' },
      { word: 'festive' },
      { word: 'indicate' },
      { word: 'lentil' },
      { word: 'marshal' },
      { word: 'morale' },
      { word: 'mood' },
      { word: 'prophecy' },
      { word: 'senate' },
      { word: 'unrest' },
      { word: 'certify' },
      { word: 'coherent' },
      { word: 'collaborate' },
      { word: 'compile' },
      { word: 'curb' },
      { word: 'diagnose' },
      { word: 'enact' },
      { word: 'federation' },
      { word: 'gross' },
      { word: 'humane' },
      { word: 'needy' },
      { word: 'onset' },
      { word: 'pledge' },
      { word: 'prohibit' },
      { word: 'render' },
      { word: 'smallpox' },
      { word: 'transform' },
      { word: 'transmit' },
      { word: 'vow' },
      { word: 'widespread' },
      { word: 'adhere' },
      { word: 'administer' },
      { word: 'compassionate' },
      { word: 'contaminate' },
      { word: 'deficiency' },
      { word: 'emphasis' },
      { word: 'epidemic' },
      { word: 'hazard' },
      { word: 'imperative' },
      { word: 'intestine' },
      { word: 'manifest' },
      { word: 'overcrowded' },
      { word: 'practitioner' },
      { word: 'provision' },
      { word: 'replenish' },
      { word: 'reverse' },
      { word: 'sterile' },
      { word: 'upgrade' },
      { word: 'viable' },
      { word: 'voluntary' },
      { word: 'airway' },
      { word: 'almighty' },
      { word: 'advent' },
      { word: 'cycle' },
      { word: 'definitive' },
      { word: 'equate' },
      { word: 'ideology' },
      { word: 'inhale' },
      { word: 'invoke' },
      { word: 'lunar' },
      { word: 'novelty' },
      { word: 'outmoded' },
      { word: 'personalize' },
      { word: 'psychiatric' },
      { word: 'psychiatry' },
      { word: 'reflex' },
      { word: 'seizure' },
      { word: 'session' },
      { word: 'utensil' },
      { word: 'allocate' },
      { word: 'appetizing' },
      { word: 'assign' },
      { word: 'cavity' },
      { word: 'clockwise' },
      { word: 'concentric' },
      { word: 'courtesy' },
      { word: 'crisp' },
      { word: 'discord' },
      { word: 'generate' },
      { word: 'item' },
      { word: 'interchange' },
      { word: 'multicultural' },
      { word: 'omission' },
      { word: 'oversee' },
      { word: 'pierce' },
      { word: 'select' },
      { word: 'structure' },
      { word: 'visual' },
      { word: 'wavy' },
      { word: 'conversion' },
      { word: 'cram' },
      { word: 'defer' },
      { word: 'export' },
      { word: 'fume' },
      { word: 'habitual' },
      { word: 'justify' },
      { word: 'notwithstanding' },
      { word: 'output' },
      { word: 'overpopulation' },
      { word: 'patent' },
      { word: 'penalize' },
      { word: 'petroleum' },
      { word: 'region' },
      { word: 'scrap' },
      { word: 'sector' },
      { word: 'subscribe' },
      { word: 'subsist' },
      { word: 'suspend' },
      { word: 'synthesis' },
      { word: 'acrobat' },
      { word: 'advocacy' },
      { word: 'communal' },
      { word: 'fluid' },
      { word: 'harmonize' },
      { word: 'industrious' },
      { word: 'inventive' },
      { word: 'metropolitan' },
      { word: 'mimic' },
      { word: 'misguided' },
      { word: 'rehearse' },
      { word: 'resourceful' },
      { word: 'scorn' },
      { word: 'sensory' },
      { word: 'statute' },
      { word: 'technical' },
      { word: 'veteran' },
      { word: 'villain' },
      { word: 'vine' },
      { word: 'aroma' },
      { word: 'beverage' },
      { word: 'cluster' },
      { word: 'combine' },
      { word: 'condensed' },
      { word: 'contemporary' },
      { word: 'cultivate' },
      { word: 'divine' },
      { word: 'humid' },
      { word: 'odor' },
      { word: 'palate' },
      { word: 'paradise' },
      { word: 'plantation' },
      { word: 'rapid' },
      { word: 'rate' },
      { word: 'soothing' },
      { word: 'subtle' },
      { word: 'texture' },
      { word: 'toxic' },
      { word: 'vary' },
      { word: 'admiral' },
      { word: 'arc' },
      { word: 'character' },
      { word: 'conscience' },
      { word: 'escape' },
      { word: 'fiery' },
      { word: 'flesh' },
      { word: 'grapefruit' },
      { word: 'hay' },
      { word: 'horrified' },
      { word: 'kerosene' },
      { word: 'loop' },
      { word: 'middle' },
      { word: 'paddle' },
      { word: 'sour' },
      { word: 'stake' },
      { word: 'steward' },
      { word: 'string' },
      { word: 'thorn' },
      { word: 'wreck' },
      { word: 'admonish' },
      { word: 'audible' },
      { word: 'awesome' },
      { word: 'beware' },
      { word: 'brag' },
      { word: 'conscious' },
      { word: 'disagree' },
      { word: 'echo' },
      { word: 'eventual' },
      { word: 'hint' },
      { word: 'idiot' },
      { word: 'immense' },
      { word: 'indirect' },
      { word: 'option' },
      { word: 'pastime' },
      { word: 'perfect' },
      { word: 'pinpoint' },
      { word: 'switch' },
      { word: 'thorough' },
      { word: 'torment' },
      { word: 'abrupt' },
      { word: 'agony' },
      { word: 'assassin' },
      { word: 'beard' },
      { word: 'beast' },
      { word: 'chapel' },
      { word: 'commentator' },
      { word: 'con' },
      { word: 'consensus' },
      { word: 'conspiracy' },
      { word: 'coup' },
      { word: 'cynical' },
      { word: 'dome' },
      { word: 'exclaim' },
      { word: 'forum' },
      { word: 'glamor' },
      { word: 'harass' },
      { word: 'illuminate' },
      { word: 'inflame' },
      { word: 'melody' },
      { word: 'awhile' },
      { word: 'cyberspace' },
      { word: 'edit' },
      { word: 'essay' },
      { word: 'evaluate' },
      { word: 'faint' },
      { word: 'global' },
      { word: 'gymnasium' },
      { word: 'highlight' },
      { word: 'ignorant' },
      { word: 'index' },
      { word: 'lecture' },
      { word: 'moral' },
      { word: 'operate' },
      { word: 'private' },
      { word: 'recent' },
      { word: 'resolution' },
      { word: 'semester' },
      { word: 'typewritten' },
      { word: 'weird' },
      { word: 'accustom' },
      { word: 'alpha' },
      { word: 'arouse' },
      { word: 'articulate' },
      { word: 'buzz' },
      { word: 'clash' },
      { word: 'classification' },
      { word: 'cling' },
      { word: 'compliance' },
      { word: 'comprehend' },
      { word: 'congregate' },
      { word: 'custody' },
      { word: 'disperse' },
      { word: 'embody' },
      { word: 'empirical' },
      { word: 'exclusion' },
      { word: 'flock' },
      { word: 'graze' },
      { word: 'intelligent' },
      { word: 'jungle' },
      { word: 'account' },
      { word: 'architect' },
      { word: 'conceal' },
      { word: 'crime' },
      { word: 'deed' },
      { word: 'gratitude' },
      { word: 'habitat' },
      { word: 'intervene' },
      { word: 'landmark' },
      { word: 'legal' },
      { word: 'memorable' },
      { word: 'oblige' },
      { word: 'proclaim' },
      { word: 'rally' },
      { word: 'resolve' },
      { word: 'resource' },
      { word: 'sentence' },
      { word: 'volunteer' },
      { word: 'witness' },
      { word: 'access' },
      { word: 'conduct' },
      { word: 'constant' },
      { word: 'crack' },
      { word: 'device' },
      { word: 'enclose' },
      { word: 'grip' },
      { word: 'halt' },
      { word: 'impending' },
      { word: 'influence' },
      { word: 'law' },
      { word: 'mode' },
      { word: 'perspire' },
      { word: 'replace' },
      { word: 'snap' },
      { word: 'sly' },
      { word: 'tend' },
      { word: 'valid' },
      { word: 'version' },
      { word: 'whatsoever' },
      { word: 'alongside' },
      { word: 'appetite' },
      { word: 'assist' },
      { word: 'breeze' },
      { word: 'defy' },
      { word: 'display' },
      { word: 'efficient' },
      { word: 'feeble' },
      { word: 'forgive' },
      { word: 'lively' },
      { word: 'majestic' },
      { word: 'pessimistic' },
      { word: 'relationship' },
      { word: 'slap' },
      { word: 'smash' },
      { word: 'successful' },
      { word: 'wage' },
      { word: 'whereas' },
      { word: 'animate' },
      { word: 'classify' },
      { word: 'concede' },
      { word: 'concept' },
      { word: 'construct' },
      { word: 'decade' },
      { word: 'diagram' },
      { word: 'ferry' },
      { word: 'handy' },
      { word: 'isolate' },
      { word: 'longing' },
      { word: 'numerous' },
      { word: 'particle' },
      { word: 'plea' },
      { word: 'refrain' },
      { word: 'review' },
      { word: 'sophisticated' },
      { word: 'surrender' },
      { word: 'upright' },
      { word: 'worthwhile' },
      { word: 'alliance' },
      { word: 'applause' },
      { word: 'armed' },
      { word: 'authoritative' },
      { word: 'bravery' },
      { word: 'ceremony' },
      { word: 'culture' },
      { word: 'defense' },
      { word: 'detail' },
      { word: 'diverse' },
      { word: 'enchant' },
      { word: 'equip' },
      { word: 'exception' },
      { word: 'genre' },
      { word: 'impact' },
      { word: 'lure' },
      { word: 'obstacle' },
      { word: 'shelter' },
      { word: 'supply' },
      { word: 'vain' },
      { word: 'alternative' },
      { word: 'avenue' },
      { word: 'belly' },
      { word: 'bid' },
      { word: 'blow' },
      { word: 'conflict' },
      { word: 'continent' },
      { word: 'current' },
      { word: 'disrespect' },
      { word: 'enthusiasm' },
      { word: 'harsh' },
      { word: 'lean' },
      { word: 'meantime' },
      { word: 'mischief' },
      { word: 'muscle' },
      { word: 'rescue' },
      { word: 'succession' },
      { word: 'terrain' },
      { word: 'timid' },
      { word: 'violence' },
      { word: 'affect' },
      { word: 'autograph' },
      { word: 'bead' },
      { word: 'brew' },
      { word: 'charm' },
      { word: 'destiny' },
      { word: 'equipment' },
      { word: 'horn' },
      { word: 'irritable' },
      { word: 'lag' },
      { word: 'nightmare' },
      { word: 'nutritious' },
      { word: 'protein' },
      { word: 'signature' },
      { word: 'stuff' },
      { word: 'subconscious' },
      { word: 'van' },
      { word: 'warn' },
      { word: 'workout' },
      { word: 'zoom' },
      { word: 'brick' },
      { word: 'crumble' },
      { word: 'dough' },
      { word: 'express' },
      { word: 'fist' },
      { word: 'flexible' },
      { word: 'flush' },
      { word: 'injure' },
      { word: 'lump' },
      { word: 'mixture' },
      { word: 'reconcile' },
      { word: 'shatter' },
      { word: 'shutter' },
      { word: 'sift' },
      { word: 'slight' },
      { word: 'sparkle' },
      { word: 'sprinkle' },
      { word: 'stale' },
      { word: 'utter' },
      { word: 'although' },
      { word: 'apply' },
      { word: 'await' },
      { word: 'beloved' },
      { word: 'climate' },
      { word: 'complain' },
      { word: 'confuse' },
      { word: 'due' },
      { word: 'establish' },
      { word: 'furnace' },
      { word: 'leash' },
      { word: 'mature' },
      { word: 'measure' },
      { word: 'midst' },
      { word: 'misery' },
      { word: 'powerless' },
      { word: 'prior' },
      { word: 'research' },
      { word: 'spaceship' },
      { word: 'variety' },
      { word: 'altogether' },
      { word: 'bind' },
      { word: 'bruise' },
      { word: 'custom' },
      { word: 'disobedient' },
      { word: 'foresee' },
      { word: 'glimpse' },
      { word: 'hoop' },
      { word: 'misfortune' },
      { word: 'negative' },
      { word: 'per' },
      { word: 'plead' },
      { word: 'rip' },
      { word: 'sake' },
      { word: 'scrape' },
      { word: 'source' },
      { word: 'stern' },
      { word: 'stitch' },
      { word: 'thump' },
      { word: 'vehement' },
      { word: 'ailing' },
      { word: 'alike' },
      { word: 'appall' },
      { word: 'bathe' },
      { word: 'bounds' },
      { word: 'critique' },
      { word: 'demography' },
      { word: 'diagnosis' },
      { word: 'dip' },
      { word: 'distress' },
      { word: 'fever' },
      { word: 'grim' },
      { word: 'gut' },
      { word: 'helmet' },
      { word: 'herb' },
      { word: 'militant' },
      { word: 'miracle' },
      { word: 'mourn' },
      { word: 'nonsense' },
      { word: 'physician' },
      { word: 'accent' },
      { word: 'barber' },
      { word: 'basement' },
      { word: 'blank' },
      { word: 'blink' },
      { word: 'choir' },
      { word: 'comic' },
      { word: 'complicate' },
      { word: 'decline' },
      { word: 'errand' },
      { word: 'glove' },
      { word: 'hermit' },
      { word: 'justly' },
      { word: 'leather' },
      { word: 'ponder' },
      { word: 'reserve' },
      { word: 'script' },
      { word: 'search' },
      { word: 'slam' },
      { word: 'staircase' },
      { word: 'afflicted' },
      { word: 'aisle' },
      { word: 'atmosphere' },
      { word: 'author' },
      { word: 'breakdown' },
      { word: 'cargo' },
      { word: 'chapter' },
      { word: 'connect' },
      { word: 'flip' },
      { word: 'idle' },
      { word: 'notify' },
      { word: 'pea' },
      { word: 'raisin' },
      { word: 'retain' },
      { word: 'state' },
      { word: 'tray' },
      { word: 'unfortunate' },
      { word: 'vivid' },
      { word: 'vomit' },
      { word: 'ambition' },
      { word: 'ambulance' },
      { word: 'ankle' },
      { word: 'cabin' },
      { word: 'calendar' },
      { word: 'calorie' },
      { word: 'cave' },
      { word: 'constantly' },
      { word: 'contingent' },
      { word: 'deadline' },
      { word: 'exert' },
      { word: 'flank' },
      { word: 'fond' },
      { word: 'forbid' },
      { word: 'haul' },
      { word: 'impair' },
      { word: 'impatient' },
      { word: 'mid' },
      { word: 'nutrition' },
      { word: 'optimist' },
      { word: 'background' },
      { word: 'bait' },
      { word: 'chronicle' },
      { word: 'copper' },
      { word: 'disease' },
      { word: 'folklore' },
      { word: 'infect' },
      { word: 'itch' },
      { word: 'literature' },
      { word: 'millennium' },
      { word: 'myth' },
      { word: 'promote' },
      { word: 'relate' },
      { word: 'religion' },
      { word: 'sum' },
      { word: 'teller' },
      { word: 'trustworthy' },
      { word: 'update' },
      { word: 'vein' },
      { word: 'venom' },
      { word: 'charity' },
      { word: 'commerce' },
      { word: 'condemn' },
      { word: 'cozy' },
      { word: 'deplete' },
      { word: 'economy' },
      { word: 'empire' },
      { word: 'goods' },
      { word: 'heed' },
      { word: 'hitchhike' },
      { word: 'mock' },
      { word: 'neutral' },
      { word: 'persecute' },
      { word: 'pity' },
      { word: 'reduce' },
      { word: 'scribe' },
      { word: 'temper' },
      { word: 'throne' },
      { word: 'unity' },
      { word: 'victor' },
      { word: 'accurate' },
      { word: 'analyze' },
      { word: 'asteroid' },
      { word: 'controversy' },
      { word: 'evolve' },
      { word: 'factor' },
      { word: 'genetic' },
      { word: 'genome' },
      { word: 'identical' },
      { word: 'intellectual' },
      { word: 'majority' },
      { word: 'mammal' },
      { word: 'multiply' },
      { word: 'offspring' },
      { word: 'pesticide' },
      { word: 'regulate' },
      { word: 'reinforce' },
      { word: 'stricken' },
      { word: 'vast' },
      { word: 'vegetarian' },
      { word: 'bowl' },
      { word: 'cooking' },
      { word: 'dense' },
      { word: 'dignity' },
      { word: 'dominate' },
      { word: 'earthen' },
      { word: 'hostile' },
      { word: 'incorrect' },
      { word: 'intake' },
      { word: 'likewise' },
      { word: 'machine' },
      { word: 'medication' },
      { word: 'obscure' },
      { word: 'oppress' },
      { word: 'peel' },
      { word: 'prescription' },
      { word: 'progress' },
      { word: 'sandy' },
      { word: 'shortage' },
      { word: 'skillful' },
      { word: 'aircraft' },
      { word: 'celebrity' },
      { word: 'concrete' },
      { word: 'decisive' },
      { word: 'esteemed' },
      { word: 'ethical' },
      { word: 'extinct' },
      { word: 'hardy' },
      { word: 'institute' },
      { word: 'jealousy' },
      { word: 'migrate' },
      { word: 'nurture' },
      { word: 'overhead' },
      { word: 'principle' },
      { word: 'rural' },
      { word: 'secluded' },
      { word: 'species' },
      { word: 'swamp' },
      { word: 'traverse' },
      { word: 'zoology' },
      { word: 'accordingly' },
      { word: 'anchor' },
      { word: 'cause' },
      { word: 'context' },
      { word: 'designate' },
      { word: 'distort' },
      { word: 'dock' },
      { word: 'energy' },
      { word: 'frequent' },
      { word: 'gear' },
      { word: 'genuine' },
      { word: 'grease' },
      { word: 'knowledge' },
      { word: 'omit' },
      { word: 'offset' },
      { word: 'overlap' },
      { word: 'secondhand' },
      { word: 'skill' },
      { word: 'slot' },
      { word: 'tactic' },
      { word: 'beneficial' },
      { word: 'birthplace' },
      { word: 'capacity' },
      { word: 'comparative' },
      { word: 'comprehensive' },
      { word: 'conserve' },
      { word: 'crucial' },
      { word: 'cumulative' },
      { word: 'deposit' },
      { word: 'distribute' },
      { word: 'equator' },
      { word: 'exotic' },
      { word: 'federal' },
      { word: 'formation' },
      { word: 'frequency' },
      { word: 'objective' },
      { word: 'oxygen' },
      { word: 'rainforest' },
      { word: 'strategy' },
      { word: 'wooded' },
      { word: 'avail' },
      { word: 'define' },
      { word: 'dread' },
      { word: 'expand' },
      { word: 'fundamental' },
      { word: 'horrifying' },
      { word: 'incredulous' },
      { word: 'linger' },
      { word: 'organism' },
      { word: 'paraphrase' },
      { word: 'plague' },
      { word: 'presently' },
      { word: 'random' },
      { word: 'riot' },
      { word: 'scribble' },
      { word: 'shrine' },
      { word: 'solitude' },
      { word: 'stark' },
      { word: 'summon' },
      { word: 'worsen' },
      { word: 'automobile' },
      { word: 'candidate' },
      { word: 'confidential' },
      { word: 'corporate' },
      { word: 'enhance' },
      { word: 'era' },
      { word: 'guideline' },
      { word: 'incorporate' },
      { word: 'interact' },
      { word: 'interval' },
      { word: 'mobile' },
      { word: 'modify' },
      { word: 'parallel' },
      { word: 'phenomenon' },
      { word: 'pollute' },
      { word: 'ridicule' },
      { word: 'solar' },
      { word: 'territory' },
      { word: 'tournament' },
      { word: 'transportation' },
      { word: 'bill' },
      { word: 'boundary' },
      { word: 'chaos' },
      { word: 'consistent' },
      { word: 'cyclone' },
      { word: 'doomed' },
      { word: 'heir' },
      { word: 'martial' },
      { word: 'organic' },
      { word: 'poultry' },
      { word: 'scramble' },
      { word: 'sergeant' },
      { word: 'sheer' },
      { word: 'stance' },
      { word: 'telegraph' },
      { word: 'textile' },
      { word: 'tornado' },
      { word: 'typhoon' },
      { word: 'wail' },
      { word: 'wardrobe' },
      { word: 'adverse' },
      { word: 'alternate' },
      { word: 'biodegradable' },
      { word: 'choke' },
      { word: 'convenient' },
      { word: 'discard' },
      { word: 'dolphin' },
      { word: 'ecologically' },
      { word: 'fatal' },
      { word: 'incidence' },
      { word: 'municipal' },
      { word: 'overuse' },
      { word: 'pond' },
      { word: 'recycle' },
      { word: 'reusable' },
      { word: 'stuffed' },
      { word: 'tragic' },
      { word: 'utilize' },
      { word: 'whale' },
      { word: 'amateur' },
      { word: 'ambiguous' },
      { word: 'anonymous' },
      { word: 'attain' },
      { word: 'autonomy' },
      { word: 'concession' },
      { word: 'decay' },
      { word: 'dwell' },
      { word: 'enlighten' },
      { word: 'enrich' },
      { word: 'flourish' },
      { word: 'geometry' },
      { word: 'gleam' },
      { word: 'greed' },
      { word: 'harmony' },
      { word: 'indigenous' },
      { word: 'jurisdiction' },
      { word: 'parade' },
      { word: 'statue' },
      { word: 'virgin' },
      { word: 'abnormal' },
      { word: 'absent' },
      { word: 'adjacent' },
      { word: 'aluminum' },
      { word: 'applicable' },
      { word: 'artificial' },
      { word: 'bicycle' },
      { word: 'broker' },
      { word: 'bureaucracy' },
      { word: 'configure' },
      { word: 'consolidate' },
      { word: 'convenience' },
      { word: 'deduct' },
      { word: 'deem' },
      { word: 'entrepreneur' },
      { word: 'evenly' },
      { word: 'fiscal' },
      { word: 'franchise' },
      { word: 'ideological' },
      { word: 'robot' },
      { word: 'abbey' },
      { word: 'abundant' },
      { word: 'adjoin' },
      { word: 'ample' },
      { word: 'arid' },
      { word: 'cathedral' },
      { word: 'crisis' },
      { word: 'deprive' },
      { word: 'drought' },
      { word: 'eligible' },
      { word: 'fast' },
      { word: 'grumble' },
      { word: 'inland' },
      { word: 'moisture' },
      { word: 'nonetheless' },
      { word: 'oath' },
      { word: 'prairie' },
      { word: 'rugged' },
      { word: 'scarce' },
      { word: 'speculate' },
      { word: 'aquatic' },
      { word: 'biosphere' },
      { word: 'bizarre' },
      { word: 'Celsius' },
      { word: 'coarse' },
      { word: 'companion' },
      { word: 'digest' },
      { word: 'duration' },
      { word: 'ecology' },
      { word: 'feat' },
      { word: 'infinite' },
      { word: 'nucleus' },
      { word: 'parasite' },
      { word: 'prominent' },
      { word: 'repetitive' },
      { word: 'reproductive' },
      { word: 'temperate' },
      { word: 'tolerance' },
      { word: 'undergo' },
      { word: 'vulnerable' },
      { word: 'archaic' },
      { word: 'brass' },
      { word: 'capitalism' },
      { word: 'component' },
      { word: 'dependence' },
      { word: 'diminish' },
      { word: 'drawback' },
      { word: 'impose' },
      { word: 'industry' },
      { word: 'managerial' },
      { word: 'medieval' },
      { word: 'obsolete' },
      { word: 'oriented' },
      { word: 'peninsula' },
      { word: 'prestige' },
      { word: 'proportion' },
      { word: 'radical' },
      { word: 'refute' },
      { word: 'spectacular' },
      { word: 'weave' },
      { word: 'accountant' },
      { word: 'capitalist' },
      { word: 'contempt' },
      { word: 'crop' },
      { word: 'dedicate' },
      { word: 'ditch' },
      { word: 'enterprise' },
      { word: 'finance' },
      { word: 'indifferent' },
      { word: 'irrigate' },
      { word: 'maximize' },
      { word: 'monetary' },
      { word: 'precaution' },
      { word: 'preliminary' },
      { word: 'saturate' },
      { word: 'simplicity' },
      { word: 'sow' },
      { word: 'spade' },
      { word: 'tomato' },
      { word: 'upcoming' },
      { word: 'anthropology' },
      { word: 'applaud' },
      { word: 'appoint' },
      { word: 'compatible' },
      { word: 'competence' },
      { word: 'confer' },
      { word: 'consecutive' },
      { word: 'crude' },
      { word: 'cube' },
      { word: 'feedback' },
      { word: 'ignorance' },
      { word: 'masculine' },
      { word: 'monument' },
      { word: 'muscular' },
      { word: 'posture' },
      { word: 'situate' },
      { word: 'supervise' },
      { word: 'symmetry' },
      { word: 'tattoo' },
      { word: 'undergraduate' },
      { word: 'cater' },
      { word: 'considerate' },
      { word: 'consumption' },
      { word: 'criteria' },
      { word: 'crust' },
      { word: 'entitle' },
      { word: 'escort' },
      { word: 'external' },
      { word: 'facility' },
      { word: 'faculty' },
      { word: 'heap' },
      { word: 'hemisphere' },
      { word: 'hound' },
      { word: 'impersonal' },
      { word: 'lick' },
      { word: 'ornament' },
      { word: 'pedestrian' },
      { word: 'sanctuary' },
      { word: 'spectator' },
      { word: 'yell' },
      { word: 'accessory' },
      { word: 'acquisition' },
      { word: 'cardboard' },
      { word: 'dilemma' },
      { word: 'elaborate' },
      { word: 'exact' },
      { word: 'facilitate' },
      { word: 'fleet' },
      { word: 'grid' },
      { word: 'import' },
      { word: 'infer' },
      { word: 'inflate' },
      { word: 'innate' },
      { word: 'marble' },
      { word: 'mast' },
      { word: 'nausea' },
      { word: 'naval' },
      { word: 'pouch' },
      { word: 'saturated' },
      { word: 'attorney' },
      { word: 'chronic' },
      { word: 'discipline' },
      { word: 'donor' },
      { word: 'fellow' },
      { word: 'gossip' },
      { word: 'graduate' },
      { word: 'graffiti' },
      { word: 'guardian' },
      { word: 'implicate' },
      { word: 'kin' },
      { word: 'referee' },
      { word: 'sever' },
      { word: 'shaft' },
      { word: 'stab' },
      { word: 'stimulus' },
      { word: 'suspicion' },
      { word: 'terminate' },
      { word: 'theme' },
      { word: 'tuition' },
      { word: 'aggressive' },
      { word: 'amnesty' },
      { word: 'arena' },
      { word: 'auditorium' },
      { word: 'captive' },
      { word: 'combat' },
      { word: 'commonplace' },
      { word: 'compound' },
      { word: 'corp' },
      { word: 'distract' },
      { word: 'dumb' },
      { word: 'foe' },
      { word: 'hack' },
      { word: 'meditate' },
      { word: 'nick' },
      { word: 'provoke' },
      { word: 'realm' },
      { word: 'reign' },
      { word: 'rust' },
      { word: 'sacred' },
      { word: 'aesthetic' },
      { word: 'arrogant' },
      { word: 'bias' },
      { word: 'canyon' },
      { word: 'creek' },
      { word: 'drill' },
      { word: 'executive' },
      { word: 'fatigue' },
      { word: 'incline' },
      { word: 'nasty' },
      { word: 'perceive' },
      { word: 'primate' },
      { word: 'primitive' },
      { word: 'stereotype' },
      { word: 'sticky' },
      { word: 'termite' },
      { word: 'thereby' },
      { word: 'trail' },
      { word: 'twig' },
      { word: 'welfare' },
      { word: 'behalf' },
      { word: 'flap' },
      { word: 'glacier' },
      { word: 'globe' },
      { word: 'horizontal' },
      { word: 'hum' },
      { word: 'inventory' },
      { word: 'inward' },
      { word: 'loaf' },
      { word: 'oracle' },
      { word: 'orbit' },
      { word: 'overview' },
      { word: 'preview' },
      { word: 'previous' },
      { word: 'provide' },
      { word: 'recur' },
      { word: 'relevant' },
      { word: 'rite' },
      { word: 'stall' },
      { word: 'supernatural' },
      { word: 'aquarium' },
      { word: 'arbitrary' },
      { word: 'autobiography' },
      { word: 'convention' },
      { word: 'gracious' },
      { word: 'improve' },
      { word: 'insulate' },
      { word: 'intrigue' },
      { word: 'longevity' },
      { word: 'misplace' },
      { word: 'naughty' },
      { word: 'norm' },
      { word: 'orangutan' },
      { word: 'overload' },
      { word: 'philanthropy' },
      { word: 'probe' },
      { word: 'recipient' },
      { word: 'reptile' },
      { word: 'thrive' },
      { word: 'ultimate' },
      { word: 'antique' },
      { word: 'applicant' },
      { word: 'artifact' },
      { word: 'authentic' },
      { word: 'chronology' },
      { word: 'diplomat' },
      { word: 'epic' },
      { word: 'excerpt' },
      { word: 'fossil' },
      { word: 'humiliate' },
      { word: 'lyric' },
      { word: 'majesty' },
      { word: 'monarch' },
      { word: 'precede' },
      { word: 'punctual' },
      { word: 'recruit' },
      { word: 'refund' },
      { word: 'register' },
      { word: 'renown' },
      { word: 'tusk' },
      { word: 'coexist' },
      { word: 'conceive' },
      { word: 'dubious' },
      { word: 'ego' },
      { word: 'elastic' },
      { word: 'endeavor' },
      { word: 'engrave' },
      { word: 'excavate' },
      { word: 'jagged' },
      { word: 'locale' },
      { word: 'magnitude' },
      { word: 'mold' },
      { word: 'outright' },
      { word: 'periphery' },
      { word: 'plaster' },
      { word: 'shovel' },
      { word: 'skeletal' },
      { word: 'stumble' },
      { word: 'thigh' },
      { word: 'vicious' },
      { word: 'attic' },
      { word: 'chunk' },
      { word: 'civic' },
      { word: 'descent' },
      { word: 'din' },
      { word: 'dissatisfy' },
      { word: 'fuss' },
      { word: 'glamorous' },
      { word: 'gourmet' },
      { word: 'hence' },
      { word: 'intrinsic' },
      { word: 'kettle' },
      { word: 'ministry' },
      { word: 'ordeal' },
      { word: 'outspoken' },
      { word: 'overwork' },
      { word: 'particular' },
      { word: 'snore' },
      { word: 'soundly' },
      { word: 'superintendent' },
      { word: 'congested' },
      { word: 'courier' },
      { word: 'deform' },
      { word: 'etiquette' },
      { word: 'exclusive' },
      { word: 'freight' },
      { word: 'garment' },
      { word: 'insomnia' },
      { word: 'intuitive' },
      { word: 'liable' },
      { word: 'obsess' },
      { word: 'overboard' },
      { word: 'premium' },
      { word: 'privilege' },
      { word: 'propel' },
      { word: 'socialize' },
      { word: 'suppress' },
      { word: 'tram' },
      { word: 'unsettle' },
      { word: 'warp' },
      { word: 'accumulate' },
      { word: 'aerial' },
      { word: 'apparatus' },
      { word: 'avalanche' },
      { word: 'consistency' },
      { word: 'discharge' },
      { word: 'episode' },
      { word: 'intact' },
      { word: 'mortal' },
      { word: 'omen' },
      { word: 'overcast' },
      { word: 'poignant' },
      { word: 'ranger' },
      { word: 'rubble' },
      { word: 'seclude' },
      { word: 'sideway' },
      { word: 'sob' },
      { word: 'sober' },
      { word: 'speck' },
      { word: 'upbringing' },
      { word: 'bliss' },
      { word: 'butler' },
      { word: 'cramp' },
      { word: 'decorate' },
      { word: 'dilapidated' },
      { word: 'evoke' },
      { word: 'farewell' },
      { word: 'faucet' },
      { word: 'filth' },
      { word: 'flaw' },
      { word: 'grin' },
      { word: 'housekeeping' },
      { word: 'mound' },
      { word: 'numb' },
      { word: 'reckless' },
      { word: 'slate' },
      { word: 'stool' },
      { word: 'testament' },
      { word: 'timber' },
      { word: 'valve' },
      { word: 'camouflage' },
      { word: 'confront' },
      { word: 'contemplate' },
      { word: 'contend' },
      { word: 'cot' },
      { word: 'enlist' },
      { word: 'frontier' },
      { word: 'guerilla' },
      { word: 'handbook' },
      { word: 'hesitant' },
      { word: 'lush' },
      { word: 'outfit' },
      { word: 'paw' },
      { word: 'splendid' },
      { word: 'stray' },
      { word: 'substantial' },
      { word: 'torch' },
      { word: 'tract' },
      { word: 'vigil' },
      { word: 'weary' },
      { word: 'amid' },
      { word: 'backstage' },
      { word: 'billionaire' },
      { word: 'brute' },
      { word: 'clumsy' },
      { word: 'collide' },
      { word: 'culprit' },
      { word: 'evacuate' },
      { word: 'flammable' },
      { word: 'mob' },
      { word: 'premature' },
      { word: 'resent' },
      { word: 'satire' },
      { word: 'scrutiny' },
      { word: 'segregate' },
      { word: 'testify' },
      { word: 'tumult' },
      { word: 'underestimate' },
      { word: 'uproar' },
      { word: 'accelerate' },
      { word: 'anew' },
      { word: 'defect' },
      { word: 'dreary' },
      { word: 'duplicate' },
      { word: 'electromagnetic' },
      { word: 'electron' },
      { word: 'glide' },
      { word: 'ingenious' },
      { word: 'innovation' },
      { word: 'innovative' },
      { word: 'launch' },
      { word: 'meteorological' },
      { word: 'meteorology' },
      { word: 'penetrate' },
      { word: 'persistent' },
      { word: 'propulsion' },
      { word: 'simulate' },
      { word: 'spur' },
      { word: 'stimulate' },
      { word: 'beforehand' },
      { word: 'blurred' },
      { word: 'centigrade' },
      { word: 'chatter' },
      { word: 'concerto' },
      { word: 'condense' },
      { word: 'deteriorate' },
      { word: 'degree' },
      { word: 'exterior' },
      { word: 'hearty' },
      { word: 'hospitable' },
      { word: 'humor' },
      { word: 'manor' },
      { word: 'monastery' },
      { word: 'nursery' },
      { word: 'outstretched' },
      { word: 'parcel' },
      { word: 'profile' },
      { word: 'winding' },
      { word: 'zip' },
      { word: 'abolish' },
      { word: 'amend' },
      { word: 'aspire' },
      { word: 'censor' },
      { word: 'charter' },
      { word: 'constitution' },
      { word: 'cosmopolitan' },
      { word: 'disseminate' },
      { word: 'flatter' },
      { word: 'infamous' },
      { word: 'lame' },
      { word: 'limp' },
      { word: 'outburst' },
      { word: 'pathological' },
      { word: 'phenomenal' },
      { word: 'poll' },
      { word: 'remorse' },
      { word: 'secrecy' },
      { word: 'tackle' },
      { word: 'trance' },
      { word: 'coward' },
      { word: 'delete' },
      { word: 'earnest' },
      { word: 'ethnic' },
      { word: 'exclude' },
      { word: 'firsthand' },
      { word: 'fluent' },
      { word: 'imperial' },
      { word: 'inclusive' },
      { word: 'legislature' },
      { word: 'linguistic' },
      { word: 'monolingual' },
      { word: 'nationality' },
      { word: 'patriot' },
      { word: 'prosecute' },
      { word: 'racial' },
      { word: 'solemn' },
      { word: 'solidarity' },
      { word: 'tact' },
      { word: 'undermine' },
      { word: 'constrain' },
      { word: 'depot' },
      { word: 'emulate' },
      { word: 'forefinger' },
      { word: 'inherent' },
      { word: 'intimidate' },
      { word: 'janitor' },
      { word: 'moist' },
      { word: 'nope' },
      { word: 'prod' },
      { word: 'ransom' },
      { word: 'restrain' },
      { word: 'saliva' },
      { word: 'spit' },
      { word: 'sprint' },
      { word: 'stunt' },
      { word: 'tolerant' },
      { word: 'vampire' },
      { word: 'yawn' },
      { word: 'adjoining' },
      { word: 'allege' },
      { word: 'arch' },
      { word: 'assemble' },
      { word: 'casualty' },
      { word: 'erect' },
      { word: 'foul' },
      { word: 'hectare' },
      { word: 'heighten' },
      { word: 'hospitality' },
      { word: 'mansion' },
      { word: 'outnumber' },
      { word: 'overjoyed' },
      { word: 'pasture' },
      { word: 'petition' },
      { word: 'renovate' },
      { word: 'revise' },
      { word: 'slab' },
      { word: 'terrace' },
      { word: 'turf' },
      { word: 'analogous' },
      { word: 'binoculars' },
      { word: 'bulk' },
      { word: 'comprise' },
      { word: 'depict' },
      { word: 'dual' },
      { word: 'Fahrenheit' },
      { word: 'fulfill' },
      { word: 'grove' },
      { word: 'ore' },
      { word: 'outback' },
      { word: 'outweigh' },
      { word: 'paradox' },
      { word: 'pier' },
      { word: 'shortcut' },
      { word: 'tariff' },
      { word: 'thermometer' },
      { word: 'tilt' },
      { word: 'whereabouts' },
      { word: 'absolute' },
      { word: 'acclaim' },
      { word: 'accommodation' },
      { word: 'accusation' },
      { word: 'achievement' },
      { word: 'acknowledged' },
      { word: 'acquaintance' },
      { word: 'acrid' },
      { word: 'acrimonious' },
      { word: 'act' },
      { word: 'action' },
      { word: 'activist' },
      { word: 'add' },
      { word: 'additive' },
      { word: 'address' },
      { word: 'adjustment' },
      { word: 'admiration' },
      { word: 'admire' },
      { word: 'admirer' },
      { word: 'adopt' },
      { word: 'advantage' },
      { word: 'aerobics' },
      { word: 'affordable' },
      { word: 'agent' },
      { word: 'AIDS' },
      { word: 'ailment' },
      { word: 'airplane' },
      { word: 'album' },
      { word: 'alight' },
      { word: 'allegation' },
      { word: 'alleviate' },
      { word: 'alteration' },
      { word: 'Alzheimer' },
      { word: 'analogy' },
      { word: 'anger' },
      { word: 'answer' },
      { word: 'apologize' },
      { word: 'appearance' },
      { word: 'application' },
      { word: 'appointment' },
      { word: 'archery' },
      { word: 'argue' },
      { word: 'argument' },
      { word: 'soldier' },
      { word: 'arrangement' },
      { word: 'assessment' },
      { word: 'assumption' },
      { word: 'asthma' },
      { word: 'astray' },
      { word: 'asylum' },
      { word: 'athletics' },
      { word: 'attachment' },
      { word: 'autism' },
      { word: 'aversion' },
      { word: 'axe' },
      { word: 'baby' },
      { word: 'back' },
      { word: 'backache' },
      { word: 'badminton' },
      { word: 'bang' },
      { word: 'bank' },
      { word: 'bar' },
      { word: 'baseball' },
      { word: 'bear' },
      { word: 'beaten' },
      { word: 'bed' },
      { word: 'bedroom' },
      { word: 'bedtime' },
      { word: 'beginner' },
      { word: 'beginning' },
      { word: 'begin' },
      { word: 'believe' },
      { word: 'believer' },
      { word: 'big' },
      { word: 'billiards' },
      { word: 'bird' },
      { word: 'birth' },
      { word: 'blacken' },
      { word: 'bleak' },
      { word: 'blessing' },
      { word: 'blood' },
      { word: 'blue' },
      { word: 'blunt' },
      { word: 'body' },
      { word: 'bored' },
      { word: 'bowls' },
      { word: 'box' },
      { word: 'break' },
      { word: 'breakthrough' },
      { word: 'bring' },
      { word: 'brisk' },
      { word: 'brochure' },
      { word: 'bronchitis' },
      { word: 'brother' },
      { word: 'building' },
      { word: 'burglary' },
      { word: 'business' },
      { word: 'call' },
      { word: 'campaign' },
      { word: 'camping' },
      { word: 'car' },
      { word: 'care' },
      { word: 'carry' },
      { word: 'category' },
      { word: 'cattle' },
      { word: 'ceasefire' },
      { word: 'cement' },
      { word: 'central' },
      { word: 'cheap' },
      { word: 'cheek' },
      { word: 'chess' },
      { word: 'child' },
      { word: 'children' },
      { word: 'choice' },
      { word: 'chopped' },
      { word: 'club' },
      { word: 'cold' },
      { word: 'color' },
      { word: 'comment' },
      { word: 'committed' },
      { word: 'commitment' },
      { word: 'comparison' },
      { word: 'competition' },
      { word: 'competitive' },
      { word: 'complete' },
      { word: 'complexion' },
      { word: 'compliment' },
      { word: 'comply' },
      { word: 'compulsive' },
      { word: 'computer' },
      { word: 'concerned' },
      { word: 'concise' },
      { word: 'condemnation' },
      { word: 'conference' },
      { word: 'connection' },
      { word: 'congratulation' },
      { word: 'consideration' },
      { word: 'contribution' },
      { word: 'controversial' },
      { word: 'conversation' },
      { word: 'conviction' },
      { word: 'corner' },
      { word: 'counter' },
      { word: 'countryside' },
      { word: 'crazy' },
      { word: 'cricket' },
      { word: 'criminal' },
      { word: 'critical' },
      { word: 'cry' },
      { word: 'cuisine' },
      { word: 'cyclist' },
      { word: 'dark' },
      { word: 'darken' },
      { word: 'darts' },
      { word: 'dead' },
      { word: 'death' },
      { word: 'decision' },
      { word: 'defeated' },
      { word: 'defend' },
      { word: 'demand' },
      { word: 'demonstration' },
      { word: 'deny' },
      { word: 'depressed' },
      { word: 'deserved' },
      { word: 'deterrent' },
      { word: 'detour' },
      { word: 'diarrhoea' },
      { word: 'die' },
      { word: 'difficult' },
      { word: 'difficulty' },
      { word: 'disagreement' },
      { word: 'disappointed' },
      { word: 'disappointing' },
      { word: 'disappointment' },
      { word: 'disapproval' },
      { word: 'disapprove' },
      { word: 'disclaim' },
      { word: 'discussion' },
      { word: 'dislike' },
      { word: 'dismount' },
      { word: 'distant' },
      { word: 'distinction' },
      { word: 'dominos' },
      { word: 'downfall' },
      { word: 'dramatic' },
      { word: 'draw' },
      { word: 'dream' },
      { word: 'drug' },
      { word: 'dry' },
      { word: 'early' },
      { word: 'economic' },
      { word: 'efficiency' },
      { word: 'election' },
      { word: 'electricity' },
      { word: 'embark' },
      { word: 'embarrassing' },
      { word: 'embarrassment' },
      { word: 'emotional' },
      { word: 'encyclopedia' },
      { word: 'engine' },
      { word: 'enjoyment' },
      { word: 'enquiry' },
      { word: 'enrol' },
      { word: 'entertainment' },
      { word: 'eradicate' },
      { word: 'every' },
      { word: 'excited' },
      { word: 'excuse' },
      { word: 'explanation' },
      { word: 'exploitation' },
      { word: 'explosion' },
      { word: 'expression' },
      { word: 'eyebrow' },
      { word: 'eyes' },
      { word: 'eye' },
      { word: 'fall' },
      { word: 'fan' },
      { word: 'favor' },
      { word: 'favorite' },
      { word: 'feeling' },
      { word: 'fight' },
      { word: 'fill' },
      { word: 'find' },
      { word: 'fine' },
      { word: 'finger' },
      { word: 'finish' },
      { word: 'finishing' },
      { word: 'fire' },
      { word: 'firing' },
      { word: 'first' },
      { word: 'fish' },
      { word: 'fit' },
      { word: 'fitness' },
      { word: 'flare' },
      { word: 'flight' },
      { word: 'flop' },
      { word: 'flu' },
      { word: 'follow' },
      { word: 'following' },
      { word: 'fool' },
      { word: 'foot' },
      { word: 'footing' },
      { word: 'forbidden' },
      { word: 'forest' },
      { word: 'forget' },
      { word: 'fragrant' },
      { word: 'freak' },
      { word: 'free' },
      { word: 'freedom' },
      { word: 'fresh' },
      { word: 'full' },
      { word: 'fully' },
      { word: 'future' },
      { word: 'garlic' },
      { word: 'gase' },
      { word: 'gasp' },
      { word: 'glare' },
      { word: 'gloss' },
      { word: 'glow' },
      { word: 'gold' },
      { word: 'golden' },
      { word: 'gray' },
      { word: 'groan' },
      { word: 'ground' },
      { word: 'grow' },
      { word: 'growth' },
      { word: 'grudge' },
      { word: 'guitar' },
      { word: 'gymnastics' },
      { word: 'hair' },
      { word: 'hall' },
      { word: 'hand' },
      { word: 'handout' },
      { word: 'happiness' },
      { word: 'happy' },
      { word: 'hard' },
      { word: 'harden' },
      { word: 'hasty' },
      { word: 'havoc' },
      { word: 'healthy' },
      { word: 'hearing' },
      { word: 'heat' },
      { word: 'heavy' },
      { word: 'heel' },
      { word: 'hesitation' },
      { word: 'hips' },
      { word: 'hockey' },
      { word: 'homeless' },
      { word: 'homesick' },
      { word: 'homework' },
      { word: 'honest' },
      { word: 'hope' },
      { word: 'hostage' },
      { word: 'hot' },
      { word: 'house' },
      { word: 'housing' },
      { word: 'hurt' },
      { word: 'husband' },
      { word: 'ice' },
      { word: 'idea' },
      { word: 'ill' },
      { word: 'illness' },
      { word: 'illustration' },
      { word: 'imagination' },
      { word: 'improvement' },
      { word: 'inflict' },
      { word: 'informed' },
      { word: 'injury' },
      { word: 'interest' },
      { word: 'interested' },
      { word: 'intuition' },
      { word: 'investigation' },
      { word: 'invitation' },
      { word: 'involvement' },
      { word: 'jewellery' },
      { word: 'joke' },
      { word: 'judgement' },
      { word: 'judo' },
      { word: 'jump' },
      { word: 'juvenile' },
      { word: 'kick' },
      { word: 'knife' },
      { word: 'lane' },
      { word: 'lasting' },
      { word: 'leak' },
      { word: 'tell' },
      { word: 'lifetime' },
      { word: 'lighten' },
      { word: 'liking' },
      { word: 'litter' },
      { word: 'little' },
      { word: 'live' },
      { word: 'living' },
      { word: 'lonely' },
      { word: 'long' },
      { word: 'look' },
      { word: 'louder' },
      { word: 'luck' },
      { word: 'lunch' },
      { word: 'malaria' },
      { word: 'manner' },
      { word: 'map' },
      { word: 'married' },
      { word: 'matt' },
      { word: 'matter' },
      { word: 'measurement' },
      { word: 'medal' },
      { word: 'menu' },
      { word: 'migrant' },
      { word: 'milk' },
      { word: 'mind' },
      { word: 'minute' },
      { word: 'misgiving' },
      { word: 'modification' },
      { word: 'money' },
      { word: 'mustache' },
      { word: 'mouth' },
      { word: 'move' },
      { word: 'name' },
      { word: 'need' },
      { word: 'negotiate' },
      { word: 'neighboring' },
      { word: 'nerve' },
      { word: 'news' },
      { word: 'nose' },
      { word: 'nostalgia' },
      { word: 'note' },
      { word: 'notebook' },
      { word: 'nourishing' },
      { word: 'noxious' },
      { word: 'number' },
      { word: 'observation' },
      { word: 'occassion' },
      { word: 'offer' },
      { word: 'opposed' },
      { word: 'opposition' },
      { word: 'orchestra' },
      { word: 'order' },
      { word: 'outstanding' },
      { word: 'ovation' },
      { word: 'ozone' },
      { word: 'painful' },
      { word: 'paint' },
      { word: 'parent' },
      { word: 'parking' },
      { word: 'part' },
      { word: 'partnership' },
      { word: 'party' },
      { word: 'pass' },
      { word: 'passport' },
      { word: 'past' },
      { word: 'patience' },
      { word: 'pay' },
      { word: 'peacekeeping' },
      { word: 'penalty' },
      { word: 'pencil' },
      { word: 'perfume' },
      { word: 'person' },
      { word: 'phone' },
      { word: 'photocopy' },
      { word: 'pillow' },
      { word: 'plagiarism' },
      { word: 'plant' },
      { word: 'pleasure' },
      { word: 'point' },
      { word: 'police' },
      { word: 'political' },
      { word: 'pollution' },
      { word: 'possession' },
      { word: 'possible' },
      { word: 'preference' },
      { word: 'preparation' },
      { word: 'present' },
      { word: 'presentation' },
      { word: 'pretty' },
      { word: 'production' },
      { word: 'program' },
      { word: 'proposal' },
      { word: 'qualification' },
      { word: 'question' },
      { word: 'quick' },
      { word: 'radio' },
      { word: 'rain' },
      { word: 'raise' },
      { word: 'rare' },
      { word: 'reach' },
      { word: 'reaction' },
      { word: 'reading' },
      { word: 'record' },
      { word: 'recovery' },
      { word: 'redundant' },
      { word: 'regulation' },
      { word: 'relation' },
      { word: 'relieve' },
      { word: 'remember' },
      { word: 'reply' },
      { word: 'reputation' },
      { word: 'requirement' },
      { word: 'resemblance' },
      { word: 'reservation' },
      { word: 'resistance' },
      { word: 'respect' },
      { word: 'retirement' },
      { word: 'revolutionize' },
      { word: 'rich' },
      { word: 'rise' },
      { word: 'river' },
      { word: 'road' },
      { word: 'roar' },
      { word: 'robbery' },
      { word: 'rocket' },
      { word: 'room' },
      { word: 'run' },
      { word: 'sad' },
      { word: 'sadness' },
      { word: 'sales' },
      { word: 'sand' },
      { word: 'scenery' },
      { word: 'score' },
      { word: 'screen' },
      { word: 'sea' },
      { word: 'seat' },
      { word: 'seatbelt' },
      { word: 'second' },
      { word: 'seeing' },
      { word: 'seeker' },
      { word: 'seethe' },
      { word: 'selfish' },
      { word: 'separation' },
      { word: 'setting' },
      { word: 'sexual' },
      { word: 'shot' },
      { word: 'shower' },
      { word: 'shy' },
      { word: 'sight' },
      { word: 'simple' },
      { word: 'sing' },
      { word: 'situation' },
      { word: 'skin' },
      { word: 'sky' },
      { word: 'skyline' },
      { word: 'smoke' },
      { word: 'snack' },
      { word: 'snow' },
      { word: 'soak' },
      { word: 'soften' },
      { word: 'solo' },
      { word: 'song' },
      { word: 'spate' },
      { word: 'speak' },
      { word: 'speedy' },
      { word: 'spending' },
      { word: 'standstill' },
      { word: 'statement' },
      { word: 'stench' },
      { word: 'stick' },
      { word: 'stink' },
      { word: 'stipulate' },
      { word: 'story' },
      { word: 'stream' },
      { word: 'stride' },
      { word: 'substantiate' },
      { word: 'success' },
      { word: 'suggestion' },
      { word: 'suitcase' },
      { word: 'summarize' },
      { word: 'sun' },
      { word: 'sunny' },
      { word: 'sunshine' },
      { word: 'survivor' },
      { word: 'tall' },
      { word: 'tantrum' },
      { word: 'tendency' },
      { word: 'tension' },
      { word: 'terrorism' },
      { word: 'thinking' },
      { word: 'thought' },
      { word: 'thud' },
      { word: 'time' },
      { word: 'tinge' },
      { word: 'toll' },
      { word: 'touch' },
      { word: 'traffic' },
      { word: 'transformation' },
      { word: 'treaty' },
      { word: 'trick' },
      { word: 'truce' },
      { word: 'truth' },
      { word: 'try' },
      { word: 'tune' },
      { word: 'turn' },
      { word: 'turnover' },
      { word: 'typhoid' },
      { word: 'unanimous' },
      { word: 'unaware' },
      { word: 'uncertainty' },
      { word: 'unit' },
      { word: 'upset' },
      { word: 'useful' },
      { word: 'vandalism' },
      { word: 'vehicle' },
      { word: 'verdict' },
      { word: 'visitor' },
      { word: 'voice' },
      { word: 'waist' },
      { word: 'want' },
      { word: 'wasteland' },
      { word: 'way' },
      { word: 'weep' },
      { word: 'while' },
      { word: 'whistle' },
      { word: 'wife' },
      { word: 'win' },
      { word: 'wind' },
      { word: 'withdrawal' },
      { word: 'woman' },
      { word: 'word' },
      { word: 'working' },
      { word: 'written' },
      { word: 'youth' },
      { word: 'change' },
      { word: 'everlasting' },
      { word: 'evergreen' },
      { word: 'meticulous' },
      { word: 'mitigate' },
      { word: 'tarnish' },
      { word: 'menacing' },
      { word: 'sandpaper' },
      { word: 'arcane' },
      { word: 'eidetic' },
      { word: 'rhetorical' },
      { word: 'horrid' },
      { word: 'heather' },
      { word: 'cardigan' },
      { word: 'croft' },
      { word: 'peat' },
      { word: 'loch' },
      { word: 'scullery' },
      { word: 'humbug' },
      { word: 'dandruff' },
      { word: 'taunt' },
      { word: 'lethargic' },
      { word: 'vixen' },
      { word: 'gobble' },
      { word: 'befuddle' },
      { word: 'kleptomaniac' },
      { word: 'misogyny' },
      { word: 'tumultuous' },
      { word: 'multifaceted' },
      { word: 'polysemous' },
      { word: 'carnivorous' },
      { word: 'herbivorous' },
      { word: 'insectivorous' },
      { word: 'omnivorous' },
      { word: 'acquit' },
      { word: 'scab' },
      { word: 'necropolis' },
      { word: 'box-office' },
    ],
  });


  await prisma.enexp.deleteMany({});
  await prisma.enexp.createMany({
    data: [
  {
    "wordkey": "agree",
    "exp": "Do you agree that we need to learn English?"
  },
  {
    "wordkey": "agree",
    "exp": "I agree with you that we need to learn English."
  },
  {
    "wordkey": "agree",
    "exp": "We agreed on learning English every day."
  },
  {
    "wordkey": "agree",
    "exp": "We agree about the importance of learning English."
  },
  {
    "wordkey": "alcohol",
    "exp": "She smelled the cup to see if the kids were drinking alcohol."
  },
  {
    "wordkey": "alcohol",
    "exp": "In the bar, he ordered an alcohol-free drink."
  },
  {
    "wordkey": "arrive",
    "exp": "They arrived in China about 3 AM."
  },
  {
    "wordkey": "arrive",
    "exp": "She arrived at the airport too late to say goodbye to him."
  },
  {
    "wordkey": "boat",
    "exp": "There were some boats on the lake."
  },
  {
    "wordkey": "boat",
    "exp": "They got to the island by boat."
  },
  {
    "wordkey": "boat",
    "exp": "They decided to take a boat trip and have some fun."
  },
  {
    "wordkey": "boat",
    "exp": "When one of them got tired, the other one rowed the boat."
  },
  {
    "wordkey": "breakfast",
    "exp": "She asked them what they would like for breakfast."
  },
  {
    "wordkey": "breakfast",
    "exp": "I had a hearty breakfast this morning."
  },
  {
    "wordkey": "camera",
    "exp": "She loved photography, but she had forgotten to bring her camera."
  },
  {
    "wordkey": "camera",
    "exp": "The security camera captured everything that happened at the office."
  },
  {
    "wordkey": "capital",
    "exp": "The capital of China is Beijing."
  },
  {
    "wordkey": "capital",
    "exp": "The White House is located in the US capital."
  },
  {
    "wordkey": "catch",
    "exp": "He accidentally knocked the glass but managed to catch it before hitting the ground."
  },
  {
    "wordkey": "catch",
    "exp": "She was tipsy and about to fall, but he caught hold of her arm just in time."
  },
  {
    "wordkey": "catch",
    "exp": "The seabird plunged into the ocean and caught its prey."
  },
  {
    "wordkey": "catch",
    "exp": "The escalator caught her dress and ripped it off."
  },
  {
    "wordkey": "catch",
    "exp": "His last punch caught his face."
  },
  {
    "wordkey": "catch",
    "exp": "The barn was struck by lightning and caught fire."
  },
  {
    "wordkey": "catch",
    "exp": "The sunlight caught his eyes and woke him up."
  },
  {
    "wordkey": "catch",
    "exp": "The captain commanded the deckhands to open the sails to catch the wind."
  },
  {
    "wordkey": "duck",
    "exp": "A duck and its ducklings were walking toward a pond."
  },
  {
    "wordkey": "enjoy",
    "exp": "That was a great movie and I really enjoyed it."
  },
  {
    "wordkey": "enjoy",
    "exp": "Do you enjoy learning English?"
  },
  {
    "wordkey": "invite",
    "exp": "He wants to invite his friends to a party."
  },
  {
    "wordkey": "invite",
    "exp": "She invited him to go with them on a family vacation."
  },
  {
    "wordkey": "invite",
    "exp": "They invited them for a barbecue on the weekend."
  },
  {
    "wordkey": "love",
    "exp": "She was the love of his life."
  },
  {
    "wordkey": "love",
    "exp": "At the end of the conversation, he asked him to send his love to the family."
  },
  {
    "wordkey": "love",
    "exp": "They love each other unconditionally."
  },
  {
    "wordkey": "love",
    "exp": "She loved her children and was doing anything to support them."
  },
  {
    "wordkey": "month",
    "exp": "He managed to finish the project almost a month earlier."
  },
  {
    "wordkey": "month",
    "exp": "The baby was due next month."
  },
  {
    "wordkey": "travel",
    "exp": "They traveled to China for their family vacation."
  },
  {
    "wordkey": "travel",
    "exp": "She travels to work by subway."
  },
  {
    "wordkey": "travel",
    "exp": "They had to travel through the Sahara desert to meet with the pharaoh."
  },
  {
    "wordkey": "travel",
    "exp": "They traveled extensively around the suburb only by bicycle."
  },
  {
    "wordkey": "travel",
    "exp": "Light travels faster than sound."
  },
  {
    "wordkey": "travel",
    "exp": "The sound of the music travelled through the wall."
  },
  {
    "wordkey": "travel",
    "exp": "The infectious disease traveled rapidly in the area."
  },
  {
    "wordkey": "travel",
    "exp": "Rumors of their affair began to travel across the town."
  },
  {
    "wordkey": "travel",
    "exp": "His job involves a lot of travel."
  },
  {
    "wordkey": "typical",
    "exp": "Typical symptoms of a cold are a sore throat and a runny nose."
  },
  {
    "wordkey": "typical",
    "exp": "Spicy food is typical in India."
  },
  {
    "wordkey": "visit",
    "exp": "Their grandparents were deliriously happy that they went to visit them."
  },
  {
    "wordkey": "visit",
    "exp": "One day I will travel to Beijing to visit the Great Wall."
  },
  {
    "wordkey": "visit",
    "exp": "Sherlock decided to visit the place where the crime happened."
  },
  {
    "wordkey": "visit",
    "exp": "Over millions of people visit Google every day."
  },
  {
    "wordkey": "visit",
    "exp": "They wanted to pay a visit to them on their way back home."
  },
  {
    "wordkey": "weather",
    "exp": "Do you like warm, or cold weather?"
  },
  {
    "wordkey": "weather",
    "exp": "Weather permitting, we will be on a boat trip next week."
  },
  {
    "wordkey": "week",
    "exp": "His doctor told him to rest for a week or two."
  },
  {
    "wordkey": "week",
    "exp": "It took two weeks to pick up the pieces after the hurricane."
  },
  {
    "wordkey": "wine",
    "exp": "They had six barrels of wine in the inn."
  },
  {
    "wordkey": "wine",
    "exp": "He brought red wine to offer his congratulations."
  },
  {
    "wordkey": "adventure",
    "exp": "They decided to go on an adventure in the jungle."
  },
  {
    "wordkey": "adventure",
    "exp": "He always wanted to become a knight and have some adventures."
  },
  {
    "wordkey": "adventure",
    "exp": "She has a great sense of adventure."
  },
  {
    "wordkey": "approach",
    "exp": "After a few seconds, they saw that it was a bicycle approaching."
  },
  {
    "wordkey": "approach",
    "exp": "It was approaching lunchtime, so they stopped working and went to a nearby restaurant."
  },
  {
    "wordkey": "approach",
    "exp": "The money they were raising soon approached 10 thousand."
  },
  {
    "wordkey": "approach",
    "exp": "We should carefully approach the issue to avoid making mistakes."
  },
  {
    "wordkey": "approach",
    "exp": "Some birds migrate to different places at the approach of winter."
  },
  {
    "wordkey": "approach",
    "exp": "The coach decided to adopt a new approach for the second half of the match."
  },
  {
    "wordkey": "carefully",
    "exp": "The road there is hairy, so drive carefully."
  },
  {
    "wordkey": "carefully",
    "exp": "The teacher told the students to listen carefully to absorb the important lesson."
  },
  {
    "wordkey": "carefully",
    "exp": "He tried to do it carefully to avoid making mistakes."
  },
  {
    "wordkey": "chemical",
    "exp": "They were working on some chemicals in the laboratory."
  },
  {
    "wordkey": "chemical",
    "exp": "The factory had been dumping toxic chemicals into the river."
  },
  {
    "wordkey": "create",
    "exp": "They were trying to create a snowman."
  },
  {
    "wordkey": "create",
    "exp": "She created a decent meal from just a few ingredients."
  },
  {
    "wordkey": "create",
    "exp": "He wanted to learn computer programming so he could create some applications."
  },
  {
    "wordkey": "evil",
    "exp": "The pollution of the environment is an evil that threatens the entire ecosystem."
  },
  {
    "wordkey": "experiment",
    "exp": "They did an experiment to observe the reaction between the chemicals."
  },
  {
    "wordkey": "experiment",
    "exp": "They carried out an experiment to see how the drug worked."
  },
  {
    "wordkey": "experiment",
    "exp": "She conducted an experiment on a guinea pig."
  },
  {
    "wordkey": "experiment",
    "exp": "His new formula was validated by experiment."
  },
  {
    "wordkey": "experiment",
    "exp": "He decided to wear new attire as an experiment."
  },
  {
    "wordkey": "kill",
    "exp": "She was very sad, because she had accidentally killed a piglet."
  },
  {
    "wordkey": "kill",
    "exp": "We should heat the needle to kill bacteria and make it sterile."
  },
  {
    "wordkey": "laboratory",
    "exp": "The laboratory was filled with broken beakers after they mixed those chemicals."
  },
  {
    "wordkey": "laboratory",
    "exp": "All the students went to the laboratory to learn chemistry."
  },
  {
    "wordkey": "laugh",
    "exp": "He made them laugh by imitating the way Chandler spoke."
  },
  {
    "wordkey": "laugh",
    "exp": "The teacher got angry seeing them laughing at the new kid."
  },
  {
    "wordkey": "laugh",
    "exp": "He cracked a joke and made her burst out laughing."
  },
  {
    "wordkey": "laugh",
    "exp": "The TV show was so funny that they all laughed out loud."
  },
  {
    "wordkey": "laugh",
    "exp": "Suddenly, there was a loud laugh coming from upstairs."
  },
  {
    "wordkey": "laugh",
    "exp": "They had a good laugh at the theater."
  },
  {
    "wordkey": "loud",
    "exp": "There was a loud noise when the bomb went off."
  },
  {
    "wordkey": "loud",
    "exp": "Suddenly, there was a loud explosion that startled everyone."
  },
  {
    "wordkey": "nervous",
    "exp": "He was nervous around girls."
  },
  {
    "wordkey": "nervous",
    "exp": "She started to feel nervous about her first day at work."
  },
  {
    "wordkey": "nervous",
    "exp": "She was so nervous about the interview."
  },
  {
    "wordkey": "noise",
    "exp": "There was a loud noise when the baby started crying."
  },
  {
    "wordkey": "noise",
    "exp": "There was always traffic noise, as their house was located close to a highway."
  },
  {
    "wordkey": "noise",
    "exp": "The background noise disturbed him trying to focus on the project."
  },
  {
    "wordkey": "project",
    "exp": "The research project was going according to plan."
  },
  {
    "wordkey": "project",
    "exp": "Their afternoon project was to rid the entire farm of pests."
  },
  {
    "wordkey": "scare",
    "exp": "The little boy was scared by the imaginary monster."
  },
  {
    "wordkey": "scare",
    "exp": "He scared the hell out of him when he jumped out from behind the table."
  },
  {
    "wordkey": "scare",
    "exp": "They scared him out of his wits when they threw an artificial tarantula on him."
  },
  {
    "wordkey": "scare",
    "exp": "She scared him to death by playing that prank."
  },
  {
    "wordkey": "secret",
    "exp": "Joey was having a hard time trying to keep their secret."
  },
  {
    "wordkey": "secret",
    "exp": "The young couple decided to have no secrets from each other."
  },
  {
    "wordkey": "shout",
    "exp": "When he got stock, he shouted from the attic to get help."
  },
  {
    "wordkey": "shout",
    "exp": "She got furious and shouted at him to help carry the heavy boxes."
  },
  {
    "wordkey": "shout",
    "exp": "He tried to shout above the noise to catch her attention."
  },
  {
    "wordkey": "smell",
    "exp": "The smell of soup wafting around her apartment made me hungry."
  },
  {
    "wordkey": "smell",
    "exp": "I could smell a whiff of perfume."
  },
  {
    "wordkey": "smell",
    "exp": "The cheese smelled off to me, so I threw it away."
  },
  {
    "wordkey": "smell",
    "exp": "The deer smelled danger and vanished into thin air."
  },
  {
    "wordkey": "smell",
    "exp": "The smell of flowers was very pleasant."
  },
  {
    "wordkey": "terrible",
    "exp": "The taste of food was terrible."
  },
  {
    "wordkey": "terrible",
    "exp": "She was a terrible swimmer."
  },
  {
    "wordkey": "worse",
    "exp": "Take her to the doctor if her condition got worse."
  },
  {
    "wordkey": "worse",
    "exp": "The weather got even worse and made them go back."
  },
  {
    "wordkey": "worse",
    "exp": "The weather forecast said it would get much worse over the next two days."
  },
  {
    "wordkey": "alien",
    "exp": "Some people say that aliens come to Earth in their UFOs."
  },
  {
    "wordkey": "alien",
    "exp": "They were used to traditional methods, and the new technology seemed alien to them."
  },
  {
    "wordkey": "among",
    "exp": "Two of my friends were among the crowd."
  },
  {
    "wordkey": "among",
    "exp": "They were lost among a dense forest."
  },
  {
    "wordkey": "among",
    "exp": "She felt less worried when she realized her child was among a group."
  },
  {
    "wordkey": "chart",
    "exp": "There were both bar charts and pie charts showing all the figures."
  },
  {
    "wordkey": "chart",
    "exp": "The sales chart was showing a dramatic rise in sales."
  },
  {
    "wordkey": "cloud",
    "exp": "There was thick cloud blocking the sunshine."
  },
  {
    "wordkey": "cloud",
    "exp": "They were hoping for a break in the clouds, in vain."
  },
  {
    "wordkey": "cloud",
    "exp": "Soon, dark clouds took over the region."
  },
  {
    "wordkey": "cloud",
    "exp": "The entire area became gloomy when the sky clouded over."
  },
  {
    "wordkey": "describe",
    "exp": "She describe to the police how the accident happened."
  },
  {
    "wordkey": "describe",
    "exp": "Can you describe in detail what exactly you were doing there?"
  },
  {
    "wordkey": "describe",
    "exp": "He described her as tall and blonde."
  },
  {
    "wordkey": "describe",
    "exp": "She described him as being rude and arrogant."
  },
  {
    "wordkey": "ever",
    "exp": "Have you ever heard of him?"
  },
  {
    "wordkey": "ever",
    "exp": "He would never ever miss being with his friends."
  },
  {
    "wordkey": "ever",
    "exp": "She hardly ever did the cleaning in the house."
  },
  {
    "wordkey": "ever",
    "exp": "If ever there was a fight in the school, he was a part of it."
  },
  {
    "wordkey": "ever",
    "exp": "The economic situation was worse than ever."
  },
  {
    "wordkey": "fail",
    "exp": "She had to go through the course again, as she had failed her final exam."
  },
  {
    "wordkey": "fail",
    "exp": "He failed to be on the team for the big match."
  },
  {
    "wordkey": "fail",
    "exp": "She failed in catching the frisbee and fell down."
  },
  {
    "wordkey": "instead",
    "exp": "Since he got injured, one of his teammates played instead of him."
  },
  {
    "wordkey": "instead",
    "exp": "He decided to study for his exam instead of playing video games all day."
  },
  {
    "wordkey": "library",
    "exp": "She went to the library to see if she could find a book about zoology."
  },
  {
    "wordkey": "photograph",
    "exp": "She had a black-and-white photograph of her great grandparents."
  },
  {
    "wordkey": "photograph",
    "exp": "They took several photographs sitting on a tree."
  },
  {
    "wordkey": "planet",
    "exp": "The astronaut was standing on the Moon looking at the planet Earth."
  },
  {
    "wordkey": "report",
    "exp": "He gave a report of the robbery to the police."
  },
  {
    "wordkey": "report",
    "exp": "She wanted to see the annual report of the company."
  },
  {
    "wordkey": "report",
    "exp": "He reported them to the police for playing loud music at midnight."
  },
  {
    "wordkey": "report",
    "exp": "The police officer quickly handled the issue and reported for duty again."
  },
  {
    "wordkey": "several",
    "exp": "Several workers were on strike."
  },
  {
    "wordkey": "shape",
    "exp": "Her birthday cake was in the shape of a three-dimensional diamond."
  },
  {
    "wordkey": "shape",
    "exp": "My desk is rectangle in shape."
  },
  {
    "wordkey": "shape",
    "exp": "The sculpture began to lose its shape as time went by."
  },
  {
    "wordkey": "shape",
    "exp": "His artifact was out of shape after that unfortunate incident."
  },
  {
    "wordkey": "shape",
    "exp": "They like science in any shape or form."
  },
  {
    "wordkey": "shape",
    "exp": "His store had comic books of all shapes and sizes."
  },
  {
    "wordkey": "solve",
    "exp": "Sherlock wanted to solve the mystery."
  },
  {
    "wordkey": "solve",
    "exp": "They finally came up with an idea to solve the problem."
  },
  {
    "wordkey": "suddenly",
    "exp": "They were driving when suddenly, a pedestrian emerged out of nowhere."
  },
  {
    "wordkey": "suddenly",
    "exp": "Suddenly, there was a clap of thunder that frightened them."
  },
  {
    "wordkey": "suppose",
    "exp": "I suppose we ought to take English seriously."
  },
  {
    "wordkey": "suppose",
    "exp": "She supposed that he was in love with her just because he was so friendly."
  },
  {
    "wordkey": "suppose",
    "exp": "The surprise was supposed to be funny."
  },
  {
    "wordkey": "understand",
    "exp": "Does anybody understand Mandarin Chinese?"
  },
  {
    "wordkey": "understand",
    "exp": "He wanted to understand how the computer works."
  },
  {
    "wordkey": "view",
    "exp": "He is a realtor and helps people who want to view the house."
  },
  {
    "wordkey": "view",
    "exp": "Their show was being viewed by millions of people around the world."
  },
  {
    "wordkey": "view",
    "exp": "There was an argument because their views on the subject were different."
  },
  {
    "wordkey": "view",
    "exp": "In my view, education must be accessible to everyone."
  },
  {
    "wordkey": "view",
    "exp": "I share the view that we need to learn English."
  },
  {
    "wordkey": "view",
    "exp": "She took a dim view of the subject of the conversation."
  },
  {
    "wordkey": "view",
    "exp": "They had an exchange of views about philosophy."
  },
  {
    "wordkey": "view",
    "exp": "The view from the mountain summit is breathtaking."
  },
  {
    "wordkey": "view",
    "exp": "As we walked further, a spectacular waterfall came into view."
  },
  {
    "wordkey": "view",
    "exp": "They decided to have a picnic in the village, admiring the view."
  },
  {
    "wordkey": "view",
    "exp": "A skyscraper blocked the view of the ocean."
  },
  {
    "wordkey": "avoid",
    "exp": "He was avoiding her ever since she broke his heart."
  },
  {
    "wordkey": "avoid",
    "exp": "He narrowly avoided such a terrible accident when his car skidded on the highway."
  },
  {
    "wordkey": "avoid",
    "exp": "We need to avoid arguing with them at all costs."
  },
  {
    "wordkey": "behave",
    "exp": "He behaves as if he knew everything."
  },
  {
    "wordkey": "calm",
    "exp": "The spot there was so peaceful and calm."
  },
  {
    "wordkey": "calm",
    "exp": "During the operation, he had a hard time remaining calm due to his grave anxiety."
  },
  {
    "wordkey": "calm",
    "exp": "It became a heated argument, and he tried to calm them down."
  },
  {
    "wordkey": "calm",
    "exp": "There was a sense of calm in the early morning."
  },
  {
    "wordkey": "concern",
    "exp": "The entire city was filled with concern after a skyscraper collapsed."
  },
  {
    "wordkey": "concern",
    "exp": "Concern for proper health care was growing due to the outbreak of the virus."
  },
  {
    "wordkey": "concern",
    "exp": "The movie concerns a group of people who are lost in a secluded place."
  },
  {
    "wordkey": "concern",
    "exp": "The book concerns language learning."
  },
  {
    "wordkey": "content",
    "exp": "The kids were content with their toys."
  },
  {
    "wordkey": "content",
    "exp": "He was very content to be with his family."
  },
  {
    "wordkey": "expect",
    "exp": "He expected her to accept his proposal."
  },
  {
    "wordkey": "expect",
    "exp": "She expected that the kids would find the answer to the riddle."
  },
  {
    "wordkey": "frequently",
    "exp": "Some words are used more frequently than others."
  },
  {
    "wordkey": "habit",
    "exp": "Try to get into the habit of learning new words every day."
  },
  {
    "wordkey": "habit",
    "exp": "After a few weeks, she managed to get out of that nasty habit."
  },
  {
    "wordkey": "habit",
    "exp": "He has finally broken the habit of smoking."
  },
  {
    "wordkey": "habit",
    "exp": "She advised them to make a habit of telling what they appreciate about each other every so often."
  },
  {
    "wordkey": "habit",
    "exp": "During their friendship, he picked up some of his bad habits."
  },
  {
    "wordkey": "habit",
    "exp": "They were in the habit of talking on the phone every other day."
  },
  {
    "wordkey": "instruct",
    "exp": "He was a coach and instructed several people in swimming."
  },
  {
    "wordkey": "issue",
    "exp": "The CEO talked about the ethical issues in the meeting."
  },
  {
    "wordkey": "none",
    "exp": "None of my coworkers know Mandarin."
  },
  {
    "wordkey": "none",
    "exp": "Do you have any idea how to do that? None at all."
  },
  {
    "wordkey": "none",
    "exp": "None but Joey could eat that much turkey."
  },
  {
    "wordkey": "none",
    "exp": "The one who will lecture is none other than Ross."
  },
  {
    "wordkey": "patient",
    "exp": "I tried to be patient with him."
  },
  {
    "wordkey": "patient",
    "exp": "A few patients were waiting for their turn in the lounge."
  },
  {
    "wordkey": "positive",
    "exp": "We should keep a positive attitude while learning a foreign language."
  },
  {
    "wordkey": "positive",
    "exp": "His positive outlook helped him go through those dark days."
  },
  {
    "wordkey": "positive",
    "exp": "You have a positive future as long as you keep studying."
  },
  {
    "wordkey": "positive",
    "exp": "Her doctor said If her test was positive, she would have an operation."
  },
  {
    "wordkey": "punish",
    "exp": "The teacher punished the lazy student by giving him extra homework."
  },
  {
    "wordkey": "punish",
    "exp": "The police officer punished her with a $50 fine."
  },
  {
    "wordkey": "represent",
    "exp": "They got a lawyer to represent them in court."
  },
  {
    "wordkey": "represent",
    "exp": "Each color represents a different type of terrain on the map."
  },
  {
    "wordkey": "shake",
    "exp": "He stood out, shaking like a leaf."
  },
  {
    "wordkey": "shake",
    "exp": "They shook hands and agreed on the contract."
  },
  {
    "wordkey": "shake",
    "exp": "The chef shook cheese over the pasta to complement its flavor."
  },
  {
    "wordkey": "spread",
    "exp": "He took a slice of toast and spread butter and jam on it."
  },
  {
    "wordkey": "spread",
    "exp": "The petroleum was leaking from the pipe and made the fire spread quickly."
  },
  {
    "wordkey": "spread",
    "exp": "The contagious disease spread through the city rapidly."
  },
  {
    "wordkey": "stroll",
    "exp": "They decided to stroll along the beach and have a romantic evening."
  },
  {
    "wordkey": "stroll",
    "exp": "After supper, he went for a leisurely stroll through the park with his dog."
  },
  {
    "wordkey": "village",
    "exp": "There was a picturesque fishing village."
  },
  {
    "wordkey": "village",
    "exp": "Every day, he would take a taxi from the village to downtown to get to work."
  },
  {
    "wordkey": "active",
    "exp": "He was 75, albeit remained active."
  },
  {
    "wordkey": "active",
    "exp": "You should be more active instead of sitting around all day."
  },
  {
    "wordkey": "active",
    "exp": "He was an active member of the union."
  },
  {
    "wordkey": "active",
    "exp": "He wanted to talk to his son about protection before he became sexually active."
  },
  {
    "wordkey": "adult",
    "exp": "Children should not interrupt when adults are talking."
  },
  {
    "wordkey": "adult",
    "exp": "There was a section in the shop for adults only."
  },
  {
    "wordkey": "age",
    "exp": "He set up his own business at the age of 19."
  },
  {
    "wordkey": "age",
    "exp": "He told him to act his age."
  },
  {
    "wordkey": "bad",
    "exp": "They had no choice but to call off the plan due to bad weather."
  },
  {
    "wordkey": "bad",
    "exp": "When news about their plan leaked out, they got bad publicity among the citizens."
  },
  {
    "wordkey": "balance",
    "exp": "He was about to fall down but managed to maintain his balance just in time."
  },
  {
    "wordkey": "balance",
    "exp": "She was having difficulty keeping her balance with those high-heeled shoes."
  },
  {
    "wordkey": "balance",
    "exp": "The cyclist looked back to see who was making that sound but then lost his balance and fell."
  },
  {
    "wordkey": "balance",
    "exp": "We should strike a balance between work and rest."
  },
  {
    "wordkey": "bike",
    "exp": "He goes to work by bike."
  },
  {
    "wordkey": "choose",
    "exp": "There was a range of items to choose from."
  },
  {
    "wordkey": "choose",
    "exp": "They had difficulty choosing one from so many options."
  },
  {
    "wordkey": "choose",
    "exp": "He had to choose between studying for the final test and going out with his friends."
  },
  {
    "wordkey": "choose",
    "exp": "The coach chose him as the captain of the team."
  },
  {
    "wordkey": "choose",
    "exp": "Her manager chose her to oversee the project."
  },
  {
    "wordkey": "doctor",
    "exp": "He decided to see a doctor as the pain got worse."
  },
  {
    "wordkey": "doctor",
    "exp": "The doctor prescribed her some syrup and pills."
  },
  {
    "wordkey": "during",
    "exp": "They talked about the issue during the party."
  },
  {
    "wordkey": "during",
    "exp": "He fell asleep during the movie."
  },
  {
    "wordkey": "fun",
    "exp": "They had a lot of fun in the playground."
  },
  {
    "wordkey": "fun",
    "exp": "They just wanted to have a fun evening."
  },
  {
    "wordkey": "game",
    "exp": "Instead of going out, they decided to play a fun game."
  },
  {
    "wordkey": "game",
    "exp": "They played a game of tennis."
  },
  {
    "wordkey": "heart",
    "exp": "Their hearts were beating fast during the competition."
  },
  {
    "wordkey": "heart",
    "exp": "He had a heart attack and is now in the hospital."
  },
  {
    "wordkey": "heart",
    "exp": "His heart leaped when she called to invite him over."
  },
  {
    "wordkey": "heart",
    "exp": "She turned down his proposal and broke his heart."
  },
  {
    "wordkey": "heart",
    "exp": "He lost his heart to her the first time he saw her."
  },
  {
    "wordkey": "heart",
    "exp": "Trust and honesty are at the heart of any successful relationship."
  },
  {
    "wordkey": "heart",
    "exp": "Instead of getting excited, he remained focused, dealing with the heart of the matter."
  },
  {
    "wordkey": "golf",
    "exp": "He loves golf because it makes him calm."
  },
  {
    "wordkey": "golf",
    "exp": "They went to play golf in the golf course."
  },
  {
    "wordkey": "increase",
    "exp": "The profit was significantly increasing thanks to his good management."
  },
  {
    "wordkey": "increase",
    "exp": "The money the charity was raising increased dramatically."
  },
  {
    "wordkey": "increase",
    "exp": "We can get a higher grade if we increase our effort."
  },
  {
    "wordkey": "increase",
    "exp": "They saw an increase in the number of participants."
  },
  {
    "wordkey": "increase",
    "exp": "A lot of people went on strike because of price increases."
  },
  {
    "wordkey": "life",
    "exp": "He wanted to spend the rest of his life with her."
  },
  {
    "wordkey": "life",
    "exp": "Whether you like it or not, problems are a part of life."
  },
  {
    "wordkey": "life",
    "exp": "He saved the lives of several poor kids around the world."
  },
  {
    "wordkey": "life",
    "exp": "The knight would give his life for his king."
  },
  {
    "wordkey": "kilometer",
    "exp": "There are just a few kilometers to reach the destination."
  },
  {
    "wordkey": "kilometer",
    "exp": "The village is about 70 kilometers away from downtown."
  },
  {
    "wordkey": "often",
    "exp": "I often see her on my way to work."
  },
  {
    "wordkey": "often",
    "exp": "How often do you brush your teeth?"
  },
  {
    "wordkey": "plenty",
    "exp": "There was plenty of evidence that proved him guilty."
  },
  {
    "wordkey": "plenty",
    "exp": "There were plenty of activities in the town."
  },
  {
    "wordkey": "weight",
    "exp": "He gained weight during the time he was in jail."
  },
  {
    "wordkey": "weight",
    "exp": "She wanted to lose weight, so she decided to hit the gym every day."
  },
  {
    "wordkey": "apart",
    "exp": "They moved apart and followed their paths."
  },
  {
    "wordkey": "apart",
    "exp": "He pulled them apart and tried to calm them down."
  },
  {
    "wordkey": "apart",
    "exp": "We should try to keep work and our private lives far apart."
  },
  {
    "wordkey": "apart",
    "exp": "When I took the cookie, it fell apart because of having cracks in it."
  },
  {
    "wordkey": "apart",
    "exp": "The mechanic took the engine apart to see what was wrong."
  },
  {
    "wordkey": "attribute",
    "exp": "Being organized is a rare attribute among teenagers."
  },
  {
    "wordkey": "attribute",
    "exp": "She has some positive attributes as a young girl."
  },
  {
    "wordkey": "bilingual",
    "exp": "Once I master English, I will be bilingual."
  },
  {
    "wordkey": "bilingual",
    "exp": "Do you have a bilingual dictionary?"
  },
  {
    "wordkey": "completely",
    "exp": "Now that you explained it to me, I agree with you completely."
  },
  {
    "wordkey": "completely",
    "exp": "The entire area was completely changed."
  },
  {
    "wordkey": "dash",
    "exp": "The car dashed into the wall, causing great damage."
  },
  {
    "wordkey": "dash",
    "exp": "Tidal waves dashed the boat against rocks and reefs."
  },
  {
    "wordkey": "disgust",
    "exp": "I was filled with disgust when I saw that scene."
  },
  {
    "wordkey": "disgust",
    "exp": "As I was walking over the bridge, something gave off a smell and made me run away in disgust at such a revolting stench."
  },
  {
    "wordkey": "fashionable",
    "exp": "There was a fashionable club near the square."
  },
  {
    "wordkey": "fashionable",
    "exp": "She was wearing fashionable clothes."
  },
  {
    "wordkey": "foreign",
    "exp": "She had never been to a foreign country."
  },
  {
    "wordkey": "foreign",
    "exp": "He can speak two foreign languages."
  },
  {
    "wordkey": "gulf",
    "exp": "The widening gulf between the poor and the rich is a big problem."
  },
  {
    "wordkey": "gulf",
    "exp": "He tried to bridge the gulf between the two tribes."
  },
  {
    "wordkey": "mirror",
    "exp": "She was looking at herself in the mirror."
  },
  {
    "wordkey": "mirror",
    "exp": "He looked at his reflection in the mirror."
  },
  {
    "wordkey": "mirror",
    "exp": "The mirror reflected the light on the wall."
  },
  {
    "wordkey": "natural",
    "exp": "I love the natural beauty of the village."
  },
  {
    "wordkey": "natural",
    "exp": "They suffered from several natural disasters such as earthquake and famine."
  },
  {
    "wordkey": "natural",
    "exp": "He had an active life and in the end, he died from natural causes."
  },
  {
    "wordkey": "nowadays",
    "exp": "Nowadays, not so many people use bicycles to get around."
  },
  {
    "wordkey": "nowadays",
    "exp": "I exercise at home instead of going to the gym nowadays."
  },
  {
    "wordkey": "participant",
    "exp": "Several participants were trying to reach the final stage."
  },
  {
    "wordkey": "participant",
    "exp": "As a participant in the survey, she was asked to answer some questions about her lifestyle."
  },
  {
    "wordkey": "ritual",
    "exp": "Brewing tea and watering his small garden were part of his morning ritual."
  },
  {
    "wordkey": "ritual",
    "exp": "They performed the ritual of lighting some candles before saying the prayers."
  },
  {
    "wordkey": "spoken",
    "exp": "He gave a spoken account of the occurrence."
  },
  {
    "wordkey": "sport",
    "exp": "His favorite sport is baseball."
  },
  {
    "wordkey": "surprise",
    "exp": "They were surprised to hear him speak English."
  },
  {
    "wordkey": "surprise",
    "exp": "Although he studied hard, he was surprised at the exam paper."
  },
  {
    "wordkey": "tense",
    "exp": "During the interview, she was so tense."
  },
  {
    "wordkey": "tense",
    "exp": "It was a tense time when he was waiting for her."
  },
  {
    "wordkey": "tense",
    "exp": "English has twelve tenses in total."
  },
  {
    "wordkey": "totally",
    "exp": "His new girlfriend is totally different from his ex."
  },
  {
    "wordkey": "totally",
    "exp": "I totally agree that we need to learn English."
  },
  {
    "wordkey": "vague",
    "exp": "He just had a vague memory of the place."
  },
  {
    "wordkey": "vague",
    "exp": "She was vague about what she wanted."
  },
  {
    "wordkey": "allow",
    "exp": "Smoking is not allowed in this area."
  },
  {
    "wordkey": "announce",
    "exp": "They announced that the tax will be increased by 10 percent."
  },
  {
    "wordkey": "beside",
    "exp": "She stood beside him in the line."
  },
  {
    "wordkey": "beside",
    "exp": "Beside the pond was a small garden."
  },
  {
    "wordkey": "challenge",
    "exp": "The champion took up the challenge and decided to fight with him."
  },
  {
    "wordkey": "challenge",
    "exp": "He relished the challenge of a mountain expedition."
  },
  {
    "wordkey": "challenge",
    "exp": "Global warming is a tough challenge that we have to face."
  },
  {
    "wordkey": "claim",
    "exp": "They claim to know how to fix the engine."
  },
  {
    "wordkey": "condition",
    "exp": "The cottage is in terrible condition and needs to be fixed."
  },
  {
    "wordkey": "contribute",
    "exp": "They all contributed toward a few houses for the poor."
  },
  {
    "wordkey": "contribute",
    "exp": "He contributed 10 thousand dollars to the charity."
  },
  {
    "wordkey": "difference",
    "exp": "Do they have any major difference in quality?"
  },
  {
    "wordkey": "divide",
    "exp": "She divided the cake so that everyone could have a piece."
  },
  {
    "wordkey": "divide",
    "exp": "Canada is divided into ten provinces."
  },
  {
    "wordkey": "divide",
    "exp": "They decided to divide up the cost among themselves."
  },
  {
    "wordkey": "expert",
    "exp": "At the age of 12, he was an expert at solving math problems."
  },
  {
    "wordkey": "famous",
    "exp": "This restaurant is famous for its spicy food."
  },
  {
    "wordkey": "famous",
    "exp": "Everyone knew him as he was a famous actor."
  },
  {
    "wordkey": "force",
    "exp": "She used all her force to lift the table."
  },
  {
    "wordkey": "force",
    "exp": "Teachers should not use force in schools."
  },
  {
    "wordkey": "force",
    "exp": "We need to combine forces if we want to succeed in this project."
  },
  {
    "wordkey": "harm",
    "exp": "A minor mistake could cause great harm, so be careful."
  },
  {
    "wordkey": "harm",
    "exp": "Make sure you wash the vegetable carefully; otherwise, it could do you harm."
  },
  {
    "wordkey": "lay",
    "exp": "She laid aside the baby and went to grab the diaper."
  },
  {
    "wordkey": "lay",
    "exp": "He was going to lay the tray down but tripped over a toy and spilled the drinks."
  },
  {
    "wordkey": "lay",
    "exp": "Birds usually build a nest before laying their eggs."
  },
  {
    "wordkey": "peace",
    "exp": "He was trying to keep peace between them."
  },
  {
    "wordkey": "peace",
    "exp": "A white dove is a symbol of peace."
  },
  {
    "wordkey": "peace",
    "exp": "They went to a neutral country to negotiate a peace agreement."
  },
  {
    "wordkey": "peace",
    "exp": "Peacekeeping forces were trying to avert war."
  },
  {
    "wordkey": "peace",
    "exp": "Peace activists wanted to make them sign a peace treaty."
  },
  {
    "wordkey": "peace",
    "exp": "People in both nations were advocating for a lasting peace."
  },
  {
    "wordkey": "prince",
    "exp": "The little prince asked his servant to bring some glue."
  },
  {
    "wordkey": "protect",
    "exp": "Luckily, there was a police officer that protected the kids."
  },
  {
    "wordkey": "protect",
    "exp": "The dragon was trying to protect the sacred treasure."
  },
  {
    "wordkey": "protect",
    "exp": "You should wrap up well to protect your body against the cold."
  },
  {
    "wordkey": "protect",
    "exp": "Wearing sunglasses can protect your eyes from the sun."
  },
  {
    "wordkey": "sense",
    "exp": "She sensed that the strange man wanted to deceive her."
  },
  {
    "wordkey": "sense",
    "exp": "He took the drug and soon could sense the power."
  },
  {
    "wordkey": "sense",
    "exp": "In one sense, \"spring\" refers to the season, but in another sense, it means a metal coil."
  },
  {
    "wordkey": "sudden",
    "exp": "He had a sudden heart attack when he was smoking."
  },
  {
    "wordkey": "sudden",
    "exp": "She made a sudden movement and escaped from the kidnapper."
  },
  {
    "wordkey": "therefore",
    "exp": "She wanted to ace in her exams. Therefore, she signed up for extra courses."
  },
  {
    "wordkey": "accept",
    "exp": "The vending machine accepts both cash and debit cards."
  },
  {
    "wordkey": "accept",
    "exp": "She refused to accept the job offer."
  },
  {
    "wordkey": "arrange",
    "exp": "They arranged to throw a house-warming party."
  },
  {
    "wordkey": "arrange",
    "exp": "She arranged with the staff to have a meeting at 11 AM."
  },
  {
    "wordkey": "arrange",
    "exp": "He asked his assistant to arrange a meeting for Monday."
  },
  {
    "wordkey": "arrange",
    "exp": "His secretary arranged for him to have a room there."
  },
  {
    "wordkey": "arrange",
    "exp": "They arranged the books in alphabetical order."
  },
  {
    "wordkey": "attend",
    "exp": "She attended all the classes for the summer semester."
  },
  {
    "wordkey": "attend",
    "exp": "They were going to attend a funeral when a problem came up."
  },
  {
    "wordkey": "chase",
    "exp": "A dog chased him down the alley."
  },
  {
    "wordkey": "chase",
    "exp": "The police were chasing the robber."
  },
  {
    "wordkey": "chase",
    "exp": "If you keep chasing your dreams, you will eventually succeed."
  },
  {
    "wordkey": "contrast",
    "exp": "You could easily see the contrast of the carpet with the furniture."
  },
  {
    "wordkey": "contrast",
    "exp": "He was so lazy, while by contrast, his friend was industrious."
  },
  {
    "wordkey": "contrast",
    "exp": "He failed almost all his exams, but in contrast, she got good grades."
  },
  {
    "wordkey": "encourage",
    "exp": "She always encourages her children to study and chase their dreams."
  },
  {
    "wordkey": "encourage",
    "exp": "We should encourage ourselves to master English."
  },
  {
    "wordkey": "encourage",
    "exp": "Fewer job opportunities will encourage an increase in the crime rate."
  },
  {
    "wordkey": "encourage",
    "exp": "He arranged a prize for the team that finished the project faster to encourage quick delivery."
  },
  {
    "wordkey": "familiar",
    "exp": "Among the crowd, there was a familiar face."
  },
  {
    "wordkey": "familiar",
    "exp": "The place was so familiar to him that he knew how to get there faster than the others."
  },
  {
    "wordkey": "grab",
    "exp": "The thief grabbed the bag and ran away."
  },
  {
    "wordkey": "grab",
    "exp": "He tried to grab their attention, in vain."
  },
  {
    "wordkey": "hang",
    "exp": "They both had gold necklaces hanging around their necks."
  },
  {
    "wordkey": "hang",
    "exp": "They hung a few banners on the wall."
  },
  {
    "wordkey": "hang",
    "exp": "Once he arrived home, he hung up his jacket on the rack."
  },
  {
    "wordkey": "hang",
    "exp": "There was a beautiful chandelier hanging down from the ceiling."
  },
  {
    "wordkey": "huge",
    "exp": "He had a huge house in the countryside."
  },
  {
    "wordkey": "huge",
    "exp": "After a lot of hard work, his business was a huge success."
  },
  {
    "wordkey": "necessary",
    "exp": "Knowing English is necessary if you want to live and work in America."
  },
  {
    "wordkey": "necessary",
    "exp": "We can always go back and read again, if necessary."
  },
  {
    "wordkey": "pattern",
    "exp": "Every morning, his routine was the same pattern; brushing his teeth, having breakfast, and working with his computer until midday."
  },
  {
    "wordkey": "pattern",
    "exp": "Her dress had a floral pattern."
  },
  {
    "wordkey": "propose",
    "exp": "She proposed that they go there and wait until he arrived."
  },
  {
    "wordkey": "propose",
    "exp": "He proposed working two more hours before taking a break so that they could finish the project faster."
  },
  {
    "wordkey": "propose",
    "exp": "Once he proposed to her, she accepted his proposal."
  },
  {
    "wordkey": "purpose",
    "exp": "The purpose of working together was to improve teamwork skills."
  },
  {
    "wordkey": "purpose",
    "exp": "Her operation was for a cosmetic purpose."
  },
  {
    "wordkey": "purpose",
    "exp": "He did that for the sole purpose of helping her out."
  },
  {
    "wordkey": "purpose",
    "exp": "His purpose in life was to advance human civilization."
  },
  {
    "wordkey": "purpose",
    "exp": "Their main purpose in redoing the house was to make him happy."
  },
  {
    "wordkey": "release",
    "exp": "After several years, he was finally released from jail."
  },
  {
    "wordkey": "release",
    "exp": "His rich family helped release him on bail."
  },
  {
    "wordkey": "release",
    "exp": "After a while, she felt sympathy toward the bird and released it."
  },
  {
    "wordkey": "require",
    "exp": "He was required to leave his phone with them before going into the room."
  },
  {
    "wordkey": "require",
    "exp": "They require the staff to have qualifications."
  },
  {
    "wordkey": "require",
    "exp": "She required that he give his itinerary to her."
  },
  {
    "wordkey": "satisfied",
    "exp": "She was satisfied with his work."
  },
  {
    "wordkey": "satisfied",
    "exp": "He was satisfied with the service."
  },
  {
    "wordkey": "single",
    "exp": "There was a single chair that was occupied."
  },
  {
    "wordkey": "single",
    "exp": "He used a single key to open the chest."
  },
  {
    "wordkey": "single",
    "exp": "Not a single person wanted to break the news to them."
  },
  {
    "wordkey": "tear",
    "exp": "The magazine was soaked, so he picked it up carefully to avoid tearing it."
  },
  {
    "wordkey": "tear",
    "exp": "Several pages had been torn out of the book."
  },
  {
    "wordkey": "tear",
    "exp": "A nail on the wall caught his shirt and tore it."
  },
  {
    "wordkey": "tear",
    "exp": "You could see the tears in his eyes when talking about the problem."
  },
  {
    "wordkey": "tear",
    "exp": "The little kid burst into tears when his toy broke."
  },
  {
    "wordkey": "theory",
    "exp": "Albert Einstein developed the theory of relativity."
  },
  {
    "wordkey": "theory",
    "exp": "He had a theory about how to solve the mystery."
  },
  {
    "wordkey": "animal",
    "exp": "There were some domestic animals in the farm."
  },
  {
    "wordkey": "animal",
    "exp": "He was an animal lover and was keeping a few on his ranch."
  },
  {
    "wordkey": "bus",
    "exp": "He usually takes the bus to work."
  },
  {
    "wordkey": "bus",
    "exp": "They went there by bus."
  },
  {
    "wordkey": "cat",
    "exp": "The cat was chasing a mouse."
  },
  {
    "wordkey": "cat",
    "exp": "When I pet the cat, it purrs."
  },
  {
    "wordkey": "command",
    "exp": "The coach told them to run at his command."
  },
  {
    "wordkey": "command",
    "exp": "When a chief gives a command, all soldiers must obey the command."
  },
  {
    "wordkey": "command",
    "exp": "The emperor had command over three countries."
  },
  {
    "wordkey": "command",
    "exp": "The knight was in command of the army."
  },
  {
    "wordkey": "command",
    "exp": "The troops were bravely fighting under the command of their general."
  },
  {
    "wordkey": "command",
    "exp": "They managed to finish the project two days earlier under the command of the new manager."
  },
  {
    "wordkey": "command",
    "exp": "He was about to take command of the kingdom, but they poisoned him."
  },
  {
    "wordkey": "command",
    "exp": "After years of studying, he finally had a good command of the language."
  },
  {
    "wordkey": "depend",
    "exp": "He depends on a wheelchair to get around."
  },
  {
    "wordkey": "depend",
    "exp": "The whole game depends on his pitch."
  },
  {
    "wordkey": "dog",
    "exp": "The dog was trying to hide its bone."
  },
  {
    "wordkey": "dog",
    "exp": "When he fed the dog, it wagged its tail."
  },
  {
    "wordkey": "dog",
    "exp": "The dog barked at the stranger."
  },
  {
    "wordkey": "door",
    "exp": "He asked her to answer the door."
  },
  {
    "wordkey": "door",
    "exp": "Someone was knocking on the door."
  },
  {
    "wordkey": "door",
    "exp": "He sensed somebody was eavesdropping, so he went to see who was at the door."
  },
  {
    "wordkey": "friend",
    "exp": "She found it hard to make friends in her new school."
  },
  {
    "wordkey": "friend",
    "exp": "The realtor was a friend of her."
  },
  {
    "wordkey": "help",
    "exp": "Could you help me move this table."
  },
  {
    "wordkey": "horse",
    "exp": "In the stable, there were a few horses."
  },
  {
    "wordkey": "horse",
    "exp": "She was combing the mane of the horse."
  },
  {
    "wordkey": "hospital",
    "exp": "After the accident, the patient spent a week in the hospital."
  },
  {
    "wordkey": "hospital",
    "exp": "They took her to the maternity ward in the hospital."
  },
  {
    "wordkey": "leg",
    "exp": "Her leg was injured, so she was admitted to the hospital."
  },
  {
    "wordkey": "leg",
    "exp": "After walking all day, his legs were sore."
  },
  {
    "wordkey": "medical",
    "exp": "She was a medical student chasing her dream of becoming a doctor."
  },
  {
    "wordkey": "medical",
    "exp": "The company offers medical and dental insurance to its employees."
  },
  {
    "wordkey": "open",
    "exp": "The door of the room opens into a beautiful patio."
  },
  {
    "wordkey": "open",
    "exp": "They opened a bottle of wine and began to talk about their lives."
  },
  {
    "wordkey": "open",
    "exp": "The window was left wide open."
  },
  {
    "wordkey": "open",
    "exp": "There was an open door inside the hall."
  },
  {
    "wordkey": "open",
    "exp": "The road was completely blocked by snow, but is now open again."
  },
  {
    "wordkey": "open",
    "exp": "The shop is open from 7 AM to 10 PM."
  },
  {
    "wordkey": "pull",
    "exp": "He was pulling the door when, suddenly, its knob broke."
  },
  {
    "wordkey": "pull",
    "exp": "He pulled down the shutter."
  },
  {
    "wordkey": "pull",
    "exp": "She pulled steadily on the rope, trying to take him to the safe ground."
  },
  {
    "wordkey": "rabbit",
    "exp": "There were a few rabbits in the park."
  },
  {
    "wordkey": "see",
    "exp": "I saw that a bunch of kids were trying to open a metal box."
  },
  {
    "wordkey": "see",
    "exp": "She saw him playing with a guitar."
  },
  {
    "wordkey": "see",
    "exp": "He saw them give something to her."
  },
  {
    "wordkey": "benefit",
    "exp": "We can derive a lot of benefits from English."
  },
  {
    "wordkey": "benefit",
    "exp": "We can benefit from each other."
  },
  {
    "wordkey": "certain",
    "exp": "The police wanted to make certain that the place was safe."
  },
  {
    "wordkey": "certain",
    "exp": "She was certain of the address."
  },
  {
    "wordkey": "chance",
    "exp": "Since she had two days off, she had a chance to visit her family."
  },
  {
    "wordkey": "chance",
    "exp": "The magistrate decided to give him a second chance."
  },
  {
    "wordkey": "chance",
    "exp": "They missed their chance to say goodbye to their grandparents."
  },
  {
    "wordkey": "chance",
    "exp": "The chances are that you lose the game, so be careful."
  },
  {
    "wordkey": "chance",
    "exp": "Have you, by any chance, seen her today?"
  },
  {
    "wordkey": "effect",
    "exp": "Learning a second language has a good effect on your life."
  },
  {
    "wordkey": "essential",
    "exp": "Revising vocabulary is essential if you want to be fluent."
  },
  {
    "wordkey": "essential",
    "exp": "Water is essential for all creatures in the world."
  },
  {
    "wordkey": "essential",
    "exp": "Exercise is essential to our health."
  },
  {
    "wordkey": "far",
    "exp": "His apartment is located on the far side of the town."
  },
  {
    "wordkey": "far",
    "exp": "The village is far from here."
  },
  {
    "wordkey": "far",
    "exp": "The location is not so far away."
  },
  {
    "wordkey": "far",
    "exp": "If you think far into the future, what action would benefit you the most if you take it now?"
  },
  {
    "wordkey": "far",
    "exp": "As far as I know, they are working on colonizing the Moon."
  },
  {
    "wordkey": "far",
    "exp": "He was by far the best player."
  },
  {
    "wordkey": "focus",
    "exp": "Sometimes, people go to a library to focus better."
  },
  {
    "wordkey": "focus",
    "exp": "A lot of noise caused him to lose focus."
  },
  {
    "wordkey": "focus",
    "exp": "Some people like to be the focus of attention."
  },
  {
    "wordkey": "focus",
    "exp": "Language learning has become my focus of interest lately."
  },
  {
    "wordkey": "function",
    "exp": "The function of the heart is to pump blood to the rest of the body."
  },
  {
    "wordkey": "function",
    "exp": "The radiator performs the function of keeping the place warm."
  },
  {
    "wordkey": "function",
    "exp": "The washing machine was functioning just fine, until it broke down this morning."
  },
  {
    "wordkey": "grass",
    "exp": "She was walking barefoot on grass in the park."
  },
  {
    "wordkey": "grass",
    "exp": "The kid found a ladybug in the grass."
  },
  {
    "wordkey": "guard",
    "exp": "This ointment will guard your skin from the sun."
  },
  {
    "wordkey": "guard",
    "exp": "The soldiers were trying to guard the town."
  },
  {
    "wordkey": "guard",
    "exp": "He was guarding a section of the prison."
  },
  {
    "wordkey": "guard",
    "exp": "There are prison guards to deter prisoners from running away."
  },
  {
    "wordkey": "guard",
    "exp": "A few armed guards were walking around the area."
  },
  {
    "wordkey": "image",
    "exp": "The image of their son made them cry."
  },
  {
    "wordkey": "image",
    "exp": "There were a few black-and-white images."
  },
  {
    "wordkey": "image",
    "exp": "It would have a bad effect on his public image among citizens."
  },
  {
    "wordkey": "immediate",
    "exp": "He asked the support team how to fix the problem, and there was an immediate response."
  },
  {
    "wordkey": "immediate",
    "exp": "The venom makes an immediate effect on the victim."
  },
  {
    "wordkey": "primary",
    "exp": "Her primary thoughts were about her children."
  },
  {
    "wordkey": "primary",
    "exp": "Earning more money was the primary reason she took the job offer."
  },
  {
    "wordkey": "primary",
    "exp": "Nowadays, my primary concern is to master English."
  },
  {
    "wordkey": "proud",
    "exp": "She was proud of her son at that moment."
  },
  {
    "wordkey": "remain",
    "exp": "The doctor told her to remain in bed for a few days."
  },
  {
    "wordkey": "remain",
    "exp": "All his friends went to that game, but he remained home."
  },
  {
    "wordkey": "remain",
    "exp": "We should remain to be focused on this."
  },
  {
    "wordkey": "remain",
    "exp": "The final part of the project remained to be done."
  },
  {
    "wordkey": "rest",
    "exp": "The couple rested on the couch by watching a sitcom."
  },
  {
    "wordkey": "rest",
    "exp": "We need to step aside from our computer screens and rest for a while."
  },
  {
    "wordkey": "separate",
    "exp": "They live in separate apartments in separate towns."
  },
  {
    "wordkey": "separate",
    "exp": "We should keep our private life and work separate."
  },
  {
    "wordkey": "separate",
    "exp": "We should separate the recyclable materials from regular trash before disposal."
  },
  {
    "wordkey": "site",
    "exp": "The Great Wall is located in a majestic site."
  },
  {
    "wordkey": "site",
    "exp": "The site of the crime was covered in blood."
  },
  {
    "wordkey": "site",
    "exp": "The exact site for the project has yet to be found."
  },
  {
    "wordkey": "site",
    "exp": "The meeting was supposed to be held on site."
  },
  {
    "wordkey": "site",
    "exp": "He was an off-site employee who worked remotely."
  },
  {
    "wordkey": "tail",
    "exp": "The dog wagged its tail while walking."
  },
  {
    "wordkey": "trouble",
    "exp": "I had trouble finding the exact location."
  },
  {
    "wordkey": "trouble",
    "exp": "The trouble started when he wanted to participate."
  },
  {
    "wordkey": "trouble",
    "exp": "She had a lot of trouble with the kids."
  },
  {
    "wordkey": "trouble",
    "exp": "The little kid was in trouble with the bullies."
  },
  {
    "wordkey": "trouble",
    "exp": "He got into trouble with him after his remark."
  },
  {
    "wordkey": "trouble",
    "exp": "Their relationship ran into trouble due to a conflict of opinion."
  },
  {
    "wordkey": "trouble",
    "exp": "She wanted to stay out of trouble by not commenting on their conversation."
  },
  {
    "wordkey": "trouble",
    "exp": "He was looking for trouble, so they kicked him out."
  },
  {
    "wordkey": "advertise",
    "exp": "They wanted to advertise their new product."
  },
  {
    "wordkey": "advertise",
    "exp": "He advertised for someone to fix the roof of his house."
  },
  {
    "wordkey": "aware",
    "exp": "She was well aware of the situation."
  },
  {
    "wordkey": "aware",
    "exp": "Are you aware that they are ripping us off?"
  },
  {
    "wordkey": "battery",
    "exp": "The battery was dead, so he was looking for a new one."
  },
  {
    "wordkey": "black",
    "exp": "The alley was so black that he could barely see where he was stepping."
  },
  {
    "wordkey": "city",
    "exp": "London is the capital city of the UK."
  },
  {
    "wordkey": "city",
    "exp": "The city of Shanghai has about 27 million residents."
  },
  {
    "wordkey": "clean",
    "exp": "She was cleaning the table when she heard a knock at the door."
  },
  {
    "wordkey": "country",
    "exp": "China and India are the most populous countries in the world."
  },
  {
    "wordkey": "develop",
    "exp": "This exercise will develop your triceps."
  },
  {
    "wordkey": "develop",
    "exp": "The fight between the two countries soon developed into an all-out war."
  },
  {
    "wordkey": "develop",
    "exp": "As time went by, their acquaintance developed into a long-standing friendship."
  },
  {
    "wordkey": "electric",
    "exp": "He used an electric kettle to make some tea."
  },
  {
    "wordkey": "electric",
    "exp": "Electric cars are way better for the environment than the ones people use now."
  },
  {
    "wordkey": "eventually",
    "exp": "Learning a second language is a long process, but eventually, you will master and become fluent."
  },
  {
    "wordkey": "eventually",
    "exp": "He was fighting the disease for several days, but he recuperated eventually."
  },
  {
    "wordkey": "fact",
    "exp": "They let him explain the case so that they knew all the facts."
  },
  {
    "wordkey": "fact",
    "exp": "He needed all the facts and figures before deciding."
  },
  {
    "wordkey": "fact",
    "exp": "Unfortunately, dying is a fact of life; at least for the time being."
  },
  {
    "wordkey": "glass",
    "exp": "The window in their kitchen had a small, colorful pane of glass."
  },
  {
    "wordkey": "history",
    "exp": "He says we should learn from history."
  },
  {
    "wordkey": "history",
    "exp": "Does anyone in your family have a history of epilepsy?"
  },
  {
    "wordkey": "nature",
    "exp": "We both love being in nature."
  },
  {
    "wordkey": "never",
    "exp": "She had never been there before."
  },
  {
    "wordkey": "never",
    "exp": "He never gets angry easily."
  },
  {
    "wordkey": "people",
    "exp": "How many people are there in your class?"
  },
  {
    "wordkey": "people",
    "exp": "Dozens of people went there to support him."
  },
  {
    "wordkey": "plastic",
    "exp": "There was some water in a plastic bottle."
  },
  {
    "wordkey": "plastic",
    "exp": "He used a sheet of plastic to fill the opening."
  },
  {
    "wordkey": "problem",
    "exp": "Whenever a problem arose, he would take a deep breath and go on with his work."
  },
  {
    "wordkey": "problem",
    "exp": "Poverty poses serious problems in many societies."
  },
  {
    "wordkey": "problem",
    "exp": "He was having problems finding her apartment."
  },
  {
    "wordkey": "problem",
    "exp": "We should find a way to tackle the problem of polluting the air."
  },
  {
    "wordkey": "street",
    "exp": "The entire street was packed with people."
  },
  {
    "wordkey": "street",
    "exp": "He was walking down the street when he saw her."
  },
  {
    "wordkey": "street",
    "exp": "She lives just across the street."
  },
  {
    "wordkey": "street",
    "exp": "Be careful while crossing the street."
  },
  {
    "wordkey": "think",
    "exp": "What do you think of those people?"
  },
  {
    "wordkey": "think",
    "exp": "Do you think that you could pick up some yogurt on your way here?"
  },
  {
    "wordkey": "think",
    "exp": "Flying in the sky used to be thought of as impossible."
  },
  {
    "wordkey": "alone",
    "exp": "He wanted to be alone so that he could focus on his study."
  },
  {
    "wordkey": "alone",
    "exp": "They were not alone in their concern about the tsunami."
  },
  {
    "wordkey": "apartment",
    "exp": "She lives alone in her apartment."
  },
  {
    "wordkey": "apartment",
    "exp": "He gave her the key to his apartment."
  },
  {
    "wordkey": "article",
    "exp": "Last night, I came across an interesting article about the future of humans."
  },
  {
    "wordkey": "article",
    "exp": "He was trying to write some articles on the website."
  },
  {
    "wordkey": "artist",
    "exp": "The portrait was made by a famous artist."
  },
  {
    "wordkey": "attitude",
    "exp": "She had a bad attitude toward her work."
  },
  {
    "wordkey": "attitude",
    "exp": "We should keep a positive attitude and keep going."
  },
  {
    "wordkey": "attitude",
    "exp": "After a while, he took the attitude that a lot of people might disagree with him."
  },
  {
    "wordkey": "attitude",
    "exp": "She told him to watch his attitude."
  },
  {
    "wordkey": "attitude",
    "exp": "Their attitude hardened, but luckily, it was just a misunderstanding, and their attitude softened."
  },
  {
    "wordkey": "attitude",
    "exp": "He used to be negative, but recently, he has experienced a change in attitude."
  },
  {
    "wordkey": "beauty",
    "exp": "When she was younger, she was a great beauty."
  },
  {
    "wordkey": "beauty",
    "exp": "We love the natural beauty of their village."
  },
  {
    "wordkey": "compare",
    "exp": "Your house is a little bit bigger compared to mine."
  },
  {
    "wordkey": "judge",
    "exp": "The magistrate was about to judge the offender."
  },
  {
    "wordkey": "judge",
    "exp": "We should not judge him; after all, he did his best."
  },
  {
    "wordkey": "judge",
    "exp": "Never ever judge a book by its cover."
  },
  {
    "wordkey": "magazine",
    "exp": "There were a few magazines on the table in the clinic."
  },
  {
    "wordkey": "magazine",
    "exp": "There was a glossy magazine on the floor."
  },
  {
    "wordkey": "material",
    "exp": "Glass is a transparent, breakable material."
  },
  {
    "wordkey": "meal",
    "exp": "She was good at making gourmet meals."
  },
  {
    "wordkey": "meal",
    "exp": "They went to a restaurant and had a slap-up meal."
  },
  {
    "wordkey": "meal",
    "exp": "I much prefer home cooked meal over fast food."
  },
  {
    "wordkey": "method",
    "exp": "My method of learning vocabulary is reading both textbooks and novels and then watching movies to reinforce them."
  },
  {
    "wordkey": "method",
    "exp": "Traveling by public transportation is a good method to get around."
  },
  {
    "wordkey": "neighbor",
    "exp": "They invited their neighbors to the party."
  },
  {
    "wordkey": "neighbor",
    "exp": "His neighbors were constantly making noise."
  },
  {
    "wordkey": "professional",
    "exp": "He wanted to be a good programmer. Therefore, he enrolled in a professional course."
  },
  {
    "wordkey": "profit",
    "exp": "He made a big profit by trading cryptocurrency."
  },
  {
    "wordkey": "profit",
    "exp": "She experienced more sales that month, and her pretax profit was about 1 million dollars."
  },
  {
    "wordkey": "profit",
    "exp": "He sold the application at a huge profit."
  },
  {
    "wordkey": "quality",
    "exp": "Is the quality of this one better than the other?"
  },
  {
    "wordkey": "quality",
    "exp": "The quality of his work was so high that they offered him a better position."
  },
  {
    "wordkey": "quality",
    "exp": "After I bought it, I realized how poor its quality was."
  },
  {
    "wordkey": "space",
    "exp": "The furniture took up a lot of space in the living room."
  },
  {
    "wordkey": "space",
    "exp": "He was trying to find a parking space."
  },
  {
    "wordkey": "space",
    "exp": "She moved the table to make some space for the chairs."
  },
  {
    "wordkey": "stair",
    "exp": "They had to take the stairs since the elevator was out of order."
  },
  {
    "wordkey": "stair",
    "exp": "He took the stairs to his office on the second floor."
  },
  {
    "wordkey": "stair",
    "exp": "There was a landing and two flights of stairs to her bedroom."
  },
  {
    "wordkey": "stair",
    "exp": "The panda was at the foot of the stairs, looking tired already."
  },
  {
    "wordkey": "symbol",
    "exp": "That symbol indicates that there might be some snakes, so be careful."
  },
  {
    "wordkey": "symbol",
    "exp": "The stars in the Chinese flag is a symbol of unity."
  },
  {
    "wordkey": "thin",
    "exp": "The boy was painfully thin."
  },
  {
    "wordkey": "accounting",
    "exp": "He chose to have a career in accounting."
  },
  {
    "wordkey": "appeal",
    "exp": "The way she behaved in that situation really appeals to me."
  },
  {
    "wordkey": "appeal",
    "exp": "The playground has a wide appeal to children."
  },
  {
    "wordkey": "appeal",
    "exp": "As trends change, certain styles lose appeal."
  },
  {
    "wordkey": "appeal",
    "exp": "Their appeal for volunteers got a pretty good response."
  },
  {
    "wordkey": "appeal",
    "exp": "The organization appealed for money to continue humanitarian efforts."
  },
  {
    "wordkey": "assume",
    "exp": "He assumed that she wanted to go there."
  },
  {
    "wordkey": "assume",
    "exp": "They assumed him to be upset because of that minor incident."
  },
  {
    "wordkey": "borrow",
    "exp": "She went to the library to borrow some novels."
  },
  {
    "wordkey": "borrow",
    "exp": "He had some financial problems, so he had to borrow some money from his friend."
  },
  {
    "wordkey": "client",
    "exp": "He was a wealthy client of the firm."
  },
  {
    "wordkey": "client",
    "exp": "Some clients needed advice about products, but no one was there to answer them."
  },
  {
    "wordkey": "downtown",
    "exp": "She lives in the northern part of the downtown."
  },
  {
    "wordkey": "downtown",
    "exp": "He went downtown, looking for a job."
  },
  {
    "wordkey": "dull",
    "exp": "The movie was so dull that he fell asleep."
  },
  {
    "wordkey": "embarrass",
    "exp": "He embarrassed him by making those comments."
  },
  {
    "wordkey": "former",
    "exp": "Who was the former president of your country?"
  },
  {
    "wordkey": "former",
    "exp": "The mayor wanted to restore the structure to its former glory."
  },
  {
    "wordkey": "found",
    "exp": "They all contributed to found a small hospital for the poor in the suburb."
  },
  {
    "wordkey": "found",
    "exp": "Facebook was founded by Mark Zuckerberg."
  },
  {
    "wordkey": "invest",
    "exp": "He invested some money, hoping that he would get more money back."
  },
  {
    "wordkey": "invest",
    "exp": "They decided to invest one million dollars in his project."
  },
  {
    "wordkey": "invest",
    "exp": "We should invest a lot of energy and time in English."
  },
  {
    "wordkey": "loan",
    "exp": "He took out a $20,000 loan to start his own business."
  },
  {
    "wordkey": "loan",
    "exp": "She applied for a loan so that she could buy an aparment."
  },
  {
    "wordkey": "practical",
    "exp": "Initially, he wanted to buy a sports car, but then he came to his senses and decided to buy something more practical."
  },
  {
    "wordkey": "practical",
    "exp": "She always goes for practical shoes instead of high heels."
  },
  {
    "wordkey": "practical",
    "exp": "He went to his shrink for some practical advice."
  },
  {
    "wordkey": "practical",
    "exp": "They came up with a practical solution to the problem."
  },
  {
    "wordkey": "quarter",
    "exp": "She was here a quarter earlier."
  },
  {
    "wordkey": "quarter",
    "exp": "The little boy found a quarter and bought a candy with it."
  },
  {
    "wordkey": "salary",
    "exp": "She was earning a low salary, so she decided to work on her skills to get a higher one."
  },
  {
    "wordkey": "salary",
    "exp": "His annual salary is about 100 thousand."
  },
  {
    "wordkey": "scholarship",
    "exp": "After a few years of hard work, she won a scholarship to Stanford University."
  },
  {
    "wordkey": "scholarship",
    "exp": "He went to that university on a scholarship."
  },
  {
    "wordkey": "temporary",
    "exp": "His post in the office was temporary, but he got promoted after doing such a good job."
  },
  {
    "wordkey": "treasure",
    "exp": "They were talking about buried treasure."
  },
  {
    "wordkey": "treasure",
    "exp": "They were digging into the ground, looking for some kind of treasure."
  },
  {
    "wordkey": "urge",
    "exp": "The firefighters urged people at the ceremony to leave the place immediately."
  },
  {
    "wordkey": "urge",
    "exp": "The geographer urged that they evacuate all people in the area ASAP."
  },
  {
    "wordkey": "urge",
    "exp": "He was urged into working on the project by them."
  },
  {
    "wordkey": "urge",
    "exp": "A kleptomaniac is someone who often has an urge to steal things."
  },
  {
    "wordkey": "coach",
    "exp": "The coach blew his whistle as a sign to start the game."
  },
  {
    "wordkey": "coach",
    "exp": "The head coach gave a pep talk to cheer the team."
  },
  {
    "wordkey": "control",
    "exp": "We should learn how to control our emotions."
  },
  {
    "wordkey": "control",
    "exp": "They put up a few bumpers to control speeding in the area."
  },
  {
    "wordkey": "control",
    "exp": "The situation was getting out of control."
  },
  {
    "wordkey": "control",
    "exp": "She was having difficulty staying in control of her feelings."
  },
  {
    "wordkey": "control",
    "exp": "They had lost control of the gate to the enemy."
  },
  {
    "wordkey": "control",
    "exp": "They took control over the castle."
  },
  {
    "wordkey": "description",
    "exp": "We gave them a detailed description of the accident."
  },
  {
    "wordkey": "description",
    "exp": "Can you give a description of what exactly you want to be in the future?"
  },
  {
    "wordkey": "description",
    "exp": "The place is beyond description."
  },
  {
    "wordkey": "description",
    "exp": "Cars of almost every description were in his garage."
  },
  {
    "wordkey": "direct",
    "exp": "They followed a direct path to the spot."
  },
  {
    "wordkey": "direct",
    "exp": "Ants were moving in a direct line."
  },
  {
    "wordkey": "exam",
    "exp": "There is an important exam coming up next week."
  },
  {
    "wordkey": "exam",
    "exp": "Despite studying hard, he barely got a grade B in his final exam."
  },
  {
    "wordkey": "exam",
    "exp": "They were going to take a science exam."
  },
  {
    "wordkey": "exam",
    "exp": "When the exam results came in, he was very disappointed."
  },
  {
    "wordkey": "example",
    "exp": "That painting is a good example of his work."
  },
  {
    "wordkey": "example",
    "exp": "We can address this issue by, for example, using electric cars and solar panels."
  },
  {
    "wordkey": "limit",
    "exp": "You should try to put a limit on how much sugar you consume."
  },
  {
    "wordkey": "limit",
    "exp": "They decided to set a time limit for using the playing lounge for all the staff."
  },
  {
    "wordkey": "limit",
    "exp": "His doctor advised him to limit his sugar intake."
  },
  {
    "wordkey": "local",
    "exp": "Most of the local residents grew their own crops."
  },
  {
    "wordkey": "local",
    "exp": "She went to the local grocery store to get some eggs and bread."
  },
  {
    "wordkey": "local",
    "exp": "Some locals help them find their way."
  },
  {
    "wordkey": "magical",
    "exp": "They say that kind of stone has magical powers."
  },
  {
    "wordkey": "magical",
    "exp": "They strolled along the beach on that magical night."
  },
  {
    "wordkey": "mail",
    "exp": "A box containing two books came in the mail for her."
  },
  {
    "wordkey": "mail",
    "exp": "He sent his friend a letter by mail."
  },
  {
    "wordkey": "mail",
    "exp": "Some plants were delivered to her through the mail."
  },
  {
    "wordkey": "novel",
    "exp": "His latest novel became a blockbuster."
  },
  {
    "wordkey": "novel",
    "exp": "She was reading a romantic novel."
  },
  {
    "wordkey": "novel",
    "exp": "During the meeting, he proposed such a novel suggestion."
  },
  {
    "wordkey": "outline",
    "exp": "Before writing his novel, he thought about the outline."
  },
  {
    "wordkey": "outline",
    "exp": "She made an outline, but she spotted a few minor mistakes later."
  },
  {
    "wordkey": "outline",
    "exp": "Try to outline the key points in your presentation before talking about them in detail."
  },
  {
    "wordkey": "poet",
    "exp": "Shakespeare was a great poet."
  },
  {
    "wordkey": "print",
    "exp": "They printed some information on leaflets and gave them to students."
  },
  {
    "wordkey": "scene",
    "exp": "In one scene of the movie, a building collapses."
  },
  {
    "wordkey": "scene",
    "exp": "The artist depicted a magical scene in wilderness."
  },
  {
    "wordkey": "scene",
    "exp": "Sherlock went to the scene of the crime."
  },
  {
    "wordkey": "sheet",
    "exp": "Do you have a sheet of paper that I can write on?"
  },
  {
    "wordkey": "sheet",
    "exp": "They needed a sheet of wrapping paper to ready the gift for him."
  },
  {
    "wordkey": "sheet",
    "exp": "She changed the sheet on the bed for her guest."
  },
  {
    "wordkey": "silly",
    "exp": "It was silly of him to think that way."
  },
  {
    "wordkey": "store",
    "exp": "He used to work in a hardware store."
  },
  {
    "wordkey": "suffer",
    "exp": "She was suffering from a splitting headache."
  },
  {
    "wordkey": "suffer",
    "exp": "A lot of people suffered a great hurricane."
  },
  {
    "wordkey": "suffer",
    "exp": "If you abuse the drug, you will suffer the consequences later."
  },
  {
    "wordkey": "technology",
    "exp": "He is deeply into computer technology."
  },
  {
    "wordkey": "technology",
    "exp": "I believe that humans may become immortal thanks to science and technology."
  },
  {
    "wordkey": "across",
    "exp": "They carefully walked across the street."
  },
  {
    "wordkey": "breathe",
    "exp": "Try to breathe in deeply and then breathe out slowly."
  },
  {
    "wordkey": "characteristic",
    "exp": "One characteristic of it is its fast speed."
  },
  {
    "wordkey": "consume",
    "exp": "He was so hungry that he consumed two bowls of rice."
  },
  {
    "wordkey": "consume",
    "exp": "Climbing to the peak of the mountain consumed a lot of energy."
  },
  {
    "wordkey": "consume",
    "exp": "Learning a foreign language is a time-consuming process."
  },
  {
    "wordkey": "excite",
    "exp": "The fact that she was going to be an integral part of the project excited her."
  },
  {
    "wordkey": "excite",
    "exp": "Going skiing really excites me."
  },
  {
    "wordkey": "extremely",
    "exp": "She was extremely excited about it."
  },
  {
    "wordkey": "fear",
    "exp": "It was his greatest fear to be at a high altitude."
  },
  {
    "wordkey": "fear",
    "exp": "He had a fear of rejection, which led him to loneliness."
  },
  {
    "wordkey": "fortunate",
    "exp": "It was fortunate that he arrived soon."
  },
  {
    "wordkey": "fortunate",
    "exp": "He felt fortunate to meet her."
  },
  {
    "wordkey": "happen",
    "exp": "A funny thing happened today at school."
  },
  {
    "wordkey": "happen",
    "exp": "He happened to know a good realtor."
  },
  {
    "wordkey": "happen",
    "exp": "It just happened that I knew how to solve their issue."
  },
  {
    "wordkey": "length",
    "exp": "The room is about 20 meters in length."
  },
  {
    "wordkey": "length",
    "exp": "They planted the seeds all along the length of the garden."
  },
  {
    "wordkey": "mistake",
    "exp": "There are a few spelling mistakes in your essay."
  },
  {
    "wordkey": "mistake",
    "exp": "It was a silly mistake to go there at the time."
  },
  {
    "wordkey": "mistake",
    "exp": "The twins were so alike that he often mistook one for another."
  },
  {
    "wordkey": "observe",
    "exp": "We decided to stay a little longer to observe the sunset."
  },
  {
    "wordkey": "observe",
    "exp": "The scientist injected the mouse with a syringe and observed the reaction."
  },
  {
    "wordkey": "observe",
    "exp": "He was observing how the builder was making it."
  },
  {
    "wordkey": "observe",
    "exp": "We must observe the law to keep a sound society."
  },
  {
    "wordkey": "opportunity",
    "exp": "They had an opportunity of going to America."
  },
  {
    "wordkey": "opportunity",
    "exp": "He goes there at every opportunity."
  },
  {
    "wordkey": "opportunity",
    "exp": "She had a golden opportunity to work for the corporation."
  },
  {
    "wordkey": "prize",
    "exp": "The prize for the winner was a luxury week abroad."
  },
  {
    "wordkey": "prize",
    "exp": "He won a prize for coming in first in the race."
  },
  {
    "wordkey": "prize",
    "exp": "In the end, Sheldon and Amy won the Nobel Prize in the field of physics."
  },
  {
    "wordkey": "race",
    "exp": "The race was about to start when he felt a sudden pain in his knee."
  },
  {
    "wordkey": "race",
    "exp": "She took part in a swimming race."
  },
  {
    "wordkey": "realize",
    "exp": "Suddenly, he realized that he had an appointment."
  },
  {
    "wordkey": "realize",
    "exp": "Do you realize how important this is?"
  },
  {
    "wordkey": "respond",
    "exp": "When the teacher asked those questions, no one could respond."
  },
  {
    "wordkey": "respond",
    "exp": "He was so upset that he responded by slamming the door."
  },
  {
    "wordkey": "respond",
    "exp": "Has she responded to the message yet?"
  },
  {
    "wordkey": "risk",
    "exp": "The risk of losing money is high in gambling."
  },
  {
    "wordkey": "risk",
    "exp": "They decided to take a risk and invest their money."
  },
  {
    "wordkey": "risk",
    "exp": "The entire region is at risk of flooding."
  },
  {
    "wordkey": "risk",
    "exp": "He finally allowed them to go there, but said they do so at their own risk."
  },
  {
    "wordkey": "risk",
    "exp": "They risked everything to start their own business."
  },
  {
    "wordkey": "wonder",
    "exp": "He was wondering about going to China."
  },
  {
    "wordkey": "wonder",
    "exp": "She was wondering where he was going."
  },
  {
    "wordkey": "wonder",
    "exp": "He wondered whether he could ask her out."
  },
  {
    "wordkey": "wonder",
    "exp": "After watching him performing those stunts, they were filled with wonder."
  },
  {
    "wordkey": "yet",
    "exp": "The project has yet to be done."
  },
  {
    "wordkey": "yet",
    "exp": "He was the best one yet, as no one had achieved better scores."
  },
  {
    "wordkey": "art",
    "exp": "They were looking at the art in the museum."
  },
  {
    "wordkey": "art",
    "exp": "The art class was filled with crayons and colorful pictures."
  },
  {
    "wordkey": "book",
    "exp": "She went to the bookstore to buy some biology books."
  },
  {
    "wordkey": "clothes",
    "exp": "It was snowing heavily, so she put on warm clothes."
  },
  {
    "wordkey": "clothes",
    "exp": "Once he arrived, he took off his clothes and grabbed a glass of water."
  },
  {
    "wordkey": "community",
    "exp": "Everyone in the local community knew him."
  },
  {
    "wordkey": "community",
    "exp": "The Chinese community worked well together."
  },
  {
    "wordkey": "community",
    "exp": "Nelson Mandela fought bravely for the black community."
  },
  {
    "wordkey": "community",
    "exp": "She had a sense of community and had been serving the locals with delicious food."
  },
  {
    "wordkey": "dinner",
    "exp": "He had his dinner and then went to watch a TV show."
  },
  {
    "wordkey": "end",
    "exp": "They ended the performance with a beautiful song."
  },
  {
    "wordkey": "end",
    "exp": "He ended his speech by proposing a toast."
  },
  {
    "wordkey": "end",
    "exp": "Their relationship came to an end after a bitter dispute."
  },
  {
    "wordkey": "end",
    "exp": "He wanted to bring an end to racial prejudice."
  },
  {
    "wordkey": "end",
    "exp": "They discussed what the best method was to approach the project, but in the end, they took the initial method."
  },
  {
    "wordkey": "exchange",
    "exp": "The purpose of the meeting was to exchange information."
  },
  {
    "wordkey": "exchange",
    "exp": "She said they could exchange addresses when they see each other on the second date."
  },
  {
    "wordkey": "exchange",
    "exp": "What do you want in exchange for the money?"
  },
  {
    "wordkey": "exchange",
    "exp": "During the meeting, there was an exchange of ideas about the project."
  },
  {
    "wordkey": "family",
    "exp": "They wanted to start a family together."
  },
  {
    "wordkey": "family",
    "exp": "Raising a family requires a lot of patience and dedication."
  },
  {
    "wordkey": "family",
    "exp": "He was working long hours to provide for his family."
  },
  {
    "wordkey": "family",
    "exp": "They had a close-knit family."
  },
  {
    "wordkey": "family",
    "exp": "She comes from a dysfunctional family."
  },
  {
    "wordkey": "from",
    "exp": "They started their journey from their apartment."
  },
  {
    "wordkey": "from",
    "exp": "The bus goes from uptown to downtown."
  },
  {
    "wordkey": "from",
    "exp": "He works from dawn till dusk."
  },
  {
    "wordkey": "from",
    "exp": "The shop will be open from 7 AM to 10 PM."
  },
  {
    "wordkey": "from",
    "exp": "From that day on, he promised himself not to drink alcohol anymore."
  },
  {
    "wordkey": "from",
    "exp": "He asked where she was coming from."
  },
  {
    "wordkey": "from",
    "exp": "They were trying to get in touch with someone from the company."
  },
  {
    "wordkey": "home",
    "exp": "By the time they arrived home, it was too late to catch the game."
  },
  {
    "wordkey": "home",
    "exp": "Phoebe left home when she was a child."
  },
  {
    "wordkey": "home",
    "exp": "His doctor told him to stay at home and rest for a few days."
  },
  {
    "wordkey": "start",
    "exp": "They started working on the project as soon as they could."
  },
  {
    "wordkey": "start",
    "exp": "He started learning Mandarin a few months ago."
  },
  {
    "wordkey": "start",
    "exp": "The movie starts with a poem."
  },
  {
    "wordkey": "start",
    "exp": "The trouble started after his death."
  },
  {
    "wordkey": "start",
    "exp": "He was skeptical from the start."
  },
  {
    "wordkey": "start",
    "exp": "They got off to a good start with the project."
  },
  {
    "wordkey": "together",
    "exp": "They were strolling through the park together."
  },
  {
    "wordkey": "together",
    "exp": "She started mixing the ingredients together to make the dough."
  },
  {
    "wordkey": "together",
    "exp": "Your shirt and jeans go well together."
  },
  {
    "wordkey": "wear",
    "exp": "She wore makeup and her best dress for the party."
  },
  {
    "wordkey": "wear",
    "exp": "What are you going to wear to the wedding?"
  },
  {
    "wordkey": "wear",
    "exp": "The performer had worn some jewels and rings."
  },
  {
    "wordkey": "wear",
    "exp": "He always wears a calm expression despite difficulties."
  },
  {
    "wordkey": "year",
    "exp": "It was the best year of her life when she was in Spain."
  },
  {
    "wordkey": "year",
    "exp": "They went to China last year."
  },
  {
    "wordkey": "appreciate",
    "exp": "They stood on top of the hill and appreciated the view."
  },
  {
    "wordkey": "appreciate",
    "exp": "They appreciate being in such lovely scenery."
  },
  {
    "wordkey": "appreciate",
    "exp": "She appreciated that he would do that for her."
  },
  {
    "wordkey": "available",
    "exp": "No chair was available, so he stood up to let the old man sit."
  },
  {
    "wordkey": "available",
    "exp": "They were planning to make gas available to the inhabitants."
  },
  {
    "wordkey": "beat",
    "exp": "They beat their opponents and are ready to go to the next stage."
  },
  {
    "wordkey": "beat",
    "exp": "She beat him at chess in a short time."
  },
  {
    "wordkey": "beat",
    "exp": "The victim was beaten to death."
  },
  {
    "wordkey": "bright",
    "exp": "A bright light was coming from a building nearby."
  },
  {
    "wordkey": "celebrate",
    "exp": "They celebrated when they found out that their son would go to MIT."
  },
  {
    "wordkey": "celebrate",
    "exp": "He decided to celebrate by inviting some of his friends to a slap-up dinner."
  },
  {
    "wordkey": "decide",
    "exp": "After a lengthy discussion, they decided to adopt a new approach."
  },
  {
    "wordkey": "decide",
    "exp": "In the end, the judge decided in favor of him."
  },
  {
    "wordkey": "disappear",
    "exp": "Suddenly, there were some menacing clouds that made the sun disappear."
  },
  {
    "wordkey": "disappear",
    "exp": "The assassin disappeared into the crowd, and they never found him again."
  },
  {
    "wordkey": "disappear",
    "exp": "After the event, he managed to disappear without a trace."
  },
  {
    "wordkey": "else",
    "exp": "Everyone else attended but him."
  },
  {
    "wordkey": "else",
    "exp": "The receptionist asked them if they needed anything else."
  },
  {
    "wordkey": "else",
    "exp": "They were looking for somewhere else to go for vacation."
  },
  {
    "wordkey": "else",
    "exp": "He had a ring in his pocket, so she thought he was going to propose to her; why else would he carry a ring?"
  },
  {
    "wordkey": "else",
    "exp": "I guess Joey ate all that jam. Who else could have eaten it?"
  },
  {
    "wordkey": "fair",
    "exp": "She tries to be fair with all her staff."
  },
  {
    "wordkey": "fair",
    "exp": "That was a fair decision to make."
  },
  {
    "wordkey": "fair",
    "exp": "He did his fair share of the work."
  },
  {
    "wordkey": "fair",
    "exp": "She won the game fair and square."
  },
  {
    "wordkey": "flow",
    "exp": "The rain flowed down the mountain and formed a brook."
  },
  {
    "wordkey": "flow",
    "exp": "The river flows through the jungle."
  },
  {
    "wordkey": "flow",
    "exp": "Traffic was flowing slowly on the highway."
  },
  {
    "wordkey": "forward",
    "exp": "The baby crawled forward to his mother."
  },
  {
    "wordkey": "forward",
    "exp": "From that day forward, he decided not to judge anyone."
  },
  {
    "wordkey": "forward",
    "exp": "I really look forward to the future."
  },
  {
    "wordkey": "hill",
    "exp": "The moon rose from behind the hill."
  },
  {
    "wordkey": "hill",
    "exp": "They stood on top of the hill and looked at the town."
  },
  {
    "wordkey": "level",
    "exp": "When the tide came in, the water level was higher."
  },
  {
    "wordkey": "level",
    "exp": "The level of the temperature was showing that he had a fever."
  },
  {
    "wordkey": "level",
    "exp": "In all languages, there are three main levels: basic, intermediate, and advanced."
  },
  {
    "wordkey": "level",
    "exp": "The way we addressed the issue was wrong on so many levels."
  },
  {
    "wordkey": "lone",
    "exp": "There was just a lone wolf in the entire area."
  },
  {
    "wordkey": "puddle",
    "exp": "After the shower, there was a small puddle on the ground."
  },
  {
    "wordkey": "response",
    "exp": "There was no response; she only stared at him."
  },
  {
    "wordkey": "response",
    "exp": "They went on strike in response to their bad management."
  },
  {
    "wordkey": "response",
    "exp": "Thanks to the speedy response, there was no loss of life."
  },
  {
    "wordkey": "season",
    "exp": "There are four seasons in a year."
  },
  {
    "wordkey": "season",
    "exp": "They were so happy because it was near the holiday season."
  },
  {
    "wordkey": "solution",
    "exp": "They needed a solution to that problem ASAP."
  },
  {
    "wordkey": "solution",
    "exp": "After a while, he managed to come up with a reasonable solution."
  },
  {
    "wordkey": "waste",
    "exp": "Trying to persuade him to hit the gym was a waste of time."
  },
  {
    "wordkey": "waste",
    "exp": "She made so much food that some of it went to waste."
  },
  {
    "wordkey": "waste",
    "exp": "He decided not to waste time and get on with his work."
  },
  {
    "wordkey": "waste",
    "exp": "She was wasting her money on unnecessary clothes."
  },
  {
    "wordkey": "whether",
    "exp": "It all depends on whether he can do it."
  },
  {
    "wordkey": "always",
    "exp": "They always go for a stroll in the park in the evening."
  },
  {
    "wordkey": "ask",
    "exp": "Every time the teacher asked a question, she was the first one to answer."
  },
  {
    "wordkey": "ask",
    "exp": "He kept asking questions about the issue."
  },
  {
    "wordkey": "ask",
    "exp": "She asked him to move the table."
  },
  {
    "wordkey": "ask",
    "exp": "His friend called him and asked for some money."
  },
  {
    "wordkey": "ask",
    "exp": "He was wondering if he could ask him a favor."
  },
  {
    "wordkey": "ask",
    "exp": "They wanted to ask his professional opinion about the matter."
  },
  {
    "wordkey": "banana",
    "exp": "For lunch, he had some bread, cheese, and a banana."
  },
  {
    "wordkey": "bread",
    "exp": "She bought a loaf of bread and some milk."
  },
  {
    "wordkey": "cake",
    "exp": "She baked a chocolate cake for his birthday."
  },
  {
    "wordkey": "carrot",
    "exp": "He went to the local store to get some carrots and chicken to make soup."
  },
  {
    "wordkey": "chocolate",
    "exp": "Kids usually love chocolate cookies."
  },
  {
    "wordkey": "contain",
    "exp": "The box that came in the mail contained two books."
  },
  {
    "wordkey": "contain",
    "exp": "They were looking for something to contain those pieces."
  },
  {
    "wordkey": "contain",
    "exp": "People who have diabetes should avoid everything that contains sugar."
  },
  {
    "wordkey": "delicious",
    "exp": "The meal was so delicious that he ate an extra dish."
  },
  {
    "wordkey": "diet",
    "exp": "She had put on weight, so she decided to go on a diet."
  },
  {
    "wordkey": "diet",
    "exp": "Since he was a great athlete, he was trying to maintain a balanced diet."
  },
  {
    "wordkey": "diet",
    "exp": "Professional athletes usually eat a very strict diet."
  },
  {
    "wordkey": "eat",
    "exp": "Eating enough protein and minerals can help you stay healthy."
  },
  {
    "wordkey": "fruit",
    "exp": "We should consume more fruits and vegetables if we want to be healthy."
  },
  {
    "wordkey": "great",
    "exp": "Have you ever been on the great wall."
  },
  {
    "wordkey": "great",
    "exp": "It was such a great pleasure to be there with them."
  },
  {
    "wordkey": "great",
    "exp": "They felt a great sorrow for their deceased daughter."
  },
  {
    "wordkey": "great",
    "exp": "He was a great artist and became famous in no time."
  },
  {
    "wordkey": "great",
    "exp": "They spent a great deal of energy trying to clean the area."
  },
  {
    "wordkey": "health",
    "exp": "We should take care of our health."
  },
  {
    "wordkey": "health",
    "exp": "Smoking is bad for your health."
  },
  {
    "wordkey": "health",
    "exp": "She was working in a health facility."
  },
  {
    "wordkey": "recipe",
    "exp": "She prepared all the ingredients and tried to follow the recipe."
  },
  {
    "wordkey": "recipe",
    "exp": "It was a recipe for a chocolate cake."
  },
  {
    "wordkey": "restaurant",
    "exp": "They went to a Chinese restaurant to try something new."
  },
  {
    "wordkey": "special",
    "exp": "The car had some special features that made it different from the other one."
  },
  {
    "wordkey": "special",
    "exp": "It was a special day, so they celebrated by taking a trip."
  },
  {
    "wordkey": "water",
    "exp": "About 70 percent of Earth is covered with water."
  },
  {
    "wordkey": "alive",
    "exp": "My grandparents are still alive."
  },
  {
    "wordkey": "alive",
    "exp": "They kept him alive by using a machine."
  },
  {
    "wordkey": "bone",
    "exp": "The dog was digging a hole to hide its bone."
  },
  {
    "wordkey": "bone",
    "exp": "He broke a bone falling from a ladder."
  },
  {
    "wordkey": "bother",
    "exp": "Does it bother you if I speak with my friend on the phone?"
  },
  {
    "wordkey": "captain",
    "exp": "The captain told them to turn the sailcloth to catch the wind."
  },
  {
    "wordkey": "conclusion",
    "exp": "At the conclusion, he sped up and managed to win the race."
  },
  {
    "wordkey": "conclusion",
    "exp": "At the end of the meeting, they reached the conclusion that they needed to put up some hidden cameras."
  },
  {
    "wordkey": "conclusion",
    "exp": "In conclusion, we all need to make time for our physical well-being."
  },
  {
    "wordkey": "doubt",
    "exp": "She had doubts that he was really in love with her."
  },
  {
    "wordkey": "doubt",
    "exp": "It has cast doubt on the effectiveness of the method."
  },
  {
    "wordkey": "doubt",
    "exp": "He is, without a doubt, the best member of the team."
  },
  {
    "wordkey": "doubt",
    "exp": "I doubt if we can make it with a different type of material."
  },
  {
    "wordkey": "doubt",
    "exp": "She doubted that he was being sincere about the issue."
  },
  {
    "wordkey": "explore",
    "exp": "They wanted to explore the area to see if they could find anything unusual."
  },
  {
    "wordkey": "explore",
    "exp": "They use robots to explore the surface of Mars."
  },
  {
    "wordkey": "explore",
    "exp": "He made a device that could help students explore scientific ideas."
  },
  {
    "wordkey": "glad",
    "exp": "He was so glad to see her at that time."
  },
  {
    "wordkey": "glad",
    "exp": "They were glad that they could find him."
  },
  {
    "wordkey": "however",
    "exp": "If he puts his mind to something, he will get it however difficult it is."
  },
  {
    "wordkey": "however",
    "exp": "However tired she is, she always keeps working until the work is done."
  },
  {
    "wordkey": "injustice",
    "exp": "Some poor children are suffering from injustice."
  },
  {
    "wordkey": "international",
    "exp": "English is an international language."
  },
  {
    "wordkey": "lawyer",
    "exp": "Mitchell was a lawyer and used to work for a private company."
  },
  {
    "wordkey": "lawyer",
    "exp": "He refused to speak and wanted to talk to his lawyer first."
  },
  {
    "wordkey": "mention",
    "exp": "The doctor mentioned the importance of exercise."
  },
  {
    "wordkey": "mention",
    "exp": "At the conclusion of his speech, he mentioned that he wanted to retire sooner."
  },
  {
    "wordkey": "mention",
    "exp": "He mentioned knowing someone in that field."
  },
  {
    "wordkey": "old",
    "exp": "The little kid thought he was old enough to go there alone."
  },
  {
    "wordkey": "old",
    "exp": "As they got older, they realized how important it is to appreciate their parents."
  },
  {
    "wordkey": "old",
    "exp": "His computer was getting old and slow, so he decided to buy a new one."
  },
  {
    "wordkey": "policy",
    "exp": "Make sure to read the policy before signing any contract."
  },
  {
    "wordkey": "policy",
    "exp": "The firm introduced a new policy that improved employee satisfaction."
  },
  {
    "wordkey": "social",
    "exp": "You should take part in some social activities instead of sitting at home all day."
  },
  {
    "wordkey": "speech",
    "exp": "Ross made a speech, but Chandler ruined it."
  },
  {
    "wordkey": "speech",
    "exp": "He gave a speech to the public."
  },
  {
    "wordkey": "speech",
    "exp": "Her speech was slurred, as she had been drinking."
  },
  {
    "wordkey": "staff",
    "exp": "He was on the technical staff in the company."
  },
  {
    "wordkey": "staff",
    "exp": "They had a staff of four at the office."
  },
  {
    "wordkey": "toward",
    "exp": "The trend is toward loose clothing nowadays."
  },
  {
    "wordkey": "wood",
    "exp": "They needed some wood to make the house warm."
  },
  {
    "wordkey": "wood",
    "exp": "There was a plank of wood on the floor."
  },
  {
    "wordkey": "achieve",
    "exp": "He was glad to achieve his goals after all that hard work."
  },
  {
    "wordkey": "achieve",
    "exp": "If we keep up working, we will achieve our ambitions."
  },
  {
    "wordkey": "advise",
    "exp": "He advised the boy to learn from his mistakes."
  },
  {
    "wordkey": "advise",
    "exp": "The doctor strongly advised her against eating junk food."
  },
  {
    "wordkey": "advise",
    "exp": "His father advised him on vigorous exercise."
  },
  {
    "wordkey": "already",
    "exp": "They asked him to do that for them, but he had already done it."
  },
  {
    "wordkey": "already",
    "exp": "She just ate a piece of cake, and she was already full."
  },
  {
    "wordkey": "basic",
    "exp": "This is just basic English; we need to learn a lot more."
  },
  {
    "wordkey": "basic",
    "exp": "He just had a basic command of Mandarin, but he was working on it."
  },
  {
    "wordkey": "bit",
    "exp": "Try to do a bit of exercise every single day."
  },
  {
    "wordkey": "bit",
    "exp": "She ate just a little bit and dashed out."
  },
  {
    "wordkey": "consider",
    "exp": "We need to consider all the facts before making any decision."
  },
  {
    "wordkey": "destroy",
    "exp": "He knocked over a vase and destroyed it."
  },
  {
    "wordkey": "destroy",
    "exp": "After the hurricane, the shed was totally destroyed."
  },
  {
    "wordkey": "entertain",
    "exp": "Before the speech, he entertained the crowd with some tricks."
  },
  {
    "wordkey": "entertain",
    "exp": "They had a magician entertain them."
  },
  {
    "wordkey": "extra",
    "exp": "They had extra clothes, so they donated them to some homeless people."
  },
  {
    "wordkey": "extra",
    "exp": "The company gave him extra money as a reward for his great work."
  },
  {
    "wordkey": "extra",
    "exp": "He was paid extra for working on the machinery."
  },
  {
    "wordkey": "goal",
    "exp": "Her goal was to become a great doctor."
  },
  {
    "wordkey": "goal",
    "exp": "They were all working toward their goal."
  },
  {
    "wordkey": "goal",
    "exp": "Eventually, he achieved his goal of winning the Nobel Prize in physics."
  },
  {
    "wordkey": "lie",
    "exp": "He was lying to them about the accident."
  },
  {
    "wordkey": "lie",
    "exp": "She was lying through her teeth about the incident."
  },
  {
    "wordkey": "meat",
    "exp": "They ordered medium-rare meat."
  },
  {
    "wordkey": "meat",
    "exp": "She made rice and tender meat for dinner."
  },
  {
    "wordkey": "opinion",
    "exp": "She expressed her opinion about the matter."
  },
  {
    "wordkey": "opinion",
    "exp": "They had a heated discussion because of a difference of opinion."
  },
  {
    "wordkey": "real",
    "exp": "There was a real danger, and they needed to be careful about it."
  },
  {
    "wordkey": "real",
    "exp": "Those gigantic creatures were real at one time in the past."
  },
  {
    "wordkey": "reflect",
    "exp": "The water on the puddle reflected his picture."
  },
  {
    "wordkey": "reflect",
    "exp": "A bright light was reflected in the mirror."
  },
  {
    "wordkey": "reflect",
    "exp": "She said that she needed time to reflect on the offer."
  },
  {
    "wordkey": "regard",
    "exp": "This type of behavior is generally regarded as discourteous."
  },
  {
    "wordkey": "regard",
    "exp": "He regards it as a minor problem."
  },
  {
    "wordkey": "regard",
    "exp": "She has no regard for the poor."
  },
  {
    "wordkey": "regard",
    "exp": "They all hold him in high regard after getting to know him."
  },
  {
    "wordkey": "regard",
    "exp": "He asked her to send his regards to her family."
  },
  {
    "wordkey": "regard",
    "exp": "With regard to the meeting, we ought to ensure everyone has heard about it."
  },
  {
    "wordkey": "serve",
    "exp": "The hostess served her guests with wine and olives."
  },
  {
    "wordkey": "serve",
    "exp": "He served in the army for about a decade."
  },
  {
    "wordkey": "vegetable",
    "exp": "She wanted to make vegetable soup."
  },
  {
    "wordkey": "vegetable",
    "exp": "The farmer grew a lot of root vegetables."
  },
  {
    "wordkey": "war",
    "exp": "When war broke out, dozens of people emigrated."
  },
  {
    "wordkey": "war",
    "exp": "After a while, they declared an all-out war."
  },
  {
    "wordkey": "war",
    "exp": "They tried their best to avert war."
  },
  {
    "wordkey": "war",
    "exp": "New troops were getting ready to go to war."
  },
  {
    "wordkey": "worth",
    "exp": "His house is worth a billion dollars."
  },
  {
    "wordkey": "worth",
    "exp": "That movie is worth watching."
  },
  {
    "wordkey": "appear",
    "exp": "Suddenly, a deer appeared behind the window."
  },
  {
    "wordkey": "appear",
    "exp": "The author wanted to show his appreciation by having their names appear in the preface."
  },
  {
    "wordkey": "appear",
    "exp": "The culprit and plaintiff appeared in court for the trial."
  },
  {
    "wordkey": "appear",
    "exp": "He appeared to be excited about the plan."
  },
  {
    "wordkey": "appear",
    "exp": "She appeared very kind and friendly."
  },
  {
    "wordkey": "appear",
    "exp": "It appears that they know all about it."
  },
  {
    "wordkey": "appear",
    "exp": "There appears to be some kind of party."
  },
  {
    "wordkey": "appear",
    "exp": "It appeared as if she was aware of what was about to happen."
  },
  {
    "wordkey": "appear",
    "exp": "Do they know about it? It appears not."
  },
  {
    "wordkey": "base",
    "exp": "The base of the structure must be built very carefully."
  },
  {
    "wordkey": "base",
    "exp": "At the base of the mountain was a small lake."
  },
  {
    "wordkey": "brain",
    "exp": "After the incident, he underwent surgery on his brain."
  },
  {
    "wordkey": "brain",
    "exp": "At the age of 45, she died from a brain tumor."
  },
  {
    "wordkey": "brain",
    "exp": "He was acting as if he was the brains of the group."
  },
  {
    "wordkey": "career",
    "exp": "After a few years, his career took off."
  },
  {
    "wordkey": "career",
    "exp": "He managed to get into a brilliant career."
  },
  {
    "wordkey": "career",
    "exp": "They both embarked on a new career together."
  },
  {
    "wordkey": "career",
    "exp": "He was at the peak of his career when he decided to switch to a career in technology."
  },
  {
    "wordkey": "clerk",
    "exp": "Initially, he was just a junior office clerk."
  },
  {
    "wordkey": "clerk",
    "exp": "She took the stuff she needed to the clerk and paid by cash."
  },
  {
    "wordkey": "effort",
    "exp": "He made a great effort to master English."
  },
  {
    "wordkey": "effort",
    "exp": "She put a lot of effort into cleaning the house."
  },
  {
    "wordkey": "effort",
    "exp": "In his effort to learn English, he read several textbooks repeatedly."
  },
  {
    "wordkey": "enter",
    "exp": "As the players entered the field, the spectators cheered."
  },
  {
    "wordkey": "enter",
    "exp": "They entered the farm through the gate."
  },
  {
    "wordkey": "enter",
    "exp": "The police entered the building by the emergency door."
  },
  {
    "wordkey": "enter",
    "exp": "The giraffe collapsed after just a few seconds when the tranquilizer entered its bloodstream."
  },
  {
    "wordkey": "excellent",
    "exp": "After they finished painting, the room was in excellent condition."
  },
  {
    "wordkey": "excellent",
    "exp": "It was an excellent performance."
  },
  {
    "wordkey": "hero",
    "exp": "Rango became an accidental hero when he killed an eagle with just one shot."
  },
  {
    "wordkey": "hero",
    "exp": "Nelson Mandela was a real hero who fought for the liberty of the black community."
  },
  {
    "wordkey": "hurry",
    "exp": "He hurried to get home to catch the final match."
  },
  {
    "wordkey": "hurry",
    "exp": "When she heard about the accident, she hurried back to see what happened."
  },
  {
    "wordkey": "inform",
    "exp": "He informed his boss that he wanted to quit the position."
  },
  {
    "wordkey": "inform",
    "exp": "She asked them to keep her informed about the project."
  },
  {
    "wordkey": "later",
    "exp": "She told them to go ahead and she would come along later."
  },
  {
    "wordkey": "later",
    "exp": "Later that day, he saw her talking with somebody on the phone."
  },
  {
    "wordkey": "leave",
    "exp": "She left the group and went to talk to her friend."
  },
  {
    "wordkey": "leave",
    "exp": "After they packed their stuff, they left for the airport."
  },
  {
    "wordkey": "leave",
    "exp": "He told them to leave him alone."
  },
  {
    "wordkey": "locate",
    "exp": "The room was very messy, which made it even harder to locate the card."
  },
  {
    "wordkey": "locate",
    "exp": "Their apartment was located near a small park."
  },
  {
    "wordkey": "locate",
    "exp": "Their second home was located in a remote area near the ocean."
  },
  {
    "wordkey": "locate",
    "exp": "The Statue of Liberty is located on Liberty Island in NYC."
  },
  {
    "wordkey": "nurse",
    "exp": "He asked the nurse to bring him some water."
  },
  {
    "wordkey": "nurse",
    "exp": "When she came to, there was a nurse standing beside her bed."
  },
  {
    "wordkey": "operation",
    "exp": "She had an operation on her left arm."
  },
  {
    "wordkey": "operation",
    "exp": "After the apartment collapsed, they launched a rescue operation."
  },
  {
    "wordkey": "operation",
    "exp": "The military operation was successful."
  },
  {
    "wordkey": "operation",
    "exp": "They were waiting outside the operation theater."
  },
  {
    "wordkey": "pain",
    "exp": "Once he lifted the box, he felt a sharp pain in his back."
  },
  {
    "wordkey": "pain",
    "exp": "She was suffering from constant pain in her shoulder."
  },
  {
    "wordkey": "pain",
    "exp": "The poor dog was in acute pain."
  },
  {
    "wordkey": "pain",
    "exp": "When he fell from the ladder, he suffered excruciating pain."
  },
  {
    "wordkey": "refuse",
    "exp": "The kids refused to tell us what happened."
  },
  {
    "wordkey": "refuse",
    "exp": "His car was in such poor condition that it refused to start."
  },
  {
    "wordkey": "though",
    "exp": "Even though he was under the weather, he refused to stay home and wanted to attend the session."
  },
  {
    "wordkey": "various",
    "exp": "The video shop had various movies."
  },
  {
    "wordkey": "various",
    "exp": "He wanted to help, though he had various problems on his own."
  },
  {
    "wordkey": "various",
    "exp": "Around the main square were various types of shops."
  },
  {
    "wordkey": "various",
    "exp": "For various reasons, they decided to move to a neighboring area."
  },
  {
    "wordkey": "actual",
    "exp": "He thought he was lying, but those were their actual words."
  },
  {
    "wordkey": "actual",
    "exp": "That was an actual story."
  },
  {
    "wordkey": "actual",
    "exp": "I assumed she was Korean, but in actual fact she was Chinese."
  },
  {
    "wordkey": "amaze",
    "exp": "They were amazed by how strong he was."
  },
  {
    "wordkey": "amaze",
    "exp": "It amazed them that he had learned English to such a high level."
  },
  {
    "wordkey": "amaze",
    "exp": "It amazed his colleague to know that he had already done the task."
  },
  {
    "wordkey": "charge",
    "exp": "The charge for the suit was 500 dollars."
  },
  {
    "wordkey": "charge",
    "exp": "He thought there was no charge for kids."
  },
  {
    "wordkey": "charge",
    "exp": "There was an admission charge of 10 bucks."
  },
  {
    "wordkey": "charge",
    "exp": "She served him free of charge."
  },
  {
    "wordkey": "charge",
    "exp": "They charged him with murder."
  },
  {
    "wordkey": "comfort",
    "exp": "He usually ate dinner in the comfort of his room while watching a TV show."
  },
  {
    "wordkey": "comfort",
    "exp": "She was being comforted by her friends."
  },
  {
    "wordkey": "comfort",
    "exp": "He comforted her by taking her out for a nice evening."
  },
  {
    "wordkey": "contact",
    "exp": "If the chemical contacts your skin, you should wash it carefully."
  },
  {
    "wordkey": "contact",
    "exp": "Please contanct me at this number if you need any help."
  },
  {
    "wordkey": "contact",
    "exp": "She contacted him about the issue."
  },
  {
    "wordkey": "contact",
    "exp": "We ought to keep in contact after the course."
  },
  {
    "wordkey": "contact",
    "exp": "He wanted to make contact with him, but he had lost his contact number."
  },
  {
    "wordkey": "contact",
    "exp": "He was feeling itchy ever since he came in contact with that plant in the forest."
  },
  {
    "wordkey": "customer",
    "exp": "He was a regular customer just because of a girl who was working there."
  },
  {
    "wordkey": "deliver",
    "exp": "They delivered some flowers to her office."
  },
  {
    "wordkey": "deliver",
    "exp": "A small box was delivered this afternoon."
  },
  {
    "wordkey": "earn",
    "exp": "He earns about 10 thousand dollars each month."
  },
  {
    "wordkey": "earn",
    "exp": "She earns a living from music."
  },
  {
    "wordkey": "earn",
    "exp": "He earned the admiration of his supervisor."
  },
  {
    "wordkey": "gate",
    "exp": "The gate was locked, and they had to call the janitor to open it."
  },
  {
    "wordkey": "gate",
    "exp": "There was a wooden gate at the entrance of his ranch."
  },
  {
    "wordkey": "include",
    "exp": "They decided to include him on the team."
  },
  {
    "wordkey": "include",
    "exp": "All three meals are included in the price."
  },
  {
    "wordkey": "include",
    "exp": "Your responsibility in this post includes dealing with the staff and taking care of the office."
  },
  {
    "wordkey": "manage",
    "exp": "They asked him if he had managed any project before."
  },
  {
    "wordkey": "manage",
    "exp": "We need to be good at managing our time if we want to be successful."
  },
  {
    "wordkey": "manage",
    "exp": "They gave him a promotion since he had managed his wing so well."
  },
  {
    "wordkey": "manage",
    "exp": "He managed to get there in the nick of time."
  },
  {
    "wordkey": "manage",
    "exp": "No matter how difficult the task is, he somehow manages to complete it successfully."
  },
  {
    "wordkey": "mystery",
    "exp": "Sherlock wanted to solve the mystery, so he went to the village to look into the crime."
  },
  {
    "wordkey": "mystery",
    "exp": "It was a complete mystery to the little boy that the old man was working with that machinery."
  },
  {
    "wordkey": "mystery",
    "exp": "It was such a mystery to her why her parents were arguing over that matter."
  },
  {
    "wordkey": "mystery",
    "exp": "His death still remains shrouded in mystery."
  },
  {
    "wordkey": "mystery",
    "exp": "The folklore is cloaked in mystery, captivating the curiosity of a lot of people."
  },
  {
    "wordkey": "occur",
    "exp": "The accident occurred at night."
  },
  {
    "wordkey": "occur",
    "exp": "If any of the symptoms occurred, see a doctor ASAP."
  },
  {
    "wordkey": "opposite",
    "exp": "The opposite of left is right."
  },
  {
    "wordkey": "opposite",
    "exp": "That was the opposite of what I thought."
  },
  {
    "wordkey": "opposite",
    "exp": "The drug appeared to have the opposite effect."
  },
  {
    "wordkey": "opposite",
    "exp": "His apartment was opposite to hers."
  },
  {
    "wordkey": "plate",
    "exp": "The plate slipped from his hand and shattered."
  },
  {
    "wordkey": "plate",
    "exp": "She put some spaghetti on the plate and began eating."
  },
  {
    "wordkey": "plate",
    "exp": "They were washing dirty plates after dinner."
  },
  {
    "wordkey": "receive",
    "exp": "He received a small box containing a letter and a book."
  },
  {
    "wordkey": "receive",
    "exp": "She received a call from her friend."
  },
  {
    "wordkey": "reward",
    "exp": "They gave him a reward for all his hard work."
  },
  {
    "wordkey": "reward",
    "exp": "There was a reward for whoever could solve the problem first."
  },
  {
    "wordkey": "set",
    "exp": "He set the plate on the table and went to grab some yogurt."
  },
  {
    "wordkey": "set",
    "exp": "She filled out the form and set the pen on it."
  },
  {
    "wordkey": "set",
    "exp": "After a while, they decided to set the animal free."
  },
  {
    "wordkey": "set",
    "exp": "He made some inadvertent mistakes, but his teacher was kind enough to give him a chance to set it right."
  },
  {
    "wordkey": "set",
    "exp": "An arson is someone who deliberately sets things on fire."
  },
  {
    "wordkey": "set",
    "exp": "There was a set of dices on the board."
  },
  {
    "wordkey": "set",
    "exp": "They bought the young couple a set of cutlery as a wedding present."
  },
  {
    "wordkey": "steal",
    "exp": "They stole everything valuable they could find."
  },
  {
    "wordkey": "steal",
    "exp": "He stole money from her bag."
  },
  {
    "wordkey": "thief",
    "exp": "The police were looking for the thief."
  },
  {
    "wordkey": "thief",
    "exp": "The thieves stole some money and jewelry."
  },
  {
    "wordkey": "advance",
    "exp": "We have advanced our knowledge of English."
  },
  {
    "wordkey": "advance",
    "exp": "The enemy had advanced on the town."
  },
  {
    "wordkey": "advance",
    "exp": "Nothing should stop the advance of the human civilization."
  },
  {
    "wordkey": "advance",
    "exp": "Advances in technology have made them more hopeful."
  },
  {
    "wordkey": "advance",
    "exp": "She asked for a few hundred bucks advance on her salary."
  },
  {
    "wordkey": "athlete",
    "exp": "At the age of 18, he was a professional athlete and won several medals."
  },
  {
    "wordkey": "average",
    "exp": "His height is about average."
  },
  {
    "wordkey": "average",
    "exp": "Everyone in the town earned about 2 or 3 thousand dollars, but his salary was above average."
  },
  {
    "wordkey": "average",
    "exp": "It was just an average apartment, nothing fancy."
  },
  {
    "wordkey": "behavior",
    "exp": "His behavior was pretty good."
  },
  {
    "wordkey": "behavior",
    "exp": "He told him to watch his behavior."
  },
  {
    "wordkey": "behind",
    "exp": "They were playing seek and hide, and he hid behind a chair."
  },
  {
    "wordkey": "behind",
    "exp": "She was walking behind them."
  },
  {
    "wordkey": "behind",
    "exp": "He got behind on the rent, as he had lost all his money."
  },
  {
    "wordkey": "course",
    "exp": "He did a computer course in the summer."
  },
  {
    "wordkey": "course",
    "exp": "She took a swimming course during her free time."
  },
  {
    "wordkey": "course",
    "exp": "They went on a course in culinary arts."
  },
  {
    "wordkey": "course",
    "exp": "He lost his club somewhere in the golf course."
  },
  {
    "wordkey": "lower",
    "exp": "She was blushing and lowered her eyes."
  },
  {
    "wordkey": "lower",
    "exp": "When they realized they were asleep, they lowered their voice."
  },
  {
    "wordkey": "lower",
    "exp": "He was so tired that he lowered himself to bed and dozed off."
  },
  {
    "wordkey": "lower",
    "exp": "After a while, they had no choice but to lower the price."
  },
  {
    "wordkey": "lower",
    "exp": "He felt a sudden pain in the lower part of his leg."
  },
  {
    "wordkey": "match",
    "exp": "His pants and shirt matched so well."
  },
  {
    "wordkey": "match",
    "exp": "They were a perfect match for each other."
  },
  {
    "wordkey": "member",
    "exp": "She became an integral member of the team."
  },
  {
    "wordkey": "member",
    "exp": "He was a member of a bowling club."
  },
  {
    "wordkey": "mental",
    "exp": "He was suffering from a mental illness."
  },
  {
    "wordkey": "mental",
    "exp": "The doctor asked if she had any mental disorder lately."
  },
  {
    "wordkey": "passenger",
    "exp": "A few passengers were waiting for the train."
  },
  {
    "wordkey": "personality",
    "exp": "Their grandfather had a very kind personality."
  },
  {
    "wordkey": "personality",
    "exp": "He had a bubbling personality."
  },
  {
    "wordkey": "personality",
    "exp": "She had a vivacious personality."
  },
  {
    "wordkey": "poem",
    "exp": "He was a great poet and wrote several moving poems."
  },
  {
    "wordkey": "pole",
    "exp": "The flag was fluttering from the pole."
  },
  {
    "wordkey": "remove",
    "exp": "She used some detergent to remove the stain."
  },
  {
    "wordkey": "remove",
    "exp": "He removed the nail from the wall."
  },
  {
    "wordkey": "safety",
    "exp": "For your own safety, please fasten your seatbelt."
  },
  {
    "wordkey": "safety",
    "exp": "The enemy advanced on the town, and they ran for safety."
  },
  {
    "wordkey": "safety",
    "exp": "They were concerned for the safety of the nestlings."
  },
  {
    "wordkey": "safety",
    "exp": "To them, it was a place of safety."
  },
  {
    "wordkey": "shoot",
    "exp": "They began shooting at one another."
  },
  {
    "wordkey": "shoot",
    "exp": "The archer was shooting at the target."
  },
  {
    "wordkey": "shoot",
    "exp": "The victim was shot three times."
  },
  {
    "wordkey": "sound",
    "exp": "Suddenly, the bell sounded and woke him up."
  },
  {
    "wordkey": "sound",
    "exp": "The alarm clock went off and made a sound."
  },
  {
    "wordkey": "sound",
    "exp": "The sound of the music travelled through the neighborhood."
  },
  {
    "wordkey": "sound",
    "exp": "His explanation sounded strange, leaving them skeptical."
  },
  {
    "wordkey": "sound",
    "exp": "She sounded angry, so he steered the conversation away."
  },
  {
    "wordkey": "sound",
    "exp": "What you just said sounds like a good idea to me."
  },
  {
    "wordkey": "sound",
    "exp": "After the inspection, the engineer confirmed that the engine was sound."
  },
  {
    "wordkey": "swim",
    "exp": "He goes to the pool to swim every morning."
  },
  {
    "wordkey": "swim",
    "exp": "She swims like a fish and can take part in the Olympic."
  },
  {
    "wordkey": "swim",
    "exp": "They wanted to go swimming in the evening."
  },
  {
    "wordkey": "web",
    "exp": "The spider was spinning a web on a tree limb."
  },
  {
    "wordkey": "web",
    "exp": "There were spider webs in the corner of the garage."
  },
  {
    "wordkey": "block",
    "exp": "There was a block of ice on the floor."
  },
  {
    "wordkey": "block",
    "exp": "Every day, he would go jogging around the block."
  },
  {
    "wordkey": "block",
    "exp": "A terrible accident happened and block the highway."
  },
  {
    "wordkey": "block",
    "exp": "The tall trees blocked the view of the palace."
  },
  {
    "wordkey": "bury",
    "exp": "They buried him in a grave in the cemetery."
  },
  {
    "wordkey": "bury",
    "exp": "The pirates were looking for buried treasure."
  },
  {
    "wordkey": "cheer",
    "exp": "The spectators were cheering their teams."
  },
  {
    "wordkey": "cheer",
    "exp": "His family went to watch the game and cheer him on."
  },
  {
    "wordkey": "cheer",
    "exp": "A loud cheer rose from the audience at the end of his speech."
  },
  {
    "wordkey": "cheer",
    "exp": "A hot bowl of soup with his family filled him with cheer."
  },
  {
    "wordkey": "complex",
    "exp": "His coach told him to consume complex carbohydrate before exercise."
  },
  {
    "wordkey": "complex",
    "exp": "They went to hang around in the leisure complex."
  },
  {
    "wordkey": "critic",
    "exp": "His movie was highly recommended by critics."
  },
  {
    "wordkey": "direction",
    "exp": "She went in the direction of the school."
  },
  {
    "wordkey": "direction",
    "exp": "When they saw the pirates, they ran in the opposite direction."
  },
  {
    "wordkey": "event",
    "exp": "It was such a happy event that he threw a party to celebrate."
  },
  {
    "wordkey": "event",
    "exp": "There was a series of events during that time."
  },
  {
    "wordkey": "event",
    "exp": "It appeared that there was a sports event."
  },
  {
    "wordkey": "exercise",
    "exp": "This workout will exercise several different parts of the body."
  },
  {
    "wordkey": "exercise",
    "exp": "Before exercise, we should warm up."
  },
  {
    "wordkey": "exercise",
    "exp": "She was doing her leg exercise that day."
  },
  {
    "wordkey": "exercise",
    "exp": "We should take regular vigorous exercise if we want to build up more muscle."
  },
  {
    "wordkey": "friendship",
    "exp": "They had a long-standing friendship, and they both trusted each other."
  },
  {
    "wordkey": "friendship",
    "exp": "He struck up a friendship with the newcomer."
  },
  {
    "wordkey": "friendship",
    "exp": "During the trip, their friendship was spoiled."
  },
  {
    "wordkey": "friendship",
    "exp": "Their friendship grew after the event."
  },
  {
    "wordkey": "friendship",
    "exp": "They developed a friendship during the picnic."
  },
  {
    "wordkey": "guide",
    "exp": "They were lost, but luckily they found a guide."
  },
  {
    "wordkey": "guide",
    "exp": "The guide led them through the jungle."
  },
  {
    "wordkey": "guide",
    "exp": "He guided her through the complex tasks."
  },
  {
    "wordkey": "lack",
    "exp": "There was a lack of confidence in his personality."
  },
  {
    "wordkey": "lack",
    "exp": "The candidate had a lack of knowledge."
  },
  {
    "wordkey": "lack",
    "exp": "Their team lacked a database manager."
  },
  {
    "wordkey": "perform",
    "exp": "They were rehearsing so as to perform well."
  },
  {
    "wordkey": "perform",
    "exp": "New computers are able to perform complex tasks."
  },
  {
    "wordkey": "pressure",
    "exp": "Apply pressure on the wound to stop bleeding."
  },
  {
    "wordkey": "pressure",
    "exp": "He was under a lot of pressure during that time."
  },
  {
    "wordkey": "pressure",
    "exp": "The senator put pressure on him to get married with his daughter."
  },
  {
    "wordkey": "probably",
    "exp": "He probably wants to make some food with those ingredients."
  },
  {
    "wordkey": "public",
    "exp": "There was a public bathroom in the park."
  },
  {
    "wordkey": "public",
    "exp": "It was in the public interest to make a recreational area."
  },
  {
    "wordkey": "public",
    "exp": "Public opinion was against the idea."
  },
  {
    "wordkey": "public",
    "exp": "The result of the scrutiny was made public after a few days."
  },
  {
    "wordkey": "public",
    "exp": "They ran an article about the disease to increase public awareness."
  },
  {
    "wordkey": "smart",
    "exp": "Since she was a smart student, she could easily solve the problem."
  },
  {
    "wordkey": "smart",
    "exp": "He check mated his opponent with a smart move."
  },
  {
    "wordkey": "smart",
    "exp": "That was the smartest decision he had ever made."
  },
  {
    "wordkey": "strike",
    "exp": "He struck his opponent on the face."
  },
  {
    "wordkey": "strike",
    "exp": "The shed was struck by lightning and burned down."
  },
  {
    "wordkey": "strike",
    "exp": "When a massive earthquake struck, several houses were severely damaged."
  },
  {
    "wordkey": "strike",
    "exp": "They were striking for a better payment."
  },
  {
    "wordkey": "strike",
    "exp": "A lot of workers went on strike due to low wages."
  },
  {
    "wordkey": "support",
    "exp": "They went there to support their children."
  },
  {
    "wordkey": "support",
    "exp": "His colleague supported his new idea."
  },
  {
    "wordkey": "support",
    "exp": "She gave him her full support."
  },
  {
    "wordkey": "term",
    "exp": "That was a new term that spread around the office."
  },
  {
    "wordkey": "term",
    "exp": "The criminal had to serve a short term in jail."
  },
  {
    "wordkey": "term",
    "exp": "The lease for the apartment was a term of one year."
  },
  {
    "wordkey": "term",
    "exp": "They agreed on a term of two years for the service."
  },
  {
    "wordkey": "term",
    "exp": "This method of learning is way better in the long term."
  },
  {
    "wordkey": "unite",
    "exp": "After a long fight, they finally decided to unite and work together."
  },
  {
    "wordkey": "unite",
    "exp": "They agreed to unite in support of the community event."
  },
  {
    "wordkey": "associate",
    "exp": "They associate money with happiness."
  },
  {
    "wordkey": "associate",
    "exp": "As an associate of the CEO, he had access to confidential information."
  },
  {
    "wordkey": "environment",
    "exp": "We should keep our environment clean."
  },
  {
    "wordkey": "environment",
    "exp": "He had no problem with the job per se; it was more about the working environment."
  },
  {
    "wordkey": "factory",
    "exp": "He managed to find a job in a factory."
  },
  {
    "wordkey": "factory",
    "exp": "There was a textile factory beside his block."
  },
  {
    "wordkey": "feature",
    "exp": "One feature of this smart phone is the lens used in its camera."
  },
  {
    "wordkey": "feature",
    "exp": "High speed is a typical feature of the cheetah."
  },
  {
    "wordkey": "instance",
    "exp": "The tiger is an instance of a cannibal."
  },
  {
    "wordkey": "instance",
    "exp": "There are some instances of anger in the movie."
  },
  {
    "wordkey": "involve",
    "exp": "They were all involved in painting the house."
  },
  {
    "wordkey": "involve",
    "exp": "Learning a foreign language involves reading and practicing for a long time."
  },
  {
    "wordkey": "involve",
    "exp": "The earthquake involved three families during the evacuation process."
  },
  {
    "wordkey": "involve",
    "exp": "The new policy would involve all the employees in the firm."
  },
  {
    "wordkey": "medicine",
    "exp": "The doctor prescribed him some medicine."
  },
  {
    "wordkey": "medicine",
    "exp": "Her shrink told her to take one medicine every day."
  },
  {
    "wordkey": "medicine",
    "exp": "She knew about his illness because she had been studying medicine."
  },
  {
    "wordkey": "mix",
    "exp": "She was mixing some eggs into flour, which made him think she was making a cake."
  },
  {
    "wordkey": "mix",
    "exp": "They were mixing some substances in water inside beakers."
  },
  {
    "wordkey": "mix",
    "exp": "He put bananas and milk in the blender and mixed them together with some dates."
  },
  {
    "wordkey": "mix",
    "exp": "The event was organized to mix education and socializing, providing opportunities for both."
  },
  {
    "wordkey": "mix",
    "exp": "The laptop is made in a way to mix power with efficiency."
  },
  {
    "wordkey": "organize",
    "exp": "She was having trouble organizing her day."
  },
  {
    "wordkey": "organize",
    "exp": "He asked her to organize a meeting for 11 AM."
  },
  {
    "wordkey": "organize",
    "exp": "They wanted to organize the library according to the names of the books."
  },
  {
    "wordkey": "organize",
    "exp": "We ought to be good at organizing our time."
  },
  {
    "wordkey": "period",
    "exp": "A season is a period of 3 months."
  },
  {
    "wordkey": "period",
    "exp": "Seven people in the village died over a period of famine."
  },
  {
    "wordkey": "period",
    "exp": "Can you believe those gigantic creatures used to live in one period in the past?"
  },
  {
    "wordkey": "populate",
    "exp": "Not so many people populate that village."
  },
  {
    "wordkey": "populate",
    "exp": "Those creatures populate the jungle."
  },
  {
    "wordkey": "produce",
    "exp": "The factory produces cosmetic products."
  },
  {
    "wordkey": "produce",
    "exp": "The compost helps produce good crops."
  },
  {
    "wordkey": "produce",
    "exp": "The dog was about to produce babies."
  },
  {
    "wordkey": "produce",
    "exp": "The new method produced an increase in productivity."
  },
  {
    "wordkey": "produce",
    "exp": "His remarks produced strong emotions in the audience."
  },
  {
    "wordkey": "range",
    "exp": "There was a wide range of options in the department store."
  },
  {
    "wordkey": "range",
    "exp": "He saw a range of rings he could buy for his fiancee."
  },
  {
    "wordkey": "range",
    "exp": "You could almost touch the clouds on top of the mountain range."
  },
  {
    "wordkey": "recognize",
    "exp": "She recognized him, although he had changed radically."
  },
  {
    "wordkey": "recognize",
    "exp": "He was such an experienced doctor that he could recognize the symptoms with ease."
  },
  {
    "wordkey": "regular",
    "exp": "He exercises on a regular basis."
  },
  {
    "wordkey": "regular",
    "exp": "We should take regular breaks during our studies."
  },
  {
    "wordkey": "sign",
    "exp": "The menacing clouds were like a bad sign to him."
  },
  {
    "wordkey": "sign",
    "exp": "Sherlock was looking for a sign in his hotel room."
  },
  {
    "wordkey": "sign",
    "exp": "Before signing any contract, you should ensure that you read all the terms."
  },
  {
    "wordkey": "tip",
    "exp": "The tip of the knife had been broken."
  },
  {
    "wordkey": "tip",
    "exp": "She searched the Internet to get some useful tips about language learning."
  },
  {
    "wordkey": "tip",
    "exp": "He was tipping his chair back during his study."
  },
  {
    "wordkey": "tip",
    "exp": "The car tipped up because of such heavy load."
  },
  {
    "wordkey": "tip",
    "exp": "He carefully tipped some milk into the blender."
  },
  {
    "wordkey": "tip",
    "exp": "The trucks were tipping sand onto the construction site."
  },
  {
    "wordkey": "tip",
    "exp": "They tipped her extra for such a good service."
  },
  {
    "wordkey": "tradition",
    "exp": "It was a tradition passed down from their ancestors."
  },
  {
    "wordkey": "tradition",
    "exp": "According to tradition, families gather to exchange gifts and have a meal together."
  },
  {
    "wordkey": "trash",
    "exp": "The garage was filled with trash."
  },
  {
    "wordkey": "trash",
    "exp": "She asked her son to take out the trash."
  },
  {
    "wordkey": "trash",
    "exp": "He wasted money on that trash."
  },
  {
    "wordkey": "wide",
    "exp": "The entrance of his mansion was very wide."
  },
  {
    "wordkey": "wide",
    "exp": "Her eyes were bright and wide."
  },
  {
    "wordkey": "wide",
    "exp": "Although it was midnight, they were still wide awake."
  },
  {
    "wordkey": "wide",
    "exp": "The gate of the barn was wide open."
  },
  {
    "wordkey": "advice",
    "exp": "He gave his friend a piece of advice on the matter."
  },
  {
    "wordkey": "advice",
    "exp": "They went to that restaurant on his advice."
  },
  {
    "wordkey": "advice",
    "exp": "On the advice of his coach, he ate a more balanced diet."
  },
  {
    "wordkey": "along",
    "exp": "They walked along the road together."
  },
  {
    "wordkey": "along",
    "exp": "A few huts were made along the river."
  },
  {
    "wordkey": "along",
    "exp": "They were discussing the issue while walking along."
  },
  {
    "wordkey": "along",
    "exp": "Can you pick her up and bring her along on your way?"
  },
  {
    "wordkey": "along",
    "exp": "He received an award along with a promotion at his job."
  },
  {
    "wordkey": "attention",
    "exp": "They wanted to draw more attention to the new product."
  },
  {
    "wordkey": "attention",
    "exp": "The teacher told them to give him their undevided attention."
  },
  {
    "wordkey": "attention",
    "exp": "He wanted to attract her attention and then talk to her."
  },
  {
    "wordkey": "attention",
    "exp": "We should pay close attention to the lesson."
  },
  {
    "wordkey": "attention",
    "exp": "At the conference, he turned their attention to a new method."
  },
  {
    "wordkey": "attention",
    "exp": "Narcissists usually like to be the center of attention."
  },
  {
    "wordkey": "attention",
    "exp": "He was in condition to stay alone and needed medical attention."
  },
  {
    "wordkey": "attract",
    "exp": "He was sexually attracted to her."
  },
  {
    "wordkey": "attract",
    "exp": "The movie was a blockbuster and attracted a huge audience."
  },
  {
    "wordkey": "attract",
    "exp": "She used a magnet to attract all the metal pieces on the table."
  },
  {
    "wordkey": "attract",
    "exp": "His controversial decision attracted a lot of criticism."
  },
  {
    "wordkey": "climb",
    "exp": "As he was climbing the cliff, he realized his mistakes."
  },
  {
    "wordkey": "climb",
    "exp": "The road climbed up the mountain."
  },
  {
    "wordkey": "climb",
    "exp": "An alpinist is someone who climbs mountains."
  },
  {
    "wordkey": "drop",
    "exp": "Some books dropped off the shelf when the earthquake began."
  },
  {
    "wordkey": "drop",
    "exp": "He dropped his phone in the pond."
  },
  {
    "wordkey": "drop",
    "exp": "The tray dropped from her hand onto the floor."
  },
  {
    "wordkey": "drop",
    "exp": "He dropped a line to arrange the time with him."
  },
  {
    "wordkey": "drop",
    "exp": "At the conclusion of the argument, she told him to drop dead."
  },
  {
    "wordkey": "drop",
    "exp": "Prices dropped sharply during the recession."
  },
  {
    "wordkey": "final",
    "exp": "The final scene of the movie was very poignant."
  },
  {
    "wordkey": "final",
    "exp": "After careful consideration, he made his final decision."
  },
  {
    "wordkey": "further",
    "exp": "A little further along the path, they saw a flock of birds."
  },
  {
    "wordkey": "further",
    "exp": "He read further and started to like it."
  },
  {
    "wordkey": "further",
    "exp": "Using this method will manifest its benefit further down the road."
  },
  {
    "wordkey": "further",
    "exp": "Contact us for further information."
  },
  {
    "wordkey": "imply",
    "exp": "He was implying that we needed to go there together."
  },
  {
    "wordkey": "maintain",
    "exp": "We should maintain a healthy balanced diet."
  },
  {
    "wordkey": "maintain",
    "exp": "The sheriff deployed more officers to maintain order."
  },
  {
    "wordkey": "maintain",
    "exp": "A big house is a lot of fun, however, it also costs more to maintain."
  },
  {
    "wordkey": "neither",
    "exp": "Neither of her parents knew how to ski."
  },
  {
    "wordkey": "neither",
    "exp": "Neither his brother nor his sister wanted to go there."
  },
  {
    "wordkey": "otherwise",
    "exp": "You should study more; otherwise, you will fail your exam."
  },
  {
    "wordkey": "physical",
    "exp": "Along with studying, we should engage in physical activities as well."
  },
  {
    "wordkey": "physical",
    "exp": "He takes vigorous exercises every day so as to build up more muscle and physical strength."
  },
  {
    "wordkey": "prove",
    "exp": "Her attorney proved her innocent."
  },
  {
    "wordkey": "prove",
    "exp": "The drug is proved to be inefficient."
  },
  {
    "wordkey": "prove",
    "exp": "Nobody believed him, so he decided to prove himself."
  },
  {
    "wordkey": "react",
    "exp": "Her body reacted badly to the drug."
  },
  {
    "wordkey": "react",
    "exp": "He reacted angrily to the remark."
  },
  {
    "wordkey": "react",
    "exp": "The rescue team reacted swiftly and managed to save them."
  },
  {
    "wordkey": "ride",
    "exp": "He used to ride to work on his bike."
  },
  {
    "wordkey": "ride",
    "exp": "They were riding camels in the desert."
  },
  {
    "wordkey": "ride",
    "exp": "They rode past us on the highway."
  },
  {
    "wordkey": "situated",
    "exp": "The gun was situated on the table."
  },
  {
    "wordkey": "situated",
    "exp": "An English institution is situated near the main square."
  },
  {
    "wordkey": "situated",
    "exp": "They found themselves situated in a dilemma."
  },
  {
    "wordkey": "situated",
    "exp": "After all the hard work, he was finally situated to apply for his dream job."
  },
  {
    "wordkey": "society",
    "exp": "We should respect seniors in the society."
  },
  {
    "wordkey": "society",
    "exp": "All modern societies have their own problems."
  },
  {
    "wordkey": "standard",
    "exp": "His work was not of a high standard at first."
  },
  {
    "wordkey": "standard",
    "exp": "That furniture is not up to standard."
  },
  {
    "wordkey": "standard",
    "exp": "These bicycles are below standard."
  },
  {
    "wordkey": "suggest",
    "exp": "He suggested that they go for a picnic."
  },
  {
    "wordkey": "suggest",
    "exp": "I suggest we adopt a new approach to this problem."
  },
  {
    "wordkey": "suggest",
    "exp": "The pile of dirty dishes and the empty fridge suggested that the house was abandoned a long time ago."
  },
  {
    "wordkey": "bite",
    "exp": "The little boy took a bite out of the pie and then spat it out."
  },
  {
    "wordkey": "bite",
    "exp": "The snake bit into its prey and injected venom."
  },
  {
    "wordkey": "coast",
    "exp": "They were walking along the coast together."
  },
  {
    "wordkey": "coast",
    "exp": "I want to travel across China coast to coast."
  },
  {
    "wordkey": "coast",
    "exp": "Aboard a boat, we were 3 kilometers off the coast."
  },
  {
    "wordkey": "coast",
    "exp": "They waited until the coast was clear before sneaking out of the house."
  },
  {
    "wordkey": "deal",
    "exp": "They made a good deal with the firm."
  },
  {
    "wordkey": "deal",
    "exp": "Finally, she managed to strike a deal on the project."
  },
  {
    "wordkey": "deal",
    "exp": "They made a good deal of money selling their crafts."
  },
  {
    "wordkey": "deal",
    "exp": "He wanted to deal with them, but he had no idea how."
  },
  {
    "wordkey": "desert",
    "exp": "They were traveling across the desert on camels."
  },
  {
    "wordkey": "desert",
    "exp": "There was a strange cave in the desert."
  },
  {
    "wordkey": "effective",
    "exp": "The plan was simple yet effective."
  },
  {
    "wordkey": "effective",
    "exp": "This method of learning is proved to be highly effective."
  },
  {
    "wordkey": "examine",
    "exp": "She went to the optician to have an expert examine her eyes."
  },
  {
    "wordkey": "examine",
    "exp": "Sherlock wanted to examine the stable for some clues."
  },
  {
    "wordkey": "examine",
    "exp": "The teacher told them he would examine their understanding of the subject next week."
  },
  {
    "wordkey": "false",
    "exp": "Many girls nowadays use false eyelashes to boost their appearance."
  },
  {
    "wordkey": "false",
    "exp": "The old man had false teeth."
  },
  {
    "wordkey": "false",
    "exp": "He gave them a false name to avoid the consequent trouble of being recognized."
  },
  {
    "wordkey": "false",
    "exp": "She was arrested for using a false identity."
  },
  {
    "wordkey": "false",
    "exp": "He faced accusation of providing false evidence during the trial."
  },
  {
    "wordkey": "gift",
    "exp": "They exchanged gifts on Christmas."
  },
  {
    "wordkey": "gift",
    "exp": "They gave their son a gift on his birthday."
  },
  {
    "wordkey": "gift",
    "exp": "He thought a teddy bear would make an ideal gift for her."
  },
  {
    "wordkey": "gift",
    "exp": "They were looking for some ribbon to wrap up the gift."
  },
  {
    "wordkey": "gift",
    "exp": "He had a gift for music."
  },
  {
    "wordkey": "hunger",
    "exp": "He was filled with hunger and could eat a horse."
  },
  {
    "wordkey": "hunger",
    "exp": "Some people around the world die of hunger."
  },
  {
    "wordkey": "hunger",
    "exp": "She had a pang of hunger during her pregnancy."
  },
  {
    "wordkey": "hunger",
    "exp": "After a few days, he was faint with hunger."
  },
  {
    "wordkey": "hunger",
    "exp": "Despite all the trouble, he never lost his hunger for success."
  },
  {
    "wordkey": "imagine",
    "exp": "The little boy was scared, so he told him to imagine a nice cozy place."
  },
  {
    "wordkey": "imagine",
    "exp": "Imagine how hard it is to be an orphan."
  },
  {
    "wordkey": "imagine",
    "exp": "Can you imagine Phoebe riding a bike?"
  },
  {
    "wordkey": "imagine",
    "exp": "Successful people always imagine improving their character."
  },
  {
    "wordkey": "journey",
    "exp": "They decided to go on a long journey."
  },
  {
    "wordkey": "journey",
    "exp": "On their return journey, they met a couple and became friends."
  },
  {
    "wordkey": "journey",
    "exp": "Next time, we should break the journey and take a rest."
  },
  {
    "wordkey": "journey",
    "exp": "On the first leg of the journey, they had a little argument, but things looked up later."
  },
  {
    "wordkey": "journey",
    "exp": "They say life is a spiritual journey."
  },
  {
    "wordkey": "journey",
    "exp": "They journeyed north, in search for a better place."
  },
  {
    "wordkey": "puzzle",
    "exp": "The kids were trying to do a jigsaw puzzle."
  },
  {
    "wordkey": "puzzle",
    "exp": "She was so clever she spent her spare time doing crossword puzzles."
  },
  {
    "wordkey": "puzzle",
    "exp": "That crime was like a puzzle to everyone in the country, but Sherlock knew he could solve it."
  },
  {
    "wordkey": "puzzle",
    "exp": "They were puzzled by her sudden change of behavior."
  },
  {
    "wordkey": "puzzle",
    "exp": "The complex instructions puzzled them all."
  },
  {
    "wordkey": "quite",
    "exp": "After a lot of practice, I can now type quite fast."
  },
  {
    "wordkey": "rather",
    "exp": "I would rather have these shoes than those."
  },
  {
    "wordkey": "rather",
    "exp": "It was rather a difficult subject for him to absorb."
  },
  {
    "wordkey": "specific",
    "exp": "Do you have a specific place on your mind?"
  },
  {
    "wordkey": "specific",
    "exp": "He was vague about what had happened, so they asked him to be more specific."
  },
  {
    "wordkey": "specific",
    "exp": "Nobody knew the specific location of it."
  },
  {
    "wordkey": "spider",
    "exp": "The spider constructed a web to catch its prey."
  },
  {
    "wordkey": "spider",
    "exp": "Arachnophobia is extreme fear of spiders."
  },
  {
    "wordkey": "tour",
    "exp": "They wanted to visit the town, so he found a tour operator."
  },
  {
    "wordkey": "tour",
    "exp": "He used to be a tour guide."
  },
  {
    "wordkey": "tour",
    "exp": "He took them on a sightseeing tour of the village."
  },
  {
    "wordkey": "trip",
    "exp": "They took a boat trip to a majestic island."
  },
  {
    "wordkey": "trip",
    "exp": "He wanted to surprise her and take her on a trip abroad for vacation."
  },
  {
    "wordkey": "trip",
    "exp": "The trip from Shanghai to Beijing took several hours."
  },
  {
    "wordkey": "trip",
    "exp": "He was far away on a business trip when he met her."
  },
  {
    "wordkey": "trip",
    "exp": "They took her on a shopping trip around the city."
  },
  {
    "wordkey": "band",
    "exp": "He was a drummer who played in several bands."
  },
  {
    "wordkey": "band",
    "exp": "She was a member of a rock band."
  },
  {
    "wordkey": "band",
    "exp": "Ross and Chandler formed a music band in high school."
  },
  {
    "wordkey": "barely",
    "exp": "Before his new job, he could barely provide for his family."
  },
  {
    "wordkey": "barely",
    "exp": "They were stranded on the island and barely had enough food for a few days."
  },
  {
    "wordkey": "boring",
    "exp": "They were all enjoying the game, but to her, it was actually boring."
  },
  {
    "wordkey": "boring",
    "exp": "The show was so boring that he fell asleep."
  },
  {
    "wordkey": "cancel",
    "exp": "There was a problem with the service, so he canceled his subscription."
  },
  {
    "wordkey": "cancel",
    "exp": "The train had been canceled. Therefore, they got a taxi to get there."
  },
  {
    "wordkey": "cancel",
    "exp": "His wife was sent to the hospital, so he had to cancel the meeting."
  },
  {
    "wordkey": "driveway",
    "exp": "When he was going to park the car in the garage, he saw some tools on the driveway."
  },
  {
    "wordkey": "garbage",
    "exp": "He cleaned the kitchen and took the garbage out."
  },
  {
    "wordkey": "instrument",
    "exp": "In the operating theater, there were some surgical instruments."
  },
  {
    "wordkey": "instrument",
    "exp": "During one period in the past, instruments of torture were commonly used."
  },
  {
    "wordkey": "instrument",
    "exp": "Her favorite musical instrument is the guitar."
  },
  {
    "wordkey": "list",
    "exp": "She made a shopping list of groceries they needed to buy."
  },
  {
    "wordkey": "list",
    "exp": "He was checking to see if their names were on the list."
  },
  {
    "wordkey": "magic",
    "exp": "Phil had learned to do some magic."
  },
  {
    "wordkey": "magic",
    "exp": "The magic solution to the issue saved them a great deal of money."
  },
  {
    "wordkey": "magic",
    "exp": "Their magic comeback surprised the opponent."
  },
  {
    "wordkey": "magic",
    "exp": "His plan worked like magic and solved the problem."
  },
  {
    "wordkey": "magic",
    "exp": "When it comes to computers, he seems to have a magic touch."
  },
  {
    "wordkey": "message",
    "exp": "She eloped and left a message saying that she was going to get married."
  },
  {
    "wordkey": "message",
    "exp": "He got a message from the office that they needed to attend a meeting in the evening."
  },
  {
    "wordkey": "message",
    "exp": "They tried to get the message across that she was taking advantage of him."
  },
  {
    "wordkey": "notice",
    "exp": "He noticed a red cloth sticking out of his pocket."
  },
  {
    "wordkey": "notice",
    "exp": "Notice how the strokes are drawn."
  },
  {
    "wordkey": "notice",
    "exp": "He noticed that they winked at each other."
  },
  {
    "wordkey": "notice",
    "exp": "Chandler was leaving a notice on the board for Joey."
  },
  {
    "wordkey": "own",
    "exp": "I will have my own apartment soon."
  },
  {
    "wordkey": "own",
    "exp": "Nowadays, most people have their own private cars."
  },
  {
    "wordkey": "own",
    "exp": "She was trying to make dinner for ten people all on her own."
  },
  {
    "wordkey": "own",
    "exp": "I prefer studying in my own time instead of being rushed."
  },
  {
    "wordkey": "own",
    "exp": "He decided to learn Mandarin on his own time after work."
  },
  {
    "wordkey": "own",
    "exp": "They own a big house downtown."
  },
  {
    "wordkey": "predict",
    "exp": "The fortune teller predicted that she would get married in a year."
  },
  {
    "wordkey": "predict",
    "exp": "Tomorrow is predicted to be cloudy."
  },
  {
    "wordkey": "predict",
    "exp": "They were trying to predict how they would attack the castle."
  },
  {
    "wordkey": "professor",
    "exp": "Professor Geller wanted to be friends with his students."
  },
  {
    "wordkey": "rush",
    "exp": "Some kids were rushing around in the playground."
  },
  {
    "wordkey": "rush",
    "exp": "They rushed provisions to the zone."
  },
  {
    "wordkey": "rush",
    "exp": "He was in a rush to get to the hospital."
  },
  {
    "wordkey": "schedule",
    "exp": "Not a single thing went according to schedule that day."
  },
  {
    "wordkey": "schedule",
    "exp": "Since he had done all his stuff, he decided to run ahead of schedule and go for the project."
  },
  {
    "wordkey": "schedule",
    "exp": "She had been goofing around with her friends, which is why she fell behind the schedule."
  },
  {
    "wordkey": "share",
    "exp": "The teacher asked her to share her book with the newcomer."
  },
  {
    "wordkey": "share",
    "exp": "He felt sympathy and shared his hamburger with the homeless man."
  },
  {
    "wordkey": "share",
    "exp": "We should share the task of cleaning up after the party."
  },
  {
    "wordkey": "share",
    "exp": "We share the same taste in music."
  },
  {
    "wordkey": "share",
    "exp": "You can always share your thoughts with me."
  },
  {
    "wordkey": "stage",
    "exp": "He went to the stage to receive his award."
  },
  {
    "wordkey": "stage",
    "exp": "The band went on stage to perform their album."
  },
  {
    "wordkey": "stage",
    "exp": "She took the stage and gave an interesting speech about the importance of body stance."
  },
  {
    "wordkey": "stage",
    "exp": "The project was in its final stage when a minor problem came up."
  },
  {
    "wordkey": "stage",
    "exp": "She knew that at some stage she would have to let go of her children."
  },
  {
    "wordkey": "stage",
    "exp": "He thought that their relationship was at the stage where they could consider moving in together."
  },
  {
    "wordkey": "stage",
    "exp": "He was down in the dumps, but it was just a stage that he was going through."
  },
  {
    "wordkey": "stage",
    "exp": "They wanted to stage the show in an outdoor venue."
  },
  {
    "wordkey": "storm",
    "exp": "Some trees were blown down during the storm."
  },
  {
    "wordkey": "within",
    "exp": "Within the box, there was also a letter."
  },
  {
    "wordkey": "within",
    "exp": "The lodge was situated within easy reach of the mountain."
  },
  {
    "wordkey": "within",
    "exp": "They put more officers around the town to make sure people acted within the law."
  },
  {
    "wordkey": "burden",
    "exp": "Sometimes, kids can be a heavy burden to their parents."
  },
  {
    "wordkey": "burden",
    "exp": "Initially, they bore a financial burden, but things got better after a while."
  },
  {
    "wordkey": "burden",
    "exp": "The cost of keeping a pet would put an additional burden on them."
  },
  {
    "wordkey": "burden",
    "exp": "He burdened his colleague with the project."
  },
  {
    "wordkey": "compromise",
    "exp": "They finally reached a compromise about the matter."
  },
  {
    "wordkey": "compromise",
    "exp": "In a compromise between the employee and the labor union, they agreed on a 10 percent wage increase."
  },
  {
    "wordkey": "compromise",
    "exp": "Finding a compromise between their differences was crucial to maintain order and avoid further conflict."
  },
  {
    "wordkey": "compromise",
    "exp": "They compromised at $100 for the table."
  },
  {
    "wordkey": "craft",
    "exp": "They crafted some ornaments and took them downtown to sell."
  },
  {
    "wordkey": "craft",
    "exp": "She crafted a bracelet using shells and pearl."
  },
  {
    "wordkey": "craft",
    "exp": "The artisan spent years perfecting his craft, creating intricate goods."
  },
  {
    "wordkey": "craft",
    "exp": "Learning the craft of carpentry requires a great deal of time and effort."
  },
  {
    "wordkey": "dive",
    "exp": "They dived into the lake and swam."
  },
  {
    "wordkey": "dive",
    "exp": "Everybody was in the pool but him, so she told him to dive in."
  },
  {
    "wordkey": "dive",
    "exp": "He dived off the airplane into the sky."
  },
  {
    "wordkey": "dive",
    "exp": "His phone fell into the lake, and he dived for it."
  },
  {
    "wordkey": "dive",
    "exp": "After a few months, the prices took a dive and became rather cheap."
  },
  {
    "wordkey": "fragile",
    "exp": "Be careful with those; they are very fragile."
  },
  {
    "wordkey": "fragile",
    "exp": "Their fragile friendship was spoiled by a misunderstanding."
  },
  {
    "wordkey": "half",
    "exp": "She cut the apple in half and shared it with him."
  },
  {
    "wordkey": "half",
    "exp": "He sliced the cake into halves and gave a piece to his friend."
  },
  {
    "wordkey": "half",
    "exp": "Half of the money was for him."
  },
  {
    "wordkey": "half",
    "exp": "We only have half as much work as last week."
  },
  {
    "wordkey": "half",
    "exp": "After the bad news, there were only half as many people at the party."
  },
  {
    "wordkey": "half",
    "exp": "Because of the new machinery, they only needed half as many workers for operation."
  },
  {
    "wordkey": "innocence",
    "exp": "The little boy was so peaceful, and his innocence was charming."
  },
  {
    "wordkey": "innocence",
    "exp": "Despite all the evidence against him, he kept pleading his innocence."
  },
  {
    "wordkey": "innocence",
    "exp": "Even when the jury reached its verdict, he was protesting his innocence, claiming that he was wrongly accused."
  },
  {
    "wordkey": "lead",
    "exp": "The guide was leading them up the mountain."
  },
  {
    "wordkey": "lead",
    "exp": "The duck was leading its ducklings to the lake."
  },
  {
    "wordkey": "lead",
    "exp": "He was chosen to lead the expedition."
  },
  {
    "wordkey": "lead",
    "exp": "A strange guy gave him the wrong address, leading him astray."
  },
  {
    "wordkey": "lead",
    "exp": "They got into the lead shortly after the match kicked off."
  },
  {
    "wordkey": "lead",
    "exp": "Despite fierce competition, he managed to pull ahead and stay in the lead until the finish line."
  },
  {
    "wordkey": "lead",
    "exp": "He remained calm during the competition, which helped him take the lead just in time."
  },
  {
    "wordkey": "meeting",
    "exp": "They had a meeting about the latest deal made with a firm."
  },
  {
    "wordkey": "meeting",
    "exp": "His assistant told her that he was in a meeting at the time."
  },
  {
    "wordkey": "merge",
    "exp": "The two companies merged into a big corporation."
  },
  {
    "wordkey": "merge",
    "exp": "The streams merged with each other, forming a big river."
  },
  {
    "wordkey": "moderate",
    "exp": "They had a moderate house in the village."
  },
  {
    "wordkey": "moderate",
    "exp": "There was a moderate improvement in his English."
  },
  {
    "wordkey": "moderate",
    "exp": "Whenever you are frantic with anger, try taking a deep breath to help moderate your emotions."
  },
  {
    "wordkey": "overwhelm",
    "exp": "Since he was overwhelmed with too many phone calls, he got an assistant to help him."
  },
  {
    "wordkey": "overwhelm",
    "exp": "The number of tasks she was supposed to do overwhelmed her."
  },
  {
    "wordkey": "overwhelm",
    "exp": "He was overwhelmed by the pain of losing his girlfriend to another guy."
  },
  {
    "wordkey": "payment",
    "exp": "Once we make the last payment on the car, we will be officially the owner."
  },
  {
    "wordkey": "perception",
    "exp": "Our perception of life differs widely."
  },
  {
    "wordkey": "perception",
    "exp": "The picture changed his perception of art."
  },
  {
    "wordkey": "settle",
    "exp": "They finally agreed to settle their differences."
  },
  {
    "wordkey": "settle",
    "exp": "It was hard for both of them to settle the dispute."
  },
  {
    "wordkey": "settle",
    "exp": "The two tribes decided to settle the matter once and for all."
  },
  {
    "wordkey": "shiver",
    "exp": "The little boy was standing there, shivering like a leaf."
  },
  {
    "wordkey": "shiver",
    "exp": "They both felt a shiver as they watched the eerie scene of the movie."
  },
  {
    "wordkey": "shiver",
    "exp": "The scary movie gave her the shivers."
  },
  {
    "wordkey": "shiver",
    "exp": "He had the shivers from being outdoors in such cold weather without proper clothing."
  },
  {
    "wordkey": "speed",
    "exp": "At the conclusion of the race, he sped up around a turn and managed to take the lead."
  },
  {
    "wordkey": "speed",
    "exp": "Once he saw some pedestrians on the road, he lowered his speed."
  },
  {
    "wordkey": "speed",
    "exp": "The driver sped along at such a breakneck speed."
  },
  {
    "wordkey": "speed",
    "exp": "This car has a top speed of 300 KPH."
  },
  {
    "wordkey": "speed",
    "exp": "The plane began picking up speed to take off."
  },
  {
    "wordkey": "speed",
    "exp": "The project was sped up after adopting a new approach."
  },
  {
    "wordkey": "talkative",
    "exp": "He was so talkative that no one could talk for more than a few seconds."
  },
  {
    "wordkey": "usual",
    "exp": "There were more people than usual at the office that day."
  },
  {
    "wordkey": "usual",
    "exp": "As usual, he was late to school."
  },
  {
    "wordkey": "above",
    "exp": "There was a box above the shelf."
  },
  {
    "wordkey": "above",
    "exp": "Some protestors waved some signs above their heads."
  },
  {
    "wordkey": "above",
    "exp": "The eagle flew above the clouds."
  },
  {
    "wordkey": "above",
    "exp": "He held the umbrella above to shield them from rain."
  },
  {
    "wordkey": "above",
    "exp": "The fox looked above and saw a crow on the tree limb."
  },
  {
    "wordkey": "ahead",
    "exp": "He asked the driver to chase the car that was ahead of them."
  },
  {
    "wordkey": "ahead",
    "exp": "The alpinist moved ahead with difficulty."
  },
  {
    "wordkey": "ahead",
    "exp": "She told him to go straight ahead and turn right at the square."
  },
  {
    "wordkey": "ahead",
    "exp": "He was way ahead of the other players due to his extensive workout."
  },
  {
    "wordkey": "amount",
    "exp": "She was surprised by the amount of food on the table."
  },
  {
    "wordkey": "amount",
    "exp": "They gave a considerable amount of money to the charity."
  },
  {
    "wordkey": "belief",
    "exp": "They invested in the market in the belief that it would become profitable."
  },
  {
    "wordkey": "belief",
    "exp": "Unlike popular belief, not all introverts dislike being around people."
  },
  {
    "wordkey": "center",
    "exp": "There was a chair in the center of the room."
  },
  {
    "wordkey": "center",
    "exp": "He likes to be the center of attention."
  },
  {
    "wordkey": "center",
    "exp": "She found herself at the center of a heated debate over the new policy."
  },
  {
    "wordkey": "common",
    "exp": "Raining is so common in that country."
  },
  {
    "wordkey": "common",
    "exp": "Zhang is a common name in China."
  },
  {
    "wordkey": "cost",
    "exp": "The house cost a fortune, but he managed to buy it."
  },
  {
    "wordkey": "cost",
    "exp": "Those cars cost an arm and a leg."
  },
  {
    "wordkey": "cost",
    "exp": "Since he was his close friend, he cut the cost by 20 percent."
  },
  {
    "wordkey": "cost",
    "exp": "His manager offered to cover the cost."
  },
  {
    "wordkey": "demonstrate",
    "exp": "They used some charts and figures to clearly demonstrate the importance of the matter."
  },
  {
    "wordkey": "demonstrate",
    "exp": "She demonstrated that the plan was inefficient."
  },
  {
    "wordkey": "demonstrate",
    "exp": "He went there himself to demonstrate how the device worked."
  },
  {
    "wordkey": "demonstrate",
    "exp": "Most workers went on strike to demonstrate against the plan."
  },
  {
    "wordkey": "different",
    "exp": "They used different methods to study English, but they both succeeded."
  },
  {
    "wordkey": "different",
    "exp": "His siblings were entirely different from each other."
  },
  {
    "wordkey": "different",
    "exp": "The project was somehow different from what they expected."
  },
  {
    "wordkey": "different",
    "exp": "Although his method was different than hers, they were equally effective."
  },
  {
    "wordkey": "different",
    "exp": "There were so many different types of vehicles."
  },
  {
    "wordkey": "evidence",
    "exp": "There is no scientific evidence to prove that."
  },
  {
    "wordkey": "evidence",
    "exp": "Have you found any evidence that he committed the crime?"
  },
  {
    "wordkey": "evidence",
    "exp": "There was mounting evidence that a burglar had been stealing in the village."
  },
  {
    "wordkey": "evidence",
    "exp": "He gave empirical evidence during the trial."
  },
  {
    "wordkey": "honesty",
    "exp": "When one is going to be a judge, they must pledge honesty first."
  },
  {
    "wordkey": "idiom",
    "exp": "Once we master the most frequently used words, we should learn phrasal verbs and idioms."
  },
  {
    "wordkey": "independent",
    "exp": "He wanted to be independent, so he stopped asking his father for money and got himself a job."
  },
  {
    "wordkey": "independent",
    "exp": "They are close friends, but their decisions are independent of one another."
  },
  {
    "wordkey": "inside",
    "exp": "The kid was wondering what was inside the box."
  },
  {
    "wordkey": "inside",
    "exp": "Their house looked a little shabby from the outside, but it was quite fine on the inside."
  },
  {
    "wordkey": "jail",
    "exp": "The criminal spent 10 years in jail for his offense."
  },
  {
    "wordkey": "jail",
    "exp": "They caught the outlaw and gave him a 10-year jail sentence."
  },
  {
    "wordkey": "jail",
    "exp": "He had to serve a 5-year jail term as a punishment."
  },
  {
    "wordkey": "jail",
    "exp": "They were scared because he was about to be released from jail."
  },
  {
    "wordkey": "master",
    "exp": "Bruce Lee was a master of kung fu."
  },
  {
    "wordkey": "master",
    "exp": "He said mastering one technique is better than knowing about ten techniques."
  },
  {
    "wordkey": "memory",
    "exp": "The old man suffered from loss of memory."
  },
  {
    "wordkey": "memory",
    "exp": "She had a distinctive memory of the place."
  },
  {
    "wordkey": "memory",
    "exp": "He just had a dim memory of the time, but his speech brought back memories of what happened."
  },
  {
    "wordkey": "pocket",
    "exp": "She pulled a dollar out of her pocket and bought an ice cream."
  },
  {
    "wordkey": "pocket",
    "exp": "He put his hands into his pockets and walked down the alley."
  },
  {
    "wordkey": "pocket",
    "exp": "His wallet was sticking out from his hip pocket."
  },
  {
    "wordkey": "proper",
    "exp": "Monica was well organized and wanted everything to be kept in its proper place."
  },
  {
    "wordkey": "sale",
    "exp": "Everything for sale there was under 10 dollars."
  },
  {
    "wordkey": "sale",
    "exp": "The sale of alcohol to people under the age of 18 is forbidden."
  },
  {
    "wordkey": "because",
    "exp": "They wanted to surprise her because it was her birthday."
  },
  {
    "wordkey": "east",
    "exp": "The sun rises from the east."
  },
  {
    "wordkey": "east",
    "exp": "Most attractions were situated to the east of the city center."
  },
  {
    "wordkey": "east",
    "exp": "Their apartment is in the east of the town."
  },
  {
    "wordkey": "east",
    "exp": "Florida is located in the east coast of America."
  },
  {
    "wordkey": "expensive",
    "exp": "He bought an expensive sports car."
  },
  {
    "wordkey": "expensive",
    "exp": "Apartments in that part of the town are expensive to rent."
  },
  {
    "wordkey": "expensive",
    "exp": "She has expensive tastes for clothing and accessories."
  },
  {
    "wordkey": "flower",
    "exp": "He got a bouquet of flowers for his fiancee."
  },
  {
    "wordkey": "flower",
    "exp": "There were some wild flowers on the ground."
  },
  {
    "wordkey": "garden",
    "exp": "There were different kinds of beautiful flowers in the garden."
  },
  {
    "wordkey": "garden",
    "exp": "They had a small vegetable garden in their backyard."
  },
  {
    "wordkey": "garden",
    "exp": "There were some garden tools in the shed."
  },
  {
    "wordkey": "holiday",
    "exp": "They decided to visit their grandparents for their summer holiday."
  },
  {
    "wordkey": "holiday",
    "exp": "They were all happy because the school holiday had begun."
  },
  {
    "wordkey": "holiday",
    "exp": "They saw several historical places while they were on holiday."
  },
  {
    "wordkey": "many",
    "exp": "Not many people are familiar with that concept."
  },
  {
    "wordkey": "many",
    "exp": "How many native friends do you have?"
  },
  {
    "wordkey": "many",
    "exp": "She made so many new friends."
  },
  {
    "wordkey": "many",
    "exp": "There were too many insects."
  },
  {
    "wordkey": "many",
    "exp": "There were as many as a hundred people at the party."
  },
  {
    "wordkey": "million",
    "exp": "The city of Shanghai has over 20 million residents."
  },
  {
    "wordkey": "million",
    "exp": "His mansion is worth millions of dollars."
  },
  {
    "wordkey": "mountain",
    "exp": "It was a mountain chain in the west of the country."
  },
  {
    "wordkey": "mountain",
    "exp": "Mount Huashan is a very famous mountain in China."
  },
  {
    "wordkey": "place",
    "exp": "Hospital is a place where sick or injured people go to recive medical treatment."
  },
  {
    "wordkey": "place",
    "exp": "They had several strange tools in their place of work."
  },
  {
    "wordkey": "place",
    "exp": "There were so many places of interest that we could visit."
  },
  {
    "wordkey": "place",
    "exp": "He asked his friend to save his place so he could pop out and get some snack."
  },
  {
    "wordkey": "popular",
    "exp": "It was a popular band in the late 19th."
  },
  {
    "wordkey": "popular",
    "exp": "Those kinds of movies are popular among teenagers."
  },
  {
    "wordkey": "popular",
    "exp": "His novel is popular with people who are into sci-fi."
  },
  {
    "wordkey": "ski",
    "exp": "They go to high mountains to ski on weekends."
  },
  {
    "wordkey": "ski",
    "exp": "They skied down the mountain together."
  },
  {
    "wordkey": "such",
    "exp": "He was such an idiot to say something like that."
  },
  {
    "wordkey": "such",
    "exp": "Some animals, such as crows and octopuses, are known for their intelligence."
  },
  {
    "wordkey": "such",
    "exp": "They sell books, magazines, pens and suchlike."
  },
  {
    "wordkey": "total",
    "exp": "A total of 23 participants attended the lecture."
  },
  {
    "wordkey": "total",
    "exp": "They were in total agreement on the schedule."
  },
  {
    "wordkey": "total",
    "exp": "The hurricane caused a total chaos in the town."
  },
  {
    "wordkey": "tower",
    "exp": "It was an old tower and needed to be repaired."
  },
  {
    "wordkey": "tower",
    "exp": "There was a picture of three crowns on top of the church tower."
  },
  {
    "wordkey": "town",
    "exp": "The fishing town was neighboring an industrial town where he lived."
  },
  {
    "wordkey": "town",
    "exp": "It was one of the best apartments in town."
  },
  {
    "wordkey": "train",
    "exp": "Some people prefer trains over buses."
  },
  {
    "wordkey": "train",
    "exp": "There was a freight train approaching."
  },
  {
    "wordkey": "train",
    "exp": "They arranged to meet each other at the train station."
  },
  {
    "wordkey": "walk",
    "exp": "He used to walk two kilometers every day to school."
  },
  {
    "wordkey": "walk",
    "exp": "They were walking toward the workplace when he called them."
  },
  {
    "wordkey": "watch",
    "exp": "They asked them to come over to watch the movie together."
  },
  {
    "wordkey": "watch",
    "exp": "The homeless man watched dozens of people walking past him."
  },
  {
    "wordkey": "watch",
    "exp": "He told them to watch how he assembled the pieces."
  },
  {
    "wordkey": "watch",
    "exp": "His doctor told him to watch his diet to improve his health."
  },
  {
    "wordkey": "watch",
    "exp": "She looked at her watch to see how much time she got."
  },
  {
    "wordkey": "world",
    "exp": "The Nile is the longest river in the whole world."
  },
  {
    "wordkey": "world",
    "exp": "He managed to set a world record."
  },
  {
    "wordkey": "world",
    "exp": "The world is changing at such a rapid rate."
  },
  {
    "wordkey": "world",
    "exp": "She became very famous in the world of fashion design."
  },
  {
    "wordkey": "anxious",
    "exp": "She was anxious about the safety of her children."
  },
  {
    "wordkey": "anxious",
    "exp": "They were anxious to go skydiving."
  },
  {
    "wordkey": "anxious",
    "exp": "He was anxious that his presentation would impress his colleagues."
  },
  {
    "wordkey": "awful",
    "exp": "He had been stranded on the island for a long time and looked awful."
  },
  {
    "wordkey": "awful",
    "exp": "The coffee she made tasted awful."
  },
  {
    "wordkey": "awful",
    "exp": "He had an awful lot of stamps in his collection."
  },
  {
    "wordkey": "consist",
    "exp": "The class consisted of students from different nations."
  },
  {
    "wordkey": "consist",
    "exp": "The local cuisine consists mainly of rice, roast duck, and tomatoes."
  },
  {
    "wordkey": "desire",
    "exp": "They desired a big house, and after a while, they got one."
  },
  {
    "wordkey": "desire",
    "exp": "The queen desired to have a meal with him."
  },
  {
    "wordkey": "desire",
    "exp": "He desired the new manager to improve efficiency at the office."
  },
  {
    "wordkey": "desire",
    "exp": "At the time, they had no desire to have a garden."
  },
  {
    "wordkey": "desire",
    "exp": "The pregnant woman had a strong desire for chocolate."
  },
  {
    "wordkey": "desire",
    "exp": "He had a burning desire to succeed in his field."
  },
  {
    "wordkey": "desire",
    "exp": "They got itchy feet and wanted to satisfy their desire for travelling."
  },
  {
    "wordkey": "eager",
    "exp": "The kids were eager to play with their kites."
  },
  {
    "wordkey": "eager",
    "exp": "They were all eager for the power that the ring had."
  },
  {
    "wordkey": "household",
    "exp": "He was supposed to do the household chores that day."
  },
  {
    "wordkey": "household",
    "exp": "The company used to make household products."
  },
  {
    "wordkey": "household",
    "exp": "Their household expenses were high."
  },
  {
    "wordkey": "household",
    "exp": "Household waste can be reduced by using reusable bottles and bags."
  },
  {
    "wordkey": "intent",
    "exp": "It was an accident, not his intent to hurt him."
  },
  {
    "wordkey": "intent",
    "exp": "Her intent is to become a great doctor."
  },
  {
    "wordkey": "intent",
    "exp": "He spread that gossip with intent to destroy his reputation."
  },
  {
    "wordkey": "intent",
    "exp": "They were intent on the task as it was very crucial."
  },
  {
    "wordkey": "landscape",
    "exp": "It was a beautiful place with a majestic landscape."
  },
  {
    "wordkey": "landscape",
    "exp": "The foul-smelling chemical factory was ruining the landscape."
  },
  {
    "wordkey": "landscape",
    "exp": "He was a landscape painter with so many masterpieces."
  },
  {
    "wordkey": "lift",
    "exp": "The little boy strived to lift the box."
  },
  {
    "wordkey": "lift",
    "exp": "She lifted the baby and hugged him."
  },
  {
    "wordkey": "lift",
    "exp": "After a few hours, patches of fog lifted and the area became clear again."
  },
  {
    "wordkey": "lift",
    "exp": "He had lost his wallet and had to hitch a lift to get back home."
  },
  {
    "wordkey": "lift",
    "exp": "She offered to give him a lift to the airport."
  },
  {
    "wordkey": "lift",
    "exp": "Hearing the good news gave them a lift, making them more optimistic."
  },
  {
    "wordkey": "load",
    "exp": "They were loading household items onto the van."
  },
  {
    "wordkey": "load",
    "exp": "She got all the laundry and loaded the washing machine."
  },
  {
    "wordkey": "load",
    "exp": "The truck was carrying a load of bricks."
  },
  {
    "wordkey": "load",
    "exp": "The maximum load of the lift was 400 kilograms."
  },
  {
    "wordkey": "lung",
    "exp": "Swimmers usually have strong lungs."
  },
  {
    "wordkey": "lung",
    "exp": "He damaged his own lungs by smoking."
  },
  {
    "wordkey": "motion",
    "exp": "They watched the scoring goal in slow motion."
  },
  {
    "wordkey": "motion",
    "exp": "The valet made a motion with his hand to help him park the car."
  },
  {
    "wordkey": "pace",
    "exp": "She was running in the park at a slow pace."
  },
  {
    "wordkey": "pace",
    "exp": "He was walking so fast that she could barely keep pace with him."
  },
  {
    "wordkey": "pace",
    "exp": "They were dazzled by the hectic pace of life in the town."
  },
  {
    "wordkey": "polite",
    "exp": "We ought to be polite toward others in most cases."
  },
  {
    "wordkey": "polite",
    "exp": "Instead of being polite, he answered back and disrespected him."
  },
  {
    "wordkey": "possess",
    "exp": "He possessed a ranch in the suburb."
  },
  {
    "wordkey": "possess",
    "exp": "She possessed an aptitude for painting."
  },
  {
    "wordkey": "rapidly",
    "exp": "After a short while, his business boomed rapidly."
  },
  {
    "wordkey": "rapidly",
    "exp": "The water in the river rose rapidly because of such torrential rain."
  },
  {
    "wordkey": "remark",
    "exp": "His tutor remarked that he needed to study more."
  },
  {
    "wordkey": "remark",
    "exp": "They remarked on how clever he was to come up with that idea."
  },
  {
    "wordkey": "remark",
    "exp": "His remark on the issue made them upset."
  },
  {
    "wordkey": "remark",
    "exp": "She made impolite remarks about their kid."
  },
  {
    "wordkey": "seek",
    "exp": "Many people were seeking freedom during those dark days."
  },
  {
    "wordkey": "seek",
    "exp": "She sought his advice about the matter."
  },
  {
    "wordkey": "seek",
    "exp": "He was seeking political asylum after the event."
  },
  {
    "wordkey": "seek",
    "exp": "A lot of people were seeking refuge after the earthquake."
  },
  {
    "wordkey": "shine",
    "exp": "The sun shone on his face and woke him up."
  },
  {
    "wordkey": "shine",
    "exp": "Some light shone into her eyes, making them sparkle."
  },
  {
    "wordkey": "spill",
    "exp": "He accidentally spilled tea on the table."
  },
  {
    "wordkey": "spill",
    "exp": "She spilled jam over the couch and made a stain."
  },
  {
    "wordkey": "spill",
    "exp": "The kid spilled some juice down his shirt."
  },
  {
    "wordkey": "arrow",
    "exp": "The assassin waited for the right moment to shoot at the target, and his arrow struck home."
  },
  {
    "wordkey": "arrow",
    "exp": "In one scene of the movie, hundreds of arrows were flying through the air."
  },
  {
    "wordkey": "battle",
    "exp": "Dozens of soldiers died in the battle."
  },
  {
    "wordkey": "battle",
    "exp": "There was a running battle between the two nations."
  },
  {
    "wordkey": "battle",
    "exp": "When the battle raged, you could hear the sound of swords echoing through the mountains."
  },
  {
    "wordkey": "bow",
    "exp": "The archers drew back their bows, aiming at the enemies."
  },
  {
    "wordkey": "bow",
    "exp": "She took a bow at the end of her performance to show respect to the fans."
  },
  {
    "wordkey": "bow",
    "exp": "They all bowed when the king came in."
  },
  {
    "wordkey": "brave",
    "exp": "He was brave enough to try that for the first time."
  },
  {
    "wordkey": "brave",
    "exp": "The brave officer went there alone to protect the kids."
  },
  {
    "wordkey": "brave",
    "exp": "She made a brave attempt to steal the key, trying to release the hostages."
  },
  {
    "wordkey": "chief",
    "exp": "The chief told his people to get ready for a potential fight."
  },
  {
    "wordkey": "chief",
    "exp": "Rice is one of the chief grains in China."
  },
  {
    "wordkey": "chief",
    "exp": "Her chief concern was the safety of her children."
  },
  {
    "wordkey": "chief",
    "exp": "The chief officer was responsible for the operation."
  },
  {
    "wordkey": "disadvantage",
    "exp": "One disadvantage of living in a big city is the volume of traffic."
  },
  {
    "wordkey": "disadvantage",
    "exp": "She was at a disadvantage, as she had hurt her knee."
  },
  {
    "wordkey": "enemy",
    "exp": "The enemy had advanced on their territory."
  },
  {
    "wordkey": "enemy",
    "exp": "They moved very carefully, knowing the enemy was nearby."
  },
  {
    "wordkey": "entrance",
    "exp": "There was an arch at the entrance of the castle."
  },
  {
    "wordkey": "entrance",
    "exp": "The actor made a dramatic entrance at the show."
  },
  {
    "wordkey": "hardly",
    "exp": "She could hardly hear him due to a lot of noise."
  },
  {
    "wordkey": "hardly",
    "exp": "He hardly ever did any outdoor activities."
  },
  {
    "wordkey": "intend",
    "exp": "He intended to help them out, but they misunderstood."
  },
  {
    "wordkey": "intend",
    "exp": "The class was intended for beginners, but Joe and Monica attended anyway."
  },
  {
    "wordkey": "intend",
    "exp": "His remark was intended as a joke, but it ruffled some feathers inadvertently."
  },
  {
    "wordkey": "intend",
    "exp": "The gift was intended as a gesture of gratitude."
  },
  {
    "wordkey": "laughter",
    "exp": "There was a shrill laughter coming from next door."
  },
  {
    "wordkey": "laughter",
    "exp": "At the party, they roared with laughter."
  },
  {
    "wordkey": "laughter",
    "exp": "He cracked a joke, making them all burst into laughter."
  },
  {
    "wordkey": "log",
    "exp": "They went out to get some logs for the fire."
  },
  {
    "wordkey": "log",
    "exp": "A lumberjack is someone who logs trees and chops up their wood."
  },
  {
    "wordkey": "log",
    "exp": "She logged a complaint with the customer service department for such terrible service."
  },
  {
    "wordkey": "log",
    "exp": "The application will log you into a database when you register an account."
  },
  {
    "wordkey": "log",
    "exp": "They tried to find their names in the visitor log."
  },
  {
    "wordkey": "log",
    "exp": "He keeps a weekly log of employees to monitor their performance."
  },
  {
    "wordkey": "military",
    "exp": "He decided to join the military at 19."
  },
  {
    "wordkey": "military",
    "exp": "During the parade, military forces demonstrated their equipment and training."
  },
  {
    "wordkey": "obey",
    "exp": "One of the soldiers refused to obey the order and got into trouble."
  },
  {
    "wordkey": "obey",
    "exp": "He told his dog to sit, and it obeyed him immediately."
  },
  {
    "wordkey": "secure",
    "exp": "He managed to secure a good contract with the company."
  },
  {
    "wordkey": "steady",
    "exp": "We are making a slow but steady progress."
  },
  {
    "wordkey": "steady",
    "exp": "They drove on the road at a steady pace."
  },
  {
    "wordkey": "steady",
    "exp": "He used his other hand to hold the gun steady to secure a clear shot."
  },
  {
    "wordkey": "trust",
    "exp": "Although he was anxious, he trusted his wife to handle the matter."
  },
  {
    "wordkey": "trust",
    "exp": "She had a hard time trusting him with her children."
  },
  {
    "wordkey": "trust",
    "exp": "We should trust in his competence and let him make the right decision."
  },
  {
    "wordkey": "trust",
    "exp": "She just wanted to build up their relationship on trust."
  },
  {
    "wordkey": "trust",
    "exp": "His betrayal shattered the trust that took years to develop."
  },
  {
    "wordkey": "twist",
    "exp": "She twisted spaghetti around the fork and dipped it into sauce before eating."
  },
  {
    "wordkey": "twist",
    "exp": "The snake twisted around its prey."
  },
  {
    "wordkey": "unless",
    "exp": "Unless you have a membership card, you cannot get into the building."
  },
  {
    "wordkey": "weapon",
    "exp": "The police caught the suspect and searched him for any weapon."
  },
  {
    "wordkey": "weapon",
    "exp": "They made a lethal weapon in the laboratory."
  },
  {
    "wordkey": "weapon",
    "exp": "He was carrying a chemical weapon."
  },
  {
    "wordkey": "chest",
    "exp": "He was doing his chest exercise."
  },
  {
    "wordkey": "chest",
    "exp": "She had a sharp pain in her chest."
  },
  {
    "wordkey": "chest",
    "exp": "He stood in the corner with his arms folded across his chest."
  },
  {
    "wordkey": "confidence",
    "exp": "He had a lot of confidence when it came to English."
  },
  {
    "wordkey": "confidence",
    "exp": "She said she had every confidence in her friend."
  },
  {
    "wordkey": "consequence",
    "exp": "Missing just one point in the exam was of little consequence to the overall score, yet he was upset."
  },
  {
    "wordkey": "disaster",
    "exp": "Four cars crashed into each other; it was a disaster."
  },
  {
    "wordkey": "disaster",
    "exp": "Suddenly, the weather got worse, and disaster struck."
  },
  {
    "wordkey": "disaster",
    "exp": "Trusting him with that was like a recipe for disaster."
  },
  {
    "wordkey": "disaster",
    "exp": "Earthquake, famine, and drought are natural disasters."
  },
  {
    "wordkey": "disaster",
    "exp": "His performance was a complete disaster."
  },
  {
    "wordkey": "disturb",
    "exp": "He was trying to focus on his study, but his siblings kept disturbing him."
  },
  {
    "wordkey": "disturb",
    "exp": "We are disturbing the ecological balance by our selfish actions."
  },
  {
    "wordkey": "disturb",
    "exp": "Their loud music disturbed the peace in the neighborhood."
  },
  {
    "wordkey": "estimate",
    "exp": "He estimated that he would have the money by the end of the week."
  },
  {
    "wordkey": "estimate",
    "exp": "They were trying to estimate how much material they needed for the project."
  },
  {
    "wordkey": "estimate",
    "exp": "His coach gave him a rough estimate of how much weight he could lose in about a year."
  },
  {
    "wordkey": "estimate",
    "exp": "According to his estimate, the cost of the project will be around 2 million dollars."
  },
  {
    "wordkey": "honor",
    "exp": "They all gathered to honor the deceased man."
  },
  {
    "wordkey": "honor",
    "exp": "He made a toast to honor his father for all his hard work."
  },
  {
    "wordkey": "honor",
    "exp": "It was such an honor for her to meet with her favorite actor."
  },
  {
    "wordkey": "honor",
    "exp": "They named the child after him in honor of his grandfather."
  },
  {
    "wordkey": "honor",
    "exp": "Would you do me the honor of taking a photo with me?"
  },
  {
    "wordkey": "honor",
    "exp": "They felt honor bound to fix the issue, as it was mostly their fault."
  },
  {
    "wordkey": "impress",
    "exp": "He impressed them by speaking English fluently."
  },
  {
    "wordkey": "impress",
    "exp": "She was impressed by how fast he could do that."
  },
  {
    "wordkey": "impress",
    "exp": "They impressed them with their collection of artwork."
  },
  {
    "wordkey": "narrow",
    "exp": "A tower is a tall, narrow structure."
  },
  {
    "wordkey": "narrow",
    "exp": "The passage was so narrow that two people could barely cross it."
  },
  {
    "wordkey": "narrow",
    "exp": "When he told the story, she narrowed her eyes and stared at him."
  },
  {
    "wordkey": "pale",
    "exp": "Her complexion was so pale that her friends thought she was sick."
  },
  {
    "wordkey": "pale",
    "exp": "He was wearing pale blue pants."
  },
  {
    "wordkey": "pale",
    "exp": "She caught the flu and went pale."
  },
  {
    "wordkey": "pale",
    "exp": "He paled when he saw the blood on the table."
  },
  {
    "wordkey": "rough",
    "exp": "They had to walk along a very rough path to get there."
  },
  {
    "wordkey": "rough",
    "exp": "They were lost in the middle of a rough sea."
  },
  {
    "wordkey": "rough",
    "exp": "The car was struggling to move, as it was such a rough terrain."
  },
  {
    "wordkey": "rough",
    "exp": "It was just a rough calculation of how much they needed."
  },
  {
    "wordkey": "satisfy",
    "exp": "The fact that her son got a grade A satisfied her so much."
  },
  {
    "wordkey": "satisfy",
    "exp": "Monica made three different meals to satisfy everyone."
  },
  {
    "wordkey": "satisfy",
    "exp": "Being competent at a job means satisfying all necessary requirements."
  },
  {
    "wordkey": "scream",
    "exp": "The little girl screamed when she saw a shadow."
  },
  {
    "wordkey": "scream",
    "exp": "He screamed in pain when the snake bit him."
  },
  {
    "wordkey": "scream",
    "exp": "They screamed at him for spilling tea over the report."
  },
  {
    "wordkey": "sensitive",
    "exp": "His teeth were sensitive to cold, so he ate his ice cream very slowly."
  },
  {
    "wordkey": "sensitive",
    "exp": "She was so sensitive about her scar that, once, she had a fight with her friend over it."
  },
  {
    "wordkey": "sensitive",
    "exp": "He was an experienced therapist and knew that he should gently approach sensitive issues of past events."
  },
  {
    "wordkey": "shade",
    "exp": "They sat in the shade of a willow tree and talked about their day."
  },
  {
    "wordkey": "shade",
    "exp": "He went to a nearby store to see if he could find a shade for his desk lamp."
  },
  {
    "wordkey": "shade",
    "exp": "It was such a sunny day that he had to shade his eyes while walking down the sidewalk."
  },
  {
    "wordkey": "strength",
    "exp": "He had great strength and stamina and won the battle with ease."
  },
  {
    "wordkey": "strength",
    "exp": "They go to the gym every day to build up their strength."
  },
  {
    "wordkey": "strength",
    "exp": "Developing strength of character typically comes from overcoming adversity and learning from experiences."
  },
  {
    "wordkey": "supplement",
    "exp": "She took her vitamin supplement before heading out."
  },
  {
    "wordkey": "supplement",
    "exp": "Selling his crafts was a supplement to his main income."
  },
  {
    "wordkey": "supplement",
    "exp": "The doctor told her to supplement her diet with iron."
  },
  {
    "wordkey": "supplement",
    "exp": "He supplemented his office work by driving a taxi for a few hours."
  },
  {
    "wordkey": "terror",
    "exp": "She felt terror when two intruders broke into her house."
  },
  {
    "wordkey": "terror",
    "exp": "He struck terror in their hearts by what he said."
  },
  {
    "wordkey": "terror",
    "exp": "There was sheer terror in the area because of such almighty explosion."
  },
  {
    "wordkey": "threat",
    "exp": "They wanted to carry out a threat to deter their son from spending all the time with his friends."
  },
  {
    "wordkey": "threat",
    "exp": "It was just an empty threat, but it worked."
  },
  {
    "wordkey": "threat",
    "exp": "Famine posed a serious threat to the entire country."
  },
  {
    "wordkey": "threat",
    "exp": "The threat of his rival made him try even harder."
  },
  {
    "wordkey": "victim",
    "exp": "Unfortunately, a victim got two shots and is now fighting for his life."
  },
  {
    "wordkey": "victim",
    "exp": "She was a victim of the accident."
  },
  {
    "wordkey": "victim",
    "exp": "A lot of animals fall victim to human activities."
  },
  {
    "wordkey": "ancestor",
    "exp": "His ancestors were all farmers."
  },
  {
    "wordkey": "ancestor",
    "exp": "She traced her family tree and discovered that one of her ancestors was a famous artist."
  },
  {
    "wordkey": "angle",
    "exp": "He shifted his position to look at it from a different angle."
  },
  {
    "wordkey": "angle",
    "exp": "They were looking at the puzzle from the wrong angle."
  },
  {
    "wordkey": "angle",
    "exp": "When news about the issue came in, they could finally look at it from another angle."
  },
  {
    "wordkey": "angle",
    "exp": "He suggested they look at the problem from a different angle."
  },
  {
    "wordkey": "angle",
    "exp": "She accidentally hit her hip against the angle of the table."
  },
  {
    "wordkey": "angle",
    "exp": "They angled the spotlight on the performer."
  },
  {
    "wordkey": "boot",
    "exp": "She put on her boots to prevent her feet from getting soaked."
  },
  {
    "wordkey": "boot",
    "exp": "After packing their stuff, they tossed their luggage into the boot and got ready for the trip."
  },
  {
    "wordkey": "border",
    "exp": "The portrait had a gold border."
  },
  {
    "wordkey": "border",
    "exp": "She sewed a lace border around the cloth."
  },
  {
    "wordkey": "border",
    "exp": "The two nations were fighting at the border."
  },
  {
    "wordkey": "congratulate",
    "exp": "His friend went there to congratulate him on his achievement."
  },
  {
    "wordkey": "congratulate",
    "exp": "They arranged a small party to congratulate her on winning the competition."
  },
  {
    "wordkey": "frame",
    "exp": "They asked a carpenter to make a pretty frame for the picture."
  },
  {
    "wordkey": "frame",
    "exp": "He painted the wooden frame of the door with a gloss finish."
  },
  {
    "wordkey": "frame",
    "exp": "They were making furniture frames in the workshop."
  },
  {
    "wordkey": "frame",
    "exp": "We need to keep a positive frame of mind about our future."
  },
  {
    "wordkey": "heaven",
    "exp": "He said that good deeds will secure us a place in heaven."
  },
  {
    "wordkey": "heaven",
    "exp": "After such an exhausting day, a nice warm bath felt like heaven."
  },
  {
    "wordkey": "incredible",
    "exp": "He could shoot at the target with incredible accuracy."
  },
  {
    "wordkey": "incredible",
    "exp": "The fact that she got such good grades without even much studying was incredible."
  },
  {
    "wordkey": "incredible",
    "exp": "The music they played was incredible."
  },
  {
    "wordkey": "legend",
    "exp": "Their grandfather began telling a legend about a brave man."
  },
  {
    "wordkey": "legend",
    "exp": "Ronaldo and Messi are football legends."
  },
  {
    "wordkey": "legend",
    "exp": "Legend has it that a hidden treasure lies in a secluded cave in that desert."
  },
  {
    "wordkey": "praise",
    "exp": "They praised their son for successfully finishing his course."
  },
  {
    "wordkey": "praise",
    "exp": "He was highly praised for his bravery."
  },
  {
    "wordkey": "praise",
    "exp": "She won a lot of praise among her colleagues for such an outstanding performance."
  },
  {
    "wordkey": "praise",
    "exp": "The CEO sang his praises for doing such good work during the meeting."
  },
  {
    "wordkey": "proceed",
    "exp": "He decided to proceed with the work for a little more."
  },
  {
    "wordkey": "proceed",
    "exp": "They proceeded to reach advanced English."
  },
  {
    "wordkey": "proceed",
    "exp": "They had to proceed along the rugged terrain despite difficulty."
  },
  {
    "wordkey": "pure",
    "exp": "The wedding ring he got from his grandmother was pure gold."
  },
  {
    "wordkey": "pure",
    "exp": "Her dress was made of pure silk."
  },
  {
    "wordkey": "pure",
    "exp": "The kids had pure joy in their faces at the beach."
  },
  {
    "wordkey": "relative",
    "exp": "Both their close and distant relatives attended their wedding."
  },
  {
    "wordkey": "relative",
    "exp": "In relative terms, his grades were pretty good given the fact that he also had a part-time job."
  },
  {
    "wordkey": "relative",
    "exp": "Success is relative, as everyone has a different definition for it."
  },
  {
    "wordkey": "senior",
    "exp": "He was senior to all the other members."
  },
  {
    "wordkey": "senior",
    "exp": "She was a senior engineer at the time."
  },
  {
    "wordkey": "senior",
    "exp": "We should treat senior people with respect."
  },
  {
    "wordkey": "silent",
    "exp": "The house was completely silent for a while."
  },
  {
    "wordkey": "silent",
    "exp": "The jungle was as silent as the grave."
  },
  {
    "wordkey": "sink",
    "exp": "The bullet made a hole in the boat and made it sink into the water."
  },
  {
    "wordkey": "sink",
    "exp": "After the battle, the ship sank to the bottom of the ocean."
  },
  {
    "wordkey": "sink",
    "exp": "He fell into quicksand and was about to sink when she helped him out of it."
  },
  {
    "wordkey": "sink",
    "exp": "The prices started to sink after a short while."
  },
  {
    "wordkey": "sink",
    "exp": "Sunset is when the sun starts sinking below the horizon."
  },
  {
    "wordkey": "superior",
    "exp": "He was a superior scientist during the time."
  },
  {
    "wordkey": "superior",
    "exp": "The enemy troops were superior in numbers, so they decided to retreat."
  },
  {
    "wordkey": "superior",
    "exp": "She talked down to them in a superior manner."
  },
  {
    "wordkey": "surround",
    "exp": "He sat at his desk, surrounded by books and papers."
  },
  {
    "wordkey": "thick",
    "exp": "He was wearing a thick sweater."
  },
  {
    "wordkey": "thick",
    "exp": "A pretty thick forest surrounded the hamlet."
  },
  {
    "wordkey": "thick",
    "exp": "The fog was so thick that they could barely see through."
  },
  {
    "wordkey": "wrap",
    "exp": "She wrapped the duck in foil before putting it in the oven."
  },
  {
    "wordkey": "wrap",
    "exp": "They needed some wrapping paper and ribbon to wrap the gift."
  },
  {
    "wordkey": "wrap",
    "exp": "He wrapped a towel around his body and went to see who was at the door."
  },
  {
    "wordkey": "wrap",
    "exp": "It was frigid cold, so they wrapped up well to protect their body from the cold."
  },
  {
    "wordkey": "also",
    "exp": "Other than vocabulary, we also need to learn grammar."
  },
  {
    "wordkey": "automatically",
    "exp": "When he threw his punch at him, he automatically dodged."
  },
  {
    "wordkey": "automatically",
    "exp": "She automatically smiled when she saw the picture of her grandson."
  },
  {
    "wordkey": "automatically",
    "exp": "The time on the device will automatically change when you go online."
  },
  {
    "wordkey": "busy",
    "exp": "She was busy dealing with some paperwork."
  },
  {
    "wordkey": "busy",
    "exp": "Their house is located in a very busy place."
  },
  {
    "wordkey": "clear",
    "exp": "She asked her children to clear the living room while she was making dinner."
  },
  {
    "wordkey": "clear",
    "exp": "He was trying to clear the driveway of snow."
  },
  {
    "wordkey": "clear",
    "exp": "She asked him to clear all the things off the table."
  },
  {
    "wordkey": "clear",
    "exp": "He cleared his throat before talking."
  },
  {
    "wordkey": "clear",
    "exp": "The weather forecast predicted clear weather for the next few days."
  },
  {
    "wordkey": "clear",
    "exp": "After about an hour, the road became clear, and they could finally move."
  },
  {
    "wordkey": "clear",
    "exp": "He realized if he fix the issue, he could have a clear conscience again."
  },
  {
    "wordkey": "close",
    "exp": "She wanted to surprise her husband, so she asked him to close his eyes."
  },
  {
    "wordkey": "close",
    "exp": "The shop opens at 8 AM and closes at 10 PM."
  },
  {
    "wordkey": "close",
    "exp": "The book closes with a meticulous outline of what the reader needs to learn next."
  },
  {
    "wordkey": "close",
    "exp": "He made a toast for his father at the close of his performance."
  },
  {
    "wordkey": "close",
    "exp": "After a few minutes, he tried to bring the argument to a close."
  },
  {
    "wordkey": "close",
    "exp": "The concert came to a close with a very catchy song."
  },
  {
    "wordkey": "close",
    "exp": "Near the end of the movie, he was close to tears."
  },
  {
    "wordkey": "discuss",
    "exp": "They discussed the matter together."
  },
  {
    "wordkey": "discuss",
    "exp": "He wanted to discuss the issue with his friends."
  },
  {
    "wordkey": "feel",
    "exp": "The doctor asked him if he was feeling any better."
  },
  {
    "wordkey": "feel",
    "exp": "He could feel perspiration trickling down his chest."
  },
  {
    "wordkey": "feel",
    "exp": "She felt sympathy for the homeless guy."
  },
  {
    "wordkey": "feel",
    "exp": "I feel that we should look at the problem from another angle."
  },
  {
    "wordkey": "feel",
    "exp": "She felt that the decision was not fair."
  },
  {
    "wordkey": "listen",
    "exp": "He was trying to listen to what they were saying."
  },
  {
    "wordkey": "listen",
    "exp": "She was listening to Chinese music."
  },
  {
    "wordkey": "listen",
    "exp": "His new album is definitely worth a listen."
  },
  {
    "wordkey": "meet",
    "exp": "He went there to meet her for the first time."
  },
  {
    "wordkey": "music",
    "exp": "The band made a piece of moving music using just two musical instruments."
  },
  {
    "wordkey": "music",
    "exp": "He put on some music to jazz up the party."
  },
  {
    "wordkey": "normal",
    "exp": "The temperature was above normal during vacation."
  },
  {
    "wordkey": "normal",
    "exp": "He just wanted things to be back to normal."
  },
  {
    "wordkey": "quiet",
    "exp": "She kept quiet as she walked past their room."
  },
  {
    "wordkey": "quiet",
    "exp": "We need to keep quiet about the matter until the time is ripe."
  },
  {
    "wordkey": "relax",
    "exp": "They went to a nearby cafe to relax with a refreshing drink."
  },
  {
    "wordkey": "relax",
    "exp": "You need to stop for a while and relax your mind."
  },
  {
    "wordkey": "sleep",
    "exp": "We should have eight solid hours of sleep every night."
  },
  {
    "wordkey": "sleep",
    "exp": "The kids were cranky but finally went to sleep."
  },
  {
    "wordkey": "sleep",
    "exp": "She was so exhausted that she fell into a deep sleep."
  },
  {
    "wordkey": "sleep",
    "exp": "It was too late, so he offered her to sleep the night."
  },
  {
    "wordkey": "stress",
    "exp": "He was under a lot of stress at work."
  },
  {
    "wordkey": "stress",
    "exp": "How can one combat stress successfully?"
  },
  {
    "wordkey": "study",
    "exp": "She studied hard for her final exam."
  },
  {
    "wordkey": "study",
    "exp": "Some people go to libraries to get high-quality studies."
  },
  {
    "wordkey": "study",
    "exp": "Studies suggest that exercise can also strengthen the mind."
  },
  {
    "wordkey": "talk",
    "exp": "He invited his friend over to talk to him about the issue."
  },
  {
    "wordkey": "talk",
    "exp": "To make sure everything was going according to plan, I went there to have a talk with him about the project."
  },
  {
    "wordkey": "work",
    "exp": "If we work together, we can achieve even more."
  },
  {
    "wordkey": "work",
    "exp": "He had been working at a project for a long time."
  },
  {
    "wordkey": "work",
    "exp": "They work for a textile factory."
  },
  {
    "wordkey": "work",
    "exp": "She was working in a small cafe."
  },
  {
    "wordkey": "work",
    "exp": "He works as a software engineer in a new start-up."
  },
  {
    "wordkey": "work",
    "exp": "He called her to ask when she would get off work."
  },
  {
    "wordkey": "work",
    "exp": "They started work early so they could be free by afternoon."
  },
  {
    "wordkey": "work",
    "exp": "He put him in charge to supervise work at the office."
  },
  {
    "wordkey": "work",
    "exp": "She was exhibiting her works at the art gallery."
  },
  {
    "wordkey": "work",
    "exp": "His latest work received great praise for its touching plot."
  },
  {
    "wordkey": "write",
    "exp": "We should write our own sentences to activate new words."
  },
  {
    "wordkey": "write",
    "exp": "The teacher asked them to write an essay for the next session."
  },
  {
    "wordkey": "write",
    "exp": "He was trying to write some engaging articles on his web page."
  },
  {
    "wordkey": "basis",
    "exp": "They visit their grandparents on a yearly basis."
  },
  {
    "wordkey": "basis",
    "exp": "She saves up money on a regular basis."
  },
  {
    "wordkey": "basis",
    "exp": "His report formed the basis for a novel he was trying to write."
  },
  {
    "wordkey": "basis",
    "exp": "They picked some employees on the basis of experience, not qualifications."
  },
  {
    "wordkey": "biology",
    "exp": "Since he was an ornithologist, most of his books were about the biology of birds."
  },
  {
    "wordkey": "cage",
    "exp": "There was a cage in which an animal had been kept."
  },
  {
    "wordkey": "colleague",
    "exp": "She asked her colleague to help her with that client."
  },
  {
    "wordkey": "colony",
    "exp": "Australia and New Zealand are former British colonies."
  },
  {
    "wordkey": "debate",
    "exp": "They debated whether to go to a city resort or to the countryside."
  },
  {
    "wordkey": "debate",
    "exp": "There was a heated debate about the issue between the couple."
  },
  {
    "wordkey": "depart",
    "exp": "The train will depart from platform 8."
  },
  {
    "wordkey": "depart",
    "exp": "Their plane departed for California at 5 AM."
  },
  {
    "wordkey": "depress",
    "exp": "It depressed him to know that his father was in the hospital alone."
  },
  {
    "wordkey": "depress",
    "exp": "It depressed her watching that movie."
  },
  {
    "wordkey": "fascinate",
    "exp": "Almost anything about computers fascinates me."
  },
  {
    "wordkey": "fascinate",
    "exp": "Ross was always fascinated by dinosaurs."
  },
  {
    "wordkey": "mission",
    "exp": "It took some time, but the mission was accomplished."
  },
  {
    "wordkey": "mission",
    "exp": "The firefighters got ready for a rescue mission."
  },
  {
    "wordkey": "mission",
    "exp": "His mission in life was to help with the advancement of knowledge."
  },
  {
    "wordkey": "nevertheless",
    "exp": "He had already watched the series. Nevertheless, he was watching it again."
  },
  {
    "wordkey": "occupation",
    "exp": "Her occupation was writing short stories."
  },
  {
    "wordkey": "overseas",
    "exp": "They wanted to start a new branch overseas."
  },
  {
    "wordkey": "overseas",
    "exp": "Rachel got a job offer from an overseas company in France."
  },
  {
    "wordkey": "persuade",
    "exp": "The little boy persuaded his parents to buy him that toy."
  },
  {
    "wordkey": "route",
    "exp": "She ate her breakfast and followed the route to the school."
  },
  {
    "wordkey": "route",
    "exp": "He lived on the bus route; nevertheless, he was having difficulty catching the bus."
  },
  {
    "wordkey": "ruin",
    "exp": "The old palace had fallen into ruins long ago."
  },
  {
    "wordkey": "scholar",
    "exp": "He was a renowned scholar of biology."
  },
  {
    "wordkey": "significant",
    "exp": "There was a significant increase in the number of participants."
  },
  {
    "wordkey": "significant",
    "exp": "Before vowing, he wanted them to know how significant that commitment was."
  },
  {
    "wordkey": "volcano",
    "exp": "When the volcano erupted, all the animals ran away from the area."
  },
  {
    "wordkey": "broad",
    "exp": "She was tall and had broad hips."
  },
  {
    "wordkey": "bush",
    "exp": "There were some bushes around the backyard."
  },
  {
    "wordkey": "bush",
    "exp": "He had a bush of hair on his chest."
  },
  {
    "wordkey": "capable",
    "exp": "She was a very capable engineer."
  },
  {
    "wordkey": "capable",
    "exp": "He was capable of doing fifty push-ups in a row."
  },
  {
    "wordkey": "cheat",
    "exp": "They cheated on the math exam."
  },
  {
    "wordkey": "cheat",
    "exp": "She cheated at the game."
  },
  {
    "wordkey": "concentrate",
    "exp": "He was trying to concentrate on his English."
  },
  {
    "wordkey": "concentrate",
    "exp": "They concentrated on getting the work done well."
  },
  {
    "wordkey": "conclude",
    "exp": "After hearing them, the judge concluded that he was innocent."
  },
  {
    "wordkey": "conclude",
    "exp": "He concluded the lecture by telling a funny joke about archaeology."
  },
  {
    "wordkey": "confident",
    "exp": "They were confident that their son would win the game with ease."
  },
  {
    "wordkey": "confident",
    "exp": "He was so confident in himself that he thought he can actually do it."
  },
  {
    "wordkey": "confident",
    "exp": "She was confident about the presentation and thought it would impress them all."
  },
  {
    "wordkey": "considerable",
    "exp": "A considerable amount of money has been spent on the project."
  },
  {
    "wordkey": "considerable",
    "exp": "It was of such considerable importance for the prince."
  },
  {
    "wordkey": "convey",
    "exp": "He conveyed that they needed to go there with adequate equipment."
  },
  {
    "wordkey": "convey",
    "exp": "They conveyed their condolence to his family."
  },
  {
    "wordkey": "convey",
    "exp": "There was a pipeline that was supposed to convey water from the pool to the plantation."
  },
  {
    "wordkey": "convey",
    "exp": "A ferry is a large boat or ship that conveys passengers, goods, and vehicles."
  },
  {
    "wordkey": "definite",
    "exp": "Finally, she made a definite choice about the dress."
  },
  {
    "wordkey": "definite",
    "exp": "Your success is definite as long as you keep going like this."
  },
  {
    "wordkey": "delight",
    "exp": "It was such a delight for her to see her daughter playing with her doll."
  },
  {
    "wordkey": "delight",
    "exp": "They watched the show together with great delight."
  },
  {
    "wordkey": "delight",
    "exp": "He took delight in playing with the puppy."
  },
  {
    "wordkey": "delight",
    "exp": "To his delight, he actually turned out to be very good at it."
  },
  {
    "wordkey": "delight",
    "exp": "To the delight of the children, she surprised them by making cookies."
  },
  {
    "wordkey": "destination",
    "exp": "They departed for a long destination overseas."
  },
  {
    "wordkey": "destination",
    "exp": "The destination of the space shuttle was the moon."
  },
  {
    "wordkey": "destination",
    "exp": "After a tiring journey, they finally arrive at their destination."
  },
  {
    "wordkey": "destination",
    "exp": "The package went astray and never reached its destination."
  },
  {
    "wordkey": "edge",
    "exp": "She sewed a ribbon around the edge of the cloth."
  },
  {
    "wordkey": "edge",
    "exp": "They stood on the edge of the mountain and admired the view."
  },
  {
    "wordkey": "instruction",
    "exp": "She grabbed the package and read the instructions to find out how to make it."
  },
  {
    "wordkey": "instruction",
    "exp": "The session was meant to provide instructions on how to develop programming skills."
  },
  {
    "wordkey": "instruction",
    "exp": "His father gave him basic instruction in driving."
  },
  {
    "wordkey": "instruction",
    "exp": "He was reading the instruction manual to learn how to make it."
  },
  {
    "wordkey": "path",
    "exp": "They followed a path down the mountain."
  },
  {
    "wordkey": "path",
    "exp": "The path leads to a secluded cave hidden behind foliage."
  },
  {
    "wordkey": "path",
    "exp": "The ant inadvertently walked into the path of a passing human."
  },
  {
    "wordkey": "resort",
    "exp": "There was a beach resort close to the hotel."
  },
  {
    "wordkey": "resort",
    "exp": "They finally arrived at the ski resort, eager to hit the slopes."
  },
  {
    "wordkey": "shadow",
    "exp": "The shadow of a tree limb scared the kids."
  },
  {
    "wordkey": "shadow",
    "exp": "The sun was shining, but a tree cast its shadow over them."
  },
  {
    "wordkey": "succeed",
    "exp": "Finally, he succeeded in his studies and achieved his goals."
  },
  {
    "wordkey": "succeed",
    "exp": "We will succeed in mastering English as long as we keep learning."
  },
  {
    "wordkey": "suspect",
    "exp": "They strongly suspected that the janitor had something to do with it."
  },
  {
    "wordkey": "suspect",
    "exp": "He was suspected of leaking confidential information."
  },
  {
    "wordkey": "valley",
    "exp": "They sat in the valley and had a picnic."
  },
  {
    "wordkey": "valley",
    "exp": "There was a stream flowing through the valley."
  },
  {
    "wordkey": "against",
    "exp": "The two friends leaned against the wall."
  },
  {
    "wordkey": "against",
    "exp": "They came up against some problems during the project."
  },
  {
    "wordkey": "beach",
    "exp": "They walked along the sandy beach together."
  },
  {
    "wordkey": "beach",
    "exp": "Monica got stung by a jellyfish at the beach."
  },
  {
    "wordkey": "damage",
    "exp": "He damaged his car and another one by driving recklessly."
  },
  {
    "wordkey": "damage",
    "exp": "The old building was damaged by a bolt of lightning."
  },
  {
    "wordkey": "damage",
    "exp": "The hurricane caused damage to the old shack."
  },
  {
    "wordkey": "damage",
    "exp": "Smoking can do damage to the lungs."
  },
  {
    "wordkey": "discover",
    "exp": "They discovered a new land in the middle of the ocean."
  },
  {
    "wordkey": "discover",
    "exp": "He discovered how to treat the disease after observing the experiment."
  },
  {
    "wordkey": "discover",
    "exp": "She discovered that it was just a dog stealing food."
  },
  {
    "wordkey": "fix",
    "exp": "They asked a handyman to fix the problem."
  },
  {
    "wordkey": "fix",
    "exp": "He called them to fix a date for the meeting."
  },
  {
    "wordkey": "fix",
    "exp": "After a lot of haggling, they fixed the price at $1200."
  },
  {
    "wordkey": "identify",
    "exp": "One officer identified the outlaw and went after him."
  },
  {
    "wordkey": "identify",
    "exp": "They identified the ship as Spanish."
  },
  {
    "wordkey": "ocean",
    "exp": "There are a lot of creatures in the ocean."
  },
  {
    "wordkey": "ocean",
    "exp": "They sailed on the ocean with a boat."
  },
  {
    "wordkey": "ocean",
    "exp": "Their house was by the ocean."
  },
  {
    "wordkey": "ocean",
    "exp": "The boat was going across the choppy ocean."
  },
  {
    "wordkey": "perhaps",
    "exp": "Apart from reading textbooks, perhaps we should also read some short stories."
  },
  {
    "wordkey": "pleasant",
    "exp": "It was such a pleasant day that they decided to have a picnic."
  },
  {
    "wordkey": "pleasant",
    "exp": "It was pleasant to just lie on the beach and soak up the sunshine."
  },
  {
    "wordkey": "prevent",
    "exp": "The police officer used handcuffs to prevent the criminal from escaping."
  },
  {
    "wordkey": "prevent",
    "exp": "He had a handicap that prevented him from driving a vehicle."
  },
  {
    "wordkey": "rock",
    "exp": "He threw a rock into the ocean."
  },
  {
    "wordkey": "rock",
    "exp": "She fell on a rock and injured herself."
  },
  {
    "wordkey": "save",
    "exp": "He saved his son from an accident that was about to happen."
  },
  {
    "wordkey": "save",
    "exp": "We should all try our best to save our planet."
  },
  {
    "wordkey": "save",
    "exp": "She fell into the ocean, but they managed to save her."
  },
  {
    "wordkey": "save",
    "exp": "Luckily, there was a doctor at the site of the accident who could save his life."
  },
  {
    "wordkey": "smile",
    "exp": "She tickled the baby, and he smiled."
  },
  {
    "wordkey": "smile",
    "exp": "He smiled at his friend and gave him a winkle."
  },
  {
    "wordkey": "step",
    "exp": "No one dared to step out to see what was there."
  },
  {
    "wordkey": "step",
    "exp": "He stepped in mud and got even more upset."
  },
  {
    "wordkey": "step",
    "exp": "She apologized once she stepped on his shoe."
  },
  {
    "wordkey": "still",
    "exp": "He asked if they still worked there."
  },
  {
    "wordkey": "still",
    "exp": "She was still in bed."
  },
  {
    "wordkey": "still",
    "exp": "It was midnight and the music could still be heard."
  },
  {
    "wordkey": "taste",
    "exp": "The taste of the food was spicy."
  },
  {
    "wordkey": "taste",
    "exp": "Some foods are acquired tastes, meaning that you may like them after a few tries."
  },
  {
    "wordkey": "taste",
    "exp": "The chef tasted the food to see if it needed anything else."
  },
  {
    "wordkey": "taste",
    "exp": "He just wanted to taste freedom and lead a happy life."
  },
  {
    "wordkey": "throw",
    "exp": "They threw rocks into the lake."
  },
  {
    "wordkey": "throw",
    "exp": "He threw a punch at his face, but he dodged."
  },
  {
    "wordkey": "wave",
    "exp": "The surfer waited for a big wave."
  },
  {
    "wordkey": "wave",
    "exp": "Tidal waves were crashing against the ship."
  },
  {
    "wordkey": "citizen",
    "exp": "He applied to become an American citizen."
  },
  {
    "wordkey": "citizen",
    "exp": "Despite their hard work, very immigrants were treated like secon-class citizens."
  },
  {
    "wordkey": "council",
    "exp": "The local council decided to repair the old library."
  },
  {
    "wordkey": "declare",
    "exp": "At the meeting, they declared a new CEO."
  },
  {
    "wordkey": "declare",
    "exp": "The factory was declared bankrupt."
  },
  {
    "wordkey": "declare",
    "exp": "The pastor declared them husband and wife."
  },
  {
    "wordkey": "declare",
    "exp": "Eventually, things went from bad to worse, and they declared war."
  },
  {
    "wordkey": "enormous",
    "exp": "They used an enormous vehicle to make a hole in the ground."
  },
  {
    "wordkey": "enormous",
    "exp": "An enormous amount of money was needed for such project."
  },
  {
    "wordkey": "extraordinary",
    "exp": "Her last performance was extraordinary."
  },
  {
    "wordkey": "extraordinary",
    "exp": "It was such an extraordinary story that both of them were captivated by it."
  },
  {
    "wordkey": "extraordinary",
    "exp": "Monica had extraordinary culinary skills."
  },
  {
    "wordkey": "fog",
    "exp": "They waited for the fog to come down so they could see better."
  },
  {
    "wordkey": "fog",
    "exp": "At the summit of the mountain, there was thick fog."
  },
  {
    "wordkey": "fog",
    "exp": "There were patches of fog on the street."
  },
  {
    "wordkey": "fog",
    "exp": "A blanket of fog made it difficult to drive."
  },
  {
    "wordkey": "funeral",
    "exp": "Everyone was filled with sorrow at her funeral."
  },
  {
    "wordkey": "funeral",
    "exp": "Over one hundred mourners attended his funeral."
  },
  {
    "wordkey": "funeral",
    "exp": "A funeral procession was making its way to the cemetery."
  },
  {
    "wordkey": "giant",
    "exp": "There was a giant house at the end of the street."
  },
  {
    "wordkey": "impression",
    "exp": "Their first impression of him was that he was friendly."
  },
  {
    "wordkey": "impression",
    "exp": "She got the impression that he was a mean guy."
  },
  {
    "wordkey": "impression",
    "exp": "He wanted to make a good impression at the interview."
  },
  {
    "wordkey": "impression",
    "exp": "He was under the impression that they were romantic partners."
  },
  {
    "wordkey": "intention",
    "exp": "He had an intention of throwing her a party."
  },
  {
    "wordkey": "intention",
    "exp": "Her intention was to surprise him."
  },
  {
    "wordkey": "intention",
    "exp": "They had good intentions, but he misunderstood."
  },
  {
    "wordkey": "mad",
    "exp": "The fact that he was whining most of the time made him mad."
  },
  {
    "wordkey": "mad",
    "exp": "He was driving them mad by behaving like that."
  },
  {
    "wordkey": "mad",
    "exp": "She was under the impression that he was mad at her."
  },
  {
    "wordkey": "ought",
    "exp": "We ought to take her too."
  },
  {
    "wordkey": "ought",
    "exp": "You ought to clean up first before inviting friends over."
  },
  {
    "wordkey": "ought",
    "exp": "They ought to be here by 6 PM."
  },
  {
    "wordkey": "ought",
    "exp": "He ought to have told her what was going on."
  },
  {
    "wordkey": "resist",
    "exp": "He resisted taking the medicine."
  },
  {
    "wordkey": "resist",
    "exp": "She was trying to resist the chocolate cake."
  },
  {
    "wordkey": "reveal",
    "exp": "He revealed his secret to his close friend."
  },
  {
    "wordkey": "reveal",
    "exp": "He had revealed where the treasure was buried in a map."
  },
  {
    "wordkey": "rid",
    "exp": "They wanted to rid the farm of pests."
  },
  {
    "wordkey": "sword",
    "exp": "The assassin used a sword to kill him."
  },
  {
    "wordkey": "tale",
    "exp": "He invented a fascinating tale for the children."
  },
  {
    "wordkey": "trap",
    "exp": "They trapped different kinds of animals for scientific research."
  },
  {
    "wordkey": "trap",
    "exp": "The little girl trapped some fireflies in a jar."
  },
  {
    "wordkey": "trap",
    "exp": "The poor dog was caught in a trap and injured its leg."
  },
  {
    "wordkey": "trial",
    "exp": "He went on trial for mindless vandalism."
  },
  {
    "wordkey": "trial",
    "exp": "It was a complicated trial, but they managed to prove themselves innocent."
  },
  {
    "wordkey": "violent",
    "exp": "Territorial animals can be very violent."
  },
  {
    "wordkey": "violent",
    "exp": "The movie had some violent scenes."
  },
  {
    "wordkey": "admission",
    "exp": "The admission fee to the museum was five dollars each."
  },
  {
    "wordkey": "admission",
    "exp": "After she got her certificate, she gained admission to the club."
  },
  {
    "wordkey": "admission",
    "exp": "They were refused admission because they forgot their tickets."
  },
  {
    "wordkey": "admission",
    "exp": "He made an admission of guilt and said he was regretful."
  },
  {
    "wordkey": "admission",
    "exp": "Her admission of failure in the project got her support from her colleague."
  },
  {
    "wordkey": "admission",
    "exp": "His admission of defeat was accompanied by a promise to get better for the next time."
  },
  {
    "wordkey": "astronomy",
    "exp": "He always wanted to study astronomy."
  },
  {
    "wordkey": "astronomy",
    "exp": "Her passion for astronomy started when she saw a meteor shower."
  },
  {
    "wordkey": "blame",
    "exp": "She blamed her husband for that occurrence."
  },
  {
    "wordkey": "blame",
    "exp": "He blamed the heavy traffic for his late arrival."
  },
  {
    "wordkey": "blame",
    "exp": "They blamed the problem on him."
  },
  {
    "wordkey": "blame",
    "exp": "The blame for the accident was pinned on his driving."
  },
  {
    "wordkey": "blame",
    "exp": "He was brave enough to take the blame for such a rookie mistake."
  },
  {
    "wordkey": "chemistry",
    "exp": "Chemistry is her favorite subject."
  },
  {
    "wordkey": "chemistry",
    "exp": "In chemistry class, the professor poured some substances into a beaker and mixed them."
  },
  {
    "wordkey": "chemistry",
    "exp": "He thought there was a chemistry between them."
  },
  {
    "wordkey": "despite",
    "exp": "They proceeded with the project despite being tired."
  },
  {
    "wordkey": "despite",
    "exp": "Despite the fact that it was raining, they still decided to go."
  },
  {
    "wordkey": "dinosaur",
    "exp": "They say dinosaurs became extinct after the collision of asteroids."
  },
  {
    "wordkey": "exhibit",
    "exp": "The artist exhibited his works at the art gallery."
  },
  {
    "wordkey": "exhibit",
    "exp": "Despite the tension, he exhibited calmness."
  },
  {
    "wordkey": "exhibit",
    "exp": "She exhibited a good command of the subject."
  },
  {
    "wordkey": "exhibit",
    "exp": "The wildlife exhibit gave them an opportunity to learn more about animals."
  },
  {
    "wordkey": "fame",
    "exp": "He gained fame after he won the championship."
  },
  {
    "wordkey": "fame",
    "exp": "The warrior rose to fame by beating the challenger."
  },
  {
    "wordkey": "fame",
    "exp": "Most people associate fame with luck."
  },
  {
    "wordkey": "forecast",
    "exp": "Meteorologists forecast heavy snow for the upcoming days."
  },
  {
    "wordkey": "forecast",
    "exp": "He was an economist and forecast a dramatic rise in the cryptocurrency market."
  },
  {
    "wordkey": "forecast",
    "exp": "His teacher gave a highly optimistic forecast of his future."
  },
  {
    "wordkey": "forecast",
    "exp": "The weather forecast said there would be heavy rain."
  },
  {
    "wordkey": "genius",
    "exp": "He could solve most of the problems, since he was a genius in math."
  },
  {
    "wordkey": "genius",
    "exp": "She has a genius for dealing with facts and figures."
  },
  {
    "wordkey": "genius",
    "exp": "He was an engineer of genius."
  },
  {
    "wordkey": "gentle",
    "exp": "She was so gentle with her pupils."
  },
  {
    "wordkey": "gentle",
    "exp": "They skied down the gentle slope."
  },
  {
    "wordkey": "gentle",
    "exp": "A gentle breeze blew and lifted her hair."
  },
  {
    "wordkey": "gentle",
    "exp": "The coach gave them a few gentle exercises to warm up."
  },
  {
    "wordkey": "geography",
    "exp": "Geography was his branch of study."
  },
  {
    "wordkey": "geography",
    "exp": "They decided to trust him, as he knew the geography of the area."
  },
  {
    "wordkey": "interfere",
    "exp": "It was silly of him to interfere in their personal life."
  },
  {
    "wordkey": "interfere",
    "exp": "The loud noise from the construction site began to interfere with his concentration."
  },
  {
    "wordkey": "lightly",
    "exp": "The painter drew lightly on the canvas."
  },
  {
    "wordkey": "lightly",
    "exp": "You only need to cook it lightly for a few minutes."
  },
  {
    "wordkey": "principal",
    "exp": "The principal asked all the teachers to attend the meeting."
  },
  {
    "wordkey": "principal",
    "exp": "Their principal reason to move was to get closer to his workplace."
  },
  {
    "wordkey": "principal",
    "exp": "My principal concern for the time being is improving my English skills."
  },
  {
    "wordkey": "row",
    "exp": "There was a row of toys in his room."
  },
  {
    "wordkey": "row",
    "exp": "They had to stand in a row for forty minutes."
  },
  {
    "wordkey": "row",
    "exp": "She was in the back row of the concert."
  },
  {
    "wordkey": "row",
    "exp": "They had won six matches in a row."
  },
  {
    "wordkey": "shelf",
    "exp": "We need to use new words and phrases and not leave them on the shelf."
  },
  {
    "wordkey": "super",
    "exp": "They did a super job by painting the room by themselves."
  },
  {
    "wordkey": "super",
    "exp": "Most industries will be revolutionized with the rise of super-intelligent robots."
  },
  {
    "wordkey": "super",
    "exp": "He did super well at his job."
  },
  {
    "wordkey": "wet",
    "exp": "They were both wet because of such driving rain."
  },
  {
    "wordkey": "wet",
    "exp": "After playing with their water gun, they got soaking wet."
  },
  {
    "wordkey": "abuse",
    "exp": "The poor dog had been physically abused."
  },
  {
    "wordkey": "abuse",
    "exp": "They had been sexually abused."
  },
  {
    "wordkey": "abuse",
    "exp": "He abused his servant before he ran away."
  },
  {
    "wordkey": "abuse",
    "exp": "She abused her position at the firm."
  },
  {
    "wordkey": "abuse",
    "exp": "They abused his trust, taking advantage of his generosity."
  },
  {
    "wordkey": "abuse",
    "exp": "Drug abuse can lead to health problems."
  },
  {
    "wordkey": "abuse",
    "exp": "He was fired due to an abuse of power in the workplace."
  },
  {
    "wordkey": "afford",
    "exp": "He asked her if she could afford to take some time off work."
  },
  {
    "wordkey": "bake",
    "exp": "She baked a cake for his birthday."
  },
  {
    "wordkey": "bake",
    "exp": "The chef told him to bake it at 150 degrees for 20 minutes."
  },
  {
    "wordkey": "bean",
    "exp": "He ground some coffee beans."
  },
  {
    "wordkey": "bean",
    "exp": "They planted some beans, and soon, a plant sprouted."
  },
  {
    "wordkey": "bean",
    "exp": "After sowing the beans, a new plant sprouted in a few days."
  },
  {
    "wordkey": "candle",
    "exp": "A gentle wind blew and made the candle flicker."
  },
  {
    "wordkey": "candle",
    "exp": "It was dark in the room, so they lit some candles."
  },
  {
    "wordkey": "convert",
    "exp": "They decided to convert the bedroom into a playroom."
  },
  {
    "wordkey": "convert",
    "exp": "Do you know the formula to convert Miles into Kilometers?"
  },
  {
    "wordkey": "convert",
    "exp": "He converted to Christianity before the battle began."
  },
  {
    "wordkey": "debt",
    "exp": "After a few years, he was able to pay off all his debts."
  },
  {
    "wordkey": "debt",
    "exp": "He got into debt because of that incident."
  },
  {
    "wordkey": "debt",
    "exp": "They ran up a huge debt by getting that expensive machinery."
  },
  {
    "wordkey": "debt",
    "exp": "He had been in debt to the bank after taking out a big mortgage."
  },
  {
    "wordkey": "decrease",
    "exp": "Prices decreased sharply and then went up again."
  },
  {
    "wordkey": "decrease",
    "exp": "They were discussing how to decrease the crime rate in the town."
  },
  {
    "wordkey": "decrease",
    "exp": "He decreased the price by 10 percent because they were his friends."
  },
  {
    "wordkey": "decrease",
    "exp": "They experienced a noticeable decrease during the recession."
  },
  {
    "wordkey": "fault",
    "exp": "It was his fault that they got behind with the project."
  },
  {
    "wordkey": "fault",
    "exp": "The fault lay with the company that was supposed to provide them."
  },
  {
    "wordkey": "fault",
    "exp": "Through no fault of his own, he had to clean up the mess."
  },
  {
    "wordkey": "fund",
    "exp": "The organization set up a fund for some new equipment."
  },
  {
    "wordkey": "fund",
    "exp": "The government allocated a substantial fund for the improvement of the area."
  },
  {
    "wordkey": "generous",
    "exp": "A generous man decided to help them out."
  },
  {
    "wordkey": "generous",
    "exp": "It was generous of her to lend him that amount of money."
  },
  {
    "wordkey": "generous",
    "exp": "His employee had been very generous with him."
  },
  {
    "wordkey": "ingredient",
    "exp": "The main ingredients for the dish were rice and potatoes."
  },
  {
    "wordkey": "ingredient",
    "exp": "The list of ingredients includes sugar, flour, eggs, milk, and pistachio."
  },
  {
    "wordkey": "insist",
    "exp": "She insisted that they have dinner at her apartment."
  },
  {
    "wordkey": "insist",
    "exp": "He insisted on helping them out."
  },
  {
    "wordkey": "mess",
    "exp": "She always makes a mess when she cooks."
  },
  {
    "wordkey": "mess",
    "exp": "He told them to clean up the mess."
  },
  {
    "wordkey": "mess",
    "exp": "They got themselves into a mess by losing the device."
  },
  {
    "wordkey": "mess",
    "exp": "His life was a mess at the time."
  },
  {
    "wordkey": "metal",
    "exp": "They needed metal to reinforce the framework."
  },
  {
    "wordkey": "monitor",
    "exp": "They were monitoring all his phone calls."
  },
  {
    "wordkey": "oppose",
    "exp": "He opposed the idea of transferring her to another branch."
  },
  {
    "wordkey": "oppose",
    "exp": "She opposed adopting a different approach."
  },
  {
    "wordkey": "passive",
    "exp": "We should stop being passive about the issue and do something."
  },
  {
    "wordkey": "passive",
    "exp": "He was a passive member of the team as he was a junior."
  },
  {
    "wordkey": "quantity",
    "exp": "We should focus on quality more than quantity."
  },
  {
    "wordkey": "quantity",
    "exp": "They had only a small quantity of almonds, so they used pistachios instead."
  },
  {
    "wordkey": "quantity",
    "exp": "A vast quantity of food had been wasted."
  },
  {
    "wordkey": "sue",
    "exp": "He sued them for using his idea without asking his permission."
  },
  {
    "wordkey": "sue",
    "exp": "She threatened to sue them for their behavior."
  },
  {
    "wordkey": "adequate",
    "exp": "The amount was adequate for their needs."
  },
  {
    "wordkey": "anxiety",
    "exp": "His anxiety was keeping him from doing it."
  },
  {
    "wordkey": "anxiety",
    "exp": "Some children were filled with anxiety about their first school day."
  },
  {
    "wordkey": "army",
    "exp": "Several soldiers had died, and the army was tired."
  },
  {
    "wordkey": "army",
    "exp": "He joined the army at the age of 17."
  },
  {
    "wordkey": "army",
    "exp": "When war was declared, they mobilized the army."
  },
  {
    "wordkey": "carve",
    "exp": "Monica carved the turkey and put it on the serving platter."
  },
  {
    "wordkey": "carve",
    "exp": "They carved their names on the trunk of a tree."
  },
  {
    "wordkey": "carve",
    "exp": "The artist carved a statue out of marble."
  },
  {
    "wordkey": "carve",
    "exp": "Ancient letters had been carved into the stones."
  },
  {
    "wordkey": "consult",
    "exp": "He consulted with his assistant about the matter."
  },
  {
    "wordkey": "consult",
    "exp": "They consulted a map to find the right path."
  },
  {
    "wordkey": "emergency",
    "exp": "The weather was so bad that the plane had to make an emergency landing."
  },
  {
    "wordkey": "emergency",
    "exp": "They escaped the danger through the emergency exit."
  },
  {
    "wordkey": "emergency",
    "exp": "Service animals can come in handy for disabled people in an emergency."
  },
  {
    "wordkey": "fortune",
    "exp": "She had the fortune to meet with her favorite actor."
  },
  {
    "wordkey": "fortune",
    "exp": "After years of dedication and hard work, fortune finally smiled on him, and he began to lead a happy life."
  },
  {
    "wordkey": "fortune",
    "exp": "Their house is worth a fortune."
  },
  {
    "wordkey": "fortune",
    "exp": "They made a small fortune by selling handmade jewelry."
  },
  {
    "wordkey": "fortune",
    "exp": "His idea was brilliant, but it would cost a fortune."
  },
  {
    "wordkey": "guarantee",
    "exp": "The man guaranteed that the car would be adequate for them."
  },
  {
    "wordkey": "guarantee",
    "exp": "The chair is guaranteed for three years."
  },
  {
    "wordkey": "guarantee",
    "exp": "Their new monitor is guaranteed free of delay during games."
  },
  {
    "wordkey": "guarantee",
    "exp": "Their cosmetics are guaranteed free from harmful chemicals."
  },
  {
    "wordkey": "guarantee",
    "exp": "The chair comes with a three-year guarantee."
  },
  {
    "wordkey": "initial",
    "exp": "His initial response was not affirmative."
  },
  {
    "wordkey": "initial",
    "exp": "Their initial plan was to just make a piece of software for themselves."
  },
  {
    "wordkey": "initial",
    "exp": "He bought a necklace with her initial on it."
  },
  {
    "wordkey": "intense",
    "exp": "The dish had an intense flavor."
  },
  {
    "wordkey": "intense",
    "exp": "After falling from the steps, she felt an intense pain."
  },
  {
    "wordkey": "intense",
    "exp": "The intense heat from the furnace made the place unbearable."
  },
  {
    "wordkey": "lend",
    "exp": "He lent his friend some money."
  },
  {
    "wordkey": "lend",
    "exp": "She asked if he could lend her his book."
  },
  {
    "wordkey": "peak",
    "exp": "They were standing on the peak of the mountain."
  },
  {
    "wordkey": "peak",
    "exp": "She was at the peak of her career."
  },
  {
    "wordkey": "peak",
    "exp": "The traffic will reach its peak around 5 PM."
  },
  {
    "wordkey": "peak",
    "exp": "Their sales peaked in January."
  },
  {
    "wordkey": "peak",
    "exp": "The sun peaked over the horizon."
  },
  {
    "wordkey": "potential",
    "exp": "They put on their helmets to avoid any potential danger."
  },
  {
    "wordkey": "potential",
    "exp": "Several potential customers were looking around."
  },
  {
    "wordkey": "pride",
    "exp": "They felt a sense of pride as their son won the gold medal."
  },
  {
    "wordkey": "pride",
    "exp": "He took pride in coming first at the competition."
  },
  {
    "wordkey": "proof",
    "exp": "She had no proof since she had lost the receipt."
  },
  {
    "wordkey": "quit",
    "exp": "Finally, he managed to quit smoking."
  },
  {
    "wordkey": "quit",
    "exp": "He quit his job after finding the buried treasure."
  },
  {
    "wordkey": "spin",
    "exp": "The wheel spun around, and when it stopped, they won a great deal of money."
  },
  {
    "wordkey": "spin",
    "exp": "The propeller of the plane began to spin."
  },
  {
    "wordkey": "spin",
    "exp": "They spun a coin to settle the argument over which game to play."
  },
  {
    "wordkey": "spin",
    "exp": "He was walking down the street when he saw them spinning past him."
  },
  {
    "wordkey": "spin",
    "exp": "A police car spun along the road with its siren blaring."
  },
  {
    "wordkey": "spin",
    "exp": "The race cars spun around the track, thrilling the spectators."
  },
  {
    "wordkey": "spin",
    "exp": "She spun a funny story to entertain the kids."
  },
  {
    "wordkey": "tutor",
    "exp": "They hired a tutor to help their son with the subject at home."
  },
  {
    "wordkey": "apparent",
    "exp": "His sadness was apparent from his look."
  },
  {
    "wordkey": "apparent",
    "exp": "It was apparent that she had been studying all night."
  },
  {
    "wordkey": "blind",
    "exp": "He went blind in his fifties."
  },
  {
    "wordkey": "calculate",
    "exp": "They calculated that it would take about a year to save the money they needed."
  },
  {
    "wordkey": "calculate",
    "exp": "The amount of money needed for the project has been calculated at one million dollars."
  },
  {
    "wordkey": "chat",
    "exp": "He was chatting with her for hours."
  },
  {
    "wordkey": "chat",
    "exp": "They were chatting about what happened the other day."
  },
  {
    "wordkey": "commit",
    "exp": "She was deeply committed to her studies."
  },
  {
    "wordkey": "commit",
    "exp": "He had committed to improving his skills."
  },
  {
    "wordkey": "commit",
    "exp": "She committed a minor offense."
  },
  {
    "wordkey": "commit",
    "exp": "He was found guilty because he committed murder."
  },
  {
    "wordkey": "compose",
    "exp": "The musician composed several pieces of music."
  },
  {
    "wordkey": "compose",
    "exp": "He composed a poem for his girlfriend."
  },
  {
    "wordkey": "dormitory",
    "exp": "She remained in her dormitory that day."
  },
  {
    "wordkey": "exhaust",
    "exp": "They exhausted themselves by playing that ball game."
  },
  {
    "wordkey": "exhaust",
    "exp": "My energy was exhausted by those tasks."
  },
  {
    "wordkey": "greenhouse",
    "exp": "He had a small greenhouse where he was growing some crops."
  },
  {
    "wordkey": "ignore",
    "exp": "He gave her a friendly smile, but she ignored him."
  },
  {
    "wordkey": "ignore",
    "exp": "She ignored what the kids wanted and began telling them a story."
  },
  {
    "wordkey": "obvious",
    "exp": "It was obvious that he wanted to be alone."
  },
  {
    "wordkey": "obvious",
    "exp": "He thought it was useful information, but he was stating the obvious."
  },
  {
    "wordkey": "physics",
    "exp": "His favorite subject was physics."
  },
  {
    "wordkey": "portion",
    "exp": "A small portion of the cake fell on the floor."
  },
  {
    "wordkey": "remind",
    "exp": "The picture reminded him of his native land."
  },
  {
    "wordkey": "remind",
    "exp": "She reminded him about the appointment."
  },
  {
    "wordkey": "remind",
    "exp": "He reminded his friend to call about the issue."
  },
  {
    "wordkey": "remind",
    "exp": "She reminded him that the faucet needed to be fixed."
  },
  {
    "wordkey": "secretary",
    "exp": "He asked his secretary to make an appointment for the evening."
  },
  {
    "wordkey": "severe",
    "exp": "After he fell, he was in severe pain."
  },
  {
    "wordkey": "severe",
    "exp": "In some parts of the world, there is a severe food shortage."
  },
  {
    "wordkey": "talent",
    "exp": "She had a musical talent."
  },
  {
    "wordkey": "talent",
    "exp": "He had a talent for playing football."
  },
  {
    "wordkey": "uniform",
    "exp": "On her way home, she tripped over and ripped her uniform."
  },
  {
    "wordkey": "uniform",
    "exp": "When they got there, they saw someone in his military uniform."
  },
  {
    "wordkey": "vision",
    "exp": "He had no vision in his right eye."
  },
  {
    "wordkey": "vision",
    "exp": "The psychic had a vision of their future."
  },
  {
    "wordkey": "absorb",
    "exp": "She used a sponge to absorb the juice on the table."
  },
  {
    "wordkey": "absorb",
    "exp": "The drug was quickly absorbed into the blood."
  },
  {
    "wordkey": "boss",
    "exp": "He asked his boss if he could leave work earlier."
  },
  {
    "wordkey": "charitable",
    "exp": "They helped a charitable organization by donating some money."
  },
  {
    "wordkey": "charitable",
    "exp": "She works for a charitable foundation."
  },
  {
    "wordkey": "charitable",
    "exp": "His charitable view of others gained him respect."
  },
  {
    "wordkey": "committee",
    "exp": "The committee held a meeting to discuss the issue."
  },
  {
    "wordkey": "committee",
    "exp": "She was on the school committee."
  },
  {
    "wordkey": "contract",
    "exp": "He read the contract carefully before signing it."
  },
  {
    "wordkey": "contract",
    "exp": "She reminded him that he would be sued if he broke the terms of the contract."
  },
  {
    "wordkey": "contract",
    "exp": "Their lawyer drew up a contract for them."
  },
  {
    "wordkey": "contract",
    "exp": "He took legal action against them for breach of contract."
  },
  {
    "wordkey": "contract",
    "exp": "They were in breach of contract and had to pay a heavy fine for it."
  },
  {
    "wordkey": "contract",
    "exp": "He was contracted to repair the product in case of any fault."
  },
  {
    "wordkey": "contract",
    "exp": "Some of them contracted malaria while working in Africa."
  },
  {
    "wordkey": "crew",
    "exp": "The captain gave all the crew members a task."
  },
  {
    "wordkey": "crew",
    "exp": "He had a crew of four that helped him in the project."
  },
  {
    "wordkey": "crew",
    "exp": "The ambulance crew rushed to take the injured person to the hospital."
  },
  {
    "wordkey": "devote",
    "exp": "They devoted a lot of time to their children."
  },
  {
    "wordkey": "devote",
    "exp": "The kind lady devoted her energy to the safety of children in kindergarten."
  },
  {
    "wordkey": "devote",
    "exp": "They devoted one of the rooms to playing games."
  },
  {
    "wordkey": "devote",
    "exp": "He devoted most of his speech to the importance of exercise."
  },
  {
    "wordkey": "dig",
    "exp": "They dug the ground, looking for the treasure."
  },
  {
    "wordkey": "dine",
    "exp": "They chatted for a while and then dined on the couch."
  },
  {
    "wordkey": "donate",
    "exp": "They donated one hundred dollars to the charity."
  },
  {
    "wordkey": "donate",
    "exp": "She donated several books to the library."
  },
  {
    "wordkey": "double",
    "exp": "Since he asked his friend over, he used double the amount of rice to cook."
  },
  {
    "wordkey": "double",
    "exp": "They both ordered double espresso."
  },
  {
    "wordkey": "double",
    "exp": "The doctor injected a double-strength drug to help him with the intense pain."
  },
  {
    "wordkey": "flavor",
    "exp": "The flavor of the dish was spicy and sour."
  },
  {
    "wordkey": "foundation",
    "exp": "The foundation had raised enough money for the scholars to conduct the research."
  },
  {
    "wordkey": "foundation",
    "exp": "It took several weeks just to lay the foundations of the structure."
  },
  {
    "wordkey": "foundation",
    "exp": "The course is meant to give a solid foundation of basic programming concepts."
  },
  {
    "wordkey": "generation",
    "exp": "They were from different generations."
  },
  {
    "wordkey": "generation",
    "exp": "It was a tradition that had been in his family for generations."
  },
  {
    "wordkey": "generation",
    "exp": "We should keep our earth clean for future generations."
  },
  {
    "wordkey": "handle",
    "exp": "He turned the handle and open the door."
  },
  {
    "wordkey": "handle",
    "exp": "She carefully picked up the pan by its handle."
  },
  {
    "wordkey": "handle",
    "exp": "He managed to handle the situation just fine."
  },
  {
    "wordkey": "handle",
    "exp": "Fragile objects need to be handled with great care."
  },
  {
    "wordkey": "layer",
    "exp": "She spread a thick layer of dough over the biscuit."
  },
  {
    "wordkey": "layer",
    "exp": "There was a layer of oil on the surface of the broth."
  },
  {
    "wordkey": "layer",
    "exp": "With our harmful activities, we have depleted the ozone layer."
  },
  {
    "wordkey": "mud",
    "exp": "He knocked over a rock and fell into the mud."
  },
  {
    "wordkey": "mud",
    "exp": "There was mud all over his pants."
  },
  {
    "wordkey": "mud",
    "exp": "The car got stuck in the mud."
  },
  {
    "wordkey": "smooth",
    "exp": "She moisturized her hands and face to keep her skin smooth."
  },
  {
    "wordkey": "smooth",
    "exp": "They anticipated a smooth flight."
  },
  {
    "wordkey": "soil",
    "exp": "They planted some seeds in the soil."
  },
  {
    "wordkey": "soil",
    "exp": "The kid dug in the soil and found a broken spade."
  },
  {
    "wordkey": "soil",
    "exp": "He used some compost to make the soil more fertile."
  },
  {
    "wordkey": "unique",
    "exp": "It was a unique opportunity to work in such prestigious company."
  },
  {
    "wordkey": "academy",
    "exp": "The academy offers a wide range of courses in art."
  },
  {
    "wordkey": "ancient",
    "exp": "They went to see the ancient monuments."
  },
  {
    "wordkey": "board",
    "exp": "She used some boards to close the opening in the window."
  },
  {
    "wordkey": "board",
    "exp": "The board of directors came to a unanimous decision about the matter."
  },
  {
    "wordkey": "clue",
    "exp": "He found some clues that helped him solve the crime."
  },
  {
    "wordkey": "clue",
    "exp": "Sherlock was looking for clues in the barn."
  },
  {
    "wordkey": "clue",
    "exp": "The riddle appeared to be too difficult for them, so he gave them a clue."
  },
  {
    "wordkey": "concert",
    "exp": "There were a multitude of people at the live concert."
  },
  {
    "wordkey": "county",
    "exp": "The county fair is held every spring, featuring local cuisine and crafts."
  },
  {
    "wordkey": "dictionary",
    "exp": "He looked up the word in the dictionary."
  },
  {
    "wordkey": "dictionary",
    "exp": "We should get a monolingual dictionary."
  },
  {
    "wordkey": "exist",
    "exp": "Some minor problems still exist."
  },
  {
    "wordkey": "flat",
    "exp": "He put on a flat cap to cover the scar on his forehead."
  },
  {
    "wordkey": "flat",
    "exp": "The batteries went flat, so he went to get some."
  },
  {
    "wordkey": "flat",
    "exp": "He realized that he had a flat tire."
  },
  {
    "wordkey": "gentleman",
    "exp": "A kind gentleman helped him to find his way."
  },
  {
    "wordkey": "gentleman",
    "exp": "Ladies and gentlemen, please fasten your seatbelts and stay in your seats until we take off."
  },
  {
    "wordkey": "gentleman",
    "exp": "At the event, a portly gentleman in a suit gave a moving speech."
  },
  {
    "wordkey": "hidden",
    "exp": "He was wearing a hidden microphone to record their conversation."
  },
  {
    "wordkey": "hidden",
    "exp": "Hidden cameras captured everything that had happened."
  },
  {
    "wordkey": "officer",
    "exp": "He was an officer in the Navy."
  },
  {
    "wordkey": "original",
    "exp": "The original book was a bit different."
  },
  {
    "wordkey": "original",
    "exp": "His idea was original and appealed to his manager."
  },
  {
    "wordkey": "original",
    "exp": "It was so expensive because it was the original painting."
  },
  {
    "wordkey": "pound",
    "exp": "Someone was pouding on the door."
  },
  {
    "wordkey": "pound",
    "exp": "The shed was pounded to pieces after the earthquake."
  },
  {
    "wordkey": "pound",
    "exp": "The baby was about 7 pounds."
  },
  {
    "wordkey": "pound",
    "exp": "The total cost came to 340 pounds."
  },
  {
    "wordkey": "process",
    "exp": "Learning a foreign language is a long process."
  },
  {
    "wordkey": "process",
    "exp": "The kids were learning about the digestion process."
  },
  {
    "wordkey": "publish",
    "exp": "They refused to publish his book at first."
  },
  {
    "wordkey": "wealth",
    "exp": "They generated significant wealth from their thriving business."
  },
  {
    "wordkey": "aim",
    "exp": "She refurnished the apartment with the aim of improving its look."
  },
  {
    "wordkey": "aim",
    "exp": "His main aim in life was to protect his family."
  },
  {
    "wordkey": "aim",
    "exp": "The main aim of the meeting was to exchange ideas."
  },
  {
    "wordkey": "aim",
    "exp": "After years of studying, she finally achieved her aim of becoming a doctor."
  },
  {
    "wordkey": "aim",
    "exp": "Their long-term aim is to make the company international."
  },
  {
    "wordkey": "attach",
    "exp": "She was attaching laundry to the clothesline."
  },
  {
    "wordkey": "attach",
    "exp": "He attached his photo to the application form."
  },
  {
    "wordkey": "bet",
    "exp": "They all bet heavily on their horses."
  },
  {
    "wordkey": "bet",
    "exp": "She bet him ten dollars that she would finish her work faster."
  },
  {
    "wordkey": "carriage",
    "exp": "They took a carriage ride around the town."
  },
  {
    "wordkey": "classic",
    "exp": "That was a classic mistake he made."
  },
  {
    "wordkey": "classic",
    "exp": "A runny nose is a classic symptom of the flu."
  },
  {
    "wordkey": "classic",
    "exp": "They were famous for their classic design."
  },
  {
    "wordkey": "commute",
    "exp": "He found it hard to commute from his apartment to his workplace, so he moved closer."
  },
  {
    "wordkey": "confirm",
    "exp": "Getting a high grade confirmed that he was competent."
  },
  {
    "wordkey": "confirm",
    "exp": "He called his secretary to confirm the meeting."
  },
  {
    "wordkey": "confirm",
    "exp": "She called the clinic to confirm an appointment for next week."
  },
  {
    "wordkey": "criticize",
    "exp": "His parents criticized him for hanging out until such ungodly hours."
  },
  {
    "wordkey": "criticize",
    "exp": "She criticized the meal she had prepared."
  },
  {
    "wordkey": "criticize",
    "exp": "He was roundly criticized for his remarks."
  },
  {
    "wordkey": "differ",
    "exp": "His story differed from the one she said."
  },
  {
    "wordkey": "differ",
    "exp": "Both houses are fine; they only differ in location."
  },
  {
    "wordkey": "differ",
    "exp": "Fashion usually differs between generations."
  },
  {
    "wordkey": "differ",
    "exp": "I beg to differ with you on that."
  },
  {
    "wordkey": "differ",
    "exp": "Although they agree on most things, they differ on how to approach kids."
  },
  {
    "wordkey": "expense",
    "exp": "We should cut down our expenses."
  },
  {
    "wordkey": "expense",
    "exp": "Is a sports car worth the expense?"
  },
  {
    "wordkey": "expense",
    "exp": "He insisted that they go there at his expense."
  },
  {
    "wordkey": "expense",
    "exp": "They put up a playhouse at great expense."
  },
  {
    "wordkey": "height",
    "exp": "Her height is about 165 centimeters."
  },
  {
    "wordkey": "invent",
    "exp": "He invented a new method to deal with that kinds of problems."
  },
  {
    "wordkey": "invent",
    "exp": "The Wright brothers invented the plane."
  },
  {
    "wordkey": "invent",
    "exp": "She was a clever writer and invented an amusing story."
  },
  {
    "wordkey": "junior",
    "exp": "He was a junior chef in a local restaurant."
  },
  {
    "wordkey": "junior",
    "exp": "My brother is eight years my junior."
  },
  {
    "wordkey": "labor",
    "exp": "It took a lot of manual labor to put up that shed."
  },
  {
    "wordkey": "labor",
    "exp": "A lot of workers withdrew their labor due to low wages."
  },
  {
    "wordkey": "labor",
    "exp": "The construction was put off due to a shortage of skilled labor."
  },
  {
    "wordkey": "labor",
    "exp": "Child labor is a serious problem around the globe."
  },
  {
    "wordkey": "labor",
    "exp": "She was in intense pain while going inot labor."
  },
  {
    "wordkey": "mechanic",
    "exp": "He had a mechanic fix the car."
  },
  {
    "wordkey": "prime",
    "exp": "The prime cause of the illness was bacteria."
  },
  {
    "wordkey": "prime",
    "exp": "There were two prime suspects for the manslaughter."
  },
  {
    "wordkey": "prime",
    "exp": "She realized that the food was past its prime."
  },
  {
    "wordkey": "prime",
    "exp": "He was in his prime and set a new world record."
  },
  {
    "wordkey": "prime",
    "exp": "Eventually, he was in the prime of life, enjoying the peak of his career and the joys of family."
  },
  {
    "wordkey": "shift",
    "exp": "The sniper had to shift to another roof."
  },
  {
    "wordkey": "shift",
    "exp": "His attitude toward digital currencies shifted when he realized its originality."
  },
  {
    "wordkey": "signal",
    "exp": "When he gave the signal, they began the race."
  },
  {
    "wordkey": "signal",
    "exp": "The coach gave them the signal to start the game."
  },
  {
    "wordkey": "signal",
    "exp": "The whistle was a signal that the match had begun."
  },
  {
    "wordkey": "sincere",
    "exp": "She made a sincere apology to them."
  },
  {
    "wordkey": "sincere",
    "exp": "He sounded sincere when he said his intention was to help her."
  },
  {
    "wordkey": "ability",
    "exp": "He had the ability to craft a weapon quickly."
  },
  {
    "wordkey": "ability",
    "exp": "She had the ability to explain complex ideas clearly."
  },
  {
    "wordkey": "ability",
    "exp": "He has the ability to run off an article in next to no time."
  },
  {
    "wordkey": "ability",
    "exp": "His fighting abilities helped him survive."
  },
  {
    "wordkey": "ability",
    "exp": "She was born with an innate ability to do math."
  },
  {
    "wordkey": "agriculture",
    "exp": "She studied agriculture, as she always liked to work on a farm."
  },
  {
    "wordkey": "cartoon",
    "exp": "He drew a funny cartoon in the class."
  },
  {
    "wordkey": "ceiling",
    "exp": "The ceiling had colored lights around it."
  },
  {
    "wordkey": "ceiling",
    "exp": "There was a crack in the ceiling."
  },
  {
    "wordkey": "convince",
    "exp": "He convinced his father to make a tree house in the yard."
  },
  {
    "wordkey": "curious",
    "exp": "The kids were curious about the mysterious box that was in the basement."
  },
  {
    "wordkey": "curious",
    "exp": "She was curious to find the answer to the riddle."
  },
  {
    "wordkey": "curious",
    "exp": "When he put on the Vision Pro, most people had curious looks on their faces."
  },
  {
    "wordkey": "delay",
    "exp": "The flight was delayed for an hour."
  },
  {
    "wordkey": "delay",
    "exp": "They delayed deciding about the offer."
  },
  {
    "wordkey": "delay",
    "exp": "The heavy traffic delayed him half an hour."
  },
  {
    "wordkey": "delay",
    "exp": "There was a slight delay in the flight."
  },
  {
    "wordkey": "delay",
    "exp": "When they called the fire department, they rushed to the scene without delay."
  },
  {
    "wordkey": "diary",
    "exp": "She kept her diary under her bed."
  },
  {
    "wordkey": "element",
    "exp": "The book was filled with compelling elements."
  },
  {
    "wordkey": "element",
    "exp": "His favorite element of the game was all the laughing."
  },
  {
    "wordkey": "faith",
    "exp": "Almost all the soldiers had great faith in their commander."
  },
  {
    "wordkey": "faith",
    "exp": "During hard times, lots of people lose their faith."
  },
  {
    "wordkey": "grain",
    "exp": "They had such a large farm that they exported some of the grains."
  },
  {
    "wordkey": "greet",
    "exp": "The clown greeted the children and gave each one a candy."
  },
  {
    "wordkey": "greet",
    "exp": "She went to the airport and greeted her friends with delight."
  },
  {
    "wordkey": "greet",
    "exp": "His good news was greeted with their happiness."
  },
  {
    "wordkey": "investigate",
    "exp": "Sherlock went to the town to investigate the crime."
  },
  {
    "wordkey": "investigate",
    "exp": "They investigated how to make the plan more efficient."
  },
  {
    "wordkey": "joy",
    "exp": "They felt sheer joy when they held their newborn child."
  },
  {
    "wordkey": "joy",
    "exp": "He wept for joy when they invited him to be on the team."
  },
  {
    "wordkey": "joy",
    "exp": "She was jumping for joy when she got an email saying that she got the job."
  },
  {
    "wordkey": "joy",
    "exp": "Their newborn baby crawling across the floor was a joy to watch."
  },
  {
    "wordkey": "label",
    "exp": "The label showed the large size."
  },
  {
    "wordkey": "label",
    "exp": "There were instructions on the label."
  },
  {
    "wordkey": "monk",
    "exp": "An old monk gave the boy some practical advice."
  },
  {
    "wordkey": "odd",
    "exp": "It seemed odd to them that she wanted to try that."
  },
  {
    "wordkey": "pause",
    "exp": "After a short pause, he went on talking about the issue."
  },
  {
    "wordkey": "pause",
    "exp": "A short pause could ruin the whole process."
  },
  {
    "wordkey": "pause",
    "exp": "There was a pregnant pause, and then they both laughed."
  },
  {
    "wordkey": "pause",
    "exp": "He paused momentarily before giving the answer."
  },
  {
    "wordkey": "pause",
    "exp": "During his speech, he paused for effect, letting the weight of his words sink in."
  },
  {
    "wordkey": "priest",
    "exp": "The priest was preparing for the ritual ceremony."
  },
  {
    "wordkey": "profession",
    "exp": "Eventually, he chose to write computer codes as a profession."
  },
  {
    "wordkey": "profession",
    "exp": "She was a civil engineer by profession."
  },
  {
    "wordkey": "ball",
    "exp": "The kids were playing with a ball."
  },
  {
    "wordkey": "bottom",
    "exp": "There was an old book at the bottom of the bookshelf."
  },
  {
    "wordkey": "bottom",
    "exp": "A piece of gum was on the bottom of his shoe."
  },
  {
    "wordkey": "bottom",
    "exp": "When he stood up, his bottom was dusty."
  },
  {
    "wordkey": "company",
    "exp": "That company manufactures sports shoes."
  },
  {
    "wordkey": "drink",
    "exp": "We should drink plenty of water every day."
  },
  {
    "wordkey": "drink",
    "exp": "She offered him a drink of tea."
  },
  {
    "wordkey": "few",
    "exp": "There were only a few people at the library."
  },
  {
    "wordkey": "few",
    "exp": "She needed to buy a few things at the market."
  },
  {
    "wordkey": "line",
    "exp": "There was a long line at the gate."
  },
  {
    "wordkey": "line",
    "exp": "They had to wait in line for forty minutes to get there."
  },
  {
    "wordkey": "line",
    "exp": "The kids were trying to walk in a straight line on the curb."
  },
  {
    "wordkey": "pet",
    "exp": "She went for a walk with her pet dog."
  },
  {
    "wordkey": "pet",
    "exp": "He petted the cat and it purred."
  },
  {
    "wordkey": "product",
    "exp": "We should cut down on sugary products."
  },
  {
    "wordkey": "product",
    "exp": "A line of workers were assembling the products."
  },
  {
    "wordkey": "product",
    "exp": "Dairy products go bad quickly."
  },
  {
    "wordkey": "responsible",
    "exp": "He was responsible for dealing with people in the warehouse."
  },
  {
    "wordkey": "responsible",
    "exp": "She was responsible for the whole team."
  },
  {
    "wordkey": "responsible",
    "exp": "He reminded them that everyone is responsible for their own actions."
  },
  {
    "wordkey": "sell",
    "exp": "The realtor was trying to sell houses."
  },
  {
    "wordkey": "sell",
    "exp": "His painting was sold at 20 thousand dollars."
  },
  {
    "wordkey": "snake",
    "exp": "Not all snakes are poisonous."
  },
  {
    "wordkey": "stand",
    "exp": "They stood in a long line for an hour."
  },
  {
    "wordkey": "stand",
    "exp": "She stood up and walked to the kitchen."
  },
  {
    "wordkey": "stand",
    "exp": "After sweeping the floor, the janitor stood the broom against the wall."
  },
  {
    "wordkey": "strange",
    "exp": "On Halloween, people wear strange costumes."
  },
  {
    "wordkey": "strange",
    "exp": "It was strange that they went there all of a sudden."
  },
  {
    "wordkey": "tea",
    "exp": "Some people prefer tea over coffee."
  },
  {
    "wordkey": "tea",
    "exp": "She brewed some tea for her friends."
  },
  {
    "wordkey": "tea",
    "exp": "They both sat down and took a sip of their tea."
  },
  {
    "wordkey": "test",
    "exp": "They got an electrician to test the power in their house."
  },
  {
    "wordkey": "test",
    "exp": "The teacher gave each student a sheet of paper to test their knowledge."
  },
  {
    "wordkey": "test",
    "exp": "He was studying because of an important test that was coming up next week."
  },
  {
    "wordkey": "test",
    "exp": "They took a drug test to ensure they were clean."
  },
  {
    "wordkey": "tongue",
    "exp": "He accidentally bit his tongue."
  },
  {
    "wordkey": "tongue",
    "exp": "The kitten drank water using its tongue."
  },
  {
    "wordkey": "type",
    "exp": "How many types of plants do you know?"
  },
  {
    "wordkey": "type",
    "exp": "Crimson is a type of color."
  },
  {
    "wordkey": "very",
    "exp": "The kids were very happy with their gifts."
  },
  {
    "wordkey": "wait",
    "exp": "She had to wait for half an hour for her friend."
  },
  {
    "wordkey": "accomplish",
    "exp": "He accomplished his task in less than two hours."
  },
  {
    "wordkey": "accomplish",
    "exp": "After several years of hard work, she accomplished her goal of becoming a doctor."
  },
  {
    "wordkey": "approve",
    "exp": "Her colleague thoroughly approved of her idea."
  },
  {
    "wordkey": "approve",
    "exp": "The board of directors approved the budget proposal for the project."
  },
  {
    "wordkey": "approximate",
    "exp": "The approximate cost was about twelve thousand dollars."
  },
  {
    "wordkey": "approximate",
    "exp": "His approximate height is two meters."
  },
  {
    "wordkey": "barrier",
    "exp": "They built a wall as a barrier to keep their enemies away."
  },
  {
    "wordkey": "barrier",
    "exp": "The tall mountain acted as a barrier to separate the wildlife and their civilization."
  },
  {
    "wordkey": "detect",
    "exp": "Some sounds cannot be detected without special equipment."
  },
  {
    "wordkey": "detect",
    "exp": "Sherlock detected something strange in the mud."
  },
  {
    "wordkey": "detect",
    "exp": "He was using a metal detector to detect anything valuable he could find."
  },
  {
    "wordkey": "detect",
    "exp": "Sarcasm was difficult for Sheldon to detect."
  },
  {
    "wordkey": "duty",
    "exp": "If everybody does their own duties, everything will be fine."
  },
  {
    "wordkey": "duty",
    "exp": "Her duty was to keep the kids safe for a while."
  },
  {
    "wordkey": "duty",
    "exp": "They both went to help them out of duty."
  },
  {
    "wordkey": "duty",
    "exp": "They reported for duty once they got back."
  },
  {
    "wordkey": "duty",
    "exp": "Since she was off duty, she enjoyed hanging out with her friends."
  },
  {
    "wordkey": "duty",
    "exp": "He was duty bound to accompany her to her apartment."
  },
  {
    "wordkey": "elementary",
    "exp": "He had elementary knowledge of a few programming languages."
  },
  {
    "wordkey": "elementary",
    "exp": "They made an elementary mistake."
  },
  {
    "wordkey": "elementary",
    "exp": "The book includes some elementary exercises to help reinforce grammar."
  },
  {
    "wordkey": "failure",
    "exp": "Their plan turned out to be a spectacular failure."
  },
  {
    "wordkey": "failure",
    "exp": "She was a failure at cooking."
  },
  {
    "wordkey": "failure",
    "exp": "Their project was doomed to failure."
  },
  {
    "wordkey": "failure",
    "exp": "After he lost the game, he felt like a failure."
  },
  {
    "wordkey": "failure",
    "exp": "Their failure to meet the deadline resulted in a fine."
  },
  {
    "wordkey": "failure",
    "exp": "They took him to the hospital due to his kidney failure."
  },
  {
    "wordkey": "failure",
    "exp": "There was a crop failure because of pests."
  },
  {
    "wordkey": "failure",
    "exp": "During the recession, the number of business failures rose."
  },
  {
    "wordkey": "gradual",
    "exp": "They improved their English at a gradual pace."
  },
  {
    "wordkey": "immigrant",
    "exp": "They went to America as immigrants from China."
  },
  {
    "wordkey": "immigrant",
    "exp": "He was an illegal immigrant, looking for a better life abroad."
  },
  {
    "wordkey": "insert",
    "exp": "He inserted the key into the lock to unlocked the door."
  },
  {
    "wordkey": "insert",
    "exp": "She inserted a few more details into her essay."
  },
  {
    "wordkey": "instant",
    "exp": "He called his friend the instant he got home."
  },
  {
    "wordkey": "instant",
    "exp": "She paused for an instant, then continued talking."
  },
  {
    "wordkey": "instant",
    "exp": "He fell in love with her in an instant."
  },
  {
    "wordkey": "instant",
    "exp": "His latest book was an instant success."
  },
  {
    "wordkey": "instant",
    "exp": "They made an application that would give the client instant access to their accounts."
  },
  {
    "wordkey": "poverty",
    "exp": "Poverty can pose a serious problem."
  },
  {
    "wordkey": "poverty",
    "exp": "Many people emigrated to escape their grinding poverty."
  },
  {
    "wordkey": "poverty",
    "exp": "He used to live in abject poverty."
  },
  {
    "wordkey": "pretend",
    "exp": "She pretended that she was happy."
  },
  {
    "wordkey": "pretend",
    "exp": "The kids were pretending to be superhumans."
  },
  {
    "wordkey": "rank",
    "exp": "His rank in the firm was lower than him."
  },
  {
    "wordkey": "rank",
    "exp": "After several years of hard work, he was promoted to the rank of manager."
  },
  {
    "wordkey": "recognition",
    "exp": "They gave him a gift in recognition of all his hard work."
  },
  {
    "wordkey": "refrigerate",
    "exp": "She refrigerated the dairy products she had bought."
  },
  {
    "wordkey": "rent",
    "exp": "He was so poor that he could barely pay the rent."
  },
  {
    "wordkey": "retire",
    "exp": "He retired from the company at the age of 60."
  },
  {
    "wordkey": "accident",
    "exp": "He had an accident on the way back home."
  },
  {
    "wordkey": "accident",
    "exp": "Three cars had been involved in an accident."
  },
  {
    "wordkey": "astronaut",
    "exp": "He always loved space and wanted to become an astronaut."
  },
  {
    "wordkey": "awake",
    "exp": "He had been wide awake since that loud sound blared."
  },
  {
    "wordkey": "awake",
    "exp": "They both had two cups of coffee to keep them awake."
  },
  {
    "wordkey": "awake",
    "exp": "The alarm awoke her at 5 AM."
  },
  {
    "wordkey": "courage",
    "exp": "She had the courage to go there alone."
  },
  {
    "wordkey": "courage",
    "exp": "He plucked up the courage and went to look around for his friend."
  },
  {
    "wordkey": "courage",
    "exp": "He finally summoned the courage to ask her out."
  },
  {
    "wordkey": "float",
    "exp": "Their kites were floating in the air."
  },
  {
    "wordkey": "float",
    "exp": "A plank of wood was floating on the lake."
  },
  {
    "wordkey": "grant",
    "exp": "The immigrants were granted asylum."
  },
  {
    "wordkey": "grant",
    "exp": "They granted a scholarship to help her out."
  },
  {
    "wordkey": "grant",
    "exp": "The judge granted custody of the child to her."
  },
  {
    "wordkey": "gravity",
    "exp": "Since there was no gravity, the astronaut floated in space."
  },
  {
    "wordkey": "gravity",
    "exp": "When an apple fell from a tree, Newton discovered the laws of gravity."
  },
  {
    "wordkey": "jewel",
    "exp": "She was wearing a ring with a glittering jewel."
  },
  {
    "wordkey": "miner",
    "exp": "The miner found several jewels and pieces of diamond."
  },
  {
    "wordkey": "mineral",
    "exp": "We should supplement our diet with minerals and vitamins."
  },
  {
    "wordkey": "mineral",
    "exp": "There were a few mineral resources in the region."
  },
  {
    "wordkey": "permission",
    "exp": "He gave the man permission to park there."
  },
  {
    "wordkey": "permission",
    "exp": "The authorities refused permission to build a five-story apartment there."
  },
  {
    "wordkey": "permission",
    "exp": "The permission to build a parking lot was granted."
  },
  {
    "wordkey": "pour",
    "exp": "They asked the bartender to pour some wine for them."
  },
  {
    "wordkey": "raw",
    "exp": "There was raw fish on the counter."
  },
  {
    "wordkey": "raw",
    "exp": "The factory was shut down because it had been dumping raw sewage into a river."
  },
  {
    "wordkey": "raw",
    "exp": "Wood is one of the most important raw materials used for making numerous objects."
  },
  {
    "wordkey": "satellite",
    "exp": "They sent a satellite to outer space to gather information."
  },
  {
    "wordkey": "scale",
    "exp": "In some countries, poverty exists on a larger scale than in others."
  },
  {
    "wordkey": "scale",
    "exp": "What do you think of my English on a scale of 1 to 10?"
  },
  {
    "wordkey": "scale",
    "exp": "She used a kitchen scale to measure the exact amount of grain needed for the dish."
  },
  {
    "wordkey": "skip",
    "exp": "They skipped from that subject to a more important one."
  },
  {
    "wordkey": "skip",
    "exp": "The rabbits skipped around the field."
  },
  {
    "wordkey": "stretch",
    "exp": "The cat woke up and stretched its body."
  },
  {
    "wordkey": "stretch",
    "exp": "He stretched across the table to grab the salt."
  },
  {
    "wordkey": "telescope",
    "exp": "They went to the desert and looked at the stars using a telescope."
  },
  {
    "wordkey": "underground",
    "exp": "They chose to travel underground to skip traffic."
  },
  {
    "wordkey": "underground",
    "exp": "Some animals, such as the mole, live underground."
  },
  {
    "wordkey": "alarm",
    "exp": "When he saw the enemy, he raised the alarm."
  },
  {
    "wordkey": "alarm",
    "exp": "They put up a fire alarm for safety."
  },
  {
    "wordkey": "alarm",
    "exp": "He woke up when the alarm went off."
  },
  {
    "wordkey": "alarm",
    "exp": "Their sudden movement caused alarm to the deer and it vanished."
  },
  {
    "wordkey": "arrest",
    "exp": "He was carrying a weapon when he got arrested."
  },
  {
    "wordkey": "arrest",
    "exp": "The police arrested her for possession of illegal drug."
  },
  {
    "wordkey": "arrest",
    "exp": "They arrested him in connection with the robbery."
  },
  {
    "wordkey": "award",
    "exp": "They gave her an award for getting the highest grades in her class."
  },
  {
    "wordkey": "award",
    "exp": "The king awarded them for finding his son."
  },
  {
    "wordkey": "breed",
    "exp": "It was a rare breed of dog."
  },
  {
    "wordkey": "breed",
    "exp": "They had different breeds of horses in the stable."
  },
  {
    "wordkey": "breed",
    "exp": "Constant criticism can breed insecurity in individuals."
  },
  {
    "wordkey": "breed",
    "exp": "His calmness and conscientiousness bred a sense of trust and loyalty within his peers."
  },
  {
    "wordkey": "breed",
    "exp": "Most animals breed in certain seasons to ensure a good condition for their babies."
  },
  {
    "wordkey": "bucket",
    "exp": "They filled two buckets with water and took them to the salon to wash the floor."
  },
  {
    "wordkey": "bucket",
    "exp": "The kids grabbed a bucket and spade to make a sand castle."
  },
  {
    "wordkey": "contest",
    "exp": "They held a contest to see who was the fastest."
  },
  {
    "wordkey": "contest",
    "exp": "She entered the contest just for fun, yet she won."
  },
  {
    "wordkey": "convict",
    "exp": "The man was convicted of arson and sent to jail."
  },
  {
    "wordkey": "festival",
    "exp": "The Mid-Autumn festival is a traditional celebration in Chinese culture."
  },
  {
    "wordkey": "garage",
    "exp": "There was no more room in his garage that day."
  },
  {
    "wordkey": "journalist",
    "exp": "She used to be a journalist."
  },
  {
    "wordkey": "qualify",
    "exp": "They qualified to be in the final match by beating their opponent."
  },
  {
    "wordkey": "qualify",
    "exp": "After a few years of training, he managed to qualify as a lawyer."
  },
  {
    "wordkey": "qualify",
    "exp": "Completing the course will qualify you for a professional certification in programming."
  },
  {
    "wordkey": "repair",
    "exp": "They got a plumber to repair the pipes."
  },
  {
    "wordkey": "repair",
    "exp": "He called a handyman to get the deck repaired."
  },
  {
    "wordkey": "resume",
    "exp": "They paused for a short while to have a snack, and then resumed studying."
  },
  {
    "wordkey": "rob",
    "exp": "Someone tried to rob her on the street."
  },
  {
    "wordkey": "rob",
    "exp": "He robbed the store of eight hundred dollars."
  },
  {
    "wordkey": "slip",
    "exp": "As he was walking, he stepped on a banana peel and slipped."
  },
  {
    "wordkey": "slip",
    "exp": "His backpack slipped off his shoulder, and he waited to fix it."
  },
  {
    "wordkey": "somewhat",
    "exp": "She was somewhat angry about that."
  },
  {
    "wordkey": "somewhat",
    "exp": "They somewhat changed the procedure."
  },
  {
    "wordkey": "stable",
    "exp": "He checked the chair first to see if it was stable."
  },
  {
    "wordkey": "stable",
    "exp": "After she qualified, she got a more stable job."
  },
  {
    "wordkey": "tissue",
    "exp": "There was a box of tissue left on the floor."
  },
  {
    "wordkey": "yard",
    "exp": "Some kids were playing in the yard."
  },
  {
    "wordkey": "card",
    "exp": "Most customers pay their bills with debit cards."
  },
  {
    "wordkey": "crowd",
    "exp": "A crowd of about one thousand people went to see the game."
  },
  {
    "wordkey": "day",
    "exp": "It took a few days to finish the work."
  },
  {
    "wordkey": "dish",
    "exp": "He ordered a vegetarian dish at the restaurant."
  },
  {
    "wordkey": "dish",
    "exp": "She told them to keep some room for the main dish."
  },
  {
    "wordkey": "dish",
    "exp": "There was a large dish of spaghetti on the table."
  },
  {
    "wordkey": "easy",
    "exp": "It was so easy that he could do it with one hand."
  },
  {
    "wordkey": "experience",
    "exp": "The kid experienced some dangerous situations."
  },
  {
    "wordkey": "experience",
    "exp": "It was the most painful feeling that he had ever experienced."
  },
  {
    "wordkey": "experience",
    "exp": "In his experience, being lonely was better than having some stupid friends."
  },
  {
    "wordkey": "experience",
    "exp": "He had practical experience in software development."
  },
  {
    "wordkey": "hotel",
    "exp": "They stayed in a luxury hotel near the beach."
  },
  {
    "wordkey": "hour",
    "exp": "It takes two hours from here to the hamlet."
  },
  {
    "wordkey": "hour",
    "exp": "She said she would be there in about an hour."
  },
  {
    "wordkey": "light",
    "exp": "Suddenly, a beam of light fell on his face."
  },
  {
    "wordkey": "light",
    "exp": "He asked him to turn off the light."
  },
  {
    "wordkey": "market",
    "exp": "They went to the market to pick up some fruit and vegetables."
  },
  {
    "wordkey": "market",
    "exp": "He had been working in the housing market for decades."
  },
  {
    "wordkey": "market",
    "exp": "There was a long line once the new smartphone was on the market."
  },
  {
    "wordkey": "market",
    "exp": "The company wanted to target the young market."
  },
  {
    "wordkey": "market",
    "exp": "They conducted research to find out the needs of the local market."
  },
  {
    "wordkey": "plan",
    "exp": "She planned to surprise him for his birthday."
  },
  {
    "wordkey": "plan",
    "exp": "They planned how to spend the budget in the best way possible."
  },
  {
    "wordkey": "plan",
    "exp": "He wanted to know what was his plan for the evening."
  },
  {
    "wordkey": "plan",
    "exp": "If everything goes according to plan, we will finish the project by next week."
  },
  {
    "wordkey": "price",
    "exp": "At the auction, they were selling stuff for low prices."
  },
  {
    "wordkey": "price",
    "exp": "There was a sharp rise in the price of the product."
  },
  {
    "wordkey": "short",
    "exp": "It was a short but happy day they spent together."
  },
  {
    "wordkey": "short",
    "exp": "She was wearing a short skirt."
  },
  {
    "wordkey": "shop",
    "exp": "On their way home, they stopped to shop for some groceries."
  },
  {
    "wordkey": "shop",
    "exp": "The clothes shop was packed with potential customers."
  },
  {
    "wordkey": "station",
    "exp": "He was looking for the nearest subway station."
  },
  {
    "wordkey": "station",
    "exp": "She was waiting at the bus station for her friend."
  },
  {
    "wordkey": "surprise",
    "exp": "The teacher was surprised at how quickly he could learn."
  },
  {
    "wordkey": "surprise",
    "exp": "To his surprise, she knew about the matter."
  },
  {
    "wordkey": "surprise",
    "exp": "They were looking at each other in surprise."
  },
  {
    "wordkey": "system",
    "exp": "There was something wrong with the heating system in the apartment."
  },
  {
    "wordkey": "system",
    "exp": "The IT guy was looking into the system to find out about the problem."
  },
  {
    "wordkey": "system",
    "exp": "Taking cold showers boosts the immune system."
  },
  {
    "wordkey": "taxi",
    "exp": "He was a taxi driver, so he knew the town like the back of his hand."
  },
  {
    "wordkey": "taxi",
    "exp": "They took a taxi to the airport to visit their friend."
  },
  {
    "wordkey": "bath",
    "exp": "He took a bath and got ready for work."
  },
  {
    "wordkey": "bath",
    "exp": "Monica ran a bath for Chandler in a special way."
  },
  {
    "wordkey": "bathe",
    "exp": "After work, they decided to bathe before going to bed."
  },
  {
    "wordkey": "bend",
    "exp": "He bent down to pick up the paper on the floor."
  },
  {
    "wordkey": "bend",
    "exp": "The coach told them to bend forward and touch their feet."
  },
  {
    "wordkey": "bend",
    "exp": "He used pliers to bend the pole."
  },
  {
    "wordkey": "chew",
    "exp": "Before swallowing, the food should be chewed carefully."
  },
  {
    "wordkey": "chew",
    "exp": "She was chewing gum while texting her friend."
  },
  {
    "wordkey": "chew",
    "exp": "By chewing more, we can help digest easier and faster."
  },
  {
    "wordkey": "disabled",
    "exp": "The disabled man used a cane to walk around."
  },
  {
    "wordkey": "fantastic",
    "exp": "His ability to craft that kind of stuff was fantastic."
  },
  {
    "wordkey": "fantastic",
    "exp": "They admired the fantastic view from the summit of the cliff."
  },
  {
    "wordkey": "fiction",
    "exp": "It was a fiction about a brave warrior who fought with bad people alone."
  },
  {
    "wordkey": "flag",
    "exp": "The flag has some yellow stars on it."
  },
  {
    "wordkey": "flag",
    "exp": "The flag was fluttering high above the ground."
  },
  {
    "wordkey": "inspect",
    "exp": "An agent paid a visit to their branch to inspect it."
  },
  {
    "wordkey": "inspect",
    "exp": "They had an electrician inspect the building."
  },
  {
    "wordkey": "journal",
    "exp": "She was reading a medical journal."
  },
  {
    "wordkey": "liquid",
    "exp": "The most important liquid on Earth is water."
  },
  {
    "wordkey": "marvel",
    "exp": "They stood on the mountain summit and marveled at the panoramic view."
  },
  {
    "wordkey": "marvel",
    "exp": "He marveled that they were so supportive of one another."
  },
  {
    "wordkey": "marvel",
    "exp": "His parents marveled at his virtuoso performance."
  },
  {
    "wordkey": "marvel",
    "exp": "It was a marvel to him how they could have so much strength."
  },
  {
    "wordkey": "overcome",
    "exp": "He had to overcome several obstacles in his twenties."
  },
  {
    "wordkey": "overcome",
    "exp": "The little boy was trying to overcome difficulties by himself."
  },
  {
    "wordkey": "overcome",
    "exp": "Eventually, she overcame her fear of talking in public."
  },
  {
    "wordkey": "recall",
    "exp": "Suddenly, she recalled what she saw two months ago."
  },
  {
    "wordkey": "recall",
    "exp": "They recalled talking to each other in the past."
  },
  {
    "wordkey": "regret",
    "exp": "He deeply regretted not studying while he was younger."
  },
  {
    "wordkey": "soul",
    "exp": "Some people are scared of the souls of dead people."
  },
  {
    "wordkey": "sufficient",
    "exp": "Two potatoes were sufficient for the dinner."
  },
  {
    "wordkey": "surgery",
    "exp": "He had a knee surgery after the accident."
  },
  {
    "wordkey": "surgery",
    "exp": "The surgery on her heart was successful."
  },
  {
    "wordkey": "tough",
    "exp": "There were a lot of tough questions in the exam, yet he passed without difficulty."
  },
  {
    "wordkey": "tough",
    "exp": "They had to make a tough decision without having much time."
  },
  {
    "wordkey": "tough",
    "exp": "It was a tough trip, and they had to stop several times to rest."
  },
  {
    "wordkey": "tough",
    "exp": "Despite numerous challenges and hard times, he remained tough and managed to achieve his goal."
  },
  {
    "wordkey": "tube",
    "exp": "A tube in the garage had been leaking and made a small puddle."
  },
  {
    "wordkey": "value",
    "exp": "They bought something at the market that was of a good value."
  },
  {
    "wordkey": "value",
    "exp": "His portrait had an immense value."
  },
  {
    "wordkey": "value",
    "exp": "Learning a second language has novelty value and is a unique experience."
  },
  {
    "wordkey": "value",
    "exp": "They sold the jewels to buy something with practical value."
  },
  {
    "wordkey": "value",
    "exp": "We should always value our parents for their effort."
  },
  {
    "wordkey": "value",
    "exp": "His sculpture was valued at one million dollars."
  },
  {
    "wordkey": "atom",
    "exp": "Carbon dioxide has one carbon atom and two oxygen atoms."
  },
  {
    "wordkey": "atom",
    "exp": "A molecule is made up of two or more atoms."
  },
  {
    "wordkey": "beautiful",
    "exp": "She bought a beautiful dress from the boutique."
  },
  {
    "wordkey": "beautiful",
    "exp": "It was such a beautiful scenery that they were both marveled."
  },
  {
    "wordkey": "breadth",
    "exp": "The breadth of the area was about ten meters."
  },
  {
    "wordkey": "breadth",
    "exp": "The room was 8 meters in breadth."
  },
  {
    "wordkey": "breadth",
    "exp": "His breadth of knowledge was astonishing."
  },
  {
    "wordkey": "comet",
    "exp": "They were looking at the sky when they saw a comet."
  },
  {
    "wordkey": "cover",
    "exp": "She covered the dish with foil and put it in the oven."
  },
  {
    "wordkey": "cover",
    "exp": "He covered the ice cream with a layer of chocolate."
  },
  {
    "wordkey": "cover",
    "exp": "The backyard was covered in grass."
  },
  {
    "wordkey": "cover",
    "exp": "Most parts of the Earth are covered by water."
  },
  {
    "wordkey": "despair",
    "exp": "They were in despair over all the materials they had ruined."
  },
  {
    "wordkey": "despair",
    "exp": "He was in a mood of despair at the time."
  },
  {
    "wordkey": "despair",
    "exp": "To her despair, they all had already gone."
  },
  {
    "wordkey": "despair",
    "exp": "The fact that they lost the game drove them to despair."
  },
  {
    "wordkey": "despair",
    "exp": "He was the despair of his parents after dropping out of school."
  },
  {
    "wordkey": "form",
    "exp": "They formed a team together."
  },
  {
    "wordkey": "form",
    "exp": "The kids formed a strange shape with sand."
  },
  {
    "wordkey": "form",
    "exp": "They put sand over Joey and formed him into a mermaid."
  },
  {
    "wordkey": "form",
    "exp": "A mermaid is a fictious creature in the form of a half human, half fish."
  },
  {
    "wordkey": "form",
    "exp": "Jogging is a form of exercise."
  },
  {
    "wordkey": "fragment",
    "exp": "There were fragments of glass all over the floor."
  },
  {
    "wordkey": "fragment",
    "exp": "When the bowl fell off the table, it fragmented into several pieces."
  },
  {
    "wordkey": "galaxy",
    "exp": "There are numerous different galaxies in the cosmos."
  },
  {
    "wordkey": "gloom",
    "exp": "In the gloom of the morning, everything was barely visible."
  },
  {
    "wordkey": "gloom",
    "exp": "Despite the gloom of the situation, he remained tough and optimistic."
  },
  {
    "wordkey": "gloom",
    "exp": "As dark, menacing clouds gathered, the sky began to gloom."
  },
  {
    "wordkey": "gloom",
    "exp": "Their cheerful demeanor began to gloom when he broke the sad news to them."
  },
  {
    "wordkey": "large",
    "exp": "There was a large house near the hill."
  },
  {
    "wordkey": "large",
    "exp": "They had a large amount of work to do that day."
  },
  {
    "wordkey": "moon",
    "exp": "The full Moon is when the Sun and the Moon are on opposite sides of the Earth."
  },
  {
    "wordkey": "radiate",
    "exp": "They set up fire to radiate heat."
  },
  {
    "wordkey": "radiate",
    "exp": "A ray of light was radiated from outside."
  },
  {
    "wordkey": "roam",
    "exp": "The cattle roamed around the farm all day."
  },
  {
    "wordkey": "roam",
    "exp": "The drunk man roamed on the streets."
  },
  {
    "wordkey": "solitary",
    "exp": "A solitary cup was left on the floor."
  },
  {
    "wordkey": "solitary",
    "exp": "There was a solitary figure in the jungle looking for something."
  },
  {
    "wordkey": "spectrum",
    "exp": "The entire spectrum can be seen in a rainbow."
  },
  {
    "wordkey": "sphere",
    "exp": "The kid was holding a plastic sphere in his palm."
  },
  {
    "wordkey": "sphere",
    "exp": "She converted the oval clay into a sphere."
  },
  {
    "wordkey": "star",
    "exp": "There are millions of stars in space."
  },
  {
    "wordkey": "star",
    "exp": "A bright star was twinkling in the sky."
  },
  {
    "wordkey": "status",
    "exp": "Initially, his status was inferior to his colleagues."
  },
  {
    "wordkey": "status",
    "exp": "He was a man of high social status."
  },
  {
    "wordkey": "status",
    "exp": "They asked what their marital status was."
  },
  {
    "wordkey": "ugly",
    "exp": "The cottage was so ugly."
  },
  {
    "wordkey": "ugly",
    "exp": "He was as ugly as sin."
  },
  {
    "wordkey": "accuse",
    "exp": "They accused him of murder, but no one could prove it."
  },
  {
    "wordkey": "accuse",
    "exp": "He accused her of not working enough for the team."
  },
  {
    "wordkey": "adjust",
    "exp": "She adjusted the chair and then sat on it again."
  },
  {
    "wordkey": "adjust",
    "exp": "The teacher was instructing them how to adjust their instrument."
  },
  {
    "wordkey": "amuse",
    "exp": "He put on a cartoon to amuse the kids."
  },
  {
    "wordkey": "amuse",
    "exp": "The actor amused the audience by telling jokes."
  },
  {
    "wordkey": "coral",
    "exp": "They saw some corals in the ocean while scuba diving."
  },
  {
    "wordkey": "coral",
    "exp": "He bought a coral bracelet for his girlfriend."
  },
  {
    "wordkey": "cotton",
    "exp": "She was wearing red cotton clothes."
  },
  {
    "wordkey": "cotton",
    "exp": "They export raw cotton to other countries."
  },
  {
    "wordkey": "crash",
    "exp": "Two cars crashed into each other on the highway."
  },
  {
    "wordkey": "crash",
    "exp": "She lost her control and crashed into him."
  },
  {
    "wordkey": "crash",
    "exp": "Suddenly, his computer crashed, and the screen went blank."
  },
  {
    "wordkey": "deck",
    "exp": "There were some barrels of wine on the deck."
  },
  {
    "wordkey": "deck",
    "exp": "The captain and his assistant sat on the deck, trying to make a plan."
  },
  {
    "wordkey": "engage",
    "exp": "The whole family was engaged in the game."
  },
  {
    "wordkey": "engage",
    "exp": "They engaged an IT guy to help them with the project."
  },
  {
    "wordkey": "firm",
    "exp": "The fruits on the tree were still firm."
  },
  {
    "wordkey": "firm",
    "exp": "The couch was quite firm."
  },
  {
    "wordkey": "fuel",
    "exp": "They used wood as fuel to keep the house warm."
  },
  {
    "wordkey": "fuel",
    "exp": "He came up with a clever idea that would lower the fuel consumption."
  },
  {
    "wordkey": "fuel",
    "exp": "The burning of fossil fuels contributes heavily to climate change and global warming."
  },
  {
    "wordkey": "grand",
    "exp": "She had several grand ideas."
  },
  {
    "wordkey": "grand",
    "exp": "The Grand Canyon was very spectacular."
  },
  {
    "wordkey": "hurricane",
    "exp": "The village was going to be hit by a hurricane."
  },
  {
    "wordkey": "hurricane",
    "exp": "The hurricane blew down several fences that day."
  },
  {
    "wordkey": "loss",
    "exp": "There were substantial job losses when the company was shut down."
  },
  {
    "wordkey": "loss",
    "exp": "She suffered from hearing loss in her sixties."
  },
  {
    "wordkey": "loss",
    "exp": "He suffered a great loss while gambling."
  },
  {
    "wordkey": "plain",
    "exp": "She was wearing a plain cotton dress to the party."
  },
  {
    "wordkey": "reef",
    "exp": "The ship hit a coral reef and was stuck."
  },
  {
    "wordkey": "reef",
    "exp": "As the tide receded, the reef became visible."
  },
  {
    "wordkey": "shut",
    "exp": "She asked her friend to shut the window."
  },
  {
    "wordkey": "shut",
    "exp": "He asked her to shut her eyes because he wanted to surprise her."
  },
  {
    "wordkey": "strict",
    "exp": "The principal was very strict with students about the rules."
  },
  {
    "wordkey": "strict",
    "exp": "They enforced strict laws to reduce the crime rate."
  },
  {
    "wordkey": "surf",
    "exp": "They both went surfing in the ocean."
  },
  {
    "wordkey": "surf",
    "exp": "He was surfing the web, trying to gather some information on the subject."
  },
  {
    "wordkey": "task",
    "exp": "She gave each one a task for the day."
  },
  {
    "wordkey": "task",
    "exp": "The couple had a daunting task to deal with their children that day."
  },
  {
    "wordkey": "task",
    "exp": "His computer was so old that it could barely perform simple tasks."
  },
  {
    "wordkey": "zone",
    "exp": "They designated the whole area a danger zone."
  },
  {
    "wordkey": "zone",
    "exp": "The council established a zone only for staff."
  },
  {
    "wordkey": "apology",
    "exp": "He wrote his friend an apology for all the trouble he had made."
  },
  {
    "wordkey": "apology",
    "exp": "She made an apology to her parents for behaving that way."
  },
  {
    "wordkey": "apology",
    "exp": "I owe you an apology for judging you."
  },
  {
    "wordkey": "bold",
    "exp": "He was bold enough to fight with the champion."
  },
  {
    "wordkey": "bold",
    "exp": "They took the bold step to climb Mount Everest."
  },
  {
    "wordkey": "bold",
    "exp": "He made the bold move of quitting his job to embark on a new career."
  },
  {
    "wordkey": "bold",
    "exp": "Important words are written in bold."
  },
  {
    "wordkey": "bug",
    "exp": "The spider made a web to capture some bugs to eat."
  },
  {
    "wordkey": "capture",
    "exp": "The hunter managed to capture two giraffes."
  },
  {
    "wordkey": "capture",
    "exp": "He wanted to capture their argument on film for fun."
  },
  {
    "wordkey": "capture",
    "exp": "His live performance at the square captured their attention."
  },
  {
    "wordkey": "duke",
    "exp": "The duke hosted an extravagant party."
  },
  {
    "wordkey": "expose",
    "exp": "She pulled aside the drape to expose the room to sunlight."
  },
  {
    "wordkey": "expose",
    "exp": "We should expose ourselves to English more."
  },
  {
    "wordkey": "guilty",
    "exp": "They felt guilty about not telling the truth."
  },
  {
    "wordkey": "guilty",
    "exp": "She had a guilty conscience that had been weighing on her."
  },
  {
    "wordkey": "guilty",
    "exp": "They were summoned to court to determine if they were guilty or innocent of the crime."
  },
  {
    "wordkey": "hire",
    "exp": "We ought to hire someone to fix the roof."
  },
  {
    "wordkey": "innocent",
    "exp": "His lawyer managed to prove him innocent in the last trial."
  },
  {
    "wordkey": "innocent",
    "exp": "She claimed that she was innocent of the crime."
  },
  {
    "wordkey": "innocent",
    "exp": "The innocent kids were just walking on the street."
  },
  {
    "wordkey": "innocent",
    "exp": "He had an innocent outlook, assuming that everyone was honest."
  },
  {
    "wordkey": "language",
    "exp": "They were speaking a foreign language."
  },
  {
    "wordkey": "minister",
    "exp": "The prime minister announced a new policy regarding the issue of climate change."
  },
  {
    "wordkey": "minister",
    "exp": "The minister of education represented a new method of teaching."
  },
  {
    "wordkey": "minister",
    "exp": "The health minister banned the use of some drugs."
  },
  {
    "wordkey": "minister",
    "exp": "The minister was baptizing the newborn baby."
  },
  {
    "wordkey": "ordinary",
    "exp": "Ordinary people were walking around the market."
  },
  {
    "wordkey": "ordinary",
    "exp": "They went for a gentle stroll in the park on an ordinary day."
  },
  {
    "wordkey": "permanent",
    "exp": "She went on a strict diet and made a permanent change."
  },
  {
    "wordkey": "preserve",
    "exp": "We ought to regularly review to preserve our English knowledge."
  },
  {
    "wordkey": "preserve",
    "exp": "They used a chemical to preserve the wall."
  },
  {
    "wordkey": "pronounce",
    "exp": "We have to practice how to pronounce words apart from memorizing their meaning."
  },
  {
    "wordkey": "resemble",
    "exp": "The baby resembled his father closely."
  },
  {
    "wordkey": "resemble",
    "exp": "The kids made the yard resemble a jungle."
  },
  {
    "wordkey": "symptom",
    "exp": "What are the symptoms of syphilis?"
  },
  {
    "wordkey": "symptom",
    "exp": "Sneezing, runny nose, and a high fever are symptoms of the cold."
  },
  {
    "wordkey": "tobacco",
    "exp": "Tobacco in cigarettes has a destructive effect on health."
  },
  {
    "wordkey": "twin",
    "exp": "They were twins, which made it almost impossible to tell them apart."
  },
  {
    "wordkey": "witch",
    "exp": "The witch cursed their farm for a period of three years."
  },
  {
    "wordkey": "accompany",
    "exp": "He accompanied her to her dormitory."
  },
  {
    "wordkey": "accompany",
    "exp": "The meal was accompanied by salad and olives."
  },
  {
    "wordkey": "bare",
    "exp": "They walked on the grass in bare feet."
  },
  {
    "wordkey": "branch",
    "exp": "Two monkeys were hanging from a branch."
  },
  {
    "wordkey": "branch",
    "exp": "Psychology is a branch of medicine."
  },
  {
    "wordkey": "branch",
    "exp": "They frequently monitored the local branches to ensure quality."
  },
  {
    "wordkey": "breath",
    "exp": "He was out of breath and almost drowned."
  },
  {
    "wordkey": "breath",
    "exp": "She was short of breath because she had been running."
  },
  {
    "wordkey": "breath",
    "exp": "He paused for a few seconds to catch his breath, then continued running again."
  },
  {
    "wordkey": "cast",
    "exp": "She cast a pen for him, but he missed it."
  },
  {
    "wordkey": "cast",
    "exp": "They were casting stones in the lake."
  },
  {
    "wordkey": "cast",
    "exp": "The tree branches cast a shadow on the ground, scaring the kids."
  },
  {
    "wordkey": "cast",
    "exp": "The director cast some famous actors for the movie."
  },
  {
    "wordkey": "cast",
    "exp": "The cast of actors was rehearsing their scripts."
  },
  {
    "wordkey": "cast",
    "exp": "His arm was in a cast for two weeks."
  },
  {
    "wordkey": "dare",
    "exp": "He finally dared to skydive from the plane."
  },
  {
    "wordkey": "dare",
    "exp": "How dare you talk to me like that."
  },
  {
    "wordkey": "electronic",
    "exp": "Electronic devices need to be charged every so often."
  },
  {
    "wordkey": "electronic",
    "exp": "He played electronic music in the band."
  },
  {
    "wordkey": "inn",
    "exp": "They found an inn to stay the night."
  },
  {
    "wordkey": "net",
    "exp": "The hunter caught a bird using a net."
  },
  {
    "wordkey": "net",
    "exp": "A school of fish was tangled in the net."
  },
  {
    "wordkey": "philosophy",
    "exp": "His philosophy of life was to treat people as he would like to be treated."
  },
  {
    "wordkey": "pot",
    "exp": "She put some spaghetti into the boiling water in the pot."
  },
  {
    "wordkey": "seed",
    "exp": "The farmer planted some seeds in the fertile soil."
  },
  {
    "wordkey": "seed",
    "exp": "He sowed some seeds and watered them."
  },
  {
    "wordkey": "seed",
    "exp": "After a while, the seeds started to sproute."
  },
  {
    "wordkey": "sharp",
    "exp": "The knife was blunt, but the chef pulled it through versus steel to make it sharp."
  },
  {
    "wordkey": "sort",
    "exp": "What sort of music do you usually listen to?"
  },
  {
    "wordkey": "sort",
    "exp": "She was making a dessert of some sort."
  },
  {
    "wordkey": "sort",
    "exp": "Plants of that sort grow in mountainous areas."
  },
  {
    "wordkey": "sort",
    "exp": "They saw all sorts of animals at the zoo."
  },
  {
    "wordkey": "sort",
    "exp": "A stationery is a shop that sells pens, papers and that sort of thing."
  },
  {
    "wordkey": "subtract",
    "exp": "If we subtract three from ten, we have seven."
  },
  {
    "wordkey": "subtract",
    "exp": "The teacher taught the pupils how to subtract numbers."
  },
  {
    "wordkey": "tight",
    "exp": "The lid on the bottle was so tight."
  },
  {
    "wordkey": "virtual",
    "exp": "Their performance was a virtual masterpiece."
  },
  {
    "wordkey": "virtual",
    "exp": "He had the virtual amount of money he always needed."
  },
  {
    "wordkey": "virtual",
    "exp": "They are making some virtual reality glasses."
  },
  {
    "wordkey": "virtual",
    "exp": "I like to have my virtual desktop well organized and clean."
  },
  {
    "wordkey": "virtual",
    "exp": "Apps like Google Meet are used for virtual meetings."
  },
  {
    "wordkey": "weigh",
    "exp": "She weighed herself to see how much her diet was effective."
  },
  {
    "wordkey": "weigh",
    "exp": "The fruit he bought weighed about two kilograms."
  },
  {
    "wordkey": "whisper",
    "exp": "He whispered softly he was in love with her."
  },
  {
    "wordkey": "abstract",
    "exp": "Apart from concrete nouns, there are also abstract nouns."
  },
  {
    "wordkey": "abstract",
    "exp": "Truth and lie are abstract nouns."
  },
  {
    "wordkey": "annual",
    "exp": "He gave the firm his annual report."
  },
  {
    "wordkey": "annual",
    "exp": "An anniversary is an annual event that is celebrated by married couple."
  },
  {
    "wordkey": "clay",
    "exp": "He made some pottery with clay."
  },
  {
    "wordkey": "cloth",
    "exp": "Her dress was made from plain cotton cloth."
  },
  {
    "wordkey": "cloth",
    "exp": "He grabbed a piece of cloth and wiped the dust off the window."
  },
  {
    "wordkey": "curtain",
    "exp": "She drew the curtain to let in some light."
  },
  {
    "wordkey": "deserve",
    "exp": "The kid behaved well and deserved an ice cream."
  },
  {
    "wordkey": "deserve",
    "exp": "They hoped the judge would give the punishment the criminal deserved."
  },
  {
    "wordkey": "deserve",
    "exp": "He had been training hard, and now he deserved to win."
  },
  {
    "wordkey": "fertile",
    "exp": "He had a fertile garden in his backyard, but it was left idle."
  },
  {
    "wordkey": "flood",
    "exp": "There was a flood after such torrential rain."
  },
  {
    "wordkey": "flood",
    "exp": "The washing machine broke and flooded the kitchen."
  },
  {
    "wordkey": "flood",
    "exp": "People were flooding into the stadium to watch the game."
  },
  {
    "wordkey": "flood",
    "exp": "Strong wind made dust flood in the room through the window."
  },
  {
    "wordkey": "flood",
    "exp": "They were flooded with sorrow after his death."
  },
  {
    "wordkey": "flood",
    "exp": "The little kid was in floods of tears when his toy broke."
  },
  {
    "wordkey": "furniture",
    "exp": "The only items of furniture he had was a table and two chairs."
  },
  {
    "wordkey": "furniture",
    "exp": "They had some antique furniture in their living room."
  },
  {
    "wordkey": "ideal",
    "exp": "It was the ideal opportunity for him to ask her out."
  },
  {
    "wordkey": "ideal",
    "exp": "If it were an ideal world, there would be no crime, and no one would be hungry."
  },
  {
    "wordkey": "ideal",
    "exp": "They found the ideal person for the position."
  },
  {
    "wordkey": "intelligence",
    "exp": "Due to his high intelligence, he learned the job very fast."
  },
  {
    "wordkey": "obtain",
    "exp": "Petroleum is obtained by extracting from the ground."
  },
  {
    "wordkey": "obtain",
    "exp": "After a lot of hard work, he obtained a brilliant career."
  },
  {
    "wordkey": "obtain",
    "exp": "He decided not to waste time anymore and obtain knowledge as much as possible."
  },
  {
    "wordkey": "religious",
    "exp": "Monks and nuns are religious people."
  },
  {
    "wordkey": "romantic",
    "exp": "They watched a romantic movie together."
  },
  {
    "wordkey": "shell",
    "exp": "The little girl collected some shells from the beach."
  },
  {
    "wordkey": "shell",
    "exp": "Some nuts have very hard shells."
  },
  {
    "wordkey": "shell",
    "exp": "The tortoise went into its shell when it was alarmed."
  },
  {
    "wordkey": "shore",
    "exp": "A few boats were floating near the shore."
  },
  {
    "wordkey": "shore",
    "exp": "They walked along the shore, talking about their children."
  },
  {
    "wordkey": "wheel",
    "exp": "The car had six wheels instead of four."
  },
  {
    "wordkey": "wooden",
    "exp": "There was a wooden fence around the patio."
  },
  {
    "wordkey": "appliance",
    "exp": "There were some appliances in the kitchen."
  },
  {
    "wordkey": "basin",
    "exp": "The basin was filled with water."
  },
  {
    "wordkey": "broom",
    "exp": "She took a broom and swept the floor."
  },
  {
    "wordkey": "caterpillar",
    "exp": "The caterpillar was eating leaves."
  },
  {
    "wordkey": "cupboard",
    "exp": "He put the cereal in the cupboard."
  },
  {
    "wordkey": "delicate",
    "exp": "The newborn baby was so delicate."
  },
  {
    "wordkey": "delicate",
    "exp": "The surgeon performed a delicate operation on his mind."
  },
  {
    "wordkey": "delicate",
    "exp": "Negotiating a peace treaty was a delicate task."
  },
  {
    "wordkey": "emerge",
    "exp": "A rabbit emerged from a hole and hopped away."
  },
  {
    "wordkey": "emerge",
    "exp": "She emerged from behind a tree and surprised him."
  },
  {
    "wordkey": "handicap",
    "exp": "He had a slight handicap that kept him from running."
  },
  {
    "wordkey": "hole",
    "exp": "There was a hole in the wall that let him cross."
  },
  {
    "wordkey": "hole",
    "exp": "The farmer dug a few holes and sowed the seeds."
  },
  {
    "wordkey": "hook",
    "exp": "The fisherman put a worm on a hook and cast it into the lake."
  },
  {
    "wordkey": "hook",
    "exp": "He hung his jacket on a hook once he got home."
  },
  {
    "wordkey": "hop",
    "exp": "The kids were hopping around as if they were kangaroos."
  },
  {
    "wordkey": "laundry",
    "exp": "She did the laundry before going shopping."
  },
  {
    "wordkey": "pursue",
    "exp": "The police pursued the robbers and caught them after three miles."
  },
  {
    "wordkey": "pursue",
    "exp": "The tiger pursued its prey."
  },
  {
    "wordkey": "pursue",
    "exp": "She was trying to pursue a career as an actress."
  },
  {
    "wordkey": "pursue",
    "exp": "He taught his son to never give up pursuing his dreams."
  },
  {
    "wordkey": "reluctant",
    "exp": "The kids were reluctant to say what happened."
  },
  {
    "wordkey": "sleeve",
    "exp": "He was wearing a sleeveless shirt."
  },
  {
    "wordkey": "sleeve",
    "exp": "She rolled up her sleeves to avoid getting dirty."
  },
  {
    "wordkey": "spine",
    "exp": "You should keep your spine straight and not hunch."
  },
  {
    "wordkey": "spine",
    "exp": "She had an accident and injured her spine."
  },
  {
    "wordkey": "stain",
    "exp": "He spilled the juice and made a stain on his shirt."
  },
  {
    "wordkey": "stain",
    "exp": "They sat on the wet grass, and when they stood up, they both had grass stains on their pants."
  },
  {
    "wordkey": "stain",
    "exp": "She knocked over some coffee and stained the carpet."
  },
  {
    "wordkey": "stain",
    "exp": "Be careful not to stain your hands and clothes with ink."
  },
  {
    "wordkey": "strip",
    "exp": "They walked carefully on a narrow strip of land."
  },
  {
    "wordkey": "strip",
    "exp": "You should swipe the card through the reader on the magnetic strip."
  },
  {
    "wordkey": "swear",
    "exp": "He has sworn to improve his English."
  },
  {
    "wordkey": "swear",
    "exp": "They both swore to secrecy about the matter."
  },
  {
    "wordkey": "swear",
    "exp": "The knight had sworn an oath to protect his king and queen."
  },
  {
    "wordkey": "swear",
    "exp": "They were swearing at each other during the fight."
  },
  {
    "wordkey": "swing",
    "exp": "He swung the golf club and hit the ball forcefully."
  },
  {
    "wordkey": "swing",
    "exp": "There were swings and slides in the playground."
  },
  {
    "wordkey": "acre",
    "exp": "The farm was about one hundred acres."
  },
  {
    "wordkey": "archaeology",
    "exp": "His favorite branch of study was archaeology."
  },
  {
    "wordkey": "chamber",
    "exp": "The meeting was held in the council chamber."
  },
  {
    "wordkey": "chamber",
    "exp": "His studio was a small chamber filled with papers and books."
  },
  {
    "wordkey": "channel",
    "exp": "Some boats were passing through the narrow channel."
  },
  {
    "wordkey": "channel",
    "exp": "The irrigation channel helped the farmers to provide their lands with water."
  },
  {
    "wordkey": "channel",
    "exp": "He grabbed the remote control to change the channel to something more fun."
  },
  {
    "wordkey": "core",
    "exp": "She cut the seeds at the apple core and threw them on the ground."
  },
  {
    "wordkey": "core",
    "exp": "Not having enough resources was at the core of their problem."
  },
  {
    "wordkey": "corridor",
    "exp": "Their room was at the end of the corridor."
  },
  {
    "wordkey": "corridor",
    "exp": "Take the corridor on the right, and you will see the lounge."
  },
  {
    "wordkey": "distinct",
    "exp": "The two brothers were distinct from each other."
  },
  {
    "wordkey": "distinct",
    "exp": "Those dog breeds are very distinct."
  },
  {
    "wordkey": "elite",
    "exp": "The group was made up of elite members."
  },
  {
    "wordkey": "elite",
    "exp": "He was a member of an elite group of scientists."
  },
  {
    "wordkey": "engineer",
    "exp": "He was trying to engineer the robot."
  },
  {
    "wordkey": "engineer",
    "exp": "She was studying to become a structural engineer."
  },
  {
    "wordkey": "found",
    "exp": "Elon Musk founded Tesla and some other companies."
  },
  {
    "wordkey": "found",
    "exp": "His hypothesis was founded on empirical evidence gathered over a decade of experiments."
  },
  {
    "wordkey": "gap",
    "exp": "They had to leap the gap between two cliffs."
  },
  {
    "wordkey": "gap",
    "exp": "He had a gap between his teeth."
  },
  {
    "wordkey": "glory",
    "exp": "They marveled at the glory of the view."
  },
  {
    "wordkey": "glory",
    "exp": "They restored the fort to its former glory."
  },
  {
    "wordkey": "interior",
    "exp": "There was nothing in the interior of the box."
  },
  {
    "wordkey": "interior",
    "exp": "The interior of the car was spacious."
  },
  {
    "wordkey": "lion",
    "exp": "A pride of lions sat around a tree."
  },
  {
    "wordkey": "role",
    "exp": "Her role in the firm was to guide the clients."
  },
  {
    "wordkey": "role",
    "exp": "He was playing the role of a servant in the show."
  },
  {
    "wordkey": "royal",
    "exp": "The royal family had gone to a nearby village for vacation."
  },
  {
    "wordkey": "sole",
    "exp": "She was the sole person in the warehouse."
  },
  {
    "wordkey": "sole",
    "exp": "He was the sole survivor of the accident."
  },
  {
    "wordkey": "surface",
    "exp": "He cleaned the surface of the table before painting it."
  },
  {
    "wordkey": "surface",
    "exp": "After a few minutes, her anger rose to the surface."
  },
  {
    "wordkey": "agreement",
    "exp": "They finally reached an agreement on what to do about the matter."
  },
  {
    "wordkey": "agreement",
    "exp": "He was in agreement with her about the method."
  },
  {
    "wordkey": "arise",
    "exp": "Everything was fine until a problem arose."
  },
  {
    "wordkey": "arise",
    "exp": "A great opportunity arose that made it possible for them to live in America."
  },
  {
    "wordkey": "benefactor",
    "exp": "He was the benefactor of several orphans."
  },
  {
    "wordkey": "blacksmith",
    "exp": "The blacksmith was pounding on the sword in the forge."
  },
  {
    "wordkey": "chimney",
    "exp": "Smoke was coming from the chimney, so they thought someone was in the house."
  },
  {
    "wordkey": "compensate",
    "exp": "The judge said he had to compensate the victim."
  },
  {
    "wordkey": "compensate",
    "exp": "His manager compensated him for the extra work he had done."
  },
  {
    "wordkey": "encounter",
    "exp": "On their trip, they encountered a deer."
  },
  {
    "wordkey": "encounter",
    "exp": "His proposal encountered opposition during the meeting."
  },
  {
    "wordkey": "encounter",
    "exp": "The company encountered difficulties during the recession."
  },
  {
    "wordkey": "encounter",
    "exp": "She described the encounter with her favorite actor as her most delightful experience."
  },
  {
    "wordkey": "exceed",
    "exp": "The money they had spent exceeded the budget."
  },
  {
    "wordkey": "exceed",
    "exp": "She exceeded the speed limit and was stopped by a police officer."
  },
  {
    "wordkey": "forge",
    "exp": "They forged a close bond during the course."
  },
  {
    "wordkey": "forge",
    "exp": "He needed someone to forge a signature for him."
  },
  {
    "wordkey": "humble",
    "exp": "He was humble about his skills."
  },
  {
    "wordkey": "humble",
    "exp": "Being humble is a good virtue that everyone needs to work on."
  },
  {
    "wordkey": "iron",
    "exp": "The blacksmith used some iron to make a shield."
  },
  {
    "wordkey": "iron",
    "exp": "His doctor prescribed him some supplement for his iron deficiency."
  },
  {
    "wordkey": "ladder",
    "exp": "He fell off a ladder and broke his arm."
  },
  {
    "wordkey": "modest",
    "exp": "Despite his impressive achievement, he was modest about it and never boasted."
  },
  {
    "wordkey": "modest",
    "exp": "He was a modest person who knew a lot about his career."
  },
  {
    "wordkey": "modest",
    "exp": "She grabbed a modest portion of the cake, as she was on a diet."
  },
  {
    "wordkey": "modest",
    "exp": "They lived on a modest house on the outskirt of the town."
  },
  {
    "wordkey": "occupy",
    "exp": "All the gazebos were occupied in the park."
  },
  {
    "wordkey": "occupy",
    "exp": "No one had occupied the house for years."
  },
  {
    "wordkey": "occupy",
    "exp": "Her weekend was occupied with the homework her teacher had assigned."
  },
  {
    "wordkey": "occupy",
    "exp": "Sheldon would much prefer to occupy himself with scientific stuff."
  },
  {
    "wordkey": "penny",
    "exp": "There was a penny on the floor."
  },
  {
    "wordkey": "penny",
    "exp": "The candy cost him twenty pence."
  },
  {
    "wordkey": "preach",
    "exp": "She preached about the importance of forgiveness."
  },
  {
    "wordkey": "prosper",
    "exp": "If you want to prosper, quit working for money and work on yourself."
  },
  {
    "wordkey": "prosper",
    "exp": "After a few years, her business prospered, and she took on extra workers."
  },
  {
    "wordkey": "province",
    "exp": "China consists of 23 provinces."
  },
  {
    "wordkey": "province",
    "exp": "They traveled across several provinces to explore different parts of the country."
  },
  {
    "wordkey": "satisfaction",
    "exp": "Her parents were filled with satisfaction when they saw her grades."
  },
  {
    "wordkey": "satisfaction",
    "exp": "Job satisfaction is prior to salary for some people."
  },
  {
    "wordkey": "acquire",
    "exp": "He was wearing a recently acquired coat."
  },
  {
    "wordkey": "acquire",
    "exp": "On the way back home, I lost my newly-acquired headphones."
  },
  {
    "wordkey": "awkward",
    "exp": "She had an awkward accent that made her difficult to be understood."
  },
  {
    "wordkey": "awkward",
    "exp": "He forgot his name and felt awkward."
  },
  {
    "wordkey": "awkward",
    "exp": "It was such an awkward situation, as no one knew how to deal with the issue."
  },
  {
    "wordkey": "awkward",
    "exp": "There was an awkward silence when he farted."
  },
  {
    "wordkey": "caretaker",
    "exp": "Her caretaker had gone out to get something for her."
  },
  {
    "wordkey": "deceive",
    "exp": "He deceived them with a classic trick."
  },
  {
    "wordkey": "deceive",
    "exp": "The witch deceived them into going into the cave."
  },
  {
    "wordkey": "discourage",
    "exp": "They discouraged him from quitting his job."
  },
  {
    "wordkey": "discourage",
    "exp": "The fact that only two of the candidates would get the position discouraged him from applying."
  },
  {
    "wordkey": "fake",
    "exp": "It was a fake wig, not his actual hair."
  },
  {
    "wordkey": "fake",
    "exp": "He made up a fake story to deceive them."
  },
  {
    "wordkey": "hatred",
    "exp": "She had a great hatred for her aunt."
  },
  {
    "wordkey": "hatred",
    "exp": "There was a deep-rooted hatred between the two tribes."
  },
  {
    "wordkey": "hut",
    "exp": "There was a hut in the mountains."
  },
  {
    "wordkey": "inferior",
    "exp": "The fruit he bought from the market was inferior to the fruit she got."
  },
  {
    "wordkey": "inferior",
    "exp": "He had been regarded as intellectually inferior until he created that machine."
  },
  {
    "wordkey": "lodge",
    "exp": "The gardener had been living in a lodge."
  },
  {
    "wordkey": "neglect",
    "exp": "They neglected the ground, and the car stuck in the mud."
  },
  {
    "wordkey": "neglect",
    "exp": "Someone stole his suitcase because he neglected it."
  },
  {
    "wordkey": "neglect",
    "exp": "She neglected her son, and he was about to fall into the ocean."
  },
  {
    "wordkey": "neglect",
    "exp": "He neglected to write the last piece of his assignment."
  },
  {
    "wordkey": "newcomer",
    "exp": "The newcomer felt lonely in his new school until he met her."
  },
  {
    "wordkey": "offense",
    "exp": "He committed an offense that led to his imprisonment."
  },
  {
    "wordkey": "offense",
    "exp": "She was convicted of a serious offense."
  },
  {
    "wordkey": "overlook",
    "exp": "She overlooked her step and almost fell off the bus."
  },
  {
    "wordkey": "overlook",
    "exp": "The balcony in their room overlooked the ocean."
  },
  {
    "wordkey": "repay",
    "exp": "She told her friend that she would repay in a month."
  },
  {
    "wordkey": "repay",
    "exp": "He repaid his friend for all his kindness."
  },
  {
    "wordkey": "ridiculous",
    "exp": "It seemed like a ridiculous idea to him."
  },
  {
    "wordkey": "ridiculous",
    "exp": "She looked ridiculous in that dress."
  },
  {
    "wordkey": "satisfactory",
    "exp": "After all his hard work, he got a highly satisfactory job."
  },
  {
    "wordkey": "satisfactory",
    "exp": "Her grades were satisfactory."
  },
  {
    "wordkey": "shepherd",
    "exp": "The shepherd led the sheep down the hill."
  },
  {
    "wordkey": "venture",
    "exp": "They ventured into the mountains."
  },
  {
    "wordkey": "venture",
    "exp": "Despite the bad weather, the captain decided to venture forth into the ocean."
  },
  {
    "wordkey": "venture",
    "exp": "His first business venture failed, but he learned valuable lessons that helped him succeed later."
  },
  {
    "wordkey": "wheat",
    "exp": "He had a large field of wheat that was ready to be harvested."
  },
  {
    "wordkey": "alley",
    "exp": "The alley was very dark, making it difficult to see the way."
  },
  {
    "wordkey": "ax",
    "exp": "He used his ax to cut some wood."
  },
  {
    "wordkey": "bunch",
    "exp": "A bunch of people were standing in a line."
  },
  {
    "wordkey": "bunch",
    "exp": "There was a bunch of bananas on the counter."
  },
  {
    "wordkey": "chore",
    "exp": "She had chores to do before going out."
  },
  {
    "wordkey": "decent",
    "exp": "She made a decent meal for her friends."
  },
  {
    "wordkey": "decent",
    "exp": "If you want a decent table, you have to spend more."
  },
  {
    "wordkey": "disgraceful",
    "exp": "She had disgraceful behavior toward her friend."
  },
  {
    "wordkey": "elbow",
    "exp": "He fell from his bike and injured his elbow."
  },
  {
    "wordkey": "grateful",
    "exp": "They were grateful to their parents for all the good things they had done."
  },
  {
    "wordkey": "grateful",
    "exp": "After that accident, they felt grateful to be alive."
  },
  {
    "wordkey": "grateful",
    "exp": "She was grateful that she could pass the exam."
  },
  {
    "wordkey": "irritate",
    "exp": "His disgraceful conduct irritated them."
  },
  {
    "wordkey": "irritate",
    "exp": "It irritated him that his friend was half an hour late."
  },
  {
    "wordkey": "kid",
    "exp": "They were kidding about the way he talked."
  },
  {
    "wordkey": "kid",
    "exp": "There were a bunch of kids playing in the alley."
  },
  {
    "wordkey": "loose",
    "exp": "All the pictures and drawings were hanging loose after the earthquake."
  },
  {
    "wordkey": "loose",
    "exp": "The shelf was unstable because one of the screws was loose."
  },
  {
    "wordkey": "offend",
    "exp": "He offended them by calling them old."
  },
  {
    "wordkey": "offend",
    "exp": "The judge told him if he offends again, he would find himself in jail."
  },
  {
    "wordkey": "overnight",
    "exp": "She crammed her book overnight."
  },
  {
    "wordkey": "overnight",
    "exp": "During their journey, they slept in a tent overnight."
  },
  {
    "wordkey": "overnight",
    "exp": "It was an overnight trip they had to take."
  },
  {
    "wordkey": "persist",
    "exp": "Her pain persisted, so she went to the doctor."
  },
  {
    "wordkey": "persist",
    "exp": "The dark clouds persisted for several hours."
  },
  {
    "wordkey": "persist",
    "exp": "She persisted with the work and finally finished it."
  },
  {
    "wordkey": "pine",
    "exp": "The squirrel went up a pine tree."
  },
  {
    "wordkey": "scar",
    "exp": "The accident gave him a scar on his face."
  },
  {
    "wordkey": "sensation",
    "exp": "He had a minor sensation of pain in his knee."
  },
  {
    "wordkey": "sled",
    "exp": "They rode a sled down the hill together."
  },
  {
    "wordkey": "tease",
    "exp": "They were teasing the newcomer."
  },
  {
    "wordkey": "tease",
    "exp": "He hated to be teased about his poor family."
  },
  {
    "wordkey": "valentine",
    "exp": "He asked her to be his valentine."
  },
  {
    "wordkey": "acquaint",
    "exp": "She sat on a chair and tried to acquaint herself with the guitar."
  },
  {
    "wordkey": "acquaint",
    "exp": "He acquainted his new colleague with the project."
  },
  {
    "wordkey": "curse",
    "exp": "The wicked witch cursed his farm."
  },
  {
    "wordkey": "curse",
    "exp": "He was outraged and started to curse at them."
  },
  {
    "wordkey": "curse",
    "exp": "Some drivers are so irritable that they curse others for not driving well."
  },
  {
    "wordkey": "disguise",
    "exp": "She put on a wig and sunglasses as a disguise."
  },
  {
    "wordkey": "disguise",
    "exp": "They went there in disguise to avoid being recognized."
  },
  {
    "wordkey": "disguise",
    "exp": "Losing his job turned out to be a blessing in disguise, as he landed an even better job later."
  },
  {
    "wordkey": "disguise",
    "exp": "He disguised himself to trick them."
  },
  {
    "wordkey": "disguise",
    "exp": "They tried to disguise their opposition by forced laughter, hoping no one would notice."
  },
  {
    "wordkey": "fancy",
    "exp": "They both wore fancy attires to the event."
  },
  {
    "wordkey": "fancy",
    "exp": "Do you fancy going shopping this evening?"
  },
  {
    "wordkey": "fancy",
    "exp": "He had always fancied her since his adolescence."
  },
  {
    "wordkey": "fancy",
    "exp": "Sheldon fancied himself as the smartest person in the group."
  },
  {
    "wordkey": "flashlight",
    "exp": "They carried flashlights to see their steps in the dark."
  },
  {
    "wordkey": "flashlight",
    "exp": "Suddenly, a flashlight shone into the room."
  },
  {
    "wordkey": "hood",
    "exp": "When it began to rain, he put on his hood to avoid getting soaked."
  },
  {
    "wordkey": "nourish",
    "exp": "She did everything she could to nourish her children."
  },
  {
    "wordkey": "nourish",
    "exp": "The farmer used compost to nourish his plants."
  },
  {
    "wordkey": "nourish",
    "exp": "He kept nourishing his dreams until they became a reality."
  },
  {
    "wordkey": "pirate",
    "exp": "Some pirates attacked them and took some of them prisoners."
  },
  {
    "wordkey": "publication",
    "exp": "He had been running a publication for health care."
  },
  {
    "wordkey": "publication",
    "exp": "Her latest book gained popularity shorly after its publication."
  },
  {
    "wordkey": "riddle",
    "exp": "She gave the kids a riddle to solve."
  },
  {
    "wordkey": "rot",
    "exp": "After a few months, the trunk started to rot."
  },
  {
    "wordkey": "rot",
    "exp": "The wooden floor on the deck began to rot away over the years."
  },
  {
    "wordkey": "shortly",
    "exp": "Shortly after they came back from the trip, he got a promotion."
  },
  {
    "wordkey": "skeleton",
    "exp": "The paleontologist found the skeleton of a dinosaur."
  },
  {
    "wordkey": "spoil",
    "exp": "She forgot to put the fruit in the fridge, and it spoiled."
  },
  {
    "wordkey": "spoil",
    "exp": "She spoiled the movie for him by saying what happened."
  },
  {
    "wordkey": "starve",
    "exp": "Dozens of people starved to death during the famine."
  },
  {
    "wordkey": "thrill",
    "exp": "They loved the thrill of climbing the cliff."
  },
  {
    "wordkey": "thrill",
    "exp": "Some people do dangerous activities just because of the thrill of it."
  },
  {
    "wordkey": "thrill",
    "exp": "It gave him a thrill to see his friend after a long time."
  },
  {
    "wordkey": "wicked",
    "exp": "He was a wicked man who hated children."
  },
  {
    "wordkey": "alert",
    "exp": "She alerted the tourists about the danger zone."
  },
  {
    "wordkey": "alert",
    "exp": "He sent them a message to alert them of detonation."
  },
  {
    "wordkey": "alert",
    "exp": "The town issued a hurricane alert, making all the inhabitants seek a safe place."
  },
  {
    "wordkey": "alert",
    "exp": "All hospitals in the city were on alert due to the outbreak of a contagious virus."
  },
  {
    "wordkey": "alert",
    "exp": "After drinking two cups of coffee, he felt very alert."
  },
  {
    "wordkey": "broadcast",
    "exp": "They were watching a live broadcast."
  },
  {
    "wordkey": "broadcast",
    "exp": "A radio broadcast was talking about the death of a celebrity."
  },
  {
    "wordkey": "broadcast",
    "exp": "The final match was broadcasted live to all provinces."
  },
  {
    "wordkey": "broadcast",
    "exp": "After only a few days, their affair was broadcasted to the entire town."
  },
  {
    "wordkey": "bulletin",
    "exp": "They published a bulletin reporting on the status of the firm."
  },
  {
    "wordkey": "bulletin",
    "exp": "Professor Geller was putting a bulletin on the notice board to inform students about their scores."
  },
  {
    "wordkey": "bump",
    "exp": "He accidentally hit the baby against the wall, which gave her a bump on her head."
  },
  {
    "wordkey": "bump",
    "exp": "She overlooked the bump and fell off her bike."
  },
  {
    "wordkey": "bump",
    "exp": "He slipped and bumped his head on the table."
  },
  {
    "wordkey": "bump",
    "exp": "They bumped into a tree and damaged the car."
  },
  {
    "wordkey": "chop",
    "exp": "Monica chopped some vegetables and put them in the wok."
  },
  {
    "wordkey": "closet",
    "exp": "Her closet was filled with dresses and shoes."
  },
  {
    "wordkey": "console",
    "exp": "They consoled him about his deceased father."
  },
  {
    "wordkey": "console",
    "exp": "He consoled himself by listening to relaxing music."
  },
  {
    "wordkey": "console",
    "exp": "She was consoled by knowing that she would have another chance next year."
  },
  {
    "wordkey": "console",
    "exp": "The pilot adjusted the controls on the console before taking off."
  },
  {
    "wordkey": "district",
    "exp": "He moved into a business district."
  },
  {
    "wordkey": "district",
    "exp": "They bought a house in the Lake District."
  },
  {
    "wordkey": "drawer",
    "exp": "She hid the gift he had bought her in the bottom drawer."
  },
  {
    "wordkey": "endure",
    "exp": "He endured four years of hard work, which made him even stronger."
  },
  {
    "wordkey": "endure",
    "exp": "They were in the middle of nowhere, and she had to endure the painful labor."
  },
  {
    "wordkey": "execute",
    "exp": "They caught the pirate and executed him in public."
  },
  {
    "wordkey": "execute",
    "exp": "The artist meticulously executed his vision, resulting in a masterpiece."
  },
  {
    "wordkey": "grasp",
    "exp": "She suddenly got scared and grasped his hand."
  },
  {
    "wordkey": "grasp",
    "exp": "The robber grasped her bag and ran away."
  },
  {
    "wordkey": "grasp",
    "exp": "After hours of studying, he could finally grasp the subject."
  },
  {
    "wordkey": "rear",
    "exp": "He sat on the rear seat."
  },
  {
    "wordkey": "rear",
    "exp": "There was a playground at the rear of the park."
  },
  {
    "wordkey": "rear",
    "exp": "The mother wolf reared its young."
  },
  {
    "wordkey": "senator",
    "exp": "The senator enacted some laws that were meant to reduce the street crime."
  },
  {
    "wordkey": "skull",
    "exp": "They found a spine and a skull on the farm."
  },
  {
    "wordkey": "stir",
    "exp": "She stirred the dough with two eggs into a mixture."
  },
  {
    "wordkey": "tap",
    "exp": "He became nervous, tapping his foot against the table."
  },
  {
    "wordkey": "tap",
    "exp": "Suddenly, someone tapped on his shoulder and scared the crap out of him."
  },
  {
    "wordkey": "tremendous",
    "exp": "There was a tremendous amount of food at the feast."
  },
  {
    "wordkey": "tremendous",
    "exp": "The workers made a tremendous amount of noise for an hour."
  },
  {
    "wordkey": "tremendous",
    "exp": "His performance in the play was tremendous."
  },
  {
    "wordkey": "underneath",
    "exp": "There was a bomb underneath the ferry."
  },
  {
    "wordkey": "underneath",
    "exp": "Underneath his gruff exterior was a very kind man."
  },
  {
    "wordkey": "underneath",
    "exp": "The mechanic looked underneath to inspect the car."
  },
  {
    "wordkey": "worm",
    "exp": "The bird caught some worms for its nestlings."
  },
  {
    "wordkey": "worm",
    "exp": "The fisherman used worms to catch fish."
  },
  {
    "wordkey": "abandon",
    "exp": "They abandoned the car since it had broken down."
  },
  {
    "wordkey": "abandon",
    "exp": "He had abandoned his family years before."
  },
  {
    "wordkey": "ambitious",
    "exp": "Being ambitious is necessary for someone who wants to be rich."
  },
  {
    "wordkey": "ambitious",
    "exp": "He was ambitious and wanted to break a world record."
  },
  {
    "wordkey": "ambitious",
    "exp": "Building such a tremendous structure was an ambitious plan."
  },
  {
    "wordkey": "bark",
    "exp": "A dog had been barking for a few minutes before somebody called out for help."
  },
  {
    "wordkey": "bark",
    "exp": "They carved their initials on the bark of a tree."
  },
  {
    "wordkey": "bay",
    "exp": "The fisherman cast his net into the bay."
  },
  {
    "wordkey": "brilliant",
    "exp": "She was the leading scientist who had brilliant ideas."
  },
  {
    "wordkey": "brilliant",
    "exp": "Eventually, he impressed everyone by his brilliant success."
  },
  {
    "wordkey": "chin",
    "exp": "A little of jam fell on his chin."
  },
  {
    "wordkey": "complaint",
    "exp": "The head chef received a complaint about the food."
  },
  {
    "wordkey": "complaint",
    "exp": "She made a complaint to her manager."
  },
  {
    "wordkey": "complaint",
    "exp": "They had complaints that the service was too late."
  },
  {
    "wordkey": "deaf",
    "exp": "He shouted to him as if he was deaf."
  },
  {
    "wordkey": "enthusiastic",
    "exp": "The little boy was very enthusiastic about his birthday party."
  },
  {
    "wordkey": "expedition",
    "exp": "The astronauts were all enthusiastic about their expedition to the Moon."
  },
  {
    "wordkey": "expedition",
    "exp": "They went on an expedition to the Sahara Desert."
  },
  {
    "wordkey": "expedition",
    "exp": "The expedition will set off early in the morning."
  },
  {
    "wordkey": "horizon",
    "exp": "We could see a ship on the horizon."
  },
  {
    "wordkey": "loyal",
    "exp": "The knight vowed to be loyal to his king."
  },
  {
    "wordkey": "loyal",
    "exp": "He was fiercely loyal to his friends."
  },
  {
    "wordkey": "mayor",
    "exp": "The mayor ordered the construction of a new bridge."
  },
  {
    "wordkey": "mutual",
    "exp": "They decided to unite and act to their mutual advantages."
  },
  {
    "wordkey": "mutual",
    "exp": "After a lengthy discussion, they reached a mutual consent."
  },
  {
    "wordkey": "refuge",
    "exp": "The immigrants were seeking refuge."
  },
  {
    "wordkey": "refuge",
    "exp": "It was raining heavily, but luckily, they found a refuge."
  },
  {
    "wordkey": "restore",
    "exp": "They took the old car to the mechanic to restore it."
  },
  {
    "wordkey": "rub",
    "exp": "He rubbed at the stain and tried to wipe it."
  },
  {
    "wordkey": "rub",
    "exp": "She put some lotion on her skin and rubbed it in."
  },
  {
    "wordkey": "rub",
    "exp": "The kitten rubbed itself against him."
  },
  {
    "wordkey": "rub",
    "exp": "It was freezing cold and they were rubbing their hands together."
  },
  {
    "wordkey": "sense",
    "exp": "Can you imagine life without senses?"
  },
  {
    "wordkey": "sense",
    "exp": "She had a good sense of humor, which made her even more attractive."
  },
  {
    "wordkey": "sense",
    "exp": "He seems to have lost his sense of fun over years of working too hard."
  },
  {
    "wordkey": "veterinarian",
    "exp": "The duck ate the ring, so they took it to the veterinarian."
  },
  {
    "wordkey": "anniversary",
    "exp": "They went to a Chinese restaurant to celebrate their wedding anniversary."
  },
  {
    "wordkey": "anniversary",
    "exp": "The company marked its 15th anniversary by hosting a festivity for its employees."
  },
  {
    "wordkey": "ashamed",
    "exp": "They were ashamed to ruin her meal."
  },
  {
    "wordkey": "ashamed",
    "exp": "He felt ashamed of himself for making that noise."
  },
  {
    "wordkey": "ashamed",
    "exp": "They were ashamed of him after his remarks."
  },
  {
    "wordkey": "burst",
    "exp": "The door burst open, and the FBI rushed in."
  },
  {
    "wordkey": "burst",
    "exp": "When the bomb burst, the entire place was messy."
  },
  {
    "wordkey": "burst",
    "exp": "The river burst its banks due to flooding caused by an earthquake."
  },
  {
    "wordkey": "burst",
    "exp": "The kids were bursting with enthusiasm, waiting to get on the roller coaster."
  },
  {
    "wordkey": "burst",
    "exp": "He was bursting to tell his friend his idea."
  },
  {
    "wordkey": "carpenter",
    "exp": "They hired a carpenter to make a drawer."
  },
  {
    "wordkey": "coal",
    "exp": "They were mining coal underground."
  },
  {
    "wordkey": "couch",
    "exp": "The couch was made of cotton fabric."
  },
  {
    "wordkey": "drip",
    "exp": "Water had been dripping down the wall."
  },
  {
    "wordkey": "elegant",
    "exp": "He was wearing an elegant suit."
  },
  {
    "wordkey": "elegant",
    "exp": "She was a very elegant lady."
  },
  {
    "wordkey": "fabric",
    "exp": "Her dress was made from a silk fabric."
  },
  {
    "wordkey": "highland",
    "exp": "They had a cottage in the highlands."
  },
  {
    "wordkey": "ivory",
    "exp": "He had a necklace made from ivory passed down from his grandparents."
  },
  {
    "wordkey": "mill",
    "exp": "There was a small mill on their ranch."
  },
  {
    "wordkey": "needle",
    "exp": "She had difficulty threading the needle."
  },
  {
    "wordkey": "polish",
    "exp": "He polished his shoes and got ready for the big day."
  },
  {
    "wordkey": "sew",
    "exp": "The tailor sewed up the hole in his shirt."
  },
  {
    "wordkey": "shed",
    "exp": "The shed behind the yard was barely visible, as it was covered with foliage."
  },
  {
    "wordkey": "shed",
    "exp": "He took the mowing machine from the shed and began mowing the lawn."
  },
  {
    "wordkey": "thread",
    "exp": "She ran out of white thread and had to use a different color."
  },
  {
    "wordkey": "trim",
    "exp": "Their morning task was to trim the bushes."
  },
  {
    "wordkey": "trim",
    "exp": "He went to the barber to trim his hair."
  },
  {
    "wordkey": "trim",
    "exp": "The gardener trimmed the dead branches to encourage new growth."
  },
  {
    "wordkey": "upward",
    "exp": "The little kids looked upward and saw some clouds shaped like animals."
  },
  {
    "wordkey": "upward",
    "exp": "The prices were going upward."
  },
  {
    "wordkey": "ally",
    "exp": "They asked their allies to help them in the war."
  },
  {
    "wordkey": "boast",
    "exp": "Some parents always boast about their children."
  },
  {
    "wordkey": "boast",
    "exp": "She boasted that she was the most intelligent student in her class."
  },
  {
    "wordkey": "bounce",
    "exp": "The ball bounced off the ground into the lake."
  },
  {
    "wordkey": "bounce",
    "exp": "He bounced her on the bed."
  },
  {
    "wordkey": "bounce",
    "exp": "Her bag bounced against her side as she ran."
  },
  {
    "wordkey": "bully",
    "exp": "He was a big bully in the class, and everyone scared him except her."
  },
  {
    "wordkey": "bully",
    "exp": "They bullied him into giving up his food."
  },
  {
    "wordkey": "carbohydrate",
    "exp": "Athletes consume a lot of carbohydrates."
  },
  {
    "wordkey": "crawl",
    "exp": "The baby crawled across the room toward his mother."
  },
  {
    "wordkey": "crawl",
    "exp": "The wounded soldier crawled to safety."
  },
  {
    "wordkey": "defeat",
    "exp": "Brazil defeated Italy and reached the final match."
  },
  {
    "wordkey": "dial",
    "exp": "The dial on the washing machine controls the time for washing."
  },
  {
    "wordkey": "dial",
    "exp": "The dial on her watch was dark blue."
  },
  {
    "wordkey": "dial",
    "exp": "The dial of his watch sahttered."
  },
  {
    "wordkey": "dial",
    "exp": "He used a sundial to see what time it was."
  },
  {
    "wordkey": "dial",
    "exp": "She was dialing her friend when he called."
  },
  {
    "wordkey": "dominant",
    "exp": "He was the dominant player in the whole team."
  },
  {
    "wordkey": "dominant",
    "exp": "Money was the dominant issue in the project."
  },
  {
    "wordkey": "entire",
    "exp": "He ate an entire turkey by himself."
  },
  {
    "wordkey": "entire",
    "exp": "The entire table was covered with books and papers."
  },
  {
    "wordkey": "mercy",
    "exp": "The warrior had mercy on them and let them leave."
  },
  {
    "wordkey": "mercy",
    "exp": "He asked the king to show mercy."
  },
  {
    "wordkey": "mercy",
    "exp": "She pleaded for mercy, but the cruel guy killed her."
  },
  {
    "wordkey": "mercy",
    "exp": "The poor man was at the mercy of savage tribe."
  },
  {
    "wordkey": "nod",
    "exp": "When he asked her, she nodded in agreement."
  },
  {
    "wordkey": "nod",
    "exp": "He nodded his head as he listened to music."
  },
  {
    "wordkey": "opponent",
    "exp": "His opponent beat him in the last game."
  },
  {
    "wordkey": "quarrel",
    "exp": "He quarreled with them over the matter."
  },
  {
    "wordkey": "quarrel",
    "exp": "They had a quarrel over the terms of the contract."
  },
  {
    "wordkey": "quarrel",
    "exp": "He had a quarrel with his friend after the incident."
  },
  {
    "wordkey": "quarrel",
    "exp": "Finally, they patched up their quarrel and became reconciled."
  },
  {
    "wordkey": "rival",
    "exp": "That company was their closest rival."
  },
  {
    "wordkey": "sore",
    "exp": "His back was sore after lifting those heavy boxes."
  },
  {
    "wordkey": "sore",
    "exp": "He had been staring at the screen for several hours, which made his eyes sore."
  },
  {
    "wordkey": "sting",
    "exp": "A jellyfish stung her foot and made her cry."
  },
  {
    "wordkey": "sting",
    "exp": "Their unkind remarks stung him, but he tried to remain calm."
  },
  {
    "wordkey": "strain",
    "exp": "He strained his knee at the gym."
  },
  {
    "wordkey": "strain",
    "exp": "The little boy strained to move the table."
  },
  {
    "wordkey": "strain",
    "exp": "He had been under a lot of strain because of all his problems."
  },
  {
    "wordkey": "strain",
    "exp": "Having to deal with all that work by himself put a strain on him."
  },
  {
    "wordkey": "torture",
    "exp": "Having to put up with their unkind behavior was torture."
  },
  {
    "wordkey": "torture",
    "exp": "Several people were tortured to death in a cellar."
  },
  {
    "wordkey": "wrestle",
    "exp": "They were wrestling in the middle of the school."
  },
  {
    "wordkey": "absence",
    "exp": "The absence of any approval discouraged him."
  },
  {
    "wordkey": "absence",
    "exp": "There was an absence of food during the famine."
  },
  {
    "wordkey": "aloud",
    "exp": "He asked him to read the message aloud."
  },
  {
    "wordkey": "bald",
    "exp": "Her grandfather was going bald."
  },
  {
    "wordkey": "blanket",
    "exp": "They sat on a blanket and ate supper in the park."
  },
  {
    "wordkey": "creep",
    "exp": "Two burglars were creeping around their backyard."
  },
  {
    "wordkey": "creep",
    "exp": "The traffic was creeping along the highway."
  },
  {
    "wordkey": "creep",
    "exp": "Rays of sunlight crept through the dense forest."
  },
  {
    "wordkey": "divorce",
    "exp": "Not long after they married, they got a divorce."
  },
  {
    "wordkey": "divorce",
    "exp": "It was an acrimonious divorce."
  },
  {
    "wordkey": "divorce",
    "exp": "Shortly after the affair, he divorced her."
  },
  {
    "wordkey": "imitate",
    "exp": "The kids were imitating animals."
  },
  {
    "wordkey": "imitate",
    "exp": "They imitated the way Chandler talked."
  },
  {
    "wordkey": "infant",
    "exp": "The newborn infant had a broad smile on his face."
  },
  {
    "wordkey": "kidnap",
    "exp": "He had been kidnapped for a while but managed to escape."
  },
  {
    "wordkey": "kidnap",
    "exp": "They kidnapped the prince and demanded a huge ransom."
  },
  {
    "wordkey": "nap",
    "exp": "He was so tired he took a nap at his office."
  },
  {
    "wordkey": "nap",
    "exp": "She napped for about 40 minutes and woke up by a loud noise."
  },
  {
    "wordkey": "nowhere",
    "exp": "Water could be found nowhere during the drought."
  },
  {
    "wordkey": "pat",
    "exp": "He gave his friend a pat on his shoulder."
  },
  {
    "wordkey": "pat",
    "exp": "She patted the puppy gently on the head."
  },
  {
    "wordkey": "relief",
    "exp": "He felt a sense of relief after the test was over."
  },
  {
    "wordkey": "relief",
    "exp": "The homeless man was seeking relief from the cold."
  },
  {
    "wordkey": "relief",
    "exp": "It was such a relief to find out she had passed the exam."
  },
  {
    "wordkey": "reproduce",
    "exp": "They wanted to reproduce the product."
  },
  {
    "wordkey": "rhyme",
    "exp": "He was trying to think of a rhyme for the last word."
  },
  {
    "wordkey": "rhyme",
    "exp": "The game was to find words that rhymed with the previous word."
  },
  {
    "wordkey": "suck",
    "exp": "The newborn infant was sucking his thumb."
  },
  {
    "wordkey": "suck",
    "exp": "She gave the baby a bottle of milk to suck."
  },
  {
    "wordkey": "urgent",
    "exp": "During the famine, hundreds of people were in urgent need for food."
  },
  {
    "wordkey": "urgent",
    "exp": "He left an urgent message on her answering machine."
  },
  {
    "wordkey": "vanish",
    "exp": "When they turned around, and the kid vanished."
  },
  {
    "wordkey": "vanish",
    "exp": "The deer gazed at them for a few seconds and then vanished into thin air."
  },
  {
    "wordkey": "wagon",
    "exp": "He hid in a wagon and passed the soldiers without being noticed."
  },
  {
    "wordkey": "wrinkle",
    "exp": "As people get older, wrinkles appear on their skin."
  },
  {
    "wordkey": "architecture",
    "exp": "The modern architecture of the building made it special."
  },
  {
    "wordkey": "basket",
    "exp": "The basket was full of apples."
  },
  {
    "wordkey": "bloom",
    "exp": "When the spring began, trees and plants started to bloom."
  },
  {
    "wordkey": "bloom",
    "exp": "His garden was in full bloom."
  },
  {
    "wordkey": "bloom",
    "exp": "Most plants had came into bloom."
  },
  {
    "wordkey": "canoe",
    "exp": "They paddled the canoe along the lake."
  },
  {
    "wordkey": "carpet",
    "exp": "He spilled the juice over the carpet and made a stain."
  },
  {
    "wordkey": "cousin",
    "exp": "She wanted to invite her distant cousins to her wedding."
  },
  {
    "wordkey": "desk",
    "exp": "He was working at his desk."
  },
  {
    "wordkey": "desk",
    "exp": "She put a note on his desk, informing him about the meeting."
  },
  {
    "wordkey": "gallery",
    "exp": "She exhibited her works at the art gallery."
  },
  {
    "wordkey": "gallery",
    "exp": "He went to an auto gallery to look around for a decent car."
  },
  {
    "wordkey": "guest",
    "exp": "Only twenty guests were invited to their wedding."
  },
  {
    "wordkey": "host",
    "exp": "The gracious host had planned everything for the guests."
  },
  {
    "wordkey": "host",
    "exp": "He hosted a popular sports program on TV."
  },
  {
    "wordkey": "host",
    "exp": "France will host the 2024 Olympics."
  },
  {
    "wordkey": "modern",
    "exp": "Their house was made using modern architecture."
  },
  {
    "wordkey": "modern",
    "exp": "He was in love with the modern technology."
  },
  {
    "wordkey": "museum",
    "exp": "They went to the art museum together."
  },
  {
    "wordkey": "museum",
    "exp": "There were fossils and dinosaur bones in the museum."
  },
  {
    "wordkey": "plane",
    "exp": "They asked the passengers to board the plane."
  },
  {
    "wordkey": "plane",
    "exp": "He traveled across the country by plane."
  },
  {
    "wordkey": "refrigerator",
    "exp": "He forgot to put the dairy in the refrigerator, and it spoiled."
  },
  {
    "wordkey": "temperature",
    "exp": "The temperature went below zero."
  },
  {
    "wordkey": "temperature",
    "exp": "The doctor took his temperature, discovering he was running a fever."
  },
  {
    "wordkey": "temperature",
    "exp": "She was having a temperature and had to call in sick."
  },
  {
    "wordkey": "theater",
    "exp": "Joey went to play a show in the theater."
  },
  {
    "wordkey": "upper",
    "exp": "He took the stairs to the upper floor."
  },
  {
    "wordkey": "welcome",
    "exp": "The hostess warmly welcomed the guests."
  },
  {
    "wordkey": "welcome",
    "exp": "Their warm hospitality made them feel welcome."
  },
  {
    "wordkey": "anticipate",
    "exp": "They anticipated arriving there half an hour sooner."
  },
  {
    "wordkey": "anticipate",
    "exp": "She was trying to anticipate what they would say."
  },
  {
    "wordkey": "barrel",
    "exp": "The pirates drank a whole barrel of rum."
  },
  {
    "wordkey": "beam",
    "exp": "The crane took the beam to the seventh floor of the structure."
  },
  {
    "wordkey": "beam",
    "exp": "Suddenly, a beam of light shone into their eyes."
  },
  {
    "wordkey": "casual",
    "exp": "He was wearing casual clothes to the event."
  },
  {
    "wordkey": "casual",
    "exp": "She had a casual attitude toward the activity."
  },
  {
    "wordkey": "caution",
    "exp": "They walked along the icy sidewalk with caution."
  },
  {
    "wordkey": "caution",
    "exp": "He proceeded with the project with great caution to avoid any potential mistakes."
  },
  {
    "wordkey": "caution",
    "exp": "She asked them to treat the baby with caution, as he was very delicate."
  },
  {
    "wordkey": "contrary",
    "exp": "I thought the show was dull; on the contrary, it turned out to be one of my favorites."
  },
  {
    "wordkey": "contrary",
    "exp": "They claimed he was guilty, but there was evidence to the contrary."
  },
  {
    "wordkey": "contrary",
    "exp": "His behavior ran contrary to what he was advocating for."
  },
  {
    "wordkey": "deliberate",
    "exp": "She made a deliberate mistake to see his reaction."
  },
  {
    "wordkey": "deliberate",
    "exp": "After a deliberate pause, he kept on talking about the matter."
  },
  {
    "wordkey": "dissolve",
    "exp": "He dissolved the pill in a glass of water and gave it to him."
  },
  {
    "wordkey": "dissolve",
    "exp": "She dissolved two spoonful of sugar in some warm milk."
  },
  {
    "wordkey": "explode",
    "exp": "The bomb exploded and made a mess."
  },
  {
    "wordkey": "explode",
    "exp": "He dropped the toy, and it exploded."
  },
  {
    "wordkey": "fasten",
    "exp": "He fastened the badge on his shirt."
  },
  {
    "wordkey": "fasten",
    "exp": "The flight attendant asked passengers to fasten their seatbelts."
  },
  {
    "wordkey": "germ",
    "exp": "The infection was caused by germs that entered the body through a cut."
  },
  {
    "wordkey": "kit",
    "exp": "He got the first-aid kit and bandaged her wound."
  },
  {
    "wordkey": "kit",
    "exp": "He asked her to get him a screw from the tool kit."
  },
  {
    "wordkey": "puff",
    "exp": "She blew a puff of smoke at his face."
  },
  {
    "wordkey": "puff",
    "exp": "A puff of dust rose when the water poured on the ground."
  },
  {
    "wordkey": "puff",
    "exp": "He sat on a chair, puffing on a cigarette."
  },
  {
    "wordkey": "rag",
    "exp": "She grabbed a rag and wiped the dust off the window."
  },
  {
    "wordkey": "scatter",
    "exp": "He knocked over the box and scattered the content around."
  },
  {
    "wordkey": "scatter",
    "exp": "When the police came, they all scattered."
  },
  {
    "wordkey": "scent",
    "exp": "The flowers had a lovely scent."
  },
  {
    "wordkey": "scent",
    "exp": "She loved the fresh scent of vegetables at the market."
  },
  {
    "wordkey": "steel",
    "exp": "The framework was made of steel."
  },
  {
    "wordkey": "swift",
    "exp": "She took a swift action and answered them back."
  },
  {
    "wordkey": "swift",
    "exp": "He made a swift recovery after the injury."
  },
  {
    "wordkey": "toss",
    "exp": "He looked through the pamphlet and tossed it into the trash can."
  },
  {
    "wordkey": "toss",
    "exp": "She tossed him a rag and told him to clean the table."
  },
  {
    "wordkey": "triumph",
    "exp": "Mastering English was a personal triumph for him."
  },
  {
    "wordkey": "triumph",
    "exp": "The competition ended in triumph for her."
  },
  {
    "wordkey": "triumph",
    "exp": "Their triumph over their rivals was celebrated with fireworks and music."
  },
  {
    "wordkey": "aboard",
    "exp": "They spent four days aboard a ship."
  },
  {
    "wordkey": "aboard",
    "exp": "They climbed aboard the canoe."
  },
  {
    "wordkey": "aboard",
    "exp": "The steward welcomed them aboard."
  },
  {
    "wordkey": "aboard",
    "exp": "The astronauts were aboard and ready for the expedition."
  },
  {
    "wordkey": "aboard",
    "exp": "He was stepping aboard when a wave moved the boat, causing him to fall into the lake."
  },
  {
    "wordkey": "bitter",
    "exp": "The coffee had a bitter taste."
  },
  {
    "wordkey": "bitter",
    "exp": "He was bitter when he lost his backpack."
  },
  {
    "wordkey": "bullet",
    "exp": "The bullet cut into his thigh."
  },
  {
    "wordkey": "devil",
    "exp": "The holy book mentioned the devil several times."
  },
  {
    "wordkey": "drift",
    "exp": "The plank drifted out by waves."
  },
  {
    "wordkey": "drift",
    "exp": "They neglected the boat, and it drifted out to sea, leaving them stranded on the island."
  },
  {
    "wordkey": "drift",
    "exp": "The leaves drifted away as the wind blew."
  },
  {
    "wordkey": "enforce",
    "exp": "The law was strictly enforced to combat crime."
  },
  {
    "wordkey": "fountain",
    "exp": "There was a beautiful fountain in the department."
  },
  {
    "wordkey": "harbor",
    "exp": "A few boats were in the harbor."
  },
  {
    "wordkey": "inhabit",
    "exp": "Only a few people inhabited the village."
  },
  {
    "wordkey": "inhabit",
    "exp": "The cave was inhabited by bats."
  },
  {
    "wordkey": "march",
    "exp": "The armed forces marched in rows."
  },
  {
    "wordkey": "march",
    "exp": "He marched into the room and slammed the door."
  },
  {
    "wordkey": "march",
    "exp": "The protesters organized a march to express their disapproval."
  },
  {
    "wordkey": "millionaire",
    "exp": "He became a millionaire when he sold an application to Microsoft."
  },
  {
    "wordkey": "port",
    "exp": "When the ferry arrived at the port, they unloaded the goods."
  },
  {
    "wordkey": "sheriff",
    "exp": "They made him the sheriff of the town."
  },
  {
    "wordkey": "sheriff",
    "exp": "As a newly elected sheriff, he vowed to reduce crime rates."
  },
  {
    "wordkey": "startle",
    "exp": "A loud noise startled him."
  },
  {
    "wordkey": "startle",
    "exp": "The article about the issue startled lots of people."
  },
  {
    "wordkey": "sweat",
    "exp": "She sweat with fear when she realized there was an intruder."
  },
  {
    "wordkey": "sweat",
    "exp": "He was sweating like a pig during the exercise."
  },
  {
    "wordkey": "sweat",
    "exp": "They were both covered in sweat, as they had been running for miles."
  },
  {
    "wordkey": "sweat",
    "exp": "He was dripping with sweat at the gym."
  },
  {
    "wordkey": "sweat",
    "exp": "You could see beads of sweat trickling down his head."
  },
  {
    "wordkey": "trigger",
    "exp": "He threatened them that he would pull the trigger if they took one more step."
  },
  {
    "wordkey": "trigger",
    "exp": "His unkind comment triggered a dispute between them."
  },
  {
    "wordkey": "unify",
    "exp": "They decided to unify and fight together for their survival."
  },
  {
    "wordkey": "vessel",
    "exp": "They went on a tour aboard a vessel."
  },
  {
    "wordkey": "voyage",
    "exp": "One of the astronauts was on his first voyage to the Moon."
  },
  {
    "wordkey": "voyage",
    "exp": "They voyaged to the North Pole for a scientific research."
  },
  {
    "wordkey": "worship",
    "exp": "They went to the chapel to worship God."
  },
  {
    "wordkey": "worship",
    "exp": "The happy couple worship each other."
  },
  {
    "wordkey": "apprentice",
    "exp": "He was an apprentice carpenter before setting up his own business."
  },
  {
    "wordkey": "assure",
    "exp": "They assured them of the quality of their service."
  },
  {
    "wordkey": "assure",
    "exp": "You can rest assured, as the project is being done by a group of elites."
  },
  {
    "wordkey": "bandage",
    "exp": "He wrapped a sterile bandage around his arm after washing the wound."
  },
  {
    "wordkey": "bleed",
    "exp": "After cutting herself, she used a plaster to stop bleeding."
  },
  {
    "wordkey": "bond",
    "exp": "After a while, they began to bond with each other."
  },
  {
    "wordkey": "bond",
    "exp": "The newcomer formed a close bond with one of his classmates."
  },
  {
    "wordkey": "chef",
    "exp": "Monica was the head chef at a restaurant."
  },
  {
    "wordkey": "departure",
    "exp": "They missed the last departure for California and had to wait until another day."
  },
  {
    "wordkey": "diligent",
    "exp": "He was very diligent about his work, which led him to climb his career ladder."
  },
  {
    "wordkey": "diligent",
    "exp": "She was diligent in working on the project, so she quickly got a promotion."
  },
  {
    "wordkey": "emperor",
    "exp": "The emperor wanted the two countries to bond."
  },
  {
    "wordkey": "fiber",
    "exp": "The rope was made of artificial fiber."
  },
  {
    "wordkey": "horrible",
    "exp": "There was a horrible smell coming from the pond."
  },
  {
    "wordkey": "horrible",
    "exp": "He said a horrible thing in the heat of the moment."
  },
  {
    "wordkey": "impolite",
    "exp": "He was impolite to his teacher."
  },
  {
    "wordkey": "kneel",
    "exp": "He kneeled down and asked her to marry him."
  },
  {
    "wordkey": "kneel",
    "exp": "The warrior knelt on one knee, and the king made him his own knight."
  },
  {
    "wordkey": "luxury",
    "exp": "They stayed at a luxury hotel during their vacation."
  },
  {
    "wordkey": "luxury",
    "exp": "He took her on a tour aboard a luxury vessel."
  },
  {
    "wordkey": "luxury",
    "exp": "Owning a yacht is a luxury that not many people can afford."
  },
  {
    "wordkey": "massive",
    "exp": "He bought a massive house downtown."
  },
  {
    "wordkey": "massive",
    "exp": "As he was driving, a massive truck passed by him."
  },
  {
    "wordkey": "panic",
    "exp": "He panicked over a minor incident."
  },
  {
    "wordkey": "priority",
    "exp": "Her top priority was to keep her children safe."
  },
  {
    "wordkey": "priority",
    "exp": "We need to get our priorities straight."
  },
  {
    "wordkey": "priority",
    "exp": "She gave priority to her studies and then looked for a job."
  },
  {
    "wordkey": "priority",
    "exp": "For the time being, building up his skills takes priority over having a job."
  },
  {
    "wordkey": "robe",
    "exp": "He was wearing a robe at his own party."
  },
  {
    "wordkey": "robe",
    "exp": "She came out of the bathroom and put on a robe."
  },
  {
    "wordkey": "scold",
    "exp": "He scolded him for stepping on his foot."
  },
  {
    "wordkey": "affair",
    "exp": "She kept interfering in their affairs."
  },
  {
    "wordkey": "affair",
    "exp": "His extramarital affair spread through the town, blackening his name."
  },
  {
    "wordkey": "affair",
    "exp": "She had a secret affair with one of his colleagues."
  },
  {
    "wordkey": "assembly",
    "exp": "They have an assembly every so often to talk about the future of the firm."
  },
  {
    "wordkey": "assembly",
    "exp": "The assembly convened to discuss the proposed idea."
  },
  {
    "wordkey": "bless",
    "exp": "They gathered in the church to ask God to bless them."
  },
  {
    "wordkey": "cereal",
    "exp": "He had cereal for breakfast and went to work."
  },
  {
    "wordkey": "cheerful",
    "exp": "She was in such a cheerful mood that morning."
  },
  {
    "wordkey": "diameter",
    "exp": "The sphere was about one meter in diameter."
  },
  {
    "wordkey": "diameter",
    "exp": "The plumber measured the diameter of the pipe so he could cut a piece that would fit."
  },
  {
    "wordkey": "exploit",
    "exp": "They went on strike because the company had been exploiting its workers."
  },
  {
    "wordkey": "exploit",
    "exp": "He was trying to exploit his skills in coding to land a well-paid job."
  },
  {
    "wordkey": "exploit",
    "exp": "There will be irreparable damage if we keep exploiting natural resources like this."
  },
  {
    "wordkey": "famine",
    "exp": "The town council decided to ration the food during the famine."
  },
  {
    "wordkey": "famine",
    "exp": "Several people died of such widespread famine."
  },
  {
    "wordkey": "harvest",
    "exp": "They had a large field of potatoes that was ready for harvest."
  },
  {
    "wordkey": "harvest",
    "exp": "An angel blessed the farmer, and he had a bumper harvest that year."
  },
  {
    "wordkey": "nut",
    "exp": "He bought a pack of nuts to eat as a snack in the theater."
  },
  {
    "wordkey": "pardon",
    "exp": "Pardon me for jumping in your sentence, but who was that guy you said?"
  },
  {
    "wordkey": "pharaoh",
    "exp": "The pharaoh ordered building several barracks."
  },
  {
    "wordkey": "ripe",
    "exp": "The fruits were ripe and ready to be eaten."
  },
  {
    "wordkey": "ripe",
    "exp": "There was a ripe smell in the abandoned house."
  },
  {
    "wordkey": "roast",
    "exp": "Monica roasted a turkey for Thanksgiving."
  },
  {
    "wordkey": "routine",
    "exp": "He had a set routine at work."
  },
  {
    "wordkey": "routine",
    "exp": "Her morning routine consisted of making breakfast for children and doing the laundry."
  },
  {
    "wordkey": "scheme",
    "exp": "They had a housing scheme for the whole area."
  },
  {
    "wordkey": "scheme",
    "exp": "He came up with a new scheme for recycling."
  },
  {
    "wordkey": "scheme",
    "exp": "Under the new scheme, employees receive bonuses based on their performance."
  },
  {
    "wordkey": "slim",
    "exp": "She was pretty and slim."
  },
  {
    "wordkey": "slim",
    "exp": "Since two of their best players were injured, they only had a slim chance of winning."
  },
  {
    "wordkey": "stove",
    "exp": "They bought a stove and put it in the kitchen next to the refrigerator."
  },
  {
    "wordkey": "theft",
    "exp": "There had been several thefts in the area."
  },
  {
    "wordkey": "theft",
    "exp": "He knew the theft of his money must have occurred at the office."
  },
  {
    "wordkey": "adolescent",
    "exp": "There were a bunch of adolescents playing around the corner."
  },
  {
    "wordkey": "aptitude",
    "exp": "He had no aptitude for sports whatsoever."
  },
  {
    "wordkey": "compliment",
    "exp": "She complimented him on his aptitude for math."
  },
  {
    "wordkey": "compliment",
    "exp": "He paid her a compliment on the meal."
  },
  {
    "wordkey": "compliment",
    "exp": "Monica was fishing for compliments at the restaurant."
  },
  {
    "wordkey": "hinder",
    "exp": "His injured knee hindered him from getting there in time."
  },
  {
    "wordkey": "hinder",
    "exp": "Not knowing English will hinder people in several fields."
  },
  {
    "wordkey": "journalism",
    "exp": "She wanted to work in journalism, as she always liked reading and doing research."
  },
  {
    "wordkey": "jury",
    "exp": "It was a complicated case, and the jury found it difficult to reach a verdict."
  },
  {
    "wordkey": "jury",
    "exp": "Jay was allowed to serve on a jury during a trial."
  },
  {
    "wordkey": "justice",
    "exp": "The poor man was seeking justice."
  },
  {
    "wordkey": "justice",
    "exp": "Justice had not been done, and people were all angry about it."
  },
  {
    "wordkey": "justice",
    "exp": "He was sent to jail because of a miscarriage of justice."
  },
  {
    "wordkey": "justice",
    "exp": "In the end, they were brought to justice and had to serve several years in jail."
  },
  {
    "wordkey": "liberty",
    "exp": "Finally, they were given their liberty."
  },
  {
    "wordkey": "liberty",
    "exp": "The Statue of Liberty is a symbol of freedom."
  },
  {
    "wordkey": "pharmacy",
    "exp": "A pharmacy was nearby, so they went to get some medicine for the sick man."
  },
  {
    "wordkey": "pill",
    "exp": "The doctor prescribed him some pills and syrup."
  },
  {
    "wordkey": "pill",
    "exp": "Her doctor told her to take a pill every eight hours."
  },
  {
    "wordkey": "presume",
    "exp": "His document was presumed accurate after testing it."
  },
  {
    "wordkey": "privacy",
    "exp": "He would love to have his own apartment so that he can have some privacy."
  },
  {
    "wordkey": "punishment",
    "exp": "Some people think that harsher punishments can deter some crimes."
  },
  {
    "wordkey": "punishment",
    "exp": "He was given a punishment for not being on time."
  },
  {
    "wordkey": "punishment",
    "exp": "The head principal meted out punishment to those who were caught cheating during the exam."
  },
  {
    "wordkey": "sensible",
    "exp": "Moving to a place within walking distance to his workplace was a sensible thing to do."
  },
  {
    "wordkey": "slice",
    "exp": "She gave a slice of cake to each of them."
  },
  {
    "wordkey": "sorrow",
    "exp": "He expressed deep sorrow over his death."
  },
  {
    "wordkey": "sorrow",
    "exp": "She felt sorrow at her best friend moving away."
  },
  {
    "wordkey": "straw",
    "exp": "She grabbed a straw to drink juice."
  },
  {
    "wordkey": "straw",
    "exp": "He took a bale of straw to feed the cows in the barn."
  },
  {
    "wordkey": "swell",
    "exp": "She got pregnant, and her stomach began to swell."
  },
  {
    "wordkey": "swell",
    "exp": "There was such heavy rain, causing the river to swell."
  },
  {
    "wordkey": "swell",
    "exp": "The number of visitors had swellen since a famous actor was going to play with them."
  },
  {
    "wordkey": "tidy",
    "exp": "Monica was a very tidy person."
  },
  {
    "wordkey": "tidy",
    "exp": "Her apartment was always neat and tidy."
  },
  {
    "wordkey": "affection",
    "exp": "She had a deep affection for her children."
  },
  {
    "wordkey": "affection",
    "exp": "He was feeling affection for his hometown."
  },
  {
    "wordkey": "agency",
    "exp": "They were looking for a real estate agency to find a proper house."
  },
  {
    "wordkey": "agency",
    "exp": "He began feeling affection for the stray dog."
  },
  {
    "wordkey": "ash",
    "exp": "The ashes of his cigar fell on his jacket and made a small stain on it."
  },
  {
    "wordkey": "confine",
    "exp": "They confined the conversation to the issue."
  },
  {
    "wordkey": "confine",
    "exp": "She hated the idea of being confined, so she released the bird."
  },
  {
    "wordkey": "confine",
    "exp": "He decided to confine most of his time to learning stuff."
  },
  {
    "wordkey": "confine",
    "exp": "The prisoners were confined in a cage for several months."
  },
  {
    "wordkey": "dismiss",
    "exp": "She dismissed him as a stupid person."
  },
  {
    "wordkey": "dismiss",
    "exp": "We ought to take everything into account before dismissing the idea."
  },
  {
    "wordkey": "dismiss",
    "exp": "At the end of the trial, the judge dismissed the allegation against him."
  },
  {
    "wordkey": "dismiss",
    "exp": "After he abused his position, he was dismissed from the post."
  },
  {
    "wordkey": "erupt",
    "exp": "Tensions between the two nations erupted into a bitter conflict."
  },
  {
    "wordkey": "erupt",
    "exp": "The concert erupted in applause at the end of their performance."
  },
  {
    "wordkey": "fate",
    "exp": "The fortune teller looked at her palm and told her what her fate would be."
  },
  {
    "wordkey": "fate",
    "exp": "He met her again by a twist of fate."
  },
  {
    "wordkey": "lava",
    "exp": "The entire area was covered with lava after the volcano erupted."
  },
  {
    "wordkey": "miserable",
    "exp": "He was miserable when his father passed on."
  },
  {
    "wordkey": "miserable",
    "exp": "His last work was a miserable failure."
  },
  {
    "wordkey": "navigate",
    "exp": "The captain successfully navigated the ship through reefs."
  },
  {
    "wordkey": "navigate",
    "exp": "They used star signs to navigate the path."
  },
  {
    "wordkey": "navigate",
    "exp": "He lost the map and found it hard to navigate the group."
  },
  {
    "wordkey": "originate",
    "exp": "The idea had originated in ancient Greece."
  },
  {
    "wordkey": "originate",
    "exp": "The application originated with him but was developed by a company."
  },
  {
    "wordkey": "originate",
    "exp": "The tradition of giving gifts originate from ancient customs."
  },
  {
    "wordkey": "originate",
    "exp": "The rumor originated as a joke, but spread rapidly as a fact."
  },
  {
    "wordkey": "remainder",
    "exp": "They ate dinner and gave the remainder of it to the dogs."
  },
  {
    "wordkey": "remainder",
    "exp": "The first part of the journey was difficult, but the remainder was very enjoyable."
  },
  {
    "wordkey": "retrieve",
    "exp": "The company hired a computer guy to retrieve some information."
  },
  {
    "wordkey": "shallow",
    "exp": "The river was shallow but fast-moving."
  },
  {
    "wordkey": "shallow",
    "exp": "He showed how shallow he is by his ridiculous comment."
  },
  {
    "wordkey": "slope",
    "exp": "The roof of the building had a gentle slope of about 20 degrees."
  },
  {
    "wordkey": "slope",
    "exp": "The slope to the top of the hill was a little steep."
  },
  {
    "wordkey": "span",
    "exp": "His work in the closet company spanned over thirty years."
  },
  {
    "wordkey": "span",
    "exp": "The Rocky Mountain spans for miles."
  },
  {
    "wordkey": "span",
    "exp": "He had a short concentration span."
  },
  {
    "wordkey": "span",
    "exp": "The Greenland shark has a lifespan of around 400 years."
  },
  {
    "wordkey": "span",
    "exp": "His business boomed over a span of four years."
  },
  {
    "wordkey": "superstition",
    "exp": "He had a superstition that if his pants fell off his hands, bad things would happen to him."
  },
  {
    "wordkey": "sympathy",
    "exp": "She had sympathy for her friend and tried to console her."
  },
  {
    "wordkey": "sympathy",
    "exp": "The community gathered to offer their sympathy to those affected by the disaster."
  },
  {
    "wordkey": "vibrate",
    "exp": "The car vibrated as a huge truck passed by."
  },
  {
    "wordkey": "vibrate",
    "exp": "His voice started to vibrate with fury."
  },
  {
    "wordkey": "wander",
    "exp": "They were wandering around the park."
  },
  {
    "wordkey": "wander",
    "exp": "As he was wandering the streets, he thought of an idea."
  },
  {
    "wordkey": "armor",
    "exp": "They wore suits of armor and got ready for the battle."
  },
  {
    "wordkey": "blaze",
    "exp": "He put some logs into the fire and made it blaze into a bigger one."
  },
  {
    "wordkey": "blaze",
    "exp": "A blaze tore through the forest, leaving a path of destruction in its wake."
  },
  {
    "wordkey": "boom",
    "exp": "A gun boomed out and made crows fly away."
  },
  {
    "wordkey": "boom",
    "exp": "Their business boomed shortly after the new scheme."
  },
  {
    "wordkey": "boom",
    "exp": "A sudden boom of the thunder startled everyone."
  },
  {
    "wordkey": "boom",
    "exp": "They experienced a significant boom in the latter part of the year."
  },
  {
    "wordkey": "cliff",
    "exp": "They stood on the cliff looking at the horizon."
  },
  {
    "wordkey": "flame",
    "exp": "The flame on the candle flickered as someone opened the door."
  },
  {
    "wordkey": "flame",
    "exp": "Their campfire started as a small flame but soon grew into a roaring blaze."
  },
  {
    "wordkey": "flame",
    "exp": "The faulty wiring caused the appliance to burst into flame."
  },
  {
    "wordkey": "flame",
    "exp": "She threw a damp cloth on the fire to smother the flames."
  },
  {
    "wordkey": "flame",
    "exp": "He grabbed a bucket of water and hurried to douse the flames before they licked other stuff."
  },
  {
    "wordkey": "independence",
    "exp": "He wanted to have more independence."
  },
  {
    "wordkey": "independence",
    "exp": "Eventually, they gained independence from the control of the empire."
  },
  {
    "wordkey": "invasion",
    "exp": "The Great Wall was built to protect them from invasions."
  },
  {
    "wordkey": "invasion",
    "exp": "They mounted an invasion at midnight."
  },
  {
    "wordkey": "knight",
    "exp": "He was the best warrior in the kingdom, so the king made him his own knight."
  },
  {
    "wordkey": "lightning",
    "exp": "Suddenly, lightning flashed in the sky, indicating that it was about to rain."
  },
  {
    "wordkey": "lightning",
    "exp": "Bolts of lightning were brightening the area one after another."
  },
  {
    "wordkey": "lightning",
    "exp": "The barn was struck by lightning during the storm."
  },
  {
    "wordkey": "rebel",
    "exp": "Rebel troops entered and occupied the area."
  },
  {
    "wordkey": "rebel",
    "exp": "As more police forces came, rebels retreated to the jungle."
  },
  {
    "wordkey": "retreat",
    "exp": "They struggled to retreat from the zone."
  },
  {
    "wordkey": "retreat",
    "exp": "He went to ask her out, but he retreated once he saw her coming."
  },
  {
    "wordkey": "retreat",
    "exp": "After a month of rapid increases, the prices began to retreat."
  },
  {
    "wordkey": "revolution",
    "exp": "Political groups brought about a social revolution."
  },
  {
    "wordkey": "revolution",
    "exp": "The world is heading toward a big revolution by new technologies and artificial intelligence."
  },
  {
    "wordkey": "spear",
    "exp": "The warrior had nothing but a spear."
  },
  {
    "wordkey": "steep",
    "exp": "They were riding their bikes on a steep slope."
  },
  {
    "wordkey": "steep",
    "exp": "It was a very steep climb to the summit of the mountain."
  },
  {
    "wordkey": "steep",
    "exp": "There was a steep rise in the price of Bitcoin."
  },
  {
    "wordkey": "summit",
    "exp": "They strived to reach the summit."
  },
  {
    "wordkey": "summit",
    "exp": "The world leaders held a summit to discuss worldwide problems."
  },
  {
    "wordkey": "thunder",
    "exp": "He woke up by a crack of thunder."
  },
  {
    "wordkey": "thunder",
    "exp": "Suddenly, a rumble of thunder caused a few car alarms to go off."
  },
  {
    "wordkey": "troop",
    "exp": "They retreated as more ground troops entered the area."
  },
  {
    "wordkey": "troop",
    "exp": "Troops were deployed in the area and were waiting for orders."
  },
  {
    "wordkey": "warrior",
    "exp": "The warrior was trying to protect his king."
  },
  {
    "wordkey": "withdraw",
    "exp": "The troop commander ordered them to withdraw from the zone."
  },
  {
    "wordkey": "withdraw",
    "exp": "He was looking for an ATM to withdraw some cash."
  },
  {
    "wordkey": "withdraw",
    "exp": "She withdrew from the competition due to an injury."
  },
  {
    "wordkey": "withdraw",
    "exp": "When they found out what had happened, they withdrew their accusation and apologized to him."
  },
  {
    "wordkey": "yield",
    "exp": "They were surrounded and had to yield power."
  },
  {
    "wordkey": "yield",
    "exp": "They had to yield to their demands."
  },
  {
    "wordkey": "yield",
    "exp": "Despite his vehement disagreement, he eventually yielded to the pressure from his colleagues."
  },
  {
    "wordkey": "yield",
    "exp": "Thanks to his help, their farm yielded bumper crops that year."
  },
  {
    "wordkey": "bench",
    "exp": "They sat on a bench and talked about their weekend."
  },
  {
    "wordkey": "dispute",
    "exp": "They had a dispute about where to go for vacation."
  },
  {
    "wordkey": "dispute",
    "exp": "They got into a dispute over wages."
  },
  {
    "wordkey": "dispute",
    "exp": "The two farmers had been in dispute with each other over the boundaries."
  },
  {
    "wordkey": "dispute",
    "exp": "He was trying to help them settle their dispute."
  },
  {
    "wordkey": "empty",
    "exp": "The glass was half empty and half full."
  },
  {
    "wordkey": "empty",
    "exp": "She made an empty promise about the matter."
  },
  {
    "wordkey": "empty",
    "exp": "His warning was just an empty threat to scare them."
  },
  {
    "wordkey": "empty",
    "exp": "Despite his wealth, he felt empty."
  },
  {
    "wordkey": "horror",
    "exp": "He was filled with horror when his car crashed into a tree."
  },
  {
    "wordkey": "horror",
    "exp": "She screamed in horror when she saw the incident."
  },
  {
    "wordkey": "horror",
    "exp": "The veteran spoke about the horrors of war."
  },
  {
    "wordkey": "incident",
    "exp": "There was an unfortunate incident at the mall when someone slipped and became unconscious."
  },
  {
    "wordkey": "incident",
    "exp": "A minor incident occurred at the office when the kitchen caught fire, but they managed to put it out."
  },
  {
    "wordkey": "mist",
    "exp": "At the mountain summit, the whole area was shrouded in mist."
  },
  {
    "wordkey": "mist",
    "exp": "There were patches of mist on the street."
  },
  {
    "wordkey": "object",
    "exp": "They found a precious object in the jungle."
  },
  {
    "wordkey": "object",
    "exp": "The basket was filled with objects."
  },
  {
    "wordkey": "orphan",
    "exp": "She adopted an orphan and nourished him."
  },
  {
    "wordkey": "plot",
    "exp": "The plots of the movie were unexpected."
  },
  {
    "wordkey": "plot",
    "exp": "They were plotting against their own brother."
  },
  {
    "wordkey": "plot",
    "exp": "The children plotted to play a trick on him."
  },
  {
    "wordkey": "pregnant",
    "exp": "She became pregnant, and her stomach began to swell."
  },
  {
    "wordkey": "pregnant",
    "exp": "He got her pregnant before they got married."
  },
  {
    "wordkey": "rage",
    "exp": "She flew into a fit of rage for a minor mistake."
  },
  {
    "wordkey": "rage",
    "exp": "Their pub became a rage in the village, known for its lively atmosphere."
  },
  {
    "wordkey": "rage",
    "exp": "His manager raged at him for missing such a valuable client."
  },
  {
    "wordkey": "rage",
    "exp": "It was at midnight when the battle raged."
  },
  {
    "wordkey": "rage",
    "exp": "The argument raged after only a few minutes."
  },
  {
    "wordkey": "revenge",
    "exp": "They wanted to take revenge on them for killing their father."
  },
  {
    "wordkey": "revenge",
    "exp": "He did some damage to some of their property as revenge."
  },
  {
    "wordkey": "shame",
    "exp": "He felt shame for abusing their generosity."
  },
  {
    "wordkey": "shame",
    "exp": "She had no shame and kept behaving like that."
  },
  {
    "wordkey": "shame",
    "exp": "It would be a shame to waste our precious time on trifles."
  },
  {
    "wordkey": "shame",
    "exp": "His biased remarks brought shame on him."
  },
  {
    "wordkey": "sigh",
    "exp": "He sighed deeply and sat at his desk."
  },
  {
    "wordkey": "sigh",
    "exp": "When they found out he was ok, they both gave a sigh of relief."
  },
  {
    "wordkey": "sneak",
    "exp": "The burglar snuck in through the back door."
  },
  {
    "wordkey": "sneak",
    "exp": "She snuck up on him and gave him a pat on his shoulder."
  },
  {
    "wordkey": "spare",
    "exp": "They spared a tire to the guy who was stuck on the highway."
  },
  {
    "wordkey": "spare",
    "exp": "She asked if he could spare her some money."
  },
  {
    "wordkey": "spare",
    "exp": "She showed them the spare room where they could rest."
  },
  {
    "wordkey": "spare",
    "exp": "They played games in their spare time."
  },
  {
    "wordkey": "stem",
    "exp": "The flower had a thorny stem."
  },
  {
    "wordkey": "stem",
    "exp": "He turned the stem of his watch to adjust the time."
  },
  {
    "wordkey": "supper",
    "exp": "He invited them to come over for supper."
  },
  {
    "wordkey": "tender",
    "exp": "The steak was tender and tasty."
  },
  {
    "wordkey": "tender",
    "exp": "While bathing, he avoided brushing against the tender spot."
  },
  {
    "wordkey": "tender",
    "exp": "He gave the kid a tender smile."
  },
  {
    "wordkey": "beneath",
    "exp": "The bottle went beneath the water."
  },
  {
    "wordkey": "beneath",
    "exp": "He hid the letter beneath the book."
  },
  {
    "wordkey": "cub",
    "exp": "There was a fox cub in the jungle looking for its mother."
  },
  {
    "wordkey": "dawn",
    "exp": "They had to wake up at dawn and go to the airport."
  },
  {
    "wordkey": "dawn",
    "exp": "By the time dawn was breaking, he was already awake."
  },
  {
    "wordkey": "dawn",
    "exp": "The invention of the internet marked the dawn of the digital age."
  },
  {
    "wordkey": "dissatisfied",
    "exp": "He was dissatisfied with the service."
  },
  {
    "wordkey": "ease",
    "exp": "She was a fast runner and won the race with ease."
  },
  {
    "wordkey": "ease",
    "exp": "The doctor gave him tranquilizer to ease his pain."
  },
  {
    "wordkey": "ease",
    "exp": "They made two more classrooms to ease the problem of overcrowding."
  },
  {
    "wordkey": "evident",
    "exp": "It was evident that he was dissatisfied with the meal."
  },
  {
    "wordkey": "evident",
    "exp": "His love for her became evident to everyone."
  },
  {
    "wordkey": "hail",
    "exp": "Hail was falling on the roof of the car."
  },
  {
    "wordkey": "hail",
    "exp": "Since he was late for the session, he hailed a taxi instead of walking."
  },
  {
    "wordkey": "howl",
    "exp": "At night, we could hear wolves howling."
  },
  {
    "wordkey": "leap",
    "exp": "They had to leap to reach the other side of the bridge."
  },
  {
    "wordkey": "leap",
    "exp": "When he woke up, he leaped out of bed and happily got ready for the day."
  },
  {
    "wordkey": "magnificent",
    "exp": "The landscape was magnificent."
  },
  {
    "wordkey": "magnificent",
    "exp": "He got his girlfriend a magnificent necklace."
  },
  {
    "wordkey": "necessity",
    "exp": "Tomatoes and potatoes were necessities for making that dish."
  },
  {
    "wordkey": "necessity",
    "exp": "The article dealt with the necessity of getting enough sleep."
  },
  {
    "wordkey": "outcome",
    "exp": "The outcome of the project was satisfactory."
  },
  {
    "wordkey": "outcome",
    "exp": "They tried to predict the outcome of the experiment."
  },
  {
    "wordkey": "pile",
    "exp": "There was a pile of dirty clothes in his room."
  },
  {
    "wordkey": "profound",
    "exp": "She raised a profound question during the meeting."
  },
  {
    "wordkey": "profound",
    "exp": "His book had a profound plot that moved dozens of people."
  },
  {
    "wordkey": "profound",
    "exp": "His speech gave the audience a profound sense of hope and inspiration."
  },
  {
    "wordkey": "seize",
    "exp": "She was scared and seized his arm."
  },
  {
    "wordkey": "seize",
    "exp": "The rebel troops managed to seize control of the area."
  },
  {
    "wordkey": "squeeze",
    "exp": "She squeezed the baby to her face."
  },
  {
    "wordkey": "squeeze",
    "exp": "Not even a little paste came out, no matter how hard he squeezed."
  },
  {
    "wordkey": "supreme",
    "exp": "The supreme player got another score for his team."
  },
  {
    "wordkey": "supreme",
    "exp": "He had a trial in the supreme court of law."
  },
  {
    "wordkey": "terrific",
    "exp": "She looked terrific in that elegant dress."
  },
  {
    "wordkey": "terrific",
    "exp": "The detonation caused a terrific noise that could be heard miles away."
  },
  {
    "wordkey": "terrific",
    "exp": "There was a terrific amount of rain, flooding the entire area."
  },
  {
    "wordkey": "trait",
    "exp": "His sense of duty is one of his best traits."
  },
  {
    "wordkey": "trait",
    "exp": "Arrogance was her worst personality trait."
  },
  {
    "wordkey": "vital",
    "exp": "Knowing English is vital for those who want to work in the computer field."
  },
  {
    "wordkey": "vital",
    "exp": "Exercise is vital to anyone who wants to get into shape."
  },
  {
    "wordkey": "attack",
    "exp": "The enemy troops had been attacking them for a while."
  },
  {
    "wordkey": "attack",
    "exp": "He attacked his proposal for being based on prejudice."
  },
  {
    "wordkey": "breast",
    "exp": "She spilled some juice on her breast."
  },
  {
    "wordkey": "breast",
    "exp": "The baby was sucking milk out of her breast."
  },
  {
    "wordkey": "cancer",
    "exp": "Smoking cigarettes can cause to develop cancer."
  },
  {
    "wordkey": "cancer",
    "exp": "He was diagnosed with lung cancer."
  },
  {
    "wordkey": "cancerous",
    "exp": "They found a cancerous tumor in his abdominal region."
  },
  {
    "wordkey": "cell",
    "exp": "Red blood cells carry oxygen, while white blood cells protect the body from infection."
  },
  {
    "wordkey": "cigarette",
    "exp": "She lit a cigarette and thought about the issue."
  },
  {
    "wordkey": "cigarette",
    "exp": "He offered him to have a cigarette."
  },
  {
    "wordkey": "code",
    "exp": "He sent his colleague a message in code."
  },
  {
    "wordkey": "code",
    "exp": "They had been trying to decipher the code."
  },
  {
    "wordkey": "code",
    "exp": "He finally managed to crack the code protecting the system."
  },
  {
    "wordkey": "cure",
    "exp": "He found a cure for the disease."
  },
  {
    "wordkey": "cure",
    "exp": "They proposed building a new bridge to cure traffic in the area."
  },
  {
    "wordkey": "cure",
    "exp": "She managed to cure his illness using herbal medicine."
  },
  {
    "wordkey": "cure",
    "exp": "They found a cure for the conflict between their tribes."
  },
  {
    "wordkey": "destruction",
    "exp": "The hurricane left a trail of destruction in the region."
  },
  {
    "wordkey": "destruction",
    "exp": "They were concerned about the environmental destruction."
  },
  {
    "wordkey": "destruction",
    "exp": "The wanton destruction occured at midnight by vandals."
  },
  {
    "wordkey": "destruction",
    "exp": "Habitat destruction made a lot of animals vanish from the area."
  },
  {
    "wordkey": "DNA",
    "exp": "They used DNA fingerprints to solve the crime."
  },
  {
    "wordkey": "extensive",
    "exp": "They had a big house with extensive ground in their yard."
  },
  {
    "wordkey": "extensive",
    "exp": "Their affair drew extensive media coverage."
  },
  {
    "wordkey": "extensive",
    "exp": "His computer knowledge was extensive."
  },
  {
    "wordkey": "female",
    "exp": "She was the first female athlete who set a world record."
  },
  {
    "wordkey": "female",
    "exp": "Womb is a body organ in females where children are conceived."
  },
  {
    "wordkey": "male",
    "exp": "The male lion took charge of the pride."
  },
  {
    "wordkey": "male",
    "exp": "He was the only male in the class."
  },
  {
    "wordkey": "furthermore",
    "exp": "She got good grades. Furthermore, she was one of the best athletes in her school."
  },
  {
    "wordkey": "gene",
    "exp": "Some diseases are caused by defective genes."
  },
  {
    "wordkey": "inherit",
    "exp": "He inherited a terrific amount of money after his father passed away."
  },
  {
    "wordkey": "inherit",
    "exp": "Some children inherit faulty genes from their parents."
  },
  {
    "wordkey": "link",
    "exp": "The firm had strong links with several good lawyers."
  },
  {
    "wordkey": "link",
    "exp": "He linked the rise in temperature to the climate change."
  },
  {
    "wordkey": "population",
    "exp": "The population is growing steadily."
  },
  {
    "wordkey": "population",
    "exp": "About twenty percent of the population is living in poverty."
  },
  {
    "wordkey": "result",
    "exp": "The end result of his hard work was a good life."
  },
  {
    "wordkey": "result",
    "exp": "Her broken arm was the direct result of her own negligence."
  },
  {
    "wordkey": "result",
    "exp": "As a result of his dedication and hard work, he managed to land his dream job."
  },
  {
    "wordkey": "result",
    "exp": "His reckless driving resulted in a terrible accident."
  },
  {
    "wordkey": "sugar",
    "exp": "He put some sugar in his coffee."
  },
  {
    "wordkey": "accommodate",
    "exp": "The building can accommodate two hundred people."
  },
  {
    "wordkey": "circus",
    "exp": "They took the kids to a circus."
  },
  {
    "wordkey": "coincide",
    "exp": "They planned their vacation to coincide with his."
  },
  {
    "wordkey": "commission",
    "exp": "They commissioned a team of engineers to design the structure of the project."
  },
  {
    "wordkey": "commission",
    "exp": "He was commissioned to make his portrait."
  },
  {
    "wordkey": "commission",
    "exp": "They get commissions on the products they sell."
  },
  {
    "wordkey": "dose",
    "exp": "That much of the drug would be a lethal dose."
  },
  {
    "wordkey": "dose",
    "exp": "They gave the injured man a dose of tranquilizer."
  },
  {
    "wordkey": "dose",
    "exp": "The medicine label stated not to exceed the recommended dose."
  },
  {
    "wordkey": "dye",
    "exp": "She dyed her hair at a beauty salon."
  },
  {
    "wordkey": "extent",
    "exp": "The extent of the disease was still unknown."
  },
  {
    "wordkey": "extent",
    "exp": "They were impressed by the extent of his English knowledge."
  },
  {
    "wordkey": "extent",
    "exp": "The field was about 10 acres in extent."
  },
  {
    "wordkey": "extent",
    "exp": "We are responsible, to some extent, for not being successful."
  },
  {
    "wordkey": "extent",
    "exp": "The documentation highlighted the extent to which climate change can impact our lives."
  },
  {
    "wordkey": "gender",
    "exp": "The firm conducted a review to identify and eliminate gender bias in hiring employees."
  },
  {
    "wordkey": "headline",
    "exp": "The headline on the front page of several newspapers was about the price of oil."
  },
  {
    "wordkey": "headline",
    "exp": "The scandal made headlines quickly."
  },
  {
    "wordkey": "headline",
    "exp": "Their affairs hit the headlines in no time."
  },
  {
    "wordkey": "informal",
    "exp": "They held an informal meeting to discuss the issue."
  },
  {
    "wordkey": "informal",
    "exp": "The atmosphere in the office is informal."
  },
  {
    "wordkey": "inquire",
    "exp": "He called to inquire about the price of the tickets."
  },
  {
    "wordkey": "inquire",
    "exp": "They went to the mechanic to inquire when the car would be ready."
  },
  {
    "wordkey": "messenger",
    "exp": "The document was delivered to them by a messenger."
  },
  {
    "wordkey": "peer",
    "exp": "She was peering through the window blinds."
  },
  {
    "wordkey": "peer",
    "exp": "He peered into the distance, trying to find out what it was."
  },
  {
    "wordkey": "peer",
    "exp": "She conferred with her peers at the office before making the final decision."
  },
  {
    "wordkey": "peer",
    "exp": "He became an esteemed scientist and was respected by his peers."
  },
  {
    "wordkey": "peer",
    "exp": "Peer pressure is a great influence on people, especially teenagers."
  },
  {
    "wordkey": "portrait",
    "exp": "They gave the mayor a portrait as a gift."
  },
  {
    "wordkey": "pose",
    "exp": "They posed for a group photo."
  },
  {
    "wordkey": "pose",
    "exp": "Climate change poses a big threat to our future."
  },
  {
    "wordkey": "ranch",
    "exp": "He inherited a cattle ranch from his father."
  },
  {
    "wordkey": "ranch",
    "exp": "They had a horse stable on the ranch."
  },
  {
    "wordkey": "steer",
    "exp": "He barely steered the car around the pothole."
  },
  {
    "wordkey": "stripe",
    "exp": "Some flags have stripes on them."
  },
  {
    "wordkey": "stripe",
    "exp": "They say clothes with horizontal stripes create the illusion of being slimmer."
  },
  {
    "wordkey": "tame",
    "exp": "The tame cat sat close to them and started purring as he was petting it."
  },
  {
    "wordkey": "tempt",
    "exp": "He was tempted into buying a new car."
  },
  {
    "wordkey": "tempt",
    "exp": "She tempted him with an ice cream."
  },
  {
    "wordkey": "ban",
    "exp": "Smoking is banned in this area."
  },
  {
    "wordkey": "ban",
    "exp": "They banned him from playing for a week."
  },
  {
    "wordkey": "ban",
    "exp": "The council imposed a ban on smoking in the area."
  },
  {
    "wordkey": "cautious",
    "exp": "You should be cautious about signing any contract before understanding its terms and conditions."
  },
  {
    "wordkey": "confess",
    "exp": "She confessed that she had exchanged the gift for something else."
  },
  {
    "wordkey": "confess",
    "exp": "He had to confess to sleeping through the lecture."
  },
  {
    "wordkey": "cottage",
    "exp": "The farmer had a small cottage in the field."
  },
  {
    "wordkey": "cottage",
    "exp": "He was living in a thatched cottage in the mountains."
  },
  {
    "wordkey": "daytime",
    "exp": "The kids played in the daytime."
  },
  {
    "wordkey": "desperate",
    "exp": "She made a desperate attempt to make a decent meal."
  },
  {
    "wordkey": "desperate",
    "exp": "He was desperate to get a job."
  },
  {
    "wordkey": "desperate",
    "exp": "They were in desperate need of help."
  },
  {
    "wordkey": "desperate",
    "exp": "There was a desperate shortage of food during the famine."
  },
  {
    "wordkey": "exhausting",
    "exp": "The activity was exhausting and made them all tired."
  },
  {
    "wordkey": "fade",
    "exp": "She left the clothes out for a long time, and they began to fade."
  },
  {
    "wordkey": "fade",
    "exp": "Their hope was beginning to fade."
  },
  {
    "wordkey": "fierce",
    "exp": "Some animals can be fierce when disturbed."
  },
  {
    "wordkey": "fierce",
    "exp": "Several soldiers got injured during fierce fighting."
  },
  {
    "wordkey": "fierce",
    "exp": "Fierce wind made their journey even harder."
  },
  {
    "wordkey": "fierce",
    "exp": "He faced fierce competition in the tournament."
  },
  {
    "wordkey": "fierce",
    "exp": "Their proposal came up against fierce opposition during the meeting."
  },
  {
    "wordkey": "gamble",
    "exp": "He lost a lot of money while gambling."
  },
  {
    "wordkey": "gamble",
    "exp": "Putting all the money in his new business was a huge gamble, but it paid off."
  },
  {
    "wordkey": "lawn",
    "exp": "We should mow the lawn every so often."
  },
  {
    "wordkey": "outlaw",
    "exp": "He was an outlaw who helped the poor."
  },
  {
    "wordkey": "prospect",
    "exp": "Is there any prospect of him getting better?"
  },
  {
    "wordkey": "purse",
    "exp": "The robber grabbed her purse and ran away."
  },
  {
    "wordkey": "rod",
    "exp": "He bought a fishing rod to go fishing on the weekend."
  },
  {
    "wordkey": "seldom",
    "exp": "She was busy working on the project and seldom took time off."
  },
  {
    "wordkey": "seldom",
    "exp": "It seldom rains in deserts."
  },
  {
    "wordkey": "shave",
    "exp": "He put some foam on his face before shaving."
  },
  {
    "wordkey": "terrified",
    "exp": "She was terrified of the storm."
  },
  {
    "wordkey": "terrified",
    "exp": "He was terrified that they would find out about his little secret."
  },
  {
    "wordkey": "wizard",
    "exp": "The wizard made fire come out of his hand."
  },
  {
    "wordkey": "abroad",
    "exp": "He went on a business trip abroad."
  },
  {
    "wordkey": "abroad",
    "exp": "The company is trying to expand its business abroad to reach global market."
  },
  {
    "wordkey": "airline",
    "exp": "The airline offers in-flight entertainment."
  },
  {
    "wordkey": "audience",
    "exp": "The audience clapped after his virtuoso performance."
  },
  {
    "wordkey": "bargain",
    "exp": "He got some ornaments at bargain prices."
  },
  {
    "wordkey": "bargain",
    "exp": "She was a bargain hunter and was looking for a good one."
  },
  {
    "wordkey": "brief",
    "exp": "He paid a brief visit to his friend and then dashed to the office."
  },
  {
    "wordkey": "brief",
    "exp": "She gave a brief statement about the incident to the police."
  },
  {
    "wordkey": "brief",
    "exp": "They sat on a bench and had a brief chat."
  },
  {
    "wordkey": "currency",
    "exp": "The currency in the USA is the dollar."
  },
  {
    "wordkey": "data",
    "exp": "He made a copy of the data into a memory stick."
  },
  {
    "wordkey": "data",
    "exp": "A satellite is a device sent into outer space to collect data."
  },
  {
    "wordkey": "domestic",
    "exp": "The airline has about ten domestic flights every day."
  },
  {
    "wordkey": "domestic",
    "exp": "The senator was trying to address domestic affairs and improve living conditions."
  },
  {
    "wordkey": "domestic",
    "exp": "They had some domestic animals on their ranch."
  },
  {
    "wordkey": "draft",
    "exp": "He made the first draft of the story."
  },
  {
    "wordkey": "draft",
    "exp": "It was only a rough draft and needed to be revised."
  },
  {
    "wordkey": "gather",
    "exp": "They gathered to talk about the issue."
  },
  {
    "wordkey": "gather",
    "exp": "They gathered money together and bought him a present."
  },
  {
    "wordkey": "hobby",
    "exp": "His hobby was drawing pictures."
  },
  {
    "wordkey": "hobby",
    "exp": "My hobby includes watching movies, listening to music, and reading fiction."
  },
  {
    "wordkey": "income",
    "exp": "Most people earn low incomes."
  },
  {
    "wordkey": "income",
    "exp": "She saved from her income each month for a rainy day."
  },
  {
    "wordkey": "jet",
    "exp": "He was so rich that he had his own private jet."
  },
  {
    "wordkey": "maximum",
    "exp": "The temperature reached its maximum of 90 degrees."
  },
  {
    "wordkey": "maximum",
    "exp": "He used his maximum strength to move the big box."
  },
  {
    "wordkey": "official",
    "exp": "She needed official permission before moving on with the project."
  },
  {
    "wordkey": "recommend",
    "exp": "He recommended them to have dinner at that restaurant."
  },
  {
    "wordkey": "recommend",
    "exp": "I recommend learning a few words every day."
  },
  {
    "wordkey": "recommend",
    "exp": "She recommended that we go there in our spare time."
  },
  {
    "wordkey": "recommend",
    "exp": "The area had much to recommend."
  },
  {
    "wordkey": "refer",
    "exp": "The teacher refered to the page."
  },
  {
    "wordkey": "refer",
    "exp": "She referred to her ring to show her friend that she was getting married."
  },
  {
    "wordkey": "refer",
    "exp": "If you have any question, refer to the web page for further information."
  },
  {
    "wordkey": "refer",
    "exp": "His doctor referred him to a specialist for advanced treatment."
  },
  {
    "wordkey": "remote",
    "exp": "They moved to a remote village."
  },
  {
    "wordkey": "remote",
    "exp": "He got a remote job in the programming field."
  },
  {
    "wordkey": "sleepless",
    "exp": "She had a sleepless night because of her worry about the upcoming exam."
  },
  {
    "wordkey": "volume",
    "exp": "The volume of traffic was increasing."
  },
  {
    "wordkey": "volume",
    "exp": "He turned down the volume of the music."
  },
  {
    "wordkey": "circulate",
    "exp": "She switched on the fan to circulate cool air."
  },
  {
    "wordkey": "circulate",
    "exp": "He circulated the application form for them to sign."
  },
  {
    "wordkey": "circulate",
    "exp": "The rumor circulated rapidly in the school."
  },
  {
    "wordkey": "consequent",
    "exp": "The consequent accident was due to the icy road."
  },
  {
    "wordkey": "derive",
    "exp": "We can derive benefit from learning English."
  },
  {
    "wordkey": "derive",
    "exp": "They derived pleasure from the activity."
  },
  {
    "wordkey": "derive",
    "exp": "His nickname was derived from the way he used to talk."
  },
  {
    "wordkey": "derive",
    "exp": "She said the medicine was derived from a rare plant."
  },
  {
    "wordkey": "dynasty",
    "exp": "Their dynasty ruled for about three centuries."
  },
  {
    "wordkey": "fraction",
    "exp": "There was only a tiny fraction of the cake left."
  },
  {
    "wordkey": "frost",
    "exp": "The sidewalk was covered with frost."
  },
  {
    "wordkey": "frost",
    "exp": "There was frost on the window."
  },
  {
    "wordkey": "illusion",
    "exp": "She wore a striped dress to create the illusion of being slimmer."
  },
  {
    "wordkey": "illusion",
    "exp": "They had a backup plan, as they had no illusion about the possibility of failure."
  },
  {
    "wordkey": "invade",
    "exp": "The enemy was planning how to invade their territory."
  },
  {
    "wordkey": "lieutenant",
    "exp": "The lieutenant sent two soldiers to investigate the area."
  },
  {
    "wordkey": "marine",
    "exp": "We should be more careful not to harm marine life."
  },
  {
    "wordkey": "merit",
    "exp": "The captain received an award for his merits."
  },
  {
    "wordkey": "merit",
    "exp": "The great merit of his work is its moving story behind it."
  },
  {
    "wordkey": "navy",
    "exp": "He was an officer in the Navy."
  },
  {
    "wordkey": "polar",
    "exp": "They went to Antarctica and saw some polar bears."
  },
  {
    "wordkey": "polar",
    "exp": "He moved to the polar region for a few months to conduct scientific research."
  },
  {
    "wordkey": "ray",
    "exp": "A ray of light fell on his face as the sun began to rise."
  },
  {
    "wordkey": "resign",
    "exp": "She resigned from her position and got a better job."
  },
  {
    "wordkey": "suicide",
    "exp": "He was about to commit suicide, but someone discouraged him."
  },
  {
    "wordkey": "suicide",
    "exp": "She attempted suicide twice, both in vain."
  },
  {
    "wordkey": "tremble",
    "exp": "They were stranded in the southern polar region, trembling most of the time."
  },
  {
    "wordkey": "tremble",
    "exp": "She trembled with fear when she heard someone enter the house."
  },
  {
    "wordkey": "tremble",
    "exp": "He was so angry that his voice began to tremble."
  },
  {
    "wordkey": "underlying",
    "exp": "The underlying reason for the accident was a broken tube."
  },
  {
    "wordkey": "underlying",
    "exp": "The inspector was looking for the underlying cause."
  },
  {
    "wordkey": "via",
    "exp": "He messaged his friend via Gmail."
  },
  {
    "wordkey": "via",
    "exp": "They said their page is accessible via the Internet."
  },
  {
    "wordkey": "alter",
    "exp": "They had to alter the plan due to the weather."
  },
  {
    "wordkey": "alter",
    "exp": "He altered the color of his bike."
  },
  {
    "wordkey": "aside",
    "exp": "She put her phone aside and grabbed her book."
  },
  {
    "wordkey": "aside",
    "exp": "They set some money aside each month for a car."
  },
  {
    "wordkey": "aside",
    "exp": "They took him aside and told him their plan."
  },
  {
    "wordkey": "aside",
    "exp": "The host stood aside and let the guests enter."
  },
  {
    "wordkey": "aside",
    "exp": "She pulled the curtain aside to let in some light."
  },
  {
    "wordkey": "autumn",
    "exp": "Autumn is the most pleasant season to go there."
  },
  {
    "wordkey": "autumn",
    "exp": "In autumn, leaves usually turn yellow and start to fall."
  },
  {
    "wordkey": "blend",
    "exp": "He blended some milk and bananas using a blender."
  },
  {
    "wordkey": "blend",
    "exp": "She blended the ingredients to make a tasty dish."
  },
  {
    "wordkey": "blend",
    "exp": "The party had a blend of hip-hop and classic music."
  },
  {
    "wordkey": "collapse",
    "exp": "An apartment collapsed due to a detonation."
  },
  {
    "wordkey": "collapse",
    "exp": "When the three of them went on the table, it collapsed under their weight."
  },
  {
    "wordkey": "crush",
    "exp": "The empty box was crushed when he fell on it."
  },
  {
    "wordkey": "crush",
    "exp": "His arm was crushed in an incident."
  },
  {
    "wordkey": "crush",
    "exp": "She added some crushed garlic to the ingredients."
  },
  {
    "wordkey": "curve",
    "exp": "The path curved to the right and led them to a village."
  },
  {
    "wordkey": "curve",
    "exp": "This road has a sharp curve ahead, so drive carefully."
  },
  {
    "wordkey": "curve",
    "exp": "The learning curve for mastering English is not so steep."
  },
  {
    "wordkey": "disgusting",
    "exp": "He had to wait in a disgusting room for a while."
  },
  {
    "wordkey": "disgusting",
    "exp": "The smell of his odor was disgusting."
  },
  {
    "wordkey": "disgusting",
    "exp": "Their behavior was disgusting, making it difficult to tolerate."
  },
  {
    "wordkey": "drain",
    "exp": "The drain in the kitchen was clogged up."
  },
  {
    "wordkey": "drain",
    "exp": "The coin almost fell into a drain near the sidewalk."
  },
  {
    "wordkey": "embrace",
    "exp": "They embraced their grandchildren."
  },
  {
    "wordkey": "embrace",
    "exp": "She embraced her friend and said goodbye for now."
  },
  {
    "wordkey": "embrace",
    "exp": "He embraced the idea and started working toward it."
  },
  {
    "wordkey": "embrace",
    "exp": "If you want to grow and prosper, you must embrace the pain."
  },
  {
    "wordkey": "envy",
    "exp": "She envied them because they had money to buy ice cream."
  },
  {
    "wordkey": "envy",
    "exp": "He envied his ability to speak a foreign language."
  },
  {
    "wordkey": "jealous",
    "exp": "They were jealous of his ability to type so fast."
  },
  {
    "wordkey": "jealous",
    "exp": "She was jealous of her diamond ring."
  },
  {
    "wordkey": "jealous",
    "exp": "He felt jealous when he saw her talking to him like that."
  },
  {
    "wordkey": "firework",
    "exp": "The display of fireworks was lively and colorful."
  },
  {
    "wordkey": "firework",
    "exp": "After the speech, he set off fireworks."
  },
  {
    "wordkey": "firework",
    "exp": "His remarks sparked off fireworks."
  },
  {
    "wordkey": "flour",
    "exp": "He blended flour with eggs and sugar to make a cake."
  },
  {
    "wordkey": "fuse",
    "exp": "They lit the fuse and ran away."
  },
  {
    "wordkey": "ginger",
    "exp": "He added some ground ginger to the juice."
  },
  {
    "wordkey": "paste",
    "exp": "The carpenter used some paste to hold the pieces together."
  },
  {
    "wordkey": "paste",
    "exp": "He put some paste on the wall to put up the wallpaper."
  },
  {
    "wordkey": "wipe",
    "exp": "She wiped the dust off the window."
  },
  {
    "wordkey": "wipe",
    "exp": "He wiped his nose on his shirt."
  },
  {
    "wordkey": "wire",
    "exp": "Someone had cut the wires to stop electricity from going to the building."
  },
  {
    "wordkey": "wire",
    "exp": "He was wearing a wire to secretly record their conversation."
  },
  {
    "wordkey": "acknowledge",
    "exp": "She acknowledged that the kids behaved well."
  },
  {
    "wordkey": "acknowledge",
    "exp": "He was acknowledged to be the most experienced one among them in that field."
  },
  {
    "wordkey": "acknowledge",
    "exp": "They acknowledged him as a genius in the computer field."
  },
  {
    "wordkey": "acknowledge",
    "exp": "The teacher acknowledged having made a mistake."
  },
  {
    "wordkey": "ambassador",
    "exp": "The ambassador went to attend the meeting."
  },
  {
    "wordkey": "ambassador",
    "exp": "He was appointed as the new ambassador to the US."
  },
  {
    "wordkey": "blonde",
    "exp": "She was tall and blonde."
  },
  {
    "wordkey": "conquer",
    "exp": "The enemy was trying to conquer the capital."
  },
  {
    "wordkey": "conquer",
    "exp": "They conquered their tribe in one massive attack."
  },
  {
    "wordkey": "drag",
    "exp": "The waste bag tore when he dragged it."
  },
  {
    "wordkey": "drag",
    "exp": "He made a small boat and dragged it to the water."
  },
  {
    "wordkey": "exaggerate",
    "exp": "She was exaggerating the accident."
  },
  {
    "wordkey": "exaggerate",
    "exp": "They exaggerated the quality of their product."
  },
  {
    "wordkey": "heritage",
    "exp": "He wanted to know more about his heritage."
  },
  {
    "wordkey": "heritage",
    "exp": "We ought to preserve our cultural heritage to maintain our identity and history."
  },
  {
    "wordkey": "insult",
    "exp": "They insulted each other by scolding."
  },
  {
    "wordkey": "insult",
    "exp": "She insulted his work and skills."
  },
  {
    "wordkey": "insult",
    "exp": "He made an insult about the work quality."
  },
  {
    "wordkey": "insult",
    "exp": "His joke was meant to be funny, but it came across as an insult to him."
  },
  {
    "wordkey": "meanwhile",
    "exp": "He was reading his textbook. Meanwhile, he was listening to background music."
  },
  {
    "wordkey": "necklace",
    "exp": "Alan wanted to buy his fiancee a pearl necklace."
  },
  {
    "wordkey": "noble",
    "exp": "The queen wanted to have dinner with a noble."
  },
  {
    "wordkey": "noble",
    "exp": "The castle was a belonging of a noble family for decades."
  },
  {
    "wordkey": "precious",
    "exp": "They found some precious stones in the mine."
  },
  {
    "wordkey": "precious",
    "exp": "The ring was so precious that they all were looking for it."
  },
  {
    "wordkey": "precious",
    "exp": "English was so precious to him that he devoted most of his time to learning it."
  },
  {
    "wordkey": "prejudice",
    "exp": "Finally, they enforced a law about racial prejudice."
  },
  {
    "wordkey": "prejudice",
    "exp": "They tried to dispel the prejudice that they had to be separated."
  },
  {
    "wordkey": "rumor",
    "exp": "He circulated a rumor that they were having an affair."
  },
  {
    "wordkey": "rumor",
    "exp": "Rumor has it that he will be the new director after the current director is retired."
  },
  {
    "wordkey": "sin",
    "exp": "He confessed his sin in the trial."
  },
  {
    "wordkey": "sin",
    "exp": "She committed a sin by stealing from their house."
  },
  {
    "wordkey": "spectacle",
    "exp": "The landscape was quite a spectacle."
  },
  {
    "wordkey": "spectacle",
    "exp": "It was a spectacle to see such a young kid do math with ease."
  },
  {
    "wordkey": "stack",
    "exp": "There was a stack of books on his desk."
  },
  {
    "wordkey": "stack",
    "exp": "He stacked the boxes in the rear of a truck."
  },
  {
    "wordkey": "stack",
    "exp": "The workers started stacking up the crates in the warehouse."
  },
  {
    "wordkey": "suspicious",
    "exp": "They were highly suspicious of him."
  },
  {
    "wordkey": "suspicious",
    "exp": "Notwithstanding his suspicious nature, he let him do that for him."
  },
  {
    "wordkey": "tin",
    "exp": "Some foods are being sold in tin cans."
  },
  {
    "wordkey": "vase",
    "exp": "He knocked over a vase and it shattered."
  },
  {
    "wordkey": "vase",
    "exp": "She gently set the vase on the ledge near the window."
  },
  {
    "wordkey": "ache",
    "exp": "He lifted some heavy boxes, and now his back aches."
  },
  {
    "wordkey": "ache",
    "exp": "She has a dull ache in her arm."
  },
  {
    "wordkey": "arctic",
    "exp": "On the trip, arctic air made them tremble."
  },
  {
    "wordkey": "arctic",
    "exp": "November brought arctic conditions."
  },
  {
    "wordkey": "canal",
    "exp": "They passed through the canal aboard a canoe."
  },
  {
    "wordkey": "canal",
    "exp": "There are a lot of canals in Japan."
  },
  {
    "wordkey": "chemist",
    "exp": "He was a chemist who created some effective drugs."
  },
  {
    "wordkey": "chill",
    "exp": "There was a slight chill this morning."
  },
  {
    "wordkey": "chill",
    "exp": "The chill from the wind made him shiver."
  },
  {
    "wordkey": "chill",
    "exp": "She put the beverage in the fridge to chill."
  },
  {
    "wordkey": "congress",
    "exp": "Congress has introduced some new laws."
  },
  {
    "wordkey": "dairy",
    "exp": "We must keep dairy products in the refrigerator."
  },
  {
    "wordkey": "dairy",
    "exp": "He bought some dairy foods from the market."
  },
  {
    "wordkey": "descend",
    "exp": "The path descended to an underground cave."
  },
  {
    "wordkey": "descend",
    "exp": "She descended the stairs and went to the lounge."
  },
  {
    "wordkey": "grocer",
    "exp": "The grocer was a nice person and gave the poor man a discount."
  },
  {
    "wordkey": "hesitate",
    "exp": "When they asked him that question, he hesitated for a few seconds before answering."
  },
  {
    "wordkey": "institution",
    "exp": "She went to an educational institution to learn some technical skills."
  },
  {
    "wordkey": "jog",
    "exp": "He goes jogging every morning to stay healthy."
  },
  {
    "wordkey": "merchant",
    "exp": "His cousin is a merchant who trades wheat and rice."
  },
  {
    "wordkey": "poke",
    "exp": "Some kids were poking sticks into the soil."
  },
  {
    "wordkey": "poke",
    "exp": "She accidentally poked him in his neck."
  },
  {
    "wordkey": "postpone",
    "exp": "They had to postpone the meeting until he arrived."
  },
  {
    "wordkey": "splash",
    "exp": "He stepped into a pothole and splashed water on him."
  },
  {
    "wordkey": "splash",
    "exp": "The brush fell into the bucket and splashed water onto the carpet."
  },
  {
    "wordkey": "splash",
    "exp": "The sudden splash startled the cat."
  },
  {
    "wordkey": "stubborn",
    "exp": "Since they were both stubborn, they never gave in to each other."
  },
  {
    "wordkey": "stubborn",
    "exp": "He gave up talking once he realized how stubborn she was."
  },
  {
    "wordkey": "suburb",
    "exp": "She got an apartment in the suburb."
  },
  {
    "wordkey": "tide",
    "exp": "The tide was coming in, so they moved to a higher place."
  },
  {
    "wordkey": "tragedy",
    "exp": "The lightning struck the barn while he was in it; it was a tragedy."
  },
  {
    "wordkey": "tragedy",
    "exp": "The invasion led to the tragedy of an all-out war."
  },
  {
    "wordkey": "bomb",
    "exp": "The enemy planes dropped bombs in the war zone."
  },
  {
    "wordkey": "bomb",
    "exp": "When the bomb went off, it destroyed everything in the area."
  },
  {
    "wordkey": "bomb",
    "exp": "They planted a bomb near the cave to make a bigger hole in it."
  },
  {
    "wordkey": "certificate",
    "exp": "The receptionist required their birth certificates."
  },
  {
    "wordkey": "certificate",
    "exp": "They gave the students certificates for completing the course."
  },
  {
    "wordkey": "circumstance",
    "exp": "Everyone should attend the meeting under any circumstances."
  },
  {
    "wordkey": "circumstance",
    "exp": "Under no circumstances should we stop learning English."
  },
  {
    "wordkey": "circumstance",
    "exp": "His death occurred under suspicious circumstances."
  },
  {
    "wordkey": "coffin",
    "exp": "They put his dead body in a coffin."
  },
  {
    "wordkey": "cope",
    "exp": "She successfully coped with the situation."
  },
  {
    "wordkey": "criticism",
    "exp": "They made some harsh criticism about his work."
  },
  {
    "wordkey": "criticism",
    "exp": "His last work attracted widespread criticism."
  },
  {
    "wordkey": "criticism",
    "exp": "She came in for criticism about the dish."
  },
  {
    "wordkey": "criticism",
    "exp": "After listening to them, she dismissed the criticism."
  },
  {
    "wordkey": "criticism",
    "exp": "He countered their criticism and said it was unfounded."
  },
  {
    "wordkey": "criticism",
    "exp": "The judges loved their performance, but they also gave them constructive criticism."
  },
  {
    "wordkey": "devastate",
    "exp": "The entire area was devastated by an atomic bomb."
  },
  {
    "wordkey": "devastate",
    "exp": "The death of his fiancee devastated him."
  },
  {
    "wordkey": "frown",
    "exp": "Joey frowned when she refused to make jam."
  },
  {
    "wordkey": "frown",
    "exp": "She frowned at her son when he threw a tantrum."
  },
  {
    "wordkey": "frown",
    "exp": "His frown deepened when he saw his exam results."
  },
  {
    "wordkey": "gaze",
    "exp": "They went to the desert and gazed at the stars."
  },
  {
    "wordkey": "gaze",
    "exp": "He gazed out the window as she left."
  },
  {
    "wordkey": "gaze",
    "exp": "He looked at her with a steady gaze."
  },
  {
    "wordkey": "glance",
    "exp": "He glanced through the paper as if he was looking for something."
  },
  {
    "wordkey": "glance",
    "exp": "She glanced around the salon, trying to find her friend."
  },
  {
    "wordkey": "glance",
    "exp": "She took a glance at the pamphlet when an idea came to her."
  },
  {
    "wordkey": "glance",
    "exp": "Sherlock knew at a glance that something was fishy."
  },
  {
    "wordkey": "glance",
    "exp": "He fell in love with her at first glance."
  },
  {
    "wordkey": "grief",
    "exp": "They were overcome with grief after he died."
  },
  {
    "wordkey": "groom",
    "exp": "The groom was left at the altar."
  },
  {
    "wordkey": "groom",
    "exp": "The bride and groom went on honeymoon together."
  },
  {
    "wordkey": "groom",
    "exp": "He was grooming his horse at the stable."
  },
  {
    "wordkey": "microscope",
    "exp": "The scientist looked at the blood sample under a microscope."
  },
  {
    "wordkey": "nuclear",
    "exp": "There were some nuclear power plants."
  },
  {
    "wordkey": "portray",
    "exp": "The painting portrayed a young man looking at the sky."
  },
  {
    "wordkey": "portray",
    "exp": "The writer portrayed the World War very well."
  },
  {
    "wordkey": "portray",
    "exp": "They portrayed him as an arrogant person."
  },
  {
    "wordkey": "rotate",
    "exp": "The cat was rotating, trying to catch something attached to its tail."
  },
  {
    "wordkey": "rotate",
    "exp": "When he switched on the fan, it started to rotate and circulate cool air."
  },
  {
    "wordkey": "souvenir",
    "exp": "Joey asked them to give their souvenir and get out."
  },
  {
    "wordkey": "souvenir",
    "exp": "He bought some souvenirs for his family on the trip."
  },
  {
    "wordkey": "submarine",
    "exp": "They were in a submarine for about a whole week."
  },
  {
    "wordkey": "submarine",
    "exp": "No one could see the submarine as it moved beneath the water line."
  },
  {
    "wordkey": "trace",
    "exp": "She traced a wavy line on the sand."
  },
  {
    "wordkey": "trace",
    "exp": "He traced over the line with his eyes."
  },
  {
    "wordkey": "trace",
    "exp": "They traced the outbreak of the disease to a contaminated water supply."
  },
  {
    "wordkey": "trace",
    "exp": "The detective traced the suspicious call back to a small town in the countryside."
  },
  {
    "wordkey": "deter",
    "exp": "The law was enforced to deter illigal acts."
  },
  {
    "wordkey": "deter",
    "exp": "Astronomical prices deter people from buying houses."
  },
  {
    "wordkey": "deter",
    "exp": "The committee introduced laws to deter drivers from driving faster than the speed limit."
  },
  {
    "wordkey": "devise",
    "exp": "He devised a brilliant plan to supply power with less expense."
  },
  {
    "wordkey": "devise",
    "exp": "She devised a funny game to keep the kids engaged."
  },
  {
    "wordkey": "distance",
    "exp": "He wanted to know the distance between America and China."
  },
  {
    "wordkey": "distance",
    "exp": "Do you know the distance from America to China?"
  },
  {
    "wordkey": "distance",
    "exp": "They moved downtown so they could live within walking distance of his workplace."
  },
  {
    "wordkey": "expertise",
    "exp": "Monica had expertise in making gourmet meals."
  },
  {
    "wordkey": "expertise",
    "exp": "He was praised for the expertise with which he invented the machine."
  },
  {
    "wordkey": "fracture",
    "exp": "There was a fracture in the skull they found."
  },
  {
    "wordkey": "fracture",
    "exp": "Two of his ribs fractured in an unfortunate incident."
  },
  {
    "wordkey": "headache",
    "exp": "He had a splitting headache after the party."
  },
  {
    "wordkey": "implement",
    "exp": "The firm decided to implement a new policy."
  },
  {
    "wordkey": "implement",
    "exp": "They implemented a change to increase production."
  },
  {
    "wordkey": "implement",
    "exp": "His toolbox was filled with various implements."
  },
  {
    "wordkey": "insight",
    "exp": "The movie gave her a new insight into her problems."
  },
  {
    "wordkey": "insight",
    "exp": "The book provided new insights into learning foreign languages."
  },
  {
    "wordkey": "limb",
    "exp": "The bird made a nest on a tree limb."
  },
  {
    "wordkey": "might",
    "exp": "He lifted the table with all his might."
  },
  {
    "wordkey": "optimism",
    "exp": "I have optimism about our future."
  },
  {
    "wordkey": "optimism",
    "exp": "Despite difficulties, he maintained a sense of optimism and worked toward his goals."
  },
  {
    "wordkey": "proficient",
    "exp": "I want to be proficient in English and Mandarin."
  },
  {
    "wordkey": "proficient",
    "exp": "It takes several years to become proficient at this job."
  },
  {
    "wordkey": "raft",
    "exp": "He made a simple raft out of wood planks."
  },
  {
    "wordkey": "raft",
    "exp": "They went rafting together."
  },
  {
    "wordkey": "ridge",
    "exp": "They carefully walked along the mountain ridge."
  },
  {
    "wordkey": "shoulder",
    "exp": "They carried the beam on their shoulders."
  },
  {
    "wordkey": "shoulder",
    "exp": "She slept on his shoulder."
  },
  {
    "wordkey": "shove",
    "exp": "He shoved the crowd to get closer to him."
  },
  {
    "wordkey": "shove",
    "exp": "Suddenly, the door opened, and a group of people shoved him out of the way."
  },
  {
    "wordkey": "spouse",
    "exp": "He bought two tickets to the concert to go with his spouse."
  },
  {
    "wordkey": "thrust",
    "exp": "She went into his office and thrust the papers at him."
  },
  {
    "wordkey": "tolerate",
    "exp": "He found it hard to tolerate heavy traffic."
  }
]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

<script setup lang="ts">
import { showToast } from 'vant';
import { ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import Tabbar from '@/components/Tabbar/index.vue'

const router = useRouter();
const active = ref(0);
const state = reactive({
  firstCate: [
    {
      "title": "热门推荐",
      "paneKey": "2093"
    },
    {
      "title": "食品",
      "paneKey": "2094"
    },
    {
      "title": "电器",
      "paneKey": "2095"
    },
    {
      "title": "洗护",
      "paneKey": "2096"
    },
    {
      "title": "女装",
      "paneKey": "2097"
    },
    {
      "title": "手机",
      "paneKey": "2098"
    },
    {
      "title": "健康",
      "paneKey": "2099"
    },
    {
      "title": "男装",
      "paneKey": "2100"
    },
    {
      "title": "美妆",
      "paneKey": "2101"
    },
    {
      "title": "电脑",
      "paneKey": "2102"
    },
    {
      "title": "运动",
      "paneKey": "2103"
    },
    {
      "title": "内衣",
      "paneKey": "2104"
    },
    {
      "title": "母婴",
      "paneKey": "2105"
    },
    {
      "title": "数码",
      "paneKey": "2106"
    },
    {
      "title": "百货",
      "paneKey": "2107"
    },
    {
      "title": "鞋包",
      "paneKey": "2108"
    },
    {
      "title": "办公",
      "paneKey": "2109"
    },
    {
      "title": "家装",
      "paneKey": "2110"
    },
    {
      "title": "饰品",
      "paneKey": "2111"
    },
    {
      "title": "车品",
      "paneKey": "2112"
    },
    {
      "title": "图书",
      "paneKey": "2113"
    },
    {
      "title": "生鲜",
      "paneKey": "2114"
    },
    {
      "title": "家纺",
      "paneKey": "2115"
    },
    {
      "title": "宠物",
      "paneKey": "2116"
    },
    {
      "title": "奢品",
      "paneKey": "2117"
    }
  ],
  secondCate: {
    "areaId": "2094",
    "cateType": "1",
    "areaName": "食品",
    "labelEndTime": "2025-05-17 00:00:00",
    "patternEndTime": "2025-05-17 00:00:00",
    "patternStartTime": "2023-05-17 00:00:00",
    "paneKey": "2094",
    "level1words": [
      {
        "level2words": [
          {
            "keywordId": "0901776672",
            "catId": "cid3",
            "keyword": "糖果",
            "url": "/goods/list?key=糖果",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/215072/20/30644/9019/646da7a1F63613a8c/a5b2428860e14917.jpg"
          },
          {
            "keywordId": "0901776673",
            "catId": "cid3",
            "keyword": "辣条豆干",
            "url": "/goods/list?key=辣条豆干",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/100342/15/41391/10528/646dad13F717b6cd9/a301d60c251994d8.jpg"
          },
          {
            "keywordId": "0901776674",
            "catId": "cid3",
            "keyword": "零食大礼包",
            "url": "/goods/list?key=零食大礼包",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/124135/17/31878/12612/64647e4aF3c9a994c/3ad53a09368ed16f.png"
          },
          {
            "keywordId": "0901776675",
            "catId": "cid3",
            "keyword": "巧克力",
            "url": "/goods/list?key=巧克力",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/114477/21/36707/8373/646da8d6Facec2806/fd8d1f9c0bb1bc5a.jpg"
          },
          {
            "keywordId": "0901776676",
            "catId": "cid3",
            "keyword": "海味零食",
            "url": "/goods/list?key=海味零食",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/163882/11/37490/6621/6465e34dF9347b277/62f8a1462d39513a.jpg"
          },
          {
            "keywordId": "0901776677",
            "catId": "cid3",
            "keyword": "凤爪卤味",
            "url": "/goods/list?key=卤味",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/180440/40/30976/11445/6386f8fdEd5f4573d/c997bf23155480e7.png"
          },
          {
            "keywordId": "0901776678",
            "catId": "cid3",
            "keyword": "果冻布丁",
            "url": "/goods/list?key=果冻布丁",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/113605/35/30715/9589/6386f8fdE96e0a1a5/0ec1901933d934d3.png"
          },
          {
            "keywordId": "0901776679",
            "catId": "cid3",
            "keyword": "低卡零食",
            "url": "/goods/list?key=低卡零食",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/51031/14/17648/10793/6386f8fcEa5576b6f/19f261d5e5e7074b.png"
          },
          {
            "keywordId": "0901776680",
            "catId": "cid3",
            "keyword": "进口零食",
            "url": "/goods/list?key=进口零食",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/113450/2/34014/13767/63871eb1E3e3cce39/93afddc37745823f.png"
          },
          {
            "keywordId": "0901776531",
            "catId": "cid3",
            "keyword": "坚果炒货",
            "url": "/goods/list?key=坚果炒货",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/89600/33/15817/11753/5e747e68E43e789b9/15bff8b49fba2944.jpg"
          },
          {
            "keywordId": "0901776667",
            "catId": "cid3",
            "keyword": "饼干糕点",
            "url": "/goods/list?key=饼干糕点",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/211229/35/28223/12334/6386f8fcE70a8ff11/e9227f4f87e7535a.png"
          },
          {
            "keywordId": "0901776668",
            "catId": "cid3",
            "keyword": "薯片膨化",
            "url": "/goods/list?key=薯片膨化",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/183392/2/31795/9391/6386f8fdE5661856e/7b25c26f7460d29a.png"
          }
        ],
        "keywordid": "07001972",
        "secCateName": "休闲食品",
        "keyword": "休闲食品",
        "adGroupId": "07001972"
      },
      {
        "level2words": [
          {
            "keywordId": "8401762953",
            "catId": "cid3",
            "keyword": "面粉",
            "url": "/goods/list?key=面粉",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/203019/18/29153/8178/6386fbdcE7034ca7b/69c8d7e6c3f42cfb.png"
          },
          {
            "keywordId": "8401762952",
            "catId": "cid3",
            "keyword": "烘焙原料",
            "url": "/goods/list?key=烘焙原料",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/1327/22/22081/9152/6465e5c0F5d1f514b/639f49bca967a95a.jpg"
          },
          {
            "keywordId": "8401762955",
            "catId": "cid3",
            "keyword": "南北干货",
            "url": "/goods/list?key=南北干货",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/137053/31/33565/4488/64647e6bFf753e28a/d1fd296e61c4ad56.jpg"
          },
          {
            "keywordId": "8401762954",
            "catId": "cid3",
            "keyword": "挂面",
            "url": "/goods/list?key=挂面",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/219363/35/29706/5538/646dc53cFaccfce1e/2c83babc0c5d5bb8.jpg"
          },
          {
            "keywordId": "8401762721",
            "catId": "cid3",
            "keyword": "西式餐调",
            "url": "/goods/list?key=西式餐调",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/47741/38/18481/9401/6386fbdcEa044d217/e8c20d1d43cf88dc.png"
          },
          {
            "keywordId": "8401762945",
            "catId": "cid3",
            "keyword": "米",
            "url": "/goods/list?key=米",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/6259/37/14668/4271/64647e5cF55c7ecc5/2db60f86f0755150.jpg"
          },
          {
            "keywordId": "8401762944",
            "catId": "cid3",
            "keyword": "东南亚调料",
            "url": "/goods/list?key=东南亚调料",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/104075/38/35176/15733/646dc5e4F2d7e655f/425f21930b1efcc4.jpg"
          },
          {
            "keywordId": "8401762723",
            "catId": "cid3",
            "keyword": "佐餐小菜",
            "url": "/goods/list?key=佐餐小菜",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/146985/12/33182/7973/6386fbdcE8d1105ed/b211f66be84a5407.png"
          },
          {
            "keywordId": "8401762947",
            "catId": "cid3",
            "keyword": "花生菜籽油",
            "url": "/goods/list?key=花生菜籽油",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/131463/28/34031/9547/646dbccfFf19da4b6/424a33f960ac5fc1.jpg"
          },
          {
            "keywordId": "8401762722",
            "catId": "cid3",
            "keyword": "中式调料",
            "url": "/goods/list?key=中式调料",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/36419/9/18965/6635/6386fbdcE83b46b90/f6f48f73e9d2fbc6.png"
          },
          {
            "keywordId": "8401762946",
            "catId": "cid3",
            "keyword": "五谷杂粮",
            "url": "/goods/list?key=五谷杂粮",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/159557/9/32946/9052/6386fbdcEd175b01a/d1e172f94d2166cd.png"
          },
          {
            "keywordId": "8401762949",
            "catId": "cid3",
            "keyword": "稻米油",
            "url": "/goods/list?key=稻米油",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/172922/37/32256/7317/646dbe89F45cc25c0/78663874bb27c6e9.jpg"
          }
        ],
        "keywordid": "07001984",
        "secCateName": "粮油调味",
        "keyword": "粮油调味",
        "adGroupId": "07001984"
      },
      {
        "level2words": [
          {
            "keywordId": "6501763528",
            "catId": "cid3",
            "keyword": "纯牛奶",
            "url": "/goods/list?key=纯牛奶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/68866/7/22724/6471/6386fa28E3ce27cfc/ebff6e4bcd55e7b8.png"
          },
          {
            "keywordId": "6501763529",
            "catId": "cid3",
            "keyword": "酸奶",
            "url": "/goods/list?key=酸奶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/9959/7/20866/8281/6386fa29E9cdc9ea4/370ed1b8bcbe384e.png"
          },
          {
            "keywordId": "6501763530",
            "catId": "cid3",
            "keyword": "新疆奶",
            "url": "/goods/list?key=新疆奶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/107869/12/32769/7484/6386fa29E50d7c92c/775d41bf9ff9124d.png"
          },
          {
            "keywordId": "6501763531",
            "catId": "cid3",
            "keyword": "常温奶",
            "url": "/goods/list?key=常温奶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/114437/15/32793/7717/6386fa28E14369350/365510328616ff2d.png"
          },
          {
            "keywordId": "6501763532",
            "catId": "cid3",
            "keyword": "低温鲜奶",
            "url": "/goods/list?key=低温鲜奶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/124783/35/31642/4629/6386fa28E716a8a63/a0dc15b2d7db720b.png"
          },
          {
            "keywordId": "6501763533",
            "catId": "cid3",
            "keyword": "饮用水",
            "url": "/goods/list?key=饮用水",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/53393/38/9821/3366/5da86031Eaabc83f3/3986ba105b2a9c8d.jpg"
          },
          {
            "keywordId": "6501763534",
            "catId": "cid3",
            "keyword": "冰淇淋",
            "url": "/goods/list?key=冰淇淋",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/93965/40/39232/4589/64647e82F8660b165/eaeaa0da4a1dcaf8.jpg"
          },
          {
            "keywordId": "6501763535",
            "catId": "cid3",
            "keyword": "进口水饮",
            "url": "/goods/list?key=进口水饮",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/211811/19/24010/4121/6387ecedEed1635ff/d723ffd87b6e5d50.jpg"
          },
          {
            "keywordId": "6501763522",
            "catId": "cid3",
            "keyword": "气泡水",
            "url": "/goods/list?key=气泡水",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/152424/27/31712/5651/6386fa29E57171a25/40911d04dd124274.png"
          },
          {
            "keywordId": "6501763523",
            "catId": "cid3",
            "keyword": "碳酸饮料",
            "url": "/goods/list?key=碳酸饮料",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/195566/18/23625/7558/6386fa29E80bccd33/bdd32c80682dc188.png"
          },
          {
            "keywordId": "6501763524",
            "catId": "cid3",
            "keyword": "功能型饮料",
            "url": "/goods/list?key=功能型饮料",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/212764/24/23749/8200/6386fa28Ee3443d77/f18160cd9b35f9bf.png"
          },
          {
            "keywordId": "6501763525",
            "catId": "cid3",
            "keyword": "乳酸菌饮料",
            "url": "/goods/list?key=乳酸菌饮料",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/105198/33/35542/5575/6386fa29E03f3a6df/5817efdba9215f4b.png"
          }
        ],
        "keywordid": "07001985",
        "secCateName": "乳品饮料",
        "keyword": "乳品饮料",
        "adGroupId": "07001985"
      },
      {
        "level2words": [
          {
            "keywordId": "9101755467",
            "catId": "cid3",
            "keyword": "米稀",
            "url": "/goods/list?key=米稀",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/218996/1/21636/5713/6386ffa4E4329229d/d9c56375718bebf3.png"
          },
          {
            "keywordId": "9101755466",
            "catId": "cid3",
            "keyword": "奶茶",
            "url": "/goods/list?key=奶茶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/183371/10/30654/10942/6386ffa4E6a05f6f6/51e9c7b16563f67b.png"
          },
          {
            "keywordId": "9101755471",
            "catId": "cid3",
            "keyword": "高纤麦片",
            "url": "/goods/list?key=高纤麦片",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/178325/4/29580/11359/6386ffa4E9cbacc41/89a2b755860472eb.png"
          },
          {
            "keywordId": "9101755470",
            "catId": "cid3",
            "keyword": "藕粉",
            "url": "/goods/list?key=藕粉",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/142149/24/30102/8878/6386ffa4Ebea5426d/5cdc6906885adf0a.png"
          },
          {
            "keywordId": "9101755469",
            "catId": "cid3",
            "keyword": "豆浆",
            "url": "/goods/list?key=豆浆",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/180692/29/31067/9616/6386ffa4E17a3db30/fb4cc48279d741d3.png"
          },
          {
            "keywordId": "9101755468",
            "catId": "cid3",
            "keyword": "芝麻丸",
            "url": "/goods/list?key=芝麻丸",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/180952/17/29902/9105/6386ffa4E9e6bc68f/911afa13330bb455.png"
          },
          {
            "keywordId": "9101755475",
            "catId": "cid3",
            "keyword": "代餐奶昔",
            "url": "/goods/list?key=代餐奶昔",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/95530/10/38664/6705/64647e93F5df4aac5/68da1cfd1046a766.png"
          },
          {
            "keywordId": "9101755474",
            "catId": "cid3",
            "keyword": "水果麦片",
            "url": "/goods/list?key=水果麦片",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/198282/3/29931/11101/6386ffa4E09846eac/db87e628bc51a285.png"
          },
          {
            "keywordId": "9101755473",
            "catId": "cid3",
            "keyword": "五谷粉",
            "url": "/goods/list?key=五谷粉",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/104642/36/35302/8656/6386ffa4E4c47f3ab/179eb958897e1465.png"
          },
          {
            "keywordId": "9101755472",
            "catId": "cid3",
            "keyword": "纯麦麦片",
            "url": "/goods/list?key=纯麦麦片",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/101076/9/35225/9555/6386ffa3E5bf35b1e/ce69743efeba145b.png"
          },
          {
            "keywordId": "9101755478",
            "catId": "cid3",
            "keyword": "蜂蜜",
            "url": "/goods/list?key=蜂蜜",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/9429/8/20941/7052/6386ffa4E2206ad07/93175af444a8d80d.png"
          },
          {
            "keywordId": "9101755477",
            "catId": "cid3",
            "keyword": "成人奶粉",
            "url": "/goods/list?key=成人奶粉",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/55392/5/23897/9590/64647e98F25885535/304a0de28ea06907.png"
          }
        ],
        "keywordid": "07001988",
        "secCateName": "冲饮谷物",
        "keyword": "冲饮谷物",
        "adGroupId": "07001988"
      },
      {
        "level2words": [
          {
            "keywordId": "8801757378",
            "catId": "cid3",
            "keyword": "螺狮粉",
            "url": "/goods/list?key=螺狮粉",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/143674/14/30927/11069/6386fcceE666527e7/e614af6ba6b2aa00.png"
          },
          {
            "keywordId": "8801757379",
            "catId": "cid3",
            "keyword": "方便面",
            "url": "/goods/list?key=方便面",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/204552/15/34997/7162/64647ea9F56aa95bd/bb512d01a790b38d.jpg"
          },
          {
            "keywordId": "8801757376",
            "catId": "cid3",
            "keyword": "速食汤粥",
            "url": "/goods/list?key=速食汤粥",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/109728/11/33021/9752/6386fcceE46ae0b70/197171f98d521223.png"
          },
          {
            "keywordId": "8801757377",
            "catId": "cid3",
            "keyword": "火腿肠",
            "url": "/goods/list?key=火腿肠",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/100064/25/33625/6357/64647ea6Ff43fe068/d6c7ef225f8a679e.jpg"
          },
          {
            "keywordId": "8801757380",
            "catId": "cid3",
            "keyword": "粽子",
            "url": "/goods/list?key=粽子",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/222335/36/27818/4294/64647eabF979dc09a/dcc9944229cfc3f0.jpg"
          },
          {
            "keywordId": "8801757381",
            "catId": "cid3",
            "keyword": "青团",
            "url": "/goods/list?key=青团",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/146628/18/32839/7453/6386fcceE87153653/21a4dddd4502d3e7.png"
          },
          {
            "keywordId": "8801757371",
            "catId": "cid3",
            "keyword": "品质面食",
            "url": "/goods/list?key=品质面食",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/10903/34/20142/11886/6386fcceE5b0c6c0e/4474ca1cdbb7e6b0.png"
          },
          {
            "keywordId": "8801757374",
            "catId": "cid3",
            "keyword": "米粉/米线",
            "url": "/goods/list?key=米粉/米线",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/48676/37/22844/6621/64647ea1F56db5085/feb10cc52a7a330c.jpg"
          },
          {
            "keywordId": "8801757375",
            "catId": "cid3",
            "keyword": "罐头",
            "url": "/goods/list?key=罐头",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/134810/28/32414/4013/6464af22Fd41471ae/e28d9aed6de4c529.jpg"
          }
        ],
        "keywordid": "07001989",
        "secCateName": "方便速食",
        "keyword": "方便速食",
        "adGroupId": "07001989"
      },
      {
        "level2words": [
          {
            "keywordId": "5601766593",
            "catId": "cid3",
            "keyword": "铁观音",
            "url": "/goods/list?key=铁观音",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/125829/24/31814/2600/6464afa3F11524dfe/7e2f850f97b1dc54.jpg"
          },
          {
            "keywordId": "5601766592",
            "catId": "cid3",
            "keyword": "白茶",
            "url": "/goods/list?key=白茶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/146399/39/33870/6886/6386f7f1E676ca2e0/3cd5ab6de88815fd.png"
          },
          {
            "keywordId": "5601766595",
            "catId": "cid3",
            "keyword": "黑茶",
            "url": "/goods/list?key=黑茶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/104920/19/34756/11139/6386fd6eE6c765530/e51ea0e4b421fbd2.png"
          },
          {
            "keywordId": "5601766594",
            "catId": "cid3",
            "keyword": "安溪铁观音",
            "url": "/goods/list?key=安溪铁观音",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/201848/23/19413/3375/6386fd6fE6463b3fa/d08ed7442c163a36.jpg"
          },
          {
            "keywordId": "5601766583",
            "catId": "cid3",
            "keyword": "花草茶",
            "url": "/goods/list?key=花草茶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/147440/38/33777/10091/64649dfaF8ce9b70b/d5b2944c6cd14139.jpg"
          },
          {
            "keywordId": "5601766589",
            "catId": "cid3",
            "keyword": "西湖龙井",
            "url": "/goods/list?key=西湖龙井",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/208159/20/28644/9773/6386fd72Ec3d7cf89/e177212ddaddf682.png"
          },
          {
            "keywordId": "5601766588",
            "catId": "cid3",
            "keyword": "茉莉花茶",
            "url": "/goods/list?key=茉莉花茶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/41283/39/20531/11736/6386fd6fE4e86d4e6/9b1ee5ae5154b738.png"
          },
          {
            "keywordId": "5601766591",
            "catId": "cid3",
            "keyword": "乌龙茶",
            "url": "/goods/list?key=乌龙茶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/63886/17/13184/5996/5da86255E72833418/8746937ba0ad9fe4.jpg"
          },
          {
            "keywordId": "5601766590",
            "catId": "cid3",
            "keyword": "菊花茶",
            "url": "/goods/list?key=菊花茶",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/116688/16/31686/9517/6386fd6eE7f72e63f/e1edc48cdd71a087.png"
          }
        ],
        "keywordid": "07001990",
        "secCateName": "茗茶",
        "keyword": "茗茶",
        "adGroupId": "07001990"
      },
      {
        "level2words": [
          {
            "keywordId": "6001748394",
            "catId": "cid3",
            "keyword": "黄酒/养生酒",
            "url": "/goods/list?key=黄酒/养生酒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/187650/29/30046/2506/63890d4eE8ebc34e1/066a80f85265f196.jpg"
          },
          {
            "keywordId": "6001748395",
            "catId": "cid3",
            "keyword": "收藏酒",
            "url": "/goods/list?key=收藏酒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/61364/26/22994/5194/63890d4eE8a179900/715789d304466d45.jpg"
          },
          {
            "keywordId": "6001748392",
            "catId": "cid3",
            "keyword": "葡萄酒",
            "url": "/goods/list?key=葡萄酒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/63646/31/13237/5130/5da86488Ec3cf44de/db29d0d594b0b84e.jpg"
          },
          {
            "keywordId": "6001748393",
            "catId": "cid3",
            "keyword": "洋酒",
            "url": "/goods/list?key=洋酒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/177783/33/30497/4467/63890d4fE18e6e175/5e1516fb9e8074d4.jpg"
          },
          {
            "keywordId": "6001748390",
            "catId": "cid3",
            "keyword": "白酒",
            "url": "/goods/list?key=白酒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/168922/3/33708/24747/6464bac7Ffbdf9f59/af3b3685602fd718.png"
          },
          {
            "keywordId": "6001748391",
            "catId": "cid3",
            "keyword": "啤酒",
            "url": "/goods/list?key=啤酒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/66814/23/13349/4300/5da86696E7ff90a68/f87b3298bb5911c3.jpg"
          }
        ],
        "keywordid": "07001991",
        "secCateName": "中外名酒",
        "keyword": "中外名酒",
        "adGroupId": "07001991"
      },
      {
        "level2words": [
          {
            "keywordId": "5501762079",
            "catId": "cid3",
            "keyword": "莲子",
            "url": "/goods/list?key=莲子",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/140255/23/31858/12473/6386fe5cE28068e73/82febd432d1eae24.png"
          },
          {
            "keywordId": "5501762078",
            "catId": "cid3",
            "keyword": "桂圆",
            "url": "/goods/list?key=桂圆",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/196085/13/30882/9126/6386fe5cE78291fc9/a3b68d5a8a236bf5.png"
          },
          {
            "keywordId": "5501762077",
            "catId": "cid3",
            "keyword": "木耳",
            "url": "/goods/list?key=木耳",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/167894/36/32292/12033/6386fe5cE304155c4/0b36cc55e24273ed.png"
          },
          {
            "keywordId": "5501762076",
            "catId": "cid3",
            "keyword": "干货礼盒",
            "url": "/goods/list?key=干货礼盒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/44121/37/20186/13429/6386fe5cE0a77f3f1/633d7924d804fe75.png"
          },
          {
            "keywordId": "5501762075",
            "catId": "cid3",
            "keyword": "菜干类",
            "url": "/goods/list?key=菜干类",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/204771/37/36140/9526/64759ea0F0aa58ddb/705e145253661be0.jpg"
          },
          {
            "keywordId": "5501762074",
            "catId": "cid3",
            "keyword": "干贝",
            "url": "/goods/list?key=干贝",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/90682/19/39427/8390/64759e97F8eddba30/9eac00bbe198b11f.jpg"
          },
          {
            "keywordId": "5501762073",
            "catId": "cid3",
            "keyword": "银耳",
            "url": "/goods/list?key=银耳",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/6835/34/27363/10842/6386fe5cE63ea6d89/936c1ad0d5f4612d.png"
          },
          {
            "keywordId": "5501762083",
            "catId": "cid3",
            "keyword": "干海参",
            "url": "/goods/list?key=干海参",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/209099/18/26073/7016/6386fe5bEa69688a9/101b4b1dbfc20790.png"
          },
          {
            "keywordId": "5501762082",
            "catId": "cid3",
            "keyword": "有机干货",
            "url": "/goods/list?key=有机干货",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/183676/16/30083/9991/6386fe5cE01649751/e574e3cf42ececed.png"
          }
        ],
        "keywordid": "07001992",
        "secCateName": "南北干货",
        "keyword": "南北干货",
        "adGroupId": "07001992"
      },
      {
        "level2words": [
          {
            "keywordId": "5401751121",
            "catId": "cid3",
            "keyword": "古越龙山",
            "url": "/goods/list?key=古越龙山",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/150569/32/24437/3925/6465905cF28e4d634/7686b7e5725c08e4.jpg"
          },
          {
            "keywordId": "5401751120",
            "catId": "cid3",
            "keyword": "人头马",
            "url": "/goods/list?key=人头马",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/92507/38/38456/3089/64659052F07faf1d9/a237e7a69a69b338.jpg"
          },
          {
            "keywordId": "5401751122",
            "catId": "cid3",
            "keyword": "张裕",
            "url": "/goods/list?key=张裕",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/145785/17/36649/3455/646590bbF307f2003/9857b7fbf2898097.jpg"
          },
          {
            "keywordId": "5401751113",
            "catId": "cid3",
            "keyword": "郎酒",
            "url": "/goods/list?key=郎酒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/102455/8/25765/3378/64658c9aFd7440304/ec9d2b53185005e4.jpg"
          },
          {
            "keywordId": "5401751112",
            "catId": "cid3",
            "keyword": "百威",
            "url": "/goods/list?key=百威",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/66814/23/13349/4300/5da86696E7ff90a68/f87b3298bb5911c3.jpg"
          },
          {
            "keywordId": "5401751115",
            "catId": "cid3",
            "keyword": "牛栏山",
            "url": "/goods/list?key=牛栏山",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/173034/25/33403/4186/64658ca8F13f5b005/1c1531151767d8dd.jpg"
          },
          {
            "keywordId": "5401751114",
            "catId": "cid3",
            "keyword": "洋河",
            "url": "/goods/list?key=洋河",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/198779/34/31499/3799/64658c8bF360c5793/8d0f43ff0d690562.jpg"
          },
          {
            "keywordId": "5401751117",
            "catId": "cid3",
            "keyword": "珍酒",
            "url": "/goods/list?key=珍酒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/105609/33/39928/7039/64658fedFfedf07c5/e17435b9fc283cd9.jpg"
          },
          {
            "keywordId": "5401751116",
            "catId": "cid3",
            "keyword": "拉菲",
            "url": "/goods/list?key=拉菲",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/213356/2/30470/3074/64658fdeFfc7df509/733a5c827a8c0bdc.jpg"
          },
          {
            "keywordId": "5401751119",
            "catId": "cid3",
            "keyword": "青岛啤酒",
            "url": "/goods/list?key=青岛啤酒",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/216241/36/29446/6529/64659039F3a57b36c/e1711b4808250c99.jpg"
          },
          {
            "keywordId": "5401751118",
            "catId": "cid3",
            "keyword": "轩尼诗",
            "url": "/goods/list?key=轩尼诗",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/136674/34/37430/6648/64659134F2ba81d8c/418eddf9b6926357.jpg"
          },
          {
            "keywordId": "5401751109",
            "catId": "cid3",
            "keyword": "五粮液",
            "url": "/goods/list?key=五粮液",
            "imageUrl": "https://m.360buyimg.com/babel/jfs/t1/141935/20/35784/3702/64658c4eFb0607763/bb9a8463860a9b53.jpg"
          }
        ],
        "keywordid": "07001993",
        "secCateName": "酒水品牌",
        "keyword": "酒水品牌",
        "adGroupId": "07001993"
      }
    ],
    "title": "食品",
    "labelStartTime": "2023-05-17 00:00:00"
  },
})

const { firstCate, secondCate } = toRefs(state)

const onChange = (index) => showToast(state.firstCate[index].title);

const onGoodsList = (item) =>{
  router.push({ path: item.url, query: { keyword: item.keyword } });
}
</script>

<template>
  <main class="flex">
    <div>
      <van-sidebar v-model="active" class="sidebar w-20 overflow-y-auto" @change="onChange">
        <van-sidebar-item v-for="item of firstCate" :key="item.paneKey" :title="item.title" />
      </van-sidebar>
    </div>
    <div class="bg-white flex-1 sidebar overflow-y-auto">
      <div v-for="item of secondCate.level1words" :key="item.keywordid">
        <div class="p-3 text-sm font-semibold">{{ item.secCateName }}</div>
        <div class="flex flex-wrap">
          <div class="w-4/12 text-center pb-5" v-for="item2 of item.level2words" :key="item2.keywordId" @click="onGoodsList(item2)">
            <div>
              <van-image width="60" height="60" fit="contain" :src="item2.imageUrl" alt="" />
            </div>
            <div class="text-xs">{{ item2.keyword }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <Tabbar style="height: 50px;"></Tabbar>
</template>

<style lang="scss" scoped>
.sidebar {
  height: calc(100vh - 50px);
}
</style>
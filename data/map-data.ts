export interface MapItem {
  type: 'link' | 'image' | 'text'
  name: { zh: string; en: string }
  value: string | { zh: string; en: string }
  url?: string  // 可选的链接字段
}

export interface MapLocation {
  lat: number
  lng: number
  cityName: { zh: string; en: string }
  items: MapItem[]
}

export const AESTHETIC_MAP_DATA: MapLocation[] = [
  {
    lat: 34.7973,
    lng: 114.3072,
    cityName: { zh: '开封', en: 'Kaifeng' },
    items: [
      {
        type: 'text',
        name: { zh: '万岁山大宋武侠城', en: 'The Song Dynasty Of Kungfu City' },
        value: {
          zh: '这是一篇深度游记，万岁山是全世界最棒的人造游乐场！',
          en: 'a deep travelogue. Wansui Mountain is the best artificial amusement park in the world!',
        },
        url: 'https://mp.weixin.qq.com/s/knxsAyl3A43Ku_LET1zIhQ',
      },
      {
        type: 'image',
        name: { zh: '邢家锅盔', en: 'Xing Guokui (Crispy Flatbread)' },
        value: '/images/food/guokui.jpg',
      },
      {
        type: 'text',
        name: { zh: '繁塔印象', en: 'Impressions of Po Tower' },
        value: {
          zh: '繁塔虽残缺，但其内壁嵌满佛像，结构透视极具"穿墙透壁"的立体几何感。',
          en: 'Although the Po Tower is partially ruined, its inner walls are embedded with countless Buddha statues, creating a striking architectural perspective.',
        },
      },
      {
        type: 'image',
        name: { zh: '邢家锅l盔', en: 'XinFlatbread)' },
        value: '/images/food/guokui.jpg',
      },
      {
        type: 'image',
        name: { zh: '盔', en: 'XingCrispy Flatbread)' },
        value: '/images/food/guokui.jpg',
      },
      {
        type: 'image',
        name: { zh: '邢家盔', en: 'Xing Guokad)' },
        value: '/images/food/guokui.jpg',
      },
      {
        type: 'image',
        name: { zh: '邢盔', en: 'Xing GuokuiFlatbread)' },
        value: '/images/food/guokui.jpg',
      },
      {
        type: 'image',
        name: { zh: '邢家锅l盔', en: 'XinFlatbread)' },
        value: '/images/food/guokui.jpg',
      },
      {
        type: 'image',
        name: { zh: '盔', en: 'XingCrispy Flatbread)' },
        value: '/images/food/guokui.jpg',
      },
      {
        type: 'image',
        name: { zh: '邢家盔', en: 'Xing Guokad)' },
        value: '/images/food/guokui.jpg',
      },
      {
        type: 'image',
        name: { zh: '邢盔', en: 'Xing GuokuiFlatbread)' },
        value: '/images/food/guokui.jpg',
      },
    ],
  },
  {
    lat: 39.9042,
    lng: 116.4074,
    cityName: { zh: '北京', en: 'Beijing' },
    items: [
      {
        type: 'link',
        name: { zh: '故宫博物院', en: 'The Forbidden City' },
        value: 'https://www.dpm.org.cn/',
      },
      {
        type: 'text',
        name: { zh: '胡同漫步', en: 'Hutong Walking' },
        value: {
          zh: '穿行于老北京的胡同之间，青砖灰瓦诉说着百年故事，四合院里的槐树依旧摇曳。',
          en: 'Walking through the ancient hutongs of Beijing, the grey bricks and tiles tell stories of centuries past.',
        },
      },
    ],
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    cityName: { zh: '上海', en: 'Shanghai' },
    items: [
      {
        type: 'link',
        name: { zh: '外滩万国建筑群', en: 'The Bund' },
        value: 'https://www.shanghai.gov.cn/',
      },
      {
        type: 'text',
        name: { zh: '石库门风情', en: 'Shikumen Architecture' },
        value: {
          zh: '石库门建筑融合中西风格，窄巷深弄间隐藏着老上海的市井烟火气息。',
          en: 'Shikumen architecture blends Chinese and Western styles, hiding the essence of old Shanghai in its narrow lanes.',
        },
      },
    ],
  },
  {
    lat: 25.0424,
    lng: 102.7075,
    cityName: { zh: '昆明', en: 'Kunming' },
    items: [
      {
        type: 'link',
        name: { zh: '滇池风光', en: 'Dianchi Lake' },
        value: 'https://www.yn.gov.cn/',
      },
      {
        type: 'text',
        name: { zh: '春城花海', en: 'City of Eternal Spring' },
        value: {
          zh: '四季如春的昆明，鲜花常开不败，是云南高原上的一颗明珠。',
          en: 'Kunming, with its eternal spring climate, blooms with flowers year-round as a pearl of the Yunnan Plateau.',
        },
      },
    ],
  },
  {
    lat: 30.5728,
    lng: 104.0668,
    cityName: { zh: '成都', en: 'Chengdu' },
    items: [
      {
        type: 'link',
        name: { zh: '宽窄巷子', en: 'Kuanzhai Alley' },
        value: 'https://www.chengdu.gov.cn/',
      },
      {
        type: 'text',
        name: { zh: '茶馆文化', en: 'Teahouse Culture' },
        value: {
          zh: '成都人爱喝茶，老茶馆里竹椅藤桌，一杯盖碗茶可以消磨一整个下午。',
          en: 'Chengdu locals love tea; in old teahouses with bamboo chairs and rattan tables, a cup of covered-bowl tea can while away an entire afternoon.',
        },
      },
    ],
  },
  {
    lat: 29.5628,
    lng: 106.5514,
    cityName: { zh: '重庆', en: 'Chongqing' },
    items: [
      {
        type: 'link',
        name: { zh: '洪崖洞夜景', en: 'Hongya Cave Night View' },
        value: 'https://www.cq.gov.cn/',
      },
      {
        type: 'text',
        name: { zh: '山城印象', en: 'Mountain City Impressions' },
        value: {
          zh: '重庆是一座建在山上的城市，立体的城市结构让人仿佛置身于赛博朋克世界。',
          en: 'Chongqing is a city built on mountains; its three-dimensional urban structure feels like stepping into a cyberpunk world.',
        },
      },
    ],
  },
  {
    lat: 30.2741,
    lng: 120.1551,
    cityName: { zh: '杭州', en: 'Hangzhou' },
    items: [
      {
        type: 'link',
        name: { zh: '西湖十景', en: 'Ten Scenes of West Lake' },
        value: 'https://www.hangzhou.gov.cn/',
      },
      {
        type: 'text',
        name: { zh: '龙井问茶', en: 'Longjing Tea Experience' },
        value: {
          zh: '春日的龙井茶园，嫩芽初发，采茶姑娘穿行其间，是江南最美的风景之一。',
          en: 'In spring, the Longjing tea gardens sprout tender buds, with tea-picking maidens walking among them—one of the most beautiful scenes in Jiangnan.',
        },
      },
    ],
  },
  {
    lat: 34.3416,
    lng: 108.9398,
    cityName: { zh: '西安', en: "Xi'an" },
    items: [
      {
        type: 'link',
        name: { zh: '兵马俑', en: 'Terracotta Warriors' },
        value: 'https://www.bmy.com.cn/',
      },
      {
        type: 'text',
        name: { zh: '城墙骑行', en: 'City Wall Cycling' },
        value: {
          zh: '骑行在千年古城墙上，俯瞰古都西安，感受十三朝古都的历史厚重感。',
          en: "Cycling on the ancient city wall, overlooking Xi'an, feeling the historical weight of the capital of thirteen dynasties.",
        },
      },
    ],
  },
]

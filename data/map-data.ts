export interface MapItem {
  type: 'link' | 'image' | 'text'
  name: { zh: string; en: string }
  value: string | { zh: string; en: string }
  url?: string
  links?: Array<{ text: string; url: string }>
  description?: { zh: string; en: string }
}

export interface MapLocation {
  lat: number
  lng: number
  cityName: { zh: string; en: string }
  items: MapItem[]
}

const GITHUB_IMAGE_BASE_URL = 'https://raw.githubusercontent.com/vlamenco/Aesthetic-Tourism-Map-of-China-Travel/main/images/';

export const AESTHETIC_MAP_DATA: MapLocation[] = [
  {
    lat: 34.7973,
    lng: 114.3072,
    cityName: { zh: '开封', en: 'Kaifeng' },
    items: [
      {type: 'text',
        name: { zh: '万岁山大宋武侠城', en: 'The Song Dynasty Of Kungfu City' },
        value: { zh: '开封深度游记，万岁山是全世界最棒的人造游乐场！',
          en: 'a deep travelogue. Wansui Mountain is the best artificial amusement park in the world!',},
        links: [{text: '豫州行之开封有个万岁山',
            url: 'https://mp.weixin.qq.com/s/knxsAyl3A43Ku_LET1zIhQ'}]},
      {type: 'image',
        name: { zh: '邢家锅贴', en: 'Xing Guokui (Crispy Flatbread)' },
        value: `${GITHUB_IMAGE_BASE_URL}/guotie.jpg`,
        description: { zh: '味道清新，造型像拿破仑的帽子。',
          en: `Fresh taste and shaped like Napoleon's hat.
"Impossible n'est pas français."`} },
     
      {type: 'image',
  name: { zh: '繁塔', en: 'Po Tower' },
  value: `${GITHUB_IMAGE_BASE_URL}/pota.jpg`,
  description: {
    zh: `“铁塔只搭繁塔腰”。so，繁塔才是重点（读Pó，但每次打字都要别扭地“读错”）。
      外观像玉玺，六角形，只有三层高（残缺仍旧很美），在开封古城外。这里最有心的是每个雕砖都是一个人的寄托，祈福，和纪念。
      上至皇族、达官贵人，下至平民百姓都可以与它连接，朴素的心愿在这108种，近7000尊 法相庄严的菩萨、罗汉、乐伎等形象中，众志成城。`,
    en: `The Iron Pagoda only reaches the waist of the Po Tower. So the Po Tower is the real highlight. Shaped like an imperial jade seal, this hexagonal pagoda stands merely three stories tall. Even in its incomplete state, it remains breathtakingly beautiful, situated outside the ancient city wall. 
      Each carved brick carries people\'s aspirations, prayers and remembrances. From imperial families and high-ranking officials down to ordinary folk, everyone has a bond with this pagoda. 
      Simple wishes converge and take form amid nearly 7,000 solemn statues of Buddhas, arhats, musicians and dancers across 108 different depictions.`
  }},
      {type: 'image',
  name: { zh: '铁塔', en: 'Iron Pagoda' },
  value: `${GITHUB_IMAGE_BASE_URL}/tieta.jpg`,
  description: {
    zh: `参拜“天下第一塔”！
        铁塔前身是木塔，供奉的是吴越王钱弘俶进贡的佛舍利（982年）。后被雷火烧毁。1049 年（宋仁宗）重建，改用褐色琉璃砖。
        1938年6月5日，日本鬼子打开封，对着铁塔连续炮轰，第八、九层被打个大洞。1952年毛泽东来开封，看到满身弹痕却依旧挺立的铁塔，说：“这座铁塔代表着我们中国人，日本人打不倒！”
        让人无语的是，开封和日本户田居然是友好城市？！
        （我没有大格局，这事我不同意！）`,
    en: `Paying homage to the 1️⃣"Number One Pagoda Under Heaven"! 
    The Iron Pagoda was originally a wooden structure built in 982 to enshrine the Buddha's relics tributated by King Qian Hongchu of Wuyue. It was later burned down by lightning. Reconstructed in 1049 during the reign of Emperor Renzong of the Northern Song Dynasty, it was built with brown glazed bricks.
    On June 5, 1938, Japanese invaders captured Kaifeng and bombarded the Iron Pagoda continuously, leaving large holes in the 8th and 9th floors. In 1952, Mao Zedong visited Kaifeng. Seeing the pagoda still standing despite being covered with bullet and shell marks, he said, "This Iron Pagoda represents us Chinese people. The Japanese can never defeat us!"
    What is truly frustrating is that Kaifeng is actually a sister city of Toda (Japan)?!
(I may not be broad-minded, but I strongly disagree with this!).`
  }},
      { type: 'image',
  name: { zh: '包拯', en: 'Bao Zheng' },
  value: `${GITHUB_IMAGE_BASE_URL}/baozheng.jpg`,
  description: { zh: `宋代科举分 “解试【举人】、省试【省元】、殿试{进士:【一甲：状元、榜眼、探花，赐及第;
二甲：赐出身;
三甲：赐同出身】}” 逐级晋升。
    包青天 28岁考中进士，属年少登科。但他因父母年迈，放弃官职回乡侍奉，长达十年，直至双亲离世、守孝期满才复出。
35岁就职场毕业的我们，请坚持住，一定要等到曙光！
  （PS:不要来包公祠！会唱那首歌就行了！全是后建的，不值得）`,
    en: `The imperial examinations in the Song Dynasty were conducted in successive stages: the Provincial Preliminary Examination (for Juren candidates), the Metropolitan Examination (for Metropolitan Top Scholars), and the Palace Examination (for Jinshi scholars).
Jinshi scholars were ranked into three tiers: the First Class, consisting of Zhuangyuan, Bangyan, Tanhua, who were granted the title of "Passed with Distinction"; the Second Class, granted the title of "Graduate"; and the Third Class, granted the title of "Associate Graduate".
Bao Zheng passed the Jinshi examination at the age of 28, an achievement for someone so young to succeed in the imperial exams. However, he resigned from his official post to return home and care for his elderly parents.
He devoted a decade to this filial duty and only resumed his official career after his parents passed away and he completed the traditional mourning period.
For those of us who feel like we have "graduated" from the workplace at 35, hold on, never give up!
The hopeful light will come.
(No need to visit the Lord Bao Memorial Temple. All the buildings were reconstructed in recent years.)`}},

       { type: 'image',
  name: { zh: '延庆观', en: 'Yanqing Taoist Temple' },
  value: `${GITHUB_IMAGE_BASE_URL}/yanqingguan.jpg`,
  description: { zh: `开封唯一留存的元代古建筑群，国内唯一汉+蒙融合的道教建筑。
        下方上圆，中原 “天圆地方” 礼制 + 蒙古包穹顶造型结合。
       注意看 琉璃屋脊雕刻了 蒙古骑狮武士、西域胡人，汉人被骑头上了（无奈）。北方之神“玄武”在元朝被推至为最重要的神，能感受到铁骑的bangbangbang吗？`,
    en: `The only surviving ancient architectural complex of the Yuan Dynasty in Kaifeng, and the sole Taoist architecture in China blending Han汉 and Mongolian蒙 styles.
    It features a square base and a circular upper section, integrating the Central Plains ritual concept of "heaven is round and earth is square" with the dome shape of Mongolian yurts.
    Take a close look: glazed roof ridges are carved with Mongolian warriors riding lions, and Han people being ridden upon (helpless sigh). Xuanwu玄武, the God of the North, was elevated to the most supreme deity during the Yuan Dynasty. Can you almost hear the thunderous galloping of iron cavalry?`}},
     
            { type: 'image',
  name: { zh: '大相国寺', en: 'Daxiangguo Temple' },
  value: `${GITHUB_IMAGE_BASE_URL}/daxiangguosi.jpg`,
  description: { zh: ` ·景云元年（710），韦后毒杀唐中宗，李隆基联合太平公主发动唐隆政变，诛杀韦氏一党，拥立相王李旦第二次登基，即唐睿宗。
    次年延和元年（712），睿宗忆自己数十年 “相王” 藩王身份入继大统的经历，下诏将汴梁新建的建国寺改名大相国寺，并亲笔题写寺额。 
    ·据说鲁智深出家于此，看管菜园，发生了“鲁智深倒拔垂杨柳”的典故。 
    ·大雄宝殿（清） —— 中原第一殿，重檐歇山顶是皇家寺院最高等级殿宇形制，虽然它的年代只有300多年，但从古建筑造型看确实极其华丽。
    ·八角琉璃殿 里有整株千年银杏雕刻的千手千眼观音像，非常震撼，香火鼎旺。`,
    en: `In 710 year, Empress Wei韦后 poisoned Emperor Tang Zhongzong唐中宗. Li Longji李隆基 and Princess Taiping太平公主, launched the Tanglong Coup, executed all followers of the Wei clan, and installed Li Dan李旦 on the throne for the second time as Emperor Tang Ruizong唐睿宗.

The following year (712), recalling his decades-long experience ascending the throne as a regional prince相王, Emperor Ruizong issued an imperial edict to rename the newly built Jianguo Temple in Bianliang（Kaifeng） as Daxiangguo Temple and personally inscribed the temple plaque.

Little Story：
·It is said that Lu Zhishen鲁智深 （All Men Are Brothers: Water Margin《水浒传》） became a monk here and took charge of the vegetable garden, where the well-known tale "Lu Zhishen Uproots a Willow Tree" took place.

·Mahavira Hall (Qing Dynasty) – hailed as the No.1 Hall in the Central Plains. Its double-eaved hip-and-gable roof represents the highest architectural rank for halls in imperial monasteries. Though it is merely over 300 years old, still extraordinarily magnificent!

·The Octagonal Glazed Hall houses a statue of the Thousand-Handed and Thousand-Eyed Guanyin carved from an entire ginkgo tree, which presents a stunning sight and draws an endless stream of worshippers.`}},
    
       { type: 'image',
  name: { zh: '山陕甘会馆', en: 'Shaanxi-Shanxi-Gansu Guild Hall' },
  value: `${GITHUB_IMAGE_BASE_URL}/shanshanganduilian.jpg`,
  description: { zh: `建于清乾隆三十一年（1766 年），原址是明代开国功臣徐达府邸，既是三省同乡商会议事场所，也供奉关公，主打 “忠义经商” 理念，号称北方第一会馆。
      看古建筑的 照壁，中间是蜘蛛🕷，表示吐丝编织细密大网，八条蛛足聚拢财源、兼顾四方客商。关公看了不知作何感想？
      砖雕、石雕、木雕是绝技。挺像广州陈家祠的，但群体较小，免费讲解得还不错。
      
      喜欢这个对联“ 你也挤，我也挤，此地几无立脚地；好且看，歹且看，大家都有下场时。”`,
    en: `Constructed in the Qianlong reign of the Qing Dynasty (1766), the site was originally the mansion of Xu Da, a meritorious founding minister of the Ming Dynasty. 
     It served as a venue for merchants from three provinces to discuss business, enshrined Guan Gong关公, upheld the philosophy of "conducting business with loyalty and righteousness", and was reputed as the top guild hall in northern China.
    Examine the screen wall of this ancient building; a spider🕷 sits at its center, symbolizing spinning an intricate vast web. The spider’s eight legs stand for gathering wealth and accommodating merchants from all directions.
    Businesspeople exist to seek gains, so we shouldn’t harp too much on Guan Gong’s ethics of loyalty and integrity.

Its brick, stone and wood carvings are consummate craftsmanship. It bears a strong resemblance to the Chen Clan Academy in Guangzhou, though its architectural complex is smaller, and the free guided tours here are excellent.

Adore the couplet: "Crowded you are, crowded I am; scarce space is left for anyone to stand. 
Watch the good, watch the bad; every soul shall meet their final end."`}},
     
      
     {type: 'image',
        name: { zh: '黄河金鲤鱼焙面', en: 'Yellow River Golden Carp' },
        value: `${GITHUB_IMAGE_BASE_URL}/huanghejinliyu.jpg`,
        description: {  zh: `在兴中楼清真饭店吃的，金鳞赤尾（专属激光刻字），很像松子鱼酸甜口，细挂面炸成棉被轻轻地盖上。让我长见识了！`,
    en: `I had the carp at Xingzhonglou Halal Restaurant. It has golden scales and a red tail with exclusive laser engraving. 
    tastes like sweet and sour pine nut fish.
Thin noodles are fried fluffy and covered gently on top. 
It broadened my horizons!`}},
     
    {type: 'image',
        name: { zh: '夜市小摊', en: 'Night market stall' },
        value: `${GITHUB_IMAGE_BASE_URL}/kaifengyeshixiaochi.png`,
        description: {  zh: `鼓楼 / 西司 / 老河大 夜市，我都经过了，本地人不推荐，就像大部分出名的古镇，没太多特色，年轻人打卡凑热闹还行，老外估计比较喜欢。`,
    en: `I have passed by the night markets at Gulou, Xisi and Old Henan University. Foreigners can come over to experience the lively alleyways and unique late-night snack culture. 
    The Drum Tower Night Market (Gulou) has the longest history, breaking the boundaries between lanes and markets, with shops everywhere in a densely packed commercial model.`}},
   
    {type: 'image',
        name: { zh: '开封府', en: 'Kaifeng Prefecture' },
        value: `${GITHUB_IMAGE_BASE_URL}/kaifengfu.jpg`,
        description: {  zh: `一个新建的景点，没有玩的吃的，纯纯n:1仿造，在清心楼登高望远包公湖时，才觉得这票价值3折.`, 
           en: `A newly built scenic spot with no entertainment facilities or food stalls; The area is an 1:5 replica of Song dynasty. 
             Only when climbing up the Pure Heart Tower to overlook Baogong Lake did I feel the ticket price is worth a 70% discount off the original price.`},},
      
    ]},
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

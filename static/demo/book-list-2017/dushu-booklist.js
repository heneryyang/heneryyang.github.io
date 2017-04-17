var books = [
    {
        "title": "《叛逆不是孩子的错》",
        "subtitle": "（美）杰弗里 · 伯恩斯坦",
        "content": "不打、不骂、不动气的温暖教养术",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/00004-pannibushihaizidecuo-320x450.png"
    },
    {
        "title": "《认同》",
        "subtitle": "（美）约翰P · 科特、罗恩A · 怀特海德",
        "content": "赢取支持的艺术",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/00005-rentong-320x450.png"
    },
    {
        "title": "《向前一步》",
        "subtitle": "（美）桑德伯格",
        "content": "女性、工作及领导意志",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/00006-xiangqianyibu-320x450.png"
    },
    {
        "title": "《钝感力》",
        "subtitle": "（日）渡边纯一",
        "content": "具备不为小事动摇的钝感力，才能成为真正的赢家",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/00007-dunganli-320x450.png"
    },
    {
        "title": "《王阳明大传》",
        "subtitle": "（日）冈田武彦",
        "content": "知行合一的心学智慧",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/00009-320x450.png"
    },
    {
        "title": "《亲密关系》",
        "subtitle": "（加）克里斯多福·孟",
        "content": "通往灵魂的桥梁",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/04/qinmiguanxi-320x450.png"
    },
    {
        "title": "《人工智能时代》",
        "subtitle": "（美）杰瑞·卡普兰",
        "content": "人机共生下财富、工作与思维的大未来",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/04/rengongzhinengshidai-320x450.png"
    },
    {
        "title": "《国史讲话：春秋》",
        "subtitle": "（中）顾颉刚，童书业",
        "content": "2015中国好书",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/chunqiu-320x450.png"
    },
    {
        "title": "《指数型组织》",
        "subtitle": "（加）萨利姆·伊斯梅尔，（美）迈克尔·马隆，（美）尤里·范吉斯特",
        "content": "打造独角兽公司的11个最强属性",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/zhishuxingzuzhi-320x450.png"
    },
    {
        "title": "《终极健康》",
        "subtitle": "（美）A.J. 雅各布",
        "content": "一个人对完美身体的谦卑追求",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/zhongjijiankang-320x450.png"
    },
    {
        "title": "《中国八大诗人》",
        "subtitle": "（中）胡怀琛",
        "content": "跟大师学国学",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/zhongguobadashiren-320x450.png"
    },
    {
        "title": "《正面管教》",
        "subtitle": "（美）简·尼尔森",
        "content": "如何不惩罚、不骄纵地有效管教孩子",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/zhengmianguanjiao-320x450.png"
    },
    {
        "title": "《丝绸之路》",
        "subtitle": "（英）彼得·弗兰科潘",
        "content": "一部全新的世界史",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/sichouzhilu-320x450.png"
    },
    {
        "title": "《危机领导力》",
        "subtitle": "（美）丹尼斯·N·T·珀金斯，（美）吉莉安·B·墨菲",
        "content": "掌握10大关键策略，让你的团队抗得过危机",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/weijilingdaoli-320x450.png"
    },
    {
        "title": "《未来简史》",
        "subtitle": "（以色列）尤瓦尔·赫拉利",
        "content": "从人类如何胜出，到人类的未来命运！",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/weilaijianshi-320x450.png"
    },
    {
        "title": "《王阳明哲学》",
        "subtitle": "（中）蔡仁厚",
        "content": "勾勒阳明思想历程，阐释心学义理",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/wangyangmingzhexue-320x450.png"
    },
    {
        "title": "《权力：为什么只为某些人所拥有》",
        "subtitle": "（美）杰弗瑞·菲佛",
        "content": "权利是“争”来的，不是“等”来的",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/quanli-320x450.png"
    },
    {
        "title": "《如何让你爱的人爱上你》",
        "subtitle": "（美）莉尔·朗兹",
        "content": "你相信吗？你爱的人一定会爱上你！",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/ruherangniaiderenaishangni-320x450.png"
    },
    {
        "title": "《认知盈余》",
        "subtitle": "（美）克莱·舍基",
        "content": "自由时间的力量",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/renzhiyingyu-320x450.png"
    },
    {
        "title": "《创始人》",
        "subtitle": "（美）迈克尔·沃特金斯",
        "content": "新管理者如何度过第一个90天",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/chuangshiren-320x450.png"
    },
    {
        "title": "《不吼不叫》",
        "subtitle": "（美）罗娜·雷纳",
        "content": "如何平静地让孩子与父母合作",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/buhoubujiao-320x450.png"
    },
    {
        "title": "《销售洗脑》",
        "subtitle": "（美）哈里·弗里德曼",
        "content": "把逛街者变成购买者的8条黄金法则",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/xiaoshouxinao-320x450.png"
    },
    {
        "title": "《感官品牌》",
        "subtitle": "（美）马丁·林斯特龙",
        "content": "二流企业造产品，一流企业创品牌",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/ganguanpinpai-320x450.png"
    },
    {
        "title": "《刻意练习》",
        "subtitle": "（美）安德斯·艾利克森",
        "content": "杰出不是一种天赋，而是一种人人都可以学会的技巧",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/keyilianxi-320x450.png"
    },
    {
        "title": "《匠人精神》",
        "subtitle": "（日）秋山利辉",
        "content": "淬炼心性 养成自己 以孝育人的成功实践",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/jiangrenjingshen-320x450.png"
    },
    {
        "title": "《医生的修炼》",
        "subtitle": "（美）阿图·葛文德",
        "content": "在不完美中探索行医的真相",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/yishengdexiulian-320x450.png"
    },
    {
        "title": "《童年的秘密》",
        "subtitle": "（意）蒙台梭利",
        "content": "蒙氏教育经典著作 每一个父母必须了解的童年秘密",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/tongniandemimi-320x450.png"
    },
    {
        "title": "《离经叛道》",
        "subtitle": "（美）亚当·格兰特",
        "content": "不按常理出牌的人如何改变世界",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/ljpd-320x450.png"
    },
    {
        "title": "《销售就是要玩转情商》",
        "subtitle": "（美）科林斯坦利",
        "content": "99%的人都不知道的销售软技巧",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/xsjs-320x450.png"
    },
    {
        "title": "《我想飞进天空》",
        "subtitle": "（日）东田直树",
        "content": "在自闭症者的世界里，理解是最适当的陪伴",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/wxfjtk-320x450.png"
    },
    {
        "title": "《放弃的艺术》",
        "subtitle": "（美）斯特里普 、 （美）伯恩斯坦",
        "content": "对于实现人生目标而言，“放弃”有时比“坚持”更重要",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/fqdys-320x450.png"
    },
    {
        "title": "《翻转课堂的可汗学院》",
        "subtitle": "（美）萨尔曼·可汗",
        "content": "互联时代的教育革命",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/fzkt-320x450.png"
    },
    {
        "title": "《跑步圣经》",
        "subtitle": "（德）赫尔伯特·史迪凡尼",
        "content": "全面提高速度耐力，伴你奔跑一生的教程",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/pbsj-320x450.png"
    },
    {
        "title": "《我战胜了抑郁症》",
        "subtitle": "（澳）格雷姆·考恩",
        "content": "九个抑郁症患者真实感人的自愈故事",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/zzslyyz-320x450.png"
    },
    {
        "title": "《沃顿商学院最受欢迎的谈判课》",
        "subtitle": "（美）斯图尔特·戴蒙德",
        "content": "当你学会了谈判，在生活各方面你都能争取更多",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/wdsxy-320x450.png"
    },
    {
        "title": "《你能写出好故事》",
        "subtitle": "（美）丽萨·克龙",
        "content": "锁定大脑的认知特性，告诉读者如何写出吸引人的故事",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/nnxchgs-320x450.png"
    },
    {
        "title": "《如何说孩子才会听，怎么听孩子才肯说》",
        "subtitle": "（美）阿黛尔·法伯，（美）伊莱恩·玛兹丽施",
        "content": "无论在什么文化环境中，都可以让父母学会用有效、愉快的沟通方式与孩子建立亲子关系",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/rhshzcht-320x450.png"
    },
    {
        "title": "《浪潮式发售》",
        "subtitle": "（美）杰夫·沃克",
        "content": "让你卖什么都秒杀并持续热卖的产品发售方程式",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/lcsfs-320x450.png"
    },
    {
        "title": "《这书能让你戒烟》",
        "subtitle": "（英）亚伦·卡尔",
        "content": "别让烟把你们的幸福烧光了",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/zsnrnjy-320x450.png"
    },
    {
        "title": "《商业的本质》",
        "subtitle": "（美）杰克·韦尔奇，（美）苏茜·韦尔奇",
        "content": "“管理巨匠”杰克·韦尔奇继管理圣经《赢》之后潜心10年，封笔之作",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/sydbz-320x450.png"
    },
    {
        "title": "《养育女孩》",
        "subtitle": "（澳）史蒂夫·比达尔夫",
        "content": "女孩父母需读！培养内心强大女孩的养育指南",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/yyvh-320x450.png"
    },
    {
        "title": "《少即是多》",
        "subtitle": "（日）本田直之",
        "content": "少一些物质占有，多一些精神体验",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/sjsd-320x450.png"
    },
    {
        "title": "《谷物大脑》",
        "subtitle": "（美）戴维·珀尔玛特，（美）克里斯廷·洛伯格",
        "content": "揭开小麦、碳水化合物、糖损害大脑和身体健康的惊人真相",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/gwdn-320x450.png"
    },
    {
        "title": "《人性中的善良天使》",
        "subtitle": "（美）斯蒂芬·平克",
        "content": "有时候，善良虽然不得好报，但还是要坚持善良",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/rxzdslts-320x450.png"
    },
    {
        "title": "《忙碌爸爸也能做好爸爸》",
        "subtitle": "（澳）布鲁斯·罗宾森",
        "content": "他们与你一起分享如何照顾孩子、如何在家庭与工作间找到平衡、如何与妻子互相协助、如何与孩子建立起全新的关系",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/mlbbynzhbb-320x450.png"
    },
    {
        "title": "《轻疗愈》",
        "subtitle": "（美）尼克·奥特纳",
        "content": "15分钟快速减压，实现身心平衡 给自己一个机会 过一个没有“应该”自在的",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/qly-320x450.png"
    },
    {
        "title": "《干法》",
        "subtitle": "（日）稻盛和夫",
        "content": "不能放弃对自我的人生责任”的信念",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/gf-320x450.png"
    },
    {
        "title": "《共享经济》",
        "subtitle": "（美） 罗宾·蔡斯",
        "content": "重构未来商业新模式",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/gxjj-320x450.png"
    },
    {
        "title": "《爱有8种习惯》",
        "subtitle": "（美）艾德·培根",
        "content": "消除不安全感，让生命自由安宁",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/aybzxg-320x450.png"
    },
    {
        "title": "《颠覆性医疗革命》",
        "subtitle": "（匈牙利）赫塔拉·麦斯可",
        "content": "超级计算机在医疗决策中充当关键角色",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/dfxylgm-320x450.png"
    },
    {
        "title": "《关键对话》",
        "subtitle": "（美）科里·帕特森，（美）约瑟夫·格雷尼，（美）罗恩·麦克米兰，（美）艾尔·史威茨勒",
        "content": "如何高效能沟通",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/gjdh-320x450.png"
    },
    {
        "title": "《重新定义公司》",
        "subtitle": "（美） 埃里克·施密特",
        "content": "首次公开谷歌内部的管理与运营方法，全面解密执掌谷歌10余年的内幕故事",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/cxdygs-320x450.jpg"
    },
    {
        "title": "《幸福的婚姻》",
        "subtitle": "（美）约翰·戈特曼",
        "content": "细致入微的访问、真实的夫妻互动实况、客观科学的生理测量，揭开男女长期相处之道",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/xfdhy-320x450.png"
    },
    {
        "title": "《刀锋上的行走》",
        "subtitle": "（中）刘洋",
        "content": "不是旅行，是生活，不是游学，是工作",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/dfsdxz-320x450.png"
    },
    {
        "title": "《基因革命》",
        "subtitle": "（美）沙伦·莫勒姆",
        "content": "跑步牛奶童年经历如何改变我们的基因",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/jygm-320x450.png"
    },
    {
        "title": "《终结拖延症》",
        "subtitle": "（美）威廉·克瑙斯",
        "content": "三管齐下，终结拖延症",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/zjtyz-320x450.png"
    },
    {
        "title": "《一个广告人的自白》",
        "subtitle": "（美）大卫·奥格威",
        "content": "如果一个广告人只知道一个人，那个人应该是奥格威，只知道一本书，那这本书应该是《一个广告人的自白》",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/ygggrdzb-320x450.png"
    },
    {
        "title": "《零边际成本社会》",
        "subtitle": "（美）杰里米·里夫金",
        "content": "一个物联网、合作共赢的新经济时代",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/lbjcb-320x450.jpg"
    },
    {
        "title": "《让孩子远离焦虑》",
        "subtitle": "（美） 塔玛·琼斯基",
        "content": "帮助孩子摆脱不安、害怕与焦虑的心理课",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/rhzyljl-320x450.png"
    },
    {
        "title": "《精神问题有什么可笑的》",
        "subtitle": "（英） 鲁比·怀克丝",
        "content": "你头脑里住着一匹狂野的怪兽，你造吗",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/jswtysmkx-320x450.png"
    },
    {
        "title": "《创业维艰》",
        "subtitle": "（美） 本·霍洛维茨",
        "content": "了解创业过程中的种种苦难与艰辛，会使创业变得理智从容",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/cywj-320x450.png"
    },
    {
        "title": "《创客》",
        "subtitle": "（美）克里斯·安德森",
        "content": "这是一场即将到来的革命，也是一场有可能引领中国产业大变革的革命",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/ck-320x450.png"
    },
    {
        "title": "《巴菲特之道》",
        "subtitle": "（美）罗伯特·哈格斯特朗",
        "content": "将巴菲特思想引进中国的经典图书，认真研读本书的价值不亚于巴菲特的午餐",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/bftzd-320x450.png"
    },
    {
        "title": "《搞定》",
        "subtitle": "（美）戴维·艾伦",
        "content": "解除你精神上的负担，并把事情做好。只有轻松，才能高效",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/gd-320x450.png"
    },
    {
        "title": "《联盟》",
        "subtitle": "（美）里德·霍夫曼， （美）本·卡斯诺查，（美）克里斯·叶",
        "content": "揭秘正在席卷全球的人才大变革",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/lm-320x450.png"
    },
    {
        "title": "《从0到1》",
        "subtitle": "（美）彼得·蒂尔，（美）布莱克·马斯特斯",
        "content": "一位传奇的创投教父，一部开启秘密的商业之作，一部事关所有人的生存哲学",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/cldy-320x450.png"
    },
    {
        "title": "《吸金广告》",
        "subtitle": "（美）德鲁·埃里克·惠特曼",
        "content": "人们到底想要什么",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/xjgg-320x450.png"
    },
    {
        "title": "《怎样才是最好的学习》",
        "subtitle": "（韩）KBS《Homo Academicus》制作团队",
        "content": "学习是人类永恒的主题",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/zycszhdxx-320x450.png"
    },
    {
        "title": "《洗脑术》",
        "subtitle": "（英）多米尼克·斯垂特菲尔德",
        "content": "揭开世界上最隐密的心理操纵术",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/xns-320x450.png"
    },
    {
        "title": "《消除压力，从大脑开始》",
        "subtitle": "（日）有田秀穗",
        "content": "减压之外，另有禅理",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/xcylcdnks-320x450.png"
    },
    {
        "title": "《细节营销》",
        "subtitle": "（荷）柏唯良",
        "content": "市场领先的地位并不取决于市场规模，而是取决于市场界定",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/xjyx-320x450.png"
    },
    {
        "title": "《游戏改变世界》",
        "subtitle": "（美）简麦戈尼格尔",
        "content": "权威揭示了互联时代的未来趋势",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/yxgbsj-320x450.png"
    },
    {
        "title": "《管理十诫》",
        "subtitle": "（美）唐纳德·基奥",
        "content": "可口可乐教父，倾其一生打造的管理圣经",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/glsj-320x450.png"
    },
    {
        "title": "《金钱不能买什么》",
        "subtitle": "（美）迈克尔·桑德尔",
        "content": "金钱与公正的正面交锋",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/jqbnmsm-320x450.png"
    },
    {
        "title": "《孔子，人能弘道》",
        "subtitle": "（美）倪培民",
        "content": "中国哲学研究中的一枝奇葩异卉",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/kzrnhds-320x450.png"
    },
    {
        "title": "《斯坦福大学最受欢迎的创意课》",
        "subtitle": "（美）蒂娜·齐莉格",
        "content": "让我们相信每个人都可以成为创新家",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/stfdxzshycyk-320x450.png"
    },
    {
        "title": "《你就是孩子最好的玩具》",
        "subtitle": "（美）金伯莉·布雷恩",
        "content": "孩子们并不需要智力玩具或者电视节目，他们需要的是你！",
        "cover": "http://www.dushu.io/wp-content/uploads/2017/03/nijiushihaizizuihaodewanju-320x450.png"
    },
    {
        "title": "《幸福的方法》",
        "subtitle": "（美）泰勒·本-沙哈尔",
        "content": "幸福是人类的共同追求",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/xfdff-320x450.png"
    },
    {
        "title": "《高效演讲》",
        "subtitle": "（美）彼得·迈尔斯，（美）尚恩·尼克斯",
        "content": "人人都可以高效沟通",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/gxyj-320x450.png"
    },
    {
        "title": "《大汗之国》",
        "subtitle": "（中）史景迁",
        "content": "从古至今，西方眼中的中国",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/11-320x450.png"
    },
    {
        "title": "《疯传》",
        "subtitle": "（美）Jonah Berger",
        "content": "让你的产品、思想、行为像病毒一样入侵",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/38-320x450.png"
    },
    {
        "title": "《养育男孩》",
        "subtitle": "（澳）史蒂夫·比达尔夫",
        "content": "培养积极、勇敢、有担当的男孩",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/56-320x450.png"
    },
    {
        "title": "《风流去》",
        "subtitle": "（中）鲍鹏山",
        "content": "鲍鹏山眼中的文化人物",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/30-320x450.png"
    },
    {
        "title": "《如何说 孩子才会听 怎么听 孩子才肯说》",
        "subtitle": "（美）阿黛尔 · 法伯、伊莱恩 · 玛兹丽施",
        "content": "让忙碌的父母在最短的时间里学会与孩子亲密相处",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/52-320x450.png"
    },
    {
        "title": "《演讲的力量》",
        "subtitle": "（美）克里斯 · 安德森",
        "content": "如何让公众表达变成影响力",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/yanjiangdeliliang-320x450.png"
    },
    {
        "title": "《非暴力沟通》",
        "subtitle": "（美）卢森堡",
        "content": "打开爱和理解的密码",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/feibaoligoutong-320x450.png"
    },
    {
        "title": "《人类简史》",
        "subtitle": "（以色列）尤瓦尔 · 赫拉利",
        "content": "从动物到上帝",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/renleijianshi-320x450.png"
    },
    {
        "title": "《沃顿商学院最受欢迎的谈判课》",
        "subtitle": "（美）戴蒙德",
        "content": "最高效的谈判秘籍",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/wodunshangxueyuanzuishouhuanyingdetpk-320x450.png"
    },
    {
        "title": "《你的生存本能正在杀死你》",
        "subtitle": "马克舍恩、克里斯丁洛贝格",
        "content": "为什么你容易焦虑、不安、恐慌和被激怒？",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/nideshengcunbennengzhengzaishasini-320x450.png"
    },
    {
        "title": "《梁漱溟先生讲孔孟》",
        "subtitle": "（中）梁漱溟",
        "content": "圣贤严重的真正生活哲学",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/lianagshumingxianshengjiangkongmeng-320x450.png"
    },
    {
        "title": "《你要如何衡量你的人生》",
        "subtitle": "（美）克莱顿 · 克里斯坦森",
        "content": "给哈佛商学院毕业生最重要的一堂课",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/niyaoruhehengliangniderensheng-320x450.png"
    },
    {
        "title": "《爆款》",
        "subtitle": "（美）安妮塔艾尔伯斯",
        "content": "如何打造超级IP",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/baokuan-320x450.png"
    },
    {
        "title": "《翻转式学习》",
        "subtitle": "拉塞尔 · L · 阿克夫 丹尼尔 · 格林伯格",
        "content": "21世纪学习的革命",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/fanzhuanshixuexi-320x450.png"
    },
    {
        "title": "《情绪急救》",
        "subtitle": "（美）盖伊 · 温奇博士",
        "content": "应对各种日常心里伤害的策略与方法",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/qingxujijiu-320x450.png"
    },
    {
        "title": "《哈佛商学院最受欢迎的领导课》",
        "subtitle": "（美）罗伯特 · 史蒂文 · 卡普兰",
        "content": "宏观层面的领导力",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/hafoshangxueyuanzuishouhuanyingdelingdaoke-320x450.png"
    },
    {
        "title": "《最好的告别》",
        "subtitle": "（美）阿图葛文德",
        "content": "关于衰老与死亡，你必须知道的常识",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/zuihaodegaobie-320x450.png"
    },
    {
        "title": "《孔子如来》",
        "subtitle": "（中）鲍鹏山",
        "content": "印证孔子智慧 传递正知正见",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/kongzirulai-320x450.jpg"
    },
    {
        "title": "《解压全书：压力管理》",
        "subtitle": "（美）伊夫 · 阿达姆松",
        "content": "生活还有希望吗？",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/jieyaquanshu-1-320x450.png"
    },
    {
        "title": "《母爱的羁绊》",
        "subtitle": "（美）麦克布莱德",
        "content": "让母爱回归到爱最初的样子",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/muaidejiban-320x450.png"
    },
    {
        "title": "《视觉锤》",
        "subtitle": "（美）里斯",
        "content": "视觉时代的定位之道",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/shijuechui-320x450.png"
    },
    {
        "title": "《如何培养孩子的社会能力》",
        "subtitle": "（美） 舒尔、迪吉若尼",
        "content": "教孩子学会解决冲突和与人相处的技巧",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/ruhrpeiyanghaizideshehuinengli-320x450.png"
    },
    {
        "title": "《我的情绪为何总被他人左右》",
        "subtitle": "（美）阿尔伯特 · 埃利斯",
        "content": "理性情绪行为疗法",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/wodeqingxuweihezuibeitarenzuoyou-320x450.png"
    },
    {
        "title": "《谁说商业直觉是天生的》",
        "subtitle": "（美）帕特奈克、莫特森",
        "content": "直觉是解决问题的最快方法",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/shuishuoshangyezhijueshitianshengde-320x450.png"
    },
    {
        "title": "《让顾客自己来定价》",
        "subtitle": "（美）贾格莫汉 · 拉古",
        "content": "世界盈利公司的创新定价策略",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/ranggukezijilaidingjia-320x450.png"
    },
    {
        "title": "《瞬变》",
        "subtitle": "（美）希思",
        "content": "让改变轻松起来的九个方法",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/shunbian-320x450.png"
    },
    {
        "title": "《高绩效教练》",
        "subtitle": "（英）惠特默",
        "content": "领导领域首屈一指的畅销书",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/00002-gaojixiaojiaolian-320x450.png"
    },
    {
        "title": "《支付战争》",
        "subtitle": "（美）杰克逊",
        "content": "互联网金融创世纪",
        "cover": "http://www.dushu.io/wp-content/uploads/2016/03/00003-zhifuzhanzheng--320x450.png"
    },
];

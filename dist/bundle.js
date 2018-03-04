!function(s){var c={};function e(d){if(c[d])return c[d].exports;var o=c[d]={i:d,l:!1,exports:{}};return s[d].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=s,e.c=c,e.d=function(s,c,d){e.o(s,c)||Object.defineProperty(s,c,{configurable:!1,enumerable:!0,get:d})},e.r=function(s){Object.defineProperty(s,"__esModule",{value:!0})},e.n=function(s){var c=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(c,"a",c),c},e.o=function(s,c){return Object.prototype.hasOwnProperty.call(s,c)},e.p="",e(e.s=0)}([function(s,c,e){"use strict";e.r(c);class d{constructor(s){this.refPageMgr=s,this.dom=document.getElementById("nav"),this.dom.querySelector(".nav-btn-left").addEventListener("click",s=>this.refPageMgr.moveBack()),this.dom.querySelector(".nav-btn-right").addEventListener("click",s=>this.refPageMgr.moveTo("home")),this.title=this.dom.querySelector(".nav-title")}setTitle(s){this.title.innerText=s}show(){return this.dom.classList.remove("hide"),this}hide(){return this.dom.classList+=" hide",this}}class o{constructor(s){this.refPageMgr=s}setInstance(s){this.instance=s}getInstance(){return this.instance}init(){}render(){}componentWillMount(){}componentDidMount(){}}const i={addControlButton(s,c,e){let d=document.createElement("li");return d.innerText=c,d.addEventListener("click",s=>{s.preventDefault(),e(s)}),s.appendChild(d),d},addCollectionButton(s,c,e,d,o){let i=document.createElement("p");i.innerText=c,i.classList.add("label");let a=document.createElement("p");a.innerText=e,a.classList.add("sub-label");let t=document.createElement("img");t.src=d;let n=document.createElement("li");return n.appendChild(t),n.appendChild(i),n.appendChild(a),n.addEventListener("click",s=>{s.preventDefault(),o(s)}),s.appendChild(n),n}};var a=function(...s){class c extends o{}for(const e of s)c.prototype[e]=i[e];return c}("addControlButton","addCollectionButton");class t extends a{constructor(s){super(s)}init(){let s=this.refPageMgr.pageId(),c=this.instance.querySelector("ul");this.addControlButton(c,"Flashcard",()=>this.refPageMgr.moveTo(s.FC_COLLECTION)),this.addControlButton(c,"My Board",()=>this.refPageMgr.moveTo("myboard")),this.addControlButton(c,"Search",()=>this.refPageMgr.moveTo("search")),this.addControlButton(c,"Author",()=>this.refPageMgr.moveTo("author"))}componentWillMount(){this.refPageMgr.hideNav()}}class n{constructor(){this.flashcard=[{name:"Animal",groups:[{name:"Bird",voca:[124,125,126,127],id:0},{name:"In the water",voca:[121,122,123],id:1},{name:"On the land",voca:[119,120],id:2},{name:"Others",voca:[128,129,130],id:3},{name:"Zodiac",voca:[107,108,109,110,111,112,113,114,115,116,117,118],id:4}],id:0,totalVoca:24},{name:"Clothes",groups:[{name:"Body",voca:[],id:0},{name:"Feet",voca:[],id:1},{name:"Hand",voca:[4],id:2},{name:"Head",voca:[2,3],id:3},{name:"Others",voca:[5,6,7],id:4}],id:1,totalVoca:6},{name:"Food",groups:[{name:"Dairy",voca:[90,91,92,93],id:0},{name:"Fruits",voca:[74,75,76,77,78,79,80,81,82,83,84],id:1},{name:"Grains",voca:[94,95,96,97,98],id:2},{name:"Oils",voca:[99,100],id:3},{name:"Others",voca:[101,102],id:4},{name:"Protein",voca:[89],id:5},{name:"Transportation",voca:[85,86,87,88],id:6},{name:"Vegetables",voca:[],id:7}],id:2,totalVoca:29},{name:"Frequently-used",groups:[{name:"Clothing and color",voca:[423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446],id:0},{name:"Basic",voca:[131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191],id:1},{name:"Cardinal and ordianl numbers",voca:[192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216],id:2},{name:"Date and time",voca:[217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248],id:3},{name:"Education",voca:[511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542],id:4},{name:"Family",voca:[447,448,449,450,451,452,453,454,455,456,457,458,459,460],id:5},{name:"Food and fruits",voca:[275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335],id:6},{name:"House",voca:[470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510],id:7},{name:"Human body and sense",voca:[336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422],id:8},{name:"Measure and size",voca:[249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274],id:9},{name:"Sport and entertainment",voca:[543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578],id:10},{name:"Weather",voca:[461,462,463,464,465,466,467,468,469],id:11}],id:3,totalVoca:448},{name:"House",groups:[{name:"Balcony items",voca:[72],id:0},{name:"Bathroom items",voca:[67],id:1},{name:"Bedroom items",voca:[49,50,51,52,53,54],id:2},{name:"Building",voca:[73],id:3},{name:"Componenets",voca:[46,47,48],id:4},{name:"Dining room items",voca:[65,66],id:5},{name:"Kitchen items",voca:[58,59,60,61,62,63,64],id:6},{name:"Living room items",voca:[55,56,57],id:7},{name:"Room",voca:[39,40,41,42,43,44,45],id:8},{name:"Work room items",voca:[68,69,70,71],id:9}],id:4,totalVoca:35},{name:"Occupation",groups:[{name:"Artist",voca:[21,22,23,24],id:0},{name:"Company",voca:[14,15,16,17,18,19,20],id:1},{name:"Government",voca:[12,13],id:2},{name:"Hospital",voca:[10,11],id:3},{name:"Others",voca:[32,33,34,35,36,37,38],id:4},{name:"Professional",voca:[28,29,30,31],id:5},{name:"School",voca:[8,9],id:6},{name:"Transportation",voca:[25,26,27],id:7}],id:5,totalVoca:31},{name:"Others",groups:[{name:"New",voca:[0],id:0},{name:"Preposition",voca:[1],id:1}],id:6,totalVoca:2},{name:"Transportation",groups:[{name:"bus",voca:[103,104,105,106],id:0}],id:7,totalVoca:4},{name:"Weather",groups:[],id:8,totalVoca:0}],this.vocaDict={0:{id:0,voca:"công viên",desc:"park",s:0},1:{id:1,voca:"với",desc:"with",s:0},2:{id:2,voca:"cái kính",desc:"glasses",s:0},3:{id:3,voca:"cái mũ",desc:"hat",s:1},4:{id:4,voca:"cái đồng hồ",desc:"clock",s:0},5:{id:5,voca:"cái đồng hồ",desc:"clock",s:0},6:{id:6,voca:"cái đồng hồ treo tương",desc:"analogue clock, 掛鐘",s:1},7:{id:7,voca:"cái đồng hồ deo tay",desc:"watch, 手錶",s:1},8:{id:8,voca:"giáo viên",desc:"teacher",s:1},9:{id:9,voca:"sinh viên",desc:"student",s:0},10:{id:10,voca:"bác sĩ",desc:"doctor",s:1},11:{id:11,voca:"y tá",desc:"nurse",s:0},12:{id:12,voca:"cảnh sát",desc:"cop",s:1},13:{id:13,voca:"công an",desc:"police",s:0},14:{id:14,voca:"giám đốc",desc:"manager",s:0},15:{id:15,voca:"thư ký",desc:"secretary",s:0},16:{id:16,voca:"kế toán",desc:"accountant",s:0},17:{id:17,voca:"công nhân",desc:"worker",s:0},18:{id:18,voca:"nhân viên",desc:"employee",s:0},19:{id:19,voca:"sếp",desc:"boss",s:1},20:{id:20,voca:"đồng nghiệp",desc:"coworker",s:0},21:{id:21,voca:"hoạ sĩ",desc:"painter",s:0},22:{id:22,voca:"ca sĩ",desc:"singer",s:0},23:{id:23,voca:"nhạc sĩ",desc:"musician",s:1},24:{id:24,voca:"điễn viên",desc:"actor",s:1},25:{id:25,voca:"phi công",desc:"pilot",s:1},26:{id:26,voca:"tiếp viên hàng không",desc:"flight attendant",s:1},27:{id:27,voca:"lái xe",desc:"driver",s:0},28:{id:28,voca:"kỹ sư",desc:"engineer",s:0},29:{id:29,voca:"kiến trúc sư",desc:"architect",s:0},30:{id:30,voca:"luật sư",desc:"lawyer",s:0},31:{id:31,voca:"lập trình viên",desc:"programmer",s:1},32:{id:32,voca:"nông dân",desc:"farmer",s:0},33:{id:33,voca:"nhà báo",desc:"journalist",s:0},34:{id:34,voca:"nội trợ",desc:"housewife",s:1},35:{id:35,voca:"biên tập viên",desc:"editor",s:1},36:{id:36,voca:"thương gia",desc:"trader",s:0},37:{id:37,voca:"thương nhân",desc:"businessman",s:0},38:{id:38,voca:"nhà tạo mẫu móng tay",desc:"nail designer",s:1},39:{id:39,voca:"phòng ngủ",desc:"bedroom",s:0},40:{id:40,voca:"phòng khách",desc:"living room",s:0},41:{id:41,voca:"phòng bếp",desc:"kitchen",s:0},42:{id:42,voca:"phòng ăn",desc:"dining room",s:0},43:{id:43,voca:"phòng làm việc",desc:"work room",s:0},44:{id:44,voca:"phòng tắm",desc:"bathroom",s:0},45:{id:45,voca:"phòng vệ sinh\nnhà vệ sinh",desc:"toilet",s:0},46:{id:46,voca:"ban công",desc:"balcony",s:0},47:{id:47,voca:"cửa",desc:"door",s:1},48:{id:48,voca:"cửa ra vào",desc:"entry",s:1},49:{id:49,voca:"giường",desc:"bed",s:1},50:{id:50,voca:"đèn ngủ",desc:"lamp",s:1},51:{id:51,voca:"quạt",desc:"fan",s:1},52:{id:52,voca:"tủ quần áo",desc:"wardrobe",s:1},53:{id:53,voca:"điều hòa nhiệt độ",desc:"air conditioner",s:1},54:{id:54,voca:"gương",desc:"mirror",s:1},55:{id:55,voca:"cái ghế sô pha",desc:"sofa",s:0},56:{id:56,voca:"cái tivi",desc:"TV",s:0},57:{id:57,voca:"cái lọ hoa",desc:"vase,  花瓶",s:0},58:{id:58,voca:"cái nồi",desc:"cooking pot",s:0},59:{id:59,voca:"cái tủ bếp",desc:"kitchen cabinet",s:0},60:{id:60,voca:"cái bếp ga",desc:"gas stove",s:1},61:{id:61,voca:"cái bếp từ",desc:"electric stove",s:1},62:{id:62,voca:"cái đĩa",desc:"plate",s:1},63:{id:63,voca:"cái bát",desc:"bowl",s:1},64:{id:64,voca:"cái tủ lạnh",desc:"fridge, refrigerator",s:1},65:{id:65,voca:"cái bàn",desc:"table",s:0},66:{id:66,voca:"cái ghế",desc:"chair",s:0},67:{id:67,voca:"toa lét",desc:"toilet",s:0},68:{id:68,voca:"máy vi tính",desc:"computer",s:0},69:{id:69,voca:"quả địa cầu",desc:"globe, 地球儀",s:1},70:{id:70,voca:"tủ sách",desc:"bookcase",s:0},71:{id:71,voca:"giá sách",desc:"bookshelves",s:1},72:{id:72,voca:"máy giặt",desc:"washing machine",s:1},73:{id:73,voca:"đền",desc:"temple",s:0},74:{id:74,voca:"quả xoài",desc:"mango",s:1},75:{id:75,voca:"quả chuối",desc:"banana",s:1},76:{id:76,voca:"quả cam",desc:"orange",s:0},77:{id:77,voca:"quả táo",desc:"apple",s:0},78:{id:78,voca:"quả dưa",desc:"melon",s:0},79:{id:79,voca:"quả dưa hấu",desc:"watermelon",s:0},80:{id:80,voca:"quả dưa chuột",desc:"cucumber",s:1},81:{id:81,voca:"quả dứa",desc:"pineapple",s:0},82:{id:82,voca:"quả dừa",desc:"coconut",s:0},83:{id:83,voca:"quả thanh long",desc:"dragon fruit",s:1},84:{id:84,voca:"quả cà chua",desc:"tomato",s:1},85:{id:85,voca:"củ cà rốt",desc:"carrot",s:1},86:{id:86,voca:"củ gừng",desc:"ginger",s:1},87:{id:87,voca:"củ khoai tây",desc:"potato",s:1},88:{id:88,voca:"củ khoai lang",desc:"sweet potato",s:1},89:{id:89,voca:"quả trứng",desc:"eggs",s:1},90:{id:90,voca:"sữa",desc:"milk",s:1},91:{id:91,voca:"sữa chua",desc:"yogurt",s:1},92:{id:92,voca:"phô mai",desc:"cheese",s:1},93:{id:93,voca:"kem",desc:"ice cream",s:1},94:{id:94,voca:"cơm",desc:"cooked rice",s:0},95:{id:95,voca:"gạo",desc:"rice",s:1},96:{id:96,voca:"lúa mì",desc:"wheat, 小麥",s:1},97:{id:97,voca:"lúa mạch",desc:"barley, 大麥",s:1},98:{id:98,voca:"ngô",desc:"corn",s:1},99:{id:99,voca:"dầu",desc:"oil",s:1},100:{id:100,voca:"ôliu",desc:"olive, 橄欖",s:1},101:{id:101,voca:"xôi",desc:"sticky rice",s:1},102:{id:102,voca:"giăm bông",desc:"ham",s:1},103:{id:103,voca:"cửa xuống",desc:"door down",s:1},104:{id:104,voca:"điểm dừng xe buýt",desc:"bus stop",s:1},105:{id:105,voca:"bến xe khách",desc:"bus station",s:1},106:{id:106,voca:"cửa thoát khẩn cấp",desc:"emergency exit",s:1},107:{id:107,voca:"con chuột",desc:"rat",s:1},108:{id:108,voca:"con trâu",desc:"baffalo",s:1},109:{id:109,voca:"con hổ",desc:"tiger",s:1},110:{id:110,voca:"con mèo",desc:"cat",s:1},111:{id:111,voca:"con rồng",desc:"dragon",s:1},112:{id:112,voca:"con rắn",desc:"snake",s:1},113:{id:113,voca:"con ngựa",desc:"horse",s:1},114:{id:114,voca:"con dê",desc:"goat",s:1},115:{id:115,voca:"con khỉ",desc:"monkey",s:1},116:{id:116,voca:"con gà trống",desc:"rooster",s:1},117:{id:117,voca:"con chó",desc:"dog",s:1},118:{id:118,voca:"con lợn",desc:"pig",s:1},119:{id:119,voca:"con bò",desc:"cow",s:1},120:{id:120,voca:"con voi",desc:"elephant",s:1},121:{id:121,voca:"con cá",desc:"fish",s:0},122:{id:122,voca:"con tôm",desc:"shrimp",s:0},123:{id:123,voca:"con cá heo",desc:"dolphin",s:1},124:{id:124,voca:"con chim",desc:"bird",s:0},125:{id:125,voca:"con vịt",desc:"duck",s:1},126:{id:126,voca:"con gà trống",desc:"rooster, 公雞",s:1},127:{id:127,voca:"con gà mái",desc:"hen, 母雞",s:1},128:{id:128,voca:"con nhện",desc:"spider",s:1},129:{id:129,voca:"con gián",desc:"cockroach",s:1},130:{id:130,voca:"con thạch sùng",desc:"gecko, 壁虎",s:1},131:{id:131,voca:"ai",desc:"who",s:1},132:{id:132,voca:"an toàn",desc:"safe",s:1},133:{id:133,voca:"anh",desc:"brother/you",s:1},134:{id:134,voca:"ăn mừng",desc:"to celebrate",s:1},135:{id:135,voca:"biết",desc:"to know",s:1},136:{id:136,voca:"cái nào",desc:"which",s:1},137:{id:137,voca:"cảm ơn",desc:"to thank",s:1},138:{id:138,voca:"câu hỏi",desc:"question",s:1},139:{id:139,voca:"cấp cứu",desc:"emergency",s:1},140:{id:140,voca:"chào",desc:"to greet",s:1},141:{id:141,voca:"cho",desc:"to give",s:1},142:{id:142,voca:"chợ",desc:"market",s:1},143:{id:143,voca:"chúng tôi",desc:"we, us",s:0},144:{id:144,voca:"chữ",desc:"word; leter",s:1},145:{id:145,voca:"có",desc:"to have",s:1},146:{id:146,voca:"cô",desc:"Miss, aunt",s:1},147:{id:147,voca:"cô/bà ấy",desc:"she/her",s:0},148:{id:148,voca:"công việc",desc:"job, work",s:1},149:{id:149,voca:"dạ",desc:"yes",s:1},150:{id:150,voca:"dân",desc:"people",s:1},151:{id:151,voca:"dùng",desc:"to use",s:1},152:{id:152,voca:"đằng kia",desc:"there/that",s:1},153:{id:153,voca:"đâu",desc:"where",s:1},154:{id:154,voca:"đây",desc:"here/this",s:1},155:{id:155,voca:"đem",desc:"to bring, to carry",s:1},156:{id:156,voca:"đến",desc:"to come/arrive",s:1},157:{id:157,voca:"đều",desc:"same",s:1},158:{id:158,voca:"điện thư",desc:"email",s:1},159:{id:159,voca:"đón chào",desc:"to welcome, to greet",s:1},160:{id:160,voca:"đời",desc:"life",s:1},161:{id:161,voca:"đợi",desc:"to wait",s:1},162:{id:162,voca:"gặp",desc:"to meet",s:1},163:{id:163,voca:"gì",desc:"what",s:1},164:{id:164,voca:"giới thiệu",desc:"to introduce",s:1},165:{id:165,voca:"giữ",desc:"to keep, to hold",s:1},166:{id:166,voca:"gọi",desc:"to call",s:1},167:{id:167,voca:"gởi",desc:"to send",s:1},168:{id:168,voca:"hỏi",desc:"to ask",s:1},169:{id:169,voca:"kia",desc:"that, there",s:1},170:{id:170,voca:"khách hàng",desc:"customer, client",s:1},171:{id:171,voca:"khẩn cấp",desc:"urgent, emergency",s:1},172:{id:172,voca:"không",desc:"no, not",s:1},173:{id:173,voca:"ký",desc:"to sign",s:1},174:{id:174,voca:"lái",desc:"to drive",s:1},175:{id:175,voca:"làm",desc:"to do/make",s:1},176:{id:176,voca:"làm việc",desc:"to work",s:1},177:{id:177,voca:"là",desc:"to be",s:1},178:{id:178,voca:"lửa",desc:"fire",s:1},179:{id:179,voca:"mời",desc:"to invite",s:1},180:{id:180,voca:"mượn",desc:"to borrow",s:1},181:{id:181,voca:"ông",desc:"you/Mr./Sir",s:1},182:{id:182,voca:"ông ấy",desc:"he/him/his",s:1},183:{id:183,voca:"phải",desc:"right, correct",s:1},184:{id:184,voca:"quà",desc:"gift/present",s:1},185:{id:185,voca:"tại sao",desc:"why",s:1},186:{id:186,voca:"tem",desc:"stamp",s:1},187:{id:187,voca:"thế nào",desc:"how",s:1},188:{id:188,voca:"trả lời",desc:"to answer, to apply",s:1},189:{id:189,voca:"vì",desc:"because",s:1},190:{id:190,voca:"vui lòng",desc:"please, to be pleased",s:1},191:{id:191,voca:"xin lỗi",desc:"to apologize; Excuse me",s:1},192:{id:192,voca:"đếm",desc:"to count",s:1},193:{id:193,voca:"một",desc:"one",s:1},194:{id:194,voca:"hai",desc:"two",s:1},195:{id:195,voca:"ba",desc:"three",s:1},196:{id:196,voca:"bốn",desc:"four",s:1},197:{id:197,voca:"năm",desc:"five",s:1},198:{id:198,voca:"sáu",desc:"six",s:1},199:{id:199,voca:"bảy",desc:"seven",s:1},200:{id:200,voca:"tám",desc:"eight",s:1},201:{id:201,voca:"chín",desc:"nine",s:1},202:{id:202,voca:"mười",desc:"ten",s:1},203:{id:203,voca:"trăm",desc:"hundred",s:1},204:{id:204,voca:"nghìn",desc:"thousand",s:1},205:{id:205,voca:"triệu",desc:"million",s:1},206:{id:206,voca:"tiền",desc:"money",s:1},207:{id:207,voca:"đồng",desc:"piaster; similar, same",s:1},208:{id:208,voca:"đô-la",desc:"dollar",s:1},209:{id:209,voca:"số",desc:"number",s:1},210:{id:210,voca:"thứ nhất",desc:"first",s:1},211:{id:211,voca:"thứ Hai",desc:"Monday",s:1},212:{id:212,voca:"thứ Ba",desc:"Tuesday",s:1},213:{id:213,voca:"thứ Bốn",desc:"Wedensday",s:1},214:{id:214,voca:"thứ Năm",desc:"Thursday",s:1},215:{id:215,voca:"thứ Sáu",desc:"Friday",s:1},216:{id:216,voca:"thứ Bảy",desc:"Saturday",s:1},217:{id:217,voca:"buổi tối",desc:"evening",s:1},218:{id:218,voca:"chiều",desc:"afternoon",s:1},219:{id:219,voca:"chủ nhật",desc:"Sunday",s:1},220:{id:220,voca:"đêm",desc:"night",s:1},221:{id:221,voca:"đồng hồ",desc:"clock, watch",s:1},222:{id:222,voca:"giờ",desc:"hour",s:1},223:{id:223,voca:"phút",desc:"minute",s:1},224:{id:224,voca:"giây",desc:"second (time)",s:1},225:{id:225,voca:"khi nào",desc:"when",s:1},226:{id:226,voca:"năm",desc:"year",s:1},227:{id:227,voca:"ngày lễ",desc:"holiday",s:1},228:{id:228,voca:"ngày tháng",desc:"date",s:1},229:{id:229,voca:"sáng",desc:"morning",s:1},230:{id:230,voca:"tháng",desc:"month",s:1},231:{id:231,voca:"Tháng Một",desc:"January",s:1},232:{id:232,voca:"Tháng Hai",desc:"Fabruary",s:1},233:{id:233,voca:"Tháng Ba",desc:"March",s:1},234:{id:234,voca:"Tháng Bốn",desc:"April",s:1},235:{id:235,voca:"Tháng Năm",desc:"May",s:1},236:{id:236,voca:"Tháng Sáu",desc:"June",s:1},237:{id:237,voca:"Tháng Bảy",desc:"July",s:1},238:{id:238,voca:"Tháng Tám",desc:"August",s:1},239:{id:239,voca:"Tháng Chín",desc:"September",s:1},240:{id:240,voca:"Tháng Mười",desc:"October",s:1},241:{id:241,voca:"Tháng Mười Một",desc:"November",s:1},242:{id:242,voca:"Tháng Mười Hai",desc:"December",s:1},243:{id:243,voca:"thì giờ",desc:"time",s:1},244:{id:244,voca:"thời tiết",desc:"weather",s:1},245:{id:245,voca:"tối",desc:"dark",s:1},246:{id:246,voca:"trễ",desc:"late",s:1},247:{id:247,voca:"trưa",desc:"noon",s:1},248:{id:248,voca:"tuần",desc:"week",s:1},249:{id:249,voca:"cao",desc:"high/tall",s:1},250:{id:250,voca:"cân",desc:"weigh, scale, kilogram",s:1},251:{id:251,voca:"cở",desc:"size",s:1},252:{id:252,voca:"dài",desc:"long; length",s:1},253:{id:253,voca:"dày",desc:"thick, dense",s:1},254:{id:254,voca:"dặm",desc:"mile",s:1},255:{id:255,voca:"dưới",desc:"under, below",s:1},256:{id:256,voca:"đo",desc:"to measure",s:1},257:{id:257,voca:"đúng",desc:"correct/right",s:1},258:{id:258,voca:"gam",desc:"gram",s:1},259:{id:259,voca:"gầy",desc:"thin",s:1},260:{id:260,voca:"ki-lô",desc:"kilogram",s:1},261:{id:261,voca:"ki-lô mết",desc:"kilometer",s:1},262:{id:262,voca:"lít",desc:"liter",s:1},263:{id:263,voca:"lớn",desc:"large, big",s:1},264:{id:264,voca:"mập",desc:"fat",s:1},265:{id:265,voca:"mét",desc:"meter",s:1},266:{id:266,voca:"nặng",desc:"heavy",s:1},267:{id:267,voca:"ngắn",desc:"short",s:1},268:{id:268,voca:"nhẹ",desc:"light",s:1},269:{id:269,voca:"nhiều",desc:"many/much",s:1},270:{id:270,voca:"nhỏ",desc:"small",s:1},271:{id:271,voca:"nửa",desc:"half",s:1},272:{id:272,voca:"sai",desc:"ưởng, incorrect",s:1},273:{id:273,voca:"thẳng",desc:"straight",s:1},274:{id:274,voca:"tròn",desc:"round",s:1},275:{id:275,voca:"ăn",desc:"to eat",s:1},276:{id:276,voca:"bán",desc:"to sell",s:1},277:{id:277,voca:"bánh",desc:"cake",s:1},278:{id:278,voca:"bánh mì",desc:"bread",s:1},279:{id:279,voca:"bia",desc:"beer",s:1},280:{id:280,voca:"bột",desc:"flour",s:1},281:{id:281,voca:"bơ",desc:"butter",s:1},282:{id:282,voca:"bữa ăn",desc:"meal",s:1},283:{id:283,voca:"cam",desc:"orange",s:1},284:{id:284,voca:"cá",desc:"fish",s:1},285:{id:285,voca:"cà chua",desc:"tomato",s:1},286:{id:286,voca:"cà phê",desc:"coffee",s:1},287:{id:287,voca:"cây",desc:"tree, plant",s:1},288:{id:288,voca:"chai",desc:"bottle",s:1},289:{id:289,voca:"chanh",desc:"lemon",s:1},290:{id:290,voca:"chuối",desc:"banana",s:1},291:{id:291,voca:"dao",desc:"knife",s:1},292:{id:292,voca:"dĩa",desc:"dish/plate",s:1},293:{id:293,voca:"dơ",desc:"dirty",s:1},294:{id:294,voca:"dưa",desc:"melon",s:1},295:{id:295,voca:"đắt",desc:"expensive",s:1},296:{id:296,voca:"đặt hàng",desc:"to order",s:1},297:{id:297,voca:"động vật",desc:"animal",s:1},298:{id:298,voca:"đường",desc:"sugar",s:1},299:{id:299,voca:"gạo",desc:"rice",s:1},300:{id:300,voca:"giá",desc:"price; to cost",s:1},301:{id:301,voca:"giao",desc:"to deliver",s:1},302:{id:302,voca:"hàng",desc:"goods",s:1},303:{id:303,voca:"heo",desc:"pig",s:1},304:{id:304,voca:"hộp",desc:"box, can",s:1},305:{id:305,voca:"kem",desc:"cream",s:1},306:{id:306,voca:"kẹo",desc:"candy",s:1},307:{id:307,voca:"khoai tây",desc:"potato",s:1},308:{id:308,voca:"mì",desc:"noodle",s:1},309:{id:309,voca:"mua",desc:"to buy",s:1},310:{id:310,voca:"muối",desc:"salt",s:1},311:{id:311,voca:"nấu",desc:"to cook",s:1},312:{id:312,voca:"nem",desc:"spring roll",s:1},313:{id:313,voca:"ngon",desc:"delicious/nice",s:1},314:{id:314,voca:"ngọt",desc:"sweet",s:1},315:{id:315,voca:"nho",desc:"grape",s:1},316:{id:316,voca:"nước",desc:"water",s:1},317:{id:317,voca:"nước đá",desc:"ice",s:1},318:{id:318,voca:"phở",desc:"Vietnamese beef/chicken noodle",s:1},319:{id:319,voca:"rau",desc:"vegetable",s:1},320:{id:320,voca:"rẻ",desc:"cheap",s:1},321:{id:321,voca:"rượu",desc:"wine/alcohol",s:1},322:{id:322,voca:"sữa",desc:"milk",s:1},323:{id:323,voca:"tách",desc:"cup",s:1},324:{id:324,voca:"táo",desc:"apple",s:1},325:{id:325,voca:"tiệm",desc:"shop",s:1},326:{id:326,voca:"tiệm ăn",desc:"restaurant",s:1},327:{id:327,voca:"thịt",desc:"meat",s:1},328:{id:328,voca:"thực phẩm",desc:"food",s:1},329:{id:329,voca:"trà",desc:"tea",s:1},330:{id:330,voca:"trả",desc:"to pay",s:1},331:{id:331,voca:"trái cây",desc:"fruit",s:1},332:{id:332,voca:"trao đổi",desc:"to exchange",s:1},333:{id:333,voca:"trứng",desc:"egg",s:1},334:{id:334,voca:"uống",desc:"to drink",s:1},335:{id:335,voca:"vịt",desc:"duck",s:1},336:{id:336,voca:"bao tử",desc:"stomach",s:1},337:{id:337,voca:"bác sĩ",desc:"doctor",s:1},338:{id:338,voca:"chân",desc:"foot",s:1},339:{id:339,voca:"tay",desc:"hand",s:1},340:{id:340,voca:"bắt",desc:"to catch",s:1},341:{id:341,voca:"bận",desc:"busy",s:1},342:{id:342,voca:"bé (nhỏ)",desc:"little/small",s:1},343:{id:343,voca:"bệnh",desc:"sick",s:1},344:{id:344,voca:"bệnh viện",desc:"hospital",s:1},345:{id:345,voca:"bụng",desc:"belly",s:1},346:{id:346,voca:"buồn",desc:"sad",s:1},347:{id:347,voca:"cảm thấy",desc:"to feel",s:1},348:{id:348,voca:"cắt",desc:"to cut",s:1},349:{id:349,voca:"cha",desc:"father",s:1},350:{id:350,voca:"chán",desc:"bored",s:1},351:{id:351,voca:"thật",desc:"true ",s:1},352:{id:352,voca:"chậm",desc:"slow",s:1},353:{id:353,voca:"chết",desc:"to die",s:1},354:{id:354,voca:"chị",desc:"sister",s:1},355:{id:355,voca:"chó",desc:"dog",s:1},356:{id:356,voca:"chồng",desc:"husband",s:1},357:{id:357,voca:"gắng",desc:"to try",s:1},358:{id:358,voca:"cổ",desc:"neck",s:1},359:{id:359,voca:"cũ",desc:"old",s:1},360:{id:360,voca:"cứng",desc:"hard",s:1},361:{id:361,voca:"cười",desc:"laugh/smile",s:1},362:{id:362,voca:"da",desc:"skin",s:1},363:{id:363,voca:"đá",desc:"to kick",s:1},364:{id:364,voca:"đánh",desc:"to hit",s:1},365:{id:365,voca:"đàn ông",desc:"man",s:1},366:{id:366,voca:"đàn bà",desc:"woman",s:1},367:{id:367,voca:"đau",desc:"pain",s:1},368:{id:368,voca:"đầu",desc:"head",s:1},369:{id:369,voca:"đi",desc:"to go",s:1},370:{id:370,voca:"đói",desc:"hungry",s:1},371:{id:371,voca:"đốt",desc:"to burn, to light",s:1},372:{id:372,voca:"đứng",desc:"to stand",s:1},373:{id:373,voca:"hạnh phúc",desc:"happy",s:1},374:{id:374,voca:"hôn",desc:"to kiss",s:1},375:{id:375,voca:"khát",desc:"thirsty",s:1},376:{id:376,voca:"khóc",desc:"to cry",s:1},377:{id:377,voca:"khoẻ",desc:"well/healthy",s:1},378:{id:378,voca:"lập lại",desc:"to repeat",s:1},379:{id:379,voca:"lấy",desc:"to take",s:1},380:{id:380,voca:"lo",desc:"to worry",s:1},381:{id:381,voca:"lỗi",desc:"mistake, error",s:1},382:{id:382,voca:"lưng",desc:"back",s:1},383:{id:383,voca:"lưỡi",desc:"tongue",s:1},384:{id:384,voca:"mang",desc:"to bring, to carry",s:1},385:{id:385,voca:"máu",desc:"blood",s:1},386:{id:386,voca:"may",desc:"lucky",s:1},387:{id:387,voca:"mắt",desc:"eye",s:1},388:{id:388,voca:"mặt",desc:"face",s:1},389:{id:389,voca:"mệt",desc:"tired",s:1},390:{id:390,voca:"miệng",desc:"mouth",s:1},391:{id:391,voca:"mũi",desc:"nose, point",s:1},392:{id:392,voca:"nằm",desc:"to lie",s:1},393:{id:393,voca:"nghe",desc:"to hear, to listen",s:1},394:{id:394,voca:"nghèo",desc:"poor",s:1},395:{id:395,voca:"nghĩ",desc:"to think",s:1},396:{id:396,voca:"ngồi",desc:"to sit",s:1},397:{id:397,voca:"ngủ",desc:"to sleep",s:1},398:{id:398,voca:"ngực",desc:"breast, chest",s:1},399:{id:399,voca:"nhóm",desc:"group",s:1},400:{id:400,voca:"nói",desc:"to speak/say/talk",s:1},401:{id:401,voca:"ở",desc:"to live",s:1},402:{id:402,voca:"quên",desc:"to forget",s:1},403:{id:403,voca:"răng",desc:"tooth",s:1},404:{id:404,voca:"rơi",desc:"to fall",s:1},405:{id:405,voca:"rời",desc:"to leave",s:1},406:{id:406,voca:"rửa",desc:"to wash",s:1},407:{id:407,voca:"sinh nhật",desc:"birthday",s:1},408:{id:408,voca:"sinh",desc:"to give birth",s:1},409:{id:409,voca:"tai",desc:"ear",s:1},410:{id:410,voca:"tắm",desc:"to have a bath/shower",s:1},411:{id:411,voca:"tim",desc:"heart",s:1},412:{id:412,voca:"thân",desc:"body",s:1},413:{id:413,voca:"thấp",desc:"low/short",s:1},414:{id:414,voca:"thấy",desc:"to see",s:1},415:{id:415,voca:"thích",desc:"to like, to be keen on",s:1},416:{id:416,voca:"thuốc",desc:"medicine; cigarette",s:1},417:{id:417,voca:"tóc",desc:"hair",s:1},418:{id:418,voca:"tôi",desc:"I/me",s:1},419:{id:419,voca:"tốt",desc:"fine/good",s:1},420:{id:420,voca:"giận",desc:"angry, upset",s:1},421:{id:421,voca:"xem",desc:"to watch, to look at",s:1},422:{id:422,voca:"yêu",desc:"to love",s:1},423:{id:423,voca:"áo",desc:"dress, shirt",s:1},424:{id:424,voca:"đen",desc:"black",s:1},425:{id:425,voca:"đẹp",desc:"beautiful",s:1},426:{id:426,voca:"đỏ",desc:"red",s:1},427:{id:427,voca:"đồ lót",desc:"underwear",s:1},428:{id:428,voca:"đôi",desc:"pair",s:1},429:{id:429,voca:"đổi",desc:"to change",s:1},430:{id:430,voca:"giầy",desc:"shoes",s:1},431:{id:431,voca:"khăn",desc:"towel",s:1},432:{id:432,voca:"quần",desc:"pants/trousers",s:1},433:{id:433,voca:"màu",desc:"color",s:1},434:{id:434,voca:"mặc",desc:"to wear",s:1},435:{id:435,voca:"màu vàng",desc:"yellow",s:1},436:{id:436,voca:"mền",desc:"blanket",s:1},437:{id:437,voca:"mới",desc:"new",s:1},438:{id:438,voca:"nịt",desc:"belt",s:1},439:{id:439,voca:"nón",desc:"hat",s:1},440:{id:440,voca:"trắng",desc:"white",s:1},441:{id:441,voca:"túi",desc:"bag, pocket",s:1},442:{id:442,voca:"váy",desc:"skirt",s:1},443:{id:443,voca:"xám",desc:"gray",s:1},444:{id:444,voca:"xanh dương",desc:"blue",s:1},445:{id:445,voca:"xanh lá cây",desc:"green",s:1},446:{id:446,voca:"xấu",desc:"bad, ugly",s:1},447:{id:447,voca:"bạn",desc:"friend",s:1},448:{id:448,voca:"búp bê",desc:"doll",s:1},449:{id:449,voca:"chú",desc:"uncle (father's younger brother)",s:1},450:{id:450,voca:"con",desc:"child",s:1},451:{id:451,voca:"bác",desc:"uncle (father's elder brother)",s:1},452:{id:452,voca:"em",desc:"younger brother/sister",s:1},453:{id:453,voca:"gái",desc:"girl",s:1},454:{id:454,voca:"gia đình",desc:"family",s:1},455:{id:455,voca:"họ",desc:"surname",s:1},456:{id:456,voca:"hình",desc:"photo",s:1},457:{id:457,voca:"khách",desc:"guest",s:1},458:{id:458,voca:"mẹ",desc:"mother",s:1},459:{id:459,voca:"trai",desc:"boy/son",s:1},460:{id:460,voca:"vợ",desc:"wife",s:1},461:{id:461,voca:"ấm",desc:"warm",s:1},462:{id:462,voca:"gió",desc:"wind",s:1},463:{id:463,voca:"khô",desc:"dry",s:1},464:{id:464,voca:"không khí",desc:"air",s:1},465:{id:465,voca:"lạnh",desc:"cold",s:1},466:{id:466,voca:"mặt trời",desc:"sun",s:1},467:{id:467,voca:"mùa",desc:"season",s:1},468:{id:468,voca:"mưa",desc:"to rain",s:1},469:{id:469,voca:"nóng",desc:"hot",s:1},470:{id:470,voca:"bàn",desc:"table",s:1},471:{id:471,voca:"bên",desc:"side",s:1},472:{id:472,voca:"chìa khoá",desc:"key",s:1},473:{id:473,voca:"chính",desc:"main",s:1},474:{id:474,voca:"chỗ",desc:"place",s:1},475:{id:475,voca:"cửa",desc:"door",s:1},476:{id:476,voca:"cửa sổ",desc:"window",s:1},477:{id:477,voca:"đặt",desc:"to put, to order",s:1},478:{id:478,voca:"đất",desc:"soil/land",s:1},479:{id:479,voca:"đậu",desc:"to park",s:1},480:{id:480,voca:"đóng",desc:"to close, to shut",s:1},481:{id:481,voca:"địa chỉ",desc:"address",s:1},482:{id:482,voca:"điện",desc:"electric",s:1},483:{id:483,voca:"điện thoại",desc:"telephone",s:1},484:{id:484,voca:"đường (phố)",desc:"street/road/line",s:1},485:{id:485,voca:"gần",desc:"near, close",s:1},486:{id:486,voca:"giàu",desc:"rich, wealthy",s:1},487:{id:487,voca:"giường",desc:"bed",s:1},488:{id:488,voca:"ghế",desc:"chair, seat",s:1},489:{id:489,voca:"gương",desc:"mirror",s:1},490:{id:490,voca:"hãng",desc:"factory, firm",s:1},491:{id:491,voca:"khách sạn",desc:"hotel",s:1},492:{id:492,voca:"khoá",desc:"to lock",s:1},493:{id:493,voca:"lối ra",desc:"exit",s:1},494:{id:494,voca:"ly",desc:"glass, cup",s:1},495:{id:495,voca:"mở",desc:"to open",s:1},496:{id:496,voca:"ngân hàng",desc:"bank",s:1},497:{id:497,voca:"nhà",desc:"house, home",s:1},498:{id:498,voca:"nhà cầu",desc:"toilet",s:1},499:{id:499,voca:"phòng",desc:"room",s:1},500:{id:500,voca:"quay số",desc:"dial",s:1},501:{id:501,voca:"rác",desc:"rubbish",s:1},502:{id:502,voca:"sạch",desc:"clean",s:1},503:{id:503,voca:"sàn nhà",desc:"floor",s:1},504:{id:504,voca:"sửa",desc:"to repair",s:1},505:{id:505,voca:"thang máy",desc:"lift/elevator",s:1},506:{id:506,voca:"tủ lạnh",desc:"refrigerator",s:1},507:{id:507,voca:"tường",desc:"wall",s:1},508:{id:508,voca:"vườn",desc:"garden",s:1},509:{id:509,voca:"xà phòng",desc:"soap",s:1},510:{id:510,voca:"yên",desc:"quiet",s:1},511:{id:511,voca:"bài học",desc:"lesson",s:1},512:{id:512,voca:"bản đồ",desc:"map",s:1},513:{id:513,voca:"bằng",desc:"license; certificate",s:1},514:{id:514,voca:"bút",desc:"pen",s:1},515:{id:515,voca:"chép",desc:"to copy, to write",s:1},516:{id:516,voca:"chương trình",desc:"program, syllabus",s:1},517:{id:517,voca:"dễ",desc:"easy",s:1},518:{id:518,voca:"đọc",desc:"to read",s:1},519:{id:519,voca:"đồ chơi",desc:"toy",s:1},520:{id:520,voca:"giải thích",desc:"to explain",s:1},521:{id:521,voca:"giáo dục",desc:"education",s:1},522:{id:522,voca:"giáo viên",desc:"teacher",s:1},523:{id:523,voca:"giấy",desc:"paper",s:1},524:{id:524,voca:"giúp",desc:"to help",s:1},525:{id:525,voca:"học",desc:"to learn/study",s:1},526:{id:526,voca:"học sinh",desc:"student",s:1},527:{id:527,voca:"máy tính",desc:"computer",s:1},528:{id:528,voca:"nghỉ",desc:"to rest, to have a break",s:1},529:{id:529,voca:"nghĩa",desc:"to mean; sense",s:1},530:{id:530,voca:"ngôn ngữ",desc:"language",s:1},531:{id:531,voca:"sách",desc:"book",s:1},532:{id:532,voca:"sổ tay",desc:"notebook, handbook",s:1},533:{id:533,voca:"thư",desc:"letter",s:1},534:{id:534,voca:"trường",desc:"school",s:1},535:{id:535,voca:"văn phòng",desc:"office",s:1},536:{id:536,voca:"vấn đề",desc:"problem/matter",s:1},537:{id:537,voca:"viết",desc:"to write",s:1},538:{id:538,voca:"xe cộ",desc:"traffic",s:1},539:{id:539,voca:"xe cứu thương",desc:"ambulance",s:1},540:{id:540,voca:"xe buýt",desc:"bus",s:1},541:{id:541,voca:"xe hơi",desc:"car",s:1},542:{id:542,voca:"xe lửa",desc:"train",s:1},543:{id:543,voca:"bắt đầu",desc:"to start; to begin",s:1},544:{id:544,voca:"bóng",desc:"ball",s:1},545:{id:545,voca:"cảnh cáo",desc:"to warn",s:1},546:{id:546,voca:"cảnh sát",desc:"police",s:1},547:{id:547,voca:"chạy",desc:"to run",s:1},548:{id:548,voca:"cho xem",desc:"to show",s:1},549:{id:549,voca:"chơi",desc:"to play",s:1},550:{id:550,voca:"cuối",desc:"last, the end",s:1},551:{id:551,voca:"du lịch",desc:"to travel",s:1},552:{id:552,voca:"đi bộ",desc:"to walk",s:1},553:{id:553,voca:"đưa",desc:"to pass",s:1},554:{id:554,voca:"hát",desc:"to sing",s:1},555:{id:555,voca:"hướng dẫn",desc:"to guide",s:1},556:{id:556,voca:"kiểm soát",desc:"to check",s:1},557:{id:557,voca:"khởi hành",desc:"to depart",s:1},558:{id:558,voca:"làng",desc:"village",s:1},559:{id:559,voca:"máy ảnh",desc:"camera",s:1},560:{id:560,voca:"máy truyền hình",desc:"television/TV",s:1},561:{id:561,voca:"người lớn",desc:"adult",s:1},562:{id:562,voca:"ngừng",desc:"to stop",s:1},563:{id:563,voca:"nhanh",desc:"quick/fast",s:1},564:{id:564,voca:"nhạc",desc:"music",s:1},565:{id:565,voca:"nhảy",desc:"to dance",s:1},566:{id:566,voca:"phim",desc:"film/movie",s:1},567:{id:567,voca:"quốc gia",desc:"country, nation",s:1},568:{id:568,voca:"tiệc",desc:"party",s:1},569:{id:569,voca:"tỉnh",desc:"province/town",s:1},570:{id:570,voca:"thành phố",desc:"city",s:1},571:{id:571,voca:"thăm",desc:"to visit",s:1},572:{id:572,voca:"thể thao",desc:"sport",s:1},573:{id:573,voca:"trò chơi",desc:"game",s:1},574:{id:574,voca:"trung tâm",desc:"center",s:1},575:{id:575,voca:"tự do",desc:"free",s:1},576:{id:576,voca:"vàng",desc:"gold, yellow",s:1},577:{id:577,voca:"vé",desc:"ticket",s:1},578:{id:578,voca:"xăng",desc:"petrol",s:1}}}}let r=null;function v(){return null===r&&(r=new n),r}class h extends a{constructor(s){super(s),this.title="Flashcard"}init(){this.content=this.instance.querySelector(".collection-list")}componentWillMount(){this.refPageMgr.setNavTitle(this.title).showNav()}render(){this.content.innerHTML="",v().flashcard.forEach(s=>{this.addCollectionButton(this.content,s.name,s.totalVoca,"assets/img/logo.png",()=>{this.refPageMgr.setCurrPageInfo({collectionId:s.id}).moveTo(this.refPageMgr.pageId().FC_GROUP)})})}}class l extends a{constructor(s){super(s),this.title="Flashcard Group"}init(){this.content=this.instance.querySelector(".collection-list")}componentWillMount(){this.cId=this.refPageMgr.getCurrPageInfo().collectionId;let s=v().flashcard[this.cId].name;this.refPageMgr.setNavTitle(s).showNav()}render(){this.content.innerHTML="";let s=v().flashcard;s[this.cId]&&s[this.cId].groups.forEach(s=>{this.addCollectionButton(this.content,s.name,s.voca.length,"assets/img/logo.png",()=>{this.refPageMgr.setCurrPageInfo({groupId:s.id}).moveTo(this.refPageMgr.pageId().FC_SANDBOK)})})}}const g=0,u=1;class m extends a{constructor(s){super(s),this.title="Flashcard Sandbox",this.history=[],this.cards=[],this.cId=0,this.gId=0,this.currHistoryIdx=0,this.currCardIdx=0,this.mode=u}init(){this.refPageMgr.pageId();let s=this.instance.querySelector("ul.control-panel-1"),c=this.instance.querySelector("ul.control-panel-2");this.addControlButton(s,"SEQU",s=>this.toggleMode(s)),this.addControlButton(s,"MARK",s=>console.log("MARK as unfamiliar")),this.addControlButton(s,"PREV",s=>this.prev()),this.btnSound=this.addControlButton(c,"🚫",s=>this.playSound(this.getCurrCard().voca)),this.addControlButton(c,"NEXT",s=>this.next()),this.instance.querySelector(".card").addEventListener("click",s=>{this.playSound(this.getCurrCard().voca)})}componentWillMount(){let s=this.refPageMgr.getCurrPageInfo(),c=v().flashcard[s.collectionId].groups[s.groupId];this.cId=s.collectionId,this.gId=s.groupId,this.cards=c.voca;let e=this.cards[0],d=v().vocaDict[e];this.history=[],this.setCard(d),this.addToHistory(d),this.refPageMgr.setNavTitle(c.name).showNav()}next(){let s=this.getNextCard();this.setCard(s),this.addToHistory(s)}prev(){let s=this.getPrevCard();this.setCard(s)}addToHistory(s){this.history.push(s),this.currHistoryIdx=this.history.length-1}setCard(s){let c=this.instance.querySelector(".card");c.querySelector("p.voca").innerText=s.voca,c.querySelector("p.desc").innerText=s.desc,this.btnSound.innerText=1===s.s?"🔉":"🚫"}getCard(s){return v().vocaDict[s]}getCurrCard(){return this.history[this.currHistoryIdx]}getNextCard(){return this.mode===g?this.getRandomCard():this.mode===u?this.getNextOrderCard():void 0}getPrevCard(){return this.currHistoryIdx-1>=0?(this.currHistoryIdx--,this.history[this.currHistoryIdx]):this.history[0]}getRandomCard(){return this.currCardIdx=Math.floor(Math.random()*this.cards.length),this.getCard(this.cards[this.currCardIdx])}getNextOrderCard(){return this.currCardIdx++,this.currCardIdx>=this.cards.length&&(this.currCardIdx=0),this.getCard(this.cards[this.currCardIdx])}toggleMode(s){this.mode=this.mode===u?g:u,s.target.innerText=this.mode===u?"SEQU":"RAND"}playSound(s){var c=window.location.origin+`/assets/audio/${s}.mp3`;this.buildAudioLoader(c)}buildAudioLoader(s){let c=new XMLHttpRequest;c.open("GET",s),c.responseType="arraybuffer",c.addEventListener("load",()=>{p.decodeAudioData(c.response).then(y)}),c.send()}}let p=new(window.AudioContext||window.webkitAudioContext),y=s=>{let c=p.createBufferSource();c.buffer=s,c.connect(p.destination),c.loop=!1,c.start()};class b extends a{constructor(s){super(s),this.title="My Board"}init(){this.content=this.instance.querySelector(".collection-list");v().flashcard.length;v().flashcard.forEach(s=>{var c=s.name,e=`${s.totalVoca}`;this.appendInfoToCollectionList("lv-1",c,e),s.groups.forEach(s=>{let c=s.name;var e=`${s.voca.length}`;this.appendInfoToCollectionList("lv-2",c,e)})})}appendInfoToCollectionList(s,c,e){let d=document.createElement("span");d.innerText=c,d.classList.add("label");let o=document.createElement("span");o.innerText=e,o.classList.add("value");let i=document.createElement("li");i.appendChild(d),i.appendChild(o),i.classList.add(s),this.content.appendChild(i)}componentWillMount(){this.refPageMgr.setNavTitle(this.title).showNav()}}class f extends a{constructor(s){super(s),this.title="Search"}componentWillMount(){this.refPageMgr.setNavTitle(this.title).showNav()}}class k extends a{constructor(s){super(s),this.title="Author"}componentWillMount(){this.refPageMgr.setNavTitle(this.title).showNav()}}const w={HOME:"home",FC_COLLECTION:"flashcard-collection",FC_GROUP:"flashcard-group",FC_SANDBOK:"flashcard-sandbox",MYBOARD:"myboard",SEARCH:"search",AUTHOR:"author"};class C{constructor(){this.navigation=new d(this),this.history=[],this._currPageInfo={},this.pageMapping=new Map,this.pageMapping.set(w.HOME,new t(this)),this.pageMapping.set(w.FC_COLLECTION,new h(this)),this.pageMapping.set(w.FC_GROUP,new l(this)),this.pageMapping.set(w.FC_SANDBOK,new m(this)),this.pageMapping.set(w.MYBOARD,new b(this)),this.pageMapping.set(w.SEARCH,new f(this)),this.pageMapping.set(w.AUTHOR,new k(this))}register(s,c){let e=this.pageMapping.get(s);e&&e.setInstance(c)}getPageObject(s){return this.pageMapping.get(s)}initPages(){this.pageMapping.forEach(s=>s.init())}getCurrPageInfo(){return this._currPageInfo}setCurrPageInfo(s){return Object.assign(this._currPageInfo,s),this}emptyCurrPageInfo(){return this._currPageInfo={},this}pageId(){return w}moveTo(s){this._activePage(s),this.history.push(s)}moveBack(){this.history.pop(),this._activePage(this.history[this.history.length-1])}_activePage(s){let c=this.getPageObject(s);c.componentWillMount(),c.render(),this.pageMapping.forEach((c,e)=>{e===s?c.getInstance().classList+=" active":c.getInstance().classList.remove("active")}),c.componentDidMount()}setNavTitle(s){return this.navigation.setTitle(s),this}showNav(){return this.navigation.show(),this}hideNav(){return this.navigation.hide(),this}}let M=null;let x=(null===M&&(M=new C),M);document.querySelectorAll(".page").forEach(s=>{let c=s.getAttribute("page-id");x.register(c,s)}),x.initPages(),x.moveTo("home")}]);
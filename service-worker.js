if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const b=e=>c(e,d),s={module:{uri:d},exports:f,require:b};i[d]=Promise.all(a.map((e=>s[e]||b(e)))).then((e=>(r(...e),f)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"【每日早报】-2025-02-19 - 星期三.html",revision:"56f7f67c8bd105648ff2fd9e40543123"},{url:"【每日早报】-2025-02-21 - 星期五.html",revision:"21c3f7465e33d85fa5b9d077b8d971bb"},{url:"【每日早报】-2025-02-22 - 星期六.html",revision:"aa85ca18d1eb2c3624a25b3a362c53aa"},{url:"【每日早报】-2025-02-24 - 星期一.html",revision:"ee6d8fb1bba8e7639ef51a98260d5e90"},{url:"【每日早报】-2025-02-25 - 星期二.html",revision:"4541db045c2140a1042f33b7631bdc30"},{url:"【每日早报】-2025-02-26 - 星期三.html",revision:"f0a6483639043d59a7daee8e4df0ff7a"},{url:"【每日早报】-2025-02-27 - 星期四.html",revision:"fba808d635c1b15743544f1e2a98ece8"},{url:"【每日早报】-2025-02-28 - 星期五.html",revision:"91d7dca31001daab74dd7398ac43f7d8"},{url:"【每日早报】-2025-03-01 - 星期六.html",revision:"54afed20bcf42ce63b41f5efec75c73a"},{url:"【每日早报】-2025-03-02 - 星期日.html",revision:"8924d0b430fc6e49202692cc3ee2e4a9"},{url:"【每日早报】-2025-03-06 - 星期四.html",revision:"5fd7c358508162acaa048682e261bc49"},{url:"【每日早报】-2025-03-07 - 星期五.html",revision:"d363bbe03dc8bc164b548c628c76fbea"},{url:"404.html",revision:"fd866e451395077511ef1117b6168619"},{url:"about/index.html",revision:"ae5c6f1b2d2590fa7c20f18cf6774104"},{url:"archives/2022/08/index.html",revision:"a7f830a59f90a9f4e16b2daf8ad0bf93"},{url:"archives/2022/08/page/2/index.html",revision:"34f648d6ca2628a2c33a5786e1e8ce27"},{url:"archives/2022/09/index.html",revision:"9911d670344968ed88a2fbd0e2fdc7f5"},{url:"archives/2022/10/index.html",revision:"a9e9915c4ce571656d2ef084bc84c2c3"},{url:"archives/2022/index.html",revision:"be4d310aba7188d3b5efb3e5fb20863b"},{url:"archives/2022/page/2/index.html",revision:"79f9e84a3f42a403ff71cb9fefeeee09"},{url:"archives/2025/02/index.html",revision:"e7d217781eb80dae49626300cc5de19f"},{url:"archives/2025/03/index.html",revision:"82beefeefe8e84ee27598cd9165462e5"},{url:"archives/2025/index.html",revision:"4f8b63ec9dd8e9de13c4c038f9836a31"},{url:"archives/2025/page/2/index.html",revision:"cda749e4cf769c182990747da15809b8"},{url:"archives/index.html",revision:"3b715302ca2a417b81ccfeb0540bf323"},{url:"archives/page/2/index.html",revision:"a1d65f7cf0d845a8bc1b43334a7fdad2"},{url:"archives/page/3/index.html",revision:"f7c345fe4c7884b5bb732d3d48f09025"},{url:"archives/page/4/index.html",revision:"db36eecea4a08c82158774c824dd1102"},{url:"categories/index.html",revision:"ad826d6c20a18ab105758cc1e1174c18"},{url:"categories/壁纸/index.html",revision:"5bfd2cc5e0a53d6d841b0e415faa3b59"},{url:"categories/机网/index.html",revision:"0a8f3b1af63ae252a9405529a0cebcf5"},{url:"categories/机网/page/2/index.html",revision:"9bc61493739ddd1fd0e6da317c1b9942"},{url:"categories/每日早报/index.html",revision:"47807f1e8fe8f848ed8f0a2ecbbbab23"},{url:"categories/每日早报/page/2/index.html",revision:"3b39c00c0cd010a739dcddbc6b2851d5"},{url:"css/footer_style.css",revision:"a249941af2da87708fa46890b1526aa7"},{url:"css/index.css",revision:"73f18fcc94f179b5651f3a6d17873995"},{url:"css/mbg.css",revision:"d0989f4bbd54a84a380a96a672bd41f6"},{url:"css/time.css",revision:"d201337c7704a57fe1ef2031a0998f21"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"description/index.html",revision:"c8d31241629b182eb51c48fb77033ac7"},{url:"fonts/FangSong.woff",revision:"2e1205c02ab84c986d1312c50762942a"},{url:"fonts/Hei.woff",revision:"d69759d91a5e26b2e1526ec322debe91"},{url:"fonts/kaiti.woff",revision:"37090e9ed628a176f4bdf8321653316d"},{url:"fonts/ZiHunBaiGeTianXing.woff",revision:"531882870cf78ed085cd10f9d180dc08"},{url:"Gallery/index.html",revision:"76b9b6a8db2e6e2aec71150d7bb7e369"},{url:"hello-world.html",revision:"3ad29e9581179a65334b667343ac35d3"},{url:"img/1.jpg",revision:"0a53047d1013252766cd4485628483a9"},{url:"img/2.jpg",revision:"f872c0d4b9405ee4f510075a6a0b67cf"},{url:"img/3.jpg",revision:"f50648c341b6890be845a076e2c4773b"},{url:"img/4.jpg",revision:"fb2b90ad365a76fb19e954b0124c1b42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/5.jpg",revision:"81407116c5f5f01568bdcd3ab603c162"},{url:"img/6.jpg",revision:"d81e36595d706a5d8f64ccc608124b52"},{url:"img/algolia_logo.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-next.png",revision:"fce961f0bd3cd769bf9c605ae6749bc0"},{url:"img/author.png",revision:"f9466a911c8a62281251ff72d36cc26f"},{url:"img/avatar.gif",revision:"7a2fe6b906600a9354cece6d9ced2992"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cc-by-nc-nd.svg",revision:"1c681acc4a150e7236254c464bb5a797"},{url:"img/cc-by-nc-sa.svg",revision:"12b4b29e8453be5b7828b524d3feabce"},{url:"img/cc-by-nc.svg",revision:"dd9cfe99ed839a4a548114f988d653f4"},{url:"img/cc-by-nd.svg",revision:"2d80546af20128215dc1e23ef42d06c2"},{url:"img/cc-by-sa.svg",revision:"c696b3db81cbbfba32f66c1dc88b909a"},{url:"img/cc-by.svg",revision:"6c4f8422b3725cb9f26b6c00e95fc88b"},{url:"img/cc-zero.svg",revision:"79deee77a07fcb79ff680ac0125eacb9"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/favicon-16x16-next.png",revision:"b8975923a585dbaa8519a6068e364947"},{url:"img/favicon-32x32-next.png",revision:"5a029563fe3214c96f68b46556670ea1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.svg",revision:"ddad9027e42111ccd5b466bc18188970"},{url:"img/spy.jpg",revision:"67ea61220cbdff5b56c0c3eadad4e983"},{url:"img/time.jpg",revision:"996c02352e2fdb7d1cf94c470d688492"},{url:"img/time1.jpg",revision:"234aacb842b3b5ba067253253ffae2b4"},{url:"img/wechat.jpg",revision:"2daac5896292bac19bdd98123d3758e7"},{url:"img/weixin.jpg",revision:"50dba67e49fba5ba6649b59c4e83fbdc"},{url:"img/wyu.jpg",revision:"19b19e9ec49c4de42f7ccdc13273840c"},{url:"img/yanjiang.jpg",revision:"3c0001f990b70b0c807db58544cbd135"},{url:"index.html",revision:"f562600d2079a11e8b32a26c43090d82"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/mbg.js",revision:"f779a5dad589df1439df9f68f528b9c9"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/time.js",revision:"3e7f3ae43512a4e538084c04875d7071"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"js/webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"keywords/index.html",revision:"931cf33f37097317d1e8b17613ec70b9"},{url:"link/index.html",revision:"e406514feab21e0b1b1e9811b7743311"},{url:"music/index.html",revision:"815e25634363f7b5e202e5a94ac1c0bb"},{url:"page/2/index.html",revision:"8fc1668623a2eca3566c8c623ae34a05"},{url:"page/3/index.html",revision:"e34f820b27b6d2c6d5c8246afd6bb2f2"},{url:"page/4/index.html",revision:"a266660b8c97c3127c27715618413346"},{url:"shuoshuo/index.html",revision:"e99ea290f08aa485e7452bf68acafb15"},{url:"sw-register.js",revision:"8a8144d4ae535519da5fa951c6706464"},{url:"sw.js",revision:"24ccc13d4460a439fa61ad272894ca7b"},{url:"tags/【每日早报】-2025-02-25 - 星期二.html",revision:"2c1835e7ffe7d8836192751d73aeeb24"},{url:"tags/index.html",revision:"601cdd8a38bff5f352bc9fe7f9a0a81f"},{url:"tags/养眼/index.html",revision:"25842b9f5418c97d539fc56f5d0fa7a1"},{url:"tags/日常/index.html",revision:"4ececf6f790a3a34714e48a3d8433347"},{url:"tags/每日早报/index.html",revision:"b06960e5e10a767581b6c813f3f1ae47"},{url:"tags/每日早报/page/2/index.html",revision:"5ea4d5564b04e4cdb08d25cbf5531eef"},{url:"tags/第一篇/index.html",revision:"77ed66684ea5ebe79431aa53633a9a62"},{url:"tags/网络/index.html",revision:"36c5fb3864f4c4d13417f62e08d176f4"},{url:"tags/网络/page/2/index.html",revision:"57add1ccd64d303ea81394ffba8cc857"},{url:"template/index.html",revision:"7d72c538f1ca697d0ab08c78469d0623"},{url:"test-post.html",revision:"fc976e5e6542e251c178b2c9835dd720"},{url:"test.html",revision:"dbb702527930e59879dbba9f6940a70a"},{url:"webhook.html",revision:"47f6ad52a0b1450d12526e394db751a6"},{url:"webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"分享壁纸(一).html",revision:"7cab9cfc1be68d13a159e95e86821fc8"},{url:"分享壁纸(三).html",revision:"688a67dcd511b0f93ab0d2612c7b6905"},{url:"分享壁纸(二).html",revision:"0a1c58d5bbe03d915f771dec9f6dc67c"},{url:"又是一个不眠之夜.html",revision:"5c8b2514678da4f290665fb7fc87cad7"},{url:"咒术回战.html",revision:"5cd1a7b046ffd0cb37e17d5c980629b3"},{url:"开端.html",revision:"4d5d83661732a99e46e2ef44a0422ade"},{url:"白桃露露.html",revision:"253711671729e281e1d4588caf846a19"},{url:"示例.html",revision:"a537f234fc0f5f99eff5a7db7f86eb8e"},{url:"计算机网络-数据链路(一)8-30.html",revision:"eddcc0268f56ca21375c6b576c03a2be"},{url:"计算机网络-数据链路(三).html",revision:"4c4d6c2f5ebda88b139f18692c8253bf"},{url:"计算机网络-数据链路(二)8-31.html",revision:"bde9d8904af13e07495ce02451e3e3f8"},{url:"计算机网络-数据链路(五).html",revision:"454e0b497f25e90d9b49aafc84ef0726"},{url:"计算机网络-数据链路(六).html",revision:"e8bccdf8c3c1b09cc63c5068a4c502a1"},{url:"计算机网络-数据链路(四).html",revision:"c6f6ec9ed38af8cf4e778fa02fbc6b94"},{url:"计算机网络-数据链路层(七)9-5.html",revision:"b9d7bb9291223beb30bf17706b2f7d4b"},{url:"计算机网络-物理层(一)8-28.html",revision:"e79b9cdfd079bb47cdda1c0c85677a46"},{url:"计算机网络-物理层(二)8-29.html",revision:"ec8e3a833ea5ae2dca43b36b51c8aec2"},{url:"计算机网络-网络层(一)9-6.html",revision:"d49a0a88ac952219dd52f69bfb5e153e"},{url:"计算机网络体系分层思想(8-27).html",revision:"86b1654144c649ec9d811522466fc241"},{url:"计算机网络性能和体系结构（8.26）.html",revision:"ec53fe2a5369d234486a0b358883c215"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

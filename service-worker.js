if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const f=e=>a(e,s),b={module:{uri:s},exports:r,require:f};i[s]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(d(...e),r)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"34e02cad37968b96d132288dbf3486bf"},{url:"about/index.html",revision:"ef0596d57bf9f58ac1ccf05c0c769220"},{url:"archives/2022/08/index.html",revision:"b68a8169e0f6a2374730f592abf7b7d8"},{url:"archives/2022/09/index.html",revision:"bbeb56494dc557fe9272859bba538612"},{url:"archives/2022/10/index.html",revision:"8254732c0ae3867f79a0c92036d96014"},{url:"archives/2022/index.html",revision:"6e1112a465ae7099037ca3c9608138d7"},{url:"archives/2022/page/2/index.html",revision:"780bda71c46ec1d4777fce34b04a843c"},{url:"archives/2025/02/index.html",revision:"c9c2d5ffb52731ca3a6e3555a1795669"},{url:"archives/2025/02/page/2/index.html",revision:"28f7f4bf61ddfbe5bbe0589aa1292391"},{url:"archives/2025/03/index.html",revision:"5d12f066c7c3af5326c73f47c28afeec"},{url:"archives/2025/03/page/2/index.html",revision:"930f2040e89521c1d6e13a5191bab6aa"},{url:"archives/2025/index.html",revision:"286972512f0375b97dc4e18b80acf4dd"},{url:"archives/2025/page/2/index.html",revision:"b81e22fec50c049a9fbbf7ac50228fff"},{url:"archives/2025/page/3/index.html",revision:"bd37304d517c445479ec8de8685a81d1"},{url:"archives/index.html",revision:"bfb01fa0cb566d221684461c794d9131"},{url:"archives/page/2/index.html",revision:"18b06f0a7df778578d94756ed26b4b92"},{url:"archives/page/3/index.html",revision:"38d0e884923448b862f348cec321b767"},{url:"archives/page/4/index.html",revision:"5062c665163228780030c17bfcf81b33"},{url:"archives/page/5/index.html",revision:"f4f764b3ac4b7c377fcec0548c11a9aa"},{url:"baidu_verify_codeva-cwyza0ZFJb.html",revision:"e40ee70f48ab2820b24ddcf12f6906ef"},{url:"baidu_verify_codeva-J5b2WWChcR.html",revision:"9276b3a22218f7c521a52bf87958552f"},{url:"categories/index.html",revision:"b043562649ecbc9e4f18ededaec7d1e3"},{url:"categories/壁纸/index.html",revision:"dbadbde373fd661324bda1b0df066d80"},{url:"categories/机网/index.html",revision:"e485f6ca3d93a77d816f235260145198"},{url:"categories/机网/page/2/index.html",revision:"de1a7001274f4e928d51162c4c394608"},{url:"categories/每日早报/index.html",revision:"fc1cb65347da4d455af2bd2f571ba9cb"},{url:"categories/每日早报/page/2/index.html",revision:"ba2351593e92782e06b830ac95032ffd"},{url:"categories/每日早报/page/3/index.html",revision:"d955d4a1443fce5427a0a340ef726d23"},{url:"css/AI.css",revision:"9aee10bb289b8706777b29a5ff7aa886"},{url:"css/footer_style.css",revision:"a249941af2da87708fa46890b1526aa7"},{url:"css/index.css",revision:"7e3a8e4082660f34abc9632840a2e481"},{url:"css/mbg.css",revision:"05867c383188f90131cd1027fd70e03f"},{url:"css/time.css",revision:"d201337c7704a57fe1ef2031a0998f21"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"description/index.html",revision:"3e686df2efe98d019e4b9069ee18939b"},{url:"fonts/FangSong.woff",revision:"2e1205c02ab84c986d1312c50762942a"},{url:"fonts/FangSong.woff2",revision:"d02ae0cef165fdb83523b29505656f3a"},{url:"fonts/Hei.woff",revision:"d69759d91a5e26b2e1526ec322debe91"},{url:"fonts/Hei.woff2",revision:"46fc9f136cf5dd3ca34d11f73449a178"},{url:"fonts/kaiti.woff",revision:"37090e9ed628a176f4bdf8321653316d"},{url:"fonts/kaiti.woff2",revision:"22aa1fdbb9ae8d746f07272ff560327e"},{url:"fonts/ZiHunBaiGeTianXing.woff",revision:"531882870cf78ed085cd10f9d180dc08"},{url:"fonts/ZiHunBaiGeTianXing.woff2",revision:"ba841e317f1b3e8c14a306b28aa5deb1"},{url:"Gallery/index.html",revision:"a7b8dbf12f749061adff75da811fa2a6"},{url:"img/1.jpg",revision:"0a53047d1013252766cd4485628483a9"},{url:"img/2.jpg",revision:"f872c0d4b9405ee4f510075a6a0b67cf"},{url:"img/3.jpg",revision:"f50648c341b6890be845a076e2c4773b"},{url:"img/4.jpg",revision:"fb2b90ad365a76fb19e954b0124c1b42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/5.jpg",revision:"81407116c5f5f01568bdcd3ab603c162"},{url:"img/6.jpg",revision:"d81e36595d706a5d8f64ccc608124b52"},{url:"img/algolia_logo.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-next.png",revision:"fce961f0bd3cd769bf9c605ae6749bc0"},{url:"img/author.png",revision:"f9466a911c8a62281251ff72d36cc26f"},{url:"img/avatar.gif",revision:"7a2fe6b906600a9354cece6d9ced2992"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cc-by-nc-nd.svg",revision:"1c681acc4a150e7236254c464bb5a797"},{url:"img/cc-by-nc-sa.svg",revision:"12b4b29e8453be5b7828b524d3feabce"},{url:"img/cc-by-nc.svg",revision:"dd9cfe99ed839a4a548114f988d653f4"},{url:"img/cc-by-nd.svg",revision:"2d80546af20128215dc1e23ef42d06c2"},{url:"img/cc-by-sa.svg",revision:"c696b3db81cbbfba32f66c1dc88b909a"},{url:"img/cc-by.svg",revision:"6c4f8422b3725cb9f26b6c00e95fc88b"},{url:"img/cc-zero.svg",revision:"79deee77a07fcb79ff680ac0125eacb9"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/favicon-16x16-next.png",revision:"b8975923a585dbaa8519a6068e364947"},{url:"img/favicon-32x32-next.png",revision:"5a029563fe3214c96f68b46556670ea1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.svg",revision:"ddad9027e42111ccd5b466bc18188970"},{url:"img/spy.jpg",revision:"67ea61220cbdff5b56c0c3eadad4e983"},{url:"img/time.jpg",revision:"996c02352e2fdb7d1cf94c470d688492"},{url:"img/time1.jpg",revision:"234aacb842b3b5ba067253253ffae2b4"},{url:"img/wechat.jpg",revision:"2daac5896292bac19bdd98123d3758e7"},{url:"img/weixin.jpg",revision:"50dba67e49fba5ba6649b59c4e83fbdc"},{url:"img/wyu.jpg",revision:"19b19e9ec49c4de42f7ccdc13273840c"},{url:"img/yanjiang.jpg",revision:"3c0001f990b70b0c807db58544cbd135"},{url:"index.html",revision:"da0d157ee271dded7f423b225c36e835"},{url:"js/AI.js",revision:"f9044fafcf3050e329d1c4adc19f2533"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/mbg.js",revision:"307bb142003e5c82c84a09f306fa1ae1"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/time.js",revision:"3e7f3ae43512a4e538084c04875d7071"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"js/webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"keywords/index.html",revision:"96a8b5a3705498da1d1795bbce492bd1"},{url:"link/index.html",revision:"3888fece0df7d0de961487b59fc2ba42"},{url:"music/index.html",revision:"c12b2bd299958ecd3acbcba55483d46c"},{url:"page/2/index.html",revision:"db65364780641a1ead4bc9bc4a7745d7"},{url:"page/3/index.html",revision:"24cc89a8bf1484d805e3fa0960d0c157"},{url:"page/4/index.html",revision:"6332baf6c79b8a791af28a68140fdb54"},{url:"page/5/index.html",revision:"bd41b34549d306fd37b022df8ad0c384"},{url:"posts/1b0c78b3.html",revision:"291b1d79f9a7f831d4a32ec0533571eb"},{url:"posts/1b5b87.html",revision:"d52afdb27d7f1c26458243662725d408"},{url:"posts/28c755c.html",revision:"0e5da28bb013b5d95ddd1db41a8227d9"},{url:"posts/330d6f69.html",revision:"ed5099a7975ca66eaa84fc25aa733bad"},{url:"posts/3b744803.html",revision:"72f9a9be63ce05a1d03303a1a6e7d8bd"},{url:"posts/3da05156.html",revision:"f0a4c7b5328c2ab97f3a398f53d39422"},{url:"posts/3e91e0fa.html",revision:"0eb139893a41ba02febebfff5ac51d56"},{url:"posts/41c2c0d2.html",revision:"3f45370041faa17d19e6745e33317845"},{url:"posts/46fc5adc.html",revision:"5272e836b8c2d94eec260cb396fbd588"},{url:"posts/493f6b85.html",revision:"9954539a0b8a68cee3306c4dde010729"},{url:"posts/497e40e0.html",revision:"14d80ddc9f184f3ca02efbd82a050412"},{url:"posts/4a17b156.html",revision:"4fa408f07df3858ab73b757f16830db7"},{url:"posts/4e2d7b19.html",revision:"b87203f0022b28e0a6f102f69db93525"},{url:"posts/4f81eb97.html",revision:"13be0d23f1d76446f0db20fc536bcab8"},{url:"posts/53721e0e.html",revision:"0aa4fe766d53ae81ea4986117722d7a7"},{url:"posts/5dadd067.html",revision:"d9ecd65edb3a749e21493bfbbde2848d"},{url:"posts/5ff34642.html",revision:"0b0b5e39ce58f5110370ea03f462b9fa"},{url:"posts/653abebf.html",revision:"eeb6ffc8c7b1deab2cc4b0f67803953a"},{url:"posts/681265c2.html",revision:"fdb3198d765329dff1256ba105da66e8"},{url:"posts/6f44662f.html",revision:"39de8256b098e27dd0e1845fee3b3abf"},{url:"posts/7207f70e.html",revision:"820b08a07697078d883c31c0680a6bb7"},{url:"posts/7289f891.html",revision:"45d67c9159266b9357c9a56872daf5ba"},{url:"posts/732e626.html",revision:"9e6c06d4b11d6a589aa434a50f12b921"},{url:"posts/7e13cc3b.html",revision:"adba76a95187a4697a225cd2c61fb7d7"},{url:"posts/80a7ecce.html",revision:"0f56009220e4a49c2655e4fb2152f70e"},{url:"posts/821a4686.html",revision:"7ce811398ccf4ef8d53297c0bce88fb8"},{url:"posts/8a741756.html",revision:"eff5d7b1540af5340ab1dfd64a5371cf"},{url:"posts/918d46c1.html",revision:"52709720176020952aba16cd6b6fd12e"},{url:"posts/93c8c0c7.html",revision:"93e351b0024f48dc1af12290ce44efc2"},{url:"posts/9f057e9a.html",revision:"c8fdff6a1c04a6ddc3b44a171cd77ab3"},{url:"posts/a7d437fe.html",revision:"6c6f26d6e1704cb7b3d21c4e8190d66a"},{url:"posts/ace4e4cd.html",revision:"2dcafdd027a033bc3a1b536a4822179d"},{url:"posts/af30ddef.html",revision:"9550ba9d7257338eba382c6fe67345a0"},{url:"posts/b1eb9c6d.html",revision:"088c7d71b4808e0b39da3f91c39e42ef"},{url:"posts/b564e922.html",revision:"59d056f87ad0b95cf527b01a8a18d8fe"},{url:"posts/bc9a4dc7.html",revision:"e6a1b7545738fb251ab090f174a51903"},{url:"posts/be543a11.html",revision:"8e894be9df4730de38043a67ab425b43"},{url:"posts/c9b871f1.html",revision:"4f805f3eaa52a06caf59f91ec614b74b"},{url:"posts/d6ef11e5.html",revision:"81b0ff37f70b70c9271b384be604e594"},{url:"posts/dcd6fdd1.html",revision:"ac011c1b7b2809d54bf5a54729322874"},{url:"posts/de24a124.html",revision:"ca740026ae6aec2ed78b759cde4630b0"},{url:"posts/e32cbcd3.html",revision:"81d7c517f0387500f4ccc47c357374f8"},{url:"posts/eebbc69f.html",revision:"6406e5374da656d30a44dd2e5fa6bc2b"},{url:"posts/f08119d7.html",revision:"88dd78e77f581152c5002309c7ce2ccf"},{url:"posts/f7f51423.html",revision:"ecb749942c25434dc2e4d54fe4137b15"},{url:"posts/fd1a8f9f.html",revision:"fda4e33ddbea041a9c51538054cb298e"},{url:"shuoshuo/index.html",revision:"27c75f2b92fb8415c85ea036e737c9af"},{url:"sw-register.js",revision:"3c2cebce181adb65aa0445334edd8525"},{url:"sw.js",revision:"431b57139669f317e80163345d1fff90"},{url:"tags/【每日早报】-2025-02-25 - 星期二.html",revision:"4e580803f6a0185c9d2535490b8000ea"},{url:"tags/index.html",revision:"02fbac84d2bace1a2fa38b90871dbeba"},{url:"tags/养眼/index.html",revision:"cb59ab307de046fa16cb14f38edbe634"},{url:"tags/每日早报/index.html",revision:"961b98ddcb3c0789664ffd765b578719"},{url:"tags/每日早报/page/2/index.html",revision:"536a9c14b66bdb4593e9abe92fdb08b9"},{url:"tags/每日早报/page/3/index.html",revision:"9da5adffe7d84564f70576eb50203460"},{url:"tags/第一篇/index.html",revision:"6a73319d52b4d27152cf9be2e17b6eb0"},{url:"tags/网络/index.html",revision:"bc825eca1910945b5603cd566bbbdbbc"},{url:"tags/网络/page/2/index.html",revision:"69c7501ffe20a7c86b4586e4ade9a8f3"},{url:"template/index.html",revision:"8d886067cf98627c7ec0f9133e1c8eb8"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

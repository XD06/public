if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,s)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let d={};const r=e=>c(e,f),b={module:{uri:f},exports:d,require:r};i[f]=Promise.all(a.map((e=>b[e]||r(e)))).then((e=>(s(...e),d)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b11fc044c456717fe117ee58c02eee07"},{url:"about/index.html",revision:"5f4a102650b9462b1c0aa85447510efc"},{url:"archives/2022/08/index.html",revision:"eb4829a5eef4fe151bb341d5b2a31b08"},{url:"archives/2022/09/index.html",revision:"99697d890519462506483746913858c2"},{url:"archives/2022/10/index.html",revision:"00a8768af52da0aa11d61e322147a324"},{url:"archives/2022/index.html",revision:"96865cd0c9fcb1555a8d4d907264ed28"},{url:"archives/2022/page/2/index.html",revision:"8c5224287be1bb720366bf2ba0ef1a17"},{url:"archives/2025/02/index.html",revision:"a6c04cfa3d3e7b32e29ce5f32e202428"},{url:"archives/2025/02/page/2/index.html",revision:"64b930aeae815d9d98a690f76951e4d6"},{url:"archives/2025/03/index.html",revision:"47357111ef15e44eb7d3c7b26ffe921e"},{url:"archives/2025/03/page/2/index.html",revision:"e506007d47b17b0b6cc03fa515c245f4"},{url:"archives/2025/index.html",revision:"54a5c3bb59891146e222491b7c4590ee"},{url:"archives/2025/page/2/index.html",revision:"55c1e44857f5cd64284b3e5d08cfc55e"},{url:"archives/2025/page/3/index.html",revision:"0cbe61b58078fc191a31b9cd01ccdb8e"},{url:"archives/index.html",revision:"1dae89f97d43dff58efe6bf940bbe38d"},{url:"archives/page/2/index.html",revision:"b2c76878e8d71f250c8a360312581348"},{url:"archives/page/3/index.html",revision:"772691f3d80600adb8f2931b772e4b5b"},{url:"archives/page/4/index.html",revision:"0976285a70770827e058346aedf3eae4"},{url:"archives/page/5/index.html",revision:"28b36460e97b52a43cbe9887de203735"},{url:"baidu_verify_codeva-cwyza0ZFJb.html",revision:"6cc0843fb9cf5f8b85f38649a4b93417"},{url:"baidu_verify_codeva-J5b2WWChcR.html",revision:"0c330952549ea692f933feeca1528a58"},{url:"categories/index.html",revision:"632d7594ded673bda2f14066a47c17a7"},{url:"categories/壁纸/index.html",revision:"683a94567226fb777a24dd616cefad1a"},{url:"categories/机网/index.html",revision:"16686f47e8b173525d77828cab4a9b10"},{url:"categories/机网/page/2/index.html",revision:"79c0f5d26fb1c8cc102e4e94539ae8f0"},{url:"categories/每日早报/index.html",revision:"b6cbcec938e8602694114ab7cfdd9dd1"},{url:"categories/每日早报/page/2/index.html",revision:"beab49f5b1dab476ec4d43c7bf7c5b00"},{url:"categories/每日早报/page/3/index.html",revision:"19b6c15be7fcfbbee65fb05cf99760aa"},{url:"css/AI.css",revision:"9aee10bb289b8706777b29a5ff7aa886"},{url:"css/footer_style.css",revision:"a249941af2da87708fa46890b1526aa7"},{url:"css/index.css",revision:"8c70d5d43dfe88fba40280c0b681cc5c"},{url:"css/mbg.css",revision:"05867c383188f90131cd1027fd70e03f"},{url:"css/time.css",revision:"d201337c7704a57fe1ef2031a0998f21"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"description/index.html",revision:"305f7069c050cfea1a653e7a506119fd"},{url:"fonts/FangSong.woff",revision:"2e1205c02ab84c986d1312c50762942a"},{url:"fonts/FangSong.woff2",revision:"d02ae0cef165fdb83523b29505656f3a"},{url:"fonts/Hei.woff",revision:"d69759d91a5e26b2e1526ec322debe91"},{url:"fonts/Hei.woff2",revision:"46fc9f136cf5dd3ca34d11f73449a178"},{url:"fonts/kaiti.woff",revision:"37090e9ed628a176f4bdf8321653316d"},{url:"fonts/kaiti.woff2",revision:"22aa1fdbb9ae8d746f07272ff560327e"},{url:"fonts/ZiHunBaiGeTianXing.woff",revision:"531882870cf78ed085cd10f9d180dc08"},{url:"fonts/ZiHunBaiGeTianXing.woff2",revision:"ba841e317f1b3e8c14a306b28aa5deb1"},{url:"Gallery/index.html",revision:"bc9fb7387d7ffabe29a11ef2dcdef405"},{url:"img/1.jpg",revision:"0a53047d1013252766cd4485628483a9"},{url:"img/2.jpg",revision:"f872c0d4b9405ee4f510075a6a0b67cf"},{url:"img/3.jpg",revision:"f50648c341b6890be845a076e2c4773b"},{url:"img/4.jpg",revision:"fb2b90ad365a76fb19e954b0124c1b42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/5.jpg",revision:"81407116c5f5f01568bdcd3ab603c162"},{url:"img/6.jpg",revision:"d81e36595d706a5d8f64ccc608124b52"},{url:"img/algolia_logo.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-next.png",revision:"fce961f0bd3cd769bf9c605ae6749bc0"},{url:"img/author.png",revision:"f9466a911c8a62281251ff72d36cc26f"},{url:"img/avatar.gif",revision:"7a2fe6b906600a9354cece6d9ced2992"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cc-by-nc-nd.svg",revision:"1c681acc4a150e7236254c464bb5a797"},{url:"img/cc-by-nc-sa.svg",revision:"12b4b29e8453be5b7828b524d3feabce"},{url:"img/cc-by-nc.svg",revision:"dd9cfe99ed839a4a548114f988d653f4"},{url:"img/cc-by-nd.svg",revision:"2d80546af20128215dc1e23ef42d06c2"},{url:"img/cc-by-sa.svg",revision:"c696b3db81cbbfba32f66c1dc88b909a"},{url:"img/cc-by.svg",revision:"6c4f8422b3725cb9f26b6c00e95fc88b"},{url:"img/cc-zero.svg",revision:"79deee77a07fcb79ff680ac0125eacb9"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/favicon-16x16-next.png",revision:"b8975923a585dbaa8519a6068e364947"},{url:"img/favicon-32x32-next.png",revision:"5a029563fe3214c96f68b46556670ea1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.svg",revision:"ddad9027e42111ccd5b466bc18188970"},{url:"img/spy.jpg",revision:"67ea61220cbdff5b56c0c3eadad4e983"},{url:"img/time.jpg",revision:"996c02352e2fdb7d1cf94c470d688492"},{url:"img/time1.jpg",revision:"234aacb842b3b5ba067253253ffae2b4"},{url:"img/wechat.jpg",revision:"2daac5896292bac19bdd98123d3758e7"},{url:"img/weixin.jpg",revision:"50dba67e49fba5ba6649b59c4e83fbdc"},{url:"img/wyu.jpg",revision:"19b19e9ec49c4de42f7ccdc13273840c"},{url:"img/yanjiang.jpg",revision:"3c0001f990b70b0c807db58544cbd135"},{url:"index.html",revision:"e8598e690ae219991011055e4249f61f"},{url:"js/AI.js",revision:"f9044fafcf3050e329d1c4adc19f2533"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/mbg.js",revision:"307bb142003e5c82c84a09f306fa1ae1"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/time.js",revision:"3e7f3ae43512a4e538084c04875d7071"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"js/webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"keywords/index.html",revision:"81fde56bb72135e886b6be8af3766c7c"},{url:"link/index.html",revision:"f79a8693f9a7be67b3ecd8f3fda8be0c"},{url:"music/index.html",revision:"92b2bd15a0e9a6ca2a8d0472af282e02"},{url:"page/2/index.html",revision:"c26c679ab14cb0392cd794eaedc79b8a"},{url:"page/3/index.html",revision:"0fbf7e44b37ec5d20d8a2a53c01a97d9"},{url:"page/4/index.html",revision:"0e393a6df7796e838306a790506c8952"},{url:"page/5/index.html",revision:"9c1b8aa6d540656cfd1cb3805f2fd9cc"},{url:"posts/1b0c78b3.html",revision:"167d2ae3e8a9d980e69e9533cac047f0"},{url:"posts/1b5b87.html",revision:"13f62ea51a1ef6d36a8cb3084da6844d"},{url:"posts/28c755c.html",revision:"405694450ed913bda664a63fc2492b8b"},{url:"posts/330d6f69.html",revision:"16089a1de0264656ec9c562bfad16f1d"},{url:"posts/3b744803.html",revision:"ca231144908b1bba961fa68ce7c105ab"},{url:"posts/3da05156.html",revision:"77d31c1fe9ec2a838820bca2291814f7"},{url:"posts/3e91e0fa.html",revision:"a0635bc85bccfbd9179f7f73cb847830"},{url:"posts/41c2c0d2.html",revision:"02b979362fef4dacd7133e16d3f3b2fd"},{url:"posts/46fc5adc.html",revision:"acdcfcbeb4b53685c221b12befc7d636"},{url:"posts/493f6b85.html",revision:"a90c26f6c3a265120565d3f281ae95e2"},{url:"posts/497e40e0.html",revision:"7a9a7c35c2122685b195d75e4e2b85cb"},{url:"posts/4a17b156.html",revision:"17a6ec6fe92da9b31462d4f5620bcfaa"},{url:"posts/4e2d7b19.html",revision:"0afd350326e9c28fc0f83e1e0bbe2971"},{url:"posts/4f81eb97.html",revision:"4ecbeb1ffa4f23eccfb4336cc4e7817e"},{url:"posts/53721e0e.html",revision:"1d668afa956171956d278c340ad282c6"},{url:"posts/5dadd067.html",revision:"6af67324228f6dd7c1435c1765227e11"},{url:"posts/5ff34642.html",revision:"1a3da4cb693612d15809c215e1b1baca"},{url:"posts/653abebf.html",revision:"2325c9554bedfee4e82df877dfa15e2b"},{url:"posts/681265c2.html",revision:"00afc0875b58c40d6f8f173317dc7fc9"},{url:"posts/6f44662f.html",revision:"98010718a77a5084d9ba9488621d234d"},{url:"posts/7207f70e.html",revision:"65262caeefce2fae0a6df6cf710eee8e"},{url:"posts/7289f891.html",revision:"4f648bbc743ffbd7e459c76fb2a75a77"},{url:"posts/732e626.html",revision:"f9c467bd4581de14845673ca5c6dd177"},{url:"posts/7e13cc3b.html",revision:"0ff8a19f2e79d406b1ce86a1ddd2226d"},{url:"posts/80a7ecce.html",revision:"e8f0444a8591d613cfcc64200e5359e0"},{url:"posts/821a4686.html",revision:"040d917f6869b4deffb97654cdf70b1a"},{url:"posts/8a741756.html",revision:"87a4629dd8452baba98a7b18b81745de"},{url:"posts/918d46c1.html",revision:"3058aecc4b74240d65b626c46a773ed5"},{url:"posts/9f057e9a.html",revision:"66a6b4fcdb455152507a41ac4ba03b71"},{url:"posts/a7d437fe.html",revision:"8909a4a13866e831d7c51ce434e072a3"},{url:"posts/ace4e4cd.html",revision:"06ba0e4c09e23b8340c2c8af7773e414"},{url:"posts/af30ddef.html",revision:"4f5a7879f5bfeaf34fe9a463d4dc4a6d"},{url:"posts/b1eb9c6d.html",revision:"dda9420469c391e831c73c12d86f8fe3"},{url:"posts/b564e922.html",revision:"9cdc3765ac1f70c2eb2cfa42fb5c6c15"},{url:"posts/bc9a4dc7.html",revision:"99a432f6eb4d52357fb1c3dbcc4e90fb"},{url:"posts/be543a11.html",revision:"0b6df2535d9fe3f366a69a42c6d58372"},{url:"posts/c9b871f1.html",revision:"9e9521272b7261f3b4632846f790d0c5"},{url:"posts/d6ef11e5.html",revision:"7f565b4bec5d414f65b7de1bb171f713"},{url:"posts/dcd6fdd1.html",revision:"371aafaa6da82dc10c44a0bead5e086e"},{url:"posts/de24a124.html",revision:"e46dc4014b23f94430a60eb7ea049f35"},{url:"posts/e32cbcd3.html",revision:"b1c6fd66e6f8808cd1faf63cf23d607c"},{url:"posts/eebbc69f.html",revision:"a0cbe8611deab1e57422efce5ffb8526"},{url:"posts/f08119d7.html",revision:"a08b854e83a715ccbfd28eee143432e6"},{url:"posts/f7f51423.html",revision:"7ee806ee84cb8cf003a0483306efcc8f"},{url:"posts/fd1a8f9f.html",revision:"efc5593d728df6ec98cd8f415cf6e8ae"},{url:"shuoshuo/index.html",revision:"eac6733f28e66b3e616c6f93a4ec6488"},{url:"sw-register.js",revision:"63b5ccd5e1708d66bfb8dd63d9cc4c39"},{url:"sw.js",revision:"b6d0499d59db36c9800abd7b43f9351a"},{url:"tags/【每日早报】-2025-02-25 - 星期二.html",revision:"d066dad9f0c41d175a58f22d2988f06c"},{url:"tags/index.html",revision:"1f75184c8a70f6c21b5f5fa6440e68a4"},{url:"tags/养眼/index.html",revision:"b991a09ebe74b81ff3ba9052aab059cf"},{url:"tags/每日早报/index.html",revision:"b54ca4d50acc9b72e18d702d8b6a6ec8"},{url:"tags/每日早报/page/2/index.html",revision:"09b0b35d8dcb55e3cb57c51fdaa5bc5f"},{url:"tags/每日早报/page/3/index.html",revision:"0cb560a9033f172f077725fe6b728849"},{url:"tags/第一篇/index.html",revision:"6177eb9feee7fad1d1229cc130251bf3"},{url:"tags/网络/index.html",revision:"c1c1aee9c4f6fecf6193cd9d0a8e1860"},{url:"tags/网络/page/2/index.html",revision:"6d610ca6fd46414d4aea8aff5b078920"},{url:"template/index.html",revision:"f8521ab20cba359585e77bd20d77648a"},{url:"webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const b=e=>a(e,d),s={module:{uri:d},exports:f,require:b};i[d]=Promise.all(c.map((e=>s[e]||b(e)))).then((e=>(r(...e),f)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"【每日早报】-2025-02-19 - 星期三.html",revision:"b8bbd2e4c93ef536b633115675ce8c98"},{url:"【每日早报】-2025-02-21 - 星期五.html",revision:"a37bd6c41d8a72ad508d54183159784e"},{url:"【每日早报】-2025-02-22 - 星期六.html",revision:"6c4f7a3fbd66890cd27819a47a5f83e9"},{url:"【每日早报】-2025-02-24 - 星期一.html",revision:"fbf78b64cfbeddd62c6d21b1b07caab2"},{url:"【每日早报】-2025-02-25 - 星期二.html",revision:"fe766171992bb60fc41e728d127a6849"},{url:"【每日早报】-2025-02-26 - 星期三.html",revision:"7e56653ba108eab2c29da8ca745d26fb"},{url:"【每日早报】-2025-02-27 - 星期四.html",revision:"78a8fa3c77e1c2b1fd8321977270b458"},{url:"【每日早报】-2025-02-28 - 星期五.html",revision:"1c227492ee1b355a559e87ce83aeb2f7"},{url:"【每日早报】-2025-03-01 - 星期六.html",revision:"48c4a13e482f57b85e4279e35a3967d4"},{url:"【每日早报】-2025-03-02 - 星期日.html",revision:"11525250a1f00ab740904da4b2152965"},{url:"【每日早报】-2025-03-06 - 星期四.html",revision:"2ae3aa42c919e615c6f4e91a49dc121f"},{url:"【每日早报】-2025-03-07 - 星期五.html",revision:"4abe65e43a91b65d32f7adf15d596fde"},{url:"【每日早报】-2025-03-08 - 星期六.html",revision:"2f4c0e2443da99575d15cd9570a4a8fe"},{url:"【每日早报】-2025-03-10 - 星期一.html",revision:"31360d5c6dd297c8e060471e06823461"},{url:"【每日早报】-2025-03-11 - 星期二.html",revision:"57a511f8e19f5d9b30b301ab55d47f20"},{url:"【每日早报】-2025-03-12 - 星期三.html",revision:"cad554c1ec5a2f67d0fc901213d84c1d"},{url:"【每日早报】-2025-03-14 - 星期五.html",revision:"68e9de45ff6bb4c51d59bcf5f7a00b56"},{url:"【每日早报】-2025-03-16 - 星期日.html",revision:"63736ed503aac2f9b5b0aaa358cf8638"},{url:"【每日早报】-2025-03-20 - 星期四.html",revision:"befbaf696ec3c3dabfb35beb5c9055d5"},{url:"【每日早报】-2025-03-24 - 星期一.html",revision:"65dc51cef853170cebf154c880966cb5"},{url:"【每日早报】-2025-03-25 - 星期二.html",revision:"81f69dda868ad689fda5be5af921ec19"},{url:"404.html",revision:"240c39d3edacb5791874258c2e40021d"},{url:"about/index.html",revision:"248450ed2075cb8c9007b4428ef5ef6d"},{url:"archives/2022/08/index.html",revision:"e67d40483c145b16d87fd43a818e1eb6"},{url:"archives/2022/08/page/2/index.html",revision:"f7eed08c49a32bef528852c58551f8a4"},{url:"archives/2022/09/index.html",revision:"6c9fd99889f3f2feb4d20294b9aae125"},{url:"archives/2022/10/index.html",revision:"748ab0409f9dbc3fc90abb525a62dadc"},{url:"archives/2022/index.html",revision:"c98360e13624518e3da610012eb2742d"},{url:"archives/2022/page/2/index.html",revision:"34218731a332007878830c646c9b7817"},{url:"archives/2025/02/index.html",revision:"e687ff7c7252564a024f49cb8dedcbb1"},{url:"archives/2025/03/index.html",revision:"f0d72d7e4dda819d96ad5a1b39c63cf2"},{url:"archives/2025/03/page/2/index.html",revision:"470c1f958c77d07169913105db98b38d"},{url:"archives/2025/index.html",revision:"200c6f452cd46eee2966e2417714792d"},{url:"archives/2025/page/2/index.html",revision:"44fff6efaa33ff7bfe60003486e3a949"},{url:"archives/2025/page/3/index.html",revision:"5c13e053a1799ea36c5d0973c0b13443"},{url:"archives/index.html",revision:"4ae875fe668fd1610a8dbbeee1b7e53f"},{url:"archives/page/2/index.html",revision:"fb41c29b4d1efb4e784e9673d6c8e057"},{url:"archives/page/3/index.html",revision:"e51d2caf05023d43896d5f401f665621"},{url:"archives/page/4/index.html",revision:"931927b5a897597767f35135ff3e9df7"},{url:"archives/page/5/index.html",revision:"d338ed65419e30cacb36afa91ed96641"},{url:"categories/index.html",revision:"0c575852e2316b8b109a8ba0bfc22522"},{url:"categories/壁纸/index.html",revision:"3ec34cca1290a86eef6e896db78f7a0f"},{url:"categories/机网/index.html",revision:"edc49c41069336e2228533ddd6f3672e"},{url:"categories/机网/page/2/index.html",revision:"9d17e06a544ee69fc3a34fd1d0625928"},{url:"categories/每日早报/index.html",revision:"c92535ad89b8b9a37d8e1e78a47b16a0"},{url:"categories/每日早报/page/2/index.html",revision:"5433b6e0f6a6eb4fda475a7399f50822"},{url:"categories/每日早报/page/3/index.html",revision:"2512241a5301c824d38fd95e8f046c1c"},{url:"css/AI.css",revision:"9aee10bb289b8706777b29a5ff7aa886"},{url:"css/footer_style.css",revision:"a249941af2da87708fa46890b1526aa7"},{url:"css/index.css",revision:"0f917ac52224e2d36b5d93fb66570cb1"},{url:"css/mbg.css",revision:"05867c383188f90131cd1027fd70e03f"},{url:"css/time.css",revision:"d201337c7704a57fe1ef2031a0998f21"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"deepseek.html",revision:"d401d53754efc257f7ec3778e044c190"},{url:"description/index.html",revision:"13c6135d7d550489c78e77c806a14b4b"},{url:"fonts/FangSong.woff",revision:"2e1205c02ab84c986d1312c50762942a"},{url:"fonts/FangSong.woff2",revision:"d02ae0cef165fdb83523b29505656f3a"},{url:"fonts/Hei.woff",revision:"d69759d91a5e26b2e1526ec322debe91"},{url:"fonts/Hei.woff2",revision:"46fc9f136cf5dd3ca34d11f73449a178"},{url:"fonts/kaiti.woff",revision:"37090e9ed628a176f4bdf8321653316d"},{url:"fonts/kaiti.woff2",revision:"22aa1fdbb9ae8d746f07272ff560327e"},{url:"fonts/ZiHunBaiGeTianXing.woff",revision:"531882870cf78ed085cd10f9d180dc08"},{url:"fonts/ZiHunBaiGeTianXing.woff2",revision:"ba841e317f1b3e8c14a306b28aa5deb1"},{url:"Gallery/index.html",revision:"23378143ace6cb1fa18491fee7bb8644"},{url:"hello-world.html",revision:"1fc8630a0ed08f302f1732279c184952"},{url:"img/1.jpg",revision:"0a53047d1013252766cd4485628483a9"},{url:"img/2.jpg",revision:"f872c0d4b9405ee4f510075a6a0b67cf"},{url:"img/3.jpg",revision:"f50648c341b6890be845a076e2c4773b"},{url:"img/4.jpg",revision:"fb2b90ad365a76fb19e954b0124c1b42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/5.jpg",revision:"81407116c5f5f01568bdcd3ab603c162"},{url:"img/6.jpg",revision:"d81e36595d706a5d8f64ccc608124b52"},{url:"img/algolia_logo.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-next.png",revision:"fce961f0bd3cd769bf9c605ae6749bc0"},{url:"img/author.png",revision:"f9466a911c8a62281251ff72d36cc26f"},{url:"img/avatar.gif",revision:"7a2fe6b906600a9354cece6d9ced2992"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cc-by-nc-nd.svg",revision:"1c681acc4a150e7236254c464bb5a797"},{url:"img/cc-by-nc-sa.svg",revision:"12b4b29e8453be5b7828b524d3feabce"},{url:"img/cc-by-nc.svg",revision:"dd9cfe99ed839a4a548114f988d653f4"},{url:"img/cc-by-nd.svg",revision:"2d80546af20128215dc1e23ef42d06c2"},{url:"img/cc-by-sa.svg",revision:"c696b3db81cbbfba32f66c1dc88b909a"},{url:"img/cc-by.svg",revision:"6c4f8422b3725cb9f26b6c00e95fc88b"},{url:"img/cc-zero.svg",revision:"79deee77a07fcb79ff680ac0125eacb9"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/favicon-16x16-next.png",revision:"b8975923a585dbaa8519a6068e364947"},{url:"img/favicon-32x32-next.png",revision:"5a029563fe3214c96f68b46556670ea1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.svg",revision:"ddad9027e42111ccd5b466bc18188970"},{url:"img/spy.jpg",revision:"67ea61220cbdff5b56c0c3eadad4e983"},{url:"img/time.jpg",revision:"996c02352e2fdb7d1cf94c470d688492"},{url:"img/time1.jpg",revision:"234aacb842b3b5ba067253253ffae2b4"},{url:"img/wechat.jpg",revision:"2daac5896292bac19bdd98123d3758e7"},{url:"img/weixin.jpg",revision:"50dba67e49fba5ba6649b59c4e83fbdc"},{url:"img/wyu.jpg",revision:"19b19e9ec49c4de42f7ccdc13273840c"},{url:"img/yanjiang.jpg",revision:"3c0001f990b70b0c807db58544cbd135"},{url:"index.html",revision:"a2d6b1115cdaaa2173ae4ec35403a046"},{url:"js/AI.js",revision:"f9044fafcf3050e329d1c4adc19f2533"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/mbg.js",revision:"307bb142003e5c82c84a09f306fa1ae1"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/time.js",revision:"3e7f3ae43512a4e538084c04875d7071"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"js/webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"keywords/index.html",revision:"b54576e048c5b2901dc023b9388eaab5"},{url:"link/index.html",revision:"03ccea3be2a5fe7459f7d84b55080292"},{url:"music/index.html",revision:"2b8046a63b8fd15d29a7dac20dfc98c1"},{url:"page/2/index.html",revision:"7faf1083c518a386e687862dddd43271"},{url:"page/3/index.html",revision:"6213b63388f75ad8d82ae14c56d632be"},{url:"page/4/index.html",revision:"b2eded09958ffd99de91e21e3bacae51"},{url:"page/5/index.html",revision:"6785f1aa8e3a85aa5d80e9d6776b6460"},{url:"shuoshuo/index.html",revision:"9b96b05224592f4a02128e95f5354a78"},{url:"sw-register.js",revision:"820cc3e8219fdac9b2faae1d644904e4"},{url:"sw.js",revision:"24ccc13d4460a439fa61ad272894ca7b"},{url:"tags/【每日早报】-2025-02-25 - 星期二.html",revision:"8042eca28ee6734f9ca872f6d7d43cd6"},{url:"tags/index.html",revision:"f110859a418b40b4fb4b755cde590e1f"},{url:"tags/养眼/index.html",revision:"2d2f5e1f6d46e92124396110757a2943"},{url:"tags/日常/index.html",revision:"23d2631379860e630efb89d55d12e521"},{url:"tags/每日早报/index.html",revision:"d18bdcf50055643654b2282a301c430a"},{url:"tags/每日早报/page/2/index.html",revision:"6550f225ac7d1924a665bf0e7746d8b1"},{url:"tags/每日早报/page/3/index.html",revision:"451cccb4251b6ec60efd1583e1f9fde7"},{url:"tags/第一篇/index.html",revision:"f451b90b5a15e2984569534302579937"},{url:"tags/网络/index.html",revision:"bd30c5f2145edc0fe3fee1bf43d41fd4"},{url:"tags/网络/page/2/index.html",revision:"d3479a71f7fa56109b2356b09583fb3b"},{url:"template/index.html",revision:"8f76c41353308994bc39f17ee77a5e31"},{url:"temple.html",revision:"69d66d0e5213341e1084a0c5cb8a8519"},{url:"test-post.html",revision:"ba6b4567922385e6e78436ad236fa893"},{url:"webhook.html",revision:"c6e4034bc4e133998c6f7215c296bde6"},{url:"webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"分享壁纸(一).html",revision:"a323ce7da4370c9c4fe9f039387c77d1"},{url:"分享壁纸(三).html",revision:"1e2b571f82c14a124c0ff1f15ea19bb6"},{url:"分享壁纸(二).html",revision:"1d959cb2e815c344f739e4277853be53"},{url:"又是一个不眠之夜.html",revision:"75100b6cc3792e8df6aa32523228561d"},{url:"咒术回战.html",revision:"ae146f35f4934ff19812696b1f3e4278"},{url:"开端.html",revision:"610b300c8f81d06df7c37cb29c5d2596"},{url:"计算机网络-数据链路(一)8-30.html",revision:"1dd412887a73be2b20cf50c1c255404b"},{url:"计算机网络-数据链路(三).html",revision:"47a2eabc38325a85d77d948cf4aef3cb"},{url:"计算机网络-数据链路(二)8-31.html",revision:"577c8e3e17b4642d8b26ebdce1642f15"},{url:"计算机网络-数据链路(五).html",revision:"0998f66712abff268625b1108e4efbab"},{url:"计算机网络-数据链路(六).html",revision:"9b8688f0a4e344752f876a0a5a047cbf"},{url:"计算机网络-数据链路(四).html",revision:"3b76e176bdcca9f99f0cc41b44e58add"},{url:"计算机网络-数据链路层(七)9-5.html",revision:"1fe0dd4eec54547dd996ace4d5b6bdea"},{url:"计算机网络-物理层(一)8-28.html",revision:"1b125d18f4b08665dba9a7bf4f43768c"},{url:"计算机网络-物理层(二)8-29.html",revision:"644a344a4b04085ad09014b68da0cd9b"},{url:"计算机网络-网络层(一)9-6.html",revision:"f6a71eb50bf64984c714a7de8d93234a"},{url:"计算机网络体系分层思想(8-27).html",revision:"7fcb5dddb2ee86787ca8ecee8df43280"},{url:"计算机网络性能和体系结构（8.26）.html",revision:"c73c10e7367f64b2ff3ffddf3cab7b8c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

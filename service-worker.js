if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let d={};const b=e=>c(e,f),s={module:{uri:f},exports:d,require:b};i[f]=Promise.all(a.map((e=>s[e]||b(e)))).then((e=>(r(...e),d)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"【每日早报】-2025-02-19 - 星期三.html",revision:"ca7eae6d092f53f7aa6a0697ed39f9c3"},{url:"【每日早报】-2025-02-21 - 星期五.html",revision:"69ca5d9d00cf2846e751cf5b409402c8"},{url:"【每日早报】-2025-02-22 - 星期六.html",revision:"ebb4a5d78602f063c208c9a80fff9c67"},{url:"【每日早报】-2025-02-24 - 星期一.html",revision:"d5fb1da625fac21c47ca2bb747638449"},{url:"【每日早报】-2025-02-25 - 星期二.html",revision:"e83423f234c8e253768f08996733af78"},{url:"【每日早报】-2025-02-26 - 星期三.html",revision:"7a2674e0208eb7068e20b86ce409d056"},{url:"【每日早报】-2025-02-27 - 星期四.html",revision:"8090c38114ff21dfd42ea96c5b74bf32"},{url:"【每日早报】-2025-02-28 - 星期五.html",revision:"d2866a5b2486c561ca58630235e9550f"},{url:"【每日早报】-2025-03-01 - 星期六.html",revision:"da5c55dfa06af8fa1565b4c93c5ca7ce"},{url:"【每日早报】-2025-03-02 - 星期日.html",revision:"1b6026da076550a240e72c5eb89dea44"},{url:"【每日早报】-2025-03-06 - 星期四.html",revision:"94ce9dd45b1424fce78e94d4a85e86f9"},{url:"【每日早报】-2025-03-07 - 星期五.html",revision:"76ab223d8623c70566979dad8b3d51f5"},{url:"【每日早报】-2025-03-08 - 星期六.html",revision:"82d9daff1075d43d5f57d55bc70d95d0"},{url:"【每日早报】-2025-03-10 - 星期一.html",revision:"6c400f8ed8497d53fb731aeed3ac8f6b"},{url:"【每日早报】-2025-03-11 - 星期二.html",revision:"2159ff18d89f85676ad70f9ee7b1d073"},{url:"【每日早报】-2025-03-12 - 星期三.html",revision:"62eee737aa745275f3f07e1996ff23b0"},{url:"【每日早报】-2025-03-14 - 星期五.html",revision:"e3e330667b44f32f54949d6297886291"},{url:"【每日早报】-2025-03-16 - 星期日.html",revision:"a7a225d671ada81a3e92f361116e7ab9"},{url:"【每日早报】-2025-03-20 - 星期四.html",revision:"af89c138c1e70a4b7e1f57f527114ecb"},{url:"【每日早报】-2025-03-24 - 星期一.html",revision:"c25b7cc169677e8ba5dc3fc73eb7c220"},{url:"【每日早报】-2025-03-25 - 星期二.html",revision:"7370d17697bbf3a75ad03839f66c68c9"},{url:"404.html",revision:"0ffb737603388a0ff0ffea13b7504887"},{url:"about/index.html",revision:"a1b5a3059c8115666cba1c060d675762"},{url:"archives/2022/08/index.html",revision:"1e322b7c6fcf8d19a34b3c4061254919"},{url:"archives/2022/08/page/2/index.html",revision:"71abcfc8e14d850ea0035b773d900460"},{url:"archives/2022/09/index.html",revision:"04c77b7c20d20040c4f31f8c7feb84ea"},{url:"archives/2022/10/index.html",revision:"63f86f418d6e3755a401f2c682bb9c2a"},{url:"archives/2022/index.html",revision:"3f8a30cd77d141c67442284afe10f614"},{url:"archives/2022/page/2/index.html",revision:"231a589ed1fa0405c8b9b6277c2816f3"},{url:"archives/2025/02/index.html",revision:"d214d121ffbafd55bf510b06dc8603c9"},{url:"archives/2025/03/index.html",revision:"687285fa5b687a9c9ee5f32781132c5a"},{url:"archives/2025/03/page/2/index.html",revision:"6007678470a837a1457e31557a69c20a"},{url:"archives/2025/index.html",revision:"b670f10169a042e7d1cf7ab69bb9169f"},{url:"archives/2025/page/2/index.html",revision:"c75b76d23f99554509fecb82f53535fc"},{url:"archives/2025/page/3/index.html",revision:"09fe943fe7940369659b5751b322133b"},{url:"archives/index.html",revision:"93064ee8dff84b589e86ad34845af9e1"},{url:"archives/page/2/index.html",revision:"d2b1bf8cc8cf96cc4404e4209bb757c7"},{url:"archives/page/3/index.html",revision:"75e41e60f82ab3d813606c996a5d6bf5"},{url:"archives/page/4/index.html",revision:"44cb44fad23b35c1023ec98ef605bd74"},{url:"archives/page/5/index.html",revision:"f626783fdb5ff8ca3b99c26a250ead20"},{url:"categories/index.html",revision:"c2b2f2d35feb0cbd283c6015f0a6c953"},{url:"categories/壁纸/index.html",revision:"24e7f7655c98d679913bfe85f5de947d"},{url:"categories/机网/index.html",revision:"3b0dcf406286cebdaa7e3b2eb1d49c11"},{url:"categories/机网/page/2/index.html",revision:"e6f9a136ec3eba1a014a6c61d3754c12"},{url:"categories/每日早报/index.html",revision:"e4de821c9b624f3b7ec65afbee551e31"},{url:"categories/每日早报/page/2/index.html",revision:"999b613d09bffa0d3b28edae191e304a"},{url:"categories/每日早报/page/3/index.html",revision:"829f8ff790753dd1192f2afcb1a4505d"},{url:"css/AI.css",revision:"9aee10bb289b8706777b29a5ff7aa886"},{url:"css/footer_style.css",revision:"a249941af2da87708fa46890b1526aa7"},{url:"css/index.css",revision:"0f917ac52224e2d36b5d93fb66570cb1"},{url:"css/mbg.css",revision:"05867c383188f90131cd1027fd70e03f"},{url:"css/time.css",revision:"d201337c7704a57fe1ef2031a0998f21"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"deepseek.html",revision:"435baa2c60268b4e2735eda86265440b"},{url:"description/index.html",revision:"ffa4bc638c42704f43f45fa5f3f5cffd"},{url:"fonts/FangSong.woff",revision:"2e1205c02ab84c986d1312c50762942a"},{url:"fonts/FangSong.woff2",revision:"d02ae0cef165fdb83523b29505656f3a"},{url:"fonts/Hei.woff",revision:"d69759d91a5e26b2e1526ec322debe91"},{url:"fonts/Hei.woff2",revision:"46fc9f136cf5dd3ca34d11f73449a178"},{url:"fonts/kaiti.woff",revision:"37090e9ed628a176f4bdf8321653316d"},{url:"fonts/kaiti.woff2",revision:"22aa1fdbb9ae8d746f07272ff560327e"},{url:"fonts/ZiHunBaiGeTianXing.woff",revision:"531882870cf78ed085cd10f9d180dc08"},{url:"fonts/ZiHunBaiGeTianXing.woff2",revision:"ba841e317f1b3e8c14a306b28aa5deb1"},{url:"Gallery/index.html",revision:"2d49286b90bd14d8551278dc90bc6b63"},{url:"hello-world.html",revision:"feb45308aad933f23014423dee94ac54"},{url:"img/1.jpg",revision:"0a53047d1013252766cd4485628483a9"},{url:"img/2.jpg",revision:"f872c0d4b9405ee4f510075a6a0b67cf"},{url:"img/3.jpg",revision:"f50648c341b6890be845a076e2c4773b"},{url:"img/4.jpg",revision:"fb2b90ad365a76fb19e954b0124c1b42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/5.jpg",revision:"81407116c5f5f01568bdcd3ab603c162"},{url:"img/6.jpg",revision:"d81e36595d706a5d8f64ccc608124b52"},{url:"img/algolia_logo.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-next.png",revision:"fce961f0bd3cd769bf9c605ae6749bc0"},{url:"img/author.png",revision:"f9466a911c8a62281251ff72d36cc26f"},{url:"img/avatar.gif",revision:"7a2fe6b906600a9354cece6d9ced2992"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cc-by-nc-nd.svg",revision:"1c681acc4a150e7236254c464bb5a797"},{url:"img/cc-by-nc-sa.svg",revision:"12b4b29e8453be5b7828b524d3feabce"},{url:"img/cc-by-nc.svg",revision:"dd9cfe99ed839a4a548114f988d653f4"},{url:"img/cc-by-nd.svg",revision:"2d80546af20128215dc1e23ef42d06c2"},{url:"img/cc-by-sa.svg",revision:"c696b3db81cbbfba32f66c1dc88b909a"},{url:"img/cc-by.svg",revision:"6c4f8422b3725cb9f26b6c00e95fc88b"},{url:"img/cc-zero.svg",revision:"79deee77a07fcb79ff680ac0125eacb9"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/favicon-16x16-next.png",revision:"b8975923a585dbaa8519a6068e364947"},{url:"img/favicon-32x32-next.png",revision:"5a029563fe3214c96f68b46556670ea1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.svg",revision:"ddad9027e42111ccd5b466bc18188970"},{url:"img/spy.jpg",revision:"67ea61220cbdff5b56c0c3eadad4e983"},{url:"img/time.jpg",revision:"996c02352e2fdb7d1cf94c470d688492"},{url:"img/time1.jpg",revision:"234aacb842b3b5ba067253253ffae2b4"},{url:"img/wechat.jpg",revision:"2daac5896292bac19bdd98123d3758e7"},{url:"img/weixin.jpg",revision:"50dba67e49fba5ba6649b59c4e83fbdc"},{url:"img/wyu.jpg",revision:"19b19e9ec49c4de42f7ccdc13273840c"},{url:"img/yanjiang.jpg",revision:"3c0001f990b70b0c807db58544cbd135"},{url:"index.html",revision:"a8fe614811e1a1e1733474cd8757d86d"},{url:"js/AI.js",revision:"f9044fafcf3050e329d1c4adc19f2533"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/mbg.js",revision:"307bb142003e5c82c84a09f306fa1ae1"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/time.js",revision:"3e7f3ae43512a4e538084c04875d7071"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"js/webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"keywords/index.html",revision:"4421b166f4f42f004bfe055f23c4deb9"},{url:"link/index.html",revision:"1f7d5e51b979bc9f78c0858062b17aa6"},{url:"music/index.html",revision:"8afb2c4c845256a1f78dbb94230f8d6b"},{url:"page/2/index.html",revision:"7d61b6f1ead6a5db2d23f17b6cd1e558"},{url:"page/3/index.html",revision:"495397c3df10b9cc50e630d537eef22f"},{url:"page/4/index.html",revision:"0a29584f8e9599511d510754f9048868"},{url:"page/5/index.html",revision:"2dfa6286c4647af5bebbfbfce062641d"},{url:"shuoshuo/index.html",revision:"3cd9b5df45cc41d27ac7649521d5e71d"},{url:"sw-register.js",revision:"56f187007373389751293bf2acbeceaa"},{url:"sw.js",revision:"24ccc13d4460a439fa61ad272894ca7b"},{url:"tags/【每日早报】-2025-02-25 - 星期二.html",revision:"8351643ea7f258a1d384a4b3cb71ae81"},{url:"tags/index.html",revision:"8b000c10f17ca96226b2dfd0bcfabb72"},{url:"tags/养眼/index.html",revision:"0c498d344a1c2031babf7e5c90149357"},{url:"tags/日常/index.html",revision:"b6d934e8c59ffea82bdfcc355318a90f"},{url:"tags/每日早报/index.html",revision:"e650e511a0a097f895bf92b12f6fefb3"},{url:"tags/每日早报/page/2/index.html",revision:"d1e1e95e6b87ebd22fa40288c4597e8a"},{url:"tags/每日早报/page/3/index.html",revision:"853c278f13db0e13daa27020fb90ebd6"},{url:"tags/第一篇/index.html",revision:"4c755c1ef3d6087279c278a01ccec591"},{url:"tags/网络/index.html",revision:"0ed017fa8314a300a16e4dede151bfe2"},{url:"tags/网络/page/2/index.html",revision:"b201ef1d877189e813d9dcce20b3da98"},{url:"template/index.html",revision:"5229b8aa95c97fc88f1ab663e19d4974"},{url:"temple.html",revision:"883ac52d528008b861abb510ebc37dc3"},{url:"test-post.html",revision:"0f9e941e8e85e8594bf47f02a880209c"},{url:"webhook.html",revision:"cec5ecaf880dd6748c867d0b65253a2f"},{url:"webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"分享壁纸(一).html",revision:"b019511875b1eada87c5f69d45cb3b1d"},{url:"分享壁纸(三).html",revision:"f010c3de22e78f48b08580f0e6c1b465"},{url:"分享壁纸(二).html",revision:"4b966fcd8b9584727f1ab40402f08950"},{url:"又是一个不眠之夜.html",revision:"b287b7aecac823b7eafced09665ca4b1"},{url:"咒术回战.html",revision:"1862af1abcc5598c7f74d6152017e869"},{url:"开端.html",revision:"5dde5c9599ffdaede7ac2cd45e17b479"},{url:"计算机网络-数据链路(一)8-30.html",revision:"c40e3716bac6d4c0b8b5b65bc795f104"},{url:"计算机网络-数据链路(三).html",revision:"12ca1c60e94c14e4786e577d541037bd"},{url:"计算机网络-数据链路(二)8-31.html",revision:"aaefc9d2d9d61cbc0886f5ef5ccf758a"},{url:"计算机网络-数据链路(五).html",revision:"1f07a585da52cd4c69d621ff0a734cdf"},{url:"计算机网络-数据链路(六).html",revision:"e342d8bb76db126285d9d6febc07963a"},{url:"计算机网络-数据链路(四).html",revision:"f71702c567354014edf89ba64836ba77"},{url:"计算机网络-数据链路层(七)9-5.html",revision:"bb235852f7560e14012a37f700782911"},{url:"计算机网络-物理层(一)8-28.html",revision:"f196778b3e7c999241dcc1a8e83f8af6"},{url:"计算机网络-物理层(二)8-29.html",revision:"84386333b3be389197ed7e21c41f9b00"},{url:"计算机网络-网络层(一)9-6.html",revision:"daea6606f1b30c308517c49cbfc5a418"},{url:"计算机网络体系分层思想(8-27).html",revision:"be69a51a7fe8d1fcf6a5e7a2ec8f07fb"},{url:"计算机网络性能和体系结构（8.26）.html",revision:"c8be1be2ce9d452b8b00766c6cf7100d"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

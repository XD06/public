if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const s=e=>c(e,r),f={module:{uri:r},exports:b,require:s};i[r]=Promise.all(a.map((e=>f[e]||s(e)))).then((e=>(d(...e),b)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"【每日早报】-2025-02-19 - 星期三.html",revision:"cdb775acb75c96799b27438eca351708"},{url:"【每日早报】-2025-02-21 - 星期五.html",revision:"dc5e32e337cb7e30a705acae6a66158a"},{url:"【每日早报】-2025-02-22 - 星期六.html",revision:"9c1de7b8dc9a6a0bed5bb1309b70e169"},{url:"【每日早报】-2025-02-24 - 星期一.html",revision:"7895ece223c27b27992a25a883caa436"},{url:"【每日早报】-2025-02-25 - 星期二.html",revision:"6c377ee4413588e8c368258ff89f3b12"},{url:"【每日早报】-2025-02-26 - 星期三.html",revision:"a55266fe8ddacb4ee6eb62d4a4d76b76"},{url:"【每日早报】-2025-02-27 - 星期四.html",revision:"b537db08fd2ea89bfed1c3db515a3a3d"},{url:"【每日早报】-2025-02-28 - 星期五.html",revision:"264b4c788e07ddf1cfb8da558c20eda4"},{url:"【每日早报】-2025-03-01 - 星期六.html",revision:"e8745bb5944175ff3682bcb8c035e5fa"},{url:"【每日早报】-2025-03-02 - 星期日.html",revision:"3aff1e10f7da43a8f8f910e9316f57fb"},{url:"【每日早报】-2025-03-06 - 星期四.html",revision:"9deb309aecf244443fb6d24e261e7a02"},{url:"404.html",revision:"722e35a28d0e0611346db6bb21135d77"},{url:"about/index.html",revision:"9661c4fe7d18ad98f06bad1c72401257"},{url:"archives/2022/08/index.html",revision:"27d7d3d163b4ceb8a079bd6732cf4a80"},{url:"archives/2022/08/page/2/index.html",revision:"e481af478779024294e4b7ec39c8e245"},{url:"archives/2022/09/index.html",revision:"ddc33836c81065cdce8424794ad11ee0"},{url:"archives/2022/10/index.html",revision:"48d4bb009b6001a5ab693f1c1a2cc209"},{url:"archives/2022/index.html",revision:"b25fd538217875f5f257b887959145ab"},{url:"archives/2022/page/2/index.html",revision:"53bd5d69e508490e763be9e3e83506d7"},{url:"archives/2025/02/index.html",revision:"0112a307757ce65c608757e36236c92c"},{url:"archives/2025/03/index.html",revision:"fe99b3db2a3fca568ad74c3de236bc6c"},{url:"archives/2025/index.html",revision:"ecc66b85d876827e3d5803700eb26990"},{url:"archives/2025/page/2/index.html",revision:"2b2b6ea5d2d743d6278ba142bf6f5d7b"},{url:"archives/index.html",revision:"5188e8271924f206b26f9a7ca70c788d"},{url:"archives/page/2/index.html",revision:"cbe772a5581de54634128d1a0ee4be0d"},{url:"archives/page/3/index.html",revision:"c7c8f9418c634ec71bdeb288f11f7845"},{url:"archives/page/4/index.html",revision:"bca56cb0de4a5e13cb0ab3fab6bdc296"},{url:"categories/index.html",revision:"919d9129ccee24a729b5f1b4dccf8270"},{url:"categories/壁纸/index.html",revision:"8f56ea99d8cc6b965eaa27372e165be4"},{url:"categories/机网/index.html",revision:"a4cb195cd76ed9470d9d4a02ca6c4426"},{url:"categories/机网/page/2/index.html",revision:"20dc4340c801f30fad0ccfb2276ce356"},{url:"categories/每日早报/index.html",revision:"6cdd80b04b0eaee5b37ab8f57de1f7dc"},{url:"categories/每日早报/page/2/index.html",revision:"9151d9febaf7df84ffb062f3474a5dc4"},{url:"css/footer_style.css",revision:"a249941af2da87708fa46890b1526aa7"},{url:"css/index.css",revision:"73f18fcc94f179b5651f3a6d17873995"},{url:"css/mbg.css",revision:"428fd7f7c8d276eb88b760be488d2659"},{url:"css/time.css",revision:"d201337c7704a57fe1ef2031a0998f21"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"description/index.html",revision:"0c40321e8ca88931a588f22862c3043c"},{url:"fonts/FangSong.ttf",revision:"6c2c6cb9a9d43dcd8d64544ee821a9c0"},{url:"fonts/Hei.ttf",revision:"1247ceac203ab8dd2f94168f60bb6fb8"},{url:"fonts/kaiti.ttf",revision:"c1f3ac5d0e48120a8906a93fdc82e12f"},{url:"Gallery/index.html",revision:"e312efaa4eecbf511ce1fd0f68ecad14"},{url:"hello-world.html",revision:"d2425d359245f29408c38c051072f322"},{url:"img/1.jpg",revision:"0a53047d1013252766cd4485628483a9"},{url:"img/2.jpg",revision:"f872c0d4b9405ee4f510075a6a0b67cf"},{url:"img/3.jpg",revision:"f50648c341b6890be845a076e2c4773b"},{url:"img/4.jpg",revision:"fb2b90ad365a76fb19e954b0124c1b42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/5.jpg",revision:"81407116c5f5f01568bdcd3ab603c162"},{url:"img/6.jpg",revision:"d81e36595d706a5d8f64ccc608124b52"},{url:"img/algolia_logo.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-next.png",revision:"fce961f0bd3cd769bf9c605ae6749bc0"},{url:"img/author.png",revision:"f9466a911c8a62281251ff72d36cc26f"},{url:"img/avatar.gif",revision:"7a2fe6b906600a9354cece6d9ced2992"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cc-by-nc-nd.svg",revision:"1c681acc4a150e7236254c464bb5a797"},{url:"img/cc-by-nc-sa.svg",revision:"12b4b29e8453be5b7828b524d3feabce"},{url:"img/cc-by-nc.svg",revision:"dd9cfe99ed839a4a548114f988d653f4"},{url:"img/cc-by-nd.svg",revision:"2d80546af20128215dc1e23ef42d06c2"},{url:"img/cc-by-sa.svg",revision:"c696b3db81cbbfba32f66c1dc88b909a"},{url:"img/cc-by.svg",revision:"6c4f8422b3725cb9f26b6c00e95fc88b"},{url:"img/cc-zero.svg",revision:"79deee77a07fcb79ff680ac0125eacb9"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/favicon-16x16-next.png",revision:"b8975923a585dbaa8519a6068e364947"},{url:"img/favicon-32x32-next.png",revision:"5a029563fe3214c96f68b46556670ea1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.svg",revision:"ddad9027e42111ccd5b466bc18188970"},{url:"img/spy.jpg",revision:"67ea61220cbdff5b56c0c3eadad4e983"},{url:"img/time.jpg",revision:"996c02352e2fdb7d1cf94c470d688492"},{url:"img/time1.jpg",revision:"234aacb842b3b5ba067253253ffae2b4"},{url:"img/wechat.jpg",revision:"2daac5896292bac19bdd98123d3758e7"},{url:"img/weixin.jpg",revision:"50dba67e49fba5ba6649b59c4e83fbdc"},{url:"img/wyu.jpg",revision:"19b19e9ec49c4de42f7ccdc13273840c"},{url:"img/yanjiang.jpg",revision:"3c0001f990b70b0c807db58544cbd135"},{url:"index.html",revision:"fde895340da360903ace34821cee2740"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/mbg.js",revision:"f779a5dad589df1439df9f68f528b9c9"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/time.js",revision:"3e7f3ae43512a4e538084c04875d7071"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"js/webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"keywords/index.html",revision:"2067f8f35706ba992b67f4fa48724042"},{url:"link/index.html",revision:"20219b3529377eae36916babf5f7c087"},{url:"music/index.html",revision:"1f48f245e73bf36bda26420103846291"},{url:"page/2/index.html",revision:"86d662df307cdb0c970a0dae91394d9d"},{url:"page/3/index.html",revision:"8b14e0f53d968e9b44e7c1fc90a5980a"},{url:"page/4/index.html",revision:"bc6c5801181cf10f819bf7d3baa24073"},{url:"shuoshuo/index.html",revision:"2230ef006ad29e763923aa30a1ff4013"},{url:"sw-register.js",revision:"89ad3f364566688502956b975c07c2c6"},{url:"sw.js",revision:"24ccc13d4460a439fa61ad272894ca7b"},{url:"tags/【每日早报】-2025-02-25 - 星期二.html",revision:"10c8d3e95276615420770934bae09db3"},{url:"tags/index.html",revision:"b23750477fdc8431e630bc7c84c66773"},{url:"tags/养眼/index.html",revision:"39f4ba9fae91ab99146945ac071360e4"},{url:"tags/日常/index.html",revision:"909ad8e1b8bd1749ae15a22ed53f6c7d"},{url:"tags/每日早报/index.html",revision:"f9bb4a7206cfdad4a56dc9d478b72736"},{url:"tags/每日早报/page/2/index.html",revision:"11082b7d628e93ad933c9b7144277797"},{url:"tags/第一篇/index.html",revision:"32ec4af2dc7f2b517f89195ae89990cc"},{url:"tags/网络/index.html",revision:"e0898d2d228b10f0ed9e569e520d4123"},{url:"tags/网络/page/2/index.html",revision:"21cfab4bf68197c50632213c03c346c5"},{url:"template/index.html",revision:"a929c34c3b9ee736da3425ad7f04ff7b"},{url:"test-post.html",revision:"6a032dc8b930d4f7130caa59f7c610bb"},{url:"test.html",revision:"ca6fae737646d77aa170e2e44d62b144"},{url:"webhook.html",revision:"cabdaa696c60a1f4d6375899c56120c0"},{url:"webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"分享壁纸(一).html",revision:"857785defc775d55454c32f10c9920c1"},{url:"分享壁纸(三).html",revision:"8ecfe1aa5ab2a80a4f320e214ddb7bb7"},{url:"分享壁纸(二).html",revision:"ebcceb3bc8d2e40d580ff566da2e277a"},{url:"又是一个不眠之夜.html",revision:"f61697bf28e1d243bfa43b6fd08de843"},{url:"咒术回战.html",revision:"b425e19ab693a66ab606a7f13d5b2c12"},{url:"开端.html",revision:"ee4daa278ffcec056fdf61a83da3880f"},{url:"白桃露露.html",revision:"8e365e6d5d4829ade5726cb537afb090"},{url:"示例.html",revision:"d100ec3e084927628dce8b1a2ec0f388"},{url:"计算机网络-数据链路(一)8-30.html",revision:"9f76d09207ee5e1367ee5dd5a2d688af"},{url:"计算机网络-数据链路(三).html",revision:"e7fbd42c0af942f6f0edd9deea86cd00"},{url:"计算机网络-数据链路(二)8-31.html",revision:"0248d8d8c7b09b48093f41045fb32e9a"},{url:"计算机网络-数据链路(五).html",revision:"a0a39ebd63d54d409bb7922c67d02559"},{url:"计算机网络-数据链路(六).html",revision:"6fc3a486af2b1dd7f907ef3d15b4a9a6"},{url:"计算机网络-数据链路(四).html",revision:"6c7f10e5c57dfd1d76e58086880e87c2"},{url:"计算机网络-数据链路层(七)9-5.html",revision:"91615c4603704e9bb9e7a7ca9e5fe533"},{url:"计算机网络-物理层(一)8-28.html",revision:"08089b9d56064e1540e8d676a58b11a4"},{url:"计算机网络-物理层(二)8-29.html",revision:"3227050626d65226048e71a454a37676"},{url:"计算机网络-网络层(一)9-6.html",revision:"ae2390acd0aec290b417d27e1986fbf9"},{url:"计算机网络体系分层思想(8-27).html",revision:"ae98a3d87d21aad9ac3dc72eb27328ed"},{url:"计算机网络性能和体系结构（8.26）.html",revision:"b24d97aa06922d511490c0e188df573c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

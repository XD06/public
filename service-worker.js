if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const f=e=>a(e,r),b={module:{uri:r},exports:d,require:f};i[r]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(s(...e),d)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2621612e0752db13d67ed3eb133206f6"},{url:"about/index.html",revision:"ed23e401f2677958a2b6623007b6f7aa"},{url:"archives/2022/08/index.html",revision:"24abe89d7e62a90cf69eb2bafff70aa3"},{url:"archives/2022/09/index.html",revision:"48942769edb1d8a3ee6dc2e71b046ee1"},{url:"archives/2022/10/index.html",revision:"30d60e52411ea9413699b4e68e46f5ee"},{url:"archives/2022/index.html",revision:"fd4c50e334093752ff278f06d52f47c1"},{url:"archives/2022/page/2/index.html",revision:"0e257fc1c946699caf469a43ba2ed2ff"},{url:"archives/2025/02/index.html",revision:"d322ce24fd452f9911427b12d06f7af5"},{url:"archives/2025/02/page/2/index.html",revision:"fd031362efc3050fd75f801d307ad2ce"},{url:"archives/2025/03/index.html",revision:"d1a5701269d540344fac926f372cc7e4"},{url:"archives/2025/03/page/2/index.html",revision:"c063516bb0ee4e5a0f5dc72a048d16e0"},{url:"archives/2025/04/index.html",revision:"2ddc5030427acfa3680a1ca50fd200fc"},{url:"archives/2025/index.html",revision:"b4c74ad22973d176ed8843034094dbff"},{url:"archives/2025/page/2/index.html",revision:"c2a2c7a7fc924096519b2a5328aa2799"},{url:"archives/2025/page/3/index.html",revision:"7b068169015998bed96dd2c249480521"},{url:"archives/index.html",revision:"020f665ab7b29b39096acb4b68e482a5"},{url:"archives/page/2/index.html",revision:"f0bc6e8492f4d0157ab9ae1d07e24a34"},{url:"archives/page/3/index.html",revision:"86fea714de310fe7436ffcc88ac5076e"},{url:"archives/page/4/index.html",revision:"8f10eebb3a4ca9b9303d40663dc54786"},{url:"archives/page/5/index.html",revision:"b8cd5b480bb778038b4dd177dfb41b6b"},{url:"baidu_verify_codeva-cwyza0ZFJb.html",revision:"2dbc9a7dece3113c807789215350afa8"},{url:"baidu_verify_codeva-J5b2WWChcR.html",revision:"c497bb0a31ab1ba255017067866ead24"},{url:"categories/index.html",revision:"097e70afe78973956bfa447261e807a2"},{url:"categories/壁纸/index.html",revision:"9724321a6fb220a08e7f8caffbbd751f"},{url:"categories/机网/index.html",revision:"9e0c0b610410e116c3dfaf7bfc9bc7a9"},{url:"categories/机网/page/2/index.html",revision:"00ffcd18fc39fb263aedbeda3239351d"},{url:"categories/每日早报/index.html",revision:"69caee88647c1b5ccd989f58383f3e18"},{url:"categories/每日早报/page/2/index.html",revision:"1e977dab71097f05f4396bc9fda82af1"},{url:"categories/每日早报/page/3/index.html",revision:"be08c55626e798a3b4d358010c0e765b"},{url:"css/AI.css",revision:"9aee10bb289b8706777b29a5ff7aa886"},{url:"css/footer_style.css",revision:"a249941af2da87708fa46890b1526aa7"},{url:"css/index.css",revision:"9ec00f49de7af849b2db836874f8a7e1"},{url:"css/mbg.css",revision:"05867c383188f90131cd1027fd70e03f"},{url:"css/progress_bar.css",revision:"43c65b42d14caff9cf1417487790893c"},{url:"css/time.css",revision:"d201337c7704a57fe1ef2031a0998f21"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"description/index.html",revision:"b48d013b50ed52ede299018d94a9385f"},{url:"fonts/FangSong.woff",revision:"2e1205c02ab84c986d1312c50762942a"},{url:"fonts/FangSong.woff2",revision:"d02ae0cef165fdb83523b29505656f3a"},{url:"fonts/Hei.woff",revision:"d69759d91a5e26b2e1526ec322debe91"},{url:"fonts/Hei.woff2",revision:"46fc9f136cf5dd3ca34d11f73449a178"},{url:"fonts/kaiti.woff",revision:"37090e9ed628a176f4bdf8321653316d"},{url:"fonts/kaiti.woff2",revision:"22aa1fdbb9ae8d746f07272ff560327e"},{url:"fonts/ZiHunBaiGeTianXing.woff",revision:"531882870cf78ed085cd10f9d180dc08"},{url:"fonts/ZiHunBaiGeTianXing.woff2",revision:"ba841e317f1b3e8c14a306b28aa5deb1"},{url:"Gallery/index.html",revision:"80f3565e12361c28c23c85763e4f89f7"},{url:"img/1.jpg",revision:"0a53047d1013252766cd4485628483a9"},{url:"img/2.jpg",revision:"f872c0d4b9405ee4f510075a6a0b67cf"},{url:"img/3.jpg",revision:"f50648c341b6890be845a076e2c4773b"},{url:"img/4.jpg",revision:"fb2b90ad365a76fb19e954b0124c1b42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/5.jpg",revision:"81407116c5f5f01568bdcd3ab603c162"},{url:"img/6.jpg",revision:"d81e36595d706a5d8f64ccc608124b52"},{url:"img/algolia_logo.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-next.png",revision:"fce961f0bd3cd769bf9c605ae6749bc0"},{url:"img/author.png",revision:"f9466a911c8a62281251ff72d36cc26f"},{url:"img/avatar.gif",revision:"7a2fe6b906600a9354cece6d9ced2992"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cc-by-nc-nd.svg",revision:"1c681acc4a150e7236254c464bb5a797"},{url:"img/cc-by-nc-sa.svg",revision:"12b4b29e8453be5b7828b524d3feabce"},{url:"img/cc-by-nc.svg",revision:"dd9cfe99ed839a4a548114f988d653f4"},{url:"img/cc-by-nd.svg",revision:"2d80546af20128215dc1e23ef42d06c2"},{url:"img/cc-by-sa.svg",revision:"c696b3db81cbbfba32f66c1dc88b909a"},{url:"img/cc-by.svg",revision:"6c4f8422b3725cb9f26b6c00e95fc88b"},{url:"img/cc-zero.svg",revision:"79deee77a07fcb79ff680ac0125eacb9"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/favicon-16x16-next.png",revision:"b8975923a585dbaa8519a6068e364947"},{url:"img/favicon-32x32-next.png",revision:"5a029563fe3214c96f68b46556670ea1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.svg",revision:"ddad9027e42111ccd5b466bc18188970"},{url:"img/spy.jpg",revision:"67ea61220cbdff5b56c0c3eadad4e983"},{url:"img/time.jpg",revision:"996c02352e2fdb7d1cf94c470d688492"},{url:"img/time1.jpg",revision:"234aacb842b3b5ba067253253ffae2b4"},{url:"img/wechat.jpg",revision:"2daac5896292bac19bdd98123d3758e7"},{url:"img/weixin.jpg",revision:"50dba67e49fba5ba6649b59c4e83fbdc"},{url:"img/wyu.jpg",revision:"19b19e9ec49c4de42f7ccdc13273840c"},{url:"img/yanjiang.jpg",revision:"3c0001f990b70b0c807db58544cbd135"},{url:"index.html",revision:"cf57af41c794062d4f61c3103ebc118e"},{url:"js/AI.js",revision:"f9044fafcf3050e329d1c4adc19f2533"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/mbg.js",revision:"307bb142003e5c82c84a09f306fa1ae1"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/time.js",revision:"3e7f3ae43512a4e538084c04875d7071"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"js/webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"keywords/index.html",revision:"0a5fec91c77f09b2c918fe106714dd8b"},{url:"link/index.html",revision:"49051ad2185f8b88872a249664cc4fc7"},{url:"music/index.html",revision:"08fe3743830fb6fef8e015b120f870f4"},{url:"page/2/index.html",revision:"6ba27ea40ef46e28036a4f0ab95600a5"},{url:"page/3/index.html",revision:"e26b91d7c1b64992e0cb128b2e77b55f"},{url:"page/4/index.html",revision:"fa2f8505ecd352353c3bb79fc9005461"},{url:"page/5/index.html",revision:"2ff2ee39098da64eb3d81c223d156f73"},{url:"posts/1b0c78b3.html",revision:"0559da2202f180dee98d4867cf5d62ac"},{url:"posts/1b5b87.html",revision:"0c40789b285219a8c49c62ec1a73430d"},{url:"posts/2134d9d1.html",revision:"94f1279143d91c622dc5c609e6daf177"},{url:"posts/28c755c.html",revision:"e607c3f146609633fba76fb8b4627feb"},{url:"posts/330d6f69.html",revision:"7f9fbb9216c57788339553ab341e276a"},{url:"posts/3b744803.html",revision:"36e946461467abb92c3083218eb38621"},{url:"posts/3da05156.html",revision:"081b490e5df309b41eb58aef12c5d3ce"},{url:"posts/3e91e0fa.html",revision:"9b626d172486ee9c13f6233f475dc867"},{url:"posts/41c2c0d2.html",revision:"b2e3a99d150f7ba9872779aa46569153"},{url:"posts/46fc5adc.html",revision:"b780d78126eb1f17680fb89d571f0d2c"},{url:"posts/493f6b85.html",revision:"468a4f7f41242dae96ca0d4025c737dc"},{url:"posts/497e40e0.html",revision:"2e347f07ac4843b7c6282ed007b8e7cd"},{url:"posts/4a17b156.html",revision:"e2e611519bf30ce18d8d3dedb2b06b4c"},{url:"posts/4e2d7b19.html",revision:"30aaf466689d9219f258f2dab3e83d1b"},{url:"posts/4f81eb97.html",revision:"0844022afa5fa0ca265c54c425ebd6cb"},{url:"posts/53721e0e.html",revision:"ffeeb917a0a28510969903e4944b7923"},{url:"posts/5dadd067.html",revision:"b88b1742e5b127a5d0cb9b1da42c929e"},{url:"posts/5ff34642.html",revision:"b836aa50ae9b9f35a5a2db38deeb7496"},{url:"posts/653abebf.html",revision:"3f6689bab099a9ad514855b9beea8d0f"},{url:"posts/681265c2.html",revision:"1fc1a7ee17c2217b4cd2d7ea484075f8"},{url:"posts/6f44662f.html",revision:"d747eead7c5376b837693dc7e8f68085"},{url:"posts/7207f70e.html",revision:"8b32419879556b3df92306d77c425912"},{url:"posts/7289f891.html",revision:"b4dc72547800f31c3037e027ba5a77df"},{url:"posts/732e626.html",revision:"6c4a501e36498920a777396af435c7d7"},{url:"posts/7e13cc3b.html",revision:"f02b53e7f0aa4ad922a665547139e2d7"},{url:"posts/80a7ecce.html",revision:"d7fe996c7b53c721147a61810105ce69"},{url:"posts/821a4686.html",revision:"f55239069ccc199dc6cc4f2493a7daf4"},{url:"posts/8a741756.html",revision:"b2c5f1ba0194323dec61b184f7b3b845"},{url:"posts/918d46c1.html",revision:"502df5ffc6bc37e927dd148c872834b5"},{url:"posts/93c8c0c7.html",revision:"a723a8bc9e16ab78d2388c5a7df02452"},{url:"posts/9f057e9a.html",revision:"985b6aac968b0437384c512884b02780"},{url:"posts/a7d437fe.html",revision:"eae8062b71a4399472c4d5eaef6c864c"},{url:"posts/ace4e4cd.html",revision:"8b5e62b777fd1f80dc2a792d29e33d23"},{url:"posts/af30ddef.html",revision:"c590c3a13bac18b04e732c5a27ec2b11"},{url:"posts/b1eb9c6d.html",revision:"803223d9bf06f78e9d3400644551a88f"},{url:"posts/b564e922.html",revision:"f9948fe3c3065a204c1427a1641d9f4c"},{url:"posts/bc9a4dc7.html",revision:"87cd2472b16d56e9bed36bed7fa85b52"},{url:"posts/be543a11.html",revision:"e8f7517d5d3346ef75a9f5bacede8db6"},{url:"posts/c9b871f1.html",revision:"aa6de54a623b823b5d5687a99bb749bb"},{url:"posts/d6ef11e5.html",revision:"fc25c8255b3ddeecb2911cb45b32a71f"},{url:"posts/dcd6fdd1.html",revision:"e3d6b2c03b0f44b2fa0769423d7efd53"},{url:"posts/de24a124.html",revision:"b82f1984e69ea5fa6d60e21dae7828a2"},{url:"posts/e32cbcd3.html",revision:"a633464b22283b40e2de5073f8bd6c1f"},{url:"posts/eebbc69f.html",revision:"4a2fd775f324651b88d16e476d08b748"},{url:"posts/f08119d7.html",revision:"5b63bbca52fa230d321156f4b5adfbac"},{url:"posts/f7f51423.html",revision:"69be597c570a82a23234c04a44493ba9"},{url:"posts/fd1a8f9f.html",revision:"7179c25f17cdd85f166339dc51e376d9"},{url:"shuoshuo/index.html",revision:"ed65b2b7b714618490428290c8bec700"},{url:"sw-register.js",revision:"56b1a0e51b0c749a6d23561627ca3970"},{url:"sw.js",revision:"0c826a7d4409ffafac501b73a164e159"},{url:"tags/【每日早报】-2025-02-25 - 星期二.html",revision:"0a972530fa51eee692e543185459fcc5"},{url:"tags/index.html",revision:"7bf2a70e22b91aa90dfbf3513eec7df4"},{url:"tags/养眼/index.html",revision:"bc4af4f08bf6d6ba93119ce389a30a12"},{url:"tags/每日早报/index.html",revision:"aa6cf7d2b934815f1a3a7d5143e3299a"},{url:"tags/每日早报/page/2/index.html",revision:"04afc433d812185f95a441edd6ab953c"},{url:"tags/每日早报/page/3/index.html",revision:"6a8b297299f0ce1d2d61f136588ed8f8"},{url:"tags/第一篇/index.html",revision:"6de548b2d9fb260c9bc164c088c48ea5"},{url:"tags/网络/index.html",revision:"489864fd093114efcf042e79f486cbee"},{url:"tags/网络/page/2/index.html",revision:"3f84c503386bb3450eaf2958059cc5cb"},{url:"template/index.html",revision:"5759b85dfa947e6413d9c15da22180fb"},{url:"webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

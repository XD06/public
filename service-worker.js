if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const r=e=>a(e,s),b={module:{uri:s},exports:f,require:r};i[s]=Promise.all(c.map((e=>b[e]||r(e)))).then((e=>(d(...e),f)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c99815bfed1f11c12c251a601b680811"},{url:"about/index.html",revision:"6c705901373b5c60457d63a4cd06af77"},{url:"archives/2022/08/index.html",revision:"4c9b7fad3de67376dd15681171bc8ca9"},{url:"archives/2022/09/index.html",revision:"e0f676e85efedf657cb08d0f5d2da13e"},{url:"archives/2022/10/index.html",revision:"a76e7874389c2ec3b78815cdae70325a"},{url:"archives/2022/index.html",revision:"6956c1c02a5970ba160eea7d52e4ef0b"},{url:"archives/2022/page/2/index.html",revision:"fdc8a6e8978546bd97ad84b66f39e443"},{url:"archives/2025/02/index.html",revision:"38b0fd7b27bed2b3fba00f22c37aabf1"},{url:"archives/2025/02/page/2/index.html",revision:"07153da194c0ab6bd1a2f922bf9fdac0"},{url:"archives/2025/03/index.html",revision:"280e81064f3704606bf9c62d7270b3b3"},{url:"archives/2025/03/page/2/index.html",revision:"3a03620face39f33153ea65f72ec2da4"},{url:"archives/2025/04/index.html",revision:"fca342da73129568af959d6d5bb288e6"},{url:"archives/2025/index.html",revision:"3b86782b06ecf936a7ae30edd5635972"},{url:"archives/2025/page/2/index.html",revision:"b755d3e7644bea87039b6c59848359e9"},{url:"archives/2025/page/3/index.html",revision:"e74bbcb246b7cb81f6d1e583cabd6d55"},{url:"archives/2025/page/4/index.html",revision:"3e8fdab0aa76f4817f063cbc039afa81"},{url:"archives/index.html",revision:"3312aac1c6a1113a4b44ce36420b44d2"},{url:"archives/page/2/index.html",revision:"0021a71b2891cab58c29078cab2f65b5"},{url:"archives/page/3/index.html",revision:"5c3967b6f7bb77f0e12947033372584a"},{url:"archives/page/4/index.html",revision:"fa711b71a1df02344b74dffadf944e1f"},{url:"archives/page/5/index.html",revision:"a04efde658acac654f6b0d68d186e044"},{url:"archives/page/6/index.html",revision:"66f59c9b0127cc45d5c0aa34288ad822"},{url:"baidu_verify_codeva-cwyza0ZFJb.html",revision:"035fa3b9f62895719d1fe81878fc52e7"},{url:"baidu_verify_codeva-J5b2WWChcR.html",revision:"b348cc42284a1465c3e872dfd2ba60fe"},{url:"categories/index.html",revision:"5cd3f40cc70f4f3f72e315e83868e5b5"},{url:"categories/壁纸/index.html",revision:"fec0048cd85ea21c1bf692dcc511ea5a"},{url:"categories/机网/index.html",revision:"86fa1d2a52b5d43bd6784c0321da5dec"},{url:"categories/机网/page/2/index.html",revision:"ee8332bc411eb7b23f048cee1cc2635b"},{url:"categories/每日早报/index.html",revision:"6f91de93db3951f61dc535a905f2bb60"},{url:"categories/每日早报/page/2/index.html",revision:"48e2557da3930667746caaf68b523ca4"},{url:"categories/每日早报/page/3/index.html",revision:"37541dec1f6e3d518621e34f38a1f433"},{url:"css/AI.css",revision:"9aee10bb289b8706777b29a5ff7aa886"},{url:"css/footer_style.css",revision:"a249941af2da87708fa46890b1526aa7"},{url:"css/index.css",revision:"f86b51154518eac93a2590cfd2b30f05"},{url:"css/mbg.css",revision:"20cf95ee355ebea0b82bd0db8c0d4e4b"},{url:"css/progress_bar.css",revision:"43c65b42d14caff9cf1417487790893c"},{url:"css/time.css",revision:"d201337c7704a57fe1ef2031a0998f21"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"description/index.html",revision:"73ce5229e861ff4f9e2acb2d8438ba2d"},{url:"fonts/FangSong.woff",revision:"2e1205c02ab84c986d1312c50762942a"},{url:"fonts/FangSong.woff2",revision:"d02ae0cef165fdb83523b29505656f3a"},{url:"fonts/Hei.woff",revision:"d69759d91a5e26b2e1526ec322debe91"},{url:"fonts/Hei.woff2",revision:"46fc9f136cf5dd3ca34d11f73449a178"},{url:"fonts/kaiti.woff",revision:"37090e9ed628a176f4bdf8321653316d"},{url:"fonts/kaiti.woff2",revision:"22aa1fdbb9ae8d746f07272ff560327e"},{url:"fonts/ZiHunBaiGeTianXing.woff",revision:"531882870cf78ed085cd10f9d180dc08"},{url:"fonts/ZiHunBaiGeTianXing.woff2",revision:"ba841e317f1b3e8c14a306b28aa5deb1"},{url:"Gallery/index.html",revision:"6453494cc21bacb68b88ab06131f3a81"},{url:"img/1.jpg",revision:"0a53047d1013252766cd4485628483a9"},{url:"img/2.jpg",revision:"f872c0d4b9405ee4f510075a6a0b67cf"},{url:"img/3.jpg",revision:"f50648c341b6890be845a076e2c4773b"},{url:"img/4.jpg",revision:"fb2b90ad365a76fb19e954b0124c1b42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/5.jpg",revision:"81407116c5f5f01568bdcd3ab603c162"},{url:"img/6.jpg",revision:"d81e36595d706a5d8f64ccc608124b52"},{url:"img/algolia_logo.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/apple-touch-icon-next.png",revision:"fce961f0bd3cd769bf9c605ae6749bc0"},{url:"img/author.png",revision:"f9466a911c8a62281251ff72d36cc26f"},{url:"img/avatar.gif",revision:"7a2fe6b906600a9354cece6d9ced2992"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/cc-by-nc-nd.svg",revision:"1c681acc4a150e7236254c464bb5a797"},{url:"img/cc-by-nc-sa.svg",revision:"12b4b29e8453be5b7828b524d3feabce"},{url:"img/cc-by-nc.svg",revision:"dd9cfe99ed839a4a548114f988d653f4"},{url:"img/cc-by-nd.svg",revision:"2d80546af20128215dc1e23ef42d06c2"},{url:"img/cc-by-sa.svg",revision:"c696b3db81cbbfba32f66c1dc88b909a"},{url:"img/cc-by.svg",revision:"6c4f8422b3725cb9f26b6c00e95fc88b"},{url:"img/cc-zero.svg",revision:"79deee77a07fcb79ff680ac0125eacb9"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/favicon-16x16-next.png",revision:"b8975923a585dbaa8519a6068e364947"},{url:"img/favicon-32x32-next.png",revision:"5a029563fe3214c96f68b46556670ea1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.svg",revision:"ddad9027e42111ccd5b466bc18188970"},{url:"img/spy.jpg",revision:"67ea61220cbdff5b56c0c3eadad4e983"},{url:"img/stop.png",revision:"ffdaa278194c11e7bd5335e8e7f427ba"},{url:"img/stop.svg",revision:"f67edae44312a51a6913f37101fa0c7d"},{url:"img/time.jpg",revision:"996c02352e2fdb7d1cf94c470d688492"},{url:"img/time1.jpg",revision:"234aacb842b3b5ba067253253ffae2b4"},{url:"img/wechat.jpg",revision:"2daac5896292bac19bdd98123d3758e7"},{url:"img/weixin.jpg",revision:"50dba67e49fba5ba6649b59c4e83fbdc"},{url:"img/wyu.jpg",revision:"19b19e9ec49c4de42f7ccdc13273840c"},{url:"img/yanjiang.jpg",revision:"3c0001f990b70b0c807db58544cbd135"},{url:"index.html",revision:"7433fcb1e9fcf919eaeaa06b25eaf81f"},{url:"js/AI_a.js",revision:"1de7c55e72df6d9154fd345256ac2d53"},{url:"js/AI.js",revision:"f9044fafcf3050e329d1c4adc19f2533"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/mbg.js",revision:"9c8195ef740206309338f272a9def491"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/time.js",revision:"3e7f3ae43512a4e538084c04875d7071"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"js/webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"},{url:"keywords/index.html",revision:"bd45bf42253a2b8815f1393459f302f0"},{url:"link/index.html",revision:"219c97002117f13e21f92f20a993230c"},{url:"music/index.html",revision:"255ce1bc017f2385224f5024eaa0e490"},{url:"page/2/index.html",revision:"e3bf5d29fa02e81280d0b6e74e2e2aca"},{url:"page/3/index.html",revision:"1ac078bbb29350045d1d33c63fa1e715"},{url:"page/4/index.html",revision:"b45e36521afd422c90ad59681ef00ca0"},{url:"page/5/index.html",revision:"169f132032897403ebd421297566d042"},{url:"page/6/index.html",revision:"bfd0cdcc50f2996206574a0b55b36976"},{url:"posts/12501d69.html",revision:"304defd2498bd171e2ae938044fafd87"},{url:"posts/1484043c.html",revision:"151f13d7654299c5b4907d22a22ed0f7"},{url:"posts/1b0c78b3.html",revision:"85b2b14b99d546c5d4de37b07c93a0fa"},{url:"posts/1b5b87.html",revision:"61bf3ae82645d07f9ad8f653ac495524"},{url:"posts/2134d9d1.html",revision:"02a89ba3929a916c7a94d66e3399e8d3"},{url:"posts/28c755c.html",revision:"465c0b815450ddf38570e99b308e8711"},{url:"posts/2f77f294.html",revision:"7433f2aca125006851fb93061758c46c"},{url:"posts/330d6f69.html",revision:"67ca7a9b6cdc822d1c40b00e61c37cca"},{url:"posts/3b744803.html",revision:"b15ec75088981e0f3229222df3acbc2f"},{url:"posts/3da05156.html",revision:"cbe513d48f30dd4dd7e3bd11eb3d814b"},{url:"posts/3e91e0fa.html",revision:"9ea4f322d1fd79d0b38b49d9eded0e46"},{url:"posts/41c2c0d2.html",revision:"49f9b2ac791860ca8e01702297e5f753"},{url:"posts/46fc5adc.html",revision:"bc15a09d942c710b779ab58e98048425"},{url:"posts/493f6b85.html",revision:"a14e6e435f3b950f723ba152d3b91d67"},{url:"posts/497e40e0.html",revision:"f70a643344ae50d7739eff7bd0a88c36"},{url:"posts/4a17b156.html",revision:"fdf45013f60347ba7627c0054ad85b77"},{url:"posts/4e2d7b19.html",revision:"89945cf348da147696b24b82cb8ce13a"},{url:"posts/4f81eb97.html",revision:"03c91978d662575e1458ffdadab8b1c1"},{url:"posts/53721e0e.html",revision:"11198992670488733cc51a2291d864af"},{url:"posts/5dadd067.html",revision:"22a99a53cd6f12fcf3d03d100967b738"},{url:"posts/5ff34642.html",revision:"705c80ef1567af4b2eeab6307de5bd34"},{url:"posts/653abebf.html",revision:"18d1e827580dc2e107f0d9b7767aa239"},{url:"posts/681265c2.html",revision:"d3f365c18a6bbe7907fe4dec5998a780"},{url:"posts/6f44662f.html",revision:"66066a8038e4e59efd0cbedd54c5f926"},{url:"posts/7207f70e.html",revision:"6ac004f9d4192836a6540311f2fba05c"},{url:"posts/7289f891.html",revision:"798be9c0b946401b7c748c80a7886f07"},{url:"posts/732e626.html",revision:"d044fcb361e01ef60952d6c86045d58a"},{url:"posts/7c825231.html",revision:"da3f5ad808b6fbd4055f30a02d31cfac"},{url:"posts/7e13cc3b.html",revision:"4bb3372dd0a8ac4e4c598257edbc2d24"},{url:"posts/80a7ecce.html",revision:"9d4eafefb23dcc4da7208088220f812d"},{url:"posts/821a4686.html",revision:"107344550e2a2671b4742d17e68d4d77"},{url:"posts/8a741756.html",revision:"a1c7093a4cd1f14b6a3b43082e48861e"},{url:"posts/918d46c1.html",revision:"d01fcc2875ae0c18ed5702ffd148b71d"},{url:"posts/93c8c0c7.html",revision:"5c2b3bd77233c1cf90c19e841d09b4c2"},{url:"posts/9f057e9a.html",revision:"53d130829aaf3c55a85c1bf47d37119c"},{url:"posts/a7d437fe.html",revision:"c013fac9c7c1165170736d7eab239a7c"},{url:"posts/ace4e4cd.html",revision:"5731743f248cd27efaaac919718be3f8"},{url:"posts/af30ddef.html",revision:"883e1dac7fb6ca644d41bafad37fbc86"},{url:"posts/b1eb9c6d.html",revision:"604e9ba3b389a533d27d6b67ce0f6646"},{url:"posts/b564e922.html",revision:"7420d08931c282043f778d068a89cfff"},{url:"posts/bc9a4dc7.html",revision:"5bad6748c07a5a86068ff06cca5bf430"},{url:"posts/be543a11.html",revision:"2492d5e9aba775e00550dbd2b7081690"},{url:"posts/c9b871f1.html",revision:"fa7d35e75d51b95e26a3a28fec60a149"},{url:"posts/d6ef11e5.html",revision:"8ce1eb8820a7f91b2495e4bb5dd4f04c"},{url:"posts/dcd6fdd1.html",revision:"7b78226dc70c98449b04bc56b0dbb1f6"},{url:"posts/de24a124.html",revision:"22fe07f3a4cfb9a2d3efb9934aa5cb70"},{url:"posts/e32cbcd3.html",revision:"5882ced03dfb8ab6a87eb653932bbf60"},{url:"posts/eebbc69f.html",revision:"4f1aec70f41b9428cde1cb9764caa466"},{url:"posts/f08119d7.html",revision:"b6a847802791348af7fd338863d5990f"},{url:"posts/f34dbb9f.html",revision:"16a6cfefde92487b303c517d836ef8a8"},{url:"posts/f7f51423.html",revision:"e04d51f73275e1e46bf7cbf748adecf0"},{url:"posts/fd1a8f9f.html",revision:"25c9ab15fc41d84912b10e11da7a1246"},{url:"shuoshuo/index.html",revision:"606e5b37eadaea45b85ed81258c37489"},{url:"sw-register.js",revision:"30483ce01404aede1f943281d80322a8"},{url:"sw.js",revision:"945abf23bd980e23d2cdf781e598cd3c"},{url:"tags/【每日早报】-2025-02-25 - 星期二.html",revision:"09bd7fa6416e92f189812e14589c8927"},{url:"tags/index.html",revision:"90287e579061dd7669a31059243d883e"},{url:"tags/养眼/index.html",revision:"18461f73cfb09fbfec6c13347a7618b5"},{url:"tags/每日早报/index.html",revision:"59118adb52640289e0f241801d08b16e"},{url:"tags/每日早报/page/2/index.html",revision:"e534296f3f926c35336e3019a8ef13ba"},{url:"tags/每日早报/page/3/index.html",revision:"1ff5583fe0f77ae8189d8f54172ffb4c"},{url:"tags/第一篇/index.html",revision:"5bd05f3c0642776a450dcbc0dcb5a8ca"},{url:"tags/网络/index.html",revision:"54bb9f6020e8fee276d41968cc5c8dd9"},{url:"tags/网络/page/2/index.html",revision:"a88e4c6293a0e81417e6acb8066e6f84"},{url:"template/index.html",revision:"dbd7aadc71f3faa85b668f7a5be7d186"},{url:"webpushr-sw.js",revision:"8c070a9f68cd540a675a079dcd76cfa4"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

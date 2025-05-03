/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","54d2a2930f17c35a7efa049f7f0ddb4c"],["/Gallery/index.html","5484acf2ae4703399197f25bfbf96e5d"],["/about/index.html","189f084ebc26261459fd6eb3667c93fc"],["/archives/2022/08/index.html","cc1fe569718048a8f614d92899544b46"],["/archives/2022/09/index.html","6daed9bb9e9b9bcdc508a70b68490283"],["/archives/2022/10/index.html","e5aaef11992edd1b449d5d14a77d181f"],["/archives/2022/index.html","fb18baf1e9def295481c740aba5e277b"],["/archives/2022/page/2/index.html","c4406d15ade35fdd30cbafa6b7aab3f8"],["/archives/2025/02/index.html","eaa0a4eb9661006e767d1b232a2226e0"],["/archives/2025/02/page/2/index.html","4ca40021622d64f0a2d15972bb9d8538"],["/archives/2025/03/index.html","c8f374b75ea629a745089b93c1d6e29a"],["/archives/2025/03/page/2/index.html","5a09a4d99447f9905c60be83d2d407b0"],["/archives/2025/04/index.html","b049ce63484350a82afe0d0e262577ec"],["/archives/2025/04/page/2/index.html","6ecfc12de05e846df21c9e266e2dda0d"],["/archives/2025/05/index.html","48fcd8c1bdb7556df055e0af84fb2d44"],["/archives/2025/index.html","6fefe0502db6488f538ce8e40966acd2"],["/archives/2025/page/2/index.html","192f8a2438b7f6aff4f03d8274ad07a1"],["/archives/2025/page/3/index.html","97f8a7db18a9a3b91f71a999e9a0123a"],["/archives/2025/page/4/index.html","86e184f3e92cffcabe87b679c04c7b92"],["/archives/2025/page/5/index.html","43e05db2a4e466ccfcacc64c8317e098"],["/archives/index.html","5c893ab13d861661fe55a2e50b29e42f"],["/archives/page/2/index.html","7d69b13b832c0e0a2d7a86c3a206e916"],["/archives/page/3/index.html","099d427c05386ac3198b194d0cf84545"],["/archives/page/4/index.html","3a0f20348efbb6d185cd3eb39641813a"],["/archives/page/5/index.html","f9c0e9149d5a4336de61b7c21ba2fa18"],["/archives/page/6/index.html","ea9271d8e6724a3e7afead21d10e8202"],["/archives/page/7/index.html","ccb6cf2a5bd25dc2815b00b1eb689795"],["/baidu_verify_codeva-J5b2WWChcR.html","d01f0f61c9a84a653e4ce78425f47008"],["/baidu_verify_codeva-cwyza0ZFJb.html","7ce343f8b23108842bbc53c9700440f0"],["/categories/index.html","c420537a0a25db9a1001511858bf36bb"],["/categories/壁纸/index.html","95a9491e187cbf016576fd47d3794e26"],["/categories/机网/index.html","d7a8237d4228d46df02f9b7a05a1e384"],["/categories/机网/page/2/index.html","698947b915cb4fd710d032e7e2ae12c2"],["/categories/每日早报/index.html","ba2bc649308f4022420b53bbb5f1685b"],["/categories/每日早报/page/2/index.html","48b1a91cb16f6624c7c73b3e5e9b29fb"],["/categories/每日早报/page/3/index.html","9fb67c926f7c74e6cacaca2b8572fbf4"],["/categories/每日早报/page/4/index.html","039ec6920be5f1592f940fd234d6e76f"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","43f7eeeaf3e628ea087d5cef419ab090"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","5265ef82c5d01a18e167312bbc408da5"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","fc23a32dea55e45d7f21d8f44be61555"],["/js/ai_plugin.js","0a199a02c56ecb46b0fe60e869a32317"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","618d1dfa2d2afcbf70850b48b7191ac5"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","9993113c0308fa7ca9d9890979ce0ed3"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","5402f11724031a07f4a70fa95c827e57"],["/link/index.html","3bcb0b319f80d465a61e127ade042e28"],["/music/index.html","6874890ba1ecc1d27fe0709c68eb98d6"],["/page/2/index.html","2352e46c0f90237e28d5965f6171df27"],["/page/3/index.html","eee814b549b6161e570c080fa1bcdd7b"],["/page/4/index.html","bef0b20a3315985b1f819c6980a95aab"],["/page/5/index.html","b50a85d4cabbce6af7bd89fabe95333a"],["/page/6/index.html","bffc9ac6a2691e29e04977c57383fea2"],["/page/7/index.html","dc6e709299b37018b47724288db97341"],["/posts/12501d69.html","12ef64a132ae42ca25ed6b93f0d8970d"],["/posts/138fefbc.html","bd127bbc995bd5e933ace228d1952132"],["/posts/1484043c.html","cb703b529f97b7b43ce247de1f058c2a"],["/posts/1a3d44c.html","cff1ea576e050c41aa7b5133fd8bb01a"],["/posts/1b0c78b3.html","1d8ae9b67850977699b10a54f45e75f5"],["/posts/1b5b87.html","2873fcd9005542d051ba42a172cd795c"],["/posts/2134d9d1.html","c5532e385da1db49157001af4a665c2c"],["/posts/21fabcd8.html","1b3c2bd982f0134b3eddd549fc9e3c30"],["/posts/28c755c.html","0b206073bd0c65e4ac9eb2edc4337c08"],["/posts/2f77f294.html","cf1b63a9c693f1d906bf37bb6064f39d"],["/posts/330d6f69.html","b6df9f90a0901f01cfb80c688dfe4283"],["/posts/3b744803.html","db0bc015fea560ba494b6b06473ca953"],["/posts/3da05156.html","599eb35fe8cd453082b6813ff33a8cac"],["/posts/3e91e0fa.html","26081d2e951e7bce2f76473483f9798f"],["/posts/41c2c0d2.html","11ad0cebeab9672a1ee40843e09830da"],["/posts/46fc5adc.html","4a1110bc4f899170289b326aa301ed1f"],["/posts/493f6b85.html","c323e07114e21172510540e31c6eb497"],["/posts/497e40e0.html","c1e7fabe536ba28742da0937387933c0"],["/posts/4a17b156.html","57e66fda23e2afa0b5b5de2b43275d33"],["/posts/4e2d7b19.html","4ff38192731521a0e5355336e4c9a8a9"],["/posts/4f81eb97.html","dccdb8dda16cd679fece9afb7475866e"],["/posts/53721e0e.html","159b1d977b9dda67960feaa70616ecd0"],["/posts/5dadd067.html","04f55dfda803e6e3e945c257e90b4806"],["/posts/5ff34642.html","7ad89c28249fd49acabb826ae72c8c89"],["/posts/653abebf.html","4a20c082b61757c72405dda048f04e42"],["/posts/681265c2.html","ffed5489daa679dd14cdec8ee118348b"],["/posts/6f44662f.html","73344c6ed44be892327675b6b85e3762"],["/posts/7207f70e.html","6f4b15a7270ce1a0c8aa6ea9524d13a9"],["/posts/7289f891.html","890b4312b22cf69af9249cd842069414"],["/posts/732e626.html","ebdfdd0cb4ac5f71fe598d8632402ccd"],["/posts/7c4f393d.html","e9bf176e284ebfd21d94dc64f0d30fbe"],["/posts/7c825231.html","b4cd18ace0e4d55f9ec9a6823d2d9779"],["/posts/7cd0d214.html","1daf4c232fe6d807bce3e3d35abfdf41"],["/posts/7d9071b2.html","445ae3e321ad1f4be993019ffdf7a7e1"],["/posts/7e13cc3b.html","cb2d7d2cba7b4532a98a6cad310af8e7"],["/posts/80a7ecce.html","e5df63e96e51b5125abc75b93e0374a5"],["/posts/821a4686.html","7e566052beab99923da0a28a2692daf1"],["/posts/8a741756.html","7a13fa9e0bc40481398f101fc9833b3e"],["/posts/918d46c1.html","823b72925d25f25db5e258f235b2f436"],["/posts/93c8c0c7.html","b3200f01334d4a6761f9bd23c0639d9c"],["/posts/9a59ce11.html","f99431d50bb3e1c151de3bf3b6e5029a"],["/posts/9f057e9a.html","4e3090abb318108f49df93159c806e12"],["/posts/a7d437fe.html","e43f615e90d859506a94d633f0b54c23"],["/posts/a85c4b71.html","da80941334d8b54eac2cbb8f48bf001c"],["/posts/ace4e4cd.html","372ff7f166669f5a9d46067a70795e64"],["/posts/af30ddef.html","d36b1bd2e643554d7b337e448884024c"],["/posts/b1eb9c6d.html","1853219bc362384c742d79a5004d2eaf"],["/posts/b564e922.html","166493256bbcdd873da80fc7073c12af"],["/posts/bc9a4dc7.html","a3c1d2a01d0ac60329eeb5785b8c0353"],["/posts/be543a11.html","9bf1a9adb11e0e1ae6af628bd8940793"],["/posts/c9b871f1.html","75437e64d2bb09aee34461ab1ed6ad25"],["/posts/d6ef11e5.html","2b5131f6fd01d146a20477951efcbb54"],["/posts/dcd6fdd1.html","bf7ce28abebab3e77734600f84762ebb"],["/posts/de24a124.html","e6c17ea6b1fa689105a7c7c2004a73ff"],["/posts/e25a3e3a.html","a4d7e6ac1add25d557f2587542579ac8"],["/posts/e32cbcd3.html","5cfa8d910fddbcd04cf2807ccc6d700e"],["/posts/eebbc69f.html","25d6a127d7dde1c0267da9c7be047f8d"],["/posts/f08119d7.html","da283549f7c4a94415ddf7780bfdbd62"],["/posts/f34dbb9f.html","84c7d0d813dfdd85aab4a6d0b630ecd1"],["/posts/f7f51423.html","bf6a899e9fab7ed2e215fc972d783003"],["/posts/fa75ad5e.html","1be481e055bc1da944656e25631d68b6"],["/posts/fbda33d5.html","85f24ff141c8c7fe72a8ac3c9a8c7f04"],["/posts/fd1a8f9f.html","cb5271a38051276fc5203090834c7fb2"],["/service-worker.js","1b7d0c58713bb8c1099fa2928459e720"],["/shuoshuo/index.html","80b8e34adb5475fd009525a70127eedd"],["/sw-register.js","25098f1910d1cfcd1339079970608abf"],["/tags/index.html","033aadf37d08b097c305859d18d380dd"],["/tags/【每日早报】-2025-02-25 - 星期二.html","20f1e8c7a8eca37cc0ff718f913f01f0"],["/tags/养眼/index.html","7b05d6be0d951eba3accd15624e0bfa7"],["/tags/每日早报/index.html","2cdf23df564e81bc63f4bfd37d3ce928"],["/tags/每日早报/page/2/index.html","f7151a1cfb0b1189112274f195bd1f50"],["/tags/每日早报/page/3/index.html","973d7dfc67137f8f57ef16b41cf1e41c"],["/tags/每日早报/page/4/index.html","f766c9418fe5b3c15ce943962268e022"],["/tags/第一篇/index.html","05a8ed5e9d874829a6055b7832add9df"],["/tags/网络/index.html","657e0b908aceceb61c181617669c05c1"],["/tags/网络/page/2/index.html","e93351487068bb2711c4a3603d1eae34"],["/template/index.html","1ac9a86ef2a8f1696013439e635c2a35"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

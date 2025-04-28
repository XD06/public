/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","81ebba6da53235ae81dea364ba038421"],["/Gallery/index.html","2f1784abcd4f0966faaea22477b58e07"],["/about/index.html","9423e0a071c7056b3df3e8f211202d74"],["/archives/2022/08/index.html","f4e8e86e7005da5a3a5f4679ae4cbc34"],["/archives/2022/09/index.html","d10bcf886bd242ec90fb5f6f3b1b3308"],["/archives/2022/10/index.html","73bd06359a1ab4a81e579b93175064f7"],["/archives/2022/index.html","78ca3714ef47b0a0f00f1948559008d5"],["/archives/2022/page/2/index.html","53b8eae49660fad49811bb06c38c2172"],["/archives/2025/02/index.html","85ad4647cb17075dea37831a7239262b"],["/archives/2025/02/page/2/index.html","3187de23afc628ab4bf145531945f13b"],["/archives/2025/03/index.html","6c69d10d09305dc1b5097afd5dd917f8"],["/archives/2025/03/page/2/index.html","a449b16f090389d8081b7de09ddad607"],["/archives/2025/04/index.html","c9958d814ae931d56e556601a4fa6f8a"],["/archives/2025/04/page/2/index.html","dd4c5d5d6391c9ed78b856e0686e44a7"],["/archives/2025/index.html","72bfb63f852fef124786a7c7e446f0e3"],["/archives/2025/page/2/index.html","2a91d988824c491f04f1b3a418731c1f"],["/archives/2025/page/3/index.html","042b0aaf4da0990a03521c9a7f68d5fa"],["/archives/2025/page/4/index.html","c46818a02168bc8c2dd0298d12d6cb1d"],["/archives/2025/page/5/index.html","273e951c2cd693b953ddc890623f8c19"],["/archives/index.html","e5242d280868e6f5501840b5d2e9b22c"],["/archives/page/2/index.html","beeeb3f80056a6c712c5d5ee52a5b571"],["/archives/page/3/index.html","72c760ee882716e284448acc25887381"],["/archives/page/4/index.html","7ce8cd6eee25ebb86ac9d1bfa5868e6a"],["/archives/page/5/index.html","ed4756c098b4f74b77a0a646bb5abf0d"],["/archives/page/6/index.html","f104b19a4bc020eb77c5cece41cbcf00"],["/baidu_verify_codeva-J5b2WWChcR.html","5364295f5bfc9c84ef1fe294cbd11457"],["/baidu_verify_codeva-cwyza0ZFJb.html","b19def947842f21dd26afa93361cf730"],["/categories/index.html","97a198038966636e5494158fe1d79e1e"],["/categories/壁纸/index.html","f1d72fa179e6633df1f53145c6ed34e9"],["/categories/机网/index.html","4b806c65b7124859fab281cef457718d"],["/categories/机网/page/2/index.html","09ee98c604fccb5c7f2b984ee6057d53"],["/categories/每日早报/index.html","7a09528ef6b17b67d6ea72bc1bacebd9"],["/categories/每日早报/page/2/index.html","eedef426acad6439ec2f3ea3b8ba83b1"],["/categories/每日早报/page/3/index.html","43af333e03d5f4177a2c6e82410006d6"],["/categories/每日早报/page/4/index.html","e456007e0184d21299390b87fce99b4b"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","0eaff378b6684b5f0dec7fc275e3642d"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","f18a403116699df6fcfc40505350bb4e"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","34ab3d66780585fa0ec58a3e21652499"],["/js/ai_plugin.js","0a199a02c56ecb46b0fe60e869a32317"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","719801faeed82ac09eae50b7fbb3ff52"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","fc90f58fab353d0d857e10b76e8dbfd0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","f05b770c2dee6f33073387e9722969db"],["/link/index.html","c622f91c3cf7092b1ca76dc231bbc3db"],["/music/index.html","d5b644261874b66297030dade783be74"],["/page/2/index.html","49414269b3c35cf4d9999aa76858d645"],["/page/3/index.html","79e63330a737c09f47a5046fbb07431c"],["/page/4/index.html","e6635998ce31289742c56bf0b990848e"],["/page/5/index.html","f48c1614ce3ad7d91f7f376f0416967d"],["/page/6/index.html","9e0937ee694a644300381c87b0e93575"],["/posts/12501d69.html","7b3602f7707abddef1cca7aafaa6c4e8"],["/posts/138fefbc.html","047c863c933182838284c9beb86be2a6"],["/posts/1484043c.html","695b062b2aacf6d3ec04d3d5fe625550"],["/posts/1a3d44c.html","5871251dd2564fa021086a642950ea61"],["/posts/1b0c78b3.html","92ddbad5433952737a00f434afd32f66"],["/posts/1b5b87.html","b62211ba0ee072557f87d4f83dff9fba"],["/posts/2134d9d1.html","a53a5d92ab908da106113b4238361e62"],["/posts/28c755c.html","a2e0585109db70c5d6bf82553971cd78"],["/posts/2f77f294.html","3a55e768ef0818c1e5627f0bdc398a4f"],["/posts/330d6f69.html","26de6aaa3604bde6d7ec59653aa81fac"],["/posts/3b744803.html","bf78168428e9057481afabae0a45fa2a"],["/posts/3da05156.html","189788b4e76ff9973edaf49d802ab257"],["/posts/3e91e0fa.html","876851bed2abfdd514305c5ecc8517db"],["/posts/41c2c0d2.html","167773abafaf796d335df5d48d69db18"],["/posts/46fc5adc.html","28c146eea77ae8ff1bd5480031d0bc90"],["/posts/493f6b85.html","3872d1039696be1d07fce8bea7325a61"],["/posts/497e40e0.html","e736a0d6f3c981d0ef2d52ef89760bd1"],["/posts/4a17b156.html","2e9187b2d0c7e1fc253ca2fb10e5956c"],["/posts/4e2d7b19.html","2049dce355762d29f4a80417bc32c1c1"],["/posts/4f81eb97.html","cdb9cc17d209d7c2dedb5b3f54aee744"],["/posts/53721e0e.html","15757eb510da7a5a712c876763305898"],["/posts/5dadd067.html","5f9613f6f560edcad92c3b0d4dc972f3"],["/posts/5ff34642.html","0903073b982a804f946882d73811f1ca"],["/posts/653abebf.html","46f06ab63dbdd5ed83b05279211a764b"],["/posts/681265c2.html","06fffda845ae81b469ec39fe410d5686"],["/posts/6f44662f.html","d7b60c71be37ac28717bc376bf227fff"],["/posts/7207f70e.html","df4c849dfacd3d49e692023bffd5f3eb"],["/posts/7289f891.html","1ff47ef53e82f4995c11e60d6247ab55"],["/posts/732e626.html","bd90b96240efabf73b3018e53af44f75"],["/posts/7c4f393d.html","a28dc05b3311a77e06beeb044e2ad33d"],["/posts/7c825231.html","5a374663653d90c1b29de58ba0746b77"],["/posts/7cd0d214.html","e27d42634bccdc63e31447843c947cc0"],["/posts/7d9071b2.html","6b11f5811e050c8b295afaaba518ca5c"],["/posts/7e13cc3b.html","5ea897e16e44a068ea43ecac32a21e1b"],["/posts/80a7ecce.html","d362b24da5858c150053b8d88001e2c8"],["/posts/821a4686.html","96c02953ace8bf888f7322fd880b9771"],["/posts/8a741756.html","3eb85c40f0b7e3e36a67dc689db4d776"],["/posts/918d46c1.html","73980fc53ae642d953569cc1de0869e0"],["/posts/93c8c0c7.html","051ba4df2ef97c15187d0cba4e33d5b7"],["/posts/9f057e9a.html","8cc9b6e11c773f23ca6a22d6e5f61f5e"],["/posts/a7d437fe.html","b297bab50b3f8e5fa4a7a967dae2d9f6"],["/posts/a85c4b71.html","8e75de2c3bd86247235e66d8cc851d30"],["/posts/ace4e4cd.html","52b46ec000de66df3f892f161113fceb"],["/posts/af30ddef.html","9393b5e3bf8ca73df7d47839d370c239"],["/posts/b1eb9c6d.html","b47520016d90485277c429ef561d12ad"],["/posts/b564e922.html","2df41f62107803aa16061908e9294983"],["/posts/bc9a4dc7.html","10db3b6cb9333bb119c04146c8c6cc2b"],["/posts/be543a11.html","7e591a96e671396c7ab895962caa2193"],["/posts/c9b871f1.html","f66a3fb3f1d44e4abf767d92398d0b19"],["/posts/d6ef11e5.html","8a14443c46d2a455b05ca58a95670d84"],["/posts/dcd6fdd1.html","6b0237a312bdc579ca67e10ec537aeec"],["/posts/de24a124.html","1fd171bf3a54501c514e71c9d7243db1"],["/posts/e25a3e3a.html","207a224a0f9c56e20cc86144e313e596"],["/posts/e32cbcd3.html","272a36fcc72fb68de6fa64384bc6faa9"],["/posts/eebbc69f.html","26f3bcdd2077960b53d59d7a0f6626d8"],["/posts/f08119d7.html","69ce7e206a0b788c438eef07dde04d44"],["/posts/f34dbb9f.html","e077cbfac82dfd18d0bdd1318bf28ac3"],["/posts/f7f51423.html","f3953974b74500f7a941bcfb452796de"],["/posts/fbda33d5.html","7dd1003cb622dfc29745f1c4016a5fb4"],["/posts/fd1a8f9f.html","a2a0a19d6cccfd81a4160eea85443880"],["/service-worker.js","863b71561ccc5b889a16ccdbf6c20547"],["/shuoshuo/index.html","27b9ba36eb12c2312b390784ec5203dc"],["/sw-register.js","83fb4919698754c1cd540ec0486afa42"],["/tags/index.html","5ab7251419566477797d319f6e270c23"],["/tags/【每日早报】-2025-02-25 - 星期二.html","55170c8fc40ad624d50dc7323f2995be"],["/tags/养眼/index.html","c6b501d320889ecc13b8d9f624f79098"],["/tags/每日早报/index.html","9d552590d7c1da507444ee5aa24b23dc"],["/tags/每日早报/page/2/index.html","fa74256f2a7761a7e277cac1f99b29eb"],["/tags/每日早报/page/3/index.html","7ee471528cb164cf26492a108d31e4f6"],["/tags/每日早报/page/4/index.html","d2c4b3c06e1cfbbbcf777c1d0656ca43"],["/tags/第一篇/index.html","50cd36eecbf32de927256fd5b4df714a"],["/tags/网络/index.html","78230649780e3a664a6d0efc97a99fd3"],["/tags/网络/page/2/index.html","44d2466e1710fac0111089676b40435e"],["/template/index.html","f938f7b5e4e0bb884d4ab011fd9753ed"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

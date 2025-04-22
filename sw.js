/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","db195f31378936db79b66128ebbd6406"],["/Gallery/index.html","204d7ba6026c8fc20977590c5b9c1f86"],["/about/index.html","020764827b9c1c2d8f8c6db266c87a95"],["/archives/2022/08/index.html","fa47fa5c62e769416e9887f1f4a06f70"],["/archives/2022/09/index.html","deafe5a148b0c64d32f480c5a0e7bce3"],["/archives/2022/10/index.html","e8af1499cce40081a5eddd679580d8d0"],["/archives/2022/index.html","fa55379e62009cb8d5c8c4419971084c"],["/archives/2022/page/2/index.html","211a3650e25858c9a1c3fff32b2c9f90"],["/archives/2025/02/index.html","d27ad74887c05ce4b4c573106658f955"],["/archives/2025/02/page/2/index.html","81388a1ce0b7a528879164dc96acac5c"],["/archives/2025/03/index.html","e509d38df4562bfa8695c68854a9c0cd"],["/archives/2025/03/page/2/index.html","b313ba45271e1b530ffc818fb282f205"],["/archives/2025/04/index.html","c5f89e8d1fc682795fff5f71fe4af7d9"],["/archives/2025/index.html","bd77a7d4ea3e73ef99cb115aee5c29db"],["/archives/2025/page/2/index.html","aaa85727073259202798cddf3153a222"],["/archives/2025/page/3/index.html","f87cc590f9841e1d57ee1a9205a5cb88"],["/archives/2025/page/4/index.html","bd5349b5cf84663d4105a261249787e6"],["/archives/index.html","26ea0e0ac7cada7ab419bfafa64bdf9e"],["/archives/page/2/index.html","0ec06dbf981ac89b96a2c969ddc0d09f"],["/archives/page/3/index.html","1078027dd3dc64853ad8aa599c2a9060"],["/archives/page/4/index.html","f30e6eb6cfe2893b2686eae3193bc583"],["/archives/page/5/index.html","8518c31845506caa83c77f8264adcd25"],["/archives/page/6/index.html","24f3d64a86a9fd64f22b44fc7e9e90a2"],["/baidu_verify_codeva-J5b2WWChcR.html","c6e66ffa1f0aef6ba1dcfdb268e34a5d"],["/baidu_verify_codeva-cwyza0ZFJb.html","af6333d74553fe8416b0665bc540de3c"],["/categories/index.html","15570306f99adaab71decec7615401d6"],["/categories/壁纸/index.html","b54250e559701227f6dfdbb040cbea69"],["/categories/机网/index.html","0d6732c1476faead85763c2055e24a65"],["/categories/机网/page/2/index.html","b699179c9afef3f4c7aa1867fa627fed"],["/categories/每日早报/index.html","8dac8d71a5f6a80d4ac1cee3fed2f286"],["/categories/每日早报/page/2/index.html","41c2ae5541fcc70d45be6925d1d5fd1d"],["/categories/每日早报/page/3/index.html","3afa0569a8e390437380f2fb92f47c3c"],["/categories/每日早报/page/4/index.html","11f09840b4a167d05f8518e6b5d4f07f"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","ddda7e5ba90b9cbe6def9d665ae89753"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","2b639c3cae28b3c3974cfc4930f3b494"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","469bf2d546b2e868cebe875518032294"],["/js/ai_plugin.js","2e8bafe7451ea96da22df59e37abe16a"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/python.html","dee8c447586c6eb885cedccfce92d90a"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","b7058cffef978ba074e51a782e799408"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","c4e1d5554ce0915002877e2a351a0a9f"],["/link/index.html","68cd5d6129d40458c6517fbd64e7ec87"],["/music/index.html","d15f35d59e04204efd2ffa58b8fc3f56"],["/page/2/index.html","72b15ad38ea2ae30e40288ab6aa327c8"],["/page/3/index.html","d78982d2b18d05a81bc38aaa255ef3c3"],["/page/4/index.html","01c7f8ea630ab48400396e37e59b553c"],["/page/5/index.html","e657d596b4b8a2b8c557e74b472e0dd7"],["/page/6/index.html","ef298ad4cdd9877ab0131402bc063122"],["/posts/12501d69.html","90ce0c1145cf8cd55b005e06a7b6a153"],["/posts/1484043c.html","6ad74cb8cd4f006863b0bf1109fcf173"],["/posts/1b0c78b3.html","c00da755ce0c90167fef6efce1a67b7e"],["/posts/1b5b87.html","d9045a83bba14b5a1ab1004056b96ac8"],["/posts/2134d9d1.html","a0892bb39dbbf791a66323e830ee9b07"],["/posts/28c755c.html","0604fd241dee5f962d8eb1a23d787a63"],["/posts/2f77f294.html","ead5f5c0596ef08b7f36548ad8f0fbb7"],["/posts/330d6f69.html","fb686d9c483311d97195a8c5b6af2856"],["/posts/3b744803.html","f12ee91d430426f3a55a12317b400d43"],["/posts/3da05156.html","4569c8be7f63ce021fe5fdd7e3028016"],["/posts/3e91e0fa.html","0890d2cd63434b7aa1a6ca7bbc73a5fe"],["/posts/41c2c0d2.html","1fc564e8cd395df98832d19ecf355922"],["/posts/46fc5adc.html","80a55afb12f00dbbd4e52bf8f18f4989"],["/posts/493f6b85.html","9ff4954879a13c72e4571464c7506fdc"],["/posts/497e40e0.html","03391dba427c31a13a8770142c05b94d"],["/posts/4a17b156.html","2dcf66e2731e33f1f36443915ec7d498"],["/posts/4e2d7b19.html","20eb165bf9dffcc54742ab0a43764845"],["/posts/4f81eb97.html","f5b6b2e82ad8811b4d215b4467c85833"],["/posts/53721e0e.html","9faa43d92715be3946eb933548452c6b"],["/posts/5dadd067.html","6225bc7ba70c7c5d7e0f5f1d182f86df"],["/posts/5ff34642.html","ae57b36ce5f67a579f5360ac227e72bf"],["/posts/653abebf.html","823765710aac6ad759e6025708fe8269"],["/posts/681265c2.html","18ad1c3d9ce7d06824b3e807771f4fe9"],["/posts/6f44662f.html","7b526c18cf2caad26477d6e45b5d4897"],["/posts/7207f70e.html","beef2af89374cfd48cfb8e53c2c9b6cb"],["/posts/7289f891.html","9a22d5bc005ac56b03355c5f7404153c"],["/posts/732e626.html","f25a5d7291532a92c529b64d203ab5ed"],["/posts/7c825231.html","24ddf3bfa725da0e39ec5414c94c2e35"],["/posts/7cd0d214.html","b36df0f07e377b56c481721c464b0570"],["/posts/7d9071b2.html","bbd63e474d5cb7a101ebecdb750b7182"],["/posts/7e13cc3b.html","58e1396fa3393230d45e9eac81415765"],["/posts/80a7ecce.html","9c299c12b142c9acb7bfe0b82dcadfb6"],["/posts/821a4686.html","f90fdbb963034a2a8c09805c903979c4"],["/posts/8a741756.html","b710690e595837a27fee03b028a7429f"],["/posts/918d46c1.html","b2204f1a43e83c1c8a0357c94113cd11"],["/posts/93c8c0c7.html","dae206d1c521eb7cba00268d63f92797"],["/posts/9f057e9a.html","1be1033a6bae2261d43a936147f1587d"],["/posts/a7d437fe.html","0f8ed0f6aaa9ff909ebd23e4d0ec7ae2"],["/posts/ace4e4cd.html","4b5551cda8b3bf085cf838c6162686ae"],["/posts/af30ddef.html","5d2a5e339a22478d1157a36ba0da4ed0"],["/posts/b1eb9c6d.html","c341052b2551db9cbc5e91d7fc7fdfe6"],["/posts/b564e922.html","7facc75ffd30aef35abc94a47a5ada3a"],["/posts/bc9a4dc7.html","3b1a3b9549d7bb8cb3ef209923aaf5d5"],["/posts/be543a11.html","48f26aa48e44f4d4fa504fff33037a5a"],["/posts/c9b871f1.html","bd9cc79b71b61b468d611ad44097b806"],["/posts/d6ef11e5.html","6b7e6ea02172ca249f1cb9129c95b24d"],["/posts/dcd6fdd1.html","f789a9b1d43f6b3bd50d24ce5b4757d2"],["/posts/de24a124.html","35451951dc126825bfe123cff9ad75a7"],["/posts/e32cbcd3.html","c27b887ff0c9e35442ab571a35cf8053"],["/posts/eebbc69f.html","7bc44a3d576e34e7f1f562b0993db39f"],["/posts/f08119d7.html","f03a96ab27398e5d98b61ada73c39d87"],["/posts/f34dbb9f.html","f86aa6441d437f6115fe431653729655"],["/posts/f7f51423.html","8ffd2b77d318835ad70e6f59a01a8b5f"],["/posts/fbda33d5.html","8dfcf976399e9ce98cb54c7843d2d282"],["/posts/fd1a8f9f.html","81f9b47b02587cf2aac13d7000d5bdce"],["/service-worker.js","9d5fb49aee9b7c1f6e28cff8a5eafebc"],["/shuoshuo/index.html","43b43b0e9ca8b8ac01c207798743c9e3"],["/sw-register.js","43b2653df3b006e1001dc74fd050885d"],["/tags/index.html","677ac1dc823b48f68966d8a338003874"],["/tags/【每日早报】-2025-02-25 - 星期二.html","26f71566126a65ca242c37585371651f"],["/tags/养眼/index.html","6c9137329d32efe9c9da8ee8cd962944"],["/tags/每日早报/index.html","383b11a7014df7578832bdac5c32c172"],["/tags/每日早报/page/2/index.html","1e1be716dbef10343c27ea029e5bae16"],["/tags/每日早报/page/3/index.html","212e5efa68666902ef764c32a9b56429"],["/tags/每日早报/page/4/index.html","e4a58f4273134ee02c8e0804d4d1c7f6"],["/tags/第一篇/index.html","6dd408f070866d382c94f6bb4c11682e"],["/tags/网络/index.html","0df830293c23f9158e45d477cdaf946b"],["/tags/网络/page/2/index.html","796bc205ce82c9ff96da8c0494ac203b"],["/template/index.html","d4b4418376646ecfd0e11329baec1885"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

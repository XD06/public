/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","db195f31378936db79b66128ebbd6406"],["/Gallery/index.html","13b097d88215c800f82ba57d64acd77d"],["/about/index.html","3d28bee8d2078d416a3f4b6b56c9781e"],["/archives/2022/08/index.html","6cb3e821a41795f081143c2ed272f7fa"],["/archives/2022/09/index.html","703f5aa435a8b3854c70ade476d637f6"],["/archives/2022/10/index.html","0e4ed43ab6a837f92f4aa147129dd492"],["/archives/2022/index.html","561712fe80ac63784bf4b4afecb0f1a5"],["/archives/2022/page/2/index.html","d51be82f431b153246cda4187063afce"],["/archives/2025/02/index.html","60c13864b8d170969cb129e39698c066"],["/archives/2025/02/page/2/index.html","59dcf473c48450ffb688a1b883d08c9b"],["/archives/2025/03/index.html","7a77ade72d5bbc8f5d44349da65fbdec"],["/archives/2025/03/page/2/index.html","9ed89783d1c5bb06f7da053981c0ed45"],["/archives/2025/04/index.html","e7a8adaee51d14f37405d262c42db809"],["/archives/2025/index.html","7fe7b43eae7c721146eabfd09e2dd117"],["/archives/2025/page/2/index.html","45aaf6e142262f939a193cc539c7c441"],["/archives/2025/page/3/index.html","cd203f744a34ad20eeeabbb035333d29"],["/archives/2025/page/4/index.html","d65f3d25d0af44757fb5eacf5ee0c0ad"],["/archives/index.html","06c6820cdb412f241479173f4f5392e6"],["/archives/page/2/index.html","d8b3c05fc918bfaafe998902f5b7f4ca"],["/archives/page/3/index.html","3219bf3252ba95c88081d5bb93f1940d"],["/archives/page/4/index.html","3510c9b8667ff8b34d09fec0343254ec"],["/archives/page/5/index.html","0440fea8fc7b56dafafbc523e56f3cd8"],["/archives/page/6/index.html","b3dbdca3b3634d25b03772be51956ce5"],["/baidu_verify_codeva-J5b2WWChcR.html","74f9488e9ac9e25b014f74b2558ebfd0"],["/baidu_verify_codeva-cwyza0ZFJb.html","812ac539b3587ad5a096f37356d639c2"],["/categories/index.html","ca133116e0d5d56eed2b63d0bd451386"],["/categories/壁纸/index.html","27e3b023c4b655a38ba674b4dc0626d4"],["/categories/机网/index.html","7ccd9dd208bf920efeea8c64a9a2f96b"],["/categories/机网/page/2/index.html","a793cd1cf226240e1a8e391fb985b286"],["/categories/每日早报/index.html","9b30837dae7c1bb72957fa155b6dc14a"],["/categories/每日早报/page/2/index.html","18f1fefa8645fd59d7966e2fb07f5a25"],["/categories/每日早报/page/3/index.html","8e5a9415ad5610c450570a9865e1f6d4"],["/categories/每日早报/page/4/index.html","549790922b26af13d300adc413b564cd"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","d68630705c7e65e8e82dc859ec37da1f"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","67db984b15499222b87d2e6fbd064a87"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","dde7f2f9b9703a44eab919e8a9b65faf"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/python.html","8552325104a724a63eb6b40f2b30a583"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","de9bdcadc5b840d74a0bae56febe3874"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","60d596a383334874920bdf4d468453f8"],["/link/index.html","b82dc4dad78c2355651f2873506bd424"],["/music/index.html","fac39c6a1d72ff5d88a242a48233d960"],["/page/2/index.html","e9a825297e5bf656bb282a07db688be6"],["/page/3/index.html","f1716b7edb5e1caccd4a73b618df6a80"],["/page/4/index.html","410cbf6be48c5c55033bae73589e16be"],["/page/5/index.html","18e550c18fffe5650fecb4b93f6eff1b"],["/page/6/index.html","3e49c6d17d7b401f842c6b743f183835"],["/posts/12501d69.html","90ce0c1145cf8cd55b005e06a7b6a153"],["/posts/1484043c.html","6ad74cb8cd4f006863b0bf1109fcf173"],["/posts/1b0c78b3.html","c00da755ce0c90167fef6efce1a67b7e"],["/posts/1b5b87.html","ee3aced2c23cb14ad6c7c0f017c0b4f1"],["/posts/2134d9d1.html","a0892bb39dbbf791a66323e830ee9b07"],["/posts/28c755c.html","0604fd241dee5f962d8eb1a23d787a63"],["/posts/2f77f294.html","ead5f5c0596ef08b7f36548ad8f0fbb7"],["/posts/330d6f69.html","b2b8a88f9dd83725bb715ff8779d6cd5"],["/posts/3b744803.html","f12ee91d430426f3a55a12317b400d43"],["/posts/3da05156.html","4569c8be7f63ce021fe5fdd7e3028016"],["/posts/3e91e0fa.html","12f9cbe52e78a403ec90b3afec1b24cb"],["/posts/41c2c0d2.html","c139b54ef957b0a8ed5e6ee5073443a4"],["/posts/46fc5adc.html","8cc3bcc6459ad9cd8248780daed254f8"],["/posts/493f6b85.html","9fe9a9ff559323d03225b1b862c2dfc7"],["/posts/497e40e0.html","519234d7af80af33f3504709f162c8f2"],["/posts/4a17b156.html","9323ea31681acf270856cb554a132acd"],["/posts/4e2d7b19.html","20eb165bf9dffcc54742ab0a43764845"],["/posts/4f81eb97.html","f5b6b2e82ad8811b4d215b4467c85833"],["/posts/53721e0e.html","aa85a78b0e8da38d166cde9f4aa140ea"],["/posts/5dadd067.html","6225bc7ba70c7c5d7e0f5f1d182f86df"],["/posts/5ff34642.html","6e2e088c5fdf9a4b3b27d75f3a5c7a58"],["/posts/653abebf.html","15301d48e6fcbde096a32ca0131b7578"],["/posts/681265c2.html","380cf7b59dce1d5d62cbb7792a62d308"],["/posts/6f44662f.html","7b526c18cf2caad26477d6e45b5d4897"],["/posts/7207f70e.html","9d39743f38f422044bd2e0ff1abbf6c1"],["/posts/7289f891.html","ac32559889a675f7513557cc46c25f8a"],["/posts/732e626.html","e42676849576a65dbc12c24bce823341"],["/posts/7c825231.html","24ddf3bfa725da0e39ec5414c94c2e35"],["/posts/7cd0d214.html","b36df0f07e377b56c481721c464b0570"],["/posts/7d9071b2.html","ea1363260c277de8d38b2b8b7dec904b"],["/posts/7e13cc3b.html","bc974d0c93079b7a61f523ea4808fc30"],["/posts/80a7ecce.html","7161cb691ea9f361c7678f2c88941ba1"],["/posts/821a4686.html","c4600eb305de04d3f8ffbdfccf6f6f06"],["/posts/8a741756.html","f2c52a5e85ce50516e4b59251e4b07cf"],["/posts/918d46c1.html","a5f28aa25abd788660170b432e1af32a"],["/posts/93c8c0c7.html","dae206d1c521eb7cba00268d63f92797"],["/posts/9f057e9a.html","98337ed5091f4faac2ce573a91f1373c"],["/posts/a7d437fe.html","0f8ed0f6aaa9ff909ebd23e4d0ec7ae2"],["/posts/ace4e4cd.html","5d52958edd1692617fb40dd17b40e257"],["/posts/af30ddef.html","5d2a5e339a22478d1157a36ba0da4ed0"],["/posts/b1eb9c6d.html","b8444388fbbaef314b2fd1e84b2a27b3"],["/posts/b564e922.html","7facc75ffd30aef35abc94a47a5ada3a"],["/posts/bc9a4dc7.html","3b09963ac10901783b8125e5498ff0f0"],["/posts/be543a11.html","831d09a7f4babd6b213738f7b5f85d90"],["/posts/c9b871f1.html","e034960573889e032bb0df5207192efd"],["/posts/d6ef11e5.html","0855933f1822dcd593915180b46c72e0"],["/posts/dcd6fdd1.html","87d9ffab734ed3c86c80e633fb848498"],["/posts/de24a124.html","783bb1e4642f0c2271507c3de26e6e5a"],["/posts/e32cbcd3.html","0bbd4b3c40dde6cfe3e6c84aff882cc9"],["/posts/eebbc69f.html","7bc44a3d576e34e7f1f562b0993db39f"],["/posts/f08119d7.html","7e958f1444a4407e063e3c4fa6ad2a20"],["/posts/f34dbb9f.html","f86aa6441d437f6115fe431653729655"],["/posts/f7f51423.html","2b8ab1bd31931f457426b53327508a36"],["/posts/fbda33d5.html","8dfcf976399e9ce98cb54c7843d2d282"],["/posts/fd1a8f9f.html","81f9b47b02587cf2aac13d7000d5bdce"],["/service-worker.js","59d2dd5a16b047cac610425ab077cf36"],["/shuoshuo/index.html","cb89619d6d2a13f5fec28183e4b7342f"],["/sw-register.js","8e7b17f81957a5bdeb277895c41d60d8"],["/tags/index.html","a25e11dc460efb0ed42cedbe975f1676"],["/tags/【每日早报】-2025-02-25 - 星期二.html","2d5df1a00f7f467b5d2d4b85fb383415"],["/tags/养眼/index.html","fb9496ad984583fdfa29a40aeaa4f24f"],["/tags/每日早报/index.html","611657507317b134150541821b16e309"],["/tags/每日早报/page/2/index.html","98111540a1a535cc3f4986d0ff52a4f5"],["/tags/每日早报/page/3/index.html","f5c9916cbc03d39b0c75e977a6c460e5"],["/tags/每日早报/page/4/index.html","3fa1e36f8abb503f7dee66e7ee7ecd34"],["/tags/第一篇/index.html","a3deeaf4a739a11cfa72fd4fc09ce7ee"],["/tags/网络/index.html","5f2f97a19801f7686c4508e79f784d86"],["/tags/网络/page/2/index.html","2c02ef49e24ca5092e176fcafa019bd2"],["/template/index.html","5a88b142875f12eba8d53da6b7b192d5"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

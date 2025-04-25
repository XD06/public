/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ceb2ed91aee41bb378152bf1381f094e"],["/Gallery/index.html","187af69e60e1243a11b6b794e9a25506"],["/about/index.html","115411e43c21f8ba9bd6df37b16d2dce"],["/archives/2022/08/index.html","8bca7b6b0e059a6b43a65986ac74026b"],["/archives/2022/09/index.html","1dae72ea809098c20b08970d16e015b1"],["/archives/2022/10/index.html","9ec5c3cd0e3bf14aa6864e8f7b948298"],["/archives/2022/index.html","4d3138407804adb2b05dba9c5f409f55"],["/archives/2022/page/2/index.html","fe90ba7d2ead2303cefbf5618452653e"],["/archives/2025/02/index.html","1ca947f7e51987fc3a80e12e8a851105"],["/archives/2025/02/page/2/index.html","88b90a5cdac0a83ffc43a4771f8cd29a"],["/archives/2025/03/index.html","00f8c985f2679f401a6080352d991e32"],["/archives/2025/03/page/2/index.html","900b19122a860c770fb98667c2149845"],["/archives/2025/04/index.html","070b1059b9798d3865306bcd5d561b09"],["/archives/2025/index.html","e7a2a177940d099430bea1e9adf72550"],["/archives/2025/page/2/index.html","c78503cae08c70979443c46e46683bed"],["/archives/2025/page/3/index.html","0532903bf17d90704cced7df87c24e09"],["/archives/2025/page/4/index.html","a390d68a8e1eda9c2110f77591f21a16"],["/archives/index.html","ebe3b8148602dbecb8cad80314ecda9b"],["/archives/page/2/index.html","547034082ce6f9f581e74cc46f276620"],["/archives/page/3/index.html","ac6e2e9f00b6caa67daadf479a5cfa11"],["/archives/page/4/index.html","121fafcd1cbf5d1c77a05ed02c1da0a1"],["/archives/page/5/index.html","4b7b3561bc7c20fa148ce0eab8b7f725"],["/archives/page/6/index.html","cfc438f9368416992e5b546ea94d23a6"],["/baidu_verify_codeva-J5b2WWChcR.html","bbc0b333ab57663effe9304777deaac4"],["/baidu_verify_codeva-cwyza0ZFJb.html","24966c067c952abda0e91b5c6e1e217e"],["/categories/index.html","6e7374e9ec6730bc76af114694d67d11"],["/categories/壁纸/index.html","be7e437990fc248561dc0cb56c13b457"],["/categories/机网/index.html","201a0ea6d82c5e0224d448fc42a0aa4a"],["/categories/机网/page/2/index.html","17db66a4918a4b6fa6f4098922202d8b"],["/categories/每日早报/index.html","93d380cb5bc04b46157940a3f29ce4f9"],["/categories/每日早报/page/2/index.html","2695b1285c25d35f54876455952c9a64"],["/categories/每日早报/page/3/index.html","b899f8545f84330b3c95b4fa2bb15d0c"],["/categories/每日早报/page/4/index.html","98a2ae1a12896182a90488aa61e7a832"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","62481175a682afaf65332b6574ea3ee6"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","b1f0349a23d3d593d779bf16220cd558"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","25f41d19a5cd510b99acd1178ea6bc3a"],["/js/ai_plugin.js","2e8bafe7451ea96da22df59e37abe16a"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","f674a266c161209bd50139420e8e603c"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","4f7f9e55a1445eda33d0a51032cbcc16"],["/js/test.js","1d1832b2d0e2801723f9f20c725c6f24"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","609379070c6c8ebb63bf72a5bcc30daa"],["/link/index.html","8f0936e8e97bc8ce14bedb09cce6bcff"],["/music/index.html","106ed3de907cdda263558b478fc955cd"],["/page/2/index.html","666daffeb1f9a7a9e4c28a0cfb7c8385"],["/page/3/index.html","5a0c55490f78558ac50f7cd0860ceca8"],["/page/4/index.html","31db9f287a2c9769035037216d9fca5d"],["/page/5/index.html","f6516de19ac6faaad35c207cee7c7a21"],["/page/6/index.html","96e74a3dd237dc3dd756accc4c9fb8f7"],["/posts/12501d69.html","6efdad3336e6a012683a85a774b6c0c8"],["/posts/1484043c.html","31ad7649f7ce174e6358574be31c34d8"],["/posts/1b0c78b3.html","eeb502b44a97bbe4270c0dd0d8aaa391"],["/posts/1b5b87.html","b0f867f0212818f83a13e54f169948f8"],["/posts/2134d9d1.html","8b279b50761691ca894e03c2c504da43"],["/posts/28c755c.html","4b63b5bb20cfa34122bd5c278ffb563e"],["/posts/2f77f294.html","6a4e06311a980f39ad0879e118857d10"],["/posts/330d6f69.html","af8f0b732664db19c710bc661e102d42"],["/posts/3b744803.html","020fa3e4b9867a12605a9997a00b10ef"],["/posts/3da05156.html","8ffdc2bf8892294dcb90a6d2024e4249"],["/posts/3e91e0fa.html","446d9ae5f2f491da01d748e54d5580e3"],["/posts/41c2c0d2.html","fad158b3506308be092b2bcfe66e454f"],["/posts/46fc5adc.html","7c8e3ade4e85c23b5a935802b7d24ebd"],["/posts/493f6b85.html","6908311b3878912f3509b4405ede1972"],["/posts/497e40e0.html","4a0dd93fa1fd995f9a8220ab7e033423"],["/posts/4a17b156.html","85e6c83e3d5cc081b46e49067f038fe3"],["/posts/4e2d7b19.html","9d4a19b36847da2b2b67b375614d707f"],["/posts/4f81eb97.html","aec1aa4e889fc5b832fe16942fc7541d"],["/posts/53721e0e.html","5b3c5a50c2eff7cff30455a7bbc91c34"],["/posts/5dadd067.html","5c4bc555f2a88a15c07c9a5caba094d8"],["/posts/5ff34642.html","b3e6c5788c5d39b0bbe08ec5791d8291"],["/posts/653abebf.html","851909407a6c849912e324816fb9c283"],["/posts/681265c2.html","bdd10e08af7a12b052eada463c41a9e7"],["/posts/6f44662f.html","06a383def98974148f83d3bc3b9cb42c"],["/posts/7207f70e.html","b3e87d4e613e822bf6cb7a0a076e1988"],["/posts/7289f891.html","f611549e01ec60f29d90a25184ffb0e5"],["/posts/732e626.html","dd0953415587bec7ca30afd844012306"],["/posts/7c825231.html","5e7f8620f5cecbe8008701147acab4e3"],["/posts/7cd0d214.html","ca99699bb00de898288a8a70b3e21afc"],["/posts/7d9071b2.html","56ec68431bd872b67e487ca6bdfe03ea"],["/posts/7e13cc3b.html","2bd6c02fb35e1e22a26b4d39eb424dec"],["/posts/80a7ecce.html","0ce8d09f329e82670d0752d6e7271ac8"],["/posts/821a4686.html","aca751cb5e7ae3b9fd29a68828cff0bc"],["/posts/8a741756.html","207afb7a0069c140aa66f077c50104c9"],["/posts/918d46c1.html","877a7923ed4c167bb5d6bb5cad926fb7"],["/posts/93c8c0c7.html","77bf0c71a5104fb7d0405fd36b67fc6c"],["/posts/9f057e9a.html","471a82069ca2278f6902df34382a162c"],["/posts/a7d437fe.html","2b4be91b7bc6b4f3fa29bd794aae12a8"],["/posts/ace4e4cd.html","a7477744e8f25541ff3a14974fce8b64"],["/posts/af30ddef.html","72c37e00fac04e922aa0e12830b616bb"],["/posts/b1eb9c6d.html","a6e86680fc6173ddf6237ddc1197d7f8"],["/posts/b564e922.html","5d06b52446b513c227ade35aec3eef52"],["/posts/bc9a4dc7.html","8be3a868203246fb3292ae4dd6ee1287"],["/posts/be543a11.html","e665c0a9c38351552ba50d388aaa358b"],["/posts/c9b871f1.html","0a78f72b9773914a9db5381cd3586347"],["/posts/d6ef11e5.html","83f459cb8d15212b5f80f082813f063b"],["/posts/dcd6fdd1.html","5085ee64108e6fea81c108c33d54bbd9"],["/posts/de24a124.html","978006ffe1308c8f4dbb91061b8d6fe0"],["/posts/e25a3e3a.html","aa85a54e43fba39cce40f02a4457feef"],["/posts/e32cbcd3.html","2c477d4c6ba8188e741afaf6e41be597"],["/posts/eebbc69f.html","f9a518f6a2b42d9e5948060ce3aa4f7f"],["/posts/f08119d7.html","602f5fcc3739d55978214f53ea1cdc5e"],["/posts/f34dbb9f.html","c6223c718dbbff920e4b388e36ba13e3"],["/posts/f7f51423.html","d2170705724365807033c1a52e44d3a4"],["/posts/fbda33d5.html","cfa52474b999411d60caf6cd3176a907"],["/posts/fd1a8f9f.html","14cce7563fd95f3acea59d24e2d1e0af"],["/service-worker.js","13a3efc2e0869963512ab3fa597fc8c8"],["/shuoshuo/index.html","1fc6a8b5e0fadb420dc7a23d96caf68f"],["/sw-register.js","b08079c6a37503bfd0159f0f80f89474"],["/tags/index.html","d1b009f53c443528b32b00fe0f607aa0"],["/tags/【每日早报】-2025-02-25 - 星期二.html","3a24f538b90fbc245cc6a48c8496dbd4"],["/tags/养眼/index.html","048a2bc6428cffd40ecdfbaee96a43b1"],["/tags/每日早报/index.html","f7e892aaef7570df1ffe8bb59a9dcf71"],["/tags/每日早报/page/2/index.html","a6f3b5b7e185b1f83aa8b38c1276376c"],["/tags/每日早报/page/3/index.html","4019a465666c26252fdb496570e37db1"],["/tags/每日早报/page/4/index.html","7b9893da9e74aaafdf03d63b629a018b"],["/tags/第一篇/index.html","dac75be5e5153d907d29ad76b0837adc"],["/tags/网络/index.html","9610789c76db01cdb467ece66ad80ffe"],["/tags/网络/page/2/index.html","09414ae809cbf11cfd318f9dcd22a76a"],["/template/index.html","846c4affee57beb2506d81f8360ecc5b"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

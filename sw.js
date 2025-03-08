/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","185825ad0e1126792bebe5e26f8fddab"],["/Gallery/index.html","36bab6eba689cc78bd56bc60fda2a5d8"],["/about/index.html","b0861dad2cb8291983eb6fff03bea754"],["/archives/2022/08/index.html","d2f77f592e56a3565c733a345647bea4"],["/archives/2022/08/page/2/index.html","80a15c2dbedad648f85d701e9baee7d0"],["/archives/2022/09/index.html","5b150b1f88712098ff9dc28ae4d1461c"],["/archives/2022/10/index.html","8467be00ee2b4ffc80cf9ed290fdeab6"],["/archives/2022/index.html","bf70110edd74229e818aeec730e1c725"],["/archives/2022/page/2/index.html","abb708feeeca79e7fe8a220669ec095f"],["/archives/2025/02/index.html","e4cc115c08dfcd988f31c5c374ed17e2"],["/archives/2025/03/index.html","b3b3326f96f1a3ba08ab01b0ce3cfa74"],["/archives/2025/index.html","3ee58add53f547823974b2db3828b7cb"],["/archives/2025/page/2/index.html","da25a05bd513e6ce76836b0234a74ede"],["/archives/index.html","6970534416566350daebfea0c44957c6"],["/archives/page/2/index.html","4c7bcc17d1ec5c1891a50ff1afc2c3f1"],["/archives/page/3/index.html","cf56e4a763cd73225622e53417564b20"],["/archives/page/4/index.html","f8f214536ad6313363c4b2bf05b61c82"],["/categories/index.html","bbe839400841fd1a1a65f15dd88770b9"],["/categories/壁纸/index.html","f0b747ba8d8e9ce4adba4a98c6fcad25"],["/categories/机网/index.html","c53df0467dabfb87906c4a86a170004f"],["/categories/机网/page/2/index.html","2f2b205bd4c798949e88427217429451"],["/categories/每日早报/index.html","524468ea2eb268c9b3a8967b4ce81121"],["/categories/每日早报/page/2/index.html","3f33b2373fa77afe1bf9fe3e1bd896c3"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","85bf2a16eb1bf15e0a0c5233c56f8c6f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","03fd62015d121d60fd1b98ac92efb1e8"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","67252675971d4b3550456db474df4122"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","626f9f0f527ab1ed79e4c37cd4dd500f"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","654c2248e385325c007c8bd334d356c4"],["/link/index.html","093c62859510f354924e3ffa5b0d9475"],["/music/index.html","7a343c676514ece75293d1156bda2e1b"],["/page/2/index.html","25ab43bcdc9d31fd638e91bf2da68ad7"],["/page/3/index.html","c09c74db4e43611147fef758230c420e"],["/page/4/index.html","633b25a5ac59b1525cf9bdaf4ecc143f"],["/service-worker.js","9e02581e8ece5d30809d00e1e42b3aeb"],["/shuoshuo/index.html","4cfc0bcbe3520628d64e771134c46976"],["/sw-register.js","45fa4c3262310ff471a96e4872edb52a"],["/tags/index.html","2aa9b8de98c167afc64830a3e068ab69"],["/tags/【每日早报】-2025-02-25 - 星期二.html","7e1cf1e42313c8618fdb652984a26795"],["/tags/养眼/index.html","87d1b31deb618e73f00f58ecd81eaaa4"],["/tags/日常/index.html","3e764d1a8dabd19cbfd6af382a2e5063"],["/tags/每日早报/index.html","358dd351eae501ad0029f98584bd788e"],["/tags/每日早报/page/2/index.html","946f190c4471cb34b314da4a4a995f01"],["/tags/第一篇/index.html","1f21b5f671e8fe372070a1e6efdd7cdb"],["/tags/网络/index.html","93017f8f6ed40ba603886415968a6501"],["/tags/网络/page/2/index.html","f3fd064e6ba7e31ba855dad9af203f40"],["/template/index.html","0b9ad2af332916128d0368f39d69174b"],["/test-post.html","7e7e3f533ca83c4b8696f9c4525fb653"],["/test.html","dc3e820f45d2a95b31e9f56917111c3d"],["/webhook.html","fc70c833d6627cac725a552ba1dc61cd"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","d8f245676435f295e9e893e4d180aa4a"],["/【每日早报】-2025-02-21 - 星期五.html","90769ba589842ee237fba0e6aee45555"],["/【每日早报】-2025-02-22 - 星期六.html","1de557a132e0afce4ce68b61154e6a45"],["/【每日早报】-2025-02-24 - 星期一.html","768ce691bd9c0325d9b6850e4ee6150e"],["/【每日早报】-2025-02-25 - 星期二.html","a1d029250579987693b6d539289572ed"],["/【每日早报】-2025-02-26 - 星期三.html","c673398c6bff83f40aeaf3cd5ea17c2b"],["/【每日早报】-2025-02-27 - 星期四.html","4ff02a225199347ee938eb3d69349ea4"],["/【每日早报】-2025-02-28 - 星期五.html","7c4a0e816788585b23e34f34c92cd30d"],["/【每日早报】-2025-03-01 - 星期六.html","50f35e578e8ad274941b0edd83b87ac2"],["/【每日早报】-2025-03-02 - 星期日.html","6df847b453eeb561471754bec140ab76"],["/【每日早报】-2025-03-06 - 星期四.html","dbd1bb55c4ab9cc930de417540396f89"],["/【每日早报】-2025-03-07 - 星期五.html","089dbb647db8e2b25a89c81a898f8011"],["/【每日早报】-2025-03-08 - 星期六.html","5daada8c5e8abaf9cf43435aa6a459a0"],["/分享壁纸(一).html","0d5110ea68f38152c75d7eed650247b6"],["/分享壁纸(三).html","e4137dee1de593a8212f71cad7b1801d"],["/分享壁纸(二).html","b69ece970062905f9757a4a5c8228443"],["/又是一个不眠之夜.html","63e3bd0a3f93adec3a0641b3791fed06"],["/咒术回战.html","bc11528a47787568e721094be26d150c"],["/开端.html","77f2b3be0668e4242c1b9d8e9efc64b4"],["/白桃露露.html","cbeac2200b61f82ec71e9da2a1c7a4a8"],["/示例.html","9d5a9304f5bb537271473f5e0614d1e1"],["/计算机网络-数据链路(一)8-30.html","72dad2ef457a709dc1fafb467f12ac75"],["/计算机网络-数据链路(三).html","735cc8f641b3957ea3bbe6f2625fb469"],["/计算机网络-数据链路(二)8-31.html","218232446f297e3bb227cfc348a49862"],["/计算机网络-数据链路(五).html","c577d1163865e42d7d6ce669981a45ba"],["/计算机网络-数据链路(六).html","a0fc42be24e977dbfb516d87cbdded72"],["/计算机网络-数据链路(四).html","bc96b913b8ee5b5d5f7929a4bd1e8bb3"],["/计算机网络-数据链路层(七)9-5.html","6bc5f3f44181618f6ffc529f66e3f526"],["/计算机网络-物理层(一)8-28.html","fbef8a9ae06ac2564fc0c08c45a7312c"],["/计算机网络-物理层(二)8-29.html","002f705ef748bda118c6027296be3cb6"],["/计算机网络-网络层(一)9-6.html","42af49588d12e15d43d08d314f1a0b54"],["/计算机网络体系分层思想(8-27).html","f00088fc522ffec5634bb27671f08b40"],["/计算机网络性能和体系结构（8.26）.html","759ae988b2492b625bd00d170d948383"]];
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

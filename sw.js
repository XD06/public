/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e7e2f059bad0327de0c7107618a62216"],["/Gallery/index.html","277d5d0c6a593b2dcffa196ae1bf2c0e"],["/about/index.html","3fd34c9fcd23ef52033c9ab6ea964a91"],["/archives/2022/08/index.html","915b8911ba0005033b2d22497538c426"],["/archives/2022/08/page/2/index.html","5e71e2c61bf1fd726c606ffdd88e77a1"],["/archives/2022/09/index.html","27675d1706dd57760014234e89300a6a"],["/archives/2022/10/index.html","e5368518cfafca7e5b3d3d7b7706444a"],["/archives/2022/index.html","4143850dfec40bd2cbe9a1255aa84b19"],["/archives/2022/page/2/index.html","11d22a48c0fe84db2e5d3f6ca5384c39"],["/archives/2025/02/index.html","1977f384682adf5552c7bad4fc432ea9"],["/archives/2025/03/index.html","53f008fbbe6623ac5712e162e9884907"],["/archives/2025/index.html","cc61a05f27881221328279a2efd5752f"],["/archives/2025/page/2/index.html","0769524f820dd0046fcc09eb833ed342"],["/archives/index.html","2ae6b75509b2a951cf5fe68c4e9ec6a1"],["/archives/page/2/index.html","17f24ebc9b70ee2e906985f8a3ea9282"],["/archives/page/3/index.html","6fec53015e6a01193765d65bc5fb49d0"],["/archives/page/4/index.html","bcbf4990762619db150a68f0304548f6"],["/categories/index.html","0341ce30576071e71dc1dea52f266b4d"],["/categories/壁纸/index.html","54e254eb58faf434c88640a0f9b09477"],["/categories/机网/index.html","e092fe6dee0c4c5534af0b86742a971b"],["/categories/机网/page/2/index.html","b89cd69be547907625c596ddb8dd0129"],["/categories/每日早报/index.html","b4e2aff4d08ffee6cf7f8da34584c169"],["/categories/每日早报/page/2/index.html","d077a1137480340595339885ee84f37a"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","d13bf1556beb8e8518c8f9880cb3a0aa"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","a46c8b2d5eeab7dc1ebc532050cb415f"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","2f40230d2d1614ead02b83373bc36d81"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","f0fcab83fec5f324549a7a2c5ec544eb"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","01fba0fb42e13a32f56b5258538f9328"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","c49bdd6152964b458c94e1b3a69d23ef"],["/link/index.html","05cbda1642150c45a3f3a20750df2bf3"],["/music/index.html","fdc8067d9527d25bcc54f98cb4850977"],["/page/2/index.html","c071fdff033b143f6bd0d6af432a77ed"],["/page/3/index.html","48648edafa6b118909492243c2b41910"],["/page/4/index.html","73a78ae6b6152ab83e37ef4a5024edea"],["/service-worker.js","37113aed40063b1595ef63f7ba46b3fb"],["/shuoshuo/index.html","bf4f529b66637d1118ae18e092c7b35a"],["/sw-register.js","199f5451dc9483efd23b319e72f4d13b"],["/tags/index.html","d8783d50fa831f63fe7ec7e0fce3b7f6"],["/tags/【每日早报】-2025-02-25 - 星期二.html","823bcdf4dcff7a8359b62f5505b3c106"],["/tags/养眼/index.html","65a693e236ca6e40b15723e795cacbe6"],["/tags/日常/index.html","224fc64b09b9c764d099917de0196ddc"],["/tags/每日早报/index.html","41c07b32301c25681b6a5b126a45aed6"],["/tags/每日早报/page/2/index.html","ac1e855ce1e52905f32488ac6baf4f7a"],["/tags/第一篇/index.html","b09bcd288a464520717d540269d7bee3"],["/tags/网络/index.html","3211d0b4999df66312052a937c89e127"],["/tags/网络/page/2/index.html","0fa9bd94cead6f8480104fb37a42272a"],["/template/index.html","554c39e4773c1f5b43b684a453b386c6"],["/temple.html","24b852a7332da19258c33eda8dfe6afc"],["/test-post.html","3a3070fb355f51ece6e758e6ef85eaec"],["/webhook.html","c3766edc22f123a1b371a1e475673b74"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","155793fcfeff2d5a8c14ae51e1ab3f9b"],["/【每日早报】-2025-02-21 - 星期五.html","4bfabf2d87c4f923b96e783b5e83a43e"],["/【每日早报】-2025-02-22 - 星期六.html","d68cb5143c652f5198ea808483e541d4"],["/【每日早报】-2025-02-24 - 星期一.html","d0f6c130b44c79b0749587ddd5527fd6"],["/【每日早报】-2025-02-25 - 星期二.html","ac65b11c5cf228610d69ae96ab9e139d"],["/【每日早报】-2025-02-26 - 星期三.html","9eec8371ab79b8386be0d216eea7b00e"],["/【每日早报】-2025-02-27 - 星期四.html","6073b56fcccbee9b8b15e9f839f17003"],["/【每日早报】-2025-02-28 - 星期五.html","481c82e136df5f906b986a1c3ea8340b"],["/【每日早报】-2025-03-01 - 星期六.html","4ceb9df90fb7999b4959a019b6cb8ae6"],["/【每日早报】-2025-03-02 - 星期日.html","fe78b0325daf877e7e271364599076f0"],["/【每日早报】-2025-03-06 - 星期四.html","6222d7aab1bf408eb41efd85bfbb964f"],["/【每日早报】-2025-03-07 - 星期五.html","934dab3b979a5261d5c03fc037d4fee0"],["/【每日早报】-2025-03-08 - 星期六.html","928c2f1d4a9c912fcdd972d2fc4bc672"],["/【每日早报】-2025-03-10 - 星期一.html","a507ebe06abdbc8cea2a1334c546b9e9"],["/分享壁纸(一).html","546fe3b2c089d1391ae80d5125dd1051"],["/分享壁纸(三).html","b76ece8b2eec2418e5e39ef76e670a61"],["/分享壁纸(二).html","012fea7eec9454df9887dd3297e520bf"],["/又是一个不眠之夜.html","40f5fc2f75f0e25889af7116a2e77fb2"],["/咒术回战.html","705f936b952b0b402382f2c467f91eb8"],["/开端.html","a22f9fa9d24ed109dbaa92bec89f45a7"],["/计算机网络-数据链路(一)8-30.html","cf60ba4a754ba5994f516939e623c0e5"],["/计算机网络-数据链路(三).html","10f6952efd84bc5089be731b9d142fb5"],["/计算机网络-数据链路(二)8-31.html","c4b6b92678ec3e860f8b7c14f70e9d67"],["/计算机网络-数据链路(五).html","16bae398a78e3cec1588082791151324"],["/计算机网络-数据链路(六).html","25d78e8a1c57ca0a6632dea981bd07cd"],["/计算机网络-数据链路(四).html","30b889321eaf6fcfa6d62398727a38c4"],["/计算机网络-数据链路层(七)9-5.html","c9190512853b6032948b423470148815"],["/计算机网络-物理层(一)8-28.html","f2ec393c1148019a47f30e0e451f7385"],["/计算机网络-物理层(二)8-29.html","5e4b22f97a2cf438a89a05a630926882"],["/计算机网络-网络层(一)9-6.html","475ee3e9364eaf7ca7ef8cb7e4523e2b"],["/计算机网络体系分层思想(8-27).html","9e7899ba6387d8c0d0398eed34aa3f08"],["/计算机网络性能和体系结构（8.26）.html","2617099c91296b02fbe376e4cc450a0e"]];
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

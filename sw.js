/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","240c39d3edacb5791874258c2e40021d"],["/Gallery/index.html","23378143ace6cb1fa18491fee7bb8644"],["/about/index.html","248450ed2075cb8c9007b4428ef5ef6d"],["/archives/2022/08/index.html","e67d40483c145b16d87fd43a818e1eb6"],["/archives/2022/08/page/2/index.html","f7eed08c49a32bef528852c58551f8a4"],["/archives/2022/09/index.html","6c9fd99889f3f2feb4d20294b9aae125"],["/archives/2022/10/index.html","748ab0409f9dbc3fc90abb525a62dadc"],["/archives/2022/index.html","c98360e13624518e3da610012eb2742d"],["/archives/2022/page/2/index.html","34218731a332007878830c646c9b7817"],["/archives/2025/02/index.html","e687ff7c7252564a024f49cb8dedcbb1"],["/archives/2025/03/index.html","f0d72d7e4dda819d96ad5a1b39c63cf2"],["/archives/2025/03/page/2/index.html","470c1f958c77d07169913105db98b38d"],["/archives/2025/index.html","200c6f452cd46eee2966e2417714792d"],["/archives/2025/page/2/index.html","44fff6efaa33ff7bfe60003486e3a949"],["/archives/2025/page/3/index.html","5c13e053a1799ea36c5d0973c0b13443"],["/archives/index.html","4ae875fe668fd1610a8dbbeee1b7e53f"],["/archives/page/2/index.html","fb41c29b4d1efb4e784e9673d6c8e057"],["/archives/page/3/index.html","e51d2caf05023d43896d5f401f665621"],["/archives/page/4/index.html","931927b5a897597767f35135ff3e9df7"],["/archives/page/5/index.html","d338ed65419e30cacb36afa91ed96641"],["/categories/index.html","0c575852e2316b8b109a8ba0bfc22522"],["/categories/壁纸/index.html","3ec34cca1290a86eef6e896db78f7a0f"],["/categories/机网/index.html","edc49c41069336e2228533ddd6f3672e"],["/categories/机网/page/2/index.html","9d17e06a544ee69fc3a34fd1d0625928"],["/categories/每日早报/index.html","c92535ad89b8b9a37d8e1e78a47b16a0"],["/categories/每日早报/page/2/index.html","5433b6e0f6a6eb4fda475a7399f50822"],["/categories/每日早报/page/3/index.html","2512241a5301c824d38fd95e8f046c1c"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","0f917ac52224e2d36b5d93fb66570cb1"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepseek.html","d401d53754efc257f7ec3778e044c190"],["/description/index.html","13c6135d7d550489c78e77c806a14b4b"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","1fc8630a0ed08f302f1732279c184952"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","8f2bc371a53af4bf78bdef0afe9e9f8d"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","b54576e048c5b2901dc023b9388eaab5"],["/link/index.html","03ccea3be2a5fe7459f7d84b55080292"],["/music/index.html","2b8046a63b8fd15d29a7dac20dfc98c1"],["/page/2/index.html","7faf1083c518a386e687862dddd43271"],["/page/3/index.html","6213b63388f75ad8d82ae14c56d632be"],["/page/4/index.html","b2eded09958ffd99de91e21e3bacae51"],["/page/5/index.html","6785f1aa8e3a85aa5d80e9d6776b6460"],["/service-worker.js","6671b6852a338e9917a5cfd5cc61bc8f"],["/shuoshuo/index.html","9b96b05224592f4a02128e95f5354a78"],["/sw-register.js","820cc3e8219fdac9b2faae1d644904e4"],["/tags/index.html","f110859a418b40b4fb4b755cde590e1f"],["/tags/【每日早报】-2025-02-25 - 星期二.html","8042eca28ee6734f9ca872f6d7d43cd6"],["/tags/养眼/index.html","2d2f5e1f6d46e92124396110757a2943"],["/tags/日常/index.html","23d2631379860e630efb89d55d12e521"],["/tags/每日早报/index.html","d18bdcf50055643654b2282a301c430a"],["/tags/每日早报/page/2/index.html","6550f225ac7d1924a665bf0e7746d8b1"],["/tags/每日早报/page/3/index.html","451cccb4251b6ec60efd1583e1f9fde7"],["/tags/第一篇/index.html","f451b90b5a15e2984569534302579937"],["/tags/网络/index.html","bd30c5f2145edc0fe3fee1bf43d41fd4"],["/tags/网络/page/2/index.html","d3479a71f7fa56109b2356b09583fb3b"],["/template/index.html","8f76c41353308994bc39f17ee77a5e31"],["/temple.html","69d66d0e5213341e1084a0c5cb8a8519"],["/test-post.html","ba6b4567922385e6e78436ad236fa893"],["/webhook.html","c6e4034bc4e133998c6f7215c296bde6"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","b8bbd2e4c93ef536b633115675ce8c98"],["/【每日早报】-2025-02-21 - 星期五.html","a37bd6c41d8a72ad508d54183159784e"],["/【每日早报】-2025-02-22 - 星期六.html","6c4f7a3fbd66890cd27819a47a5f83e9"],["/【每日早报】-2025-02-24 - 星期一.html","fbf78b64cfbeddd62c6d21b1b07caab2"],["/【每日早报】-2025-02-25 - 星期二.html","fe766171992bb60fc41e728d127a6849"],["/【每日早报】-2025-02-26 - 星期三.html","7e56653ba108eab2c29da8ca745d26fb"],["/【每日早报】-2025-02-27 - 星期四.html","78a8fa3c77e1c2b1fd8321977270b458"],["/【每日早报】-2025-02-28 - 星期五.html","1c227492ee1b355a559e87ce83aeb2f7"],["/【每日早报】-2025-03-01 - 星期六.html","48c4a13e482f57b85e4279e35a3967d4"],["/【每日早报】-2025-03-02 - 星期日.html","11525250a1f00ab740904da4b2152965"],["/【每日早报】-2025-03-06 - 星期四.html","2ae3aa42c919e615c6f4e91a49dc121f"],["/【每日早报】-2025-03-07 - 星期五.html","4abe65e43a91b65d32f7adf15d596fde"],["/【每日早报】-2025-03-08 - 星期六.html","2f4c0e2443da99575d15cd9570a4a8fe"],["/【每日早报】-2025-03-10 - 星期一.html","31360d5c6dd297c8e060471e06823461"],["/【每日早报】-2025-03-11 - 星期二.html","57a511f8e19f5d9b30b301ab55d47f20"],["/【每日早报】-2025-03-12 - 星期三.html","cad554c1ec5a2f67d0fc901213d84c1d"],["/【每日早报】-2025-03-14 - 星期五.html","68e9de45ff6bb4c51d59bcf5f7a00b56"],["/【每日早报】-2025-03-16 - 星期日.html","63736ed503aac2f9b5b0aaa358cf8638"],["/【每日早报】-2025-03-20 - 星期四.html","befbaf696ec3c3dabfb35beb5c9055d5"],["/【每日早报】-2025-03-24 - 星期一.html","65dc51cef853170cebf154c880966cb5"],["/【每日早报】-2025-03-25 - 星期二.html","81f69dda868ad689fda5be5af921ec19"],["/分享壁纸(一).html","a323ce7da4370c9c4fe9f039387c77d1"],["/分享壁纸(三).html","1e2b571f82c14a124c0ff1f15ea19bb6"],["/分享壁纸(二).html","1d959cb2e815c344f739e4277853be53"],["/又是一个不眠之夜.html","75100b6cc3792e8df6aa32523228561d"],["/咒术回战.html","ae146f35f4934ff19812696b1f3e4278"],["/开端.html","610b300c8f81d06df7c37cb29c5d2596"],["/计算机网络-数据链路(一)8-30.html","1dd412887a73be2b20cf50c1c255404b"],["/计算机网络-数据链路(三).html","47a2eabc38325a85d77d948cf4aef3cb"],["/计算机网络-数据链路(二)8-31.html","577c8e3e17b4642d8b26ebdce1642f15"],["/计算机网络-数据链路(五).html","0998f66712abff268625b1108e4efbab"],["/计算机网络-数据链路(六).html","9b8688f0a4e344752f876a0a5a047cbf"],["/计算机网络-数据链路(四).html","3b76e176bdcca9f99f0cc41b44e58add"],["/计算机网络-数据链路层(七)9-5.html","1fe0dd4eec54547dd996ace4d5b6bdea"],["/计算机网络-物理层(一)8-28.html","1b125d18f4b08665dba9a7bf4f43768c"],["/计算机网络-物理层(二)8-29.html","644a344a4b04085ad09014b68da0cd9b"],["/计算机网络-网络层(一)9-6.html","f6a71eb50bf64984c714a7de8d93234a"],["/计算机网络体系分层思想(8-27).html","7fcb5dddb2ee86787ca8ecee8df43280"],["/计算机网络性能和体系结构（8.26）.html","c73c10e7367f64b2ff3ffddf3cab7b8c"]];
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

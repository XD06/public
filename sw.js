/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4bfcf720cb088f06413a7dddc225177f"],["/Gallery/index.html","ca3488a89caa4fcbfe0dfac75976ccbb"],["/about/index.html","6104390bed74f8493088f0eb905a1c5e"],["/archives/2022/08/index.html","0867329ec72a1d35c526ab4e4c3edba6"],["/archives/2022/08/page/2/index.html","03ba8f0a2f644defc6a5f4caf1acd8fc"],["/archives/2022/09/index.html","4c09d586b10cef280f77a29ea8b092cf"],["/archives/2022/10/index.html","f8646fe716f7071fcb89f29aec3c383e"],["/archives/2022/index.html","d67a5afe2c680135ba41477820bc30ad"],["/archives/2022/page/2/index.html","81b662581859451ec3a0b8c4870e1fe5"],["/archives/2025/02/index.html","8c46e8c0e3bcc4fc176a3f15842d58ab"],["/archives/2025/03/index.html","b1ca80bd976a74e173c6ea50d77cca39"],["/archives/2025/03/page/2/index.html","725d23343ae93ef39c0e79b37aaaa2bc"],["/archives/2025/index.html","ffec3c4f817b313e4b3c76b638e9aba1"],["/archives/2025/page/2/index.html","7b0d9f3396334fbb158da9ebe45fa1d4"],["/archives/2025/page/3/index.html","bc242ef40ed7595921f16ca07923aea5"],["/archives/index.html","f32d50c172361f5c7607501ab7a0acfa"],["/archives/page/2/index.html","cfed656b37c585d411e23670fb026482"],["/archives/page/3/index.html","cc040d593ac438a3180d5d91fb9820a9"],["/archives/page/4/index.html","9af26f9561e989f204de3a1fe71340c5"],["/archives/page/5/index.html","96d92f1d2685ae7bdf29778c071c5341"],["/categories/index.html","a27ed805c48c255305a57f92b3c3c382"],["/categories/壁纸/index.html","0747cbc93dc11e5f39b34c409bef431a"],["/categories/机网/index.html","c3d4ec5fa8dc99f7b130386389125dd1"],["/categories/机网/page/2/index.html","ee6f7dc9868ffe5d48d3317be26fb927"],["/categories/每日早报/index.html","7a87cf7b3821d029fb50d9f64215a518"],["/categories/每日早报/page/2/index.html","5081fc63da13604970613d2f0ad5c90e"],["/css/AI.css","7c3ebf4a42a9628ff4d34ef516272c04"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","76ede99c2a334b1c5dc12fc14136a365"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepseek.html","289c73397cb788f9c421990fa7de0e5a"],["/description/index.html","bc500a6758565e99483a267f7720d8eb"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","faf5cd3e4fd2cdbfae03289474240f7a"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","afddd408c93e6b07c2777f1b4129817c"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","6182c2b10498dd2997296304c077d0bf"],["/link/index.html","cca91e14d71b3e818bcdb7bc7752edbe"],["/music/index.html","b4572549259188be6f956b7bbba60e7c"],["/page/2/index.html","4d680325d7a97388c2f4bf52bde2ca36"],["/page/3/index.html","13099f1d02cb7a72011e0a651d23f0c3"],["/page/4/index.html","46e548096e3118a5e0401e6c3a230d9c"],["/page/5/index.html","83221aba64f5cb8fb5df22006dd07c9f"],["/shuoshuo/index.html","957b87f56151fea948e4c0bec4aebe4c"],["/sw-register.js","0f9ca3fccd45cdcb2103c8760394ec84"],["/tags/index.html","fac1de605f2c3588cb5a4e003b446c4b"],["/tags/【每日早报】-2025-02-25 - 星期二.html","3e60c46d30627a7998130c587186731d"],["/tags/养眼/index.html","774c916ffbd63af319a74f7893a37232"],["/tags/日常/index.html","0137fc48f498c1b905434d36bb341eec"],["/tags/每日早报/index.html","b066a1a8b3ca047e84d4880be6e928f9"],["/tags/每日早报/page/2/index.html","bfbf817b5c9aafef3a66ae249472488e"],["/tags/第一篇/index.html","5397f0ac56497309e1eb37762bf3bc25"],["/tags/网络/index.html","bf35e4189ecfb7e26be066b55659cad6"],["/tags/网络/page/2/index.html","544704a020c70445337283ef5024e3c9"],["/template/index.html","ee9b87869c7ed0e38d48688aed4bc73d"],["/temple.html","c6432fac7a5635b85d90d2cca8eb86b7"],["/test-post.html","9df3552a5b52bbca115fc072a2383c00"],["/webhook.html","08afc1a549c4f9bc4afdc4cd816c38cb"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/【每日早报】-2025-02-19 - 星期三.html","88ad625d1ef0a58177e258355dde0471"],["/【每日早报】-2025-02-21 - 星期五.html","9ff06b85c6ef9c4c8e3c640c0341c2a5"],["/【每日早报】-2025-02-22 - 星期六.html","b8befbf8b55fca54b6c3fc87af03f1c2"],["/【每日早报】-2025-02-24 - 星期一.html","739fed144ce0d6270dd077a31adb35b0"],["/【每日早报】-2025-02-25 - 星期二.html","a8e38d46f4f5d98ca9492aac5e6a00e2"],["/【每日早报】-2025-02-26 - 星期三.html","e44fb0760bd176778ef7f83ca85fe5c5"],["/【每日早报】-2025-02-27 - 星期四.html","d0bbfc89227f82aab3cb6f71fde418a1"],["/【每日早报】-2025-02-28 - 星期五.html","7596e64478cb83043eff94096954975d"],["/【每日早报】-2025-03-01 - 星期六.html","4ff8e0a6b73a79befd0878edc147899e"],["/【每日早报】-2025-03-02 - 星期日.html","2a8843a8321afeb232bc709a9855d524"],["/【每日早报】-2025-03-06 - 星期四.html","1e24415e02cbeb5def458c957db7a36f"],["/【每日早报】-2025-03-07 - 星期五.html","ff412472172d593a75325f7fda3a0155"],["/【每日早报】-2025-03-08 - 星期六.html","077fbc248abac2de48c5f94c80de73f4"],["/【每日早报】-2025-03-10 - 星期一.html","2fd3df050670cc55631cc415d2f2aa63"],["/【每日早报】-2025-03-11 - 星期二.html","f640efc35d47800c00b98465b84bf593"],["/【每日早报】-2025-03-12 - 星期三.html","9eaf1fb98cd276ee219762fcf93b0fdc"],["/【每日早报】-2025-03-14 - 星期五.html","53588ce15f6fec73b2939a45b09edf75"],["/【每日早报】-2025-03-16 - 星期日.html","ce846cf38cdc8a062e8dd58546388fdd"],["/【每日早报】-2025-03-20 - 星期四.html","3ca26554a8816edd06ddcdabd3518066"],["/分享壁纸(一).html","d0739c7017b649e79172001541a20aca"],["/分享壁纸(三).html","f52c576f874c26d2d729eecee832b566"],["/分享壁纸(二).html","86f1f7cf6974810436ee679404966520"],["/又是一个不眠之夜.html","542ced071f069dd803c759b79e6850b6"],["/咒术回战.html","71a1e64e44f04128ff1149eaab2155e8"],["/开端.html","861ee833f728a6ef87933cc6edd7da18"],["/计算机网络-数据链路(一)8-30.html","ad5c2c09e8c2890f2d3d45e43d59c945"],["/计算机网络-数据链路(三).html","e3243fac8621dd209d9627a6b2120e02"],["/计算机网络-数据链路(二)8-31.html","80a5325b65868d4fa47041197a950f43"],["/计算机网络-数据链路(五).html","4cf66fb9c05ce1a46a54c60db05e3cdb"],["/计算机网络-数据链路(六).html","c493aefca32a6efe5c434488b4e67659"],["/计算机网络-数据链路(四).html","d68bac06b3963472503516a4474920b6"],["/计算机网络-数据链路层(七)9-5.html","f044c85de212f59578c9230834932a88"],["/计算机网络-物理层(一)8-28.html","074c1004900feb6e042b77a6cd53d48d"],["/计算机网络-物理层(二)8-29.html","281b3f68b30f3c1ca3f4de618bad35f5"],["/计算机网络-网络层(一)9-6.html","d689afefd3eff44fcb8d57e611331fe1"],["/计算机网络体系分层思想(8-27).html","4fdbfb81dd0761174fb9dc9242176b1f"],["/计算机网络性能和体系结构（8.26）.html","bb51ac665ac06a244f6e66fe1b39af34"]];
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

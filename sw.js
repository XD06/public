/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10ecef2b09983a21e1e4c9935768cc55"],["/Gallery/index.html","2b92a23678cf46189d460bca7e59975b"],["/about/index.html","079a507acc07871ce535f1a54a56ba62"],["/archives/2022/08/index.html","d355294cfa17aad9e213397468a7841d"],["/archives/2022/08/page/2/index.html","4bfe6b22e37b381b7553beaed06d43be"],["/archives/2022/09/index.html","dd2b4f7760a55b7fd59f1c3a617f0c3b"],["/archives/2022/10/index.html","1b11cf74017b01776d13f8ebfaccff4d"],["/archives/2022/index.html","9ca5151b5d49ba11ae724a2913697974"],["/archives/2022/page/2/index.html","5daeccb70e96e3f96616230c40c98e54"],["/archives/2025/02/index.html","4b6da318637bccf9296407c225ede310"],["/archives/2025/03/index.html","21d0c58ad85dfd7a09bd7c5ebf3dd2e3"],["/archives/2025/03/page/2/index.html","c6ccc62b7ab632f7a3e8cce865f28f65"],["/archives/2025/index.html","9a680ffbdffa1547b38e4d40b9dd2a57"],["/archives/2025/page/2/index.html","d371088045ed8751cd563546afd9e33f"],["/archives/2025/page/3/index.html","eb1dae7bfcdae23cfb8164e0eb7df2ab"],["/archives/index.html","a62ed9737361032adb65d188bbbf314e"],["/archives/page/2/index.html","e5c1aa2c4ced922fdc1b7441bd6a4afb"],["/archives/page/3/index.html","4c1200717966a3e60fb36e00894dbe94"],["/archives/page/4/index.html","19fcc831fb88c16d0073516c74dccc97"],["/categories/index.html","7b0ffec59b481304a78d0e6b2c93282a"],["/categories/壁纸/index.html","f80278067c87d285ec00a00e3a489999"],["/categories/机网/index.html","0951aeedd435914ccfeb527cd32f5459"],["/categories/机网/page/2/index.html","743644235ea3380ec46fa2bd15d2467d"],["/categories/每日早报/index.html","a0f9a18420ed3917166e0355ec39ebda"],["/categories/每日早报/page/2/index.html","c641233d8b2f6da7b6a961d20489b747"],["/css/AI.css","7c3ebf4a42a9628ff4d34ef516272c04"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","d13bf1556beb8e8518c8f9880cb3a0aa"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepseek.html","50f500aa1df5db82fe4b72377598bf25"],["/description/index.html","0d81cbb78d22fa96740d67683c8631d1"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","3afc01245a5a18ecec048b4fb71aa09c"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","da73ad748220414d669d55b314bcdfc7"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","01fba0fb42e13a32f56b5258538f9328"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","97a8adf4f55caa5f5571b9d1a7cc725d"],["/link/index.html","448fe5105ae213a7bf15627b3d85bbe2"],["/music/index.html","e027f39ceee55a2a091a916f68626842"],["/page/2/index.html","93d7d9d5b36889052a93249d8b3ebc6e"],["/page/3/index.html","920733ed39b5733e44b55e13d057fd47"],["/page/4/index.html","7e8e6e68ea51a37292945c56607b136e"],["/shuoshuo/index.html","be4e192612f3e807721fd3e951a30234"],["/sw-register.js","321f7b48a6eb8ac0e8f94f269f9a330a"],["/tags/index.html","314142d6ee804179a0c7c2dbf1d55b0b"],["/tags/【每日早报】-2025-02-25 - 星期二.html","0593851eb9644a9a3aae452b016e95f7"],["/tags/养眼/index.html","3d703aa660a41a2a80af347c2c52ec33"],["/tags/日常/index.html","77c92ad8b7ff960bbf719aa0c609eef8"],["/tags/每日早报/index.html","ab2bee78cb6a349e71f5cb5838fb7b7f"],["/tags/每日早报/page/2/index.html","e15ca7acbb7bb9d1364e5d3215a9664b"],["/tags/第一篇/index.html","e48ef1374f6952c57c3937ec569ad383"],["/tags/网络/index.html","94f3d235bbbe2dd914ff385df1c63343"],["/tags/网络/page/2/index.html","4705a0f5f3dafdf8defced37a2565a4e"],["/template/index.html","1ce429b90257a51e3e0396d5a40b97dd"],["/temple.html","24c840da0345706b0d91bb9db8598601"],["/test-post.html","2658204001cb0ed4537cef58697ec99f"],["/webhook.html","e964f4432d38b3d8c09a7af0c1f877aa"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/【每日早报】-2025-02-19 - 星期三.html","9dfc6e819f5ebcd4b885669f0f8f31de"],["/【每日早报】-2025-02-21 - 星期五.html","51e2c4d657c489eed0ba7e16f0e899d5"],["/【每日早报】-2025-02-22 - 星期六.html","b078ec84a07ab483b04f3f3c9d2b795c"],["/【每日早报】-2025-02-24 - 星期一.html","0f1dc5e30f88f06980d20044d91893c1"],["/【每日早报】-2025-02-25 - 星期二.html","4f3d6778864e048cdcf37dab28c329d0"],["/【每日早报】-2025-02-26 - 星期三.html","f6ab782c634fd09042fa4b311f129e2a"],["/【每日早报】-2025-02-27 - 星期四.html","22c14c0f36bbb8f402a3f9d409862dc4"],["/【每日早报】-2025-02-28 - 星期五.html","19a4305cae37a4db5eede1939ae89567"],["/【每日早报】-2025-03-01 - 星期六.html","38034201d7753fbc50003202a73a8382"],["/【每日早报】-2025-03-02 - 星期日.html","a19899d8a696b6dc9e7e6903c9ca5ceb"],["/【每日早报】-2025-03-06 - 星期四.html","92731e5ea909322ad3dd9c71baa19c5a"],["/【每日早报】-2025-03-07 - 星期五.html","abebec0b7a474c82ef98a23e85556200"],["/【每日早报】-2025-03-08 - 星期六.html","3be167ad1c3e6cdb9b400d40d79760f8"],["/【每日早报】-2025-03-10 - 星期一.html","df0d16abb984714b2c45d013f3b87d02"],["/【每日早报】-2025-03-11 - 星期二.html","e491339a7ae5a6eb09ce346e67f24044"],["/【每日早报】-2025-03-12 - 星期三.html","1a22284295e5122f0957d30843312bf8"],["/【每日早报】-2025-03-14 - 星期五.html","4d327d22dfd638dae91700bbd7e808ed"],["/分享壁纸(一).html","67bb80e13d355d8045a64089aa02800e"],["/分享壁纸(三).html","b2a4371240937c09b27cd21a18f5bdaf"],["/分享壁纸(二).html","9511c89e60f5c9fc83cf71d016dead68"],["/又是一个不眠之夜.html","8a5bd3fbe1645f54561329820b7ca953"],["/咒术回战.html","a891564ebdcd3415254ac9dd1ff029e5"],["/开端.html","425105df8dd677d241b8c935c4445689"],["/计算机网络-数据链路(一)8-30.html","9ac1f440e46ce283f0db2cd1fdd97e30"],["/计算机网络-数据链路(三).html","eeaad8708de23ecf4cc3987699e46831"],["/计算机网络-数据链路(二)8-31.html","1c573960c9b75b76987e360493d279a9"],["/计算机网络-数据链路(五).html","0f37691cf5821fa6b1c91dadee7c4b74"],["/计算机网络-数据链路(六).html","8e4aecb3eabaf0cb952f429f235bdd1c"],["/计算机网络-数据链路(四).html","2a93963fa9ef2e8ebb324dc700247754"],["/计算机网络-数据链路层(七)9-5.html","73c9b4712edc1ea26211ca56094b2527"],["/计算机网络-物理层(一)8-28.html","b3e884ea92191da4da43b40d20556024"],["/计算机网络-物理层(二)8-29.html","7d822277fa7a725ccd4324b4456eb876"],["/计算机网络-网络层(一)9-6.html","c2514575a1ba700ef0b65ee6d56ac92a"],["/计算机网络体系分层思想(8-27).html","2bcce48f9ed28d1f6ef8fcfcc0339092"],["/计算机网络性能和体系结构（8.26）.html","ff9f6a6677300d036e5b0785b2f40d69"]];
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

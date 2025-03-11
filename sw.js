/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fa99527e22ca13d95b386e687907552f"],["/Gallery/index.html","4deca4ea5cdd3327de0fe34c97c902e1"],["/about/index.html","5a76a18ac84f309967c4f9213ac5bc86"],["/archives/2022/08/index.html","e73187dc3d500359bfb8eb28bed1dde6"],["/archives/2022/08/page/2/index.html","57fd3e6139344ddcccb094c18853eba3"],["/archives/2022/09/index.html","09cfa7580c96a0316f2dc516afe521ac"],["/archives/2022/10/index.html","7d900cfd980670dca878f47f17b96b5e"],["/archives/2022/index.html","1035dc6af41c552874da42f0d7d4468c"],["/archives/2022/page/2/index.html","907d681c2d80f0533368b4292b7c35e8"],["/archives/2025/02/index.html","dd88c9fc186e465cbae8a0eb4303d5ea"],["/archives/2025/03/index.html","bf549468a133b838c0272f1f7c79f9a2"],["/archives/2025/index.html","08100a578941a68f62ce470d20c5cde2"],["/archives/2025/page/2/index.html","de52b63fe2f388f8121476bc80b2b0f6"],["/archives/index.html","1f98fd6f7d6d26e1c464279af8dde6f3"],["/archives/page/2/index.html","a7c10978dc0937393b1e760e5af6e5a9"],["/archives/page/3/index.html","b94cf8243670d098bd8576cefa6399bd"],["/archives/page/4/index.html","89cbf2553a7cb3235c0a26ce8547cb07"],["/categories/index.html","47a5e0f6bc8ca67402f8aaf377560916"],["/categories/壁纸/index.html","437d5a87c1592865a52579c143ba3f3b"],["/categories/机网/index.html","f4cbcd142f6295ce450fc45249d5e1e8"],["/categories/机网/page/2/index.html","0c62dbcf7be52f05b4ff9460bf7d572a"],["/categories/每日早报/index.html","760b88d2ec477eaab26a352b10868013"],["/categories/每日早报/page/2/index.html","4e96fdf914117b0787e9fa724c4533e8"],["/css/AI.css","7c3ebf4a42a9628ff4d34ef516272c04"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","d13bf1556beb8e8518c8f9880cb3a0aa"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepseek.html","92de367c08dd35b374d16f05938b15c4"],["/description/index.html","b984ebc8afb2cf1fbc463ad67d661752"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","e69cb2bb39f0e6b001b2fe91a9f3a79b"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","fcc1fc61b8b3704152174086878642b4"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","01fba0fb42e13a32f56b5258538f9328"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","218ba6f3964b3094bac9e687d8eb30b5"],["/link/index.html","8aa6f5c791fba81a87f5c1a4d2de2c3a"],["/music/index.html","537798b82545e26a16c6a97750b49b49"],["/page/2/index.html","44f4d9867e701117546cb9fbc00f01e2"],["/page/3/index.html","f8049a7d9975fa9e2ca017d102c9c936"],["/page/4/index.html","804471dc223d4364b77f1d1e38433d66"],["/shuoshuo/index.html","949396118a838821813cfe2b596bc988"],["/sw-register.js","c00b78cf4d38c3a0d66f4adcf5000177"],["/tags/index.html","6ea71d7a10811bb84c2bf771eed5563b"],["/tags/【每日早报】-2025-02-25 - 星期二.html","0973ae7a810dffc7fa0c2083b40ec2aa"],["/tags/养眼/index.html","1dc08e4c006a2c52a60d71ceabc23173"],["/tags/日常/index.html","f71ce7175d0d14a784464527a11f832e"],["/tags/每日早报/index.html","ed4ebbf2fcc3e60a51f51726f3b00aab"],["/tags/每日早报/page/2/index.html","7c92ae6acd5144da9df5a2f256368cf1"],["/tags/第一篇/index.html","34925de2dded6ea14729eb6e3eddff3b"],["/tags/网络/index.html","79760814658dceb3ffba8b12fb0e63b0"],["/tags/网络/page/2/index.html","512ce2017bac3acc91a7be753fb320c6"],["/template/index.html","2e7f32145584e630aaf208333ffd52f1"],["/temple.html","d6205f647d444268a9e625f0dddbda5f"],["/test-post.html","a8f2fd9694333942c75b0e8473b952c3"],["/webhook.html","141f4c993c11e4cc42f3e5eccd072637"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/【每日早报】-2025-02-19 - 星期三.html","faca55cea13d5985cfd8d6ec109b9363"],["/【每日早报】-2025-02-21 - 星期五.html","cb120585a28a2068a554a7939f07e2ba"],["/【每日早报】-2025-02-22 - 星期六.html","57dd0a30141eebdfe818286f22c3e440"],["/【每日早报】-2025-02-24 - 星期一.html","e848fd511ba6caf37f5d7947b83bd5ef"],["/【每日早报】-2025-02-25 - 星期二.html","0aac14bfd72ff0ea0c64481325167ced"],["/【每日早报】-2025-02-26 - 星期三.html","8822cf2e0abb0cc17d06a27698f22d94"],["/【每日早报】-2025-02-27 - 星期四.html","b857993c6f5e6bcd43334c14709cff4b"],["/【每日早报】-2025-02-28 - 星期五.html","06ddc814591e2dc2262636391b4692f6"],["/【每日早报】-2025-03-01 - 星期六.html","b74b73ccfe8e5d37ee95c2cf5e7234ce"],["/【每日早报】-2025-03-02 - 星期日.html","68bd13263a9301a8655630d9410637b3"],["/【每日早报】-2025-03-06 - 星期四.html","ac973444713e9c48042e19db804ef98f"],["/【每日早报】-2025-03-07 - 星期五.html","6e0fccca660aae332a234b9a7c489278"],["/【每日早报】-2025-03-08 - 星期六.html","39af4f0f60f27578445a925f1c958128"],["/【每日早报】-2025-03-10 - 星期一.html","49d1fb5e44b9146d73ab094396834aee"],["/【每日早报】-2025-03-11 - 星期二.html","b9bae0513d940d1b710b38ae67c0cbdf"],["/分享壁纸(一).html","2eb532a7d8e95cb9f9bf1bfbbca4c5c2"],["/分享壁纸(三).html","8753b54fb3507bc679de342d4b07bc50"],["/分享壁纸(二).html","7ae3603802b481716c34a714b6cf4415"],["/又是一个不眠之夜.html","db9f88244e3af9023fbaf5703b55cb53"],["/咒术回战.html","7050b9db42b34efdb3de79a02bb12cf0"],["/开端.html","fe9e58e580b8aaef82ede097f6ebbf70"],["/计算机网络-数据链路(一)8-30.html","cf831c3ff90219f71722334cdf88d745"],["/计算机网络-数据链路(三).html","036f4b7e0c73344b59cb1c4387d63916"],["/计算机网络-数据链路(二)8-31.html","ac01630ec19388992152dbc5b22b33e1"],["/计算机网络-数据链路(五).html","30787568837c0f59caa8275b2faec974"],["/计算机网络-数据链路(六).html","dbfaece86332f092ca10b43bfe71e5ad"],["/计算机网络-数据链路(四).html","6315b2fd473befd61dc69d598a5d7cb3"],["/计算机网络-数据链路层(七)9-5.html","630db5ec3360dd391b175fdc3780335b"],["/计算机网络-物理层(一)8-28.html","460f722277b3eecda5e81ac82a46d13b"],["/计算机网络-物理层(二)8-29.html","86402dd4bc25a030785a9bf8c6bbe7fb"],["/计算机网络-网络层(一)9-6.html","e011bc0bf14a8e83702a03b7faa1d169"],["/计算机网络体系分层思想(8-27).html","d8480d9e532cd92728eaa00d684d3588"],["/计算机网络性能和体系结构（8.26）.html","a67caa9dc04b03bb0817879e7d11b427"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3880759ec14764e763e37bd44f11454e"],["/Gallery/index.html","5d68cfc856cdf82ed002e037778ff588"],["/about/index.html","65822d4475c402478b4717d7f0c58f1e"],["/archives/2022/08/index.html","537c4a11660cd0e889a2016356534759"],["/archives/2022/08/page/2/index.html","0cdecc89762b55acfb92e457ef50c9e1"],["/archives/2022/09/index.html","f290b37ca00f0cf9a6717e32376e4b28"],["/archives/2022/10/index.html","b12b46453bcb58d0d128de66dd86d936"],["/archives/2022/index.html","13887d176b8bf4c312d0c9f24589176b"],["/archives/2022/page/2/index.html","2a47219c3c0dc8ba4ba0fb956f902d7f"],["/archives/2025/02/index.html","4bdf619983a1b499ee9062efea43a397"],["/archives/2025/03/index.html","f078947d7493ea11e7a32d37ddaa7cd6"],["/archives/2025/index.html","5859711ff29e7ccf71246e3a8a901204"],["/archives/2025/page/2/index.html","86f4196793480ec4291da0d86d0a2114"],["/archives/index.html","7f2a15b16c3ebf3e47f7dea883f84ed2"],["/archives/page/2/index.html","a02b887547ee258ae63d943cb8e6a77f"],["/archives/page/3/index.html","94240a4475c86f64fa19fd4d0f9a3832"],["/archives/page/4/index.html","11c7b0e2a32828c9f9c28f83158a6010"],["/categories/index.html","dfdd0aeac6fb48c190a9d2e968aad0e2"],["/categories/壁纸/index.html","ee2d20e929e1895df9db899ce8d9bedf"],["/categories/机网/index.html","295cb0c6a88fa21e0ab20343691f4a0a"],["/categories/机网/page/2/index.html","c9a8469862af7629df6f529e1081a07c"],["/categories/每日早报/index.html","77dc3cf41e54fd44099117818833b2fe"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","428fd7f7c8d276eb88b760be488d2659"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","cbc7d5bf60d3ddb3d7ac73167d1fa5c0"],["/fonts/FangSong.ttf","6c2c6cb9a9d43dcd8d64544ee821a9c0"],["/fonts/Hei.ttf","1247ceac203ab8dd2f94168f60bb6fb8"],["/fonts/kaiti.ttf","c1f3ac5d0e48120a8906a93fdc82e12f"],["/hello-world.html","fd74fececdad77c1005ca65607ff0093"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","ac1829374f348be07f3eed345840fc25"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/keywords/index.html","6b909585d9662a1673325a0bd36825c1"],["/link/index.html","066b7e40aa3e682e492b685f90328a3b"],["/music/index.html","71a6c9bc3f0b5ddfeba4c1d8812ccb53"],["/page/2/index.html","a1f02b561ba6ac6bb2dae37ff485e102"],["/page/3/index.html","6aeb31d660735493b367650ae46fe49d"],["/page/4/index.html","bdce45d725278ce2a7ad99121e9112f9"],["/service-worker.js","e46e86731418cbabdf063e153d82dfd4"],["/shuoshuo/index.html","3d190c51da50bc7cbc0b6bf469e12df8"],["/sw-register.js","7e8a71cac264ccd3b5a7233aac6937a0"],["/tags/index.html","b50a2a8a41777ed57049259c27ea5701"],["/tags/【每日早报】-2025-02-25 - 星期二.html","f045866025fb1c0c7a13133e1c9cea4d"],["/tags/养眼/index.html","6c854b045ad36acb86f6ce205146117f"],["/tags/日常/index.html","d369812d4e269039d7d14177448f1ad7"],["/tags/每日早报/index.html","9b3e1e98cc60f6a383406bfad5c66dd6"],["/tags/第一篇/index.html","86b194454d71323b0a39b3fe951e0a70"],["/tags/网络/index.html","dd0ef65faf924d114fd7e0b35fd26204"],["/tags/网络/page/2/index.html","d133bdc5ed026916491e35875be79eb1"],["/template/index.html","31ab06e02605fe73d0ca0bb3a03865ca"],["/test-post.html","153c75a6ab05fecd036fb671ab372e79"],["/test.html","27d463761f10a6997a38ab38a29f25f1"],["/webhook.html","bb59bd4a7912b5c738d1d8ff726460b0"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","a2ad7d26b5acd4db2ed9aa5f6fd98453"],["/【每日早报】-2025-02-21 - 星期五.html","91d3c2c134628450616d4f2aa90a0561"],["/【每日早报】-2025-02-22 - 星期六.html","a964512658b3992322eb4041da575a0b"],["/【每日早报】-2025-02-24 - 星期一.html","5285485b6a83e43952c5067118dbdee3"],["/【每日早报】-2025-02-25 - 星期二.html","5141099a9c8a55f4ac8d5a619ff9f409"],["/【每日早报】-2025-02-26 - 星期三.html","fbec9a4ead3bbe32dd2bf2b14e4d83e5"],["/【每日早报】-2025-02-27 - 星期四.html","e0cce8427adb9fff6ed34b85805cef80"],["/【每日早报】-2025-02-28 - 星期五.html","8e2910d1bd18cb6bdceb9b7409e5312d"],["/【每日早报】-2025-03-01 - 星期六.html","2923823757cc64adac5639d0a969fde7"],["/【每日早报】-2025-03-02 - 星期日.html","e7b1ce7a2790fdaa22ab9257ae476ce8"],["/分享壁纸(一).html","40492335ce7b45032af84eb7e69662cb"],["/分享壁纸(三).html","63bb0b530f1e5a2e78555c889a864cff"],["/分享壁纸(二).html","4f0affa3c115360722f5c5cfee05d48a"],["/又是一个不眠之夜.html","13e84b2c0bd5e94677fd6abac8b8cba8"],["/咒术回战.html","c281051c51678ce0d09afd232570597e"],["/开端.html","0acfaceec53c65afcfc7c29a918b2d06"],["/白桃露露.html","454a43c6848a4d06633303635da4bf68"],["/示例.html","f8c1788ddc0e0f8fd148f5048ec5f450"],["/计算机网络-数据链路(一)8-30.html","8919baeddcdba6fe02a960d3ffd81976"],["/计算机网络-数据链路(三).html","73bc20312e72d21ed78a2d764363f564"],["/计算机网络-数据链路(二)8-31.html","2dd55e636f983a7f580b2019dff1a18a"],["/计算机网络-数据链路(五).html","b64f337ac52e51c97e9350cf64325c0f"],["/计算机网络-数据链路(六).html","f1b1de8d722796afbd336c7fcc749e5d"],["/计算机网络-数据链路(四).html","9595e0f44bcbf911ec5573e158e1216f"],["/计算机网络-数据链路层(七)9-5.html","1fbfafb1d0046acb0e2d9a0776ad0446"],["/计算机网络-物理层(一)8-28.html","0e74058faa423c35a1020d2ac30fbf8d"],["/计算机网络-物理层(二)8-29.html","86d7f315f9d98bfb4b7e126e649bc6b4"],["/计算机网络-网络层(一)9-6.html","b0908f9f6f3907da56c887b7e1bf116a"],["/计算机网络体系分层思想(8-27).html","78f0fa5ccc62c416a5580a2b582aa72f"],["/计算机网络性能和体系结构（8.26）.html","1f87c198435cc405ae38bd27d3ef4ea3"]];
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

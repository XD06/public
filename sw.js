/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0ffb737603388a0ff0ffea13b7504887"],["/Gallery/index.html","2d49286b90bd14d8551278dc90bc6b63"],["/about/index.html","a1b5a3059c8115666cba1c060d675762"],["/archives/2022/08/index.html","1e322b7c6fcf8d19a34b3c4061254919"],["/archives/2022/08/page/2/index.html","71abcfc8e14d850ea0035b773d900460"],["/archives/2022/09/index.html","04c77b7c20d20040c4f31f8c7feb84ea"],["/archives/2022/10/index.html","63f86f418d6e3755a401f2c682bb9c2a"],["/archives/2022/index.html","3f8a30cd77d141c67442284afe10f614"],["/archives/2022/page/2/index.html","231a589ed1fa0405c8b9b6277c2816f3"],["/archives/2025/02/index.html","d214d121ffbafd55bf510b06dc8603c9"],["/archives/2025/03/index.html","687285fa5b687a9c9ee5f32781132c5a"],["/archives/2025/03/page/2/index.html","6007678470a837a1457e31557a69c20a"],["/archives/2025/index.html","b670f10169a042e7d1cf7ab69bb9169f"],["/archives/2025/page/2/index.html","c75b76d23f99554509fecb82f53535fc"],["/archives/2025/page/3/index.html","09fe943fe7940369659b5751b322133b"],["/archives/index.html","93064ee8dff84b589e86ad34845af9e1"],["/archives/page/2/index.html","d2b1bf8cc8cf96cc4404e4209bb757c7"],["/archives/page/3/index.html","75e41e60f82ab3d813606c996a5d6bf5"],["/archives/page/4/index.html","44cb44fad23b35c1023ec98ef605bd74"],["/archives/page/5/index.html","f626783fdb5ff8ca3b99c26a250ead20"],["/categories/index.html","c2b2f2d35feb0cbd283c6015f0a6c953"],["/categories/壁纸/index.html","24e7f7655c98d679913bfe85f5de947d"],["/categories/机网/index.html","3b0dcf406286cebdaa7e3b2eb1d49c11"],["/categories/机网/page/2/index.html","e6f9a136ec3eba1a014a6c61d3754c12"],["/categories/每日早报/index.html","e4de821c9b624f3b7ec65afbee551e31"],["/categories/每日早报/page/2/index.html","999b613d09bffa0d3b28edae191e304a"],["/categories/每日早报/page/3/index.html","829f8ff790753dd1192f2afcb1a4505d"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","0f917ac52224e2d36b5d93fb66570cb1"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepseek.html","435baa2c60268b4e2735eda86265440b"],["/description/index.html","ffa4bc638c42704f43f45fa5f3f5cffd"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","feb45308aad933f23014423dee94ac54"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","94d83b12f025bd5f3fd4df8bda20ccb7"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","4421b166f4f42f004bfe055f23c4deb9"],["/link/index.html","1f7d5e51b979bc9f78c0858062b17aa6"],["/music/index.html","8afb2c4c845256a1f78dbb94230f8d6b"],["/page/2/index.html","7d61b6f1ead6a5db2d23f17b6cd1e558"],["/page/3/index.html","495397c3df10b9cc50e630d537eef22f"],["/page/4/index.html","0a29584f8e9599511d510754f9048868"],["/page/5/index.html","2dfa6286c4647af5bebbfbfce062641d"],["/service-worker.js","d9a36f76fbc130f476f1357747c093d0"],["/shuoshuo/index.html","3cd9b5df45cc41d27ac7649521d5e71d"],["/sw-register.js","56f187007373389751293bf2acbeceaa"],["/tags/index.html","8b000c10f17ca96226b2dfd0bcfabb72"],["/tags/【每日早报】-2025-02-25 - 星期二.html","8351643ea7f258a1d384a4b3cb71ae81"],["/tags/养眼/index.html","0c498d344a1c2031babf7e5c90149357"],["/tags/日常/index.html","b6d934e8c59ffea82bdfcc355318a90f"],["/tags/每日早报/index.html","e650e511a0a097f895bf92b12f6fefb3"],["/tags/每日早报/page/2/index.html","d1e1e95e6b87ebd22fa40288c4597e8a"],["/tags/每日早报/page/3/index.html","853c278f13db0e13daa27020fb90ebd6"],["/tags/第一篇/index.html","4c755c1ef3d6087279c278a01ccec591"],["/tags/网络/index.html","0ed017fa8314a300a16e4dede151bfe2"],["/tags/网络/page/2/index.html","b201ef1d877189e813d9dcce20b3da98"],["/template/index.html","5229b8aa95c97fc88f1ab663e19d4974"],["/temple.html","883ac52d528008b861abb510ebc37dc3"],["/test-post.html","0f9e941e8e85e8594bf47f02a880209c"],["/webhook.html","cec5ecaf880dd6748c867d0b65253a2f"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","ca7eae6d092f53f7aa6a0697ed39f9c3"],["/【每日早报】-2025-02-21 - 星期五.html","69ca5d9d00cf2846e751cf5b409402c8"],["/【每日早报】-2025-02-22 - 星期六.html","ebb4a5d78602f063c208c9a80fff9c67"],["/【每日早报】-2025-02-24 - 星期一.html","d5fb1da625fac21c47ca2bb747638449"],["/【每日早报】-2025-02-25 - 星期二.html","e83423f234c8e253768f08996733af78"],["/【每日早报】-2025-02-26 - 星期三.html","7a2674e0208eb7068e20b86ce409d056"],["/【每日早报】-2025-02-27 - 星期四.html","8090c38114ff21dfd42ea96c5b74bf32"],["/【每日早报】-2025-02-28 - 星期五.html","d2866a5b2486c561ca58630235e9550f"],["/【每日早报】-2025-03-01 - 星期六.html","da5c55dfa06af8fa1565b4c93c5ca7ce"],["/【每日早报】-2025-03-02 - 星期日.html","1b6026da076550a240e72c5eb89dea44"],["/【每日早报】-2025-03-06 - 星期四.html","94ce9dd45b1424fce78e94d4a85e86f9"],["/【每日早报】-2025-03-07 - 星期五.html","76ab223d8623c70566979dad8b3d51f5"],["/【每日早报】-2025-03-08 - 星期六.html","82d9daff1075d43d5f57d55bc70d95d0"],["/【每日早报】-2025-03-10 - 星期一.html","6c400f8ed8497d53fb731aeed3ac8f6b"],["/【每日早报】-2025-03-11 - 星期二.html","2159ff18d89f85676ad70f9ee7b1d073"],["/【每日早报】-2025-03-12 - 星期三.html","62eee737aa745275f3f07e1996ff23b0"],["/【每日早报】-2025-03-14 - 星期五.html","e3e330667b44f32f54949d6297886291"],["/【每日早报】-2025-03-16 - 星期日.html","a7a225d671ada81a3e92f361116e7ab9"],["/【每日早报】-2025-03-20 - 星期四.html","af89c138c1e70a4b7e1f57f527114ecb"],["/【每日早报】-2025-03-24 - 星期一.html","c25b7cc169677e8ba5dc3fc73eb7c220"],["/【每日早报】-2025-03-25 - 星期二.html","7370d17697bbf3a75ad03839f66c68c9"],["/分享壁纸(一).html","b019511875b1eada87c5f69d45cb3b1d"],["/分享壁纸(三).html","f010c3de22e78f48b08580f0e6c1b465"],["/分享壁纸(二).html","4b966fcd8b9584727f1ab40402f08950"],["/又是一个不眠之夜.html","b287b7aecac823b7eafced09665ca4b1"],["/咒术回战.html","1862af1abcc5598c7f74d6152017e869"],["/开端.html","5dde5c9599ffdaede7ac2cd45e17b479"],["/计算机网络-数据链路(一)8-30.html","c40e3716bac6d4c0b8b5b65bc795f104"],["/计算机网络-数据链路(三).html","12ca1c60e94c14e4786e577d541037bd"],["/计算机网络-数据链路(二)8-31.html","aaefc9d2d9d61cbc0886f5ef5ccf758a"],["/计算机网络-数据链路(五).html","1f07a585da52cd4c69d621ff0a734cdf"],["/计算机网络-数据链路(六).html","e342d8bb76db126285d9d6febc07963a"],["/计算机网络-数据链路(四).html","f71702c567354014edf89ba64836ba77"],["/计算机网络-数据链路层(七)9-5.html","bb235852f7560e14012a37f700782911"],["/计算机网络-物理层(一)8-28.html","f196778b3e7c999241dcc1a8e83f8af6"],["/计算机网络-物理层(二)8-29.html","84386333b3be389197ed7e21c41f9b00"],["/计算机网络-网络层(一)9-6.html","daea6606f1b30c308517c49cbfc5a418"],["/计算机网络体系分层思想(8-27).html","be69a51a7fe8d1fcf6a5e7a2ec8f07fb"],["/计算机网络性能和体系结构（8.26）.html","c8be1be2ce9d452b8b00766c6cf7100d"]];
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

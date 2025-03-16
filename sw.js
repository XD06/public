/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10ecef2b09983a21e1e4c9935768cc55"],["/Gallery/index.html","94efa24fb2d3b5ab71c482eb7e0938b8"],["/about/index.html","b19fca24b91496cc4d2ff18169a79014"],["/archives/2022/08/index.html","aae8e3648ba586cb722256965712a16c"],["/archives/2022/08/page/2/index.html","0731f8cd9149494673ef447f7834750d"],["/archives/2022/09/index.html","eb140204a6e921dd36ff02bdedbcba9b"],["/archives/2022/10/index.html","37317e380a830c4973678b669f80a97b"],["/archives/2022/index.html","b4877a9c7803fe7ef08789286f350d5f"],["/archives/2022/page/2/index.html","ae984dfddb4e94cf8c09b7acc2c47b45"],["/archives/2025/02/index.html","9e9d841b5aabdd1f31b043aefe200a94"],["/archives/2025/03/index.html","ae5566f0792d1407501e828d2b5b0a33"],["/archives/2025/03/page/2/index.html","15886955041894aef8380999b23004d3"],["/archives/2025/index.html","b12f74f8669915dcdbec24b07d73ab16"],["/archives/2025/page/2/index.html","85dcea531d0f73b3cf08771d56986a58"],["/archives/2025/page/3/index.html","d315bd567926a27698c4cecdd53c4f39"],["/archives/index.html","a03b0d088e3b23b4ea1237785ad4e3c8"],["/archives/page/2/index.html","408a0e5ee3eeb933251dec58a677fdd1"],["/archives/page/3/index.html","6e87b0a3127bcf111d3c2d03fb80bc9c"],["/archives/page/4/index.html","98c75cbf2675959d3b9ed1bf1d5d1970"],["/categories/index.html","192d95e4eef014838a1089577111acd1"],["/categories/壁纸/index.html","47dc5ef28d141df1a54ab1670a1ea16a"],["/categories/机网/index.html","5af85a49e71733224230c1eab94891b8"],["/categories/机网/page/2/index.html","5c14e3ad0450b17bb7a6b1f557d1a311"],["/categories/每日早报/index.html","227b1d63f75f88a0aacd9ba46d17fc8e"],["/categories/每日早报/page/2/index.html","33b1d6022c3f864f399bdf1077af9ac8"],["/css/AI.css","7c3ebf4a42a9628ff4d34ef516272c04"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","d13bf1556beb8e8518c8f9880cb3a0aa"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepseek.html","fff1553b77dd4fe8492bf9e0c8b8ef1d"],["/description/index.html","b42c92ef5d49119c43b4b137fd9c0826"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","4dce86874404415c3b3886b9dedb62aa"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","c86bce3f775ca1265d9bb8def4ea5043"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","01fba0fb42e13a32f56b5258538f9328"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","ac6859df60d1da3d88fc61bc3a80378d"],["/link/index.html","36539eb8c21e990f00f92ef8413096a9"],["/music/index.html","06a2cbc1c21868a552ba6c907ecb40ed"],["/page/2/index.html","866ce129e6bd982ab2428b1330b3cf40"],["/page/3/index.html","53a32f52438a795178558495b95ecebb"],["/page/4/index.html","dd29a917d33926a1ecc2f135af331e0a"],["/shuoshuo/index.html","cfa7ffd82d1b12dc8ad43a0503229695"],["/sw-register.js","9e840ea5bf968a8ddec438989db6ae00"],["/tags/index.html","a01fc88299b9f69a5f4ed40cc0b774fb"],["/tags/【每日早报】-2025-02-25 - 星期二.html","6474d2e6102e70f7e52cfc7f68de7376"],["/tags/养眼/index.html","f6e10f4dcbeb9ea8db2a70fa2a1b4ecd"],["/tags/日常/index.html","dc1033df62fa0c51eeec94a5290143e3"],["/tags/每日早报/index.html","64e0a15ce532212776ec261620464c91"],["/tags/每日早报/page/2/index.html","9dc7873b0915261a5ca012e732befdcf"],["/tags/第一篇/index.html","332a2b79fc05a9a8ffa9d6e8bad49e9d"],["/tags/网络/index.html","d84dd6308c5379192bc64c596d93dbb2"],["/tags/网络/page/2/index.html","5b1728f2d0e13228655a11ec082089ca"],["/template/index.html","069aabd8d28b014deba54bda781f3c2f"],["/temple.html","1e11373683949a931d81f34573146d97"],["/test-post.html","da8b8d43999025e9b97241b795893ab7"],["/webhook.html","78b017861ac17ffdea0d61241b973c23"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/【每日早报】-2025-02-19 - 星期三.html","fcdfec0d2b828c3c710ff24e9cccc3f9"],["/【每日早报】-2025-02-21 - 星期五.html","763095348752e752beaf78e7e3533697"],["/【每日早报】-2025-02-22 - 星期六.html","1805f0a5f6169d43db39921db95a5c70"],["/【每日早报】-2025-02-24 - 星期一.html","7b222b445b86748984f2301663f91f29"],["/【每日早报】-2025-02-25 - 星期二.html","cbac115a12f02d8a80669e986f0a3364"],["/【每日早报】-2025-02-26 - 星期三.html","5b4a6f73c3ae00854f10e47cbc96c928"],["/【每日早报】-2025-02-27 - 星期四.html","6ceb38a3a497ff25e4e04f562d292dd5"],["/【每日早报】-2025-02-28 - 星期五.html","80adb08e7c01ece1b439848a76443ab6"],["/【每日早报】-2025-03-01 - 星期六.html","618e8f095397ece34e170e8c760b8b70"],["/【每日早报】-2025-03-02 - 星期日.html","d602f9e35ca75805232cd599912dc56e"],["/【每日早报】-2025-03-06 - 星期四.html","5dce2af2f94e454a9079894a416b203b"],["/【每日早报】-2025-03-07 - 星期五.html","dc970dc2d2d33a8b8a6ce4523ab1b98d"],["/【每日早报】-2025-03-08 - 星期六.html","0cf238db64c71d9e5f5b577d1c2eebcf"],["/【每日早报】-2025-03-10 - 星期一.html","4774cf0c143a499bdb3bafc460d3d788"],["/【每日早报】-2025-03-11 - 星期二.html","d6c3cdd08c2690b30cc70b9eba9083d5"],["/【每日早报】-2025-03-12 - 星期三.html","f55d89035cc2f009328e67d0237fd386"],["/【每日早报】-2025-03-14 - 星期五.html","ea40ecd337be27428075bd369ec3d582"],["/分享壁纸(一).html","9048bb985ba76de97ab65c33721ef465"],["/分享壁纸(三).html","3d3cfc034f6c52c07e72a95d3d07d411"],["/分享壁纸(二).html","3f5d55584e74e37f7d3c43ed1e033b0a"],["/又是一个不眠之夜.html","9f60f13acf8e90fcdd27323c94a4b9e2"],["/咒术回战.html","ee220f5332d9abd02906584233a1ad63"],["/开端.html","264996d40c64e37d54a92521554190f7"],["/计算机网络-数据链路(一)8-30.html","061d93d26329b7b95cf2fd3f421b62af"],["/计算机网络-数据链路(三).html","b9f17d295385b6fbd2ab2653756b4b21"],["/计算机网络-数据链路(二)8-31.html","5162e420780a7ba64a32da9f4ebcadea"],["/计算机网络-数据链路(五).html","77c5eb34dd1553936d6357bdfaadb34d"],["/计算机网络-数据链路(六).html","d4b3ad34258693d4196d8a4328fccff0"],["/计算机网络-数据链路(四).html","20d1e3f2e55b8b9df7c8c14604baab8c"],["/计算机网络-数据链路层(七)9-5.html","bc80d40b983876d01ab7abe6570c367b"],["/计算机网络-物理层(一)8-28.html","a23bcd59fc0552cb6c7eb80f28213da5"],["/计算机网络-物理层(二)8-29.html","5f22db40e4a5c25a336c78f3a3f00ea6"],["/计算机网络-网络层(一)9-6.html","6e482f94b7bf6eb123daa340c2402ea5"],["/计算机网络体系分层思想(8-27).html","74332e8ccc9a878414a956e879e3dafd"],["/计算机网络性能和体系结构（8.26）.html","60f7eac220c9be93d9097f9ad406fa6a"]];
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

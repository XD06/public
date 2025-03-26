/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","34981ffd0e242cf0e26f3b98e783da95"],["/Gallery/index.html","a33d99414d44d26d708eea9647f3419f"],["/about/index.html","f906e8db05deced3a6d25467fd14d570"],["/archives/2022/08/index.html","c43c4377073ff56cef88713a6524ba0f"],["/archives/2022/09/index.html","85fcf775e6afa81eb9356396b0f7b16d"],["/archives/2022/10/index.html","562cc8d38403bd1ceb5da937b32bf248"],["/archives/2022/index.html","3d9d29b1caf4ed108e05742f9ce88259"],["/archives/2022/page/2/index.html","11d1089a4ec20c585bd0fc8b7c709321"],["/archives/2025/02/index.html","e314971319ae334a426eafe3330c4086"],["/archives/2025/02/page/2/index.html","6b0ec2c65f9732982d6862103806ec22"],["/archives/2025/03/index.html","5440a5986d4a0b72d278f3ec79dd1f48"],["/archives/2025/03/page/2/index.html","7ccde9cd28424c1570d00ea78bd39e89"],["/archives/2025/index.html","086a4e2776acf6564b3a5dadc3ed21f3"],["/archives/2025/page/2/index.html","85dd19f1ecb1a33bc6c3b667b0ea6d20"],["/archives/2025/page/3/index.html","b9274272c2b3a0d28ea1cd429fd19634"],["/archives/index.html","bbed78f75fab88cdf169a10e7dac416b"],["/archives/page/2/index.html","4a7a11065db5d8fc33c17378db493741"],["/archives/page/3/index.html","51bd89202fb40265589f0b9d08893444"],["/archives/page/4/index.html","c88cde3c8d11d05d3cc019175cc78785"],["/archives/page/5/index.html","8f9bac6fbbc6c2d0caa9472a56e32c42"],["/baidu_verify_codeva-J5b2WWChcR.html","12246f0cde4a808f547a6b0731d49514"],["/baidu_verify_codeva-cwyza0ZFJb.html","ee16a7c1a00f6033ee459b518475e274"],["/categories/index.html","b3bbee50729cbeae78e5dd204d48d486"],["/categories/壁纸/index.html","4b9050564dda18b3aa9595e898bf9f01"],["/categories/机网/index.html","34bb243da65e8c365abe5430906a7646"],["/categories/机网/page/2/index.html","53029b17b9c92249b670d3b916993960"],["/categories/每日早报/index.html","5e42eb10b5288c1c3b6a2e4a2cad53d9"],["/categories/每日早报/page/2/index.html","ac1bbd3f590b4fea7981b37b8dbf968e"],["/categories/每日早报/page/3/index.html","5233f486986f83907df9fddd8841d9ba"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","b35e7fa661bf3f5ad5dd4a5e849212e8"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","de7eef67e92214c4f86b05b9af4210b0"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","4e8c85aaa9da83d2682c8daaa9e04036"],["/link/index.html","92bcd5970057292e76ef8e689db3e0a2"],["/music/index.html","fb49caaace3fbe362a266346aae6c68c"],["/page/2/index.html","af6ae4d7d143d1592b04f90259bdbb23"],["/page/3/index.html","a25d9a86de80cf2a323e1646e7884001"],["/page/4/index.html","86102d1cf8d15ec4798d9e879b23d412"],["/page/5/index.html","a5cc859fde83790bfd45f45399f5bc7b"],["/posts/1b0c78b3.html","8c247c72ff60794673b2b16535378fa3"],["/posts/1b5b87.html","854e45acf37cb4babdd513e97a3691ce"],["/posts/28c755c.html","a4ccfd6892d28085da875af1cfb2be78"],["/posts/330d6f69.html","4a2ac1376175503858e3ef2e5cf98c8a"],["/posts/3b744803.html","458ffac6bfe216b83ecf7e42f8befab3"],["/posts/3da05156.html","afb3375ccf14a1820647fc0edb49a07c"],["/posts/3e91e0fa.html","9a893857d64e01462ea7d0fad97fc1e1"],["/posts/41c2c0d2.html","4c91d0e801958aa126c9b30ef6ecb601"],["/posts/46fc5adc.html","0c889122f2876717253bedcdc4e47dd0"],["/posts/493f6b85.html","10a270530660e341b05922e2c99335a4"],["/posts/497e40e0.html","e975119a7694e57c223b0f2cd92aff65"],["/posts/4a17b156.html","7cd9e07b6bd78c664a26e0e654ca3edc"],["/posts/4e2d7b19.html","18e6b0bb128bab4d1c74b4144cc317e9"],["/posts/4f81eb97.html","23f0b9cbfd1317bea38719b8dd5ccc51"],["/posts/53721e0e.html","813bd72b291c108ff7455bb9eb0bc942"],["/posts/5dadd067.html","a38067273c71c49db082e4b396879f00"],["/posts/5ff34642.html","e583226ce823521be3d5d210c9de0e16"],["/posts/653abebf.html","4ffdfec1f10e50dc8f65d576fcad0489"],["/posts/681265c2.html","47c5fa23b2709fe039e987f32efebc86"],["/posts/6f44662f.html","329e2825b7d7f2b4d42e90361f6e6534"],["/posts/7207f70e.html","47b26034c170c3e8978c8323cfceb24a"],["/posts/7289f891.html","380e1bb28b6624496a7b0980603242c2"],["/posts/732e626.html","ad920b8e1a2c37005f9851208d375562"],["/posts/7e13cc3b.html","87ab8e3ef718cde3016b9f33f77f4878"],["/posts/80a7ecce.html","0294cf4ebc1a56cc832ce3cfda0b3905"],["/posts/821a4686.html","d82859d33edbf0aa3a27af634533886c"],["/posts/8a741756.html","fcfd1bf2a9de8debca39e91482ee2b3f"],["/posts/918d46c1.html","f199376bb0a39858c64688976cf1a8db"],["/posts/9f057e9a.html","1a821c55a938e5c2fa59270601d1023b"],["/posts/a7d437fe.html","5f074184b6d3f440c1b5d24c82cbcae1"],["/posts/ace4e4cd.html","42c61ef61c7e590c3a9856053566f968"],["/posts/af30ddef.html","dfd363ae12cddeb935d6bb668dce7480"],["/posts/b1eb9c6d.html","0c534ff9ab3ad138e4a87d11cc339354"],["/posts/b564e922.html","7b3ba2c4e5a2890a1be33ff9db3483e1"],["/posts/bc9a4dc7.html","0bac1ea83ef12e89ab165b2aeeb1fd70"],["/posts/be543a11.html","702181d7b75a3ab22326965c617ef027"],["/posts/c9b871f1.html","8d4940a704cd8667349d72d6612aebdd"],["/posts/d6ef11e5.html","4fd037f31dd8f956acc6bd97ed59f8df"],["/posts/dcd6fdd1.html","730abfa8c9dcbf89dcd1004834d8f68a"],["/posts/de24a124.html","8023d972eabaaceb4238e4ab3756f447"],["/posts/e32cbcd3.html","1ab80faaea3351366a65c934fe468d31"],["/posts/eebbc69f.html","6ef30f3b4dca73ff8c55cd5dc848411f"],["/posts/f08119d7.html","510c7be390ac15d3331d1f94d2b51675"],["/posts/f7f51423.html","0e8272e5dc059625651a593de699f92a"],["/posts/fd1a8f9f.html","e0073326b7b556c796c106c550ba86e1"],["/service-worker.js","8189de24a13089b586ff1b7e07f8078f"],["/shuoshuo/index.html","137e34b9bd9194b9debf43febd87a6d9"],["/sw-register.js","a295cd3b63a6bb0c16cb9a32776fee4b"],["/tags/index.html","d9968dc2d5db5cc1950394b683cd0f94"],["/tags/【每日早报】-2025-02-25 - 星期二.html","5fbebf3e5ae5a18f51938d1d6af62508"],["/tags/养眼/index.html","20f9c05199bba257f612ca7a010f0a86"],["/tags/每日早报/index.html","9776536466d6dff151439b60d997bddf"],["/tags/每日早报/page/2/index.html","36a547851500ac5aa76761a6f5f68d57"],["/tags/每日早报/page/3/index.html","9263e92073360089a2f5160a81d80c98"],["/tags/第一篇/index.html","32fdf970b6aa12f5d0061aedfe34de43"],["/tags/网络/index.html","caf6546d241a211c66d0f04284281960"],["/tags/网络/page/2/index.html","f35381926f227695b877fa69605782d5"],["/template/index.html","7edcb327b36f42114e6dbfb57afe67d6"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

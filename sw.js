/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","deca68ab44c4a567ae841a01e22bff60"],["/Gallery/index.html","4c4751b7c3a511325df5578189933744"],["/about/index.html","7dbe4e0b3d2bb903305eda6a68571707"],["/archives/2022/08/index.html","5f299e3e615e6660ef874ec61c99df1c"],["/archives/2022/09/index.html","0d5440908d0849e5a72548790da56890"],["/archives/2022/10/index.html","1ec7f20b3fe8268abd3bb8a42b229185"],["/archives/2022/index.html","396827b167ba9febdd55094eb0f37a47"],["/archives/2022/page/2/index.html","c93fd8297299881bc065fc18a321bb31"],["/archives/2025/02/index.html","71282f4f7112f99fa96ba8d42cbf6fd7"],["/archives/2025/02/page/2/index.html","6073ec3ad6b0a9e74d55148cd961c11f"],["/archives/2025/03/index.html","ebf81b8d06c408be5291b90e45cd3734"],["/archives/2025/03/page/2/index.html","dbb650d29162763965d335f6cbabf3d7"],["/archives/2025/04/index.html","6f226554494fe303b04aa40916642c72"],["/archives/2025/index.html","c26d527a7d2aac95b3a095c8c6cf4bb0"],["/archives/2025/page/2/index.html","107fa861057f009286743e346e2d8e7f"],["/archives/2025/page/3/index.html","ed3bd006f8bd02e4ca329d534f113864"],["/archives/index.html","f3324c1f20cefa2e2eb22663ec365cd3"],["/archives/page/2/index.html","351c6a762649f9a4d273370f7f411f94"],["/archives/page/3/index.html","9ff52361e5cf7dc2b0c0a87ae8be364f"],["/archives/page/4/index.html","0c33081a5e354eaf99710f4ae69deb3c"],["/archives/page/5/index.html","27c25609dca280c34ed1fb021e07ce1d"],["/baidu_verify_codeva-J5b2WWChcR.html","b7fbe516166fe5efcd618c89590b647f"],["/baidu_verify_codeva-cwyza0ZFJb.html","3afbba79fc7fed3ab118992b507064c8"],["/categories/index.html","d4476ad89b83cbf97589a73cb7c7fb12"],["/categories/壁纸/index.html","5a78cabcf75c63e8d3017d9a0316e9d3"],["/categories/机网/index.html","6458674fe3f065e72ad0e407bf59ba29"],["/categories/机网/page/2/index.html","f4409e93be85086709dacdef1656f1c5"],["/categories/每日早报/index.html","370edf8d712f72ca243ed3c72c687273"],["/categories/每日早报/page/2/index.html","f5e836f735fca725cd8204600fc0b602"],["/categories/每日早报/page/3/index.html","8d4e4e9d4e48a89b79e9eaf1494163b8"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","9ec00f49de7af849b2db836874f8a7e1"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","90f95ac90d3b03e760a8ba2a4423d179"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","1447b5737ac67961c69869e75a6f0ee6"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","e440dad2e14d750fd9b5cea77ba25882"],["/link/index.html","7717e9cc390d97500e5bc6ab83e7181e"],["/music/index.html","e947412d8a191ce41f4d9ddbbb4a802d"],["/page/2/index.html","2e8b3b375e62c0ac8760c6ce7fbd3c92"],["/page/3/index.html","11363b57c5c122cafcb4e50d7f9ab5e0"],["/page/4/index.html","0990f5e944716e5ec98309f1797c7353"],["/page/5/index.html","9fdc027e82473d0a9bd57aeedfb9822b"],["/posts/1b0c78b3.html","d269746f5b3bfeeffbcc7ac2a65e4237"],["/posts/1b5b87.html","7bcf5db35d7496e2db3f945b42894e2e"],["/posts/2134d9d1.html","79827e094ecaf8e6206e860ba0cda5a2"],["/posts/28c755c.html","5a28c76e17e082868d98b16e086e9b59"],["/posts/2f77f294.html","613c12b66f30d187f4c60c768441ddb6"],["/posts/330d6f69.html","35aee517e27d8260581cff42f760533d"],["/posts/3b744803.html","610c0809eb5ff8672d3149e2e0e852eb"],["/posts/3da05156.html","d6af15b0cec6820681dd8dceffdd2fa0"],["/posts/3e91e0fa.html","d8bba733e8902abd64d5ad83e886eaba"],["/posts/41c2c0d2.html","8f00dba456c577c4e6f2714b0b067aa6"],["/posts/46fc5adc.html","aaa6fc9650a3a85c042f3c6e80a89614"],["/posts/493f6b85.html","5da00954b5094b49b53362fe12697643"],["/posts/497e40e0.html","f7e40e864c9c107e4745e7eda8cf6d3d"],["/posts/4a17b156.html","8ea700efaafaa44e5d77e7c0e6926452"],["/posts/4e2d7b19.html","75b1a25878841b423ce65e83e912e53f"],["/posts/4f81eb97.html","bba122fc97a6312507d0476c30e524b0"],["/posts/53721e0e.html","07fa06d1df2c9e6426f503062c25036e"],["/posts/5dadd067.html","1b4d3c688e47a06a31b273a9e3c261fc"],["/posts/5ff34642.html","b6f4cec7697a4dbece45e3d488278129"],["/posts/653abebf.html","dfb7017a4bc51d5c56631df206515b15"],["/posts/681265c2.html","1ca7e9a407d88bdfe3efb334d0fc9dd0"],["/posts/6f44662f.html","94bfd01131f2799d32ada2f50e883332"],["/posts/7207f70e.html","742bc81fcb1d5480094716811c321907"],["/posts/7289f891.html","4444be14822d330ae4f07e8735be619b"],["/posts/732e626.html","d61b05fcf60a564d1fedaf5ac722ab4c"],["/posts/7e13cc3b.html","e6aaddbe3dc778e7159721d59306034d"],["/posts/80a7ecce.html","15f72be5623dc146e1c9f91d514e9824"],["/posts/821a4686.html","45cede65d7a81ccb644027817dbfaab0"],["/posts/8a741756.html","eb778e7bfd900e06e5819da0a4f0d457"],["/posts/918d46c1.html","74167ab7c2be148cd763ccd49d2dc7a8"],["/posts/93c8c0c7.html","74e2f277c58736be15a402158887d2f9"],["/posts/9f057e9a.html","2472f095bb59ef140d42bb095ab454c2"],["/posts/a7d437fe.html","4a117faf56e31ef9fe4a62b375a130ac"],["/posts/ace4e4cd.html","9f29b9d196b75f79711c80200216e1d3"],["/posts/af30ddef.html","760b4bef9d6ed7b6610b273b5b9cd227"],["/posts/b1eb9c6d.html","ae76ff9c2fccbeca3aa8eb939b4c61ea"],["/posts/b564e922.html","7a5a7cbb38a166eb934fb34fefa3a686"],["/posts/bc9a4dc7.html","34357ed5148d9a8e4be0299b69c7203b"],["/posts/be543a11.html","e5341e404cd25c0d8d188ce3ae8e7e09"],["/posts/c9b871f1.html","42bf0939e800b514ec00b435d46f9518"],["/posts/d6ef11e5.html","f7bd6f4c35076b7458d7c7ef75c5b32e"],["/posts/dcd6fdd1.html","5dd47cf350832b13b6de61409a8c14b9"],["/posts/de24a124.html","d29816d5ceebfb8abbc55b34d503c543"],["/posts/e32cbcd3.html","8e7d48a7a102c79975bafac39b2dce6a"],["/posts/eebbc69f.html","e7ba11300753a04f1046ee5be6e0cceb"],["/posts/f08119d7.html","0283d85b9a2fc002f2592f0fbba18e3d"],["/posts/f7f51423.html","de326a757ce7d393eae98c1046744d71"],["/posts/fd1a8f9f.html","4eedd7ff976d0e4a72abb4a843e04174"],["/service-worker.js","9837b41f77941c2f9c02d62a6d74de53"],["/shuoshuo/index.html","eff94608019178bb2179368d90fb2e8a"],["/sw-register.js","c62128886d2971cd5f69144c0c60c24b"],["/tags/index.html","da34dc9d046016458f6c7384d36c52cc"],["/tags/【每日早报】-2025-02-25 - 星期二.html","eb74623ae01aabb1d58272f16a4db9ab"],["/tags/养眼/index.html","431f05ca8d53c9b4cc37aa0f2a688f30"],["/tags/每日早报/index.html","146767d165f8ebe5aad41fd7df841bf0"],["/tags/每日早报/page/2/index.html","4239cccaeffbde8f65110ead8961078d"],["/tags/每日早报/page/3/index.html","3c1372249753549401f2dd94bd5d9606"],["/tags/第一篇/index.html","82cfeb613fb51605fe34a042abf9a175"],["/tags/网络/index.html","a7e78ed9905dff0539a63a7871f5ee40"],["/tags/网络/page/2/index.html","096c109f46ead74c69f340ef2bf03c05"],["/template/index.html","888c4241fff20ba94cdbaa3d40f021ca"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

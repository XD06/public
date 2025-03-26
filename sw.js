/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b11fc044c456717fe117ee58c02eee07"],["/Gallery/index.html","bc9fb7387d7ffabe29a11ef2dcdef405"],["/about/index.html","5f4a102650b9462b1c0aa85447510efc"],["/archives/2022/08/index.html","eb4829a5eef4fe151bb341d5b2a31b08"],["/archives/2022/09/index.html","99697d890519462506483746913858c2"],["/archives/2022/10/index.html","00a8768af52da0aa11d61e322147a324"],["/archives/2022/index.html","96865cd0c9fcb1555a8d4d907264ed28"],["/archives/2022/page/2/index.html","8c5224287be1bb720366bf2ba0ef1a17"],["/archives/2025/02/index.html","a6c04cfa3d3e7b32e29ce5f32e202428"],["/archives/2025/02/page/2/index.html","64b930aeae815d9d98a690f76951e4d6"],["/archives/2025/03/index.html","47357111ef15e44eb7d3c7b26ffe921e"],["/archives/2025/03/page/2/index.html","e506007d47b17b0b6cc03fa515c245f4"],["/archives/2025/index.html","54a5c3bb59891146e222491b7c4590ee"],["/archives/2025/page/2/index.html","55c1e44857f5cd64284b3e5d08cfc55e"],["/archives/2025/page/3/index.html","0cbe61b58078fc191a31b9cd01ccdb8e"],["/archives/index.html","1dae89f97d43dff58efe6bf940bbe38d"],["/archives/page/2/index.html","b2c76878e8d71f250c8a360312581348"],["/archives/page/3/index.html","772691f3d80600adb8f2931b772e4b5b"],["/archives/page/4/index.html","0976285a70770827e058346aedf3eae4"],["/archives/page/5/index.html","28b36460e97b52a43cbe9887de203735"],["/baidu_verify_codeva-J5b2WWChcR.html","0c330952549ea692f933feeca1528a58"],["/baidu_verify_codeva-cwyza0ZFJb.html","6cc0843fb9cf5f8b85f38649a4b93417"],["/categories/index.html","632d7594ded673bda2f14066a47c17a7"],["/categories/壁纸/index.html","683a94567226fb777a24dd616cefad1a"],["/categories/机网/index.html","16686f47e8b173525d77828cab4a9b10"],["/categories/机网/page/2/index.html","79c0f5d26fb1c8cc102e4e94539ae8f0"],["/categories/每日早报/index.html","b6cbcec938e8602694114ab7cfdd9dd1"],["/categories/每日早报/page/2/index.html","beab49f5b1dab476ec4d43c7bf7c5b00"],["/categories/每日早报/page/3/index.html","19b6c15be7fcfbbee65fb05cf99760aa"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","305f7069c050cfea1a653e7a506119fd"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","117cd1ebd1926176d0044301c0d76e0a"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","81fde56bb72135e886b6be8af3766c7c"],["/link/index.html","f79a8693f9a7be67b3ecd8f3fda8be0c"],["/music/index.html","92b2bd15a0e9a6ca2a8d0472af282e02"],["/page/2/index.html","c26c679ab14cb0392cd794eaedc79b8a"],["/page/3/index.html","0fbf7e44b37ec5d20d8a2a53c01a97d9"],["/page/4/index.html","0e393a6df7796e838306a790506c8952"],["/page/5/index.html","9c1b8aa6d540656cfd1cb3805f2fd9cc"],["/posts/1b0c78b3.html","167d2ae3e8a9d980e69e9533cac047f0"],["/posts/1b5b87.html","13f62ea51a1ef6d36a8cb3084da6844d"],["/posts/28c755c.html","405694450ed913bda664a63fc2492b8b"],["/posts/330d6f69.html","16089a1de0264656ec9c562bfad16f1d"],["/posts/3b744803.html","ca231144908b1bba961fa68ce7c105ab"],["/posts/3da05156.html","77d31c1fe9ec2a838820bca2291814f7"],["/posts/3e91e0fa.html","a0635bc85bccfbd9179f7f73cb847830"],["/posts/41c2c0d2.html","02b979362fef4dacd7133e16d3f3b2fd"],["/posts/46fc5adc.html","acdcfcbeb4b53685c221b12befc7d636"],["/posts/493f6b85.html","a90c26f6c3a265120565d3f281ae95e2"],["/posts/497e40e0.html","7a9a7c35c2122685b195d75e4e2b85cb"],["/posts/4a17b156.html","17a6ec6fe92da9b31462d4f5620bcfaa"],["/posts/4e2d7b19.html","0afd350326e9c28fc0f83e1e0bbe2971"],["/posts/4f81eb97.html","4ecbeb1ffa4f23eccfb4336cc4e7817e"],["/posts/53721e0e.html","1d668afa956171956d278c340ad282c6"],["/posts/5dadd067.html","6af67324228f6dd7c1435c1765227e11"],["/posts/5ff34642.html","1a3da4cb693612d15809c215e1b1baca"],["/posts/653abebf.html","2325c9554bedfee4e82df877dfa15e2b"],["/posts/681265c2.html","00afc0875b58c40d6f8f173317dc7fc9"],["/posts/6f44662f.html","98010718a77a5084d9ba9488621d234d"],["/posts/7207f70e.html","65262caeefce2fae0a6df6cf710eee8e"],["/posts/7289f891.html","4f648bbc743ffbd7e459c76fb2a75a77"],["/posts/732e626.html","f9c467bd4581de14845673ca5c6dd177"],["/posts/7e13cc3b.html","0ff8a19f2e79d406b1ce86a1ddd2226d"],["/posts/80a7ecce.html","e8f0444a8591d613cfcc64200e5359e0"],["/posts/821a4686.html","040d917f6869b4deffb97654cdf70b1a"],["/posts/8a741756.html","87a4629dd8452baba98a7b18b81745de"],["/posts/918d46c1.html","3058aecc4b74240d65b626c46a773ed5"],["/posts/9f057e9a.html","66a6b4fcdb455152507a41ac4ba03b71"],["/posts/a7d437fe.html","8909a4a13866e831d7c51ce434e072a3"],["/posts/ace4e4cd.html","06ba0e4c09e23b8340c2c8af7773e414"],["/posts/af30ddef.html","4f5a7879f5bfeaf34fe9a463d4dc4a6d"],["/posts/b1eb9c6d.html","dda9420469c391e831c73c12d86f8fe3"],["/posts/b564e922.html","9cdc3765ac1f70c2eb2cfa42fb5c6c15"],["/posts/bc9a4dc7.html","99a432f6eb4d52357fb1c3dbcc4e90fb"],["/posts/be543a11.html","0b6df2535d9fe3f366a69a42c6d58372"],["/posts/c9b871f1.html","9e9521272b7261f3b4632846f790d0c5"],["/posts/d6ef11e5.html","7f565b4bec5d414f65b7de1bb171f713"],["/posts/dcd6fdd1.html","371aafaa6da82dc10c44a0bead5e086e"],["/posts/de24a124.html","e46dc4014b23f94430a60eb7ea049f35"],["/posts/e32cbcd3.html","b1c6fd66e6f8808cd1faf63cf23d607c"],["/posts/eebbc69f.html","a0cbe8611deab1e57422efce5ffb8526"],["/posts/f08119d7.html","a08b854e83a715ccbfd28eee143432e6"],["/posts/f7f51423.html","7ee806ee84cb8cf003a0483306efcc8f"],["/posts/fd1a8f9f.html","efc5593d728df6ec98cd8f415cf6e8ae"],["/service-worker.js","ef0135248606368b5fe9fe8a337b3c46"],["/shuoshuo/index.html","eac6733f28e66b3e616c6f93a4ec6488"],["/sw-register.js","63b5ccd5e1708d66bfb8dd63d9cc4c39"],["/tags/index.html","1f75184c8a70f6c21b5f5fa6440e68a4"],["/tags/【每日早报】-2025-02-25 - 星期二.html","d066dad9f0c41d175a58f22d2988f06c"],["/tags/养眼/index.html","b991a09ebe74b81ff3ba9052aab059cf"],["/tags/每日早报/index.html","b54ca4d50acc9b72e18d702d8b6a6ec8"],["/tags/每日早报/page/2/index.html","09b0b35d8dcb55e3cb57c51fdaa5bc5f"],["/tags/每日早报/page/3/index.html","0cb560a9033f172f077725fe6b728849"],["/tags/第一篇/index.html","6177eb9feee7fad1d1229cc130251bf3"],["/tags/网络/index.html","c1c1aee9c4f6fecf6193cd9d0a8e1860"],["/tags/网络/page/2/index.html","6d610ca6fd46414d4aea8aff5b078920"],["/template/index.html","f8521ab20cba359585e77bd20d77648a"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

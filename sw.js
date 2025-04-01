/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","20ebc67440862b38b08e356a4ba149ca"],["/Gallery/index.html","98b334d98337b88e81c86ed0b89dd326"],["/about/index.html","fb6ac01311443e1e1b9255f7a967b456"],["/archives/2022/08/index.html","977aea1b910fb799fd51c590e7651718"],["/archives/2022/09/index.html","cb337bd0618aaf8d8588f9f50149e5a7"],["/archives/2022/10/index.html","51d7572c6194ac23abb488c2c46f5b88"],["/archives/2022/index.html","aa73a0524e93f0b8acedca5e691f7bac"],["/archives/2022/page/2/index.html","ca4d7cdd9df25113cdb87fde83194464"],["/archives/2025/02/index.html","b82f9c27210a04cddb6ef169a3aaff82"],["/archives/2025/02/page/2/index.html","9896a29f95a1da7be8573518f80bed2e"],["/archives/2025/03/index.html","45e0dcfc82eb5c115d3cf67969da074c"],["/archives/2025/03/page/2/index.html","ff072d8a6f96a7c46e1811543a4cc876"],["/archives/2025/04/index.html","c4522fa9e114d8666da5bfdc91335c49"],["/archives/2025/index.html","3ffa296cfee6e2095466059070d8768e"],["/archives/2025/page/2/index.html","024def4d1a0b760b8c44934956b3b18a"],["/archives/2025/page/3/index.html","f4ddb4df484cfafbfdbae7eef7cae28e"],["/archives/index.html","c1ea138c44c9094e62fc6a7cb0e7e5ba"],["/archives/page/2/index.html","573c184c5e7d9890d4bd330d00a53715"],["/archives/page/3/index.html","ec0d74a3ec9e2229f1f82cfd231639cf"],["/archives/page/4/index.html","57966986d266d73d116f22f6a5b01b3a"],["/archives/page/5/index.html","ff92bdde7386a0a75aa1ac9fb91ad16c"],["/baidu_verify_codeva-J5b2WWChcR.html","d1432b64e02f91d71edccac838690648"],["/baidu_verify_codeva-cwyza0ZFJb.html","2add7649fd3577c80d39b448c9dd7200"],["/categories/index.html","e84b887f43cc95a33cffc481a3edce4f"],["/categories/壁纸/index.html","99757a2662f151645b247b2d09fe36f2"],["/categories/机网/index.html","bcfecb8938f16e98a137fc16c5abf52f"],["/categories/机网/page/2/index.html","d3f6a66856a6dde204096cfdede21907"],["/categories/每日早报/index.html","14ff7bcf7ae6e8e5a6e3bcf4a5edb3c9"],["/categories/每日早报/page/2/index.html","0a79a69d52d11ee3ef87cb5c4ab611ed"],["/categories/每日早报/page/3/index.html","47d77c8267eef670db3120aafefc399d"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","fab507d173a486f0c80b4974b398e7b3"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/progress_bar.css","d910fa5f7c0cb483257d5b90e8df0d25"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","d46f87e24843c839789457a94755998a"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","d79d2fd5352f96af7fee86d25f964227"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","450e2474d296bd5d4b5685c780d85143"],["/link/index.html","451bde95b3a9d9c7039834bddcdada02"],["/music/index.html","c106b5a22a83c3ac2e03cc436e18e659"],["/page/2/index.html","3fa6280f6edd37ac88eeaeb33e3e4710"],["/page/3/index.html","4a29f656f10960cebfab9773c0b7cf73"],["/page/4/index.html","bcb43a86c93a7f7056b1b2b6ba3c28f6"],["/page/5/index.html","e891eb8f7a5b17fcdf0db972d5e1384e"],["/posts/1b0c78b3.html","728496d17f0080abdd1b285af150b349"],["/posts/1b5b87.html","566fff734702608e0f4c39af4475cd5d"],["/posts/2134d9d1.html","871e9e1e421f00e8ee5ae72b3ae430db"],["/posts/28c755c.html","d9d4790af851a27d8b8e3a196d4822c4"],["/posts/330d6f69.html","e9c3a12b094df2e86751836e06454230"],["/posts/3b744803.html","d5031999f9d3ff7e313d09837e56cfdd"],["/posts/3da05156.html","16d362c0314a2d58ad181fbff804dde1"],["/posts/3e91e0fa.html","f6e77743260df977bb60246a40850ae0"],["/posts/41c2c0d2.html","5bee2c7f4d29b6adab85734116a97973"],["/posts/46fc5adc.html","c987dd782d90fb29cee7f067fa036d0b"],["/posts/493f6b85.html","dea33745184ceb64ed1e4d136c3e4cd5"],["/posts/497e40e0.html","415adc2b416f35afb844a5f6edfd4d26"],["/posts/4a17b156.html","778e9159b270f50d8a7b710439ab9514"],["/posts/4e2d7b19.html","0ea6fa263520564adb3d8919ffbee2eb"],["/posts/4f81eb97.html","4d71612336292b09d4742c744d895814"],["/posts/53721e0e.html","4610afa154c38136d770f8800235e922"],["/posts/5dadd067.html","0d819d5d2052f99ea3f20d1ee6f9b1d9"],["/posts/5ff34642.html","a90a6efeca7707c1fc3f3baaa7a8bb1a"],["/posts/653abebf.html","aab49729f7e9931bb8411f0ee18f4fc8"],["/posts/681265c2.html","97a031f8988fdc2693be4b5a074ebdb0"],["/posts/6f44662f.html","ebef491943aab69624c9fe30ccc6f347"],["/posts/7207f70e.html","49de13eafcf9868c884bb5b24639c573"],["/posts/7289f891.html","b59102154d025379ec68f14a8c79c2ab"],["/posts/732e626.html","1528f6da3fc8ae89d3958bbea8f4c2b3"],["/posts/7e13cc3b.html","c80cddd02185c296b2b423d760835f8a"],["/posts/80a7ecce.html","4d30963c125bde1af2d2788dfc0b6ca6"],["/posts/821a4686.html","4b45b89e0e51473831fc6fce676e99a9"],["/posts/8a741756.html","bdcae066b006614f3e448b104367db87"],["/posts/918d46c1.html","2c0a3ab23243f6515cfaa2978c2c1684"],["/posts/93c8c0c7.html","e7ff538f9eadd623a56c922239593ff2"],["/posts/9f057e9a.html","47b422177c50530472d0fa1f80023680"],["/posts/a7d437fe.html","e37ccea3d0750674de9b6828bbb64cb6"],["/posts/ace4e4cd.html","977220b81f1e7f6a786aa13b0a2e7819"],["/posts/af30ddef.html","7fcc60aeeac5096388ec54c275f696e5"],["/posts/b1eb9c6d.html","0ad5941ef18ab6769c57005b7dbf6893"],["/posts/b564e922.html","1e297e7768a3734374b50a931177f6a7"],["/posts/bc9a4dc7.html","0fb348e88604364646df817c83b83afe"],["/posts/be543a11.html","3a7d347c7603745f192c8c732af18b3a"],["/posts/c9b871f1.html","d3bd29b4dd4b2f43fffdb3a614e1c062"],["/posts/d6ef11e5.html","78838babd31a0cf80318fb07bccfcba7"],["/posts/dcd6fdd1.html","b2afaefe406716830918249c014e6766"],["/posts/de24a124.html","0f1be769464410857ea129cb12580cc8"],["/posts/e32cbcd3.html","b1808df2c58b812262c2f42b93c34eff"],["/posts/eebbc69f.html","4cbdda09c02d6c5c59d7b41b67a2e01a"],["/posts/f08119d7.html","db753ded577a5cb163f3e35cf9ed8b76"],["/posts/f7f51423.html","b94affca1e88e9da1c293b8509344979"],["/posts/fd1a8f9f.html","c7e5d6fb16cb9100d8eaaf77caa58247"],["/service-worker.js","388f92f70f758420ec54ceaf54936660"],["/shuoshuo/index.html","fe638b47abddd9f26542bea736588717"],["/sw-register.js","724b6e9ac354df2dc175bd2f4bfc3070"],["/tags/index.html","f2774f1f147077c35c31604f6d070968"],["/tags/【每日早报】-2025-02-25 - 星期二.html","1c74b25b191c9bb568e5b9fb944f4cf2"],["/tags/养眼/index.html","24dcc72478f2f63c12f34d0f7f23b6c9"],["/tags/每日早报/index.html","d6b5c29b572b399f60391ec9720abd25"],["/tags/每日早报/page/2/index.html","9c44f00bb144b20c96765681a9072967"],["/tags/每日早报/page/3/index.html","cb5fed9b564fee997eea13d57644ed9e"],["/tags/第一篇/index.html","15745c805db453b9ade89561ccdcd441"],["/tags/网络/index.html","22503dddb118e2dd394e8b59338fcc7e"],["/tags/网络/page/2/index.html","19d0bf2ca10a4a7654301b7d9a6ece07"],["/template/index.html","24c0375293ec688dd28357a7788bbd93"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","df0bb464af2c2c71a09bb3158f22ede9"],["/Gallery/index.html","bf34db84c69a9a0582b2d113dbaf44b8"],["/about/index.html","873ead27f888b32bc97322da0872ef09"],["/archives/2022/08/index.html","51b4b5cabf2896ecf3a9248e6a1d522a"],["/archives/2022/09/index.html","6eef3f10c99f11227a04c11d95e2e6a8"],["/archives/2022/10/index.html","2c8ed45a4bf487c8ef2bb754f7c3f3b4"],["/archives/2022/index.html","83b8a7be059eab5c566c969cc583f023"],["/archives/2022/page/2/index.html","1fc63b33795f0a48655129688af4c85b"],["/archives/2025/02/index.html","4fc8c53c49ff55abc2939519d29e29aa"],["/archives/2025/02/page/2/index.html","1a40a62a4bc3f45e91902b425e19ec71"],["/archives/2025/03/index.html","3336b036b92fcc141dfabfecaa28d2d2"],["/archives/2025/03/page/2/index.html","e9b94be54d7c0a9aa6611b5c1cf2f150"],["/archives/2025/04/index.html","ee44237c957249a67d6bbbfe05ee72fa"],["/archives/2025/index.html","4b25ab60c35eb0808320eaa3d0e67df5"],["/archives/2025/page/2/index.html","55159e75f356961b97d3f815f1a739fa"],["/archives/2025/page/3/index.html","bdbc9dd99efda5bac7ad002977d75948"],["/archives/2025/page/4/index.html","8088ba544149bdc075067f745e3850ce"],["/archives/index.html","228dad8d50377b84c1eca3b946494674"],["/archives/page/2/index.html","62520c4442a75eec4c3ea82636c9e17e"],["/archives/page/3/index.html","faa3888aeb88cba5c482f89a63ac5ff7"],["/archives/page/4/index.html","ae9dd13c089794203c76da0a2ecfaf09"],["/archives/page/5/index.html","18e9277ffc871fa62f9201d9d8620b9e"],["/archives/page/6/index.html","3cd4c557b320320e1ddc3f8fbe1d30ab"],["/baidu_verify_codeva-J5b2WWChcR.html","7e6d973c9a3fa2717f4816a8ea98ad95"],["/baidu_verify_codeva-cwyza0ZFJb.html","c34360d6ba25d71fdfd1bfa950a178fe"],["/categories/index.html","e7ac192e084ee2f803e8069427f90f76"],["/categories/壁纸/index.html","6535d399c6630defc38dc100f31b6fa3"],["/categories/机网/index.html","fe35c4ab792096257f2b5214b61b0445"],["/categories/机网/page/2/index.html","9cb4c460d97cd9f98c41817f660bf7e5"],["/categories/每日早报/index.html","588f6e64d620ef258c1bf266052f1c51"],["/categories/每日早报/page/2/index.html","f60b5cc0d60e35528f50fbd28538cce9"],["/categories/每日早报/page/3/index.html","1a16530f4b7cbe88752466df944cb7a0"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","23c85ff0142d6ceda203bc9a0cb8b66b"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","9c69ff3f5ece01e34f3615116d4f9bc8"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","dcebeb2d37ae06b7d0ad595b3f47bd98"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","32fca0bb44c33eed6098194abd8062b7"],["/link/index.html","515cd1e3106fe0b04b55399c568bcf0c"],["/music/index.html","f2135b76c6db1b3517bab28be34fcc1f"],["/page/2/index.html","8aa9a868b92159a06e1949f581935831"],["/page/3/index.html","959b8b13ecd5cff64b3f97ee3be40c8b"],["/page/4/index.html","a4d7edbc118ac3fa9f9ff267140de7ca"],["/page/5/index.html","b8bedf52b54feb1c12b39bdeb353c465"],["/page/6/index.html","e1752f53d4c869a44933cc6145d6ddc2"],["/posts/12501d69.html","02f67f951b07098f9d5e66b9740507e8"],["/posts/1484043c.html","30d5525886efb68679cf6f2a88831b52"],["/posts/1b0c78b3.html","6c9e239f08b8412afb27d7641813fb3d"],["/posts/1b5b87.html","84783b1b521cbba9ad747f67f706e0b4"],["/posts/2134d9d1.html","1266cb91146b968afe1644a5f3b209df"],["/posts/28c755c.html","f94eca138d9904d6460615668fcfc3df"],["/posts/2f77f294.html","20c3efc7d7ecee85486252dad7fcfc3c"],["/posts/330d6f69.html","31c8dea6d6c6672885a9bf5cb8588be8"],["/posts/3b744803.html","1aa3b10f8a9a4b2bda6fb955b48a3afa"],["/posts/3da05156.html","06098dfefe1f3c7985fb14362b8937bd"],["/posts/3e91e0fa.html","e04acf86ea5ce0e43d0711b2d6dbfdae"],["/posts/41c2c0d2.html","cfffd2b6143ece21ab145e7c4fb0a055"],["/posts/46fc5adc.html","8f6a802ae2a38119f00d2783198ade78"],["/posts/493f6b85.html","f4f7c44f4984a2a977935d0d9c2a4a05"],["/posts/497e40e0.html","b7d4a3d66dacd38380267c8490f29bc7"],["/posts/4a17b156.html","953c6391be1f203021a195c4dd643a8b"],["/posts/4e2d7b19.html","51572f7c6ce868adb5ae4e4813c8268e"],["/posts/4f81eb97.html","e42126342af76b5044e932341383bacf"],["/posts/53721e0e.html","2819dd52f697a31af829fa6bdc83c6ab"],["/posts/5dadd067.html","68fe8efeb0bedc186279d53aea1e2995"],["/posts/5ff34642.html","7c920522493093e5518886c15e50f370"],["/posts/653abebf.html","4a7275f6d2c88acd9ff90dbb92ce713c"],["/posts/681265c2.html","e2c120b250d53519298cf31f73f87b3c"],["/posts/6f44662f.html","e93f47d5e39ca55f23c6afe4dc115bd3"],["/posts/7207f70e.html","ec7293f8e02ce70d10fa032465e71c0f"],["/posts/7289f891.html","7722c0665d5540fbed67c2017ea25710"],["/posts/732e626.html","a9c56c3842db21fc7185425fa90bed53"],["/posts/7c825231.html","b3962abce6ba086ad66dbc4696420d59"],["/posts/7e13cc3b.html","6551f63f9fdacaaee744d1e733038b75"],["/posts/80a7ecce.html","fbf6f46f1750febab2b6beaff903b64c"],["/posts/821a4686.html","eefeb758c12525f07abc211cacf44f0d"],["/posts/8a741756.html","db94680c445e22fd64748e519c8e9cf1"],["/posts/918d46c1.html","b7ec586ad8ebc2490ded369747cd7355"],["/posts/93c8c0c7.html","d944d53c283fac196f05849a14678fb2"],["/posts/9f057e9a.html","a9959364b1116ac45919057819868da1"],["/posts/a7d437fe.html","9166730877a113cbbfd205dd53865a46"],["/posts/ace4e4cd.html","b0b26e0bd8560eeb4106c2fd5a8bf15a"],["/posts/af30ddef.html","5997b9e5ba0ca4beac13d05e679e8fd2"],["/posts/b1eb9c6d.html","3edc883586924e925bd522069d887982"],["/posts/b564e922.html","a82427173194676758f7997068d3133a"],["/posts/bc9a4dc7.html","99a13a3e3b853bc10840d86b303f8693"],["/posts/be543a11.html","9eb807551689dccd64caee4d07809694"],["/posts/c9b871f1.html","91af19bb42f41b8c30bfe684af7c4ce8"],["/posts/d6ef11e5.html","5aed2654fdc6cfd83350e3c1d17fe173"],["/posts/dcd6fdd1.html","4367c177976e11cc92c19fc4f3110fc8"],["/posts/de24a124.html","4d9ccb6b791faf309f83710cddd06d39"],["/posts/e32cbcd3.html","a4d2696d166d12dcac0a86219d5d53b5"],["/posts/eebbc69f.html","31d985354eaffb304b6087c9fb86ee8f"],["/posts/f08119d7.html","d9c7934d0d15136ebd02efe0071058b2"],["/posts/f7f51423.html","6b5712f268721e3124987b42d2c36d51"],["/posts/fd1a8f9f.html","b27ff1a6648924ed82fc788eb4698269"],["/service-worker.js","77a46c7e689109321b7beeed9f876893"],["/shuoshuo/index.html","d9cfdf070c38a7612dd9e6da4e385393"],["/sw-register.js","4b774ce533242a9414f3c1a0d873d026"],["/tags/index.html","131e1fc88a5e1bcab87cda867d634fd5"],["/tags/【每日早报】-2025-02-25 - 星期二.html","dd35626512ac4b61976ce921007a36c4"],["/tags/养眼/index.html","d3be03109bdd895053f9ff9f75de5627"],["/tags/每日早报/index.html","1bb04dcb5cc103e948682029b73a29d3"],["/tags/每日早报/page/2/index.html","4284188f9fac0ebb969060ce0948d16b"],["/tags/每日早报/page/3/index.html","3a5b31bd3830796845d522ea7c318c1a"],["/tags/第一篇/index.html","ee660623f2562841a1e6182e2afa7448"],["/tags/网络/index.html","8557649ba9945b541e9b3df22eedf0cc"],["/tags/网络/page/2/index.html","3cdeca2efa9a7ef070560fa6ec22f100"],["/template/index.html","4114ba96ac9eab0dc395504137c4cd25"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

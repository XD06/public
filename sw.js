/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","dc9d70a6ad37df597d2545e66800520c"],["/Gallery/index.html","d7f0dbf645bde8ebc6b89c108014fbb6"],["/about/index.html","1773247bcf280f17ddbdc3fd18a37635"],["/archives/2022/08/index.html","6c90ab041c9811232174121a9c504680"],["/archives/2022/09/index.html","6547aa4c586f0929bd9d21de18e3d856"],["/archives/2022/10/index.html","817a18d237e5f823612499f60e934c32"],["/archives/2022/index.html","dc3631c71e0dac7f62e9d87848ad6d71"],["/archives/2022/page/2/index.html","6421998864863b6e392afe3871ab3484"],["/archives/2025/02/index.html","ec13e721387872f39ef4e0c55dbedec5"],["/archives/2025/02/page/2/index.html","5648207a3eca2c7cf52ccd08f50bc2a3"],["/archives/2025/03/index.html","5b1c9723061298d73c15e854a8e05720"],["/archives/2025/03/page/2/index.html","5cf0d372c498e2a7bb43c06a6c896364"],["/archives/2025/index.html","1437adfa9905a4164dc3b119a6bb0971"],["/archives/2025/page/2/index.html","783d568c75ac0bdabf740f6ff5ea0a8a"],["/archives/2025/page/3/index.html","6698d98fc09ad0bdac4b4102ed9c9136"],["/archives/index.html","15155a9bb1f8515a4e2bf937d4472919"],["/archives/page/2/index.html","9bdd6fd59ee29a4d4db8532130f98758"],["/archives/page/3/index.html","cd33eb64551fb512211cec22d895a5a8"],["/archives/page/4/index.html","485a4b2d11188f0b18355f3237cd27b3"],["/archives/page/5/index.html","8b374728bb356d1be1b5915cf7935742"],["/baidu_verify_codeva-J5b2WWChcR.html","eb84f2f4a805db298e26c181775f0757"],["/baidu_verify_codeva-cwyza0ZFJb.html","0ba34edf1b4dff580603ea6821f70184"],["/categories/index.html","922916eb4b43103695dc2aabc20710a0"],["/categories/壁纸/index.html","00461bed68be6d82284087b8a8e28391"],["/categories/机网/index.html","879790cb2ce76639f9cf1290709142b3"],["/categories/机网/page/2/index.html","1f9b1f56fe7619e43aafb9585de40310"],["/categories/每日早报/index.html","176d286c347538cdc9b125a2d6223180"],["/categories/每日早报/page/2/index.html","3a389dcc0c54680617a128b903a5ac34"],["/categories/每日早报/page/3/index.html","8cd50fefe9e4f0286d7042eef4da2929"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","87e31cbcb6fcdefada8fb70985b5210a"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","3d74be58ca94cd5e8e4baf7e71e75ddb"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","2ab394995f285f9f2215668c42ef96df"],["/link/index.html","96f5a8b4804f3fa520ca470c19cc82f5"],["/music/index.html","27fc702018b1054fd0214cd62ee27712"],["/page/2/index.html","9ecc8a7b6cf2bc7db0cbfd289a4249e8"],["/page/3/index.html","0de10fa8294b8d1a783dc3f5056a7cc6"],["/page/4/index.html","325a094a1e74296ea24af371aab2cf9b"],["/page/5/index.html","6d0d789e4cca1a5295c4f4fbaf6e2f4b"],["/posts/1b0c78b3.html","4f1ecdea0bc0b4d1c329bc26d8ce1ee3"],["/posts/1b5b87.html","d4f7c19cee33243411805af045d28508"],["/posts/28c755c.html","c45634735cb08a41333f798d5a814a08"],["/posts/330d6f69.html","1d40c406cd1276c51b24ce31fdea122a"],["/posts/3b744803.html","079557eef471ed53f73c3de2e4d42c86"],["/posts/3da05156.html","4fbafb527e48f667ca4e2c1b28ee515c"],["/posts/3e91e0fa.html","62ebef668b4d8563201f90e8837e6d0f"],["/posts/41c2c0d2.html","e1d98fcdc4eb01572193cba17d07f8c9"],["/posts/46fc5adc.html","32f329932f1e0ce2cc7f77d4e10cec34"],["/posts/493f6b85.html","aa0f8b2408348c13760fbe1c734a804f"],["/posts/497e40e0.html","d68fcc3c8190aef764596712c6e43190"],["/posts/4a17b156.html","24246f06a51cb4f53639eb45c12a599c"],["/posts/4e2d7b19.html","7e37d26e396f6d991689175a0f5252b7"],["/posts/4f81eb97.html","80a6bcd3a13f760574bf6cfda3a7c03c"],["/posts/53721e0e.html","f821a3a9e9e2295fc87ed9b004ad720c"],["/posts/5dadd067.html","739bd68eb4753b7a00d225bc6c9826f5"],["/posts/5ff34642.html","422a5787d50edc1452e9f54b6a0b091b"],["/posts/653abebf.html","d52571a4e3491371d4e07112178654c2"],["/posts/681265c2.html","c203f78044466c931d7a23fbd7f3d6d0"],["/posts/6f44662f.html","6fb382bcc5ffd876decf52594f800c9b"],["/posts/7207f70e.html","6c4615e043067008ad93005e4b712b9e"],["/posts/7289f891.html","4710eb6dad062b1ffbd8f799405cc041"],["/posts/732e626.html","962756d858c56199da8395868c4d2764"],["/posts/7e13cc3b.html","0e841de9140882624f7e90f23248cc52"],["/posts/80a7ecce.html","e8806c40f15c7a0bb753dceae762245f"],["/posts/821a4686.html","a9fb25caa716907fbf3ff57a1a38c69f"],["/posts/8a741756.html","43306fb3110633c4437813936100dc94"],["/posts/918d46c1.html","c9e63ae003031ce9017145d47cdd6803"],["/posts/9f057e9a.html","45c0a33814ccec77682b1ec728c4f0f2"],["/posts/a7d437fe.html","df77e78e31e5c19b1fa23774e82e5e81"],["/posts/ace4e4cd.html","59a07f65a0251f98a77852c4b3f012d4"],["/posts/af30ddef.html","c46d913245f17ba8439bf5a25439673c"],["/posts/b1eb9c6d.html","eccfd4bd5acb98421590d2902ac72ed3"],["/posts/b564e922.html","983c23c241ee517837bc354e3fe06e5f"],["/posts/bc9a4dc7.html","d40bee7ceb60bfc9a55fcea7280d952c"],["/posts/be543a11.html","d5ba0612cbadf01c3dec4ba14fbfa2b6"],["/posts/c9b871f1.html","1f356f64d90a2c7eecc5cfa916b56fbd"],["/posts/d6ef11e5.html","3f2de8684eeabe69b153158b9d249fa7"],["/posts/dcd6fdd1.html","c4e63d1d89fb23716c1dfdfecdafe00b"],["/posts/de24a124.html","c14a47467936ffbd6396e2f7ed50c9bf"],["/posts/e32cbcd3.html","8316ea5c8e1ef7112402928d015f5321"],["/posts/eebbc69f.html","51e7e22c1994e4febc77b8d5e46c5e7d"],["/posts/f08119d7.html","b71b35d11cac0f1ea2cc1708109a8763"],["/posts/f7f51423.html","249b7f08c0bf6f39b33b5ec1aa8c29be"],["/posts/fd1a8f9f.html","cb5bdb24c23befb3c1cba0336791e341"],["/service-worker.js","e5632c9a6cf37386d144bbff924f2fa5"],["/shuoshuo/index.html","46f13d2bd8203f614393b9ab4951741c"],["/sw-register.js","1003a4a0042de8f3d0c76aee904946af"],["/tags/index.html","9e68a84b61d8f5d20ab8645758944b0e"],["/tags/【每日早报】-2025-02-25 - 星期二.html","cba3945b138ab1e64b0bf2285d8b631b"],["/tags/养眼/index.html","ca0df5faa2bc5cacab347313d20e9e61"],["/tags/每日早报/index.html","db10a8800f336a934db0d537637ff822"],["/tags/每日早报/page/2/index.html","2e58b31c1953e5014bfd022b8fdadd4f"],["/tags/每日早报/page/3/index.html","76e089b7efc0652145ca42e7ec7fc632"],["/tags/第一篇/index.html","42b5e4ebbc123a3f32e2941a796365b8"],["/tags/网络/index.html","ccae24689035543049ec3cdc15f97e29"],["/tags/网络/page/2/index.html","d83cba7a79c47a8d49281f767385c6fc"],["/template/index.html","f7c436090e9798eea2f299a1aef44dcd"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","20ebc67440862b38b08e356a4ba149ca"],["/Gallery/index.html","1b684d09a575a8ec0e68e05f6c24bde8"],["/about/index.html","e3585b72fce4b79a0fda124cbb8589fb"],["/archives/2022/08/index.html","33e908d2c08ec5c6141b397d30dba2da"],["/archives/2022/09/index.html","c2169e646767e08eea7ed8379a581951"],["/archives/2022/10/index.html","8d7618365002ced93732f692fabe196a"],["/archives/2022/index.html","f468a47bbfec29982f7a27afd1d0e914"],["/archives/2022/page/2/index.html","0e1f713a56c706a81a2a959825b7b6c7"],["/archives/2025/02/index.html","c0bbec60135896b2270ec5876c7ee39f"],["/archives/2025/02/page/2/index.html","cbbd2be3edd24a6d68d21c29eb9d1f3e"],["/archives/2025/03/index.html","3edcd598baf71362b495bd4169f5e899"],["/archives/2025/03/page/2/index.html","5aca1a883ad15003660ff8b570fa42df"],["/archives/2025/04/index.html","22ae3af2307d86358b45c4451d52921a"],["/archives/2025/index.html","324965e799f3bb9e560f135558ab1245"],["/archives/2025/page/2/index.html","9942d63bf15478c87a62c9048e3749ef"],["/archives/2025/page/3/index.html","7c1182b16b41b511ca6d22d061a95c98"],["/archives/index.html","d2e2144a97b37685183bfe2addd70f43"],["/archives/page/2/index.html","0820b193a1eecc3a33a564900669516e"],["/archives/page/3/index.html","47be13327bed1370b58214d186b3b790"],["/archives/page/4/index.html","28182ca997368b0967d86dac05995e7b"],["/archives/page/5/index.html","d72714f0659a697b0b0c3b523f411e43"],["/baidu_verify_codeva-J5b2WWChcR.html","188fafa01162b8dc570849e724e5460f"],["/baidu_verify_codeva-cwyza0ZFJb.html","dc0ebff31a7747684f3eb84dd8c4602f"],["/categories/index.html","41ce06af9acd8c3a75223a41775f9f1a"],["/categories/壁纸/index.html","809cd4aaf7b72231a26ea9339a856b70"],["/categories/机网/index.html","aea63e411f68b2e166541e3df40c34cb"],["/categories/机网/page/2/index.html","53f58223fd5edbd873412c107e1729c2"],["/categories/每日早报/index.html","73949ec841619c21b730916a7d838caf"],["/categories/每日早报/page/2/index.html","7bc495122713a566dbb1aac79cb57215"],["/categories/每日早报/page/3/index.html","f05205a5f18ea4f84f48ca613207e203"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","7232aceb1f53ebbbb16827e4ecb88a0c"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/progress_bar.css","d910fa5f7c0cb483257d5b90e8df0d25"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","cd32b733560686b6ecd0cdea77614132"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","7ec329dfbcd4659e7e25cbbf42650fb5"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","22ea83ab7e0b0177a8c17a434b1b0c43"],["/link/index.html","556a46740f3599e67aeef81b8bea2f17"],["/music/index.html","05440ce4854ee9a5ff365fa8965358d7"],["/page/2/index.html","8df6d20e83cc711146bb29a41f3f5b3f"],["/page/3/index.html","74896b5e3031e1550824bc728cdaa3e1"],["/page/4/index.html","3abd2f581f668a9516eafb59378ad18e"],["/page/5/index.html","3b9d4e35aa0d5ae5c640446b4a3abd10"],["/posts/1b0c78b3.html","728496d17f0080abdd1b285af150b349"],["/posts/1b5b87.html","39468da9ff2681984c36604502583b18"],["/posts/2134d9d1.html","6e7af176145df5dc2a49ac9f88edc122"],["/posts/28c755c.html","d9d4790af851a27d8b8e3a196d4822c4"],["/posts/330d6f69.html","19695dde5b3061f775181c63850f8954"],["/posts/3b744803.html","d5031999f9d3ff7e313d09837e56cfdd"],["/posts/3da05156.html","16d362c0314a2d58ad181fbff804dde1"],["/posts/3e91e0fa.html","fd877e8fe705614520b9906bca959065"],["/posts/41c2c0d2.html","247992bb40ac5fdaeaf1ffb1a9986587"],["/posts/46fc5adc.html","41e38317b4bb236a617a9e54b2e73dd7"],["/posts/493f6b85.html","d1c81405daf993eea039254b22319f32"],["/posts/497e40e0.html","061bb043a05b931ce62d59a973f0bee8"],["/posts/4a17b156.html","9b96c1bd064fafa454b2aaa44780dca8"],["/posts/4e2d7b19.html","0ea6fa263520564adb3d8919ffbee2eb"],["/posts/4f81eb97.html","4d71612336292b09d4742c744d895814"],["/posts/53721e0e.html","8d9f37bb954896170c6b19a75f88ff13"],["/posts/5dadd067.html","0d819d5d2052f99ea3f20d1ee6f9b1d9"],["/posts/5ff34642.html","832d014e164fe1bd5f4ac55695d84d9d"],["/posts/653abebf.html","cbf1f18760ab8ed215310247a75ca186"],["/posts/681265c2.html","43bfcb33adecf6a9c70938207f28298f"],["/posts/6f44662f.html","ebef491943aab69624c9fe30ccc6f347"],["/posts/7207f70e.html","22fcb091f1530dd3e47d96d795befd4c"],["/posts/7289f891.html","b1ac05f7c7e92fca594a45e4aef66161"],["/posts/732e626.html","093070b4a3ad6d9f9201c872e7ff3f74"],["/posts/7e13cc3b.html","6d33a35b080adf713dcac37e28a241c2"],["/posts/80a7ecce.html","4d30963c125bde1af2d2788dfc0b6ca6"],["/posts/821a4686.html","5a943de946821ca8a6e0a35360c76c30"],["/posts/8a741756.html","3355ceafbd6ede148624e0dec40eccd6"],["/posts/918d46c1.html","2f416e0b7258cbe30d23b7282200b913"],["/posts/93c8c0c7.html","e7ff538f9eadd623a56c922239593ff2"],["/posts/9f057e9a.html","44fa7705586b4acfef8b25b0e594c557"],["/posts/a7d437fe.html","e37ccea3d0750674de9b6828bbb64cb6"],["/posts/ace4e4cd.html","a9e83657ab2d1fa19b5621d49c6d5c5b"],["/posts/af30ddef.html","7fcc60aeeac5096388ec54c275f696e5"],["/posts/b1eb9c6d.html","959450b5943846ae3aa76905939306ad"],["/posts/b564e922.html","1e297e7768a3734374b50a931177f6a7"],["/posts/bc9a4dc7.html","d144b604d0578a914c64f9af08ccea45"],["/posts/be543a11.html","d39e91de61467e88d71987129cbd195f"],["/posts/c9b871f1.html","2aa2be802ef7af7b9c29306e1bbe1802"],["/posts/d6ef11e5.html","d9baa03a8d599131f9c9767dc7f180e5"],["/posts/dcd6fdd1.html","fc97111025cd07c4aa98676d601eb7f1"],["/posts/de24a124.html","1fd78aabe130b6dacf12c5dcd016dc9c"],["/posts/e32cbcd3.html","b1808df2c58b812262c2f42b93c34eff"],["/posts/eebbc69f.html","4cbdda09c02d6c5c59d7b41b67a2e01a"],["/posts/f08119d7.html","15e58b51bd08df470fa0d40c0a9b06a1"],["/posts/f7f51423.html","fb2abde93f58f7c0c2534adc86946bd7"],["/posts/fd1a8f9f.html","c7e5d6fb16cb9100d8eaaf77caa58247"],["/service-worker.js","44ef77ef5bfb84380e7fa24860ca97dd"],["/shuoshuo/index.html","da02b36fecb73b6575853b0dd1f83ae4"],["/sw-register.js","f0132bf44900224ab7adb3ff9190b3ab"],["/tags/index.html","f82d8fd791f292131710008949422412"],["/tags/【每日早报】-2025-02-25 - 星期二.html","7971fd5c5c918a14cc83dd55e3165d0f"],["/tags/养眼/index.html","2a926cbd25a1f9998fba0c16ff4dfab6"],["/tags/每日早报/index.html","3c20fa861475b4f149e79468a5a93275"],["/tags/每日早报/page/2/index.html","82e505320e0c195e52c6f7a018ecc805"],["/tags/每日早报/page/3/index.html","aeca3d53e54d655e612e7d2023302735"],["/tags/第一篇/index.html","a5062e59fdd4d8a4c915bc2f6989fc0b"],["/tags/网络/index.html","8a4cb0726229fdbbc4a444d7d2c2a95f"],["/tags/网络/page/2/index.html","8279611748dc61fe627dc283c4249cf7"],["/template/index.html","c890bc00f307c8513f463f7ae682de01"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

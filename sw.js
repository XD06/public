/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","34981ffd0e242cf0e26f3b98e783da95"],["/Gallery/index.html","74ad477defd6650e298c7909ce04cc55"],["/about/index.html","d0b1fb61afaa662aea9261bfa5fe630f"],["/archives/2022/08/index.html","d7001102ae3a21dbb63864e8a70e4e79"],["/archives/2022/09/index.html","b3dc867aff35e2b8380632c3007bd926"],["/archives/2022/10/index.html","3523c2cfc34df0b04150fe9d1879259e"],["/archives/2022/index.html","3e31c13f2eb998e6d143e231461d472d"],["/archives/2022/page/2/index.html","513746cf2fdf347fded8448b80d27467"],["/archives/2025/02/index.html","ce93264afd8496d9ce895fc3f5256a32"],["/archives/2025/02/page/2/index.html","9066563fdadad7fb51f45010d77ec83b"],["/archives/2025/03/index.html","489b7c4aec8ec0a8e6dc513358f77296"],["/archives/2025/03/page/2/index.html","67bdf4ce11e886afb4e8ba5d2bbb16fc"],["/archives/2025/index.html","c1cb2291fec22014007f2eeeac2ac7fe"],["/archives/2025/page/2/index.html","ed30839ca5e044b7b07bb8dc94da32b3"],["/archives/2025/page/3/index.html","65c6c762d7c54892420ea6e2066fd7e9"],["/archives/index.html","885b676d9e245bcbb94d59c02b630a5e"],["/archives/page/2/index.html","37a14694239abca50dba6c71b6350a4d"],["/archives/page/3/index.html","caa0fd940baa7208e44c6a5ef38d6295"],["/archives/page/4/index.html","3fe09eba51832be3d98c097fd54b17c1"],["/archives/page/5/index.html","017679a9e2bc3b6fdc5497c7554fa915"],["/baidu_verify_codeva-J5b2WWChcR.html","37a1c3390bf959d4da8f48f1560dc635"],["/baidu_verify_codeva-cwyza0ZFJb.html","3143f3ed7eee46dcf888a3d0e80aeeac"],["/categories/index.html","f4269c1e322d2d09d84e7118564762c0"],["/categories/壁纸/index.html","e4daaaa45ea5f327032cb7c2baaf2cd9"],["/categories/机网/index.html","0375afcd50f52bab0dbb8bd38887c6ef"],["/categories/机网/page/2/index.html","5f48447544f481cde2d91eaaee313caa"],["/categories/每日早报/index.html","bb65b2f52d2c3f455f3a0a4a74e47c7d"],["/categories/每日早报/page/2/index.html","18a2b13d82ced71787600b1be3a1bffb"],["/categories/每日早报/page/3/index.html","9743f0b6dea8a5fdabdf964af2016d98"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","673bed8370a0db412e4ef40885b6e9d4"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","9adc2e7648690f734eb780e225f37c23"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","1f42394e95dc395f322971a31efec2ba"],["/link/index.html","24c38eb3386ae156ae46ea28a9792994"],["/music/index.html","8bf7c318d38473f4f0201e884ab3cc9b"],["/page/2/index.html","f1aab0a6ca0d8203e1d4dedf70121e39"],["/page/3/index.html","168e6a909169c5099696b5ce52b71e3b"],["/page/4/index.html","78082d745247ea6d4265d406f5193aa0"],["/page/5/index.html","164944e9b1ffe7d84d44eb5df5b348f5"],["/posts/1b0c78b3.html","8c247c72ff60794673b2b16535378fa3"],["/posts/1b5b87.html","854e45acf37cb4babdd513e97a3691ce"],["/posts/28c755c.html","b130426fb1644833429a80cf0d44a411"],["/posts/330d6f69.html","19292cd5d939ce4f49a5a77159c4ef73"],["/posts/3b744803.html","458ffac6bfe216b83ecf7e42f8befab3"],["/posts/3da05156.html","afb3375ccf14a1820647fc0edb49a07c"],["/posts/3e91e0fa.html","c92ee2dff37be17cbbfd6195d4731472"],["/posts/41c2c0d2.html","72fa739a44215bb55661a68395b5ddab"],["/posts/46fc5adc.html","528f15d806c19391237a68277589fdf6"],["/posts/493f6b85.html","241765bb81d3700a2e558140089bf2bc"],["/posts/497e40e0.html","6bca7a2acf75a306d45330690e3ac3ae"],["/posts/4a17b156.html","359ffedd40a5efad8183abac78b57b09"],["/posts/4e2d7b19.html","18e6b0bb128bab4d1c74b4144cc317e9"],["/posts/4f81eb97.html","23f0b9cbfd1317bea38719b8dd5ccc51"],["/posts/53721e0e.html","43a2d1f639ecaa97eb544bfc03393596"],["/posts/5dadd067.html","a38067273c71c49db082e4b396879f00"],["/posts/5ff34642.html","e583226ce823521be3d5d210c9de0e16"],["/posts/653abebf.html","b3a151980616ea8d3d253270de94e274"],["/posts/681265c2.html","18c3e2bb0f03ceadb67d7729a84b9896"],["/posts/6f44662f.html","329e2825b7d7f2b4d42e90361f6e6534"],["/posts/7207f70e.html","d751a0bbbfa0d83a0e70d67194db0d97"],["/posts/7289f891.html","266147285ccbe2a8572b0c89d8a66507"],["/posts/732e626.html","ad920b8e1a2c37005f9851208d375562"],["/posts/7e13cc3b.html","84be328b696485238bc4463b005c6790"],["/posts/80a7ecce.html","13549d1390da1e5c1db2e0c192cb657a"],["/posts/821a4686.html","31ad6554f3dad8fe59a620f82603ff3f"],["/posts/8a741756.html","fcfd1bf2a9de8debca39e91482ee2b3f"],["/posts/918d46c1.html","5820a72e006d15aeb4580e0da84eb6c1"],["/posts/9f057e9a.html","00e092d9d1a5cbe03a7cf8c393ba0f0b"],["/posts/a7d437fe.html","5f074184b6d3f440c1b5d24c82cbcae1"],["/posts/ace4e4cd.html","a297a86a22e5f6007d11ec665a57f667"],["/posts/af30ddef.html","dfd363ae12cddeb935d6bb668dce7480"],["/posts/b1eb9c6d.html","c119310d400d98b04d4924a02b23bdd4"],["/posts/b564e922.html","7b3ba2c4e5a2890a1be33ff9db3483e1"],["/posts/bc9a4dc7.html","1fbfe261933c4f25eb7cad36285c3c86"],["/posts/be543a11.html","e9d03718d2dc7e9f2f71c230c48556fa"],["/posts/c9b871f1.html","8d4940a704cd8667349d72d6612aebdd"],["/posts/d6ef11e5.html","1443a9150cbaba8bd2ddd43b5506f024"],["/posts/dcd6fdd1.html","4d74abddb139a3266992373924eff2ef"],["/posts/de24a124.html","f04b06d12f898a2add75d87b7c86aa5e"],["/posts/e32cbcd3.html","a1a33b35566b694f6d76f0d14efc9911"],["/posts/eebbc69f.html","6ef30f3b4dca73ff8c55cd5dc848411f"],["/posts/f08119d7.html","e5445c2975fe6a300fa910b6d65219cd"],["/posts/f7f51423.html","431b7f9b054d87625da0b82364b2066f"],["/posts/fd1a8f9f.html","e0073326b7b556c796c106c550ba86e1"],["/service-worker.js","a73b7d69446f1cff54db4bf51fbe7a25"],["/shuoshuo/index.html","ab2e001fb402011259bd1ee8b499db58"],["/sw-register.js","f46de4a233d35e8b4e6b15adb9032aa0"],["/tags/index.html","9750e0167197ba1512cb12d7243c1ca1"],["/tags/【每日早报】-2025-02-25 - 星期二.html","721fad0c0eff5a00ab140a96cfa5346a"],["/tags/养眼/index.html","719247b1cf22c58e80067c861b2e1424"],["/tags/每日早报/index.html","1009dbe159ec58e76d17e6840ed1d4ac"],["/tags/每日早报/page/2/index.html","0e23d0d092301d1b39fe69cc7b2d5c1c"],["/tags/每日早报/page/3/index.html","8635d67c26e16cf81b60ed087785107f"],["/tags/第一篇/index.html","296342127fd08eaf88dc8d1c4ee9c450"],["/tags/网络/index.html","0b98abc6044908b65af9ae4e5f43b5f3"],["/tags/网络/page/2/index.html","f70a32c2c338fa87dddedcf0b18f2bc9"],["/template/index.html","61cd4da06cb3fd6c05d50889113e627d"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

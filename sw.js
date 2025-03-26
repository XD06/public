/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a5ed590b847e220ec4e95ce33aa1b79f"],["/Gallery/index.html","ccc333b853c4c974f8a2361f2c83917f"],["/about/index.html","0dd4413fb84bb8cb6930d587364716ef"],["/archives/2022/08/index.html","e42ae61e0498ba5b2d9ee6f7f4c49d15"],["/archives/2022/08/page/2/index.html","cf3d804d40435c61e39008b4ef9d1953"],["/archives/2022/09/index.html","9d7e05823ea78dfc10ee9706d1f730f0"],["/archives/2022/10/index.html","f288bea430bfd791443c1ca5d584e7fd"],["/archives/2022/index.html","92ef54b85a7e02903dfd3d681ba1e757"],["/archives/2022/page/2/index.html","bd1459c5f61f07f08e2a7b2d0ae0a74c"],["/archives/2025/02/index.html","4291506359b3ffba889efd2624f32003"],["/archives/2025/03/index.html","63c157fdbc4d29575a3b4d6cfe8b664d"],["/archives/2025/03/page/2/index.html","bfafd7e4ff242492609fd0d0d3fd1820"],["/archives/2025/index.html","ce7b6e841b145ddaec36a011185a7010"],["/archives/2025/page/2/index.html","a8cb1af566907c316e809ff38c50b81d"],["/archives/2025/page/3/index.html","a0b7b3e3f99de150ee2473570c167071"],["/archives/index.html","3056373981337ce14e207a56c5a461f2"],["/archives/page/2/index.html","877b5d9768307adff7a09ee1c19c4ae1"],["/archives/page/3/index.html","bbcdf13b281a257f9320016f6882ca07"],["/archives/page/4/index.html","af6d72ec6d0424000a4842a00637508a"],["/archives/page/5/index.html","50d94072b727cdd45a78d063097e37e5"],["/baidu_verify_codeva-J5b2WWChcR.html","15424a87935cd3cccebb8bcc90ccd4b9"],["/baidu_verify_codeva-cwyza0ZFJb.html","be58e300902851de489bd00c3358121e"],["/categories/index.html","b8fdf99e80da8ce4ef54450d62ee97c5"],["/categories/壁纸/index.html","16ff7aacb3eea24749e72e859c7121f2"],["/categories/机网/index.html","36e0934502eb76317f430f4de505f834"],["/categories/机网/page/2/index.html","f8c37a01cf51a0dedc3f00a59b1f03ad"],["/categories/每日早报/index.html","ae5dd9aa17222e7e6790f1fe46c5ef42"],["/categories/每日早报/page/2/index.html","f909128e419aa11e79bc0c02bd6aad44"],["/categories/每日早报/page/3/index.html","0ddc8fefc0bc7e3f2d96ae6f74536967"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","0f917ac52224e2d36b5d93fb66570cb1"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepseek.html","a3707deda12bbdabbf4547d912cb47b6"],["/description/index.html","18c0e422a753c85216f599f3fb46088b"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","2bd105952bd755fb1007b5205e086a6b"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","a9322920eb3f58fc59214f770464bcf9"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","b437b11ed347c3cfa922d6a900638b74"],["/link/index.html","857a884c5f80f1e988b5c18480866d5c"],["/music/index.html","14c168b613164dbbdc332de49e4bd592"],["/page/2/index.html","9d7ccd051cfb469540126756aa5a322e"],["/page/3/index.html","b619bf020a2a21902091164bf95a1176"],["/page/4/index.html","1975e24bb3161ca8e41d2a153fe3ea21"],["/page/5/index.html","b05a7c5aa1d4bc0f3ff248ceaa9ea62c"],["/shuoshuo/index.html","7d9fb09e8336231ecca29839bc979fdc"],["/sw-register.js","4b93b81041766125e8bf67ce0d1f5fa3"],["/tags/index.html","0d5085e7dcc603764287565f01c25c62"],["/tags/【每日早报】-2025-02-25 - 星期二.html","83d81809565cd5ef6d140842c3f0d4eb"],["/tags/养眼/index.html","971519e4e1b442d3d858248496f448cd"],["/tags/日常/index.html","6fc3082973a53ed350a7b4ec3251f434"],["/tags/每日早报/index.html","05dabfb7c8e12e301f6e4d146a5b4b3d"],["/tags/每日早报/page/2/index.html","d053faa1949e1764a39bffa884e506e1"],["/tags/每日早报/page/3/index.html","046531fe380914f2b789dc32faed8dcb"],["/tags/第一篇/index.html","c551df5019a37762f99a25a245b174ec"],["/tags/网络/index.html","fc0bc003e6fc49ced09ce240ca7b1902"],["/tags/网络/page/2/index.html","e68b9f6245662f7cf8e109b6394de396"],["/template/index.html","7366df476cf623f8d131aa1c45e864b4"],["/temple.html","fdc30ef11030ab8a04fa1df86b2de62b"],["/test-post.html","6c7c81d323b4bc517dd6b41f45ff6429"],["/webhook.html","f58d576c36c8e766dc02a649140ab9c7"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/【每日早报】-2025-02-19 - 星期三.html","5765d9c9564d7f959d1624aaac8a8ac3"],["/【每日早报】-2025-02-21 - 星期五.html","04d5579e18abb108471184e005693bd7"],["/【每日早报】-2025-02-22 - 星期六.html","cfff23c8f10ba0197176514705c96032"],["/【每日早报】-2025-02-24 - 星期一.html","d6d575d0511797d5e0bf2656fe141206"],["/【每日早报】-2025-02-25 - 星期二.html","4bd07581cb527bce50bce3f89661347b"],["/【每日早报】-2025-02-26 - 星期三.html","12ca62bc0c1ff852e8a6ed5c380c7613"],["/【每日早报】-2025-02-27 - 星期四.html","949c8825132ac080eeee51bc1d4ff3d0"],["/【每日早报】-2025-02-28 - 星期五.html","4e96502eb728ffc1e60c9e0364a83b30"],["/【每日早报】-2025-03-01 - 星期六.html","93a1783546e6398f79fe55f28653f3fb"],["/【每日早报】-2025-03-02 - 星期日.html","1edc438b4887e48dd98397fcc3ebde32"],["/【每日早报】-2025-03-06 - 星期四.html","cdf3a16aafd23c4a3bd285790b40ce12"],["/【每日早报】-2025-03-07 - 星期五.html","670d7add9db2ec5378e6e49a67594f46"],["/【每日早报】-2025-03-08 - 星期六.html","384aa0d35d45435e100bd1a4f761385f"],["/【每日早报】-2025-03-10 - 星期一.html","16303a557161fc569905bb7ae4118d8e"],["/【每日早报】-2025-03-11 - 星期二.html","0370195b38ab1c2d2682c9a301d2fe41"],["/【每日早报】-2025-03-12 - 星期三.html","bb9e4e9c4354f3ae29e3f07f814a8276"],["/【每日早报】-2025-03-14 - 星期五.html","dff72eba99dd5ba215376b8902ab68cc"],["/【每日早报】-2025-03-16 - 星期日.html","39c5190a58b9db3de368a2d1f07a7aeb"],["/【每日早报】-2025-03-20 - 星期四.html","cc5db2e655d37a7f4297cd1ab0db116f"],["/【每日早报】-2025-03-24 - 星期一.html","9d299499456fd19eeafcbc2affe74308"],["/【每日早报】-2025-03-25 - 星期二.html","05e6521057aaa97b15ceacd8c02643ef"],["/【每日早报】-2025-03-26 - 星期三.html","7c81a948d004f8c428c3290725bcc33e"],["/分享壁纸(一).html","952db21f106c86b8b10245f98b026780"],["/分享壁纸(三).html","2abf5fda5386807401cd4d452ce79f4d"],["/分享壁纸(二).html","845871d52843958688b476b6e0f3ed99"],["/又是一个不眠之夜.html","f5be29e2715e420577a37451051e95b1"],["/咒术回战.html","63656ae082a672c180df17f97277dd8f"],["/开端.html","87c1483b55b42148b5f36f457456dacb"],["/计算机网络-数据链路(一)8-30.html","3acab6f4f3a9e87145004fdc78822af8"],["/计算机网络-数据链路(三).html","c1c637bb9be0cc684ac1100411fcf354"],["/计算机网络-数据链路(二)8-31.html","ec988f30def87e7e7cedfd816886ed67"],["/计算机网络-数据链路(五).html","6a001f8349f3d0a0426de699cab8938c"],["/计算机网络-数据链路(六).html","ade5eff82a5fa8269a3f6db77ad0d63c"],["/计算机网络-数据链路(四).html","062621b267b81d038a3793e9373d3138"],["/计算机网络-数据链路层(七)9-5.html","aac1aaa15d5beca463c8356dfcddd7ec"],["/计算机网络-物理层(一)8-28.html","e04d2a58b747a55cc4c92d73679b37a4"],["/计算机网络-物理层(二)8-29.html","919c65e6df274aba8f3f393d20954fa4"],["/计算机网络-网络层(一)9-6.html","24c024130e2c72254c116c0e7f69b2a5"],["/计算机网络体系分层思想(8-27).html","ee88cf5287d53d74909e3a5301dc3a8b"],["/计算机网络性能和体系结构（8.26）.html","644930d9346447a92fbc0b070ddcb458"]];
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

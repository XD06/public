/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b541e269d763651d70304db8656ff67c"],["/Gallery/index.html","5d63dfaf0d076f6175f92b48dc9e08d3"],["/about/index.html","3e5ee8aac10b9ea48f51552e6def4769"],["/archives/2022/08/index.html","c89c435f637534940a1003122e6ab01f"],["/archives/2022/08/page/2/index.html","b86a8f7d00c32b619dc944eff60fd73f"],["/archives/2022/09/index.html","cb413b0a7605dca246123254ef42e7a5"],["/archives/2022/10/index.html","c9dd32a55510fdcca0fdd0af078ba2c2"],["/archives/2022/index.html","aba720ca2a0cfe28a0d21810bb890217"],["/archives/2022/page/2/index.html","1633a4b0599682a00f71f65867c255a9"],["/archives/2025/02/index.html","196b3bdf2916de25f5b7caba253e927e"],["/archives/2025/03/index.html","488f1d4b296156bf2dab37bd3eb2d0ab"],["/archives/2025/index.html","5bea95d46fc8d2f4cbb6cf79e951bf50"],["/archives/2025/page/2/index.html","0e899367bb4071a9fc3672fe6094e167"],["/archives/index.html","ba1820c06b4c965284ccc5d51d92ca48"],["/archives/page/2/index.html","a31f3c18f4cb4dab8cdc840bc13336ec"],["/archives/page/3/index.html","3283c419562681793f0dde06d805369b"],["/archives/page/4/index.html","058a9c20d6a11399da94e76f633c6a60"],["/categories/index.html","0577dc5a97acfbf65f2872eb1e184e29"],["/categories/壁纸/index.html","0d1d2a8d07ba9c3ffd74dfa97e5f815b"],["/categories/机网/index.html","363c86bf7710da77cad9cb06bd432cde"],["/categories/机网/page/2/index.html","88c1e48be0b5da95ce8ea02d1f6cb815"],["/categories/每日早报/index.html","04b1598f2ee6dbc358b222284b4e7cd0"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","428fd7f7c8d276eb88b760be488d2659"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","89916b7fbd573b4ecb8365732d8aefa2"],["/fonts/FangSong.ttf","6c2c6cb9a9d43dcd8d64544ee821a9c0"],["/fonts/Hei.ttf","1247ceac203ab8dd2f94168f60bb6fb8"],["/fonts/kaiti.ttf","c1f3ac5d0e48120a8906a93fdc82e12f"],["/hello-world.html","dd3ba36f5af3b0f68871190eab8d56a7"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","3753464788d3c3c6e747c8ba0f237130"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/keywords/index.html","f38709387c262af85a9d7f3ea932fa64"],["/link/index.html","4d1406a541c8623e3d9922cbcec0d007"],["/music/index.html","1bb772222bbc76e54cb8c059051169f9"],["/page/2/index.html","450ecf06ecb64e1e0bda94c76d610b00"],["/page/3/index.html","f5bf9f2ae3721eba877522f500d1196d"],["/page/4/index.html","477022405c23c37886d46f32f076aeac"],["/shuoshuo/index.html","424498ac1fd7fd99dacfa8ec19dfff1e"],["/sw-register.js","93f21be2a41332930c9cee1d83825d37"],["/tags/index.html","e52fe79006fc74a1c74033eded09ef23"],["/tags/【每日早报】-2025-02-25 - 星期二.html","df27c938e5466efbbbc339a8a0be499c"],["/tags/养眼/index.html","cad66a43a487ffbd8ecfc095297c7ca2"],["/tags/日常/index.html","872c4b688a4ab716f50e3637fa6ac961"],["/tags/每日早报/index.html","13d037e98862769131ff96eddd47ff5f"],["/tags/第一篇/index.html","3478170aead08d5bd02619188e9a017f"],["/tags/网络/index.html","25436930234a55877f7c009a86b95d2f"],["/tags/网络/page/2/index.html","98f8517d6f72853ae565a2a0fbf70462"],["/template/index.html","fc007c6af1de7570d4543ffe179f8409"],["/test-post.html","a9c28827486c1f815655f1cf7d61d8d4"],["/test.html","b9702f1a823ecd99fc84aca129f02a61"],["/webhook.html","004d42ad0e7d57551869bff048e54b58"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/【每日早报】-2025-02-19 - 星期三.html","4ab958205abdc09131dbceb14d22defc"],["/【每日早报】-2025-02-21 - 星期五.html","ff5c5d3144e29cbfde950001c47915de"],["/【每日早报】-2025-02-22 - 星期六.html","bc12b776bb88d0a526de3d678bfa6d42"],["/【每日早报】-2025-02-24 - 星期一.html","cda11a652200b834525e6e11fb7462a3"],["/【每日早报】-2025-02-25 - 星期二.html","425a67458c4fa84979903846c041912c"],["/【每日早报】-2025-02-26 - 星期三.html","d003060bce90d8ba7f2ab75c20bd21d7"],["/【每日早报】-2025-02-27 - 星期四.html","9a80f01437bc2ba71fdea20751df324c"],["/【每日早报】-2025-02-28 - 星期五.html","0118479420d0a6634bf39af04ea47f4f"],["/【每日早报】-2025-03-01 - 星期六.html","c6a38f52f995dfec21dc832b138d4413"],["/分享壁纸(一).html","7efc7502ce0bc1596c99b52b8c9871c9"],["/分享壁纸(三).html","bd8c1b4eaa06d4e84d263704932e22ff"],["/分享壁纸(二).html","9f4a46607131b2a08cfa1abb480ff0b3"],["/又是一个不眠之夜.html","89aa97af3221cb726c3ec4d1a220d1d2"],["/咒术回战.html","fde1caa9afde0f113137067e38bf77f6"],["/开端.html","943eaea42091a50d068feb8798f5b804"],["/白桃露露.html","bcecc7a50be84563ee0d28a953255bef"],["/示例.html","d77adfa444c601f954a64a89ede22975"],["/计算机网络-数据链路(一)8-30.html","d843c96347ab09a44e4bee049f881d7b"],["/计算机网络-数据链路(三).html","7eb228220b5e98d6efe98919d2e12065"],["/计算机网络-数据链路(二)8-31.html","54649d520f56fed11f7df56c8eb2ccad"],["/计算机网络-数据链路(五).html","fdcca8122220ddb1939b609bae666c0f"],["/计算机网络-数据链路(六).html","5dc6340b810c53a0da724b1146d80ff3"],["/计算机网络-数据链路(四).html","ae863e8161c42d5860bd704b8aec74de"],["/计算机网络-数据链路层(七)9-5.html","768cbabed767ce86e42c26e7b020a650"],["/计算机网络-物理层(一)8-28.html","1f42d1bc5f2ecbd0a10b03a7983f22d2"],["/计算机网络-物理层(二)8-29.html","5b167ddb66b7fe1b2309015d0ff18385"],["/计算机网络-网络层(一)9-6.html","b2d01895ac46fb5884c023b04644be2d"],["/计算机网络体系分层思想(8-27).html","cae7e474e39f56363b34360ba50dfd04"],["/计算机网络性能和体系结构（8.26）.html","8e3bb05813ff9a63f596fab11ce4ddbf"]];
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

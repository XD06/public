/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a761039b478fe1170996c18fe53e9d49"],["/Gallery/index.html","d630d5799cea629e33035d08b398dbd0"],["/about/index.html","f2b0b1060180ead9e89dcc9c0feacfd7"],["/archives/2022/08/index.html","f2c527d6299afb6c4d2888e04f193814"],["/archives/2022/08/page/2/index.html","cb92d2530db293dff2cd06f49aa418e7"],["/archives/2022/09/index.html","4f83731cc698638d321742ad39e8aa70"],["/archives/2022/10/index.html","fed481e7a36c88b19d110bbd5647c655"],["/archives/2022/index.html","5da3f827fe053f5decaee8c7254146f9"],["/archives/2022/page/2/index.html","6188ee9e64c2bfb1e769260c18f0deae"],["/archives/2025/02/index.html","1170c356a1d57cf6982f68158e6e955d"],["/archives/2025/03/index.html","65a752acf614aff94081ac003afcdc83"],["/archives/2025/index.html","e0587d34e0d96207a477b4fa95f93fc9"],["/archives/2025/page/2/index.html","bcf2a23b95703f2988ea00cd92672c93"],["/archives/index.html","5c5a0d93ded9c58ff3c08026b0c9af4d"],["/archives/page/2/index.html","ee2650f39d47ec75f2dcd7e99292e7d2"],["/archives/page/3/index.html","930f5ba0d4119abdc8b7a44a66ccb04a"],["/archives/page/4/index.html","ab5e10538144746081934536d8aea580"],["/categories/index.html","3420d22ab013699c604d954585a68dc5"],["/categories/壁纸/index.html","92deae413954aeae3326e702a118ad9d"],["/categories/机网/index.html","9c8ad48ceab7db516e76e11bbe890e45"],["/categories/机网/page/2/index.html","5834eba892dfcc9057eaf654c8918e5b"],["/categories/每日早报/index.html","601b17cf0fa9502f404278c8cd0355e8"],["/categories/每日早报/page/2/index.html","08966537be16ca4c4f67af13be8c3776"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","428fd7f7c8d276eb88b760be488d2659"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","f7fff862ae5391a1f66f18cead3ed312"],["/fonts/FangSong.ttf","6c2c6cb9a9d43dcd8d64544ee821a9c0"],["/fonts/Hei.ttf","1247ceac203ab8dd2f94168f60bb6fb8"],["/fonts/kaiti.ttf","c1f3ac5d0e48120a8906a93fdc82e12f"],["/hello-world.html","3ccbbe74bef23683bf9bfda94405dda5"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","06b364b077c806d9d39e634dfb92e817"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","3e7eda3039e38c0242da7e6fd45ecacc"],["/link/index.html","9be342bcde02be75e53569df8b11e727"],["/music/index.html","8cfa31bab0fbf3a84258955500374583"],["/page/2/index.html","e7d0cd089c75f05d03019f23e08438a8"],["/page/3/index.html","47489937fb44fc550e4df83a60882314"],["/page/4/index.html","2c88864a6cce189c5817cbb4c4bf8113"],["/service-worker.js","01c60463dd62a22c950200335c76612f"],["/shuoshuo/index.html","2422067de7c5862edf1876a66eeebd88"],["/sw-register.js","2bba744d1aefdcd038da5837342c7c60"],["/tags/index.html","bc4d154fe3d76a1ce67b6df7b82a351f"],["/tags/【每日早报】-2025-02-25 - 星期二.html","2807c83b704dc5b99a5a0bc0e0362d3d"],["/tags/养眼/index.html","de5d840fb627bf478bf80ac503b030cc"],["/tags/日常/index.html","36f945e38a30ea9900be62392dd8ca36"],["/tags/每日早报/index.html","26dfcc5d10291ff41924c05914f16c01"],["/tags/每日早报/page/2/index.html","87495fe5204e30054bc66dac8558b466"],["/tags/第一篇/index.html","c0f86b3fb8e6c28d107e54004bdd7182"],["/tags/网络/index.html","d3e1f140ceac54f966ddbab58b0255c6"],["/tags/网络/page/2/index.html","5f717ef62c920a5e36e74aa1306d1e26"],["/template/index.html","3fec48984fb6c3dcb71fae3a529bd7cd"],["/test-post.html","f9d8fbc94f32a768d8b34f18640177f3"],["/test.html","00291c7177f0d813220615259a326f5c"],["/webhook.html","b1545354e79ceceb8a6df1047c9a4fc5"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","16b8b26ed0ec017a2ac93c0d2093a1a6"],["/【每日早报】-2025-02-21 - 星期五.html","78b03550d3208f809fa8bce33c4265e5"],["/【每日早报】-2025-02-22 - 星期六.html","e566d8cd74154c62748bd15e7fda6616"],["/【每日早报】-2025-02-24 - 星期一.html","90f380098263471de60bffac99cf8b68"],["/【每日早报】-2025-02-25 - 星期二.html","e146f981889e77064fcda6780bdc55a6"],["/【每日早报】-2025-02-26 - 星期三.html","9b1e269e0cb41d710b8edf338655ac42"],["/【每日早报】-2025-02-27 - 星期四.html","aadf0f4363deeb7344e2a12ff2f4c3bb"],["/【每日早报】-2025-02-28 - 星期五.html","cb86f8e6361b78881d9f4dfb83d9014c"],["/【每日早报】-2025-03-01 - 星期六.html","5bbdd7fee0763ff623fd2c8e720fbe0f"],["/【每日早报】-2025-03-02 - 星期日.html","80a7fc38bd5a2748abb592ce242c8d89"],["/【每日早报】-2025-03-06 - 星期四.html","c4331c0f79c98b17d6fb80138ef32300"],["/分享壁纸(一).html","40f543b45f66f976eda38dfb875f4e92"],["/分享壁纸(三).html","e8925bfb79af8beb4be6e0cc07854106"],["/分享壁纸(二).html","16321e10cff2e4c2555452d9081669f8"],["/又是一个不眠之夜.html","3b895c969d3ccf9c2dcd9c721ff6cdb1"],["/咒术回战.html","f24bff2bd8750eeb998e5361158f0b05"],["/开端.html","56a1dd4b91e629b6783a278a7dda3ef4"],["/白桃露露.html","3b54ecb7e2fdbe8a9e540c1a8d3d02a9"],["/示例.html","8f66763fea9afb1e4ab6fe323fcb5d7c"],["/计算机网络-数据链路(一)8-30.html","7d4c97ee842adfa063aee9dd9cb83666"],["/计算机网络-数据链路(三).html","113ea8db36d49d0719d7967faacba150"],["/计算机网络-数据链路(二)8-31.html","39e1c8a1f6e9f9a58bb73ab214dede30"],["/计算机网络-数据链路(五).html","85e9c1a075ba6c24b261b2f6ec940f38"],["/计算机网络-数据链路(六).html","ae6ce8be863fddd9b0ad4921222a3961"],["/计算机网络-数据链路(四).html","30c4726839a5288417271663134a8097"],["/计算机网络-数据链路层(七)9-5.html","ed5be64b5f9a80c228e597d7d839a3f2"],["/计算机网络-物理层(一)8-28.html","c12886b77b25326d18b75967e3ef8123"],["/计算机网络-物理层(二)8-29.html","88b8823a3a803445afbc81f090b06bb6"],["/计算机网络-网络层(一)9-6.html","f61976d431182c648a54f5cc4f8f6233"],["/计算机网络体系分层思想(8-27).html","74c24500ee9539ca9527f1118d869832"],["/计算机网络性能和体系结构（8.26）.html","847805b6dd2d11cbd9124fbcf19beca3"]];
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

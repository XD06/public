/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","72bd6c40d93ff3e83c440477e46b2113"],["/Gallery/index.html","08e2cffbafa49f59d53ce0fb97b28717"],["/about/index.html","e84486ec896fc8ddf3b56995645b3e16"],["/archives/2022/08/index.html","408ed2ed4041e988560b5ae1d28a63b2"],["/archives/2022/08/page/2/index.html","7834d50b161c099f0947f3612dae362d"],["/archives/2022/09/index.html","6c9732685b28343d163dab9e8f240983"],["/archives/2022/10/index.html","763f13a3c77ef9ebbe8901ef91cb089f"],["/archives/2022/index.html","3e7257854ecc8fcd42bafda9ed2b9a4c"],["/archives/2022/page/2/index.html","2fc2a738b3a9afbdc91b5e96ee1efa52"],["/archives/2025/02/index.html","4466bdb202126cf4238702b415f626e6"],["/archives/2025/03/index.html","1f3656cb08bfe37886c35e3936a93ad0"],["/archives/2025/index.html","325c781c7b26456e8cc025e20ea61a70"],["/archives/2025/page/2/index.html","deb3b065caa7c85de7153ffe33335a64"],["/archives/index.html","bb8eea1c9871e6342fe8ff78e64b85f0"],["/archives/page/2/index.html","a9ea7736b5f0ea440c9abc13d81c91ef"],["/archives/page/3/index.html","139d1e76d1a3f1ceb294d8a308910f07"],["/archives/page/4/index.html","cf7eed8e55e354815a6c582de8fabf72"],["/categories/index.html","9afbe412508c49d29a877a86beb260ea"],["/categories/壁纸/index.html","ec827576f11e3ea423705f7c527ea6f2"],["/categories/机网/index.html","a9ac691cf212656a33122ec76b848ac6"],["/categories/机网/page/2/index.html","f4f6e90189ce59359c0b29d41e6ca760"],["/categories/每日早报/index.html","d9909342c41276e5d9e44560ee5aaf1a"],["/categories/每日早报/page/2/index.html","98979b72d38ce7a4ea9d52b8b306d32d"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","d13bf1556beb8e8518c8f9880cb3a0aa"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","8ed7b0d7c2685d8dec2a67ee96539658"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","2ce8677ee5d6b79fec3d1fe483a7aa97"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","8e3b20ec470b19f5423e12ae56111da1"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","01fba0fb42e13a32f56b5258538f9328"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","4ef5d53062805175ed757758da031ae6"],["/link/index.html","e79283da257c81b089cfea55cb6876f5"],["/music/index.html","d4ecd3fbfb630fa9a28467e11536596c"],["/page/2/index.html","4df4d17aeaa25013c269ef42ffc43385"],["/page/3/index.html","3548c8c8de53e8faff26dd5e4d351ed1"],["/page/4/index.html","46735c371f86762953d770b44662bfd5"],["/service-worker.js","783712d473d21be2efed6a5b30e6e7b1"],["/shuoshuo/index.html","f95c16347369f4e0bbf49923d3273001"],["/sw-register.js","34fac66c9df3bf02cf452418bcb41f29"],["/tags/index.html","55bdf001b2aed878275117cdd4bbbd85"],["/tags/【每日早报】-2025-02-25 - 星期二.html","c8f86fabd987a3b25ad249ec8892a0ab"],["/tags/养眼/index.html","0b625145e8bd181af75edd560c124a58"],["/tags/日常/index.html","dc27a7bbf7bc2cb6a380a5b0e5c3ce57"],["/tags/每日早报/index.html","b2a5d805a8c7d126de98b6021618658a"],["/tags/每日早报/page/2/index.html","af6dfd9716a21d01340a331c03ebfdbc"],["/tags/第一篇/index.html","b2369532dd7007d328df200e290380df"],["/tags/网络/index.html","a218523a062eae29ff48fbd8a2d7c1ff"],["/tags/网络/page/2/index.html","62abe118c9e0d0053c404d1d680faa60"],["/template/index.html","3808875b3e5b52a3df17cc3f9d9da9a6"],["/temple.html","b47d9245b1a108a4ddac34ba73f69e84"],["/test-post.html","e310813dbaacf033e81d7bb36ed7b699"],["/webhook.html","116295eab8ce86bbb782ae258ed3942a"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","d782f15fdb727c6b6d3d2a4387ed65e9"],["/【每日早报】-2025-02-21 - 星期五.html","68ef98b45a53e59db78b81b36dcbffe9"],["/【每日早报】-2025-02-22 - 星期六.html","c2d26b98d016342f4c29729c1b8ad60a"],["/【每日早报】-2025-02-24 - 星期一.html","a4cad470352e8e08863a0bdeae190617"],["/【每日早报】-2025-02-25 - 星期二.html","eaf7d8a7e590146556f3b6b3adcd85f9"],["/【每日早报】-2025-02-26 - 星期三.html","d9a28785620e7128db147a2a0a093830"],["/【每日早报】-2025-02-27 - 星期四.html","7a8b491534a8df9dd855e02d1165828d"],["/【每日早报】-2025-02-28 - 星期五.html","022020a3b2dbf206297f248980310b10"],["/【每日早报】-2025-03-01 - 星期六.html","b62dbb33437ca1e12da740e8db3ac9e3"],["/【每日早报】-2025-03-02 - 星期日.html","7dcbf55b26736789ea5c4e85e49d6f50"],["/【每日早报】-2025-03-06 - 星期四.html","102ca00c2f0acd41e98499a4193fad26"],["/【每日早报】-2025-03-07 - 星期五.html","4cd02139e18503dc9a2c3b4d2f4cdb1d"],["/【每日早报】-2025-03-08 - 星期六.html","23fb16b378ee9b609894a54a4b945aca"],["/【每日早报】-2025-03-10 - 星期一.html","6456861a4773703f29162c3c8a884c46"],["/分享壁纸(一).html","70ce57b4876b394b4058496ff0669a4d"],["/分享壁纸(三).html","cd9874cd358636b575d90be029bedc67"],["/分享壁纸(二).html","318bd6431a089a7664906541d2aa8c32"],["/又是一个不眠之夜.html","f44b691d0eb59a6429d68312bd6b8a3f"],["/咒术回战.html","fdd4c36d7259ae89683c826bd75c577d"],["/开端.html","5184751c9c2ac9f4e92fc156e8d494d8"],["/计算机网络-数据链路(一)8-30.html","05956d89d8c1315c6c4210610f2357e1"],["/计算机网络-数据链路(三).html","e43f011b737c90f5def9cddad2fd6c7d"],["/计算机网络-数据链路(二)8-31.html","b1ea72d39393beecbec0be220e901bd2"],["/计算机网络-数据链路(五).html","97be1c5b9c7ca8e71ad5f1fe037fb8fd"],["/计算机网络-数据链路(六).html","34ae3561bd002102172f2cfe1439c57c"],["/计算机网络-数据链路(四).html","ed7185d377bc0d39c098ebeac890090a"],["/计算机网络-数据链路层(七)9-5.html","8eaaba55fc051e360453f117292d19ed"],["/计算机网络-物理层(一)8-28.html","ef79c09d03d320638612c6c9999709e5"],["/计算机网络-物理层(二)8-29.html","02d33c42a388956463ec46f0381bb2c8"],["/计算机网络-网络层(一)9-6.html","7a1e84193a39ff9654d5275e34817374"],["/计算机网络体系分层思想(8-27).html","62960c35f4191566b08f5c7b5ff755ff"],["/计算机网络性能和体系结构（8.26）.html","607389d2669631758e97d3c319526d19"]];
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

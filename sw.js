/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fd866e451395077511ef1117b6168619"],["/Gallery/index.html","76b9b6a8db2e6e2aec71150d7bb7e369"],["/about/index.html","ae5c6f1b2d2590fa7c20f18cf6774104"],["/archives/2022/08/index.html","a7f830a59f90a9f4e16b2daf8ad0bf93"],["/archives/2022/08/page/2/index.html","34f648d6ca2628a2c33a5786e1e8ce27"],["/archives/2022/09/index.html","9911d670344968ed88a2fbd0e2fdc7f5"],["/archives/2022/10/index.html","a9e9915c4ce571656d2ef084bc84c2c3"],["/archives/2022/index.html","be4d310aba7188d3b5efb3e5fb20863b"],["/archives/2022/page/2/index.html","79f9e84a3f42a403ff71cb9fefeeee09"],["/archives/2025/02/index.html","e7d217781eb80dae49626300cc5de19f"],["/archives/2025/03/index.html","82beefeefe8e84ee27598cd9165462e5"],["/archives/2025/index.html","4f8b63ec9dd8e9de13c4c038f9836a31"],["/archives/2025/page/2/index.html","cda749e4cf769c182990747da15809b8"],["/archives/index.html","3b715302ca2a417b81ccfeb0540bf323"],["/archives/page/2/index.html","a1d65f7cf0d845a8bc1b43334a7fdad2"],["/archives/page/3/index.html","f7c345fe4c7884b5bb732d3d48f09025"],["/archives/page/4/index.html","db36eecea4a08c82158774c824dd1102"],["/categories/index.html","ad826d6c20a18ab105758cc1e1174c18"],["/categories/壁纸/index.html","5bfd2cc5e0a53d6d841b0e415faa3b59"],["/categories/机网/index.html","0a8f3b1af63ae252a9405529a0cebcf5"],["/categories/机网/page/2/index.html","9bc61493739ddd1fd0e6da317c1b9942"],["/categories/每日早报/index.html","47807f1e8fe8f848ed8f0a2ecbbbab23"],["/categories/每日早报/page/2/index.html","3b39c00c0cd010a739dcddbc6b2851d5"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","d0989f4bbd54a84a380a96a672bd41f6"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","c8d31241629b182eb51c48fb77033ac7"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/hello-world.html","3ad29e9581179a65334b667343ac35d3"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","251114e4e2421fcd97ef3b45c4a25f00"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","931cf33f37097317d1e8b17613ec70b9"],["/link/index.html","e406514feab21e0b1b1e9811b7743311"],["/music/index.html","815e25634363f7b5e202e5a94ac1c0bb"],["/page/2/index.html","8fc1668623a2eca3566c8c623ae34a05"],["/page/3/index.html","e34f820b27b6d2c6d5c8246afd6bb2f2"],["/page/4/index.html","a266660b8c97c3127c27715618413346"],["/service-worker.js","ca424902ac27d57d0e5a8f2eaabfe225"],["/shuoshuo/index.html","e99ea290f08aa485e7452bf68acafb15"],["/sw-register.js","8a8144d4ae535519da5fa951c6706464"],["/tags/index.html","601cdd8a38bff5f352bc9fe7f9a0a81f"],["/tags/【每日早报】-2025-02-25 - 星期二.html","2c1835e7ffe7d8836192751d73aeeb24"],["/tags/养眼/index.html","25842b9f5418c97d539fc56f5d0fa7a1"],["/tags/日常/index.html","4ececf6f790a3a34714e48a3d8433347"],["/tags/每日早报/index.html","b06960e5e10a767581b6c813f3f1ae47"],["/tags/每日早报/page/2/index.html","5ea4d5564b04e4cdb08d25cbf5531eef"],["/tags/第一篇/index.html","77ed66684ea5ebe79431aa53633a9a62"],["/tags/网络/index.html","36c5fb3864f4c4d13417f62e08d176f4"],["/tags/网络/page/2/index.html","57add1ccd64d303ea81394ffba8cc857"],["/template/index.html","7d72c538f1ca697d0ab08c78469d0623"],["/test-post.html","fc976e5e6542e251c178b2c9835dd720"],["/test.html","dbb702527930e59879dbba9f6940a70a"],["/webhook.html","47f6ad52a0b1450d12526e394db751a6"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","56f7f67c8bd105648ff2fd9e40543123"],["/【每日早报】-2025-02-21 - 星期五.html","21c3f7465e33d85fa5b9d077b8d971bb"],["/【每日早报】-2025-02-22 - 星期六.html","aa85ca18d1eb2c3624a25b3a362c53aa"],["/【每日早报】-2025-02-24 - 星期一.html","ee6d8fb1bba8e7639ef51a98260d5e90"],["/【每日早报】-2025-02-25 - 星期二.html","4541db045c2140a1042f33b7631bdc30"],["/【每日早报】-2025-02-26 - 星期三.html","f0a6483639043d59a7daee8e4df0ff7a"],["/【每日早报】-2025-02-27 - 星期四.html","fba808d635c1b15743544f1e2a98ece8"],["/【每日早报】-2025-02-28 - 星期五.html","91d7dca31001daab74dd7398ac43f7d8"],["/【每日早报】-2025-03-01 - 星期六.html","54afed20bcf42ce63b41f5efec75c73a"],["/【每日早报】-2025-03-02 - 星期日.html","8924d0b430fc6e49202692cc3ee2e4a9"],["/【每日早报】-2025-03-06 - 星期四.html","5fd7c358508162acaa048682e261bc49"],["/【每日早报】-2025-03-07 - 星期五.html","d363bbe03dc8bc164b548c628c76fbea"],["/分享壁纸(一).html","7cab9cfc1be68d13a159e95e86821fc8"],["/分享壁纸(三).html","688a67dcd511b0f93ab0d2612c7b6905"],["/分享壁纸(二).html","0a1c58d5bbe03d915f771dec9f6dc67c"],["/又是一个不眠之夜.html","5c8b2514678da4f290665fb7fc87cad7"],["/咒术回战.html","5cd1a7b046ffd0cb37e17d5c980629b3"],["/开端.html","4d5d83661732a99e46e2ef44a0422ade"],["/白桃露露.html","253711671729e281e1d4588caf846a19"],["/示例.html","a537f234fc0f5f99eff5a7db7f86eb8e"],["/计算机网络-数据链路(一)8-30.html","eddcc0268f56ca21375c6b576c03a2be"],["/计算机网络-数据链路(三).html","4c4d6c2f5ebda88b139f18692c8253bf"],["/计算机网络-数据链路(二)8-31.html","bde9d8904af13e07495ce02451e3e3f8"],["/计算机网络-数据链路(五).html","454e0b497f25e90d9b49aafc84ef0726"],["/计算机网络-数据链路(六).html","e8bccdf8c3c1b09cc63c5068a4c502a1"],["/计算机网络-数据链路(四).html","c6f6ec9ed38af8cf4e778fa02fbc6b94"],["/计算机网络-数据链路层(七)9-5.html","b9d7bb9291223beb30bf17706b2f7d4b"],["/计算机网络-物理层(一)8-28.html","e79b9cdfd079bb47cdda1c0c85677a46"],["/计算机网络-物理层(二)8-29.html","ec8e3a833ea5ae2dca43b36b51c8aec2"],["/计算机网络-网络层(一)9-6.html","d49a0a88ac952219dd52f69bfb5e153e"],["/计算机网络体系分层思想(8-27).html","86b1654144c649ec9d811522466fc241"],["/计算机网络性能和体系结构（8.26）.html","ec53fe2a5369d234486a0b358883c215"]];
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

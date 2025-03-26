/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b11fc044c456717fe117ee58c02eee07"],["/Gallery/index.html","b944328a09f3629026ef7cee4f67c969"],["/about/index.html","bf8b5bf4ae1aed4ec54abf46b9699913"],["/archives/2022/08/index.html","e014ea5769ffac274886ef0748f97965"],["/archives/2022/09/index.html","148fde233cd97f3c207785900bc01624"],["/archives/2022/10/index.html","3a9f367641b6bcf8d53038a1662f458b"],["/archives/2022/index.html","7207d7cd0a7166783dfb04f9992a4055"],["/archives/2022/page/2/index.html","8d5d08634fcf834a65e604d6b780a677"],["/archives/2025/02/index.html","0c843cff4dba156c4ccb8f804e056cc3"],["/archives/2025/02/page/2/index.html","5d5e2878a289e675f58edbbfd9df67f8"],["/archives/2025/03/index.html","cfd68f19837b32b4402347c35f5b5797"],["/archives/2025/03/page/2/index.html","61e1c8034cb13c695c36d89d7e74ee63"],["/archives/2025/index.html","79ca528818f1d46f5d94c65b23589a83"],["/archives/2025/page/2/index.html","4f2a8a413730b95f81a527342ef9b997"],["/archives/2025/page/3/index.html","a0f3a3ca836e65abd7f84e828e52405d"],["/archives/index.html","acf2bf7137111e52aada4e345db808e8"],["/archives/page/2/index.html","79d1bd847a74f9ea0d119425e77f36cc"],["/archives/page/3/index.html","e33da091b86436a5499be1a99a7cb647"],["/archives/page/4/index.html","e6363d75280f83663feda08ff1d868e9"],["/archives/page/5/index.html","bbe3356c03c0d69c03213aa91fccbc65"],["/baidu_verify_codeva-J5b2WWChcR.html","17b14a253515032321897759f86e9e09"],["/baidu_verify_codeva-cwyza0ZFJb.html","1d87fd469bbfa2ef19b7a67a0cbb9816"],["/categories/index.html","4f14b574eff25d551fa4ca13ba2e1763"],["/categories/壁纸/index.html","604ff702fe806175be562da829944fe0"],["/categories/机网/index.html","ed414cdaf863d7b97822c0312d977e3f"],["/categories/机网/page/2/index.html","7a9c1815ffd6ca37132312832efded31"],["/categories/每日早报/index.html","c306afa1ee3c9919a64e36ffb8103f45"],["/categories/每日早报/page/2/index.html","b457133e2787c3a7ddef085d2f7533bd"],["/categories/每日早报/page/3/index.html","a13b80b23605be5c3788818a348584c9"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","8c70d5d43dfe88fba40280c0b681cc5c"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","4c1c7ac6bc851d37d1369674694e0bbb"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","adc03d2e22c577b96a51804e27a38f9c"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","8fb32f57f7f372a240c0153288e8b585"],["/link/index.html","17e7bdb2a2229b8c98d732c2377a941b"],["/music/index.html","fef116bd0b4ba8565d774ded07e94388"],["/page/2/index.html","6532188b434ef91a0d443735b701cf09"],["/page/3/index.html","6c9cc06b5c883d1b85272dccbe7d7a6b"],["/page/4/index.html","a3308cc949ab89a4e1e6b71e6e171046"],["/page/5/index.html","ac8b2c691cafef0d54c7e72734a468e4"],["/posts/1b0c78b3.html","167d2ae3e8a9d980e69e9533cac047f0"],["/posts/1b5b87.html","f6de339d3ee21f7bde41a312393297fd"],["/posts/28c755c.html","8e7ee3fb4419b4f1cce56eaefae8bcd4"],["/posts/330d6f69.html","6099b52728f7c82192bd9e0ae374d9bf"],["/posts/3b744803.html","ca231144908b1bba961fa68ce7c105ab"],["/posts/3da05156.html","77d31c1fe9ec2a838820bca2291814f7"],["/posts/3e91e0fa.html","54ee103864ce3fa5d8903c4676282e98"],["/posts/41c2c0d2.html","e672aa5b39069a9f1e4c397e7721720d"],["/posts/46fc5adc.html","367bc3f96319048783296fc682146ab4"],["/posts/493f6b85.html","25e4b992ad81725c0d1e337fe489f6de"],["/posts/497e40e0.html","4f301f54a7efd5958e9becdb49cf9732"],["/posts/4a17b156.html","b920074dac12dd9217498bec7da6ab56"],["/posts/4e2d7b19.html","0afd350326e9c28fc0f83e1e0bbe2971"],["/posts/4f81eb97.html","4ecbeb1ffa4f23eccfb4336cc4e7817e"],["/posts/53721e0e.html","ac30492fdea993f9a7c937ffa3f5534b"],["/posts/5dadd067.html","6af67324228f6dd7c1435c1765227e11"],["/posts/5ff34642.html","44ea3bca8deb5eb4cd0399364a4243f5"],["/posts/653abebf.html","d6f9b00600be1b756fb91c91d7ef7955"],["/posts/681265c2.html","d7d612712fa5c7b15309d2f72597464e"],["/posts/6f44662f.html","98010718a77a5084d9ba9488621d234d"],["/posts/7207f70e.html","fb2d411ab75dafa30711f1522989963e"],["/posts/7289f891.html","c07a93f9f32ce98bfbf7e18cc011af15"],["/posts/732e626.html","085c932174c6b13982be50f00afb075a"],["/posts/7e13cc3b.html","675009fd27e389bb47c40827e470f48d"],["/posts/80a7ecce.html","043d9789230b428fa04a656efd974f34"],["/posts/821a4686.html","cebfa33e471d90e2a476ee04a1a3e325"],["/posts/8a741756.html","1c65ac9eca5a2b5e4ae4bea2fc94996e"],["/posts/918d46c1.html","cf9ea8e9bedeea1c2ecdb4c68da414b0"],["/posts/9f057e9a.html","e4f8c5da1ed8e3aa7b5aa3893bedd10c"],["/posts/a7d437fe.html","8909a4a13866e831d7c51ce434e072a3"],["/posts/ace4e4cd.html","c6db7f1cc33a7d37ba8d24ff13b86820"],["/posts/af30ddef.html","4f5a7879f5bfeaf34fe9a463d4dc4a6d"],["/posts/b1eb9c6d.html","e98a4a75893ffb3fd8b03116e4f381c8"],["/posts/b564e922.html","9cdc3765ac1f70c2eb2cfa42fb5c6c15"],["/posts/bc9a4dc7.html","5a80a09610d72242546d03b31b5dd642"],["/posts/be543a11.html","001f903eb76de841de4732ee643892af"],["/posts/c9b871f1.html","0bf4406a3beffd4cdd322e9712edf67e"],["/posts/d6ef11e5.html","0427fef27dac08c85ae60d0d6481987e"],["/posts/dcd6fdd1.html","28881c0d0a0934a862b1fbea14943b10"],["/posts/de24a124.html","d122901e07dab0f3e08ade173bc1e7aa"],["/posts/e32cbcd3.html","5854698407c69a025a4c6e5454da81c8"],["/posts/eebbc69f.html","a0cbe8611deab1e57422efce5ffb8526"],["/posts/f08119d7.html","6734fd35e305ce35eb4146b9a604cea1"],["/posts/f7f51423.html","196291ee667b52edcacbcbd607458feb"],["/posts/fd1a8f9f.html","efc5593d728df6ec98cd8f415cf6e8ae"],["/service-worker.js","dc8e0b1751772cf724dbc49985328ace"],["/shuoshuo/index.html","227106cc1b236248fe73ba93a884c126"],["/sw-register.js","183124328ef704d4712a9dc46e8fea26"],["/tags/index.html","86beedd67eae0c3809c073618df6c24f"],["/tags/【每日早报】-2025-02-25 - 星期二.html","8b9e8007180ad3922d6e55a28d30c347"],["/tags/养眼/index.html","5372f93120c1131caabdf61548b10bbc"],["/tags/每日早报/index.html","2acab532c21696108faa56aea239001c"],["/tags/每日早报/page/2/index.html","1e345f3a6ff0b66d56d5ef7bb19f8086"],["/tags/每日早报/page/3/index.html","b2a269754ab0e74fd9ab9f3cb2851f34"],["/tags/第一篇/index.html","31479da5ee38dd4fe11636cd444c01ec"],["/tags/网络/index.html","4bf67cb0a01e0cd85b554c63c09aff34"],["/tags/网络/page/2/index.html","06cc7d9adebb8ca70353bac4b6f0de90"],["/template/index.html","d381d5ebc7f4e97bb5d5d543d1dc6810"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

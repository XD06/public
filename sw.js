/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","185825ad0e1126792bebe5e26f8fddab"],["/Gallery/index.html","e0b0b89f0d9191852d9eb3ff401adc95"],["/about/index.html","f853d47f962c27719943096d77bfe834"],["/archives/2022/08/index.html","58f8581b46267560efc6c058a620a56f"],["/archives/2022/08/page/2/index.html","c4c83b24ed5424899b0618a317709245"],["/archives/2022/09/index.html","973ef455a850c975f33a705297e88b04"],["/archives/2022/10/index.html","94c3a5ea27293fc5571c33b000900c6f"],["/archives/2022/index.html","2003fe5e632bfaca5fab8fecfa693048"],["/archives/2022/page/2/index.html","c15768cea8002b5994f484f59d8ebd29"],["/archives/2025/02/index.html","03c4d09d8411b7ab66b0bdf75498ffbc"],["/archives/2025/03/index.html","3598e5788f82c51fb57a13af1b2c942b"],["/archives/2025/index.html","bc80ceca687ab8fc0f1f027c116fb6e0"],["/archives/2025/page/2/index.html","3427e8eed4402dca737c06331abfcd73"],["/archives/index.html","f5de286a1893ed840b5f624115654d5f"],["/archives/page/2/index.html","75b9b3ad66df141c622f7b65552053cb"],["/archives/page/3/index.html","922dffd3ee5e4640f951ecc8af2810f4"],["/archives/page/4/index.html","6a34994db90ac992cfe61bcb0efda0e2"],["/categories/index.html","8050d49fd28725e84bbfe59f86c492f7"],["/categories/壁纸/index.html","8d0e4f030f54feabd53839a205ad7a37"],["/categories/机网/index.html","a14bdaecd359b4c62591ceeaa194d786"],["/categories/机网/page/2/index.html","72a17d59ad1e50a75ed28d8cf59e36c9"],["/categories/每日早报/index.html","163513d448f28013ae8d214d446c4a94"],["/categories/每日早报/page/2/index.html","e21117e96ee55f7db46ab09c0f837cb4"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","85bf2a16eb1bf15e0a0c5233c56f8c6f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","730ca116cfc0781020b091426be022b9"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","95dae041600af37adc2d0337ab543b6b"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","ce95247c3d100ab97721eb063e89cfd1"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","d0a1805e6be31eec2700a4d981fa083b"],["/link/index.html","6a82fa58369ebea1f7ad5a9a330e01a9"],["/music/index.html","3d7248bf247009f4273b5dc25d811a21"],["/page/2/index.html","3c971054533afa62a2c6b5e05318deb5"],["/page/3/index.html","a18c7518e504cdeba74a0264a53dd0d5"],["/page/4/index.html","27920e643be6f11bcf1f9d5702499238"],["/service-worker.js","f2092afbe87dba163782f9595e259448"],["/shuoshuo/index.html","0879a574974025517fb2558ce6c0a5af"],["/sw-register.js","3360a03584dd017f23f69969f7d3cf91"],["/tags/index.html","debdcedc836cebb6f64a02ff402bb744"],["/tags/【每日早报】-2025-02-25 - 星期二.html","b4e3590862a50f3b1a3801cb4d18fc2a"],["/tags/养眼/index.html","0b0ac8bad8d459a6a072090f3e8bde4a"],["/tags/日常/index.html","162479663b74b0b85375046cf1dedbae"],["/tags/每日早报/index.html","f8f88df43004405b916be892041e2c4f"],["/tags/每日早报/page/2/index.html","9dd24359f2699e683fcf12a6b6baeab0"],["/tags/第一篇/index.html","b556391aaa6ec94bc0d77344d5073a1b"],["/tags/网络/index.html","99915e0b6275507aa9063229fe03dee8"],["/tags/网络/page/2/index.html","3de7be3837800cfc375104fefb5d3fac"],["/template/index.html","c10b4ebcf8cb9c8a77185bbbdc2edfa4"],["/test-post.html","a0ee0dc32569d4b6db9eb20eae454762"],["/webhook.html","24b62404e49902e6a1eebe7c156210e5"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","f22498d661aa9664e3f60a4bfcd5b4af"],["/【每日早报】-2025-02-21 - 星期五.html","883cabe9aeae3ff754d370c10875a6fd"],["/【每日早报】-2025-02-22 - 星期六.html","617b5d09c4bec2fdd2e9a5b41c55f9bd"],["/【每日早报】-2025-02-24 - 星期一.html","86714ef93d02079e3a99204165d5af8f"],["/【每日早报】-2025-02-25 - 星期二.html","f126402e63799cde742ba974a0e4a29d"],["/【每日早报】-2025-02-26 - 星期三.html","66ef3e9b6fea4089453142d283b44acf"],["/【每日早报】-2025-02-27 - 星期四.html","4d163f793fde110dd08c3d1f391d843d"],["/【每日早报】-2025-02-28 - 星期五.html","a8e75647a865cc8d209de5d178e18991"],["/【每日早报】-2025-03-01 - 星期六.html","db8c0b93a6bd5df220a7fa8dc25aab2e"],["/【每日早报】-2025-03-02 - 星期日.html","21c43cc45509b9f4fe039431f31337cb"],["/【每日早报】-2025-03-06 - 星期四.html","127dc533ac691d72c0f82c83117b4f2d"],["/【每日早报】-2025-03-07 - 星期五.html","2854985b89e7b7095dda6167f9d3e773"],["/【每日早报】-2025-03-08 - 星期六.html","e923d6a673bd68d0037e28ea8714eaec"],["/分享壁纸(一).html","c3eca6b57fa76a3b5a32d0a40d80b452"],["/分享壁纸(三).html","81bbc16a4ac6941d988e3915cd67f3bb"],["/分享壁纸(二).html","ed8eeae1472c3e778694948d8e4d69eb"],["/又是一个不眠之夜.html","b2d7f37426331cea1a97d5474e21b6a0"],["/咒术回战.html","5521455741a4a1bb66d6c7fea7817f6c"],["/开端.html","17c341a6975e814aff189cb602186a93"],["/示例.html","1d41f46693f8d09311b3e4e85979bdaf"],["/计算机网络-数据链路(一)8-30.html","4b683b05aa4fa8de2c86ed315d4734e9"],["/计算机网络-数据链路(三).html","76ffbc17ef9cfd6782a80b2e1cb8db67"],["/计算机网络-数据链路(二)8-31.html","57850364e6673de3c978b0a845e091f4"],["/计算机网络-数据链路(五).html","d84aacf3bc4a7a72e29c549909bdd0a3"],["/计算机网络-数据链路(六).html","638b0ca7b8415a03d81717bfc759133d"],["/计算机网络-数据链路(四).html","8bc56b32512406750d8326e17ab86d29"],["/计算机网络-数据链路层(七)9-5.html","07a55ccec5db1121c740ae0f2e6a76a7"],["/计算机网络-物理层(一)8-28.html","f44a0b8ca2bc264fdaa19338cea27742"],["/计算机网络-物理层(二)8-29.html","cb5f379d42a015eabd8ca7911304f063"],["/计算机网络-网络层(一)9-6.html","1524d25eb9d463a14616c021349b4a73"],["/计算机网络体系分层思想(8-27).html","0713154cf292130d9314be4886a3aa31"],["/计算机网络性能和体系结构（8.26）.html","62c07bb401742f9a10153851b5e6fe39"]];
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

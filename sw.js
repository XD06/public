/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","722e35a28d0e0611346db6bb21135d77"],["/Gallery/index.html","e312efaa4eecbf511ce1fd0f68ecad14"],["/about/index.html","9661c4fe7d18ad98f06bad1c72401257"],["/archives/2022/08/index.html","27d7d3d163b4ceb8a079bd6732cf4a80"],["/archives/2022/08/page/2/index.html","e481af478779024294e4b7ec39c8e245"],["/archives/2022/09/index.html","ddc33836c81065cdce8424794ad11ee0"],["/archives/2022/10/index.html","48d4bb009b6001a5ab693f1c1a2cc209"],["/archives/2022/index.html","b25fd538217875f5f257b887959145ab"],["/archives/2022/page/2/index.html","53bd5d69e508490e763be9e3e83506d7"],["/archives/2025/02/index.html","0112a307757ce65c608757e36236c92c"],["/archives/2025/03/index.html","fe99b3db2a3fca568ad74c3de236bc6c"],["/archives/2025/index.html","ecc66b85d876827e3d5803700eb26990"],["/archives/2025/page/2/index.html","2b2b6ea5d2d743d6278ba142bf6f5d7b"],["/archives/index.html","5188e8271924f206b26f9a7ca70c788d"],["/archives/page/2/index.html","cbe772a5581de54634128d1a0ee4be0d"],["/archives/page/3/index.html","c7c8f9418c634ec71bdeb288f11f7845"],["/archives/page/4/index.html","bca56cb0de4a5e13cb0ab3fab6bdc296"],["/categories/index.html","919d9129ccee24a729b5f1b4dccf8270"],["/categories/壁纸/index.html","8f56ea99d8cc6b965eaa27372e165be4"],["/categories/机网/index.html","a4cb195cd76ed9470d9d4a02ca6c4426"],["/categories/机网/page/2/index.html","20dc4340c801f30fad0ccfb2276ce356"],["/categories/每日早报/index.html","6cdd80b04b0eaee5b37ab8f57de1f7dc"],["/categories/每日早报/page/2/index.html","9151d9febaf7df84ffb062f3474a5dc4"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","428fd7f7c8d276eb88b760be488d2659"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","0c40321e8ca88931a588f22862c3043c"],["/fonts/FangSong.ttf","6c2c6cb9a9d43dcd8d64544ee821a9c0"],["/fonts/Hei.ttf","1247ceac203ab8dd2f94168f60bb6fb8"],["/fonts/kaiti.ttf","c1f3ac5d0e48120a8906a93fdc82e12f"],["/hello-world.html","d2425d359245f29408c38c051072f322"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","02016c43092f51d80a599918be89c57a"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","2067f8f35706ba992b67f4fa48724042"],["/link/index.html","20219b3529377eae36916babf5f7c087"],["/music/index.html","1f48f245e73bf36bda26420103846291"],["/page/2/index.html","86d662df307cdb0c970a0dae91394d9d"],["/page/3/index.html","8b14e0f53d968e9b44e7c1fc90a5980a"],["/page/4/index.html","bc6c5801181cf10f819bf7d3baa24073"],["/service-worker.js","53c160d8c9085d3624f28fa679a54787"],["/shuoshuo/index.html","2230ef006ad29e763923aa30a1ff4013"],["/sw-register.js","89ad3f364566688502956b975c07c2c6"],["/tags/index.html","b23750477fdc8431e630bc7c84c66773"],["/tags/【每日早报】-2025-02-25 - 星期二.html","10c8d3e95276615420770934bae09db3"],["/tags/养眼/index.html","39f4ba9fae91ab99146945ac071360e4"],["/tags/日常/index.html","909ad8e1b8bd1749ae15a22ed53f6c7d"],["/tags/每日早报/index.html","f9bb4a7206cfdad4a56dc9d478b72736"],["/tags/每日早报/page/2/index.html","11082b7d628e93ad933c9b7144277797"],["/tags/第一篇/index.html","32ec4af2dc7f2b517f89195ae89990cc"],["/tags/网络/index.html","e0898d2d228b10f0ed9e569e520d4123"],["/tags/网络/page/2/index.html","21cfab4bf68197c50632213c03c346c5"],["/template/index.html","a929c34c3b9ee736da3425ad7f04ff7b"],["/test-post.html","6a032dc8b930d4f7130caa59f7c610bb"],["/test.html","ca6fae737646d77aa170e2e44d62b144"],["/webhook.html","cabdaa696c60a1f4d6375899c56120c0"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","cdb775acb75c96799b27438eca351708"],["/【每日早报】-2025-02-21 - 星期五.html","dc5e32e337cb7e30a705acae6a66158a"],["/【每日早报】-2025-02-22 - 星期六.html","9c1de7b8dc9a6a0bed5bb1309b70e169"],["/【每日早报】-2025-02-24 - 星期一.html","7895ece223c27b27992a25a883caa436"],["/【每日早报】-2025-02-25 - 星期二.html","6c377ee4413588e8c368258ff89f3b12"],["/【每日早报】-2025-02-26 - 星期三.html","a55266fe8ddacb4ee6eb62d4a4d76b76"],["/【每日早报】-2025-02-27 - 星期四.html","b537db08fd2ea89bfed1c3db515a3a3d"],["/【每日早报】-2025-02-28 - 星期五.html","264b4c788e07ddf1cfb8da558c20eda4"],["/【每日早报】-2025-03-01 - 星期六.html","e8745bb5944175ff3682bcb8c035e5fa"],["/【每日早报】-2025-03-02 - 星期日.html","3aff1e10f7da43a8f8f910e9316f57fb"],["/【每日早报】-2025-03-06 - 星期四.html","9deb309aecf244443fb6d24e261e7a02"],["/分享壁纸(一).html","857785defc775d55454c32f10c9920c1"],["/分享壁纸(三).html","8ecfe1aa5ab2a80a4f320e214ddb7bb7"],["/分享壁纸(二).html","ebcceb3bc8d2e40d580ff566da2e277a"],["/又是一个不眠之夜.html","f61697bf28e1d243bfa43b6fd08de843"],["/咒术回战.html","b425e19ab693a66ab606a7f13d5b2c12"],["/开端.html","ee4daa278ffcec056fdf61a83da3880f"],["/白桃露露.html","8e365e6d5d4829ade5726cb537afb090"],["/示例.html","d100ec3e084927628dce8b1a2ec0f388"],["/计算机网络-数据链路(一)8-30.html","9f76d09207ee5e1367ee5dd5a2d688af"],["/计算机网络-数据链路(三).html","e7fbd42c0af942f6f0edd9deea86cd00"],["/计算机网络-数据链路(二)8-31.html","0248d8d8c7b09b48093f41045fb32e9a"],["/计算机网络-数据链路(五).html","a0a39ebd63d54d409bb7922c67d02559"],["/计算机网络-数据链路(六).html","6fc3a486af2b1dd7f907ef3d15b4a9a6"],["/计算机网络-数据链路(四).html","6c7f10e5c57dfd1d76e58086880e87c2"],["/计算机网络-数据链路层(七)9-5.html","91615c4603704e9bb9e7a7ca9e5fe533"],["/计算机网络-物理层(一)8-28.html","08089b9d56064e1540e8d676a58b11a4"],["/计算机网络-物理层(二)8-29.html","3227050626d65226048e71a454a37676"],["/计算机网络-网络层(一)9-6.html","ae2390acd0aec290b417d27e1986fbf9"],["/计算机网络体系分层思想(8-27).html","ae98a3d87d21aad9ac3dc72eb27328ed"],["/计算机网络性能和体系结构（8.26）.html","b24d97aa06922d511490c0e188df573c"]];
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

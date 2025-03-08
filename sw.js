/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","81300eda393da989ee204270be26b3dc"],["/Gallery/index.html","3e70909dbbfe0af94f23504f5004cd8e"],["/about/index.html","8e5808f57e26977581f0c6fdd241ab67"],["/archives/2022/08/index.html","4bd35d160cbbfa26453a5ae60d7081b2"],["/archives/2022/08/page/2/index.html","dceda24fdaa444eb2cd00e82e96d1fea"],["/archives/2022/09/index.html","e0bff16e4ea2f03d6b87243985328602"],["/archives/2022/10/index.html","1343d8bd68b3f492439efc2aab9a3a2d"],["/archives/2022/index.html","868d8594d4f9e4383cdd4a066fa0c333"],["/archives/2022/page/2/index.html","5afdce1125ecb5c0a9a7cb0450ed0f20"],["/archives/2025/02/index.html","e18d51dfff57e9f9f9507077237af63a"],["/archives/2025/03/index.html","85c387e23318f486588eaf58e3f91fe5"],["/archives/2025/index.html","2750a41b4cd8ca8b544fe0a38f9155f8"],["/archives/2025/page/2/index.html","2bf7ef072382c332ee9672ee7252252a"],["/archives/index.html","1d50d3b6ba3e8381b090515ff60866cc"],["/archives/page/2/index.html","a52c7136d8ccea9c7729c2617853ce07"],["/archives/page/3/index.html","b3b541b3c2ca835be1ac484abcb8dfeb"],["/archives/page/4/index.html","6e5ff665d0ae2d49ec95649ece8a20a8"],["/categories/index.html","afca5592605be8f10f54de8110d4789c"],["/categories/壁纸/index.html","9aa1a693ada80473dc96f4e9b6e622f1"],["/categories/机网/index.html","83097d96b02eb7ce8f84d71f5b34c20b"],["/categories/机网/page/2/index.html","550a0063960842056eca3c366bab24f5"],["/categories/每日早报/index.html","bcc470f27f7aa17b2e670fae2e1ab8e6"],["/categories/每日早报/page/2/index.html","c0a94971ba4abdf231f0c5116ed448a0"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","85bf2a16eb1bf15e0a0c5233c56f8c6f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","8cab16fcd4a0cc61dcf36cb289ea0bab"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","848529a4279e94728ee4e9c967ae3bb1"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","f396548b2f7fb0432f67bd4b65172884"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","6f36b3047cd9fbb5d7949da96c4151f7"],["/link/index.html","9464c558dd8a81a3e33affc4e2479299"],["/music/index.html","088caf6032e3c5b208908cc27655dd50"],["/page/2/index.html","abb90ecb417a9038fe8c4f52d8c7bcc0"],["/page/3/index.html","5889c5c4eb5f9fe699de2544a293fe37"],["/page/4/index.html","3e0c282eec81ab86fa4b240890ca1c2c"],["/service-worker.js","f532c3fdfc5464e50f62e6f40c9e3caa"],["/shuoshuo/index.html","9597e8858d5bc7cfefec6a561f4143e2"],["/sw-register.js","52745179009b6eeed1c1a35bba73e6ad"],["/tags/index.html","eb6c259b3c18ff3073dd7cd3c0dac536"],["/tags/【每日早报】-2025-02-25 - 星期二.html","29d3d35b5cb4c767423611125dbbdb2f"],["/tags/养眼/index.html","8c68bd31bf87f2c772d5806b00be2d3e"],["/tags/日常/index.html","03f2600f6374177ca8c0827330bde1ad"],["/tags/每日早报/index.html","4b7376b37a92fe48449732d49a3ca998"],["/tags/每日早报/page/2/index.html","49c785bd133006e71d96a5465bb8915b"],["/tags/第一篇/index.html","7d0b21388de204c8010aebed1aae4aaf"],["/tags/网络/index.html","2a19d037d3c1a72a1fc8a4a6e003b1fe"],["/tags/网络/page/2/index.html","a7e608520e122ad58279786f9f8b6e8f"],["/template/index.html","19c61b3cfff619057bb4a3243cef4e58"],["/test-post.html","94da9e2f5c7f3e8a9fd0c231d9b3ecbe"],["/webhook.html","20f69b5395ea3f1471a5f5c5e98030af"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","c8410df082b828f351d14521c32015cc"],["/【每日早报】-2025-02-21 - 星期五.html","41c4174104302845e65457e8802a1ad3"],["/【每日早报】-2025-02-22 - 星期六.html","e71f9620fca19b377ca9812046b0f34d"],["/【每日早报】-2025-02-24 - 星期一.html","2d1ca9889717de76ecf619d279103910"],["/【每日早报】-2025-02-25 - 星期二.html","e1d602ddd07c27eed5b06f3dc5278df1"],["/【每日早报】-2025-02-26 - 星期三.html","82eacb4b40d113aaa69b592b35a085a4"],["/【每日早报】-2025-02-27 - 星期四.html","9a4144e486baa115c0655c2e377f78ec"],["/【每日早报】-2025-02-28 - 星期五.html","5a76ab9aebba6abe213cf3f63d086196"],["/【每日早报】-2025-03-01 - 星期六.html","aa45a08a862a4b4da6f08decff6d4a56"],["/【每日早报】-2025-03-02 - 星期日.html","cac81af1f888f76be9cbcea368c19428"],["/【每日早报】-2025-03-06 - 星期四.html","65069a80c4ee1d08e4dee34803b7e578"],["/【每日早报】-2025-03-07 - 星期五.html","8c91357d63090a2b36ac1a4a25a6428a"],["/【每日早报】-2025-03-08 - 星期六.html","ecb7359030b9c89a42b82787a23e5f73"],["/分享壁纸(一).html","968bda58f9aaeec8af86b851c78ad3bb"],["/分享壁纸(三).html","d28c267d1efa35e3f42ee0199af32b5e"],["/分享壁纸(二).html","41f9cfc4def0e4c5e7ad92ca84cce48c"],["/又是一个不眠之夜.html","359f75191b43dcab94365cb1cbe67f3d"],["/咒术回战.html","676f15cd620652aab9bd9153df2f93eb"],["/开端.html","5f7d277a05e016d5cf769b99573317b8"],["/示例.html","6014a697e4a4058a3b67528814ab48c8"],["/计算机网络-数据链路(一)8-30.html","266658d9d9f5f2cde127f845a3f7ff7e"],["/计算机网络-数据链路(三).html","28a015f4de04e6873db79a19aa189fa1"],["/计算机网络-数据链路(二)8-31.html","a4e6a10ecfcd70c4cbafb7807e96e7df"],["/计算机网络-数据链路(五).html","d62d72a3780b4cf181b5fdc063ca02e5"],["/计算机网络-数据链路(六).html","f86f4f55439400869ac56a2bd613c64e"],["/计算机网络-数据链路(四).html","6d9da63c13efe71d9aab38f9e275deb5"],["/计算机网络-数据链路层(七)9-5.html","f8cef9ca71d1ea033e9d0a4610b3c4b4"],["/计算机网络-物理层(一)8-28.html","715ff52e24b60f35f4d5bdefd7b1c85e"],["/计算机网络-物理层(二)8-29.html","3338102c3aaf6c465e365039f6dad16a"],["/计算机网络-网络层(一)9-6.html","e4e11b6852602f4162c55912bf0cca6d"],["/计算机网络体系分层思想(8-27).html","afd848bfd5aecf8fc9186d8a50350121"],["/计算机网络性能和体系结构（8.26）.html","a7348c0c15c9fe0301f4bc7afa42a899"]];
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

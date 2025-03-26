/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6790a0777f2158288b65a775d74edabb"],["/Gallery/index.html","bfcd4fc3b7d3e0a46f02a1ae7c46f7aa"],["/about/index.html","6adad0e1dec421be4d371ec86c3d39f2"],["/archives/2022/08/index.html","3b023616dc7510058b718eb7068d2863"],["/archives/2022/09/index.html","769d24a5214351ac38c432667b2ae98d"],["/archives/2022/10/index.html","5b0f8f65a6d11e8697760cc96d4d98b4"],["/archives/2022/index.html","8989207581090b29ae24713be8db1869"],["/archives/2022/page/2/index.html","e793be855027f9c186784cb96b4fbf61"],["/archives/2025/02/index.html","23c089701045674a9720aeb9904520f6"],["/archives/2025/02/page/2/index.html","9db9f0e7823291ce87327f9128b0b317"],["/archives/2025/03/index.html","dd77e6fe250d856427b6216db1740f0b"],["/archives/2025/03/page/2/index.html","69cb9035b960420413e4ed7b3bc93b40"],["/archives/2025/index.html","65c7631f5c47069ca835f5281c5ba2a9"],["/archives/2025/page/2/index.html","8fd708694f7078d1ebc5f4242d2ede0c"],["/archives/2025/page/3/index.html","3fa5563563aac36c194593cccd2e9c67"],["/archives/index.html","6b61cab636cf91839f9097c3d918f5aa"],["/archives/page/2/index.html","3f7db4058bc53d8e20d6663fc35d0e61"],["/archives/page/3/index.html","640ba086ec0c10e36bcc7ce9fb510401"],["/archives/page/4/index.html","7ef5e84ad35a7d978cc90b70b1c834d0"],["/archives/page/5/index.html","e5e9a5b4448ad1c0febf95ee32f5579b"],["/baidu_verify_codeva-J5b2WWChcR.html","a68ff67baf0628229a526246eb8d1af8"],["/baidu_verify_codeva-cwyza0ZFJb.html","15512ce4e95b7d2b213ba1a4dbd864c4"],["/categories/index.html","36161d7257c8ae570abb761777ea87b0"],["/categories/壁纸/index.html","be6a3381786722fd471795005aefe91a"],["/categories/机网/index.html","024836e549a216edc6437fe84727837e"],["/categories/机网/page/2/index.html","6856906a52dff1323a15be922d873a1f"],["/categories/每日早报/index.html","fe0dd1690b8dc7280268861a60fdf7d0"],["/categories/每日早报/page/2/index.html","3b7dcf7457317b06e6e2e279cf559f41"],["/categories/每日早报/page/3/index.html","559132201d28b5293a1038e8b36f01a8"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","7e3a8e4082660f34abc9632840a2e481"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","13352721bcb411f2b06825fd33dc8e5f"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","b8505da5e32248177486153cf04fc197"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","9d04bff18028c08f82972eeb541ec475"],["/link/index.html","e3e99723503c9810dc743a769310d660"],["/music/index.html","60ff5ab5b58ba26cdc4b813d9848d7dc"],["/page/2/index.html","f3246c614f75e836007344dc8b11b6e7"],["/page/3/index.html","feea3714e41a420a2e0b47d79db87fae"],["/page/4/index.html","bff8ccd5ca367d102f3f18c6f5e4e436"],["/page/5/index.html","ca4f4e0b99faa5195ab2f8430701e3d2"],["/posts/1b0c78b3.html","90922e3008af08459950915cd68f2b8d"],["/posts/1b5b87.html","99d03d3dfd7380eb0da257b571a4ded8"],["/posts/28c755c.html","3fbcd4284ec33b3af3ac6ede578e00ca"],["/posts/330d6f69.html","4dff1995b37fc2dcbc2cb17ffb28f414"],["/posts/3b744803.html","b2874e994cad1168a724fe4afaccc043"],["/posts/3da05156.html","01cbe68d8cc430f21b65fb20072fd1a2"],["/posts/3e91e0fa.html","d4d8dd4a5a9bc6ae8e386373faf1004d"],["/posts/41c2c0d2.html","82a30ac9a576350c2154c9cd12b10cae"],["/posts/46fc5adc.html","a89502dbc648c24cc3dcc38d64064e27"],["/posts/493f6b85.html","8c9735bbd2179bf217eb5ada82f09464"],["/posts/497e40e0.html","6f7891e00301488626c5c6ac57e9f1be"],["/posts/4a17b156.html","4f411d891317d3f42deea7f35c2497e7"],["/posts/4e2d7b19.html","7a97f341fc55aabb73b4051c78121e41"],["/posts/4f81eb97.html","72c4c26da4e8e8d41d314a83f75921d7"],["/posts/53721e0e.html","ec7a41e0699e0d9d377e346427d5cb22"],["/posts/5dadd067.html","72f987bccbae90e22df218881d8f9377"],["/posts/5ff34642.html","699e898dcf9409435875e493a2fee21c"],["/posts/653abebf.html","0a54dce334a3a829e66b1a8a0cae9fca"],["/posts/681265c2.html","b6e0d1249c46b2bca4a250bedfbc47d7"],["/posts/6f44662f.html","97452b403344f27af699539ea053bc30"],["/posts/7207f70e.html","9714700b0696c8a2cbd03ec418479535"],["/posts/7289f891.html","f137bd618e62c2e8ec5a4138e8ebd9e6"],["/posts/732e626.html","7c175563c119e295a469137ac53476b7"],["/posts/7e13cc3b.html","b1dca41bf2eb2dd038ab6a5eb09d3156"],["/posts/80a7ecce.html","05be21c3cc17b5aa2a661a77751e4caa"],["/posts/821a4686.html","c2be8ee4f75a2d75def05a4090a9cfd1"],["/posts/8a741756.html","897e1f78c54b36a145870c051d13a61e"],["/posts/918d46c1.html","038d700f0f1509f13a7cc1edcb7914c6"],["/posts/93c8c0c7.html","e8cc6c1ce6a51ec93500a90600b6e592"],["/posts/9f057e9a.html","c1a42d1cee7d7839961cc6f3d475dbef"],["/posts/a7d437fe.html","72c5aaae9f8d666f1d2f69c2ec9f203d"],["/posts/ace4e4cd.html","13d54f599a6a2193a124ae482c37a933"],["/posts/af30ddef.html","3dc1ec51a3b7155c2c85fffb5f35d8d7"],["/posts/b1eb9c6d.html","982b0e01f7701edb739f947cc5537b6c"],["/posts/b564e922.html","d68a0c7a2d285363471dddfe94d80575"],["/posts/bc9a4dc7.html","517963301af8580b12779440515bd8a7"],["/posts/be543a11.html","47b99a77f1659d007d888dfb4c0b2304"],["/posts/c9b871f1.html","54ce2ce538c2cfd2a8132724f5278d3f"],["/posts/d6ef11e5.html","c390f591715d69ab197ec751caec4456"],["/posts/dcd6fdd1.html","1777c583de886d54226043a8f49e2f96"],["/posts/de24a124.html","bedd76dd07a32360156e1c390e07648a"],["/posts/e32cbcd3.html","041d321109ea5efac0627cd450f1b835"],["/posts/eebbc69f.html","446be43042a786a53f0162e6d1f55f6b"],["/posts/f08119d7.html","3ba023065bd403d51b192a3fbfb850d0"],["/posts/f7f51423.html","b1525071515a1b3480716810b1f7d411"],["/posts/fd1a8f9f.html","76ef441871145850b19c252c21726d35"],["/service-worker.js","e4872088f68feadc711b2357dbdc91e2"],["/shuoshuo/index.html","9051963c6b6f75ff690274a39dc1830d"],["/sw-register.js","c605a66ca9656a02c6928e0ac23fa875"],["/tags/index.html","c5d6a65ffc8f0f8357992a32ad61b799"],["/tags/【每日早报】-2025-02-25 - 星期二.html","215d1f18126467ee33adb835a18a8602"],["/tags/养眼/index.html","6675ee075f546d07f2d6e4f7108a4220"],["/tags/每日早报/index.html","d2ee13a6ceaf5ae158f480cde999cb68"],["/tags/每日早报/page/2/index.html","e90c698ad575a81a5e1da014032427b9"],["/tags/每日早报/page/3/index.html","b6552ef79d20de2d3bb316a346a9b2cb"],["/tags/第一篇/index.html","772a81df65b391bcb7e770d959fe282d"],["/tags/网络/index.html","8a7e947b305606a0dfed4b0d292cea5a"],["/tags/网络/page/2/index.html","6d1015eacc2c482f97c2b8910904eaa8"],["/template/index.html","26280120a66164c0fedc5b4e38d60ca8"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

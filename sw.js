/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1c8733e288785075d543152c9506779a"],["/Gallery/index.html","02a534f3c60449f56160d9388ac2ef9a"],["/about/index.html","4427faaadf1582a6bdecea28bba5748b"],["/archives/2022/08/index.html","1cc1291de900b0cf4d870a01a5c5f9fc"],["/archives/2022/09/index.html","19d720aeda9bb7c4e39737054ad55abd"],["/archives/2022/10/index.html","6c4db643d2e9b56dec0dcc9f968e4d3b"],["/archives/2022/index.html","457ed5503b06e5449705da1512689e09"],["/archives/2022/page/2/index.html","07ff673728a3085f89433913792a3374"],["/archives/2025/02/index.html","2bf8415cd20881805ee703233334cd15"],["/archives/2025/02/page/2/index.html","cf2badb52fd5d245157883976bfd85a5"],["/archives/2025/03/index.html","c5791cb73b8d4d3e1004caddc6524e10"],["/archives/2025/03/page/2/index.html","afc74ad432fa59cd236ac195083faefc"],["/archives/2025/04/index.html","8f2954be62714a3981a0fd416f066b48"],["/archives/2025/index.html","c57cfc793cb2f82492ca5844ea16553b"],["/archives/2025/page/2/index.html","44da369615a17551713d3b1bf25ef2c4"],["/archives/2025/page/3/index.html","dcd1039fbf31cc6e8f35bab0245436f1"],["/archives/2025/page/4/index.html","22d21de0c15a744a473e6350c45b8d6c"],["/archives/index.html","08eebe6398a53fdc17b37cce309f863b"],["/archives/page/2/index.html","7c9da722bc1a3cdcd7d52552ece4b977"],["/archives/page/3/index.html","697145523982e89b31c95a18a6976a1e"],["/archives/page/4/index.html","4890ed200317b0bd5898a43bbbdc6db2"],["/archives/page/5/index.html","3032327a2f341647771c3dbfdea7ab6e"],["/archives/page/6/index.html","97fd67e436511a950cd6b779a4a9c27a"],["/baidu_verify_codeva-J5b2WWChcR.html","93ffd432ad5a2c4cff091c023580b5c4"],["/baidu_verify_codeva-cwyza0ZFJb.html","e89d7edb4f4fed040f1e4434580e59d6"],["/categories/index.html","9bf117ef02e142d466135245eed0536d"],["/categories/壁纸/index.html","71040e2e9e4af149ec10fee7c26fc70b"],["/categories/机网/index.html","9834f87b736fa7495c8a8c2112e2144b"],["/categories/机网/page/2/index.html","9c0b93eff72d36fa18cdd65e7a68363a"],["/categories/每日早报/index.html","2687554031df366fe2fdd7ab31773c36"],["/categories/每日早报/page/2/index.html","8603b281ab87f7d80fc128f6a8554de8"],["/categories/每日早报/page/3/index.html","0a9a9680fddb94fcc9581fc7d7d73699"],["/categories/每日早报/page/4/index.html","033b7347f7fac9c104be5f0d1495517d"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","b517659fc93326b1172d13cd687ae34a"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","bf5aa73ea6f3a41fa5fd264089688a59"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","37a3267294b321bf466ed2df36c76d0c"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/python.html","29a508329a5f6f3594c444f490152b98"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","6d35e03b4c79059fd13622d37dbb6004"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","fb297649964e4ac1bdab5631536d196d"],["/link/index.html","43e96ba48f019aba91de567e6e382b7b"],["/music/index.html","a401063e0df8a925a2f8de88fc072c66"],["/page/2/index.html","b619590643f4225f4369564dd9141de5"],["/page/3/index.html","de9364e4812535e144244482fdf8abab"],["/page/4/index.html","8ba649865a6ac8561cc7fd10e2a6c5b6"],["/page/5/index.html","9c1f545be526718fdaacebf435ed1ff9"],["/page/6/index.html","f41b574bcb51c1aecb7c411e551eaa1a"],["/posts/12501d69.html","36774dd093e837a26968c34e682a894d"],["/posts/1484043c.html","1eaf9e8ce8dddac7cc52286fc311be21"],["/posts/1b0c78b3.html","f755ab9c884aa5f41a5d9800ec9755ea"],["/posts/1b5b87.html","ff8c70077f5912c16d29140e587411e2"],["/posts/2134d9d1.html","29a0c69ed90e90cfd6bddcc5c32ca118"],["/posts/28c755c.html","84634a54c78dbdb515d53686126f4a8f"],["/posts/2f77f294.html","7acf2b46317444a4921cf14d824a3287"],["/posts/330d6f69.html","fac8da9f4e0c04a13f041254e4d7405f"],["/posts/3b744803.html","013589892ff383f6a3a146f6b7ccf045"],["/posts/3da05156.html","94b86cb5b7496edfe4fe8162e57c79b4"],["/posts/3e91e0fa.html","3e92b34d01aac74dd7adeaae32f8319d"],["/posts/41c2c0d2.html","5f3b65934d09f62d973428e92d5b2f1d"],["/posts/46fc5adc.html","f4f355c948d517a42f59407f5a394961"],["/posts/493f6b85.html","fdbb4670399ac6ce6ad1253bccf8562c"],["/posts/497e40e0.html","a1a338ee7ebbd9384c9d6fe14df4fcce"],["/posts/4a17b156.html","9247e77ff0527bce4a8d5fe2bf6bd6f0"],["/posts/4e2d7b19.html","6f45be0e05000e8d0ad7216a01b8f09f"],["/posts/4f81eb97.html","e91a3e43dcfb0ef89c331f73b298ad5c"],["/posts/53721e0e.html","f81ce0dc01fb0c69d92dda8358862b3c"],["/posts/5dadd067.html","efea5e6fff5baa988e1a08977fe014ca"],["/posts/5ff34642.html","beba47e2bb0449cf30ba929665577b65"],["/posts/653abebf.html","03afaea7d3b77150a63fa3d59a720e26"],["/posts/681265c2.html","0e0468ae80a67e88e208d5c5a2eabf96"],["/posts/6f44662f.html","6e788196b2ff864b9bcd11f0c120b242"],["/posts/7207f70e.html","f9239b43b84d722991eb6bed52780667"],["/posts/7289f891.html","a18a3e0dd9410f038a3351b0304adf87"],["/posts/732e626.html","201e69403a3b064f32eda4e6fe609ae3"],["/posts/7c825231.html","cf37e177889d5df3e9b7d75fcb645a57"],["/posts/7cd0d214.html","f940383949c08466479ca74c28c9f063"],["/posts/7e13cc3b.html","b8462176aeda9805db369ec5993d5586"],["/posts/80a7ecce.html","e09ab9d0416392895156ee234d7ee386"],["/posts/821a4686.html","7fb25f1d916d2d6b3e6eca40082f37a7"],["/posts/8a741756.html","a818e98baa9b64720b2179eedcc674c1"],["/posts/918d46c1.html","b75c009fde6fdc887b006926bfb775bd"],["/posts/93c8c0c7.html","7cad8903068d7fd5db68c1489fa0e009"],["/posts/9f057e9a.html","3ecc03e54476bdf9e4c353eec8354589"],["/posts/a7d437fe.html","546668e1e29913e5e94733744cb0bb3f"],["/posts/ace4e4cd.html","a7b5300fa8bfffd84678186dc2f07272"],["/posts/af30ddef.html","c7cef69a385ac2aa8cf814a79a7f2c7e"],["/posts/b1eb9c6d.html","79cf92592baaeaa34277573de3969c56"],["/posts/b564e922.html","55ec5fbf9babc6ca1b8af05a3f535662"],["/posts/bc9a4dc7.html","2471a3ff95dc83860f487439343026af"],["/posts/be543a11.html","4472d71c462b257546dcde2483f61759"],["/posts/c9b871f1.html","358a8677acbfc3e957074d17a94404d7"],["/posts/d6ef11e5.html","c98f23b1de98827dbbc75de15d2a4f67"],["/posts/dcd6fdd1.html","8577cea6cc8cd0e8f02a731817c9d041"],["/posts/de24a124.html","1be9815995cca78ed6070e8818f58e83"],["/posts/e32cbcd3.html","9d51d8767869521297392d760149ef1c"],["/posts/eebbc69f.html","81e191396d92c2913791ebb164602eec"],["/posts/f08119d7.html","63266f9385d4b2b5134e7addff171c23"],["/posts/f34dbb9f.html","d1326639b4faaa7942b70e02ea238189"],["/posts/f7f51423.html","09319391e3551c851813d2f51c076f1a"],["/posts/fbda33d5.html","71655e3592491388da4cc39ffb88db57"],["/posts/fd1a8f9f.html","21b1b7dc3b0338f7c29e26dc8f6ec228"],["/service-worker.js","f9c5dc98ef81b163385fe898639469d1"],["/shuoshuo/index.html","dfd9fb9d3418ff6f02bc425a13366b96"],["/sw-register.js","f2b4c57218946ca671283f84f2d19523"],["/tags/index.html","62d81f700f05ed7b1e44f6fedbc6f5df"],["/tags/【每日早报】-2025-02-25 - 星期二.html","cf558623febab0a326c6e349ccc54271"],["/tags/养眼/index.html","15af4ca257aed2e60e600cf536795137"],["/tags/每日早报/index.html","4d92825cd21e9c6eafbca7ce724a7cb4"],["/tags/每日早报/page/2/index.html","fd6416376c787d01e367622b7bdd21d1"],["/tags/每日早报/page/3/index.html","26c180dfee62202cc2c85e0bce992e9c"],["/tags/每日早报/page/4/index.html","f3b434e12ff95a4bbef7b9ddbadd11e7"],["/tags/第一篇/index.html","13191c94717102fc3af8842ee0f1ea17"],["/tags/网络/index.html","1bf1ccfb52d648d084bad9faa7846c45"],["/tags/网络/page/2/index.html","38b354e2c6025b7afd185299278e1bd0"],["/template/index.html","446a758ce4711fcec43e9b15e9c6b348"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

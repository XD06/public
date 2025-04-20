/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fd094b20f941ec4b803e2180cb93733d"],["/Gallery/index.html","0ff2449fc2d1cb4cc5327860a4498633"],["/about/index.html","be7d99608b63ed0056f82169361e6100"],["/archives/2022/08/index.html","e0143396aa07899260aaed0d91ff2b85"],["/archives/2022/09/index.html","ab52895b9c2beef14b7fd6aacd353708"],["/archives/2022/10/index.html","d4b428d412157e19a71ffc77c0c24154"],["/archives/2022/index.html","f761ad991eae68c8aaae6459ba83a47d"],["/archives/2022/page/2/index.html","cba874d98ef5433eace59be2833b25b1"],["/archives/2025/02/index.html","7594691fa37934d78ae048454c7e3816"],["/archives/2025/02/page/2/index.html","9c195585568e740661b39a6f40871f8e"],["/archives/2025/03/index.html","84fa86e92918492692fbc288910f3abc"],["/archives/2025/03/page/2/index.html","427a3e7149070e3a6a540b634aadd511"],["/archives/2025/04/index.html","907fd5643c068d021df6084c70c89cd3"],["/archives/2025/index.html","58f881a4c19c5121138ac54eeaab4e20"],["/archives/2025/page/2/index.html","d129a7ef19259f61bc0a7e4e8ce67db0"],["/archives/2025/page/3/index.html","574a6c90093301d67b829d93d8c5bf21"],["/archives/2025/page/4/index.html","ddfeb5783a0175b2c1f2b46300041a27"],["/archives/index.html","c5cdc01254aa5a90f0303d9ae14fab05"],["/archives/page/2/index.html","b50048318f3d95e8281c7dd3469ebc41"],["/archives/page/3/index.html","85b6275ed667c3e8c9b0b227499428fe"],["/archives/page/4/index.html","486d7b7f02c535735ffa0ec855ad0e1a"],["/archives/page/5/index.html","85c849e8215df4a72e4ddc9ed8045ad9"],["/archives/page/6/index.html","fb3246e60233e20f28f6d752ddb52149"],["/baidu_verify_codeva-J5b2WWChcR.html","95c9b6cce3c9d0cfcf77482bffc4a39c"],["/baidu_verify_codeva-cwyza0ZFJb.html","e31abd2fb2110dfb9e2626b5b6a2c712"],["/categories/index.html","562db777562027d8cbe8a4642eadb4a4"],["/categories/壁纸/index.html","3f3408b2fab7e9cd99ba93532c259880"],["/categories/机网/index.html","0e8eac987c9ca72090c5f3a1c376bec3"],["/categories/机网/page/2/index.html","c8bd496193ba31f37dd0e6b75b52541a"],["/categories/每日早报/index.html","f37319a06e3cf4f5ec14a8a45fd33c2a"],["/categories/每日早报/page/2/index.html","9487d88969c90e9e978e6b90d98b024d"],["/categories/每日早报/page/3/index.html","a9145e13dba98b02fb6537130a3d056d"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","feb0a6581bace927aa336280c0717060"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","ab65838acb76dc1b6ac28fd2eb562710"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","07c1f75037248ca33abd1bee97cfcdf4"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","f7b7929e5c97e763d727edccdf7bc2dc"],["/link/index.html","2cdb306914328702aa48025de6ef802a"],["/music/index.html","efabafccb87cfcffdfe63731837b3ce2"],["/page/2/index.html","58419473fae86010aa4fdd33cf1f4680"],["/page/3/index.html","112189966f0eb51954c34cc0481de6f5"],["/page/4/index.html","0b50265ca2ae9dcacf84eb4f0b4d880c"],["/page/5/index.html","b5b70afb9aa1e9bb8e02b09f35cbf7c2"],["/page/6/index.html","a4567aada6654b76eafa9026480eeb93"],["/posts/12501d69.html","69608aa599557c68a39cf84156fd6b25"],["/posts/1484043c.html","cda07066cec9a13a9b7340fc862ed85d"],["/posts/1b0c78b3.html","69258ac275c7f90b3553551270bd0b4d"],["/posts/1b5b87.html","23918b963471d955a13cd08260fde202"],["/posts/2134d9d1.html","4a2e6eb1648745053dcfbdb0a93a65d5"],["/posts/28c755c.html","e5e5d3dbe865caa1b2451eee21dedc50"],["/posts/2f77f294.html","3ead22f6febe318ad733fe991203dfb0"],["/posts/330d6f69.html","89b39b8424a2ac0722c29c0de6c398b8"],["/posts/3b744803.html","334cba7b7e7a6b1ca4c20ba12789207e"],["/posts/3da05156.html","9ea15d4c046f88b8df2d148d11da9dcc"],["/posts/3e91e0fa.html","1046db7eb9441662f2ca9629d48ac75f"],["/posts/41c2c0d2.html","e3cdc07ab4fb9c370266e86c40bf45fa"],["/posts/46fc5adc.html","c618d1a6789b7362c97ce396cec85282"],["/posts/493f6b85.html","f1c652680c3609339248e7f4bbb444f2"],["/posts/497e40e0.html","206ca0e7a2b99c562eda19525a49666e"],["/posts/4a17b156.html","d62e27ea321360dfa817d3eda2b45072"],["/posts/4e2d7b19.html","833d7a36fd3f26ef2718d4afed14691e"],["/posts/4f81eb97.html","6bd967614fab70dac6061c8d8a444b9f"],["/posts/53721e0e.html","3ba48d6fe0afaf6e7db9a6b275c25d66"],["/posts/5dadd067.html","bf96ea6c575a80a4a0d850feef0ac576"],["/posts/5ff34642.html","9c3da4a92338cc22067c2a54d1b35845"],["/posts/653abebf.html","560f0af8a92ab25733da0cf1c5cf2409"],["/posts/681265c2.html","08034a5b5422316e70c9c944e4c16748"],["/posts/6f44662f.html","acf078592191e3a33fb15c4ba8cfccc8"],["/posts/7207f70e.html","2af3aa94d374e5cc00e279c8155d9476"],["/posts/7289f891.html","f1e5cdda082cd3eda923fc5c19ae9e0f"],["/posts/732e626.html","173715854a631041b05a3031deb81854"],["/posts/7c825231.html","14cf5f07bc1d2cfb33019a51e7079f21"],["/posts/7cd0d214.html","7017e6c47650e60281c7ed74dae76228"],["/posts/7e13cc3b.html","8ab24ac0b4c44f0b4091caba238f2b84"],["/posts/80a7ecce.html","c11164db04b6748b3e6fcfdb711d88f0"],["/posts/821a4686.html","26776152b0574f15b8c64d8e937671c4"],["/posts/8a741756.html","2f612c9bea93f9c185d18bd5c3e25553"],["/posts/918d46c1.html","c9810b80ffd27cdad9f1f57b9130613d"],["/posts/93c8c0c7.html","21008a0f09c3b9faafac56076022355b"],["/posts/9f057e9a.html","65a5516cafa42ce2553cd9466bba512f"],["/posts/a7d437fe.html","da896ff05694306f0575b00c18db2ae2"],["/posts/ace4e4cd.html","63cc77f75d314db70ff5b75b9224284f"],["/posts/af30ddef.html","4419a6370aa6adcc23b52d0f5d439221"],["/posts/b1eb9c6d.html","f676e09970a39158d7a95cc01b10cdf2"],["/posts/b564e922.html","19222c0bfd40cee0b1058e98c8a2831e"],["/posts/bc9a4dc7.html","ad1981ae90062542d96f7134d171874b"],["/posts/be543a11.html","16948a64df05a4c7e9a9562c085e9036"],["/posts/c9b871f1.html","b080b566faa43ea1a559782a3b80813b"],["/posts/d6ef11e5.html","63bb00868716cd502f840d6cb466996e"],["/posts/dcd6fdd1.html","942900100c0a395d476406700274efdd"],["/posts/de24a124.html","4443e4173858a57ce73ec1da8cf90e82"],["/posts/e32cbcd3.html","5af6763de92f48db82aea066dbe9f458"],["/posts/eebbc69f.html","f6809fb9ad1a0f865e36fe329d01bb99"],["/posts/f08119d7.html","18c21a2cbcf9e9341cb641ab91a12b2e"],["/posts/f34dbb9f.html","c33ac4a1a244e80189c217922a24d324"],["/posts/f7f51423.html","e83f1b62669bc00f8c4bdf81eedb2e7e"],["/posts/fd1a8f9f.html","83fbbef393a259a3aa620ca6df05cf0c"],["/service-worker.js","b7a8e05096ea76dd4d2d34c8bd29f67d"],["/shuoshuo/index.html","7cf77292752bcb2347fd246cba59d3ef"],["/sw-register.js","06ba1decc6d731e0c14094f89ae4c7bc"],["/tags/index.html","102f9e7e8cd9f411e99fad668100c04d"],["/tags/【每日早报】-2025-02-25 - 星期二.html","c0b866ecaca8df53d489882632183460"],["/tags/养眼/index.html","7c03170277dcb4921c30c1507d82b534"],["/tags/每日早报/index.html","331e2b71c0da648571e0683db19818c3"],["/tags/每日早报/page/2/index.html","cefe4d80421d21b1513f1c671faa71bb"],["/tags/每日早报/page/3/index.html","2894a84b2a55e330f4dfa19ae7e8585c"],["/tags/第一篇/index.html","7ae0fed2bad72ee9eb04de6d5d00a4d5"],["/tags/网络/index.html","d214cc5050abbaa0fef9fcd70b4686e3"],["/tags/网络/page/2/index.html","1a1570d0a6c0319a3d133659de30b2fd"],["/template/index.html","8701855a46b397037f2888db8447fa6c"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

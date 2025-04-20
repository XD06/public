/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fd094b20f941ec4b803e2180cb93733d"],["/Gallery/index.html","b8a2d5782cf79c742bd64d480c20f65a"],["/about/index.html","1270fae759558f391e3d1dd97aa45ac2"],["/archives/2022/08/index.html","16ed9d96f08ffaa8955d758a7185dea5"],["/archives/2022/09/index.html","4080c906ece9d572d35772f30e4fd872"],["/archives/2022/10/index.html","267f37b5ecde22b5aeb3560be1a7ac8f"],["/archives/2022/index.html","f01fa9807d74a98aeba4744af2353be7"],["/archives/2022/page/2/index.html","2bf888292780e9375dcc51fe89c78c8c"],["/archives/2025/02/index.html","df784e2cff6e00615b3648a0bd6d6cd9"],["/archives/2025/02/page/2/index.html","0c87ffc3feb9238a7dc49d37cb8d3af5"],["/archives/2025/03/index.html","9708d77f812ac4dd6fe62b9f39f8f04b"],["/archives/2025/03/page/2/index.html","bf310c7fa0fce6e8a4d185040370bc66"],["/archives/2025/04/index.html","fd4384731395099aeccba8b7a0772753"],["/archives/2025/index.html","4b40b3bc2298f145a6e7ac204aa96529"],["/archives/2025/page/2/index.html","47cd4e0aca907a16e7af707e2fdcbccd"],["/archives/2025/page/3/index.html","a51017a075420cefd58379be47b38578"],["/archives/2025/page/4/index.html","99126275315541e3742016a177e12d28"],["/archives/index.html","056d3d53ed7432d8e7d578cf8bedfdac"],["/archives/page/2/index.html","9a69d012881b23013af0a98df7f25a42"],["/archives/page/3/index.html","375f3945b1f0b2fff8b518df6f29eeab"],["/archives/page/4/index.html","0a42340bf3b68f02d0ee8cce78541eb3"],["/archives/page/5/index.html","b19df150688ea9ff2a46ca73171a6d96"],["/archives/page/6/index.html","a7e6589256e6026d30410de7e16169cb"],["/baidu_verify_codeva-J5b2WWChcR.html","30ab6e4030bb016bf326578ab6dccb4d"],["/baidu_verify_codeva-cwyza0ZFJb.html","23e42f0c864447b481bf8821dda86be0"],["/categories/index.html","019e7f51ffab8c6ecf32d01688ebd53c"],["/categories/壁纸/index.html","1f82f1951a79cea9aab684e25edcd552"],["/categories/机网/index.html","a15e79714c5716b2183655f1b8e0faf1"],["/categories/机网/page/2/index.html","c15c6a29c8011a0a762e089d96253754"],["/categories/每日早报/index.html","2134d5dd47efa645e15807d0e988d5bc"],["/categories/每日早报/page/2/index.html","270231365994f966114d01059ad246c2"],["/categories/每日早报/page/3/index.html","f22c44750adde3019ab6a7e8a7567f7c"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","b424fb00fda53faa0802e2c375b2f239"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","46ba9bf26ca5cf0c4a8b85000a78db20"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","78f41e6b98c83a9e4da2b8849847873a"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/python.html","a60d90c13137de9ba9151a6917d555e5"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","121acdf57720572f24cee6b562ac437a"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","9c8f3a0f2842e748ab7fa62d332e0625"],["/link/index.html","1bd544bfacfbebbe6088139c18f8bbf9"],["/music/index.html","6258feff7816bade8cc0c32b145ccb16"],["/page/2/index.html","ea0a49f63004d15eb3ff2e695af3f97e"],["/page/3/index.html","48e3beed3fba8e50f3b39f695936518a"],["/page/4/index.html","b71ce5729bafaf18d894866c6bfc3d13"],["/page/5/index.html","5867488f8ac380881e6cc1120fd1ef5a"],["/page/6/index.html","9fe9fa89473f19e36e27e1dd9a734609"],["/posts/12501d69.html","69608aa599557c68a39cf84156fd6b25"],["/posts/1484043c.html","cda07066cec9a13a9b7340fc862ed85d"],["/posts/1b0c78b3.html","69258ac275c7f90b3553551270bd0b4d"],["/posts/1b5b87.html","506f948ae05087cb60ba81cd8f3ce7de"],["/posts/2134d9d1.html","4a2e6eb1648745053dcfbdb0a93a65d5"],["/posts/28c755c.html","e5e5d3dbe865caa1b2451eee21dedc50"],["/posts/2f77f294.html","3ead22f6febe318ad733fe991203dfb0"],["/posts/330d6f69.html","893c15199468ba88d5cae233d73a25b1"],["/posts/3b744803.html","334cba7b7e7a6b1ca4c20ba12789207e"],["/posts/3da05156.html","9ea15d4c046f88b8df2d148d11da9dcc"],["/posts/3e91e0fa.html","2d8b35cbf70f38d40764f9ec587dc005"],["/posts/41c2c0d2.html","dd6b493cf33999636496f964667b3e58"],["/posts/46fc5adc.html","61c9eee424b5338de6d856e87e437fdd"],["/posts/493f6b85.html","e28e9b79fc8e817091d4bbbde5fb48bb"],["/posts/497e40e0.html","b31fe48997bb217159a113f4f5419b35"],["/posts/4a17b156.html","20ce93cff841d4ea43b91395f593a817"],["/posts/4e2d7b19.html","833d7a36fd3f26ef2718d4afed14691e"],["/posts/4f81eb97.html","6bd967614fab70dac6061c8d8a444b9f"],["/posts/53721e0e.html","af1796060af0c415bce6e28969d9abfe"],["/posts/5dadd067.html","bf96ea6c575a80a4a0d850feef0ac576"],["/posts/5ff34642.html","0f694581b77cb28f37950d3a6009fae6"],["/posts/653abebf.html","db938caa106e724b6a69f2647797658c"],["/posts/681265c2.html","057fd3753dcfb2f9a4eb16d5b0fe972d"],["/posts/6f44662f.html","acf078592191e3a33fb15c4ba8cfccc8"],["/posts/7207f70e.html","be193d50e32da94154c4a4e6273703ae"],["/posts/7289f891.html","8e9709814b60ca886aca787708dc5f79"],["/posts/732e626.html","2aa626a293ee90126a1a1b753971138f"],["/posts/7c825231.html","14cf5f07bc1d2cfb33019a51e7079f21"],["/posts/7cd0d214.html","9410a4321b7d5582c35102c0348e1ab2"],["/posts/7e13cc3b.html","42cce206b7e312010077714728e3e8ab"],["/posts/80a7ecce.html","351189bc792ae7bd31874b2049ce06e9"],["/posts/821a4686.html","68387c70728f4cf26cfb5c23742ca703"],["/posts/8a741756.html","f4dcc66e5ce0e5e4b26bb98d6026002d"],["/posts/918d46c1.html","d6495c5f2664c1787c03fb1b26dee260"],["/posts/93c8c0c7.html","21008a0f09c3b9faafac56076022355b"],["/posts/9f057e9a.html","8448925de836d547ff1209e62da3de2d"],["/posts/a7d437fe.html","da896ff05694306f0575b00c18db2ae2"],["/posts/ace4e4cd.html","58145c15215ae30e0e77fbf936b090b3"],["/posts/af30ddef.html","4419a6370aa6adcc23b52d0f5d439221"],["/posts/b1eb9c6d.html","d2ef7ade8ae40b4d8f0bf7208fd5b43c"],["/posts/b564e922.html","19222c0bfd40cee0b1058e98c8a2831e"],["/posts/bc9a4dc7.html","fc6abb6e10d21cb7c1eb5939b5acecd0"],["/posts/be543a11.html","fa2cbfe9518a4da7a0b6762adee7f3f6"],["/posts/c9b871f1.html","2295e3b6ddf337a79c8eb24b4bf24969"],["/posts/d6ef11e5.html","a5b1cdbdcd35f2658d08ddfa54d8b37c"],["/posts/dcd6fdd1.html","098ede0c674625f668e3c5d32777e7a2"],["/posts/de24a124.html","e5daa8271e96b777faf62c21b2dd9a68"],["/posts/e32cbcd3.html","638ae2333bb79352b85a711874a5d0e8"],["/posts/eebbc69f.html","f6809fb9ad1a0f865e36fe329d01bb99"],["/posts/f08119d7.html","f4c7145cad75824aaf4e143eaf1931bf"],["/posts/f34dbb9f.html","c33ac4a1a244e80189c217922a24d324"],["/posts/f7f51423.html","50902fc1f620011626c5f01e5ab30a42"],["/posts/fd1a8f9f.html","83fbbef393a259a3aa620ca6df05cf0c"],["/service-worker.js","f86de979e41c6d2a52baa74e9af794e8"],["/shuoshuo/index.html","1495cf635e0b96061e22d4832e0d1bcc"],["/sw-register.js","37540a71a49e63992c956e4e01a011fa"],["/tags/index.html","973ac10d2e6a84b85e424972e308d112"],["/tags/【每日早报】-2025-02-25 - 星期二.html","bd4044ed81c1d316f8971222b075acc6"],["/tags/养眼/index.html","d2a55de0384c3da83be841ead2c19455"],["/tags/每日早报/index.html","5c4a267fb7e84616b99fbee4c51c3da1"],["/tags/每日早报/page/2/index.html","2befa01952f5f305202f204e6187e76b"],["/tags/每日早报/page/3/index.html","50e5e4a3f593e62e0cb02ca507ecb03a"],["/tags/第一篇/index.html","e76385dc3382acd8bb93128cc07b00eb"],["/tags/网络/index.html","a332201901be94a7f7aabd664d129f5e"],["/tags/网络/page/2/index.html","1ac9c89640560dcfed78c109834c57c5"],["/template/index.html","f9b2278e442c6d8c3f027a2978256c38"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

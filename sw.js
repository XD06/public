/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","df0bb464af2c2c71a09bb3158f22ede9"],["/Gallery/index.html","7b97a14e270c34dd833a3711a4e515da"],["/about/index.html","2704a97874d1e2e9a10189f6628799d2"],["/archives/2022/08/index.html","09cc751cda86c7a928908ba24a680276"],["/archives/2022/09/index.html","7f588c2f5fde1fe4b89d7dd728442555"],["/archives/2022/10/index.html","a6a13bacb51138bd9c571ee1d9424720"],["/archives/2022/index.html","74f40897c4972bc02ab1159480d529ae"],["/archives/2022/page/2/index.html","0ff5928e2037fe019a75091b574c0de8"],["/archives/2025/02/index.html","30e5961ebdad81699204d0faf22fb8a6"],["/archives/2025/02/page/2/index.html","751f9c850ac2fc27b578258517ba7008"],["/archives/2025/03/index.html","c5b35d6d033e6417a94c38b1e319da8c"],["/archives/2025/03/page/2/index.html","ab63a1032a9e8ff58cdc2eba0d1530c9"],["/archives/2025/04/index.html","b4a99b267ef5b8fa235998c84bca715f"],["/archives/2025/index.html","d31d594dfcfbd4afff83ef84230b6254"],["/archives/2025/page/2/index.html","9a015c0bba47619e3cbe8295ea39dde3"],["/archives/2025/page/3/index.html","ce64ca0859710f6617af7c4d532919ed"],["/archives/2025/page/4/index.html","2b29261b04d77c9829637011e34d7c35"],["/archives/index.html","a62f6c5871659d66ce87f4eafb649fe2"],["/archives/page/2/index.html","17d51a95b1494bb4223288887c93439e"],["/archives/page/3/index.html","fb7c5975fb2a299b89048c87fdd35b9d"],["/archives/page/4/index.html","963bbc3aa3b5c8005d34001709232067"],["/archives/page/5/index.html","f4b8a0e5eb901fb6226e5055fb163f17"],["/archives/page/6/index.html","9225574f26c73ca1c8bcbc1da5903e83"],["/baidu_verify_codeva-J5b2WWChcR.html","dd606c17684bf7eb607c27521c0527f0"],["/baidu_verify_codeva-cwyza0ZFJb.html","ba322ed00e2825dfbfbdd0723a007673"],["/categories/index.html","866b2bfabc04215c84be551cb1689055"],["/categories/壁纸/index.html","b059a81c7158223a157f62c3d0fa15e9"],["/categories/机网/index.html","207550f951e48baa7aff20e946830d57"],["/categories/机网/page/2/index.html","2c282d5e6ac3fd7a4542e50f5c09b3e5"],["/categories/每日早报/index.html","05d9eae1f91cc7ae09cc778c68740ab8"],["/categories/每日早报/page/2/index.html","f8452f7f1ca168e13328bce600db6701"],["/categories/每日早报/page/3/index.html","5c913532805ebe814b561de947c4bde9"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","7df12c9101d878425d222e113cbe4c0a"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","18c51156afbdc8fe60516f6244fc73d3"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","715194976c72d3e84bc0217879d752a9"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","3c8051fd6640a2a66e28726960f8eb2d"],["/link/index.html","2d924b91be06c38dd732769e261030b2"],["/music/index.html","0ba5134e22534e8d5eab4a510d388ca6"],["/page/2/index.html","5e4133e88a1ce6b0b2d7889089f48f8b"],["/page/3/index.html","b6fd6adc9b90fa5aa1a64084d4a6a93f"],["/page/4/index.html","a38d8459e63d784a29017c19e540d019"],["/page/5/index.html","bf4fa8d664c1afce21310779a7d01938"],["/page/6/index.html","2c29f4d9c2cfe88354ba8a4e3435635e"],["/posts/12501d69.html","83f7f39db93bfdaab70eebb1a99bb955"],["/posts/1484043c.html","30d5525886efb68679cf6f2a88831b52"],["/posts/1b0c78b3.html","6c9e239f08b8412afb27d7641813fb3d"],["/posts/1b5b87.html","853294e72538e72a3eb6b62abc487f5a"],["/posts/2134d9d1.html","1266cb91146b968afe1644a5f3b209df"],["/posts/28c755c.html","f94eca138d9904d6460615668fcfc3df"],["/posts/2f77f294.html","20c3efc7d7ecee85486252dad7fcfc3c"],["/posts/330d6f69.html","74f8b7bf7c4a9a9a7aecb48d87d7faa7"],["/posts/3b744803.html","1aa3b10f8a9a4b2bda6fb955b48a3afa"],["/posts/3da05156.html","06098dfefe1f3c7985fb14362b8937bd"],["/posts/3e91e0fa.html","23c4e8988f1839e791619bb2e4aa2166"],["/posts/41c2c0d2.html","cd6d114f5825f22e0393b12ef2271fec"],["/posts/46fc5adc.html","670cbf1b382be7a65c807c7b1fde12be"],["/posts/493f6b85.html","aa18e0b4602e4eb96a72188e2781a284"],["/posts/497e40e0.html","06a7723cbf874020accad929aabed334"],["/posts/4a17b156.html","0457bc53f6605efb3c205ab3a55d923c"],["/posts/4e2d7b19.html","51572f7c6ce868adb5ae4e4813c8268e"],["/posts/4f81eb97.html","e42126342af76b5044e932341383bacf"],["/posts/53721e0e.html","45fbc107c4edf23442320aac80c4f6f0"],["/posts/5dadd067.html","68fe8efeb0bedc186279d53aea1e2995"],["/posts/5ff34642.html","a467bc2c0857309227c282775ad0b515"],["/posts/653abebf.html","f1fc7349db10991b71519a5cb20b897d"],["/posts/681265c2.html","222229f731d8a098d5c28c240491fb70"],["/posts/6f44662f.html","e93f47d5e39ca55f23c6afe4dc115bd3"],["/posts/7207f70e.html","92a6007f786c30fb77db14997ec947f4"],["/posts/7289f891.html","68da645f563f3c7e00c324733c39da62"],["/posts/732e626.html","1719c747817e3cf2a031cb6c4a42aa35"],["/posts/7c825231.html","b3962abce6ba086ad66dbc4696420d59"],["/posts/7e13cc3b.html","fbc817f7d99da3be15c445ae223e4ff1"],["/posts/80a7ecce.html","9bd17d2ea3ff0fc20d6d2215b9e70892"],["/posts/821a4686.html","0cb93955da4d66c924efb71ceb84d304"],["/posts/8a741756.html","58d5571ba496ccb7c027e84e3be88c0b"],["/posts/918d46c1.html","8891ff8ba30975a920b83e6c0e20982e"],["/posts/93c8c0c7.html","d944d53c283fac196f05849a14678fb2"],["/posts/9f057e9a.html","cae21ff019a5d16f59271e5d5416fb7b"],["/posts/a7d437fe.html","9166730877a113cbbfd205dd53865a46"],["/posts/ace4e4cd.html","c53ab9e60b29a6ca96ae8a33d429a42f"],["/posts/af30ddef.html","5997b9e5ba0ca4beac13d05e679e8fd2"],["/posts/b1eb9c6d.html","1465a23da7fbd5e90ee96d84371f800e"],["/posts/b564e922.html","a82427173194676758f7997068d3133a"],["/posts/bc9a4dc7.html","aef86229eba588ddc1a712d7cd4bcc56"],["/posts/be543a11.html","99f8026de20dd272ccdc3f36f6f4348e"],["/posts/c9b871f1.html","61e4df31c12f3a9ec37ed10799292bb1"],["/posts/d6ef11e5.html","6b5c02db985b8fe62db74b58d62d3278"],["/posts/dcd6fdd1.html","028530891344e989eb3bcccb49a1ea2a"],["/posts/de24a124.html","f3f7f0628ba15334132dd4de2802c4c7"],["/posts/e32cbcd3.html","ed775d7ddd476d76a8071ba9072c31c9"],["/posts/eebbc69f.html","31d985354eaffb304b6087c9fb86ee8f"],["/posts/f08119d7.html","13b52d215fe35a01aebf8eee735819f8"],["/posts/f7f51423.html","2a31a53d722dcfbadd16c1dd1e2dd600"],["/posts/fd1a8f9f.html","b27ff1a6648924ed82fc788eb4698269"],["/service-worker.js","e7baf347aa918e0178517a597129478b"],["/shuoshuo/index.html","4bd036c8a125bac5eadbd3061d56153b"],["/sw-register.js","6a6930c2e367c13206fb5eb355c89fb8"],["/tags/index.html","0599d826aa7d017c15ed8312adeddbfa"],["/tags/【每日早报】-2025-02-25 - 星期二.html","4eb4240d22710a3df6d96da94d369797"],["/tags/养眼/index.html","55ace7d4ebe7532439f8f18cf6385a5c"],["/tags/每日早报/index.html","b9cb44ecf35dd059499c0120134332a5"],["/tags/每日早报/page/2/index.html","4e129cf9f475c11b4a8f7b44bc4dd2af"],["/tags/每日早报/page/3/index.html","0b0902db2098cc98401fd89eb1e94e45"],["/tags/第一篇/index.html","13910bb61f2ed910349253859c1428e2"],["/tags/网络/index.html","f8d67449984d444c1625ce6ee183f1bc"],["/tags/网络/page/2/index.html","8f242cf08ce5c56ab2b9d9eee0ca8c7a"],["/template/index.html","69ff10ede31b4033e31dd030bf755a4d"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

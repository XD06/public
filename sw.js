/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c99815bfed1f11c12c251a601b680811"],["/Gallery/index.html","6453494cc21bacb68b88ab06131f3a81"],["/about/index.html","6c705901373b5c60457d63a4cd06af77"],["/archives/2022/08/index.html","4c9b7fad3de67376dd15681171bc8ca9"],["/archives/2022/09/index.html","e0f676e85efedf657cb08d0f5d2da13e"],["/archives/2022/10/index.html","a76e7874389c2ec3b78815cdae70325a"],["/archives/2022/index.html","6956c1c02a5970ba160eea7d52e4ef0b"],["/archives/2022/page/2/index.html","fdc8a6e8978546bd97ad84b66f39e443"],["/archives/2025/02/index.html","38b0fd7b27bed2b3fba00f22c37aabf1"],["/archives/2025/02/page/2/index.html","07153da194c0ab6bd1a2f922bf9fdac0"],["/archives/2025/03/index.html","280e81064f3704606bf9c62d7270b3b3"],["/archives/2025/03/page/2/index.html","3a03620face39f33153ea65f72ec2da4"],["/archives/2025/04/index.html","fca342da73129568af959d6d5bb288e6"],["/archives/2025/index.html","3b86782b06ecf936a7ae30edd5635972"],["/archives/2025/page/2/index.html","b755d3e7644bea87039b6c59848359e9"],["/archives/2025/page/3/index.html","e74bbcb246b7cb81f6d1e583cabd6d55"],["/archives/2025/page/4/index.html","3e8fdab0aa76f4817f063cbc039afa81"],["/archives/index.html","3312aac1c6a1113a4b44ce36420b44d2"],["/archives/page/2/index.html","0021a71b2891cab58c29078cab2f65b5"],["/archives/page/3/index.html","5c3967b6f7bb77f0e12947033372584a"],["/archives/page/4/index.html","fa711b71a1df02344b74dffadf944e1f"],["/archives/page/5/index.html","a04efde658acac654f6b0d68d186e044"],["/archives/page/6/index.html","66f59c9b0127cc45d5c0aa34288ad822"],["/baidu_verify_codeva-J5b2WWChcR.html","b348cc42284a1465c3e872dfd2ba60fe"],["/baidu_verify_codeva-cwyza0ZFJb.html","035fa3b9f62895719d1fe81878fc52e7"],["/categories/index.html","5cd3f40cc70f4f3f72e315e83868e5b5"],["/categories/壁纸/index.html","fec0048cd85ea21c1bf692dcc511ea5a"],["/categories/机网/index.html","86fa1d2a52b5d43bd6784c0321da5dec"],["/categories/机网/page/2/index.html","ee8332bc411eb7b23f048cee1cc2635b"],["/categories/每日早报/index.html","6f91de93db3951f61dc535a905f2bb60"],["/categories/每日早报/page/2/index.html","48e2557da3930667746caaf68b523ca4"],["/categories/每日早报/page/3/index.html","37541dec1f6e3d518621e34f38a1f433"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","73ce5229e861ff4f9e2acb2d8438ba2d"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","5b222ef180bc8cbe3c290d34f0937de2"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","1de7c55e72df6d9154fd345256ac2d53"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","bd45bf42253a2b8815f1393459f302f0"],["/link/index.html","219c97002117f13e21f92f20a993230c"],["/music/index.html","255ce1bc017f2385224f5024eaa0e490"],["/page/2/index.html","e3bf5d29fa02e81280d0b6e74e2e2aca"],["/page/3/index.html","1ac078bbb29350045d1d33c63fa1e715"],["/page/4/index.html","b45e36521afd422c90ad59681ef00ca0"],["/page/5/index.html","169f132032897403ebd421297566d042"],["/page/6/index.html","bfd0cdcc50f2996206574a0b55b36976"],["/posts/12501d69.html","304defd2498bd171e2ae938044fafd87"],["/posts/1484043c.html","151f13d7654299c5b4907d22a22ed0f7"],["/posts/1b0c78b3.html","85b2b14b99d546c5d4de37b07c93a0fa"],["/posts/1b5b87.html","61bf3ae82645d07f9ad8f653ac495524"],["/posts/2134d9d1.html","02a89ba3929a916c7a94d66e3399e8d3"],["/posts/28c755c.html","465c0b815450ddf38570e99b308e8711"],["/posts/2f77f294.html","7433f2aca125006851fb93061758c46c"],["/posts/330d6f69.html","67ca7a9b6cdc822d1c40b00e61c37cca"],["/posts/3b744803.html","b15ec75088981e0f3229222df3acbc2f"],["/posts/3da05156.html","cbe513d48f30dd4dd7e3bd11eb3d814b"],["/posts/3e91e0fa.html","9ea4f322d1fd79d0b38b49d9eded0e46"],["/posts/41c2c0d2.html","49f9b2ac791860ca8e01702297e5f753"],["/posts/46fc5adc.html","bc15a09d942c710b779ab58e98048425"],["/posts/493f6b85.html","a14e6e435f3b950f723ba152d3b91d67"],["/posts/497e40e0.html","f70a643344ae50d7739eff7bd0a88c36"],["/posts/4a17b156.html","fdf45013f60347ba7627c0054ad85b77"],["/posts/4e2d7b19.html","89945cf348da147696b24b82cb8ce13a"],["/posts/4f81eb97.html","03c91978d662575e1458ffdadab8b1c1"],["/posts/53721e0e.html","11198992670488733cc51a2291d864af"],["/posts/5dadd067.html","22a99a53cd6f12fcf3d03d100967b738"],["/posts/5ff34642.html","705c80ef1567af4b2eeab6307de5bd34"],["/posts/653abebf.html","18d1e827580dc2e107f0d9b7767aa239"],["/posts/681265c2.html","d3f365c18a6bbe7907fe4dec5998a780"],["/posts/6f44662f.html","66066a8038e4e59efd0cbedd54c5f926"],["/posts/7207f70e.html","6ac004f9d4192836a6540311f2fba05c"],["/posts/7289f891.html","798be9c0b946401b7c748c80a7886f07"],["/posts/732e626.html","d044fcb361e01ef60952d6c86045d58a"],["/posts/7c825231.html","da3f5ad808b6fbd4055f30a02d31cfac"],["/posts/7e13cc3b.html","4bb3372dd0a8ac4e4c598257edbc2d24"],["/posts/80a7ecce.html","9d4eafefb23dcc4da7208088220f812d"],["/posts/821a4686.html","107344550e2a2671b4742d17e68d4d77"],["/posts/8a741756.html","a1c7093a4cd1f14b6a3b43082e48861e"],["/posts/918d46c1.html","d01fcc2875ae0c18ed5702ffd148b71d"],["/posts/93c8c0c7.html","5c2b3bd77233c1cf90c19e841d09b4c2"],["/posts/9f057e9a.html","53d130829aaf3c55a85c1bf47d37119c"],["/posts/a7d437fe.html","c013fac9c7c1165170736d7eab239a7c"],["/posts/ace4e4cd.html","5731743f248cd27efaaac919718be3f8"],["/posts/af30ddef.html","883e1dac7fb6ca644d41bafad37fbc86"],["/posts/b1eb9c6d.html","604e9ba3b389a533d27d6b67ce0f6646"],["/posts/b564e922.html","7420d08931c282043f778d068a89cfff"],["/posts/bc9a4dc7.html","5bad6748c07a5a86068ff06cca5bf430"],["/posts/be543a11.html","2492d5e9aba775e00550dbd2b7081690"],["/posts/c9b871f1.html","fa7d35e75d51b95e26a3a28fec60a149"],["/posts/d6ef11e5.html","8ce1eb8820a7f91b2495e4bb5dd4f04c"],["/posts/dcd6fdd1.html","7b78226dc70c98449b04bc56b0dbb1f6"],["/posts/de24a124.html","22fe07f3a4cfb9a2d3efb9934aa5cb70"],["/posts/e32cbcd3.html","5882ced03dfb8ab6a87eb653932bbf60"],["/posts/eebbc69f.html","4f1aec70f41b9428cde1cb9764caa466"],["/posts/f08119d7.html","b6a847802791348af7fd338863d5990f"],["/posts/f34dbb9f.html","16a6cfefde92487b303c517d836ef8a8"],["/posts/f7f51423.html","e04d51f73275e1e46bf7cbf748adecf0"],["/posts/fd1a8f9f.html","25c9ab15fc41d84912b10e11da7a1246"],["/service-worker.js","990352428bde3515943a4b8c2c28128d"],["/shuoshuo/index.html","606e5b37eadaea45b85ed81258c37489"],["/sw-register.js","30483ce01404aede1f943281d80322a8"],["/tags/index.html","90287e579061dd7669a31059243d883e"],["/tags/【每日早报】-2025-02-25 - 星期二.html","09bd7fa6416e92f189812e14589c8927"],["/tags/养眼/index.html","18461f73cfb09fbfec6c13347a7618b5"],["/tags/每日早报/index.html","59118adb52640289e0f241801d08b16e"],["/tags/每日早报/page/2/index.html","e534296f3f926c35336e3019a8ef13ba"],["/tags/每日早报/page/3/index.html","1ff5583fe0f77ae8189d8f54172ffb4c"],["/tags/第一篇/index.html","5bd05f3c0642776a450dcbc0dcb5a8ca"],["/tags/网络/index.html","54bb9f6020e8fee276d41968cc5c8dd9"],["/tags/网络/page/2/index.html","a88e4c6293a0e81417e6acb8066e6f84"],["/template/index.html","dbd7aadc71f3faa85b668f7a5be7d186"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c99815bfed1f11c12c251a601b680811"],["/Gallery/index.html","12fb48b8f1e819dd6b4a8c390ae4a121"],["/about/index.html","f51a3e42d16f1a26af881404087ac089"],["/archives/2022/08/index.html","220583b7951b35949dd900493ba20d16"],["/archives/2022/09/index.html","2af266f78f18d584dfc155ccdb345efb"],["/archives/2022/10/index.html","02db79a5d0fa3e78d1c39dad66062ea2"],["/archives/2022/index.html","1080e64f80c96484d4cf6bad2a33e919"],["/archives/2022/page/2/index.html","ab79db1b5a543b78b7d170ef0dbedd0b"],["/archives/2025/02/index.html","ab2b67268d56a02e9458129de4c02674"],["/archives/2025/02/page/2/index.html","db06671c422456b5a210bda2f83eb29c"],["/archives/2025/03/index.html","2b83c58d55b944560479dd1b4f0a6a0f"],["/archives/2025/03/page/2/index.html","04f0128fa8218d2c4f9a3915d71b8091"],["/archives/2025/04/index.html","244779aa146e602c24a4733ea280ce6f"],["/archives/2025/index.html","d9726e5318dc3017ccdfcef8af52a023"],["/archives/2025/page/2/index.html","36c0eb0c1a708d76cc040b343fa4622e"],["/archives/2025/page/3/index.html","e06cb752eb2ff5b5b1c9779185198603"],["/archives/2025/page/4/index.html","c24eb9c2e8eaffb8fcae08d367902bfb"],["/archives/index.html","5378b178a662e5e6182c8a164a3bcc10"],["/archives/page/2/index.html","307a52e793de1194adbd21422059cd87"],["/archives/page/3/index.html","dc0073643345c4d23e656c37cfdbdbb1"],["/archives/page/4/index.html","c2cee379c0ecd992ec8d0d4796dd580b"],["/archives/page/5/index.html","d91cc99a487b2ee5465090ab450236e1"],["/archives/page/6/index.html","cd57a9b186e75a1515ff5a5dc6796dc2"],["/baidu_verify_codeva-J5b2WWChcR.html","8424384db07c333a749c97c00dc0db00"],["/baidu_verify_codeva-cwyza0ZFJb.html","7c3f928c6b4d06adbd8d1f7cf78e3f65"],["/categories/index.html","4f81fd4efaac278a2c68ba47caf54714"],["/categories/壁纸/index.html","fc7839449a4d1c5c6ecf970c9637a974"],["/categories/机网/index.html","055ea479d080e172a1899cd48664bdca"],["/categories/机网/page/2/index.html","d98796ef550a194c685a7dbdcbf713e9"],["/categories/每日早报/index.html","e0351c21fba108a4f26b3fc9967f3a18"],["/categories/每日早报/page/2/index.html","21fd1e85ad9552e380145dd3ba1d0b94"],["/categories/每日早报/page/3/index.html","2aa4a8d84e0ad90af384a60c5343999b"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","8299c753013a82115b0e90068334a8b1"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","7d2b6c45b1094035e3b632f0826e61e8"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","7a3c51b62fe2471c69f6782c4f906ea5"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","8cb3a9e2f39d836e4aff7bcd9eb33d62"],["/link/index.html","72b31762a62f608f8d2debccdff6790b"],["/music/index.html","c6248352db31cd7307ef7f82d6597767"],["/page/2/index.html","f397b6a0be0bd8b69ff78bfd99c13412"],["/page/3/index.html","baeced7ddca721da4cf3700c3a12d803"],["/page/4/index.html","f1256d86f8c334d58361090985671a37"],["/page/5/index.html","e9dcba727f9e2936b846ee9d8e3d01f1"],["/page/6/index.html","3769634dd3e62db63b2fb035c14bb164"],["/posts/12501d69.html","304defd2498bd171e2ae938044fafd87"],["/posts/1484043c.html","151f13d7654299c5b4907d22a22ed0f7"],["/posts/1b0c78b3.html","85b2b14b99d546c5d4de37b07c93a0fa"],["/posts/1b5b87.html","7cc1421e93696f9b6c7960c150e2b111"],["/posts/2134d9d1.html","02a89ba3929a916c7a94d66e3399e8d3"],["/posts/28c755c.html","465c0b815450ddf38570e99b308e8711"],["/posts/2f77f294.html","7433f2aca125006851fb93061758c46c"],["/posts/330d6f69.html","6881c4158c0e6ee13567cc63a8ad32a1"],["/posts/3b744803.html","b15ec75088981e0f3229222df3acbc2f"],["/posts/3da05156.html","cbe513d48f30dd4dd7e3bd11eb3d814b"],["/posts/3e91e0fa.html","4301b63d824933b01070a6cbf169af71"],["/posts/41c2c0d2.html","a2b838ae485cf5b343f4a9541568a184"],["/posts/46fc5adc.html","681bb876ad078acefe742304312ec1fd"],["/posts/493f6b85.html","e3a57d9627b2e80f97dc5dc472928327"],["/posts/497e40e0.html","d37aaed837480abc2eb2c5a4dd9883fa"],["/posts/4a17b156.html","07a625a64e8277f1521be122e42a8f59"],["/posts/4e2d7b19.html","89945cf348da147696b24b82cb8ce13a"],["/posts/4f81eb97.html","03c91978d662575e1458ffdadab8b1c1"],["/posts/53721e0e.html","bd03c6a15f513cc0693296fd0a74bf28"],["/posts/5dadd067.html","22a99a53cd6f12fcf3d03d100967b738"],["/posts/5ff34642.html","93144a7115b81466b687761e167c7abc"],["/posts/653abebf.html","deb919a3c878491acbcc612f55a297ce"],["/posts/681265c2.html","0832169d5517b31096e2204f0d03aa22"],["/posts/6f44662f.html","66066a8038e4e59efd0cbedd54c5f926"],["/posts/7207f70e.html","a1f97e80197ef24d426766f0d4b58f98"],["/posts/7289f891.html","e43424d8609684830f74f171bcafc730"],["/posts/732e626.html","035703db6c02948039ee6b60ebb68a31"],["/posts/7c825231.html","da3f5ad808b6fbd4055f30a02d31cfac"],["/posts/7e13cc3b.html","54b0e878c556af707f9edc056d379786"],["/posts/80a7ecce.html","b4801810cb24261a265de6580b77af9b"],["/posts/821a4686.html","ed88947dd2cb08575b85c1198522282e"],["/posts/8a741756.html","374ed9135d8eed91377b31055581f380"],["/posts/918d46c1.html","97e8991d02f599d64f14d7339ca4c595"],["/posts/93c8c0c7.html","5c2b3bd77233c1cf90c19e841d09b4c2"],["/posts/9f057e9a.html","7fbd8ec4e3513dc25fff125910568744"],["/posts/a7d437fe.html","c013fac9c7c1165170736d7eab239a7c"],["/posts/ace4e4cd.html","d95083a1975410574d1e102a8467a0d7"],["/posts/af30ddef.html","883e1dac7fb6ca644d41bafad37fbc86"],["/posts/b1eb9c6d.html","e3606e0cd091715dce28d038cc02b3b3"],["/posts/b564e922.html","7420d08931c282043f778d068a89cfff"],["/posts/bc9a4dc7.html","44e919bf69352768f328474cf70444d5"],["/posts/be543a11.html","90f8da57398e43d227f442a59af5172a"],["/posts/c9b871f1.html","19cb660d239ab0beff2ef6f3af3a375c"],["/posts/d6ef11e5.html","9dd36362824ff5296aeb5c8db9bddf27"],["/posts/dcd6fdd1.html","a07b3373a90b6543ee54f50264ebde79"],["/posts/de24a124.html","f1fe536fc9c4d88d5eab444c18f97be9"],["/posts/e32cbcd3.html","258f2f4d20799a6cd535775be0a51003"],["/posts/eebbc69f.html","4f1aec70f41b9428cde1cb9764caa466"],["/posts/f08119d7.html","877d88d43c99eb0e9160ea96e17d7249"],["/posts/f34dbb9f.html","03fcc27be4126a88ea7bf967875d0e82"],["/posts/f7f51423.html","1700764bb467fb57af93f2645c4fccf4"],["/posts/fd1a8f9f.html","25c9ab15fc41d84912b10e11da7a1246"],["/service-worker.js","95fafaf9338b348d06f65fc6e2e657b6"],["/shuoshuo/index.html","febe81154100b0d5a8f6353c2166a98a"],["/sw-register.js","2579e46a3a06acd202a511dffbeec40a"],["/tags/index.html","3d5ab0e56dec82f0f320457c9111dec8"],["/tags/【每日早报】-2025-02-25 - 星期二.html","ceb898007a58b69920c2c2ca9b8bd595"],["/tags/养眼/index.html","d8c399653fc09b9bc42d8676464e21a5"],["/tags/每日早报/index.html","a55642f3d3223bf3f2a594747e0b84e6"],["/tags/每日早报/page/2/index.html","d7499031213491de57b78dc0a06c85fe"],["/tags/每日早报/page/3/index.html","acdbf976bc33a2a434eef6284354b114"],["/tags/第一篇/index.html","bd76a694dcb3e6ee589ecbc3d37aad8d"],["/tags/网络/index.html","8bc8c297371c57a62f9ccc9d0e793471"],["/tags/网络/page/2/index.html","e270f46a888379eaa2edd398655a9a21"],["/template/index.html","15b91f54961cf6727ef79777470cabfa"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

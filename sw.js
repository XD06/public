/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fd094b20f941ec4b803e2180cb93733d"],["/Gallery/index.html","4a278927490b526dea2924fbe9b4e52c"],["/about/index.html","a7f4bacbaeaf1127ce1c276e4cd0ed3a"],["/archives/2022/08/index.html","7cf751d281d48fba9373ce3d7af3cdbb"],["/archives/2022/09/index.html","0b870c91ba050833518564a4bc692d65"],["/archives/2022/10/index.html","421d227439d760c245c44977b32e3424"],["/archives/2022/index.html","2e21e6634dcba6c82e531db51b002fb4"],["/archives/2022/page/2/index.html","004edb0ac1ebe5d06807fbffb16e3e13"],["/archives/2025/02/index.html","85b61f47019b0e3d49950f5dc48aa131"],["/archives/2025/02/page/2/index.html","1f9e717b7f2ab3166b1d72f74c92eebb"],["/archives/2025/03/index.html","3041bf39bed9082bc065f1b6c03ef4bb"],["/archives/2025/03/page/2/index.html","e22200bee4785c1f398f0436d4ac79f9"],["/archives/2025/04/index.html","70e2662574d929e98611fe812152a244"],["/archives/2025/index.html","ec1721c7e4a1e6592eb1481f4f241b32"],["/archives/2025/page/2/index.html","0cd03b0b9bce32fc8c78fb316b3f59c9"],["/archives/2025/page/3/index.html","03c4e4e18a4444fbf3fccdab5638127a"],["/archives/2025/page/4/index.html","bb0a276070733554b62f12b9b5d4195c"],["/archives/index.html","352d9f766195ee666320ef28f6c35094"],["/archives/page/2/index.html","a0741d8a58277f9bc1a28998da3a00da"],["/archives/page/3/index.html","214b98bdc8b9f9723657161849ec138d"],["/archives/page/4/index.html","e42eccbaa5fab84ce24ad817a1ca97a9"],["/archives/page/5/index.html","fa4771d424de773151d78f010df855fb"],["/archives/page/6/index.html","76f1c5cd6017aa023a8868d0181cb48c"],["/baidu_verify_codeva-J5b2WWChcR.html","054ea2e90a19fbcea078450f1893711e"],["/baidu_verify_codeva-cwyza0ZFJb.html","fafe3afae57cf5c92f6b3c914978484d"],["/categories/index.html","779143153221c7a479d1c8f413ef8bcd"],["/categories/壁纸/index.html","0b7c6db5c4722942e70d927f83c46627"],["/categories/机网/index.html","ef0b172bb05bf774cbd5bd5c9aa65318"],["/categories/机网/page/2/index.html","0dc1930333d9deb167ed46e6d675951f"],["/categories/每日早报/index.html","58697b52b6433357c48b2c1958643e7f"],["/categories/每日早报/page/2/index.html","12ef8539e2b212b6d0c91756f365de5e"],["/categories/每日早报/page/3/index.html","d208bb16269c54ad4dfbbf307d883621"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","4ab1d3c74145113be5b91d6d3b284ad1"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","f2816e430f01a3ce745be1d87e5ae1da"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","9e4e5bca1162db771810be9aee4da46a"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","cff187ad25a78e5a5122dcc4397d2e2f"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","c6e7b3d316964093365b49cf510a270c"],["/link/index.html","b1b967cf11405febdd95f98c43217027"],["/music/index.html","f7052cb766769295a1ec58b91855dc0f"],["/page/2/index.html","9f013f1faf4d2c1cd617db9273ce5f5e"],["/page/3/index.html","5845b42129a566c7246bf7b52d3c379d"],["/page/4/index.html","e7ea48f97b8e94e1dce86c5e49457201"],["/page/5/index.html","bb4db63c727a77d6945423685bb9d1f6"],["/page/6/index.html","25f54fc9d1affc9267a2107c967d211a"],["/posts/12501d69.html","69608aa599557c68a39cf84156fd6b25"],["/posts/1484043c.html","cda07066cec9a13a9b7340fc862ed85d"],["/posts/1b0c78b3.html","69258ac275c7f90b3553551270bd0b4d"],["/posts/1b5b87.html","9c137f9cba8e0ed51d4325d8fd98679d"],["/posts/2134d9d1.html","4a2e6eb1648745053dcfbdb0a93a65d5"],["/posts/28c755c.html","e5e5d3dbe865caa1b2451eee21dedc50"],["/posts/2f77f294.html","3ead22f6febe318ad733fe991203dfb0"],["/posts/330d6f69.html","373b041f3c0bf09b9b667fd1b89b7413"],["/posts/3b744803.html","334cba7b7e7a6b1ca4c20ba12789207e"],["/posts/3da05156.html","9ea15d4c046f88b8df2d148d11da9dcc"],["/posts/3e91e0fa.html","b89376d32fb882424de73ab17c6e0022"],["/posts/41c2c0d2.html","89aeab6128afabf6459eac70e32879bd"],["/posts/46fc5adc.html","0e6a13d4569329b32183d7d2c642298a"],["/posts/493f6b85.html","fa6dd968fd36fc8ae85ce723464650d7"],["/posts/497e40e0.html","9b445ac64aa599592e84abd00832ae9c"],["/posts/4a17b156.html","e316b487969d1aef2f2cdfea58dad8d6"],["/posts/4e2d7b19.html","833d7a36fd3f26ef2718d4afed14691e"],["/posts/4f81eb97.html","6bd967614fab70dac6061c8d8a444b9f"],["/posts/53721e0e.html","07b8062d02aeea8bf54317ae2a4f6940"],["/posts/5dadd067.html","bf96ea6c575a80a4a0d850feef0ac576"],["/posts/5ff34642.html","8e2132e6d537ac01e67e414c2e5be65f"],["/posts/653abebf.html","1c005047ffbb820721cebfe657e913c4"],["/posts/681265c2.html","3e2a754a681edf769fbfb67a2aa782d0"],["/posts/6f44662f.html","acf078592191e3a33fb15c4ba8cfccc8"],["/posts/7207f70e.html","fe2e53edf5fa215b4479799dcf5c7f4d"],["/posts/7289f891.html","40c3b1c16af83576998a9dcfe20f2e45"],["/posts/732e626.html","a33e98cbb43ea5efabfa32a30f8cc621"],["/posts/7c825231.html","14cf5f07bc1d2cfb33019a51e7079f21"],["/posts/7cd0d214.html","e98ed0ee26eea1c86babb8d94f1ba6f3"],["/posts/7e13cc3b.html","b46c62fddcb1f3cb76589fe968a65752"],["/posts/80a7ecce.html","c6b7fc691ea0acaaa47970897b3bd16d"],["/posts/821a4686.html","ce61a4bf77169dd91911ecc530313b3d"],["/posts/8a741756.html","6be2c658c676ff4647059d77dbc0e699"],["/posts/918d46c1.html","82e65df6d650b5be89f6fd0518ee6f58"],["/posts/93c8c0c7.html","21008a0f09c3b9faafac56076022355b"],["/posts/9f057e9a.html","95c3a645f09898d63d1f7bc9a1d24b80"],["/posts/a7d437fe.html","da896ff05694306f0575b00c18db2ae2"],["/posts/ace4e4cd.html","dbeb00ee321216f151663ed2030d69a5"],["/posts/af30ddef.html","4419a6370aa6adcc23b52d0f5d439221"],["/posts/b1eb9c6d.html","f77afd5b0abcf30a62163d1fec3593f2"],["/posts/b564e922.html","19222c0bfd40cee0b1058e98c8a2831e"],["/posts/bc9a4dc7.html","e97617b7ef869030abbc8d4ad44ee166"],["/posts/be543a11.html","4442801b7c9613458fca9f74cd2806cb"],["/posts/c9b871f1.html","197b4068b9ace4bc1d0b10653ef52584"],["/posts/d6ef11e5.html","153fffd0ac4b8c84eeffd470cc1d77c6"],["/posts/dcd6fdd1.html","d83c8ff9e50d6275e9ffbdd17ad63a21"],["/posts/de24a124.html","91b3db55949813e335834e3f8b36f72a"],["/posts/e32cbcd3.html","a3cbdce791cb717b4a6966e6db6b389a"],["/posts/eebbc69f.html","f6809fb9ad1a0f865e36fe329d01bb99"],["/posts/f08119d7.html","5195776ba4d1ea2dfca07e97736209eb"],["/posts/f34dbb9f.html","c33ac4a1a244e80189c217922a24d324"],["/posts/f7f51423.html","bbc17933709451cd5881b9df7f306bf8"],["/posts/fd1a8f9f.html","83fbbef393a259a3aa620ca6df05cf0c"],["/service-worker.js","e3b2e6e61c799c10efafa7a883de784b"],["/shuoshuo/index.html","d726bb1ff9592f2c72c178171b1d9506"],["/sw-register.js","aa72b63e5bdcaa2f74f5b3a014d9cf08"],["/tags/index.html","382d5ac02a2305605370f27e20d07ec5"],["/tags/【每日早报】-2025-02-25 - 星期二.html","373936de7ac7fa864d21d085ec700d05"],["/tags/养眼/index.html","79fd3c3d33d112c5c5bae50ab63b6d86"],["/tags/每日早报/index.html","13b3e7f7c2207cbf45a7f633d7e21d27"],["/tags/每日早报/page/2/index.html","d711f868a3e6701b47e72c964620e2a0"],["/tags/每日早报/page/3/index.html","5e39b03dc2858f78a49d922b7fdb9979"],["/tags/第一篇/index.html","5e8f3d974de5d833e600ad209813f73f"],["/tags/网络/index.html","66df5ccfbdf5e7ec17f98acf9112fe74"],["/tags/网络/page/2/index.html","f82df6238308077797c40b953296196c"],["/template/index.html","99c4c22c56e297b7af39237164d2526d"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

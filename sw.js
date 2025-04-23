/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ceb2ed91aee41bb378152bf1381f094e"],["/Gallery/index.html","1f6db6031aaea2c0c6b723991028fdbf"],["/about/index.html","06eb01ffff5338e7c0d1ba3ab726fd81"],["/archives/2022/08/index.html","41a1f73ea8f5c45a2e6de6314aab95bc"],["/archives/2022/09/index.html","83658ef8183af809f7cc0f5df2e55dfa"],["/archives/2022/10/index.html","95a5072d7245e9319446d5de3f75db46"],["/archives/2022/index.html","9376933d13a02387509ec715470c266e"],["/archives/2022/page/2/index.html","8b100b6cf44fd2f0be6f79e956dc226e"],["/archives/2025/02/index.html","0132d91d5c0e9ef55cddbde28686a5f2"],["/archives/2025/02/page/2/index.html","249e06ad6675e094ed385d3bf18c9c1e"],["/archives/2025/03/index.html","66febb803848e07677f95a53915cdd21"],["/archives/2025/03/page/2/index.html","0f0e4cf7a5cffa67084a8fdb487612d2"],["/archives/2025/04/index.html","a60a1a2891cac55fcc9f5146c791c300"],["/archives/2025/index.html","7f8974f3f1d7ddcdf0c177270c116e66"],["/archives/2025/page/2/index.html","d32125f23d3a7e8a05b76405b046062b"],["/archives/2025/page/3/index.html","7a1e023616ba633380933e10b1e7c582"],["/archives/2025/page/4/index.html","7db476eefa5b4914deb3a2b3588bb232"],["/archives/index.html","beadd5c49e407aa2feab186be1200201"],["/archives/page/2/index.html","2f096e2f36ac347e4debd0a197308b13"],["/archives/page/3/index.html","0b9e08621b96d512e5b068b529888e78"],["/archives/page/4/index.html","eb259b0a7045e6fc735977408e85fcac"],["/archives/page/5/index.html","4e42a78d06b32619b789803898581445"],["/archives/page/6/index.html","8d98f407e78f6ce06a7761cf57b07863"],["/baidu_verify_codeva-J5b2WWChcR.html","4190a16eb319c7f66c896d2508d79a51"],["/baidu_verify_codeva-cwyza0ZFJb.html","8174d10a596cfcf4eb792deddca4da12"],["/categories/index.html","475d67b5dd2a42a9c818d890f08e5395"],["/categories/壁纸/index.html","a49ccf07c94f673b2226f0c54efd5a4c"],["/categories/机网/index.html","fba9bebeba16a5bbc4828ed46cdadc1e"],["/categories/机网/page/2/index.html","96244cc51a66fc360d821b9752f8eafc"],["/categories/每日早报/index.html","a3ea3d6fc820bdac9147ed7a371ff4a5"],["/categories/每日早报/page/2/index.html","f21b3a8d2196793423f4cc2d7039880f"],["/categories/每日早报/page/3/index.html","35ceb2eb85f080db0917aa12dc0b4f5b"],["/categories/每日早报/page/4/index.html","930a83e4636ffc69daad2700f65d193a"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","bc1921fbf6d9df715b0a3092347ebcf8"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","6be01402f484d6c3b7ddf1f238afd81b"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","d48970096d4d1a4f65bed85047fcac05"],["/js/ai_plugin.js","2e8bafe7451ea96da22df59e37abe16a"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","0252a708f4fbb192df553373e73ae96f"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","d5af89aa10c63f677e8c3c25a913fa08"],["/js/test.js","b2f31cb46d8415f8c3553165f4e29dc6"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","24733e61fe975486452a1b0822ca7d70"],["/link/index.html","f30cd6eb18e9efbc9922e22f51a6db9c"],["/music/index.html","d8330ba460734298c92b61307f6bfb01"],["/page/2/index.html","3306a34f6dd2b98b268a52daa8bf0382"],["/page/3/index.html","296ebd575f8c11812e9eac433fa9eda2"],["/page/4/index.html","34e16c410e0414ec8d65d10a7f1fa0d8"],["/page/5/index.html","27a39c008f865097a708267fe411a8e0"],["/page/6/index.html","36f592570ecf0e95661b6ec890f44d7a"],["/posts/12501d69.html","6efdad3336e6a012683a85a774b6c0c8"],["/posts/1484043c.html","31ad7649f7ce174e6358574be31c34d8"],["/posts/1b0c78b3.html","eeb502b44a97bbe4270c0dd0d8aaa391"],["/posts/1b5b87.html","5031eaf73691f87cb4bed7c4a3fd84e3"],["/posts/2134d9d1.html","8b279b50761691ca894e03c2c504da43"],["/posts/28c755c.html","4b63b5bb20cfa34122bd5c278ffb563e"],["/posts/2f77f294.html","6a4e06311a980f39ad0879e118857d10"],["/posts/330d6f69.html","c25153d594a2fd4dc39146270b0c60f9"],["/posts/3b744803.html","020fa3e4b9867a12605a9997a00b10ef"],["/posts/3da05156.html","8ffdc2bf8892294dcb90a6d2024e4249"],["/posts/3e91e0fa.html","b460d7474649bc2bf3f9be7b9ef8e1ec"],["/posts/41c2c0d2.html","890a874d8a45f37c516f92b981301b6a"],["/posts/46fc5adc.html","7a2f1fcbf0b7826695d945d694fda901"],["/posts/493f6b85.html","83ed7056519fe56fe024e63c8e4c89d6"],["/posts/497e40e0.html","201d2ffec8d371c706498b979a812df9"],["/posts/4a17b156.html","290c3265bd90f743fabd5f13d0a4c22a"],["/posts/4e2d7b19.html","9d4a19b36847da2b2b67b375614d707f"],["/posts/4f81eb97.html","aec1aa4e889fc5b832fe16942fc7541d"],["/posts/53721e0e.html","45ea2de56330c1a043e018f58a7f665a"],["/posts/5dadd067.html","5c4bc555f2a88a15c07c9a5caba094d8"],["/posts/5ff34642.html","a53fc6d58a759e532603fbe9d85777fd"],["/posts/653abebf.html","5b333824c30bb3f44f9b098398cf325c"],["/posts/681265c2.html","fd0ede95c854c96ea68cb33fe72bb1ac"],["/posts/6f44662f.html","06a383def98974148f83d3bc3b9cb42c"],["/posts/7207f70e.html","af39c15abcaeefb0b22c6cf144c08de6"],["/posts/7289f891.html","709f2db41e5c2ca486b6302a2cebc995"],["/posts/732e626.html","0283fb66c593e65fa6b0711cdf2d0d28"],["/posts/7c825231.html","5e7f8620f5cecbe8008701147acab4e3"],["/posts/7cd0d214.html","ca99699bb00de898288a8a70b3e21afc"],["/posts/7d9071b2.html","56ec68431bd872b67e487ca6bdfe03ea"],["/posts/7e13cc3b.html","333bd668436d61dcc72018cbf03d02d0"],["/posts/80a7ecce.html","06bb8e5e1c999b1564136de7217a2fc8"],["/posts/821a4686.html","5777a1171649ad0511a3f1c5414db708"],["/posts/8a741756.html","b91831a6e2ae5520cc414488a243fb08"],["/posts/918d46c1.html","00fdb8e7470247e110f57ce72a22dcf8"],["/posts/93c8c0c7.html","77bf0c71a5104fb7d0405fd36b67fc6c"],["/posts/9f057e9a.html","119daef1586e2fa21b6ae9a1773f35e6"],["/posts/a7d437fe.html","2b4be91b7bc6b4f3fa29bd794aae12a8"],["/posts/ace4e4cd.html","dab0ea97594d6787570c447048f90c8e"],["/posts/af30ddef.html","72c37e00fac04e922aa0e12830b616bb"],["/posts/b1eb9c6d.html","44f23832bb8b120435e2351348eb3955"],["/posts/b564e922.html","5d06b52446b513c227ade35aec3eef52"],["/posts/bc9a4dc7.html","7d88fc47958372ac42058e45f35facc3"],["/posts/be543a11.html","2a4bbab919db26d962232139ea68acfb"],["/posts/c9b871f1.html","b26708393467cb58ab797c875277dc11"],["/posts/d6ef11e5.html","eec00b2e50e8247dd1cbb02ce7743b0f"],["/posts/dcd6fdd1.html","d0b1227da2524a6924ec97b4a63382ef"],["/posts/de24a124.html","3e71cd8a74341ea81c6ab70049cdcae5"],["/posts/e25a3e3a.html","395b13bacea62329e671a53040caa0ff"],["/posts/e32cbcd3.html","2f12be02d49fcf2ca383af5a0689b2cf"],["/posts/eebbc69f.html","f9a518f6a2b42d9e5948060ce3aa4f7f"],["/posts/f08119d7.html","f6afbffe8b80ccc1d491fd4fe36d4210"],["/posts/f34dbb9f.html","c6223c718dbbff920e4b388e36ba13e3"],["/posts/f7f51423.html","f2dab1f5937e8231d3b63fbacc824781"],["/posts/fbda33d5.html","cfa52474b999411d60caf6cd3176a907"],["/posts/fd1a8f9f.html","14cce7563fd95f3acea59d24e2d1e0af"],["/service-worker.js","069ae858054914fe32a0eeeccc1a3279"],["/shuoshuo/index.html","755f6043bab95243a5743404a4f4bc4f"],["/sw-register.js","d1c5254de1b32835f9a288f9d14a0853"],["/tags/index.html","8dfabe21c584965e63eaa062780c8277"],["/tags/【每日早报】-2025-02-25 - 星期二.html","6368e2d9fa60a8e3cdfd69fbe37170ef"],["/tags/养眼/index.html","ee76d8dd7ef9824a6a7af549fe8096c9"],["/tags/每日早报/index.html","198e58ba6d867d91556c6ebd10810e04"],["/tags/每日早报/page/2/index.html","78ccadd13dd9e4fe2b1e4f8473b5a965"],["/tags/每日早报/page/3/index.html","1272ae1bc932f50ce5f7e7c07113f2ce"],["/tags/每日早报/page/4/index.html","ff0a05e3853cb4830ebdfcd79ad2e016"],["/tags/第一篇/index.html","49afe69f65ce78131101e6c92a504a10"],["/tags/网络/index.html","6055cb0c987df835e6a3fa4bc9a53a21"],["/tags/网络/page/2/index.html","5b7e4cae18e9209664a468d34163bba6"],["/template/index.html","3a7a762e036b7e1c3cf27afa7775548d"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","34e02cad37968b96d132288dbf3486bf"],["/Gallery/index.html","a7b8dbf12f749061adff75da811fa2a6"],["/about/index.html","ef0596d57bf9f58ac1ccf05c0c769220"],["/archives/2022/08/index.html","b68a8169e0f6a2374730f592abf7b7d8"],["/archives/2022/09/index.html","bbeb56494dc557fe9272859bba538612"],["/archives/2022/10/index.html","8254732c0ae3867f79a0c92036d96014"],["/archives/2022/index.html","6e1112a465ae7099037ca3c9608138d7"],["/archives/2022/page/2/index.html","780bda71c46ec1d4777fce34b04a843c"],["/archives/2025/02/index.html","c9c2d5ffb52731ca3a6e3555a1795669"],["/archives/2025/02/page/2/index.html","28f7f4bf61ddfbe5bbe0589aa1292391"],["/archives/2025/03/index.html","5d12f066c7c3af5326c73f47c28afeec"],["/archives/2025/03/page/2/index.html","930f2040e89521c1d6e13a5191bab6aa"],["/archives/2025/index.html","286972512f0375b97dc4e18b80acf4dd"],["/archives/2025/page/2/index.html","b81e22fec50c049a9fbbf7ac50228fff"],["/archives/2025/page/3/index.html","bd37304d517c445479ec8de8685a81d1"],["/archives/index.html","bfb01fa0cb566d221684461c794d9131"],["/archives/page/2/index.html","18b06f0a7df778578d94756ed26b4b92"],["/archives/page/3/index.html","38d0e884923448b862f348cec321b767"],["/archives/page/4/index.html","5062c665163228780030c17bfcf81b33"],["/archives/page/5/index.html","f4f764b3ac4b7c377fcec0548c11a9aa"],["/baidu_verify_codeva-J5b2WWChcR.html","9276b3a22218f7c521a52bf87958552f"],["/baidu_verify_codeva-cwyza0ZFJb.html","e40ee70f48ab2820b24ddcf12f6906ef"],["/categories/index.html","b043562649ecbc9e4f18ededaec7d1e3"],["/categories/壁纸/index.html","dbadbde373fd661324bda1b0df066d80"],["/categories/机网/index.html","e485f6ca3d93a77d816f235260145198"],["/categories/机网/page/2/index.html","de1a7001274f4e928d51162c4c394608"],["/categories/每日早报/index.html","fc1cb65347da4d455af2bd2f571ba9cb"],["/categories/每日早报/page/2/index.html","ba2351593e92782e06b830ac95032ffd"],["/categories/每日早报/page/3/index.html","d955d4a1443fce5427a0a340ef726d23"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","7e3a8e4082660f34abc9632840a2e481"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","3e686df2efe98d019e4b9069ee18939b"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","da0d157ee271dded7f423b225c36e835"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","96a8b5a3705498da1d1795bbce492bd1"],["/link/index.html","3888fece0df7d0de961487b59fc2ba42"],["/music/index.html","c12b2bd299958ecd3acbcba55483d46c"],["/page/2/index.html","db65364780641a1ead4bc9bc4a7745d7"],["/page/3/index.html","24cc89a8bf1484d805e3fa0960d0c157"],["/page/4/index.html","6332baf6c79b8a791af28a68140fdb54"],["/page/5/index.html","bd41b34549d306fd37b022df8ad0c384"],["/posts/1b0c78b3.html","291b1d79f9a7f831d4a32ec0533571eb"],["/posts/1b5b87.html","d52afdb27d7f1c26458243662725d408"],["/posts/28c755c.html","0e5da28bb013b5d95ddd1db41a8227d9"],["/posts/330d6f69.html","ed5099a7975ca66eaa84fc25aa733bad"],["/posts/3b744803.html","72f9a9be63ce05a1d03303a1a6e7d8bd"],["/posts/3da05156.html","f0a4c7b5328c2ab97f3a398f53d39422"],["/posts/3e91e0fa.html","0eb139893a41ba02febebfff5ac51d56"],["/posts/41c2c0d2.html","3f45370041faa17d19e6745e33317845"],["/posts/46fc5adc.html","5272e836b8c2d94eec260cb396fbd588"],["/posts/493f6b85.html","9954539a0b8a68cee3306c4dde010729"],["/posts/497e40e0.html","14d80ddc9f184f3ca02efbd82a050412"],["/posts/4a17b156.html","4fa408f07df3858ab73b757f16830db7"],["/posts/4e2d7b19.html","b87203f0022b28e0a6f102f69db93525"],["/posts/4f81eb97.html","13be0d23f1d76446f0db20fc536bcab8"],["/posts/53721e0e.html","0aa4fe766d53ae81ea4986117722d7a7"],["/posts/5dadd067.html","d9ecd65edb3a749e21493bfbbde2848d"],["/posts/5ff34642.html","0b0b5e39ce58f5110370ea03f462b9fa"],["/posts/653abebf.html","eeb6ffc8c7b1deab2cc4b0f67803953a"],["/posts/681265c2.html","fdb3198d765329dff1256ba105da66e8"],["/posts/6f44662f.html","39de8256b098e27dd0e1845fee3b3abf"],["/posts/7207f70e.html","820b08a07697078d883c31c0680a6bb7"],["/posts/7289f891.html","45d67c9159266b9357c9a56872daf5ba"],["/posts/732e626.html","9e6c06d4b11d6a589aa434a50f12b921"],["/posts/7e13cc3b.html","adba76a95187a4697a225cd2c61fb7d7"],["/posts/80a7ecce.html","0f56009220e4a49c2655e4fb2152f70e"],["/posts/821a4686.html","7ce811398ccf4ef8d53297c0bce88fb8"],["/posts/8a741756.html","eff5d7b1540af5340ab1dfd64a5371cf"],["/posts/918d46c1.html","52709720176020952aba16cd6b6fd12e"],["/posts/93c8c0c7.html","93e351b0024f48dc1af12290ce44efc2"],["/posts/9f057e9a.html","c8fdff6a1c04a6ddc3b44a171cd77ab3"],["/posts/a7d437fe.html","6c6f26d6e1704cb7b3d21c4e8190d66a"],["/posts/ace4e4cd.html","2dcafdd027a033bc3a1b536a4822179d"],["/posts/af30ddef.html","9550ba9d7257338eba382c6fe67345a0"],["/posts/b1eb9c6d.html","088c7d71b4808e0b39da3f91c39e42ef"],["/posts/b564e922.html","59d056f87ad0b95cf527b01a8a18d8fe"],["/posts/bc9a4dc7.html","e6a1b7545738fb251ab090f174a51903"],["/posts/be543a11.html","8e894be9df4730de38043a67ab425b43"],["/posts/c9b871f1.html","4f805f3eaa52a06caf59f91ec614b74b"],["/posts/d6ef11e5.html","81b0ff37f70b70c9271b384be604e594"],["/posts/dcd6fdd1.html","ac011c1b7b2809d54bf5a54729322874"],["/posts/de24a124.html","ca740026ae6aec2ed78b759cde4630b0"],["/posts/e32cbcd3.html","81d7c517f0387500f4ccc47c357374f8"],["/posts/eebbc69f.html","6406e5374da656d30a44dd2e5fa6bc2b"],["/posts/f08119d7.html","88dd78e77f581152c5002309c7ce2ccf"],["/posts/f7f51423.html","ecb749942c25434dc2e4d54fe4137b15"],["/posts/fd1a8f9f.html","fda4e33ddbea041a9c51538054cb298e"],["/service-worker.js","1a42afcc2d73367688c3f297465eae91"],["/shuoshuo/index.html","27c75f2b92fb8415c85ea036e737c9af"],["/sw-register.js","3c2cebce181adb65aa0445334edd8525"],["/tags/index.html","02fbac84d2bace1a2fa38b90871dbeba"],["/tags/【每日早报】-2025-02-25 - 星期二.html","4e580803f6a0185c9d2535490b8000ea"],["/tags/养眼/index.html","cb59ab307de046fa16cb14f38edbe634"],["/tags/每日早报/index.html","961b98ddcb3c0789664ffd765b578719"],["/tags/每日早报/page/2/index.html","536a9c14b66bdb4593e9abe92fdb08b9"],["/tags/每日早报/page/3/index.html","9da5adffe7d84564f70576eb50203460"],["/tags/第一篇/index.html","6a73319d52b4d27152cf9be2e17b6eb0"],["/tags/网络/index.html","bc825eca1910945b5603cd566bbbdbbc"],["/tags/网络/page/2/index.html","69c7501ffe20a7c86b4586e4ade9a8f3"],["/template/index.html","8d886067cf98627c7ec0f9133e1c8eb8"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

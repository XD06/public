/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1c8733e288785075d543152c9506779a"],["/Gallery/index.html","464581c5fa41739214f5e75fb37258e3"],["/about/index.html","203b444c09f3227e2177ed50edd1e3ff"],["/archives/2022/08/index.html","650ee51464c9a1b192e691fe6233923c"],["/archives/2022/09/index.html","590085d64376258c2ba8eea9f272bb21"],["/archives/2022/10/index.html","25599c2b73cab32138ce91175a226be9"],["/archives/2022/index.html","a08c077dfbe150515bac5dfced513d99"],["/archives/2022/page/2/index.html","2cc9600688864436a3e928c66616fcb1"],["/archives/2025/02/index.html","59574dff2ce854060bbcbc65e5dc9802"],["/archives/2025/02/page/2/index.html","b5b620708d38fda425ad6da37bed58b8"],["/archives/2025/03/index.html","29fbfcfa0e1c870565876a0130fa557a"],["/archives/2025/03/page/2/index.html","c14e3322728c174bb5fd9f02f2af5c1a"],["/archives/2025/04/index.html","2b901db2d5909f6b2b424feb17831601"],["/archives/2025/index.html","69cbac31ca1643c0d3c908ad30d3b80c"],["/archives/2025/page/2/index.html","bfb61ebc001502e78ea842220ada8e54"],["/archives/2025/page/3/index.html","225b1e4a3201fbee69a6800cdb86ab60"],["/archives/2025/page/4/index.html","b3d577c995b98d1560da935158d68ca4"],["/archives/index.html","6d3d39164c665c1d81d381dd961fa8e5"],["/archives/page/2/index.html","1e9db9165fe78f8c637f100187a92a5f"],["/archives/page/3/index.html","52fa35a81e2e64219bb2193ba4f46cb9"],["/archives/page/4/index.html","0b5e58546100712738562ab91625ec5c"],["/archives/page/5/index.html","f456071567ab0f2cdc0f63b7182b1aa9"],["/archives/page/6/index.html","e5f44092724616cf92d4c0ab2263b219"],["/baidu_verify_codeva-J5b2WWChcR.html","f7e3682d505ad2d708d912ca30ce45d7"],["/baidu_verify_codeva-cwyza0ZFJb.html","54c037ddf5081760b2f69454adcfe46f"],["/categories/index.html","df30b6ecaa9bc45c07d95d8d3b85a50b"],["/categories/壁纸/index.html","f6d5208eb44fa3b3abcff27828b37251"],["/categories/机网/index.html","20d07f1918ec093869427f6fdb6d41bd"],["/categories/机网/page/2/index.html","ac2294ddef672cfc657a712cca04bf49"],["/categories/每日早报/index.html","f72b23633ecd941a1fe7f70047075e9c"],["/categories/每日早报/page/2/index.html","75d6fc81b7028b5015adc188fb70c6da"],["/categories/每日早报/page/3/index.html","761d1e0ded17282124b961ae55805ad8"],["/categories/每日早报/page/4/index.html","12b38302cbb7ac0db27ec003ba8e0a40"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","d7b12c7cc7852fdadce82b9a84422470"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","f7bf9e4157da4b877c2e58ce5b676e66"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","a5c1a80665395ed3590b70dae9ce8ae2"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/python.html","53f31a5f7b7ba5013c7b61850645b661"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","d81fd8f4510fa42a08fc7a9c90956e13"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","35f84cc22def6e9fd6f07c355b3a0d2d"],["/link/index.html","fc374666cd6c7a2aee034d34ae636d13"],["/music/index.html","d5a43ecc56206f79f29d50d93b28edef"],["/page/2/index.html","b9813076ca49d5c46c9901be1bd29094"],["/page/3/index.html","f01306b70ed476ddafc1d8c7009339cf"],["/page/4/index.html","099606f8bf0120bc329aa119da4b3146"],["/page/5/index.html","ed4382c6a5075aca13dd453c9de3480d"],["/page/6/index.html","7101fa1878f1ef994493524f27c391ee"],["/posts/12501d69.html","36774dd093e837a26968c34e682a894d"],["/posts/1484043c.html","1eaf9e8ce8dddac7cc52286fc311be21"],["/posts/1b0c78b3.html","f755ab9c884aa5f41a5d9800ec9755ea"],["/posts/1b5b87.html","ff8c70077f5912c16d29140e587411e2"],["/posts/2134d9d1.html","29a0c69ed90e90cfd6bddcc5c32ca118"],["/posts/28c755c.html","84634a54c78dbdb515d53686126f4a8f"],["/posts/2f77f294.html","7acf2b46317444a4921cf14d824a3287"],["/posts/330d6f69.html","f7dcc0af30274e351dc4ddd6a9cd9dd9"],["/posts/3b744803.html","013589892ff383f6a3a146f6b7ccf045"],["/posts/3da05156.html","94b86cb5b7496edfe4fe8162e57c79b4"],["/posts/3e91e0fa.html","434200da3ecf9558ddcb58e316dc90c6"],["/posts/41c2c0d2.html","37e7e1eda7d253046f0dafad9165bf14"],["/posts/46fc5adc.html","8046a1704e1232774d5fc9a72769e030"],["/posts/493f6b85.html","a2decc4101bc0450a953210f823fe00b"],["/posts/497e40e0.html","ecd7c01f2c62f14f32c5b5d890887b0c"],["/posts/4a17b156.html","b3afb03977379d5ec3f63b969767d4d3"],["/posts/4e2d7b19.html","6f45be0e05000e8d0ad7216a01b8f09f"],["/posts/4f81eb97.html","e91a3e43dcfb0ef89c331f73b298ad5c"],["/posts/53721e0e.html","c3e6ff1902c6f1c92945a35a3d55849c"],["/posts/5dadd067.html","efea5e6fff5baa988e1a08977fe014ca"],["/posts/5ff34642.html","d230dcafab19f7c37ba5e682269a0e43"],["/posts/653abebf.html","950dec29e102366f8890033d2010f4d8"],["/posts/681265c2.html","58e35503ffb544d997bb199ed072232a"],["/posts/6f44662f.html","6e788196b2ff864b9bcd11f0c120b242"],["/posts/7207f70e.html","f0baa029cc355dbbebfc30f413dd7eff"],["/posts/7289f891.html","b4bd90e5ba5d373af66e9cf832d7bc74"],["/posts/732e626.html","c8299cdcca80b8c68b3cb1b4e79d155c"],["/posts/7c825231.html","cf37e177889d5df3e9b7d75fcb645a57"],["/posts/7cd0d214.html","f940383949c08466479ca74c28c9f063"],["/posts/7e13cc3b.html","08e968f4588d9066c35e5a2c1c5eede1"],["/posts/80a7ecce.html","45c54257f490e62b6922d8228413ff54"],["/posts/821a4686.html","e9f5a3ceb662007b29297ed586a196c1"],["/posts/8a741756.html","a818e98baa9b64720b2179eedcc674c1"],["/posts/918d46c1.html","799d1f08794bbf7da869f1cce1399b9b"],["/posts/93c8c0c7.html","7cad8903068d7fd5db68c1489fa0e009"],["/posts/9f057e9a.html","8052157604f1b13e2740b80e7a5785fd"],["/posts/a7d437fe.html","546668e1e29913e5e94733744cb0bb3f"],["/posts/ace4e4cd.html","1ce6a123df0e8f318559eb96da801aa6"],["/posts/af30ddef.html","c7cef69a385ac2aa8cf814a79a7f2c7e"],["/posts/b1eb9c6d.html","578ddc1bc3b3879c84df8f9c41fae704"],["/posts/b564e922.html","55ec5fbf9babc6ca1b8af05a3f535662"],["/posts/bc9a4dc7.html","b49d8d333d690c6c752afa2774ceba2b"],["/posts/be543a11.html","d88228aaf16672949a8c57edd9f14e88"],["/posts/c9b871f1.html","6aa3aff62195ba4be787f9b092b1ef97"],["/posts/d6ef11e5.html","b6ec5df1aaf06704821272fdc12f36ff"],["/posts/dcd6fdd1.html","c315d49c578c2df84d4f1e654db639e1"],["/posts/de24a124.html","5e303d8d735cb5e58198600a223251e9"],["/posts/e32cbcd3.html","8022512232526f5229f34c22283888d7"],["/posts/eebbc69f.html","81e191396d92c2913791ebb164602eec"],["/posts/f08119d7.html","aeaa36d7404f55b9d5b35303c3372291"],["/posts/f34dbb9f.html","d1326639b4faaa7942b70e02ea238189"],["/posts/f7f51423.html","faf23ea9726b1b5bbf4cca7ca0574040"],["/posts/fbda33d5.html","223c98f1bfd593f0014e2cd47f3302c3"],["/posts/fd1a8f9f.html","21b1b7dc3b0338f7c29e26dc8f6ec228"],["/service-worker.js","d8e0d2e5a277914679246950c262037b"],["/shuoshuo/index.html","c682d3362319881b59a77ea912c0cb8b"],["/sw-register.js","52ec2657aaba5a51a78671316f93e4f5"],["/tags/index.html","630ac8beb89bd5233e60e5ba24891559"],["/tags/【每日早报】-2025-02-25 - 星期二.html","2436027754674e91043cc45b9afaa010"],["/tags/养眼/index.html","bc294413c44ca16334d4ad88afcffbc9"],["/tags/每日早报/index.html","16239f107719c8d87beb7743f97aa501"],["/tags/每日早报/page/2/index.html","e427ed733212cc0e41130f0a8e148303"],["/tags/每日早报/page/3/index.html","9d12131447bff5c255dbbdfbd2da6c81"],["/tags/每日早报/page/4/index.html","7e3b878e6d0c952f7276b5141753b720"],["/tags/第一篇/index.html","bc3d74607cf7f37c28e0850cfb9cb9a4"],["/tags/网络/index.html","398f03c709973332867cbdad1b09674a"],["/tags/网络/page/2/index.html","74a0be94b530c725848e2cd6c09849b2"],["/template/index.html","9b27cab3ca0e0e63f143ef3df0cd1bf9"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

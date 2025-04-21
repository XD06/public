/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1c8733e288785075d543152c9506779a"],["/Gallery/index.html","7a991b1d5454afc32359960e1a5bd50f"],["/about/index.html","ba598f1a7cffc83d73dd7eaf93be1e4b"],["/archives/2022/08/index.html","8513a0a8db66b690b73d204bdb619ab8"],["/archives/2022/09/index.html","7fee731083ffc1f10a9523e66ce5799c"],["/archives/2022/10/index.html","f87f3c507fb8c6eca99b7de517d8d70c"],["/archives/2022/index.html","81a086876f6b8097c3bff87552ee2af1"],["/archives/2022/page/2/index.html","c15806231b70e9c3b5e99375152c38d5"],["/archives/2025/02/index.html","21581dcd4837367ee118d26d1289938f"],["/archives/2025/02/page/2/index.html","53bd353167b617bd30a2b3d54ad4d103"],["/archives/2025/03/index.html","e7e085671e0873ba6cd3849bfaf567d8"],["/archives/2025/03/page/2/index.html","79b10af1dd7a85dcfcf3202556c35bf8"],["/archives/2025/04/index.html","3a802934eb806178182591e82015000b"],["/archives/2025/index.html","746fc5acb5a1da7d8d9a100f14657b72"],["/archives/2025/page/2/index.html","1769f0e986e03941f1f9172d17faa0f9"],["/archives/2025/page/3/index.html","54ee5c235205fda432de31e2e1083ee8"],["/archives/2025/page/4/index.html","a7bea165b0001076bbcfefba14e0971b"],["/archives/index.html","554e836e6ebcd24ef68890fca1433fb6"],["/archives/page/2/index.html","bff519b7159f1a8862a32b8688e10b63"],["/archives/page/3/index.html","388dc558ffbec1ca9141b9a740431bd9"],["/archives/page/4/index.html","04dd14f5c3c4b3e204676b74df80a880"],["/archives/page/5/index.html","fabe92ac82c143dc8d675013b410c621"],["/archives/page/6/index.html","5b3bd9bb577135cfa7c9b4274746d7a9"],["/baidu_verify_codeva-J5b2WWChcR.html","817bd676ffc72296d401b5897ba26a48"],["/baidu_verify_codeva-cwyza0ZFJb.html","932b6284adb112af3cb5015b36478e75"],["/categories/index.html","d62247bdd7907a11e1214eb5a521b4cc"],["/categories/壁纸/index.html","a42df9f3455f2ea3d0a9f35ea75ae3e3"],["/categories/机网/index.html","2866b145dc02e3c2c0862c09fdb82d8d"],["/categories/机网/page/2/index.html","52a164b34f52b55d7917a9b2d9302191"],["/categories/每日早报/index.html","b4f4d956d2dba661e5b57d8d4388b343"],["/categories/每日早报/page/2/index.html","d0d90e705f5e0d23c915fd88004d7660"],["/categories/每日早报/page/3/index.html","969531f954542bc26c9e8a056f1a8e79"],["/categories/每日早报/page/4/index.html","db9f2fbc13a0bb3fb5600d9430b637c3"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","6caca1c44c589111a4964bb33ff5a8c8"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","174b67d6aa54141f4375bb049b6a8169"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","72f5b90980496831b074a1599430ee2b"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/python.html","b7ad95caad206b352ac4b674c7cb12c0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","e7c5c77fad0ed3fb1044b71ba0d5e5fe"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","5bec6316d036c63c601f0d7146e26155"],["/link/index.html","23bb34d2d978e3641f988c6c47f2bf7e"],["/music/index.html","bce0eb436601b80e4fcfd1351b5cd235"],["/page/2/index.html","9d11a5d5cd5048f0d5cbf553694e6625"],["/page/3/index.html","c832a3bff6edb09e6393f228ae054f7b"],["/page/4/index.html","29e8fe9265be005d6eead2fffede4ec6"],["/page/5/index.html","c44ad00734adad73bdacedb9454f6427"],["/page/6/index.html","2b31ea8bd7434727de930a7d33cb1afe"],["/posts/12501d69.html","36774dd093e837a26968c34e682a894d"],["/posts/1484043c.html","1eaf9e8ce8dddac7cc52286fc311be21"],["/posts/1b0c78b3.html","f755ab9c884aa5f41a5d9800ec9755ea"],["/posts/1b5b87.html","34a63b0b30207b82d2f9ccc464758fca"],["/posts/2134d9d1.html","29a0c69ed90e90cfd6bddcc5c32ca118"],["/posts/28c755c.html","84634a54c78dbdb515d53686126f4a8f"],["/posts/2f77f294.html","7acf2b46317444a4921cf14d824a3287"],["/posts/330d6f69.html","4f6069589088a0f06f0408da680aada8"],["/posts/3b744803.html","013589892ff383f6a3a146f6b7ccf045"],["/posts/3da05156.html","94b86cb5b7496edfe4fe8162e57c79b4"],["/posts/3e91e0fa.html","1b4820282cab465b69dd276213359c83"],["/posts/41c2c0d2.html","ae1992362766d652602020abb9d5173c"],["/posts/46fc5adc.html","052805fb77e1da5afa952a0811d1f349"],["/posts/493f6b85.html","3d03f9717d4dda7cc97d48bd2f4e76f1"],["/posts/497e40e0.html","225e7ddd896fadc4594d893baf078a0b"],["/posts/4a17b156.html","d73b279c7897b4b3bbb0af1238711daf"],["/posts/4e2d7b19.html","6f45be0e05000e8d0ad7216a01b8f09f"],["/posts/4f81eb97.html","e91a3e43dcfb0ef89c331f73b298ad5c"],["/posts/53721e0e.html","8cca4d080cd19e92d36fa715f7bb5e3f"],["/posts/5dadd067.html","efea5e6fff5baa988e1a08977fe014ca"],["/posts/5ff34642.html","990c92f0c3ca7ec55fd54e3e7948ef8d"],["/posts/653abebf.html","8239cc5bdfce8e613edf19f39b1b575b"],["/posts/681265c2.html","d6fcf36f1b79d06303a322d671049bea"],["/posts/6f44662f.html","6e788196b2ff864b9bcd11f0c120b242"],["/posts/7207f70e.html","c5d71e12e843cbd92f862b4c58dea31f"],["/posts/7289f891.html","a85d3cd8c4e5839f5868fe71cea2e574"],["/posts/732e626.html","c0dd61bbfd3f00ec2adbd8df53722b94"],["/posts/7c825231.html","cf37e177889d5df3e9b7d75fcb645a57"],["/posts/7cd0d214.html","f940383949c08466479ca74c28c9f063"],["/posts/7e13cc3b.html","1d6b930da4f2c89be48426e81008e530"],["/posts/80a7ecce.html","6d4de72267324293b1551940de088417"],["/posts/821a4686.html","0ad7d6693115afab0acdab7651457745"],["/posts/8a741756.html","225a719b64bff6058b9df83c9dc0f142"],["/posts/918d46c1.html","8d85a3691d21e5ca42292fa0a5e96034"],["/posts/93c8c0c7.html","7cad8903068d7fd5db68c1489fa0e009"],["/posts/9f057e9a.html","2e5dd909a52a0dc1e3d0c5a70981047b"],["/posts/a7d437fe.html","546668e1e29913e5e94733744cb0bb3f"],["/posts/ace4e4cd.html","716d3691c6226716112ad79184340936"],["/posts/af30ddef.html","c7cef69a385ac2aa8cf814a79a7f2c7e"],["/posts/b1eb9c6d.html","aa5ebb001a3b1dbb85b6b280eba743ab"],["/posts/b564e922.html","55ec5fbf9babc6ca1b8af05a3f535662"],["/posts/bc9a4dc7.html","9d299194220d94bcd647c45b5df121f4"],["/posts/be543a11.html","6956c4f1ae86706e9e6c795070b7f573"],["/posts/c9b871f1.html","afad49d2aa62a27f48ebaf6f5a3ffd42"],["/posts/d6ef11e5.html","c238d3917e531e118f59bf5c13bb223c"],["/posts/dcd6fdd1.html","1c71fc8a0b88bf1c5da52db08c051497"],["/posts/de24a124.html","e3c9a343eb35a94a4a26ad3062f68129"],["/posts/e32cbcd3.html","97d0adcc6838a9ae1942f3c57bc4ad22"],["/posts/eebbc69f.html","81e191396d92c2913791ebb164602eec"],["/posts/f08119d7.html","cb7c09ad0984e306fe11c3ac7fb78d71"],["/posts/f34dbb9f.html","d1326639b4faaa7942b70e02ea238189"],["/posts/f7f51423.html","b8e8015e285276c3f9ef11132e8b2eed"],["/posts/fbda33d5.html","7d586191eb3bc9bf41e9920b7d4b1c70"],["/posts/fd1a8f9f.html","21b1b7dc3b0338f7c29e26dc8f6ec228"],["/service-worker.js","c39d5c39afb42095f1cb54e1c945fd94"],["/shuoshuo/index.html","078f10a4543f2bc6cfcbdfc77dc9248f"],["/sw-register.js","2596df8a549731b2437e7caf68187c1d"],["/tags/index.html","68a36e4b779f46ee3276aaf99817c7bc"],["/tags/【每日早报】-2025-02-25 - 星期二.html","9e85869f7e0876a0e990a139651b4476"],["/tags/养眼/index.html","0ac58deb75a17e23b0f3283f918ed8f8"],["/tags/每日早报/index.html","bfdfe5bca45dfcd21285b60ed9919ddd"],["/tags/每日早报/page/2/index.html","bae5817882d3437b89cd90f3f5003b30"],["/tags/每日早报/page/3/index.html","26da4d51fa08a9801b2df0cfb84e0b93"],["/tags/每日早报/page/4/index.html","31aede3dffbfacab81f100599026228a"],["/tags/第一篇/index.html","cfc61fd2a8e565490175da5273ff6773"],["/tags/网络/index.html","2f0e42e77b3d2176f8c723c0fe6f9c29"],["/tags/网络/page/2/index.html","4ec1b1452fccd287335007d87d371374"],["/template/index.html","32801b80f094420002f271e3eb0320f0"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f92d5d2c98620a787ee3c5eb3b86e2fd"],["/Gallery/index.html","468b09b3723923299c399ae41d13dad0"],["/about/index.html","5235d535931ec7e57efeeed896ff9c2b"],["/archives/2022/08/index.html","db7fd3a5ce6adfecd307e1a02fc72907"],["/archives/2022/09/index.html","21d154487a806577a2f24343ab7a2e66"],["/archives/2022/10/index.html","704feaee0aaa2c4a2ddf5c5bb57d3b93"],["/archives/2022/index.html","0df3cb6258ac39dc3b74d519e76774a7"],["/archives/2022/page/2/index.html","7e829b59d71d69be531c17f49ac5b607"],["/archives/2025/02/index.html","2a84dc4fcc4d5c7345ababa9185ced6a"],["/archives/2025/02/page/2/index.html","2787f7b0c1542ba9597abf48b7f01c5e"],["/archives/2025/03/index.html","e4d782f62094e7afbc79ce67ef625ba9"],["/archives/2025/03/page/2/index.html","4e2c4bda2911e44e24fe378da0f5ecc8"],["/archives/2025/04/index.html","9af4bc5a2454e1d81a148969e69048bf"],["/archives/2025/index.html","d64e6875a6fb722af96a3789520171ef"],["/archives/2025/page/2/index.html","7c753ba3366d963a145b78e8c1d20b3b"],["/archives/2025/page/3/index.html","2abc09e2e2d4c1dbf102b17724bf363a"],["/archives/2025/page/4/index.html","7325cc1daed467b997e579fa3a7b7fe7"],["/archives/index.html","d8e536c9678a35e52b3c2fc08219fa34"],["/archives/page/2/index.html","e3fe972fe7461d703a86a7910ee0068a"],["/archives/page/3/index.html","22cd5abaa28864bfcb17ebcae7150234"],["/archives/page/4/index.html","c9af00b83f541731b57d17c7f1deede0"],["/archives/page/5/index.html","0c454860b21c590f87ee271937b63df2"],["/baidu_verify_codeva-J5b2WWChcR.html","51f8b545ff26304773956a8b553f00f9"],["/baidu_verify_codeva-cwyza0ZFJb.html","c55fc2c2b9cfbf6d5c73f1e062cf43d5"],["/categories/index.html","b07c684ba1106ea4d475ff55777934c4"],["/categories/壁纸/index.html","61a4dded5c65938854f773acb34cda87"],["/categories/机网/index.html","23890e7b1c4650ea18923db6abba3300"],["/categories/机网/page/2/index.html","c1a67724078d1bd5af04c0b9d9ddfbec"],["/categories/每日早报/index.html","810bc2a0ed44a026c36422b292c301fa"],["/categories/每日早报/page/2/index.html","c64d3d10efbfff460a023fd287edd47a"],["/categories/每日早报/page/3/index.html","2e49cd56bb2511acd7cae37a99d673ff"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","cb5ccecf5cf09815678c2b9b32c5d8d0"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","22403d6f60f55767da4e6f7afb5fb88f"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","68121685b9d2d03adac3a6902c8a1d46"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","408cbfeef25199ea0ef78991ff3559e3"],["/link/index.html","e8ef8b50bc53c5371ffbd047fbb4162e"],["/music/index.html","3023e744750f5532eed9af8d22b0c343"],["/page/2/index.html","02c61fba66052776035c57c8f622739e"],["/page/3/index.html","53a658117aed7b55cfb630726a095188"],["/page/4/index.html","08e87e6491edbe454e90b90237273666"],["/page/5/index.html","2a97e325e7f7d36c87f77e50aeed1059"],["/posts/1484043c.html","bc9092880f76a8df75b6ae3276d21c49"],["/posts/1b0c78b3.html","2472908382079587b7be5457d40e256c"],["/posts/1b5b87.html","34959d901f617a1180afab9d7a285bae"],["/posts/2134d9d1.html","3dbefcec7bfa9079ed7f6101c9ec2e13"],["/posts/28c755c.html","ba6cb882c86dd327b25ac6adbf5a0b80"],["/posts/2f77f294.html","99845033c3caa622ae8459a96fefa170"],["/posts/330d6f69.html","4bcca728ae36909d4eee55545255e6fc"],["/posts/3b744803.html","f06a2863c072eea6bbabbce76178c983"],["/posts/3da05156.html","a4f722848cf810f05331a307f501fab1"],["/posts/3e91e0fa.html","7c1d60df65e690b4f1c3c3bff44313a9"],["/posts/41c2c0d2.html","74d0e8ff961da8935e1e74d224a4a040"],["/posts/46fc5adc.html","5fba144d696dfc640cb73bc2d80e0e9a"],["/posts/493f6b85.html","74ce0236b7165a05b4eedd42cf35664f"],["/posts/497e40e0.html","a6d95f1e9c5a9f2f77947b6cb30a865b"],["/posts/4a17b156.html","910fa103c0c7e22467fc8df8ec550be7"],["/posts/4e2d7b19.html","21c591d674f458c0014ce04d6ad8e607"],["/posts/4f81eb97.html","a5f9ef1620aa9512cb3247a1edc4424a"],["/posts/53721e0e.html","7660eb4e1cd06ce1b4bee69db0811293"],["/posts/5dadd067.html","1b93dd8d25e486bdc3cb0105119de093"],["/posts/5ff34642.html","b1fa03999a9f9c4a7e260f68483ceb17"],["/posts/653abebf.html","81c5bc72233a351db3684db58d34555f"],["/posts/681265c2.html","91cdaab894ca3460a9a5980b557d6102"],["/posts/6f44662f.html","8037e3cdbf41390d48ad2d4c50432016"],["/posts/7207f70e.html","1c62b203df46f52743cb12931c2c3d01"],["/posts/7289f891.html","29f2560f7d113928e17969442acb541d"],["/posts/732e626.html","978da1f3e697f7b3cb05a11f6b356490"],["/posts/7c825231.html","f11a498821eaed94b1c697d52ea02b87"],["/posts/7e13cc3b.html","bbb7ad4d2ed5b74e35fd74ce28cc836a"],["/posts/80a7ecce.html","4273531414015b39f8e68923f66a5d29"],["/posts/821a4686.html","18795a81b1a623899e27c6d0de2ba6b0"],["/posts/8a741756.html","8d157cca6e797214388b03e2ef570ea9"],["/posts/918d46c1.html","ec61b08443e0a6da8d796d54cd84a264"],["/posts/93c8c0c7.html","a3c7ac927f2eefaa0710cc8d854c4d3c"],["/posts/9f057e9a.html","b856db75e95d0aa5ef4e4a2fea6f207d"],["/posts/a7d437fe.html","d099697adad8ce5307e0d21fff41977e"],["/posts/ace4e4cd.html","fe15228bc29409559b4729bcea243490"],["/posts/af30ddef.html","95debc88a6267fee46be3d2af2941700"],["/posts/b1eb9c6d.html","e7852846b7019f500081b58f8ac298d8"],["/posts/b564e922.html","30d99a2d22ea37e822c8ffa3859611a4"],["/posts/bc9a4dc7.html","9d5bee9b1e10a7b0addab38fd68882f7"],["/posts/be543a11.html","5ff057e92d774c32c32813f7e33f6952"],["/posts/c9b871f1.html","429741ff32c7ad519e894f2c9bc098e8"],["/posts/d6ef11e5.html","969e0c139f34a0ab56e885fb26033895"],["/posts/dcd6fdd1.html","4701784ce8906542f197880c0d6ec8e2"],["/posts/de24a124.html","284d9f3e7470e3fcb4adb28bed1c0366"],["/posts/e32cbcd3.html","39d0d9e2d7860c981e91dee1216066ea"],["/posts/eebbc69f.html","2f913a9e24c19a08b0546dd16176ab9f"],["/posts/f08119d7.html","2e79f614913b97bd32f7e3f3e1c3b95b"],["/posts/f7f51423.html","91c895cd3a81871e3657b4d63481ce88"],["/posts/fd1a8f9f.html","92ef26ea1609b2ac82f08de079f597fb"],["/service-worker.js","ee42c1c7c1a51ab543bb0ad5e1bcc153"],["/shuoshuo/index.html","03a4c9fa911930172308ef9ca980ad8e"],["/sw-register.js","58430708755ae37430cd56e8f66cf4c5"],["/tags/index.html","b4dc4c19e794d7b115a7f3c17474b83b"],["/tags/【每日早报】-2025-02-25 - 星期二.html","de5fbf0bc7a4582be210ed1f54b7a9f8"],["/tags/养眼/index.html","ca80721476bd1c27c620833e79951013"],["/tags/每日早报/index.html","3b0192bae78b55a417783cc192c61895"],["/tags/每日早报/page/2/index.html","13deb6d0c1ccf54d3818972817e30335"],["/tags/每日早报/page/3/index.html","d262916e0634124b313a25b95b760924"],["/tags/第一篇/index.html","422112bd697d4718e9376e48f3de544d"],["/tags/网络/index.html","5f4be30931ab7680161ab584bd434ed3"],["/tags/网络/page/2/index.html","1f79fabc3ce2e160eeaa1e70325227bb"],["/template/index.html","2cd7f8748210cd94cc5337041c5a82d9"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

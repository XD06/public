/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f92d5d2c98620a787ee3c5eb3b86e2fd"],["/Gallery/index.html","e3e4e561e627990e89c25ab0178cd28a"],["/about/index.html","16c0fbe7c6d706894388f632a47be9e8"],["/archives/2022/08/index.html","8d28585f0f52d3785a31dbe7874fcd4e"],["/archives/2022/09/index.html","d976486ea4a074f2b511675e8db28a1a"],["/archives/2022/10/index.html","eebe7bc97d67a7585613e1a98b3a05f5"],["/archives/2022/index.html","40f22b1a1341b8086fafc98e5d2e0620"],["/archives/2022/page/2/index.html","a8ef35e12eee6a1658fd152dd29b49ce"],["/archives/2025/02/index.html","8eb7e5b0fd9e5514b0429be385fb726c"],["/archives/2025/02/page/2/index.html","0b6f7e88711b5346b121a6783341200b"],["/archives/2025/03/index.html","bcb64f03f950e2ee2c5a597cfff65323"],["/archives/2025/03/page/2/index.html","e9176bc4e7971ad877dcf7d81fba0dc0"],["/archives/2025/04/index.html","331b53c02d0996e29820cef01015d527"],["/archives/2025/index.html","07e90ee1a19fd3f969bcce1fe0734149"],["/archives/2025/page/2/index.html","89bd329f0dcee6412f2efb9c5a9db205"],["/archives/2025/page/3/index.html","127ecee5b5c526f26cadb94993e467a0"],["/archives/2025/page/4/index.html","9f4daac5c156e369ada97344c1aafb53"],["/archives/index.html","d6e068969a3ab5d1a97b977ea487e3ac"],["/archives/page/2/index.html","3e76b9dadb4730d43b4c35798269272f"],["/archives/page/3/index.html","5cb8dbf0ece81fc24d63f2f14fd24f70"],["/archives/page/4/index.html","2bed06219dc7d535e12b99b2f17dee9a"],["/archives/page/5/index.html","4f7706565e1d9e7f579c9d72d7770ce1"],["/baidu_verify_codeva-J5b2WWChcR.html","66f071ec58c213cae5714cc33eb83038"],["/baidu_verify_codeva-cwyza0ZFJb.html","5f0c3a591831912adde5771205afb18d"],["/categories/index.html","4665602c1e11cbbd86ae98414a084f44"],["/categories/壁纸/index.html","d8fd7e646ce377d3802edaef74e287db"],["/categories/机网/index.html","de5cf2e6eb0f1957f1e0fe6e2923b1e3"],["/categories/机网/page/2/index.html","b6ff0635b9e46a7cfbcbbb2b2e13b371"],["/categories/每日早报/index.html","da617d192c43c8afa260e07d8f7d74a2"],["/categories/每日早报/page/2/index.html","7b8780444855054e29d7dac776553c81"],["/categories/每日早报/page/3/index.html","264ca226d7b395ad1e9a42ecad70f083"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","7d9067c02276d3e4520958d245506bf7"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","fa7e19929f7140ebbe4053193e11e4ac"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","276f394dc98e140c8ab7a7e85d4b49ad"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","4ec3a896bdde05cd5c51c9ceaa50937e"],["/link/index.html","4baa2b905f555762fe111be225f359a2"],["/music/index.html","563c4684650b1f16610a30541a6b0090"],["/page/2/index.html","93f6c7b4f85e9a4ba4c8f017e0bf317d"],["/page/3/index.html","7e298eb5c3c58c67ea361b857a1572e7"],["/page/4/index.html","56da122f9d77850b2bc28760e4632e1b"],["/page/5/index.html","7bb1ec20a499711c04971b6a27a0b512"],["/posts/1484043c.html","bc9092880f76a8df75b6ae3276d21c49"],["/posts/1b0c78b3.html","2472908382079587b7be5457d40e256c"],["/posts/1b5b87.html","5c4482a5a35ae6d76672bc61b007fffd"],["/posts/2134d9d1.html","3dbefcec7bfa9079ed7f6101c9ec2e13"],["/posts/28c755c.html","ba6cb882c86dd327b25ac6adbf5a0b80"],["/posts/2f77f294.html","99845033c3caa622ae8459a96fefa170"],["/posts/330d6f69.html","9809d074738c2413f6993332d44803fa"],["/posts/3b744803.html","f06a2863c072eea6bbabbce76178c983"],["/posts/3da05156.html","a4f722848cf810f05331a307f501fab1"],["/posts/3e91e0fa.html","e2ae84bc13226f11d701f07355e42d09"],["/posts/41c2c0d2.html","74d0e8ff961da8935e1e74d224a4a040"],["/posts/46fc5adc.html","3796352e52b2c2e301e23c6e873e8d5c"],["/posts/493f6b85.html","0cffae1e20bad9f164e48338bb5f65a3"],["/posts/497e40e0.html","bbd74c800d3e36c67dcf0900ced06243"],["/posts/4a17b156.html","d04e9774d6a5840683e296b563e70530"],["/posts/4e2d7b19.html","21c591d674f458c0014ce04d6ad8e607"],["/posts/4f81eb97.html","a5f9ef1620aa9512cb3247a1edc4424a"],["/posts/53721e0e.html","3ce722d93c46df036630dbf26a50d4b2"],["/posts/5dadd067.html","1b93dd8d25e486bdc3cb0105119de093"],["/posts/5ff34642.html","dd0eba273b2500fb1a65254e901debd5"],["/posts/653abebf.html","10b952168277d5f800d02b1bd446a4f9"],["/posts/681265c2.html","09c91e96fe22e9936df149f366e63956"],["/posts/6f44662f.html","8037e3cdbf41390d48ad2d4c50432016"],["/posts/7207f70e.html","bd80c1e8a217b575356530cdb7560cd0"],["/posts/7289f891.html","049a3edb22e7e293c489602aad87faca"],["/posts/732e626.html","92f97fca20672370bbf16578195a5fc9"],["/posts/7c825231.html","ffb64a1ec3e8a17aeb566aa935abbc72"],["/posts/7e13cc3b.html","954a81840e2b1087feb3c9f2106aa24c"],["/posts/80a7ecce.html","5d0d44f4168a8727215f4f9e38858ffa"],["/posts/821a4686.html","62894ab883f8ea8b58aee7a580245161"],["/posts/8a741756.html","aedca32773e3bd74ce38eac0dc38cce6"],["/posts/918d46c1.html","b01f4fa988e9954fb914e45011d42361"],["/posts/93c8c0c7.html","a3c7ac927f2eefaa0710cc8d854c4d3c"],["/posts/9f057e9a.html","796262f4710baa343adfe2c2a2ff5d5a"],["/posts/a7d437fe.html","d099697adad8ce5307e0d21fff41977e"],["/posts/ace4e4cd.html","dbd3f271a607e4a439a32f4d8a351afc"],["/posts/af30ddef.html","95debc88a6267fee46be3d2af2941700"],["/posts/b1eb9c6d.html","f1ba71f256f45c7494865a08110eba4b"],["/posts/b564e922.html","30d99a2d22ea37e822c8ffa3859611a4"],["/posts/bc9a4dc7.html","9d5bee9b1e10a7b0addab38fd68882f7"],["/posts/be543a11.html","5ff057e92d774c32c32813f7e33f6952"],["/posts/c9b871f1.html","2aae0809a617e92294570de47d2ed3d0"],["/posts/d6ef11e5.html","ee66131c7cde246f0d8024c87c1a5240"],["/posts/dcd6fdd1.html","260963865039b80cba55a1c98bc1ce9a"],["/posts/de24a124.html","091a955e842bd62f4334909fb0235b1d"],["/posts/e32cbcd3.html","f4e0e6c1c08ff9ee973af23db63c5dc1"],["/posts/eebbc69f.html","2f913a9e24c19a08b0546dd16176ab9f"],["/posts/f08119d7.html","97971b371c87bb148e6e923a5a397dc3"],["/posts/f7f51423.html","ec81e4fb3c21d1ec9b7b96dbdcb058f5"],["/posts/fd1a8f9f.html","92ef26ea1609b2ac82f08de079f597fb"],["/service-worker.js","3847dbbe58426d077ac36ae0487ecfaa"],["/shuoshuo/index.html","8a6406951bd96466d5a8b3b88055deb1"],["/sw-register.js","edf34bf24cdffe1ee139458285dc7b90"],["/tags/index.html","457a01bb0d604959de69729cb7e35324"],["/tags/【每日早报】-2025-02-25 - 星期二.html","67bb09a7ab1cfffac207b7bc5977593c"],["/tags/养眼/index.html","4016465fc6d13280c04c985a6b643b10"],["/tags/每日早报/index.html","7708dd82c81ff4e16d9a8ef427e7192d"],["/tags/每日早报/page/2/index.html","2912e7104a78f721cf1e69f0a1b2fa24"],["/tags/每日早报/page/3/index.html","b842baa39061a3f90c724e00f72f15f1"],["/tags/第一篇/index.html","234fb5a546ed9ca9aeeb4473bc81810f"],["/tags/网络/index.html","b812ea78133f30d1eb817f9882d56361"],["/tags/网络/page/2/index.html","6f13416e6f7288d41ee1a19e506e7630"],["/template/index.html","0e6cba67d9a124c4a7d4864213243a1d"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

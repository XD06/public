/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b2a0081d4e0a9ef7af7785f930bbc892"],["/Gallery/index.html","b289386c7b7247d773e443bf74359c4f"],["/about/index.html","a64ed44563e2983559a3d5cc28da3660"],["/archives/2022/08/index.html","8534e961eac8aea427f4c8a2a6bb57de"],["/archives/2022/09/index.html","f6f235c5db1cebc4f571fdb02550c3f9"],["/archives/2022/10/index.html","5c16135303cbc2e2029675570a15641c"],["/archives/2022/index.html","a366c53989b8cf88e0fdc6d871620065"],["/archives/2022/page/2/index.html","00e701cd39e12b964e8a0fd8bc7a4744"],["/archives/2025/02/index.html","26e02bf826e155cba4a3c807f52f99b3"],["/archives/2025/02/page/2/index.html","9546f396082dd8952c9724093157a496"],["/archives/2025/03/index.html","2b3bb5586b2b32db218b0a888369f14d"],["/archives/2025/03/page/2/index.html","dcbfac525947bd1e24083d2c6937298f"],["/archives/2025/04/index.html","051717d48f77692cc18f1c767419c0ec"],["/archives/2025/index.html","9c917cb6cb53116e11104e1ae8adc67e"],["/archives/2025/page/2/index.html","003d20bdc5ea490d1525e64d6941a043"],["/archives/2025/page/3/index.html","5e1f7494831dfc98af0f8420fa363ae0"],["/archives/index.html","491a3400fd331b192a9a422a7e374de9"],["/archives/page/2/index.html","08156d1c9bc99bda3b6ccf50cafffafc"],["/archives/page/3/index.html","b95ec971e2df03fcf6b52a32f6c05232"],["/archives/page/4/index.html","fee71178a20b15b1afea7977bd20fdc9"],["/archives/page/5/index.html","3607079e7e287554f3b4a1641afca654"],["/baidu_verify_codeva-J5b2WWChcR.html","1ff18a24e0445b3da5c4adf220bad127"],["/baidu_verify_codeva-cwyza0ZFJb.html","93ed4bd12dc93a33a0b69397a6fcaf57"],["/categories/index.html","9c1cec6b75ed2c3125aa5b31ba73179a"],["/categories/壁纸/index.html","329a96704fab54d73af2b41e8ddf3de5"],["/categories/机网/index.html","10b291f4e080de819c08c1c2ffbd659a"],["/categories/机网/page/2/index.html","44675960404c371c5a0ae13b60dce7f7"],["/categories/每日早报/index.html","c24d3dbf62653de76c7d9159f4cdd00e"],["/categories/每日早报/page/2/index.html","a600bdee27a5ce613e60e2e3d2a2815d"],["/categories/每日早报/page/3/index.html","9ef5b2341cfbd554ce77cb5cfdf32485"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","c10c6c0df1f0bdfea351ad6bb45a1e8f"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","109b5f4924e3dc9f382c8905b801107e"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","18cc50fe3bf5487ec970aa5e866906c9"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","80fbaabecd53ae3325b68a0bbac4a70f"],["/link/index.html","31f4a89201ab29a1dd54ef8e1bc49e6a"],["/music/index.html","783419331e37a582c925d2aea31649ab"],["/page/2/index.html","e1da962a974ea87e03ea1982dffbd37e"],["/page/3/index.html","5969e986289d44d74122fe3095369761"],["/page/4/index.html","1a2fce29bad108d480494a5e279b715d"],["/page/5/index.html","26a2d085f2ef16841d1b03bb0a1367cd"],["/posts/1b0c78b3.html","f3c0200f8bde75d99bc6d02a567d8c6e"],["/posts/1b5b87.html","a078641f2a0660c83403ec17afa73554"],["/posts/2134d9d1.html","19b31b8619888741ee40c9e839468ff5"],["/posts/28c755c.html","1d72c411eac6dbf0c4ad74837c825932"],["/posts/330d6f69.html","906a42df33cd0ebaf19fb2615d8d053f"],["/posts/3b744803.html","95a09f838123823248c621577814b00a"],["/posts/3da05156.html","d923277cc2cb35e00aef10398ae79f2a"],["/posts/3e91e0fa.html","72faec4efd6739fc64e807615cf504df"],["/posts/41c2c0d2.html","b71c83cf79a0606688fdd733e1261d82"],["/posts/46fc5adc.html","0ab6ae931e4025a47d6678fbdd07629b"],["/posts/493f6b85.html","6426f13bb2b6f8d99dc9cdd37b3b1340"],["/posts/497e40e0.html","42848bd97bd064f70ec593338b0cdcd5"],["/posts/4a17b156.html","3b3d6904b5b36259b05040158f972c85"],["/posts/4e2d7b19.html","5f305a780f5e6251f314a1da861377be"],["/posts/4f81eb97.html","536e6af847e90b0df09846ea66527549"],["/posts/53721e0e.html","e73dba3969460b591fbf297e5a00770f"],["/posts/5dadd067.html","661960a7ca5917865495c62c81219174"],["/posts/5ff34642.html","27fc4543f0873ca09d035bdb2abd6cf8"],["/posts/653abebf.html","9ff2aedc26465241f4a4e12a9594a363"],["/posts/681265c2.html","4230b704319e1024a84c7fa545302003"],["/posts/6f44662f.html","282027050ccdf44944b255474648cab3"],["/posts/7207f70e.html","24be3ba89a95afd32ff74732e962c2b5"],["/posts/7289f891.html","c3effba1faabf1d65c5f90690ec123a9"],["/posts/732e626.html","ed4514607b933665d5e8ac8be3938f88"],["/posts/7e13cc3b.html","473692384320cad964e32d1486680db5"],["/posts/80a7ecce.html","59fc491895a69b74c6f9c9cba5031877"],["/posts/821a4686.html","86b8b1645031701a9d01ac0f2bcd7cc3"],["/posts/8a741756.html","248956eff4c95273487bd11b625087a7"],["/posts/918d46c1.html","8245fc7d941dafc7d4c646497bc07aa4"],["/posts/93c8c0c7.html","9ea1bceb2619b8703f0b21ce7af689d6"],["/posts/9f057e9a.html","849fd6e93a8b49ace42382479ee61d15"],["/posts/a7d437fe.html","b8b69cb45891541b9bed8af417ff5444"],["/posts/ace4e4cd.html","ab47bcf2ee08c7c607430788d859e3ba"],["/posts/af30ddef.html","623106ffc1759c681077c5e05cfad018"],["/posts/b1eb9c6d.html","25f61f08c3b27637d386c337eeaf61f3"],["/posts/b564e922.html","96bf0fe6c6562c21d7781c47fc1af4d9"],["/posts/bc9a4dc7.html","52814d41791edf1e3500e923009b0b40"],["/posts/be543a11.html","1277c73d73a8fb019410622cc7e4224e"],["/posts/c9b871f1.html","efd69696e555ac434aac4cb9ad4f5d50"],["/posts/d6ef11e5.html","cb5d5fbbc32d482d7893b28fbe2b9c1f"],["/posts/dcd6fdd1.html","771e6ab12c0f4e04f40abad6b372a645"],["/posts/de24a124.html","1066e9c1eecec33b26efcdf762c2d8ed"],["/posts/e32cbcd3.html","4572a09a3fa218f3a666275e581548f6"],["/posts/eebbc69f.html","fc5d4d9c82dd46946ede0676187d7fcd"],["/posts/f08119d7.html","e8a9370ddf2caa532ba760f386b14536"],["/posts/f7f51423.html","edbe4755ed1fce453e139bb449d5c9ff"],["/posts/fd1a8f9f.html","4503a7f76bcf140d4f898fee9c840a39"],["/shuoshuo/index.html","f14da4b1d5c263f34d2e55ee5f3767b1"],["/sw-register.js","9982ef9cb3080ff8abf96dcc65303dfb"],["/tags/index.html","5dde110702d58dcb743064f1e8ac208a"],["/tags/【每日早报】-2025-02-25 - 星期二.html","a73bf826b2bac96b69bd73097169ad45"],["/tags/养眼/index.html","6a08f080221413c4151d52c23a0bc39b"],["/tags/每日早报/index.html","cfdf6362c672bcfdcc98c8d13fdd91ca"],["/tags/每日早报/page/2/index.html","05965bd1b7cdc99aa615bda2d548f4e4"],["/tags/每日早报/page/3/index.html","2c5deaf215ce37d92c391744fa87cce5"],["/tags/第一篇/index.html","f31d7a7d3bdd2b184d0d48fccebcf040"],["/tags/网络/index.html","35527809cc4184ecbced639f5db106a9"],["/tags/网络/page/2/index.html","a6501debc9e8f7c32ad1f0848334856e"],["/template/index.html","cf615f6672a9db56d60687c5b4f3fcd8"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","df0bb464af2c2c71a09bb3158f22ede9"],["/Gallery/index.html","0bb2dac1b0a43f4e998268b49ca1079c"],["/about/index.html","c2f2b2a5a400916188b0a79a00c12ead"],["/archives/2022/08/index.html","108f059c7917c725df5e0703c19bf752"],["/archives/2022/09/index.html","8ccc52d700b49037dea1a491749a5280"],["/archives/2022/10/index.html","8f8633ba284180f052b33237e6abcb9b"],["/archives/2022/index.html","f0f631eebf790e511b53ce107d496096"],["/archives/2022/page/2/index.html","01fbf7ee439c9f3ea46dfa18b28a50d2"],["/archives/2025/02/index.html","d7d28dd5b50665c4fb631f61a86b5047"],["/archives/2025/02/page/2/index.html","0d518d114b3ac131cfd4b02c9c140127"],["/archives/2025/03/index.html","22806ccf2d1580e359b8e689ff1fdf23"],["/archives/2025/03/page/2/index.html","f5ddf26dd4838e9a7ed0d912d1ac2658"],["/archives/2025/04/index.html","61175677dbe438464023ff28f0b6033a"],["/archives/2025/index.html","62f2afbde4ac8f04219b990e86204f95"],["/archives/2025/page/2/index.html","6de4e3a2a5943f2604a61c2f2789ba16"],["/archives/2025/page/3/index.html","9b3fd0386abf5cb3dbe0643534a0c9ba"],["/archives/2025/page/4/index.html","1a7c3483bed8c42042bea53c49e93b3b"],["/archives/index.html","4e95ecb76710be77ef492c562250e8bd"],["/archives/page/2/index.html","211284872ad2d5c2a3c49472874a470e"],["/archives/page/3/index.html","b601b00cdab786eab45ee3a24f74274b"],["/archives/page/4/index.html","332a80560a6a1ec9481fb941be467ca5"],["/archives/page/5/index.html","472ab617df9fa1b3a616f38ef55c6dd1"],["/archives/page/6/index.html","2df40c3520a4b9d9bd35cfacb8598314"],["/baidu_verify_codeva-J5b2WWChcR.html","a638468fb70d596ada53f2c409603c7f"],["/baidu_verify_codeva-cwyza0ZFJb.html","e6715ceb70b4e94354143cf1cf1ef44c"],["/categories/index.html","cb7892c573dc969ec3328c906c803215"],["/categories/壁纸/index.html","01f0b8a919f68867fd08acfbe02f601e"],["/categories/机网/index.html","ecbe9d65ad9da55434265e45ad2feeb5"],["/categories/机网/page/2/index.html","ac40fcf94b7c0f0e0db8a05d5df3e65d"],["/categories/每日早报/index.html","ec42d1ba3aed522160317cf3e365f2e9"],["/categories/每日早报/page/2/index.html","fe23a129ade0939a58373cfa0d4d2f95"],["/categories/每日早报/page/3/index.html","af3ff47827127ee39a15f48a6bb4871f"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","b19f10e4bcba4561e6737bb62b5c6e88"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","1fac25506a1afcfbc4310544a35f5099"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","715194976c72d3e84bc0217879d752a9"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","3cd1acc6f9bf85c2298f75b8cb98505d"],["/link/index.html","c7e6fe6910886d02726b2423c7d26a4b"],["/music/index.html","219a4281772423c23821d4556ee88fe1"],["/page/2/index.html","914268760f4080b12d5aceedc02fa008"],["/page/3/index.html","86d3b13be972ea38caad034d1bf87fbd"],["/page/4/index.html","ca3db2d95fa12dbcab724b3ea60effe4"],["/page/5/index.html","fc50eac53a002dbfafdea8f76dd5cd9c"],["/page/6/index.html","481321590b5806310e42f3a98ab82de6"],["/posts/12501d69.html","a0933060d0a14a813613563d307aff2e"],["/posts/1484043c.html","30d5525886efb68679cf6f2a88831b52"],["/posts/1b0c78b3.html","6c9e239f08b8412afb27d7641813fb3d"],["/posts/1b5b87.html","cfe3a808f20750d43cb767d974070e25"],["/posts/2134d9d1.html","1266cb91146b968afe1644a5f3b209df"],["/posts/28c755c.html","f94eca138d9904d6460615668fcfc3df"],["/posts/2f77f294.html","20c3efc7d7ecee85486252dad7fcfc3c"],["/posts/330d6f69.html","35618a8b61cecec5379cc6e44124130d"],["/posts/3b744803.html","1aa3b10f8a9a4b2bda6fb955b48a3afa"],["/posts/3da05156.html","06098dfefe1f3c7985fb14362b8937bd"],["/posts/3e91e0fa.html","097f430b900060cc64e79926f741e65b"],["/posts/41c2c0d2.html","080929edec84c55268b0f734a09aa1db"],["/posts/46fc5adc.html","a6c44f3b825467db41ad8b6edbd93f93"],["/posts/493f6b85.html","40f48465409782838926142dcd6c9c8d"],["/posts/497e40e0.html","12eba679a2d1d584bb61d9d5d0ce416d"],["/posts/4a17b156.html","9c34c1df919540a65e96b78192db407e"],["/posts/4e2d7b19.html","51572f7c6ce868adb5ae4e4813c8268e"],["/posts/4f81eb97.html","e42126342af76b5044e932341383bacf"],["/posts/53721e0e.html","228c63fd24afdd20388fc343ccf9f29e"],["/posts/5dadd067.html","68fe8efeb0bedc186279d53aea1e2995"],["/posts/5ff34642.html","df3836dfc7553c82381c3e7051abe3d1"],["/posts/653abebf.html","283fa749a89b2bedde9dc4b75983ff92"],["/posts/681265c2.html","eba8121b2715b0e2e73762ed5c1112b7"],["/posts/6f44662f.html","e93f47d5e39ca55f23c6afe4dc115bd3"],["/posts/7207f70e.html","46b53bd63e616b1476a85622800f3770"],["/posts/7289f891.html","fd842b975d87745ac0376c68f17abfc4"],["/posts/732e626.html","dd1b6502980b3b3e37c088653b786f0e"],["/posts/7c825231.html","b3962abce6ba086ad66dbc4696420d59"],["/posts/7e13cc3b.html","f4029fe99b496abf1560bc5a0cd85e28"],["/posts/80a7ecce.html","2f54754988e56371f750317d62777c3a"],["/posts/821a4686.html","28ed550633a8992725e7f40a9c52cabf"],["/posts/8a741756.html","60d25ea2f64398aabcbe6f99a2fbe3ef"],["/posts/918d46c1.html","fd67098b1f4c310df490e97a385f0825"],["/posts/93c8c0c7.html","d944d53c283fac196f05849a14678fb2"],["/posts/9f057e9a.html","032e4823beeb5f6f3d68b3540afeddce"],["/posts/a7d437fe.html","9166730877a113cbbfd205dd53865a46"],["/posts/ace4e4cd.html","f46e9d5c4c6465014911004937d33aca"],["/posts/af30ddef.html","5997b9e5ba0ca4beac13d05e679e8fd2"],["/posts/b1eb9c6d.html","8a1c3b46cd87d1e387795d5e839c8698"],["/posts/b564e922.html","a82427173194676758f7997068d3133a"],["/posts/bc9a4dc7.html","2021c1bfb2d81dbbeeb14ad2778af01e"],["/posts/be543a11.html","f662ec88a7edccaa135d3a63de51b415"],["/posts/c9b871f1.html","54c78b0ec6c0fb30c453c46170ac25ba"],["/posts/d6ef11e5.html","b6961938e1b12b783222dfdc621a4925"],["/posts/dcd6fdd1.html","17c4cb8505537a3bdaaa73b36880456d"],["/posts/de24a124.html","6b70a7e61ad178bcfcad91041bc66205"],["/posts/e32cbcd3.html","4d890eec363d3df00646e26db12c8530"],["/posts/eebbc69f.html","31d985354eaffb304b6087c9fb86ee8f"],["/posts/f08119d7.html","a1583c72dd2048394aff5ca78e870d95"],["/posts/f7f51423.html","66409a1455892d9c16ee7009b4c5d833"],["/posts/fd1a8f9f.html","b27ff1a6648924ed82fc788eb4698269"],["/service-worker.js","cfa0ce2f483bc1c591c9b1477ad7b641"],["/shuoshuo/index.html","db844e007c0fbdf95aa636987486f420"],["/sw-register.js","47dbcc8d01e00aa2f855b83dbe705b2e"],["/tags/index.html","3d2b1002f9bae1ac31ff626a7ad5807a"],["/tags/【每日早报】-2025-02-25 - 星期二.html","6eed881db5f23ccfef3eb1591ca806ef"],["/tags/养眼/index.html","525f8030527432fc543d41b906b65dce"],["/tags/每日早报/index.html","e00ce18a8e7cf09a4cdec64f99c42075"],["/tags/每日早报/page/2/index.html","583ff1fd2ceb35a225f60f4fcf1ee1d2"],["/tags/每日早报/page/3/index.html","c5bd460ac043affeba06b197d7191841"],["/tags/第一篇/index.html","f304ad43ad9a6f2ac4dec988f8330068"],["/tags/网络/index.html","fb8c9461a4773c01b80a0939be748379"],["/tags/网络/page/2/index.html","74bfc8491fd916673e7dfc71db404cdc"],["/template/index.html","c381a1b01abd5930a0f28948a4ed6099"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

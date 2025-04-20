/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fd094b20f941ec4b803e2180cb93733d"],["/Gallery/index.html","084044dab90e75d0df7f4495569f7a48"],["/about/index.html","ed2e1db8ccf736357b5b7d0e39f05be0"],["/archives/2022/08/index.html","cc6cce8e770fa6046314871332d01f82"],["/archives/2022/09/index.html","c6b8d8d5336cff20e3c42ffda2fecbac"],["/archives/2022/10/index.html","f0449bbdd961b50570daa9eb9071a831"],["/archives/2022/index.html","7f73b2822de8498244f5c6f5afc40671"],["/archives/2022/page/2/index.html","32bc7ae3f7fdaf158ec2188d80c041c1"],["/archives/2025/02/index.html","47b76017d01cd597d6aa2394d1b39289"],["/archives/2025/02/page/2/index.html","06eb8a06351545f9b3e29051d2955716"],["/archives/2025/03/index.html","5b64e51d23bf637d07200c4741713f10"],["/archives/2025/03/page/2/index.html","1c49e244b4936740933aeb7a916bcfa3"],["/archives/2025/04/index.html","a179590ac6b9bf05d45139a4de0177bf"],["/archives/2025/index.html","8675a2366995a02122d846f1f15b4172"],["/archives/2025/page/2/index.html","02ada6ebf17ae3188b92e8eed2ddd9d0"],["/archives/2025/page/3/index.html","76544bbfa2d1aa8a16ebb123ecac6a72"],["/archives/2025/page/4/index.html","07f851a3851de06e09b2f521d9e2f5ed"],["/archives/index.html","05505669123547d6ca71515e9aa384a7"],["/archives/page/2/index.html","842432968805375f6b9a240dc3723f5a"],["/archives/page/3/index.html","5eb6ef1d3ae5257e14bb5f8e8fafa906"],["/archives/page/4/index.html","132e344d76c289fad98b9928bc45e2c0"],["/archives/page/5/index.html","1a7e0078c5f626104d8bd2f19eb57f6f"],["/archives/page/6/index.html","d04203f84147885a447ee78b1be7a5b4"],["/baidu_verify_codeva-J5b2WWChcR.html","57da03948da9661deb9453127c5e077d"],["/baidu_verify_codeva-cwyza0ZFJb.html","3471a57f53538967f526c5cd6ebaa6db"],["/categories/index.html","c9f2c6f887f0366c29b612d0eff11f73"],["/categories/壁纸/index.html","f6b3f0f59ce7d4bfd56b10faa6734f23"],["/categories/机网/index.html","d0c38894c10078a38cedcef7db447762"],["/categories/机网/page/2/index.html","3441fddd7fb2ffd6b6ea383f2acbb49e"],["/categories/每日早报/index.html","6c84dcea1cb1f9a403ca9a121afa940f"],["/categories/每日早报/page/2/index.html","49c87298a9279ced9774755081b25f94"],["/categories/每日早报/page/3/index.html","93e2f591277ea0b50c0dd3235ae1b714"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","e2d9d21131094a17fbd77b78640ac3e7"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","2f77066afe71589e77685c07d4819aa5"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","f90522f6182f4f529da3704c8227ba11"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","b884de9a380595e4c0421d53387ed7c3"],["/link/index.html","886dffe1439884926933007f0b9b4c6a"],["/music/index.html","8d246fa41cb9e4ec394bb9d15909b8eb"],["/page/2/index.html","27882bdd7de859ade6d358e8cbee5c2a"],["/page/3/index.html","d24895231c6eeefcd66656864c611e80"],["/page/4/index.html","1d425e93be5291a5bf9876ab5d46b608"],["/page/5/index.html","d04b3a2f32317f5b78610cafea441f02"],["/page/6/index.html","46c10269f6cd8d8dca5bb45430c7c400"],["/posts/12501d69.html","69608aa599557c68a39cf84156fd6b25"],["/posts/1484043c.html","cda07066cec9a13a9b7340fc862ed85d"],["/posts/1b0c78b3.html","69258ac275c7f90b3553551270bd0b4d"],["/posts/1b5b87.html","9a72459ddf71e22154bff0fff91ff6fa"],["/posts/2134d9d1.html","4a2e6eb1648745053dcfbdb0a93a65d5"],["/posts/28c755c.html","e5e5d3dbe865caa1b2451eee21dedc50"],["/posts/2f77f294.html","3ead22f6febe318ad733fe991203dfb0"],["/posts/330d6f69.html","507e376820fae5fd5a019b2d9f4664a5"],["/posts/3b744803.html","334cba7b7e7a6b1ca4c20ba12789207e"],["/posts/3da05156.html","9ea15d4c046f88b8df2d148d11da9dcc"],["/posts/3e91e0fa.html","1046db7eb9441662f2ca9629d48ac75f"],["/posts/41c2c0d2.html","fb202ac6b2d2e6b89fc2b50ff7101725"],["/posts/46fc5adc.html","5478af487642900b54cea5d6c3325035"],["/posts/493f6b85.html","14266789a0bfba4ea454d205cf1b6984"],["/posts/497e40e0.html","5560a5196f813b5db682c8c5bfde7731"],["/posts/4a17b156.html","a2aed60b9101ceb2be7b708ffac75134"],["/posts/4e2d7b19.html","833d7a36fd3f26ef2718d4afed14691e"],["/posts/4f81eb97.html","6bd967614fab70dac6061c8d8a444b9f"],["/posts/53721e0e.html","3ba48d6fe0afaf6e7db9a6b275c25d66"],["/posts/5dadd067.html","bf96ea6c575a80a4a0d850feef0ac576"],["/posts/5ff34642.html","65065620db4668765680aa1a3ab57a28"],["/posts/653abebf.html","2caa85f42a3bfbf2d0b3bd3bac8386d4"],["/posts/681265c2.html","c43f918b696a56a24029aaf6740d7a8c"],["/posts/6f44662f.html","acf078592191e3a33fb15c4ba8cfccc8"],["/posts/7207f70e.html","81630769f0cb2121331282c4d254d7b7"],["/posts/7289f891.html","e9d9865b457bc73baec6560bf3114250"],["/posts/732e626.html","75557286654cc13d74268f8e68a32a71"],["/posts/7c825231.html","14cf5f07bc1d2cfb33019a51e7079f21"],["/posts/7cd0d214.html","71c4b3c13576c796f42de79221ac28bc"],["/posts/7e13cc3b.html","c50c03e726798b9ee4a9b48c04bd6166"],["/posts/80a7ecce.html","32021e568938725f15e3115f5272f448"],["/posts/821a4686.html","3ac76cdc8ebaee5b92a2d39a5ddb27ec"],["/posts/8a741756.html","e9f863d8db6e1504ff50e7eb1e01bf10"],["/posts/918d46c1.html","78b382f633bdad941e8be98e551c48f4"],["/posts/93c8c0c7.html","21008a0f09c3b9faafac56076022355b"],["/posts/9f057e9a.html","b1c38564e022bc9fe5b43f35aa45ba06"],["/posts/a7d437fe.html","da896ff05694306f0575b00c18db2ae2"],["/posts/ace4e4cd.html","63cc77f75d314db70ff5b75b9224284f"],["/posts/af30ddef.html","4419a6370aa6adcc23b52d0f5d439221"],["/posts/b1eb9c6d.html","356bc344d8c368d4679d68e035e57137"],["/posts/b564e922.html","19222c0bfd40cee0b1058e98c8a2831e"],["/posts/bc9a4dc7.html","446c298bd28a669613dd7232a2eb5198"],["/posts/be543a11.html","d9d388b48882cbfb0a3786785b60f98e"],["/posts/c9b871f1.html","543330a35d946ce52e4c5528a2347be6"],["/posts/d6ef11e5.html","0c0372fed46b6cc0a9b3e1d7a7ba97fa"],["/posts/dcd6fdd1.html","7d90168a728fe797a80a1192df198087"],["/posts/de24a124.html","7f11b4514c6277ace4e7c2f3c6175ee8"],["/posts/e32cbcd3.html","3829935ad53257f233893c23b5f0d9f1"],["/posts/eebbc69f.html","f6809fb9ad1a0f865e36fe329d01bb99"],["/posts/f08119d7.html","9f2b14efd8ae68477d4a05bd9b645a22"],["/posts/f34dbb9f.html","c33ac4a1a244e80189c217922a24d324"],["/posts/f7f51423.html","dd9753f48a6d082566d9cdd541d14f2c"],["/posts/fd1a8f9f.html","83fbbef393a259a3aa620ca6df05cf0c"],["/service-worker.js","91064b3b4acb0c4f12682f71f18ce71b"],["/shuoshuo/index.html","20d50319140159201a587a2df35b4693"],["/sw-register.js","d48e97e7b840b050eb8b338c5abd7d4d"],["/tags/index.html","4f83e1250648b17400532b8581614d36"],["/tags/【每日早报】-2025-02-25 - 星期二.html","6322044daf36ae1e2d2b3036a7384c45"],["/tags/养眼/index.html","3a968356150cfdc76e165e499b91823c"],["/tags/每日早报/index.html","492514838a7891cc9e08a09504269e2b"],["/tags/每日早报/page/2/index.html","fcdf591cc5168b0ce62cd204bcc88adf"],["/tags/每日早报/page/3/index.html","b9d7241aaa98449e1e1746a4851c2cf1"],["/tags/第一篇/index.html","e6058e365fde9e539be30babd5b13bc6"],["/tags/网络/index.html","91709272f024d44db3854126eab21abb"],["/tags/网络/page/2/index.html","db522855d889a92beee26004efcb3f87"],["/template/index.html","32af1f22cddf0cd9a8c3ca8cba0de1f8"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

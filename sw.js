/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d3e224d17888eef09a314648d267b970"],["/Gallery/index.html","4d726f926ccf5e642028ed6981979c72"],["/about/index.html","b25b169b2837350f8fa5350ef694ca25"],["/archives/2022/08/index.html","b88e87332a7629351c4f7d9a11d1636b"],["/archives/2022/08/page/2/index.html","1d4acf0c30122e12178a761eace04c73"],["/archives/2022/09/index.html","964cb5043dd62badfe345c6be2b713d4"],["/archives/2022/10/index.html","9945601a84cab1f1f39f03a4b3b73cce"],["/archives/2022/index.html","378d98e5749d1a406420095ca0db65bf"],["/archives/2022/page/2/index.html","0ad9c030c36f0b345d44472e9ef79053"],["/archives/2025/02/index.html","6ab4a12feae50dd30b1cbf3dc9fe7b28"],["/archives/2025/03/index.html","1cb9b0bec40f905f668c5a6d8be8d662"],["/archives/2025/03/page/2/index.html","955999ea9cd0b7d870b9355d7464d5d5"],["/archives/2025/index.html","f626112c1bd790cdd1ddf695b9929c31"],["/archives/2025/page/2/index.html","ad4c18a402ad5573922d57090341e1e5"],["/archives/2025/page/3/index.html","eaec23f1ed8dba49c443d502f4194a65"],["/archives/index.html","414438621048a064acc0e120159ec3f4"],["/archives/page/2/index.html","f9da50b58186d3a2f1fc7303079d201e"],["/archives/page/3/index.html","16b5f6b1406222d7c9f856f26d9a3d2e"],["/archives/page/4/index.html","9aac27a79fced496b32725be697a7316"],["/archives/page/5/index.html","9da55d362946982bdc413cbe8d22928c"],["/baidu_verify_codeva-J5b2WWChcR.html","c12891d333ae086fb72ac80d22ea0752"],["/baidu_verify_codeva-cwyza0ZFJb.html","373cf52fe14afb7fcad7dcb09e51dd55"],["/categories/index.html","08fdff24900ea7d40c34de06f928b31c"],["/categories/壁纸/index.html","2c7164e8365efa34a16f6dec65bf5ae7"],["/categories/机网/index.html","3f56238f5ea7d765ba0b0e10681e9230"],["/categories/机网/page/2/index.html","11fb74d932e2e2d37a5c7596edc05f7d"],["/categories/每日早报/index.html","a840ab63a4c2dc178f6f45d4cedcd30e"],["/categories/每日早报/page/2/index.html","bc916e023ab6afb5d3a53834e6ef140d"],["/categories/每日早报/page/3/index.html","12e94134c4565d76a6dadefe53e009e6"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","0f917ac52224e2d36b5d93fb66570cb1"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepseek.html","ee74251af97207669a69e0355ef85dbd"],["/description/index.html","ffc2fda20987de0c301efec3e89216e7"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","bad243ec620aa26bb1a431c668303287"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","3554ce5ce2da010e9136111cb9e490eb"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","5ff12c614dae7636e6a83deac03fc41c"],["/link/index.html","d8c9cdb05800148007d463bc16bcd2a9"],["/music/index.html","b1ad904026335f955acf3602edd17a0b"],["/page/2/index.html","de3026910ba096ffd11d91a2cd740f26"],["/page/3/index.html","46caa2843aac54b8d56766017ba3888a"],["/page/4/index.html","afeafbccf1a65e5976fa28c2179ce434"],["/page/5/index.html","6fac8033aa321a146b47cb2d50439044"],["/service-worker.js","d9486f8256f8f6f31ef16998a0798768"],["/shuoshuo/index.html","2e4a6a24f9061977e544303372222c56"],["/sw-register.js","a1d78cc738ba0ffc34ee49f4407c2bff"],["/tags/index.html","20b2a0ba572403b7457abb118d1d53fc"],["/tags/【每日早报】-2025-02-25 - 星期二.html","a3473890b3c1524c323831f0d646f78f"],["/tags/养眼/index.html","de487934c70446e439a95892faed8442"],["/tags/日常/index.html","bc976860675c43fc86f01b51e767e56c"],["/tags/每日早报/index.html","4651f33297ee9c41ebe7c476305131b2"],["/tags/每日早报/page/2/index.html","130df0b1dc0683d93b4a691f48ae321f"],["/tags/每日早报/page/3/index.html","bb2e6c967edf3431e0569f0d02a30967"],["/tags/第一篇/index.html","de9e52e060f6bb42223335d0417b7c50"],["/tags/网络/index.html","25d17d2ac7e0997a3ac1d313351b48a9"],["/tags/网络/page/2/index.html","01e475ef9870c88ef349f379d3e27f0b"],["/template/index.html","215a23f0bf9c3bd4b771dfd5ef0b3921"],["/temple.html","cfe023525290d9c734dfe2c052de148d"],["/test-post.html","75b051bc3f2fc26a43cb29a6bd1fe515"],["/webhook.html","8869d8e36e130f1bc1dd91c189d9ad13"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","2a6dca344719847d0b1f1cbef6f0a67e"],["/【每日早报】-2025-02-21 - 星期五.html","4fcd74012bb158524b0cdf78b1b0361a"],["/【每日早报】-2025-02-22 - 星期六.html","a670ad5498ae4ff59cadf18b7c4887ee"],["/【每日早报】-2025-02-24 - 星期一.html","4b8c4a344d90bf56be557354d95224bc"],["/【每日早报】-2025-02-25 - 星期二.html","b4e0856e499553dce077ac0c6890de55"],["/【每日早报】-2025-02-26 - 星期三.html","30a1dc24a56535087c7fc86e5da80288"],["/【每日早报】-2025-02-27 - 星期四.html","9fa20ef15acc64d565426f2c49c533c0"],["/【每日早报】-2025-02-28 - 星期五.html","a5bed2a2ca60e94ba5bc767e4d04841b"],["/【每日早报】-2025-03-01 - 星期六.html","fc966f34d290a250f4dcc106000f2661"],["/【每日早报】-2025-03-02 - 星期日.html","6516d355c08a103f24042d12d576a212"],["/【每日早报】-2025-03-06 - 星期四.html","00da4197d7c3e25882784919161d9f6c"],["/【每日早报】-2025-03-07 - 星期五.html","13a86f451888eae9b485209de04ad3db"],["/【每日早报】-2025-03-08 - 星期六.html","973cb4deb6fc78dc10dd75756c17fce6"],["/【每日早报】-2025-03-10 - 星期一.html","e8c2deb7ced31c6b9564facae45df8e7"],["/【每日早报】-2025-03-11 - 星期二.html","4fe2f4139ec0e57d1feac71b8f9db86b"],["/【每日早报】-2025-03-12 - 星期三.html","9d9b5d2a191b1891e8e85333f4a39da9"],["/【每日早报】-2025-03-14 - 星期五.html","e1504dfb04a64b5956b6e5e7a2eaa227"],["/【每日早报】-2025-03-16 - 星期日.html","8dedd0c5d450eef97cdd77131bb62863"],["/【每日早报】-2025-03-20 - 星期四.html","d732f103107656d51e9b83b0cec50320"],["/【每日早报】-2025-03-24 - 星期一.html","6c88c0a814a71c9f7e5cbfae834907f2"],["/【每日早报】-2025-03-25 - 星期二.html","dc7a75203e46ce4a6db575f4698a706f"],["/【每日早报】-2025-03-26 - 星期三.html","3d52ebeb36a63ce4ef9fdd66997faee0"],["/分享壁纸(一).html","f1a8a70b86b2b786c578e869802576e4"],["/分享壁纸(三).html","7b0605e2945e10b55505696dadacbe1d"],["/分享壁纸(二).html","94c2cdd78ee4818493fe65b7fb8a8409"],["/又是一个不眠之夜.html","be69b4ef0aefdaa09c7fced05c9d0e8c"],["/咒术回战.html","e3690f01087e4b300bc3c577c6197527"],["/开端.html","6c982955a08beeef5fcc32e8e8db8364"],["/计算机网络-数据链路(一)8-30.html","1412855b4d83d6abed2ba80af59e3f16"],["/计算机网络-数据链路(三).html","33110d189d4eae9ecfa761795304e055"],["/计算机网络-数据链路(二)8-31.html","75c9d3ace069f04ada3951599dfa0a58"],["/计算机网络-数据链路(五).html","29c0d0ed0d36d07f3a3242451c7c0ddf"],["/计算机网络-数据链路(六).html","2f763c6e9e31d12e25d7403e59b45df3"],["/计算机网络-数据链路(四).html","bf9228c419ee226707f679a8f7514979"],["/计算机网络-数据链路层(七)9-5.html","bb0a56a12d05c7fca69e76d5443a4f75"],["/计算机网络-物理层(一)8-28.html","fc78ffbb637fa4d72b1c44bab2d9792b"],["/计算机网络-物理层(二)8-29.html","a4a5fb48c0231c98ddaf2343dd76fa11"],["/计算机网络-网络层(一)9-6.html","b0c82120acf129a97a0f3170cbb8c0b3"],["/计算机网络体系分层思想(8-27).html","29cfa48d9808668cc77a0ca05167b553"],["/计算机网络性能和体系结构（8.26）.html","61f38e2e9a2bb08a6443886b7f3dcf5c"]];
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

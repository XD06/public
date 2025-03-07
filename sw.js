/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d48a3f9564121ac1816cf2d62add7d7c"],["/Gallery/index.html","b5d163e7542d3933bac0a7a93de95634"],["/about/index.html","8c33f5de9557b7e66dc8e2080b74387f"],["/archives/2022/08/index.html","26fdb6e08950039f211e291809727a3d"],["/archives/2022/08/page/2/index.html","104df50e8cba617c2bcb724d87eb6deb"],["/archives/2022/09/index.html","af681c16ca8e268edcb2a55fe3a1bac2"],["/archives/2022/10/index.html","f74bae2e6e994c73efed409cd02b6cc5"],["/archives/2022/index.html","81b5215b9b1549a4596d42f6111a9c81"],["/archives/2022/page/2/index.html","a2cd393ebde070aca49bee7a9247a0f4"],["/archives/2025/02/index.html","bd0f4086a032077593d233981359ef9b"],["/archives/2025/03/index.html","f0b837089f1ab5a9f042bc82faa2399e"],["/archives/2025/index.html","a6f6b0a5eead781158e51560c8e23fc5"],["/archives/2025/page/2/index.html","d91e74138de966a92491661ec3ed265e"],["/archives/index.html","5e939aa4ce6dbf6d14ecdb70fde0b877"],["/archives/page/2/index.html","57ebcb0c3c4c989c41a2c3999c55defb"],["/archives/page/3/index.html","057d7bdec5519511e1e37e75f35b1302"],["/archives/page/4/index.html","82e49f46f4fde890786fd5170f9b4e24"],["/categories/index.html","51ce5e68545116c9e757a56cc0fe4103"],["/categories/壁纸/index.html","aa6fff14c70180e2203b3cba5b7c599a"],["/categories/机网/index.html","ac7867289276c85e83c5821749c2798c"],["/categories/机网/page/2/index.html","13ae25aec64762183ba2eacb858b670c"],["/categories/每日早报/index.html","2830db09172f177cbe87788a68232fcb"],["/categories/每日早报/page/2/index.html","428d8f6c09d714f87d8ff78d5314d71b"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","d0989f4bbd54a84a380a96a672bd41f6"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","d872c1edf8b7dad7156f9c3dcccf0208"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/hello-world.html","1e2bfff39fbcabd022bf398aebb59599"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","6c713abde33ad39bc2b111464551c925"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","b528c849ed7ebbe37068b5102fed49c9"],["/link/index.html","a9c5ffc6621b9d345a64841da0d70043"],["/music/index.html","52afb2f269bc5c0601b88672b5c8301f"],["/page/2/index.html","72aa06bf3b7b9338b5f711d21fa14f3f"],["/page/3/index.html","ea1cdc61189d5e147100bd2e66ffa132"],["/page/4/index.html","068c5f69f16ede26e7e752e05e4ae3bf"],["/service-worker.js","47d1c74fd9d1051e3f80fbdd7a7fe0a6"],["/shuoshuo/index.html","13ae8786c450ca0d3df1d3bc71f3cae3"],["/sw-register.js","558cc4c951cbf19a0655a1906ca5c6aa"],["/tags/index.html","6b1928ee412616bd420196337fd6f0b4"],["/tags/【每日早报】-2025-02-25 - 星期二.html","8e045c4042f592f6d2de4ac938d1208e"],["/tags/养眼/index.html","eb640431a0ac335e02e96ad5ce5631fb"],["/tags/日常/index.html","3085644aa861f17e5fb5779592f7706f"],["/tags/每日早报/index.html","7effe728f2716aceaecdcf8bac44494a"],["/tags/每日早报/page/2/index.html","06d56a846f3a0400838c11e955b47330"],["/tags/第一篇/index.html","c11827d8436700d91b5e6166ce352321"],["/tags/网络/index.html","011a44b5b18d07e1aee914c11cd5171a"],["/tags/网络/page/2/index.html","bb5e4a05b8b487b2575fc44b0bc7dc40"],["/template/index.html","df5a12894e6a3af264df6d9550545018"],["/test-post.html","4f1d2b67838593e90acf84754beaa90f"],["/test.html","f3b979949268b14b8b7402e6f19d61b5"],["/webhook.html","2636690f5e45452b5a3c02ac4d9ae238"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","66629fd0fc70f26887588164cfb15191"],["/【每日早报】-2025-02-21 - 星期五.html","ab00c4b3442964a8ed87cf9dc952e7c4"],["/【每日早报】-2025-02-22 - 星期六.html","275546b0b879aa0e364fdaaec93ddd11"],["/【每日早报】-2025-02-24 - 星期一.html","f81c9c5496fe163a4e2ed0b4b0b89490"],["/【每日早报】-2025-02-25 - 星期二.html","e3e35774b5658c786c2475da842fb081"],["/【每日早报】-2025-02-26 - 星期三.html","0b3202c2fdea77f59d7a4a6de2fd23f0"],["/【每日早报】-2025-02-27 - 星期四.html","14d166b54a2771e61ebc185cb7027722"],["/【每日早报】-2025-02-28 - 星期五.html","d3886aa59704d70c7c4474e3621ba0e8"],["/【每日早报】-2025-03-01 - 星期六.html","ba2963f22c20f09786205fd2859984a3"],["/【每日早报】-2025-03-02 - 星期日.html","7bd11a7c97a7af7bec98d7d4da30c486"],["/【每日早报】-2025-03-06 - 星期四.html","4ecef825e17376e52d702cd4ef993a4e"],["/【每日早报】-2025-03-07 - 星期五.html","333f78635cb1626f905cc31043a5e434"],["/分享壁纸(一).html","888785c9e9e9c2878a82f11a8bce42b4"],["/分享壁纸(三).html","849a36674380ef2b0906d86ad293d630"],["/分享壁纸(二).html","d0acb07dd5ae10e4d568c7c290e23301"],["/又是一个不眠之夜.html","b712140dd507824ced20c968ba6478c0"],["/咒术回战.html","1653d4d32fef2e6cc77c08b09e20b210"],["/开端.html","98c752c776c52c948414d556db5f808b"],["/白桃露露.html","803cb38a0ce9edce4d8643e7ca8b5bb8"],["/示例.html","ad6346549872252640dccccb7b5b314b"],["/计算机网络-数据链路(一)8-30.html","4c0358a5bf1260b1326b89544235d046"],["/计算机网络-数据链路(三).html","0379071ea6ff03a55390217cea3a176e"],["/计算机网络-数据链路(二)8-31.html","65b0a28265e0898cef95a8921bade70d"],["/计算机网络-数据链路(五).html","96b3303b783b26b4c43854fe46ae51f9"],["/计算机网络-数据链路(六).html","5b7a8c62d894207977d9dd6955e25cf5"],["/计算机网络-数据链路(四).html","21903f8db887ceed0a8606d8d5470ef2"],["/计算机网络-数据链路层(七)9-5.html","dca7880215915afa62f8c9455eb53b09"],["/计算机网络-物理层(一)8-28.html","9475f861b5dff52aa606e31a733e165a"],["/计算机网络-物理层(二)8-29.html","5711913f43a9298b6ba85ccc395dfc87"],["/计算机网络-网络层(一)9-6.html","14630cbc47505e68974c45e0394ede69"],["/计算机网络体系分层思想(8-27).html","0c3d2e7a2329695421dcfe57c1f808e3"],["/计算机网络性能和体系结构（8.26）.html","d88acb85aa90c8fd1f7a546c65e2aa6b"]];
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

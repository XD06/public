/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","185825ad0e1126792bebe5e26f8fddab"],["/Gallery/index.html","3dd3e26ee1d004242bad07586bd8e1f9"],["/about/index.html","3f6b5302b4a4f8ce0a195e2dc5504c5d"],["/archives/2022/08/index.html","d1dad8c1f32733cbf09fa8307d1043db"],["/archives/2022/08/page/2/index.html","49780266e21dfa21ba0c9949eee6c0c0"],["/archives/2022/09/index.html","b23f359fa995e66d90a097ffd20c7914"],["/archives/2022/10/index.html","92ade929da3eae13819be43bbc97e7d3"],["/archives/2022/index.html","52c41197383501b67c37d50ad2d0fb1b"],["/archives/2022/page/2/index.html","ccc15431fa1a5ebc7e15672dcf32ff62"],["/archives/2025/02/index.html","e36aeff70068d607ae7dcac2a9e7a717"],["/archives/2025/03/index.html","64289af1ccd81fabc838c116880b1f2c"],["/archives/2025/index.html","4e134a8f3e0381a4cfe26cb7a1c029ec"],["/archives/2025/page/2/index.html","ee631d05b17f17f99692626494766ced"],["/archives/index.html","ff9d19e7e72c1c69ebd2029921c101e7"],["/archives/page/2/index.html","78f5c71ee69bdd2fb9adc85321daa7e6"],["/archives/page/3/index.html","ffa3e6e42a590be6d4915197c65a300d"],["/archives/page/4/index.html","047a08cb940d3f3a474f0c7bb35948ea"],["/categories/index.html","2d1c040dd59d1edc94d455097eb7a8b1"],["/categories/壁纸/index.html","0203e4e96198b12247c16a9bca9e1d33"],["/categories/机网/index.html","8193e185ed5fba0ca584eed5bea97089"],["/categories/机网/page/2/index.html","bce7d2774105be4ec3bbd51f337971a2"],["/categories/每日早报/index.html","61e09807c62969f367a4b62149678860"],["/categories/每日早报/page/2/index.html","e41c8656db3cf9542905d1bcade8ec4b"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","85bf2a16eb1bf15e0a0c5233c56f8c6f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","1b696710e466c1886a96ef92cbe721bf"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","c4d6d83ab00e1afb7e6134dffd8a1136"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","aaf1ffa24d6231846f4a35021e3c4ad4"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","80702d2558be39cbaf3b842a5b77667f"],["/link/index.html","26fb3f9f47b3c28f1ce603b128f4aa9a"],["/music/index.html","f00604604d2671ade199c734f162d001"],["/page/2/index.html","e67634cb373f890d35626ae762326d38"],["/page/3/index.html","83e5c33a13bc7273abfdc5043695c689"],["/page/4/index.html","364811d60fcab30c74258a28c9881d11"],["/service-worker.js","9c1b2534294ad1656a8694f2aee93470"],["/shuoshuo/index.html","a17a3dba9ed93747cafbb29fa05b77e8"],["/sw-register.js","02c3edd5dca48e89a1f304653b232a9c"],["/tags/index.html","5a278aa8d67e63687d98739a798fbfed"],["/tags/【每日早报】-2025-02-25 - 星期二.html","3515b76079b54deaaf7e6be909bc3735"],["/tags/养眼/index.html","c844662b0009b1a2366074997da6f80f"],["/tags/日常/index.html","f3bb9c582852db4d14ed9f4a06c5091d"],["/tags/每日早报/index.html","b4117748d67777a500d1bf93e4c3bcec"],["/tags/每日早报/page/2/index.html","0fdc432b8c9b25be0b14c11a373282cf"],["/tags/第一篇/index.html","e91516f7ff77a1096d749777060db881"],["/tags/网络/index.html","2fb33ad7c85ca7206d2c148d36dd02f0"],["/tags/网络/page/2/index.html","2df8346d8802f87c9566cdb1eeb83398"],["/template/index.html","778696156df6aa55ad74fedc70380d4f"],["/test-post.html","bea578509acf4aff4c006b13c6729151"],["/webhook.html","bcee2186177353af47380bc701b502ff"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","8b257cd16a94385da6eba29a11af45f0"],["/【每日早报】-2025-02-21 - 星期五.html","9f68c253bec00c2bc386d87ce006cc15"],["/【每日早报】-2025-02-22 - 星期六.html","b9cc87e3f334290e0e85ff47b2274d44"],["/【每日早报】-2025-02-24 - 星期一.html","cd6aed2b33da8cc15f9029a46c985f7f"],["/【每日早报】-2025-02-25 - 星期二.html","963882ace80e3809770f69ef34b3b4d9"],["/【每日早报】-2025-02-26 - 星期三.html","cc9a0e66c8c43dfdd659ef1368e74560"],["/【每日早报】-2025-02-27 - 星期四.html","197e81552402aa51e2c9037743eeb84f"],["/【每日早报】-2025-02-28 - 星期五.html","fa30a4d0a31f17c1bc0d4cdac79b5a4b"],["/【每日早报】-2025-03-01 - 星期六.html","e68632d2eaeead4fdd96814113f70a64"],["/【每日早报】-2025-03-02 - 星期日.html","bee398802cc7dc7b66a51f6ae78e69c3"],["/【每日早报】-2025-03-06 - 星期四.html","403e6edbb0263c99a82253fa4c3b15be"],["/【每日早报】-2025-03-07 - 星期五.html","a3db96a1c1352233f1b66b23dbb592d3"],["/【每日早报】-2025-03-08 - 星期六.html","1f3a218e6937a3e7658f57a6b3e9dec6"],["/分享壁纸(一).html","56e1b060028aeab23c307b8c53487f13"],["/分享壁纸(三).html","23398332bcfda4ec92cf4122ed5d8f7b"],["/分享壁纸(二).html","9d5188f0a7bf03a46b647aae2bded6f7"],["/又是一个不眠之夜.html","fbd149532332d5460e52c81b4acca6ba"],["/咒术回战.html","8782a1c8c9382f403af8cf7ceb2e04d0"],["/开端.html","cf95719c0a05eaa662d5a485ac47e386"],["/示例.html","2601f6bd329c18278ef162247cca6ec6"],["/计算机网络-数据链路(一)8-30.html","ee829cb03a30791a141cafb0e6dc5a4a"],["/计算机网络-数据链路(三).html","170af7888c37c6668a18990e9759496d"],["/计算机网络-数据链路(二)8-31.html","998018b6726e64122a8bd7a46a81a94e"],["/计算机网络-数据链路(五).html","242eece25d17ad6fd1be4d95b630b215"],["/计算机网络-数据链路(六).html","548ff2f53b08dfa73bf5bb62382e4841"],["/计算机网络-数据链路(四).html","44a6293ddecd50147062febedbef2105"],["/计算机网络-数据链路层(七)9-5.html","c5434625287704b871ee1368b73154b6"],["/计算机网络-物理层(一)8-28.html","00ce406bd19e2dd3a0c52c602b565e1f"],["/计算机网络-物理层(二)8-29.html","8e388551ef47e8a4851e17384384b5bf"],["/计算机网络-网络层(一)9-6.html","ec0ef8f9507382ebaddc975918cd06cf"],["/计算机网络体系分层思想(8-27).html","d72ef92d8c13b9516071712b272266e6"],["/计算机网络性能和体系结构（8.26）.html","58b584e851a6314f3e671cfa55517028"]];
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

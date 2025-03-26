/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a5ed590b847e220ec4e95ce33aa1b79f"],["/Gallery/index.html","b412b39ee46d3e3389a3a4de8cfe596c"],["/about/index.html","a77539950048f2c8b547545ffefde8dd"],["/archives/2022/08/index.html","ee98b1317d9412778ae6f8fb8141415a"],["/archives/2022/08/page/2/index.html","604e9358c9f244dd73c558304048c4a7"],["/archives/2022/09/index.html","01ca4550dadf6f12e52706afb53c7bd6"],["/archives/2022/10/index.html","777394b0a501aa935984cc3896b064d9"],["/archives/2022/index.html","7b26772f3ffd93dbb34f0679b287e209"],["/archives/2022/page/2/index.html","134815af5361ccba496ff002f25aecbe"],["/archives/2025/02/index.html","bc126069a20bbca621f96352efd346fb"],["/archives/2025/03/index.html","fd8eb71a9e0fd4523decb3bc2ec5db60"],["/archives/2025/03/page/2/index.html","e1f0bd38d9168b9d1ddef7e7ccca5e88"],["/archives/2025/index.html","d65397625fab8f70f4476b46f1d8cd53"],["/archives/2025/page/2/index.html","9ecf028f0d7b3bdf30fe1f548a139b02"],["/archives/2025/page/3/index.html","d6ab8f642828df4f89accf3aaabf7527"],["/archives/index.html","e2ea7646364350aacc4d906333f54587"],["/archives/page/2/index.html","d244233fb13a08b07773b52c08d00b4b"],["/archives/page/3/index.html","da559fc3335f63acd9334104128b128d"],["/archives/page/4/index.html","0afbf3df87848d3672e406d952336250"],["/archives/page/5/index.html","8d7d9a4095b6dd3ffd355f6123fd1fce"],["/baidu_verify_codeva-cwyza0ZFJb.html","5029619c41029d5d204b42ee9ccd666b"],["/categories/index.html","56d5a556f952eab955d1b25fe99f4c43"],["/categories/壁纸/index.html","6863f366a3d9aec805eea24a2761fae6"],["/categories/机网/index.html","55b997002559a0c1641547e7968e276b"],["/categories/机网/page/2/index.html","1e82a9f8f86c4933c5517a6018aa3616"],["/categories/每日早报/index.html","bff93a2b77e1245c34a99c4e11383eee"],["/categories/每日早报/page/2/index.html","c7be90235efdf8644e81278bb8cd7f51"],["/categories/每日早报/page/3/index.html","6d05951a9f3012743ba172334a97878f"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","0f917ac52224e2d36b5d93fb66570cb1"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepseek.html","27f82b468396f6b259d7ce0e1f806990"],["/description/index.html","6e701d46e8a68785a9d9ceae09113256"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/hello-world.html","86413367aed0a32bfc1b241a6a074769"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","3407b729a602f4ef71fcc4fa6ad151c1"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","89af5687c5a76ea4ab65535535c8359a"],["/link/index.html","5d7403ee18a486cd5f3a3ba8995d3131"],["/music/index.html","9ae679e70f6df834d3d06b33e1709172"],["/page/2/index.html","1d814de65a1668a97851a316fe049013"],["/page/3/index.html","c619001c4c36722b12e9e70930c664c5"],["/page/4/index.html","17971c0bb77e764056b2533cffd2e581"],["/page/5/index.html","afa2fd294449d5e41e27dd831294e358"],["/service-worker.js","df2d00b93ede9cdd519dccbbb117cb48"],["/shuoshuo/index.html","67a3b994e5445d55d8db2a78cf55a2f8"],["/sw-register.js","ecda3d4d9e288fea0a1b2e4e319585cb"],["/tags/index.html","197c7f657933c0486af7815feeca7f49"],["/tags/【每日早报】-2025-02-25 - 星期二.html","9b0626321b26c82613a1533c85622471"],["/tags/养眼/index.html","5f15fd07ce43de5ab8c14589dd27a350"],["/tags/日常/index.html","cdd40fbabb933c0a7afaa7de4fe9c452"],["/tags/每日早报/index.html","d6af7800a19f307f1b74ee64c2aec8cc"],["/tags/每日早报/page/2/index.html","925737b80dccfb4a4319c2ce856366fe"],["/tags/每日早报/page/3/index.html","3370552db5bf4b076886a634d5e80d5f"],["/tags/第一篇/index.html","bb90545b6ebf09d1e4f0f8d49573050c"],["/tags/网络/index.html","408e832bf2ae765618304cbe8a112331"],["/tags/网络/page/2/index.html","8baf33ecd5d82cd75f493c40b9f13b98"],["/template/index.html","0024bf31c2b760644438cbb167386c1c"],["/temple.html","e4910c86ff15c2f30ca238dab543d875"],["/test-post.html","0291bf05c15fbd7cbc879c286cecd35b"],["/webhook.html","e893a6290bcd4ae88a1774d43a8caebb"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"],["/【每日早报】-2025-02-19 - 星期三.html","2ecc0fbe2ce3b4b2fc7c8fa3d878186b"],["/【每日早报】-2025-02-21 - 星期五.html","aa0502161f5ebf3bfbea5145c63623fb"],["/【每日早报】-2025-02-22 - 星期六.html","cfff23c8f10ba0197176514705c96032"],["/【每日早报】-2025-02-24 - 星期一.html","d6d575d0511797d5e0bf2656fe141206"],["/【每日早报】-2025-02-25 - 星期二.html","4bd07581cb527bce50bce3f89661347b"],["/【每日早报】-2025-02-26 - 星期三.html","12ca62bc0c1ff852e8a6ed5c380c7613"],["/【每日早报】-2025-02-27 - 星期四.html","949c8825132ac080eeee51bc1d4ff3d0"],["/【每日早报】-2025-02-28 - 星期五.html","c486fe4887346df01ed3a3a6e8983c06"],["/【每日早报】-2025-03-01 - 星期六.html","ecddb05b9ce1013880a8717abf4e7849"],["/【每日早报】-2025-03-02 - 星期日.html","eb0d3c6f7943fa6d5afd8e6a3f260f96"],["/【每日早报】-2025-03-06 - 星期四.html","cdf3a16aafd23c4a3bd285790b40ce12"],["/【每日早报】-2025-03-07 - 星期五.html","670d7add9db2ec5378e6e49a67594f46"],["/【每日早报】-2025-03-08 - 星期六.html","384aa0d35d45435e100bd1a4f761385f"],["/【每日早报】-2025-03-10 - 星期一.html","16303a557161fc569905bb7ae4118d8e"],["/【每日早报】-2025-03-11 - 星期二.html","3560a439c7a94e6130efad4e6d75e63a"],["/【每日早报】-2025-03-12 - 星期三.html","7b799647034b63c038a9954f642f12b1"],["/【每日早报】-2025-03-14 - 星期五.html","dff72eba99dd5ba215376b8902ab68cc"],["/【每日早报】-2025-03-16 - 星期日.html","39c5190a58b9db3de368a2d1f07a7aeb"],["/【每日早报】-2025-03-20 - 星期四.html","cc5db2e655d37a7f4297cd1ab0db116f"],["/【每日早报】-2025-03-24 - 星期一.html","9d299499456fd19eeafcbc2affe74308"],["/【每日早报】-2025-03-25 - 星期二.html","05e6521057aaa97b15ceacd8c02643ef"],["/【每日早报】-2025-03-26 - 星期三.html","7c81a948d004f8c428c3290725bcc33e"],["/分享壁纸(一).html","33459fcb2ca9f205e33af195cd77ef23"],["/分享壁纸(三).html","20a2950447564645dc6f6724fdb1b210"],["/分享壁纸(二).html","471d3c0eabddc84910a81d60a33d89a3"],["/又是一个不眠之夜.html","deb39a467ec1c659bf91213202193902"],["/咒术回战.html","c08cc3cd1e1d32fd9919a3d1ded42241"],["/开端.html","d5286bb41302eeb20684761f12b7a392"],["/计算机网络-数据链路(一)8-30.html","de0d395cbd6796c9302f5a6dd438e18e"],["/计算机网络-数据链路(三).html","68a46e8760867911abb25ef37fb01b9f"],["/计算机网络-数据链路(二)8-31.html","473194fb1d3340ccc95895081e21af6f"],["/计算机网络-数据链路(五).html","3eb93d7d97da471cdf286ae2862d53a0"],["/计算机网络-数据链路(六).html","7517eb6d850e75295d54460255864671"],["/计算机网络-数据链路(四).html","5bcaca4a711898ce78d02150e8df6ee3"],["/计算机网络-数据链路层(七)9-5.html","b3da24d0d7355dc75b70aa6c1cddd2a2"],["/计算机网络-物理层(一)8-28.html","093f4dd126b025c2d7bf7dbc395b1e1f"],["/计算机网络-物理层(二)8-29.html","56656980b76080884fdc5b3bc2018938"],["/计算机网络-网络层(一)9-6.html","8ae6c580e8091d0c3c9b663540ced57d"],["/计算机网络体系分层思想(8-27).html","b45f115a1ac8f7837f69981c1c7a159f"],["/计算机网络性能和体系结构（8.26）.html","cfed8d7c029c20aefe80c94768319d67"]];
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

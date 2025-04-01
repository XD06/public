/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","20ebc67440862b38b08e356a4ba149ca"],["/Gallery/index.html","fd98d357cde5a496de20e5ad554bb9e8"],["/about/index.html","b1ac98aabd6f353aa70323d72ae35fb6"],["/archives/2022/08/index.html","029da38d817dafe551c6ce79b96a0644"],["/archives/2022/09/index.html","6eddc69f0955a68898fe9c7137f8cdb5"],["/archives/2022/10/index.html","acb81567e98d3f3818101ac90ac6d133"],["/archives/2022/index.html","bc24a7358b03b228e7de4eceaaf9e95b"],["/archives/2022/page/2/index.html","b4d33df9eaf75119fc4794caaea997ed"],["/archives/2025/02/index.html","c2c126cdaf86d5ec90d2eaaa338ba886"],["/archives/2025/02/page/2/index.html","5702a727a5cadab1c5b33dba4e51bd67"],["/archives/2025/03/index.html","81ef38467810c41ca5f9667ae031c2a5"],["/archives/2025/03/page/2/index.html","bd35c4737ae3945e512de672be9caca4"],["/archives/2025/04/index.html","96499a34e9d9902769ee80f38e073bd6"],["/archives/2025/index.html","d2df3f858a6417fa91f5929e65d2b953"],["/archives/2025/page/2/index.html","aa31581d9508b52289bbe96ad35d4418"],["/archives/2025/page/3/index.html","95260588bbf0657358bed4625d5b6540"],["/archives/index.html","f463f109b42a84a4f1adb81dc4e5d923"],["/archives/page/2/index.html","e4f4218333d74022dc1becce574d41b0"],["/archives/page/3/index.html","ff7346d3a118d9830b4929cd7d7293e8"],["/archives/page/4/index.html","645716924e6fedee3f60cebb8f32ed03"],["/archives/page/5/index.html","04ca746b24d595fd70ca038fea75f22a"],["/baidu_verify_codeva-J5b2WWChcR.html","6e9122aa407cecc16862bb5bdfe83720"],["/baidu_verify_codeva-cwyza0ZFJb.html","0a0b67cfe5694bf0e66eb1d73c394eb2"],["/categories/index.html","cc6208a47cb25e2a55239d9b7df289bc"],["/categories/壁纸/index.html","6472814d68ca6e92249095e16eaaf4e9"],["/categories/机网/index.html","c66356e4674a1e3e6dffc6ca8d56e510"],["/categories/机网/page/2/index.html","a72b8b845f253516db642074fd2998d2"],["/categories/每日早报/index.html","2fddfede29718c88956662374dc06e70"],["/categories/每日早报/page/2/index.html","114ec4e8b44bdc93b8314cbe29df7e64"],["/categories/每日早报/page/3/index.html","3a5cd0bae35a76a00d9a1baeda576358"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","c10c6c0df1f0bdfea351ad6bb45a1e8f"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","1a6cd5c0ae70a83d7756e94cab9626f7"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","ae2688ce37f3a255a0c1005ee445b785"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","fd1af4d9e164af9a6ec420ea1baaaea5"],["/link/index.html","1ca8e1530a90f67b337276fa25eb5c23"],["/music/index.html","eff69245d979a3d46d9ec3c64f58da1c"],["/page/2/index.html","a6e7bf11442328aaea34577d7ab37142"],["/page/3/index.html","3519feae1a0da9195d76edc8aa34e79a"],["/page/4/index.html","d26d65b3c5c7abc68b08b633b157c8c0"],["/page/5/index.html","e24b4ad8543c3212c099630f109fdf1f"],["/posts/1b0c78b3.html","728496d17f0080abdd1b285af150b349"],["/posts/1b5b87.html","80ba3448a2bf84e554c18f22ad5b403e"],["/posts/2134d9d1.html","8c37cb09f335836f81a5d501137b6c28"],["/posts/28c755c.html","d9d4790af851a27d8b8e3a196d4822c4"],["/posts/330d6f69.html","305e2808d44ce65da28b0c68d228d9f4"],["/posts/3b744803.html","d5031999f9d3ff7e313d09837e56cfdd"],["/posts/3da05156.html","16d362c0314a2d58ad181fbff804dde1"],["/posts/3e91e0fa.html","8ea10bc8a622df0ea6e4cc18109b2386"],["/posts/41c2c0d2.html","5bee2c7f4d29b6adab85734116a97973"],["/posts/46fc5adc.html","572d097c09f5e27821016a608d7e7c73"],["/posts/493f6b85.html","a7903fe9a10d65d1111f1555275e4635"],["/posts/497e40e0.html","257a2957488d997b8d06a50b325b4404"],["/posts/4a17b156.html","3348df41420e3dc1cced46e73a9bcd14"],["/posts/4e2d7b19.html","0ea6fa263520564adb3d8919ffbee2eb"],["/posts/4f81eb97.html","4d71612336292b09d4742c744d895814"],["/posts/53721e0e.html","b03ae7d94ec797fac0196dd6f0bb5168"],["/posts/5dadd067.html","0d819d5d2052f99ea3f20d1ee6f9b1d9"],["/posts/5ff34642.html","15ea5c8c982174de28f0b42cf090cbdf"],["/posts/653abebf.html","bc68992e7430c62d9d0a074736720c42"],["/posts/681265c2.html","e31da1f1a9778fdc5bad1f0faf155cb3"],["/posts/6f44662f.html","ebef491943aab69624c9fe30ccc6f347"],["/posts/7207f70e.html","86a1ab7a93096e0d33045d9666435eef"],["/posts/7289f891.html","c5facf677056fdb08351fba407581c02"],["/posts/732e626.html","d227dc1580abade35fc41cc00a37e628"],["/posts/7e13cc3b.html","ad6cb8b8534d3a373d581ae7002dc46e"],["/posts/80a7ecce.html","59e2a873a31ce0cd60fa2893e122231d"],["/posts/821a4686.html","8114b94a0cc01e496ab41c373bb953d7"],["/posts/8a741756.html","bff3bbdc7b2052493ef891bb0c3ec75b"],["/posts/918d46c1.html","5e841940f75a176a5da48a02d5457c7f"],["/posts/93c8c0c7.html","e7ff538f9eadd623a56c922239593ff2"],["/posts/9f057e9a.html","a0db9fe002d98f19a6ddc381fdcdf58d"],["/posts/a7d437fe.html","e37ccea3d0750674de9b6828bbb64cb6"],["/posts/ace4e4cd.html","40a3c955560d528158c077a5d36083c6"],["/posts/af30ddef.html","7fcc60aeeac5096388ec54c275f696e5"],["/posts/b1eb9c6d.html","2cb4157cb4dd60564c76e737ef55c01e"],["/posts/b564e922.html","1e297e7768a3734374b50a931177f6a7"],["/posts/bc9a4dc7.html","0fb348e88604364646df817c83b83afe"],["/posts/be543a11.html","3a7d347c7603745f192c8c732af18b3a"],["/posts/c9b871f1.html","a3c1bc6b1aa434f707b97ca293bde5e3"],["/posts/d6ef11e5.html","b2702a21b1d35d132d8396c072a54ec7"],["/posts/dcd6fdd1.html","f55c2d85b1a8ce362590e1e5afb25c5a"],["/posts/de24a124.html","a8e739da2504d7d3b78d9903c8e2c81b"],["/posts/e32cbcd3.html","298eb81b46601be6dab8d5d32895c302"],["/posts/eebbc69f.html","4cbdda09c02d6c5c59d7b41b67a2e01a"],["/posts/f08119d7.html","4ad7b5bc887b31f48310f70a39575606"],["/posts/f7f51423.html","43da1fcf61ebd2e9dcbe3a4c6acadea7"],["/posts/fd1a8f9f.html","c7e5d6fb16cb9100d8eaaf77caa58247"],["/service-worker.js","b50b6162cae889d22c283dc771bb537c"],["/shuoshuo/index.html","cbde325e462e2fa6ca561aa6e8ed7223"],["/sw-register.js","ec41396d7a21434aaf0a440b28c4436d"],["/tags/index.html","e61efd24aedb5c2d36afbd9335f5a588"],["/tags/【每日早报】-2025-02-25 - 星期二.html","1b207c74afa35108dd7d16eb3dda8f9d"],["/tags/养眼/index.html","d02d91676f452f76b246a8722693ba00"],["/tags/每日早报/index.html","3c398dce8517f66e16cd4f498d99fade"],["/tags/每日早报/page/2/index.html","cb79a9d1f7873992cc3339972d6a87c5"],["/tags/每日早报/page/3/index.html","cdc578e4ef5393086eb212b03d6fe3a1"],["/tags/第一篇/index.html","d9765d6377a74ad69df823a1ea03feef"],["/tags/网络/index.html","362dd1538f9f8af517c736b88f90551e"],["/tags/网络/page/2/index.html","923fcd3daed34f5163e6cd5e764a73cf"],["/template/index.html","4967b53bcc39caa29ec6b24e635d1e05"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a333b7d65956dfb9143c038a78547c2d"],["/Gallery/index.html","d0e1f1ab74c478c341d69d149b99f283"],["/about/index.html","241d0c7713249872d30af88fa9663237"],["/archives/2022/08/index.html","3eae8dc3c23831b535e6bf12597b2d41"],["/archives/2022/09/index.html","a9743c30eb48dba52161abdf2fe582f1"],["/archives/2022/10/index.html","a9347dd481d004bf282806b5b4b7a7fb"],["/archives/2022/index.html","3bf55e6a1e0b344980031e1e467e1269"],["/archives/2022/page/2/index.html","27a662ec91e7dfa48670104118ddbdbb"],["/archives/2025/02/index.html","ee4e4da7c37b276cacd535ddc523827f"],["/archives/2025/02/page/2/index.html","fb5d24240788443e2263d4a09892470b"],["/archives/2025/03/index.html","6bbf679825f2ef7fd8c747d67b7df2cc"],["/archives/2025/03/page/2/index.html","0b5cd932dbf4ac4e3a3259a5d61698ff"],["/archives/2025/04/index.html","5ef9d341d10f62e966de91ef1a68ed5f"],["/archives/2025/index.html","7f879d53352587754ba27de22ab282c9"],["/archives/2025/page/2/index.html","3108db95a0c89c99327c454487f0a7ce"],["/archives/2025/page/3/index.html","4c19155e8d03e13583b354e33ec582ee"],["/archives/index.html","6c410b5e421c6a193c1c26cd13f7216f"],["/archives/page/2/index.html","802668d426c69a0dba39ef67246a4865"],["/archives/page/3/index.html","af35029382d1d9526c4c027ceb85edac"],["/archives/page/4/index.html","c868a7332a4c6ccf0564063620da07ff"],["/archives/page/5/index.html","4de556f861bb42f82ec47e07d6a9886c"],["/baidu_verify_codeva-J5b2WWChcR.html","84ca2e186becf75f39c74a73beaa65f5"],["/baidu_verify_codeva-cwyza0ZFJb.html","c0b425101cf1cc63443a957d52d54900"],["/categories/index.html","30044680b5ae4e97e99140015d6beda2"],["/categories/壁纸/index.html","fdab894137b75e44dc6fde3f543d4f3d"],["/categories/机网/index.html","bfac919a04d364a0133dc2ed33db400c"],["/categories/机网/page/2/index.html","ee962b914c54a00da91b596fb906099b"],["/categories/每日早报/index.html","b79819bbc8157deaa2f10cfa0f6ad52b"],["/categories/每日早报/page/2/index.html","63783113f89ec7c263efcc0c16109660"],["/categories/每日早报/page/3/index.html","823e38dc003a777f19d14f258d1fd8db"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","9ec00f49de7af849b2db836874f8a7e1"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","327e0484fdab903b7424fd5b25d20b6e"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","1ee0a38e5e4e79b88917b993fe9f7962"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","028899f1029c6613a255a78c54597565"],["/link/index.html","d736ee29f30b635db16149cd73370be2"],["/music/index.html","c9eaeff4b3854a13821e55357dd1252f"],["/page/2/index.html","51a336c4e55e188a61b36380bc255f0f"],["/page/3/index.html","f296629f28c338463f38a4aa2ce2ae1e"],["/page/4/index.html","142207a923b42e08563992cf5ac4c305"],["/page/5/index.html","1fabf8d0837a88c3053d2c52b9d3ef92"],["/posts/1b0c78b3.html","66ce013e9b4aefaf5c4f757531b12a63"],["/posts/1b5b87.html","f5099ee41efdc6fd07d7f0cd2ebcdd89"],["/posts/2134d9d1.html","e0f93728f97fcba7ee9f20e8638b5b2d"],["/posts/28c755c.html","3f87cd2f784f8e67483904bfb6dd3ec9"],["/posts/2f77f294.html","fa906deca146f3a28c52a9d2ccbd73d2"],["/posts/330d6f69.html","6f459deb4961e80e16635a2194885bb3"],["/posts/3b744803.html","49609450be28839efa98bc77b16c2da5"],["/posts/3da05156.html","39c61602a3aedef7c00d109f3730aa02"],["/posts/3e91e0fa.html","9d7a3b3b0a25911f9471719d00eb12f7"],["/posts/41c2c0d2.html","bc22531a1c06fa817adbfaac50a9ab5a"],["/posts/46fc5adc.html","0b712744070587d7171544136ff8e6fb"],["/posts/493f6b85.html","798f97461b26af30b50a420acf1f858b"],["/posts/497e40e0.html","e95c7d463fd675f720b7881f8ab6cf63"],["/posts/4a17b156.html","4f5c9ae5df68a6874d0be53884004937"],["/posts/4e2d7b19.html","50a23b86f7d7437e47925e56e542ac24"],["/posts/4f81eb97.html","0dd9e17bb945cb6b6e32d8f0233a6977"],["/posts/53721e0e.html","a8c0c00a8e815aaadf18f7c9fff13de7"],["/posts/5dadd067.html","14e134a0a53c64a637beea868f276cc9"],["/posts/5ff34642.html","f904d6a1d3000d98bb48b5a8a612e98e"],["/posts/653abebf.html","702b0e2b414ddf100b77df42cce3f88d"],["/posts/681265c2.html","bda22d650eadf9595da75b65de9f4f90"],["/posts/6f44662f.html","c6caf6b0d98dced52d3125606bcb56d7"],["/posts/7207f70e.html","52fb51ae19144e0b7d9a426aeb66e21b"],["/posts/7289f891.html","597bd4752d31e0f08e8f064b17cfd54a"],["/posts/732e626.html","5795b83789085e336a610ee4e008d54f"],["/posts/7e13cc3b.html","82e64e8b3a355ad1d745c03c06aec1ce"],["/posts/80a7ecce.html","e251da81bb75596e027ec980e1ac5175"],["/posts/821a4686.html","a87591535fc0a26bf89caac671d45b29"],["/posts/8a741756.html","13f8c4a391698de0ebac54494326adfd"],["/posts/918d46c1.html","52433d20ce50ee136ac83ee6f31c1412"],["/posts/93c8c0c7.html","7a3c731d94bb458cad7677ed226d8dd5"],["/posts/9f057e9a.html","24c3f2448a1eccc406015b3988e5b867"],["/posts/a7d437fe.html","b00ecb79774a2fa1bd6dd1808466999e"],["/posts/ace4e4cd.html","d8081f6b74ee8500c8d4f5011ade538f"],["/posts/af30ddef.html","2ec1915a3e142cc7da5a164ffb223d3e"],["/posts/b1eb9c6d.html","2126a8e9ea9e7ac5beb7cddb3063a262"],["/posts/b564e922.html","90f72003509943ab355c23bd032609bf"],["/posts/bc9a4dc7.html","c64879d1f7310dd6803069a3eee8daf8"],["/posts/be543a11.html","b4597e2a91a633432296dd2bf54abbb9"],["/posts/c9b871f1.html","c884b4027abe8bac0be70550a607c59f"],["/posts/d6ef11e5.html","267d94cdae8a145fc6bca3bb9baad061"],["/posts/dcd6fdd1.html","aac3ba44f468b912535feda5144549dc"],["/posts/de24a124.html","d8fb8456efdc8d89dcac556c91e456d8"],["/posts/e32cbcd3.html","97f464b109e61d161421622b643486db"],["/posts/eebbc69f.html","299b558a923ad25e7113bdfccdbc3f15"],["/posts/f08119d7.html","9b96a6784c037eb09474ddd253f9a7b2"],["/posts/f7f51423.html","d39031522d2c4fed1339b611e7a86f8c"],["/posts/fd1a8f9f.html","540c04315e9f181d2708880f0d8369dc"],["/service-worker.js","f3058fb9499d57417a5008f37d6e372b"],["/shuoshuo/index.html","be5079d72fb73896a57b664a4cf883f6"],["/sw-register.js","2632dc69826356450abd856f7c702076"],["/tags/index.html","0e03d35bc176587bf6dc713d7e39627e"],["/tags/【每日早报】-2025-02-25 - 星期二.html","54dca17ce392c12178e1202aebf599e6"],["/tags/养眼/index.html","5ade1c205568826162a266f7e8feeff5"],["/tags/每日早报/index.html","e2d23482253379b6f0cde59100edb4de"],["/tags/每日早报/page/2/index.html","f7a9e9f465e15c522f52245afabbd374"],["/tags/每日早报/page/3/index.html","3b106a90fdb533760ce510d139c6e29f"],["/tags/第一篇/index.html","ebaafb746db055872a7723a50872f9bf"],["/tags/网络/index.html","e60543b5faac55a2bff972de020b3c37"],["/tags/网络/page/2/index.html","aedc20390fe5154025ec05e6add197cb"],["/template/index.html","866f2637bd0139219603fa207d1292e2"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

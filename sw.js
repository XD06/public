/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2621612e0752db13d67ed3eb133206f6"],["/Gallery/index.html","80f3565e12361c28c23c85763e4f89f7"],["/about/index.html","ed23e401f2677958a2b6623007b6f7aa"],["/archives/2022/08/index.html","24abe89d7e62a90cf69eb2bafff70aa3"],["/archives/2022/09/index.html","48942769edb1d8a3ee6dc2e71b046ee1"],["/archives/2022/10/index.html","30d60e52411ea9413699b4e68e46f5ee"],["/archives/2022/index.html","fd4c50e334093752ff278f06d52f47c1"],["/archives/2022/page/2/index.html","0e257fc1c946699caf469a43ba2ed2ff"],["/archives/2025/02/index.html","d322ce24fd452f9911427b12d06f7af5"],["/archives/2025/02/page/2/index.html","fd031362efc3050fd75f801d307ad2ce"],["/archives/2025/03/index.html","d1a5701269d540344fac926f372cc7e4"],["/archives/2025/03/page/2/index.html","c063516bb0ee4e5a0f5dc72a048d16e0"],["/archives/2025/04/index.html","2ddc5030427acfa3680a1ca50fd200fc"],["/archives/2025/index.html","b4c74ad22973d176ed8843034094dbff"],["/archives/2025/page/2/index.html","c2a2c7a7fc924096519b2a5328aa2799"],["/archives/2025/page/3/index.html","7b068169015998bed96dd2c249480521"],["/archives/index.html","020f665ab7b29b39096acb4b68e482a5"],["/archives/page/2/index.html","f0bc6e8492f4d0157ab9ae1d07e24a34"],["/archives/page/3/index.html","86fea714de310fe7436ffcc88ac5076e"],["/archives/page/4/index.html","8f10eebb3a4ca9b9303d40663dc54786"],["/archives/page/5/index.html","b8cd5b480bb778038b4dd177dfb41b6b"],["/baidu_verify_codeva-J5b2WWChcR.html","c497bb0a31ab1ba255017067866ead24"],["/baidu_verify_codeva-cwyza0ZFJb.html","2dbc9a7dece3113c807789215350afa8"],["/categories/index.html","097e70afe78973956bfa447261e807a2"],["/categories/壁纸/index.html","9724321a6fb220a08e7f8caffbbd751f"],["/categories/机网/index.html","9e0c0b610410e116c3dfaf7bfc9bc7a9"],["/categories/机网/page/2/index.html","00ffcd18fc39fb263aedbeda3239351d"],["/categories/每日早报/index.html","69caee88647c1b5ccd989f58383f3e18"],["/categories/每日早报/page/2/index.html","1e977dab71097f05f4396bc9fda82af1"],["/categories/每日早报/page/3/index.html","be08c55626e798a3b4d358010c0e765b"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","9ec00f49de7af849b2db836874f8a7e1"],["/css/mbg.css","05867c383188f90131cd1027fd70e03f"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","b48d013b50ed52ede299018d94a9385f"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","cf57af41c794062d4f61c3103ebc118e"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","307bb142003e5c82c84a09f306fa1ae1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","0a5fec91c77f09b2c918fe106714dd8b"],["/link/index.html","49051ad2185f8b88872a249664cc4fc7"],["/music/index.html","08fe3743830fb6fef8e015b120f870f4"],["/page/2/index.html","6ba27ea40ef46e28036a4f0ab95600a5"],["/page/3/index.html","e26b91d7c1b64992e0cb128b2e77b55f"],["/page/4/index.html","fa2f8505ecd352353c3bb79fc9005461"],["/page/5/index.html","2ff2ee39098da64eb3d81c223d156f73"],["/posts/1b0c78b3.html","0559da2202f180dee98d4867cf5d62ac"],["/posts/1b5b87.html","0c40789b285219a8c49c62ec1a73430d"],["/posts/2134d9d1.html","94f1279143d91c622dc5c609e6daf177"],["/posts/28c755c.html","e607c3f146609633fba76fb8b4627feb"],["/posts/330d6f69.html","7f9fbb9216c57788339553ab341e276a"],["/posts/3b744803.html","36e946461467abb92c3083218eb38621"],["/posts/3da05156.html","081b490e5df309b41eb58aef12c5d3ce"],["/posts/3e91e0fa.html","9b626d172486ee9c13f6233f475dc867"],["/posts/41c2c0d2.html","b2e3a99d150f7ba9872779aa46569153"],["/posts/46fc5adc.html","b780d78126eb1f17680fb89d571f0d2c"],["/posts/493f6b85.html","468a4f7f41242dae96ca0d4025c737dc"],["/posts/497e40e0.html","2e347f07ac4843b7c6282ed007b8e7cd"],["/posts/4a17b156.html","e2e611519bf30ce18d8d3dedb2b06b4c"],["/posts/4e2d7b19.html","30aaf466689d9219f258f2dab3e83d1b"],["/posts/4f81eb97.html","0844022afa5fa0ca265c54c425ebd6cb"],["/posts/53721e0e.html","ffeeb917a0a28510969903e4944b7923"],["/posts/5dadd067.html","b88b1742e5b127a5d0cb9b1da42c929e"],["/posts/5ff34642.html","b836aa50ae9b9f35a5a2db38deeb7496"],["/posts/653abebf.html","3f6689bab099a9ad514855b9beea8d0f"],["/posts/681265c2.html","1fc1a7ee17c2217b4cd2d7ea484075f8"],["/posts/6f44662f.html","d747eead7c5376b837693dc7e8f68085"],["/posts/7207f70e.html","8b32419879556b3df92306d77c425912"],["/posts/7289f891.html","b4dc72547800f31c3037e027ba5a77df"],["/posts/732e626.html","6c4a501e36498920a777396af435c7d7"],["/posts/7e13cc3b.html","f02b53e7f0aa4ad922a665547139e2d7"],["/posts/80a7ecce.html","d7fe996c7b53c721147a61810105ce69"],["/posts/821a4686.html","f55239069ccc199dc6cc4f2493a7daf4"],["/posts/8a741756.html","b2c5f1ba0194323dec61b184f7b3b845"],["/posts/918d46c1.html","502df5ffc6bc37e927dd148c872834b5"],["/posts/93c8c0c7.html","a723a8bc9e16ab78d2388c5a7df02452"],["/posts/9f057e9a.html","985b6aac968b0437384c512884b02780"],["/posts/a7d437fe.html","eae8062b71a4399472c4d5eaef6c864c"],["/posts/ace4e4cd.html","8b5e62b777fd1f80dc2a792d29e33d23"],["/posts/af30ddef.html","c590c3a13bac18b04e732c5a27ec2b11"],["/posts/b1eb9c6d.html","803223d9bf06f78e9d3400644551a88f"],["/posts/b564e922.html","f9948fe3c3065a204c1427a1641d9f4c"],["/posts/bc9a4dc7.html","87cd2472b16d56e9bed36bed7fa85b52"],["/posts/be543a11.html","e8f7517d5d3346ef75a9f5bacede8db6"],["/posts/c9b871f1.html","aa6de54a623b823b5d5687a99bb749bb"],["/posts/d6ef11e5.html","fc25c8255b3ddeecb2911cb45b32a71f"],["/posts/dcd6fdd1.html","e3d6b2c03b0f44b2fa0769423d7efd53"],["/posts/de24a124.html","b82f1984e69ea5fa6d60e21dae7828a2"],["/posts/e32cbcd3.html","a633464b22283b40e2de5073f8bd6c1f"],["/posts/eebbc69f.html","4a2fd775f324651b88d16e476d08b748"],["/posts/f08119d7.html","5b63bbca52fa230d321156f4b5adfbac"],["/posts/f7f51423.html","69be597c570a82a23234c04a44493ba9"],["/posts/fd1a8f9f.html","7179c25f17cdd85f166339dc51e376d9"],["/service-worker.js","10d86cf8a43113e7a66b8b24dcd31adb"],["/shuoshuo/index.html","ed65b2b7b714618490428290c8bec700"],["/sw-register.js","c13d281f4186311b5f668177ea4c5e87"],["/tags/index.html","7bf2a70e22b91aa90dfbf3513eec7df4"],["/tags/【每日早报】-2025-02-25 - 星期二.html","0a972530fa51eee692e543185459fcc5"],["/tags/养眼/index.html","bc4af4f08bf6d6ba93119ce389a30a12"],["/tags/每日早报/index.html","aa6cf7d2b934815f1a3a7d5143e3299a"],["/tags/每日早报/page/2/index.html","04afc433d812185f95a441edd6ab953c"],["/tags/每日早报/page/3/index.html","6a8b297299f0ce1d2d61f136588ed8f8"],["/tags/第一篇/index.html","6de548b2d9fb260c9bc164c088c48ea5"],["/tags/网络/index.html","489864fd093114efcf042e79f486cbee"],["/tags/网络/page/2/index.html","3f84c503386bb3450eaf2958059cc5cb"],["/template/index.html","5759b85dfa947e6413d9c15da22180fb"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ceb2ed91aee41bb378152bf1381f094e"],["/Gallery/index.html","274c8f2763f73ec01416a11d1694c1ce"],["/about/index.html","5ef9f061b3f304b85355bea9c0392b0f"],["/archives/2022/08/index.html","68ebf3fe49f30873c927c6aa368897ce"],["/archives/2022/09/index.html","a3597bbb1aae8a6822694fca9fb8d8cc"],["/archives/2022/10/index.html","201b6b56f34197b8b309a963dd65a833"],["/archives/2022/index.html","70059d8eaa7fbebe56b7a75213ebc0f1"],["/archives/2022/page/2/index.html","c4d138e6af4648d3bd844a65b61b0951"],["/archives/2025/02/index.html","df3a1fda51d4d3355c2c8493b3eabd6e"],["/archives/2025/02/page/2/index.html","172144dbfe83ba538db40c5a5bff239c"],["/archives/2025/03/index.html","44515510e5e0c8036ecdf853971f4541"],["/archives/2025/03/page/2/index.html","7805e7c76aae7bb5bb0084b01f624089"],["/archives/2025/04/index.html","41c21a8db307df33ca39995684c1d11e"],["/archives/2025/index.html","5d52baa88cb90579cb80103778558455"],["/archives/2025/page/2/index.html","88adcc6965e5c5e14052fa2f7ddf1eb9"],["/archives/2025/page/3/index.html","17604fe6ea08e05a01bea8767f205f78"],["/archives/2025/page/4/index.html","b9f53bc68e6a5fc68cb7da8c9663fff5"],["/archives/index.html","d91db8d1f856edaad7f114cada006a4b"],["/archives/page/2/index.html","597810fe7b41f11d3476e71990351bbd"],["/archives/page/3/index.html","2e5daa732d6054304cef8817ac381209"],["/archives/page/4/index.html","e13642faa1e5088ac7e0dfeab63ef10d"],["/archives/page/5/index.html","a3ee21fb839534fa189d0abecb5933dc"],["/archives/page/6/index.html","11fed0b49d3860f7ccbf659621c8378d"],["/baidu_verify_codeva-J5b2WWChcR.html","d42656b5041f566760ccbd3973417a9b"],["/baidu_verify_codeva-cwyza0ZFJb.html","2bb5e4a37e83d7bcb8cebbdbc6cee630"],["/categories/index.html","9bf3b15d6fd055a1da9a8e322bef8362"],["/categories/壁纸/index.html","b6203906180fead9f4d8523b001aec2a"],["/categories/机网/index.html","8b922120c2215bb997b3109be1fd8625"],["/categories/机网/page/2/index.html","d5ea1dbf5d107b4e0a041f932186c68b"],["/categories/每日早报/index.html","1482be7aa813365d2e9fb3973dff19e0"],["/categories/每日早报/page/2/index.html","d4068499ab621473ed14d95f693ef03c"],["/categories/每日早报/page/3/index.html","25b1960c7f255230de52f991993f31ba"],["/categories/每日早报/page/4/index.html","baf77c84adcd4774ee2f29b558f79fc3"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","adf69e485847022fc92ead8764a7f158"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","14dbb3e3af978cdc0188073ca6aad097"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","7080b035293df1a2f0601f593337b33f"],["/js/ai_plugin.js","2e8bafe7451ea96da22df59e37abe16a"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","181ba5df513284f66abb1a6e479b33d2"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","b637c5ab554af1b5f32f9f8c98e47560"],["/js/test.js","b2f31cb46d8415f8c3553165f4e29dc6"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","a40ce83ea84ea839ebd7a573f59621ed"],["/link/index.html","413f6fa2054b3f97ead3bd8b9baa80c9"],["/music/index.html","7e6cedce2f1fc5724fd916b63fa8921d"],["/page/2/index.html","7998699bd1996907840756333bf96ec2"],["/page/3/index.html","9829af75bf27ec4492569351770baef8"],["/page/4/index.html","aeeaf80c9272864bcb4f1c1e4f14ac43"],["/page/5/index.html","dbf2af86def42c90f1b0dbfaf1c7b900"],["/page/6/index.html","be765c6a2543c3f2ff02fcf5bfbaf419"],["/posts/12501d69.html","6efdad3336e6a012683a85a774b6c0c8"],["/posts/1484043c.html","31ad7649f7ce174e6358574be31c34d8"],["/posts/1b0c78b3.html","eeb502b44a97bbe4270c0dd0d8aaa391"],["/posts/1b5b87.html","b0f867f0212818f83a13e54f169948f8"],["/posts/2134d9d1.html","8b279b50761691ca894e03c2c504da43"],["/posts/28c755c.html","4b63b5bb20cfa34122bd5c278ffb563e"],["/posts/2f77f294.html","6a4e06311a980f39ad0879e118857d10"],["/posts/330d6f69.html","5872b7b0a417907cd5ddd8b6caf0eb13"],["/posts/3b744803.html","020fa3e4b9867a12605a9997a00b10ef"],["/posts/3da05156.html","8ffdc2bf8892294dcb90a6d2024e4249"],["/posts/3e91e0fa.html","d6fc3a1cf48832d7f0109b3c3cddbe44"],["/posts/41c2c0d2.html","315d5df7e22bdc4a53c6786d1b4c3910"],["/posts/46fc5adc.html","e1c9c59c1cecc036c389be9dee99ab60"],["/posts/493f6b85.html","320daa5f8bf5519e6d7e2bcac4e9d523"],["/posts/497e40e0.html","cad44035cafcd4df8130d46d450ee350"],["/posts/4a17b156.html","830e4d3bd3fb843d9112a2ae22b923a8"],["/posts/4e2d7b19.html","9d4a19b36847da2b2b67b375614d707f"],["/posts/4f81eb97.html","aec1aa4e889fc5b832fe16942fc7541d"],["/posts/53721e0e.html","666bf89a78d494cadbf18fe9027c1bfd"],["/posts/5dadd067.html","5c4bc555f2a88a15c07c9a5caba094d8"],["/posts/5ff34642.html","3e66901598a5dd519a9423b876229bfc"],["/posts/653abebf.html","2fd1d6e18b972e9df0bfb469a3d5c497"],["/posts/681265c2.html","c1bad53d379814c20cacbf7cea76a3e2"],["/posts/6f44662f.html","06a383def98974148f83d3bc3b9cb42c"],["/posts/7207f70e.html","b41727463b4904d5b3465c5f6d42c587"],["/posts/7289f891.html","8502fdb0c2bb19a122c0b91c1f045b35"],["/posts/732e626.html","993914ca224846908290608bd9010b0c"],["/posts/7c825231.html","5e7f8620f5cecbe8008701147acab4e3"],["/posts/7cd0d214.html","ca99699bb00de898288a8a70b3e21afc"],["/posts/7d9071b2.html","56ec68431bd872b67e487ca6bdfe03ea"],["/posts/7e13cc3b.html","a4c45bb71db6c9bb4fb6dd9357e8526d"],["/posts/80a7ecce.html","b05bc2ccd3975d680bd35b69dbac5b4e"],["/posts/821a4686.html","208e867285759a64aff2566c75f272b8"],["/posts/8a741756.html","207afb7a0069c140aa66f077c50104c9"],["/posts/918d46c1.html","4235e88952280ed3447c1dc7fb0b928e"],["/posts/93c8c0c7.html","77bf0c71a5104fb7d0405fd36b67fc6c"],["/posts/9f057e9a.html","a8f342cb7b9ee69163ef1479f9683418"],["/posts/a7d437fe.html","2b4be91b7bc6b4f3fa29bd794aae12a8"],["/posts/ace4e4cd.html","d40df16af556096d1c0718201a46b9a1"],["/posts/af30ddef.html","72c37e00fac04e922aa0e12830b616bb"],["/posts/b1eb9c6d.html","9a4c731ed939e59848b3ce27c739d7a9"],["/posts/b564e922.html","5d06b52446b513c227ade35aec3eef52"],["/posts/bc9a4dc7.html","dc976c7a6e552b0d14e8612b75048e8a"],["/posts/be543a11.html","12b5fdc33b4f75db21b49f7c94a17c5a"],["/posts/c9b871f1.html","04d29206b4b7e3d9a2a52a621346602a"],["/posts/d6ef11e5.html","039453c420311196b72b6e6e949523ff"],["/posts/dcd6fdd1.html","a3932be8d3a51a12188890cd65240e34"],["/posts/de24a124.html","cd4e653d85b5b7b694eb7ac198671819"],["/posts/e25a3e3a.html","69126051d3948372aa82c9f129755ab1"],["/posts/e32cbcd3.html","f3fea6bd5a3ab4d5aa34834e65335825"],["/posts/eebbc69f.html","f9a518f6a2b42d9e5948060ce3aa4f7f"],["/posts/f08119d7.html","75efcf30f1cb4c80f053637dd9bf9e1e"],["/posts/f34dbb9f.html","c6223c718dbbff920e4b388e36ba13e3"],["/posts/f7f51423.html","3209587ea4d57f38f0f9673700405aee"],["/posts/fbda33d5.html","cfa52474b999411d60caf6cd3176a907"],["/posts/fd1a8f9f.html","14cce7563fd95f3acea59d24e2d1e0af"],["/service-worker.js","dad1b903b801118a9bf52d4ad84ee678"],["/shuoshuo/index.html","81f98babac8c1522ef1207f960b7a3d4"],["/sw-register.js","658affb24be3422cc7cb3a338a3d8ea1"],["/tags/index.html","f0fb5667df4133d628d90e961e7cc042"],["/tags/【每日早报】-2025-02-25 - 星期二.html","b2febd58a367eef9f8a195165867a3df"],["/tags/养眼/index.html","885ccbfd77ba7a46a30728f901c2138a"],["/tags/每日早报/index.html","b53ccbcdf268bf8d7ba10e1c1b71bc09"],["/tags/每日早报/page/2/index.html","1ed97206543a5edf7e7a526767c7ec36"],["/tags/每日早报/page/3/index.html","fca2d8beacf6f347537628c59d17218c"],["/tags/每日早报/page/4/index.html","e8581f975a304c93e7675882ad102443"],["/tags/第一篇/index.html","323a82dac336f6d326e4858a0e4d4963"],["/tags/网络/index.html","db775790af2daf7609dcd88a67613931"],["/tags/网络/page/2/index.html","738ab33f1242d7a4d408fd9905f56813"],["/template/index.html","4f978de536872d1df25b4ccaa914dd4f"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

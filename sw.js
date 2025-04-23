/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ceb2ed91aee41bb378152bf1381f094e"],["/Gallery/index.html","2aa6b5d8d4a5492617c1b92dcb6c27f3"],["/about/index.html","689691a600b38b1ebfe419e6464d385e"],["/archives/2022/08/index.html","a047a8d6f912a2e3eeaa78022a33987c"],["/archives/2022/09/index.html","490c4b9610eaef8e9f1d486578a432d5"],["/archives/2022/10/index.html","4a2135e37cefc729960b54858ebac137"],["/archives/2022/index.html","7349964601219ecbbda61e6866e09c9c"],["/archives/2022/page/2/index.html","8dbae3c7b82e0a4ab8ee9fe1d2ea400d"],["/archives/2025/02/index.html","0b665ace52a41f952cb5c93d7ad19483"],["/archives/2025/02/page/2/index.html","7454ac5a5830a0a6d6e96417fa26ba18"],["/archives/2025/03/index.html","77abd40823689f3007a25dc8ab79f2ad"],["/archives/2025/03/page/2/index.html","79d914f43dab45024ecafc2ff1dd6817"],["/archives/2025/04/index.html","d594628a9e6a17a9ac192aa95129de79"],["/archives/2025/index.html","ede8d91638b475101a9547dd5964e63d"],["/archives/2025/page/2/index.html","0a66e94b46b869afa4d317bb10919c9d"],["/archives/2025/page/3/index.html","d934dd94b6a314112f301059063d06ee"],["/archives/2025/page/4/index.html","a5f4ccdda29c839bf673377b72748798"],["/archives/index.html","d6d4dcf97fb7c1407ec638daf0cdbd7d"],["/archives/page/2/index.html","bf10769f0703ed31f603ae6c7aaafbb2"],["/archives/page/3/index.html","c05962a110fc2f5def42eb8191de4255"],["/archives/page/4/index.html","5f9c8426ae76948e731d30e2d8de6458"],["/archives/page/5/index.html","3b90c69e22a726ac53c7523593d0ffe9"],["/archives/page/6/index.html","61f8459336783161f3b8adc7fb22d347"],["/baidu_verify_codeva-J5b2WWChcR.html","4521abb7af14d0a2285533a1ea424982"],["/baidu_verify_codeva-cwyza0ZFJb.html","75f69ef6fe30eb3d3c9777ea72508141"],["/categories/index.html","689b40282b1e7b0b0e45e6a5a0c5a04b"],["/categories/壁纸/index.html","5d694a1cfeb61d21a4e1d7873d593541"],["/categories/机网/index.html","ad9db312ab78a437089615a1921ce701"],["/categories/机网/page/2/index.html","eea2d738d4948ff00e96330eaaa9b0ee"],["/categories/每日早报/index.html","5ae6a51c42c5ca4e6abd6d9818dbbf84"],["/categories/每日早报/page/2/index.html","6e64e9a888edb7a6c74670a6eb9bd21c"],["/categories/每日早报/page/3/index.html","bd2afb1930e0253bdd35ead9fa8e3ae2"],["/categories/每日早报/page/4/index.html","82577f635bf22d5e5582e084a82693ff"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","b1edae2c5bc8e70da2b3e77331664e38"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","7896c291e91ddc45ee636a6d0ece4636"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","4e0baf1b0bb5e1fab3d26aeb5973460c"],["/js/ai_plugin.js","2e8bafe7451ea96da22df59e37abe16a"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","bce86870ddd0ec3cafbe9cf939e3a531"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","210ce9ec35a3a99fa91c1b2d8a0227b5"],["/js/test.js","b2f31cb46d8415f8c3553165f4e29dc6"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","3d35daa7f8556b9d1630f52e1fad72de"],["/link/index.html","316a8f66999ab168c880103d91569923"],["/music/index.html","57d9e703b1b01e39e7340672c287afa8"],["/page/2/index.html","366c903387df5ec353444d334d24d2ef"],["/page/3/index.html","3bd4d8783f1df79114573fb493ac52c8"],["/page/4/index.html","dcc4afc9dd4b92c8bc65b4acaa9ec48c"],["/page/5/index.html","e0dda147515a592ad3aa24c40b5ce6fd"],["/page/6/index.html","6ff5088e38c1f1a8faf9b23cb21faa0f"],["/posts/12501d69.html","6efdad3336e6a012683a85a774b6c0c8"],["/posts/1484043c.html","31ad7649f7ce174e6358574be31c34d8"],["/posts/1b0c78b3.html","eeb502b44a97bbe4270c0dd0d8aaa391"],["/posts/1b5b87.html","e15c04292b1e45ea2f03f0aee48220ff"],["/posts/2134d9d1.html","8b279b50761691ca894e03c2c504da43"],["/posts/28c755c.html","4b63b5bb20cfa34122bd5c278ffb563e"],["/posts/2f77f294.html","6a4e06311a980f39ad0879e118857d10"],["/posts/330d6f69.html","f32e3ae3486cd83049e1cee398cf0cba"],["/posts/3b744803.html","020fa3e4b9867a12605a9997a00b10ef"],["/posts/3da05156.html","8ffdc2bf8892294dcb90a6d2024e4249"],["/posts/3e91e0fa.html","1dc99f7f57cd2f5b8716bc2711f20876"],["/posts/41c2c0d2.html","d2542d617cd33e7d5d7ce0c56d5e12ca"],["/posts/46fc5adc.html","85e4651d0cb285c8ce7ca315403eed2e"],["/posts/493f6b85.html","d8a832d997fab7b55ce832eff920f77e"],["/posts/497e40e0.html","ba4c108ee97de62e8ce18cc5b97887eb"],["/posts/4a17b156.html","5c644c6a06ca2610eaae124ebee66e51"],["/posts/4e2d7b19.html","9d4a19b36847da2b2b67b375614d707f"],["/posts/4f81eb97.html","aec1aa4e889fc5b832fe16942fc7541d"],["/posts/53721e0e.html","274893c1d507231572e7dc7634a3d910"],["/posts/5dadd067.html","5c4bc555f2a88a15c07c9a5caba094d8"],["/posts/5ff34642.html","f50b4c24b3ab1fff2e4c308674595e5a"],["/posts/653abebf.html","4fdef2b6bd2111008fef7bf52ec6ea84"],["/posts/681265c2.html","8bf3cf5a6e841aa3fe6183419b4d7e71"],["/posts/6f44662f.html","06a383def98974148f83d3bc3b9cb42c"],["/posts/7207f70e.html","ed2c0422456e35fc52484069878bf1aa"],["/posts/7289f891.html","c2a2c08e9bd3f83808d535a5f56bc8f2"],["/posts/732e626.html","48c87e3177ba2bf570488692d02f836c"],["/posts/7c825231.html","5e7f8620f5cecbe8008701147acab4e3"],["/posts/7cd0d214.html","ca99699bb00de898288a8a70b3e21afc"],["/posts/7d9071b2.html","56ec68431bd872b67e487ca6bdfe03ea"],["/posts/7e13cc3b.html","4bbd787c3d2296ab0d7453863a784218"],["/posts/80a7ecce.html","825480be84b7b6b9a45ff88a7fe464e3"],["/posts/821a4686.html","7f0816fd0e6891d77535cdcfdab6eed2"],["/posts/8a741756.html","a6c0b2f3f8bb88d4d8698b3b9be424ca"],["/posts/918d46c1.html","3c021d6ffef47bf6b7e0530f1b4257b4"],["/posts/93c8c0c7.html","77bf0c71a5104fb7d0405fd36b67fc6c"],["/posts/9f057e9a.html","16ccd5ba3694a8c2c6e5c1ebd5d2aac4"],["/posts/a7d437fe.html","2b4be91b7bc6b4f3fa29bd794aae12a8"],["/posts/ace4e4cd.html","2d9310bbc6e5a5850b8e6dd0af97301c"],["/posts/af30ddef.html","72c37e00fac04e922aa0e12830b616bb"],["/posts/b1eb9c6d.html","af2e217333de4a8cc35125a6d49e5a1a"],["/posts/b564e922.html","5d06b52446b513c227ade35aec3eef52"],["/posts/bc9a4dc7.html","d9297ca76810dffd6cf7752722631fcc"],["/posts/be543a11.html","c0294dd2ef5cd6d6b4d97dfee0a330f1"],["/posts/c9b871f1.html","403bd365410523452be2742a151eb3c2"],["/posts/d6ef11e5.html","4498d8dd8cedda81aed75ce3fb782507"],["/posts/dcd6fdd1.html","89cae71b3867521c9a11ebbefefd4844"],["/posts/de24a124.html","de6db47df3c15288640f50741c7539eb"],["/posts/e25a3e3a.html","726d8d0db656d7d21e40b3251af95bdb"],["/posts/e32cbcd3.html","98971945e913c69a9c1f78b6c6ce9fb9"],["/posts/eebbc69f.html","f9a518f6a2b42d9e5948060ce3aa4f7f"],["/posts/f08119d7.html","8402a8fc935b0cacd2594054c21240ee"],["/posts/f34dbb9f.html","c6223c718dbbff920e4b388e36ba13e3"],["/posts/f7f51423.html","725a891bc98c1ff1fe0f2cb2cb99f41b"],["/posts/fbda33d5.html","cfa52474b999411d60caf6cd3176a907"],["/posts/fd1a8f9f.html","14cce7563fd95f3acea59d24e2d1e0af"],["/service-worker.js","1069ba333242781b43d725b4b1b53771"],["/shuoshuo/index.html","acdb8b66af7250a5afd3083d069d6d03"],["/sw-register.js","c42d220805c5d530b2cbf079685d5f42"],["/tags/index.html","e7212837021f8ea363921fb5ab458c5e"],["/tags/【每日早报】-2025-02-25 - 星期二.html","2b7e72ef1da753a77210d9c8e29d8113"],["/tags/养眼/index.html","430d3aadd0def9d194168e026c19bf74"],["/tags/每日早报/index.html","85bad80665e2aaa1586796bdcfc23717"],["/tags/每日早报/page/2/index.html","376ce3c5fc3836bef4e9a4abcd092ef5"],["/tags/每日早报/page/3/index.html","7abacab4785a6c9bc3e74e1c37f01215"],["/tags/每日早报/page/4/index.html","730f1cd608dd9c7e61bcdde245cf2fb2"],["/tags/第一篇/index.html","02886e33ebaabfb48e73810e64f1d4c1"],["/tags/网络/index.html","9cb9a8127532db679ff3c70f87dc33d4"],["/tags/网络/page/2/index.html","f67ca487022e476848307f3eb68253a0"],["/template/index.html","88f808d256b0e3de00f746a2c3968095"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

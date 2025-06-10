/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fe8ae429d526d09a3ceb3705a94f134f"],["/Gallery/index.html","3f8f96c9141069040eb1522af53e2248"],["/about/index.html","130d09803d295ed1b4b02c253f2648ec"],["/archives/2022/08/index.html","39c3ef17a78ebea980abd0ccda297d41"],["/archives/2022/09/index.html","fb4747bebd799e82b2d817259ec3d2e7"],["/archives/2022/10/index.html","c6240ba8bf004de1e27e1497087ebbb0"],["/archives/2022/index.html","e394200c030340bcb382db3f013b4a7d"],["/archives/2022/page/2/index.html","a2034de7c1b7fd4248eda303a25c8efe"],["/archives/2025/02/index.html","9ae4553c87777214b84d39315f7d4366"],["/archives/2025/02/page/2/index.html","61fed0e0d6fe537c298a7a1faef4d1d0"],["/archives/2025/03/index.html","80be2896ef9d270be49ef847bc13ea26"],["/archives/2025/03/page/2/index.html","fc89636765fe55d2e4bc185a9479bdd7"],["/archives/2025/04/index.html","b2a270344c507f58fcc9aaa90677617f"],["/archives/2025/04/page/2/index.html","9c04d43a70a73105b96c783bb1e73fa6"],["/archives/2025/05/index.html","8f05abe503552aa290337406af768b31"],["/archives/2025/06/index.html","75a5aaedac89f84e23958e215f600760"],["/archives/2025/07/index.html","c6fa525647c16375fc2629c276a0779a"],["/archives/2025/index.html","9b52447e58dbc0999380de6e10643ece"],["/archives/2025/page/2/index.html","73cad38f53f56046efef594fb094b62d"],["/archives/2025/page/3/index.html","64767cc7c7f4ede4b8dcdf143051e40b"],["/archives/2025/page/4/index.html","82a8944cf2600b0929c562f6da50af58"],["/archives/2025/page/5/index.html","c81f1b4af7c75e0606bd119c49c182c7"],["/archives/index.html","a0faed1db7a6600b436c266477a3d21f"],["/archives/page/2/index.html","2473bf84e07078019d96b56b6442b11f"],["/archives/page/3/index.html","78e78bbba94ad684b4892a6dc27b249b"],["/archives/page/4/index.html","37d6ed4e2b0765216e7b3690dc117685"],["/archives/page/5/index.html","756b64b77d7820b6c753eedba0b1f7bc"],["/archives/page/6/index.html","e69610e23bdbf5fad910dd430b1070e5"],["/archives/page/7/index.html","c46d388a10d0e43cb89747e4d51c654f"],["/baidu_verify_codeva-J5b2WWChcR.html","50bced0a2ec87d7c4ff1f617df415ed6"],["/baidu_verify_codeva-cwyza0ZFJb.html","84841b3cdc2479939fc248ad585cc1ba"],["/categories/index.html","802d765e1f95496cce6a48a43d713d61"],["/categories/云原生技术/index.html","3a0be233e886e3268623e3bbadcdd14f"],["/categories/壁纸/index.html","41ae60c33094b4a4df02255566e108e4"],["/categories/机网/index.html","c6b88a6b2c211ee9cbe2adbaf77c69ae"],["/categories/机网/page/2/index.html","aa705747d7c1ca9237715d0c2650792a"],["/categories/每日早报/index.html","cfe0d30ab419c03a031bb16fe25b0610"],["/categories/每日早报/page/2/index.html","6db5de7139024227471f6421e4db9c85"],["/categories/每日早报/page/3/index.html","acf32dfbb5edab70bed6ce521a6bbdae"],["/categories/每日早报/page/4/index.html","7ddd21c9f33edb1229ae3c010a065fd9"],["/categories/每日早报/page/5/index.html","f05205f633b3209b41e9b388a3495e6b"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","b72d3f038bf6b2d7fd6184ed2c673fcb"],["/css/mbg.css","c5fc4b0502c3fb4cd1a110dce934965b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","fcdb5aa61d1692914002d69a3309a076"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","50e997e46313bd0f8c737fe52c123d1a"],["/js/AI_a.js","60191a34939dd3cb43c1fde6d17a3ab8"],["/js/c_token.html","d0027b9475592f6b92e2320623e01dd9"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","ce8fd52edc16df22081ab95e537e62c5"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","275e8d4b617e274e3ede85706605c6b6"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/keywords/index.html","2ef13cc49fe38dc247e9f31caa9cc299"],["/link/index.html","e3f56d56799aa379f614406b4a2d139a"],["/music/index.html","f69c1bb4ac7750bb133169eaf618eb55"],["/page/2/index.html","94f595d35e5bc19e6173bbde4ede999b"],["/page/3/index.html","5ab895a062e002c45fde2187e8eb8a53"],["/page/4/index.html","24eeb27ce7f366300c91a5e9c7aacba1"],["/page/5/index.html","593dab2646c4f57b8dd88486449005df"],["/page/6/index.html","ab4e6d516b71590904b1cb69fa154f91"],["/page/7/index.html","187b39a3c2bd9e351ab532f806b657d1"],["/posts/12501d69.html","340435e4026f9d36c592b86059b04ee7"],["/posts/138fefbc.html","09315959a3ccc64c8512d74721ecd6a6"],["/posts/1484043c.html","1a4cf0e04aac16593f20d96826e44f36"],["/posts/1a3d44c.html","699e194b57f3f3c991a57ee4fe3c2d04"],["/posts/1b0c78b3.html","82b059935ab9e7ac95ccd92057b0448a"],["/posts/1b5b87.html","f629006744729a986b952b4bdaf2f1c8"],["/posts/2134d9d1.html","2e02d8c60966143e457bf402661a5586"],["/posts/21fabcd8.html","a04c4ba706855dd56c57676e2e3febe5"],["/posts/28c755c.html","9372f61cb0017b9e49b909b69e52c261"],["/posts/2f77f294.html","16d335bb53153d1d8539ad976046d0f2"],["/posts/30621cc0.html","70b23a74e3419f2dc6edc100a0319c77"],["/posts/330d6f69.html","f5c1e2dfb44475330e2e91607a2b66d6"],["/posts/3b744803.html","0a37f1dcfe13047d2e16b30f3d740d7a"],["/posts/3da05156.html","386d8469b7144bc26f780da1ab9fb0b5"],["/posts/3e91e0fa.html","b22c22689ac81b8cda5180cd21829618"],["/posts/41c2c0d2.html","6b76e6accc0e99062546eb43195af6e8"],["/posts/46fc5adc.html","8e1fb1ed18b429d1eb884bed8683c442"],["/posts/493f6b85.html","310637d9e0bd7efdbb33a468c435250d"],["/posts/497e40e0.html","a1eceba98a945a722f69db8cfd642574"],["/posts/4a17b156.html","651a7cbcc85b0033a0cae126274ea7f0"],["/posts/4e2d7b19.html","bf87f9445cd74e2e908d5d305bff05f8"],["/posts/4f81eb97.html","1f1243ec41fde81703998de293a68791"],["/posts/53721e0e.html","0acb12e3f6cf7d43bdad4442e84865a1"],["/posts/5dadd067.html","23a52fb578ccf0ae7d9259024a35a80c"],["/posts/5ff34642.html","41448fd78e861c7e31b3df0b3d4f870d"],["/posts/653abebf.html","e00a230d2901dc57752a48f7c87c7d75"],["/posts/681265c2.html","2d703518dd8b12afc5d0118876a8c08b"],["/posts/68a36c37.html","d84276046500f8218a20ad3a82fc41a7"],["/posts/6f44662f.html","66bf1ca6821cf85a8142b6ac24ba8722"],["/posts/7207f70e.html","e5e9f2ffb5ff59da4b04e5211c3a961d"],["/posts/7289f891.html","aedd37f0fcc844421f50d753ae28437e"],["/posts/732e626.html","01e03a9f1a7bd003782e556f2767424d"],["/posts/7c4f393d.html","998cc2cb1fab061515d1653be3da69c2"],["/posts/7c825231.html","faeeb81f0a76efc58a384b1c814c16bf"],["/posts/7cd0d214.html","75b5adb3cffc78d4a8f176aabefa3061"],["/posts/7d9071b2.html","e270b5650336d9200c991f13874b90ee"],["/posts/7e13cc3b.html","a1e9dbc48fd0dbf0d9563a96dee95568"],["/posts/80a7ecce.html","6708445ba6719a1d68c9515c3401b6e5"],["/posts/821a4686.html","327f05eae5e38be12e6c559f7a631056"],["/posts/8a741756.html","7e276bd70dffef658cd12d385a435846"],["/posts/918d46c1.html","6bf1ff0ccec703987b9a122060180ace"],["/posts/93c8c0c7.html","9170f545761c9aa769f24f5e8a63d568"],["/posts/9a59ce11.html","84a6a98f2622bcc8fddc05096606fcf9"],["/posts/9f057e9a.html","19b2cf3a3758642b86bb91a6502ba9f7"],["/posts/a7d437fe.html","3928698088204bf4ccd8eaaf76ca3e00"],["/posts/a85c4b71.html","5532d427cef9d0212b521682af40b822"],["/posts/ace4e4cd.html","5001b4cf222702de366193124c78a167"],["/posts/af30ddef.html","743da57624d1ac79060d48046b4fbbd1"],["/posts/b1eb9c6d.html","698575583ba3c8120208a1624dde1271"],["/posts/b564e922.html","f566a377caa9ce23134277dac6f35a53"],["/posts/bc9a4dc7.html","13a009614f0423beadafc5581308e810"],["/posts/be543a11.html","7f9c86e4c8b465e972b2bc7339617afd"],["/posts/c7170176.html","830bf4aabe976e628272e10f70059ee8"],["/posts/c9b871f1.html","3999156642e5d786dd4e2abb315a6269"],["/posts/d6ef11e5.html","31fd8af00d5b85ed94f38e22f223eda7"],["/posts/dcd6fdd1.html","dca7f2183af2dbe44de9a6fbd4f77bde"],["/posts/de24a124.html","696eddaac9e2ffa497052f07f7499940"],["/posts/e25a3e3a.html","8d04232874cd1ee9ec62924dfb42fcc2"],["/posts/e32cbcd3.html","a93e5560600dfe4582ed9c2db1202da0"],["/posts/eebbc69f.html","2be098b0c6b8095d9132fab50e8c7590"],["/posts/f08119d7.html","d7225edacf89946d2abeb3677b2fbca4"],["/posts/f22f4e18.html","b997aa46f919c31a4332f8ac3e3aaca3"],["/posts/f34dbb9f.html","5d8bed83d31421c95e56048036d45902"],["/posts/f36fedbe.html","3aee6961fedd20a7cae7cb0f52b9a0ba"],["/posts/f7f51423.html","026b834ba8c3f9a0ac8117109de09bc7"],["/posts/fa75ad5e.html","c2a0a9a41f26cb0b64e85bf859a7aecd"],["/posts/fbda33d5.html","97267f3178451a53311bea8be020dc77"],["/posts/fd1a8f9f.html","ba5b4ea64cdcec773edcdc13f804cd0d"],["/service-worker.js","1d2e891565185b7fb412f2d2265df7a9"],["/shuoshuo/index.html","c7e5f5eb1bce2815d12aef3bf933ee2f"],["/sw-register.js","1f0da9ee2777e2d0c0ad7eb4c9c83244"],["/tags/CI-CD/index.html","fe9dfedb3639fee1a7a42ebb38bdbdb6"],["/tags/Docker/index.html","a187304fb93aa406d6807bc16af9632c"],["/tags/index.html","91b08b4970019b40890d9a2b7e93fc0f"],["/tags/【每日早报】-2025-02-25 - 星期二.html","c22904b5484cd3203c19d034d04af36a"],["/tags/养眼/index.html","3d144b7166a510743dd4fb4a7a1fa7a5"],["/tags/容器编排/index.html","13d165d77392294e6b6e6d88cdc635e2"],["/tags/每日早报/index.html","eb7f1313a294f1c0a5019f3e4991ad2e"],["/tags/每日早报/page/2/index.html","610da1bdaa92862a092b0f60448d17b5"],["/tags/每日早报/page/3/index.html","b747d349d62f4fd63d8f726f9aaa4e90"],["/tags/每日早报/page/4/index.html","447817b4140bfe7f73eae7c81c00a0fa"],["/tags/每日早报/page/5/index.html","804374ef8da45736873821e277a86165"],["/tags/第一篇/index.html","9636e109228d2c7ff57e51439c1914a7"],["/tags/网络/index.html","f44693966770bdd7ba62f92fc1b9ba9f"],["/tags/网络/page/2/index.html","0bed6c3a88f68f3e0a7c371079092b34"],["/template/index.html","6cd3c3945e2e5f430deb29861082ae4f"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","54d2a2930f17c35a7efa049f7f0ddb4c"],["/Gallery/index.html","abcf61c25c3af1b8d89fc90e43c6fb4c"],["/about/index.html","e117b19e02c6ff01fdfef11c6abff455"],["/archives/2022/08/index.html","a4cb4e97e0b45160f94893656ceb71e0"],["/archives/2022/09/index.html","f06fbd655b59c877d4dcc2c7b32ce543"],["/archives/2022/10/index.html","087a3adf2175993394ec2d7473532030"],["/archives/2022/index.html","b75f7434f510433e4e9e7d58337854b2"],["/archives/2022/page/2/index.html","86f9811fb0a7d1c15194c91cc2497020"],["/archives/2025/02/index.html","31eb1ae5e74c262d9d1ee7433ad1c689"],["/archives/2025/02/page/2/index.html","f3617a1be1678ec148efa1c88a862bc9"],["/archives/2025/03/index.html","d91dc3037eba62098430eac5cbd7807d"],["/archives/2025/03/page/2/index.html","186fbdff0544ce1d625f62651f024039"],["/archives/2025/04/index.html","ab8c3398762734960d022f3639b70979"],["/archives/2025/04/page/2/index.html","76c43ac32df57916b5c8d4c0b04b2a8d"],["/archives/2025/05/index.html","9231c9688cda5a998126485d5058d758"],["/archives/2025/index.html","47d237249cd73b1aaae1a2e67dcafb9d"],["/archives/2025/page/2/index.html","23db24c55d49761b4d7569e3012b0dd4"],["/archives/2025/page/3/index.html","e16290ff24397ef00a5d051609758a0c"],["/archives/2025/page/4/index.html","62fdd9b50da8630c86e1edb2c18d3598"],["/archives/2025/page/5/index.html","a7a476faa8e46a7713d4de5ff0db3fa2"],["/archives/index.html","56492836be0139b6f6233e0f07278130"],["/archives/page/2/index.html","d0ee91424c6a2003381af4924a0bae64"],["/archives/page/3/index.html","4d670cbbe9a946134384a1c7b3dd4314"],["/archives/page/4/index.html","62292ff9ab935b2bd23a2fd2e40845a9"],["/archives/page/5/index.html","c5e1949343d0951f629fbd44ee057882"],["/archives/page/6/index.html","4bd6a06ae448f4078ec80bbfc64fe750"],["/archives/page/7/index.html","3a84181e11c5e96e0f2775fb4976118a"],["/baidu_verify_codeva-J5b2WWChcR.html","9543c71c9e1d64710b19e0b64deff4f7"],["/baidu_verify_codeva-cwyza0ZFJb.html","f2614dae9e803e1fc4b92d4ac0bc09b1"],["/categories/index.html","bbc70a119d49536e131c77980d94e94a"],["/categories/壁纸/index.html","7f5a64a58603b301f14592f36f7c46bc"],["/categories/机网/index.html","f0adbb343260191b46d31ca37ced1588"],["/categories/机网/page/2/index.html","dbf784ed1150f2da246b05bdaf1a22ef"],["/categories/每日早报/index.html","cf2b8c9e5f2c9e18da73a87d05327968"],["/categories/每日早报/page/2/index.html","da2ea027282b59610f37d90b26a3bdb0"],["/categories/每日早报/page/3/index.html","8e07ace1da86fa0fb58ee068e05050e2"],["/categories/每日早报/page/4/index.html","5c18b97e51e88135545080dfcca07e08"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","5a213e9749a773868ad1fcfe6b3db391"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","099d77acfe5fb6934a6a9917fa1b9f05"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","bcb8a53bafe23f509dd5b9229c973e82"],["/js/ai_plugin.js","0a199a02c56ecb46b0fe60e869a32317"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","fda4b135b5ba3b0f435e2edce828667b"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","76b85be79a14d92ded2b4dabb8b66e5b"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","8accc2a445478b01c532a0c839e5a87f"],["/link/index.html","e3d3adcf4d1e1e4595def58a48659ca9"],["/music/index.html","ea758c47b7b41be91c08487736b1967b"],["/page/2/index.html","8905e5b65ef561f00fb1f7c1b0579c87"],["/page/3/index.html","742696351ded390978a53ddd4c3aa380"],["/page/4/index.html","2ca77265bddbc112d5e345b11d966483"],["/page/5/index.html","8361e92493c446f92d743672f28369df"],["/page/6/index.html","a8bd4c1fe237842b64feae5b880f62c9"],["/page/7/index.html","ec24e40d631a18bb326e0544edb85cf0"],["/posts/12501d69.html","12ef64a132ae42ca25ed6b93f0d8970d"],["/posts/138fefbc.html","bd127bbc995bd5e933ace228d1952132"],["/posts/1484043c.html","cb703b529f97b7b43ce247de1f058c2a"],["/posts/1a3d44c.html","cff1ea576e050c41aa7b5133fd8bb01a"],["/posts/1b0c78b3.html","1d8ae9b67850977699b10a54f45e75f5"],["/posts/1b5b87.html","26382e03de423bec3a00161f475e40b6"],["/posts/2134d9d1.html","c5532e385da1db49157001af4a665c2c"],["/posts/21fabcd8.html","1b3c2bd982f0134b3eddd549fc9e3c30"],["/posts/28c755c.html","0b206073bd0c65e4ac9eb2edc4337c08"],["/posts/2f77f294.html","cf1b63a9c693f1d906bf37bb6064f39d"],["/posts/330d6f69.html","60d545c026f3b843aaf75ed0a936887d"],["/posts/3b744803.html","db0bc015fea560ba494b6b06473ca953"],["/posts/3da05156.html","599eb35fe8cd453082b6813ff33a8cac"],["/posts/3e91e0fa.html","f8ed179068480388284a468d314ebc49"],["/posts/41c2c0d2.html","614d88e740b4edb563324544cc37a422"],["/posts/46fc5adc.html","4cdef6ef6db8ddc7259e41a4e90c178f"],["/posts/493f6b85.html","379398d45218ca087c3139743e0ad1ed"],["/posts/497e40e0.html","215d9470b6c775b8d933a9ff58b6eb6f"],["/posts/4a17b156.html","147938b90d366b88085519045818e44c"],["/posts/4e2d7b19.html","4ff38192731521a0e5355336e4c9a8a9"],["/posts/4f81eb97.html","dccdb8dda16cd679fece9afb7475866e"],["/posts/53721e0e.html","81922cfd9f97e5345cf6543cddc7093d"],["/posts/5dadd067.html","04f55dfda803e6e3e945c257e90b4806"],["/posts/5ff34642.html","7ad89c28249fd49acabb826ae72c8c89"],["/posts/653abebf.html","5f3ae13c7869f0b30c32c59055f3e91c"],["/posts/681265c2.html","b25a10ed5690ea34da8ef9713153181d"],["/posts/6f44662f.html","73344c6ed44be892327675b6b85e3762"],["/posts/7207f70e.html","9b374b9f4c225345a00cdadbeedd33f5"],["/posts/7289f891.html","eaae046c7b21f2014310ffd8cbf4f30d"],["/posts/732e626.html","ebdfdd0cb4ac5f71fe598d8632402ccd"],["/posts/7c4f393d.html","e9bf176e284ebfd21d94dc64f0d30fbe"],["/posts/7c825231.html","b4cd18ace0e4d55f9ec9a6823d2d9779"],["/posts/7cd0d214.html","1daf4c232fe6d807bce3e3d35abfdf41"],["/posts/7d9071b2.html","445ae3e321ad1f4be993019ffdf7a7e1"],["/posts/7e13cc3b.html","d2e82ea8f4b11d5ff8705aaec06dec84"],["/posts/80a7ecce.html","874848a722b6fd1ad0ce181a5ae87ba5"],["/posts/821a4686.html","6684a93d8fad7cd06cd20dfd209b7131"],["/posts/8a741756.html","1749902cffa2af3cd518203b8391577a"],["/posts/918d46c1.html","722966220f352c63be85b7716678de96"],["/posts/93c8c0c7.html","b3200f01334d4a6761f9bd23c0639d9c"],["/posts/9a59ce11.html","f99431d50bb3e1c151de3bf3b6e5029a"],["/posts/9f057e9a.html","c5dc4b2064f278f55654e6c8f070b0e8"],["/posts/a7d437fe.html","e43f615e90d859506a94d633f0b54c23"],["/posts/a85c4b71.html","da80941334d8b54eac2cbb8f48bf001c"],["/posts/ace4e4cd.html","94deb7512667b2c90aff7870f2525905"],["/posts/af30ddef.html","d36b1bd2e643554d7b337e448884024c"],["/posts/b1eb9c6d.html","4317f3e3ba251d00ed0e9df7ec87478b"],["/posts/b564e922.html","166493256bbcdd873da80fc7073c12af"],["/posts/bc9a4dc7.html","da2c63eb11eefe13c83cd45298994afb"],["/posts/be543a11.html","8dfb2b05becc91b4a7cc33bff52ccb6a"],["/posts/c9b871f1.html","71bf52dfe33573eb148abbd166ec1ea2"],["/posts/d6ef11e5.html","d18400eb4f1a87d2bb3060da0f8e3d7b"],["/posts/dcd6fdd1.html","c2da346f02502a13fcfadabfb1b41cdc"],["/posts/de24a124.html","15c56ab36825601c31f01771855fc496"],["/posts/e25a3e3a.html","a4d7e6ac1add25d557f2587542579ac8"],["/posts/e32cbcd3.html","b6030a96da9497168f7109f9c8f9bacc"],["/posts/eebbc69f.html","25d6a127d7dde1c0267da9c7be047f8d"],["/posts/f08119d7.html","06f684ca2c1675f1bd3f4c0b84f2db2d"],["/posts/f34dbb9f.html","84c7d0d813dfdd85aab4a6d0b630ecd1"],["/posts/f7f51423.html","e8afd0ed4be0b534ea6d8262cc8f2c42"],["/posts/fa75ad5e.html","c3ec3892a2cbea858fd317c24b79eb0c"],["/posts/fbda33d5.html","85f24ff141c8c7fe72a8ac3c9a8c7f04"],["/posts/fd1a8f9f.html","cb5271a38051276fc5203090834c7fb2"],["/service-worker.js","a5b5ec6c15f569d84b1466a06c6891df"],["/shuoshuo/index.html","2c17946cd1963cad74a6be76e1f89777"],["/sw-register.js","f86e78babebc8effde31f63c86cc457a"],["/tags/index.html","816e4f95c96f1def41fb9b9c38b7d618"],["/tags/【每日早报】-2025-02-25 - 星期二.html","b09a4b219912d6eaa73e202bd8fc8c0b"],["/tags/养眼/index.html","ccedf44b4997cc701e4e719ea608d528"],["/tags/每日早报/index.html","2259514016886a709f99359a7cc20d5d"],["/tags/每日早报/page/2/index.html","d632d58ba2c58bf9ba19f9a577dd3278"],["/tags/每日早报/page/3/index.html","3a6b05ff07848c85e7a17907d6a7d566"],["/tags/每日早报/page/4/index.html","2dfb0030b15df720345f5739ccb16f06"],["/tags/第一篇/index.html","6e7003e6e4cc1c4d7aec0e4440aba932"],["/tags/网络/index.html","0208cd266e563985c26048970526e098"],["/tags/网络/page/2/index.html","7e048e747cc4b3c5b49ce1a97a8e236f"],["/template/index.html","d67f258587f2646fb990cae34df91130"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a9bec5b30f13ad392942b65a39dab517"],["/Gallery/index.html","da0292afc392109c05a9394f5fd23478"],["/about/index.html","c298d58dc38a43b963b7dc90a5906d4c"],["/archives/2022/08/index.html","aee90659df1e763cde0ebaefc0ecc05d"],["/archives/2022/09/index.html","83b6d745410d7f828a2e0cef0290a302"],["/archives/2022/10/index.html","ffbc4d7f3c88d7c65851a289af2d51e7"],["/archives/2022/index.html","1f206f44196aa1777f45d562e957e4aa"],["/archives/2022/page/2/index.html","3e21cd4aed5b717ba3f091a4bf7698c1"],["/archives/2025/02/index.html","a719c13b1b5eac9ad8b8d216afb4d201"],["/archives/2025/02/page/2/index.html","e684ba3b1a04bd6e7ac96ac5c78e57a1"],["/archives/2025/03/index.html","d35253cf5e20ce6861cae4d977a657fe"],["/archives/2025/03/page/2/index.html","d2a9fb1138511107bf2a9fb2760da3d0"],["/archives/2025/04/index.html","69677431b33d2ea7767f5b6a40623d0c"],["/archives/2025/04/page/2/index.html","ef2be36280e8174768c28bdda8d59cd6"],["/archives/2025/index.html","15a6b71ed0a5a15a7ae2589b542e31cc"],["/archives/2025/page/2/index.html","b242874b51d50ab55a7deb95e5143ae2"],["/archives/2025/page/3/index.html","60f2ec913f0b6911814abfd3eda4b0f9"],["/archives/2025/page/4/index.html","36e351ee62e892f1581d48ac70762969"],["/archives/index.html","c4c6a1323aad9827a630806af27bdcee"],["/archives/page/2/index.html","c4cd0576ea8daac3c9a65b590ad4bbe3"],["/archives/page/3/index.html","8c7e68fefaa791919e39b3a4a6c19fea"],["/archives/page/4/index.html","b96fff1d9b839504d19f8bed84c309a9"],["/archives/page/5/index.html","78d055012e0dd09220923eaa822bbdfc"],["/archives/page/6/index.html","cb24a0a4638345497f608c32cc9a32ba"],["/baidu_verify_codeva-J5b2WWChcR.html","11ba26290c8148463db27b937383d7af"],["/baidu_verify_codeva-cwyza0ZFJb.html","0da3989e9768ab975fd2252e7b4fe72b"],["/categories/index.html","fbb5f635d7051dea8bf8eb9b30a0beae"],["/categories/壁纸/index.html","1a4f684350769c425a70f2d0522de5a3"],["/categories/机网/index.html","0892b58bcd0a7772a6a05268b4c7be46"],["/categories/机网/page/2/index.html","99a50aa4266a21a2b83052dbed8a2711"],["/categories/每日早报/index.html","d7a5e01a479c06a05f691bdbea17786c"],["/categories/每日早报/page/2/index.html","6d65c0cca5d263e707885603a859c07a"],["/categories/每日早报/page/3/index.html","dd3648221d6d7069f68fd54fdbf9f692"],["/categories/每日早报/page/4/index.html","553a2388935f7bfd2dc0caa1ccf16c79"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","3c1075fe67668916337aa8bbe8b8fc4f"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","d1155af916f9badfa3fcafc9d6ebd8d7"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","f890f7ebc35ec3b7d0088bc5c31bc5ea"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","f140a1a8fd2170519f85c7c1fce1cbad"],["/js/ai_plugin.js","2e8bafe7451ea96da22df59e37abe16a"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","13b20c8536515070f524ca40172c70e4"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","fe69e183d627f455a56cebbcd4475f7e"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","1d1832b2d0e2801723f9f20c725c6f24"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","287f39a570c153b56e9e410fd99ffe05"],["/link/index.html","c76e6dde54b83662c79df9592c988414"],["/music/index.html","a73464339135d02bfbdd2ccec9232e66"],["/page/2/index.html","78f32ec389379a9b735b61a3a2489d19"],["/page/3/index.html","4bf397bdc08603a2100e76efd2a417e1"],["/page/4/index.html","a58a7327905cb20da33a8fbc3f3e6c6a"],["/page/5/index.html","d58496a5a4fe47f4fb0025d86e46aa02"],["/page/6/index.html","e26c365a11b64d2c416a4f11bb581b21"],["/posts/12501d69.html","a5106fa333fdc9e40a5a49ce327a18b2"],["/posts/138fefbc.html","9d4083aa9d5991cfe9e77e2d05811238"],["/posts/1484043c.html","c92d8b1764d0c9246f1c96014d83b069"],["/posts/1b0c78b3.html","4186db5d1aea3d250b4e9ceecc5d5940"],["/posts/1b5b87.html","d29cc974f1e2305dccf88704d932baf7"],["/posts/2134d9d1.html","547150aa69e5665d0964dc3093308f38"],["/posts/28c755c.html","59d2ad6700732de80ee99af52f528091"],["/posts/2f77f294.html","a096ae515a7fd65a50b582a7f57f5f54"],["/posts/330d6f69.html","5d0e2067b1123671a55504d800f908d2"],["/posts/3b744803.html","e826bb3f3b603c53dd4579b5de7b58ac"],["/posts/3da05156.html","b2fbe3e11e9f78c0373c77941c12ea31"],["/posts/3e91e0fa.html","e870d9c111dc286d30808d41b6455f8d"],["/posts/41c2c0d2.html","9b6330a19d82e83d177ace89820eb559"],["/posts/46fc5adc.html","42524d7185e7bb0b36b1d8a493a2f901"],["/posts/493f6b85.html","6866b4ce1effeb00f3d05948b4539d2f"],["/posts/497e40e0.html","192ee93e0d8264305b132123acc7acd6"],["/posts/4a17b156.html","19e3ccc7c7b6df13b662b854b7d1e892"],["/posts/4e2d7b19.html","f7bf314c5d904b8ea1c420848cde1909"],["/posts/4f81eb97.html","1e613ff5f0ce8df5339a7999794a6dd6"],["/posts/53721e0e.html","c1d001aee0fd9b9cfacfad4946251781"],["/posts/5dadd067.html","8033ae4743d1f787af0e753435ae3066"],["/posts/5ff34642.html","3bebde022ad6430aaf328097b6f0f01a"],["/posts/653abebf.html","1ad485f2cec57b75d68247a01ecb88c6"],["/posts/681265c2.html","67b2afcbabba11159883226cdba0e41a"],["/posts/6f44662f.html","72b5a0a84c3f248fe2ffde305fc0fc58"],["/posts/7207f70e.html","34e4913cd0932757d2ac101bd9c7a8ff"],["/posts/7289f891.html","bdf791c2e7cccb6041b72cc6a3d7ae0d"],["/posts/732e626.html","b8c7c06535cb1e495b044cf05e184045"],["/posts/7c825231.html","e4cd1def6958e1ba93e3e6d47b914c4b"],["/posts/7cd0d214.html","8f2a7978379c68e44230b65edf8cf65b"],["/posts/7d9071b2.html","707c9fd1eb5c69592bd9870388919d62"],["/posts/7e13cc3b.html","9fe583b0589416f40f51fd6ba5fde93e"],["/posts/80a7ecce.html","f995d63b0e3cb5e1531337f4e2cc8581"],["/posts/821a4686.html","0a8c428ceec305f25bd06baa827e9a81"],["/posts/8a741756.html","1d12c74c16b142d721898147abc53025"],["/posts/918d46c1.html","5bdf14b5e46a367ddd0d81587c708549"],["/posts/93c8c0c7.html","a528ad515d0a8074a3aa5b8aab7570fe"],["/posts/9f057e9a.html","cd961666023d257ea45a96281c34808f"],["/posts/a7d437fe.html","6069911a55daeccd19e0e93331b4ec97"],["/posts/a85c4b71.html","c7417e85f6841228aff006d0ed262aef"],["/posts/ace4e4cd.html","7ee59cfc8178ae5933caa346810fb3ee"],["/posts/af30ddef.html","d7162730f233f373358dc73fe961b912"],["/posts/b1eb9c6d.html","d4a74fc96088d2c0dd12459b5006e688"],["/posts/b564e922.html","be4201e789d78a2a7f03e63d48d2bced"],["/posts/bc9a4dc7.html","f8527492dca542f23be4f9a2326270e5"],["/posts/be543a11.html","e853778cb2f1dce5dc8742389b31c6e6"],["/posts/c9b871f1.html","f0a93c890f832984cbbd62dde42adc38"],["/posts/d6ef11e5.html","5363fefc2fd7d2acb8b8530877cb5428"],["/posts/dcd6fdd1.html","f45710f94ffc70a221e83f8060e8d091"],["/posts/de24a124.html","e43f706e5d07295f2724174414ac2c50"],["/posts/e25a3e3a.html","e4cf9f0960970277cabb474b88a1c493"],["/posts/e32cbcd3.html","3769e8c39f47e7feaf3f994279858d0a"],["/posts/eebbc69f.html","56ed064b8d60ea330c382c51c03a4de9"],["/posts/f08119d7.html","4d42ace95380b9f741c7595be9317579"],["/posts/f34dbb9f.html","cfd9b9ffab7b3232e7fa416a96d273a5"],["/posts/f7f51423.html","56dfc5c588ee30e312ed93587ad4128e"],["/posts/fbda33d5.html","5ffeec8787b926f1309abf4a7532fa87"],["/posts/fd1a8f9f.html","040b1b95ed340829974b75e491c68551"],["/service-worker.js","9b696352023f3b3d66f3a3034b14e72e"],["/shuoshuo/index.html","f49dc025bbabd1c1b913514bce14f9c2"],["/sw-register.js","e7410df5d7d9806d56b65e0d013b0082"],["/tags/index.html","5e56c2098a1a7e6188643b675e13e49f"],["/tags/【每日早报】-2025-02-25 - 星期二.html","b1dbd8d5140a06810664f948fb5c999a"],["/tags/养眼/index.html","dbcfda36fc01ac0141f51f50e405b9c2"],["/tags/每日早报/index.html","57db96063a378396d1fbcef2745439c8"],["/tags/每日早报/page/2/index.html","e33053735729bb50ea66b1edf1aaa2f8"],["/tags/每日早报/page/3/index.html","9200746a494ce2e3e862597dc275b8a7"],["/tags/每日早报/page/4/index.html","3b5439b47bda4948fed67dab4cbfca42"],["/tags/第一篇/index.html","46ff8129edb76ea5a425323fc74a134d"],["/tags/网络/index.html","ea2333cefdefef85ca6375334efba12f"],["/tags/网络/page/2/index.html","88c737594ea7d76d30c61c1c5d60be98"],["/template/index.html","c4ccb791a539d717f40f40aa04910ec9"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c6caa8bdbaf5239049884c717854c0e1"],["/Gallery/index.html","0df730e0e3a69b39ae34887a4f94bc9b"],["/about/index.html","11481a0eb7fe71a461b876d02710bfc7"],["/archives/2022/08/index.html","5fe1c2967e3ec2a7e9e615f46d55147b"],["/archives/2022/09/index.html","4651225ca6f71cfffe230444edbe0df7"],["/archives/2022/10/index.html","787a7fe3086c984941d6eed0b6373706"],["/archives/2022/index.html","13ec84c981c6879e56ef60dc4f77c89d"],["/archives/2022/page/2/index.html","c00fde9c48c73a5ff0b55fa47d137fb1"],["/archives/2025/02/index.html","2de506e5806e7a1b7821c0ee298be48d"],["/archives/2025/02/page/2/index.html","d31bc40c609247c037ee50e13cb9b2a6"],["/archives/2025/03/index.html","d9a135479a8c5e0eff59d6bb20abe250"],["/archives/2025/03/page/2/index.html","c16b640c67ab38a4f2f7e89505ca1623"],["/archives/2025/04/index.html","d34bf154acd5bfa3068b4a5612b05736"],["/archives/2025/04/page/2/index.html","f6d15a471f9ccf8b6eae599d8429dd80"],["/archives/2025/index.html","b624304b05e646345e7defe043acc4f9"],["/archives/2025/page/2/index.html","a90f7de585b4a9738e7c122eb2917bf7"],["/archives/2025/page/3/index.html","7d2ca4466a19280beb5c0b9fcab2ef76"],["/archives/2025/page/4/index.html","d390ff9b20ad6dd14b316f39b701631f"],["/archives/index.html","34ef1744fabd604a14b153ca2284409c"],["/archives/page/2/index.html","bac25ea8316846e91c5eb2654618945d"],["/archives/page/3/index.html","53e8f918ef2d60553f15088ab4766b31"],["/archives/page/4/index.html","0068e0c8502706eb319fe160155d85cd"],["/archives/page/5/index.html","3ed9769d57b6223464243a1518a17ffd"],["/archives/page/6/index.html","2fb668838c8b05713073d5fa49445116"],["/baidu_verify_codeva-J5b2WWChcR.html","77d5066ec784362d53ac5231a07f5883"],["/baidu_verify_codeva-cwyza0ZFJb.html","86eebaa381733ab363d9c26a4b24c5c6"],["/categories/index.html","15cd4b22f015d539be774a6ecedb1ce0"],["/categories/壁纸/index.html","81f271a1293a2d6c2de5cc2ea289c540"],["/categories/机网/index.html","73ec9c052f918161f1466ec621eb0833"],["/categories/机网/page/2/index.html","ef166110aa686b41ccb7dd18bb5c8c5e"],["/categories/每日早报/index.html","d70f8ad32ffe1305b89519cdcf5cbdc5"],["/categories/每日早报/page/2/index.html","7debde21e01880533fecc508572e81f5"],["/categories/每日早报/page/3/index.html","e94a736e11082de0629d3ce25a5e700a"],["/categories/每日早报/page/4/index.html","eb73006dbb183874c7930cefb45662af"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","32dff5c5a912f962e66a60e2a2dc8dbf"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","796abe7797dd8f8d3298f97e1b51a699"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","295a637067ebb5509cb48db52bc8e8a0"],["/js/ai_plugin.js","2e8bafe7451ea96da22df59e37abe16a"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","8eca170a2bbf55696e512df4ef93b658"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","d0751f7a61189fb3f18ec9b2190056f7"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","1d1832b2d0e2801723f9f20c725c6f24"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","d87d7846a5b4052593d328e5eb8647d6"],["/link/index.html","d5a18f9bbc2bc32bd9fee0df42bb9ea3"],["/music/index.html","6badabd17c808e59ecebbb3803b1d73e"],["/page/2/index.html","207955e7ce67f460262ff8d896795241"],["/page/3/index.html","abcb606b023243b0623dbafdd4d836e1"],["/page/4/index.html","778c4170ed571c9b9dde26544876fc9e"],["/page/5/index.html","596f06eb7bf85f08843e8a8f8014ee65"],["/page/6/index.html","80405eb8704a2c64c976b8f8abccebf4"],["/posts/12501d69.html","af67ce56faad78eacb6c61a58c0d739c"],["/posts/138fefbc.html","5f1543ed6aa6d3da757ca24aff5d8563"],["/posts/1484043c.html","d6d1afcc80fe39628c703de5697fb44c"],["/posts/1b0c78b3.html","44d4dba41662e9df2b56884461ed2db7"],["/posts/1b5b87.html","5d62b16eccdacc754d89d3ba5d365eba"],["/posts/2134d9d1.html","e372479f31acee59ba2a8a5ebcd779f2"],["/posts/28c755c.html","c5475b624ff11e72a4834980d8ce080e"],["/posts/2f77f294.html","e5ff9be0467fb37d0ead4b22791b4f54"],["/posts/330d6f69.html","6811de57310f1f9f97f1cdb345bac9e8"],["/posts/3b744803.html","976c6bc22559c4978d7af5206998ef7f"],["/posts/3da05156.html","4459c78c47d314690ace0d275f1a828a"],["/posts/3e91e0fa.html","82b2cdfa38acb5358e596865a9242a5c"],["/posts/41c2c0d2.html","8c1e3b0cc64e3614d8140598e83073ed"],["/posts/46fc5adc.html","fd571b366d60eac754b6433ea86ab959"],["/posts/493f6b85.html","c1d4f9e6c3ded017dd4f54dd0fb4de24"],["/posts/497e40e0.html","c180a308bcaa0e62d7806143914eed34"],["/posts/4a17b156.html","4d2dc44edac536375d608f3a91f69f90"],["/posts/4e2d7b19.html","aa118ff7e304351f8f28ab8f077e4ad4"],["/posts/4f81eb97.html","7726a4b3953f85a28efb579ab6dcaa10"],["/posts/53721e0e.html","f7313d08d4a6f89dd3a981438a21d383"],["/posts/5dadd067.html","69c8f682f8203dea0114e732ee6b5a49"],["/posts/5ff34642.html","e8b1c6c8e0bb5ed4a5abc442dad60970"],["/posts/653abebf.html","38457df97cc2c9a3d5b1d1fcd37d734b"],["/posts/681265c2.html","a7cd498c969befed5679da586a5fbb18"],["/posts/6f44662f.html","ffe581f309fbe57d324748e9e0e9bf54"],["/posts/7207f70e.html","e96af3a018cc3273b682f75f5c04e024"],["/posts/7289f891.html","69fa2e30c53746a4501cae3569e062c2"],["/posts/732e626.html","2bc06a087c345e631db7d220e8e100de"],["/posts/7c825231.html","707cf51ec5db9c1b6483338f79b77b58"],["/posts/7cd0d214.html","9547143e2db4141ca566d2d63d4bc2a3"],["/posts/7d9071b2.html","5e72b911d942a08eeb2be7396e892ba3"],["/posts/7e13cc3b.html","805a5ee4ac11303a284ecf5fb42a63c9"],["/posts/80a7ecce.html","520af8f31ae414d2b31b4f08d57377ad"],["/posts/821a4686.html","4bfec44685023d9476eaa1e41a1d5160"],["/posts/8a741756.html","9bafc1574506cd2ad21c7af6fdda8e51"],["/posts/918d46c1.html","9f63355f1705fdaa26f9d1a672ec7382"],["/posts/93c8c0c7.html","aa9631ad28186fa4eccb692b73badfde"],["/posts/9f057e9a.html","d3b05b304d9a8678ebfceee0d957b669"],["/posts/a7d437fe.html","86491b1d2c3e95bd41e3aa79d038b84d"],["/posts/ace4e4cd.html","323376fbc3e523e4cb7b50712be4ba22"],["/posts/af30ddef.html","803cdd6e6a886a848267b986ba8e1654"],["/posts/b1eb9c6d.html","2469a3b4eb68aa7b1a744f1a219b00ee"],["/posts/b564e922.html","046098cfe4dbd79c3d5aa9720e5b6ddd"],["/posts/bc9a4dc7.html","73db09f4e2d4d23a53ac65d15ff81549"],["/posts/be543a11.html","1cf6f941acfac3861499a5a15af5fab8"],["/posts/c9b871f1.html","5b6cc8de454b7f10ae539c10f5b909f9"],["/posts/d6ef11e5.html","f23603781802f29c59fd90fe809b8953"],["/posts/dcd6fdd1.html","9bb6e4064047d31681578e3bc54d0ac2"],["/posts/de24a124.html","74bef9044a9d64950abfb32dc7967fe3"],["/posts/e25a3e3a.html","445e041c252d7374e9ccd8ee78adf95b"],["/posts/e32cbcd3.html","392620ce0f1c39baeca77c96ce304c94"],["/posts/eebbc69f.html","f9f3f06a61017c9d37abd7abeb35bb3a"],["/posts/f08119d7.html","eca5e77c70eb6f2f8bcfad554b47dbb0"],["/posts/f34dbb9f.html","445d34147f5dca5f27bf505976eae391"],["/posts/f7f51423.html","dd420a2deeb9386ce7155d1cac4c02fa"],["/posts/fbda33d5.html","ba2fe542d1b8669cfc224375a0987fe6"],["/posts/fd1a8f9f.html","5fb867a124d82350ccd7283d1020ca26"],["/service-worker.js","4283cc29cd3d340d6a7190cc3a2a3703"],["/shuoshuo/index.html","948fc872d1c0d1903760227789a10b8d"],["/sw-register.js","9aecdee4afd949dd63b5feaf2c5c5d68"],["/tags/index.html","a25ad006b5abdd8d64c7911d002d8a8e"],["/tags/【每日早报】-2025-02-25 - 星期二.html","ac0c75bfef7e4c131ff484c6d3e7f3d9"],["/tags/养眼/index.html","c975665e923991381203f0c3fa91cf73"],["/tags/每日早报/index.html","0c711b49efdcc8711eed20fde74b9d18"],["/tags/每日早报/page/2/index.html","dcab892fc377a1046fb859b4df7273e9"],["/tags/每日早报/page/3/index.html","43681dbca197b412a971eada6cbbb378"],["/tags/每日早报/page/4/index.html","4aaf6fd009feac1a54c5bd6aea8b5fe6"],["/tags/第一篇/index.html","dd32db19937e1edf4d0ddcce05e97025"],["/tags/网络/index.html","4289606d32a55d20c3cf0bcf6c338624"],["/tags/网络/page/2/index.html","58df655184f474074d56e9b3b5e117e8"],["/template/index.html","ee34c8fe3e57a7adf9c54bd3bc8f6b03"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e4837951c899f485f10b6bb85c802db8"],["/Gallery/index.html","f2ceb8ca5b805cf2bdb78975d0dc15ab"],["/about/index.html","c77cce27327c9c5903bdafed804b607a"],["/archives/2022/08/index.html","33f6598c41171659d0421873785f63ba"],["/archives/2022/09/index.html","d8b25e2b08f134bbc6bdcf3b9cbb6178"],["/archives/2022/10/index.html","027601ad8df48a2ea69433d932ae7650"],["/archives/2022/index.html","0a85ea139c8ba3e8a2f37fea96df65a8"],["/archives/2022/page/2/index.html","8e942d7431635c64773b31dba204c84f"],["/archives/2025/02/index.html","f332893b9b45339a70b0c50e491c4265"],["/archives/2025/02/page/2/index.html","7334e7bc539bfbe7864c4e129825dec3"],["/archives/2025/03/index.html","779f04f69b5e8c4bfa1e26827dff6351"],["/archives/2025/03/page/2/index.html","7cfff178da8b63d2d1748fbc39e7bcfd"],["/archives/2025/04/index.html","b7c4b660471ef3f1f7c9205f73d45b16"],["/archives/2025/04/page/2/index.html","25d52f6323c870e369e2c1c3a96291a6"],["/archives/2025/index.html","b3cf294c487ba41a82883f8c1c5f2408"],["/archives/2025/page/2/index.html","6eff64ba9898e82c0c3f7f255ea6aa13"],["/archives/2025/page/3/index.html","b43bd3e8a0307e30149ea2a5d4450abc"],["/archives/2025/page/4/index.html","2d8b9e4531f424ffcfc92feef1c93704"],["/archives/2025/page/5/index.html","166497ce8933edb8593ee056c4122931"],["/archives/index.html","4d57e3e56125f7273bc5fe9ee79da04e"],["/archives/page/2/index.html","5d4eb66fad4fc29f83ad3195519ba55a"],["/archives/page/3/index.html","69c349406d7f953c2824c745899ffdd4"],["/archives/page/4/index.html","498fd239fa4c8df60fceb9bc5f7e988f"],["/archives/page/5/index.html","d6d1d0e7a13d7a6ce447f20f28879bd8"],["/archives/page/6/index.html","22a7ef9f84ed035dcf4e896b0b87bc2f"],["/baidu_verify_codeva-J5b2WWChcR.html","abb62ac9d9bd3331e48db961071ae609"],["/baidu_verify_codeva-cwyza0ZFJb.html","fb6188203a070b8e868782afc97ff446"],["/categories/index.html","cb72c0a89cfd19b814ff2152bc236a22"],["/categories/壁纸/index.html","c43944f917d2402de518ef8320e897e2"],["/categories/机网/index.html","b6b1d3c86347682dd6d44fcba8289374"],["/categories/机网/page/2/index.html","54530de0139b8577863e38ae90e46d3f"],["/categories/每日早报/index.html","b77cd0f2060a1baf7b1a9b24e4e8eb5a"],["/categories/每日早报/page/2/index.html","2329613d3fed0f581ce41300ad6cd459"],["/categories/每日早报/page/3/index.html","c120586f7e35f9da3d7ba09e1497cffd"],["/categories/每日早报/page/4/index.html","7f02128009ac46668d3d264ec468cf51"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","4d86d7344ae1f7e73d70b80e9c72bb52"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","55ac7354f30d4de898287faea97752cb"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","773260762ec9261671ec52799c311d62"],["/js/ai_plugin.js","43d6bc012401e93dea59c31b742718ac"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","b25dd79519377ebdb61ae04bdcd7c9f1"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","aa4ae5ddce933f5e45a1e83d98538711"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","31f29c9c4a35e8ad6f9d3a30e1435c9f"],["/link/index.html","40c5d6276b0652c88be35e80a33284d0"],["/music/index.html","71bb91dd3f6fba8ffeba30ab3cfb96fa"],["/page/2/index.html","1b3cd2f7d7a1491eaa2f823dfa5004cf"],["/page/3/index.html","3d4ba7579e8d1062271adc7b46b9ab29"],["/page/4/index.html","c5a34f731743c6e67cd89977da03b7ad"],["/page/5/index.html","426a4ae47a994be3b40d69bf3ae939fb"],["/page/6/index.html","20c0b07f5156c8710eb55d6543d4d2d1"],["/posts/12501d69.html","d42bc24cb6f8108054d26a1008180712"],["/posts/138fefbc.html","3f7af9f6688c2e80fbdde6da7f3bf42a"],["/posts/1484043c.html","a370e960f5f09834c04e1a008861eedd"],["/posts/1a3d44c.html","09dd1d112fc9620759bfb955eac9f46d"],["/posts/1b0c78b3.html","a43139819483d3e13b69a3b9c77c6828"],["/posts/1b5b87.html","b2598a62a63147a9f217a6c27057076c"],["/posts/2134d9d1.html","5fa6c2cc10b69749d767ea9db444c4b0"],["/posts/28c755c.html","b9b38bb38066f7d88d112cfd62538dfb"],["/posts/2f77f294.html","9b413553475017b8733553c6222dea35"],["/posts/330d6f69.html","c440784ed3b516158aab3d6db12c2192"],["/posts/3b744803.html","0d6804a6ecd1ce3727e2bd14a1c5a0ed"],["/posts/3da05156.html","c322f1c94640995355a2a8777b542bcc"],["/posts/3e91e0fa.html","f71d71b061e9c0fb42c43316c857aaf6"],["/posts/41c2c0d2.html","dcb687d8cbc767f29d54d1b8c6dd9a04"],["/posts/46fc5adc.html","2f09342a65a4361b154e932f614d42ec"],["/posts/493f6b85.html","b639b85ecc91f4e9d03e68b537cc6382"],["/posts/497e40e0.html","1793012eadd34a2dbfaff6f7e5eec825"],["/posts/4a17b156.html","bc56eb19f231d8269da9adf7cc12fc73"],["/posts/4e2d7b19.html","a9b7fdfe969ae13c0c9e2221b6b83910"],["/posts/4f81eb97.html","814e1785f2aba40f632ed70b18350054"],["/posts/53721e0e.html","78dd717d42148d625e001156d24a7dfd"],["/posts/5dadd067.html","627c12213a011f6b571f6ab042292567"],["/posts/5ff34642.html","08ff975706c6329c22ba678b0db66be0"],["/posts/653abebf.html","a52f47b238074d2afa7cdbaf50d3ea6f"],["/posts/681265c2.html","be209ce8ed0b6cb78d5695827139857c"],["/posts/6f44662f.html","281a9b03c0e34803feb32d1a1c7bdf6f"],["/posts/7207f70e.html","a66d91018879ae4629a31ff858dbfd86"],["/posts/7289f891.html","82c889cfe7bbdbbe6407baa569a92232"],["/posts/732e626.html","49ee21f6499dedf3332a3e70d304c2b0"],["/posts/7c825231.html","a0f2438edba339677a0b1adb3faad50a"],["/posts/7cd0d214.html","0ad94a5a3f682f1c2986641312b84440"],["/posts/7d9071b2.html","a97e2d8f9d372a7a89a115103fcf9b3e"],["/posts/7e13cc3b.html","9864a94b00e7aa1f6314c796b796329f"],["/posts/80a7ecce.html","1f9c2a98e2174df2cb571201f26ef4cd"],["/posts/821a4686.html","6c72855ebf6d464180f3673163adc296"],["/posts/8a741756.html","9496bca992aea82efdb9fb17d6b5dae6"],["/posts/918d46c1.html","e688873b975b6bd9f589f61fe3a24c57"],["/posts/93c8c0c7.html","4893c2a7eacd4bf4af88ab16fb18acf3"],["/posts/9f057e9a.html","d7c3a68b6684808265137420993612d1"],["/posts/a7d437fe.html","f5b83314e6ed62e7c85fb92a40c37a1d"],["/posts/a85c4b71.html","5a0814d3c3375d7b67879f0043ea5495"],["/posts/ace4e4cd.html","6351fba0ad9571d9c080c6a1363c9971"],["/posts/af30ddef.html","78b120228188a4dd4c93daf5ed1b3f1f"],["/posts/b1eb9c6d.html","4f1487bb992e39fb7b73a078bd5ea3c4"],["/posts/b564e922.html","3fd25b2d60b3f89fc323b039395dcdc5"],["/posts/bc9a4dc7.html","deff6fd5d5ad9cbdbb345530e9fb2384"],["/posts/be543a11.html","3f677a6e9f17535b45a012cd109d1458"],["/posts/c9b871f1.html","47fdd333fdcd0d55873630ca6516a5f9"],["/posts/d6ef11e5.html","473551bf6a7f5408260fc2ce4febd24d"],["/posts/dcd6fdd1.html","05de1f951c66692f0676e37a43eb5be6"],["/posts/de24a124.html","36e7290351ef4cc114f28c2cbe655cc8"],["/posts/e25a3e3a.html","fc230b12bfb7b71f7780d142ded365ad"],["/posts/e32cbcd3.html","acc4c3068c2f8ffc3b37da27e81de994"],["/posts/eebbc69f.html","ae659bf4356e8dcd3b018ce36c2d859f"],["/posts/f08119d7.html","0549b22fa6f68d0ad2c3aa0c40799c4d"],["/posts/f34dbb9f.html","1a7665b812d4e92e32645afbca3f37aa"],["/posts/f7f51423.html","8388ceffc797b94ef6c723ec24a91248"],["/posts/fbda33d5.html","87059a41baf428d5816bcab204934e97"],["/posts/fd1a8f9f.html","261af4e345d70c7b7e0c586b6d4adbf4"],["/service-worker.js","960fb9628abfb329523939037249244e"],["/shuoshuo/index.html","401ec1b51b90f9890b7f555646176278"],["/sw-register.js","137d971a3eee3c5fb00591203bf2a008"],["/tags/index.html","2d31c22baa0427c5aa78fa590c639303"],["/tags/【每日早报】-2025-02-25 - 星期二.html","6606b4a19c74474285e3ac08e8208202"],["/tags/养眼/index.html","6592a9ac74ea057da1c58811df08c84c"],["/tags/每日早报/index.html","e63ab3ecbb2abe19fcf522eec3e3a0a5"],["/tags/每日早报/page/2/index.html","07d1a120e72a9b1d25a335c2cfaadd3d"],["/tags/每日早报/page/3/index.html","3c07edf30ff1382e2a36db9eb14b03a9"],["/tags/每日早报/page/4/index.html","c104d8f8366014230f70187973866403"],["/tags/第一篇/index.html","eece17e4db86e4fa3d709c6593cdc807"],["/tags/网络/index.html","7cadb50f5776cb83e2da65110839b403"],["/tags/网络/page/2/index.html","db21f31672f458ad6592b9e5e1738028"],["/template/index.html","67b4c5e69e0ab54a1d6e96a78f38c944"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

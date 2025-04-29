/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d8d8c562e30b5d56663af9fbddd77146"],["/Gallery/index.html","d9426624ab537887065fb3e43f594dc6"],["/about/index.html","bda493571796e934596dc5997696173e"],["/archives/2022/08/index.html","b5b23123b08061652f365f4c3b76ef3a"],["/archives/2022/09/index.html","d81853fdeaf03848f72e7cbbc53b6afc"],["/archives/2022/10/index.html","85e726c04cea84f2d14738cc0d2069f8"],["/archives/2022/index.html","445e71e3a94074edae340107bf0daa7e"],["/archives/2022/page/2/index.html","262021a7859212bc575df708accba147"],["/archives/2025/02/index.html","9d10d07901730f7208c226a3fa5654aa"],["/archives/2025/02/page/2/index.html","d797745902431a52d44b40ccec8d380f"],["/archives/2025/03/index.html","98df17826f008307807cd1039bffad6e"],["/archives/2025/03/page/2/index.html","a398547c9dcadfd82e88b675bc2ed12f"],["/archives/2025/04/index.html","4ac329a9e498c74e39b4e770957a8d82"],["/archives/2025/04/page/2/index.html","d633756df4dccdf34eb432c2dca17283"],["/archives/2025/index.html","15faa2539dacdeee9fee227653be7997"],["/archives/2025/page/2/index.html","b06f3dd31a0976e603515b87d94dcdf3"],["/archives/2025/page/3/index.html","eafc25d76ab382719f030fc485ded2e9"],["/archives/2025/page/4/index.html","981ee4b182c56d6f3141ba597a315369"],["/archives/2025/page/5/index.html","ecbf012c4803755108a1694208d652d4"],["/archives/index.html","ad254645515f2665f2523f0a51e48758"],["/archives/page/2/index.html","9ddbbb9015ca618d752dc0b87fc43d58"],["/archives/page/3/index.html","77fb06ea39f5b838d989baab8425e539"],["/archives/page/4/index.html","a60a891b38db351f7be8564e5ef9e127"],["/archives/page/5/index.html","32c94cb58baaf5c7d297c34fc8567949"],["/archives/page/6/index.html","5d26c25cbe5fba98a0e7041a6ebbe0e9"],["/archives/page/7/index.html","69fc91dfc7c0b975ce29addef0599504"],["/baidu_verify_codeva-J5b2WWChcR.html","8cd1cf3fbff71e72a4e840eeee1e18cb"],["/baidu_verify_codeva-cwyza0ZFJb.html","f2c0a60a703ce41468aa8eee29e04779"],["/categories/index.html","279165ce4d037607b84c04953524d3ed"],["/categories/壁纸/index.html","2bedf2480a2b6aa6e012181a18a2863f"],["/categories/机网/index.html","1a6e74f93d34eb487e4e5b8fcf839c5d"],["/categories/机网/page/2/index.html","c84eec1195df9ed4b4821b831ab82afa"],["/categories/每日早报/index.html","5076d60b6855a088787870943f848366"],["/categories/每日早报/page/2/index.html","5438fdbc79cfef860aef6cc3130e75a5"],["/categories/每日早报/page/3/index.html","dbb97baa93cea8a0757b0c37ee525b9e"],["/categories/每日早报/page/4/index.html","9c950354dac498ed782400e21f85160e"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","d377c9754f930a4199aa74c349edbba4"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","5f2d8c504c8e5db3e265e557436fbaa2"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","f42456db1aa0ae126a08bb2d3523d253"],["/js/ai_plugin.js","0a199a02c56ecb46b0fe60e869a32317"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","ec27a31cdae22c303c66a03293390265"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","40158829ca1267253663538a223b8432"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","411ae1bea89fc6acfdd4b51b5b9579ac"],["/link/index.html","54df4b74a41951f39ce45ebe3e413b00"],["/music/index.html","3de2546f88381ffa08861625657cf958"],["/page/2/index.html","05562e72780c94dc767990e23aa2ff64"],["/page/3/index.html","35efeea5b0f4befdfda66d39a23a5c8b"],["/page/4/index.html","86acb66fe1f3398cd394e2677f76f5af"],["/page/5/index.html","1119e27c961894918e92796e585c817e"],["/page/6/index.html","48b2133ee47ecf37b75dc90cb9d7ce53"],["/page/7/index.html","f8f04f397790ca262401ddc8ddcafcbb"],["/posts/12501d69.html","a209e2fb86e2d40a358b35f25070cdb6"],["/posts/138fefbc.html","30c75da54b3df62ac9c31e8ff9f8f226"],["/posts/1484043c.html","de57997a48ac8629e4e7c74090f80d9d"],["/posts/1a3d44c.html","eb604eb00be412180b6e75ccd5b24acb"],["/posts/1b0c78b3.html","c801d26f7ae6da81d98d24072452aa45"],["/posts/1b5b87.html","78ec91882c97022505b62d0852d97010"],["/posts/2134d9d1.html","b97833fbc784b6715a5685a619ced984"],["/posts/28c755c.html","0af020e0b7ce83abd767218eb9f1a3e5"],["/posts/2f77f294.html","c5d0bca7a838154fd9a84fa1a4d4f007"],["/posts/330d6f69.html","fdd08f5d594a2652f12ff16bb18d3654"],["/posts/3b744803.html","799c500bf2e60ca3d682b7913a98ec57"],["/posts/3da05156.html","3e7e70b90601b3a54a32387028d5e78e"],["/posts/3e91e0fa.html","4ca7713c7d875fea3b926bfc1e0d95f6"],["/posts/41c2c0d2.html","07b473510d435775e9f9a7e8b0134312"],["/posts/46fc5adc.html","ff6745cf836a3db9417b42140f1581ca"],["/posts/493f6b85.html","7248d424b3a9139f8c94e0505836085b"],["/posts/497e40e0.html","3444071acf5e4313c1a4299f63f06d9b"],["/posts/4a17b156.html","d4b66a3a092c955d7dc247512e100a4c"],["/posts/4e2d7b19.html","2998d65d2dcffd8a19fa39cb3cd5b921"],["/posts/4f81eb97.html","75e120775b473550f5cdc30af15b1631"],["/posts/53721e0e.html","5b100472be57e3602afe8f226273c638"],["/posts/5dadd067.html","3a2279929e77914e93c6f1dbbbc8a69e"],["/posts/5ff34642.html","df883f9ca968d96fff250f80543318aa"],["/posts/653abebf.html","072573d477ab16bce69205746cd5945d"],["/posts/681265c2.html","689f51203408d994e78617cec1ec1b75"],["/posts/6f44662f.html","924c49b3dec2919b07d66c4868f514a6"],["/posts/7207f70e.html","f8de4464fbc8e49eadb208f30b1658ff"],["/posts/7289f891.html","f3598d5f779307b524667765ad623a33"],["/posts/732e626.html","634fda5e2f3097a9097ec37ead1338b0"],["/posts/7c4f393d.html","55488d83b8a69f7f497902dce2fd1816"],["/posts/7c825231.html","06bfe44145f1281bf0ec2fce694f51f6"],["/posts/7cd0d214.html","34ebcb1e08d2f0620e980d5295aeef25"],["/posts/7d9071b2.html","b670a8ae31af6f44e390fa0e58cd8e8a"],["/posts/7e13cc3b.html","427eaab4a8cb91e6aee877eb5bb60dc9"],["/posts/80a7ecce.html","090f7394841a8ce7d011e5c6328c7ce8"],["/posts/821a4686.html","088e3726b6564273c99a6edf76e93510"],["/posts/8a741756.html","9260ea05abeb2e2f2c1720f02ad464fe"],["/posts/918d46c1.html","c15a30c61d2b81d901451b514c4e272a"],["/posts/93c8c0c7.html","e888c3e5c57b16bd7b4b7f2496ef3750"],["/posts/9a59ce11.html","003c380a150f9e59f5fddae7bf5f33c7"],["/posts/9f057e9a.html","88939383069a95027678e82ef4adf86c"],["/posts/a7d437fe.html","598249532d822aa92b3be5581df4b4f4"],["/posts/a85c4b71.html","8cf9d7964d04732e168b61ebf7da59e2"],["/posts/ace4e4cd.html","cdcc6b835b2e3f8c025f4374c6c29513"],["/posts/af30ddef.html","ad0fcc43f7b3561ff412045d966d5c30"],["/posts/b1eb9c6d.html","0877cc74962bd8b27d68988fbf1ad09a"],["/posts/b564e922.html","6c39386a2b0a6deb74aaecb38d78b488"],["/posts/bc9a4dc7.html","8f4b6c5f202556fe8023dd65a4acc037"],["/posts/be543a11.html","dfd5e615e04cea4c22c71a0311415c4a"],["/posts/c9b871f1.html","9a172d2a8b9c2200a4c1a585c5d708e6"],["/posts/d6ef11e5.html","1fc5be100a7f58d037837c802f3d3cfd"],["/posts/dcd6fdd1.html","cab33f70bf150aebcdfb74c13290f0a4"],["/posts/de24a124.html","580944148bc5042fb21eb29b16978d85"],["/posts/e25a3e3a.html","195151c8ef6ec3792660a87f809e860e"],["/posts/e32cbcd3.html","d38c6ae5e2ee0d7b8557ad9042a79328"],["/posts/eebbc69f.html","f7ce9b3e5d1e9ed9e6520b2602909739"],["/posts/f08119d7.html","f7a3a91499cbab04c1b753dba0260aa8"],["/posts/f34dbb9f.html","eab7a7c39a1488f821a2304e71d31a26"],["/posts/f7f51423.html","0fd56a7967d7a3b76b336b810d35249e"],["/posts/fbda33d5.html","4db5116fce31c24520c25b51dc3b0880"],["/posts/fd1a8f9f.html","88c045f6f229daad82bab301e46d3f8e"],["/service-worker.js","0933c97e71e8b0e3576f0f5a4cc2ee19"],["/shuoshuo/index.html","25a286c515d7b3512979da46e0492c55"],["/sw-register.js","609bc72e33c8685fe8383d679d3ca1f1"],["/tags/index.html","4c8d82444e129f5caa5d67ba9faab429"],["/tags/【每日早报】-2025-02-25 - 星期二.html","7723037650eb8490d20009e96644db18"],["/tags/养眼/index.html","2630bdc1dc3ca18f50af9380f512017f"],["/tags/每日早报/index.html","829f939b2275070e33f315a268f91a51"],["/tags/每日早报/page/2/index.html","f7adab470bea8ec8dc049b8239647b42"],["/tags/每日早报/page/3/index.html","1cfa876e8a4256fc6cce5730945fb328"],["/tags/每日早报/page/4/index.html","4596d45d4385f74bd9f94795f1df5653"],["/tags/第一篇/index.html","6f261ed637782f84c44d72bae0b47b2e"],["/tags/网络/index.html","795b95efb78feb1de40c626f7f6b9bab"],["/tags/网络/page/2/index.html","67498262b988b35b2bbdfc370ca81073"],["/template/index.html","231bd56ac133d08717e2b4b71fbed77e"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

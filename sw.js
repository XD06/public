/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fd094b20f941ec4b803e2180cb93733d"],["/Gallery/index.html","6df86a5b6c6b431de889f31e32a0d161"],["/about/index.html","a0fae9c5139a8e52332a109435d444d8"],["/archives/2022/08/index.html","d252e4f8d5f1916f32085b890ae18bba"],["/archives/2022/09/index.html","af949693d596685609343b0e2e1cbf7b"],["/archives/2022/10/index.html","227447ae14e0b6d813b9b64b420510ea"],["/archives/2022/index.html","5eb7be87e60dff915ae8647dfa7a781b"],["/archives/2022/page/2/index.html","7c2dbb0fa81e9d8ceac5175bc8b86e15"],["/archives/2025/02/index.html","4ac09caee372b3b204ce3c0dc0f152b6"],["/archives/2025/02/page/2/index.html","fe3a732d7ca8461b13e6b2a6c098d3a7"],["/archives/2025/03/index.html","4059122e2480aae9cfe18c51a490a566"],["/archives/2025/03/page/2/index.html","c23b22575736090daa738500522d808c"],["/archives/2025/04/index.html","fc2fa8fd8cd1c51677e9bf3d65c44657"],["/archives/2025/index.html","3b9d3b1296b10204d9643c14d87fa080"],["/archives/2025/page/2/index.html","54bb5c3dd6e1d9352bf2d09ba60fd68a"],["/archives/2025/page/3/index.html","c319f53d72e7b6d353ac88b017c73528"],["/archives/2025/page/4/index.html","7e5a2973acbbaa2a8efe22f4162b104a"],["/archives/index.html","dadeb01ba84c0561d0c2060a770cc726"],["/archives/page/2/index.html","5f2784849983a2027d5631c096bf2a46"],["/archives/page/3/index.html","7d391ab950b13e82f72f06147f82a3a2"],["/archives/page/4/index.html","c224d6fc17b8516d6a76c224bf4bd51f"],["/archives/page/5/index.html","e1ba7a6be063732ea04ad2ce619f01b6"],["/archives/page/6/index.html","6e92bbe00bb84a2e31ad05c0b416ae80"],["/baidu_verify_codeva-J5b2WWChcR.html","10304d3a5f19f2c8a332133ca101a8fd"],["/baidu_verify_codeva-cwyza0ZFJb.html","9c6acd4525c2a2f824ceacd2ce9f7fce"],["/categories/index.html","1c54711f30336574a5a2043431427519"],["/categories/壁纸/index.html","471108ab8b0dd3c4070480aaf00670d2"],["/categories/机网/index.html","9bb0d500a5d7f58ecf978eee001b4d6c"],["/categories/机网/page/2/index.html","4824819c7b8803a7e30cba56fc2a1fdf"],["/categories/每日早报/index.html","22004d7e18576c29b6e630afd00e2f61"],["/categories/每日早报/page/2/index.html","9953b5c39476870160467b67777d55cd"],["/categories/每日早报/page/3/index.html","78baabe9a8d24d1caa5ae663639433ea"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","5314e9cbb1540671554bf1e75afe8a9f"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","5a4c472068e584f8f16653683fccc3ed"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","78f41e6b98c83a9e4da2b8849847873a"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/python.html","b46a0372b024fd4133157ca673038894"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","634c9d48ba0e724a97486554c6701c4b"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","b2d2f2400e576664feeeca59ddd713a1"],["/link/index.html","0719c45cf83f6e1bdfd2f84a1ace9d07"],["/music/index.html","6921b96d432a1c5305ad49e62a6a5709"],["/page/2/index.html","c070ea4b9154b82852a750ea5278aa0c"],["/page/3/index.html","da234c610acd8dbf0bdf01f4b76b7447"],["/page/4/index.html","4ff58c4fd5432fd03eabf6d732f8d414"],["/page/5/index.html","dd2815f737d146b2f2f9e4e60310a5d5"],["/page/6/index.html","926fd329e58ba05d63f610643b6274b5"],["/posts/12501d69.html","69608aa599557c68a39cf84156fd6b25"],["/posts/1484043c.html","cda07066cec9a13a9b7340fc862ed85d"],["/posts/1b0c78b3.html","69258ac275c7f90b3553551270bd0b4d"],["/posts/1b5b87.html","9fdbd6b2ad81dd274b71858ccc764fae"],["/posts/2134d9d1.html","4a2e6eb1648745053dcfbdb0a93a65d5"],["/posts/28c755c.html","e5e5d3dbe865caa1b2451eee21dedc50"],["/posts/2f77f294.html","3ead22f6febe318ad733fe991203dfb0"],["/posts/330d6f69.html","8c9be252edb195b9f646e47001305dc7"],["/posts/3b744803.html","334cba7b7e7a6b1ca4c20ba12789207e"],["/posts/3da05156.html","9ea15d4c046f88b8df2d148d11da9dcc"],["/posts/3e91e0fa.html","0581b332399e2fa7ca5c00642a77d92f"],["/posts/41c2c0d2.html","3a8bf9246e6904f8595150f376f997f8"],["/posts/46fc5adc.html","f5b9e0ec27fb9a534b9adcc0cf539257"],["/posts/493f6b85.html","c84deb9c75210baa2104e2dab008f3ff"],["/posts/497e40e0.html","3a84b92de44ad77246de2d3cbb901713"],["/posts/4a17b156.html","20ce93cff841d4ea43b91395f593a817"],["/posts/4e2d7b19.html","833d7a36fd3f26ef2718d4afed14691e"],["/posts/4f81eb97.html","6bd967614fab70dac6061c8d8a444b9f"],["/posts/53721e0e.html","e1c4f2657d70f82e03c7daf1d8c8ce01"],["/posts/5dadd067.html","bf96ea6c575a80a4a0d850feef0ac576"],["/posts/5ff34642.html","9c3da4a92338cc22067c2a54d1b35845"],["/posts/653abebf.html","c8880254fd24caa9e4cbed4451892a2c"],["/posts/681265c2.html","b454ecd315f4d77992c874947290d63c"],["/posts/6f44662f.html","acf078592191e3a33fb15c4ba8cfccc8"],["/posts/7207f70e.html","fe4d1875dfe931de69dcc227649f1b4e"],["/posts/7289f891.html","c667cadb3225ba34f70c1474f4587500"],["/posts/732e626.html","173715854a631041b05a3031deb81854"],["/posts/7c825231.html","14cf5f07bc1d2cfb33019a51e7079f21"],["/posts/7cd0d214.html","b20ea9d910a9b48645581738d5515740"],["/posts/7e13cc3b.html","09aa248e50a6030e44f3424f7687e4c9"],["/posts/80a7ecce.html","cddccea6d6a0c65273cd40c74a826bf9"],["/posts/821a4686.html","e9d5839b25351d8ca575f84415787d01"],["/posts/8a741756.html","f6c0b11481710b7bf449d95340220252"],["/posts/918d46c1.html","4d22b7f99672531b814c74d880d38466"],["/posts/93c8c0c7.html","21008a0f09c3b9faafac56076022355b"],["/posts/9f057e9a.html","50ef8a81df9c6b0b13d0005438706def"],["/posts/a7d437fe.html","da896ff05694306f0575b00c18db2ae2"],["/posts/ace4e4cd.html","fbf7127471e078e419ea9c15259cbfa4"],["/posts/af30ddef.html","4419a6370aa6adcc23b52d0f5d439221"],["/posts/b1eb9c6d.html","d1a82fbad8ffe1606d3a526d81742bfe"],["/posts/b564e922.html","19222c0bfd40cee0b1058e98c8a2831e"],["/posts/bc9a4dc7.html","f4c2fa1e9985f1400b37e5c7f13c9dae"],["/posts/be543a11.html","9fee4a01ee64a5a0edc11c29c1a0910f"],["/posts/c9b871f1.html","cf1a6a88c7159687c4e4021f09ca79f3"],["/posts/d6ef11e5.html","f834e8c2a264ee02be9a34005d2dcbe8"],["/posts/dcd6fdd1.html","1f6f4d84c3da174945205b04cfff65c8"],["/posts/de24a124.html","e4b3c740b0407b704f9d1b475a32d236"],["/posts/e32cbcd3.html","6aa8bc7a160ad3ec6f7bb9a11b4e242f"],["/posts/eebbc69f.html","f6809fb9ad1a0f865e36fe329d01bb99"],["/posts/f08119d7.html","1699cf7cfae87e7f5884c88be3e53161"],["/posts/f34dbb9f.html","c33ac4a1a244e80189c217922a24d324"],["/posts/f7f51423.html","8fb045d06e3f89112d048439deb42f02"],["/posts/fd1a8f9f.html","83fbbef393a259a3aa620ca6df05cf0c"],["/service-worker.js","29cb499b376a241a9bc49b2baa420448"],["/shuoshuo/index.html","0dcdf4721ae457d37e57ff6257a5c736"],["/sw-register.js","adaa8be2d879d7dab4a415af176eda08"],["/tags/index.html","12aaecc6022224fa9efaeb9584eb23ac"],["/tags/【每日早报】-2025-02-25 - 星期二.html","8a0fbe860816b40202e977d4e00a7c74"],["/tags/养眼/index.html","f076d544d048873d378078c82a35d8d7"],["/tags/每日早报/index.html","539700b9843a980bec225bad3494f497"],["/tags/每日早报/page/2/index.html","2b2d1b3ddd758289a77f3b84ea222da9"],["/tags/每日早报/page/3/index.html","11b2a2d8edee5cb1a689609fc551b901"],["/tags/第一篇/index.html","f5b87b1678049fd0cd4e0b7d4e029621"],["/tags/网络/index.html","0ee25dc2bd6932b0633a922cbe950a8e"],["/tags/网络/page/2/index.html","eda34a7c33c6ca622ee60208cf43ac87"],["/template/index.html","a7a42b791491465e6649ef6933333d31"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

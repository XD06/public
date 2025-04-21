/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1c8733e288785075d543152c9506779a"],["/Gallery/index.html","c0c14cc55b77d6bb4b01ab724bd957db"],["/about/index.html","37d9d390309fa3a112e89975598bc1e1"],["/archives/2022/08/index.html","4ef930f32b7da4f038f2c08d827358f8"],["/archives/2022/09/index.html","a38d7622302928be9fac2926079227d8"],["/archives/2022/10/index.html","ad19a7950fe84fec1e08564fe557d65a"],["/archives/2022/index.html","a67036b452ccee6d5751536552954d15"],["/archives/2022/page/2/index.html","44dbf03b308158e09fbd3c5c4fe7fa18"],["/archives/2025/02/index.html","490544d1490998cf273ce458f27c7500"],["/archives/2025/02/page/2/index.html","99a7b8cbb6e9c370ad149cbc34bc81d4"],["/archives/2025/03/index.html","56ff36f7a40b1e6a081ddcc702bd4a0f"],["/archives/2025/03/page/2/index.html","fc405318a68644ee0719c21281c91f75"],["/archives/2025/04/index.html","b49a782a60d75ebc0f032713d6cee96c"],["/archives/2025/index.html","d816429ade5d1e6b40253377a312429c"],["/archives/2025/page/2/index.html","a504bd6c614220721f927375a764b57a"],["/archives/2025/page/3/index.html","db5c9867da0fc5841a2d3a76f1ea9a02"],["/archives/2025/page/4/index.html","80d968a1ce482b73abbaad3ad1107d57"],["/archives/index.html","f8e6fb58261ed42be30b7e50b5cee72b"],["/archives/page/2/index.html","d5b1e85e0ab011926ce2f18b89bd9493"],["/archives/page/3/index.html","37c35dffd659a0bc7aa35fdce568edbd"],["/archives/page/4/index.html","bf1705ca8fb45627b9424127f1c50c4a"],["/archives/page/5/index.html","ac46fe6c9cb81a97c24669d416edec5e"],["/archives/page/6/index.html","a01f34ff97efbe8be0a73a535b940f2e"],["/baidu_verify_codeva-J5b2WWChcR.html","fe9a2b725f20e2f8e42430c7de449e7c"],["/baidu_verify_codeva-cwyza0ZFJb.html","54825cd429322547ddee6bb4e82b11ad"],["/categories/index.html","93ee50701ef03bd5c328ff01808f27ab"],["/categories/壁纸/index.html","f14952ecc2fcc6281c0dce0499388351"],["/categories/机网/index.html","4493a81bede649745ffb35def1919ee3"],["/categories/机网/page/2/index.html","42e0a7c1e308743b4c32708469104b5e"],["/categories/每日早报/index.html","5d5aa0370cffdfe28045d24164f28bd2"],["/categories/每日早报/page/2/index.html","c08d46cda9525bc3b1a11c8ae6262527"],["/categories/每日早报/page/3/index.html","dcb2ea445d0b637ebd866ef74e211018"],["/categories/每日早报/page/4/index.html","6611cc3069dde9b4f35c6a047e0d2df2"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","0ecf324311c8d5ede690180890a19405"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","6c79da80aaa4abe6b20c988bc551fec2"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","f69db20895e87a0610785d7070897eac"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/python.html","abada00e66251f61ef02c164c6b43a8a"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.html","6978bc70c1d2d5dc5dce9dee6fa3c635"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","0b1513e31c8a7e44a70ec5a0d53cc7e2"],["/link/index.html","8c92209025a46c7f2e60a885612c6052"],["/music/index.html","008eb1b6f10b23f2c38925c2e7854969"],["/page/2/index.html","e0c8cf678cce1803a46965ddb2e1a369"],["/page/3/index.html","86a1204f327f98790a053df1131629d9"],["/page/4/index.html","809befa4c732ed070041a1f4185c3e3a"],["/page/5/index.html","10d2df3ccc7223cf5773879ca6fc8165"],["/page/6/index.html","b0ab14866224f2a1acb1daff119bb382"],["/posts/12501d69.html","36774dd093e837a26968c34e682a894d"],["/posts/1484043c.html","1eaf9e8ce8dddac7cc52286fc311be21"],["/posts/1b0c78b3.html","f755ab9c884aa5f41a5d9800ec9755ea"],["/posts/1b5b87.html","40bcb2c53f991c86aca1e590cbf36b27"],["/posts/2134d9d1.html","29a0c69ed90e90cfd6bddcc5c32ca118"],["/posts/28c755c.html","84634a54c78dbdb515d53686126f4a8f"],["/posts/2f77f294.html","7acf2b46317444a4921cf14d824a3287"],["/posts/330d6f69.html","df1007adf7440c7713fe836bd421e16a"],["/posts/3b744803.html","013589892ff383f6a3a146f6b7ccf045"],["/posts/3da05156.html","94b86cb5b7496edfe4fe8162e57c79b4"],["/posts/3e91e0fa.html","77076bed61d9a88059869afea1d0fd39"],["/posts/41c2c0d2.html","ddbfeac3e92a0bc188b6746ab743889e"],["/posts/46fc5adc.html","05fdda44ab8952b95c7d27c173b1870a"],["/posts/493f6b85.html","6ce4ffa8751ba5c7e24c38221a0b4809"],["/posts/497e40e0.html","32149f3986515b5b6a25be784edfcdcb"],["/posts/4a17b156.html","b464deb79834408a3aa8b8209dd7d149"],["/posts/4e2d7b19.html","6f45be0e05000e8d0ad7216a01b8f09f"],["/posts/4f81eb97.html","e91a3e43dcfb0ef89c331f73b298ad5c"],["/posts/53721e0e.html","5f12da0a8650874e3e8d40e2f2da62fc"],["/posts/5dadd067.html","efea5e6fff5baa988e1a08977fe014ca"],["/posts/5ff34642.html","d230dcafab19f7c37ba5e682269a0e43"],["/posts/653abebf.html","dc53afd038bbed2f77906f155b03ab98"],["/posts/681265c2.html","74004284282f36cb20287a3273350692"],["/posts/6f44662f.html","6e788196b2ff864b9bcd11f0c120b242"],["/posts/7207f70e.html","3393d567f18fb7979cf819be24af6833"],["/posts/7289f891.html","15211cb509155bcdbaeec1ab3d39acc5"],["/posts/732e626.html","c8299cdcca80b8c68b3cb1b4e79d155c"],["/posts/7c825231.html","cf37e177889d5df3e9b7d75fcb645a57"],["/posts/7cd0d214.html","f940383949c08466479ca74c28c9f063"],["/posts/7e13cc3b.html","f96d00d98dedea9396569cda8e942dd1"],["/posts/80a7ecce.html","836114ad7e54251f969368fd595d86f0"],["/posts/821a4686.html","3c79ca2c344feede6ca6bf3cf3eadd09"],["/posts/8a741756.html","c0e1779457968bbc566f4758a953a654"],["/posts/918d46c1.html","f3d4d53b15837eb56957046fdfdf180b"],["/posts/93c8c0c7.html","7cad8903068d7fd5db68c1489fa0e009"],["/posts/9f057e9a.html","4b872a02386e62dc463d6bd80f833be9"],["/posts/a7d437fe.html","546668e1e29913e5e94733744cb0bb3f"],["/posts/ace4e4cd.html","005c9b4d74136b14bc23065e0473379e"],["/posts/af30ddef.html","c7cef69a385ac2aa8cf814a79a7f2c7e"],["/posts/b1eb9c6d.html","1586dd214567253c92d83c1acf25e63f"],["/posts/b564e922.html","55ec5fbf9babc6ca1b8af05a3f535662"],["/posts/bc9a4dc7.html","8548053105ac53673c29d5849a92037e"],["/posts/be543a11.html","91fcc62a3d095a69578a7edc7122d6a3"],["/posts/c9b871f1.html","d833361482d0b6d46504748103a52f45"],["/posts/d6ef11e5.html","ea78358e43b8696cc9eb8eb16e5f24c2"],["/posts/dcd6fdd1.html","5c6bca308ee50e0d0ce5a1dae27f5344"],["/posts/de24a124.html","658b12446ab7292587cfef3e4c2b9a75"],["/posts/e32cbcd3.html","f6102a2ef6484da277753e3906b9b898"],["/posts/eebbc69f.html","81e191396d92c2913791ebb164602eec"],["/posts/f08119d7.html","b171e5e57b0f1a5b443254d2bfc96987"],["/posts/f34dbb9f.html","d1326639b4faaa7942b70e02ea238189"],["/posts/f7f51423.html","1260c182827129567482642f8e30aed4"],["/posts/fbda33d5.html","c004e8f2b961a0cd6225b68219d5450e"],["/posts/fd1a8f9f.html","21b1b7dc3b0338f7c29e26dc8f6ec228"],["/service-worker.js","c2323a6a5451d378825c17de3f54ad2e"],["/shuoshuo/index.html","fa9a35e6801d0c375e3502649955175a"],["/sw-register.js","12f681531ea0dccc143a1debfa7cf541"],["/tags/index.html","6ca0ed79d89cb928f357ad289249de12"],["/tags/【每日早报】-2025-02-25 - 星期二.html","f6dd8260c087f5b9111a39878bcc68cc"],["/tags/养眼/index.html","daeecb6b6b5a301ff1e0e4bcfa9bd806"],["/tags/每日早报/index.html","78af3898808bdd64cd520bbe50c19828"],["/tags/每日早报/page/2/index.html","4766217ae69f143512c055b44ca274d2"],["/tags/每日早报/page/3/index.html","885ca12cd3518d496deeb87c30e499af"],["/tags/每日早报/page/4/index.html","04e738ae2b4a72f6be95afff8a02b3bc"],["/tags/第一篇/index.html","d81a7a5eb18e4d2fa28de722c9850ac9"],["/tags/网络/index.html","5a1439ff4d299f26a8a0d5ad0a5b5a0d"],["/tags/网络/page/2/index.html","00846af82bd55e3d6a8ad2a3c9f2fa6c"],["/template/index.html","b3daa14bd98bad4197f73d08a9b1544a"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

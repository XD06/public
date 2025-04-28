/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","81ebba6da53235ae81dea364ba038421"],["/Gallery/index.html","6cc390025210cf03534e34f753e6a645"],["/about/index.html","4afddf7ee7e9444651be1b68b9090363"],["/archives/2022/08/index.html","5df2e78cddb85bad6104d2fe3826f7e9"],["/archives/2022/09/index.html","d23c6abf559e01bf33cc3f228856f30e"],["/archives/2022/10/index.html","3fc8fe15f26695dd83880e4466ce5aba"],["/archives/2022/index.html","1f44ee9e9845242ad0a3086444b586b6"],["/archives/2022/page/2/index.html","1bacf27a0ae51d9ffdbd2dac390e5e97"],["/archives/2025/02/index.html","76589adade8fe1cd3dc9e14f00e7857d"],["/archives/2025/02/page/2/index.html","15a6d8989fb992e4d85c38a677c2741a"],["/archives/2025/03/index.html","5d508ca08655fd888fdf696a65417dcd"],["/archives/2025/03/page/2/index.html","9c5efa3bc05c2815eaaa9224aaf31119"],["/archives/2025/04/index.html","fad92217db4bfbb63ecd515a5dd4e625"],["/archives/2025/04/page/2/index.html","dcb53b3a4efc4be37caad5898be4881f"],["/archives/2025/index.html","b85d05057dcec86c782f042558e447fe"],["/archives/2025/page/2/index.html","8432b7ba486e1b8ec1ea422e5ff8a0a2"],["/archives/2025/page/3/index.html","bc1dd60b9a3a5e067b1c10593710df5b"],["/archives/2025/page/4/index.html","001b350acd4188ffcaf59693aea22664"],["/archives/2025/page/5/index.html","ddf957951518f863d3f68fe97267c189"],["/archives/index.html","76b8d73cb2329b1318578ad441e60dd5"],["/archives/page/2/index.html","2caf22dae7d01c483b6eac065dc17f75"],["/archives/page/3/index.html","002a848ac600e89b1ffdddff66794abb"],["/archives/page/4/index.html","c5cc2949e9c723817a55c5e80193854a"],["/archives/page/5/index.html","9af9230c6ce4c732cc8e94013f1c9f33"],["/archives/page/6/index.html","9d363c83d95ef6d32ef35e6b2814f5f6"],["/baidu_verify_codeva-J5b2WWChcR.html","6582c323763a7ed34e9f12752efdf475"],["/baidu_verify_codeva-cwyza0ZFJb.html","d1ec3a70fd51c437e729a4405e9b7e01"],["/categories/index.html","46812f128f41df3cd3c643e27e2fd13e"],["/categories/壁纸/index.html","04904c606024d988383323d96c8ad6df"],["/categories/机网/index.html","a0b74e455428760bcc81d4517a8ec227"],["/categories/机网/page/2/index.html","18aecad2b47721205e649788be1e1de3"],["/categories/每日早报/index.html","02f17c1376770185b1f07e392bfb9242"],["/categories/每日早报/page/2/index.html","1148fbb1e6f1d47ebdba4368f4dc620c"],["/categories/每日早报/page/3/index.html","2a6a1c97ce579f644fb8ac09457d4c59"],["/categories/每日早报/page/4/index.html","083c4e2150cb8b0ea8627d5174a35076"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","33ca4e1262a2b3ab16948d9300ddddf8"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","f9ff4ade87464ebee3a279a9a7905804"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","fc9533f7caaf837a884415fc8f35b699"],["/js/ai_plugin.js","43d6bc012401e93dea59c31b742718ac"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","990a021e98fa1a559665d2139a0eb130"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","41c04c11ea88c8b294cfe550979d694f"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","22e0ff1bd4c26e3b988d235da45eae4c"],["/link/index.html","8db6c90d60e9354efcc3c81870b02c20"],["/music/index.html","0dc2c3434973a1dd2849bf09f9c8bba3"],["/page/2/index.html","fa760c8b4d13cbfcc6ce95baaa398a53"],["/page/3/index.html","9cfb2917c8a80e6e69426f4c87d2f436"],["/page/4/index.html","ceda16dff509f29fa0bcfd644b96ff08"],["/page/5/index.html","14a065701170575b8b84b83e0ed40fd8"],["/page/6/index.html","385a4e68937044805d01eab3ac875d61"],["/posts/12501d69.html","7b3602f7707abddef1cca7aafaa6c4e8"],["/posts/138fefbc.html","047c863c933182838284c9beb86be2a6"],["/posts/1484043c.html","695b062b2aacf6d3ec04d3d5fe625550"],["/posts/1a3d44c.html","5871251dd2564fa021086a642950ea61"],["/posts/1b0c78b3.html","92ddbad5433952737a00f434afd32f66"],["/posts/1b5b87.html","99c87a072874181223c4f669287a9a14"],["/posts/2134d9d1.html","a53a5d92ab908da106113b4238361e62"],["/posts/28c755c.html","a2e0585109db70c5d6bf82553971cd78"],["/posts/2f77f294.html","3a55e768ef0818c1e5627f0bdc398a4f"],["/posts/330d6f69.html","b7396b3083b7e88e87b990c7c9ea6d8d"],["/posts/3b744803.html","bf78168428e9057481afabae0a45fa2a"],["/posts/3da05156.html","189788b4e76ff9973edaf49d802ab257"],["/posts/3e91e0fa.html","66fdfb45093b4e6dd228fb29dd14ee7e"],["/posts/41c2c0d2.html","52ef1968a6e69c57cca10df96587e344"],["/posts/46fc5adc.html","2ff9d0fd218919fe2d7077736047fc8d"],["/posts/493f6b85.html","493bfbb678c0ba247fa2c053c2676289"],["/posts/497e40e0.html","d38bec2f2b3f4e5d1af3eaf8a39bfd40"],["/posts/4a17b156.html","29b15fa04f8bb7e31af3343efef7796c"],["/posts/4e2d7b19.html","2049dce355762d29f4a80417bc32c1c1"],["/posts/4f81eb97.html","cdb9cc17d209d7c2dedb5b3f54aee744"],["/posts/53721e0e.html","b2727930661c6d3b86fb6fa597fddeb4"],["/posts/5dadd067.html","5f9613f6f560edcad92c3b0d4dc972f3"],["/posts/5ff34642.html","fa5d1ef9ae359266aa601a6780221442"],["/posts/653abebf.html","43afefb4d0f88aaad139ea3e2893a9bd"],["/posts/681265c2.html","2cf8dc01dca0ed8e6a99c5b53e949475"],["/posts/6f44662f.html","d7b60c71be37ac28717bc376bf227fff"],["/posts/7207f70e.html","27d41e8bfe4035c375290833677f9a70"],["/posts/7289f891.html","762c484962425825d5628e400b7c4fd0"],["/posts/732e626.html","715a28e84cd4ff4d1c511e0f1a372b53"],["/posts/7c4f393d.html","29e90e7cd1436b4b1f35ed7405b54f67"],["/posts/7c825231.html","5a374663653d90c1b29de58ba0746b77"],["/posts/7cd0d214.html","e27d42634bccdc63e31447843c947cc0"],["/posts/7d9071b2.html","6b11f5811e050c8b295afaaba518ca5c"],["/posts/7e13cc3b.html","e0f4d6bf2142943c03548933ef58b3e4"],["/posts/80a7ecce.html","2726b304c1216312720ff34ec0835261"],["/posts/821a4686.html","0745ddb1c65ed9c0db5b904a0fedab39"],["/posts/8a741756.html","dfce6615aa0e4bbdf86bf0d4ac595def"],["/posts/918d46c1.html","e38a024ad3390b00db2cc102938f245e"],["/posts/93c8c0c7.html","051ba4df2ef97c15187d0cba4e33d5b7"],["/posts/9f057e9a.html","60b3670d4526ad54d3e78ee751387285"],["/posts/a7d437fe.html","b297bab50b3f8e5fa4a7a967dae2d9f6"],["/posts/a85c4b71.html","8e75de2c3bd86247235e66d8cc851d30"],["/posts/ace4e4cd.html","91dbd820efaac90bc3645e9644799927"],["/posts/af30ddef.html","9393b5e3bf8ca73df7d47839d370c239"],["/posts/b1eb9c6d.html","ed97847dbd2476ef16d8b6f5f95db001"],["/posts/b564e922.html","2df41f62107803aa16061908e9294983"],["/posts/bc9a4dc7.html","47aa000014a1d75be1da539062ed8049"],["/posts/be543a11.html","736fd9b6a54258bb861c5d08a6215c59"],["/posts/c9b871f1.html","0013bae3f8691a91ff323476c1c8049b"],["/posts/d6ef11e5.html","7090652ac266feb618c034ad38f93aa1"],["/posts/dcd6fdd1.html","59c310d87b67e92f6ff56eb6e888b912"],["/posts/de24a124.html","d66a22535297356b0ebf345002315fcc"],["/posts/e25a3e3a.html","207a224a0f9c56e20cc86144e313e596"],["/posts/e32cbcd3.html","2c491f1581fd3e7621f8e9dcf8bd0a4c"],["/posts/eebbc69f.html","26f3bcdd2077960b53d59d7a0f6626d8"],["/posts/f08119d7.html","480cd59329b3adbab885ffe7761c4139"],["/posts/f34dbb9f.html","e077cbfac82dfd18d0bdd1318bf28ac3"],["/posts/f7f51423.html","7711d7a9703ff2051870606e259b5323"],["/posts/fbda33d5.html","7dd1003cb622dfc29745f1c4016a5fb4"],["/posts/fd1a8f9f.html","a2a0a19d6cccfd81a4160eea85443880"],["/service-worker.js","6f275854603821dc0c7a86d213986f4a"],["/shuoshuo/index.html","547df9f8125e755da7a8b7fb9843c437"],["/sw-register.js","52efbbe0bf54f4ea004582b208b242e6"],["/tags/index.html","43585d4853283639b55fe09458301479"],["/tags/【每日早报】-2025-02-25 - 星期二.html","66b157d22527437c357842f00acab6ce"],["/tags/养眼/index.html","ea782096d6ed10cadce59306c36b18c1"],["/tags/每日早报/index.html","b3d7e58dc6dc2c5267fdd2400c45e0bd"],["/tags/每日早报/page/2/index.html","09b139afedcba894d34687727e0d7dbb"],["/tags/每日早报/page/3/index.html","887f8c0fa5bbb7fb1249d2263d6c1fb5"],["/tags/每日早报/page/4/index.html","7af66f5c37cdf41d5e541c9d345304d3"],["/tags/第一篇/index.html","b609818690002fd5279ef1bfd94b2f42"],["/tags/网络/index.html","9531995b5aed4aca3fbc04450b8c02a0"],["/tags/网络/page/2/index.html","fd2bacb1df1a881381f6c002c210991a"],["/template/index.html","7afdca9f83879cfc1ba5a40a199960ba"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

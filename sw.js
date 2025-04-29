/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d8d8c562e30b5d56663af9fbddd77146"],["/Gallery/index.html","c981d22624c7f92802632039adfedd1f"],["/about/index.html","e68779bd2db5d40a861926995f16471f"],["/archives/2022/08/index.html","6d0f0cf3f6910386ac9642db8cd9e4f9"],["/archives/2022/09/index.html","cb005f150bc3896c51f05a6a542cf023"],["/archives/2022/10/index.html","e4603a891844490387dfdb74eb116809"],["/archives/2022/index.html","52720c4686e81112f6cf771035a6be35"],["/archives/2022/page/2/index.html","654640edf3652529c24219d104eadf6f"],["/archives/2025/02/index.html","56fff24fe131d5448937f4cf06039a2a"],["/archives/2025/02/page/2/index.html","4c069fc01485c559f97bca1dc3aefc36"],["/archives/2025/03/index.html","335fa52de572cdea1afcd7b06bed4e7f"],["/archives/2025/03/page/2/index.html","e3088764423ca6f100bea54eff92dae5"],["/archives/2025/04/index.html","65e8a20300ebb2d1b1b50d974309d8a5"],["/archives/2025/04/page/2/index.html","c68dd882ec8992bbb1f857840a3e3a81"],["/archives/2025/index.html","bff1c7376d1e822782f04b7bedc2dda4"],["/archives/2025/page/2/index.html","43e7a0c8c84ecef99ae870fa0a58b9a2"],["/archives/2025/page/3/index.html","614b51a6ed3b7dd180512c3ee8696520"],["/archives/2025/page/4/index.html","1d8437413ebfc080b0d079ef2bbd572c"],["/archives/2025/page/5/index.html","116dbbf1b3d9340ddc50e95f415f8f65"],["/archives/index.html","1663fc88d8da75482e02d72e4ca7fe5f"],["/archives/page/2/index.html","4e47a3a9185a8bfce0448b637201e374"],["/archives/page/3/index.html","917962a61dfba681aea6e92d752cfc56"],["/archives/page/4/index.html","32c69d02f462a7d56ea48e6e75743233"],["/archives/page/5/index.html","854dc7af89efcfdbbba4d53ab6924ed6"],["/archives/page/6/index.html","244066109cedaebd3d5b697b01dce770"],["/archives/page/7/index.html","8a5968f9c7e8ff280a5c2ca67bc2b661"],["/baidu_verify_codeva-J5b2WWChcR.html","682760ee8a44adbb1fb3739df9f34df3"],["/baidu_verify_codeva-cwyza0ZFJb.html","19c2feacbdb682ee80419978b9f5b157"],["/categories/index.html","512fdd209df3edd0c8e19186d6b10fde"],["/categories/壁纸/index.html","40edc7379f2aff8ea64a620aee441076"],["/categories/机网/index.html","33ca7a9dfb56dfaa7726416024c141ef"],["/categories/机网/page/2/index.html","77e6cb7746d29398515ef951eba0acb8"],["/categories/每日早报/index.html","8d716fe1b3b34dc16e11ce61ee4fdeb0"],["/categories/每日早报/page/2/index.html","3e38f3e068694732b71cbc1887892b03"],["/categories/每日早报/page/3/index.html","d21c44efab2a2219b000935b0410779f"],["/categories/每日早报/page/4/index.html","6fb5aa5e31dfd00446e79efa858908a9"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","b7214adf5ee951cb200ba2d8fd2afff2"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","14cc09122d832b760bb5859de5d25f50"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","f42456db1aa0ae126a08bb2d3523d253"],["/js/ai_plugin.js","0a199a02c56ecb46b0fe60e869a32317"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","febd6e05e44aa7bd96a712fdff45be64"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","f44fde42ec3de3f6b5c8c7586d6e6ac5"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","42b5509730d663e3edb7197d059f5525"],["/link/index.html","2dcfbdcf60304c70f0ee65388f06b624"],["/music/index.html","55c21f05f8a38b1b849fedc4be9b1d83"],["/page/2/index.html","d3321bb179d5f68ff1215776424acdbb"],["/page/3/index.html","6aa8f05e5bcd3dac9212c453776f84e8"],["/page/4/index.html","c0eb04cd761f2b35ae8275ec5cb9cdcf"],["/page/5/index.html","5f0b84d2de8b1be8eca6086cd5549e80"],["/page/6/index.html","760dbb9f851b275bef3a8966dc9068cf"],["/page/7/index.html","0f389bd570eea5c3c04276deb0bc5ba4"],["/posts/12501d69.html","a209e2fb86e2d40a358b35f25070cdb6"],["/posts/138fefbc.html","30c75da54b3df62ac9c31e8ff9f8f226"],["/posts/1484043c.html","de57997a48ac8629e4e7c74090f80d9d"],["/posts/1a3d44c.html","eb604eb00be412180b6e75ccd5b24acb"],["/posts/1b0c78b3.html","c801d26f7ae6da81d98d24072452aa45"],["/posts/1b5b87.html","fd34133ac134896f418b478a0faa168b"],["/posts/2134d9d1.html","b97833fbc784b6715a5685a619ced984"],["/posts/28c755c.html","0af020e0b7ce83abd767218eb9f1a3e5"],["/posts/2f77f294.html","c5d0bca7a838154fd9a84fa1a4d4f007"],["/posts/330d6f69.html","0085b85de9a504d4895b9c43bcd7099b"],["/posts/3b744803.html","799c500bf2e60ca3d682b7913a98ec57"],["/posts/3da05156.html","3e7e70b90601b3a54a32387028d5e78e"],["/posts/3e91e0fa.html","195c57f612bcde2f8e112d783fa19db4"],["/posts/41c2c0d2.html","07b473510d435775e9f9a7e8b0134312"],["/posts/46fc5adc.html","8c8200f2a0bcd1a43ffbbe95f85fefd9"],["/posts/493f6b85.html","3491dcfcc8e428558cfcef94c86b62f7"],["/posts/497e40e0.html","51cac24a8fc5c6f6cec5b1d1fb5e118a"],["/posts/4a17b156.html","dc5b5c0a45f7373b27a0c0e955e54274"],["/posts/4e2d7b19.html","2998d65d2dcffd8a19fa39cb3cd5b921"],["/posts/4f81eb97.html","75e120775b473550f5cdc30af15b1631"],["/posts/53721e0e.html","9d39253e60416726590ec37e1bce029a"],["/posts/5dadd067.html","3a2279929e77914e93c6f1dbbbc8a69e"],["/posts/5ff34642.html","3ca7d930dd1bc82a2617b88c89ee3010"],["/posts/653abebf.html","24cbad9a4f2886a1c172fcba8d5f4bfa"],["/posts/681265c2.html","a8c12426dd2032641485180fc2b7f0fc"],["/posts/6f44662f.html","924c49b3dec2919b07d66c4868f514a6"],["/posts/7207f70e.html","45027062e6266034478d337d7b25044a"],["/posts/7289f891.html","67170d7d0858d266db8936114444c906"],["/posts/732e626.html","3ba989532557c0eb82193d7f57958f0d"],["/posts/7c4f393d.html","55488d83b8a69f7f497902dce2fd1816"],["/posts/7c825231.html","06bfe44145f1281bf0ec2fce694f51f6"],["/posts/7cd0d214.html","34ebcb1e08d2f0620e980d5295aeef25"],["/posts/7d9071b2.html","b670a8ae31af6f44e390fa0e58cd8e8a"],["/posts/7e13cc3b.html","a893c3f5a1152a769d774233efbff0ce"],["/posts/80a7ecce.html","c340d752e0b5c813f4d8c50ed7ffb5de"],["/posts/821a4686.html","2905aeda53dc3bc72749e2b4c5f215ca"],["/posts/8a741756.html","dd08864f0f3cc5a2cfa0503a364da1cc"],["/posts/918d46c1.html","e8397ebcb166440b6b4ef518c5278d97"],["/posts/93c8c0c7.html","e888c3e5c57b16bd7b4b7f2496ef3750"],["/posts/9a59ce11.html","304f0d88d846e9e2ab4df3cd99662134"],["/posts/9f057e9a.html","cc000694b8eb440668450eafe041c39a"],["/posts/a7d437fe.html","598249532d822aa92b3be5581df4b4f4"],["/posts/a85c4b71.html","8cf9d7964d04732e168b61ebf7da59e2"],["/posts/ace4e4cd.html","5455a3e8fad14689e8ba7ce60abaa9c9"],["/posts/af30ddef.html","ad0fcc43f7b3561ff412045d966d5c30"],["/posts/b1eb9c6d.html","216ac0b9ef9142bb02e1b822751514f4"],["/posts/b564e922.html","6c39386a2b0a6deb74aaecb38d78b488"],["/posts/bc9a4dc7.html","8f4b6c5f202556fe8023dd65a4acc037"],["/posts/be543a11.html","dfd5e615e04cea4c22c71a0311415c4a"],["/posts/c9b871f1.html","f03d9ff3b27f5354fba2f7db68b6376b"],["/posts/d6ef11e5.html","0de9a8b1e5a881b1cc3885399e6b180b"],["/posts/dcd6fdd1.html","e334cf331100ef4b409b6a63bf06cbab"],["/posts/de24a124.html","7e454040c939aa3d94243809f62dbdd5"],["/posts/e25a3e3a.html","195151c8ef6ec3792660a87f809e860e"],["/posts/e32cbcd3.html","40507bf8ccb29ad622578d7bc0ccb3d7"],["/posts/eebbc69f.html","f7ce9b3e5d1e9ed9e6520b2602909739"],["/posts/f08119d7.html","2166ddb07dde82f9a1b22c61f313c31c"],["/posts/f34dbb9f.html","eab7a7c39a1488f821a2304e71d31a26"],["/posts/f7f51423.html","83568ed193094a64f0f0925d4157707c"],["/posts/fbda33d5.html","4db5116fce31c24520c25b51dc3b0880"],["/posts/fd1a8f9f.html","88c045f6f229daad82bab301e46d3f8e"],["/service-worker.js","614353109a05851a49d572a4244779d2"],["/shuoshuo/index.html","041ece50b2b725859b26520c41d4e692"],["/sw-register.js","cbb9f3cf73d1c1ff6fe736d271bfa975"],["/tags/index.html","a4e2c4b7f4c3111303f4b25502c49ae2"],["/tags/【每日早报】-2025-02-25 - 星期二.html","61e18a4bffeeaeef26ca52cdf27c07e4"],["/tags/养眼/index.html","1e0c8be2da46d8c3c859d4b22fa1e89f"],["/tags/每日早报/index.html","41165782a0b7c1e4cb6e59b7a0aacf96"],["/tags/每日早报/page/2/index.html","16781a555c254826f116277a432ddb27"],["/tags/每日早报/page/3/index.html","bfb5e612121161d24e366ba19cfc3aea"],["/tags/每日早报/page/4/index.html","02d49149077847093538b0c31351c62f"],["/tags/第一篇/index.html","615d7b52ea97560d2d4628a8a58f2cfe"],["/tags/网络/index.html","55b6d91bca3b4fbf81a8bef7c95b1592"],["/tags/网络/page/2/index.html","b409c79806fd41a4be1a62a54acd0527"],["/template/index.html","81b6a8fb138d4ab2dcf0af20f3592d0e"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

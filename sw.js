/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e750a0c40358183cfc7a8b236d19249f"],["/Gallery/index.html","5c6243120b02bf1c9b791ad518cf4dfb"],["/about/index.html","f1a78599014606d855ce93e84f7857b5"],["/archives/2022/08/index.html","3b4699b1ca7fc0bd1a8494904d0e3943"],["/archives/2022/09/index.html","3f70851ff08b5e6445621860ab300b55"],["/archives/2022/10/index.html","7d5a8f6c1e155c980d95497e454a4278"],["/archives/2022/index.html","c3ae1c094488dbce80da00438613ba89"],["/archives/2022/page/2/index.html","48a654318106cdeeac09c2ddbf581b49"],["/archives/2025/02/index.html","f83827b9818e6179c52880e3720eca98"],["/archives/2025/02/page/2/index.html","25db7d107b7ae4603d1bf7273a944555"],["/archives/2025/03/index.html","9ffd9cc73770292c1419b7c056ac7a7c"],["/archives/2025/03/page/2/index.html","2658e3339bf64bf8939d3ef11f0838ca"],["/archives/2025/04/index.html","0f42d1e678e16b3e224e1ccf7d6023bd"],["/archives/2025/04/page/2/index.html","1f999166d0ccee1ac029610e8700b220"],["/archives/2025/05/index.html","c6b513afdf898d94c05198ad14974d1d"],["/archives/2025/06/index.html","5598ff1b29c17225b48dc181e0498e7c"],["/archives/2025/07/index.html","3fa177d940f5ade2fd6e3b3c80dc33a3"],["/archives/2025/index.html","14626bf749ccd11b6bc0048e47870a1d"],["/archives/2025/page/2/index.html","4c5302e82b397f2ac9fe2b88958882ca"],["/archives/2025/page/3/index.html","938c9810abcf8669d5dd8e3c08ae1d37"],["/archives/2025/page/4/index.html","c343a871c282952d933d2c33c5f74d19"],["/archives/2025/page/5/index.html","bf4d177bfcfafdbc491f3e31ccb0dc04"],["/archives/2025/page/6/index.html","d540e772a9fa3a87c4513aeae67b5b76"],["/archives/index.html","47acb2b27e8f6f9d8e37bbc2fa3005b5"],["/archives/page/2/index.html","f94fb209b90a36d0abceaaf39a099542"],["/archives/page/3/index.html","ef82c3754a9e76df5ca5de78365a2c91"],["/archives/page/4/index.html","e4a9289f3071d5012a03a721dcbe8816"],["/archives/page/5/index.html","5e94e7b1d39278d7fca475ddae407032"],["/archives/page/6/index.html","68c2da09991b2f43a0ca60703f77f148"],["/archives/page/7/index.html","691620d59ce6a7d6281d1a500fc8f0c2"],["/baidu_verify_codeva-J5b2WWChcR.html","80678c3257a30828e4666396ee1d5162"],["/baidu_verify_codeva-cwyza0ZFJb.html","885cc6ea1b9c7966704f5a598900665f"],["/categories/index.html","fbeb916ed86836af8b34f425e97f8638"],["/categories/云原生技术/index.html","28fe84b7ddd117de950c51583d2b3b2c"],["/categories/壁纸/index.html","c407240b8f79b90f1eff72746d62bff3"],["/categories/机网/index.html","95241f717459765fe240b51a5df82e86"],["/categories/机网/page/2/index.html","6ac45e8e902ca807aa3b495770537740"],["/categories/每日早报/index.html","01e4a0126c9d9dae58399a6895b40b73"],["/categories/每日早报/page/2/index.html","a9445d6b536c062495a4f43b209f9512"],["/categories/每日早报/page/3/index.html","77dffd4af6e6b4420f989b18fbe0c619"],["/categories/每日早报/page/4/index.html","95bfecfbeb640540c2c01f670fe67440"],["/categories/每日早报/page/5/index.html","b8c4acf7c0bbd5971fd8c9c49f062357"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","b72d3f038bf6b2d7fd6184ed2c673fcb"],["/css/mbg.css","c5fc4b0502c3fb4cd1a110dce934965b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","6058eaed4f34ac602c07414ae36aef12"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","7d84e0d1c5192296131319189210cd28"],["/js/AI_a.js","60191a34939dd3cb43c1fde6d17a3ab8"],["/js/c_token.html","9229f857e13eca0620aeb8639f07a0e7"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","ce8fd52edc16df22081ab95e537e62c5"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","a17709d26490c9bea7403eb4392996e2"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/keywords/index.html","590c117cd483665c09dfd2b5252bab9f"],["/link/index.html","e465a49b56656e5df73241deaff66241"],["/music/index.html","ab7af3a61d2878940d124549b8aa962e"],["/page/2/index.html","dfb956bb28e055839e39fe7dc3e77c92"],["/page/3/index.html","a1659d1811bae23f88577e723f7f21a7"],["/page/4/index.html","5fbd02a723f19bef51f4b7780e630d66"],["/page/5/index.html","b7299c5a5f362be9a39a0c51433ee11b"],["/page/6/index.html","21a5bc3233a2416b15629691d639da35"],["/page/7/index.html","3cc7bf67f140692f39a9a94e26cdc00b"],["/posts/12501d69.html","fa2a3500790513a0c0552255173dea48"],["/posts/138fefbc.html","fb5715b8349e8d9c7fd155849a134161"],["/posts/1484043c.html","b072bc5abd07876bcff424eb5fa976aa"],["/posts/1a3d44c.html","ce436a4a172e03cd259f86618368010d"],["/posts/1b0c78b3.html","e0f315443b09e381f779a434b93caf1f"],["/posts/1b5b87.html","9fbfb7fe16fdba9e7bd9fcc7b3f37a4f"],["/posts/2134d9d1.html","e95b24ff6cf606ebe07fe5e70be38221"],["/posts/21fabcd8.html","43dc0e7e008f5e2377eb48ee9429c041"],["/posts/28c755c.html","015b922ae73257c945ea6c5a99964349"],["/posts/2f77f294.html","71aa4c03939120befaf18a37f0b67a94"],["/posts/30621cc0.html","643b0989cd55f36640c4b910d1bb5d36"],["/posts/330d6f69.html","855927616b3d67ab30b7af92044e305a"],["/posts/3b744803.html","64aad7020fa29c8377b08affa66b4650"],["/posts/3da05156.html","f058e0a1fd56fc281a60d3a84b624bff"],["/posts/3e91e0fa.html","b91b77adea5de3e06e2d28dd71aeadea"],["/posts/41c2c0d2.html","4d802f592af5eefef43918c21bc57c5b"],["/posts/46fc5adc.html","c2cc18d53c4fb8194ce2f22099eb1970"],["/posts/493f6b85.html","53c180596db24f7752f112a4c870fa96"],["/posts/497e40e0.html","63e92230a0411b4cd2ab48e2f39b1500"],["/posts/4a17b156.html","f256d30d0994eaa4dde4786b35dc5d04"],["/posts/4e2d7b19.html","25091d9023e53ae24d9e6bc215750125"],["/posts/4f81eb97.html","1147bbc05ae6480902cc7ff6b45d2cf3"],["/posts/53721e0e.html","93abe39966d55451126ed116a6ec0176"],["/posts/5dadd067.html","9a4f7743551522ebddd226b3c4d418fa"],["/posts/5ff34642.html","19e0a474e9b37af5a970c4c5aca7924d"],["/posts/653abebf.html","f7e09f5f600c513982681d0853c3871c"],["/posts/681265c2.html","7bf5d57f7c7a8c41a96f8b8fad7b54a5"],["/posts/68a36c37.html","a192d19b80289b7efd81acc074e4deb1"],["/posts/6f44662f.html","95dcad56dda34ee53de4680168107650"],["/posts/7207f70e.html","021eff95ae939c371b4a2b3b2bfdd7c1"],["/posts/7289f891.html","0fe682db0533bfec83c0bcbe2dd549cb"],["/posts/732e626.html","ad354637ea08297d649cbd522f4e96fa"],["/posts/79c78bc9.html","29fa8f627e420eaf21fe464041cc48fa"],["/posts/7c4f393d.html","4faafa64ce1ef08de56fcd98146f46e2"],["/posts/7c825231.html","a4c94a245c9e974ca52f251dc87849f2"],["/posts/7cd0d214.html","b8433f36d9fe2fc7bb41ae6545ce7840"],["/posts/7d9071b2.html","aa3ee530e23c0ee5b9b5ef04281e3ea8"],["/posts/7e13cc3b.html","1abbfe6c56552151068c70a524fd1d92"],["/posts/80a7ecce.html","e9a3dcea116e05e739519bfe13171064"],["/posts/821a4686.html","7cc22b81c46810d284d5181a5c316438"],["/posts/8a741756.html","2bec7bcde680e9e1bfb67ada7fb0ddda"],["/posts/918d46c1.html","9fe248cf657647d146ea274818e43e2c"],["/posts/93c8c0c7.html","dc2043b399cf742fcb8a5f7818e9f9f2"],["/posts/9a59ce11.html","8d9783069256524976c3091bd98b68e6"],["/posts/9f057e9a.html","0e8843ec207b2cfaa3e8f27a3d66469f"],["/posts/a7d437fe.html","49c32ef67ffa527e164392671408b636"],["/posts/a85c4b71.html","48629b011e46e502c3e7646b0164831a"],["/posts/ace4e4cd.html","beaec43d7fbdd653d05600a3f8945a56"],["/posts/af30ddef.html","2f107231769852926fe37e7f42efbef6"],["/posts/b1eb9c6d.html","630681f57eed09bf37d7be6ebde5ca37"],["/posts/b564e922.html","ca81b14f691c40e57b6a091faa18da70"],["/posts/bc9a4dc7.html","d190e86e214b676d98863baf97d5cf51"],["/posts/be543a11.html","1f8be9c287a502408adea2cef5cd4496"],["/posts/c7170176.html","286ccf642cdaef71540db41221410831"],["/posts/c9b871f1.html","5357105279c21c928697109bb3b0aff9"],["/posts/d6ef11e5.html","9c24a8efd80140e04e785b60eec9c579"],["/posts/dcd6fdd1.html","6a35b5d15867e85fba065467a0dd4d9b"],["/posts/de24a124.html","421fe0d79cf28722bc4fc7bf30d6b0ff"],["/posts/e25a3e3a.html","bab022f8e146f2f8ef35c6b2803dd013"],["/posts/e32cbcd3.html","759011d432d8b4f59ffb1f224a71240d"],["/posts/e60dc441.html","de4002bc0ee373aa30587fca2c13ab53"],["/posts/eebbc69f.html","d7445031cd3877e7c79004adf9a3ac2a"],["/posts/f08119d7.html","65fbab934c30a91ad5287e7cbbccbe7b"],["/posts/f22f4e18.html","795daeb81e53556875c706d333cdc609"],["/posts/f34dbb9f.html","a2ab7f8e4803afb6478814ddcf28986c"],["/posts/f36fedbe.html","55395cd5bf896e9224c1afa2fe0abed4"],["/posts/f7f51423.html","f3ed92f8117e91d17570c7576639e243"],["/posts/fa75ad5e.html","b726a05929ceb3760512f7f4614e89f9"],["/posts/fbda33d5.html","344f5196e2be494df9a58e87e318a187"],["/posts/fd1a8f9f.html","135605e5e6e245141c1db1e1500bc056"],["/service-worker.js","536d39693fc3b7ff06a276d2983aaa9b"],["/shuoshuo/index.html","0997c36578704a134aec2d78c86b0938"],["/sw-register.js","e8c362dc3452faca98dcb393d60d1b36"],["/tags/CI-CD/index.html","2a6325e6cf049d40ce9750c3ca3df0b6"],["/tags/Docker/index.html","69bbdf206122aaf7ce2e0a7dbbd59ccf"],["/tags/index.html","c641a6c1044865a367ef8057abdcf7f7"],["/tags/【每日早报】-2025-02-25 - 星期二.html","d0065160905d2e131ce9b601ac72e6f4"],["/tags/养眼/index.html","c060daad401ac768a07537b4d0c3ea4b"],["/tags/容器编排/index.html","8a2c9af9af1652bda8128931012a2403"],["/tags/每日早报/index.html","108bbf640f7e7790d3cbb97e432c73c6"],["/tags/每日早报/page/2/index.html","8af48d9ca3013e7594e099c6d158dd1b"],["/tags/每日早报/page/3/index.html","364d3d8add18eb30e5eeb3899f3ef573"],["/tags/每日早报/page/4/index.html","6d027cd0c6dbd0d701ce2dd195fdcc01"],["/tags/每日早报/page/5/index.html","bd33cacffd0bc30b55189666ce5ae5d8"],["/tags/第一篇/index.html","f8f38418e8bf383bd343b97a6b41b8e7"],["/tags/网络/index.html","57d29c4d09e8b2cd55249e12cb3f1b72"],["/tags/网络/page/2/index.html","fcb34eb7856a500c804fe4812c26e5fd"],["/template/index.html","ee4fa4e1fe0a2d518ff8aca060736d97"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

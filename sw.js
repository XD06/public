/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","244e3a84020c42ae3aa0dcfcbc527d07"],["/Gallery/index.html","ea8564319c0e143fdb39060bbb23e3c4"],["/about/index.html","2253cb598a2e4948552a009eb1ba89b9"],["/archives/2022/08/index.html","329ab1ad68c9498381b672da06cb137e"],["/archives/2022/09/index.html","c79260ed17f6559ca7ce133d4e65cd04"],["/archives/2022/10/index.html","8882d8a56d8bbfa3960fce6ddc48e5e6"],["/archives/2022/index.html","3c08bcd191067e5a26e66fdcca1a96e3"],["/archives/2022/page/2/index.html","9e58f6a70d73dff70874f78f01514336"],["/archives/2025/02/index.html","77ef0a55c6a1a78dddf77dee3eacb2bc"],["/archives/2025/02/page/2/index.html","263f47544c81a707fe7ba1658c8f33a6"],["/archives/2025/03/index.html","f62e6083066fd9e03aad8f84049b410e"],["/archives/2025/03/page/2/index.html","ac50156768b2c19ab742ef4fcf6387ac"],["/archives/2025/04/index.html","3175f2ed5bc19c0a0731880333838843"],["/archives/2025/04/page/2/index.html","178dbf147bbe1a9af78f3c17959723e2"],["/archives/2025/05/index.html","71e2876767559bd0e588af04b77f3ce0"],["/archives/2025/index.html","869bf6e89c06be6740fd08097a95bdbc"],["/archives/2025/page/2/index.html","f2ccbc28710e9fbcd5acdce5ee3fd567"],["/archives/2025/page/3/index.html","ad38f1c6a4f1bd7ffaf5462ee2457d80"],["/archives/2025/page/4/index.html","1d3887b9b3926afa9f306284d0085971"],["/archives/2025/page/5/index.html","912a117367ac3800f70b617560229279"],["/archives/index.html","84020959866118dca5a5acba8f5da407"],["/archives/page/2/index.html","c9d5c3582d0756a3acf1b54fed0efa2b"],["/archives/page/3/index.html","17927b65f5beb777448e0e0586013a11"],["/archives/page/4/index.html","ff38b278a4845f28a266a9c1797e3ec7"],["/archives/page/5/index.html","b4ce824370c02cdc8d49920db461fbc3"],["/archives/page/6/index.html","a4561b7341264f96494404f791518308"],["/archives/page/7/index.html","01a3cb6976ee7f930747260dfbbcd389"],["/baidu_verify_codeva-J5b2WWChcR.html","a55f93becf63df339948c552744f8c12"],["/baidu_verify_codeva-cwyza0ZFJb.html","2bd543fc8beb92a6695a5dd6d1829399"],["/categories/index.html","8c5ebd2fcf5be4a66cdd4f779405f491"],["/categories/壁纸/index.html","a38a03e5d1555cac1e4c413ff27bf58c"],["/categories/机网/index.html","e24b49e263bf11387d93894b7a0c1f4a"],["/categories/机网/page/2/index.html","fdf654838a888d644646bee21c8550f0"],["/categories/每日早报/index.html","6d571d3f0b11d2cfd3bad8468bac8e26"],["/categories/每日早报/page/2/index.html","b761463ecce98c81fea4a8ac529529ec"],["/categories/每日早报/page/3/index.html","28e4f59c2425897356878832fd46d68d"],["/categories/每日早报/page/4/index.html","d68819c0454d7cdf5c789d48a698a933"],["/categories/每日早报/page/5/index.html","1f4a44e2d36dcccc4763024ee72b7d09"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","032978990aafac237be3ba8b4bc922a7"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","f959103d36e1209cc9ee115113c79f1f"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","597617a6c14274547ce042118889a8c8"],["/js/ai_plugin.js","d10bac61952b32e0778f78e2d19cfbac"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","b6c1b6869b5498dbc5fb7ad46ee9a97b"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","6f1ce263bd7f5ec993558eadc191ace1"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","f26fd1aab6811f7b0e5b58d9373eb7c8"],["/link/index.html","9831e94a27f950515859e2ff135a62a5"],["/music/index.html","c65337db73172c78be9ebeac9f868121"],["/page/2/index.html","187b5a98524a2af18adc1b1ebf28ec7c"],["/page/3/index.html","9bbd32a8d4214695e34d6a7be63c92a1"],["/page/4/index.html","22eef988295487c4bf4518e4a3c0861c"],["/page/5/index.html","ca34155acadfc2d164194e4bc9535c03"],["/page/6/index.html","defac837d5b8ed9bb0ac27b510705530"],["/page/7/index.html","7dd542dd541cc1078bf1418ae2f17cd5"],["/posts/12501d69.html","5098bbdd5a7828a79f81e31db5c97899"],["/posts/138fefbc.html","e2a3d9635b9643b283482c8cd96114fe"],["/posts/1484043c.html","9244fb2667a91fe9aaf948fa34a1ef42"],["/posts/1a3d44c.html","7524044d5a1d42e5ee9c27ac191a71b5"],["/posts/1b0c78b3.html","303088dae771ee9753439c2c63bfed97"],["/posts/1b5b87.html","2eaf827030da698d50d5ac6b5481c899"],["/posts/2134d9d1.html","31878cccb22dbe6e083be1ce5baa28a3"],["/posts/21fabcd8.html","cbf140cecc32c3297e1e9a17f6bce361"],["/posts/28c755c.html","951c54342f1247d0c9b9346377fc8131"],["/posts/2f77f294.html","c348e5c912bf6158add1c32fb2d37337"],["/posts/330d6f69.html","8e09113741ee0df5aded42b800cc4e01"],["/posts/3b744803.html","85f9472121ab8853b6540e44d4d17aa1"],["/posts/3da05156.html","3f73b7e4923c403faceabc82e5fc2b9d"],["/posts/3e91e0fa.html","30994fd4f61bb13a99989e46e67ade25"],["/posts/41c2c0d2.html","834466cfda937d93c65445db45c65740"],["/posts/46fc5adc.html","a51fda48e7ae9d00219575ea8c7abba6"],["/posts/493f6b85.html","10d9159342a14aac8d887514543e1e1f"],["/posts/497e40e0.html","a3b2c57b7ed9d6b7aed10d8df4db8dab"],["/posts/4a17b156.html","f04610fc7ab7e8644075fff18a31dd5b"],["/posts/4e2d7b19.html","0573a0713ed4f5ae5b67f8f8ee7124ef"],["/posts/4f81eb97.html","7b6831b4dc78fbe1e751a4bc2119dbfd"],["/posts/53721e0e.html","97e877019bab3ca779fc45f0f8e38039"],["/posts/5dadd067.html","d30cb1a6fcae7b807164b65c6b12a713"],["/posts/5ff34642.html","b6d3590f0abf701d8a200ce982f0b108"],["/posts/653abebf.html","d7119ed9fa2e71e5a4be4cfc7fadee13"],["/posts/681265c2.html","b049eef527b922e7bec919d8068fb7f1"],["/posts/6f44662f.html","3bad3acd6722db61abe331c4560d21cc"],["/posts/7207f70e.html","cde6b79100140ac3b9bf2fa30f38a46a"],["/posts/7289f891.html","43ef6a27541ec093d54c85f8b74b8901"],["/posts/732e626.html","5f6774d34d97c8898aef7a01ca7c08c9"],["/posts/7c4f393d.html","369d8e5381ed2d9e7ec256fb3cc3731e"],["/posts/7c825231.html","e80697aa775dc7b6f36f4bab55c41823"],["/posts/7cd0d214.html","b7f3a7dbc45af11b241cc8f5a6e2039d"],["/posts/7d9071b2.html","f33ee81d58ebb84a9081e83ede523024"],["/posts/7e13cc3b.html","319ecb7866795943f7cd65989832f649"],["/posts/80a7ecce.html","54f558343bab2437ea691c0563a65551"],["/posts/821a4686.html","8ba3ce782caf0847ba7500d5f3eb949c"],["/posts/8a741756.html","074d93a800ad6a87ce3ac65ac05a8564"],["/posts/918d46c1.html","1ae251bf5a8e8f84fa2a34724c43d277"],["/posts/93c8c0c7.html","15f6759f43de379971369cc4c8fc4038"],["/posts/9a59ce11.html","d60abdcc1c8351269f579c335bfeaff4"],["/posts/9f057e9a.html","777033e73c2611baa4ce62144ef4bf26"],["/posts/a7d437fe.html","1aa88b5135ef982bb09a10178b0234f4"],["/posts/a85c4b71.html","f7e9f7cac7daf20741741365d2b4b42a"],["/posts/ace4e4cd.html","cb822c97300281ae0a55aba184b5603a"],["/posts/af30ddef.html","e7a308e865fe0b27c8a3ac8b9be0add0"],["/posts/b1eb9c6d.html","e8166b7ec2a04640c23e98b7ca282c24"],["/posts/b564e922.html","a51db46f36fefafcaf26d0de225e4206"],["/posts/bc9a4dc7.html","514fea8109cdb7708ddb31952817405d"],["/posts/be543a11.html","5a8e2edb20c54bd9f085822a89e93a93"],["/posts/c9b871f1.html","aa5c698c59657ae3c6fcdc65b927d3ae"],["/posts/d6ef11e5.html","8fd136549e27f4a4f660c3e53240e2e0"],["/posts/dcd6fdd1.html","6d8f76d8b0a2100d890a4e6bfb99c6e2"],["/posts/de24a124.html","6005626cc247adefd7aa6608d98c2cba"],["/posts/e25a3e3a.html","68b15f429b1290713977d44c2ba5b396"],["/posts/e32cbcd3.html","f5266d7b056e78a4add9c1ac6d7ce1f3"],["/posts/eebbc69f.html","a03ecbf1cb7c65a9208fa9f52a1408a5"],["/posts/f08119d7.html","e9f4597f47fc580a773d5892a2b96ba4"],["/posts/f34dbb9f.html","a31a628db5c7d6fbb6e1639fa3d8890a"],["/posts/f36fedbe.html","21d3ec3123be5500f0883abc769c6b2a"],["/posts/f7f51423.html","fe3f0050dca511ae20ef064de99d479c"],["/posts/fa75ad5e.html","f457ba8ec7598a7744cdada55179efcf"],["/posts/fbda33d5.html","426d7c888c4a0eb1381bc40e9c3d1883"],["/posts/fd1a8f9f.html","1ddbccfff8c5798ca11bfab509167140"],["/service-worker.js","78149c8d661999ecaea6c13bb883267f"],["/shuoshuo/index.html","554143921604cc64f7b8f5dd0395c1fd"],["/sw-register.js","27148d07050325cfbe387d37421ceaab"],["/tags/index.html","8ff5108e1eb347978ea24897c046c0b8"],["/tags/【每日早报】-2025-02-25 - 星期二.html","7ea9091340b7dabf0cc891f795e9b3ac"],["/tags/养眼/index.html","c2f7148f8250b00233a64ad1f12b09d4"],["/tags/每日早报/index.html","3b412ccffdc27a5b3b8f27e9d7cc5767"],["/tags/每日早报/page/2/index.html","f7e598f787c43c9a60c9395bd0597803"],["/tags/每日早报/page/3/index.html","b16ca2558a9afdc2880d5d0daabd285e"],["/tags/每日早报/page/4/index.html","58e817a1b801798f844f270d0d10824a"],["/tags/每日早报/page/5/index.html","1f2f0d953c8ac117c6f8bb8e4b2af4a1"],["/tags/第一篇/index.html","8dc33a2022df858092be48c582d16469"],["/tags/网络/index.html","b27f10dd93422fd23c67a1a57f12fa56"],["/tags/网络/page/2/index.html","804c17cbfa5080e9136b71f1f53cdca2"],["/template/index.html","847d80bc9f8cf3929aa83b35c9674b9a"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

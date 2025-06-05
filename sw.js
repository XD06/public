/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7aba56970a166468b9a1185a3e3d22d2"],["/Gallery/index.html","07277030b050fe507edce26e2c393d30"],["/about/index.html","c70a1dc5a5abb45022b02ec76382a1cd"],["/archives/2022/08/index.html","ba2a0f52e2b1f2ecf17e8d1aa1e5966e"],["/archives/2022/09/index.html","fcfab5f758ab15a822b67b5a61ee7856"],["/archives/2022/10/index.html","45a62f4fa2829bd4971edc9bfef12a7f"],["/archives/2022/index.html","c985445fec9470a7a9263e68fc9d960b"],["/archives/2022/page/2/index.html","6199adfcb417e6e6b67b15810bd65434"],["/archives/2025/02/index.html","32f599e7260394fd242d9fd241aa28df"],["/archives/2025/02/page/2/index.html","e9d780d333247539ee56da2fbc691ed6"],["/archives/2025/03/index.html","51e69c522f1fe4126dc7ade7dc50fe97"],["/archives/2025/03/page/2/index.html","2ca804d61cc6fac6d2463998dd7f8710"],["/archives/2025/04/index.html","dc0d096e39a68b84edadf489e3a2fc43"],["/archives/2025/04/page/2/index.html","100739c88be89952a37e9583745ee8fd"],["/archives/2025/05/index.html","d4ee2f3a86f2ca99413aa3a3803d5c0c"],["/archives/2025/06/index.html","20a28598a5501083d89e923d11860097"],["/archives/2025/07/index.html","a8e8237b3fff657cc7999c2b6ff90a5f"],["/archives/2025/index.html","62edb0a85c26cfd165335f452a544078"],["/archives/2025/page/2/index.html","019abc3cbabec83847c045119d5c16b6"],["/archives/2025/page/3/index.html","755ec852e976ccb75799e355424d8445"],["/archives/2025/page/4/index.html","5e1eeebd96b009616eac6aa13b3e6257"],["/archives/2025/page/5/index.html","b35f3941933684886fb5f8bd159c7c28"],["/archives/index.html","4cdeb38bcd246d965bba462784912f6e"],["/archives/page/2/index.html","d3ed74a3dbf285d8cc52aab7c2f8a4da"],["/archives/page/3/index.html","4f8efc6a7a5f34ad25eaef52615587b9"],["/archives/page/4/index.html","5293e74ae7ece38090f5dce1225d944c"],["/archives/page/5/index.html","a08ddfd3787b3fc105150dd15ec971e8"],["/archives/page/6/index.html","556f418db5a6a0127797764e073562f6"],["/archives/page/7/index.html","baa7ddd97a3c3840c79cde0e88195c2b"],["/baidu_verify_codeva-J5b2WWChcR.html","13337cb69d1975150ebdbb3366abf2d4"],["/baidu_verify_codeva-cwyza0ZFJb.html","06714920678c3917d37828a160f5c234"],["/categories/index.html","5be283315cc7badfe42c593679bdaa5c"],["/categories/云原生技术/index.html","8dcc92fce27e5b9c1b09b4e43bddfe9e"],["/categories/壁纸/index.html","a677ccf6640577ebe53c0a4b8cb7f63e"],["/categories/机网/index.html","e76507652378b504839370f1868d0086"],["/categories/机网/page/2/index.html","7b9e533de44c068c2df798e740e15fa5"],["/categories/每日早报/index.html","66cfd4043642f74867974c44ab6c38be"],["/categories/每日早报/page/2/index.html","b935a45a306fda7581198317966a85d0"],["/categories/每日早报/page/3/index.html","bf3909ded683ae74344b0b20084a6358"],["/categories/每日早报/page/4/index.html","bdc3cc78000b7fd0eaa927c984531a14"],["/categories/每日早报/page/5/index.html","109077a0270e67330f43efe8bdce8b8a"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","b72d3f038bf6b2d7fd6184ed2c673fcb"],["/css/mbg.css","5280dba4479f57302079e663731cd28f"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","8019fa3f437de1e57facc7b94ba7dbf9"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","f5828d36edcc095eb6d0df0f61307124"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","e3681329242c27d3d68c2136a3274e60"],["/js/ai_plugin.js","d10bac61952b32e0778f78e2d19cfbac"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","f4d111f03f02025b99ad952ad9a8f8cc"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","ce8fd52edc16df22081ab95e537e62c5"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","4954ab0cc7b52f4671e94d254ceee042"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","141da10c623b76b9284272c00071b21e"],["/link/index.html","e59a0fb9606dd1487a59e9b0d6e0ec3f"],["/music/index.html","28a1f66437e1e0608f749de0c49a993e"],["/page/2/index.html","bb6cf28bda89c1f8950d80237221218e"],["/page/3/index.html","e622b85ed6865004c4ac35bde543698b"],["/page/4/index.html","427c30dfc490b10f83c16e3b8df875f8"],["/page/5/index.html","85d1ede9aa741fa8ced0df031d98c666"],["/page/6/index.html","a22195e2e53e36005171a221ac3df75b"],["/page/7/index.html","577e95007c76bceebc1444369ab7900b"],["/posts/12501d69.html","4089d0a3229a227b26ab50385cc556af"],["/posts/138fefbc.html","5d98e1b8e08377a5c355ef233c4622ca"],["/posts/1484043c.html","9a464163cd3e68acbe1dcac0b52c4409"],["/posts/1a3d44c.html","fe86341ac294ded635d23ca2fdb13f61"],["/posts/1b0c78b3.html","a30f7dfae546b6823bf67f81e4dace13"],["/posts/1b5b87.html","f2bf1d3667a990438271fb01a007c24c"],["/posts/2134d9d1.html","4f0776e32f9cdc97efa44be2140e5be3"],["/posts/21fabcd8.html","fa8a9fe68bd5326333acfa9360faf8aa"],["/posts/28c755c.html","c05ceb7609caaf6c6d75f7de6d8f122b"],["/posts/2f77f294.html","85683f363728f4f9573181b156d196f1"],["/posts/30621cc0.html","c0d2fb5747400d7a6859fb8659cac346"],["/posts/330d6f69.html","8a50f9fd71eef67b6438c27bf59629c8"],["/posts/3b744803.html","8f4f051af5d4f514066b20b34ec541bb"],["/posts/3da05156.html","3ab63ccf1a695f590369e91d972922d0"],["/posts/3e91e0fa.html","aaeb85a757ac4f3c2601308cb23f0383"],["/posts/41c2c0d2.html","890b66367961caf337cc6db2790fb310"],["/posts/46fc5adc.html","45699aa24d677722436158e660914c03"],["/posts/493f6b85.html","6084a12b346ff9f3cfd39a78cc7a5c15"],["/posts/497e40e0.html","44c03984dbc1365108f7bd107fb6110a"],["/posts/4a17b156.html","599c6d58954a89889b9b703149e6920b"],["/posts/4e2d7b19.html","90cf8006ee39dae64b05b27f36c5b95d"],["/posts/4f81eb97.html","ac156baba8a801794a920f393946a0ce"],["/posts/53721e0e.html","133b10c06a26bb01a92496c6c67184dd"],["/posts/5dadd067.html","a85c237e12298852915397ab3e42f4b2"],["/posts/5ff34642.html","933c0de21669cec79a41fdc742c2963e"],["/posts/653abebf.html","02dcee0ac86ad5b9e3b6acd1d76c8a73"],["/posts/681265c2.html","0203580c384b370824d5e7ace9ab9082"],["/posts/68a36c37.html","bbd29e5b4dd913f9f36660c0a9bf3b05"],["/posts/6f44662f.html","c821837bc87399ea87721b31f58cfebd"],["/posts/7207f70e.html","a03bc7b8fb9e6e38a56f4541e875fb47"],["/posts/7289f891.html","bc58b0aaba9e47e915b0f06d2cf1c43a"],["/posts/732e626.html","20a2c71f74de2d5efa40ef8f572214af"],["/posts/7c4f393d.html","88f185ffb90688b16e555774671befd9"],["/posts/7c825231.html","e224803bbd09a497947b99c1541d229e"],["/posts/7cd0d214.html","18694a9aa2233689c10603bad3335c6d"],["/posts/7d9071b2.html","77090240a20ee59c6f2e78bfdcdb07a2"],["/posts/7e13cc3b.html","8b879d378acea4ac424517888369109f"],["/posts/80a7ecce.html","57f51068181b14949ee72f8f846ebaba"],["/posts/821a4686.html","e4297afc9b3ae644617e91222ff5db47"],["/posts/8a741756.html","1ec40f9143b78e0a64d191ae2c760f8a"],["/posts/918d46c1.html","5adb6435f4b3fbd9550bbd75156ed8b7"],["/posts/93c8c0c7.html","e7b97358219e12c457afec007d9dfcfd"],["/posts/9a59ce11.html","8a49d2b0062d8f2bf63d7e171367c753"],["/posts/9f057e9a.html","d9c4b42b11854d4baa30850cb3f581bd"],["/posts/a7d437fe.html","3974afb79734ea7ecfd318d35ebd92dd"],["/posts/a85c4b71.html","7cdd626acc48c47764c7f0ab52ab340e"],["/posts/ace4e4cd.html","192d8cf6edaec5ca6c271fc27c39683b"],["/posts/af30ddef.html","4d6a86f9e8dbace685e5ebc36d4598bb"],["/posts/b1eb9c6d.html","9fe7d7d3cca881cc7ec2803311fd79ae"],["/posts/b564e922.html","35d5f8ccfc83dde25c84e1e2cec6eed8"],["/posts/bc9a4dc7.html","78151af1d41ba58156f4d8be2c1020aa"],["/posts/be543a11.html","bfd8f1cab78f2ed918183dde7dbb0a4c"],["/posts/c9b871f1.html","0f9ab4d23cc5d66791b89db0e096d203"],["/posts/d6ef11e5.html","2663dbacd961d36bed6429e38f35e9b6"],["/posts/dcd6fdd1.html","a33ddd6e7e4a8182384b525af6bbc11f"],["/posts/de24a124.html","4a7d28be34d01eaf64a48fcf74994847"],["/posts/e25a3e3a.html","73a8005b11012033eb51935fb05ace9a"],["/posts/e32cbcd3.html","332ef283d2b18965770aab9d24b9f332"],["/posts/eebbc69f.html","ed80ae5808b33deb27bda4b26731af35"],["/posts/f08119d7.html","c140d3eb233e32aa4438f919a03b000e"],["/posts/f22f4e18.html","47c711960754ee4151270735ad35bdca"],["/posts/f34dbb9f.html","e9c7bc33908db8e9e9929f7abdb51183"],["/posts/f36fedbe.html","4d67c5d1e227791215780a2410bad848"],["/posts/f7f51423.html","ee99a31bf1f471f8105efe929ddd5562"],["/posts/fa75ad5e.html","25c4a617d3a3b89d31081a2be9d19b88"],["/posts/fbda33d5.html","37b41fa046442651ea37e5118e1b7f9a"],["/posts/fd1a8f9f.html","3fa3128da3f6193e8ab93d01befa00ea"],["/service-worker.js","d1d9a2dc49ce6bcb28671681483737f5"],["/shuoshuo/index.html","0214e714a638965795acfb9eb01d57ee"],["/sw-register.js","4e87d86c14592672d57859a0aadd107a"],["/tags/CI-CD/index.html","9dd8d2feba1161cad7883316ad61e581"],["/tags/Docker/index.html","4054b5ec645418c04103cb2cef790691"],["/tags/index.html","b20591f15bd857064ba3d7c404bdf709"],["/tags/【每日早报】-2025-02-25 - 星期二.html","1ba7213051139532f0336f04aeb47fd9"],["/tags/养眼/index.html","d5a509c1063bfe6e4ebf9cf7c00c9574"],["/tags/容器编排/index.html","de9aea5211e129f008256f155df11910"],["/tags/每日早报/index.html","3c112a676eeaf76efe30227ade9b1fa1"],["/tags/每日早报/page/2/index.html","b45c26a1a72e1e3353f5ec51ccb0b8ae"],["/tags/每日早报/page/3/index.html","daab4ddb4bcf95e4429aaba0c09327b8"],["/tags/每日早报/page/4/index.html","ba6c6483bd73f08e5bb8721bd91690d3"],["/tags/每日早报/page/5/index.html","c3282aada206bbfb9bb893ddaf4da9f6"],["/tags/第一篇/index.html","7eff0277e0d11437845ee56c85c63581"],["/tags/网络/index.html","e16e85bb887d7ca20ce0c2f631cafde9"],["/tags/网络/page/2/index.html","fec1ee2dd3b8f72c1ff79443ddc5af6b"],["/template/index.html","13c77cdc107ea8ce215cb54425a2631a"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fbc2f0c03983a2a02562878521c87aaa"],["/Gallery/index.html","6ecb36ee8d6146443a85cedba03588d4"],["/about/index.html","48330bbacab8396a41c901c90f32f596"],["/archives/2022/08/index.html","d86ab48e4f33f3d70758966d79021184"],["/archives/2022/09/index.html","2dab8f4579b6ce7cd9ac955ac3d5f796"],["/archives/2022/10/index.html","6005b6e18ae8ea2e806575b9c3a7f7f7"],["/archives/2022/index.html","f431692fba9cb2be34818effedb3254c"],["/archives/2022/page/2/index.html","2e3372b374250700c6717b3320004ce4"],["/archives/2025/02/index.html","64ccdb4f84a24de0683d5866a1a2c359"],["/archives/2025/02/page/2/index.html","54fba54d0f777555345e2da6875d6749"],["/archives/2025/03/index.html","5ac08e0cec2667d891f4ba4799b57c86"],["/archives/2025/03/page/2/index.html","90c628c5523acca95c8b441dac9b2585"],["/archives/2025/04/index.html","193cdaf89332ab597abd4404f99b9ccf"],["/archives/2025/04/page/2/index.html","74af2c7469957f6eb3931870ed33c6ad"],["/archives/2025/05/index.html","da1f746f5d472ae869a37e0073440868"],["/archives/2025/06/index.html","d6aff6cc6b7ee422552a7885a98ce213"],["/archives/2025/index.html","e84774829243d563f6fa62accf01166f"],["/archives/2025/page/2/index.html","47d9d44a0bb06cf4cf64c4fe781826ac"],["/archives/2025/page/3/index.html","21557cbe9e45d92906eef51108d8648a"],["/archives/2025/page/4/index.html","8a55daa834c769b15abf18e2ec92afe0"],["/archives/2025/page/5/index.html","2d3b8e3bd0678ab27a9cf456c73b5efe"],["/archives/index.html","992d4578cee24c37badfdcfc608735e4"],["/archives/page/2/index.html","620d2542d490346fec21eb37ad4b5e47"],["/archives/page/3/index.html","fd54fedc0bfbe5f5d41f5a1e13ba63b9"],["/archives/page/4/index.html","7bca9c9f0431e977f2c411ad6fb15e7d"],["/archives/page/5/index.html","9f852a9afd390940f1d79c06660e74d6"],["/archives/page/6/index.html","76352f320c1869123928e2224c2eb8f4"],["/archives/page/7/index.html","cb91204ae9103ee1e476a19822bfc807"],["/baidu_verify_codeva-J5b2WWChcR.html","1d815ad2f17a52a04a86c79a0e1d3578"],["/baidu_verify_codeva-cwyza0ZFJb.html","f5efa0bdcea224a2324f10a20db11041"],["/categories/index.html","c2169f70aa3ac3272d065cfefdc874a7"],["/categories/壁纸/index.html","9b881edf4c9f8d0c2350b5060d75382b"],["/categories/机网/index.html","3570ea8976e4bc291cfb915b55d6ba66"],["/categories/机网/page/2/index.html","3ca6708f107ed1bb5328d8eb5861fbaf"],["/categories/每日早报/index.html","9c39755065d11e0372b0bc92e7475d92"],["/categories/每日早报/page/2/index.html","9caf36dbd7f7041019dbf430c18e9b64"],["/categories/每日早报/page/3/index.html","148abad740de1c9743511e6b347027bf"],["/categories/每日早报/page/4/index.html","128dff4cdbb257042cc4982961fb470c"],["/categories/每日早报/page/5/index.html","f88cc6a48750c8e73e7510eddec4f955"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","513e96612b5a0b54f821a9b93be682e5"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","dd0fba8e08e4e0d031d8e90401b67f5f"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","99a6413b278dc4f8c6fffd7b3b2f7671"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","e3681329242c27d3d68c2136a3274e60"],["/js/ai_plugin.js","d10bac61952b32e0778f78e2d19cfbac"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","f1e4861981e5bf26103249265d13591f"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","a698b723742799b35adc64cf717e6fd3"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","d5b79d501cc0adc40b9d40f4edb1209b"],["/link/index.html","70fddcfdb2357183aa2351fdb19acc1c"],["/music/index.html","547e1507e1630d99272c74945137d36d"],["/page/2/index.html","f5ad4320ac0effcd5c0e97edcd11cbb6"],["/page/3/index.html","7d88ef77ac7aab6a2107c88b462355f0"],["/page/4/index.html","cb2493056849f1ec0d34facc86da3dde"],["/page/5/index.html","562e7041ce5871d28cf6613648365420"],["/page/6/index.html","e02dbfe26c1e4c61005662d338dd779b"],["/page/7/index.html","4814f55b179fad788798ebb2eb6097e6"],["/posts/12501d69.html","e264c1ef3a0c57e8cef1b4535914ed05"],["/posts/138fefbc.html","24c02138d6fb67bf78ff7449ad76a490"],["/posts/1484043c.html","bfa2ee3f92ea502770578500b63e692c"],["/posts/1a3d44c.html","dbee8c3e80d6d96c7e7a0629df14001b"],["/posts/1b0c78b3.html","4d63712b3ace10d7288e0f27e540dc22"],["/posts/1b5b87.html","8bb6767fdd7eb91118eaf84724a935b9"],["/posts/2134d9d1.html","903e0228337300989411f04d0637ded9"],["/posts/21fabcd8.html","454c06e8ddd741abd037fe718aee6168"],["/posts/28c755c.html","dcf6795719da302382dab4a01218d2dc"],["/posts/2f77f294.html","2c269c31431f91d0cc69a9e8910de624"],["/posts/330d6f69.html","1d2026d699fc5eaa04dce9f08c7b9cc4"],["/posts/3b744803.html","c99859806a46ef3a206ea8ff1be0deaa"],["/posts/3da05156.html","55f9c4ffedace447d2341b31d334047e"],["/posts/3e91e0fa.html","f19020a1232a668bf5d6ce771c605e60"],["/posts/41c2c0d2.html","5ae2c2565085b1ac491f93c3027796dc"],["/posts/46fc5adc.html","187e311d61d7cd11013978f1e5c11b15"],["/posts/493f6b85.html","f390ef2af5b7ab330ad97b6a6b10f0f2"],["/posts/497e40e0.html","a4c3435d8f461f39602269c472cb3c40"],["/posts/4a17b156.html","3d6b9b2061e0526fb5116ba632c36acc"],["/posts/4e2d7b19.html","6a90a15b7ed4f05b3ebf253ed4a0efa6"],["/posts/4f81eb97.html","aac9eb685a557f2db65526caa78adb6a"],["/posts/53721e0e.html","af51dfc1339e13e68178b0fa2fe23060"],["/posts/5dadd067.html","4f067c76af3e784e3130023e4b376b08"],["/posts/5ff34642.html","7b78a8df41a084a0462f05c68ab12e31"],["/posts/653abebf.html","9d2e583fa2ae341788ffe310fd483f89"],["/posts/681265c2.html","30df016e7a8d0a59df8f363ae5109f52"],["/posts/68a36c37.html","be4e53ab44261021254b862eb8934b2d"],["/posts/6f44662f.html","5d49990c465f23e552b64e0b509c3a5c"],["/posts/7207f70e.html","3bc1bb2fb58ab52c0a3aabdb2e67b2ea"],["/posts/7289f891.html","5da410fd07a8926d8970158b6b32c417"],["/posts/732e626.html","ed9de78f18cb361d1f58db7b1110bde2"],["/posts/7c4f393d.html","ef9674ed0d8f7d60d8adc3b8b9b83835"],["/posts/7c825231.html","5f2378dbf0812ddd2690a532cd302d2a"],["/posts/7cd0d214.html","507f85aa1a2b6cf20f43eccd51bea934"],["/posts/7d9071b2.html","d0ab7f38dfc8a01f42630d2d68691982"],["/posts/7e13cc3b.html","80a17d7af0108e64b9bfeeba62cc6e8f"],["/posts/80a7ecce.html","add92db5803245fdc9f923bd6d4cdf22"],["/posts/821a4686.html","8ac0b1d70b295f08fef07998e836c386"],["/posts/8a741756.html","dec16dda0e0a7f611b91f156834e13d7"],["/posts/918d46c1.html","959b046599f78df5ecd4e4323cb15eb9"],["/posts/93c8c0c7.html","d3b1fb92498eba061eb432fbeaf1564f"],["/posts/9a59ce11.html","ef5b4f4637def7c782fc24c415dd37c0"],["/posts/9f057e9a.html","21fe0691bb4b44a2dda423ca3abc0b31"],["/posts/a7d437fe.html","c77d420fd6cba054767a3ad81270cb25"],["/posts/a85c4b71.html","0d209e247829bed73b3a7723c0d377d1"],["/posts/ace4e4cd.html","ae0700e642766f80afded125ad94b631"],["/posts/af30ddef.html","fbfeeb502fe7e3049d324cf58eb98b3a"],["/posts/b1eb9c6d.html","6ed2c2b958d316bdbcb89a211fe31f44"],["/posts/b564e922.html","1f16aefbb70083958653dd6393cde5b2"],["/posts/bc9a4dc7.html","e18cc5f09b308fb022ea2f8976b2a4e4"],["/posts/be543a11.html","380edf86e6c6b1e3da1bc596e9aa78f9"],["/posts/c9b871f1.html","ec58f29a36bb567600456a74d21caf82"],["/posts/d6ef11e5.html","f14e789d16f15111ee69b706b8e404a1"],["/posts/dcd6fdd1.html","af51b2591368e29a981cb7c3c4219fd5"],["/posts/de24a124.html","f341a52c3fd9b0f104ac707881be81db"],["/posts/e25a3e3a.html","7b21a75862b4269aee03328c6d8f91cb"],["/posts/e32cbcd3.html","69a5f096e7a531f64000c73ab89c99de"],["/posts/eebbc69f.html","2fe21c2e12d127b73f4b4d6cb5c9b2b1"],["/posts/f08119d7.html","93d4cbd32266cde36729d42dc0e3b332"],["/posts/f22f4e18.html","de3c20a1174d8076149ccd9e9dfc8d4d"],["/posts/f34dbb9f.html","7361ac53f69ad166f47952fab2f65834"],["/posts/f36fedbe.html","dd11baf6df24b37a9f4af6929b0cebb2"],["/posts/f7f51423.html","62dd88e2d529c6c4845ef556a18a898b"],["/posts/fa75ad5e.html","611e6ba0f3132fcabab4940a75a7c36b"],["/posts/fbda33d5.html","8d4dc260edc6d5b25c3b6edf359b764c"],["/posts/fd1a8f9f.html","66bcfbbfb10feb53cdb6487222222e92"],["/service-worker.js","df6556e4b61b76874d34284bc95058af"],["/shuoshuo/index.html","a92d1495dd80f212b0ee0d12f7088e9d"],["/sw-register.js","ff9d9755e058241ad139236edb020ba5"],["/tags/index.html","3fdd7ddd2f35fd4b7501fbb6e8cd0dd7"],["/tags/【每日早报】-2025-02-25 - 星期二.html","4b4463ad8b50f6fccd4887254bdaba2b"],["/tags/养眼/index.html","ac8597f2aff6d3e15292fa7fa41539e7"],["/tags/每日早报/index.html","1c8542680a3c2469ce6adc3e1b522d0a"],["/tags/每日早报/page/2/index.html","9ddd0eb8ff655f1d3892f24b7985e0ce"],["/tags/每日早报/page/3/index.html","b3a17829b0584ac92424d5539d651a1d"],["/tags/每日早报/page/4/index.html","2145aa5f28ae2d5d12590cfc53c578af"],["/tags/每日早报/page/5/index.html","93190928c7da53b35b75a4800eb2e3b6"],["/tags/第一篇/index.html","ba8560d74c54514b0cae7612f7e4eb88"],["/tags/网络/index.html","73207241202a47a6a1ddf98b3f59f119"],["/tags/网络/page/2/index.html","b424c7c4eb2582ac1a23feb5b3897e4c"],["/template/index.html","c8f786bcaf7d4ed9f49ca278ed2e0b7b"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

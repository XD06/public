/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","eac4b916ebbdbec44d55ab9e8cefa319"],["/Gallery/index.html","2c3e6196e0ca0d97c49de0d2b2335289"],["/about/index.html","026adf1d15ba8ad5859a57e73a88e1c8"],["/api/index.html","93e95d8054f43fe210a2835e35f4a50a"],["/archives/2022/08/index.html","b84b95a88c9c53820a69b13569532120"],["/archives/2022/09/index.html","0f0290ec30fcd97a298f73ce4a5eef69"],["/archives/2022/10/index.html","d0b65b9b561d6d5eb3b221cdb9e324d8"],["/archives/2022/index.html","29da0bc8a2a5dd337937e695bab0bdcf"],["/archives/2022/page/2/index.html","fbc2d332446b6f570f55eba616417af2"],["/archives/2025/02/index.html","cd0dd27c3b3a2d193f5d87429fd6fa9a"],["/archives/2025/02/page/2/index.html","043cec8c3eb866570e1e711e7a770884"],["/archives/2025/03/index.html","3929dfa7e949a9cf1167ae006af5b7e4"],["/archives/2025/03/page/2/index.html","42d226f932b08f01afe6d188b269dbdd"],["/archives/2025/04/index.html","bac8de14cbdbfc73dbe6559522a24359"],["/archives/2025/04/page/2/index.html","b6ebe8635339cdba875461b1e4f0ff56"],["/archives/2025/05/index.html","99965b79a15ce657071a169eee73ecd7"],["/archives/2025/06/index.html","f9f2360786202ae87e87957b73a08b4d"],["/archives/2025/07/index.html","0cbd0446ba64ef8a36bf5ce38d8e5bcf"],["/archives/2025/index.html","589c4d86d8af603d0032ecb4b16655d0"],["/archives/2025/page/2/index.html","bb3aa14cc0dcf3c67f2c05955b4e6138"],["/archives/2025/page/3/index.html","ce5ff4167630ef3cac377df53ab51c35"],["/archives/2025/page/4/index.html","2464fa29ad7bd6e35b6578f101c025e3"],["/archives/2025/page/5/index.html","82bdd7ee76724b8c0155c97cda8e7f75"],["/archives/2025/page/6/index.html","6adec9bfb2ee258af38f6ad8a8e05a6d"],["/archives/index.html","501bd145bc196147e06981ea2cf715cf"],["/archives/page/2/index.html","58fa877d27897c3fd6f1b6bfe82de48f"],["/archives/page/3/index.html","3989d18048cd0e8ef87c01fd211cd6ef"],["/archives/page/4/index.html","ee23f6ef9b5f9a622b0d8edcafd58430"],["/archives/page/5/index.html","7e8a049920e094bc4fe9beabee084a35"],["/archives/page/6/index.html","5474a364f89ea5ba290cf21f59b39e77"],["/archives/page/7/index.html","02d1645333f34f5ebf763588ed7c21b1"],["/baidu_verify_codeva-J5b2WWChcR.html","6101e5d7406d32fa0d4026716903a0d1"],["/baidu_verify_codeva-cwyza0ZFJb.html","8156d1a2c744f8dd6d0960cdf2a5f4da"],["/categories/index.html","2b398ea5953428a4a21c4df4972c8a0a"],["/categories/云原生技术/index.html","a18aa6a4b76c70a98c436d0ca787936e"],["/categories/壁纸/index.html","534edb2b763a35aebdcfb3635f2a274d"],["/categories/机网/index.html","2535b8462232e1f9f470016024b3f1a2"],["/categories/机网/page/2/index.html","99ded1223de381d471ff7a1de3980b17"],["/categories/每日早报/index.html","96a3b24cb4aef87cb06f43e781e456ee"],["/categories/每日早报/page/2/index.html","1137570716c3bded0e94dbe125145765"],["/categories/每日早报/page/3/index.html","f4ae072d590bfca7b273b660473c9e14"],["/categories/每日早报/page/4/index.html","6af870a22a3482d09806a9b637c41782"],["/categories/每日早报/page/5/index.html","d04738a186497e393ff3fd9e3e5558d0"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","0f9c3bbac7a081c66bc497fcfb28ee19"],["/css/mbg.css","c5fc4b0502c3fb4cd1a110dce934965b"],["/css/modify.css","385d0d350aced119ad5ab778b3275420"],["/css/progress_bar.css","3f84404c2d66a9d3cc215ddb4599ffc3"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","ba1d4ff8fdc09f78bcd08634235ed966"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","2953f1a86e27fe979e86164f0366ae4b"],["/js/AI_a.js","60191a34939dd3cb43c1fde6d17a3ab8"],["/js/c_token.html","735788f40d6cf8beb40a279e36cd8027"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","ce8fd52edc16df22081ab95e537e62c5"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","ce53009ea976b4b1596b2a4a204d21a6"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/keywords/index.html","a5720f9f3cdc4d1d8603356cda5bbc61"],["/link/index.html","6e7e3ebd2ddf790923a462527a46ddec"],["/page/2/index.html","d0e7d6693ef3653093eee9754541d6ab"],["/page/3/index.html","2609f53e842352efef384ed2222f6e57"],["/page/4/index.html","a9757b48255281915ef117c5470e6598"],["/page/5/index.html","a00af404dd7444d193001960e98ae595"],["/page/6/index.html","87b0d6410f98e62916fbad7b8e6f604c"],["/page/7/index.html","1be972ff4413a3ac12b8e4d805cd01f7"],["/posts/12501d69.html","e149760da726eb14591749e7bc470887"],["/posts/138fefbc.html","2e3c01a3057c12d546ae900aeba402cb"],["/posts/1484043c.html","f22d31c8916cc7d0dace81435a96ed40"],["/posts/1a3d44c.html","3ee56c812e28187edc3983a4749f1f84"],["/posts/1b0c78b3.html","f279fb9db90e2b57b15496e42728fd03"],["/posts/1b5b87.html","e8841c97343bf5c42b6c174e4090fa81"],["/posts/2134d9d1.html","0f929b8f2f17536ee3afad9736c487d7"],["/posts/21fabcd8.html","ebe9121cee1a7bcd41fc49b1f65c9741"],["/posts/28c755c.html","304185f341198e4060e1ed388dbe8ba0"],["/posts/2f77f294.html","787942d0b10952641e7b3c169b501f64"],["/posts/30621cc0.html","3eb530555621c8ce78008a604337fc70"],["/posts/330d6f69.html","a2b836447047aa8cc1daa3608b57cc1d"],["/posts/3b744803.html","265bd3143122ef131532ba302d4671c8"],["/posts/3da05156.html","74beb4626a92db8b7f53497fb6465dbb"],["/posts/3e91e0fa.html","91e6c6151adf8ae9d57a74f20e84ed51"],["/posts/41c2c0d2.html","3e26d7b26c1df24df23a2c4c03c5fd80"],["/posts/46fc5adc.html","d7a171690f4c7e501b0674d12c145dd4"],["/posts/493f6b85.html","afb7852f5a2f24ca008e07c3f08e1a45"],["/posts/497e40e0.html","a8bf08744946e4ce2ce6d158dca251a7"],["/posts/4a17b156.html","f93def05992c1652c6f401e1d8b24e75"],["/posts/4e2d7b19.html","5055202863ee5e6fe29bbee08be8b982"],["/posts/4f81eb97.html","f8d2d7e69ec58e747b83ed335e810916"],["/posts/53721e0e.html","05c2b55a1e27e2ccbce3ab9bac8f1ffc"],["/posts/5dadd067.html","332f9d8e8e707e84588a46498546f56b"],["/posts/5ff34642.html","012aad3799ca456a44e3dd37038c74ba"],["/posts/653abebf.html","98d05f7fc67c453634580c97a8db50b4"],["/posts/681265c2.html","62c5301e90bb8216bd3300e1f788ca00"],["/posts/68a36c37.html","61156ac8b73ae11838f74a8d268c12a9"],["/posts/6f44662f.html","e204a5706dd911ea58f8f818af0de586"],["/posts/7207f70e.html","8a2a0b2e832117e19f03e0e66e0865d2"],["/posts/7289f891.html","0314749c6ba0142db985afe25ada4147"],["/posts/732e626.html","c147c0c49dec18730f5bf5e4cedc7e77"],["/posts/79c78bc9.html","a8393f383d6dd52699fc9f26bc51816d"],["/posts/7c4f393d.html","f540837a50d34319a607aab0caa08455"],["/posts/7c825231.html","6be6ef71dd762c345d0a31baf9756f60"],["/posts/7cd0d214.html","8bfa73c1377eecff2f2f1487c45cbfc7"],["/posts/7d9071b2.html","13f2ae4ee0ceffb1d45ca54d0ca7695f"],["/posts/7e13cc3b.html","adac24a2e10889a0c20144d712d107ed"],["/posts/80a7ecce.html","03cb5e29aff44875ccc75e08e0e8abfc"],["/posts/821a4686.html","d76d35b242fc59d2ced69e9a85c211bb"],["/posts/8a741756.html","7435ed708bbbfea9b0ab20e668728222"],["/posts/918d46c1.html","b0db15edc3b0e9fa1809964eddd31198"],["/posts/93c8c0c7.html","b1db05fa1386b3e05c73cca8277e27e1"],["/posts/9a59ce11.html","3f62e0ca5ff2cf25dde8b8c3622c8830"],["/posts/9f057e9a.html","5734da1721c5c458c0a9f439886c3c8e"],["/posts/a7d437fe.html","de7c3e1f08e5390c0f1e4ff75ab793fe"],["/posts/a85c4b71.html","ce88095ccd35d07e0aca6e5918550994"],["/posts/ace4e4cd.html","4c21a52e750b00310a29f10766d6d695"],["/posts/af30ddef.html","01d8b48e28536f35f70b0dad74b8d067"],["/posts/b1eb9c6d.html","00e4ebde27f2644710ee750514e4d598"],["/posts/b564e922.html","471fb0a91b3739c6c874030e52b659fe"],["/posts/bc9a4dc7.html","67a1a2848dd5eb595619313c567fad7f"],["/posts/be543a11.html","7ad2e7d6bf6417c6e936c9253ea9abfd"],["/posts/c7170176.html","edb5bbf9a895ddb7a153f467b3a6f301"],["/posts/c9b871f1.html","ba8ab8c90c92bce8658423a5497c439b"],["/posts/d6ef11e5.html","79a47723fe4edead1556d1d361e8acf8"],["/posts/dcd6fdd1.html","1d28d31ffe7031fa8c11244ca87a9915"],["/posts/de24a124.html","2df54a7144f35c7ef58001e8d56f3e33"],["/posts/e25a3e3a.html","6684d361e30d83cbd3e4c33b1ab90aa2"],["/posts/e32cbcd3.html","49c6e5c8ad1a5fb64750df84252226c5"],["/posts/e60dc441.html","87dab85391d6c59ec683b5acfe795db0"],["/posts/eebbc69f.html","37a8cc2fa4ec650077a4173fc74bd9e5"],["/posts/f08119d7.html","6b7f459ab0e00cf20cd2e8abf98eb734"],["/posts/f22f4e18.html","98654b94f3962e8f9b42b1131d2eba58"],["/posts/f34dbb9f.html","932c510b45e96ef15d13cff132a8ad01"],["/posts/f36fedbe.html","7351280c9946b6bf0981bc0438aa0607"],["/posts/f7f51423.html","871214dea2787339a764fa034bbfb671"],["/posts/fa75ad5e.html","c69ab13cedbbce49fa3b6f95e26d9ac7"],["/posts/fbda33d5.html","7d52af5ab91884d7a0a4cedf63582c0c"],["/posts/fd1a8f9f.html","3a533bba402bdf0725d867d92fe6ce4b"],["/service-worker.js","2ff2ce3d95c3022aff2a6fc2b1b7bfdd"],["/share/index.html","6c2d1607d8354dc39259b96a75b61cbc"],["/shuoshuo/index.html","8de46a427012c01cfdcf95bc44519b14"],["/sw-register.js","27c4dfd787736189d40524e1ad9e4866"],["/tags/CI-CD/index.html","14fc228f91c93b5325a69b4dec734f48"],["/tags/Docker/index.html","ca1d683abda48c6d9cdcb14dcc0b99e9"],["/tags/index.html","e67e69915760fac04d8c71c1a154a9a9"],["/tags/【每日早报】-2025-02-25 - 星期二.html","7c1d89460506c40b3ab1b379a51e4997"],["/tags/养眼/index.html","1007eaf4858debb1c4038af079f31d01"],["/tags/容器编排/index.html","b6bea73779107f92fbeecc527d0d4f7a"],["/tags/每日早报/index.html","9e74b14c805a7a05112a19c44c7522a2"],["/tags/每日早报/page/2/index.html","1d68af54422bfe36f2516ddc9a354de9"],["/tags/每日早报/page/3/index.html","f0dc9685fdfcee26672c8a65ba23154a"],["/tags/每日早报/page/4/index.html","216608210a2317022fbdd68e068d1b2e"],["/tags/每日早报/page/5/index.html","ea228afd661f75620ce9d732fcc2c59d"],["/tags/第一篇/index.html","5be359936d4484e7c174372cd9147562"],["/tags/网络/index.html","de17aef9ed6bb9c819fd6396b9eb052c"],["/tags/网络/page/2/index.html","4085a40daca7b5e7641bb6ff58e1caf2"],["/template/index.html","1afb36da1d3668927402060fef3378c1"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","07ed398248d94003f3d4b75a067ed818"],["/Gallery/index.html","7b823f08737a39ec2a4d7b7cab764864"],["/about/index.html","947a5eba938943598ed7bd52453dd136"],["/archives/2022/08/index.html","d80c939df24bf1827a40ecbd356d7c29"],["/archives/2022/09/index.html","5777fac9f007677b8554530a1b8f4bb8"],["/archives/2022/10/index.html","834cb24a3a27e094589c46f94db12fa9"],["/archives/2022/index.html","7216565af3268d36e452ab1f8107c9b9"],["/archives/2022/page/2/index.html","a6f4ab87d948296edcdd4e3e835de832"],["/archives/2025/02/index.html","41c64416f856b9134e3020eb64273d72"],["/archives/2025/02/page/2/index.html","effd52b9a3ace42267841ed3ed801142"],["/archives/2025/03/index.html","5e3292abad528afa80b9bcc857627dea"],["/archives/2025/03/page/2/index.html","782034fd80dc35e2fac80d0d849ccd5e"],["/archives/2025/04/index.html","f30be76f169893e841a999392c37380f"],["/archives/2025/04/page/2/index.html","a2b1c468c04f6aa8c594e2e6742aee2d"],["/archives/2025/05/index.html","b85faa9a752a8da7d7fd442f5c06cfb1"],["/archives/2025/index.html","67d4a0b71e2dfd588c60a8a6024e0db0"],["/archives/2025/page/2/index.html","db5423949a8f8bb508ddc4cc8eb9a686"],["/archives/2025/page/3/index.html","91d5285c0cc293e5f76abacbd92a655b"],["/archives/2025/page/4/index.html","29d8c96948d4ef1705e6e03bc0f7a488"],["/archives/2025/page/5/index.html","fa48a1e6ad2e3a96dd04c914ab20e733"],["/archives/index.html","a3c68398b6c75cde6bb0fd7af7e1e093"],["/archives/page/2/index.html","fdf8e8a6444b25488180dadf83830f8b"],["/archives/page/3/index.html","f1fc19ba130921ff0e18afdce57b96d2"],["/archives/page/4/index.html","e7b3d7067a7b27f38f47d671c0d51f0c"],["/archives/page/5/index.html","ac618ec028832d7b7d711e4035c70e6c"],["/archives/page/6/index.html","5bc6720de228841b4ee0293b930648b2"],["/archives/page/7/index.html","d3d28030f8821f30a3d7f046acc00db4"],["/baidu_verify_codeva-J5b2WWChcR.html","daf23dac54b068590af04741d8f38fe7"],["/baidu_verify_codeva-cwyza0ZFJb.html","6538f961b07168c5594fa7800152f48c"],["/categories/index.html","42a58caf253891b6214db991c96ba471"],["/categories/壁纸/index.html","46a731b4f78a5289c2c4fc190bcbe84c"],["/categories/机网/index.html","9d04327b9ce6bfc6738c5bad83cd72ea"],["/categories/机网/page/2/index.html","cbf37dd7271cb1e0427cd639952859e2"],["/categories/每日早报/index.html","2c4767fa60cc9aee41cbe6af3edb6487"],["/categories/每日早报/page/2/index.html","8668b50e754a658b1a293cf3fe3aa52f"],["/categories/每日早报/page/3/index.html","45f769084e6a4afce5474e55e18d015d"],["/categories/每日早报/page/4/index.html","79df0ffe94408aa7f6be3f6d48c9d063"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","4227af7bc98ca97ffeeed34bd5a763a7"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","72e1ae8f55c8a981cd28094f67c671b2"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","9c89e97d787c7d023d07c44e2d4fd572"],["/js/ai_plugin.js","0a199a02c56ecb46b0fe60e869a32317"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","f4ad5134e3fab9370473e865968769eb"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","5b4cb202eced0aaac7ce37dd0539bc73"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","d4de5c3a2830e1229d6351baf7dc2e98"],["/link/index.html","43ffe1c202d954ee3cd1299153ce1b9b"],["/music/index.html","2c075ee1d2c8f60f89f30b68e1d05625"],["/page/2/index.html","34bd42fe2ecbf3350064df51301a7b0f"],["/page/3/index.html","1a2a3658b78df28c46862a1628526e3f"],["/page/4/index.html","e9f79aeec9106e5a8aec7418c46c8097"],["/page/5/index.html","be581e62247ccc391e68c2b2484ba540"],["/page/6/index.html","c3e059769b4e2e3275e1cf4134ef5c2f"],["/page/7/index.html","d5f6cec47c376ce79d07fc37401cdfd8"],["/posts/12501d69.html","a921eaeca7a724f4faa92506cfa50316"],["/posts/138fefbc.html","7261c54d0d01684b66a888457daf8417"],["/posts/1484043c.html","1d3c09244b8d77bac8d10fefe0489ac9"],["/posts/1a3d44c.html","91d1217d0a3e5722f36652e76473b72f"],["/posts/1b0c78b3.html","f663c0bbf15eb70bd2284cf65d8fe4c2"],["/posts/1b5b87.html","9316ffe5b4ceb67c022e016fc4e146ac"],["/posts/2134d9d1.html","1bdf15ccea762be736262666aabdd432"],["/posts/21fabcd8.html","177110608becb34526462d75beca6091"],["/posts/28c755c.html","842c29aeb8b430a99021805cbbe7362b"],["/posts/2f77f294.html","6318cb61058df2e7a11c66342a944a35"],["/posts/330d6f69.html","73806a69630de1c361c36caddf7b6e80"],["/posts/3b744803.html","e858205c4c362b2e2d239779194e09f2"],["/posts/3da05156.html","803f8aa137345fd3565f40432d48e7d1"],["/posts/3e91e0fa.html","128e851e7427b66352d0e9a08a27c14a"],["/posts/41c2c0d2.html","63e53984dd3fb2edfa333b940557a211"],["/posts/46fc5adc.html","19ec58887e4ced4ad865ab59c6cf6a50"],["/posts/493f6b85.html","508b37e85543bc35856c196e96115795"],["/posts/497e40e0.html","71d258264eb8987f235a89a0b0a27658"],["/posts/4a17b156.html","56be38cbc52ccfcd34db690b490d78e9"],["/posts/4e2d7b19.html","c4d8e9088fc3b54d7c13ace9977f1534"],["/posts/4f81eb97.html","c93bcc79f7759980c77b20cf5925444c"],["/posts/53721e0e.html","49126a4f5611fb0c3fc92332d386e06d"],["/posts/5dadd067.html","45427ef8325018b400d5771a0daca931"],["/posts/5ff34642.html","4bad3d19abaa3d6cd483adff6f50ab14"],["/posts/653abebf.html","bffb72e664edeff428a6a4e10fd96dab"],["/posts/681265c2.html","9c732ed755433864c2d1ce2a496940f5"],["/posts/6f44662f.html","25f123a2f4630e64b2346bfb45b44845"],["/posts/7207f70e.html","d72fc8c8431d353edc581fb3403ae1ca"],["/posts/7289f891.html","1e29338401a5dac68c37b0b788d918a1"],["/posts/732e626.html","3d8b8074e886dcd6f0b61502eb507bbf"],["/posts/7c4f393d.html","de1da345145ee66d826bf3c440d03712"],["/posts/7c825231.html","d0725cfc2b6ff6ec9744b72501f875dd"],["/posts/7cd0d214.html","df6dd67f46d4634a94fba03948fccb0c"],["/posts/7d9071b2.html","96db089befbcb59acff0b19d1d12972f"],["/posts/7e13cc3b.html","a4930b4bfbd99d4482507951d17527c9"],["/posts/80a7ecce.html","02de907a5f26d485c564734cfb365bcf"],["/posts/821a4686.html","d934baef966d8c92563582e34ec17dce"],["/posts/8a741756.html","7b9ae057dab8484f0e4c3a5c85677c00"],["/posts/918d46c1.html","260a93001d6f77d04b1822210a81378b"],["/posts/93c8c0c7.html","84fa47213977d5305b13d2b12d923615"],["/posts/9a59ce11.html","78d85425c7227c038e887f053123e37c"],["/posts/9f057e9a.html","02daf1059760920b8ae05ab68af1628f"],["/posts/a7d437fe.html","0fb275991a96943d68ab41a55f888dba"],["/posts/a85c4b71.html","3beb012410e91f29608dd538a723419a"],["/posts/ace4e4cd.html","d52a8a2735e771926d15bceeaaf9c92a"],["/posts/af30ddef.html","a704bd2756dbc1060313d905b26f984c"],["/posts/b1eb9c6d.html","9cb82f3a347661df7f0762310565befe"],["/posts/b564e922.html","ea6edad725427ee5c06687f700810072"],["/posts/bc9a4dc7.html","bd14f2a41cb2cf368819a4fd88320ded"],["/posts/be543a11.html","9fc9202005123ec361b1cf902332d2c6"],["/posts/c9b871f1.html","e5e9ffe6ef35c8a3b6938b455ea846ce"],["/posts/d6ef11e5.html","d129d50172d33f4dd52909e58c56bbb1"],["/posts/dcd6fdd1.html","5c3c48bbb2baf75742f42988580897d4"],["/posts/de24a124.html","d0c314ee23135a514939467a23c35d01"],["/posts/e25a3e3a.html","8ef802e5746c498226c8052cd2307596"],["/posts/e32cbcd3.html","db619dd87f906f592b466b28a71044f7"],["/posts/eebbc69f.html","29b7450190fe02526385aef985f93a8f"],["/posts/f08119d7.html","edfcf3b0577965782d999830600bc88e"],["/posts/f34dbb9f.html","011220fc6ef1fe44aaf15bbddea8fec1"],["/posts/f7f51423.html","0510b2ca0e2f8fd94a2736e0c7acdd25"],["/posts/fbda33d5.html","b42a2f07e48b38aad5cd0527634871d6"],["/posts/fd1a8f9f.html","306d843ba5285714b5e400cdec36b03b"],["/service-worker.js","2b3c347dcf092287e52a98781c4ea5c1"],["/shuoshuo/index.html","1384347d065243dffef40e554510c581"],["/sw-register.js","7aaab30ed852b74e6d56132f2bd3064b"],["/tags/index.html","9e92c93e356c226a0dca4f0dfa9b4258"],["/tags/【每日早报】-2025-02-25 - 星期二.html","fee9fdaedb31238965727e9547c3cdf1"],["/tags/养眼/index.html","c61e435e609b2450ba57c89775e3c1c8"],["/tags/每日早报/index.html","06c380a4eb0df5360f310a083921bd42"],["/tags/每日早报/page/2/index.html","444bf14147ebaa696c190e56a57d3788"],["/tags/每日早报/page/3/index.html","bc9e1a4630e2829899d3141fea148437"],["/tags/每日早报/page/4/index.html","0727620c7e3cb80e65b8a9d2ca453a44"],["/tags/第一篇/index.html","aab881a644af14a9ba47fcf7533b717e"],["/tags/网络/index.html","ba8ad61e37c6a38bb09e038a019950ba"],["/tags/网络/page/2/index.html","3f87cd82623b27cc20b409e789dc74ba"],["/template/index.html","b996b69656c4b9ce1e89cbed81568e57"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

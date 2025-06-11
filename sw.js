/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","26d30f2cd55e01b1520956ae8946a18b"],["/Gallery/index.html","ef6db02e0e85844edee8948ace6df3a1"],["/about/index.html","197f1d6397babe68f88fe4421e45b8e7"],["/api/index.html","137573a079a62ebd2b8977652492f8a5"],["/archives/2022/08/index.html","23c04448617eed9a208bcc15d2bdce49"],["/archives/2022/09/index.html","223d71d78fc2b1ee6f2ac57a5738d0bd"],["/archives/2022/10/index.html","ff15302af34ada6d4ef6b41924b08387"],["/archives/2022/index.html","38987b469666e5badbe908407f1e6c5b"],["/archives/2022/page/2/index.html","042a65aa6a537b64d2c99803023f273e"],["/archives/2025/02/index.html","f72276f35b2c007ff2b381eeeee02b7d"],["/archives/2025/02/page/2/index.html","e4501571c82c9229d28edff529f018a1"],["/archives/2025/03/index.html","7b13e917f963a647232f620e42a3d4c4"],["/archives/2025/03/page/2/index.html","a4278b29c49bba817d042563aad6e757"],["/archives/2025/04/index.html","e78bd8ff3ddc8c343d79b77036845eb8"],["/archives/2025/04/page/2/index.html","2cc0a71adaa5f48cc19f0dab7c539518"],["/archives/2025/05/index.html","619346e95f7dd1c8101bf77ff3fbd699"],["/archives/2025/06/index.html","156d8dd8b93858a3880de6847aa6965f"],["/archives/2025/07/index.html","ef078ba61ff2c186dbe77bcecb4260d5"],["/archives/2025/index.html","aae0f1c48364acabbc99efa9cf51b7fc"],["/archives/2025/page/2/index.html","396423c85c81458f6934129ee06ed496"],["/archives/2025/page/3/index.html","4ce9e1b542340301af8e0ecb74ee2d58"],["/archives/2025/page/4/index.html","418a9abe769150ad69f283beada5e27a"],["/archives/2025/page/5/index.html","ee0861550964e72941b94a1fa1da4501"],["/archives/2025/page/6/index.html","5e358b4e2c78510f641b4577ddeef36c"],["/archives/index.html","ef2759d78d59e8abdaf9761505336368"],["/archives/page/2/index.html","a7bfb6f652b7276a05a1fb8fe2ace6d0"],["/archives/page/3/index.html","fe63130d33575ef948c31e30a8baef1d"],["/archives/page/4/index.html","539a1e68b7c289ce545cb0ccb3052fec"],["/archives/page/5/index.html","10b81f3719fe5e6c1447292906c45d5f"],["/archives/page/6/index.html","de09a75045799004d69901d919488b0f"],["/archives/page/7/index.html","b69b4f3f11dcdfba1075f48cf1ad5d81"],["/baidu_verify_codeva-J5b2WWChcR.html","24ff302bec42a0072c2d61a60bdeb09d"],["/baidu_verify_codeva-cwyza0ZFJb.html","9afb285fb06e9566d686eb3f0f73f72f"],["/categories/index.html","b400caf2fdfd15838fcde6f1f11b062c"],["/categories/云原生技术/index.html","247348266ecf09e899caf76e02e24416"],["/categories/壁纸/index.html","5cc7e97f566595d692ad09e5d4503c71"],["/categories/机网/index.html","e4b55b271e630ab532c08a81674dcf84"],["/categories/机网/page/2/index.html","d7f7ab4dc550f8cc0b3d8c1d37faa807"],["/categories/每日早报/index.html","7562c0ed48705152d499e614a83e07a8"],["/categories/每日早报/page/2/index.html","854b42a013fe21ce0174c5208d481129"],["/categories/每日早报/page/3/index.html","bab2d9aa7d28e3e8cc3f0910270d116c"],["/categories/每日早报/page/4/index.html","eb2f27bdfbde0e78208cc9aed0a3937d"],["/categories/每日早报/page/5/index.html","a6e2d1e2cdfb214783ffb44a016af7e0"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","ace5649b19c40ba497f85832d7cbf1f1"],["/css/mbg.css","c5fc4b0502c3fb4cd1a110dce934965b"],["/css/modify.css","385d0d350aced119ad5ab778b3275420"],["/css/progress_bar.css","3f84404c2d66a9d3cc215ddb4599ffc3"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","6eae2fb70f630a591f0a30a2e345e1ea"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","25047cb97cb7895efeb0f82b79c9c0ff"],["/js/AI_a.js","675ad3edb98910277d3cf1c647df84d9"],["/js/c_token.html","ae2c50810b623266025c3bd0f91aaebb"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","ce8fd52edc16df22081ab95e537e62c5"],["/js/mokey.js","36b077954889ffba99874d54683870d4"],["/js/python.html","29272fd4de860667bf1f3e75ca59a884"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/keywords/index.html","3bc7b22046f124493e27ebc1184e63fc"],["/link/index.html","d70fb7f0c4548e0d82411f54227d9c7f"],["/page/2/index.html","29ba3863316a232e559bb9a549c38cb0"],["/page/3/index.html","d86990ab19638ee12fb68588829d1e0b"],["/page/4/index.html","651eb79b97a9a36cd097826d41909553"],["/page/5/index.html","e04d6a4e746cd04bbb8fca6276f45dfe"],["/page/6/index.html","a57760b7cb5d226a623dc111023c9581"],["/page/7/index.html","09fdbdc138db22d85c4bfbb2315e6861"],["/posts/12501d69.html","3334f1017f360f59e82fd9462f7ffa1a"],["/posts/138fefbc.html","11f4914a3934c244f485f984eba25938"],["/posts/1484043c.html","b4aff8863141fe3fbaf76d683e377e76"],["/posts/1a3d44c.html","721a752cc97763022c252ebdd22d0a81"],["/posts/1b0c78b3.html","e570cd9bf068b458cb110b1ac0ac61d1"],["/posts/1b5b87.html","57b19b78e1232510901dc2b1152fc50e"],["/posts/2134d9d1.html","79b6960305c5db586e1336fb68a78fdf"],["/posts/21fabcd8.html","a0ecbf7850ebd06d736314992dc6a4e2"],["/posts/28c755c.html","456d216433336c3bb98b5ba0e7738e8d"],["/posts/2f77f294.html","f4b8adc229a59a8f7a32d64837a2865a"],["/posts/30621cc0.html","02ea9cb56a553c10ad638437520b8933"],["/posts/330d6f69.html","7afc0fa2fc6980e0973706970d6e4f8e"],["/posts/3b744803.html","f712048ba8a0e5f52454c705b5764c34"],["/posts/3da05156.html","805161fdd49ae886f7d8f5b13c64d705"],["/posts/3e91e0fa.html","91161b180ce183e519558b21556f5deb"],["/posts/41c2c0d2.html","f325c98ecc98f774eea7a1e0d75ad541"],["/posts/46fc5adc.html","e4b7b35ae41ae11e4afde6c522bfc531"],["/posts/493f6b85.html","43f9212acd79fd9afdbf91690f173b14"],["/posts/497e40e0.html","1785ee77827b1ea20fa82703f54dcc49"],["/posts/4a17b156.html","afa3e7b3614ed88687cc2f3116b37e65"],["/posts/4e2d7b19.html","d0282370a285b948f4194d58340723db"],["/posts/4f81eb97.html","4a44226b8e38601559f81c48b9657dfe"],["/posts/53721e0e.html","02f21f710966d3fae93f553cd524ece8"],["/posts/5dadd067.html","375035dfbb816c699499547be5495c57"],["/posts/5ff34642.html","152fe444b52afafe62a00c12cba5db40"],["/posts/653abebf.html","362c9cd47474b7fa348e52f8c45fbb34"],["/posts/681265c2.html","385e3f00fb416381488be0df69fbf69a"],["/posts/68a36c37.html","4eecfad0edb25b11dd9b1194e010f999"],["/posts/6f44662f.html","21c0836e31489a4febfaf22af9c24d8c"],["/posts/7207f70e.html","247a0bf4c40011bedc53977c5ebd0648"],["/posts/7289f891.html","ab2655222b31c61695f759c565b56a6c"],["/posts/732e626.html","04881f2e77eb9b7a20d836c428a49c4e"],["/posts/79c78bc9.html","13c316cbc75bd8f1be1c31661fec15db"],["/posts/7c4f393d.html","b7e087a2f310bf16676f702f00a2a7e8"],["/posts/7c825231.html","6ff20c6143bca76a7a7ac1227a719646"],["/posts/7cd0d214.html","94948da0bcbba05d30eb6267c9540083"],["/posts/7d9071b2.html","024c6c821c85493c251eb6cbcf111a18"],["/posts/7e13cc3b.html","91c71e28386a011a972343ebc70bf44a"],["/posts/80a7ecce.html","71da476ed7d425dd32f1a8013221f499"],["/posts/821a4686.html","805f32a14df73d449900f3db6a9aad56"],["/posts/8a741756.html","c01966edc82b5aa7f6d5c9d6e31f84b2"],["/posts/918d46c1.html","aca79b4af8bdf9907bbf310699fc58c7"],["/posts/93c8c0c7.html","f5acbcf7ca7708c061bea3a0b83ea277"],["/posts/9a59ce11.html","c66bc2f1a3e196d46e4677c0d5be9c58"],["/posts/9f057e9a.html","0adb726cbf7a2887ab46400cdcd7e8cc"],["/posts/a7d437fe.html","8052ccb04e3b385a138e152ea79b5c53"],["/posts/a85c4b71.html","bf920712f66a29e67fbba737e9ccb51c"],["/posts/ace4e4cd.html","04269da596ffcb9e63866271ba499c05"],["/posts/af30ddef.html","c56623b3e25ce5200abf0c6b2b755655"],["/posts/b1eb9c6d.html","524951700950716d31c6789cee413269"],["/posts/b564e922.html","fc5f7dc892b28622d0beb17bfa12eabd"],["/posts/bc9a4dc7.html","391f6ba841ee6b8a9a61ea4eb51447e0"],["/posts/be543a11.html","010b0306211bc4edc8465a137823d2d5"],["/posts/c7170176.html","fb5853a68ac95d6b763f0a72ce3fcc3d"],["/posts/c9b871f1.html","173ac11892a89c46b50740b3c8a31a7a"],["/posts/d6ef11e5.html","d76df39bec09debe0bc7cc8d21d0320d"],["/posts/dcd6fdd1.html","98615542277fc460bfe050d646703548"],["/posts/de24a124.html","93a859b851786edaed5b715ce526b211"],["/posts/e25a3e3a.html","43c9007e2f7914380f2d65208d52cba9"],["/posts/e32cbcd3.html","862083409560ad914dc5e2e052e32fdf"],["/posts/e60dc441.html","f6ac59462cecd1a744f597c5f558993e"],["/posts/eebbc69f.html","80592f6a985d9bfa3d863fef755b34ec"],["/posts/f08119d7.html","2f40102f369fa5da28836bb5c4738533"],["/posts/f22f4e18.html","3916239cd3ff3601b44e440eb0229b4b"],["/posts/f34dbb9f.html","62297ba9d4570fcd28200abd5eee4994"],["/posts/f36fedbe.html","b04cf3797375d20ef541da557e71f54e"],["/posts/f7f51423.html","f393a60458986129a53f55f5b974a5ac"],["/posts/fa75ad5e.html","90bf0557dcf88f536d4165f403bcae7e"],["/posts/fbda33d5.html","6185a584af57587f834ea35dfcf8aa97"],["/posts/fd1a8f9f.html","4bf1de8447bb195503e2ca597fe03b46"],["/service-worker.js","900cc74d8292d074a511f5de2b323922"],["/share/index.html","7769b799daeb1657d9f1ef35c6e7736a"],["/shuoshuo/index.html","0dad97114844364b18211d02d0e0a626"],["/sw-register.js","cce1bbf5c7798b0b4ce6b7ce747f507b"],["/tags/CI-CD/index.html","18c5b3a53a16e3e0d6a797c35f5c64eb"],["/tags/Docker/index.html","5ea3fbc3265be9e7b4a17d30afc181a4"],["/tags/index.html","6fb4508d1bfc1317e45113ea8cecfb1e"],["/tags/【每日早报】-2025-02-25 - 星期二.html","b38421c76e14e7ad85461b7310bfa383"],["/tags/养眼/index.html","fccd2cad4a760db0881b7c7530406897"],["/tags/容器编排/index.html","b0bef76225660d744d6d06e092456835"],["/tags/每日早报/index.html","5dbe7ede94d3d56d047e491ec399294e"],["/tags/每日早报/page/2/index.html","5421c51013eb4139f469c5318ee0741c"],["/tags/每日早报/page/3/index.html","01e193938d681ccc7f60c5cd87443189"],["/tags/每日早报/page/4/index.html","30ab10e250227905ad6f970b5939aec0"],["/tags/每日早报/page/5/index.html","daca9b6d5bc6eae0a00c99d054ac7c33"],["/tags/第一篇/index.html","b51a405f6d8e1ae405fd0e897ea05e67"],["/tags/网络/index.html","30482493c43f148bf6247645d42e2fae"],["/tags/网络/page/2/index.html","ecba3c7eebf660067817349af5ed71be"],["/template/index.html","e28faa0ec9a2125f3d8df671904c6869"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

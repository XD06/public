/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d8d8c562e30b5d56663af9fbddd77146"],["/Gallery/index.html","3a6a7e474bedad00e9f265da67e3a550"],["/about/index.html","542d948fcadab22c20f7cbcf07982e9e"],["/archives/2022/08/index.html","907449b69a38d4833c7ff3c80db25c50"],["/archives/2022/09/index.html","dba9df535be83c1514a8ad246304c282"],["/archives/2022/10/index.html","8e4b0ddecf28b280b5c6648a2b437c6b"],["/archives/2022/index.html","26fb606cbd1e4216a692971d3a08014e"],["/archives/2022/page/2/index.html","6f5f3415e24c82315a5d4fb373e51e78"],["/archives/2025/02/index.html","3aaef8eee8e94389358bc3fc3c67e1be"],["/archives/2025/02/page/2/index.html","f00d7e97ffbfbc9ce7892a269c8c89e8"],["/archives/2025/03/index.html","d50d5bc94f140de6419ee6717dbb6bfe"],["/archives/2025/03/page/2/index.html","2508f8a6a3554d22abd9e14dcf014cb6"],["/archives/2025/04/index.html","8b399aca5e54870bb2402ec4ebd5930e"],["/archives/2025/04/page/2/index.html","cbcbdff63226ca8cefbbadfa716d4ecb"],["/archives/2025/index.html","98485c3448d86b238bf7353c809ddd51"],["/archives/2025/page/2/index.html","5adf76521dfed400d9a31f50b328f40f"],["/archives/2025/page/3/index.html","9ce6f93a993fde6b1327fca7ccd46c38"],["/archives/2025/page/4/index.html","9794b417a7a6aa466053cb6b866f54b4"],["/archives/2025/page/5/index.html","3b17bec027aad9656be29ee640e4c356"],["/archives/index.html","e3f3c21b4058bb36821a68ef9605a2d6"],["/archives/page/2/index.html","df96b771c908e2dfa11cb6dc20a311b5"],["/archives/page/3/index.html","03b4279a8cd96bb2d9c9c0bfa8940981"],["/archives/page/4/index.html","1b8e075f727e5c974fb82411eb75a24b"],["/archives/page/5/index.html","617edb007fedfbf8ea81592b3fd11b77"],["/archives/page/6/index.html","2ff9e5ad7244e43a6702e6ece8a329ea"],["/archives/page/7/index.html","421c2fa153a989040edcae5a6f7a50c1"],["/baidu_verify_codeva-J5b2WWChcR.html","675197939efe3a75c5ca9e8acb2679b0"],["/baidu_verify_codeva-cwyza0ZFJb.html","754fe735502c6550f4c4669d5e02c85b"],["/categories/index.html","69b18dec18a25794424d0484b6cdab0d"],["/categories/壁纸/index.html","e694e61c2e1e6b46712f806bfd09002d"],["/categories/机网/index.html","93a93ed2ef66e6fc7eb4ed93614b83e7"],["/categories/机网/page/2/index.html","9df45bf431fe8b56725d4a6e6823b333"],["/categories/每日早报/index.html","087a6296ceeb0c70809379f0357655f0"],["/categories/每日早报/page/2/index.html","2bd3ae39dfaee7091a94dd47d01ffa6d"],["/categories/每日早报/page/3/index.html","4ed656e724be473f49236cb8efbc3451"],["/categories/每日早报/page/4/index.html","976fabb49b96d74a9bbe7b0c9aaf42e4"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","1e26ea7f6712fc39519b6868f7874ccc"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","a4ac72f8650ef321fde0da4255c6b0d9"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","f42456db1aa0ae126a08bb2d3523d253"],["/js/ai_plugin.js","0a199a02c56ecb46b0fe60e869a32317"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","e73266cc5091be6197cf896697525731"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","a338ddb56a531c6ba91cfc922a9e76ac"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","7bde1545edc3718e90c8ae8bd11af679"],["/link/index.html","1281748d614e10a288ec90639f199786"],["/music/index.html","1efc8763a66360f41f6cd221c9b57dd2"],["/page/2/index.html","1009f62cd8d9934eaa5a1b28f22adea0"],["/page/3/index.html","6df3a2b6c86fd01cb8f00b4063f77ba6"],["/page/4/index.html","3272e9fcad66a711b1425a64d3c62262"],["/page/5/index.html","1aea57a5d8486c97b2eb5f68d59c5c6c"],["/page/6/index.html","8cb3cd8f7af9a9784dc077ff36662535"],["/page/7/index.html","3a1cf43b7ba43f0c913e0d8614fd297e"],["/posts/12501d69.html","a209e2fb86e2d40a358b35f25070cdb6"],["/posts/138fefbc.html","30c75da54b3df62ac9c31e8ff9f8f226"],["/posts/1484043c.html","de57997a48ac8629e4e7c74090f80d9d"],["/posts/1a3d44c.html","eb604eb00be412180b6e75ccd5b24acb"],["/posts/1b0c78b3.html","c801d26f7ae6da81d98d24072452aa45"],["/posts/1b5b87.html","21dbdf617ae161ff4b8fe09a51d5dc9b"],["/posts/2134d9d1.html","b97833fbc784b6715a5685a619ced984"],["/posts/28c755c.html","0af020e0b7ce83abd767218eb9f1a3e5"],["/posts/2f77f294.html","c5d0bca7a838154fd9a84fa1a4d4f007"],["/posts/330d6f69.html","408f114b72c56eefe6158f018d2e6769"],["/posts/3b744803.html","799c500bf2e60ca3d682b7913a98ec57"],["/posts/3da05156.html","3e7e70b90601b3a54a32387028d5e78e"],["/posts/3e91e0fa.html","b1eb6b5235a7dd6e0887a29803539731"],["/posts/41c2c0d2.html","e755a0903c76200eff57758a4c99a47c"],["/posts/46fc5adc.html","cc9300cd288bf53ef303e6f2852c5cf6"],["/posts/493f6b85.html","658fbb7f2e4c0ff4677a0cee0433270b"],["/posts/497e40e0.html","1a9973edd6620d7ee040b9fc8d42e280"],["/posts/4a17b156.html","7552d07442971ddb3a356b6d7ae49448"],["/posts/4e2d7b19.html","2998d65d2dcffd8a19fa39cb3cd5b921"],["/posts/4f81eb97.html","75e120775b473550f5cdc30af15b1631"],["/posts/53721e0e.html","f60289b9d5cebbc97c8b0ac60661216d"],["/posts/5dadd067.html","3a2279929e77914e93c6f1dbbbc8a69e"],["/posts/5ff34642.html","02ad7301b57c4491650142ba6dfd4fc0"],["/posts/653abebf.html","987ba77119b16b6d1bdb48357af3e82c"],["/posts/681265c2.html","b3c7544a77d1c5326c8b14f3ce9fd117"],["/posts/6f44662f.html","924c49b3dec2919b07d66c4868f514a6"],["/posts/7207f70e.html","d6222d4480bd6b0fb768b239f4192871"],["/posts/7289f891.html","66d829267e700e4a0455d601279b356a"],["/posts/732e626.html","0f847538eb1f0ea9c1328a3936852c85"],["/posts/7c4f393d.html","55488d83b8a69f7f497902dce2fd1816"],["/posts/7c825231.html","06bfe44145f1281bf0ec2fce694f51f6"],["/posts/7cd0d214.html","34ebcb1e08d2f0620e980d5295aeef25"],["/posts/7d9071b2.html","b670a8ae31af6f44e390fa0e58cd8e8a"],["/posts/7e13cc3b.html","ffc335298f9f5718777aa2553adc6273"],["/posts/80a7ecce.html","f77f0bdbaa42ddc263d84cdc7cc5051e"],["/posts/821a4686.html","a8fe88011a717908e18d5fd177063a51"],["/posts/8a741756.html","b995b09d7e7135cc1637cf5113990aa7"],["/posts/918d46c1.html","9590b1326e95c017590c3a4b17ba96dc"],["/posts/93c8c0c7.html","e888c3e5c57b16bd7b4b7f2496ef3750"],["/posts/9a59ce11.html","8042465bac6c6e5f46b8b8bb21b955a0"],["/posts/9f057e9a.html","ef7f82f1a46befba50072c745761ac35"],["/posts/a7d437fe.html","598249532d822aa92b3be5581df4b4f4"],["/posts/a85c4b71.html","8cf9d7964d04732e168b61ebf7da59e2"],["/posts/ace4e4cd.html","1b4338f7d72ff5403d74169cecb41dd4"],["/posts/af30ddef.html","ad0fcc43f7b3561ff412045d966d5c30"],["/posts/b1eb9c6d.html","a01e816ff6987c372c50e08d9b724fc0"],["/posts/b564e922.html","6c39386a2b0a6deb74aaecb38d78b488"],["/posts/bc9a4dc7.html","87db0c8c6db772651e32cdb2e6793f25"],["/posts/be543a11.html","0c9b4de2a5867c244109f878b308943b"],["/posts/c9b871f1.html","382f42cec264b8334cb11448321b6146"],["/posts/d6ef11e5.html","16c8fec5adb313d89655ebf734650339"],["/posts/dcd6fdd1.html","91cf3b92f3c7010ccdf4a96aaf303103"],["/posts/de24a124.html","352375cd094e0d1c134f9a6fe8cc31a4"],["/posts/e25a3e3a.html","195151c8ef6ec3792660a87f809e860e"],["/posts/e32cbcd3.html","12359a5d73ce18ba4fba18e2f953f2af"],["/posts/eebbc69f.html","f7ce9b3e5d1e9ed9e6520b2602909739"],["/posts/f08119d7.html","c03187630870f84b4162d01382d3144d"],["/posts/f34dbb9f.html","eab7a7c39a1488f821a2304e71d31a26"],["/posts/f7f51423.html","7bf960b0ca131018e5275ba257333254"],["/posts/fbda33d5.html","4db5116fce31c24520c25b51dc3b0880"],["/posts/fd1a8f9f.html","88c045f6f229daad82bab301e46d3f8e"],["/service-worker.js","a42256fab0cdbfb9e7206c2fb2c4e5e0"],["/shuoshuo/index.html","879b5787c5f20717237fa67d2c8f6323"],["/sw-register.js","3e0375eb445503c611071410ccf54f10"],["/tags/index.html","099bf453671ef9c50d6e2deed71e2075"],["/tags/【每日早报】-2025-02-25 - 星期二.html","9c4ebbca353ea99f8ef883d610371f76"],["/tags/养眼/index.html","573cccbdbd155d1d59b4bc3d520920d9"],["/tags/每日早报/index.html","943a7397dac31aeabc1b16ff44984a25"],["/tags/每日早报/page/2/index.html","b2718e23292c72366a523d1f1c72f0e3"],["/tags/每日早报/page/3/index.html","8a40c47a76b02ddd04eabb8fdc469c19"],["/tags/每日早报/page/4/index.html","83721bb5ce5430586480418271e9011c"],["/tags/第一篇/index.html","1da243602ae159db2f8ca18401d5ca26"],["/tags/网络/index.html","0ced406dbeb4054bda35594291012711"],["/tags/网络/page/2/index.html","a120a84e1a0de654af99a24df3e4e46d"],["/template/index.html","4b60383e001e88b7fe6f0a965ba25f17"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

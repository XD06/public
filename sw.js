/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d8d8c562e30b5d56663af9fbddd77146"],["/Gallery/index.html","41ee326dadeeec7c42bf497e50dada87"],["/about/index.html","88c1db234f044928410f30364ba2b060"],["/archives/2022/08/index.html","175d3b5175d53906533ef8024d4053d9"],["/archives/2022/09/index.html","60b1629908691adc18bf47395885abbb"],["/archives/2022/10/index.html","49cf452a27fe40de046fbaba5dc5fe53"],["/archives/2022/index.html","dfcb30f7e02d32ff778196421529947d"],["/archives/2022/page/2/index.html","7004c2edb85b59a9fa033ab49f566c7e"],["/archives/2025/02/index.html","42dfae13a1fe6e738a5fc267fb308505"],["/archives/2025/02/page/2/index.html","5a21cbe7564d523baafeb62ec5974255"],["/archives/2025/03/index.html","c0dce08377dacb2b0715384c74e175da"],["/archives/2025/03/page/2/index.html","3776032cec443b8639c82ebcabb7fa4b"],["/archives/2025/04/index.html","8e8e58b2310a6f6e698eab391e187fa6"],["/archives/2025/04/page/2/index.html","fa9dfaa63e979719a585cd2d401a3411"],["/archives/2025/index.html","6f5798317f9a3464a4d8ad2f32217e00"],["/archives/2025/page/2/index.html","891ba4b2ec7bcb1a076b2fe49818c7c7"],["/archives/2025/page/3/index.html","282a7abc57f06ba5f4fb0c1841790919"],["/archives/2025/page/4/index.html","05e4ceda5dde461790c3661a6524e6af"],["/archives/2025/page/5/index.html","677c8f4288567c733ac7ac8b543f7898"],["/archives/index.html","c71b07b6ed39982ee7d3dfccd562cfea"],["/archives/page/2/index.html","78d81f796bbdee260140365b50e2d513"],["/archives/page/3/index.html","e9dc7f32661ada23747b65d11328efa5"],["/archives/page/4/index.html","fb4005c5ceff55214dbf79ebaa692194"],["/archives/page/5/index.html","3023202fef57f9ff8e45f16466eb05a7"],["/archives/page/6/index.html","95f7f71f32db44622375f76517845f4d"],["/archives/page/7/index.html","bf49915754ab147eabc44d23407697d8"],["/baidu_verify_codeva-J5b2WWChcR.html","c1a4ff203d1b36b3f46424d886f1c2d3"],["/baidu_verify_codeva-cwyza0ZFJb.html","fc3b9ba69852788230d9107a4a64a83b"],["/categories/index.html","25529c56d25e1bd2d83c3e3901b28be7"],["/categories/壁纸/index.html","c5b2e393d0a781374f65da67b5f03175"],["/categories/机网/index.html","dbb7ea0549e04c455aba04bc92b398e6"],["/categories/机网/page/2/index.html","24c3afee4503ebabaea2ba351165b9d8"],["/categories/每日早报/index.html","7595e4d83e28895a9e294fa4a072656e"],["/categories/每日早报/page/2/index.html","c7a313688cc8549447923452e3c1f06e"],["/categories/每日早报/page/3/index.html","316dee841b88ea62ca63e701226dd14d"],["/categories/每日早报/page/4/index.html","735940e418ad74079181cbbdeede2306"],["/css/AI.css","9aee10bb289b8706777b29a5ff7aa886"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","f86b51154518eac93a2590cfd2b30f05"],["/css/mbg.css","20cf95ee355ebea0b82bd0db8c0d4e4b"],["/css/progress_bar.css","43c65b42d14caff9cf1417487790893c"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","d443bb21382e7278a57c084702ff67d2"],["/fonts/FangSong.woff","2e1205c02ab84c986d1312c50762942a"],["/fonts/FangSong.woff2","d02ae0cef165fdb83523b29505656f3a"],["/fonts/Hei.woff","d69759d91a5e26b2e1526ec322debe91"],["/fonts/Hei.woff2","46fc9f136cf5dd3ca34d11f73449a178"],["/fonts/kaiti.woff","37090e9ed628a176f4bdf8321653316d"],["/fonts/kaiti.woff2","22aa1fdbb9ae8d746f07272ff560327e"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon.png","6b892105e8fb341eb72a287f69e6b7d5"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/stop.png","ffdaa278194c11e7bd5335e8e7f427ba"],["/img/stop.svg","f67edae44312a51a6913f37101fa0c7d"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","ac0901877632a7eeadbcaf8f4a8f5403"],["/js/AI.js","f9044fafcf3050e329d1c4adc19f2533"],["/js/AI_a.js","f42456db1aa0ae126a08bb2d3523d253"],["/js/ai_plugin.js","0a199a02c56ecb46b0fe60e869a32317"],["/js/api.js","5364c0fd59048e6efa833ce16602761d"],["/js/c_token.html","c31d43958e36e890a87960f2a530a009"],["/js/copy1.js","305fd404c8a185f0ef55161046c95b5e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","9c8195ef740206309338f272a9def491"],["/js/mokey.js","8371952102c0550a56cf2fb1fea19f87"],["/js/python.html","828bef590be19fb93a9a228cafeb1bf4"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/test.js","9b7f17cc3947a51bc91b064078484430"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","902032df09ca8b34e5ff18996cb8253e"],["/link/index.html","f39e6683f570c1df626e260d9abd2dc5"],["/music/index.html","86bb856ad5b25e0acecb9b7b090caeca"],["/page/2/index.html","e910d0a0753af99f03d23101c4a92af3"],["/page/3/index.html","ecc2a035ad8388667a8bd62662d81fd9"],["/page/4/index.html","e48c50ba0d77e8104304a110f4b393b2"],["/page/5/index.html","9964962f0056b32e3de870dfae1f06c3"],["/page/6/index.html","74bc5fdb68e4e958e82943b6f4aa2781"],["/page/7/index.html","e5fb20c0b902470028896222809d48a5"],["/posts/12501d69.html","a209e2fb86e2d40a358b35f25070cdb6"],["/posts/138fefbc.html","30c75da54b3df62ac9c31e8ff9f8f226"],["/posts/1484043c.html","de57997a48ac8629e4e7c74090f80d9d"],["/posts/1a3d44c.html","eb604eb00be412180b6e75ccd5b24acb"],["/posts/1b0c78b3.html","c801d26f7ae6da81d98d24072452aa45"],["/posts/1b5b87.html","23b9010ee343b9f61da76e1e30884e61"],["/posts/2134d9d1.html","b97833fbc784b6715a5685a619ced984"],["/posts/28c755c.html","0af020e0b7ce83abd767218eb9f1a3e5"],["/posts/2f77f294.html","c5d0bca7a838154fd9a84fa1a4d4f007"],["/posts/330d6f69.html","166c692489b1442f992fd79fde0a4bc2"],["/posts/3b744803.html","799c500bf2e60ca3d682b7913a98ec57"],["/posts/3da05156.html","3e7e70b90601b3a54a32387028d5e78e"],["/posts/3e91e0fa.html","ff25886df79f67e765178d360355f9f6"],["/posts/41c2c0d2.html","6ec0b19eaff8858769873e41f1553048"],["/posts/46fc5adc.html","3cf30fed91ffa0e1430ddad39312bc1b"],["/posts/493f6b85.html","36321e98bcab0321fc1637ded899ab7a"],["/posts/497e40e0.html","bf69d240db33d152e9146edeeafa40d2"],["/posts/4a17b156.html","fd4d7a5d46675f99304cd1bc11df0a13"],["/posts/4e2d7b19.html","2998d65d2dcffd8a19fa39cb3cd5b921"],["/posts/4f81eb97.html","75e120775b473550f5cdc30af15b1631"],["/posts/53721e0e.html","11614725c084782a3fe6d21e7c3f5c37"],["/posts/5dadd067.html","3a2279929e77914e93c6f1dbbbc8a69e"],["/posts/5ff34642.html","01999cacfef150f3b478d9755d64083d"],["/posts/653abebf.html","0bb3069835145bd7685323b58416e31f"],["/posts/681265c2.html","acb95f27a8a770261257035a30efdc87"],["/posts/6f44662f.html","924c49b3dec2919b07d66c4868f514a6"],["/posts/7207f70e.html","b79e6e1cd9593975e536ce816acbb616"],["/posts/7289f891.html","6d3c1909a53b259e5909368bd6d5e442"],["/posts/732e626.html","ef2704a2469f37886fb9b7d13e991ef0"],["/posts/7c4f393d.html","55488d83b8a69f7f497902dce2fd1816"],["/posts/7c825231.html","06bfe44145f1281bf0ec2fce694f51f6"],["/posts/7cd0d214.html","34ebcb1e08d2f0620e980d5295aeef25"],["/posts/7d9071b2.html","b670a8ae31af6f44e390fa0e58cd8e8a"],["/posts/7e13cc3b.html","115329982f336c043f2aa0781580dbb2"],["/posts/80a7ecce.html","f77f0bdbaa42ddc263d84cdc7cc5051e"],["/posts/821a4686.html","ebfdf3d40b2d0ab09e974c9c78ded1e6"],["/posts/8a741756.html","35d1003e1866f7d1b7255cc0b34c7bb2"],["/posts/918d46c1.html","2ecbc86001f192e3a372b02ebcd2e6af"],["/posts/93c8c0c7.html","e888c3e5c57b16bd7b4b7f2496ef3750"],["/posts/9a59ce11.html","05a32d9006cd58b0348eef0efc14dd8b"],["/posts/9f057e9a.html","615e7cb7eb1968f34f418042fa76f0fb"],["/posts/a7d437fe.html","598249532d822aa92b3be5581df4b4f4"],["/posts/a85c4b71.html","8cf9d7964d04732e168b61ebf7da59e2"],["/posts/ace4e4cd.html","f883e59cd7f0e80b07637ab01673b8c6"],["/posts/af30ddef.html","ad0fcc43f7b3561ff412045d966d5c30"],["/posts/b1eb9c6d.html","7ddcc5c84775a28402d10fe7c44e24e0"],["/posts/b564e922.html","6c39386a2b0a6deb74aaecb38d78b488"],["/posts/bc9a4dc7.html","b5ff13bb2d3510e2c29e40d21a800af0"],["/posts/be543a11.html","1bbb8005d4a9f0594f6cf3347607316b"],["/posts/c9b871f1.html","e3d282544a05f6c53a512929e1c4c61e"],["/posts/d6ef11e5.html","e5e24cc52cd745b9b0a662d4fd13193a"],["/posts/dcd6fdd1.html","73b7719f43d2a56ab46ca62ec7e8ca87"],["/posts/de24a124.html","bad8ff479fcbbde645087e0bd126254a"],["/posts/e25a3e3a.html","195151c8ef6ec3792660a87f809e860e"],["/posts/e32cbcd3.html","12359a5d73ce18ba4fba18e2f953f2af"],["/posts/eebbc69f.html","f7ce9b3e5d1e9ed9e6520b2602909739"],["/posts/f08119d7.html","352f55846e6f3d44a31a4047a8c2007e"],["/posts/f34dbb9f.html","eab7a7c39a1488f821a2304e71d31a26"],["/posts/f7f51423.html","e46bba66500f8aca82a7522dd86d12b9"],["/posts/fbda33d5.html","4db5116fce31c24520c25b51dc3b0880"],["/posts/fd1a8f9f.html","88c045f6f229daad82bab301e46d3f8e"],["/service-worker.js","fb78245ec04a3c4332ae254c639ad936"],["/shuoshuo/index.html","1017a5a113e04168d816aa3af14a8bb2"],["/sw-register.js","73b2c8d2cb7d6d4ad9738f984ec4f7b6"],["/tags/index.html","ba576868c493a5e967a4c563641873b2"],["/tags/【每日早报】-2025-02-25 - 星期二.html","837b01e01f81c5e9dc344886053a8e85"],["/tags/养眼/index.html","2b8fc74bb0d38744384e0095e785a5a9"],["/tags/每日早报/index.html","c2db5ae79760ddfa211ae0f9f1483848"],["/tags/每日早报/page/2/index.html","262c12e1b492d0ec6b7cb95ad1369e66"],["/tags/每日早报/page/3/index.html","e53fe318d39ccf9c6fb4c51c3b25dd3b"],["/tags/每日早报/page/4/index.html","118e96803c1a537a96ea7613943f8e99"],["/tags/第一篇/index.html","b0a7dd703b2669aedff96c8dff3db891"],["/tags/网络/index.html","5c843762f5c65f41932f74aa3c59930a"],["/tags/网络/page/2/index.html","df016e84419daaf017e3260e31aa3a05"],["/template/index.html","48fcd9bbf8546ee08b7bf7fb53da8620"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/workbox-ddbcfce3.js","2629672dbd75aa6405c83cfa7386a5d6"]];
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

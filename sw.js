/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","60614e5ea25273a9df080bed2e832876"],["/Gallery/index.html","cad8c0ddde238bfc2bd18b5f571e045d"],["/about/index.html","4d2762cb761e0be439511e37e1f837ae"],["/archives/2022/08/index.html","068907627c7154157e2606b10291c000"],["/archives/2022/08/page/2/index.html","c4484d4e7bb2c92c547acbd8ffa01636"],["/archives/2022/09/index.html","a887613ac3982d8b1e4a8d8fc56ca036"],["/archives/2022/10/index.html","427e75f6d42e205bf6abe76e5b44c4bf"],["/archives/2022/index.html","1f49361584115f37e0bf0011533e71a5"],["/archives/2022/page/2/index.html","0da5ba0e09de152af2031a9e14d536d6"],["/archives/2025/02/index.html","be71664a9f8498810fbdc1becf9c1412"],["/archives/2025/03/index.html","ac9770b2724fbeec4215acd15b26906f"],["/archives/2025/index.html","04a4fc39ab55ef2795a25cc6a1c32d88"],["/archives/2025/page/2/index.html","72d34889b253285f9ea2e9b26b9475b4"],["/archives/index.html","9a0af48615955d484cc2b6d0a9b6f5d8"],["/archives/page/2/index.html","8e58835f115064a78c318b28d6e83619"],["/archives/page/3/index.html","6c3a2c119c330b6b89aab8de3c9a5b78"],["/archives/page/4/index.html","d4140394d9aa70462f8d7e5e42fc83ec"],["/categories/index.html","a1e55147a5e915a2dde4a933a5fec036"],["/categories/壁纸/index.html","a39bfb499a682beeb3b6604aee590f8f"],["/categories/机网/index.html","02e697383b635783223fbcc4f5a2f53d"],["/categories/机网/page/2/index.html","d55d3b524b028f518910d1fa48db850f"],["/categories/每日早报/index.html","b2de5a2f67c8ab9da3c67a16fadede26"],["/categories/每日早报/page/2/index.html","794d0a7812f45989727f192981d93979"],["/css/footer_style.css","a249941af2da87708fa46890b1526aa7"],["/css/index.css","73f18fcc94f179b5651f3a6d17873995"],["/css/mbg.css","428fd7f7c8d276eb88b760be488d2659"],["/css/time.css","d201337c7704a57fe1ef2031a0998f21"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/description/index.html","0c4c269eb51185a31b0cf7913f8da189"],["/fonts/FangSong.ttf","6c2c6cb9a9d43dcd8d64544ee821a9c0"],["/fonts/Hei.ttf","1247ceac203ab8dd2f94168f60bb6fb8"],["/fonts/kaiti.ttf","c1f3ac5d0e48120a8906a93fdc82e12f"],["/hello-world.html","561b39084f1ba57c3d9fa95e61185566"],["/img/1.jpg","0a53047d1013252766cd4485628483a9"],["/img/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/img/3.jpg","f50648c341b6890be845a076e2c4773b"],["/img/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/img/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/img/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/author.png","f9466a911c8a62281251ff72d36cc26f"],["/img/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/img/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/img/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/img/wechat.jpg","2daac5896292bac19bdd98123d3758e7"],["/img/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/img/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/img/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","8144563afcc9167c47e54aa089d90c01"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/mbg.js","f779a5dad589df1439df9f68f528b9c9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/time.js","3e7f3ae43512a4e538084c04875d7071"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/keywords/index.html","f492122a942851ce4615b07251e130cd"],["/link/index.html","12bcecaffa85b19be31d3ead6b89576f"],["/music/index.html","d37a3af993ca3fb46b5a3990387e5e46"],["/page/2/index.html","7b0bae7db8d1d85ce8a230816d177091"],["/page/3/index.html","df7606d2d1268d60958e1f89793de678"],["/page/4/index.html","9ba23542c4f4594b8b452b5883038516"],["/shuoshuo/index.html","61a5d5d231ba4bafc0337529421feb0b"],["/sw-register.js","3b19219930092ee01d8840ad60493583"],["/tags/index.html","7fdcb06eee0afd4091f50f91b20e561f"],["/tags/【每日早报】-2025-02-25 - 星期二.html","5053d1063cdba80649e73b0a85944672"],["/tags/养眼/index.html","9028a2492b59b0114989b4524782f6b5"],["/tags/日常/index.html","18253056c211c09afa1dc15f88ea1f43"],["/tags/每日早报/index.html","5183e059498943f2cfb0e32c93eb336d"],["/tags/每日早报/page/2/index.html","129ee23b7ac42139d80e118b2a539cb4"],["/tags/第一篇/index.html","afe5f58a411437c794ec93ebc2dde833"],["/tags/网络/index.html","e19eb739f006fe21ab5ff2e15f8a52d1"],["/tags/网络/page/2/index.html","77acc67c2b6cddd8dfa6525831c888b3"],["/template/index.html","6147003187d280cc59a184aa8280002b"],["/test-post.html","99a6718f9511ba13dcee13877fec43f9"],["/test.html","f1a3c79fc1b9ab9b456d2c50c3b689d8"],["/webhook.html","d057a2ec3fa9f406d8445cf119ab1034"],["/webpushr-sw.js","8c070a9f68cd540a675a079dcd76cfa4"],["/【每日早报】-2025-02-19 - 星期三.html","343b161da0f5781dfb857f9ca92147f1"],["/【每日早报】-2025-02-21 - 星期五.html","aa91f6aac0ea5b8a5b291545d38c3c06"],["/【每日早报】-2025-02-22 - 星期六.html","7ba246b83eac9feb59894d7aee24e3d7"],["/【每日早报】-2025-02-24 - 星期一.html","20bce4ca62a080a439ed5bb951f76412"],["/【每日早报】-2025-02-25 - 星期二.html","f5ba8239360aec2d543556b9ae40d1c6"],["/【每日早报】-2025-02-26 - 星期三.html","08cd0443cc66b086fc5e70d1727c9a00"],["/【每日早报】-2025-02-27 - 星期四.html","c7c053a5f240fa31429da36b344fec79"],["/【每日早报】-2025-02-28 - 星期五.html","2ac12d966dc1eb4e31d0b5ef3e1a7809"],["/【每日早报】-2025-03-01 - 星期六.html","ed80b5220bd63a27f97e64054c8ae6bc"],["/【每日早报】-2025-03-02 - 星期日.html","52acf59579e2cb251c57a635ea2eb024"],["/【每日早报】-2025-03-06 - 星期四.html","307487c19579341699a764fd6ab195c4"],["/【每日早报】-2025-03-07 - 星期五.html","65bfb305e8c1de52c6674487fe090803"],["/分享壁纸(一).html","57616524bd8b514152b2a957af9e9edd"],["/分享壁纸(三).html","4c45390ea124d129ade874c6ece23929"],["/分享壁纸(二).html","77b18de84676079daba4e837b0492c4f"],["/又是一个不眠之夜.html","069acc10a250ebada7113370ec6ced48"],["/咒术回战.html","f5ba8019557cc5cb185b3a4101f73358"],["/开端.html","d9d2b83906943fc35c4e7f2334dfd86b"],["/白桃露露.html","434189000ead0247743d6436634741a9"],["/示例.html","1f9e622392c6ebd86f99e58241c4b288"],["/计算机网络-数据链路(一)8-30.html","c7b81b816dcc3ca701064ba97391c70c"],["/计算机网络-数据链路(三).html","6a6d3e8ace9e594a34b33459f66e1771"],["/计算机网络-数据链路(二)8-31.html","27aef3c2be79296525ff5867e9105a8a"],["/计算机网络-数据链路(五).html","a4f4cda01447dce100a086fa22d57bf9"],["/计算机网络-数据链路(六).html","82ba88270c7a750c54b5ee5c67b7dd1f"],["/计算机网络-数据链路(四).html","4cdcb22b9846c1748c748fa9fa5ecc82"],["/计算机网络-数据链路层(七)9-5.html","dd8799bffb249bdb99c28099f7fe6b65"],["/计算机网络-物理层(一)8-28.html","132bcc86fe28f236d077f6c8c0a497d0"],["/计算机网络-物理层(二)8-29.html","130cfc9c07d88071228ec5eeef7fb0d7"],["/计算机网络-网络层(一)9-6.html","1f4f45548ca6161fe24554b8829c62ad"],["/计算机网络体系分层思想(8-27).html","f40b3e53d176f4b1f7dba52ff8190683"],["/计算机网络性能和体系结构（8.26）.html","c4542cc694b73f872ce933686c795212"]];
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

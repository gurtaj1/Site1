"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","6e61a9bc2147d9ae3d08102ecfb153e4"],["static/css/main.664ef694.css","01785bf1c68c072a77b5344856c27e61"],["static/js/main.64141bf1.js","f7953b5924c7245aed86cebffff5d897"],["static/media/alien.7bfaed3a.png","7bfaed3a2cd43800aa9fd1edcd1edc0c"],["static/media/batteriesbannerpattern.475b1069.jpg","475b10699fdfa5da9fed069c66660c1a"],["static/media/batteriesbannersmoke.2c7ff6a2.jpg","2c7ff6a265a74680c518fcadef6bf0e3"],["static/media/bensgns.bb9b5a89.jpg","bb9b5a8998ca7f46333771951ca63ec8"],["static/media/blackcurrant.550f860d.jpg","550f860dad6a1938e091d6170506c380"],["static/media/blackice.8d64abcc.jpg","8d64abccfed37865d1efe27aa4bd166a"],["static/media/blackjacks.e1e645db.png","e1e645db1b752954b61a2fe2fafd0572"],["static/media/blueberry.1b7d989a.jpg","1b7d989a5fefa2eb848bd6d9d68d2846"],["static/media/britmini.3ca68577.jpg","3ca68577373b475d9197ad8588cef2d2"],["static/media/ccellgd.305e663a.jpg","305e663acc37a647e20ba517170fce95"],["static/media/cherry.c3f7032f.jpg","c3f7032f8365434cad5caaaee40bddc9"],["static/media/cherrylips.b1329a23.png","b1329a231af8cb4ddab8a12fa744fa10"],["static/media/classictobacco.bf9c280a.jpg","bf9c280a64e2359560919b6b1171a11d"],["static/media/cleito.9e192acf.png","9e192acf7eef87c2e423fc8ae567bb5b"],["static/media/cleitoexo.db498796.jpg","db49879635bb3a8f16e991dcb1110dec"],["static/media/coilsbannerpattern.b228554b.jpg","b228554b4513235ead80eec55657f64e"],["static/media/coilsbannersmoke.876162d6.jpg","876162d6ca6228ce7ee2638f63499879"],["static/media/coolfire.dce44379.jpg","dce443790513dc5d748afba76bc2989f"],["static/media/coolfiremini.c94bf47e.png","c94bf47e485129e781e0d6b1a623440d"],["static/media/coolfireultra.4b5a7f0e.jpg","4b5a7f0e5fe02732ccf11e29151cd943"],["static/media/efest3000mah.1a8baa62.jpg","1a8baa6286de8bc7a03625ddb9f7dd86"],["static/media/eliquidsbannerpattern.c4313a45.jpg","c4313a45e32b19b48676cee284296c80"],["static/media/eliquidsbannersmoke.772a6d59.jpg","772a6d59cbf7d01f50968896b9bf5fe7"],["static/media/eliquidscat.dd5e7653.jpg","dd5e765353f3103159d7073f4fda9f7d"],["static/media/endurat18e.5a35e73b.png","5a35e73b253cbdae2c82a12b6412ae92"],["static/media/endurat18e.d89c8a7f.jpg","d89c8a7fa1b87c57c906653e222cc7cd"],["static/media/endurat22.26a4a592.jpg","26a4a592134ea3cafb9ec8fafbfa8cbf"],["static/media/euctraditional.0944570e.jpg","0944570ee31936035dc3e9542c129b50"],["static/media/foambananas.9e2cc974.png","9e2cc97424a6bb46a32afa5264bcbcfc"],["static/media/gx2by4.adf6bed5.jpg","adf6bed5df0ee02385d7f0cb9b17590a"],["static/media/homebannersmoke.6f15527f.jpg","6f15527f98d9bda55bbc454be4a55b43"],["static/media/icemint.4b3d8ca1.jpg","4b3d8ca188f2e7e6865d74237cbeef27"],["static/media/istick.bb2d34ad.png","bb2d34ad4bb2c8179b34149b86d7d1de"],["static/media/istickpico.fb8257cc.jpg","fb8257ccfb1e7c4a546e16ea46dac8c2"],["static/media/isub.9b5d6a74.png","9b5d6a74e02659b28469a93621371fa6"],["static/media/itastekroma.8ad36076.jpg","8ad360764d635c214c8dea0a26013ca9"],["static/media/kangertechdual.4fcbeddf.jpg","4fcbeddfa731fc8faa72da6aa2887b88"],["static/media/kangertechocc.4b169583.jpg","4b1695832924818c7b3aa623b7508abf"],["static/media/kitsbannerpattern.7ca830f4.jpg","7ca830f48973f5e13f8ea76010b789c7"],["static/media/kitsbannersmoke.77a36a08.jpg","77a36a082882da84f78e4199d8c3137b"],["static/media/kitscat.797d9c88.jpg","797d9c889ee03ae305bec016a8730032"],["static/media/lightninglemon.23ba26a7.jpg","23ba26a78a56c4282b9e9eb407dcd622"],["static/media/lycheetwister.d044eba7.jpg","d044eba78a36e25cf6d9885bd1b22aa0"],["static/media/monsoonmango.92a1b1e8.jpg","92a1b1e803acf464fe855112f2a60c9c"],["static/media/mpv4.b3d4f7bd.jpg","b3d4f7bd50fdf63dbe98fdd84a5a0b11"],["static/media/pangu.de54170c.png","de54170c1ba0037ea68412de4a185e5e"],["static/media/premiumtobacco.2e847e7a.jpg","2e847e7a6f85ba4ae24d3de9c77d197e"],["static/media/qbox.2e91dfdf.jpg","2e91dfdf9141d97d40af702f5b337ee6"],["static/media/rafale.b4f4318d.jpg","b4f4318d92f8b83235814f5d63e27eeb"],["static/media/samsung2500mah.d3a46d6d.jpg","d3a46d6d3a1ec06f9a415030b45a3b14"],["static/media/slipstream.e14ac0d3.png","e14ac0d326084c0102f8d9be3d408d39"],["static/media/sourcherries.1faf0190.png","1faf0190e3d41857b26de98fae5fc825"],["static/media/spearmint.1b00e565.jpg","1b00e5659232037f063459f069c408db"],["static/media/sticka10.214cef59.jpg","214cef594b592469cb42108f9f3da6e3"],["static/media/sticka10coil.60ae5990.jpg","60ae59908f4f25fd3d3cbddec1cd296b"],["static/media/stickv8.f1d6fd03.jpg","f1d6fd03fe06c85cb17a960f329a4c6f"],["static/media/strawberry.73a24fe0.jpg","73a24fe0e146ca928d4d59cb5e8cc26c"],["static/media/strawberrybelts.82929a2b.png","82929a2b5eb03880d78a8dadda5f0900"],["static/media/strawberrymilkshakes.14d96a5d.png","14d96a5db973a14a3cdbfcbd3535c09b"],["static/media/tanksbannerpattern.3ccca1ce.jpg","3ccca1ce166e821f45f09ed4d17121c4"],["static/media/tanksbannersmoke.102836fc.jpg","102836fcf5ec7a7972502e0b3a9f41a3"],["static/media/tankscat.2bc1f0d9.jpg","2bc1f0d9426373c3fd53f64f57a87cf0"],["static/media/targetmini.9e90f2cb.jpg","9e90f2cb05e80e2b77d7f1dfaa881ac5"],["static/media/tfv8baby.d6d57f5b.jpg","d6d57f5b3a4db60da9f4815b5a8ae445"],["static/media/vanillafudge.584990b6.png","584990b6ce0d3ba88b13f99ff4841ee3"],["static/media/watermelon.4fd724e0.jpg","4fd724e01572e54d0cb1110ec1c2422d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/KOV/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
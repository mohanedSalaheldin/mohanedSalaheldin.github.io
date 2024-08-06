'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1d13e481456af17db1206dc99a0476ff",
".git/config": "58e8cc5dfadd4239d731055c12ff740b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "98e46d21a90379e73593824fd85e2d39",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "96ea5ab110d38b77bb5c4b13f15db6f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "09c22b2d82cf61b78e17ae3105399d9a",
".git/logs/refs/heads/main": "8240ea2ea1c4a7d95f39a191d171cba2",
".git/logs/refs/remotes/origin/main": "0bef1520c3fff995efeab43029eae888",
".git/objects/02/872bf0fa38b9fb4f9f0459ca562b45f112a9ca": "bcbd1c31658dcc61c43414ec47910413",
".git/objects/03/056d36443ec7c0e5df39bb9cd5926c09937717": "fa6fa4cd5f0da16a3f8c473640f647d1",
".git/objects/0a/69220afff4f9297ae6e48e6f14ab7ea344986d": "51f74896468b277502aef2b23be95ee3",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/0768446df38e01f02c8999808f1fc7ffec1dad": "a4be241eff47e56473f0c63c7091090c",
".git/objects/14/00f0fff8160137bf22b43ad7418a6d3d3fa38d": "b12cc6ce5bc8a921c06f3db6c0b1e79d",
".git/objects/18/ba73b84b2082cd68edb361f7a4565411ad5017": "5c54aae432f717c5b2d022e0edef12bc",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/30/76ae19a76b5f16867c637141cb964396f5debf": "a6e36c1bc6ad4e1c51d451959807e8b4",
".git/objects/35/8eedffc6c00c6d64e04baead12f0174024189e": "307943068191eb7a8beb9ca61c0a86dd",
".git/objects/42/906b8fdcd8acc525202bdce7fe916feeb614da": "afc3c94fb254f937ea9c7963072f9aa6",
".git/objects/46/d1074653af98a4d03247439caaa21f83d24257": "54bf32d26bc280d738c1ba663c438f97",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/b8a4ece72917631b7dbd2ba87eeb3f9721dc0c": "7410df62fbd21f8c00988ef7a1e60c7a",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6a/9d4cb74fa2b80f326d5903264c10b06032c2bc": "adf157e271176c17d912fcb0401c2b9c",
".git/objects/6c/130829affb76d48c9ef7252ec81c685f9c01cc": "9757276312f9fa6027284c79f05f41fd",
".git/objects/6f/4496b8125e3f7bccb29425fe2bc5ca6007e6da": "5ca9244c34a3a79a30594fa24d154743",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/f834ccd2dd454b48cd8c48e9be3c32e59cf97a": "175b6656fddcca891cc19e3973f015ab",
".git/objects/7f/ad1fe548c012e51a205d9be3c9e10ca4e4d769": "3e9b3f307c3fd5d8736ff64ec002d007",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/89/bcd9daed38d36425e60bc58f0f86e899b87bce": "71fc6e9bd6b17b1a9e7e38d9e7495175",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/b40971ef70fe68f13ea57eeb8d1805c1079640": "4f32248f670a0e8663fbcc4d3df47f8e",
".git/objects/99/2d6bf709d2a94c8f9b6e40639f8986add57ff3": "a623cafbbbbce2fb2b2f0419fc23b94e",
".git/objects/9c/fe093acdd0e7db63b740365b1c5aa32b67f6ce": "a4e2d3e81515edaf6e7f641c00371c02",
".git/objects/9e/ed15f4129529c4886c5314e03600f7aa941ff1": "db109f1cf1c5743e5e5b45bea8a5ed89",
".git/objects/a2/2bafcda74eea8aecd3a5e28e2292da5496211b": "7b962c84d5ca304ded82f5a0e30543c6",
".git/objects/a5/10b4b847a5f329c56c4f8fbd894f3fa8eb8bcb": "f957477530a1d55f4947e088270931c1",
".git/objects/ad/9de9ec6f1a99fa85be50bbc4050fc0dfc91ec1": "5754d965a10f994d7593dfe16e4da820",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c7/200947638f4fa3bec13011398a66cd86491313": "f9b4f45d4a14b5bf2ecc17b7e6046c75",
".git/objects/c8/18c11cab67e5b8b37a10066bb72634b21d1302": "18e182b1642f3dfc67a57204824e1717",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/d15b3163bc222bc6720263cc59c58c147b75ed": "28946ecbad49de818c008b03b016d302",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/98ea5b9ee414ccbf03cf594458e581367367c8": "786bf796d488a22b9eb5ce1e56d51134",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/de/5aae9a255805c56f8d1f798f1ef88cd939d019": "9fcbd827227ad9fbc0a47ad05d317b62",
".git/objects/e0/28e43c762d38bc88aa9e3eb88200c142be4ed7": "99dd3726224471f1969c8aea99582487",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/a3eec0effb333b45a1ca4ac3ace9c500a9169f": "f2946afb103617e3cebc1a2a83991dfe",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/e9/8994c1c0e5de59fe057e3dd0974db011caf1c5": "2ab24722bd9cef6340ead079351c067b",
".git/objects/f1/608fe86d676be4d1893351d4338e9a14dde5c7": "6eb8e8760f9cb3ea2b2f89dba2fb572e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "38be0f5d48c8cdb3cce2b485c42ceb7f",
".git/refs/remotes/origin/main": "38be0f5d48c8cdb3cce2b485c42ceb7f",
"assets/AssetManifest.bin": "f6354547595a9b795087156af56904ed",
"assets/AssetManifest.bin.json": "897ad3fe5b789a13321a79f1790704ef",
"assets/AssetManifest.json": "46c74c23bc549fc61654229c094f1dad",
"assets/assets/fonts/MavenPro-Bold.ttf": "ec7194c1f176e8a8b5d3dcafb7a1c997",
"assets/assets/fonts/MavenPro-Regular.ttf": "ef4d432d1c60def3a099d32f892de4a2",
"assets/assets/images/01_learning.png": "ae06ca0bf08150bbee493fec09e708b3",
"assets/assets/images/02_ecommerce.png": "8bc0dd4e31fb549a552e8c2814f19f38",
"assets/assets/images/03_news.png": "7db0b323df08ab0b626e81576049b89e",
"assets/assets/images/04_quotes.png": "5ce336e88598c198024eee42a43249cc",
"assets/assets/images/05_tasks.png": "8f63e896a03a4b6b85d44f58ea0ce290",
"assets/assets/images/06_clinic.png": "1434232132cbab5f08bbc9844e05aa05",
"assets/assets/images/icon1.png": "d936bbd4065b384593a205b52aba2442",
"assets/assets/images/profile.jpg": "4b7ebed7f5f064845f9e9c8ad8fa40c5",
"assets/FontManifest.json": "82c074848a329850fa9937ca1415a1fe",
"assets/fonts/MaterialIcons-Regular.otf": "c16591d046f85adca38412b8bb8a9f05",
"assets/NOTICES": "f97b3fa014e971bf8bb7554ceee7a2d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "aaa3e7e127a4851133a24d59ee2a5a02",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ca50f589c682f273fe2f0d161111b6b4",
"icons/icon-192-maskable.png": "086f57c6be42367000fe1027ad1c4297",
"icons/icon-192.png": "d936bbd4065b384593a205b52aba2442",
"icons/icon-512-maskable.png": "50248293991f2284c5f08a12d4812113",
"icons/icon-512.png": "c172ba809a1d69ec70b66ba7c24f4418",
"index.html": "99cabca2ac16eb65767448c29d739ab1",
"/": "99cabca2ac16eb65767448c29d739ab1",
"main.dart.js": "53ec3674e5739756016fe99824c17d4c",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"README.md": "5cd24ba06bb884e502cc50ec0f868eb9",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

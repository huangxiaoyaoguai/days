/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7dc86fc149eef6eef35936f317bf9570"
  },
  {
    "url": "assets/css/0.styles.0640ad98.css",
    "revision": "d0311cce18a033c3ab4d3107ca6ce10b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.46145927.js",
    "revision": "8a7b679960f56b41d1c3a3ffc327eabb"
  },
  {
    "url": "assets/js/11.9d8c4057.js",
    "revision": "a2f4fcffdff04394aab31a1d5f914578"
  },
  {
    "url": "assets/js/12.093c9030.js",
    "revision": "b0422fa2421622047eeb0324e9622d98"
  },
  {
    "url": "assets/js/13.35896ce0.js",
    "revision": "72d9680ccc049d883192f2b18d8d7b71"
  },
  {
    "url": "assets/js/14.8e4b0fd2.js",
    "revision": "e9d9e26dc54fd42cb6ea94fa5254ac72"
  },
  {
    "url": "assets/js/15.3cd74abd.js",
    "revision": "38403b27b9f32cdb32fd7376c84ac5b6"
  },
  {
    "url": "assets/js/16.52dd17c1.js",
    "revision": "1ec6f34111ad5e52217fd5328c1202a3"
  },
  {
    "url": "assets/js/3.059ab019.js",
    "revision": "d42b6587ccb359996509f65737140cbe"
  },
  {
    "url": "assets/js/4.e6c11a3e.js",
    "revision": "f083cb4dd1fb0a16d8937e5a9f8b3525"
  },
  {
    "url": "assets/js/5.6fec1037.js",
    "revision": "512a2358bf278bbe7214a05c70063bd4"
  },
  {
    "url": "assets/js/6.50d41e9a.js",
    "revision": "f1655b14f60059c5334f5c53126fa909"
  },
  {
    "url": "assets/js/7.8c1b9332.js",
    "revision": "0f6543f7964fcbc9b151cc6e61049055"
  },
  {
    "url": "assets/js/8.bd6275b7.js",
    "revision": "6b6b857b36ae986d94733ed0ff8f38e6"
  },
  {
    "url": "assets/js/9.109de3a2.js",
    "revision": "270c9c07c3e7d39764e616c237b3d4b1"
  },
  {
    "url": "assets/js/app.4dd9223b.js",
    "revision": "490b671644877f8c76ba4ce4446c4542"
  },
  {
    "url": "assets/js/vendors~notification.b3017547.js",
    "revision": "19240000fd0731e4022c545ba00b1329"
  },
  {
    "url": "guide/index.html",
    "revision": "730cbe86efd83ddf2aa256bb72e3c73b"
  },
  {
    "url": "guide/preface.html",
    "revision": "42ac6daf5c6c03be54138a9b4c8165ec"
  },
  {
    "url": "guide/webpack.html",
    "revision": "e7f32cb76ca242d2cb70080be5ad2923"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "1747d3dcf659e371c7a6da607de725fe"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "timg.png",
    "revision": "cfa3690d53f2ab7c9ab3084db8348f2f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

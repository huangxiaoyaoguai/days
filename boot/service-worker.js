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
    "url": "1.jpg",
    "revision": "bb9ec4b037e2c24ee72769ba9237e2ad"
  },
  {
    "url": "404.html",
    "revision": "a88d7b60732f5f87464ff0441801d016"
  },
  {
    "url": "assets/css/0.styles.403b3d18.css",
    "revision": "21bedcca5489c491ae9db3b0470d93df"
  },
  {
    "url": "assets/img/banner.5eb4ba8a.jpg",
    "revision": "5eb4ba8abf8adeef6840d28f2d26b795"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8373b9cb.js",
    "revision": "99f564425a08b3089cabe9141e82cb52"
  },
  {
    "url": "assets/js/11.91bc27b3.js",
    "revision": "078361f1af9ce1a36a3cf585441765d1"
  },
  {
    "url": "assets/js/12.43521f67.js",
    "revision": "a097c54983d5fb313a8f241423662807"
  },
  {
    "url": "assets/js/13.033cb49f.js",
    "revision": "91731c48130dbc1875927faa356a69aa"
  },
  {
    "url": "assets/js/14.9e9b824c.js",
    "revision": "c29800a98a00a746a00911c2c29b078d"
  },
  {
    "url": "assets/js/15.16fc9bd1.js",
    "revision": "1beebb77d0d7bd706c24692df0013de2"
  },
  {
    "url": "assets/js/16.70f6e1b1.js",
    "revision": "abd79b0799c5eafc8db36ae27a1a03d2"
  },
  {
    "url": "assets/js/3.fe0b0a55.js",
    "revision": "509f66a0bdb225644b306f99936ab525"
  },
  {
    "url": "assets/js/4.99da69d3.js",
    "revision": "c6203024486f46e0c06d71c21be78071"
  },
  {
    "url": "assets/js/5.fc0a5110.js",
    "revision": "d790690bc882fe3bdf875587c198a198"
  },
  {
    "url": "assets/js/6.204011c7.js",
    "revision": "82b1b6126d66ca875b919b3f527fa409"
  },
  {
    "url": "assets/js/7.b86544a8.js",
    "revision": "903ad0e09af4e574c294918c539e60bb"
  },
  {
    "url": "assets/js/8.d3548bce.js",
    "revision": "5b62153296c89a53adcabfa3890f0e64"
  },
  {
    "url": "assets/js/9.b9ab0865.js",
    "revision": "2ca5d309d181c1f687ed462c0047b46f"
  },
  {
    "url": "assets/js/app.26088455.js",
    "revision": "7b206a5036c714dc8f75b0a0a6752aa1"
  },
  {
    "url": "assets/js/vendors~notification.18e4e4ac.js",
    "revision": "290fb11cd01847c6a0ae18d7c309d08a"
  },
  {
    "url": "banner.jpg",
    "revision": "5eb4ba8abf8adeef6840d28f2d26b795"
  },
  {
    "url": "guide/browser/browser.html",
    "revision": "587e2d6b34ab765668b3df199c012917"
  },
  {
    "url": "guide/index.html",
    "revision": "de2dd2cbbaf18b5d3110c6b91368af87"
  },
  {
    "url": "guide/webpack/webpack.html",
    "revision": "eb56c3524f8656d718e724032d82622c"
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
    "revision": "f2f7dc668b6bc83be22c18e9e5bb338e"
  },
  {
    "url": "logo.png",
    "revision": "a944f3d72eeb7bf583c3a7f2d6aa5eb8"
  },
  {
    "url": "logo.svg",
    "revision": "8b0fc2771a49d7f5aa71db7f394d2df7"
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

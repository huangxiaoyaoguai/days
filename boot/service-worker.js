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
    "revision": "32286ff51a01519fd7e9e8c397b2ce62"
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
    "url": "assets/js/12.f16ae7ed.js",
    "revision": "4ef145811cef0ac4762a7c562d43aaa3"
  },
  {
    "url": "assets/js/13.39175025.js",
    "revision": "e6bbf7c8d70d8dc44d5d4ee5411f5c5f"
  },
  {
    "url": "assets/js/14.c00d717e.js",
    "revision": "cc29ac9495ec2f5a4c263348e7f1c955"
  },
  {
    "url": "assets/js/15.361be44d.js",
    "revision": "a86cf2256a28693e43f3cc18a7074ff3"
  },
  {
    "url": "assets/js/16.50d033d2.js",
    "revision": "51a2e4582bc66d89f3c7e31023af6255"
  },
  {
    "url": "assets/js/17.18f7e233.js",
    "revision": "60c3167de693d7b389b09c60e1d1846b"
  },
  {
    "url": "assets/js/18.cc8140eb.js",
    "revision": "fc67771c49dfe1f18ef59355b3fec416"
  },
  {
    "url": "assets/js/19.6ff9e79c.js",
    "revision": "0843ad15c2dc2c8b701997875bed9054"
  },
  {
    "url": "assets/js/20.cf8a95e7.js",
    "revision": "5346d316a2fb39c8ae7c9d684afdf758"
  },
  {
    "url": "assets/js/21.09cc3a31.js",
    "revision": "6aa11f0b0861566d3b37f8ef9e41510d"
  },
  {
    "url": "assets/js/22.734be8a3.js",
    "revision": "eba80f18fee706097031ac042cd8e14b"
  },
  {
    "url": "assets/js/23.70d99ef2.js",
    "revision": "7251d1da1bbf14d870a7b1d4196ee71d"
  },
  {
    "url": "assets/js/24.2bb7eead.js",
    "revision": "de1bb121783621933382cee9d43c6413"
  },
  {
    "url": "assets/js/25.8a58e6f1.js",
    "revision": "a728544011ec6d170ba289a3a11eb4cc"
  },
  {
    "url": "assets/js/26.03e778de.js",
    "revision": "738363443ea28debd86a15983b03b755"
  },
  {
    "url": "assets/js/3.fe0b0a55.js",
    "revision": "509f66a0bdb225644b306f99936ab525"
  },
  {
    "url": "assets/js/4.b6a31c78.js",
    "revision": "fd0b0fcad0320627396a9583b9125009"
  },
  {
    "url": "assets/js/5.5bebce57.js",
    "revision": "fce9539d4d2e8756c946bf3e6a1dae72"
  },
  {
    "url": "assets/js/6.204011c7.js",
    "revision": "82b1b6126d66ca875b919b3f527fa409"
  },
  {
    "url": "assets/js/7.116f0bfb.js",
    "revision": "5548940fce506fa2816879cfb457007d"
  },
  {
    "url": "assets/js/8.d3548bce.js",
    "revision": "5b62153296c89a53adcabfa3890f0e64"
  },
  {
    "url": "assets/js/9.16f19fb1.js",
    "revision": "3cb6d242f20817b9a4b509109ab648da"
  },
  {
    "url": "assets/js/app.e8b754eb.js",
    "revision": "7a70b44db64ce8d4278b3df3aac94c8c"
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
    "url": "guide/algorithm/index.html",
    "revision": "8efa27ba8d9dc8025ff2fedd91f3eb32"
  },
  {
    "url": "guide/browser/browser.html",
    "revision": "d63b4832253e62954a80582527b7646e"
  },
  {
    "url": "guide/frame/index.html",
    "revision": "07fb816da5b236776879aa48712f1a34"
  },
  {
    "url": "guide/frame/webpack.html",
    "revision": "937cffa44aa63fa07da44ad5406b3083"
  },
  {
    "url": "guide/index.html",
    "revision": "d9edb7bfcf4624303473aaecc0b2c19b"
  },
  {
    "url": "guide/interview/index.html",
    "revision": "cf9c6828f510dd1aac4950d4f3203514"
  },
  {
    "url": "guide/js/index.html",
    "revision": "c351e8f6bee1acf326d38f19108ef331"
  },
  {
    "url": "guide/manage/index.html",
    "revision": "c355c44bfa2f2270f7fcf8295638f146"
  },
  {
    "url": "guide/react/index.html",
    "revision": "df617871a7983d972cf5f14e2cd1a321"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "d222f6791ea1674c47111faa548f915f"
  },
  {
    "url": "guide/xcx/index.html",
    "revision": "b8e0e2c34618f7b106005c60ce158aee"
  },
  {
    "url": "guide/xcx/notice.html",
    "revision": "fadf40cac891949adb700e7a9bbb8afd"
  },
  {
    "url": "guide/xcx/swiper.html",
    "revision": "6ec9022ed2e3c06f259b01e8c3ca5361"
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
    "revision": "8fb2f148b32af9d897a96f16de3f229e"
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

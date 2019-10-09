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
    "revision": "a82f359d87f113023d38facf974ca94f"
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
    "url": "assets/js/12.9f454f64.js",
    "revision": "8e1a4e1110d5b3b885ccd14f885e4e53"
  },
  {
    "url": "assets/js/13.090894b5.js",
    "revision": "c7cbde5f8735c4b92c3ab5b83c599f8b"
  },
  {
    "url": "assets/js/14.cae11a96.js",
    "revision": "77154c83decfdb66f0de34a0d6b1ce6b"
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
    "url": "assets/js/18.49870dc3.js",
    "revision": "72d1ff2955ea4be8357133128e9eaaa1"
  },
  {
    "url": "assets/js/19.e26b4523.js",
    "revision": "c1e8c264e8a0ef2e8452337cebac3c45"
  },
  {
    "url": "assets/js/20.dd0a677e.js",
    "revision": "876f28122a63a21cc38369cd126e5faa"
  },
  {
    "url": "assets/js/21.9c14759f.js",
    "revision": "9267540e8636b2bb3c3070b60ee56b85"
  },
  {
    "url": "assets/js/22.745b720b.js",
    "revision": "d270796b401954076e47b3c569c12da8"
  },
  {
    "url": "assets/js/23.70d99ef2.js",
    "revision": "7251d1da1bbf14d870a7b1d4196ee71d"
  },
  {
    "url": "assets/js/24.a0e01016.js",
    "revision": "f00a7b49b1caf65141d3180e7f0fdd65"
  },
  {
    "url": "assets/js/25.f91fd320.js",
    "revision": "437d57270fc7c3a21a6aa8af8d26396f"
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
    "url": "assets/js/app.c36605a2.js",
    "revision": "8cb1c028374c3156bc9dd65b379089b4"
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
    "revision": "d37d46a19bb90d9628288212d848025b"
  },
  {
    "url": "guide/browser/browser.html",
    "revision": "e214002c8ce1423feed3d378c78cbc50"
  },
  {
    "url": "guide/frame/index.html",
    "revision": "c81e7c5515fec2578bcc5f86fdeeea38"
  },
  {
    "url": "guide/frame/webpack.html",
    "revision": "28071f8f6544d189d023fb4e8e845a03"
  },
  {
    "url": "guide/index.html",
    "revision": "2037c1e5f75537255f4ffc741ccd656b"
  },
  {
    "url": "guide/interview/index.html",
    "revision": "d8beb026023f0b43bbd0974e3bff39e3"
  },
  {
    "url": "guide/js/index.html",
    "revision": "f6e47114d87a0f182199cb556aab6141"
  },
  {
    "url": "guide/manage/index.html",
    "revision": "e0bd0f73a0559ce2bdde31456bca5d4f"
  },
  {
    "url": "guide/react/index.html",
    "revision": "67139f0f1c06ae947d856254b80370e6"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "951c059303a4524092367ebf60a52f88"
  },
  {
    "url": "guide/xcx/index.html",
    "revision": "897d012458988d8aacbb8587f43fd928"
  },
  {
    "url": "guide/xcx/notice.html",
    "revision": "3c249bc8f22c0b2cda06b5f5a5dee219"
  },
  {
    "url": "guide/xcx/swiper.html",
    "revision": "290b99c539abae3ecd491d8f87b491a4"
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
    "revision": "62a9a8573678c880da84b216d4078a0c"
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

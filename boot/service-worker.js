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
    "revision": "b9528f0347fcd799baf69e88721becf0"
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
    "url": "assets/js/12.bfd96bff.js",
    "revision": "8aec798cf09f3a7760610a1923f725e4"
  },
  {
    "url": "assets/js/13.54693930.js",
    "revision": "a1a24e05c2ec01be213311f2cfae8242"
  },
  {
    "url": "assets/js/14.c6e6514c.js",
    "revision": "c67f32a27d840a2ac8df0c8dbe6d51c7"
  },
  {
    "url": "assets/js/15.361be44d.js",
    "revision": "a86cf2256a28693e43f3cc18a7074ff3"
  },
  {
    "url": "assets/js/16.7b423983.js",
    "revision": "179c76506bdd8f7b71cbe53da1b20820"
  },
  {
    "url": "assets/js/17.4b59a270.js",
    "revision": "83a23f34a295704551353d0671e314b5"
  },
  {
    "url": "assets/js/18.9dadcbf8.js",
    "revision": "f3d61cd90a7a3d9742cd3b6cce8f70eb"
  },
  {
    "url": "assets/js/19.32ee1a08.js",
    "revision": "6e23ee9c8ae9cc398eec2d178adb8bf8"
  },
  {
    "url": "assets/js/20.03192afa.js",
    "revision": "37cd5f830a231d113f9cb21660265912"
  },
  {
    "url": "assets/js/21.1b550e83.js",
    "revision": "7613ec4e651af7992df02c86a04c25ea"
  },
  {
    "url": "assets/js/22.c6362ca8.js",
    "revision": "edae0ae916f37b29dc2be5a481d1d6d9"
  },
  {
    "url": "assets/js/23.89c14427.js",
    "revision": "dc2a264aae9be19752933b3d862d7080"
  },
  {
    "url": "assets/js/24.6c292390.js",
    "revision": "2671077b5230822eafdd858aefd15ec3"
  },
  {
    "url": "assets/js/25.db1b01de.js",
    "revision": "68f2ba3a4d1ca048484953365e0bf950"
  },
  {
    "url": "assets/js/26.35ceeb5e.js",
    "revision": "9ed6b68b460d8f3f6677faa31d72fc33"
  },
  {
    "url": "assets/js/27.c4d26c08.js",
    "revision": "656a25daa633d8e097b432373053c7b5"
  },
  {
    "url": "assets/js/3.fe0b0a55.js",
    "revision": "509f66a0bdb225644b306f99936ab525"
  },
  {
    "url": "assets/js/4.409615d4.js",
    "revision": "c4117859dea27923a912e1bf6f5c1cc8"
  },
  {
    "url": "assets/js/5.38ba1582.js",
    "revision": "59ec8a0e6bc5e4e9473467dfb8665d46"
  },
  {
    "url": "assets/js/6.204011c7.js",
    "revision": "82b1b6126d66ca875b919b3f527fa409"
  },
  {
    "url": "assets/js/7.7e8f7c8e.js",
    "revision": "a314c31359a4f1a06285f0f9a77b48e6"
  },
  {
    "url": "assets/js/8.d3548bce.js",
    "revision": "5b62153296c89a53adcabfa3890f0e64"
  },
  {
    "url": "assets/js/9.7bbaf9b9.js",
    "revision": "78711e8781e5779eea18481d34450e4e"
  },
  {
    "url": "assets/js/app.8e6aa2a2.js",
    "revision": "24cacce8300484dcdae3ec7e0cff3119"
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
    "revision": "3262180339fd72a55bc7226b9949fbb1"
  },
  {
    "url": "guide/browser/browser.html",
    "revision": "c64281a7f89cdd9dcfdb33ced9012e68"
  },
  {
    "url": "guide/frame/index.html",
    "revision": "9909e5aa4aa569ec083d69eb762dbfc8"
  },
  {
    "url": "guide/frame/webpack.html",
    "revision": "990ea09e7c0dd3e78dc00c0e74764323"
  },
  {
    "url": "guide/index.html",
    "revision": "65ee9143e0bc10147f31d53132bbcbbc"
  },
  {
    "url": "guide/interview/index.html",
    "revision": "f34ae71f0e008d5161c5c467e4fe3fa6"
  },
  {
    "url": "guide/js/es6.html",
    "revision": "66a3e0b45b1a26d2a888b1e237e50ad7"
  },
  {
    "url": "guide/js/index.html",
    "revision": "6e350f0b8a7335a2b769a0fc03fa430d"
  },
  {
    "url": "guide/manage/index.html",
    "revision": "3d8653a67644658d916c91be382581ff"
  },
  {
    "url": "guide/react/index.html",
    "revision": "6149cf449b8abf6ec18a4aa305f74b53"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "8bf732c618bbc6d7e224d9676bcd51d0"
  },
  {
    "url": "guide/xcx/index.html",
    "revision": "679b069425a276c9be1fa82c3395c0de"
  },
  {
    "url": "guide/xcx/notice.html",
    "revision": "28e56406134757ee0aea8cef5a245982"
  },
  {
    "url": "guide/xcx/swiper.html",
    "revision": "3b5e402aa9cb6f5b91c350740f5c8273"
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
    "revision": "8e308c835ec0d95bf62e973e4b800cb6"
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

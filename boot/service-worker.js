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
    "revision": "db3fcddd62eb2e11b2c6c4ea34b8ff79"
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
    "url": "assets/js/10.ea5f5965.js",
    "revision": "aa261200b2ac42e83403a245a93dc9d2"
  },
  {
    "url": "assets/js/11.86ec0211.js",
    "revision": "976a4d9fb63e2b19115b5783765d3fc2"
  },
  {
    "url": "assets/js/12.43521f67.js",
    "revision": "a097c54983d5fb313a8f241423662807"
  },
  {
    "url": "assets/js/13.f39aa8c1.js",
    "revision": "b62a054a20372673172d9ffb3dea86d2"
  },
  {
    "url": "assets/js/14.c6047fa2.js",
    "revision": "5efde6643d6a9c2eac45be6b9b55f504"
  },
  {
    "url": "assets/js/15.361be44d.js",
    "revision": "a86cf2256a28693e43f3cc18a7074ff3"
  },
  {
    "url": "assets/js/16.1f4d8ac0.js",
    "revision": "467fe04f5fc9ba6b2f7669c50f13cf52"
  },
  {
    "url": "assets/js/17.dbff60aa.js",
    "revision": "f40ea146c31336e0e911b847ca0004a0"
  },
  {
    "url": "assets/js/18.f8573a2d.js",
    "revision": "110598f636353fc360d36582e028626b"
  },
  {
    "url": "assets/js/19.05fb6a21.js",
    "revision": "98f9f0731fff67d63c3fa079a0ad4e64"
  },
  {
    "url": "assets/js/20.9b5f2a76.js",
    "revision": "ed02460ed1ef2a18c694d31355026679"
  },
  {
    "url": "assets/js/21.1b5798c7.js",
    "revision": "1cbb28dd3ea8b9a5917ca0d5dc7d53f8"
  },
  {
    "url": "assets/js/22.c7246092.js",
    "revision": "ce9cffa0ad9a4f8e0d9e722bb44e9533"
  },
  {
    "url": "assets/js/23.198d97e9.js",
    "revision": "2414b8c8755f746e8ad5569db103d985"
  },
  {
    "url": "assets/js/24.fc9a7dcb.js",
    "revision": "cbf6754033d8f08fb6b170699350fc88"
  },
  {
    "url": "assets/js/25.481eb0b0.js",
    "revision": "670eb2f6ef973a558a8a09c2428eafc6"
  },
  {
    "url": "assets/js/26.03c9342a.js",
    "revision": "2b138dc931aa056fba5af75096b28393"
  },
  {
    "url": "assets/js/27.ec2e8b2b.js",
    "revision": "91d1a14f56814ed86ab49e310e712012"
  },
  {
    "url": "assets/js/28.a4649b5d.js",
    "revision": "90681e6c6dd4eeeb6a1d3b77f68cbe03"
  },
  {
    "url": "assets/js/29.a46caa35.js",
    "revision": "947dcc142ce4cb1b6997aad82167b3d9"
  },
  {
    "url": "assets/js/3.fe0b0a55.js",
    "revision": "509f66a0bdb225644b306f99936ab525"
  },
  {
    "url": "assets/js/30.75f0c008.js",
    "revision": "b289ddfe35378f0dd182bbc0f7367d31"
  },
  {
    "url": "assets/js/4.409615d4.js",
    "revision": "c4117859dea27923a912e1bf6f5c1cc8"
  },
  {
    "url": "assets/js/5.7cfb1532.js",
    "revision": "36c54a0bbc89faef18abe4892f926699"
  },
  {
    "url": "assets/js/6.204011c7.js",
    "revision": "82b1b6126d66ca875b919b3f527fa409"
  },
  {
    "url": "assets/js/7.4727989e.js",
    "revision": "25d1f1c17a1d07677a206d70b524b870"
  },
  {
    "url": "assets/js/8.d3548bce.js",
    "revision": "5b62153296c89a53adcabfa3890f0e64"
  },
  {
    "url": "assets/js/9.7c2af89f.js",
    "revision": "3f74043e18fb5f0b43dd23074e654d92"
  },
  {
    "url": "assets/js/app.0dd4d831.js",
    "revision": "8428db877d90828ed41551005f642fcd"
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
    "revision": "a207c9732062cbf1d9248dd021759969"
  },
  {
    "url": "guide/browser/browser.html",
    "revision": "c0a19992b54a4ba3312975810fda9e6a"
  },
  {
    "url": "guide/frame/index.html",
    "revision": "3b85f9f48a46b6f19c075d1516158a30"
  },
  {
    "url": "guide/frame/interview.html",
    "revision": "e144e27d9a6cf95300b61afb2131be8e"
  },
  {
    "url": "guide/frame/webpack.html",
    "revision": "a45a44c36ce0d150b7bf48ca3f92a719"
  },
  {
    "url": "guide/index.html",
    "revision": "a07dd66ca535262151761bcfeae24898"
  },
  {
    "url": "guide/interview/index.html",
    "revision": "4ebfbba390146b83cd3b46a5ead7665a"
  },
  {
    "url": "guide/js/es6.html",
    "revision": "6f6b640acf6511342dbf6547ff4ad4b9"
  },
  {
    "url": "guide/js/index.html",
    "revision": "14998036e4d9e0e6fa1828e16856ccc2"
  },
  {
    "url": "guide/js/zcop.html",
    "revision": "18594c9c57b451cad5e86d574a65ca32"
  },
  {
    "url": "guide/manage/index.html",
    "revision": "0eaa4b248c50a05dc7f1490ce8825339"
  },
  {
    "url": "guide/react/index.html",
    "revision": "dbe2cfd88c9c464d8d1c2c52af2cb1d8"
  },
  {
    "url": "guide/react/interview.html",
    "revision": "8b165be6e38ff672edfbded095f89656"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "65535492f8e882f27a32f7875e997322"
  },
  {
    "url": "guide/xcx/index.html",
    "revision": "f9887258c1adfa5b94f6c70092579b1b"
  },
  {
    "url": "guide/xcx/notice.html",
    "revision": "c509b3fb4e3eb7d7e965eec20a33b79b"
  },
  {
    "url": "guide/xcx/swiper.html",
    "revision": "3b0cd81ae3da27372a0eebae35eeac4e"
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
    "revision": "4117e8774e419a46335bc6bde1a39365"
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

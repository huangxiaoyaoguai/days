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
    "url": "assets/css/0.styles.28df662a.css",
    "revision": "b62b5affe7f02ba10fa546e79cae827e"
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
    "url": "assets/js/10.ababe2e6.js",
    "revision": "fda5286419ca8a2b73331a8fc6cdce1e"
  },
  {
    "url": "assets/js/11.94f9eb6b.js",
    "revision": "0302f8c07571b8a8c949d6937025c978"
  },
  {
    "url": "assets/js/12.7db4f567.js",
    "revision": "b59913ce5e59858bd918150b1debcb40"
  },
  {
    "url": "assets/js/13.fe7af466.js",
    "revision": "2ecf90480793e4f99ccbecf2908d252d"
  },
  {
    "url": "assets/js/14.ef8f30ee.js",
    "revision": "e802897370fe6d3e762468d83c48215a"
  },
  {
    "url": "assets/js/15.636bfb3e.js",
    "revision": "a76b04ad4a38ca08e9cf556e6e8c39ee"
  },
  {
    "url": "assets/js/16.97c38126.js",
    "revision": "e63250161bed18370da90b0753bcf185"
  },
  {
    "url": "assets/js/17.155abd4b.js",
    "revision": "6f6ae6488be6c73566ec2466cc1927d7"
  },
  {
    "url": "assets/js/18.c21b8f8a.js",
    "revision": "fcacf560c8325e83b04b05babc724f43"
  },
  {
    "url": "assets/js/19.9f834655.js",
    "revision": "91a294f4c73ea5acc112d7ede8445735"
  },
  {
    "url": "assets/js/20.506c5e5d.js",
    "revision": "e50f1647ea838e5b15aca37c7be4ea38"
  },
  {
    "url": "assets/js/21.82eb6667.js",
    "revision": "f933b4f8682af66c86e2f5cd69bdc1df"
  },
  {
    "url": "assets/js/22.d250f49a.js",
    "revision": "16162ca11537259d5f27df4b5836a11e"
  },
  {
    "url": "assets/js/23.844cabe9.js",
    "revision": "970cdd41928d61955cca1bbf5a1c1bcc"
  },
  {
    "url": "assets/js/24.a9b316f7.js",
    "revision": "54f79175983b435865cb5ddebc88bb03"
  },
  {
    "url": "assets/js/25.69c51270.js",
    "revision": "bf02c1599d3651a74dd334034742f270"
  },
  {
    "url": "assets/js/26.82577bcd.js",
    "revision": "a342d9966f4c9c22d16e492a6f4ae52b"
  },
  {
    "url": "assets/js/27.f5f45da5.js",
    "revision": "515daea27e99632f3105a5a0c011bdc5"
  },
  {
    "url": "assets/js/28.28f8fae2.js",
    "revision": "28431e6e9dbb3e80e5f4a01c540e845b"
  },
  {
    "url": "assets/js/29.0602d6d3.js",
    "revision": "59d6f39384962292c6a2702a3aa843a3"
  },
  {
    "url": "assets/js/3.5b8a0b26.js",
    "revision": "e9eec4584040e5c874e23e4d09871143"
  },
  {
    "url": "assets/js/30.8ce15d8f.js",
    "revision": "27b3f4d66d99cb3d6bef749e2485c21c"
  },
  {
    "url": "assets/js/31.78f46b52.js",
    "revision": "1ea2e6258c8393af1461394a41e9c4f3"
  },
  {
    "url": "assets/js/32.7e622482.js",
    "revision": "46ff66249d452455bc465a490c8b2eaf"
  },
  {
    "url": "assets/js/33.8e58cf05.js",
    "revision": "35036f4a3e52e2f49c0cc0d4ce5b25fd"
  },
  {
    "url": "assets/js/34.59a8ee08.js",
    "revision": "cd551a082dffcba8ec9d44e705e4cb87"
  },
  {
    "url": "assets/js/4.74fd8283.js",
    "revision": "605b6f4949841b892c4e49e2ea1575a7"
  },
  {
    "url": "assets/js/5.0ce5aef7.js",
    "revision": "465ac1b591bd70f7395b7245bb8e0452"
  },
  {
    "url": "assets/js/6.546c305c.js",
    "revision": "5544d367612762d09e1e802796d75735"
  },
  {
    "url": "assets/js/7.833a6d6e.js",
    "revision": "1be8a82f9e143e7f4d20ad6ba98e2c21"
  },
  {
    "url": "assets/js/8.87f9867d.js",
    "revision": "36b1dad1a727bcfaaabff4f45cd50fee"
  },
  {
    "url": "assets/js/9.7524ad14.js",
    "revision": "f7d70677002fa99380bfee6927242455"
  },
  {
    "url": "assets/js/app.7389fdb9.js",
    "revision": "670b40305ad0e031557d8e65dc0461e2"
  },
  {
    "url": "assets/js/vendors~notification.467c4780.js",
    "revision": "229f21b6a407d99889a024bd00fd8b94"
  },
  {
    "url": "banner.jpg",
    "revision": "5eb4ba8abf8adeef6840d28f2d26b795"
  },
  {
    "url": "guide/algorithm/index.html",
    "revision": "1f111041f3a0ce406da0d972daf0a21e"
  },
  {
    "url": "guide/browser/browser.html",
    "revision": "28560db7177db2ae90f5aad4ef84a7aa"
  },
  {
    "url": "guide/frame/index.html",
    "revision": "11101ba273cb932d4d751ab31d9fc78b"
  },
  {
    "url": "guide/frame/interview.html",
    "revision": "bcd57df74c1961c8918a583f8273d3de"
  },
  {
    "url": "guide/frame/webpack.html",
    "revision": "c8efa25ba25a21c61954b32b782246da"
  },
  {
    "url": "guide/index.html",
    "revision": "38558ff5e2556d61a235881ead225753"
  },
  {
    "url": "guide/interview/index.html",
    "revision": "1ac216143c6367c16acdb59761d93136"
  },
  {
    "url": "guide/js/es6.html",
    "revision": "36f8fd9f247130d2e3d377d1b03a3a60"
  },
  {
    "url": "guide/js/index.html",
    "revision": "fa94f1a003bda68ea7e9dfcf1034e4ec"
  },
  {
    "url": "guide/js/zcop.html",
    "revision": "81b7ffe29b3aa6787552cde578678b24"
  },
  {
    "url": "guide/manage/index.html",
    "revision": "d59f26c62c18308efa9ec0c81aa5ebba"
  },
  {
    "url": "guide/mode/feat.html",
    "revision": "3f54bec5a11b5054ba294a869e02c455"
  },
  {
    "url": "guide/mode/index.html",
    "revision": "deefad69ae2c3af9a41fea2495bd8e19"
  },
  {
    "url": "guide/react/index.html",
    "revision": "83abe59f1ce6af1d2e5c4495748e8f4d"
  },
  {
    "url": "guide/react/interview.html",
    "revision": "12db9b4a014f3816ec4400793cec1c82"
  },
  {
    "url": "guide/record/index.html",
    "revision": "abe0230212cc37130ecf7f774fde5c56"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "5107a86ec6e6bc0f22671741ae81e4fe"
  },
  {
    "url": "guide/xcx/index.html",
    "revision": "95c28944a507487dda65ff2985049283"
  },
  {
    "url": "guide/xcx/notice.html",
    "revision": "2edccf73e8ac793fbda28f520994a1e0"
  },
  {
    "url": "guide/xcx/swiper.html",
    "revision": "1e48c6e791856b267ed0985ebfa67799"
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
    "revision": "e87024c17155e1bb42e1774ec4c9fb7c"
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

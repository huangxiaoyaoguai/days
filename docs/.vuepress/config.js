const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '二少爷的笔记',
            description: '好想做一个顽固的少爷，每天游手好闲，不学无术，多自在。'
        }
    },
    base: '/boot/',
    dest: './boot',

    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', }]
    ],
    themeConfig: {
        repo: 'huangxiaoyaoguai/days',
        editLinks: false,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        // docsDir: 'packages/docs/docs',
        locales: {
            '/': {
                editLinkText: '在 GitHub 上编辑此页',
                nav: require('./nav/zh'),
                sidebar: {
                    '/guide/': renderSiderBar()
                }
            }
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/google-analytics', {
            ga: 'UA-145821923-1'
        }],
        ['vuepress-plugin-baidu-google-analytics', {
            hm: '009a2f9b8cfc23cb5722f109462e450f',
            ignore_hash: false
        }],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>',
        }],
        ['container', {
            type: 'upgrade',
            before: info => `<UpgradePath title="${info}">`,
            after: '</UpgradePath>',
        }],
    ],
    extraWatchFiles: [
        '.vuepress/nav/zh.js'
    ]
})

function renderSiderBar() {
    return ([{
            title: '前言',
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title:'小记',
            collapsable: false,
            children: [
                'record/',
            ]
        },
        {
            title:'浏览器',
            collapsable: false,
            children: [
                'browser/browser'
            ]
        },
        {
            title:'设计模式',
            collapsable: false,
            children: [
                'mode/',
                'mode/feat'
            ]
        },
        {
            title:'前端工程化',
            collapsable: false,
            children: [
                'frame/',
                'frame/interview'
            ]
        },

         {
            title:'js',
            collapsable: false,
            children: [
                'js/',
                'js/zcop',
                'js/es6'
            ]
        },
        
        {
            title:'小程序',
            collapsable: false,
            children: [
                'xcx/',
                'xcx/swiper',
                'xcx/notice'
            ]
        },
        {
            title:'react',
            collapsable: false,
            children: [
                'react/',
                'react/interview'
            ]
        },
        {
            title:'vue',
            collapsable: false,
            children: [
                'vue/'
            ]
        },
          {
            title:'算法',
            collapsable: false,
            children: [
                'algorithm/'
            ]
        },

        {
            title: '管理',
            collapsable: false,
            children: [
                'manage/',
            ]
        }
        

    ])
}
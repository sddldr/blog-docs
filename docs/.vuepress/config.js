module.exports = {
    title: '在孤独中品尝苦涩',
    lastUpdated: '最近更新时间',
    base: process.env.BUILD_ENV === 'develop' ? '/' : './',
    description: 'Just playing around',
    themeConfig: {
        sidebarDepth: 2,
        nav: [
            { text: '首页', link: '/' },
            {
              text: '技术博客',
              ariaLabel: '技术博客',
              items: [
                { text: 'Webpack', link: '/tech/webpack/' },
                { text: 'Vue', link: '/tech/vue/' }
              ]
            },
            { text: '生活杂感', link: '/life/' },
            { text: '优美诗词', link: '/goodPoem/' },
        ],
        sidebar: {
          '/goodPoem/': [
            'la',
          ],
          '/tech/webpack/': [
            '/tech/webpack/ad'
          ],
          '/tech/vue/': [
            '/tech/vue/vue3'
          ]
        }
    },
}
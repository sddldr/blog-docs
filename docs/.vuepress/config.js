module.exports = {
    title: '在孤独中品尝苦涩',
    base: process.env.BUILD_ENV === 'develop' ? '/' : './',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ]
    }
}
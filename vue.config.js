const path = require('path')

module.exports = {
    'transpileDependencies': [
        'vuetify'
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/'),
                'vue$': 'vue/dist/vue'
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/styles/main.scss";`
            }
        }
    }
}

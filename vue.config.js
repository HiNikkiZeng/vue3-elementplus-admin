const { resolve } = require('path')
const{
    publicPath,
    outputDir,
    assetsDir,
    lintOnSave,
    title,
    port
} = require('./src/config/config')


process.env.VUE_APP_TITLE = title || 'v-meow-admin'

module.exports = {
    publicPath,
    outputDir,
    assetsDir,
    lintOnSave,
    productionSourceMap:false,//不输出 map 文件  no output map file
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
    },
    configureWebpack:()=>{
        return {
            resolve: {
                alias: {
                '@': resolve('src'),
                },
            },
            }
    },
 
}
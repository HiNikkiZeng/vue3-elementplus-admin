module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    title:'v-meow-admin',
    lintOnSave: process.env.NODE_ENV === 'development',
    port :process.env.port || process.env.npm_config_port || 9528,
}
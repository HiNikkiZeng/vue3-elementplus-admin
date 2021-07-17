const { resolve } = require('path');
const {
  publicPath,
  outputDir,
  assetsDir,
  lintOnSave,
  title,
  port,
} = require('./src/config/config');

process.env.VUE_APP_TITLE = title || 'v-meow-admin';

module.exports = {
  publicPath,
  outputDir,
  assetsDir,
  lintOnSave,
  productionSourceMap: false,
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  }),

};

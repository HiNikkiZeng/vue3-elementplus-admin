const { resolve } = require('path');
const path = require('path');
const {
  publicPath,
  outputDir,
  assetsDir,
  lintOnSave,
  title,
  port,
} = require('./src/config/config');

process.env.VUE_APP_TITLE = title || 'v-me-admin';

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
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/variables.scss";`+ `@import "@/styles/mixin.scss";`,
      },
    }
  },

  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  }),

};

const path = require('path');

const {
  publicPath,
  outputDir,
  assetsDir,
  lintOnSave,
  title,
  port,
} = require('./src/config/config');

const resolve = (dir) => path.join(__dirname, dir);

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
        prependData: `${'@import "@/styles/variables.scss";'}${'@import "@/styles/mixin.scss";'}`,
      },
    },
  },

  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  }),
  chainWebpack: (config) => {
    const iconPath = resolve('src/assets/icons/svg');
    config.module
      .rule('svg')
      .exclude.add(iconPath)
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(iconPath)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ extract: false })
      .end();
  },

};

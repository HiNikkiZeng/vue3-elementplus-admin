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
  pluginOptions: {
  //   //adding this loader can be direct to use variables without import
  //   // 导入css 预处理器的一些公共的样式文件变量,避免在每个样式文件中手动的@import导入，然后在各个css 文件中直接使用变量
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/variables.scss'),
        path.resolve(__dirname, 'src/styles/mixin.scss'),
      ],
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

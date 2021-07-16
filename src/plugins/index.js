
/**
 * @description 加载所有 plugins  loading all plugins
 * @param  app 应用的实例  app from main.js
 */
export function installAllPlugins(app) {
  const files = require.context('.', true, /\.js$/)
  files.keys().forEach(key => {
    if (typeof files(key).default === 'function') {
      if (key !== './index.js') files(key).default(app)
    }
  })
}

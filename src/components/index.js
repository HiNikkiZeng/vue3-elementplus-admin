function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const install = (app) => {
  const requireComponent = require.context('../components', true, /\.vue$/);
  requireComponent.keys().forEach((filename) => {
    const config = requireComponent(filename);
    const componentName = changeStr(
      filename.replace(/^\.\//, '').replace(/\/index.vue$/, ''),
    );
    app.component(componentName, config.default || config);
  });
};

export default {
  install,
};

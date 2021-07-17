import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import installAllPlugins from './plugins';

const app = createApp(App);

installAllPlugins(app);

app.use(store)
  .use(router)
  .mount('#app');

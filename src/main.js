import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/index.scss';
import installAllPlugins from './plugins';
import './assets/icons';
import allComponent from './components';
import '@/permission';
import '../mock';

const app = createApp(App);
installAllPlugins(app);

app.use(store)
  .use(router)
  .use(allComponent)
  .mount('#app');

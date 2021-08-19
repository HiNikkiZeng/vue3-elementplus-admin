import router from '@/router';
import NProgress from 'nprogress';
import { getToken } from '@/utils/auth';
import store from './store';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const hasToken = getToken();

  if (hasToken && hasToken.token) {
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      if (!store.state.routes.dynamicRoutes.length) {
        await store.dispatch('routes/toCombineRoutes').then((res) => {
          if (res.length) {
            res.forEach((route) => {
              router.addRoute(route);
            });
            next({ ...to, replace: true });
          } else {
            next();
          }
        });
      }
      next();
    }
  } else if (to.path === '/login') {
    next();
  } else {
    next('/login');
    NProgress.done();
  }
});

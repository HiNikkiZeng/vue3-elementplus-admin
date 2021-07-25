import router from '@/router';
import NProgress from 'nprogress';
import { getToken } from '@/utils/auth';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    next();
  } else if (to.path === '/login') {
    next();
  } else {
    next('/login');
    NProgress.done();
  }
});

import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard' },
      },
    ],
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/login/index.vue'),
    name: 'Login',
    hidden: true,
  },
  // {
  //   path:'/test',
  //   component: Layout,
  //   redirect: '/test/test1',
  //   children:[
  //     {
  //       path: 'test1',
  //       name: 'Test1',
  //       component: () => import('@/views/dashboard/index.vue'),
  //       meta: { title: '测试', icon: 'dashboard' },
  //     }
  //   ]
  // },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   // name: 'Example',
  //   meta: { title: '样例', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '表格', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '树状', icon: 'tree' }
  //     }
  //   ]
  // },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

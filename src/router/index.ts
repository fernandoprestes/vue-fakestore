import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import home from './Home';
import product from './Product';

const routes: RouteRecordRaw[] = [
  ...home,
  ...product,
  {
    path: '/',
    redirect: { name: 'HomeView' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

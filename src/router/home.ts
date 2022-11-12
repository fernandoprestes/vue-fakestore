import LayoutStoreVue from '~/layouts/Store/index.vue';

export default [
  {
    path: '/',
    name: 'home-views',
    component: () => import('~/views/index.vue'),
    meta: {
      layout: LayoutStoreVue,
    },
  },
];

import LayoutStoreVue from '~/layouts/Store/index.vue';

export default [
  {
    path: '/product/:id',
    name: 'product-view',
    component: () => import('~/views/Product.vue'),
    meta: {
      layout: LayoutStoreVue,
    },
  },
];

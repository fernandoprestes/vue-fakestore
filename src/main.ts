import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './styles/main.css';
import 'animate.css';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

import AxiosAdapter from './infra/AxiosAdapter';
const httpClient = new AxiosAdapter();

import ProductServiceHttp from './services/ProductsServiceHttp';

const productService = new ProductServiceHttp(httpClient);

app.provide('productService', productService);

pinia.use(({ store }) => {
  store.productsService = productService;
});

app.mount('#app');

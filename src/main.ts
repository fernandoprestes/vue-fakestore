import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/main.css';

const app = createApp(App);

import AxiosAdapter from './infra/AxiosAdapter';
const httpClient = new AxiosAdapter();

import ProductServiceHttp from './services/ProductsServiceHttp';

const productService = new ProductServiceHttp(httpClient);

app.provide('productService', productService);

app.use(router);
app.mount('#app');

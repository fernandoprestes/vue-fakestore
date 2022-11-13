import 'pinia';
import productsService from '~/services/ProductsService';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    productsService: productsService;
  }
}

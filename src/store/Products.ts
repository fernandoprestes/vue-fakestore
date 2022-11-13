import { defineStore } from 'pinia';
import type { Products } from '~/@types/IProducts';

export const useProductsStore = defineStore('Products', {
  state: () => {
    return {
      products: [] as Products[],
    };
  },

  actions: {
    async getProducts() {
      this.products = await this.productsService.getAllProduts();
    },

    async getProductsByCategory(category: string) {
      this.products = await this.productsService.getProductInSpecificCategory(category);
    },
  },
});

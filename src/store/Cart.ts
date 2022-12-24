import { defineStore } from 'pinia';
import type { Cart } from '~/@types/ICart';

export const useCartStore = defineStore('Cart', {
  state: () => {
    return {
      cartList: [] as Cart[],
    };
  },

  getters: {
    getCartList: state => state.cartList,
    getQuantityCartItem: state => state.cartList.length,
  },

  actions: {
    addCartList(product: Omit<Cart, 'quantity'>) {
      const hasProductInCart = this.cartList.findIndex(item => item.id == product.id);
      if (hasProductInCart < 0) {
        this.cartList.push({ ...product, quantity: 1 });
        return;
      }
      this.cartList[hasProductInCart].quantity += 1;
    },
  },
});

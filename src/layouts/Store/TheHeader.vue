<script lang="ts" setup>
  import { ref } from 'vue';
  import { IconShoppingCart } from '@iconify-prerendered/vue-ph';
  import { useCartStore } from '~/store/Cart';
  import { storeToRefs } from 'pinia';
  import DialogStoreCart from './DialogStoreCart.vue';

  const cartStore = useCartStore();
  const { getQuantityCartItem } = storeToRefs(cartStore);

  const openCardDialog = ref(false);
  const handleCardDialog = () => (openCardDialog.value = true);
</script>
<template>
  <header class="flex flex-col justify-center gap-4 border-b border-slate-700 py-4 px-4 sm:flex-row sm:justify-between">
    <div class="text-center text-3xl text-green-600">
      <span>fake</span>
      <span class="font-bold">Store</span>
    </div>
    <div class="flex items-center justify-end gap-4">
      <input
        placeholder="O que você procura..."
        type="text"
        class="flex-1 rounded-lg bg-slate-700 px-4 py-2 outline-none focus:ring-2 focus:ring-slate-900"
      />
      <button
        class="relative flex"
        @click="handleCardDialog"
      >
        <IconShoppingCart class="h-10 w-10" />
        <div class="absolute left-5 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
          <span class="text-sm font-bold text-green-600"> {{ getQuantityCartItem }} </span>
        </div>
      </button>
      <DialogStoreCart v-model="openCardDialog" />
    </div>
  </header>
</template>

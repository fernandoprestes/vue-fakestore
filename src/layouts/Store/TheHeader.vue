<script lang="ts" setup>
  import { ref } from 'vue';
  import { IconShoppingCart } from '@iconify-prerendered/vue-ph';
  import DialogStoreCart from '~/components/DialogStoreCart.vue';

  const openCardDialog = ref(false);

  const handleCardDialog = () => (openCardDialog.value = !openCardDialog.value);
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
        <span class="absolute left-5 top-6 h-6 w-6 rounded-full bg-slate-100 text-sm font-bold text-green-600">14</span>
      </button>
      <DialogStoreCart v-model="openCardDialog" />
    </div>
  </header>
</template>

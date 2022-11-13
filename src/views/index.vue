<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
  import ListProductCard from '~/components/ListProductCard.vue';
  import TheSidebar from '~/components/TheSidebar.vue';
  import { useProductsStore } from '~/store/Products';

  const productsStore = useProductsStore();
  const { products } = storeToRefs(productsStore);

  onMounted(() => {
    productsStore.getProducts();
  });
</script>

<template>
  <main class="grid grid-rows-[127px,_1fr] overflow-hidden md:grid-cols-[278px,_1fr] md:grid-rows-none">
    <TheSidebar />
    <div
      class="flex h-[calc(100vh-252px)] flex-wrap justify-center gap-4 overflow-x-auto p-6 sm:h-[calc(100vh-218px)] md:h-[calc(100vh-73px)] xl:justify-start"
    >
      <ListProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
      />
    </div>
  </main>
</template>

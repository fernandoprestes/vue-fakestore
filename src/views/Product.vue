<script lang="ts" setup>
  import { inject, onMounted, reactive } from 'vue';
  import { useRoute } from 'vue-router';
  import { IconArrowLeft } from '@iconify-prerendered/vue-ph';
  import type { Products } from '~/@types/IProducts';
  import type ProductService from '~/services/ProductsService';
  import ProductDetails from '~/components/ProductDetails.vue';

  const productService = inject('productService') as ProductService;

  const route = useRoute();
  const productId = Number(route.params.id);

  const state = reactive({
    data: {} as Products,
  });

  onMounted(async () => {
    state.data = await productService.getSingleProduct(productId);
  });
</script>

<template>
  <main class="container h-[calc(100vh-125px)] sm:h-[calc(100vh-73px)]">
    <div class="mx-auto max-w-[800px] py-4 px-4">
      <router-link :to="{ name: 'home-view' }">
        <IconArrowLeft class="h-6 w-6 hover:text-green-600" />
      </router-link>
    </div>
    <ProductDetails :product="state.data" />
  </main>
</template>

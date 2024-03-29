<script lang="ts" setup>
  import { inject, onMounted, reactive, watch } from 'vue';
  import type ProductService from '~/services/ProductsService';
  import { useProductsStore } from '~/store/Products';

  const productService = inject('productService') as ProductService;

  const productsStore = useProductsStore();

  const state = reactive({
    categories: [] as string[],
    selectedCategory: 'all',
  });

  type categoriesType = {
    [key: string]: string;
  };

  const categoriesList: categoriesType = {
    'all': 'Todos',
    'electronics': 'Eletrônicos',
    'jewelery': 'Joias',
    "men's clothing": 'Roupas Masculinas',
    "women's clothing": 'Roupas Femininas',
  };

  watch(
    () => state.selectedCategory,
    () => {
      if (state.selectedCategory === 'all') {
        productsStore.getProducts();
        return;
      }
      productsStore.getProductsByCategory(state.selectedCategory);
    },
  );

  onMounted(async () => {
    state.categories = await productService.getAllCategories();
    state.categories.push('all');
    state.categories.sort();
  });
</script>
<template>
  <div class="flex flex-col overflow-hidden border-b border-slate-700 px-4 py-2 md:border-b-0 md:border-r md:py-6">
    <h2 class="text-md font-bold">Categorias</h2>
    <div class="flex gap-2 overflow-auto py-4 px-2 md:flex-col">
      <label
        v-for="(item, index) in state.categories"
        :key="index"
        :for="item"
        class="flex cursor-pointer items-center justify-center rounded-lg border border-slate-700 px-2 py-2 leading-6 md:w-full md:justify-start md:py-4"
        :class="{ 'bg-slate-700 font-bold text-green-600': state.selectedCategory === item }"
      >
        <input
          :id="item"
          v-model="state.selectedCategory"
          type="radio"
          :name="item"
          :value="item"
          class="sr-only"
        />
        {{ categoriesList[item] }}
      </label>
    </div>
  </div>
</template>

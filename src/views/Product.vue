<script lang="ts" setup>
  import { inject, onMounted, reactive } from 'vue';
  import { useRoute } from 'vue-router';
  import { IconArrowLeft, IconStar } from '@iconify-prerendered/vue-ph';
  import type { Products } from '~/@types/IProducts';
  import type ProductService from '~/services/ProductsService';

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
    <div class="mx-auto max-w-[800px] px-4">
      <div
        class="flex flex-col items-center justify-center gap-4 rounded-lg border border-slate-700 p-2 px-2 md:grid md:grid-cols-3 md:items-start"
      >
        <img
          :src="state.data.image"
          alt=""
          class="aspect-square h-[400px] rounded-lg md:h-auto"
        />
        <div class="space-y-2 md:col-span-2">
          <h2 class="text-2xl text-green-600">{{ state.data.title }}</h2>
          <div class="flex justify-between">
            <span class="text-xl">
              {{ state.data.price }}
            </span>
            <div class="flex items-center justify-center rounded-lg bg-slate-700 px-2">
              <span class="text-sm">
                {{ state.data.category }}
              </span>
            </div>
          </div>
          <div>
            <p class="leading-relaxed">
              {{ state.data.description }}
            </p>
            <div class="item-center flex gap-4 py-2">
              <div class="flex gap-2">
                <IconStar class="h-6 w-5 text-green-600" />
                <span>{{ state.data.rating?.rate }}</span>
              </div>
              <div>
                <span class="rounded-lg bg-slate-700 px-2 text-center text-[12px]">{{ state.data.rating?.count }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 flex w-full justify-end px-4 md:px-0">
        <button class="rounded-lg bg-green-600 px-4 py-2">Adicionar</button>
      </div>
    </div>
  </main>
</template>

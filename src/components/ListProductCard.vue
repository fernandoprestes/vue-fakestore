<script lang="ts" setup>
  import { IconStar } from '@iconify-prerendered/vue-ph';
  import { reactive } from 'vue';

  interface ProductItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }

  interface Rating {
    rate: number;
    count: number;
  }

  const product: ProductItem = reactive({
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  });
</script>

<template>
  <div class="w-full rounded-lg border border-slate-700 p-2 sm:w-64 md:h-auto md:w-full lg:h-[520px] lg:w-64">
    <router-link
      :to="{ name: 'product-view', params: { id: product.id } }"
      class="md:flex md:gap-4 lg:block"
    >
      <img
        class="mx-auto mb-2 aspect-square w-64 rounded-t-lg"
        :src="product.image"
        alt=""
      />
      <h2 class="text-xl transition-all duration-300 hover:text-green-600">{{ product.title }}</h2>
    </router-link>
    <div class="flex items-center justify-between py-2">
      <div>
        <span class="rounded-lg bg-slate-700 px-2 py-1 text-sm">{{ product.category }}</span>
      </div>
      <span class="text-lg">{{ product.price }}</span>
    </div>
    <p class="text-ellipsis text-sm leading-relaxed line-clamp-3">
      {{ product.description }}
    </p>
    <div class="item-center flex gap-4 py-2">
      <div class="flex gap-2">
        <IconStar class="h-6 w-5 text-green-600" />
        <span>{{ product.rating.rate }}</span>
      </div>
      <div>
        <span class="rounded-lg bg-slate-700 px-2 text-center text-[12px]">{{ product.rating.count }}</span>
      </div>
    </div>
    <button class="w-full rounded-lg bg-green-600 py-2 transition-all duration-300 hover:bg-opacity-60">
      Adicionar
    </button>
  </div>
</template>

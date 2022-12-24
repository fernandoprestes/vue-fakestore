<script lang="ts" setup>
  import { IconStar } from '@iconify-prerendered/vue-ph';
  import { useCartStore } from '~/store/Cart';
  import type { Products } from '~/@types/IProducts';

  interface CardProps {
    product: Products;
  }
  defineProps<CardProps>();

  const cartStore = useCartStore();

  type categoriesType = {
    [key: string]: string;
  };

  const categoryLabel: categoriesType = {
    'electronics': 'Eletrônicos',
    'jewelery': 'Joias',
    "men's clothing": 'Roupas Masculinas',
    "women's clothing": 'Roupas Femininas',
  };

  function handleAddItem(product: Products) {
    cartStore.addCartList({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  }
</script>

<template>
  <div class="grid h-[524px] w-full items-start rounded-lg border border-slate-700 p-2 sm:w-64 md:w-full lg:w-64">
    <router-link
      :to="{ name: 'product-view', params: { id: product.id } }"
      class="h-[310px] md:flex md:gap-4 lg:block"
    >
      <img
        class="mx-auto mb-2 aspect-square w-64 rounded-t-lg"
        :src="product.image"
        alt=""
      />
      <h2 class="text-xl transition-all duration-300 line-clamp-2 hover:text-green-600">{{ product.title }}</h2>
    </router-link>
    <div class="grid">
      <div class="flex items-center justify-between py-2">
        <div>
          <span class="rounded-lg bg-slate-700 px-2 py-1 text-sm">{{ categoryLabel[product.category] }}</span>
        </div>
        <span class="text-lg">{{ product.price }}</span>
      </div>
      <p class="h-16 text-ellipsis text-sm leading-relaxed line-clamp-3">
        {{ product.description }}
      </p>
    </div>
    <div class="grid">
      <div class="item-center flex gap-4 py-2">
        <div class="flex gap-2">
          <IconStar class="h-6 w-5 text-green-600" />
          <span>{{ product.rating.rate }}</span>
        </div>
        <div>
          <span class="rounded-lg bg-slate-700 px-2 text-center text-[12px]">{{ product.rating.count }}</span>
        </div>
      </div>
      <button
        class="w-full rounded-lg bg-green-600 py-2 transition-all duration-300 hover:bg-opacity-60 active:bg-green-500"
        @click="handleAddItem(product)"
      >
        Adicionar
      </button>
    </div>
  </div>
</template>

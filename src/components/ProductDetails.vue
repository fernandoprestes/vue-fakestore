<script lang="ts" setup>
  import type { Products } from '~/@types/IProducts';
  import { IconStar } from '@iconify-prerendered/vue-ph';

  interface Props {
    product: Products;
  }
  defineProps<Props>();
</script>

<template>
  <div class="mx-auto max-w-[800px] px-4">
    <div
      class="flex flex-col items-center justify-center gap-4 rounded-lg border border-slate-700 p-2 px-2 md:grid md:grid-cols-3 md:items-start"
    >
      <img
        :src="product.image"
        alt=""
        class="aspect-square h-[400px] rounded-lg md:h-auto"
      />
      <div class="space-y-2 md:col-span-2">
        <h2 class="text-2xl text-green-600">{{ product.title }}</h2>
        <div class="flex justify-between">
          <span class="text-xl">
            {{ product.price }}
          </span>
          <div class="flex items-center justify-center rounded-lg bg-slate-700 px-2">
            <span class="text-sm">
              {{ product.category }}
            </span>
          </div>
        </div>
        <div>
          <p class="leading-relaxed">
            {{ product.description }}
          </p>
          <div class="item-center flex gap-4 py-2">
            <div class="flex gap-2">
              <IconStar class="h-6 w-5 text-green-600" />
              <span>{{ product.rating?.rate }}</span>
            </div>
            <div>
              <span class="rounded-lg bg-slate-700 px-2 text-center text-[12px]">{{ product.rating?.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex w-full justify-end px-4 md:px-0">
      <button class="rounded-lg bg-green-600 px-4 py-2">Adicionar</button>
    </div>
  </div>
</template>

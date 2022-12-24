<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useCartStore } from '~/store/Cart';

  const props = defineProps({
    modelValue: Boolean,
  });
  const cartStore = useCartStore();
  const { getCartList } = storeToRefs(cartStore);

  const emits = defineEmits(['update:modelValue']);

  const handleCloseDialog = () => emits('update:modelValue', false);
</script>

<template>
  <div
    v-if="props.modelValue"
    class="absolute right-0 top-0 z-50 h-full w-full bg-slate-900/60 p-2"
    @click="handleCloseDialog"
  >
    <div
      class="animate__animated animate__fadeInDown relative right-0 top-4 ml-auto w-full max-w-lg space-y-4 rounded-lg bg-slate-700 p-2 text-slate-100 shadow-2xl"
      @click.stop
    >
      <div class="flex items-center justify-center pt-6 pb-4">
        <h2 class="text-lg font-bold">Seu carrinho</h2>
      </div>
      <div class="flex flex-col gap-2">
        <div
          v-for="(item, index) in getCartList"
          :key="index"
          class="grid grid-cols-4 gap-4 rounded bg-slate-800 p-2"
        >
          <div class="col-span-1 flex justify-center rounded bg-white p-1">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-20"
            />
          </div>
          <div class="col-span-2">
            <h2 class="truncate text-lg font-bold text-slate-400">
              {{ item.title }}
            </h2>
            <span class="text-slate-300"> x {{ item.quantity }} </span>
          </div>
          <div class="col-span-1 flex items-center justify-end">
            {{ item.price * item.quantity }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

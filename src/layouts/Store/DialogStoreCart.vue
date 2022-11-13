<script lang="ts" setup>
  const props = defineProps({
    modelValue: Boolean,
  });
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
    </div>
  </div>
</template>

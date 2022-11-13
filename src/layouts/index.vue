<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const layout = computed(() => {
    const route = useRoute();
    return route.meta.layout;
  });
</script>
<template>
  <div class="bg-slate-800 text-slate-100">
    <component :is="layout" />
  </div>
</template>

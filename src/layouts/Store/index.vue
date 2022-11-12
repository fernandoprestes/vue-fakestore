<script setup lang="ts">
  import TheHeader from './TheHeader.vue';
  import TheSidebar from './TheSidebar.vue';
</script>
<template>
  <TheHeader />
  <main class="flex h-[calc(100vh-74px)] flex-col md:grid md:grid-cols-[278px,_1fr]">
    <TheSidebar />
    <RouterView />
  </main>
</template>

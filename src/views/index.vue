<script lang="ts" setup>
  import ListProductCard from '~/components/ListProductCard.vue';
  import TheSidebar from '~/components/TheSidebar.vue';
</script>

<template>
  <main class="grid h-[calc(100vh-127px)] grid-rows-[127px,_1fr] md:grid md:grid-cols-[278px,_1fr] md:grid-rows-none">
    <TheSidebar />
    <div class="h-f flex flex-wrap justify-center gap-4 overflow-auto p-6 xl:justify-start">
      <ListProductCard />
      <ListProductCard />
      <ListProductCard />
      <ListProductCard />
      <ListProductCard />
      <ListProductCard />
      <ListProductCard />
      <ListProductCard />
    </div>
  </main>
</template>

<template>
  <div>
    <PageLoader :ready="allReady" />
    <section
      class="flex flex-col min-h-screen md:px-24 px-8 pt-2 bg-gradient-to-tr from-slate-600 via-slate-500 to-stone-700 dark:from-darker dark:via-slate-800 dark:to-slate-950"
    >
      <Navbar />

      <HeroSection class="overflow-clip" @ready="allReady = true" />
    </section>

    <section
      class="h-screen bg-primary-200 dark:bg-stone-600 z-20 overflow-clip"
    ></section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const allReady = ref(false);
</script>

// https://discoverthreejs.com/ //
https://medium.com/nicasource/building-an-interactive-web-portfolio-with-vue-three-js-part-three-implementing-three-js-452cb375ef80

<template>
  <div>
    <AsideNav></AsideNav>
    <PageLoader :ready="allReady" />
    <section id="home"
      class="flex z-30 relative flex-col min-h-screen md:px-24 px-8 pt-2 bg-gradient-to-tr from-slate-600 via-slate-500 to-stone-700 dark:from-darker dark:via-slate-800 dark:to-slate-950">
      <Navbar />

      <HeroSection @ready="allReady = true" />
    </section>

    <section id="about"
      class="h-screen z-1 relative grid place-content-center bg-gradient-to-b from-primary-200 to-green-50 dark:from-stone-900 dark:to-slate-900 p-4">
      <AboutSection />
    </section>

    <section id="projects"
      class="z-30 relative h-screen bg-gradient-to-r from-secondary-200 to-slate-400 dark:bg-secondary-600-600"></section>

    <section id="contact" class="z-30 relative h-screen bg-gradient-to-r from-primary-200 to-slate-400 dark:bg-stone-600">
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { HeroSection, AboutSection } from '@/components/sections'
const allReady = ref(false)
</script>

// https://discoverthreejs.com/ //
https://medium.com/nicasource/building-an-interactive-web-portfolio-with-vue-three-js-part-three-implementing-three-js-452cb375ef80

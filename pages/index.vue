<template>
  <div>
    <AsideNav></AsideNav>
    <PageLoader :ready="allReady" />
    <section
      id="home"
      class="flex flex-col min-h-screen md:px-24 px-8 pt-2 bg-gradient-to-tr from-slate-600 via-slate-500 to-stone-700 dark:from-darker dark:via-slate-800 dark:to-slate-950"
    >
      <Navbar />

      <HeroSection @ready="allReady = true" />
    </section>

    <section id="about" class="h-screen bg-gradient-to-r from-primary-200 to-slate-400 dark:bg-stone-600 z-20">
      <AboutSection />
    </section>

    <section
      id="projects"
      class="h-screen bg-gradient-to-r from-secondary-200 to-slate-400 dark:bg-secondary-600-600 z-20"
    ></section>

    <section
      id="contact"
      class="h-screen bg-gradient-to-r from-primary-200 to-slate-400 dark:bg-stone-600 z-20"
    ></section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { HeroSection, AboutSection } from '@/components/sections'
const allReady = ref(false)
</script>

// https://discoverthreejs.com/ //
https://medium.com/nicasource/building-an-interactive-web-portfolio-with-vue-three-js-part-three-implementing-three-js-452cb375ef80

<template>
  <div class="bg-gradient-to-r from-slate-600 via-slate-500 to-stone-700">
    <SpeedInsights />
    <slot />
  </div>
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

// Lenis Smooth Scroll
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

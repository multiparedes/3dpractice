<template>
  <div class="w-screen h-screen grid place-content-center bg-[#262525]">
    <div class="z-10 text-center flex flex-col gap-4 text-white items-center">
      <div>
        <h1 class="uppercase text-[40px] font-semibold tracking-wider">
          Hi, I'm Martí Paredes
        </h1>
        <h1
          class="uppercase text-[40px] font-semibold tracking-wider bg-gradient-to-r from-primary-600 to-secondary-600 inline-block text-transparent bg-clip-text">
          Front-end developer</h1>
      </div>

      <p class="text-[20px]">Creating immersive digital experiences with a focus on design and functionality.</p>

      <Button class="w-fit" variant="secondary">
        Start the journey
        <Icon class="ml-2" icon="mingcute:down-line" />
      </Button>
    </div>
    <canvas class="absolute  pointer-events-none" ref="canvas" />
  </div>
</template>


<script setup>
// https://discoverthreejs.com/
// https://medium.com/nicasource/building-an-interactive-web-portfolio-with-vue-three-js-part-three-implementing-three-js-452cb375ef80

import { Application } from '@splinetool/runtime';
import { Icon } from '@iconify/vue';

// template ref
const canvas = ref(null)

// spline state
const state = reactive({
  spline: {
    scene: "https://prod.spline.design/gExza-HqyQINKaxa/scene.splinecode",
    app: null,
    isLoaded: false,
  },
});

onMounted(async () => {
  const app = new Application(canvas.value);
  await app.load(state.spline.scene)
  state.spline.app = app;
  state.spline.isLoaded = true;
})

</script>

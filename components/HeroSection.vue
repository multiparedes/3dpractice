<template>
  <section class="flex-grow flex items-center justify-center">
    <div class="z-10 text-center flex flex-col gap-4 text-white items-center">
      <div class="relative">
        <h1
          class="uppercase text-[40px] font-semibold tracking-wider text-outline-light dark:text-outline"
        >
          Hi, I'm Martí Paredes
        </h1>
        <h1
          class="uppercase text-[40px] font-semibold tracking-wider bg-gradient-to-r from-primary-500 to-secondary-400 inline-block text-transparent bg-clip-text text-outline-light dark:text-outline"
        >
          Front-end developer
        </h1>
      </div>

      <p class="text-[20px]">
        Creating immersive digital experiences with a focus on design and
        functionality.
      </p>

      <Button class="w-fit" color="secondary" icon="mingcute:down-line">
        Start the journey
      </Button>
    </div>

    <SplineScene
      class="absolute z-[5]"
      url="https://prod.spline.design/gExza-HqyQINKaxa/scene.splinecode"
    />
    <!--
      TODO: Reduce number of poligons.
      <SplineScene
      class="absolute"
      url="https://prod.spline.design/7Efqdpd4pA4v9Bhd/scene.splinecode"
      />
    -->
  </section>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>

<style scoped>
.text-outline {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #262525;
}

.text-outline-light {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(100 116 139);
}
</style>

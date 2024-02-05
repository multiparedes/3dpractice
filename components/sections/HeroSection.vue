<template>
  <section class="flex-grow flex items-center justify-center">
    <div class="z-10 text-center flex flex-col gap-4 text-white items-center">
      <div class="relative">
        <h1 class="uppercase text-[45px] font-semibold tracking-wider text-outline-light dark:text-outline" :key="1">
          {{ $t('hero.title') }}
        </h1>
        <h1
          class="uppercase text-[45px] font-semibold tracking-wider bg-gradient-to-r from-primary-500 to-secondary-400 inline-block text-transparent bg-clip-text text-outline-light dark:text-outline"
          :key="21"
        >
          {{ $t('hero.subtitle') }}
        </h1>
      </div>

      <p class="text-[20px]">
        {{ $t('hero.introduction') }}
      </p>

      <Button class="w-fit" color="secondary" icon="mingcute:down-line" @click="navigateAbout()">
        {{ $t('hero.start') }}
      </Button>
    </div>

    <SplineScene
      class="absolute z-[5]"
      url="https://prod.spline.design/gExza-HqyQINKaxa/scene.splinecode"
      @scene-loaded="allComplete = true"
    />
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'

const emit = defineEmits(['ready'])

const allComplete = ref(false)
watch(allComplete, () => {
  emit('ready')
})

function navigateAbout() {
  document.getElementById('about')!.scrollIntoView({ behavior: 'smooth' })
}
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

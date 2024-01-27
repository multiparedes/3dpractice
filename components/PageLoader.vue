<template>
  <Transition>
    <div
      v-if="!ready"
      class="fixed z-[100] w-screen h-screen bg-gradient-to-tr from-darker via-slate-800 to-slate-950 grid place-content-center overflow-x-hidden"
    >
      <MarqueeText>
        <p
          class="text-9xl p-6 text-transparent text-outline tracking-wider max-w-screen-2xl animate-pulse mr-2"
        >
          Loading ... <span>//</span>
        </p>
      </MarqueeText>
    </div>
  </Transition>
</template>

<script setup>
import MarqueeText from "vue-marquee-text-component";

defineProps({
  ready: { type: Boolean, required: true },
});
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 1s linear 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.text-outline {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
}
</style>

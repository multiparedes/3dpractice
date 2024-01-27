<template>
  <canvas :class="{ 'pointer-events-none': !interactive }" ref="scene" />
</template>

<script setup lang="ts">
import { Application } from "@splinetool/runtime";

const scene = ref<HTMLCanvasElement | null>(null);

interface Props {
  url: string;
  interactive?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["scene-loaded"]);

const state = reactive({
  spline: {
    scene: props.url,
    app: null as Application | null,
    isLoaded: false,
  },
});

onMounted(async () => {
  if (scene.value) {
    const app = new Application(scene.value);
    await app.load(state.spline.scene);
    state.spline.app = app;
    state.spline.isLoaded = true;

    emit("scene-loaded");
  }
});
</script>

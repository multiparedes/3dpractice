<template>
  <FallingMe :stars="isDarkMode" class="pointer-events-none" />
</template>

<script setup lang="ts">
const colorModeStore = useColorMode()

const isDarkMode = computed(() => {
  return colorModeStore.colorMode === 'dark'
})
</script>

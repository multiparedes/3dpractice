<template>
  <FallingMe :stars="isDarkMode" class="pointer-events-none z-0" />
  <Card class="z-10 max-w-2xl px-4 py-2">"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  </Card>
</template>

<script setup lang="ts">
const colorModeStore = useColorMode()

const isDarkMode = computed(() => {
  return colorModeStore.colorMode === 'dark'
})
</script>

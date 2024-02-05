<template>
  <Button variant="link" @click="toggleTheme(otherTheme)">
    <Icon :icon="icons[otherTheme]" />
    {{ $t('navbar.switch_mode', { mode: $t(`navbar.${otherTheme}`) }) }}
  </Button>
</template>

<script setup lang="ts">
const currentTheme = ref<string>(localStorage.theme || 'dark')
const themes: string[] = ['light', 'dark']

const colorModeStore = useColorMode()
const { setColor } = colorModeStore

const icons: Record<string, string> = {
  light: 'ph:moon',
  dark: 'ph:sun',
}

function toggleTheme(theme: string): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.theme = theme
  currentTheme.value = theme
  setColor(theme)
  emit('colorPreferencesChanged', currentTheme.value)
}

const otherTheme = computed(() => themes.find((theme) => theme !== currentTheme.value) || 'dark')
const emit = defineEmits(['colorPreferencesChanged'])
</script>

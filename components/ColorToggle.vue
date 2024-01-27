<template>
  <Button variant="link" @click="toggleTheme(otherTheme)">
    Switch to {{ otherTheme }} mode
  </Button>
</template>

<script setup lang="ts">
const currentTheme = ref<string>(localStorage.theme || "light");
const themes: string[] = ["light", "dark"];

function toggleTheme(theme: string | undefined): void {
  if (theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
    currentTheme.value = theme;
  }
}

const otherTheme = computed(() =>
  themes.find((theme) => theme !== currentTheme.value)
);
</script>

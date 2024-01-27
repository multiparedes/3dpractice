<template>
  <Button variant="link" @click="toggleLang(nextLang)">
    {{ $t("navbar.switch_lang", { language: nextLang.toLocaleUpperCase() }) }}
  </Button>
</template>

<script setup lang="ts">
const { locale, availableLocales, setLocale } = useI18n();

const nextLang = computed(() => {
  return availableLocales.filter((lang: string) => lang != locale.value)[0];
});

async function toggleLang(language: string) {
  await setLocale(language);
}
</script>

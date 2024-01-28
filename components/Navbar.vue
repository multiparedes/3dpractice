<template>
  <section class="w-full flex justify-between text-white items-center content-center">
    <Button color="transparent" class="text-xl" @click="scrollTop()"> Multiparedes </Button>

    <div class="gap-8 hidden md:flex text-white">
      <Button variant="link" @click="navigateAbout()">{{ $t('navbar.about') }}</Button>
      <Button variant="link">{{ $t('navbar.projects') }}</Button>
      <Button variant="link">{{ $t('navbar.contact') }}</Button>
    </div>

    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button class="text-xl tracking-widest hidden md:flex" color="transparent"> ... </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="text-center items-center flex flex-col p-2 gap-2">
        <LanguageSelector />
        <ColorToggle />
      </DropdownMenuContent>
    </DropdownMenu>

    <Sheet>
      <SheetTrigger class="flex md:hidden">
        <Button icon="ci:hamburger-lg" variant="link" />
      </SheetTrigger>
      <SheetContent class="dark:bg-darker bg-slate-600 text-white">
        <div class="flex flex-col justify-center w-full h-full gap-4">
          <Button variant="link">About me</Button>
          <Button variant="link">My projects</Button>
          <LanguageSelector />
          <ColorToggle />
        </div>
      </SheetContent>
    </Sheet>
  </section>
</template>

<script setup lang="ts">
function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

function navigateAbout() {
  document.getElementById('about')!.scrollIntoView({ behavior: 'smooth' })
}

onBeforeMount(() => {
  initialToggleTheme()
})

function initialToggleTheme(): void {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

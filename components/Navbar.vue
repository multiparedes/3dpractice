<template>
  <section class="flex justify-between text-white items-baseline">
    <NuxtLink href="/" class="text-xl" @click="scrollTop()"
      >Multiparedes</NuxtLink
    >

    <div class="gap-8 hidden md:flex">
      <Button class="text-white" variant="link">About me</Button>
      <Button class="text-white" variant="link">My projects</Button>
      <Button class="text-white" variant="link">Contact</Button>
    </div>

    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          class="text-xl tracking-widest hidden md:flex"
          color="transparent"
        >
          ...
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="text-center flex flex-col p-2 gap-2">
        Lang: TODO
        <ColorToggle />
      </DropdownMenuContent>
    </DropdownMenu>

    <Sheet>
      <SheetTrigger class="flex md:hidden">
        <Button icon="ci:hamburger-lg" variant="link" />
      </SheetTrigger>
      <SheetContent class="bg-stone-800">
        <div class="flex flex-col justify-center w-full h-full gap-4">
          <Button variant="link">About me</Button>
          <Button variant="link">My projects</Button>
          <Button variant="link">Contact</Button>
          <Button variant="link">Lang: TODO</Button>
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
    behavior: "smooth",
  });
}

onBeforeMount(() => {
  initialToggleTheme();
});

function initialToggleTheme(): void {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
</script>

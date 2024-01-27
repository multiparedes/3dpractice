<template>
  <section
    class="pt-1 h-8 dark:bg-darker bg-white dark:text-white text-slate-950 text-center flex justify-center gap-2"
  >
    <p>Made by Martí Paredes</p>
    -
    <div class="flex gap-2 mt-0.5">
      <MyTooltip text="Visit my Github">
        <Button
          class="hover:text-primary-800"
          color="transparent"
          icon="mdi:github"
          link="https://github.com/multiparedes"
          is-external-link
        />
      </MyTooltip>

      <MyTooltip text="Take a look at my LinkedIn">
        <Button
          class="hover:text-primary-800"
          color="transparent"
          icon="mdi:linkedin"
          link="https://github.com/multiparedes"
          is-external-link
        />
      </MyTooltip>
    </div>
  </section>
</template>

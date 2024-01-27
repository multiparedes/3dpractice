<template>
  <section
    class="pt-1 h-8 dark:bg-darker bg-white dark:text-white text-slate-950 text-center flex justify-center gap-2"
  >
    <p>{{ $t("footer.made_by") }}</p>
    -
    <div class="flex gap-2 mt-0.5">
      <MyTooltip :text="$t('footer.github')">
        <Button
          class="hover:text-primary-800"
          color="transparent"
          icon="mdi:github"
          link="https://github.com/multiparedes"
          is-external-link
        />
      </MyTooltip>

      <MyTooltip :text="$t('footer.linkedin')">
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

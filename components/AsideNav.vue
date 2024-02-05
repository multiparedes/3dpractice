<template>
  <div
    class="flex fixed flex-col bottom-10 left-4 py-4 px-2 items-center gap-4 text-slate-950 dark:text-white bg-[#F8F8F8]/60 dark:bg-slate-900/80 rounded-2xl z-10"
  >
    <ul v-for="section in sections" :key="section.name">
      <MyTooltip :text="section.name">
        <Icon
          :icon="section.icon"
          class="h-6 w-6 dark:hover:text-secondary-400 hover:text-primary-400 transition-colors"
          :class="{ 'text-primary-600 dark:text-secondary-600': section.name === sectionActive }"
          @click="smoothScroll(section)"
        />
      </MyTooltip>
    </ul>
  </div>
</template>

<script setup lang="ts">
const sectionActive = ref('home')

interface Section {
  name: string
  icon: string
}

const sections: Section[] = [
  { name: 'home', icon: 'iconamoon:home' },
  { name: 'about', icon: 'fluent:person-12-regular' },
  { name: 'projects', icon: 'fluent:code-20-filled' },
  { name: 'contact', icon: 'lets-icons:message-alt-fill' },
]

onMounted(() => {
  sectionActive.value = sections[0].name

  const observer = ref(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            sectionActive.value = entry.target.getAttribute('id') || 'home'
          }
        })
      },
      {
        rootMargin: '0px 0px -90% 0px',
      },
    ),
  )

  document.querySelectorAll('section').forEach((section) => {
    observer.value.observe(section)
  })
})

function smoothScroll(section: Section) {
  const element = document.getElementById(section.name)
  if (element) {
    sectionActive.value = section.name
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
    <section class="pt-1 h-8 bg-white text-center flex justify-center items-center gap-2">
        Made by Martí Paredes - Personal portafolio
        <MyTooltip text="Visit my Github">
            <Icon class="text-slate-950 hover:text-primary-800 cursor-pointer aspect-square w-5 transition-colors"
                width="none" height="none" icon="mdi:github" @click="window.open('https://github.com/multiparedes')" />
        </MyTooltip>

        <MyTooltip text="Take a look at my LinkedIn">
            <Icon class="text-slate-950 hover:text-primary-800 cursor-pointer aspect-square w-5 transition-colors"
                width="none" height="none" icon="mdi:linkedin" />
        </MyTooltip>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
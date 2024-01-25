<template>
    <section class="flex-grow flex items-center justify-center ">
        <div class="z-10 text-center flex flex-col gap-4 text-white items-center">
            <div>
                <h1 class="uppercase text-[40px] font-semibold tracking-wider">
                    Hi, I'm Martí Paredes
                </h1>
                <h1
                    class="uppercase text-[40px] font-semibold tracking-wider bg-gradient-to-r from-primary-600 to-secondary-600 inline-block text-transparent bg-clip-text">
                    Front-end developer</h1>
            </div>

            <p class="text-[20px]">Creating immersive digital experiences with a focus on design and functionality.</p>

            <Button class="w-fit" variant="secondary">
                Start the journey
                <Icon class="ml-2" icon="mingcute:down-line" />
            </Button>
        </div>
        <canvas class="absolute z-[5] pointer-events-none" ref="blob" />
        <canvas class="absolute pointer-events-none" ref="filaments" />
    </section>
</template>

<script setup>
import { Application } from '@splinetool/runtime';
import { Icon } from '@iconify/vue';

// template ref
const blob = ref(null)
const filaments = ref(null)

// spline state
const state = reactive({
    spline: {
        scene: "https://prod.spline.design/gExza-HqyQINKaxa/scene.splinecode",
        app: null,
        isLoaded: false,
    },
});

const stateFilaments = reactive({
    spline: {
        scene: 'https://prod.spline.design/7Efqdpd4pA4v9Bhd/scene.splinecode',
        app: null,
        isLoaded: false,
    },
});


onMounted(async () => {
    const app = new Application(blob.value);
    await app.load(state.spline.scene)
    state.spline.app = app;
    state.spline.isLoaded = true;

    const app_2 = new Application(filaments.value);
    await app_2.load(stateFilaments.spline.scene)
    stateFilaments.spline.app = app_2;
    stateFilaments.spline.isLoaded = true;

})

</script>

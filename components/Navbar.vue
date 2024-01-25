<template>
    <section class="flex justify-between text-white items-center">

        <NuxtLink href="/" class="text-xl" @click="scrollTop()">Multiparedes</NuxtLink>

        <div class="flex gap-4">
            <Button size="lg" class="text-white" variant="link">About me</Button>
            <Button size="lg" class="text-white" variant="link">My projects</Button>
            <Button size="lg" class="text-white" variant="link">Contact</Button>
        </div>

        <DropdownMenu>
            <DropdownMenuTrigger><Button variant="ghost" class="text-xl">. . .</Button></DropdownMenuTrigger>
            <DropdownMenuContent class="text-center">
                <DropdownMenuLabel>Lang: TODO</DropdownMenuLabel>
                <DropdownMenuLabel>Style: TODO</DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
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

</script>
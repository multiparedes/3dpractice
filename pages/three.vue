<template>
  <div class="grid place-content-center h-full px-4">
    <TresCanvas clear-color="#82DBC5" window-size preset="realistic">
      <TresPerspectiveCamera ref="cam" :position="[0, 1.5, 2]" :look-at="[0, 1.5, 0]" />
      <Suspense>
        <GLTFModel ref="avatar" path="./avatar.glb" />
      </Suspense>
      <TresDirectionalLight :position="[0, 8, 4]" :intensity="2" cast-shadow />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
const cam = shallowRef()
</script>

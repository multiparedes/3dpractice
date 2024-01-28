<template>
  <!--<div id="scene-container" class="overflow-x-hidden">
  </div>-->
  <TresCanvas clear-color="#82DBC5" window-size>
    <TresPerspectiveCamera />
    <OrbitControls />
    <Suspense>
      <GLTFModel path="./ibiscus/scene.gltf" />
    </Suspense>
    <TresDirectionalLight :position="[-4, 8, 4]" :intensity="2" cast-shadow />
  </TresCanvas>
</template>

<script setup>
const boxRef = ref(null)

const { onLoop } = useRenderLoop()

onLoop(({ delta, elapsed }) => {
  if (boxRef.value) {
    boxRef.value.rotation.y += delta
  }
})
</script>

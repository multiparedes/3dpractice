<template>
  <div class="grid place-content-center h-full px-4 bg-red-300">
    <TresCanvas window-size preset="realistic" :alpha="true">
      <TresPerspectiveCamera :position="[0, 0, 2]" />
      <OrbitControls :enable-zoom="false" :min-polar-angle="MathUtils.degToRad(55)"
        :max-polar-angle="MathUtils.degToRad(85)" enableDamping />
      <Suspense>
        <primitive :position="[0, -1.5, 0]" :object="model" />
      </Suspense>
      <TresDirectionalLight :position="[2, 2, 25]" :intensity="1" cast-shadow />
      <TresAmbientLight :position="[0, 0, 0]" />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { useAnimations } from '@tresjs/cientos'
import { MathUtils } from 'three'

const { scene: model, animations } = await useGLTF('/avatar.glb')

const { actions, mixer } = useAnimations(animations, model)

console.log(actions)

let currentAction = actions.Idle

currentAction.play()

</script>

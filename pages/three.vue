<template>
  <div class="grid place-content-center h-full m-4 bg-red-900">
    <TresCanvas class="p-3" window-size preset="realistic" :alpha="true" output-encoding="SRGBColorSpace">
      <TresPerspectiveCamera :position="[0, 0, 2]" />
      <OrbitControls :enable-zoom="false" :min-polar-angle="MathUtils.degToRad(90)"
        :max-polar-angle="MathUtils.degToRad(90)" enableDamping :enable-pan="false" />
      <Suspense>
        <primitive :position="[0, -1.5, 0]" :object="model" />
      </Suspense>
      <TresDirectionalLight :position="[2, 2, 25]" :intensity="1" cast-shadow />
      <TresAmbientLight :position="[0, -2, 0]" />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { useAnimations, useGLTF } from '@tresjs/cientos'
import { MathUtils, Vector3 } from 'three'

let cursorPosition: Vector3 = new Vector3()
cursorPosition.z = -3

const { onLoop } = useRenderLoop()

const { scene: model, animations } = await useGLTF('/fallingMe.glb')

const { actions, mixer } = useAnimations(animations, model)

actions.Falling.play()

onLoop(() => {
  const head = model.getObjectByName('mixamorigNeck')

  if (cursorPosition) {
    // Multiply the cursor position by -1 to make the model look in the correct direction
    const targetPosition = cursorPosition.clone().multiplyScalar(-1)
    head?.lookAt(targetPosition,)
  }
})

document.onmousemove = function (e) {
  cursorPosition.x = -(e.clientX / window.innerWidth) * 2
  cursorPosition.y = (e.clientY / window.innerHeight) * 2 - 0.5
  cursorPosition.z = -3
}
</script>

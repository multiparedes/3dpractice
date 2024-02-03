<template>
    <TresCanvas v-bind="gl" preset="realistic">
        <TresPerspectiveCamera :position="[0, 0, 2.5]" />
        <OrbitControls :enable-zoom="false" :min-polar-angle="MathUtils.degToRad(90)"
            :max-polar-angle="MathUtils.degToRad(90)" enableDamping :enable-pan="false" />
        <Suspense>
            <primitive :position="[0, -1.5, 0]" :object="model" />
        </Suspense>


        <Levioso :range="[-0.05, 0.05]" :floatFactor="0.25" :rotationFactor="0.5">
            <Suspense>
                <GLTFModel path="./cloud.glb" :position="[3, 2, -7]" />
            </Suspense>
        </Levioso>

        <Levioso>
            <Suspense>
                <GLTFModel path="./cloud.glb" :scale="0.5" :rotation="[75, 10, 0]" :position="[-3, -1, -3]" />
            </Suspense>
        </Levioso>

        <TresDirectionalLight :position="[2, 2, 2]" :intensity="1" cast-shadow />
        <TresAmbientLight :position="[0, -0.5, 0]" />
    </TresCanvas>
</template>
  
<script setup lang="ts">
import { useAnimations, useGLTF } from '@tresjs/cientos'
import { MathUtils, Vector3 } from 'three'
import { BasicShadowMap, SRGBColorSpace } from 'three'

const gl = {
    shadows: true,
    alpha: true,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
}

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
  
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { MathUtils } from 'three'

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas)

  // Enable controls?
  controls.enabled = true
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.5

  // Control limits
  // It's recommended to set some control boundaries
  // to prevent the user from clipping with the objects.

  // Y axis
  controls.minPolarAngle = MathUtils.degToRad(65) // default
  controls.maxPolarAngle = MathUtils.degToRad(65)

  // X axis
  //   controls.minAzimuthAngle = ...
  //   controls.maxAzimuthAngle = ...

  // Smooth camera:
  // Remember to add to loop updatables to work.
  controls.enableDamping = true
  controls.enableZoom = false
  controls.enablePan = false

  controls.tick = () => controls.update()

  return controls
}

export { createControls }

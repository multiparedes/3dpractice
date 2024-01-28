import { createCamera } from './components/Camera.js'
import { createLights } from './components/Lights.js'
import { createScene } from './components/Scene.js'
import { createRenderer } from './systems/renderer.js'
import { Loop } from './systems/Loop.js'
import { Resizer } from './systems/Resizer.js'
import { createControls } from './systems/controls.js'

import createTerrain from './objects/terrain.js'

// These variables are module-scoped: we cannot access them
// from outside the module.
let camera
let renderer
let scene
let loop

const terrainColor = 'green'
const skyColor = 'lightblue'

class World {
  constructor(container) {
    // Instances of camera, scene, and renderer
    camera = createCamera()
    scene = createScene(skyColor)
    renderer = createRenderer()
    // Initialize Loop
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)

    // Random values for terrain vertices
    const randomVals = []

    for (let i = 0; i < 12675; i++) {
      randomVals.push(Math.random() - 0.5)
    }

    // Light Instance, with optional light helper
    const { light, lightHelper } = createLights('white')
    let terrain = createTerrain({
      color: terrainColor,
      randVertexArr: randomVals,
    })

    let controls = createControls(camera, container)

    loop.updatables.push(light)
    loop.updatables.push(camera)
    loop.updatables.push(terrain)
    loop.updatables.push(controls)

    scene.add(light, terrain, controls)

    const resizer = new Resizer(container, camera, renderer)
    resizer.onResize = () => {
      this.render()
    }
  }
  render() {
    // Draw a single frame
    renderer.render(scene, camera)
  }
  // Animation handlers
  start() {
    loop.start()
  }
  stop() {
    loop.stop()
  }
}
export { World }

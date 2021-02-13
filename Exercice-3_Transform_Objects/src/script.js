import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// // 1 objet
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

//groupe d'objet
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000})
)
cube1.position.x = -2
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00})
)
cube2.position.x = 2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff})
)
group.add(cube3)

group.position.y = 1
group.scale.y = 2
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

// //deuxieme method pour changer les position d'un mesh
//mesh.position.set(0.7,-0.6,1)

// scene.add(mesh)


// //Scale 
// // mesh.scale.x = 2
// // mesh.scale.y = 0.5
// // mesh.scale.z = 0.5
// //2eme method
// mesh.scale.set(2,0.5,0.5)

// // Rotate with EULER
// mesh.rotation.reorder('YXZ') // axes order.
// mesh.rotation.x = Math.PI*0.25 // roation 180/half rotation = pi 
// mesh.rotation.y = Math.PI*0.25


//axes helper
//param = length of axes,ici 3
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// // reduce the vector until the length is one
// mesh.position.normalize()
// console.log('should be one :', mesh.position.length());
// //distance from center of the scene
// console.log('distance frome center of the scene : ',mesh.position.length())


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

// //look at object, work on any object to and from param = vector 3
// camera.lookAt(mesh.position)

scene.add(camera)

// //distance from the camera
// console.log('distance from the camera : ',mesh.position.distanceTo(camera.position))
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
import * as THREE from 'three'; 


const scene = new THREE.Scene()
const loader = new THREE.TextureLoader()


const SphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const sphereMaterial = new THREE.MeshBasicMaterial({ color: "red" })

const sphereMesh = new THREE.Mesh(
  SphereGeometry,
  sphereMaterial
);

scene.add(sphereMesh)


const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight)

camera.position.z = 5

const canvas = document.querySelector('canvas.threejs-canvas')
const renderer = new THREE.WebGLRenderer({ canvas: canvas})



const renderloop = () => {
  window.requestAnimationFrame(renderloop)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setClearColor(0xffffff, 1)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene,camera)
  
}

renderloop()


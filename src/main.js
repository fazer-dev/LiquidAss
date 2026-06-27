import * as THREE from 'three'; 


const scene = new THREE.Scene()
const loader = new THREE.TextureLoader()


const SphereGeometry = new THREE.IcosahedronGeometry(1, 5)
const sphereMaterial = new THREE.ShaderMaterial()

const sphereMesh = new THREE.Mesh(
  SphereGeometry,
  sphereMaterial
);

scene.add(sphereMesh)


const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight)

camera.position.z = 5

const canvas = document.querySelector('canvas.threejs-canvas')
const renderer = new THREE.WebGLRenderer({ canvas: canvas,
  antialias: true
})

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const renderloop = () => {
  window.requestAnimationFrame(renderloop)
  
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setClearColor(0xffffff, 0)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene,camera)
  
}

renderloop()


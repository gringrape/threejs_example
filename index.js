import * as THREE from './node_modules/three/src/Three.js'; 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// mesh 설정
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0xffff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  camera.position.z += 0.01;
}

animate();
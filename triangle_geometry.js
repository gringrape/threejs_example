import * as THREE from './node_modules/three/src/Three.js'; 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// triangle mesh
const geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(2, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 2, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, 2));
geometry.faces.push(new THREE.Face3(0, 1, 2)); // vertices 의 원소를 사용해서 면 만들기

const material = new THREE.MeshBasicMaterial({color: 0xffff00});
const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

camera.position.x = 5;
camera.position.y = 5;
camera.position.z = 5;

camera.lookAt(new THREE.Vector3(0, 0, 0));

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
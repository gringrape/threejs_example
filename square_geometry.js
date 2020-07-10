import * as THREE from './node_modules/three/src/Three.js'; 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function createSquare(x1, y1, x2, y2) {
  const squareGeometry = new THREE.Geometry();
  squareGeometry.vertices.push(new THREE.Vector3(x1, y1, 0)); // 0
  squareGeometry.vertices.push(new THREE.Vector3(x2, y1, 0)); // 1
  squareGeometry.vertices.push(new THREE.Vector3(x1, y2, 0)); // 2
  squareGeometry.vertices.push(new THREE.Vector3(x2, y2, 0)); // 3
  squareGeometry.faces.push(new THREE.Face3(2, 0, 3));
  squareGeometry.faces.push(new THREE.Face3(0, 1, 3));
  // face 를 생성하는 경우, 순서조건이 필요하다. 
  return squareGeometry;
}

const geometry = createSquare(1, 1, 5, 5);
const material = new THREE.MeshBasicMaterial({color: 0xffff00});
const square = new THREE.Mesh(geometry, material);
scene.add(square);

camera.position.z = 7;
camera.position.x = 1;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
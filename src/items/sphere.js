import * as THREE from "three";

// creating a scene
const scene = new THREE.Scene();

// create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: "#00ff83" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// setup camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600);
camera.position.z = 20;

// set light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10); // Move the light
scene.add(light);

// render
const canvas = document.querySelector(".display");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);

renderer.render(scene, camera);

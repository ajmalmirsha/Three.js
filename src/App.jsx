import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./App.css";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // creating a scene
    const scene = new THREE.Scene();

    // create sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({ color: "#00ff83" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // setup camera
    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 100);
    camera.position.z = 20;

    // // set light
    // const light = new THREE.PointLight(0xffffff, 1, 100);
    // light.position.set(0, 10, 10); // Move the light
    // scene.add(light);

    // Add a directional light to the scene to cast shadows on the sphere.
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // render
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(800, 600);

    // controlls

    const controlls = new OrbitControls(camera, canvas);
    controlls.enableDamping = true
    controlls.enableZoom = false
    controlls.autoRotate = true
    controlls.autoRotateSpeed = 15
    controlls.enableRotate = true


    const animate = () => {
      // Render the scene continuously
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const loop = () => {
      // mesh.position.x += 0.02
      controlls.update()
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();
  }, []);

  return (
    <>
      hello world
      <canvas className="display" ref={canvasRef}></canvas>
    </>
  );
}

export default App;

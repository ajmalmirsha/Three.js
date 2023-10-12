import * as THREE from "three";
import gsap from "gsap";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import React, { useEffect, useRef, useState } from "react";
import "./App.css";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
// import "react-calendar/dist/Calendar.css";

// import DatePicker from "react-multi-date-picker";
import { DateRangePicker } from "rsuite";

import 'rsuite/dist/rsuite.min.css';

// import { MantineProvider } from "@mantine/core";
// import { DateRangePicker, Provider, defaultTheme } from "@adobe/react-spectrum";

import { Input, MantineProvider } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
function App() {
  // useEffect(() => {
  //   const canvas = document.querySelector('.display')

  //   const sizes = {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };

  //   const scene = new THREE.Scene();

  //   scene.background = new THREE.Color(0xcbd6ce);

  //   const gltfLoader = new GLTFLoader();
  //   gltfLoader.load("/3dfiles/porshe/scene.gltf", (gltfScene) => {
  //     scene.add(gltfScene.scene);
  //   });
  //   const light = new THREE.PointLight(0xffffff, 500, 100);
  //   light.position.set(10, 20, 10);
  //   scene.add(light);
  //   const sideLight = new THREE.AmbientLight(0xffffff, 10, 100);
  //   sideLight.position.set(0, 0, 0);
  //   scene.add(sideLight);

  //   const ampientLight = new THREE.AmbientLight(0xffffff, 1)
  //   scene.add(ampientLight);

  //   // camera
  //   const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height);
  //   camera.position.z = 10;

  //   scene.add(camera);

  //   const controls = new OrbitControls(camera, canvas);
  //   controls.enableDamping = true;
  //   controls.autoRotate = true;
  //   controls.enableZoom = false

  //   const renderer = new THREE.WebGLRenderer({ canvas });

  //   const loop = () => {
  //     controls.update();
  //     renderer.setSize(sizes.width, sizes.height);
  //     renderer.render(scene, camera);
  //     window.requestAnimationFrame(loop);
  //   };

  //   loop();

  //   const timeLine = gsap.timeline({ defaults: { duration: 1 } });
  //   // timeLine.fromTo(mesh.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 });
  //   timeLine.fromTo(canvas.current, { opacity: 0 }, { opacity: 1 });
  // }, []);

  const [value, onChange] = useState(null);
const DateRef = useRef()
  const handleChange = (value) => {
    onChange(value)
    console.log(value);
    //     start date is  09/10/2023
    //     end date is  19/10/2023
  };



  return (
    <>
      {/* <canvas className="display" ></canvas> */}
      <DateRangePicker showOneCalendar ref={DateRef} format="dd-MM-yy" cleanable={false} onChange={handleChange} />
      <>
      {/* <DatePicker range format="DD-MM-YY" value={value}  onChange={handleChange} dateSeparator=" to " /> */}

      {/* <CDateRangePicker label="Date range" locale="en-US" />
     <CDateRangePicker startDate="2022/08/03" endDate="2022/08/17" label="Date range" locale="en-US" />  */}

      {/* <Provider theme={defaultTheme} colorScheme="light" defaultColorScheme="light">
        <DateRangePicker
          shouldForceLeadingZeros
          // value={range}
          onChange={handleChange}
          width={300}
          aria-label="Choose a date range"
        />
      </Provider> */}

      {/* <DateRangePicker /> */}

      {/* <Input /> */}

      {/* <DatePickerInput
        type="range"
        label="Pick dates range"
        placeholder="Pick dates range"
        
        // value={value}
        // onChange={setValue}
      /> */}
      </>
    </>
  );
}

export default App;

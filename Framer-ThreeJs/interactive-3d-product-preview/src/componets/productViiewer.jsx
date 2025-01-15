import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ProductViewer = ({ modelUrl }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f0f0f0");

    const aspectRatio = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        scene.add(gltf.scene);
        renderer.render(scene, camera);
      },
      undefined,
      (error) => console.error(error)
    );

    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [modelUrl]);

  return <div ref={mountRef} className="w-full h-[500px]" />;
};

export default ProductViewer;

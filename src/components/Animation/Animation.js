import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const Animation = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Create a new Three.js camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create a new Three.js renderer and set its size
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add the renderer to the DOM
    containerRef.current.appendChild(renderer.domElement);

    // Create a new Three.js cube and add it to the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera so that it is pointing at the cube
    camera.position.z = 5;

    // Animate the cube
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={containerRef} />;
};

export default Animation;

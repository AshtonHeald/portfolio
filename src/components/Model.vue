<template>
  <div ref="container" style="width: 100%; height: 500px"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const container = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(500, 500);
  container.value.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 1)); // 🔦 light!

  const loader = new GLTFLoader();
  loader.load(
    "/ash-full.glb",
    (gltf) => {
      console.log("Model loaded:", gltf);
      gltf.scene.scale.set(10, 10, 10); // optional scale
      scene.add(gltf.scene);
      camera.position.z = 5;
      renderer.render(scene, camera);
    },
    undefined,
    (error) => console.error("GLB load error:", error),
  );
});
</script>

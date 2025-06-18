/*"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useAnimations,
  PerspectiveCamera,
  ContactShadows,
  Html,
} from "@react-three/drei";

function PlayerModel() {
  const { scene, animations } = useGLTF("/ash-full.glb");
  const { scene: idleScene, animations: idleAnimations } =
    useGLTF("/male-idle.glb");

  // Combine the scene from ash-full.glb and animations from male-idle.glb
  const ref = useRef(null);
  const { actions } = useAnimations(idleAnimations, ref);

  // Start the idle animation once the model is loaded
  useEffect(() => {
    if (actions["idle"]) {
      actions["idle"].play(); // Make sure your animation name matches the one in the .glb file
    }
  }, [actions]);

  // Combine both models
  return (
    <group dispose={null} ref={ref}>
      <primitive object={scene} scale={2} position={[0, -2, 0]} />
      <primitive object={idleScene} scale={2} position={[0, -2, 0]} />
    </group>
  );
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-blue-500 border-r-blue-700 border-b-blue-700 border-l-blue-500"></div>
        <p className="mt-4 text-lg font-medium text-white">Loading model...</p>
      </div>
    </Html>
  );
}

export default function PlayerModelViewer() {
  return (
    <Canvas shadows style={{ height: "100%" }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />

      {/* Lighting }
      <ambientLight intensity={0.05} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-10, -10, -5]} intensity={0.05} />

      {/* Environment and model }
      <Environment preset="studio" />
      <Suspense fallback={<LoadingSpinner />}>
        <PlayerModel />
        <ContactShadows
          opacity={0.5}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
      </Suspense>

      {/* Controls - modified to only allow X-axis rotation }
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}

*/

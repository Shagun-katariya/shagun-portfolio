import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import { ErrorBoundary } from 'react-error-boundary';

const FallbackComponent = ({ error }) => (
  <div>
    <h2>Something went wrong in the 3D component:</h2>
    <p>{error.message}</p>
  </div>
);

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf", true, (error) => {
    console.error("Error loading model:", error);
  });

  if (!earth || !earth.scene) {
    return null;
  }

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

export default EarthCanvas;

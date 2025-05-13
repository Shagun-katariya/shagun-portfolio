import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

import { ErrorBoundary } from 'react-error-boundary';

const FallbackComponent = ({ error }) => (
  <div>
    <h2>Something went wrong in the 3D component:</h2>
    <p>{error.message}</p>
  </div>
);

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  // Add error handling for texture loading
  if (!decal) {
    return null;
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Canvas
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
          <Preload all />
        </Suspense>

      </Canvas>
    </ErrorBoundary>
  );
};

export default BallCanvas;

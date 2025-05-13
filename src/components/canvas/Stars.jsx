import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { ErrorBoundary } from 'react-error-boundary';

const FallbackComponent = ({ error }) => (
  <div>
    <h2>Something went wrong in the 3D component:</h2>
    <p>{error.message}</p>
  </div>
);

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
            <Preload all />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default StarsCanvas;

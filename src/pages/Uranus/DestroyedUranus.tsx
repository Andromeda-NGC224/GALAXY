import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";

import DestroyedUranusMap from "../../assets/Lava/uranusDes.jpg";

const DestroyedJupiter = () => {
  const uranusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (uranusRef.current) {
      uranusRef.current.rotation.y = elapsedTime / 12;
    }
  });

  const [colorMap] = useLoader(TextureLoader, [DestroyedUranusMap]);

  return (
    <>
      <ambientLight intensity={0.45} />

      <pointLight
        color="#f6f3ea"
        decay={1}
        position={[12, 0, 12]}
        intensity={140}
      />
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={uranusRef} position={[0, 0, 0]} scale={[0.4, 0.4, 0.4]}>
        <sphereGeometry args={[1, 32, 15]} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={1} />
      </mesh>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        zoomSpeed={2}
        rotateSpeed={0.4}
        minDistance={0.7}
        maxDistance={5}
      />
    </>
  );
};

export default DestroyedJupiter;

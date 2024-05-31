import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";

import SunMap from "../../assets/sun/8k_sun.webp";

const Sun = () => {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (sunRef.current) {
      sunRef.current.rotation.y = elapsedTime / 12;
    }
  });

  const [colorMap] = useLoader(TextureLoader, [SunMap]);

  return (
    <>
      <ambientLight intensity={15} />

      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />

      <mesh ref={sunRef} position={[0, 0, 0]} scale={[3, 3, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={1} />
      </mesh>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        zoomSpeed={0.8}
        rotateSpeed={0.4}
        minDistance={3.1}
        maxDistance={6}
      />
    </>
  );
};

export default Sun;

import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";

import DestroyedMarsMap from "../../assets/Lava/marsDes.webp";

const DestroyedMars = () => {
  const marsRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (marsRef.current) {
      marsRef.current.rotation.y = elapsedTime / 12;
    }
  });

  const [colorMap] = useLoader(TextureLoader, [DestroyedMarsMap]);

  return (
    <>
      <ambientLight intensity={0.45} />

      <pointLight
        color="#f6f3ea"
        decay={1}
        position={[12, 0, 12]}
        intensity={120}
      />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={marsRef} position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]}>
        <sphereGeometry args={[1, 32, 15]} />
        <meshStandardMaterial map={colorMap} metalness={0.5} roughness={1} />
      </mesh>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        zoomSpeed={2}
        rotateSpeed={0.4}
        minDistance={0.85}
        maxDistance={4}
      />
    </>
  );
};

export default DestroyedMars;

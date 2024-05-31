import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";

import DestroyedEarthMap from "../../assets/Lava/earthDes.webp";

const DestroyedEarth = () => {
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 12;
    }
  });

  const [colorMap] = useLoader(TextureLoader, [DestroyedEarthMap]);

  return (
    <>
      <ambientLight intensity={0.7} />

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
      <mesh ref={earthRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <sphereGeometry args={[1, 32, 15]} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={1} />
      </mesh>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        zoomSpeed={1.2}
        rotateSpeed={0.4}
        minDistance={1.4}
        maxDistance={5}
      />
    </>
  );
};

export default DestroyedEarth;

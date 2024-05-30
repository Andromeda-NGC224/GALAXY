import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";

import SaturnDayMap from "../../assets/saturn/8k_saturn.webp";
import SaturnRingMap from "../../assets/saturn/8k_saturn_ring_alpha.png";

const Saturn = () => {
  const saturnRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (saturnRef.current) {
      saturnRef.current.rotation.y = elapsedTime / 12;
    }

    if (ringRef.current) {
      ringRef.current.rotation.y = elapsedTime / 6;
    }
  });

  const [colorMap, cloudsMap] = useLoader(TextureLoader, [
    SaturnDayMap,
    SaturnRingMap,
  ]);

  return (
    <>
      <ambientLight intensity={0.5} />

      <pointLight color="#f6f3ea" position={[2, 0, 4]} intensity={100} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={ringRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={saturnRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={1} />
      </mesh>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        minDistance={1.5}
        maxDistance={5}
      />
    </>
  );
};

export default Saturn;

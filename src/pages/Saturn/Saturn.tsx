import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";

import SaturnDayMap from "../../assets/saturn/8k_saturn.webp";
import SaturnRingMap from "../../assets/saturn/8k_saturn_ring_alpha.webp";

const Saturn = () => {
  const saturnRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (saturnRef.current) {
      saturnRef.current.rotation.y = elapsedTime / 12;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = elapsedTime / 12;
    }
  });

  const [colorMap, ringsMap] = useLoader(TextureLoader, [
    SaturnDayMap,
    SaturnRingMap,
  ]);

  return (
    <>
      <ambientLight intensity={0.45} />

      <pointLight
        color="#f6f3ea"
        decay={1}
        position={[12, 0, 12]}
        intensity={80}
      />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh
        ref={ringRef}
        rotation={[2, 0.3, 1]}
        castShadow
        position={[0, 0, 0]}
        scale={[2.3, 2.3, 2.3]}
      >
        <torusGeometry args={[1.5, 0.3, 8, 50]} />
        <meshPhongMaterial
          map={ringsMap}
          opacity={0.9}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={saturnRef} position={[0, 0, 0]} scale={[2.1, 2.1, 2.1]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={1} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          zoomSpeed={0.8}
          rotateSpeed={0.4}
          minDistance={2.9}
          maxDistance={10}
        />
      </mesh>
    </>
  );
};

export default Saturn;

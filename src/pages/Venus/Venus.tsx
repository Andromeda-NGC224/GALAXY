import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";

import venusMap from "../../assets/venus/8k_venus_surface.webp";
import venusMapCloudsMap from "../../assets/venus/8k_venus_atmosphere.webp";

const Venus = () => {
  const venusRef = useRef<THREE.Mesh>(null);
  const cloudsVenusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (venusRef.current) {
      venusRef.current.rotation.y = elapsedTime / 6;
    }
    if (cloudsVenusRef.current) {
      cloudsVenusRef.current.rotation.y = elapsedTime / 2;
    }
  });

  const [colorMap, cloudsVenusMap] = useLoader(TextureLoader, [
    venusMap,
    venusMapCloudsMap,
  ]);

  return (
    <>
      <ambientLight intensity={0.5} />

      <pointLight color="#f6f3ea" position={[2, 0, 4]} intensity={60} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsVenusRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsVenusMap}
          opacity={0.7}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={venusRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
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

export default Venus;

import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";

import EarthDayMap from "../../assets/earth/8k_earth_daymap.webp";
import EarthCloudsMap from "../../assets/earth/8k_earth_clouds.webp";

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 12;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = elapsedTime / 6;
    }
  });

  const [colorMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthCloudsMap,
  ]);

  return (
    <>
      <ambientLight intensity={0.45} />

      <pointLight color="#f6f3ea" position={[12, 0, 12]} intensity={1500} />

      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
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

export default Earth;

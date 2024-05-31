import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";
import NeptuneMap from "../../assets/neptune/2k_neptune.webp";

const Neptune = () => {
  const neptuneRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (neptuneRef.current) {
      neptuneRef.current.rotation.y = elapsedTime / 12;
    }
  });

  const [colorMap] = useLoader(TextureLoader, [NeptuneMap]);

  return (
    <>
      <ambientLight intensity={0.2} />

      <pointLight
        color="#f6f3ea"
        decay={1}
        position={[12, 0, 12]}
        intensity={30}
      />
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />

      <mesh ref={neptuneRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} metalness={0.2} roughness={0.5} />
      </mesh>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        zoomSpeed={0.6}
        rotateSpeed={0.4}
        minDistance={2.2}
        maxDistance={5}
      />
    </>
  );
};

export default Neptune;

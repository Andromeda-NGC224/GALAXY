import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";
import JupiterMap from "../../assets/jupiter/8k_jupiter.webp";

const Jupiter = () => {
  const jupiterRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (jupiterRef.current) {
      jupiterRef.current.rotation.y = elapsedTime / 12;
    }
  });

  const [colorMap] = useLoader(TextureLoader, [JupiterMap]);

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

      <mesh ref={jupiterRef} position={[0, 0, 0]} scale={[2.6, 2.6, 2.6]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={1} />
      </mesh>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        zoomSpeed={0.8}
        rotateSpeed={0.4}
        minDistance={3}
        maxDistance={5}
      />
    </>
  );
};

export default Jupiter;

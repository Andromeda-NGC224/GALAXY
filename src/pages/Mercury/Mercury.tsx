import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { TextureLoader } from "three";
import mercuryMap from "../../assets/mercury/8k_mercury.webp";

const Mercury = () => {
  const mercuryRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (mercuryRef.current) {
      mercuryRef.current.rotation.y = elapsedTime / 12;
    }
  });

  const [colorMap] = useLoader(TextureLoader, [mercuryMap]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight color="#f6f3ea" position={[2, 0, 4]} intensity={100} />
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />

      <mesh ref={mercuryRef} position={[0, 0, 0]} scale={[2.5, 2.5, 2.5]}>
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

export default Mercury;
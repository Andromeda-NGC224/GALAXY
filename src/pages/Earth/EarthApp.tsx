import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import Earth from "./Earth";
import { Canvas } from "@react-three/fiber";

const EarthApp = () => {
  // const [y, setY] = useState(0);

  // const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
  //   const deltaY = event.deltaY;
  //   setY((prevY) => prevY + deltaY);
  // };

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  );
};
export default EarthApp;

import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import Earth from "./Earth";
import { Canvas } from "@react-three/fiber";
import css from "../Earth/Earth.module.css";

const EarthApp = () => {
  // const [y, setY] = useState(0);

  // const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
  //   const deltaY = event.deltaY;
  //   setY((prevY) => prevY + deltaY);
  // };

  const [containerVisibility, sethideTopContainer] = useState(false);

  const hideTopContainer = () => {
    sethideTopContainer(true);
  };
  const showTopContainer = () => {
    sethideTopContainer(false);
  };

  return (
    <>
      <div className={css.btnCont}>
        {!containerVisibility ? (
          <button onClick={hideTopContainer} className="button" id="button-7">
            <p>Look at planet</p>
          </button>
        ) : (
          <button onClick={showTopContainer} className="button" id="button-7">
            <div id="dub-arrow"></div>
            <p>Back</p>
          </button>
        )}
      </div>

      {!containerVisibility ? <div className={css.startBox}></div> : ""}

      {!containerVisibility ? (
        <div className={css.inspectionLarge}>
          <Canvas className={css.canvasCont}>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </div>
      ) : (
        <div className={css.inspectionSmall}>
          <Canvas className={css.canvasCont}>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </div>
      )}
    </>
  );
};
export default EarthApp;

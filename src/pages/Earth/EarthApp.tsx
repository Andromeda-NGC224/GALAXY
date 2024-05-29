import { Suspense, useState } from "react";
import Earth from "./Earth";
import DestroyedEarth from "./DestroyedEarth";
import { Canvas } from "@react-three/fiber";
import Loader from "../../components/Loader/Loader";
import css from "../Earth/Earth.module.css";
import EarthDescr from "../../components/EarthComponent/EarthDescr";
import CrossRoute from "../../components/CrossRoute/CrossRoute";

const EarthApp = () => {
  const [inspection, setInspection] = useState(false);

  const [destroy, setDestroy] = useState(false);

  const handleDestroy = () => {
    setDestroy(true);
  };

  const handleRestore = () => {
    setDestroy(false);
  };
  const showInspection = () => {
    setInspection(true);
  };
  const hideInspection = () => {
    setInspection(false);
  };

  return (
    <>
      <div className={css.btnCont}>
        {!inspection ? (
          <button onClick={showInspection} className={css.btnLook}>
            <p>Оглянути планету</p>
          </button>
        ) : (
          <button onClick={hideInspection} className={css.btnBack}>
            <p>Назад</p>
          </button>
        )}
      </div>

      {!inspection ? (
        <div className={css.startBox}>
          <CrossRoute
            topRoute={"/"}
            bottomRoute={"/Venus"}
            signTop={"Марс ♂"}
            signBottom={"Венера ♀"}
          />
          <EarthDescr />
          {!destroy ? (
            <button className={css.btnDes} onClick={handleDestroy}>
              Зруйнувати
            </button>
          ) : (
            <button className={css.btnRes} onClick={handleRestore}>
              Відновити
            </button>
          )}
        </div>
      ) : null}

      {!inspection ? (
        <div className={css.inspectionLarge}>
          <Canvas className={css.canvasCont}>
            <Suspense fallback={<Loader />}>
              {!destroy ? <Earth /> : <DestroyedEarth />}
            </Suspense>
          </Canvas>
        </div>
      ) : (
        <div className={css.inspectionSmall}>
          <Canvas className={css.canvasCont}>
            <Suspense fallback={<Loader />}>
              {!destroy ? <Earth /> : <DestroyedEarth />}
            </Suspense>
          </Canvas>
        </div>
      )}
    </>
  );
};
export default EarthApp;

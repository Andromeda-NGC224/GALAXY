import { Suspense, useState } from "react";
import css from "../Sun/Sun.module.css";
import CrossRoute from "../../components/CrossRoute/CrossRoute";
import VenusDescr from "../../components/VenusComponent/VenusDescr";
import { Canvas } from "@react-three/fiber";
import Loader from "../../components/Loader/Loader";
import Venus from "./Venus";
import DestroyedVenus from "./DestroyedVenus";

const VenusApp = () => {
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
            bottomRoute={"/Sun"}
            signTop={"Земля D♁"}
            signBottom={"Сонце ☉"}
          />
          <VenusDescr />
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
              {!destroy ? <Venus /> : <DestroyedVenus />}
            </Suspense>
          </Canvas>
        </div>
      ) : (
        <div className={css.inspectionSmall}>
          <Canvas className={css.canvasCont}>
            <Suspense fallback={<Loader />}>
              {!destroy ? <Venus /> : <DestroyedVenus />}
            </Suspense>
          </Canvas>
        </div>
      )}
    </>
  );
};
export default VenusApp;

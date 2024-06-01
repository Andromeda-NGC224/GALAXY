import { Suspense, useState } from "react";
import Saturn from "./Saturn";
import DestroyedSaturn from "./DestroyedSaturn";
import { Canvas } from "@react-three/fiber";
import Loader from "../../components/Loader/Loader";
import css from "../Saturn/Saturn.module.css";
import SaturnDescr from "../../components/SaturnComponent/SaturnDescr";
import CrossRoute from "../../components/CrossRoute/CrossRoute";
import { GiSmallFire } from "react-icons/gi";
import { PiPlantBold } from "react-icons/pi";
import { FaGithub, FaRegEye } from "react-icons/fa";
import { GrSatellite } from "react-icons/gr";
import { Link } from "react-router-dom";

const SaturnApp = () => {
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
            <FaRegEye />
          </button>
        ) : (
          <button onClick={hideInspection} className={css.btnBack}>
            <p>Назад</p>
            <GrSatellite />
          </button>
        )}
      </div>
      <div className={css.btnGit}>
        {!inspection ? (
          <Link
            target="_blank"
            to={"https://github.com/Andromeda-NGC224/GALAXY"}
          >
            <FaGithub className={css.gitIcon} />
          </Link>
        ) : null}
      </div>
      {!inspection ? <SaturnDescr /> : null}

      {!inspection ? (
        <div className={css.startBox}>
          <CrossRoute
            topRoute={"/Uranus"}
            bottomRoute={"/Jupiter"}
            signTop={"Уран ♅"}
            signBottom={"Юпітер ♃"}
          />
          {!destroy ? (
            <button className={css.btnDes} onClick={handleDestroy}>
              <p>Зруйнувати</p>
              <GiSmallFire />
            </button>
          ) : (
            <button className={css.btnRes} onClick={handleRestore}>
              <p>Відновити</p>
              <PiPlantBold />
            </button>
          )}
        </div>
      ) : null}

      {!inspection ? (
        <div className={css.inspectionLarge}>
          <Canvas className={css.canvasCont}>
            <Suspense fallback={<Loader />}>
              {!destroy ? <Saturn /> : <DestroyedSaturn />}
            </Suspense>
          </Canvas>
        </div>
      ) : (
        <div className={css.inspectionSmall}>
          <Canvas className={css.canvasCont}>
            <Suspense fallback={<Loader />}>
              {!destroy ? <Saturn /> : <DestroyedSaturn />}
            </Suspense>
          </Canvas>
        </div>
      )}
    </>
  );
};
export default SaturnApp;

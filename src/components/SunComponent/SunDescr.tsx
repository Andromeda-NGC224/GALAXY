import { IoPlanet } from "react-icons/io5";
import css from "../SunComponent/SunDescr.module.css";
import { GlitchText } from "../GlitchText/GlitchText";
import ModalNav from "../ModalNav/ModalNav";
import { useState } from "react";
import { motion } from "framer-motion";

const EarthDescr = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const settingsMotion = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 1.05 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  return (
    <>
      <div className={css.EarthDescrCont}>
        <h1 className={css.EarthDescrTitle}>
          {" "}
          <GlitchText theme="orange" text={"Сонце ☉"} />
        </h1>
        <ul className={css.EarthDescrList}>
          <li className={css.EarthDescrItem}>
            <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 0 km
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Маса:</span> 1.9885 × 10^30 кг
            (333 000 мас Землі)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо осі (доба):
            </span>{" "}
            24.47 земних днів (587.28 годин)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Температура поверхні:</span> 5
            505℃
          </li>
        </ul>
        <motion.div {...settingsMotion}>
          <button onClick={handleOpenModal} className={css.btnNavigation}>
            <p>Навігація</p> <IoPlanet />
          </button>
        </motion.div>
      </div>
      {isOpenModal ? <ModalNav closeModal={handleCloseModal} /> : null}
    </>
  );
};

export default EarthDescr;

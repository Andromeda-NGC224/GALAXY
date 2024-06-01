import { useState } from "react";
import { GlitchText } from "../GlitchText/GlitchText";
import ModalNav from "../ModalNav/ModalNav";
import css from "../NeptuneComponent/NeptuneDescr.module.css";
import { IoPlanet } from "react-icons/io5";
import { motion } from "framer-motion";

const NeptuneDescr = () => {
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
          <GlitchText theme="blue" text={"Нептун ♆"} />
        </h1>
        <ul className={css.EarthDescrList}>
          <li className={css.EarthDescrItem}>
            <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 4
            504 300 000 km
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Маса:</span> 1.02 × 10^26 кг
            (17.1 мас Землі)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо осі (доба):
            </span>{" "}
            16.1 годин
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо Сонця (рік):
            </span>{" "}
            60,182 земних днів (приблизно 164.8 земних років)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Температура поверхні:</span>{" "}
            -200℃
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Крижаний гігант з діаметром ядра (приблизно):
            </span>{" "}
            7 000 km
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

export default NeptuneDescr;

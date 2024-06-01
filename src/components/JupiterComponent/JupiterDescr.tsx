import { IoPlanet } from "react-icons/io5";
import css from "../JupiterComponent/JupiterDescr.module.css";
import { GlitchText } from "../GlitchText/GlitchText";
import { useState } from "react";
import ModalNav from "../ModalNav/ModalNav";
import { motion } from "framer-motion";

const JupiterDescr = () => {
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
          <GlitchText theme="light-orange " text={"Юпітер ♃"} />
        </h1>
        <ul className={css.EarthDescrList}>
          <li className={css.EarthDescrItem}>
            <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 778
            330 000 km
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Маса:</span> 1.90 × 10^27 кг
            (317.8 мас Землі)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо осі (доба):
            </span>{" "}
            9.9 години
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо Сонця (рік):
            </span>{" "}
            4,333 земних днів (приблизно 11.86 земних років)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Температура поверхні:</span>{" "}
            -120℃
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Газовий гігант з діаметром ядра (приблизно):
            </span>{" "}
            30 000 km
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

export default JupiterDescr;

import { IoPlanet } from "react-icons/io5";
import css from "../MarsComponent/MarsDescr.module.css";
import { GlitchText } from "../GlitchText/GlitchText";
import ModalNav from "../ModalNav/ModalNav";
import { useState } from "react";
import { motion } from "framer-motion";

const MarsDescr = () => {
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
          <GlitchText theme="dark-orange" text={"Марс ♂"} />
        </h1>
        <ul className={css.EarthDescrList}>
          <li className={css.EarthDescrItem}>
            <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 227
            940 000 km
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Маса:</span> 6.42 × 10^23 кг
            (0.107 мас Землі)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо осі (доба):
            </span>{" "}
            24.6 години
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо Сонця (рік):
            </span>{" "}
            687 земних днів (приблизно 1.88 земних років)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Температура поверхні влітку:
            </span>{" "}
            17℃
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Температура поверхні взимку:
            </span>{" "}
            -140℃
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

export default MarsDescr;

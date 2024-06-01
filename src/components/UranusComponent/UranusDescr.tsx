import { IoPlanet } from "react-icons/io5";
import css from "../UranusComponent/UranusDescr.module.css";
import { GlitchText } from "../GlitchText/GlitchText";
import ModalNav from "../ModalNav/ModalNav";
import { useState } from "react";
import { motion } from "framer-motion";

const UranusDescr = () => {
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
          <GlitchText theme="turquoise" text={"Уран ♅"} />
        </h1>
        <ul className={css.EarthDescrList}>
          <li className={css.EarthDescrItem}>
            <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 2
            870 990 000 km
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Маса:</span> 8.68 × 10^25 кг
            (14.5 мас Землі)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо осі (доба):
            </span>{" "}
            17.2 годин
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо Сонця (рік):
            </span>{" "}
            30,688 земних днів (приблизно 84 земних роки)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Температура поверхні:</span>{" "}
            -210℃
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Крижаний гігант з діаметром ядра (приблизно):
            </span>{" "}
            3 500 km
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

export default UranusDescr;

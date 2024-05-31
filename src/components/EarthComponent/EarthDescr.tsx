import { IoPlanet } from "react-icons/io5";
import css from "../EarthComponent/EarthDescr.module.css";
import { GlitchText } from "../GlitchText/GlitchText";
import { useState } from "react";
import ModalNav from "../ModalNav/ModalNav";

const EarthDescr = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className={css.EarthDescrCont}>
        <h1 className={css.EarthDescrTitle}>
          <GlitchText theme="blue" text={"Земля D♁"} />
        </h1>
        <ul className={css.EarthDescrList}>
          <li className={css.EarthDescrItem}>
            <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 149
            600 000 km
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Маса:</span> 5.97 × 10^24 кг{" "}
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо осі (доба):
            </span>{" "}
            23г. 54хв.
          </li>
          <li>
            <span className={css.EarthDescrSpan}>
              Час повного обороту навколо Сонця (рік):
            </span>{" "}
            365.25 земних днів (1 рік)
          </li>
          <li>
            <span className={css.EarthDescrSpan}>Температура поверхні:</span>{" "}
            15℃
          </li>
        </ul>
        <button onClick={handleOpenModal} className={css.btnNavigation}>
          <p>Навігація</p> <IoPlanet />
        </button>
      </div>
      {isOpenModal ? <ModalNav closeModal={handleCloseModal} /> : null}
    </>
  );
};

export default EarthDescr;

import { IoPlanet } from "react-icons/io5";
import css from "../JupiterComponent/JupiterDescr.module.css";

const JupiterDescr = () => {
  return (
    <div className={css.EarthDescrCont}>
      <h1 className={css.EarthDescrTitle}>Юпітер ♃</h1>
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
      </ul>
      <button className={css.btnNavigation}>
        <p>Навігація</p> <IoPlanet />
      </button>
    </div>
  );
};

export default JupiterDescr;

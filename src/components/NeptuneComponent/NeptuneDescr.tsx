import css from "../NeptuneComponent/NeptuneDescr.module.css";
import { IoPlanet } from "react-icons/io5";

const NeptuneDescr = () => {
  return (
    <div className={css.EarthDescrCont}>
      <h1 className={css.EarthDescrTitle}>Нептун ♆</h1>
      <ul className={css.EarthDescrList}>
        <li className={css.EarthDescrItem}>
          <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 4 504
          300 000 km
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
      </ul>
      <button className={css.btnNavigation}>
        <p>Навігація</p> <IoPlanet />
      </button>
    </div>
  );
};

export default NeptuneDescr;

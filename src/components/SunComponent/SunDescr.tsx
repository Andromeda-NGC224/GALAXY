import { IoPlanet } from "react-icons/io5";
import css from "../SunComponent/SunDescr.module.css";

const EarthDescr = () => {
  return (
    <div className={css.EarthDescrCont}>
      <h1 className={css.EarthDescrTitle}>Сонце ☉</h1>
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
      <button className={css.btnNavigation}>
        <p>Навігація</p> <IoPlanet />
      </button>
    </div>
  );
};

export default EarthDescr;

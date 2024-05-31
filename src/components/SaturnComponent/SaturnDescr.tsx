import { IoPlanet } from "react-icons/io5";
import css from "../SaturnComponent/SaturnDescr.module.css";
import { GlitchText } from "../GlitchText/GlitchText";

const SaturnDescr = () => {
  return (
    <div className={css.EarthDescrCont}>
      <h1 className={css.EarthDescrTitle}>
        <GlitchText theme="light-orange " text={"Сатурн ♄"} />
      </h1>
      <ul className={css.EarthDescrList}>
        <li className={css.EarthDescrItem}>
          <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 1 429
          400 000 km
        </li>
        <li>
          <span className={css.EarthDescrSpan}>Маса:</span> 5.68 × 10^26 кг
          (95.2 мас Землі)
        </li>
        <li>
          <span className={css.EarthDescrSpan}>
            Час повного обороту навколо осі (доба):
          </span>{" "}
          10.7 годин
        </li>
        <li>
          <span className={css.EarthDescrSpan}>
            Час повного обороту навколо Сонця (рік):
          </span>{" "}
          10,759 земних днів (приблизно 29.46 земних років)
        </li>
        <li>
          <span className={css.EarthDescrSpan}>Температура поверхні:</span>{" "}
          -125℃
        </li>
        <li>
          <span className={css.EarthDescrSpan}>
            Газовий гігант з діаметром ядра (приблизно):
          </span>{" "}
          25 000 km
        </li>
      </ul>

      <button className={css.btnNavigation}>
        <p>Навігація</p> <IoPlanet />
      </button>
    </div>
  );
};

export default SaturnDescr;

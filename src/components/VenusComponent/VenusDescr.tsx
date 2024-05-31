import { IoPlanet } from "react-icons/io5";
import css from "../VenusComponent/VenusDescr.module.css";
import { GlitchText } from "../GlitchText/GlitchText";

const VenusDescr = () => {
  return (
    <div className={css.EarthDescrCont}>
      <h1 className={css.EarthDescrTitle}>
        <GlitchText theme="light-orange" text={"Венера ♀"} />
      </h1>
      <ul className={css.EarthDescrList}>
        <li className={css.EarthDescrItem}>
          <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 108
          200 000 km
        </li>
        <li>
          <span className={css.EarthDescrSpan}>Маса:</span> 4.87 × 10^24 кг
          (0.815 мас Землі)
        </li>
        <li>
          <span className={css.EarthDescrSpan}>
            Час повного обороту навколо осі (доба):
          </span>{" "}
          243 земних днів (5,832 годин)
        </li>
        <li>
          <span className={css.EarthDescrSpan}>
            Час повного обороту навколо Сонця (рік):
          </span>{" "}
          225 земних днів
        </li>
        <li>
          <span className={css.EarthDescrSpan}>Температура поверхні:</span> 462℃
        </li>
      </ul>
      <button className={css.btnNavigation}>
        <p>Навігація</p> <IoPlanet />
      </button>
    </div>
  );
};

export default VenusDescr;

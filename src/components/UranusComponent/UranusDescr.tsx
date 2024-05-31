import { IoPlanet } from "react-icons/io5";
import css from "../UranusComponent/UranusDescr.module.css";
import { GlitchText } from "../GlitchText/GlitchText";

const UranusDescr = () => {
  return (
    <div className={css.EarthDescrCont}>
      <h1 className={css.EarthDescrTitle}>
        <GlitchText theme="turquoise" text={"Уран ♅"} />
      </h1>
      <ul className={css.EarthDescrList}>
        <li className={css.EarthDescrItem}>
          <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 2 870
          990 000 km
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
      <button className={css.btnNavigation}>
        <p>Навігація</p> <IoPlanet />
      </button>
    </div>
  );
};

export default UranusDescr;

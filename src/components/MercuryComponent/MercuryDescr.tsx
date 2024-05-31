import { IoPlanet } from "react-icons/io5";
import css from "../MercuryComponent/MercuryDescr.module.css";
import { GlitchText } from "../GlitchText/GlitchText";

const MercuryDescr = () => {
  return (
    <div className={css.EarthDescrCont}>
      <h1 className={css.EarthDescrTitle}>
        <GlitchText theme="white" text={"Меркурій ☿"} />
      </h1>
      <ul className={css.EarthDescrList}>
        <li className={css.EarthDescrItem}>
          <span className={css.EarthDescrSpan}>Відстань від Сонця:</span> 57 910
          000 km
        </li>
        <li>
          <span className={css.EarthDescrSpan}>Маса:</span> 3.30 × 10^23 кг
          (0.055 мас Землі)
        </li>
        <li>
          <span className={css.EarthDescrSpan}>
            Час повного обороту навколо осі (доба):
          </span>{" "}
          58.6 земних днів (1,406 годин)
        </li>
        <li>
          <span className={css.EarthDescrSpan}>
            Час повного обороту навколо Сонця (рік):
          </span>{" "}
          88 земних днів
        </li>
        <li>
          <span className={css.EarthDescrSpan}>
            Температура поверхні вдень:
          </span>{" "}
          473℃
        </li>
        <li>
          <span className={css.EarthDescrSpan}>
            Температура поверхні вночі:
          </span>{" "}
          -183℃
        </li>
      </ul>
      <button className={css.btnNavigation}>
        <p>Навігація</p> <IoPlanet />
      </button>
    </div>
  );
};

export default MercuryDescr;

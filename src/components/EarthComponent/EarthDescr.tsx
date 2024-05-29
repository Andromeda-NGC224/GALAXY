import css from "../EarthComponent/EarthDescr.module.css";

const EarthDescr = () => {
  return (
    <div className={css.EarthDescrCont}>
      <h1 className={css.EarthDescrTitle}>Земля D♁</h1>
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
          <span className={css.EarthDescrSpan}>Температура поверхні:</span> 15℃
        </li>
      </ul>
      <button className={css.btnNavigation}>Навігація 🪐</button>
    </div>
  );
};

export default EarthDescr;

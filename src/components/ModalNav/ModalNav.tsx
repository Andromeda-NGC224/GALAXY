import { Link } from "react-router-dom";
import css from "./ModalNav.module.css";

const ModalNav = ({ closeModal }) => {
  return (
    <div className={css.mainModalCont}>
      <div className={css.modalContainerWindow}>
        <div className={css.modalContainerListAndBtn}>
          <button onClick={closeModal} className={css.btnCloseModal}></button>
          <ul className={css.modalList}>
            <li>
              <Link to={"/Neptune"}>Нептун ♆</Link>
            </li>
            <li>
              <Link to={"/Uranus"}>Уран ♅</Link>
            </li>
            <li>
              <Link to={"/Saturn"}>Сатурн ♄</Link>
            </li>
            <li>
              <Link to={"/Jupiter"}>Юпітер ♃</Link>
            </li>
            <li>
              <Link to={"/Mars"}>Марс ♂</Link>
            </li>
            <li>
              <Link to={"/"}>Земля D♁ </Link>
            </li>
            <li>
              <Link to={"/Venus"}>Венера ♀</Link>
            </li>
            <li>
              <Link to={"/Mercury"}>Меркурій ☿</Link>
            </li>
            <li>
              <Link to={"/Sun"}>Сонце ☉</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ModalNav;

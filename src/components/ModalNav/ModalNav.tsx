import { Link } from "react-router-dom";
import css from "./ModalNav.module.css";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

interface ModalNavProps {
  closeModal: () => void;
}

const settingsMotion = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 1.05 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

const ModalNav: React.FC<ModalNavProps> = ({ closeModal }) => {
  return (
    <div className={css.mainModalCont}>
      <div className={css.modalContainerWindow}>
        <div className={css.modalContainerListAndBtn}>
          <button onClick={closeModal} className={css.btnCloseModal}>
            <IoClose className={css.btnCloseModalIcon} />
          </button>
          <ul className={css.modalList}>
            <li className={css.modalListItem}>
              <span className={css.modalRingNept}></span>
              <motion.div {...settingsMotion}>
                <Link className={css.modalLink} to={"/Neptune"}>
                  Нептун ♆
                </Link>
              </motion.div>
            </li>
            <li className={css.modalListItem}>
              <span className={css.modalRingUran}></span>
              <motion.div {...settingsMotion}>
                <Link to={"/Uranus"}>Уран ♅</Link>
              </motion.div>
            </li>
            <li className={css.modalListItem}>
              <span className={css.modalRingSat}></span>
              <motion.div {...settingsMotion}>
                <Link to={"/Saturn"}>Сатурн ♄</Link>
              </motion.div>
            </li>
            <li className={css.modalListItem}>
              <span className={css.modalRingJup}></span>
              <motion.div {...settingsMotion}>
                <Link to={"/Jupiter"}>Юпітер ♃</Link>
              </motion.div>
            </li>
            <li className={css.modalListItem}>
              <span className={css.modalRingMars}></span>
              <motion.div {...settingsMotion}>
                <Link to={"/Mars"}>Марс ♂</Link>
              </motion.div>
            </li>
            <li className={css.modalListItem}>
              <span className={css.modalRingEarth}></span>
              <motion.div {...settingsMotion}>
                <Link to={"/"}>Земля D♁ </Link>
              </motion.div>
            </li>
            <li className={css.modalListItem}>
              <span className={css.modalRingVen}></span>
              <motion.div {...settingsMotion}>
                <Link to={"/Venus"}>Венера ♀</Link>
              </motion.div>
            </li>
            <li className={css.modalListItem}>
              <span className={css.modalRingMerc}></span>
              <motion.div {...settingsMotion}>
                <Link to={"/Mercury"}>Меркурій ☿</Link>
              </motion.div>
            </li>
            <li className={css.modalListItem}>
              <span className={css.modalRingSun}></span>
              <motion.div {...settingsMotion}>
                <Link to={"/Sun"}>Сонце ☉</Link>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ModalNav;

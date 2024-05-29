import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import css from "./CrossRoute.module.css";
import { NavLink } from "react-router-dom";

interface CrossRouteProps {
  topRoute: string;
  bottomRoute: string;
  signTop: string;
  signBottom: string;
}

const CrossRoute = ({
  topRoute,
  bottomRoute,
  signTop,
  signBottom,
}: CrossRouteProps) => {
  return (
    <div>
      {topRoute !== "" ? (
        <NavLink to={topRoute} className={css.arrowTop}>
          <IoIosArrowDropup className={css.arrowIcon} />
          <h2>{signTop}</h2>
        </NavLink>
      ) : (
        ""
      )}
      {bottomRoute !== "" ? (
        <NavLink to={bottomRoute} className={css.arrowBottom}>
          <h2>{signBottom}</h2>
          <IoIosArrowDropdown className={css.arrowIcon} />
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );
};
export default CrossRoute;

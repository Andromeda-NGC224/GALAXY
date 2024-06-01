import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import css from "./CrossRoute.module.css";
import { Link } from "react-router-dom";

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
      {topRoute && (
        <Link to={topRoute} state={{ direction: -1 }} className={css.arrowTop}>
          <IoIosArrowDropup className={css.arrowIcon} />
          <h2>{signTop}</h2>
        </Link>
      )}
      {bottomRoute && (
        <Link
          to={bottomRoute}
          state={{ direction: 1 }}
          className={css.arrowBottom}
        >
          <h2>{signBottom}</h2>
          <IoIosArrowDropdown className={css.arrowIcon} />
        </Link>
      )}
    </div>
  );
};

export default CrossRoute;

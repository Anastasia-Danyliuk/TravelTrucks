import css from "./HeaderPart.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

function HeaderPart() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          <div className={css.travelTrucks}>
            <span className={css.travel}>Travel</span>
            <span className={css.trucks}>Trucks</span>
          </div>
        </NavLink>

        <div className={css.navigation}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default HeaderPart;

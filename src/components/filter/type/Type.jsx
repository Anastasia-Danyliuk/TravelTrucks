import css from "./Type.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../../redux/vansSlice.js";

function Type() {
  const dispatch = useDispatch();
  const { forms } = useSelector((state) => state.vans.filters);

  const vehicleTypes = [
    { key: "panelTruck", label: "Van", icon: "icon-bi_grid-1x2" },
    {
      key: "fullyIntegrated",
      label: (
          <>
            Fully <br /> Integrated
          </>
      ),
      icon: "icon-bi_grid",
    },
    { key: "alcove", label: "Alcove", icon: "icon-bi_grid-3x3-gap" },
  ];

  return (
      <div className={css.wrapperForVehicleType}>
        <div className={css.wrapperForHeader}>
          <h3 className={css.headerOfVehicleType}>Vehicle type</h3>
        </div>

          <ul className={css.wrapperForFilterIcons}>
              {vehicleTypes.map(({ key, label, icon }) => (
              <li
                  key={key}
                  className={`${css.buttonOfFilter} ${forms.includes(key) ? css.active : ""}`}
                  onClick={() => dispatch(toggleForm(key))}
              >
                  <svg className={css.iconForVehicleType}>
                      <use href={`/icons/symbol-defs.svg#${icon}`} />
                  </svg>
                  <p className={css.textInFilterButton}>{label}</p>
              </li>
          ))}
          </ul>
      </div>
  );
}

export default Type;

import css from "./TruckFeature.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, setTransmission } from "../../../redux/vansSlice.js";

function TruckFeature() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.vans.filters);

  const filterOptions = [
    { name: "AC", label: "AC", icon: "icon-wind" },
    { name: "kitchen", label: "Kitchen", icon: "icon-Group" },
    { name: "TV", label: "TV", icon: "icon-tv" },
    { name: "bathroom", label: "Bathroom", icon: "icon-bi_droplet" },
  ];

  const handleTransmissionChange = () => {
    const newTransmission = filters.transmission === "Manual" ? "Automatic" : "Manual";
    dispatch(setTransmission({ value: newTransmission }));
  };

  return (
      <div className={css.wrapperOfVehicleEquipment}>
        <div className={css.wrapperForHeader}>
          <h3 className={css.headerOfVehicleEquipment}>Vehicle equipment</h3>
        </div>

        <div className={css.wrapperForFilterIcons}>
          {filterOptions.map(({ name, label, icon }) => (
              <div
                  key={name}
                  className={`${css.buttonOfFilter} ${filters[name] ? css.active : ""}`}
                  onClick={() => dispatch(toggleFilter(name))}
              >
                <svg className={css.iconForVehicleEquipment}>
                  <use href={`/icons/symbol-defs.svg#${icon}`} />
                </svg>
                <p className={css.textInFilterButton}>{label}</p>
              </div>
          ))}

          <div
              className={`${css.buttonOfFilter} ${filters.transmission === "Automatic" ? css.active : ""}`}
              onClick={handleTransmissionChange}
          >
            <svg className={css.iconForVehicleEquipment}>
              <use href="/icons/symbol-defs.svg#icon-diagram" />
            </svg>
            <p className={css.textInFilterButton}>Automatic</p>
          </div>
        </div>
      </div>
  );
}

export default TruckFeature;

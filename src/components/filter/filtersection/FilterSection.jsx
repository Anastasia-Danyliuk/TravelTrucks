import css from "./FilterSection.module.css";
import Location from "../location/Location.jsx";
import Filters from "../filters/Filters.jsx";
import TruckFeature from "../truckfeature/TruckFeature.jsx";
import Type from "../type/Type.jsx";
import Search from "../search/Search.jsx";
import PropTypes from "prop-types";

function FilterSection({ handleSearchClick }) {
  return (
    <div className={css.filters}>
      <Location />
      <Filters />
      <TruckFeature />
      <Type />
      <Search onClick={handleSearchClick} />
    </div>
  );
}

FilterSection.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
};

export default FilterSection;

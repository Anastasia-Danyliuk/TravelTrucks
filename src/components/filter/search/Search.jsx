import css from "./Search.module.css";
import PropTypes from "prop-types";

function Search({ onClick }) {
  return (
    <div className={css.wrapperForButtonSearch}>
      <button className={css.ButtonSearch} onClick={onClick}>
        Search
      </button>
    </div>
  );
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;

import css from "./Name.module.css";
import PropTypes from "prop-types";

function Name({ name }) {
  return <h2 className={css.headerOfCardText}>{name}</h2>;
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;

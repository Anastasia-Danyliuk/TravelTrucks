import css from "./Description.module.css";
import PropTypes from "prop-types";

function Description({ descriptionForCard }) {
  return <div className={css.description}>{descriptionForCard}</div>;
}

Description.propTypes = {
  descriptionForCard: PropTypes.string.isRequired,
};

export default Description;

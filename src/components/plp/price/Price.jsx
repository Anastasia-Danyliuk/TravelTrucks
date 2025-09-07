import css from "./Price.module.css";
import PropTypes from "prop-types";
import { toggleFavorite } from "../../../redux/vansSlice.js";
import { useDispatch, useSelector } from "react-redux";

function Price({ price, van }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.vans.favorites);
  if (!van) {
    return null;
  }
  const isFavorited = favorites.includes(van.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(van.id));
  };

  return (
    <div className={css.priceBlock}>
      <h2 className={css.headerOfCardText}>€{price},00</h2>
      <svg
        onClick={handleToggleFavorite}
        className={`${css.svgInCard} ${isFavorited ? css.favorited : ""}`}
      >
        <use
          href="/icons/symbol-defs.svg#icon-Property-1Default"
          fill={isFavorited ? "red" : "black"}
          stroke={isFavorited ? "red" : "black"}
        ></use>
      </svg>
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  van: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Price;

import css from "./CommentSection.module.css";
import { BsMap } from "react-icons/bs";
import PropTypes from "prop-types";

function CommentSection({ rating, amountOfReviews, location }) {
  return (
    <div className={css.blockReitingRevieusLocation}>
      <svg className={css.svgReiting}>
        <use href="/icons/symbol-defs.svg#icon-Property-1Pressed-1"></use>
      </svg>
      <p className={css.raitingString}>
        {rating}({amountOfReviews} Reviews)
      </p>
      <BsMap className={css.iconOfMap} />
      <p className={css.location}>{location}</p>
    </div>
  );
}

CommentSection.propTypes = {
  rating: PropTypes.number.isRequired,
  amountOfReviews: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default CommentSection;

import css from "./Comment.module.css";
import PropTypes from "prop-types";

function Comment({ reviewer_name = "Anonymous", reviewer_rating = 0, comment }) {
    const totalStars = 5;

    const stars = Array.from({ length: totalStars }, (_, i) => (
        <svg
            key={i}
            className={i < reviewer_rating ? css.gold : css.grey}
            width="16"
            height="16"
        >
            <use
                href={`/icons/symbol-defs.svg#${
                    i < reviewer_rating
                        ? "icon-Property-1Pressed-1"
                        : "icon-Property-1Default-1"
                }`}
            />
        </svg>
    ));

    return (
        <div className={css.wrapperForReview}>
            <div className={css.horisontal}>
                <div className={css.avatar}>
                    <h2 className={css.firstLetterOfName}>
                        {reviewer_name ? reviewer_name.charAt(0).toUpperCase() : "A"}
                    </h2>
                </div>
                <div className={css.nameAndRating}>
                    <p className={css.name}>{reviewer_name}</p>
                    <div className={css.rating}>{stars}</div>
                </div>
            </div>

            <div className={css.wrapperForReviewText}>
                <p className={css.reviewText}>{comment}</p>
            </div>
        </div>
    );
}

Comment.propTypes = {
    reviewer_name: PropTypes.string,
    reviewer_rating: PropTypes.number,
    comment: PropTypes.string.isRequired,
};

export default Comment;
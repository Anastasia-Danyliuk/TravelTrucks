import css from "./Comment.module.css";
import PropTypes from "prop-types";

function Comment({ reviewer_name, reviewer_rating, comment }) {
    const totalStars = 5;
    const stars = Array.from({ length: totalStars }, (_, i) => (
        <svg
            key={i}
            className={i < reviewer_rating ? css.gold : css.grey}
        >
            <use
                href={
                    i < reviewer_rating
                        ? "/icons/symbol-defs.svg#icon-Property-1Pressed-1"
                        : "/icons/symbol-defs.svg#icon-Property-1Default-1"
                }
            />
        </svg>
    ));

    return (
        <div className={css.wrapperForReview}>
            <div className={css.horisontal}>
                <div className={css.avatar}>
                    <h2 className={css.firstLetterOfName}>
                        {reviewer_name.charAt(0)}
                    </h2>
                </div>
                <div>
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
    reviewer_name: PropTypes.string.isRequired,
    reviewer_rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
};

export default Comment;

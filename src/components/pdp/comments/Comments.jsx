import css from "./Comments.module.css";
import PropTypes from "prop-types";
import Comment from "../comment/Comment.jsx";

function Comments({ reviews }) {
    if (!reviews || reviews.length === 0) {
        return <p>No reviews yet.</p>;
    }

    return (
        <div className={css.blockOfReviews}>
            <ul className={css.avatarReitingStarsBlock}>
                {reviews.map((review, index) => (
                    <li key={index} className={css.reviewItem}>
                        <Comment
                            reviewer_name={review.reviewer_name}
                            reviewer_rating={review.reviewer_rating}
                            comment={review.comment}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

Comments.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Comments;
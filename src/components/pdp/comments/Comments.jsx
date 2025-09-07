import css from "./Comments.module.css";
import PropTypes from "prop-types";
import Comment from "../comment/Comment.jsx";

function Comments({ reviews }) {
  return (
    <div className={css.blockOfReviews}>
      <div className={css.avatarReitingStarsBlock}>
        {reviews.map((review, index) => (
          <Comment
            key={index}
            reviewer_name={review.reviewer_name}
            reviewer_rating={review.reviewer_rating}
            comment={review.comment}
          />
        ))}
      </div>
    </div>
  );
}

Comments.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Comments;

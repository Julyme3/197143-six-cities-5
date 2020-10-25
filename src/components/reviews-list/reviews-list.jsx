import React from "react";
import {ReviewsType} from "../../types";
import Review from "../Review/review";

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.length && reviews.map((review) => {
        return (
          <Review
            review={review}
            key={`${review.id}`}
          />
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: ReviewsType,
};

export default ReviewsList;

import React, {useMemo} from "react";
import {ReviewsType} from "../../types";
import Review from "../review/review";
import {sortByDateDown} from "../../reviews";

const MAX_COUNT = 10;
const ReviewsList = ({reviews}) => {
  const sortedReviews = useMemo(() => reviews.sort(sortByDateDown).slice(0, MAX_COUNT), [reviews]);
  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => {
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

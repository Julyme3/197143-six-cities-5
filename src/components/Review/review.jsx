import React from "react";
import {ReviewType} from "../../types";
import Rating from "../rating/rating";

const Review = ({review}) => {
  return (
    <li
      className="reviews__item"
    >
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.src} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <Rating rating={review.raiting} className="reviews__stars" />
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.dateFormated}>{review.dateFormated}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: ReviewType,
};

export default Review;

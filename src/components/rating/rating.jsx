import React from "react";
import PropTypes from "prop-types";
import {calcRating} from "../../offers";

const Rating = ({rating, className}) => {
  const widthRating = calcRating(rating);

  return (
    <div className={`${className} rating__stars`}>
      <span style={{width: `${widthRating}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Rating;

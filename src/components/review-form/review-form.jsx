import React from "react";
import PropTypes from "prop-types";
import {TitleRaiting} from "../../const";

const ReviewForm = (props) => {
  const {onFieldChange, onSubmit, isDisabled, commentValue, ratingValue} = props;

  return (
    <form
      className="reviews__form form"
      action=""
      onSubmit={onSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.values(TitleRaiting).map((raiting, i) => {
          const value = i + 1;
          return (
            <React.Fragment key={raiting}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${i + 1}-stars`}
                type="radio"
                onChange={onFieldChange}
                checked={value === +ratingValue}
              />
              <label htmlFor={`${i + 1}-stars`} className="reviews__rating-label form__rating-label" title={raiting}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          );
        }).reverse()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onFieldChange}
        value={commentValue}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onFieldChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  commentValue: PropTypes.string.isRequired,
  ratingValue: PropTypes.string.isRequired,
};

export default ReviewForm;

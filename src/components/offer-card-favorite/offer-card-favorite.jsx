import React, {memo} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const OfferCardFavorite = (props) => {
  const {className = ``, classNameInner = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;
  delete restProps.classNameInner;

  return (
    <OfferCard
      className={`${className} favorites__card`}
      classNameInner={`${classNameInner} favorites__image-wrapper`}
      width="150px"
      height="110px"
      {...restProps}
    />
  );
};

OfferCardFavorite.propTypes = {
  className: PropTypes.string,
  classNameInner: PropTypes.string,
};

export default OfferCardFavorite;

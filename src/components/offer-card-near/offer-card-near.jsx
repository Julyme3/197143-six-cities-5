import React, {memo} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const OfferCardNear = (props) => {

  return (
    <OfferCard
      className={`near-places__card`}
      classNameInner={`near-places__image-wrapper`}
      {...props}
    />
  );
};

OfferCardNear.propTypes = {
  className: PropTypes.string,
  classNameInner: PropTypes.string,
};

export {OfferCardNear};
export default memo(OfferCardNear);

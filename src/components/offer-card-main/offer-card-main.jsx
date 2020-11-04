import React, {memo} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const OfferCardMain = (props) => {
  const {className = ``, classNameInner = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;
  delete restProps.classNameInner;

  return (
    <OfferCard
      className={`${className} cities__place-card`}
      classNameInner={`${classNameInner} cities__image-wrapper`}
      {...restProps}
    />
  );
};

OfferCardMain.propTypes = {
  className: PropTypes.string,
  classNameInner: PropTypes.string,
};

export {OfferCardMain};
export default memo(OfferCardMain);

import React from "react";
import OfferList from "../offer-list/offer-list";

const OfferListNear = (props) => {
  return (
    <OfferList
      className={`near-places__list places__list`}
      {...props}
    />
  );
};

export default OfferListNear;

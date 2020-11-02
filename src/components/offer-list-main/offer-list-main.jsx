import React from "react";
import OfferList from "../offer-list/offer-list";
import {OffersType} from '../../types';

const OfferListMain = (props) => {

  return (
    <OfferList
      className={`cities__places-list places__list tabs__content`}
      {...props}
    />
  );
};

OfferListMain.propTypes = {
  offers: OffersType,
};

export default OfferListMain;

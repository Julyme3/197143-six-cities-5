import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import OfferCardMain from "../offer-card-main/offer-card-main";
import OfferCardNear from "../offer-card-near/offer-card-near";
import {OffersType} from '../../types';
import {Type} from '../../const';


const OfferList = (props) => {
  const {offers, className, onChangeActiveOffer, onChangeFavorite} = props;

  const getComponentByType = (type, offer) => {
    switch (type) {
      case Type.MAIN:
        return <OfferCardMain
          offer={offer}
          onChangeActiveOffer={onChangeActiveOffer}
          onChangeFavorite={onChangeFavorite}
        />;
      case Type.NEAR:
        return <OfferCardNear
          offer={offer}
          onChangeActiveOffer={onChangeActiveOffer}
          onChangeFavorite={onChangeFavorite}
        />;
    }

    return <OfferCard
      offer={offer}
    />;
  };

  return (
    <div className={className}>
      {offers.length && offers.map((offer) =>
        (
          <React.Fragment
            key={offer.id}
          >
            {getComponentByType(offer.typeComponent, offer)}
          </React.Fragment>
        ))
      };
    </div>
  );
};

OfferList.propTypes = {
  offers: OffersType,
  className: PropTypes.string,
  onChangeActiveOffer: PropTypes.func,
  onChangeFavorite: PropTypes.func.isRequired,
};

export default OfferList;

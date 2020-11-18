import {createSelector} from "reselect";
import {getOffersByCity} from "../../../offers";
import {NameSpace} from "../root-reducer";

const getOffers = (state) => state[NameSpace.DATA].offers;
const getActiveCity = (state) => state[NameSpace.PROCESS].activeCity;
const getNearbyOffersSelector = (state) => state[NameSpace.DATA].nearbyOffers;

export const getOffersSelector = createSelector(
    getOffers,
    getActiveCity,
    (offers, activeCity) => {
      return getOffersByCity(offers, activeCity);
    }
);

export const getActiveOfferSelector = (state) => state[NameSpace.DATA].activeOffer;

export const getCommentsSelector = (state) => state[NameSpace.DATA].comments;

export const getNearbyOffersSliceSelector = createSelector(
    getNearbyOffersSelector,
    (nearbyOffers) => {
      return nearbyOffers.slice(0, 3);
    }
);

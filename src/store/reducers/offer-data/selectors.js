import {createSelector} from "reselect";
import {getOffersByCity} from "../../../offers";
import {NameSpace} from "../root-reducer";

const getOffers = (state) => state[NameSpace.DATA].offers;
const getActiveCity = (state) => state[NameSpace.PROCESS].activeCity;

export const getOffersSelector = createSelector(
    getOffers,
    getActiveCity,
    (offers, activeCity) => {
      return getOffersByCity(offers, activeCity);
    }
);

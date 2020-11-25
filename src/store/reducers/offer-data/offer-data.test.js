import MockAdapter from "axios-mock-adapter";
import {createApi} from "../../../services/api";
import {APIRoute} from "../../../const";
import {offerData} from "./offer-data";
import {ActionType} from "../../actions";
import {
  offersFromAPi,
  offersAdapteToClient as offers,
  offerFromApi,
  fullOfferAdaptedToClient,
  commentsFromApi,
  commentsAdaptedToCLient,
} from "../../../__mocks__/data/offer";
import {offerAdaptToClient} from "../../../offers";
import {
  fetchCommentsAction,
  fetchFullOfferAction,
  fetchNearbyOffersAction,
  fetchOffersListAction,
} from "../../api-actions";
import {commentAdaptToClient} from "../../../reviews";

const api = createApi(() => {});
const ID = 1;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(offerData(void 0, {})).toEqual({
    defaultOffers: [],
    offers: [],
    activeOffer: null,
    nearbyOffers: [],
    comments: [],
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(offerData({
    offers: [],
  }, {
    type: ActionType.SET_OFFERS_ACTION,
    payload: offers,
  })).toEqual({
    offers,
  });
});

it(`Reducer should update full offer by load full offer`, () => {
  expect(offerData({
    activeOffer: null,
  }, {
    type: ActionType.SET_ACTIVE_OFFER_ACTION,
    payload: fullOfferAdaptedToClient,
  })).toEqual({
    activeOffer: fullOfferAdaptedToClient,
  });
});

it(`Reducer should update nearby offers by load nearby offers`, () => {
  expect(offerData({
    nearbyOffers: [],
  }, {
    type: ActionType.SET_NEARBY_OFFERS_ACTION,
    payload: offers,
  })).toEqual({
    nearbyOffers: offers,
  });
});

it(`Reducer should update comments by load comments`, () => {
  expect(offerData({
    comments: [],
  }, {
    type: ActionType.SET_COMMENTS_ACTION,
    payload: commentsAdaptedToCLient,
  })).toEqual({
    comments: commentsAdaptedToCLient,
  });
});

describe(`Should make a correct async actions`, () => {

  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersListLoader = fetchOffersListAction();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, offersFromAPi);

    return offersListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS_ACTION,
          payload: offersFromAPi.map(offerAdaptToClient),
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fullOfferLoader = fetchFullOfferAction(ID);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${ID}`)
      .reply(200, offerFromApi);

    return fullOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ACTIVE_OFFER_ACTION,
          payload: offerAdaptToClient(offerFromApi),
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffersLoader = fetchNearbyOffersAction(ID);
    const adaptedOffers = offersFromAPi.map((offer) => offerAdaptToClient(offer, `near`));

    apiMock
      .onGet(`${APIRoute.HOTELS}/${ID}/nearby`)
      .reply(200, offersFromAPi);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_NEARBY_OFFERS_ACTION,
          payload: adaptedOffers,
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchCommentsAction(ID);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${ID}`)
      .reply(200, commentsFromApi);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_COMMENTS_ACTION,
          payload: commentsFromApi.map(commentAdaptToClient),
        });
      });
  });
});

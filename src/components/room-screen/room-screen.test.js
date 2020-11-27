import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {RoomScreen} from "./room-screen";
import {commentsAdaptedToCLient as reviews} from "../../__mocks__/data/offer";
import {fullOfferAdaptedToClient as activeOffer} from "../../__mocks__/data/offer";

jest.mock(`../review-form/review-form`, () => `ReviewForm`);
jest.mock(`../reviews-list/reviews-list`, () => `ReviewsList`);
jest.mock(`../offer-list-near/offer-list-near`, () => `OfferListNear`);
jest.mock(`../../layouts/main-layout/main-layout`, () => `MainLayout`);
jest.mock(`../rating/rating`, () => `Rating`);
jest.mock(`../map/map`, () => `Map`);

const noop = () => {};

const offers = [
  {
    city: {
      location: [50.938361, 6.959974],
      name: `Cologne`,
      zoom: 13,
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    type: `house`,
    price: 493,
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    id: 1,
    src: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`],
    isPremium: false,
    name: `The house among olive `,
    raiting: 3.8,
    isBookmark: false,
    coords: [50.957361, 6.9509739999999995],
    details: {
      bedrooms: 3,
      adults: 4,
      insideItems: [`Laptop friendly workspace`, `Washer`],
      description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    },
    user: {
      src: `img/avatar-angelina.jpg`,
      id: 25,
      name: `Angelina`,
      isSuper: true,
    },
    typeComponent: `near`,
  },
  {
    city: {
      location: [50.938361, 6.959974],
      name: `Cologne`,
      zoom: 13,
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    type: `house`,
    price: 493,
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    id: 2,
    src: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`],
    isPremium: false,
    name: `The house among olive `,
    raiting: 3.8,
    isBookmark: false,
    coords: [50.957361, 6.9509739999999995],
    details: {
      bedrooms: 3,
      adults: 4,
      insideItems: [`Laptop friendly workspace`, `Washer`],
      description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    },
    user: {
      src: `img/avatar-angelina.jpg`,
      id: 25,
      name: `Angelina`,
      isSuper: true,
    },
    typeComponent: `near`,
  },
];

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const match = {
  params: {
    id: `2`,
  },
};

describe(`RoomScreen render`, () => {
  it(`RoomScreen for no Authorization user`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <RoomScreen
              activeOffer={activeOffer}
              reviews={reviews}
              nearbyOffers={offers}
              fetchFullOffer={noop}
              fetchNearbyOffers={noop}
              fetchComments={noop}
              postComment={noop}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              postFavorite={noop}
              setActiveOffer={noop}
              match={match}
            ><React.Fragment />
            </RoomScreen>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`RoomScreen for Authorization user`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <RoomScreen
              activeOffer={activeOffer}
              reviews={reviews}
              nearbyOffers={offers}
              fetchFullOffer={noop}
              fetchNearbyOffers={noop}
              fetchComments={noop}
              postComment={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
              postFavorite={noop}
              setActiveOffer={noop}
              setStartLoading={noop}
              commentStatus={true}
              isLoadingComment={false}
              match={match}
            ><React.Fragment />
            </RoomScreen>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

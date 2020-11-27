import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {RoomScreen} from "./room-screen";
import {
  commentsAdaptedToCLient as reviews,
  fullOfferAdaptedToClient as activeOffer,
} from "../../__mocks__/data/offer";

configure({adapter: new Adapter()});

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

const noop = () => {};

it(`should call callback when button was clicked`, () => {
  const handleChangeFavorite = jest.fn();

  const component = shallow(
      <RoomScreen
        activeOffer={activeOffer}
        reviews={reviews}
        nearbyOffers={offers}
        fetchFullOffer={noop}
        fetchNearbyOffers={noop}
        fetchComments={noop}
        postComment={noop}
        authorizationStatus={AuthorizationStatus.AUTH}
        postFavorite={handleChangeFavorite}
        setActiveOffer={noop}
        match={match}
      />
  );
  const btn = component.find(`.property__bookmark-button`);
  expect(btn.length).toEqual(1);
  component.find(`.property__bookmark-button`).simulate(`click`);
  expect(handleChangeFavorite).toHaveBeenCalledTimes(1);
});

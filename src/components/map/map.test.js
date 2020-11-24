import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";

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
    typeComponent: `main`,
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
    typeComponent: `main`,
  },
];

//Mjest.mock(`../cities-item/cities-item`, () => `CitiesItem`);

test(`Map render`, () => {
  const tree = renderer
    .create(
        <Map
          offers={offers}
          width={`100px`}
          height={`100px`}
          activeCardId={1}
          cityCoords={[10, 10]}
          zoom={10}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
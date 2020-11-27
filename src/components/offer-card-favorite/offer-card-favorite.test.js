import React from "react";
import renderer from "react-test-renderer";
import OfferCardFavorite from "./offer-card-favorite";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);

const noop = () => {};

test(`OfferCardFavorite render`, () => {
  const tree = renderer
    .create(
        <OfferCardFavorite
          className="near-places__card"
          classNameInner="near-places__image-wrapper"
          onChangeActiveOffer={noop}
          width="100px"
          height="100px"
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

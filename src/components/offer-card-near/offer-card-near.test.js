import React from "react";
import renderer from "react-test-renderer";
import OfferCardNear from "./offer-card-near";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);

test(`OfferCardNear render`, () => {
  const tree = renderer
    .create(
        <OfferCardNear
          className="near-places__card"
          classNameInner="near-places__image-wrapper"
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

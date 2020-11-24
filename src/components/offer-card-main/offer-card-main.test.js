import React from "react";
import renderer from "react-test-renderer";
import OfferCardMain from "./offer-card-main";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);

test(`OfferCardMain render`, () => {
  const tree = renderer
    .create(
        <OfferCardMain
          className="near-places__card"
          classNameInner="near-places__image-wrapper"
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import OfferCard from "./offer-card";
import {fullOfferAdaptedToClient as offer} from "../../__mocks__/data/offer";

const noop = () => {};
test(`OfferCard render`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <OfferCard
            offer={offer}
            className="near-places__card"
            classNameInner="near-places__image-wrapper"
            onChangeActiveOffer={noop}
            onChangeFavorite={noop}
            width="100px"
            height="100px"
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

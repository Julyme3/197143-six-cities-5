import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {OfferListMain} from "./offer-list-main";
import {offersAdapteToClient as offers} from "../../__mocks__/data/offer";

const noop = () => {};

test(`OfferListMain render`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <OfferListMain
            offers={offers}
            postFavorite={noop}
            updateFavorite={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import OfferList from "./offer-list";
import {offersAdapteToClient as offers} from "../../__mocks__/data/offer";

const noop = () => {};

test(`OfferList with offer MAIN TYPE render`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <OfferList
            offers={offers}
            className="className"
            onChangeActiveOffer={noop}
            onChangeFavorite={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

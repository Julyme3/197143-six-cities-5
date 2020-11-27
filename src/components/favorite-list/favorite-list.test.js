import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {FavoriteList} from "./favorite-list";
import {offersAdapteToClient as list} from "../../__mocks__/data/offer";

const noop = () => {};

describe(`FavoriteList render`, () => {
  it(`FavoriteList with items`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FavoriteList
              list={list}
              postFavorite={noop}
              updateFavorite={noop}
              onChangeActiveItem={noop}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoriteList without items`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FavoriteList
              list={[]}
              postFavorite={noop}
              updateFavorite={noop}
              onChangeActiveItem={noop}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

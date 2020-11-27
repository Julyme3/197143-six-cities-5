import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {FavoritesScreen} from "./favorites-screen";
import {favoriteOffers} from "../../__mocks__/data/offer";

jest.mock(`../../layouts/main-layout/main-layout`, () => `MainLayout`);
jest.mock(`../favorites-empty/favorites-empty`, () => `FavoritesEmpty`);
jest.mock(`../favorite-list/favorite-list`, () => `FavoriteList`);
jest.mock(`../footer/footer`, () => `Footer`);

const noop = () => {};

describe(`FavoritesScreen render`, () => {
  it(`FavoritesScreen empty render`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FavoritesScreen
              startLoading={noop}
              fetchFavorite={noop}
              isLoading={false}
              favoriteOffers={{}}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoritesScreen with favorites item render`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FavoritesScreen
              startLoading={noop}
              fetchFavorite={noop}
              isLoading={false}
              favoriteOffers={favoriteOffers}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

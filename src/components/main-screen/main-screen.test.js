import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";
import {offersAdapteToClient as offers} from "../../__mocks__/data/offer";

jest.mock(`../../layouts/main-layout/main-layout`, () => `MainLayout`);
jest.mock(`../main-screen-empty/main-screen-empty`, () => `MainScreenEmpty`);
jest.mock(`../list-cities/list-cities`, () => `ListCities`);
jest.mock(`../offer-list-main/offer-list-main`, () => `OfferListMain`);
jest.mock(`../sort/sort`, () => `Sort`);
jest.mock(`../map/map`, () => `Map`);

describe(`MainScreen render`, () => {
  it(`MainScreen empty render`, () => {
    const tree = renderer
      .create(
          <MainScreen
            offers={[]}
            activeCity={`Amsterdam`}
            onChangeActiveItem={()=>{}}
            activeItem={null}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MainScreen with offers render`, () => {
    const tree = renderer
      .create(
          <MainScreen
            offers={offers}
            activeCity={`Amsterdam`}
            onChangeActiveItem={()=>{}}
            activeItem={null}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

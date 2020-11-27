import React from "react";
import renderer from "react-test-renderer";
import {CitiesItem} from "./cities-item";

const noop = () => {};

describe(`CitiesItem render`, () => {
  it(`Current city is active`, () => {
    const tree = renderer
      .create(
          <CitiesItem
            onClickHandler={noop}
            city="Amsterdam"
            activeCity="Amsterdam"
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Current city is not active`, () => {
    const tree = renderer
      .create(
          <CitiesItem
            onClickHandler={noop}
            city="Amsterdam"
            activeCity="Paris"
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

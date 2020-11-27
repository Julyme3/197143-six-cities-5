import React from "react";
import renderer from "react-test-renderer";
import {Sort} from "./sort";

const noop = () => {};

test(`Sort render`, () => {
  const tree = renderer
    .create(
        <Sort
          onClickSort={noop}
          activeSortType="Popular"
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

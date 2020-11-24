import React from "react";
import renderer from "react-test-renderer";
import MainScreenEmpty from "./main-screen-empty";

test(`MainScreenEmpty render`, () => {
  const tree = renderer
    .create(
        <MainScreenEmpty
          activeCity={`Amsterdam`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

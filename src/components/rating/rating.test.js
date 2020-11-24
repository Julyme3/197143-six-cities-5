import React from "react";
import renderer from "react-test-renderer";
import Rating from "./rating";


test(`Rating render`, () => {
  const tree = renderer
    .create(
        <Rating
          rating={3}
          className="className"
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

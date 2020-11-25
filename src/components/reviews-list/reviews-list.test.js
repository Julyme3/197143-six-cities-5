import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import {commentsAdaptedToCLient as reviews} from "../../__mocks__/data/offer";

test(`ReviewsList render`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={reviews}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

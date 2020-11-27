import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form";

const noop = () => {};
test(`ReviewForm render`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          onFieldChange={noop}
          onSubmit={noop}
          isDisabled={false}
          commentValue="Text for user comment"
          ratingValue="4.8"
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

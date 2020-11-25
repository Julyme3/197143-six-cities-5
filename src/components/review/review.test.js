import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";

const review = {
  id: 2,
  date: `2020-11-05T13:38:44.753Z`,
  src: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
  name: `Christina`,
  raiting: 4,
  text: `I stayed here for one night and it was an unpleasant experience.`,
  dateFormated: `November 2020`,
};

test(`Review render`, () => {
  const tree = renderer
    .create(
        <Review
          review={review}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

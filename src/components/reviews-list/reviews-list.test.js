import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";

const reviews = [
  {
    id: 2,
    date: `2020-11-05T13:38:44.753Z`,
    src: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
    name: `Christina`,
    raiting: 4,
    text: `I stayed here for one night and it was an unpleasant experience.`,
    dateFormated: `November 2020`,
  },
  {
    id: 3,
    date: `2020-10-05T13:38:44.753Z`,
    src: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/12.jpg`,
    name: `Julia`,
    raiting: 2.8,
    text: `The room was spacious and clean.`,
    dateFormated: `October 2020`,
  },
];

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

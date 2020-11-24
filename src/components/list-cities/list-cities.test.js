import React from "react";
import renderer from "react-test-renderer";
import {ListCities} from "./list-cities";

export const Cities = [
  `Amsterdam`,
  `Cologne`,
  `Brussels`,
  `Paris`,
  `Hamburg`,
  `Dusseldorf`,
];

jest.mock(`../cities-item/cities-item`, () => `CitiesItem`);

test(`ListCities render`, () => {
  const tree = renderer
    .create(
        <ListCities
          cities={Cities}
          activeCity={Cities[0]}
          setSelectedCity={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

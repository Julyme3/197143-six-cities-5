import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";
import {offersAdapteToClient as offers} from "../../__mocks__/data/offer";

test(`Map render`, () => {
  const tree = renderer
    .create(
        <Map
          offers={offers}
          width={`100px`}
          height={`100px`}
          activeCardId={1}
          cityCoords={[10, 10]}
          zoom={10}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
